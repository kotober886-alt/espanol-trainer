export function initProfileModal() {
  const btn = document.getElementById('profileBtn');
  const modal = document.getElementById('profileDialog');
  if (!btn || !modal) return;
  btn.onclick = () => {
    document.getElementById('profileCodeValue').textContent = window.syncManager?.profileCode || '';
    modal.showModal();
  };
  document.getElementById('copyProfileCode')?.addEventListener('click', async () => {
    await navigator.clipboard.writeText(window.syncManager.profileCode);
    const toast = document.getElementById('toast');
    if (toast) { toast.textContent = 'Скопировано!'; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1500); }
  });
  document.getElementById('restoreProfileBtn')?.addEventListener('click', async () => {
    if (confirm('Текущие локальные данные на этом устройстве будут заменены')) {
      await window.syncManager.restoreFromCode(document.getElementById('profileCodeInput').value);
    }
  });
}
