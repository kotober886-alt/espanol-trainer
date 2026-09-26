import { verbsTopic } from "../topics/verbs.js";
import { presentTopic } from "../topics/present.js";

const VERSION = "20260926-verb-wheel-hotfix1";
const FACES = ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos"];
const REGULAR_ENDINGS = {
  ar: ["o", "as", "a", "amos", "áis", "an"],
  er: ["o", "es", "e", "emos", "éis", "en"],
  ir: ["o", "es", "e", "imos", "ís", "en"]
};

let verbs = [];
let selectedId = "";
let fab = null;
let overlay = null;
let search = null;
let chips = null;
let forms = null;
let subtitle = null;
let observer = null;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char];
  });
}

function normalize(value) {
  return String(value ?? "").trim().toLocaleLowerCase("es");
}

function rowsFor(item) {
  if (item && item.table && Array.isArray(item.table.rows)) return item.table.rows;
  if (item && Array.isArray(item.forms)) return item.forms;
  return [];
}

function isIrregular(item) {
  const label = normalize(item && item.gender);
  if (!label) return false;
  if (label.includes("неправиль") || label.includes("→") || label.includes("черед") || label.includes("отклон")) return true;
  if (label.includes("правиль") || label.includes("регуляр")) return false;
  return false;
}

function collectVerbs() {
  const map = new Map();
  [verbsTopic, presentTopic].filter(Boolean).forEach(function (topic) {
    (topic.studyItems || []).forEach(function (item) {
      const infinitive = normalize(item && (item.base || item.word));
      const rows = rowsFor(item);
      if (!infinitive || !/(ar|er|ir)$/.test(infinitive) || rows.length < 6) return;
      if (map.has(infinitive)) return;
      map.set(infinitive, {
        id: infinitive,
        infinitive,
        translation: String(item.tr || (Array.isArray(item.ru) ? item.ru[0] : "") || "").trim(),
        forms: rows.slice(0, 6).map(function (row) { return String(row && row[1] || "").trim(); }),
        irregular: isIrregular(item)
      });
    });
  });
  return Array.from(map.values());
}

function regularForm(infinitive, index) {
  const type = infinitive.slice(-2);
  const endings = REGULAR_ENDINGS[type];
  if (!endings) return "";
  return infinitive.slice(0, -2) + endings[index];
}

function highlightAnomaly(actual, expected, irregular) {
  actual = String(actual || "");
  expected = String(expected || "");
  if (!irregular || !expected || normalize(actual) === normalize(expected)) return escapeHtml(actual);

  let start = 0;
  while (start < actual.length && start < expected.length && actual[start] === expected[start]) start += 1;

  let aEnd = actual.length - 1;
  let eEnd = expected.length - 1;
  while (aEnd >= start && eEnd >= start && actual[aEnd] === expected[eEnd]) {
    aEnd -= 1;
    eEnd -= 1;
  }

  const before = actual.slice(0, start);
  const changed = actual.slice(start, aEnd + 1);
  const after = actual.slice(aEnd + 1);
  if (!changed) return '<span class="es-root">' + escapeHtml(actual) + '</span>';
  return escapeHtml(before) + '<span class="es-root">' + escapeHtml(changed) + '</span>' + escapeHtml(after);
}

