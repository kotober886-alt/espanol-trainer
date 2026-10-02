(function () {
  "use strict";

  const BUILD = "20261002-photoflash-exam-no-preview1";
  const MAX_ERRORS_FOR_REWARD = 2;
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
    normalizeQuestionMode,
    normalizeRoundMode,
    normalizeSpeedMode,
    shuffleArray,
    buildRoundQueue,
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
