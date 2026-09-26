(function () {
  "use strict";

  const BUILD = "20260927-cat-album-code3";
  const MAX_ERRORS_FOR_REWARD = 2;

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

  window.CatFlashRewards = Object.freeze({
    version: BUILD,
    maxErrors: MAX_ERRORS_FOR_REWARD,
    finishRound,
    openAlbum
  });
})();