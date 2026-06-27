function switchTab(tab) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById('page-' + tab);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tab) {
            item.classList.add('active');
        }
    });
}

function openModal(type) {
    const overlay = document.getElementById('modal-overlay');
    const modals = {
        product: document.getElementById('modal-product'),
        tryon: document.getElementById('modal-tryon'),
        search: document.getElementById('modal-search'),
        notification: document.getElementById('modal-notification'),
        analysis: document.getElementById('modal-analysis'),
        look: document.getElementById('modal-look')
    };
    
    Object.values(modals).forEach(modal => {
        if (modal) modal.style.display = 'none';
    });
    
    if (modals[type]) {
        modals[type].style.display = 'block';
    }
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
    
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const tryonColors = document.querySelectorAll('.tryon-color');
    tryonColors.forEach((color, index) => {
        color.addEventListener('click', function() {
            tryonColors.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const computedStyle = getComputedStyle(this);
            const colorValue = computedStyle.getPropertyValue('--color').trim();
            
            const lip = document.querySelector('.face-lip');
            if (lip) {
                lip.style.background = colorValue;
            }
        });
    });
    
    const tryonTabs = document.querySelectorAll('.tryon-tab');
    tryonTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tryonTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('modal-overlay');
            if (overlay.classList.contains('active')) {
                closeModal();
            }
        }
    });
});
