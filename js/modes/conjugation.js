import { getTopic } from "../core/topic-registry.js";
import { verbsTopic } from "../topics/verbs.js";
import { presentTopic } from "../topics/present.js";

const VERSION = "20260926-cheatsheet-button";
const COUNTS = [10, 15, 20];
const ACCENTS = ["á", "é", "í", "ó", "ú", "ñ"];
const VERB_FILTER_KEY = "conjugation_verb_filter";
const VERB_FILTERS = new Set(["regular", "irregular", "all"]);
const PRONOUN_ORDER = Object.freeze([
  "yo",
  "tú",
  "él / ella / usted",
  "nosotros / nosotras",
  "vosotros / vosotras",
  "ellos / ellas / ustedes"
]);
const VERB_GROUPS = Object.freeze([
  { id: "exceptions", label: "⭐ Топ исключений" },
  { id: "yo-special", label: "⚡ Глаголы на -GO и особые в YO" },
  { id: "stem-change", label: "🔄 Чередование в корне (e->ie, o->ue, e->i)" },
  { id: "regular", label: "🟢 Правильные (-ar, -er, -ir)" }
]);
const TOP_EXCEPTION_IDS = new Set(["ser", "estar", "ir", "saber", "ver"]);
const YO_SPECIAL_IDS = new Set(["decir", "hacer", "poner", "salir", "tener", "traer", "venir"]);
const STEM_CHANGE_IDS = new Set([
  "almorzar", "cerrar", "costar", "dormir", "elegir", "empezar", "encontrar",
  "pedir", "poder", "probar", "querer", "recordar", "volver"
]);

