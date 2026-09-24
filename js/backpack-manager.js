import { BACKPACK_ITEMS } from "../data/backpack-items.js?v=20260924-backpack-detail51";
import { createBackpackModal } from "./ui/backpack-modal.js?v=20260924-backpack-detail51";

export const BACKPACK_STORAGE_KEY = "gato_backpack_state";
export const RESOLVED_ERRORS_STORAGE_KEY = "gato_resolved_errors_total";

const STORY_REWARDS = {
  audio_story_cafe_1: { itemId: "item_churros", perfect: true },
  audio_story_weekend_1: { itemId: "item_picnic", perfect: false },
  audio_story_practical_hotel_1: { itemId: "item_hotel_key", perfect: false },
  audio_story_city_directions_1: { itemId: "item_metro_ticket", perfect: false }
};

const ERROR_REWARDS = [
  { count: 10, itemId: "item_fish_cookie" },
  { count: 25, itemId: "item_cacao" },
  { count: 50, itemId: "item_icecream" },
  { count: 70, itemId: "item_cake" },
  { count: 100, itemId: "item_milkshake" }
];

const LEGACY_ITEM_ID_ALIASES = {
  item_abanico: ["abanico_flamenco"],
  item_boina: ["boina_artista"],
  item_paellera: ["paellera_diminuta"],
  item_guitarra: ["guitarra_espanola"],
  item_melomano: ["melomano"],
  item_caja_carton: ["caja_carton"],
  item_raton_mecanico: ["raton_mecanico"],
  item_fenix: ["fenix"],
  item_cojin_siesta: ["cojin_siesta"],
  item_ovillo_fugitivo: ["ovillo_fugitivo"],
  item_cafe_medianoche: ["cafe_medianoche"],
  item_sardina: ["item_sardine"]
};

const NAV_SECRET_TABS = ["home", "words", "practice", "mistakes"];
const NAV_SECRET_WINDOW_MS = 20000;

function safeParse(raw, fallback) {
  try {
    const value = JSON.parse(raw);
    return value && typeof value === "object" ? value : fallback;
  } catch (error) {
    return fallback;
  }
}

function defaultState() {
  return {
    version: 2,
    unlocks: {},
    meta: {
      activityDays: [],
      practiceSessionDays: [],
      completedTopics: [],
      imposterFound: 0,
      perfectSessionsCount: 0,
      learnedWordIds: [],
      totalAudioPlays: 0,
      hadErrors: false
    }
  };
}

function normalizeState(value) {
  const base = defaultState();
  const input = value && typeof value === "object" ? value : {};
  const meta = input.meta && typeof input.meta === "object" ? input.meta : {};

  return {
    version: 2,
    unlocks: input.unlocks && typeof input.unlocks === "object" ? input.unlocks : {},
    meta: {
      activityDays: Array.isArray(meta.activityDays) ? meta.activityDays.filter(Boolean).slice(-90) : [],
      practiceSessionDays: Array.isArray(meta.practiceSessionDays) ? meta.practiceSessionDays.filter(Boolean).slice(-90) : [],
      completedTopics: Array.isArray(meta.completedTopics) ? Array.from(new Set(meta.completedTopics.filter(Boolean))) : [],
      imposterFound: Math.max(0, Number(meta.imposterFound) || 0),
      perfectSessionsCount: Math.max(0, Number(meta.perfectSessionsCount) || 0),
      learnedWordIds: Array.isArray(meta.learnedWordIds) ? Array.from(new Set(meta.learnedWordIds.filter(Boolean))) : [],
      totalAudioPlays: Math.max(0, Number(meta.totalAudioPlays) || 0),
      hadErrors: Boolean(meta.hadErrors)
    }
  };
}

