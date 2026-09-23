const QUICK_TAP_WINDOW_MS = 1500;
const REQUIRED_TAPS = 5;
const FRAME_MS = 90;
const IDLE_BLINK_MS = 5000;
const WIN_HOLD_MS = 2500;
const CACHE_VERSION = "20260923-petting-mascot41";

const FRAME_PATHS = [
  "assets/images/mascot/cat_idle_1.webp",
  "assets/images/mascot/cat_petting_2.webp",
  "assets/images/mascot/cat_petting_3.webp",
  "assets/images/mascot/cat_petting_4.webp"
];

const FRAME_URLS = FRAME_PATHS.map(function (path) {
  return path + "?v=" + CACHE_VERSION;
});

function preloadFrames() {
  FRAME_URLS.forEach(function (src) {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
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
    return item.id === "item_sardine" && item.unlocked;
  });
}

function wait(ms) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, ms);
  });
}

export function bindPawsInteraction(options = {}) {
  const backpackManager = options.backpackManager;
  const safeVibrate = options.safeVibrate;
  const host = document.getElementById("cat-mascot-container");
  const image = document.getElementById("cat-mascot");

  if (!host || !image || !backpackManager) return false;
  if (host.dataset.pawsInteractionBound === "true") return true;

  host.dataset.pawsInteractionBound = "true";
  preloadFrames();

  let tapCount = 0;
  let lastTapAt = 0;
  let lastInteractionAt = Date.now();
  let animationToken = 0;
  let isAnimating = false;
  let idleTimer = 0;

  function setFrame(frameNumber) {
    const src = FRAME_URLS[frameNumber - 1] || FRAME_URLS[0];
    if (image.getAttribute("src") !== src) image.setAttribute("src", src);
  }

  async function runFrames(sequence, options = {}) {
    const token = ++animationToken;
    const frameMs = Number(options.frameMs) || FRAME_MS;
    const holdMs = Number(options.holdMs) || 0;
    const fadeToIdle = Boolean(options.fadeToIdle);

    isAnimating = true;
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
        host.classList.remove("is-returning");
      }

      return true;
    } finally {
      if (token === animationToken) {
        isAnimating = false;
        host.classList.remove("is-returning");
      }
    }
  }

  function scheduleIdleBlink() {
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(async function () {
      const quietFor = Date.now() - lastInteractionAt;

      if (!isAnimating && quietFor >= IDLE_BLINK_MS) {
        await runFrames([2, 1], { frameMs: 100 });
        lastInteractionAt = Date.now();
      }

      scheduleIdleBlink();
    }, IDLE_BLINK_MS);
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
    lastInteractionAt = now;
    tapCount += 1;
    scheduleIdleBlink();

    playSquish(host);
    vibrate();
    spawnHearts(host, tapCount % 2 === 0 ? 2 : 3, false);

    if (tapCount < REQUIRED_TAPS) {
      runFrames([1, 2, 3, 2, 1], { frameMs: FRAME_MS });
      return;
    }

    tapCount = 0;
    lastTapAt = 0;

    spawnHearts(host, 14, true);
    playPurr(host);

    runFrames([1, 2, 3, 4], {
      frameMs: FRAME_MS,
      holdMs: WIN_HOLD_MS,
      fadeToIdle: true
    });

    if (!sardineUnlocked(backpackManager)) {
      backpackManager.unlockItem("item_sardine");
    }
  }

  host.addEventListener("click", handlePet);
  host.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handlePet();
  });

  setFrame(1);
  scheduleIdleBlink();
  return true;
}
