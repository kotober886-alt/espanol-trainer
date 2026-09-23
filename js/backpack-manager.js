import { BACKPACK_ITEMS } from "../data/backpack-items.js?v=20260923-imposter-localization34";
import { createBackpackModal } from "./ui/backpack-modal.js?v=20260923-imposter-localization34";

export const BACKPACK_STORAGE_KEY = "gato_backpack_state";

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
    version: 1,
    unlocks: {},
    meta: {
      activityDays: [],
      completedTopics: [],
      imposterFound: 0
    }
  };
}

function normalizeState(value) {
  const base = defaultState();
  const input = value && typeof value === "object" ? value : {};
  const meta = input.meta && typeof input.meta === "object" ? input.meta : {};

  return {
    version: 1,
    unlocks: input.unlocks && typeof input.unlocks === "object" ? input.unlocks : {},
    meta: {
      activityDays: Array.isArray(meta.activityDays) ? meta.activityDays.filter(Boolean).slice(-90) : [],
      completedTopics: Array.isArray(meta.completedTopics) ? Array.from(new Set(meta.completedTopics.filter(Boolean))) : [],
      imposterFound: Math.max(0, Number(meta.imposterFound) || 0)
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

function totalErrorsFromTrainerStorage() {
  try {
    const trainer = safeParse(localStorage.getItem("espanol_trainer_v3"), {});
    const stats = trainer && trainer.progress && trainer.progress.stats ? trainer.progress.stats : {};
    return Object.values(stats).reduce(function (sum, row) {
      return sum + Math.max(0, Number(row && row.wrong) || 0);
    }, 0);
  } catch (error) {
    return 0;
  }
}

export function createBackpackManager(options = {}) {
  let state = normalizeState(safeParse(localStorage.getItem(BACKPACK_STORAGE_KEY), defaultState()));
  let items = [];

  function mergeItems() {
    items = BACKPACK_ITEMS.map(function (item) {
      const saved = state.unlocks[item.id] || {};
      return Object.assign({}, item, {
        unlocked: Boolean(saved.unlocked),
        unlockedAt: saved.unlockedAt == null ? null : Number(saved.unlockedAt)
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

  function unlockItem(itemId) {
    const item = items.find(function (entry) { return entry.id === itemId; });
    if (!item || item.unlocked) return false;

    item.unlocked = true;
    item.unlockedAt = Date.now();
    saveState();
    ui.refresh();
    ui.showUnlockPopup(Object.assign({}, item));

    window.dispatchEvent(new CustomEvent("backpack:item-unlocked", {
      detail: { item: Object.assign({}, item) }
    }));
    return true;
  }

  function checkErrorMilestones() {
    const totalErrors = totalErrorsFromTrainerStorage();
    ERROR_REWARDS.forEach(function (reward) {
      if (totalErrors >= reward.count) unlockItem(reward.itemId);
    });
    return totalErrors;
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

  function checkTimeRewards(timestamp) {
    const date = new Date(timestamp || Date.now());
    const hour = date.getHours();
    if (hour < 8) unlockItem("item_coffee");
    if (hour >= 23) unlockItem("item_soda");
  }

  function checkStory(data) {
    const item = data && data.item ? data.item : {};
    const reward = STORY_REWARDS[item.id];
    if (!reward) return;
    if (reward.perfect && !data.correct) return;
    unlockItem(reward.itemId);
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
    if ((Number(summary.answered) || 0) <= 0) return;

    unlockItem("item_collar");

    const dayStreak = recordActivityDay(data.timestamp);
    if (dayStreak >= 3) unlockItem("item_keychain");

    const topicCount = recordCompletedTopic(data.topicId);
    if (topicCount >= 5) unlockItem("item_compass");

    checkErrorMilestones();
  }

  function checkConditions(type, data = {}) {
    if (type === "answer") {
      checkErrorMilestones();
      if (data.correct) checkTimeRewards(data.timestamp);
    } else if (type === "practice") {
      checkPractice(data);
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
        imposterFound: state.meta.imposterFound
      }
    };
  }

  window.addEventListener("cat-easter-egg-unlocked", function () {
    unlockItem("item_gold_comb");
  });

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
