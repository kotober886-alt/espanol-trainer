import { CAT_PHRASES } from "../../data/cat-phrases.js?v=20260923-cat-phrases44";

const FADE_MS = 140;

function randomPhraseIndex(currentIndex) {
  const count = CAT_PHRASES.length;
  if (count <= 1) return 0;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * count);
  }
  return nextIndex;
}

export function bindCatSpeechBubble() {
  const bubble = document.getElementById("catSpeechBubble");
  const spanish = document.getElementById("catSpeechEs");
  const russian = document.getElementById("catSpeechRu");

  if (!bubble || !spanish || !russian || !CAT_PHRASES.length) return false;
  if (bubble.dataset.catSpeechBound === "true") return true;

  bubble.dataset.catSpeechBound = "true";

  let currentIndex = -1;
  let fadeTimer = 0;

  function applyPhrase(index) {
    const phrase = CAT_PHRASES[index];
    if (!phrase) return;
    currentIndex = index;
    spanish.textContent = phrase.es;
    russian.textContent = phrase.ru;
    bubble.setAttribute("aria-label", phrase.es + " — " + phrase.ru + ". Нажми, чтобы сменить фразу.");
  }

  function showRandomPhrase(animate) {
    const nextIndex = randomPhraseIndex(currentIndex);

    window.clearTimeout(fadeTimer);

    if (!animate) {
      bubble.classList.remove("is-changing");
      applyPhrase(nextIndex);
      return;
    }

    bubble.classList.add("is-changing");
    fadeTimer = window.setTimeout(function () {
      applyPhrase(nextIndex);
      requestAnimationFrame(function () {
        bubble.classList.remove("is-changing");
      });
    }, FADE_MS);
  }

  showRandomPhrase(false);

  bubble.addEventListener("click", function (event) {
    event.stopPropagation();
    showRandomPhrase(true);
  });

  return true;
}
