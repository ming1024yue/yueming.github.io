// Set default language or get from localStorage
let currentLang = localStorage.getItem('language') || 'en';

function toggleLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}

// Set initial language when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    document.documentElement.lang = currentLang;
    
    // Make sure language switcher is visible
    const enElements = document.querySelectorAll('[data-en]');
    const zhElements = document.querySelectorAll('[data-zh]');
    
    if (currentLang === 'en') {
        enElements.forEach(el => el.style.display = 'inline-block');
        zhElements.forEach(el => el.style.display = 'none');
    } else {
        enElements.forEach(el => el.style.display = 'none');
        zhElements.forEach(el => el.style.display = 'inline-block');
    }
}); 