function localDayKey(timestamp) {
  const date = timestamp instanceof Date ? timestamp : new Date(timestamp || Date.now());
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function dayNumber(dayKey) {
  const parts = String(dayKey || "").split("-").map(Number);
  if (parts.length !== 3 || parts.some(function (value) { return !Number.isFinite(value); })) return null;
  return Math.floor(Date.UTC(parts[0], parts[1] - 1, parts[2]) / 86400000);
}

function consecutiveDays(days) {
  const values = Array.from(new Set(days || []))
    .map(function (key) { return { key: key, day: dayNumber(key) }; })
    .filter(function (entry) { return entry.day !== null; })
    .sort(function (a, b) { return b.day - a.day; });

  if (!values.length) return 0;

  let count = 1;
  for (let index = 1; index < values.length; index += 1) {
    if (values[index - 1].day - values[index].day === 1) count += 1;
    else break;
  }
  return count;
}

function normalizedTopicKey(value) {
  return String(value || "").trim().toLowerCase();
}

function isFoodTopic(value) {
  const key = normalizedTopicKey(value);
  return key === "food" || key === "foods" || key === "restaurant" || key === "restaurants" || key === "tapas";
}

function isFoodRestaurantStory(item) {
  if (!item || typeof item !== "object") return false;
  if (isFoodTopic(item.topic)) return true;
  const haystack = [
    item.id, item.storyId, item.topic, item.title, item.q, item.skill
  ].filter(Boolean).join(" ").toLowerCase();
  return /food|foods|restaurant|restaurante|tapas|cafeter|café|cafe/.test(haystack);
}

export function createBackpackManager(options = {}) {
  const storedBackpack = safeParse(localStorage.getItem(BACKPACK_STORAGE_KEY), defaultState());

  try {
    if (localStorage.getItem(RESOLVED_ERRORS_STORAGE_KEY) === null) {
      const legacyResolved = storedBackpack && storedBackpack.meta && Array.isArray(storedBackpack.meta.resolvedErrorIds)
        ? storedBackpack.meta.resolvedErrorIds.length
        : 0;
      if (legacyResolved > 0) {
        localStorage.setItem(RESOLVED_ERRORS_STORAGE_KEY, String(legacyResolved));
      }
    }
  } catch (error) {}

  let state = normalizeState(storedBackpack);
  let items = [];
  let resolvedErrorsInSession = 0;
  let errorStreak = 0;
  let lastAudioWordId = "";
  let sameWordAudioPlays = 0;
  let lastStudyWordKey = "";
  const navVisits = {
    home: [],
    words: [],
    practice: [],
    mistakes: []
  };

  function readResolvedErrorsTotal() {
    try {
      const value = Number.parseInt(localStorage.getItem(RESOLVED_ERRORS_STORAGE_KEY) || "0", 10);
      return Number.isFinite(value) && value > 0 ? value : 0;
    } catch (error) {
      return 0;
    }
  }

  function mergeItems() {
    const resolvedTotal = readResolvedErrorsTotal();

    items = BACKPACK_ITEMS.map(function (item) {
      const legacyIds = LEGACY_ITEM_ID_ALIASES[item.id] || [];
      const legacySaved = legacyIds
        .map(function (legacyId) { return state.unlocks[legacyId]; })
        .find(function (entry) { return entry && entry.unlocked; });
      const saved = state.unlocks[item.id] || legacySaved || {};
      const errorReward = ERROR_REWARDS.find(function (reward) {
        return reward.itemId === item.id;
      });
      const unlocked = errorReward
        ? resolvedTotal >= errorReward.count
        : Boolean(saved.unlocked);

      return Object.assign({}, item, {
        unlocked: unlocked,
        unlockedAt: unlocked && saved.unlockedAt != null ? Number(saved.unlockedAt) : null
      });
    });
  }

  mergeItems();

  const ui = createBackpackModal({
    button: options.button || document.getElementById("backpackBtn"),
    getItems: function () { return items.map(function (item) { return Object.assign({}, item); }); }
  });

  function saveState() {
    const unlocks = {};
    items.forEach(function (item) {
      if (!item.unlocked) return;
      unlocks[item.id] = {
        unlocked: true,
        unlockedAt: item.unlockedAt
      };
    });
    state.unlocks = unlocks;
    localStorage.setItem(BACKPACK_STORAGE_KEY, JSON.stringify(state));
  }

  function unlockItem(itemId, options = {}) {
    const item = items.find(function (entry) { return entry.id === itemId; });
    if (!item || item.unlocked) return false;

    item.unlocked = true;
    item.unlockedAt = Date.now();
    saveState();
    ui.refresh();
    if (!options.silent) ui.showUnlockPopup(Object.assign({}, item));

    window.dispatchEvent(new CustomEvent("backpack:item-unlocked", {
      detail: { item: Object.assign({}, item) }
    }));
    return true;
  }

  function checkErrorMilestones(resolvedTotal) {
    const provided = Number(resolvedTotal);
    const total = Number.isFinite(provided) && provided >= 0
      ? Math.floor(provided)
      : readResolvedErrorsTotal();

    ERROR_REWARDS.forEach(function (reward) {
      if (total >= reward.count) unlockItem(reward.itemId);
    });

    return total;
  }

  function recordActivityDay(timestamp) {
    const key = localDayKey(timestamp);
    if (state.meta.activityDays.indexOf(key) < 0) {
      state.meta.activityDays.push(key);
      state.meta.activityDays = state.meta.activityDays.slice(-90);
      saveState();
    }
    return consecutiveDays(state.meta.activityDays);
  }

  function recordCompletedTopic(topicId) {
    const id = String(topicId || "");
    if (!id || id === "all" || id === "custom" || id === "__mixed" || id === "mistakes") {
      return state.meta.completedTopics.length;
    }
    if (state.meta.completedTopics.indexOf(id) < 0) {
      state.meta.completedTopics.push(id);
      saveState();
    }
    return state.meta.completedTopics.length;
  }

  function checkLegacyTimeRewards(timestamp) {
    const date = new Date(timestamp || Date.now());
    const hour = date.getHours();
    if (hour < 8) unlockItem("item_coffee");
    if (hour >= 23) unlockItem("item_soda");
  }

  function checkCompletionTimeRewards(timestamp) {
    const hour = new Date(timestamp || Date.now()).getHours();
    if (hour >= 14 && hour < 16) unlockItem("item_cojin_siesta");
    if (hour >= 0 && hour < 5) unlockItem("item_cafe_medianoche");
  }

  function checkStory(data) {
    const item = data && data.item ? data.item : {};
    const reward = STORY_REWARDS[item.id];
    if (reward && (!reward.perfect || data.correct)) {
      unlockItem(reward.itemId);
    }
  }

  function checkBlitz(data) {
    const score = Math.max(0, Number(data && data.score) || 0);
    const correct = Math.max(0, Number(data && data.correct) || 0);
    const wrong = Math.max(0, Number(data && data.wrong) || 0);
    const total = Math.max(correct + wrong, Number(data && data.total) || 0);

    if (score >= 10) unlockItem("item_sneakers");
    if (score >= 20) unlockItem("item_gold_watch");
    if (wrong === 0 && total >= 8) unlockItem("item_scout_badge");
  }

  function checkImposter(data) {
    if (!data || !data.correct) return;
    state.meta.imposterFound = Math.max(0, Number(state.meta.imposterFound) || 0) + 1;
    saveState();

    if (state.meta.imposterFound >= 1) unlockItem("item_magnifier");
    if (state.meta.imposterFound >= 10) unlockItem("item_detective_hat");
    if (Number(data.elapsedMs) > 0 && Number(data.elapsedMs) < 3000) {
      unlockItem("item_feather_toy");
    }
  }

  function checkPractice(data) {
    const summary = data && data.summary ? data.summary : {};
    const answered = Math.max(0, Number(summary.answered) || 0);
    const correct = Math.max(0, Number(summary.correct) || 0);
    const wrong = Math.max(0, Number(summary.wrong) || 0);
    if (answered <= 0) return;

    unlockItem("item_collar");

    const dayStreak = recordActivityDay(data.timestamp);
    if (dayStreak >= 3) unlockItem("item_keychain");

    const practiceDay = localDayKey(data.timestamp);
    state.meta.practiceSessionDays.push(practiceDay);
    state.meta.practiceSessionDays = state.meta.practiceSessionDays.slice(-90);
    const dailyPracticeCount = state.meta.practiceSessionDays.filter(function (day) {
      return day === practiceDay;
    }).length;
    saveState();
    if (dailyPracticeCount >= 3) unlockItem("item_paellera");

    const topicCount = recordCompletedTopic(data.topicId);
    if (topicCount >= 5) unlockItem("item_compass");

    const perfect = wrong === 0 && correct === answered;
    state.meta.perfectSessionsCount = perfect
      ? Math.max(0, Number(state.meta.perfectSessionsCount) || 0) + 1
      : 0;
    saveState();
    if (state.meta.perfectSessionsCount >= 5) unlockItem("item_abanico");

    checkCompletionTimeRewards(data.timestamp);
  }

  function checkStudy(data) {
    const wordId = String(data && data.wordId || "").trim();
    if (!wordId) return;
    const topicId = String(data && data.topicId || "").trim();
    const key = (topicId || "unknown") + ":" + wordId;
    if (key !== lastStudyWordKey) {
      lastStudyWordKey = key;
      lastAudioWordId = "";
      sameWordAudioPlays = 0;
    }
    if (state.meta.learnedWordIds.indexOf(key) < 0) {
      state.meta.learnedWordIds.push(key);
      saveState();
    }
    if (state.meta.learnedWordIds.length >= 50) unlockItem("item_boina");
  }

  function checkAudio(data) {
    state.meta.totalAudioPlays = Math.max(0, Number(state.meta.totalAudioPlays) || 0) + 1;
    saveState();
    if (state.meta.totalAudioPlays >= 30) unlockItem("item_guitarra");

    const wordId = data && data.isWordCard ? String(data.wordId || "").trim() : "";
    if (!wordId) {
      lastAudioWordId = "";
      sameWordAudioPlays = 0;
      return;
    }

    if (wordId === lastAudioWordId) sameWordAudioPlays += 1;
    else {
      lastAudioWordId = wordId;
      sameWordAudioPlays = 1;
    }

    if (sameWordAudioPlays >= 5) unlockItem("item_melomano");
  }

  function startErrorSession() {
    resolvedErrorsInSession = 0;
    errorStreak = 0;
  }

  function checkErrorAnswer(data) {
    if (data && data.correct === false && !state.meta.hadErrors) {
      state.meta.hadErrors = true;
      saveState();
    }
    const inErrors = Boolean(data && (data.mode === "mistakes" || data.sessionRound === "mistakes"));
    if (!inErrors) return;
    if (data.correct) {
      errorStreak += 1;
      if (errorStreak >= 5) unlockItem("item_fenix");
    } else {
      errorStreak = 0;
    }
  }

  function checkResolvedError(data) {
    checkErrorMilestones(data && data.resolvedTotal);
    if (!data || !data.resolved) return;
    resolvedErrorsInSession += 1;
    if (resolvedErrorsInSession >= 15) unlockItem("item_raton_mecanico");
  }

  function checkErrorList(data) {
    const count = Math.max(0, Number(data && data.count) || 0);
    if (count > 0) {
      if (!state.meta.hadErrors) {
        state.meta.hadErrors = true;
        saveState();
      }
      return;
    }
    if (state.meta.hadErrors) unlockItem("item_caja_carton");
  }

  function checkNavigation(data) {
    const section = String(data && data.section || "");
    if (NAV_SECRET_TABS.indexOf(section) < 0) return;

    const now = Number(data && data.timestamp) || Date.now();
    const cutoff = now - NAV_SECRET_WINDOW_MS;
    NAV_SECRET_TABS.forEach(function (tab) {
      navVisits[tab] = navVisits[tab].filter(function (timestamp) { return timestamp >= cutoff; });
    });
    navVisits[section].push(now);

    const unlocked = NAV_SECRET_TABS.every(function (tab) {
      return navVisits[tab].length >= 2;
    });
    if (unlocked) {
      unlockItem("item_ovillo_fugitivo");
      NAV_SECRET_TABS.forEach(function (tab) { navVisits[tab] = []; });
    }
  }

  function reconcilePersistentRewards() {
    if (state.meta.perfectSessionsCount >= 5) unlockItem("item_abanico", { silent: true });
    if (state.meta.learnedWordIds.length >= 50) unlockItem("item_boina", { silent: true });
    if (state.meta.totalAudioPlays >= 30) unlockItem("item_guitarra", { silent: true });

    const practiceCounts = state.meta.practiceSessionDays.reduce(function (counts, day) {
      counts[day] = (counts[day] || 0) + 1;
      return counts;
    }, {});
    if (Object.values(practiceCounts).some(function (count) { return count >= 3; })) {
      unlockItem("item_paellera", { silent: true });
    }

    checkErrorMilestones();
  }

  function checkConditions(type, data = {}) {
    if (type === "answer") {
      if (data.correct) checkLegacyTimeRewards(data.timestamp);
      checkErrorAnswer(data);
    } else if (type === "errors") {
      checkResolvedError(data);
    } else if (type === "error-session-start") {
      startErrorSession();
    } else if (type === "error-list") {
      checkErrorList(data);
    } else if (type === "practice") {
      checkPractice(data);
    } else if (type === "study") {
      checkStudy(data);
    } else if (type === "audio") {
      checkAudio(data);
    } else if (type === "navigation") {
      checkNavigation(data);
    } else if (type === "story" || type === "stories") {
      checkStory(data);
    } else if (type === "blitz") {
      checkBlitz(data);
    } else if (type === "imposter") {
      checkImposter(data);
    }
    return getState();
  }

  function getItems() {
    return items.map(function (item) { return Object.assign({}, item); });
  }

  function getState() {
    return {
      items: getItems(),
      unlocked: items.filter(function (item) { return item.unlocked; }).length,
      total: items.length,
      meta: {
        activityDays: state.meta.activityDays.slice(),
        completedTopics: state.meta.completedTopics.slice(),
        imposterFound: state.meta.imposterFound,
        resolvedErrors: readResolvedErrorsTotal(),
        perfectSessionsCount: state.meta.perfectSessionsCount,
        learnedWordsCount: state.meta.learnedWordIds.length,
        totalAudioPlays: state.meta.totalAudioPlays,
        resolvedErrorsInSession: resolvedErrorsInSession,
        errorStreak: errorStreak
      }
    };
  }

  window.addEventListener("cat-easter-egg-unlocked", function () {
    unlockItem("item_gold_comb");
  });

  reconcilePersistentRewards();
  saveState();
  ui.refresh();

  return Object.freeze({
    unlockItem: unlockItem,
    checkConditions: checkConditions,
    getItems: getItems,
    getState: getState,
    open: ui.open,
    refresh: ui.refresh
  });
}