function injectStyles() {
  if (document.getElementById("verbWheelStyles")) return;
  const style = document.createElement("style");
  style.id = "verbWheelStyles";
  style.textContent = `
    .verb-wheel-fab{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));z-index:10035;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 17px;border:0;border-radius:999px;background:linear-gradient(135deg,#e63946 0%,#f77f00 100%);color:#fff;font:inherit;font-size:14px;font-weight:900;letter-spacing:.01em;cursor:pointer;box-shadow:0 6px 18px rgba(230,57,70,.4);transition:transform .16s ease,box-shadow .16s ease,opacity .16s ease;touch-action:manipulation}
    .verb-wheel-fab:hover,.verb-wheel-fab:focus-visible{transform:scale(1.05);box-shadow:0 9px 23px rgba(230,57,70,.46);outline:none}
    .verb-wheel-fab:active{transform:scale(1.05)}
    .verb-wheel-fab[hidden]{display:none!important}
    .verb-wheel-fab-icon{font-size:20px;line-height:1}
    .verb-wheel-overlay{position:fixed;inset:0;z-index:10040;display:flex;align-items:flex-end;justify-content:center;background:rgba(34,24,28,.42);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:1;visibility:visible;pointer-events:auto;transition:opacity .18s ease}
    .verb-wheel-overlay[hidden]{display:none!important;visibility:hidden!important;pointer-events:none!important}
    .verb-wheel-sheet{width:min(760px,100%);max-height:min(78vh,760px);display:flex;flex-direction:column;overflow:hidden;border-top:4px solid #f39c12;border-radius:24px 24px 0 0;background:#fff;box-shadow:0 -18px 55px rgba(45,33,29,.22);animation:verb-wheel-rise .22s ease-out}
    .verb-wheel-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:18px 20px 12px}
    .verb-wheel-title{min-width:0}
    .verb-wheel-title h2{margin:0;color:#241d1c;font-size:clamp(21px,4vw,28px);line-height:1.15;letter-spacing:-.02em}
    .verb-wheel-title p{margin:5px 0 0;color:#8a7770;font-size:12px;font-weight:700}
    .verb-wheel-close{width:40px;height:40px;flex:0 0 40px;border:0;border-radius:12px;background:#fff2e7;color:#9b3d33;font:inherit;font-size:26px;line-height:1;cursor:pointer;transition:transform .14s ease,background .14s ease}
    .verb-wheel-close:hover{background:#ffe7d5;transform:scale(1.04)}
    .verb-wheel-search-wrap{padding:0 20px 12px}
    .verb-wheel-search{width:100%;height:42px;padding:0 13px;border:1px solid #eadfd8;border-radius:13px;background:#fffaf6;color:#2d3436;font:inherit;font-size:14px;outline:none;transition:border-color .15s ease,box-shadow .15s ease}
    .verb-wheel-search:focus{border-color:#f39c12;box-shadow:0 0 0 3px rgba(243,156,18,.13)}
    .verb-wheel-body{min-height:0;overflow:auto;padding:0 20px calc(22px + env(safe-area-inset-bottom));overscroll-behavior:contain}
    .verb-wheel-chips{display:flex;flex-wrap:wrap;gap:8px;padding:0 0 15px}
    .verb-wheel-chip{min-height:34px;padding:7px 11px;border:1px solid #e9ecef;border-radius:999px;background:#f8f9fa;color:#2d3436;font:inherit;font-size:13px;font-weight:800;cursor:pointer;transition:transform .14s ease,border-color .14s ease,background .14s ease,color .14s ease,box-shadow .14s ease}
    .verb-wheel-chip:hover{transform:translateY(-1px);border-color:#f2b16d}
    .verb-wheel-chip.active{border-color:transparent;background:linear-gradient(135deg,#e63946,#f77f00);color:#fff;box-shadow:0 5px 13px rgba(230,57,70,.22)}
    .verb-wheel-empty{padding:12px 4px 18px;color:#8a7770;font-size:13px;text-align:center}
    .verb-wheel-forms{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
    .verb-wheel-form{min-width:0;padding:13px 14px;border:1px solid #f1e7d0;border-radius:14px;background:#fdfbf7}
    .verb-wheel-person{display:block;margin-bottom:5px;color:rgba(45,52,54,.52);font-size:12px;font-weight:750;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .verb-wheel-value{display:block;color:#292421;font-size:16px;font-weight:850;line-height:1.35;word-break:break-word}
    .es-root{color:#d63031;font-weight:700;background:rgba(214,48,49,.08);padding:1px 4px;border-radius:4px}
    .verb-wheel-sheet-meta{display:flex;align-items:center;gap:8px;margin:1px 0 12px;color:#8a7770;font-size:12px;font-weight:700}
    .verb-wheel-sheet-meta strong{color:#b34a34;font-size:14px}
    .verb-wheel-sheet-open{overflow:hidden!important}
    @keyframes verb-wheel-rise{from{transform:translateY(28px);opacity:.65}to{transform:translateY(0);opacity:1}}
    @media(max-width:520px){.verb-wheel-fab{right:14px;bottom:max(14px,calc(env(safe-area-inset-bottom) + 10px));min-height:47px;padding:0 14px}.verb-wheel-sheet{max-height:82vh}.verb-wheel-head{padding:16px 16px 10px}.verb-wheel-search-wrap{padding:0 16px 11px}.verb-wheel-body{padding-left:16px;padding-right:16px}.verb-wheel-forms{gap:8px}.verb-wheel-form{padding:11px 12px}.verb-wheel-value{font-size:15px}}
    @media(prefers-reduced-motion:reduce){.verb-wheel-fab,.verb-wheel-close,.verb-wheel-chip,.verb-wheel-sheet{transition:none;animation:none}}
  `;
  document.head.appendChild(style);
}

