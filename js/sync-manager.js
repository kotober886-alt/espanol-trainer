const PROFILE_KEY = 'gato_profile_code';

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

  async saveToCloud() {
    const state = this.collectState();
    try {
      if (!window.PROFILE_SYNC_ENDPOINT) return state;
      await fetch(`${window.PROFILE_SYNC_ENDPOINT}/${encodeURIComponent(state.profileCode)}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(state)
      });
      localStorage.setItem('gato_last_sync', String(Date.now()));
    } catch (e) { console.warn('Profile sync failed', e); }
    return state;
  }

  async restoreFromCode(inputCode) {
    const code = String(inputCode || '').trim().toUpperCase();
    if (!code) throw new Error('Введите код профиля');
    if (!window.PROFILE_SYNC_ENDPOINT) throw new Error('Облако синхронизации не подключено');
    const response = await fetch(`${window.PROFILE_SYNC_ENDPOINT}/${encodeURIComponent(code)}`);
    if (!response.ok) throw new Error('Профиль не найден');
    const state = await response.json();
    localStorage.setItem('gato_backpack_state', JSON.stringify(state.backpack || {}));
    localStorage.setItem('gato_learned_words', JSON.stringify(state.learnedWords || []));
    localStorage.setItem('gato_errors_state', JSON.stringify(state.errors || []));
    localStorage.setItem('gato_streak_state', JSON.stringify(state.streak || {}));
    localStorage.setItem('gato_settings', JSON.stringify(state.settings || {}));
    localStorage.setItem(PROFILE_KEY, code);
    location.reload();
  }
}

window.syncManager = new SyncManager();
