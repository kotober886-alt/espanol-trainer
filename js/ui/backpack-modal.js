import { BACKPACK_CATEGORIES } from "../../data/backpack-items.js?v=20260924-backpack-detail51";

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
const BACKPACK_RENDER_VERSION = "20260924-backpack-detail51";
const LOCK_ICON_URL = "assets/images/backpack/lock.svg?v=" + BACKPACK_RENDER_VERSION;

function itemImageUrl(item) {
  const path = String(item && item.image || "");
  if (!path) return "";
  return path + (path.indexOf("?") >= 0 ? "&" : "?") + "v=" + BACKPACK_RENDER_VERSION;
}

function formatUnlockedDate(value) {
  const timestamp = Number(value);
  if (!Number.isFinite(timestamp) || timestamp <= 0) return "";
  try {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(timestamp));
  } catch (error) {
    return "";
  }
}

function lockedVisualMarkup(item, detail) {
  const silhouetteClass = detail
    ? "backpack-silhouette backpack-detail-silhouette"
    : "backpack-silhouette";
  const lockClass = detail ? "backpack-detail-lock" : "backpack-lock";

  return '<canvas class="' + silhouetteClass + '" data-silhouette-src="' +
    escapeHtml(itemImageUrl(item)) + '" aria-hidden="true"></canvas>' +
    '<span class="' + lockClass + '" aria-hidden="true"><img src="' +
    escapeHtml(LOCK_ICON_URL) + '" alt=""></span>';
}

function paintLockedSilhouette(canvas) {
  if (!canvas || canvas.dataset.silhouetteReady === "1") return;
  canvas.dataset.silhouetteReady = "1";

  const source = new Image();
  source.decoding = "async";

  source.onload = function () {
    const size = 256;
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return;

    context.clearRect(0, 0, size, size);

    const naturalWidth = Math.max(1, source.naturalWidth || source.width || size);
    const naturalHeight = Math.max(1, source.naturalHeight || source.height || size);
    const scale = Math.min(size / naturalWidth, size / naturalHeight);
    const width = Math.max(1, Math.round(naturalWidth * scale));
    const height = Math.max(1, Math.round(naturalHeight * scale));
    context.drawImage(
      source,
      Math.round((size - width) / 2),
      Math.round((size - height) / 2),
      width,
      height
    );

    const pixels = context.getImageData(0, 0, size, size);
    const data = pixels.data;
    const total = size * size;
    const visited = new Uint8Array(total);
    const queue = new Int32Array(total);
    let head = 0;
    let tail = 0;

    const borderSamples = [];
    function sample(x, y) {
      const offset = (y * size + x) * 4;
      if (data[offset + 3] < 20) return;
      borderSamples.push([data[offset], data[offset + 1], data[offset + 2]]);
    }

    for (let i = 0; i < size; i += 3) {
      sample(i, 0);
      sample(i, size - 1);
      sample(0, i);
      sample(size - 1, i);
    }

    let background = null;
    if (borderSamples.length >= 6) {
      background = borderSamples.reduce(function (sum, rgb) {
        sum[0] += rgb[0];
        sum[1] += rgb[1];
        sum[2] += rgb[2];
        return sum;
      }, [0, 0, 0]).map(function (value) {
        return value / borderSamples.length;
      });
    }

    function isBackground(index) {
      const offset = index * 4;
      const red = data[offset];
      const green = data[offset + 1];
      const blue = data[offset + 2];
      const alpha = data[offset + 3];

      if (alpha < 10) return true;

      const chromaGreen =
        green > 100 &&
        green - red > 28 &&
        green - blue > 26 &&
        green > red * 1.12 &&
        green > blue * 1.12;

      if (chromaGreen) return true;
      if (!background) return false;

      const dr = red - background[0];
      const dg = green - background[1];
      const db = blue - background[2];
      return (dr * dr + dg * dg + db * db) < 10000;
    }

    function push(index) {
      if (index < 0 || index >= total || visited[index] || !isBackground(index)) return;
      visited[index] = 1;
      queue[tail++] = index;
    }

    for (let x = 0; x < size; x += 1) {
      push(x);
      push((size - 1) * size + x);
    }
    for (let y = 0; y < size; y += 1) {
      push(y * size);
      push(y * size + size - 1);
    }

    while (head < tail) {
      const index = queue[head++];
      const x = index % size;
      const y = Math.floor(index / size);
      if (x > 0) push(index - 1);
      if (x < size - 1) push(index + 1);
      if (y > 0) push(index - size);
      if (y < size - 1) push(index + size);
    }

    for (let index = 0; index < total; index += 1) {
      const offset = index * 4;
      if (visited[index] || data[offset + 3] < 8) {
        data[offset + 3] = 0;
        continue;
      }

      const alpha = data[offset + 3];
      data[offset] = 45;
      data[offset + 1] = 39;
      data[offset + 2] = 72;
      data[offset + 3] = Math.min(235, Math.max(105, Math.round(alpha * 0.88)));
    }

    context.putImageData(pixels, 0, 0);
    canvas.classList.add("is-ready");
  };

  source.onerror = function () {
    canvas.classList.add("is-error");
  };

  source.src = canvas.dataset.silhouetteSrc || "";
}

