(function() {
  const VIEW_STORAGE_KEY = 'gato_current_view';

  function saveView(view, payload = {}) {
    try {
      sessionStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify({ view, payload, time: Date.now() }));
    } catch(e) {}
  }

  function getSavedView() {
    try {
      const raw = sessionStorage.getItem(VIEW_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  }

  function hookNavigation() {
    if (typeof window.showHome === 'function') {
      const orig = window.showHome;
      window.showHome = function(...args) {
        saveView('home');
        return orig.apply(this, args);
      };
    }

    if (typeof window.showCatalog === 'function') {
      const orig = window.showCatalog;
      window.showCatalog = function(mode, ...args) {
        saveView('catalog', { mode });
        return orig.apply(this, args);
      };
    }

    if (typeof window.showMistakes === 'function') {
      const orig = window.showMistakes;
      window.showMistakes = function(...args) {
        saveView('mistakes');
        return orig.apply(this, args);
      };
    }

    if (typeof window.showWorkspace === 'function') {
      const orig = window.showWorkspace;
      window.showWorkspace = function(mode, topic, ...args) {
        saveView('workspace', { mode, topic });
        return orig.apply(this, args);
      };
    }

    const saved = getSavedView();
    if (saved && saved.view && saved.view !== 'home') {
      setTimeout(() => {
        try {
          if (saved.view === 'catalog' && typeof window.showCatalog === 'function') {
            window.showCatalog(saved.payload?.mode || 'learn');
          } else if (saved.view === 'mistakes' && typeof window.showMistakes === 'function') {
            window.showMistakes();
          } else if (saved.view === 'workspace' && typeof window.showWorkspace === 'function') {
            window.showWorkspace(saved.payload?.mode, saved.payload?.topic);
          }
        } catch(e) {
          console.warn('[ViewPreserver] Failed to restore view, staying on home', e);
        }
      }, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookNavigation);
  } else {
    hookNavigation();
  }
})();
