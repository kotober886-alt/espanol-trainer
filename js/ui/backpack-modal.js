import { BACKPACK_CATEGORIES } from "../../data/backpack-items.js?v=20260923-audio-manager37";
import { AudioManager } from "../audio-manager.js?v=20260923-audio-manager37";

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const LOCKED_TITLE = "???";
const LOCKED_TRANSLATION = "Неизвестный трофей";
const SECRET_LOCKED_HINT = "Секретная пасхалка. Никаких подсказок — пробуй неожиданное и исследуй каждый уголок!";

function isSecretItem(item) {
  return Boolean(item && item.category === "secrets");
}

function lockedHint(item) {
  if (isSecretItem(item)) {
    const rumor = String(item && item.rumor || "").trim();
    return rumor || SECRET_LOCKED_HINT;
  }
  return String(item && (item.conditionText || item.condition) || "Продолжай тренироваться, чтобы узнать условие.");
}

export function createBackpackModal(options = {}) {
  const button = options.button || document.getElementById("backpackBtn");
  const getItems = typeof options.getItems === "function" ? options.getItems : function () { return []; };

  let dialog = null;
  let currentFilter = "all";
  let lootOverlay = null;
  let lootQueue = [];
  let showingLoot = false;
  let detailOverlay = null;

  function categoryMeta(id) {
    return BACKPACK_CATEGORIES.find(function (item) { return item.id === id; }) || { id: id, title: id };
  }

  function ensureDialog() {
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.id = "backpackDialog";
    dialog.className = "backpack-dialog";
    dialog.setAttribute("aria-labelledby", "backpackDialogTitle");
    dialog.innerHTML =
      '<div class="backpack-shell">' +
        '<div class="backpack-head">' +
          '<div>' +
            '<span class="backpack-eyebrow">Colección de trofeos</span>' +
            '<h2 id="backpackDialogTitle">Mochila del Gato</h2>' +
            '<p>Трофеи за тренировки, истории, рекорды и секреты кота.</p>' +
          '</div>' +
          '<button class="backpack-close" data-backpack-close type="button" aria-label="Закрыть рюкзак">×</button>' +
        '</div>' +
        '<div class="backpack-filters" data-backpack-filters></div>' +
        '<div class="backpack-content" data-backpack-content></div>' +
      '</div>';

    dialog.querySelector("[data-backpack-close]").addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });

    dialog.querySelector("[data-backpack-filters]").addEventListener("click", function (event) {
      const filterButton = event.target.closest("[data-backpack-filter]");
      if (!filterButton) return;
      currentFilter = filterButton.dataset.backpackFilter || "all";
      render();
    });

    dialog.querySelector("[data-backpack-content]").addEventListener("click", function (event) {
      const card = event.target.closest("[data-backpack-item]");
      if (!card) return;
      const item = getItems().find(function (entry) { return entry.id === card.dataset.backpackItem; });
      if (!item) return;

      if (card.dataset.unlocked === "true") {
        AudioManager.playBackpackItem(item.id, item.title);
        return;
      }

      showLockedDetails(item);
    });

    document.body.appendChild(dialog);
    return dialog;
  }

  function renderFilters() {
    const node = ensureDialog().querySelector("[data-backpack-filters]");
    const filters = [{ id: "all", title: "Все" }].concat(BACKPACK_CATEGORIES);
    node.innerHTML = filters.map(function (filter) {
      return '<button class="backpack-filter' + (currentFilter === filter.id ? ' is-active' : '') +
        '" data-backpack-filter="' + escapeHtml(filter.id) + '" type="button">' +
        escapeHtml(filter.title) + '</button>';
    }).join("");
  }

  function renderCard(item) {
    const unlocked = Boolean(item.unlocked);
    const title = unlocked ? item.title : LOCKED_TITLE;
    const translation = unlocked ? item.titleRu : LOCKED_TRANSLATION;
    const hint = unlocked ? "Нажми для озвучки" : lockedHint(item);
    const ariaLabel = unlocked
      ? String(item.titleRu || item.title || "") + ". Разблокировано. Нажми, чтобы услышать название по-испански."
      : LOCKED_TRANSLATION + ". " + (isSecretItem(item) ? "Секретная пасхалка. Открой подробности." : "Условие получения: " + hint);

    return '<button class="backpack-card ' + (unlocked ? 'is-unlocked' : 'is-locked') +
      '" data-backpack-item="' + escapeHtml(item.id) + '" data-unlocked="' + String(unlocked) +
      '" type="button" aria-label="' + escapeHtml(ariaLabel) + '">' +
        '<span class="backpack-card-visual">' +
          '<img src="' + escapeHtml(item.image) + '?v=20260923-backpack33" alt="" loading="lazy">' +
          (unlocked ? '<span class="backpack-card-spark" aria-hidden="true">✦</span>' : '<span class="backpack-lock" aria-hidden="true">🔒</span>') +
        '</span>' +
        '<span class="backpack-card-copy">' +
          '<strong>' + escapeHtml(title) + '</strong>' +
          '<span>' + escapeHtml(translation) + '</span>' +
          '<small>' + escapeHtml(hint) + '</small>' +
        '</span>' +
      '</button>';
  }

  function closeLockedDetails() {
    if (!detailOverlay) return;
    const overlay = detailOverlay;
    detailOverlay = null;
    overlay.classList.remove("is-visible");
    window.setTimeout(function () {
      overlay.remove();
    }, 160);
  }

  function showLockedDetails(item) {
    closeLockedDetails();

    const secret = isSecretItem(item);
    const rumor = secret ? String(item.rumor || "").trim() : "";
    const hint = lockedHint(item);

    detailOverlay = document.createElement("div");
    detailOverlay.className = "backpack-detail-overlay";
    detailOverlay.setAttribute("role", "dialog");
    detailOverlay.setAttribute("aria-modal", "true");
    detailOverlay.setAttribute("aria-label", LOCKED_TRANSLATION);
    detailOverlay.innerHTML =
      '<div class="backpack-detail-card">' +
        '<button class="backpack-detail-close" type="button" aria-label="Закрыть">×</button>' +
        '<div class="backpack-detail-visual">' +
          '<img src="' + escapeHtml(item.image) + '?v=20260923-backpack33" alt="" aria-hidden="true">' +
          '<span class="backpack-detail-lock" aria-hidden="true">🔒</span>' +
        '</div>' +
        '<div class="backpack-detail-copy">' +
          '<span class="backpack-detail-kicker">' + escapeHtml(secret ? "Секретная пасхалка" : "Заблокированный трофей") + '</span>' +
          '<h3>' + LOCKED_TITLE + '</h3>' +
          '<p class="backpack-detail-translation">' + LOCKED_TRANSLATION + '</p>' +
          (secret
            ? '<div class="backpack-secret-hint"><strong>' + escapeHtml(rumor ? "Слух" : "Тайна") + '</strong><p>' + escapeHtml(hint) + '</p></div>'
            : '<div class="backpack-condition"><strong>Способ получения</strong><p>' + escapeHtml(hint) + '</p></div>') +
        '</div>' +
      '</div>';

    detailOverlay.querySelector(".backpack-detail-close").addEventListener("click", closeLockedDetails);
    detailOverlay.addEventListener("click", function (event) {
      if (event.target === detailOverlay) closeLockedDetails();
    });
    document.body.appendChild(detailOverlay);
    requestAnimationFrame(function () {
      if (detailOverlay) detailOverlay.classList.add("is-visible");
    });
    window.setTimeout(function () {
      const closeButton = detailOverlay && detailOverlay.querySelector(".backpack-detail-close");
      if (closeButton) closeButton.focus();
    }, 180);
  }

  function render() {
    const items = getItems();
    const content = ensureDialog().querySelector("[data-backpack-content]");
    renderFilters();

    const categories = currentFilter === "all"
      ? BACKPACK_CATEGORIES
      : BACKPACK_CATEGORIES.filter(function (category) { return category.id === currentFilter; });

    content.innerHTML = categories.map(function (category) {
      const entries = items.filter(function (item) { return item.category === category.id; });
      if (!entries.length) return "";
      const unlockedCount = entries.filter(function (item) { return item.unlocked; }).length;
      return '<section class="backpack-section">' +
        '<div class="backpack-section-head">' +
          '<h3>' + escapeHtml(categoryMeta(category.id).title) + '</h3>' +
          '<span>' + unlockedCount + '/' + entries.length + '</span>' +
        '</div>' +
        '<div class="backpack-grid">' + entries.map(renderCard).join("") + '</div>' +
      '</section>';
    }).join("");
  }

  function updateBadge() {
    if (!button) return;
    const items = getItems();
    const unlocked = items.filter(function (item) { return item.unlocked; }).length;
    let countNode = button.querySelector("[data-backpack-count]");
    if (!countNode) {
      countNode = document.createElement("span");
      countNode.dataset.backpackCount = "";
      button.appendChild(countNode);
    }
    countNode.textContent = unlocked + "/" + items.length;
    button.setAttribute("aria-label", "Открыть Mochila del Gato. Собрано " + unlocked + " из " + items.length + " трофеев.");
  }

  function open() {
    const node = ensureDialog();
    render();
    if (!node.open) node.showModal();
  }

  function closeLoot() {
    if (!lootOverlay) return;
    lootOverlay.classList.remove("is-visible");
    document.body.classList.remove("backpack-popup-open");
    const old = lootOverlay;
    lootOverlay = null;
    window.setTimeout(function () {
      old.remove();
      showingLoot = false;
      showNextLoot();
    }, 180);
  }

  function showNextLoot() {
    if (showingLoot || !lootQueue.length) return;
    showingLoot = true;
    const item = lootQueue.shift();

    lootOverlay = document.createElement("div");
    lootOverlay.className = "loot-popup-overlay";
    lootOverlay.setAttribute("role", "dialog");
    lootOverlay.setAttribute("aria-modal", "true");
    lootOverlay.setAttribute("aria-label", "Новый трофей: " + item.titleRu);
    lootOverlay.innerHTML =
      '<div class="loot-popup-card">' +
        '<div class="loot-kicker">¡Nuevo Trofeo Desbloqueado!</div>' +
        '<div class="loot-visual">' +
          '<span class="loot-halo" aria-hidden="true"></span>' +
          '<img src="' + escapeHtml(item.image) + '?v=20260923-backpack33" alt="' + escapeHtml(item.titleRu) + '">' +
        '</div>' +
        '<h2>' + escapeHtml(item.title) + '</h2>' +
        '<p>' + escapeHtml(item.titleRu) + '</p>' +
        '<button class="btn btn-primary loot-save" type="button">Guardar en la mochila</button>' +
      '</div>';

    lootOverlay.querySelector(".loot-save").addEventListener("click", closeLoot);
    lootOverlay.addEventListener("click", function (event) {
      if (event.target === lootOverlay) closeLoot();
    });

    document.body.appendChild(lootOverlay);
    document.body.classList.add("backpack-popup-open");
    requestAnimationFrame(function () {
      if (lootOverlay) lootOverlay.classList.add("is-visible");
    });
    window.setTimeout(function () {
      const saveButton = lootOverlay && lootOverlay.querySelector(".loot-save");
      if (saveButton) saveButton.focus();
    }, 220);
  }

  function showUnlockPopup(item) {
    if (!item) return;
    lootQueue.push(item);
    showNextLoot();
  }

  function refresh() {
    updateBadge();
    if (dialog && dialog.open) render();
  }

  if (button) button.addEventListener("click", open);
  updateBadge();

  return Object.freeze({
    open: open,
    render: render,
    refresh: refresh,
    updateBadge: updateBadge,
    showUnlockPopup: showUnlockPopup
  });
}
