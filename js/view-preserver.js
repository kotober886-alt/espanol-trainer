(function() {
  const HASH_MAP = {
    words: '#catalog-learn',
    practice: '#catalog-practice',
    mistakes: '#mistakes'
  };
  const STORAGE_KEY = 'gato_active_nav';

  function saveNav(value) {
    try {
      sessionStorage.setItem(STORAGE_KEY, value || '');
    } catch(e) {}
  }

  function setHash(hash) {
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      saveNav(hash);
    }
  }

  function findButtons() {
    return {
      home: document.querySelector('#headerNavHome, .header-nav-link.home, [aria-label*="Главн"]'),
      words: document.querySelector('#headerNavWords, .header-nav-link:nth-child(2)'),
      practice: document.querySelector('#headerNavPractice, .header-nav-link:nth-child(3)'),
      mistakes: document.querySelector('#headerNavMistakes, .header-nav-link:nth-child(4)')
    };
  }

  function bindNavigation() {
    const buttons = findButtons();

    if (buttons.words) {
      buttons.words.addEventListener('click', function() {
        setHash(HASH_MAP.words);
        saveNav(HASH_MAP.words);
      });
    }

    if (buttons.practice) {
      buttons.practice.addEventListener('click', function() {
        setHash(HASH_MAP.practice);
        saveNav(HASH_MAP.practice);
      });
    }

    if (buttons.mistakes) {
      buttons.mistakes.addEventListener('click', function() {
        setHash(HASH_MAP.mistakes);
        saveNav(HASH_MAP.mistakes);
      });
    }

    if (buttons.home) {
      buttons.home.addEventListener('click', function() {
        history.replaceState(null, '', window.location.pathname + window.location.search);
        saveNav('');
      });
    }
  }

  function restoreNavigation() {
    const hash = window.location.hash || sessionStorage.getItem(STORAGE_KEY) || '';
    if (!hash) return;

    const tryRestore = () => {
      const buttons = findButtons();
      if (hash === HASH_MAP.mistakes && buttons.mistakes) {
        buttons.mistakes.click();
        return true;
      }
      if (hash === HASH_MAP.practice && buttons.practice) {
        buttons.practice.click();
        return true;
      }
      if (hash === HASH_MAP.words && buttons.words) {
        buttons.words.click();
        return true;
      }
      return false;
    };

    let attempts = 0;
    const timer = setInterval(() => {
      attempts++;
      if (tryRestore() || attempts > 10) {
        clearInterval(timer);
      }
    }, 300);
  }

  function init() {
    bindNavigation();
    restoreNavigation();

    new MutationObserver(() => {
      bindNavigation();
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
