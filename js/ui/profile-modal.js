(function () {
  function initProfileModal() {
    if (document.getElementById('profile-modal')) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/profile.css?v=20260924-profile-sync1';
    document.head.appendChild(link);

    const backpackBtn = document.getElementById('backpackBtn') || Array.from(document.querySelectorAll('button')).find((el) => el.textContent.includes('🎒'));
    if (!backpackBtn) return;

    const profileBtn = document.createElement('button');
    profileBtn.id = 'btn-profile';
    profileBtn.className = 'header-action-btn';
    profileBtn.title = 'Профиль и синхронизация';
    profileBtn.type = 'button';
    profileBtn.style.cssText = 'cursor:pointer;font-size:1.2rem;background:none;border:none;padding:4px 8px;';
    profileBtn.textContent = '👤';
    backpackBtn.parentNode.insertBefore(profileBtn, backpackBtn.nextSibling);

    const modal = document.createElement('dialog');
    modal.id = 'profile-modal';
    modal.innerHTML = '<form method="dialog"><button>×</button><h2>Мой профиль</h2><div>Твой секретный ключ:</div><strong id="profileCodeValue"></strong><button type="button" id="copyProfileCode">Скопировать ключ</button><p>Сохрани этот код. Введи его на другом телефоне или планшете, чтобы не потерять прогресс и рюкзак.</p><div id="profileSyncStatus">🟢 Синхронизировано только что</div><hr><h3>Вход на новом устройстве</h3><input id="profileCodeInput" placeholder="Введите GATO-XXXX-XXXX"><button type="button" id="restoreProfileBtn">Восстановить прогресс</button></form>';
    document.body.appendChild(modal);

    profileBtn.onclick = function () {
      document.getElementById('profileCodeValue').textContent = window.syncManager?.profileCode || '';
      modal.showModal();
    };

    document.getElementById('copyProfileCode').onclick = async function () {
      await navigator.clipboard.writeText(window.syncManager.profileCode);
      alert('Скопировано!');
    };

    document.getElementById('restoreProfileBtn').onclick = async function () {
      if (confirm('Текущие локальные данные на этом устройстве будут заменены')) {
        await window.syncManager.restoreFromCode(document.getElementById('profileCodeInput').value);
      }
    };
  }

  window.profileModal = { init: initProfileModal };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initProfileModal);
  else initProfileModal();
})();
