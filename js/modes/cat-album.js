(function () {
  "use strict";

  const STORAGE_KEY = "cat_album_unlocked";
  const BUILD = "20260927-cat-album-integrity-fix1";

  const CARDS = Object.freeze([
    { id:"cat_01", title:"La Siesta", desc:"Сладкий сон в гамаке", file:"assets/cards/cat_01.webp" },
    { id:"cat_02", title:"El Estudiante", desc:"Учёба среди испанских книг", file:"assets/cards/cat_02.webp" },
    { id:"cat_03", title:"El Flamenco", desc:"Танец с розой и характером", file:"assets/cards/cat_03.webp" },
    { id:"cat_04", title:"El Detective", desc:"Расследование тайны спряжений", file:"assets/cards/cat_04.webp" },
    { id:"cat_05", title:"Churros con Chocolate", desc:"Сладкая награда от шеф-кота", file:"assets/cards/cat_05.webp" },
    { id:"cat_06", title:"La Victoria", desc:"Кубок за блестящий результат", file:"assets/cards/cat_06.webp" },
    { id:"cat_07", title:"La Guitarra", desc:"Испанская мелодия на закате", file:"assets/cards/cat_07.webp" },
    { id:"cat_08", title:"La Paella", desc:"Солнечная паэлья у моря", file:"assets/cards/cat_08.webp" },
    { id:"cat_09", title:"Rey de la Caja", desc:"Король посылки из Мадрида", file:"assets/cards/cat_09.webp" },
    { id:"cat_10", title:"Noche de Fiesta", desc:"Фейерверки над ночной Испанией", file:"assets/cards/cat_10.webp" },
    { id:"cat_11", title:"Capitán del Mar", desc:"Морское приключение к маяку", file:"assets/cards/cat_11.webp" },
    { id:"cat_12", title:"Café con Leche", desc:"Тёплое утро в уличном кафе", file:"assets/cards/cat_12.webp" },
    { id:"cat_13", title:"El Artista", desc:"Рыбка, клубок и немного вдохновения", file:"assets/cards/cat_13.webp" },
    { id:"cat_14", title:"Naranjas de Andalucía", desc:"Лето в апельсиновом саду", file:"assets/cards/cat_14.webp" },
    { id:"cat_15", title:"Don Gato de la Mancha", desc:"Храбрый кот против ветряных мельниц", file:"assets/cards/cat_15.webp" },
    { id:"cat_16", title:"El Abanico", desc:"Озорной взгляд из-за испанского веера", file:"assets/cards/cat_16.webp" },
    { id:"cat_17", title:"Luciérnagas", desc:"Тихая ночь у костра и светлячки", file:"assets/cards/cat_17.webp" },
  ]);

  let albumDialog = null;
  let detailView = null;
  let albumButton = null;

  const esc = value => String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));

  function readUnlocked() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(parsed)) return [];
      const validIds = new Set(CARDS.map(card => card.id));
      return Array.from(new Set(parsed.filter(id => typeof id === "string" && validIds.has(id))));
    } catch (error) {
      console.warn("[CatAlbum] Could not read progress", error);
      return [];
    }
  }

  function writeUnlocked(ids) {
    const validIds = new Set(CARDS.map(card => card.id));
    const clean = Array.from(new Set((Array.isArray(ids) ? ids : []).filter(id => validIds.has(id))));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    } catch (error) {
      console.warn("[CatAlbum] Could not save progress", error);
    }
    updateButton();
    if (albumDialog && albumDialog.open) renderAlbum();
    window.dispatchEvent(new CustomEvent("cat-album:changed", {
      detail: { unlocked: clean.slice(), total: CARDS.length }
    }));
    return clean;
  }

  function getCard(id) {
    return CARDS.find(card => card.id === id) || null;
  }

  function getProgress() {
    const unlocked = readUnlocked();
    return { unlocked, count: unlocked.length, total: CARDS.length };
  }

  function randomFrom(list) {
    return list.length ? list[Math.floor(Math.random() * list.length)] : null;
  }

  function unlockRandomCard() {
    const unlocked = readUnlocked();
    const unlockedSet = new Set(unlocked);
    const locked = CARDS.filter(card => !unlockedSet.has(card.id));

    if (locked.length) {
      const card = randomFrom(locked);
      writeUnlocked(unlocked.concat(card.id));
      return Object.assign({}, card, { isNewReward:true, alreadyInAlbum:false });
    }

    const card = randomFrom(CARDS);
    return card ? Object.assign({}, card, { isNewReward:false, alreadyInAlbum:true }) : null;
  }

  function updateButton() {
    if (!albumButton) albumButton = document.getElementById("catAlbumBtn");
    if (!albumButton) return;
    const progress = getProgress();
    const count = albumButton.querySelector("[data-cat-album-count]");
    if (count) count.textContent = progress.count + "/" + progress.total;
    albumButton.setAttribute(
      "aria-label",
      "Открыть Альбом котика. Собрано " + progress.count + " из " + progress.total + " фото."
    );
    albumButton.title = "Альбом котика · " + progress.count + "/" + progress.total;
  }

  function createHeaderButton() {
    const existing = document.getElementById("catAlbumBtn");
    if (existing) {
      albumButton = existing;
      updateButton();
      return;
    }

    const backpackBtn = document.getElementById("backpackBtn");
    const actions = document.querySelector(".header-actions");
    if (!backpackBtn && !actions) return;

    albumButton = document.createElement("button");
    albumButton.id = "catAlbumBtn";
    albumButton.type = "button";
    albumButton.className = "cat-album-button";
    albumButton.innerHTML =
      '<span class="cat-album-button-label"><span aria-hidden="true">🐱</span> Альбом</span>' +
      '<span class="cat-album-button-count" data-cat-album-count>0/' + CARDS.length + '</span>';
    albumButton.addEventListener("click", openAlbum);

    if (backpackBtn && backpackBtn.parentNode) {
      backpackBtn.parentNode.insertBefore(albumButton, backpackBtn.nextSibling);
    } else {
      actions.appendChild(albumButton);
    }

    updateButton();
  }

  function renderAlbum() {
    if (!albumDialog) return;

    const progress = getProgress();
    const unlocked = new Set(progress.unlocked);
    const counter = albumDialog.querySelector("[data-cat-album-summary]");
    const grid = albumDialog.querySelector("[data-cat-album-grid]");

    if (counter) counter.textContent = "Собрано " + progress.count + " из " + progress.total;
    if (!grid) return;

    grid.innerHTML = CARDS.map(card => {
      if (!unlocked.has(card.id)) {
        return (
          '<article class="cat-card-slot is-locked">' +
            '<div class="cat-card-frame cat-card-frame-locked" aria-label="Фото пока закрыто">' +
              '<div class="cat-album-locked">' +
                '<span class="cat-album-lock" aria-hidden="true">🔒</span>' +
                '<b>Фото пока скрыто</b>' +
                '<small>Пройди Фотовспышку с ≤ 2 ошибками</small>' +
              '</div>' +
            '</div>' +
            '<div class="cat-card-meta">' +
              '<div class="cat-card-title">???</div>' +
              '<div class="cat-card-desc">Новая история котика</div>' +
            '</div>' +
          '</article>'
        );
      }

      return (
        '<article class="cat-card-slot is-unlocked">' +
          '<div class="cat-card-frame">' +
            '<button class="cat-card-open" type="button" data-cat-card="' + esc(card.id) + '" aria-label="Открыть ' + esc(card.title) + '">' +
              '<img src="' + esc(card.file) + '?v=' + BUILD + '" alt="' + esc(card.title) + '" loading="lazy" decoding="async">' +
            '</button>' +
          '</div>' +
          '<div class="cat-card-meta">' +
            '<div class="cat-card-title" lang="es">' + esc(card.title) + '</div>' +
            '<div class="cat-card-desc">' + esc(card.desc) + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  function showDetail(id) {
    const card = getCard(id);
    if (!card || !detailView) return;

    detailView.innerHTML =
      '<div class="cat-album-detail-card">' +
        '<button class="cat-album-detail-close" type="button" data-cat-detail-close aria-label="Закрыть">×</button>' +
        '<img src="' + esc(card.file) + '?v=' + BUILD + '" alt="' + esc(card.title) + '">' +
        '<h3 lang="es">' + esc(card.title) + '</h3>' +
        '<p>' + esc(card.desc) + '</p>' +
      '</div>';
    detailView.hidden = false;
  }

  function hideDetail() {
    if (!detailView) return;
    detailView.hidden = true;
    detailView.innerHTML = "";
  }

  function createDialog() {
    const existing = document.getElementById("catAlbumDialog");
    if (existing) {
      albumDialog = existing;
      detailView = existing.querySelector("[data-cat-album-detail]");
      return;
    }

    albumDialog = document.createElement("dialog");
    albumDialog.id = "catAlbumDialog";
    albumDialog.innerHTML =
      '<div class="cat-album-shell">' +
        '<header class="cat-album-head">' +
          '<div class="cat-album-head-copy">' +
            '<h2>Альбом котика</h2>' +
            '<p data-cat-album-summary>Собрано 0 из ' + CARDS.length + '</p>' +
          '</div>' +
          '<button class="cat-album-close" type="button" data-cat-album-close aria-label="Закрыть">×</button>' +
        '</header>' +
        '<div class="cat-album-grid" data-cat-album-grid></div>' +
        '<div class="cat-album-detail" data-cat-album-detail hidden></div>' +
      '</div>';

    document.body.appendChild(albumDialog);
    detailView = albumDialog.querySelector("[data-cat-album-detail]");

    albumDialog.addEventListener("click", event => {
      if (event.target.closest("[data-cat-album-close]")) {
        albumDialog.close();
        return;
      }
      if (event.target.closest("[data-cat-detail-close]") || event.target === detailView) {
        hideDetail();
        return;
      }
      const cardButton = event.target.closest("[data-cat-card]");
      if (cardButton) showDetail(cardButton.dataset.catCard);
    });

    albumDialog.addEventListener("close", hideDetail);
  }

  function openAlbum() {
    if (!albumDialog) createDialog();
    renderAlbum();
    if (typeof albumDialog.showModal === "function") albumDialog.showModal();
    else albumDialog.setAttribute("open", "");
  }

  function init() {
    createDialog();
    createHeaderButton();
    window.addEventListener("storage", event => {
      if (event.key !== STORAGE_KEY) return;
      updateButton();
      if (albumDialog && albumDialog.open) renderAlbum();
    });
  }

  window.CatAlbum = Object.freeze({
    version: BUILD,
    storageKey: STORAGE_KEY,
    catalog: CARDS,
    getUnlocked: readUnlocked,
    getProgress,
    getCard,
    unlockRandomCard,
    open: openAlbum,
    refresh: function () {
      updateButton();
      renderAlbum();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once:true });
  } else {
    init();
  }
})();