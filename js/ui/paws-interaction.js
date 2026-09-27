const QUICK_TAP_WINDOW_MS = 1500;
const REQUIRED_TAPS = 5;
const FRAME_MS = 90;
const BLINK_MIN_MS = 3000;
const BLINK_MAX_MS = 6000;
const BLINK_FRAME_MS = 170;
const WIN_HOLD_MS = 2500;
const PET_FAILSAFE_MS = 4500;
const CACHE_VERSION = "20260927-mascot-blink-racefix1";

const FRAME_PATHS = [
  "assets/images/mascot/cat_idle_1.webp",
  "assets/images/mascot/cat_petting_2.webp",
  "assets/images/mascot/cat_petting_3.webp",
  "assets/images/mascot/cat_petting_4.webp"
];

const FRAME_URLS = FRAME_PATHS.map(function (path) {
  return path + "?v=" + CACHE_VERSION;
});

let blinkTimeoutId = null;
let initRafId = 0;
let initObserver = null;
let pendingOptions = null;
let domReadyListenerBound = false;

function preloadFrames() {
  FRAME_URLS.forEach(function (src) {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    if (typeof image.decode === "function") image.decode().catch(function () {});
  });
}

function spawnHeart(host, burst) {
  const heart = document.createElement("span");
  heart.className = "home-mascot-heart" + (burst ? " is-burst" : "");
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = "♥";

  const left = 32 + Math.random() * 36;
  const drift = -34 + Math.random() * 68;
  const rotate = -16 + Math.random() * 32;
  const delayMs = burst ? Math.random() * 130 : 0;

  heart.style.setProperty("--heart-left", left.toFixed(1) + "%");
  heart.style.setProperty("--heart-drift", drift.toFixed(1) + "px");
  heart.style.setProperty("--heart-rotate", rotate.toFixed(1) + "deg");
  heart.style.setProperty("--heart-delay", Math.round(delayMs) + "ms");

  host.appendChild(heart);
  window.setTimeout(function () {
    heart.remove();
  }, 1150);
}

function spawnHearts(host, count, burst) {
  for (let index = 0; index < count; index += 1) {
    spawnHeart(host, burst);
  }
}

function playSquish(host) {
  host.classList.remove("is-petted");
  void host.offsetWidth;
  host.classList.add("is-petted");
  window.clearTimeout(playSquish.timer);
  playSquish.timer = window.setTimeout(function () {
    host.classList.remove("is-petted");
  }, 180);
}

function playPurr(host) {
  host.classList.remove("is-purring");
  void host.offsetWidth;
  host.classList.add("is-purring");
  window.clearTimeout(playPurr.timer);
  playPurr.timer = window.setTimeout(function () {
    host.classList.remove("is-purring");
  }, 900);
}

function sardineUnlocked(backpackManager) {
  return backpackManager.getItems().some(function (item) {
    return item.id === "item_sardina" && item.unlocked;
  });
}

function wait(ms) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, ms);
  });
}

function stopInitWatcher() {
  if (initRafId) {
    window.cancelAnimationFrame(initRafId);
    initRafId = 0;
  }
  if (initObserver) {
    initObserver.disconnect();
    initObserver = null;
  }
}

function queueMascotInit() {
  if (initRafId) return;
  initRafId = window.requestAnimationFrame(function () {
    initRafId = 0;
    initMascot();
  });
}

function watchForMascotMount() {
  if (!initObserver && document.documentElement) {
    initObserver = new MutationObserver(function () {
      queueMascotInit();
    });
    initObserver.observe(document.documentElement, { childList: true, subtree: true });
  }
  queueMascotInit();
}

