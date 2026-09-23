import { BACKPACK_CATEGORIES } from "../../data/backpack-items.js?v=20260923-backpack-resolved36";

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function speakSpanish(text) {
  if (!text || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export function createBackpackModal(options = {}) {
  const button = options.button || document.getElementById("backpackBtn");
  const getItems = typeof options.getItems === "function" ? options.getItems : function () { return []; };

  let dialog = null;
  let currentFilter = "all";
  let lootOverlay = null;
  let lootQueue = [];
  let showingLoot = false;

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
      if (!card || card.dataset.unlocked !== "true") return;
      const item = getItems().find(function (entry) { return entry.id === card.dataset.backpackItem; });
      if (item) speakSpanish(item.title);
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
    const unlockedLabel = unlocked ? "Разблокировано. Нажми, чтобы услышать название по-испански." : item.conditionText;
    return '<button class="backpack-card ' + (unlocked ? 'is-unlocked' : 'is-locked') +
      '" data-backpack-item="' + escapeHtml(item.id) + '" data-unlocked="' + String(unlocked) +
      '" type="button" aria-label="' + escapeHtml(item.titleRu + ". " + unlockedLabel) + '">' +
        '<span class="backpack-card-visual">' +
          '<img src="' + escapeHtml(item.image) + '?v=20260923-backpack33" alt="" loading="lazy">' +
          (unlocked ? '<span class="backpack-card-spark" aria-hidden="true">✦</span>' : '<span class="backpack-lock" aria-hidden="true">🔒</span>') +
        '</span>' +
        '<span class="backpack-card-copy">' +
          '<strong>' + escapeHtml(item.title) + '</strong>' +
          '<span>' + escapeHtml(item.titleRu) + '</span>' +
          (unlocked ? '<small>Нажми для озвучки</small>' : '<small>' + escapeHtml(item.conditionText) + '</small>') +
        '</span>' +
      '</button>';
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
