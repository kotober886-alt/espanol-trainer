(function initProfileAutoLoad() {
  const scripts = ['js/sync-manager.js', 'js/ui/profile-modal.js'];
  scripts.forEach(src => {
    if (!document.querySelector(`script[src*="${src}"]`)) {
      const s = document.createElement('script');
      s.src = `${src}?v=20260924-profile-sync1`;
      s.defer = true;
      document.head.appendChild(s);
    }
  });
})();