let entry = null;
let chooser = null;
let game = null;
let session = null;
let transitionTimer = 0;
let lastCount = 10;
let lastFilter = "regular";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char];
  });
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function normalizeAccentless(value) {
  return (value || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function highlightDiacritics(value) {
  return Array.from(String(value ?? "")).map(function (char) {
    const hasDiacritic = /[\u0300-\u036f]/.test(char.normalize("NFD"));
    return hasDiacritic
      ? '<mark class="cd-diacritic">' + escapeHtml(char) + '</mark>'
      : escapeHtml(char);
  }).join("");
}

function diacriticCharacters(value) {
  const chars = [];
  Array.from(String(value ?? "")).forEach(function (char) {
    if (!/[\u0300-\u036f]/.test(char.normalize("NFD"))) return;
    if (!chars.includes(char)) chars.push(char);
  });
  return chars;
}

function readVerbFilter() {
  try {
    const saved = localStorage.getItem(VERB_FILTER_KEY);
    return VERB_FILTERS.has(saved) ? saved : "regular";
  } catch (error) {
    return "regular";
  }
}

function saveVerbFilter(value) {
  const filter = VERB_FILTERS.has(value) ? value : "regular";
  lastFilter = filter;
  try {
    localStorage.setItem(VERB_FILTER_KEY, filter);
  } catch (error) {}
  return filter;
}

function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function canonicalPronoun(label) {
  const value = normalize(label);
  if (value.startsWith("yo")) return "yo";
  if (value.startsWith("tú") || value.startsWith("tu")) return "tú";
  if (value.startsWith("él") || value.startsWith("el ") || value.startsWith("ella") || value.startsWith("usted")) return "él / ella / usted";
  if (value.startsWith("nosotros") || value.startsWith("nosotras")) return "nosotros / nosotras";
  if (value.startsWith("vosotros") || value.startsWith("vosotras")) return "vosotros / vosotras";
  if (value.startsWith("ellos") || value.startsWith("ellas") || value.startsWith("ustedes")) return "ellos / ellas / ustedes";
  return String(label || "").trim();
}

function rowsFor(item) {
  if (item && item.table && Array.isArray(item.table.rows)) return item.table.rows;
  if (item && Array.isArray(item.forms)) return item.forms;
  return [];
}

function sourceTopics() {
  const registeredVerbs = getTopic("verbs");
  const registeredPresent = getTopic("present");
  return [registeredVerbs || verbsTopic, registeredPresent || presentTopic].filter(Boolean);
}

function verbGroupFor(item) {
  const id = String(item && (item.id || item.base || item.word) || "").trim().toLowerCase();
  const label = String(item && item.gender || "").toLowerCase();

  if (TOP_EXCEPTION_IDS.has(id)) return "exceptions";
  if (YO_SPECIAL_IDS.has(id)) return "yo-special";
  if (STEM_CHANGE_IDS.has(id) || /(?:e|o)\s*→\s*(?:ie|ue|i)/i.test(label)) return "stem-change";
  if (label.includes("неправиль") || label.includes("черед") || label.includes("отклон")) return "exceptions";
  return "regular";
}

function collectVerbs() {
  const records = new Map();

  sourceTopics().forEach(function (topic) {
    (topic.studyItems || []).forEach(function (item) {
      const infinitive = String(item.base || item.word || "").trim().toLowerCase();
      if (!infinitive || infinitive.endsWith("se") || !/(ar|er|ir)$/.test(infinitive)) return;

      const translation = String(item.tr || (Array.isArray(item.ru) ? item.ru[0] : "") || "").trim();
      let verb = records.get(infinitive);
      if (!verb) {
        const group = verbGroupFor(item);
        verb = {
          id: infinitive,
          infinitive,
          translation,
          group,
          isIrregular: group !== "regular",
          forms: Array(PRONOUN_ORDER.length).fill("")
        };
        records.set(infinitive, verb);
      } else {
        if (!verb.translation && translation) verb.translation = translation;
        const candidateGroup = verbGroupFor(item);
        if (verb.group === "regular" && candidateGroup !== "regular") {
          verb.group = candidateGroup;
          verb.isIrregular = true;
        }
      }

      rowsFor(item).forEach(function (row) {
        if (!Array.isArray(row) || row.length < 2) return;
        const pronoun = canonicalPronoun(row[0]);
        const index = PRONOUN_ORDER.indexOf(pronoun);
        const answer = String(row[1] || "").trim();
        if (index < 0 || !answer || verb.forms[index]) return;
        verb.forms[index] = answer;
      });
    });
  });

  return Array.from(records.values()).filter(function (verb) {
    return verb.forms.length === PRONOUN_ORDER.length && verb.forms.every(Boolean);
  });
}

function getConjugationVerbCatalog() {
  return collectVerbs().map(function (verb) {
    return Object.assign({}, verb, {forms:verb.forms.slice()});
  });
}

function getCurrentConjugationVerb() {
  return session && session.current ? session.current.infinitive : "";
}

function collectPool() {
  const tasks = [];

  collectVerbs().forEach(function (verb) {
    PRONOUN_ORDER.forEach(function (pronoun, index) {
      tasks.push({
        key: verb.infinitive + "|" + pronoun,
        infinitive: verb.infinitive,
        translation: verb.translation,
        pronoun,
        answer: verb.forms[index],
        isIrregular: verb.isIrregular
      });
    });
  });

  return tasks;
}

function buildRound(count, filter) {
  const selectedFilter = VERB_FILTERS.has(filter) ? filter : "regular";
  const pool = collectPool().filter(function (task) {
    if (selectedFilter === "regular") return !task.isIrregular;
    if (selectedFilter === "irregular") return task.isIrregular;
    return true;
  });

  return shuffle(pool).slice(0, count);
}

function injectStyles() {
  if (document.getElementById("conjugationDrillStyles")) return;
  const style = document.createElement("style");
  style.id = "conjugationDrillStyles";
  style.textContent = `
    .conjugation-open{overflow:hidden!important}
    .conjugation-entry{width:100%;margin:18px 0 24px;padding:17px 18px;border:1px solid #ded8f2;border-radius:20px;background:linear-gradient(135deg,#f7f4ff 0%,#fff 62%,#fff6dd 100%);color:#17153b;text-align:left;display:flex;align-items:center;gap:14px;cursor:pointer;box-shadow:0 12px 30px rgba(66,54,126,.08);transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease}
    .conjugation-entry:hover{transform:translateY(-1px);border-color:#bdb1eb;box-shadow:0 16px 34px rgba(66,54,126,.12)}
    .conjugation-entry:active{transform:scale(.99)}
    .conjugation-entry[hidden]{display:none!important}
    .conjugation-entry-icon{width:46px;height:46px;flex:0 0 46px;border-radius:15px;display:grid;place-items:center;background:#6555d9;color:#fff;font-size:24px;box-shadow:0 8px 20px rgba(101,85,217,.25)}
    .conjugation-entry-copy{min-width:0;display:grid;gap:4px}
    .conjugation-entry-copy strong{font-size:17px;line-height:1.15}
    .conjugation-entry-copy span{color:#6f6a83;font-size:12px;line-height:1.4}
    .conjugation-entry-arrow{margin-left:auto;color:#6555d9;font-size:20px;font-weight:900}
    .cd-dialog{width:min(500px,calc(100vw - 28px));max-height:calc(100dvh - 28px);overflow:auto;border:0;border-radius:24px;padding:0;color:#17153b;box-shadow:0 28px 80px rgba(23,21,59,.28)}
    .cd-dialog::backdrop{background:rgba(20,17,46,.54);backdrop-filter:blur(5px)}
    .cd-dialog-inner{padding:24px}
    .cd-dialog-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
    .cd-dialog-head b{display:block;color:#6555d9;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
    .cd-dialog-head h2{margin:4px 0 6px;font-size:28px}
    .cd-dialog-head p{margin:0;color:#6f6a83;line-height:1.45}
    .cd-close{width:42px;height:42px;flex:0 0 42px;border:0;border-radius:12px;background:#f1eff7;color:#544e68;font-size:27px;cursor:pointer}
    .cd-count-label{display:block;margin:22px 0 9px;color:#514b68;font-size:12px;font-weight:850}
    .cd-counts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    .cd-count{min-height:76px;border:2px solid #e4e0ee;border-radius:16px;background:#fff;color:#17153b;cursor:pointer;font-weight:800}
    .cd-count b{display:block;font-size:25px}.cd-count span{display:block;color:#77718d;font-size:11px}
    .cd-count.active{border-color:#6555d9;background:#f1efff;color:#4c3fc3}
    .cd-filter-section{display:block!important;visibility:visible!important;opacity:1!important;margin-top:20px}
    .cd-filter-label{display:block!important;visibility:visible!important;opacity:1!important;margin:0 0 9px;color:#514b68;font-size:12px;font-weight:850}
    .cd-filters{display:grid!important;visibility:visible!important;opacity:1!important;grid-template-columns:1fr;gap:9px}
    .cd-filter{display:block!important;visibility:visible!important;opacity:1!important;width:100%;min-height:62px;padding:12px 13px;border:2px solid #e4e0ee;border-radius:15px;background:#fff;color:#17153b;text-align:left;cursor:pointer;font:inherit;line-height:1.2;transition:border-color .15s ease,background .15s ease,transform .15s ease}
    .cd-filter:hover{transform:translateY(-1px);border-color:#c7bdef}
    .cd-filter strong{display:block;font-size:14px;line-height:1.25}
    .cd-filter span{display:block;margin-top:3px;color:#77718d;font-size:11px;line-height:1.35}
    .cd-filter.active{border-color:#6555d9;background:#f1efff}
    .cd-filter.active strong{color:#4c3fc3}
    .cd-dialog-actions{display:flex;justify-content:flex-end;margin-top:18px}
    .cd-primary,.cd-secondary{min-height:48px;padding:12px 18px;border-radius:14px;font:inherit;font-weight:900;cursor:pointer}
    .cd-primary{border:0;background:#6555d9;color:#fff}.cd-primary:disabled{opacity:.45;cursor:default}
    .cd-secondary{border:1px solid #ddd8e8;background:#fff;color:#514b68}
    .cd-game{position:fixed;inset:0;z-index:10020;display:grid;place-items:center;padding:18px;background:radial-gradient(circle at 18% 8%,rgba(255,213,80,.22),transparent 25rem),linear-gradient(145deg,#f7f5fc,#efeafd)}
    .cd-game[hidden]{display:none!important}
    .cd-card{width:min(760px,100%);min-height:min(650px,calc(100vh - 36px));display:flex;flex-direction:column;overflow:hidden;border-radius:30px;background:#fff;box-shadow:0 24px 75px rgba(35,28,89,.17)}
    .cd-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px 14px}
    .cd-head-actions{display:flex;align-items:center;justify-content:flex-end;gap:8px;flex:0 0 auto}
    .cd-cheatsheet{min-height:42px;padding:0 12px;border:1px solid #ead8c9;border-radius:12px;background:#fff7ee;color:#8f4735;font:inherit;font-size:12px;font-weight:900;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;cursor:pointer;box-shadow:0 4px 12px rgba(143,71,53,.08);transition:background .15s ease,border-color .15s ease,transform .15s ease}
    .cd-cheatsheet:hover,.cd-cheatsheet:focus-visible{background:#fff0df;border-color:#e4bea1;outline:none}.cd-cheatsheet:active{transform:scale(.97)}
    .cd-head b{display:block;color:#6555d9;font-size:12px;text-transform:uppercase;letter-spacing:.09em}.cd-head span{display:block;color:#77718d;font-size:12px;font-weight:750}
    .cd-progress{height:7px;margin:0 20px;overflow:hidden;border-radius:999px;background:#eeeaf7}.cd-progress i{display:block;width:0;height:100%;background:linear-gradient(90deg,#6555d9,#ec7f68);transition:width .3s ease}
    .cd-stage{flex:1;display:grid;place-items:center;padding:clamp(28px,6vw,58px)}
    .cd-question{width:min(610px,100%);text-align:center}
    .cd-tense{display:inline-flex;padding:7px 11px;border-radius:999px;background:#f0edff;color:#5547c7;font-size:12px;font-weight:850}
    .cd-question h2{margin:18px 0 5px;font-size:clamp(38px,6vw,64px);line-height:1;letter-spacing:-.045em;text-transform:uppercase}
    .cd-translation{margin:0 0 20px;color:#77718d;font-size:17px;font-weight:700}
    .cd-pronoun{display:inline-flex;margin:0 auto 18px;padding:11px 17px;border-radius:14px;background:#17153b;color:#fff;font-size:17px;font-weight:900}
    .cd-answer{width:100%;min-height:58px;padding:13px 16px;border:2px solid #ddd8e8;border-radius:16px;background:#fff;color:#17153b;font:inherit;font-size:20px;font-weight:800;text-align:center;outline:none;transition:border-color .16s ease,background .16s ease,box-shadow .16s ease}
    .cd-answer:focus{border-color:#6555d9;box-shadow:0 0 0 4px rgba(101,85,217,.12)}
    .cd-answer.is-correct{border-color:#54b987;background:#eaf8f1;box-shadow:0 0 0 4px rgba(84,185,135,.12)}
    .cd-answer.is-wrong{border-color:#e57d8b;background:#fff0f2;box-shadow:0 0 0 4px rgba(229,125,139,.11)}\n    .cd-answer.is-accent-warning{border-color:#e0ad35;background:#fff9df;box-shadow:0 0 0 4px rgba(224,173,53,.13)}
    .cd-accents{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:12px 0 18px}
    .cd-accent{min-width:42px;height:38px;border:1px solid #ddd8e8;border-radius:11px;background:#f8f6fc;color:#443d62;font:inherit;font-weight:900;cursor:pointer}
    .cd-accent:hover{background:#f0edff;border-color:#bcb2e7}
    .cd-feedback{min-height:34px;margin:0 0 15px;font-weight:850}
    .cd-feedback.ok{color:#187052}.cd-feedback.no{color:#a53643}\n    .cd-feedback.warn{display:inline-block;min-height:0;padding:10px 12px;border:1px solid #efd27b;border-radius:12px;background:#fff8d9;color:#7a5600;line-height:1.4}\n    .cd-diacritic{padding:0 2px;border-radius:4px;background:#ffd96b;color:#654600;font-weight:950}
    .cd-correct-answer{margin:0 0 18px;padding:14px 16px;border-radius:15px;background:#fff0f2;color:#8f2e3a;font-size:16px}.cd-correct-answer strong{display:block;margin-top:3px;font-size:clamp(25px,4vw,34px);color:#a53643}
    .cd-actions{display:flex;justify-content:center;gap:10px}
    .cd-card[data-phase="results"]{min-height:0}.cd-card[data-phase="results"] .cd-stage{place-items:start center;padding:26px 30px 32px}.cd-results{text-align:center;width:min(590px,100%)}.cd-results-icon{font-size:58px}.cd-results h2{margin:12px 0 6px;font-size:clamp(31px,5vw,46px)}.cd-results>p{margin:0;color:#6d6a86}
    .cd-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:22px 0}.cd-stat{padding:14px 10px;border-radius:15px;background:#f7f5fc;color:#77718d;font-size:11px;font-weight:750}.cd-stat b{display:block;color:#17153b;font-size:23px}
    .cd-result-actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}
    @keyframes cd-success{0%{transform:scale(1)}45%{transform:scale(1.02)}100%{transform:scale(1)}}
    @keyframes cd-error{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}50%{transform:translateX(7px)}75%{transform:translateX(-4px)}}
    .cd-question.is-success{animation:cd-success .34s ease}.cd-question.is-error{animation:cd-error .28s ease}
    @media(max-width:720px){.cd-game{padding:0}.cd-card{min-height:100vh;border-radius:0}.cd-stage{padding:26px 18px 34px}.cd-stats{grid-template-columns:1fr 1fr 1fr}}
    @media(max-width:440px){.cd-dialog-inner{padding:20px}.cd-head{padding:14px 14px 12px;gap:8px}.cd-cheatsheet{padding:0 10px;font-size:12px}.cd-close{width:40px;height:40px;flex-basis:40px}.cd-head .cd-close{width:36px;height:36px;flex-basis:36px}.cd-counts{gap:7px}.cd-question h2{font-size:42px}.cd-pronoun{font-size:15px}.cd-answer{font-size:18px}.cd-stats{grid-template-columns:1fr}.conjugation-entry{padding:15px}}
  `;
  document.head.appendChild(style);
}

function ensureEntry() {
  if (entry) return entry;
  const host = document.getElementById("topicCatalog");
  if (!host) return null;

  entry = document.createElement("button");
  entry.id = "conjugationDrillEntry";
  entry.className = "conjugation-entry";
  entry.type = "button";
  entry.hidden = true;
  entry.innerHTML =
    '<span class="conjugation-entry-icon" aria-hidden="true">⌨️</span>' +
    '<span class="conjugation-entry-copy"><strong>Проспрягай</strong>' +
    '<span>Ручной ввод форм глаголов. Никаких подсказок — только ты и клавиатура.</span></span>' +
    '<span class="conjugation-entry-arrow" aria-hidden="true">→</span>';

  const catalogHead = host.querySelector(".catalog-head");
  if (catalogHead && catalogHead.nextSibling) host.insertBefore(entry, catalogHead.nextSibling);
  else if (catalogHead) host.appendChild(entry);
  else host.prepend(entry);

  entry.addEventListener("click", openChooser);
  return entry;
}

function ensureUi() {
  if (!chooser) {
    chooser = document.createElement("dialog");
    chooser.id = "conjugationSetupDialog";
    chooser.className = "cd-dialog";
    chooser.setAttribute("aria-labelledby", "conjugationSetupTitle");
    chooser.innerHTML =
      '<div class="cd-dialog-inner">' +
        '<div class="cd-dialog-head"><div><b>⌨️ Ручной ввод</b><h2 id="conjugationSetupTitle">Проспрягай</h2>' +
        '<p>Выбери тип глаголов и длину раунда. Ошибочные формы вернутся через пару заданий, пока не введёшь их чисто.</p></div>' +
        '<button class="cd-close" type="button" data-cd-dialog-close aria-label="Закрыть">×</button></div>' +
        '<section class="cd-filter-section" id="conjugationVerbFilter" data-cd-filter-container aria-labelledby="conjugationVerbFilterLabel">' +
          '<span class="cd-filter-label" id="conjugationVerbFilterLabel">Какие глаголы?</span>' +
          '<div class="cd-filters" role="radiogroup" aria-label="Тип глаголов">' +
            '<button class="cd-filter" type="button" role="radio" aria-checked="false" data-cd-filter="regular"><strong>🟢 Только правильные</strong><span>Базовые окончания -ar, -er, -ir без сюрпризов</span></button>' +
            '<button class="cd-filter" type="button" role="radio" aria-checked="false" data-cd-filter="irregular"><strong>⚡ Только неправильные</strong><span>Ключевые исключения и отклонения (ser, ir, tener...)</span></button>' +
            '<button class="cd-filter" type="button" role="radio" aria-checked="false" data-cd-filter="all"><strong>🔀 Микс</strong><span>Случайная смесь всех типов</span></button>' +
          '</div>' +
          '<input type="hidden" data-cd-filter-selected value="regular">' +
        '</section>' +
        '<span class="cd-count-label">Сколько форм?</span>' +
        '<div class="cd-counts">' + COUNTS.map(function (count) {
          return '<button class="cd-count' + (count === lastCount ? ' active' : '') + '" type="button" data-cd-count="' + count + '"><b>' + count + '</b><span>форм</span></button>';
        }).join("") + '</div>' +
        '<input type="hidden" data-cd-selected value="' + lastCount + '">' +
        '<div class="cd-dialog-actions"><button class="cd-primary" type="button" data-cd-start>Начать →</button></div>' +
      '</div>';
    document.body.appendChild(chooser);
  }

  if (!game) {
    game = document.createElement("section");
    game.className = "cd-game";
    game.hidden = true;
    game.setAttribute("aria-live", "polite");
    document.body.appendChild(game);
  }
}

function practiceIsActive() {
  const layout = document.getElementById("trainerLayout");
  if (!layout || layout.hidden || !layout.classList.contains("catalog-view")) return false;

  const nodes = [document.getElementById("headerNavPractice"), document.getElementById("navPractice")].filter(Boolean);
  if (nodes.some(function (node) { return node.classList.contains("active") || node.classList.contains("is-active"); })) return true;

  const title = document.getElementById("catalogTitle");
  return Boolean(title && /тренировать/i.test(title.textContent || ""));
}

function syncEntry() {
  const node = ensureEntry();
  if (!node) return;
  node.hidden = !practiceIsActive() || Boolean(game && !game.hidden);
}

function openChooser() {
  ensureUi();
  const pool = collectPool();
  if (!pool.length) {
    alert("Не удалось загрузить формы глаголов. Попробуй обновить страницу.");
    return;
  }
  lastFilter = readVerbFilter();
  const filterContainer = chooser.querySelector("[data-cd-filter-container]");
  if (filterContainer) {
    filterContainer.hidden = false;
    filterContainer.setAttribute("aria-hidden", "false");
  }
  chooser.querySelector("[data-cd-filter-selected]").value = lastFilter;
  chooser.querySelectorAll("[data-cd-filter]").forEach(function (button) {
    const active = button.dataset.cdFilter === lastFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-checked", active ? "true" : "false");
  });
  chooser.querySelector("[data-cd-selected]").value = String(lastCount);
  chooser.querySelectorAll("[data-cd-count]").forEach(function (button) {
    button.classList.toggle("active", Number(button.dataset.cdCount) === lastCount);
  });
  chooser.showModal();
}

function setLocked(value) {
  document.documentElement.classList.toggle("conjugation-open", value);
  document.body.classList.toggle("conjugation-open", value);
}

function renderShell(inner, phase) {
  const clean = session ? session.clean.size : 0;
  const total = session ? session.size : 0;
  const progress = total ? Math.min(100, clean / total * 100) : 0;
  const currentPhase = phase || "task";
  const cheatsheetButton = currentPhase === "task"
    ? '<button class="cd-cheatsheet" type="button" data-cd-cheatsheet aria-label="Открыть шпаргалку спряжений"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span>Шпаргалка</span></button>'
    : "";
  game.innerHTML =
    '<div class="cd-card" data-phase="' + escapeHtml(currentPhase) + '">' +
      '<header class="cd-head"><div><b>⌨️ Проспрягай</b><span>Освоено ' + clean + ' из ' + total + '</span></div>' +
      '<div class="cd-head-actions">' + cheatsheetButton +
      '<button class="cd-close" type="button" data-cd-close aria-label="Закрыть">×</button></div></header>' +
      '<div class="cd-progress"><i style="width:' + progress + '%"></i></div>' +
      '<main class="cd-stage">' + inner + '</main>' +
    '</div>';
}

function renderTask() {
  if (!session || !session.current) return;
  const task = session.current;
  renderShell(
    '<div class="cd-question" data-cd-question>' +
      '<span class="cd-tense">Presente de Indicativo</span>' +
      '<h2 lang="es">' + escapeHtml(task.infinitive) + '</h2>' +
      '<p class="cd-translation">' + escapeHtml(task.translation || "глагол") + '</p>' +
      '<div class="cd-pronoun">' + escapeHtml(task.pronoun) + '</div>' +
      '<input class="cd-answer" data-cd-input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Введи форму..." aria-label="Введи форму глагола">' +
      '<div class="cd-accents" aria-label="Быстрые акценты">' + ACCENTS.map(function (symbol) {
        return '<button class="cd-accent" type="button" data-cd-accent="' + symbol + '">[' + symbol + ']</button>';
      }).join("") + '</div>' +
      '<div class="cd-feedback" data-cd-feedback role="status"></div>' +
      '<div data-cd-correct-wrap></div>' +
      '<div class="cd-actions"><button class="cd-primary" type="button" data-cd-check disabled>Проверить</button>' +
      '<button class="cd-primary" type="button" data-cd-next hidden>Понятно / Далее</button></div>' +
    '</div>'
  );

  const input = game.querySelector("[data-cd-input]");
  if (input) input.focus();
}

function nextTask() {
  clearTimeout(transitionTimer);
  transitionTimer = 0;
  if (!session) return;

  if (!session.queue.length) {
    renderResults();
    return;
  }

  session.current = session.queue.shift();
  session.awaitingNext = false;
  renderTask();
}

function checkCurrent() {
  if (!session || !session.current || session.awaitingNext) return;
  const input = game.querySelector("[data-cd-input]");
  const check = game.querySelector("[data-cd-check]");
  if (!input) return;

  const typed = normalize(input.value);
  if (!typed) return;

  const task = session.current;
  const target = normalize(task.answer);
  const exactCorrect = typed === target;
  const accentCorrect = !exactCorrect && normalizeAccentless(input.value) === normalizeAccentless(task.answer);
  session.attempts += 1;
  input.disabled = true;
  if (check) check.disabled = true;

  const question = game.querySelector("[data-cd-question]");
  const feedback = game.querySelector("[data-cd-feedback]");

  if (exactCorrect) {
    session.clean.add(task.key);
    input.classList.add("is-correct");
    if (question) question.classList.add("is-success");
    if (feedback) {
      feedback.textContent = "Верно!";
      feedback.className = "cd-feedback ok";
    }
    transitionTimer = window.setTimeout(nextTask, 400);
    return;
  }

  if (accentCorrect) {
    session.clean.add(task.key);
    input.classList.add("is-accent-warning");
    if (feedback) {
      const accents = diacriticCharacters(task.answer);
      const note = accents.length
        ? "обрати внимание на " + accents.map(escapeHtml).join(", ")
        : "в эталоне акцент не нужен";
      feedback.innerHTML =
        'Почти идеально! Засчитано, но проверь диакритику: <strong lang="es">' +
        highlightDiacritics(task.answer) +
        "</strong> — " + note + ".";
      feedback.className = "cd-feedback warn";
    }
    transitionTimer = window.setTimeout(nextTask, 1400);
    return;
  }

  session.errors += 1;
  session.awaitingNext = true;
  session.queue.splice(Math.min(2, session.queue.length), 0, task);
  input.classList.add("is-wrong");
  if (question) question.classList.add("is-error");
  if (feedback) {
    feedback.textContent = "Пока нет — эта форма вернётся ещё раз.";
    feedback.className = "cd-feedback no";
  }

  const wrap = game.querySelector("[data-cd-correct-wrap]");
  if (wrap) wrap.innerHTML = '<div class="cd-correct-answer">Правильно:<strong lang="es">' + escapeHtml(task.answer) + "</strong></div>";
  if (check) check.hidden = true;
  const next = game.querySelector("[data-cd-next]");
  if (next) {
    next.hidden = false;
    next.focus();
  }
}

function insertAccent(symbol) {
  const input = game.querySelector("[data-cd-input]");
  if (!input || input.disabled) return;
  const start = Number.isInteger(input.selectionStart) ? input.selectionStart : input.value.length;
  const end = Number.isInteger(input.selectionEnd) ? input.selectionEnd : start;
  if (typeof input.setRangeText === "function") input.setRangeText(symbol, start, end, "end");
  else input.value = input.value.slice(0, start) + symbol + input.value.slice(end);
  input.dispatchEvent(new Event("input", {bubbles:true}));
  input.focus();
}

function renderResults() {
  if (!session) return;
  const seconds = Math.max(1, Math.round((Date.now() - session.startedAt) / 1000));
  const title = session.errors <= 1 ? "Отличная работа!" : "Раунд завершён!";
  renderShell(
    '<div class="cd-results">' +
      '<div class="cd-results-icon" aria-hidden="true">⌨️</div>' +
      '<h2>' + title + '</h2>' +
      '<p>Все ' + session.size + ' форм в итоге введены правильно.</p>' +
      '<div class="cd-stats">' +
        '<div class="cd-stat"><b>' + session.size + '</b>форм</div>' +
        '<div class="cd-stat"><b>' + session.errors + '</b>ошибок</div>' +
        '<div class="cd-stat"><b>' + seconds + 'с</b>время</div>' +
      '</div>' +
      '<div class="cd-result-actions"><button class="cd-secondary" type="button" data-cd-exit>К практике</button>' +
      '<button class="cd-primary" type="button" data-cd-restart>Ещё раз</button></div>' +
    '</div>',
    "results"
  );
  const bar = game.querySelector(".cd-progress i");
  if (bar) bar.style.width = "100%";
  window.dispatchEvent(new CustomEvent("conjugation:finish", {detail:{count:session.size, errors:session.errors, attempts:session.attempts, seconds}}));
}

function start(count, filter) {
  ensureUi();
  const size = COUNTS.includes(Number(count)) ? Number(count) : 10;
  const selectedFilter = saveVerbFilter(VERB_FILTERS.has(filter) ? filter : lastFilter);
  const queue = buildRound(size, selectedFilter);
  if (queue.length < size) {
    alert("Недостаточно форм глаголов для этого фильтра и длины раунда.");
    return false;
  }

  lastCount = size;
  if (chooser && chooser.open) chooser.close();
  clearTimeout(transitionTimer);
  session = {
    size,
    queue,
    current: null,
    clean: new Set(),
    attempts: 0,
    errors: 0,
    awaitingNext: false,
    filter: selectedFilter,
    startedAt: Date.now()
  };
  game.hidden = false;
  setLocked(true);
  syncEntry();
  window.dispatchEvent(new CustomEvent("conjugation:start", {detail:{count:size, filter:selectedFilter}}));
  nextTask();
  return true;
}

function close() {
  clearTimeout(transitionTimer);
  transitionTimer = 0;
  session = null;
  if (game) game.hidden = true;
  setLocked(false);
  syncEntry();
  window.dispatchEvent(new CustomEvent("conjugation:close"));
}

function bindUi() {
  chooser.addEventListener("click", function (event) {
    const filterButton = event.target.closest("[data-cd-filter]");
    if (filterButton) {
      const filter = VERB_FILTERS.has(filterButton.dataset.cdFilter) ? filterButton.dataset.cdFilter : "regular";
      chooser.querySelector("[data-cd-filter-selected]").value = filter;
      chooser.querySelectorAll("[data-cd-filter]").forEach(function (button) {
        const active = button === filterButton;
        button.classList.toggle("active", active);
        button.setAttribute("aria-checked", active ? "true" : "false");
      });
      saveVerbFilter(filter);
      return;
    }

    const countButton = event.target.closest("[data-cd-count]");
    if (countButton) {
      const count = Number(countButton.dataset.cdCount);
      chooser.querySelector("[data-cd-selected]").value = String(count);
      chooser.querySelectorAll("[data-cd-count]").forEach(function (button) {
        button.classList.toggle("active", button === countButton);
      });
      return;
    }
    if (event.target.closest("[data-cd-dialog-close]")) {
      chooser.close();
      return;
    }
    if (event.target.closest("[data-cd-start]")) {
      start(
        Number(chooser.querySelector("[data-cd-selected]").value),
        chooser.querySelector("[data-cd-filter-selected]").value
      );
    }
  });

  game.addEventListener("input", function (event) {
    if (!event.target.matches("[data-cd-input]")) return;
    const check = game.querySelector("[data-cd-check]");
    if (check) check.disabled = normalize(event.target.value).length === 0;
  });

  game.addEventListener("click", function (event) {
    if (event.target.closest("[data-cd-cheatsheet]")) {
      window.dispatchEvent(new CustomEvent("verb-wheel:open"));
      return;
    }
    const accent = event.target.closest("[data-cd-accent]");
    if (accent) return insertAccent(accent.dataset.cdAccent);
    if (event.target.closest("[data-cd-check]")) return checkCurrent();
    if (event.target.closest("[data-cd-next]")) return nextTask();
    if (event.target.closest("[data-cd-close],[data-cd-exit]")) return close();
    if (event.target.closest("[data-cd-restart]")) return start(lastCount, session && session.filter ? session.filter : lastFilter);
  });

  game.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== "Enter" || !session) return;
    event.preventDefault();
    if (session.awaitingNext) nextTask();
    else checkCurrent();
  });
}

function observePractice() {
  const ids = [
    "trainerLayout", "headerNavPractice", "navPractice", "headerNavHome", "headerNavWords",
    "headerNavMistakes", "navHome", "navWords", "navMistakes", "chooseTopicBtn", "learnWordsBtn"
  ];
  const observer = new MutationObserver(syncEntry);
  ids.map(function (id) { return document.getElementById(id); }).filter(Boolean).forEach(function (node) {
    observer.observe(node, {attributes:true, attributeFilter:["class", "hidden"]});
    node.addEventListener("click", function () { window.setTimeout(syncEntry, 0); });
  });
  const title = document.getElementById("catalogTitle");
  if (title) observer.observe(title, {childList:true, subtree:true});
}

function init() {
  lastFilter = readVerbFilter();
  injectStyles();
  ensureEntry();
  ensureUi();
  bindUi();
  observePractice();
  syncEntry();
}

window.ConjugationDrill = Object.freeze({
  version: VERSION,
  start,
  close,
  collectPool,
  catalog: getConjugationVerbCatalog,
  groups: function () { return VERB_GROUPS.map(function (group) { return Object.assign({}, group); }); },
  currentVerb: getCurrentConjugationVerb
});

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true});
else init();