function ensureUi() {
  if (!fab) {
    fab = document.createElement("button");
    fab.type = "button";
    fab.className = "verb-wheel-fab";
    fab.hidden = true;
    fab.setAttribute("aria-haspopup", "dialog");
    fab.setAttribute("aria-controls", "verbWheelOverlay");
    fab.innerHTML = '<span class="verb-wheel-fab-icon" aria-hidden="true">🪭</span><span>Шпаргалка</span>';
    document.body.appendChild(fab);
  }

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "verbWheelOverlay";
    overlay.className = "verb-wheel-overlay";
    overlay.hidden = true;
    overlay.style.display = "none";
    overlay.style.pointerEvents = "none";
    overlay.style.visibility = "hidden";
    overlay.setAttribute("aria-hidden", "true");
    if ("inert" in overlay) overlay.inert = true;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "verbWheelTitle");
    overlay.innerHTML =
      '<section class="verb-wheel-sheet">' +
        '<header class="verb-wheel-head">' +
          '<div class="verb-wheel-title"><h2 id="verbWheelTitle">La Rueda • Шпаргалка форм</h2><p>Presente de Indicativo</p></div>' +
          '<button class="verb-wheel-close" type="button" data-verb-wheel-close aria-label="Закрыть">×</button>' +
        '</header>' +
        '<div class="verb-wheel-search-wrap"><input class="verb-wheel-search" data-verb-wheel-search type="search" autocomplete="off" placeholder="🔍 Найти глагол..." aria-label="Найти глагол"></div>' +
        '<div class="verb-wheel-body">' +
          '<div class="verb-wheel-chips" data-verb-wheel-chips role="listbox" aria-label="Глаголы"></div>' +
          '<div class="verb-wheel-sheet-meta" data-verb-wheel-meta></div>' +
          '<div class="verb-wheel-forms" data-verb-wheel-forms></div>' +
        '</div>' +
      '</section>';
    document.body.appendChild(overlay);
    search = overlay.querySelector("[data-verb-wheel-search]");
    chips = overlay.querySelector("[data-verb-wheel-chips]");
    forms = overlay.querySelector("[data-verb-wheel-forms]");
    subtitle = overlay.querySelector("[data-verb-wheel-meta]");
  }
}

function setOverlayOpen(isOpen) {
  if (!overlay) return;
  overlay.hidden = !isOpen;
  overlay.style.display = isOpen ? "flex" : "none";
  overlay.style.pointerEvents = isOpen ? "auto" : "none";
  overlay.style.visibility = isOpen ? "visible" : "hidden";
  overlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
  if ("inert" in overlay) overlay.inert = !isOpen;
}

function currentGameVerb() {
  const title = document.querySelector('.cd-game:not([hidden]) .cd-question h2[lang="es"]');
  return normalize(title && title.textContent);
}

function gameIsActive() {
  const game = document.querySelector(".cd-game");
  return Boolean(game && !game.hidden);
}

function syncFab() {
  if (!fab) return;
  const active = gameIsActive();
  const shouldHideFab = !active || Boolean(overlay && !overlay.hidden);
  if (fab.hidden !== shouldHideFab) fab.hidden = shouldHideFab;
  if (!active && overlay && !overlay.hidden) closeSheet(false);
}

function selectedVerb() {
  return verbs.find(function (verb) { return verb.id === selectedId; }) || verbs[0] || null;
}

