(function () {
  function injectStyles() {
    if (document.getElementById('profile-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'profile-modal-styles';
    style.textContent = `
#profile-modal { border:none; border-radius:20px; padding:24px; max-width:420px; width:90%; background:#fff; box-shadow:0 16px 40px rgba(0,0,0,.25); font-family:inherit; color:#2c3e50; position:relative; }
#profile-modal::backdrop { background:rgba(15,23,42,.6); backdrop-filter:blur(4px); }
#profile-modal .close-btn { position:absolute; top:14px; right:14px; background:#f1f5f9; border:none; width:32px; height:32px; border-radius:50%; cursor:pointer; }
#btn-profile { background:transparent; border:none; outline:none; box-shadow:none; cursor:pointer; font-size:1.3rem; padding:8px 10px; border-radius:12px; display:inline-flex; align-items:center; justify-content:center; transition:background .2s ease, transform .1s ease; line-height:1; }
#btn-profile:hover { background:rgba(255,255,255,.4); }
#btn-profile:active { transform:scale(.95); }
.profile-key-box { background:#f8fafc; border:1px dashed #cbd5e1; border-radius:12px; padding:12px 14px; display:flex; align-items:center; justify-content:space-between; gap:10px; }
.profile-key-value { font-family:monospace; font-size:1.15rem; font-weight:bold; }
.btn-primary-action { background:#6366f1; color:#fff; border:none; padding:8px 14px; border-radius:8px; cursor:pointer; }
.sync-status-row { display:flex; gap:8px; align-items:center; margin:10px 0 16px; }
.sync-dot { width:8px; height:8px; background:#10b981; border-radius:50%; }
.restore-section { border-top:1px solid #e2e8f0; padding-top:16px; }
.restore-input-group { display:flex; gap:8px; margin-top:10px; }
.restore-input-group input { flex:1; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; }
`;
    document.head.appendChild(style);
  }

  function initProfileModal() {
    if (document.getElementById('profile-modal')) return;
    injectStyles();

    const backpackBtn = document.getElementById('backpackBtn') || Array.from(document.querySelectorAll('button')).find(el => el.textContent.includes('🎒'));
    if (!backpackBtn) return;

    const profileBtn = document.createElement('button');
    profileBtn.id = 'btn-profile';
    profileBtn.className = 'header-action-btn';
    profileBtn.title = 'Профиль и синхронизация';
    profileBtn.textContent = '👤';
    backpackBtn.parentNode.insertBefore(profileBtn, backpackBtn.nextSibling);

    const modal = document.createElement('dialog');
    modal.id = 'profile-modal';
    modal.innerHTML = `
      <button class="close-btn" type="button">×</button>
      <h2>Мой профиль</h2>
      <div class="profile-key-box"><span class="profile-key-value" id="profileCodeValue"></span><button class="btn-primary-action" id="copyProfileCode" type="button">Копировать</button></div>
      <p>Сохрани этот ключ. Введи его на другом устройстве, чтобы продолжить обучение со всеми трофеями и прогрессом.</p>
      <div class="sync-status-row"><span class="sync-dot"></span><span>Синхронизировано только что</span></div>
      <div class="restore-section"><h3>Вход на новом устройстве</h3><div class="restore-input-group"><input id="profileCodeInput" placeholder="Введите GATO-XXXX-XXXX"><button class="btn-primary-action" id="restoreProfileBtn" type="button">Восстановить</button></div></div>`;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').onclick = () => modal.close();
    profileBtn.onclick = () => { document.getElementById('profileCodeValue').textContent = window.syncManager?.profileCode || ''; modal.showModal(); };
    document.getElementById('copyProfileCode').onclick = async () => { await navigator.clipboard.writeText(window.syncManager.profileCode); alert('Скопировано!'); };
    document.getElementById('restoreProfileBtn').onclick = async () => { if (confirm('Текущие локальные данные на этом устройстве будут заменены')) await window.syncManager.restoreFromCode(document.getElementById('profileCodeInput').value); };
  }

  window.profileModal = { init: initProfileModal };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initProfileModal); else initProfileModal();
})();