function attachPawsInteraction(host, image, options) {
  const backpackManager = options.backpackManager;
  const safeVibrate = options.safeVibrate;

  if (host.dataset.pawsInteractionBound === "true") return true;

  host.dataset.pawsInteractionBound = "true";
  preloadFrames();

  let tapCount = 0;
  let lastTapAt = 0;
  let animationToken = 0;
  let isPetting = false;
  let isBlinking = false;
  let petCleanupTimeoutId = null;

  function setFrame(frameNumber) {
    const src = FRAME_URLS[frameNumber - 1] || FRAME_URLS[0];
    if (image.getAttribute("src") !== src) image.setAttribute("src", src);
  }

  function clearBlinkTimer() {
    if (blinkTimeoutId !== null) {
      window.clearTimeout(blinkTimeoutId);
      blinkTimeoutId = null;
    }
  }

  function clearPetCleanup() {
    if (petCleanupTimeoutId !== null) {
      window.clearTimeout(petCleanupTimeoutId);
      petCleanupTimeoutId = null;
    }
  }

  function scheduleNextBlink() {
    clearBlinkTimer();
    const delay = Math.random() * (BLINK_MAX_MS - BLINK_MIN_MS) + BLINK_MIN_MS;
    blinkTimeoutId = window.setTimeout(function () {
      blinkTimeoutId = null;
      void triggerBlink();
    }, delay);
  }

  async function triggerBlink() {
    if (document.hidden || isPetting) {
      scheduleNextBlink();
      return;
    }

    const token = ++animationToken;
    isBlinking = true;

    try {
      setFrame(2);
      await wait(BLINK_FRAME_MS);
      if (token !== animationToken) return;
      setFrame(1);
      await wait(35);
    } catch (error) {
      console.warn("[PawsInteraction] Blink failed; scheduling recovery", error);
    } finally {
      if (token === animationToken && !isPetting) setFrame(1);
      isBlinking = false;
      scheduleNextBlink();
    }
  }

  async function runFrames(sequence, options = {}) {
    const token = Number(options.token) || ++animationToken;
    const frameMs = Number(options.frameMs) || FRAME_MS;
    const holdMs = Number(options.holdMs) || 0;
    const fadeToIdle = Boolean(options.fadeToIdle);

    host.classList.remove("is-returning");

    try {
      for (let index = 0; index < sequence.length; index += 1) {
        if (token !== animationToken) return false;
        setFrame(sequence[index]);
        if (index < sequence.length - 1) await wait(frameMs);
      }

      if (holdMs > 0) {
        await wait(holdMs);
        if (token !== animationToken) return false;
      }

      if (fadeToIdle) {
        host.classList.add("is-returning");
        await wait(140);
        if (token !== animationToken) return false;
        setFrame(1);
        await wait(40);
      }

      return token === animationToken;
    } finally {
      if (token === animationToken) host.classList.remove("is-returning");
    }
  }

  function finishPet(token) {
    if (token !== animationToken) return;
    clearPetCleanup();
    isPetting = false;
    host.classList.remove("is-returning");
    setFrame(1);
    scheduleNextBlink();
  }

  function armPetFailsafe(token, duration) {
    clearPetCleanup();
    petCleanupTimeoutId = window.setTimeout(function () {
      petCleanupTimeoutId = null;
      if (token !== animationToken) return;

      animationToken += 1;
      isPetting = false;
      isBlinking = false;
      host.classList.remove("is-returning", "is-petted", "is-purring");
      setFrame(1);
      scheduleNextBlink();
    }, Math.max(PET_FAILSAFE_MS, Number(duration) || 0));
  }

  function playPetFrames(sequence, options = {}) {
    clearBlinkTimer();
    const token = ++animationToken;
    const frameMs = Number(options.frameMs) || FRAME_MS;
    const holdMs = Number(options.holdMs) || 0;
    const fadeToIdle = Boolean(options.fadeToIdle);
    const estimatedDuration = sequence.length * frameMs + holdMs + (fadeToIdle ? 300 : 0) + 700;

    isPetting = true;
    isBlinking = false;
    armPetFailsafe(token, estimatedDuration);

    void runFrames(sequence, {
      token: token,
      frameMs: frameMs,
      holdMs: holdMs,
      fadeToIdle: fadeToIdle
    }).catch(function (error) {
      console.warn("[PawsInteraction] Pet animation failed; forcing idle recovery", error);
    }).finally(function () {
      finishPet(token);
    });
  }

  function vibrate() {
    if (typeof safeVibrate === "function") {
      safeVibrate(40);
      return;
    }

    try {
      navigator.vibrate?.(40);
    } catch (error) {}
  }

  function handlePet() {
    const now = Date.now();

    if (!lastTapAt || now - lastTapAt > QUICK_TAP_WINDOW_MS) {
      tapCount = 0;
    }

    lastTapAt = now;
    tapCount += 1;

    playSquish(host);
    vibrate();
    spawnHearts(host, tapCount % 2 === 0 ? 2 : 3, false);

    if (tapCount < REQUIRED_TAPS) {
      playPetFrames([1, 2, 3, 2, 1], { frameMs: FRAME_MS });
      return;
    }

    tapCount = 0;
    lastTapAt = 0;

    spawnHearts(host, 14, true);
    playPurr(host);

    playPetFrames([1, 2, 3, 4], {
      frameMs: FRAME_MS,
      holdMs: WIN_HOLD_MS,
      fadeToIdle: true
    });

    if (!sardineUnlocked(backpackManager)) {
      backpackManager.unlockItem("item_sardina");
    }
  }

  function restartBlinkLoop() {
    if (document.hidden) {
      clearBlinkTimer();
      return;
    }
    if (!isPetting && !isBlinking) setFrame(1);
    scheduleNextBlink();
  }

  host.addEventListener("click", handlePet);
  host.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handlePet();
  });

  document.addEventListener("visibilitychange", restartBlinkLoop);
  window.addEventListener("pageshow", restartBlinkLoop);

  setFrame(1);
  scheduleNextBlink();
  return true;
}

function initMascot() {
  if (!pendingOptions || !pendingOptions.backpackManager) return false;

  const host = document.querySelector(".cat-mascot-container") || document.getElementById("cat-mascot-container");
  const image = document.getElementById("cat-mascot") || (host && host.querySelector("img"));

  if (!host || !image) {
    watchForMascotMount();
    return false;
  }

  stopInitWatcher();
  return attachPawsInteraction(host, image, pendingOptions);
}

export function bindPawsInteraction(options = {}) {
  pendingOptions = options;

  if (document.readyState === "loading") {
    if (!domReadyListenerBound) {
      domReadyListenerBound = true;
      document.addEventListener("DOMContentLoaded", function () {
        domReadyListenerBound = false;
        initMascot();
      }, { once: true });
    }
    return true;
  }

  initMascot();
  return true;
}