function renderForms() {
  const verb = selectedVerb();
  if (!verb || !forms || !subtitle) return;

  subtitle.innerHTML = '<strong lang="es">' + escapeHtml(verb.infinitive) + '</strong><span>' + escapeHtml(verb.translation || "без перевода") + '</span>';
  forms.innerHTML = verb.forms.map(function (form, index) {
    const expected = regularForm(verb.infinitive, index);
    return '<article class="verb-wheel-form">' +
      '<span class="verb-wheel-person">' + escapeHtml(FACES[index] || "") + '</span>' +
      '<strong class="verb-wheel-value" lang="es">' + highlightAnomaly(form, expected, verb.irregular) + '</strong>' +
    '</article>';
  }).join("");
}

function renderChips(filter) {
  if (!chips) return;
  const term = normalize(filter);
  const filtered = verbs.filter(function (verb) {
    return !term || normalize(verb.infinitive).includes(term) || normalize(verb.translation).includes(term);
  });

  if (!filtered.length) {
    chips.innerHTML = '<div class="verb-wheel-empty">Ничего не нашлось. Попробуй другой глагол.</div>';
    return;
  }

  chips.innerHTML = filtered.map(function (verb) {
    return '<button class="verb-wheel-chip' + (verb.id === selectedId ? ' active' : '') + '" type="button" role="option" aria-selected="' + (verb.id === selectedId ? 'true' : 'false') + '" data-verb-id="' + escapeHtml(verb.id) + '">' + escapeHtml(verb.infinitive) + '</button>';
  }).join("");
}

function selectVerb(id) {
  if (!verbs.some(function (verb) { return verb.id === id; })) return;
  selectedId = id;
  renderChips(search ? search.value : "");
  renderForms();
}

function openSheet() {
  ensureUi();
  const current = currentGameVerb();
  if (current && verbs.some(function (verb) { return verb.id === current; })) selectedId = current;
  if (!selectedId && verbs.length) selectedId = verbs[0].id;
  if (search) search.value = "";
  renderChips("");
  renderForms();
  setOverlayOpen(true);
  if (!fab.hidden) fab.hidden = true;
  document.documentElement.classList.add("verb-wheel-sheet-open");
  document.body.classList.add("verb-wheel-sheet-open");
  window.setTimeout(function () { if (search) search.focus(); }, 30);
}

function closeSheet(restoreFocus = true) {
  if (!overlay || overlay.hidden) return;
  setOverlayOpen(false);
  document.documentElement.classList.remove("verb-wheel-sheet-open");
  document.body.classList.remove("verb-wheel-sheet-open");
  syncFab();
  if (restoreFocus && fab && !fab.hidden) fab.focus({preventScroll:true});
}

function bindUi() {
  fab.addEventListener("click", openSheet);
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay || event.target.closest("[data-verb-wheel-close]")) {
      closeSheet();
      return;
    }
    const chip = event.target.closest("[data-verb-id]");
    if (chip) selectVerb(chip.dataset.verbId);
  });
  search.addEventListener("input", function () { renderChips(search.value); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay && !overlay.hidden) {
      event.preventDefault();
      event.stopPropagation();
      closeSheet();
    }
  }, true);
}

function observeGame() {
  function attachToGame() {
    const game = document.querySelector(".cd-game");
    if (!game) return false;
    if (observer) observer.disconnect();
    observer = new MutationObserver(syncFab);
    observer.observe(game, {attributes:true, attributeFilter:["hidden"]});
    return true;
  }

  if (!attachToGame()) {
    observer = new MutationObserver(function () {
      if (attachToGame()) syncFab();
    });
    observer.observe(document.body, {subtree:true, childList:true});
  }

  window.addEventListener("conjugation:start", syncFab);
  window.addEventListener("conjugation:close", syncFab);
}

function init() {
  verbs = collectVerbs();
  if (!verbs.length) return;
  selectedId = verbs.some(function (verb) { return verb.id === "tener"; }) ? "tener" : verbs[0].id;
  injectStyles();
  ensureUi();
  bindUi();
  observeGame();
  syncFab();
}

window.VerbWheel = Object.freeze({
  version: VERSION,
  open: openSheet,
  close: closeSheet,
  verbs: function () { return verbs.slice(); }
});

function safeInit() {
  try {
    init();
  } catch (error) {
    console.error("[VerbWheel] initialization failed", error);
    if (overlay) setOverlayOpen(false);
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", safeInit, {once:true});
else safeInit();
