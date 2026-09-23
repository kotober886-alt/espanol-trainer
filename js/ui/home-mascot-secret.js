const QUICK_TAP_WINDOW_MS = 1500;
const REQUIRED_TAPS = 5;

function spawnHeart(host, burst) {
  const heart = document.createElement("span");
  heart.className = "home-mascot-heart" + (burst ? " is-burst" : "");
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = "♥";

  const left = 32 + Math.random() * 36;
  const drift = -34 + Math.random() * 68;
  const rotate = -16 + Math.random() * 32;
  const delay = burst ? Math.random() * 130 : 0;

  heart.style.setProperty("--heart-left", left.toFixed(1) + "%");
  heart.style.setProperty("--heart-drift", drift.toFixed(1) + "px");
  heart.style.setProperty("--heart-rotate", rotate.toFixed(1) + "deg");
  heart.style.setProperty("--heart-delay", Math.round(delay) + "ms");

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

export function bindHomeMascotSecret(options = {}) {
  const backpackManager = options.backpackManager;
  const safeVibrate = options.safeVibrate;
  const mascot = document.querySelector(".home-hero-mascot");

  if (!mascot || !backpackManager) return false;
  if (mascot.dataset.sardineSecretBound === "true") return true;

  mascot.dataset.sardineSecretBound = "true";
  let tapCount = 0;
  let lastTapAt = 0;

  mascot.addEventListener("click", function () {
    const now = Date.now();
    if (!lastTapAt || now - lastTapAt > QUICK_TAP_WINDOW_MS) {
      tapCount = 0;
    }

    lastTapAt = now;
    tapCount += 1;

    playSquish(mascot);

    if (typeof safeVibrate === "function") {
      safeVibrate(40);
    } else {
      try {
        navigator.vibrate?.(40);
      } catch (error) {}
    }

    spawnHearts(mascot, tapCount % 2 === 0 ? 2 : 3, false);

    if (tapCount < REQUIRED_TAPS) return;

    tapCount = 0;
    lastTapAt = 0;

    if (!sardineUnlocked(backpackManager)) {
      backpackManager.unlockItem("item_sardine");
      return;
    }

    spawnHearts(mascot, 14, true);
    playPurr(mascot);
  });

  return true;
}
