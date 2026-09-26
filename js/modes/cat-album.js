(function () {
  "use strict";

  const STORAGE_KEY = "cat_album_unlocked";
  const BUILD = "20260926-cat-album1";

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
    { id:"cat_17", title:"Luciérnagas", desc:"Тихая ночь у костра и светлячки", file:"assets/cards/cat_17.webp" }
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
      const valid = new Set(CARDS.map(card => card.id));
      return Array.from(new Set(parsed.filter(id => typeof id === "string" && valid.has(id))));
    } catch (error) {
      console.warn("[CatAlbum] Could not read progress", error);
      return [];
    }
  }

  function writeUnlocked(ids) {
    const valid = new Set(CARDS.map(card => card.id));
    const clean = Array.from(new Set((Array.isArray(ids) ? ids : []).filter(id => valid.has(id))));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    } catch (error) {
      console.warn("[CatAlbum] Could not save progress", error);
    }
    updateButton();
    if (albumDialog && albumDialog.open) renderAlbum();
    window.dispatchEvent(new CustomEvent("cat-album:changed", { detail:{ unlocked:clean.slice(), total:CARDS.length } }));
    return clean;
  }

  function getCard(id) {
    return CARDS.find(card => card.id === id) || null;
  }

  function getProgress() {
    const unlocked = readUnlocked();
    return { unlocked, count:unlocked.length, total:CARDS.length };
  }

  function randomFrom(list) {
    return list[Math.floor(Math.random() * list.length)] || null;
  }

  function awardPhotoflash(totalErrors) {
    if (Number(totalErrors) > 2) return null;
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

  function injectStyles() {
    if (document.getElementById("catAlbumStyles")) return;
    const style = document.createElement("style");
    style.id = "catAlbumStyles";
    style.textContent = `
      .cat-album-button{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:6px 10px;border:0;border-radius:12px;background:rgba(255,255,255,.68);color:inherit;font:inherit;font-weight:850;cursor:pointer;box-shadow:none;transition:transform .15s ease,background .2s ease}
      .cat-album-button:hover{background:rgba(255,255,255,.92)}
      .cat-album-button:active{transform:scale(.96)}
      .cat-album-button-icon{font-size:18px;line-height:1}
      .cat-album-button-count{font-size:12px;white-space:nowrap}
      #catAlbumDialog{width:calc(100vw - 24px);max-width:1180px;height:calc(100vh - 24px);max-height:920px;margin:auto;padding:0;border:0;border-radius:26px;background:#fff;color:#17153b;box-shadow:0 30px 90px rgba(20,17,46,.36);overflow:hidden}
      #catAlbumDialog::backdrop{background:rgba(20,17,46,.64);backdrop-filter:blur(7px)}
      .cat-album-shell{height:100%;display:flex;flex-direction:column;background:linear-gradient(180deg,#fffaf2 0,#fff 28%)}
      .cat-album-head{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:20px 22px 16px;border-bottom:1px solid #eee8df}
      .cat-album-head-copy h2{margin:0;font-size:clamp(26px,4vw,38px);letter-spacing:-.04em}
      .cat-album-head-copy p{margin:5px 0 0;color:#716b80;font-weight:750}
      .cat-album-close{flex:0 0 auto;width:44px;height:44px;border:0;border-radius:14px;background:#f2eff7;color:#514b68;font-size:28px;cursor:pointer}
      .cat-album-grid{flex:1;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:20px;padding:22px;align-content:start}
      .cat-album-item{min-width:0}
      .cat-album-photo{width:100%;aspect-ratio:4/5;display:grid;place-items:center;border:0;border-radius:20px;background:transparent;padding:0;cursor:pointer}
      .cat-album-photo img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 11px 16px rgba(38,31,54,.15));transition:transform .18s ease}
      .cat-album-photo:hover img{transform:translateY(-3px) rotate(-1deg)}
      .cat-album-copy{padding:4px 8px 0;text-align:center}
      .cat-album-copy strong{display:block;font-size:15px}
      .cat-album-copy span{display:block;margin-top:3px;color:#7d768a;font-size:12px;line-height:1.35}
      .cat-album-item.is-locked .cat-album-photo{background:linear-gradient(145deg,#e6e4e9,#c9c6cf);box-shadow:inset 0 0 0 1px rgba(255,255,255,.48)}
      .cat-album-locked{display:grid;place-items:center;gap:8px;padding:16px;color:#625d6d;text-align:center}
      .cat-album-lock{font-size:34px;filter:grayscale(1)}
      .cat-album-locked b{font-size:13px}
      .cat-album-locked small{max-width:150px;font-size:11px;line-height:1.35}
      .cat-album-detail{position:absolute;inset:0;z-index:3;display:grid;place-items:center;padding:22px;background:rgba(21,18,36,.78);backdrop-filter:blur(8px)}
      .cat-album-detail[hidden]{display:none!important}
      .cat-album-detail-card{position:relative;width:min(520px,92vw);max-height:92vh;display:grid;justify-items:center;gap:10px;padding:18px;border-radius:24px;background:#fff;box-shadow:0 24px 80px rgba(0,0,0,.36)}
      .cat-album-detail-card img{max-width:100%;max-height:72vh;object-fit:contain}
      .cat-album-detail-card h3{margin:0;font-size:24px}
      .cat-album-detail-card p{margin:0;color:#716b80;text-align:center}
      .cat-album-detail-close{position:absolute;top:10px;right:10px;width:40px;height:40px;border:0;border-radius:12px;background:#f2eff7;font-size:24px;cursor:pointer}
      @media(max-width:700px){
        #catAlbumDialog{width:100vw;height:100vh;max-height:none;border-radius:0}
        .cat-album-head{padding:16px}
        .cat-album-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:13px;padding:14px}
        .cat-album-copy{padding-inline:2px}
        .cat-album-button{padding:6px 8px}
        .cat-album-button-count{font-size:11px}
      }
    `;
    document.head.appendChild(style);
  }

  function updateButton() {
    if (!albumButton) albumButton = document.getElementById("catAlbumBtn");
    if (!albumButton) return;
    const progress = getProgress();
    const count = albumButton.querySelector("[data-cat-album-count]");
    if (count) count.textContent = progress.count + "/" + progress.total;
    albumButton.setAttribute("aria-label", "Открыть Альбом котика. Собрано " + progress.count + " из " + progress.total + " фото.");
    albumButton.title = "Альбом котика · " + progress.count + "/" + progress.total;
  }

  function createHeaderButton() {
    if (document.getElementById("catAlbumBtn")) {
      albumButton = document.getElementById("catAlbumBtn");
      updateButton();
      return;
    }
    const anchor = document.getElementById("backpackBtn") || document.querySelector(".header-actions");
    if (!anchor) return;
    albumButton = document.createElement("button");
    albumButton.id = "catAlbumBtn";
    albumButton.type = "button";
    albumButton.className = "cat-album-button";
    albumButton.innerHTML = '<span class="cat-album-button-icon" aria-hidden="true">📷</span><span class="cat-album-button-count" data-cat-album-count>0/' + CARDS.length + '</span>';
    albumButton.addEventListener("click", openAlbum);
    if (anchor.id === "backpackBtn" && anchor.parentNode) anchor.parentNode.insertBefore(albumButton, anchor.nextSibling);
    else anchor.appendChild(albumButton);
    updateButton();
  }

  function renderAlbum() {
    if (!albumDialog) return;
    const progress = getProgress();
    const unlocked = new Set(progress.unlocked);
    const counter = albumDialog.querySelector("[data-cat-album-summary]");
    if (counter) counter.textContent = "Собрано " + progress.count + " из " + progress.total;
    const grid = albumDialog.querySelector("[data-cat-album-grid]");
    if (!grid) return;
    grid.innerHTML = CARDS.map(card => {
      if (!unlocked.has(card.id)) {
        return '<article class="cat-album-item is-locked"><div class="cat-album-photo" aria-label="Фото пока закрыто"><div class="cat-album-locked"><span class="cat-album-lock">🔒</span><b>Фото пока скрыто</b><small>Пройди Фотовспышку с ≤ 2 ошибками</small></div></div><div class="cat-album-copy"><strong>???</strong><span>Новая история котика</span></div></article>';
      }
      return '<article class="cat-album-item"><button class="cat-album-photo" type="button" data-cat-card="' + esc(card.id) + '" aria-label="Открыть ' + esc(card.title) + '"><img src="' + esc(card.file) + '?v=' + BUILD + '" alt="' + esc(card.title) + '"></button><div class="cat-album-copy"><strong lang="es">' + esc(card.title) + '</strong><span>' + esc(card.desc) + '</span></div></article>';
    }).join("");
  }

  function showDetail(id) {
    const card = getCard(id);
    if (!card || !detailView) return;
    detailView.innerHTML = '<div class="cat-album-detail-card"><button class="cat-album-detail-close" type="button" data-cat-detail-close aria-label="Закрыть">×</button><img src="' + esc(card.file) + '?v=' + BUILD + '" alt="' + esc(card.title) + '"><h3 lang="es">' + esc(card.title) + '</h3><p>' + esc(card.desc) + '</p></div>';
    detailView.hidden = false;
  }

  function hideDetail() {
    if (detailView) detailView.hidden = true;
  }

  function createDialog() {
    if (document.getElementById("catAlbumDialog")) {
      albumDialog = document.getElementById("catAlbumDialog");
      detailView = albumDialog.querySelector("[data-cat-album-detail]");
      return;
    }
    albumDialog = document.createElement("dialog");
    albumDialog.id = "catAlbumDialog";
    albumDialog.innerHTML = '<div class="cat-album-shell"><header class="cat-album-head"><div class="cat-album-head-copy"><h2>📖 Альбом котика</h2><p data-cat-album-summary>Собрано 0 из ' + CARDS.length + '</p></div><button class="cat-album-close" type="button" data-cat-album-close aria-label="Закрыть">×</button></header><div class="cat-album-grid" data-cat-album-grid></div><div class="cat-album-detail" data-cat-album-detail hidden></div></div>';
    document.body.appendChild(albumDialog);
    detailView = albumDialog.querySelector("[data-cat-album-detail]");
    albumDialog.addEventListener("click", event => {
      if (event.target.closest("[data-cat-album-close]")) return albumDialog.close();
      if (event.target.closest("[data-cat-detail-close]") || event.target === detailView) return hideDetail();
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
    injectStyles();
    createDialog();
    createHeaderButton();
    window.addEventListener("storage", event => {
      if (event.key === STORAGE_KEY) {
        updateButton();
        if (albumDialog && albumDialog.open) renderAlbum();
      }
    });
  }

  window.CatAlbum = Object.freeze({
    version: BUILD,
    storageKey: STORAGE_KEY,
    catalog: CARDS,
    getUnlocked: readUnlocked,
    getProgress,
    getCard,
    awardPhotoflash,
    open: openAlbum,
    refresh: function(){ updateButton(); renderAlbum(); }
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once:true });
  else init();
})();