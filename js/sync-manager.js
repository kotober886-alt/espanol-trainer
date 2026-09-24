const PROFILE_KEY = 'gato_profile_code';
const FIREBASE_BASE_URL = "https://gato-trainer-default-rtdb.asia-southeast1.firebasedatabase.app";

function safeParse(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch (e) { return fallback; }
}

function generateProfileCode() {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `GATO-${part()}-${part()}`;
}

class SyncManager {
  constructor() {
    this.pending = null;
    if (!localStorage.getItem(PROFILE_KEY)) localStorage.setItem(PROFILE_KEY, generateProfileCode());
    setTimeout(() => this.installHooks(), 0);
  }

  get profileCode() { return localStorage.getItem(PROFILE_KEY); }

  collectState() {
    return {
      profileCode: this.profileCode,
      updatedAt: Date.now(),
      backpack: safeParse('gato_backpack_state', {}),
      learnedWords: safeParse('gato_learned_words', []),
      errors: safeParse('gato_errors_state', []),
      streak: safeParse('gato_streak_state', {}),
      settings: safeParse('gato_settings', {})
    };
  }

  queueSave() {
    clearTimeout(this.pending);
    this.pending = setTimeout(() => this.saveToCloud(), 1500);
  }

  installHooks() {
    window.addEventListener('gato-save-state', () => this.queueSave());
    window.addEventListener('storage', () => this.queueSave());
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.queueSave();
    });

    const tryPatch = () => {
      const manager = window.BackpackManager || window.backpackManager;
      if (manager && !manager.__syncPatched && typeof manager.unlockItem === 'function') {
        const original = manager.unlockItem.bind(manager);
        manager.unlockItem = (...args) => {
          const result = original(...args);
          this.queueSave();
          return result;
        };
        manager.__syncPatched = true;
      }
    };

    tryPatch();
    setTimeout(tryPatch, 1000);
    setTimeout(tryPatch, 3000);

    if (localStorage.getItem(PROFILE_KEY)) this.queueSave();
  }

  async saveToCloud() {
    const state = this.collectState();
    const profileCode = state.profileCode || generateProfileCode();
    localStorage.setItem(PROFILE_KEY, profileCode);
    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/profiles/${encodeURIComponent(profileCode)}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.collectState())
      });
      if (response.ok) {
        localStorage.setItem('gato_last_sync', String(Date.now()));
        window.dispatchEvent(new CustomEvent('gato-sync-complete'));
      }
    } catch (e) {
      console.warn('Profile sync failed', e);
    }
    return state;
  }

  async restoreFromCode(inputCode) {
    const code = String(inputCode || '').trim().toUpperCase();
    if (!code) return false;

    try {
      const response = await fetch(`${FIREBASE_BASE_URL}/profiles/${encodeURIComponent(code)}.json`);
      if (!response.ok) {
        alert('Код не найден. Проверьте правильность ввода');
        return false;
      }

      const data = await response.json();
      if (!data) {
        alert('Код не найден. Проверьте правильность ввода');
        return false;
      }

      if (data.backpack) localStorage.setItem('gato_backpack_state', JSON.stringify(data.backpack));
      if (data.learnedWords) localStorage.setItem('gato_learned_words', JSON.stringify(data.learnedWords));
      if (data.errors) localStorage.setItem('gato_errors_state', JSON.stringify(data.errors));
      if (data.streak) localStorage.setItem('gato_streak_state', JSON.stringify(data.streak));
      if (data.settings) localStorage.setItem('gato_settings', JSON.stringify(data.settings));

      localStorage.setItem(PROFILE_KEY, code);
      localStorage.setItem('gato_last_sync', String(Date.now()));
      alert('Прогресс успешно восстановлен!');
      window.location.reload();
      return true;
    } catch (e) {
      alert('Код не найден. Проверьте правильность ввода');
      return false;
    }
  }
}

window.syncManager = new SyncManager();
