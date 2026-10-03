(function () {
  "use strict";

  const BUILD = "20261003-photoflash-pool-rotation2";
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

  function legacyCursorFromSeen(seen, keys) {
    if (!Array.isArray(seen) || !seen.length) return 0;
    const seenSet = new Set(seen.map(String));
    let cursor = 0;
    while (cursor < keys.length && seenSet.has(keys[cursor])) cursor += 1;
    return cursor >= keys.length ? 0 : cursor;
  }

  function readRotationState(storage, storageKey, signature, keys) {
    if (!storage) return { signature, cursor: 0, cycle: 0 };
    try {
      const raw = storage.getItem(storageKey);
      if (!raw) return { signature, cursor: 0, cycle: 0 };
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.signature !== signature) {
        return { signature, cursor: 0, cycle: 0 };
      }

      const savedCursor = Number(parsed.cursor);
      const cursor = Number.isInteger(savedCursor) && savedCursor >= 0 && savedCursor < keys.length
        ? savedCursor
        : legacyCursorFromSeen(parsed.seen, keys);
      const savedCycle = Number(parsed.cycle);
      const cycle = Number.isInteger(savedCycle) && savedCycle >= 0 ? savedCycle : 0;
      return { signature, cursor, cycle };
    } catch (error) {
      return { signature, cursor: 0, cycle: 0 };
    }
  }

  function writeRotationState(storage, storageKey, signature, cursor, keys, cycle) {
    if (!storage) return;
    try {
      const safeCursor = Math.max(0, Math.min(Number(cursor) || 0, keys.length));
      storage.setItem(storageKey, JSON.stringify({
        signature,
        cursor: safeCursor >= keys.length ? 0 : safeCursor,
        cycle: Math.max(0, Number(cycle) || 0),
        seen: keys.slice(0, safeCursor >= keys.length ? 0 : safeCursor),
        updatedAt: Date.now()
      }));
    } catch (error) {}
  }

  function fallbackOrderedSelection(cards, limit) {
    if (limit >= cards.length) return cards.slice();
    return shuffleArray(cards.map((card, index) => ({ card, index })))
      .slice(0, limit)
      .sort((a, b) => a.index - b.index)
      .map(entry => entry.card);
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
    const signature = poolSignature(keys);
    const state = readRotationState(storage, storageKey, signature, keys);
    const start = Math.min(state.cursor, cards.length - 1);
    const end = Math.min(start + limit, cards.length);
    const selected = cards.slice(start, end);

    // Do not mix two cycles in one round. If only the tail of a topic remains,
    // return that tail; the next launch starts a fresh cycle from card #1.
    const exhausted = end >= cards.length;
    const nextCursor = exhausted ? 0 : end;
    const nextCycle = exhausted ? state.cycle + 1 : state.cycle;
    writeRotationState(storage, storageKey, signature, nextCursor, keys, nextCycle);

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
