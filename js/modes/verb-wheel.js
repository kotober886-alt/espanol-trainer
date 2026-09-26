const VERSION = "20260926-verb-wheel-dropdown1";
const VERB_FILTER_KEY = "conjugation_verb_filter";
const FACES = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

const VERBS = Object.freeze([
  { id: "ser", infinitive: "ser", translation: "быть", forms: ["soy", "eres", "es", "somos", "sois", "son"] },
  { id: "estar", infinitive: "estar", translation: "быть, находиться", forms: ["estoy", "estás", "está", "estamos", "estáis", "están"] },
  { id: "ir", infinitive: "ir", translation: "идти, ехать", forms: ["voy", "vas", "va", "vamos", "vais", "van"] },
  { id: "tener", infinitive: "tener", translation: "иметь", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] },
  { id: "hacer", infinitive: "hacer", translation: "делать", forms: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"] },
  { id: "poder", infinitive: "poder", translation: "мочь", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
  { id: "querer", infinitive: "querer", translation: "хотеть", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
  { id: "decir", infinitive: "decir", translation: "говорить, сказать", forms: ["digo", "dices", "dice", "decimos", "decís", "dicen"] },
  { id: "saber", infinitive: "saber", translation: "знать", forms: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"] },
  { id: "poner", infinitive: "poner", translation: "класть, ставить", forms: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"] },
  { id: "salir", infinitive: "salir", translation: "выходить", forms: ["salgo", "sales", "sale", "salimos", "salís", "salen"] },
  { id: "venir", infinitive: "venir", translation: "приходить", forms: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"] },
  { id: "ver", infinitive: "ver", translation: "видеть", forms: ["veo", "ves", "ve", "vemos", "veis", "ven"] },
  { id: "dar", infinitive: "dar", translation: "давать", forms: ["doy", "das", "da", "damos", "dais", "dan"] },
  { id: "pedir", infinitive: "pedir", translation: "просить, заказывать", forms: ["pido", "pides", "pide", "pedimos", "pedís", "piden"] }
]);

let selectedId = "tener";
let fab = null;
let overlay = null;
let select = null;
let forms = null;
let observer = null;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char];
  });
}

function normalize(value) {
  return String(value ?? "").trim().toLocaleLowerCase("es");
}

function readVerbFilter() {
  try {
    return localStorage.getItem(VERB_FILTER_KEY) || "regular";
  } catch (error) {
    return "regular";
  }
}

function selectedVerb() {
  return VERBS.find(function (verb) { return verb.id === selectedId; }) || VERBS[3];
}

function injectStyles() {
  if (document.getElementById("verbWheelStyles")) return;
  const style = document.createElement("style");
  style.id = "verbWheelStyles";
  style.textContent = '\n' +
    '.verb-wheel-fab{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));z-index:10035;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 17px;border:0;border-radius:999px;background:linear-gradient(135deg,#e63946 0%,#f77f00 100%);color:#fff;font:inherit;font-size:14px;font-weight:900;letter-spacing:.01em;cursor:pointer;box-shadow:0 6px 18px rgba(230,57,70,.4);transition:transform .16s ease,box-shadow .16s ease,opacity .16s ease;touch-action:manipulation}\n' +
    '.verb-wheel-fab:hover,.verb-wheel-fab:focus-visible{transform:scale(1.05);box-shadow:0 9px 23px rgba(230,57,70,.46);outline:none}\n' +
    '.verb-wheel-fab:active{transform:scale(1.05)}\n' +
    '.verb-wheel-fab[hidden]{display:none!important}\n' +
    '.verb-wheel-fab-icon{font-size:20px;line-height:1}\n' +
    '.verb-wheel-overlay{position:fixed;inset:0;z-index:10040;display:flex;align-items:flex-end;justify-content:center;background:rgba(34,24,28,.42);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:1;visibility:visible;pointer-events:auto}\n' +
    '.verb-wheel-overlay[hidden]{display:none!important;visibility:hidden!important;pointer-events:none!important}\n' +
    '.verb-wheel-sheet{width:min(760px,100%);max-height:calc(100dvh - env(safe-area-inset-top));display:flex;flex-direction:column;overflow:hidden;border-top:4px solid #f39c12;border-radius:24px 24px 0 0;background:#fff;box-shadow:0 -18px 55px rgba(45,33,29,.22);animation:verb-wheel-rise .22s ease-out}\n' +
    '.verb-wheel-head{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:16px 20px 10px}\n' +
    '.verb-wheel-title{min-width:0}\n' +
    '.verb-wheel-title h2{margin:0;color:#241d1c;font-size:clamp(20px,4vw,27px);line-height:1.15;letter-spacing:-.02em}\n' +
    '.verb-wheel-title p{margin:4px 0 0;color:#8a7770;font-size:12px;font-weight:700}\n' +
    '.verb-wheel-close{width:40px;height:40px;flex:0 0 40px;border:0;border-radius:12px;background:#fff2e7;color:#9b3d33;font:inherit;font-size:26px;line-height:1;cursor:pointer}\n' +
    '.verb-wheel-current{flex:0 0 auto;padding:0 20px calc(18px + env(safe-area-inset-bottom))}\n' +
    '.verb-wheel-select-wrap{position:relative;margin-bottom:10px}\n' +
    '.verb-wheel-select-wrap::after{content:"▾";position:absolute;right:15px;top:50%;transform:translateY(-52%);color:#b13f31;font-size:18px;font-weight:900;pointer-events:none}\n' +
    '.verb-wheel-select{width:100%;height:46px;padding:0 44px 0 14px;border:1px solid #e8d8ca;border-radius:14px;background:linear-gradient(145deg,#fff9f2,#fff);color:#2d2927;font:inherit;font-size:14px;font-weight:850;outline:none;cursor:pointer;appearance:none;-webkit-appearance:none;box-shadow:0 7px 18px rgba(123,76,43,.07)}\n' +
    '.verb-wheel-select:focus{border-color:#f39c12;box-shadow:0 0 0 3px rgba(243,156,18,.14)}\n' +
    '.verb-wheel-current-card{padding:11px;border:1px solid #f0dccb;border-radius:18px;background:linear-gradient(145deg,#fff9f2,#fff);box-shadow:0 9px 24px rgba(123,76,43,.08)}\n' +
    '.verb-wheel-forms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n' +
    '.verb-wheel-form{min-width:0;padding:9px 8px;border:1px solid #f1e7d0;border-radius:12px;background:#fff}\n' +
    '.verb-wheel-person{display:block;margin-bottom:3px;color:rgba(45,52,54,.54);font-size:10px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n' +
    '.verb-wheel-value{display:block;color:#292421;font-size:15px;font-weight:900;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n' +
    '.verb-wheel-sheet-open{overflow:hidden!important}\n' +
    '@keyframes verb-wheel-rise{from{transform:translateY(28px);opacity:.65}to{transform:translateY(0);opacity:1}}\n' +
    '@media(max-width:520px){.verb-wheel-sheet{max-height:calc(100dvh - env(safe-area-inset-top))}.verb-wheel-head{padding:12px 14px 8px}.verb-wheel-current{padding:0 14px calc(14px + env(safe-area-inset-bottom))}.verb-wheel-select{height:44px;font-size:13px}.verb-wheel-current-card{padding:10px}.verb-wheel-forms{gap:6px}.verb-wheel-form{padding:7px 6px}.verb-wheel-person{font-size:9px}.verb-wheel-value{font-size:13px}.verb-wheel-fab{right:14px;bottom:max(14px,calc(env(safe-area-inset-bottom) + 10px));min-height:47px;padding:0 14px}}\n' +
    '@media(max-width:370px){.verb-wheel-title h2{font-size:18px}.verb-wheel-select{height:42px;font-size:12px}.verb-wheel-value{font-size:12px}.verb-wheel-form{padding:7px 4px}}\n' +
    '@media(prefers-reduced-motion:reduce){.verb-wheel-fab,.verb-wheel-sheet{transition:none;animation:none}}\n';
  document.head.appendChild(style);
}

function ensureUi() {
  if (!fab) {
    fab = document.createElement("button");
    fab.type = "button";
    fab.className = "verb-wheel-fab";
    fab.hidden = true;
    fab.style.display = "none";
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
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "verbWheelTitle");
    if ("inert" in overlay) overlay.inert = true;

    overlay.innerHTML =
      '<section class="verb-wheel-sheet">' +
        '<header class="verb-wheel-head">' +
          '<div class="verb-wheel-title"><h2 id="verbWheelTitle">La Rueda • Шпаргалка форм</h2><p>Presente de Indicativo</p></div>' +
          '<button class="verb-wheel-close" type="button" data-verb-wheel-close aria-label="Закрыть">×</button>' +
        '</header>' +
        '<div class="verb-wheel-current">' +
          '<div class="verb-wheel-select-wrap">' +
            '<select class="verb-wheel-select" data-verb-wheel-select aria-label="Выбрать глагол"></select>' +
          '</div>' +
          '<section class="verb-wheel-current-card" aria-live="polite">' +
            '<div class="verb-wheel-forms" data-verb-wheel-forms></div>' +
          '</section>' +
        '</div>' +
      '</section>';

    document.body.appendChild(overlay);
    select = overlay.querySelector("[data-verb-wheel-select]");
    forms = overlay.querySelector("[data-verb-wheel-forms]");
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

function syncFab(filterOverride) {
  if (!fab) return;
  const active = gameIsActive();
  const filter = filterOverride || readVerbFilter();
  const regularOnly = filter === "regular";
  const sheetOpen = Boolean(overlay && !overlay.hidden);
  const shouldShow = active && !regularOnly && !sheetOpen;

  fab.hidden = !shouldShow;
  fab.style.display = shouldShow ? "inline-flex" : "none";
  fab.setAttribute("aria-hidden", shouldShow ? "false" : "true");

  if (!active && overlay && !overlay.hidden) closeSheet(false);
}

function renderSelect() {
  if (!select) return;
  const sorted = VERBS.slice().sort(function (a, b) {
    return a.infinitive.localeCompare(b.infinitive, "es");
  });

  select.innerHTML = sorted.map(function (verb) {
    return '<option value="' + escapeHtml(verb.id) + '">' +
      escapeHtml(verb.infinitive + " — " + verb.translation) +
    '</option>';
  }).join("");
  select.value = selectedId;
}

function renderCurrent() {
  const verb = selectedVerb();
  if (!verb || !forms) return;

  forms.innerHTML = verb.forms.map(function (form, index) {
    return '<article class="verb-wheel-form">' +
      '<span class="verb-wheel-person">' + escapeHtml(FACES[index]) + '</span>' +
      '<strong class="verb-wheel-value" lang="es">' + escapeHtml(form) + '</strong>' +
    '</article>';
  }).join("");
}

function selectVerb(id) {
  if (!VERBS.some(function (verb) { return verb.id === id; })) return;
  selectedId = id;
  if (select) select.value = selectedId;
  renderCurrent();
}

function openSheet() {
  ensureUi();
  const current = currentGameVerb();
  if (VERBS.some(function (verb) { return verb.id === current; })) selectedId = current;
  else if (!VERBS.some(function (verb) { return verb.id === selectedId; })) selectedId = "tener";

  renderSelect();
  renderCurrent();
  setOverlayOpen(true);
  fab.hidden = true;
  fab.style.display = "none";
  document.documentElement.classList.add("verb-wheel-sheet-open");
  document.body.classList.add("verb-wheel-sheet-open");
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

  });

  select.addEventListener("change", function () {
    selectVerb(select.value);
  });

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
    observer = new MutationObserver(function () { syncFab(); });
    observer.observe(game, {attributes:true, attributeFilter:["hidden"]});
    return true;
  }

  if (!attachToGame()) {
    observer = new MutationObserver(function () {
      if (attachToGame()) syncFab();
    });
    observer.observe(document.body, {subtree:true, childList:true});
  }

  window.addEventListener("conjugation:start", function (event) {
    syncFab(event && event.detail && event.detail.filter ? event.detail.filter : null);
  });
  window.addEventListener("conjugation:close", function () { syncFab(); });
}

function init() {
  if (VERBS.length !== 15) throw new Error("Verb wheel must contain exactly 15 verbs");
  injectStyles();
  ensureUi();
  bindUi();
  observeGame();
  renderSelect();
  renderCurrent();
  syncFab();
}

window.VerbWheel = Object.freeze({
  version: VERSION,
  open: openSheet,
  close: closeSheet,
  verbs: function () { return VERBS.map(function (verb) { return Object.assign({}, verb, {forms:verb.forms.slice()}); }); }
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
