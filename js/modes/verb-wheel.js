const VERSION = "20260926-bottom-sheet-fix";
const FACES = ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos / ellas"];

let verbs = [];
let groups = [];
let selectedId = "";
let fab = null;
let overlay = null;
let input = null;
let toggle = null;
let menu = null;
let forms = null;
let observer = null;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char];
  });
}

function norm(value) {
  return (value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function api() {
  return window.ConjugationDrill || null;
}

function refreshCatalog() {
  const drill = api();
  verbs = drill && typeof drill.catalog === "function" ? drill.catalog() : [];
  groups = drill && typeof drill.groups === "function" ? drill.groups() : [];
  if (!verbs.some(function (verb) { return verb.id === selectedId; })) {
    selectedId = verbs.length ? verbs[0].id : "";
  }
}

function selectedVerb() {
  return verbs.find(function (verb) { return verb.id === selectedId; }) || verbs[0] || null;
}

function verbLabel(verb) {
  if (!verb) return "";
  return verb.infinitive + (verb.translation ? " — " + verb.translation : "");
}

function injectStyles() {
  if (document.getElementById("verbWheelStyles")) return;
  const style = document.createElement("style");
  style.id = "verbWheelStyles";
  style.textContent = [
    ".verb-wheel-fab{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(86px,calc(env(safe-area-inset-bottom) + 78px));z-index:10035;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 17px;border:0;border-radius:999px;background:linear-gradient(135deg,#e63946 0%,#f77f00 100%);color:#fff;font:inherit;font-size:14px;font-weight:900;letter-spacing:.01em;cursor:pointer;box-shadow:0 6px 18px rgba(230,57,70,.4);transition:transform .16s ease,box-shadow .16s ease,opacity .16s ease;touch-action:manipulation}",
    ".verb-wheel-fab:hover,.verb-wheel-fab:focus-visible{transform:scale(1.05);box-shadow:0 9px 23px rgba(230,57,70,.46);outline:none}",
    ".verb-wheel-fab:active{transform:scale(1.05)}",
    ".verb-wheel-fab[hidden]{display:none!important}",
    ".verb-wheel-fab-icon{font-size:20px;line-height:1}",
    ".vw-backdrop{position:fixed!important;inset:0!important;background:rgba(0,0,0,.45)!important;z-index:99999!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;align-items:center!important;opacity:1;visibility:visible;pointer-events:auto}",
    ".vw-backdrop[hidden]{display:none!important;visibility:hidden!important;pointer-events:none!important}",
    ".vw-card{width:100%!important;max-width:480px!important;height:auto!important;max-height:55vh!important;margin:0!important;background:#ffffff!important;border-radius:20px 20px 0 0!important;padding:16px 16px calc(20px + env(safe-area-inset-bottom))!important;box-sizing:border-box!important;overflow:visible!important;box-shadow:0 -8px 24px rgba(0,0,0,.15);animation:verb-wheel-rise .22s ease-out}",
    ".verb-wheel-head{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:0 0 10px}",
    ".verb-wheel-title{min-width:0}",
    ".verb-wheel-title h2{margin:0;color:#241d1c;font-size:clamp(20px,4vw,27px);line-height:1.15;letter-spacing:-.02em}",
    ".verb-wheel-title p{margin:4px 0 0;color:#8a7770;font-size:12px;font-weight:700}",
    ".verb-wheel-close{width:40px;height:40px;flex:0 0 40px;border:0;border-radius:12px;background:#fff2e7;color:#9b3d33;font:inherit;font-size:26px;line-height:1;cursor:pointer}",
    ".verb-wheel-current{flex:0 0 auto;padding:0}",
    ".verb-wheel-combobox{position:relative;z-index:4;margin-bottom:10px}",
    ".verb-wheel-field{display:flex;align-items:stretch;min-height:46px;border:1px solid #e8d8ca;border-radius:14px;background:linear-gradient(145deg,#fff9f2,#fff);box-shadow:0 7px 18px rgba(123,76,43,.07);overflow:hidden}",
    ".verb-wheel-field:focus-within{border-color:#f39c12;box-shadow:0 0 0 3px rgba(243,156,18,.14)}",
    ".verb-wheel-input{min-width:0;flex:1;border:0;outline:0;background:transparent;padding:0 10px 0 14px;color:#2d2927;font:inherit;font-size:14px;font-weight:850}",
    ".verb-wheel-input::placeholder{color:#a58e84;font-weight:700}",
    ".verb-wheel-toggle{width:46px;flex:0 0 46px;border:0;border-left:1px solid rgba(232,216,202,.75);background:transparent;color:#b13f31;font:inherit;font-size:18px;font-weight:900;cursor:pointer}",
    ".verb-wheel-toggle.is-open{transform:rotate(180deg)}",
    ".verb-wheel-menu{position:absolute;left:0;right:0;top:calc(100% + 7px);z-index:8;max-height:min(340px,calc(100dvh - 210px));overflow:auto;padding:7px;border:1px solid #ead9ca;border-radius:15px;background:#fff;box-shadow:0 18px 45px rgba(76,48,34,.2);overscroll-behavior:contain}",
    ".verb-wheel-menu[hidden]{display:none!important}",
    ".verb-wheel-group+.verb-wheel-group{margin-top:6px;padding-top:6px;border-top:1px solid #f1e5db}",
    ".verb-wheel-group-title{padding:7px 9px 5px;color:#8b5d4a;font-size:11px;font-weight:900;line-height:1.3}",
    ".verb-wheel-option{display:block;width:100%;padding:9px 10px;border:0;border-radius:10px;background:transparent;color:#332b27;text-align:left;font:inherit;font-size:13px;font-weight:750;line-height:1.25;cursor:pointer}",
    ".verb-wheel-option:hover,.verb-wheel-option:focus-visible{background:#fff2e7;outline:none}",
    ".verb-wheel-option[aria-selected=true]{background:#fff6df;color:#9b3d33}",
    ".verb-wheel-empty{padding:18px 12px;color:#8a7770;text-align:center;font-size:13px;font-weight:750}",
    ".verb-wheel-current-card{padding:11px;border:1px solid #f0dccb;border-radius:18px;background:linear-gradient(145deg,#fff9f2,#fff);box-shadow:0 9px 24px rgba(123,76,43,.08)}",
    ".verb-wheel-forms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}",
    ".verb-wheel-form{min-width:0;padding:9px 8px;border:1px solid #f1e7d0;border-radius:12px;background:#fff}",
    ".verb-wheel-person{display:block;margin-bottom:3px;color:rgba(45,52,54,.54);font-size:10px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".verb-wheel-value{display:block;color:#292421;font-size:15px;font-weight:900;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".verb-wheel-sheet-open{overflow:hidden!important}",
    "@keyframes verb-wheel-rise{from{transform:translateY(28px);opacity:.65}to{transform:translateY(0);opacity:1}}",
    "@media(max-width:520px){.verb-wheel-head{padding-bottom:8px}.verb-wheel-field{min-height:44px}.verb-wheel-input{font-size:13px}.verb-wheel-menu{max-height:min(330px,calc(100dvh - 205px))}.verb-wheel-current-card{padding:10px}.verb-wheel-forms{gap:6px}.verb-wheel-form{padding:7px 6px}.verb-wheel-person{font-size:9px}.verb-wheel-value{font-size:13px}.verb-wheel-fab{right:14px;bottom:max(84px,calc(env(safe-area-inset-bottom) + 76px));min-height:47px;padding:0 14px}}",
    "@media(max-width:370px){.verb-wheel-title h2{font-size:18px}.verb-wheel-field{min-height:42px}.verb-wheel-input{font-size:12px}.verb-wheel-value{font-size:12px}.verb-wheel-form{padding:7px 4px}}",
    "@media(prefers-reduced-motion:reduce){.verb-wheel-fab,.vw-card{transition:none;animation:none}}"
  ].join("\n");
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
    overlay.className = "vw-backdrop";
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
      '<div class="vw-card">' +
        '<header class="verb-wheel-head">' +
          '<div class="verb-wheel-title"><h2 id="verbWheelTitle">La Rueda • Шпаргалка форм</h2><p>Presente de Indicativo</p></div>' +
          '<button class="verb-wheel-close" type="button" data-verb-wheel-close aria-label="Закрыть">×</button>' +
        '</header>' +
        '<div class="verb-wheel-current">' +
          '<div class="verb-wheel-combobox" data-verb-wheel-combobox>' +
            '<div class="verb-wheel-field">' +
              '<input class="verb-wheel-input" data-verb-wheel-input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="verbWheelMenu" placeholder="Найти глагол или перевод...">' +
              '<button class="verb-wheel-toggle" data-verb-wheel-toggle type="button" aria-label="Открыть список глаголов" aria-expanded="false">▾</button>' +
            '</div>' +
            '<div class="verb-wheel-menu" id="verbWheelMenu" data-verb-wheel-menu role="listbox" hidden></div>' +
          '</div>' +
          '<section class="verb-wheel-current-card" aria-live="polite">' +
            '<div class="verb-wheel-forms" data-verb-wheel-forms></div>' +
          '</section>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    input = overlay.querySelector("[data-verb-wheel-input]");
    toggle = overlay.querySelector("[data-verb-wheel-toggle]");
    menu = overlay.querySelector("[data-verb-wheel-menu]");
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

function renderCurrent() {
  const verb = selectedVerb();
  if (!verb || !forms) {
    if (forms) forms.innerHTML = "";
    return;
  }

  input.value = verbLabel(verb);
  forms.innerHTML = verb.forms.map(function (form, index) {
    return '<article class="verb-wheel-form">' +
      '<span class="verb-wheel-person">' + escapeHtml(FACES[index]) + '</span>' +
      '<strong class="verb-wheel-value" lang="es">' + escapeHtml(form) + '</strong>' +
    '</article>';
  }).join("");
}

function renderMenu(query) {
  if (!menu) return;
  const needle = norm(query);
  let matched = 0;

  const html = groups.map(function (group) {
    const items = verbs.filter(function (verb) {
      if (verb.group !== group.id) return false;
      if (!needle) return true;
      return norm(verb.infinitive).includes(needle) || norm(verb.translation).includes(needle);
    }).sort(function (a, b) {
      return a.infinitive.localeCompare(b.infinitive, "es", {sensitivity:"base"});
    });

    if (!items.length) return "";
    matched += items.length;

    return '<section class="verb-wheel-group" role="group" aria-label="' + escapeHtml(group.label) + '">' +
      '<div class="verb-wheel-group-title">' + escapeHtml(group.label) + '</div>' +
      items.map(function (verb) {
        return '<button class="verb-wheel-option" type="button" role="option" data-verb-wheel-option="' + escapeHtml(verb.id) + '" aria-selected="' + (verb.id === selectedId ? "true" : "false") + '">' +
          escapeHtml(verbLabel(verb)) +
        '</button>';
      }).join("") +
    '</section>';
  }).join("");

  menu.innerHTML = matched ? html : '<div class="verb-wheel-empty">Ничего не найдено</div>';
}

function setMenuOpen(isOpen, query) {
  if (!menu || !input || !toggle) return;
  menu.hidden = !isOpen;
  input.setAttribute("aria-expanded", isOpen ? "true" : "false");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  toggle.classList.toggle("is-open", isOpen);
  if (isOpen) renderMenu(query == null ? "" : query);
}

function closeMenu(restoreSelected) {
  if (!menu || menu.hidden) return;
  setMenuOpen(false);
  if (restoreSelected !== false) {
    const verb = selectedVerb();
    if (verb) input.value = verbLabel(verb);
  }
}

function selectVerb(id) {
  const verb = verbs.find(function (item) { return item.id === id; });
  if (!verb) return;
  selectedId = verb.id;
  renderCurrent();
  closeMenu(false);
}

function gameIsActive() {
  const game = document.querySelector(".cd-game");
  return Boolean(game && !game.hidden);
}

function syncFab() {
  if (!fab) return;
  const active = gameIsActive();
  const sheetOpen = Boolean(overlay && !overlay.hidden);
  const game = document.querySelector(".cd-game");
  const nextButtonVisible = Boolean(game && game.querySelector("[data-cd-next]:not([hidden])"));
  const shouldShow = active && !sheetOpen && !nextButtonVisible;

  fab.hidden = !shouldShow;
  fab.style.display = shouldShow ? "inline-flex" : "none";
  fab.setAttribute("aria-hidden", shouldShow ? "false" : "true");

  if (!active && overlay && !overlay.hidden) closeSheet(false);
}

function currentGameVerb() {
  const drill = api();
  const fromState = drill && typeof drill.currentVerb === "function" ? drill.currentVerb() : "";
  if (fromState) return norm(fromState);
  const title = document.querySelector('.cd-game:not([hidden]) .cd-question h2[lang="es"]');
  return norm(title && title.textContent);
}

function openSheet() {
  ensureUi();
  refreshCatalog();
  if (!verbs.length) {
    alert("Не удалось загрузить базу глаголов. Попробуй обновить страницу.");
    return;
  }

  const current = currentGameVerb();
  const currentMatch = verbs.find(function (verb) { return norm(verb.infinitive) === current; });
  if (currentMatch) selectedId = currentMatch.id;
  else if (!selectedVerb()) selectedId = verbs[0].id;

  renderCurrent();
  setMenuOpen(false);
  setOverlayOpen(true);
  fab.hidden = true;
  fab.style.display = "none";
  document.documentElement.classList.add("verb-wheel-sheet-open");
  document.body.classList.add("verb-wheel-sheet-open");
}

function closeSheet(restoreFocus = true) {
  if (!overlay || overlay.hidden) return;
  closeMenu(true);
  setOverlayOpen(false);
  document.documentElement.classList.remove("verb-wheel-sheet-open");
  document.body.classList.remove("verb-wheel-sheet-open");
  syncFab();
  if (restoreFocus && fab && !fab.hidden) fab.focus({preventScroll:true});
}

function firstMenuOption() {
  return menu ? menu.querySelector("[data-verb-wheel-option]") : null;
}

function bindUi() {
  fab.addEventListener("click", openSheet);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay || event.target.closest("[data-verb-wheel-close]")) {
      closeSheet();
      return;
    }

    const option = event.target.closest("[data-verb-wheel-option]");
    if (option) {
      selectVerb(option.dataset.verbWheelOption);
      return;
    }

    if (!event.target.closest("[data-verb-wheel-combobox]")) closeMenu(true);
  });

  input.addEventListener("click", function () {
    const opening = menu.hidden;
    if (opening) {
      setMenuOpen(true, "");
      window.requestAnimationFrame(function () { input.select(); });
    } else {
      closeMenu(true);
    }
  });

  input.addEventListener("input", function () {
    setMenuOpen(true, input.value);
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!menu.hidden) {
        event.preventDefault();
        event.stopPropagation();
        closeMenu(true);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (menu.hidden) setMenuOpen(true, input.value === verbLabel(selectedVerb()) ? "" : input.value);
      const first = firstMenuOption();
      if (first) first.focus();
      return;
    }

    if (event.key === "Enter" && !menu.hidden) {
      const first = firstMenuOption();
      if (first) {
        event.preventDefault();
        selectVerb(first.dataset.verbWheelOption);
      }
    }
  });

  toggle.addEventListener("click", function () {
    const opening = menu.hidden;
    if (opening) {
      setMenuOpen(true, "");
      input.focus({preventScroll:true});
      window.requestAnimationFrame(function () { input.select(); });
    } else {
      closeMenu(true);
    }
  });

  menu.addEventListener("keydown", function (event) {
    const options = Array.from(menu.querySelectorAll("[data-verb-wheel-option]"));
    const index = options.indexOf(document.activeElement);

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      input.focus({preventScroll:true});
      return;
    }
    if (event.key === "Enter" && index >= 0) {
      event.preventDefault();
      selectVerb(options[index].dataset.verbWheelOption);
      input.focus({preventScroll:true});
      return;
    }
    if ((event.key === "ArrowDown" || event.key === "ArrowUp") && options.length) {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = index < 0 ? 0 : (index + delta + options.length) % options.length;
      options[nextIndex].focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay && !overlay.hidden && menu.hidden) {
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
    observer.observe(game, {attributes:true, attributeFilter:["hidden"], childList:true, subtree:true});
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
  injectStyles();
  ensureUi();
  refreshCatalog();
  bindUi();
  observeGame();
  renderCurrent();
  syncFab();
}

window.VerbWheel = Object.freeze({
  version: VERSION,
  open: openSheet,
  close: closeSheet,
  verbs: function () {
    refreshCatalog();
    return verbs.map(function (verb) { return Object.assign({}, verb, {forms:verb.forms.slice()}); });
  }
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
