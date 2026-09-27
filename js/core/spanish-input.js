/**
 * Shared Spanish text-input helpers.
 * Used by every exercise mode that accepts a typed answer.
 */

export const SPANISH_SPECIAL_CHARS = Object.freeze(["á", "é", "í", "ó", "ú", "ñ", "¿", "¡"]);

export function normalizeAnswer(value) {
  return String(value == null ? "" : value)
    .trim()
    .toLowerCase()
    .normalize("NFC")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_\`~()?"'¡¿]/g, "")
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ñ/g, "n")
    .replace(/\s+/g, " ")
    .trim();
}

export function insertSpanishCharacter(input, symbol) {
  if (!input || input.disabled || input.readOnly) return false;

  const value = String(input.value || "");
  const start = Number.isInteger(input.selectionStart) ? input.selectionStart : value.length;
  const end = Number.isInteger(input.selectionEnd) ? input.selectionEnd : start;

  if (typeof input.setRangeText === "function") {
    input.setRangeText(symbol, start, end, "end");
  } else {
    input.value = value.slice(0, start) + symbol + value.slice(end);
    const caret = start + symbol.length;
    if (typeof input.setSelectionRange === "function") input.setSelectionRange(caret, caret);
  }

  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.focus({ preventScroll: true });
  return true;
}

export function attachSpanishCharPanel(input, options = {}) {
  if (!input || !input.parentNode) return null;

  const existingId = input.dataset.spanishCharPanelId;
  if (existingId) {
    const existing = document.getElementById(existingId);
    if (existing) return existing;
  }

  const panel = document.createElement("div");
  const id = "spanishChars-" + Math.random().toString(36).slice(2, 10);
  panel.id = id;
  panel.className = "spanish-char-panel";
  panel.setAttribute("role", "group");
  panel.setAttribute("aria-label", options.label || "Испанские спецсимволы");
  input.dataset.spanishCharPanelId = id;

  SPANISH_SPECIAL_CHARS.forEach(function (symbol) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "spanish-char-key";
    button.dataset.spanishChar = symbol;
    button.textContent = "[" + symbol + "]";
    button.setAttribute("aria-label", "Вставить " + symbol);

    button.addEventListener("pointerdown", function (event) {
      event.preventDefault();
    });
    button.addEventListener("mousedown", function (event) {
      event.preventDefault();
    });
    button.addEventListener("click", function () {
      insertSpanishCharacter(input, symbol);
    });

    panel.appendChild(button);
  });

  const anchor = options.anchor || input;
  anchor.insertAdjacentElement("afterend", panel);

  function syncState() {
    panel.hidden = Boolean(input.hidden);
    panel.querySelectorAll("button").forEach(function (button) {
      button.disabled = Boolean(input.disabled || input.readOnly);
    });
  }

  syncState();
  const observer = new MutationObserver(syncState);
  observer.observe(input, { attributes: true, attributeFilter: ["disabled", "hidden", "readonly"] });

  return panel;
}
