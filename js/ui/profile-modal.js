(function () {
  function injectStyles() {
    if (document.getElementById('profile-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'profile-modal-styles';
    style.textContent = `
#profile-modal {
  border: none; border-radius: 20px; padding: 24px; max-width: 420px; width: 90%;
  background: #ffffff; box-shadow: 0 16px 40px rgba(0,0,0,.25);
  font-family: inherit; color: #2c3e50; position: relative;
}
#profile-modal::backdrop { background: rgba(15,23,42,.6); backdrop-filter: blur(4px); }
#profile-modal .close-btn { position:absolute; top:14px; right:14px; background:#f1f5f9; border:none; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:16px; display:flex; align-items:center; justify-content:center; transition:.2s; }
#profile-modal .close-btn:hover { background:#e2e8f0; }
#profile-modal h2 { margin:0 0 16px; font-size:1.4rem; font-weight:700; }
.profile-key-box { background:#f8fafc; border:1px dashed #cbd5e1; border-radius:12px; padding:12px 14px; display:flex; align-items:center; justify-content:space-between; margin:12px 0; gap:10px; }
.profile-key-value { font-family:monospace; font-size:1.15rem; font-weight:bold; letter-spacing:1px; color:#1e293b; }
.btn-primary-action { background:#6366f1; color:#fff; border:none; padding:8px 14px; border-radius:8px; cursor:pointer; font-weight:600; transition:.2s; }
.btn-primary-action:hover { background:#4f46e5; }
.sync-status-row { display:flex; align-items:center; gap:8px; font-size:.85rem; color:#64748b; margin:10px 0 16px; }
.sync-dot { width:8px; height:8px; background:#10b981; border-radius:50%; display:inline-block; box-shadow:0 0 6px #10b981; }
.restore-section { border-top:1px solid #e2e8f0; padding-top:16px; margin-top:12px; }
.restore-input-group { display:flex; gap:8px; margin-top:10px; }
.restore-input-group input { flex:1; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:.95rem; outline:none; }
.restore-input-group input:focus { border-color:#6366f1; }
`;
    document.head.appendChild(style);
  }

  function initProfileModal() {
    if (document.getElementById('profile-modal')) return;
    injectStyles();

    const backpackBtn = document.getElementById('backpackBtn') || Array.from(document.querySelectorAll('button')).find((el) => el.textContent.includes('🎒'));
    if (!backpackBtn) return;

    const profileBtn = document.createElement('button');
    profileBtn.id = 'btn-profile';
    profileBtn.className = 'header-action-btn';
    profileBtn.title = 'Профиль и синхронизация';
    profileBtn.type = 'button';
    profileBtn.textContent = '👤';
    profileBtn.style.cssText = 'cursor:pointer;font-size:1.2rem;background:none;border:none;padding:4px 8px;';
    backpackBtn.parentNode.insertBefore(profileBtn, backpackBtn.nextSibling);

    const modal = document.createElement('dialog');
    modal.id = 'profile-modal';
    modal.innerHTML = `
      <button class="close-btn" type="button" aria-label="Закрыть">×</button>
      <h2>Мой профиль</h2>
      <div class="profile-key-box">
        <span class="profile-key-value" id="profileCodeValue"></span>
        <button class="btn-primary-action" type="button" id="copyProfileCode">Копировать</button>
      </div>
      <p>Сохрани этот код. Введи его на другом телефоне или планшете, чтобы не потерять прогресс и рюкзак.</p>
      <div class="sync-status-row"><span class="sync-dot"></span><span id="profileSyncStatus">Синхронизировано только что</span></div>
      <div class="restore-section">
        <h3>Вход на новом устройстве</h3>
        <div class="restore-input-group">
          <input id="profileCodeInput" placeholder="Введите GATO-XXXX-XXXX">
          <button class="btn-primary-action" type="button" id="restoreProfileBtn">Восстановить</button>
        </div>
      </div>`;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').onclick = () => modal.close();
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
