(function () {
  "use strict";

  const BUILD = "20261002-photoflash-pool-rotation1";
  const MAX_ERRORS_FOR_REWARD = 2;
  const ROTATION_STORAGE_PREFIX = "flash_seen_words_";
  const SPEED_PRESETS = Object.freeze({
    normal: Object.freeze({ previewBonusMs: 2500, answerTimeBonusSec: 5 }),
    sprint: Object.freeze({ previewBonusMs: 0, answerTimeBonusSec: 0 })
  });

  function normalizeQuestionMode(value) {
    return value === "translation_to_word" ? "translation_to_word" : "word_to_translation";
  }

  function normalizeRoundMode(value) {
    return value === "order_then_shuffle" ? "order_then_shuffle" : "order";
  }

  function normalizeSpeedMode(value) {
    return value === "sprint" || value === "hard" || value === "advanced" ? "sprint" : "normal";
  }

  function shuffleArray(values) {
    const result = Array.isArray(values) ? values.slice() : [];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function buildRoundQueue(orderedCards, roundMode, shuffleFn) {
    const cards = Array.isArray(orderedCards) ? orderedCards.slice() : [];
    const shuffle = typeof shuffleFn === "function" ? shuffleFn : shuffleArray;

    if (normalizeRoundMode(roundMode) === "order_then_shuffle") {
      return [
        ...cards.map(card => ({ ...card, phase: 1, showPreview: true, randomDirection: false })),
        ...shuffle([...cards]).map(card => ({ ...card, phase: 2, showPreview: false, randomDirection: true }))
      ];
    }

    return cards.map(card => ({ ...card, phase: 1, showPreview: true, randomDirection: false }));
  }

  function safeTopicId(value) {
    const topicId = String(value || "all").trim() || "all";
    return topicId.replace(/[^a-z0-9_-]+/gi, "_").slice(0, 80) || "all";
  }

  function rotationCardKey(card, index) {
    if (!card || typeof card !== "object") return "index:" + index;
    const id = String(card.id || "").trim();
    const topicId = String(card.topicId || card.topic || "").trim();
    const word = String(card.word || card.term || card.es || "").trim().toLowerCase();
    const translation = String(card.translation || card.tr || card.ru || "").trim().toLowerCase();
    return [topicId, id, word, translation].join("|") || "index:" + index;
  }

  function poolSignature(keys) {
    let hash = 2166136261;
    for (const key of keys) {
      for (let i = 0; i < key.length; i++) {
        hash ^= key.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
      hash ^= 124;
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36) + ":" + keys.length;
  }

  function resolveStorage(providedStorage) {
    if (providedStorage && typeof providedStorage.getItem === "function" && typeof providedStorage.setItem === "function") {
      return providedStorage;
    }
    try {
      if (typeof window !== "undefined" && window.localStorage) return window.localStorage;
    } catch (error) {}
    return null;
  }

  function readRotationState(storage, storageKey, signature) {
    if (!storage) return { signature, seen: [] };
    try {
      const raw = storage.getItem(storageKey);
      if (!raw) return { signature, seen: [] };
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.signature !== signature || !Array.isArray(parsed.seen)) {
        return { signature, seen: [] };
      }
      return { signature, seen: parsed.seen.map(String) };
    } catch (error) {
      return { signature, seen: [] };
    }
  }

  function writeRotationState(storage, storageKey, signature, seen) {
    if (!storage) return;
    try {
      storage.setItem(storageKey, JSON.stringify({
        signature,
        seen: Array.from(new Set(seen.map(String))),
        updatedAt: Date.now()
      }));
    } catch (error) {}
  }

  function fallbackOrderedSelection(cards, limit) {
    if (limit >= cards.length) return cards.slice();
    const start = Math.floor(Math.random() * cards.length);
    const selected = [];
    for (let offset = 0; offset < limit; offset++) {
      selected.push(cards[(start + offset) % cards.length]);
    }
    return selected;
  }

  function selectRoundWords(orderedCards, count, options) {
    const cards = Array.isArray(orderedCards) ? orderedCards.filter(Boolean) : [];
    if (!cards.length) return [];

    const requested = Math.max(1, Math.floor(Number(count) || cards.length));
    const limit = Math.min(requested, cards.length);
    if (limit >= cards.length) return cards.slice();

    const config = options && typeof options === "object" ? options : {};
    const storage = resolveStorage(config.storage);
    if (!storage) return fallbackOrderedSelection(cards, limit);

    const topicId = safeTopicId(config.topicId);
    const storageKey = ROTATION_STORAGE_PREFIX + topicId;
    const keys = cards.map(rotationCardKey);
    const keySet = new Set(keys);
    const signature = poolSignature(keys);
    const state = readRotationState(storage, storageKey, signature);
    let seen = new Set(state.seen.filter(key => keySet.has(key)));

    if (seen.size >= cards.length) seen = new Set();

    const selected = [];
    const selectedKeys = new Set();
    for (let i = 0; i < cards.length && selected.length < limit; i++) {
      const cardKey = keys[i];
      if (seen.has(cardKey)) continue;
      selected.push(cards[i]);
      selectedKeys.add(cardKey);
    }

    let nextSeen;
    if (selected.length < limit) {
      nextSeen = new Set();
      for (let i = 0; i < cards.length && selected.length < limit; i++) {
        const cardKey = keys[i];
        if (selectedKeys.has(cardKey)) continue;
        selected.push(cards[i]);
        selectedKeys.add(cardKey);
        nextSeen.add(cardKey);
      }
    } else {
      nextSeen = new Set(seen);
      selectedKeys.forEach(cardKey => nextSeen.add(cardKey));
    }

    writeRotationState(storage, storageKey, signature, Array.from(nextSeen));
    return selected;
  }

  function answerTimerLimit(baseLimit, speedMode) {
    baseLimit = Number(baseLimit) || 0;
    const timerLimit = normalizeSpeedMode(speedMode) === "normal" ? baseLimit + 5 : baseLimit;
    return timerLimit;
  }

  function previewTimerLimit(baseLimitMs, speedMode) {
    const base = Number(baseLimitMs) || 0;
    return base + SPEED_PRESETS[normalizeSpeedMode(speedMode)].previewBonusMs;
  }

  function finishRound(totalErrors) {
    const errors = Number(totalErrors);
    if (!Number.isFinite(errors) || errors > MAX_ERRORS_FOR_REWARD) return null;
    if (!window.CatAlbum || typeof window.CatAlbum.unlockRandomCard !== "function") return null;
    return window.CatAlbum.unlockRandomCard();
  }

  function openAlbum() {
    if (window.CatAlbum && typeof window.CatAlbum.open === "function") {
      window.CatAlbum.open();
    }
  }

  window.PhotoflashCore = Object.freeze({
    version: BUILD,
    speedPresets: SPEED_PRESETS,
    rotationStoragePrefix: ROTATION_STORAGE_PREFIX,
    normalizeQuestionMode,
    normalizeRoundMode,
    normalizeSpeedMode,
    shuffleArray,
    buildRoundQueue,
    selectRoundWords,
    answerTimerLimit,
    previewTimerLimit
  });

  window.CatFlashRewards = Object.freeze({
    version: BUILD,
    maxErrors: MAX_ERRORS_FOR_REWARD,
    finishRound,
    openAlbum
  });
})();