function hydrateLockedSilhouettes(root) {
  if (!root || !root.querySelectorAll) return;
  root.querySelectorAll("canvas[data-silhouette-src]").forEach(paintLockedSilhouette);
}

function isSecretItem(item) {
  return Boolean(item && item.category === "secrets");
}

function ordinaryRumor(item) {
  return String(item && item.rumor || "").trim();
}

function ordinaryCondition(item) {
  return String(item && item.conditionText || "").trim();
}

export function createBackpackModal(options = {}) {
  const button = options.button || document.getElementById("backpackBtn");
  const getItems = typeof options.getItems === "function"
    ? options.getItems
    : function () { return []; };

  let dialog = null;
  let currentFilter = "all";
  let lootOverlay = null;
  let lootQueue = [];
  let showingLoot = false;
  let detailOverlay = null;

  function categoryMeta(id) {
    return BACKPACK_CATEGORIES.find(function (item) {
      return item.id === id;
    }) || { id: id, title: id };
  }

  function closeItemDetails() {
    if (!detailOverlay) return;
    const overlay = detailOverlay;
    detailOverlay = null;
    overlay.classList.remove("is-visible");
    window.setTimeout(function () {
      overlay.remove();
    }, 160);
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

    dialog.addEventListener("close", closeItemDetails);

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
      const item = getItems().find(function (entry) {
        return entry.id === card.dataset.backpackItem;
      });
      if (!item) return;
      showItemDetails(item);
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
    const secret = isSecretItem(item);
    const title = unlocked ? item.title : LOCKED_TITLE;
    const translation = unlocked ? item.titleRu : LOCKED_TRANSLATION;
    const hint = unlocked
      ? "Открыть трофей"
      : (secret ? "Тайная пасхалка" : "Открыть подсказку");
    const ariaLabel = unlocked
      ? String(item.titleRu || item.title || "") + ". Получено. Открыть подробности."
      : LOCKED_TRANSLATION + ". Открыть подсказку.";

    return '<button class="backpack-card ' + (unlocked ? 'is-unlocked' : 'is-locked') +
      '" data-backpack-item="' + escapeHtml(item.id) +
      '" data-unlocked="' + String(unlocked) +
      '" type="button" aria-label="' + escapeHtml(ariaLabel) + '">' +
        '<span class="backpack-card-visual">' +
          (unlocked
            ? '<img class="backpack-item-image" src="' + escapeHtml(itemImageUrl(item)) + '" alt="" loading="lazy">' +
              '<span class="backpack-card-spark" aria-hidden="true">✦</span>'
            : lockedVisualMarkup(item, false)) +
        '</span>' +
        '<span class="backpack-card-copy">' +
          '<strong>' + escapeHtml(title) + '</strong>' +
          '<span>' + escapeHtml(translation) + '</span>' +
          '<small>' + escapeHtml(hint) + '</small>' +
        '</span>' +
      '</button>';
  }

  function showItemDetails(item) {
    closeItemDetails();

    const unlocked = Boolean(item && item.unlocked);
    const secret = isSecretItem(item);
    const rumor = ordinaryRumor(item);
    const condition = ordinaryCondition(item);
    const receivedDate = formatUnlockedDate(item && item.unlockedAt);
    const title = unlocked ? String(item.title || "") : LOCKED_TITLE;
    const translation = unlocked ? String(item.titleRu || "") : LOCKED_TRANSLATION;

    detailOverlay = document.createElement("div");
    detailOverlay.className = "backpack-detail-overlay";
    detailOverlay.setAttribute("role", "dialog");
    detailOverlay.setAttribute("aria-modal", "true");
    detailOverlay.setAttribute("aria-label", unlocked ? translation : LOCKED_TRANSLATION);

    detailOverlay.innerHTML =
      '<div class="backpack-detail-card ' + (unlocked ? 'is-unlocked' : 'is-locked') + '">' +
        '<button class="backpack-detail-close" type="button" aria-label="Закрыть">×</button>' +
        '<div class="backpack-detail-visual">' +
          (unlocked
            ? '<img class="backpack-detail-image" src="' + escapeHtml(itemImageUrl(item)) + '" alt="' + escapeHtml(translation) + '">'
            : lockedVisualMarkup(item, true)) +
        '</div>' +
        '<div class="backpack-detail-copy">' +
          '<span class="backpack-detail-kicker">' + (unlocked ? 'Трофей получен' : 'Заблокированный трофей') + '</span>' +
          '<h3>' + escapeHtml(title) + '</h3>' +
          '<p class="backpack-detail-translation">' + escapeHtml(translation) + '</p>' +
          (rumor
            ? '<div class="backpack-detail-block backpack-rumor-block">' +
                '<span class="backpack-detail-label">' + (unlocked ? 'Легенда' : 'Слух') + '</span>' +
                '<p class="backpack-rumor-text">' + escapeHtml(rumor) + '</p>' +
              '</div>'
            : '') +
          (unlocked
            ? '<span class="backpack-received-badge">Получено' + (receivedDate ? ' · ' + escapeHtml(receivedDate) : '') + '</span>'
            : (secret
              ? '<span class="backpack-secret-badge">Тайная пасхалка</span>'
              : '<div class="backpack-detail-block backpack-condition-block">' +
                  '<span class="backpack-detail-label">Условие</span>' +
                  '<span class="backpack-condition-badge">' + escapeHtml(condition) + '</span>' +
                '</div>')) +
        '</div>' +
      '</div>';

    detailOverlay.querySelector(".backpack-detail-close").addEventListener("click", closeItemDetails);
    detailOverlay.addEventListener("click", function (event) {
      if (event.target === detailOverlay) closeItemDetails();
    });

    ensureDialog().appendChild(detailOverlay);
    hydrateLockedSilhouettes(detailOverlay);

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
      : BACKPACK_CATEGORIES.filter(function (category) {
          return category.id === currentFilter;
        });

    content.innerHTML = categories.map(function (category) {
      const entries = items.filter(function (item) {
        return item.category === category.id;
      });
      if (!entries.length) return "";

      const unlockedCount = entries.filter(function (item) {
        return item.unlocked;
      }).length;

      return '<section class="backpack-section">' +
        '<div class="backpack-section-head">' +
          '<h3>' + escapeHtml(categoryMeta(category.id).title) + '</h3>' +
          '<span>' + unlockedCount + '/' + entries.length + '</span>' +
        '</div>' +
        '<div class="backpack-grid">' + entries.map(renderCard).join("") + '</div>' +
      '</section>';
    }).join("");

    hydrateLockedSilhouettes(content);
  }

  function updateBadge() {
    if (!button) return;
    const items = getItems();
    const unlocked = items.filter(function (item) {
      return item.unlocked;
    }).length;

    let countNode = button.querySelector("[data-backpack-count]");
    if (!countNode) {
      countNode = document.createElement("span");
      countNode.dataset.backpackCount = "";
      button.appendChild(countNode);
    }

    countNode.textContent = unlocked + "/" + items.length;
    button.setAttribute(
      "aria-label",
      "Открыть Mochila del Gato. Собрано " + unlocked + " из " + items.length + " трофеев."
    );
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
          '<img src="' + escapeHtml(itemImageUrl(item)) + '" alt="' + escapeHtml(item.titleRu) + '">' +
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
