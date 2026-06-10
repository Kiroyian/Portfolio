function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function initializeModal(buttonId, modalId, closeId, cancelId, backdropId) {
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementById(closeId);
    const cancelButton = document.getElementById(cancelId);
    const backdrop = document.getElementById(backdropId);

    if (!button || !modal || !closeButton || !cancelButton || !backdrop) {
        return;
    }

    function toggle(show) {
        modal.classList.toggle('modal-visible', show);
        modal.setAttribute('aria-hidden', String(!show));
    }

    button.addEventListener('click', () => toggle(true));
    closeButton.addEventListener('click', () => toggle(false));
    cancelButton.addEventListener('click', () => toggle(false));
    backdrop.addEventListener('click', () => toggle(false));
}

window.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    initializeModal('open-transcript-modal', 'transcript-modal', 'modal-close', 'transcript-cancel', 'modal-backdrop');
    initializeModal('open-support-modal', 'support-modal', 'support-modal-close', 'support-cancel', 'support-modal-backdrop');
});
