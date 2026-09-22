/**
 * Низкоуровневое хранилище Español Trainer.
 */

export const STORAGE_KEY = "espanol_trainer_v3";
export const STORAGE_VERSION = 3;

const LEGACY_KEYS = {
  stats: "espanol_stats_v1",
  custom: "espanol_custom_v1",
  streak: "espanol_streak_v1",
  successStreak: "successStreak",
  lastScore: "lastScore"
};

function createDefaultState() {
  return {
    version: STORAGE_VERSION,
    progress: {
      stats: {},
      streak: 0,
      lastResult: null
    },
    custom: []
  };
}

function readJson(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
}

function readNumber(key) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === "") return null;
    try {
      const parsed = JSON.parse(raw);
      const value = Number(parsed);
      return Number.isFinite(value) ? value : null;
    } catch (error) {
      const value = Number(raw);
      return Number.isFinite(value) ? value : null;
    }
  } catch (error) {
    return null;
  }
}

function normalizeStats(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const result = {};

  Object.entries(value).forEach(function ([id, row]) {
    if (!id || !row || typeof row !== "object" || Array.isArray(row)) return;

    result[id] = {
      ...row,
      tries: Math.max(0, Number(row.tries) || 0),
      correct: Math.max(0, Number(row.correct) || 0),
      wrong: Math.max(0, Number(row.wrong) || 0)
    };
  });

  return result;
}

function normalizeLastResult(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const accuracy = Number(value.accuracy);
  if (!Number.isFinite(accuracy)) return null;

  return {
    accuracy: Math.max(0, Math.min(100, accuracy)),
    answered: value.answered == null ? null : Math.max(0, Number(value.answered) || 0),
    correct: value.correct == null ? null : Math.max(0, Number(value.correct) || 0),
    wrong: value.wrong == null ? null : Math.max(0, Number(value.wrong) || 0),
    completedAt: typeof value.completedAt === "string" ? value.completedAt : null
  };
}

function normalizeState(value) {
  const fallback = createDefaultState();
  if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;

  const progress = value.progress && typeof value.progress === "object" && !Array.isArray(value.progress)
    ? value.progress
    : {};

  return {
    version: STORAGE_VERSION,
    progress: {
      stats: normalizeStats(progress.stats),
      streak: Math.max(0, Number(progress.streak) || 0),
      lastResult: normalizeLastResult(progress.lastResult)
    },
    custom: Array.isArray(value.custom) ? value.custom.slice() : []
  };
}

function removeLegacyKeys() {
  Object.values(LEGACY_KEYS).forEach(function (key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {}
  });
}

export function migrateLegacyStorage() {
  const state = createDefaultState();

  state.progress.stats = normalizeStats(readJson(LEGACY_KEYS.stats, {}));
  const legacyCustom = readJson(LEGACY_KEYS.custom, []);
  state.custom = Array.isArray(legacyCustom) ? legacyCustom.slice() : [];

  const trainerStreak = readNumber(LEGACY_KEYS.streak);
  const mascotStreak = readNumber(LEGACY_KEYS.successStreak);

  state.progress.streak = Math.max(
    0,
    trainerStreak !== null ? trainerStreak : mascotStreak !== null ? mascotStreak : 0
  );

  const lastScore = readNumber(LEGACY_KEYS.lastScore);
  if (lastScore !== null) {
    state.progress.lastResult = {
      accuracy: Math.max(0, Math.min(100, lastScore)),
      answered: null,
      correct: null,
      wrong: null,
      completedAt: null
    };
  }

  return normalizeState(state);
}

export function save(state) {
  const normalized = normalizeState(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  removeLegacyKeys();
  return normalized;
}

export function load() {
  const existing = readJson(STORAGE_KEY, null);

  if (existing && typeof existing === "object" && !Array.isArray(existing)) {
    const normalized = normalizeState(existing);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    removeLegacyKeys();
    return normalized;
  }

  const migrated = migrateLegacyStorage();
  return save(migrated);
}