const BACKPACK_AUDIO_BASE = "assets/audio/backpack/";
const audioCache = new Map();

let cachedVoices = [];

function refreshVoices() {
  if (!("speechSynthesis" in window)) {
    cachedVoices = [];
    return cachedVoices;
  }

  try {
    cachedVoices = window.speechSynthesis.getVoices() || [];
  } catch (error) {
    cachedVoices = [];
  }

  return cachedVoices;
}

function normalized(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function voiceScore(voice, lang) {
  const requested = normalized(lang || "es-ES");
  const voiceLang = normalized(voice && voice.lang);
  const name = normalized(voice && voice.name);
  let score = 0;

  if (voiceLang === requested) score += 500;
  else if (voiceLang.indexOf("es") === 0) score += 220;

  if (name.indexOf("google espanol") >= 0) score += 420;
  if (name.indexOf("paulina") >= 0) score += 380;
  if (name.indexOf("monica") >= 0) score += 360;

  const isEdgeNatural =
    name.indexOf("microsoft") >= 0 &&
    (name.indexOf("natural") >= 0 || name.indexOf("online") >= 0);

  if (isEdgeNatural) score += 320;
  if (voice && voice.localService) score += 10;

  return score;
}

function pickVoice(lang) {
  const voices = refreshVoices();
  if (!voices.length) return null;

  const spanish = voices.filter(function (voice) {
    return /^es(?:-|$)/i.test(String(voice && voice.lang || ""));
  });

  const pool = spanish.length ? spanish : voices;
  return pool.slice().sort(function (a, b) {
    return voiceScore(b, lang) - voiceScore(a, lang);
  })[0] || null;
}

function makeBackpackAudio(itemId) {
  const id = String(itemId || "").trim();
  if (!id) return null;
  if (audioCache.has(id)) return audioCache.get(id);

  const audio = new Audio(BACKPACK_AUDIO_BASE + encodeURIComponent(id) + ".mp3");
  audio.preload = "auto";

  const entry = {
    audio: audio,
    status: "loading"
  };

  audio.addEventListener("loadeddata", function () {
    entry.status = "ready";
  }, { once: true });

  audio.addEventListener("canplaythrough", function () {
    entry.status = "ready";
  }, { once: true });

  audio.addEventListener("error", function () {
    entry.status = "error";
  });

  audioCache.set(id, entry);

  try {
    audio.load();
  } catch (error) {
    entry.status = "error";
  }

  return entry;
}

function playTTS(text, lang = "es-ES") {
  const phrase = String(text || "").trim();
  if (!phrase || !("speechSynthesis" in window)) return false;

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(phrase);
    const voice = pickVoice(lang);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || lang;
    } else {
      utterance.lang = lang;
    }

    utterance.rate = 0.92;
    utterance.pitch = 1.02;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (error) {
    return false;
  }
}

function playBackpackItem(itemId, text = "") {
  const entry = makeBackpackAudio(itemId);
  if (!entry) return Promise.resolve(playTTS(text));

  const audio = entry.audio;

  if (entry.status === "error") {
    return Promise.resolve(playTTS(text));
  }

  if (entry.status !== "ready" && audio.readyState < 2) {
    return Promise.resolve(playTTS(text));
  }

  entry.status = "ready";

  try {
    audio.pause();
    audio.currentTime = 0;
    const playback = audio.play();

    if (playback && typeof playback.then === "function") {
      return playback
        .then(function () { return true; })
        .catch(function () { return playTTS(text); });
    }

    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(playTTS(text));
  }
}

if ("speechSynthesis" in window) {
  refreshVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}

export const AudioManager = Object.freeze({
  playBackpackItem: playBackpackItem,
  playTTS: playTTS
});

export default AudioManager;
