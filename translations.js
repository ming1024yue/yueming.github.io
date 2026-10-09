// Apply the saved theme before the page renders to reduce color flashing.
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

function initializeSiteLogo() {
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.type = 'image/png';
    favicon.href = 'images/site_favicon.png';

    const menu = document.querySelector('.menu-group');
    if (!menu) return;

    const homeLink = menu.querySelector('a[href="index.html"]');
    if (!homeLink) return;

    homeLink.className = 'site-logo';
    homeLink.setAttribute('aria-label', 'Home');
    homeLink.innerHTML = '<img src="images/site_logo.png" alt="">';
}

function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

function updateThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    const isDark = getCurrentTheme() === 'dark';
    const isChinese = getCurrentLanguage() === 'zh';
    const label = isDark
        ? (isChinese ? '切换到浅色主题' : 'Switch to light theme')
        : (isChinese ? '切换到深色主题' : 'Switch to dark theme');

    button.textContent = '';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(isDark));
}

function toggleTheme() {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeToggle();
}

function initializeThemeToggle() {
    const menu = document.querySelector('.menu-group');
    if (!menu || menu.querySelector('.theme-toggle')) return;

    const controls = document.createElement('div');
    controls.className = 'menu-controls';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.addEventListener('click', toggleTheme);
    controls.appendChild(button);

    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.classList.add('menu-language-switcher');
        const zhButton = languageSwitcher.querySelector('#lang-zh');
        const enButton = languageSwitcher.querySelector('#lang-en');
        if (zhButton) zhButton.textContent = '中';
        if (enButton) enButton.textContent = 'EN';
        controls.appendChild(languageSwitcher);
    }

    menu.appendChild(controls);
    updateThemeToggle();
}

const translations = {
    zh: {
        // Navigation
        'nav.thoughts': '想法',
        'nav.books': '阅读',
        'nav.products': '我的产品',
        
        // aboutme page
        'aboutme.title': '岳铭',
        
        // Thoughts page
        'thoughts.title': '想法',
        'thoughts.all': '全部',
        
        // Books page
        'books.title': '阅读列表',
        'books.status.finished': '已读完',
        'books.status.reading': '正在读',
        'books.hongloumeng.title': '红楼梦',
        'books.hongloumeng.author': 'by 曹雪芹',
        'books.hongloumeng.comment': '"身后有余忘缩手，眼前无路想回头。"',
        'books.walden.title': 'Walden',
        'books.walden.author': 'by Henry David Thoreau',
        'books.walden.comment': '"A man who has at length found something to do will not need to get a new suit to do it in. If there is not a new man, how can the new clothes be made to fit? All men want, not something to do with, but something to do, or rather something to be. Perhaps we should never procure a new suit until we have so conducted that we feel like new men in the old"',
        'books.zhongxian.title': '中县干部',
        'books.zhongxian.author': 'by 冯军旗',
        'books.zhongxian.comment': '"干部的权力是人民给的"',
        'books.essential_math.title': 'essential math for AI',
        'books.essential_math.author': 'by Hala Nelson',
        'books.essential_math.comment': '"关于AI的数学基础"',
        'books.deep_learning.title': 'Deep Learning',
        'books.deep_learning.author': 'by John.D.Kelleher',
        'books.deep_learning.comment': '"The book introduce deep learning concepts, which covers data, algorithms,models and their training."',
        'books.source_code.title': 'Source Code-My Beginnings',
        'books.source_code.author': 'by Bill Gates',
        'books.source_code.comment': '"The autobiography written by Microsoft founder Bill Gates."',
        
        // Products page
        'products.title': '我的产品',
        'products.googletranslate.description': '原生 Mac 菜单栏翻译工具，快捷键随时唤起 Google 翻译，支持 M 系列芯片。',
        'products.googletranslate.opensource': '开源',

        'products.googletranslate.download': '下载 Mac 版',
        'products.roam.title': '漫步星球 · ROAM',
        'products.roam.description': '把日常步数变成一场可视化的星球旅程，每一步都在把远方拉近。',
        'products.roam.cover.alt': '漫步星球应用图标',
        'products.roam.description.detail': '把日常步数变成一场可视化的星球旅程。选择起点与目的地，在星球上看见每一步带来的进展。',
        'products.roam.feature1': '读取 Apple 健康中的步数与步行距离，也支持手动记录',
        'products.roam.feature2': '用可旋转、可缩放的星球展示真实城市间距离',
        'products.roam.feature3': '支持 Apple Watch，并可保存旅程、解锁距离奖章',
        'products.roam.feature4': '与朋友并肩前行，或从路线两端相向奔赴',
        'products.roam.visit': '在 App Store 下载',
        'products.roam.back': '← 返回产品列表',
        'products.deepfocus.title': 'Deep Focus 深度聚焦',
        'products.deepfocus.description': '一款帮助你高效专注、提升生产力的极简 App。',
        'products.deepfocus.learnmore': '了解更多',
        'products.deepfocus.cover.alt': 'Deep Focus封面',
        'products.deepfocus.description.detail': '专注是一种习惯和能力，你可以在这里训练它。',
        'products.deepfocus.feature1': '一次只能设立一个目标，且不能修改',
        'products.deepfocus.feature2': '格子化追踪你的进步',
        'products.deepfocus.feature3': '支持iOS17+, 已上线App store',
        'products.deepfocus.download': '前往 App Store 下载',
        'products.allwrite.title': 'All Write 写作',
        'products.allwrite.description': '一款专为 Mac 设计的写作软件，为严肃写作者打造专注的创作环境。',
        'products.allwrite.cover.alt': 'All Write 封面',
        'products.selftaught.title': '自学坊',
        'products.selftaught.description': '一个开源的自学网站，帮助学习者探索适合自己的学习路径。',
        'products.selftaught.visit': '访问网站',
        'products.selftaught.link.label': '访问自学坊网站',
        
        // Footer
        'footer.copyright': '© 2026 岳铭. All rights reserved.',
        
        // Support section
        'support.title': '如果你喜欢我的作品，欢迎自愿打赏一杯咖啡的钱（建议不超过 10 元）。小小支持，大大鼓励',
        'support.qr.alt': '支付宝支持二维码',
        'support.buycoffee.alt': 'Buy Me a Coffee'
    },
    
    en: {
        // Navigation
        'nav.thoughts': 'Thoughts',
        'nav.books': 'Books',
        'nav.products': 'Products',
        
        // aboutme page
        'aboutme.title': 'Yue, Ming',
        
        // Thoughts page
        'thoughts.title': 'Thoughts',
        'thoughts.all': 'All',
        
        // Books page
        'books.title': 'Reading List',
        'books.status.finished': 'Finished',
        'books.status.reading': 'Reading',
        'books.hongloumeng.title': 'Dream of the Red Chamber',
        'books.hongloumeng.author': 'by Cao Xueqin',
        'books.hongloumeng.comment': '"Behind there is plenty, yet forget to withdraw your hand; before there is no way, yet want to turn back."',
        'books.walden.title': 'Walden',
        'books.walden.author': 'by Henry David Thoreau',
        'books.walden.comment': '"A man who has at length found something to do will not need to get a new suit to do it in. If there is not a new man, how can the new clothes be made to fit? All men want, not something to do with, but something to do, or rather something to be. Perhaps we should never procure a new suit until we have so conducted that we feel like new men in the old"',
        'books.zhongxian.title': 'County Cadres',
        'books.zhongxian.author': 'by Feng Junqi',
        'books.zhongxian.comment': '"The power of cadres is given by the people"',
        'books.essential_math.title': 'Essential Math for AI',
        'books.essential_math.author': 'by Hala Nelson',
        'books.essential_math.comment': '"Mathematical foundations for AI"',
        'books.deep_learning.title': 'Deep Learning',
        'books.deep_learning.author': 'by John.D.Kelleher',
        'books.deep_learning.comment': '"The book introduces deep learning concepts, which covers data, algorithms, models and their training."',
        'books.source_code.title': 'Source Code-My Beginnings',
        'books.source_code.author': 'by Bill Gates',
        'books.source_code.comment': '"The autobiography written by Microsoft founder Bill Gates."',
        
        // Products page
        'products.title': 'My Products',
        'products.googletranslate.description': 'A native Mac menu bar app for quick access to Google Translate, with a global shortcut and Apple Silicon support.',
        'products.googletranslate.opensource': 'Open Source',
        'products.googletranslate.download': 'Download for Mac',
        'products.roam.title': 'ROAM: Walk the World',
        'products.roam.description': 'Turn everyday steps into a visual journey across the planet. Every step brings the world closer.',
        'products.roam.cover.alt': 'ROAM app icon',
        'products.roam.description.detail': 'Turn everyday steps into a journey you can see. Choose a start and destination, then watch every step move you across the planet.',
        'products.roam.feature1': 'Read steps and walking distance from Apple Health, or record them manually',
        'products.roam.feature2': 'Explore realistic city-to-city distances on a globe you can rotate and zoom',
        'products.roam.feature3': 'Use it on Apple Watch, keep past journeys, and earn distance medals',
        'products.roam.feature4': 'Walk side by side with friends or meet halfway from opposite ends',
        'products.roam.visit': 'Download on the App Store',
        'products.roam.back': '← Back to Products',
        'products.deepfocus.title': 'Deep Focus',
        'products.deepfocus.description': 'A minimalist app that helps you focus efficiently and boost productivity.',
        'products.deepfocus.learnmore': 'Learn More',
        'products.deepfocus.cover.alt': 'Deep Focus cover',
        'products.deepfocus.description.detail': 'Focus is a habit and ability that you can train here.',
        'products.deepfocus.feature1': 'You can only set one goal at a time and cannot modify it',
        'products.deepfocus.feature2': 'Grid-based progress tracking',
        'products.deepfocus.feature3': 'Supports iOS17+, available on App Store',
        'products.deepfocus.download': 'Download on App Store',
        'products.allwrite.title': 'All Write',
        'products.allwrite.description': 'A writing app designed for Mac, providing serious writers with a focused creative environment.',
        'products.allwrite.cover.alt': 'All Write cover',
        'products.selftaught.title': 'Self-Taught Workshop',
        'products.selftaught.description': 'An open-source self-learning website that helps learners explore a path that works for them.',
        'products.selftaught.visit': 'Visit Website',
        'products.selftaught.link.label': 'Visit the Self-Taught Workshop website',
        
        // Footer
        'footer.copyright': '© 2026 Yue Ming. All rights reserved.',
        
        // Support section
        'support.title': 'If you like my work, feel free to buy me a coffee (suggested amount: no more than ¥10). Small support, big encouragement.',
        'support.qr.alt': 'Alipay support QR code',
        'support.buycoffee.alt': 'Buy Me a Coffee'
    }
};

// Language management functions
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'zh';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageContent();
    
    // Update language switcher active state
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    if (zhBtn && enBtn) {
        zhBtn.classList.toggle('active', lang === 'zh');
        enBtn.classList.toggle('active', lang === 'en');
    }
    updateThemeToggle();
}

function translate(key) {
    const currentLang = getCurrentLanguage();
    return translations[currentLang][key] || key;
}

function updatePageContent() {
    // Update navigation
    const navLinks = document.querySelectorAll('.menu-group a:not(.site-logo)');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'thoughts.html') {
            link.textContent = translate('nav.thoughts');
        } else if (href === 'books.html') {
            link.textContent = translate('nav.books');
        } else if (href === 'products.html') {
            link.textContent = translate('nav.products');
        }
    });
    
    // Update page-specific content
    updatePageSpecificContent();
    
    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = translate('footer.copyright');
    }
}

function updatePageSpecificContent() {
    const currentLang = getCurrentLanguage();
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/') {
        const title = document.querySelector('h1');
        if (title) title.textContent = translate('aboutme.title');
        
    } else if (path.includes('thoughts.html')) {
        // Thoughts page
        const title = document.querySelector('#thoughts h2');
        if (title) title.textContent = translate('thoughts.title');
        
        // Update "All" tag
        const allTag = document.querySelector('.tag-filter[data-tag="all"]');
        if (allTag) allTag.textContent = translate('thoughts.all');
        
    } else if (path.includes('books.html')) {
        // Books page
        const title = document.querySelector('#books h2');
        if (title) title.textContent = translate('books.title');
        
        // Update elements with data-translate attribute
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translate(key);
        });
        
        // Update book statuses
        const statusElements = document.querySelectorAll('.book-status');
        statusElements.forEach(status => {
            const statusClass = status.className;
            if (statusClass.includes('finished')) {
                status.textContent = translate('books.status.finished');
            } else if (statusClass.includes('reading')) {
                status.textContent = translate('books.status.reading');
            }
        });
        
        // Update book titles and details
        const bookTitles = document.querySelectorAll('.book-title');
        const bookAuthors = document.querySelectorAll('.book-author');
        const bookComments = document.querySelectorAll('.book-comment');
        
        // Map book titles to translation keys
        const bookTitleMap = {
            '红楼梦': 'books.hongloumeng.title',
            'Dream of the Red Chamber': 'books.hongloumeng.title',
            'Walden': 'books.walden.title',
            '中县干部': 'books.zhongxian.title',
            'County Cadres': 'books.zhongxian.title',
            'essential math for AI': 'books.essential_math.title',
            'Essential Math for AI': 'books.essential_math.title',
            'Deep Learning': 'books.deep_learning.title',
            'Source Code-My Beginnings': 'books.source_code.title'
        };
        
        // Map book authors to translation keys
        const bookAuthorMap = {
            'by 曹雪芹': 'books.hongloumeng.author',
            'by Cao Xueqin': 'books.hongloumeng.author',
            'by Henry David Thoreau': 'books.walden.author',
            'by 冯军旗': 'books.zhongxian.author',
            'by Feng Junqi': 'books.zhongxian.author',
            'by Hala Nelson': 'books.essential_math.author',
            'by John.D.Kelleher': 'books.deep_learning.author',
            'by Bill Gates': 'books.source_code.author'
        };
        
        // Map book comments to translation keys
        const bookCommentMap = {
            '"身后有余忘缩手，眼前无路想回头。"': 'books.hongloumeng.comment',
            '"Behind there is plenty, yet forget to withdraw your hand; before there is no way, yet want to turn back."': 'books.hongloumeng.comment',
            '"A man who has at length found something to do will not need to get a new suit to do it in. If there is not a new man, how can the new clothes be made to fit? All men want, not something to do with, but something to do, or rather something to be. Perhaps we should never procure a new suit until we have so conducted that we feel like new men in the old"': 'books.walden.comment',
            '"干部的权力是人民给的"': 'books.zhongxian.comment',
            '"The power of cadres is given by the people"': 'books.zhongxian.comment',
            '"关于AI的数学基础"': 'books.essential_math.comment',
            '"Mathematical foundations for AI"': 'books.essential_math.comment',
            '"The book introduce deep learning concepts, which covers data, algorithms,models and their training."': 'books.deep_learning.comment',
            '"The book introduces deep learning concepts, which covers data, algorithms, models and their training."': 'books.deep_learning.comment',
            '"The autobiography written by Microsoft founder Bill Gates."': 'books.source_code.comment'
        };
        
        // Update book titles
        bookTitles.forEach(title => {
            const originalText = title.textContent.trim();
            const translationKey = bookTitleMap[originalText];
            if (translationKey) {
                title.textContent = translate(translationKey);
            }
        });
        
        // Update book authors
        bookAuthors.forEach(author => {
            const originalText = author.textContent.trim();
            const translationKey = bookAuthorMap[originalText];
            if (translationKey) {
                author.textContent = translate(translationKey);
            }
        });
        
        // Update book comments
        bookComments.forEach(comment => {
            const originalText = comment.textContent.trim();
            const translationKey = bookCommentMap[originalText];
            if (translationKey) {
                comment.textContent = translate(translationKey);
            }
        });
        
        // Update book cover alt texts
        const bookCovers = document.querySelectorAll('.cover-image');
        bookCovers.forEach(cover => {
            const altText = cover.alt;
            if (altText.includes('红楼梦')) {
                cover.alt = currentLang === 'zh' ? '红楼梦 book cover' : 'Dream of the Red Chamber book cover';
            } else if (altText.includes('Walden')) {
                cover.alt = currentLang === 'zh' ? 'Walden book cover' : 'Walden book cover';
            } else if (altText.includes('中县干部')) {
                cover.alt = currentLang === 'zh' ? '中县干部 book cover' : 'County Cadres book cover';
            } else if (altText.includes('Essential Math for AI')) {
                cover.alt = currentLang === 'zh' ? 'Essential Math for AI book cover' : 'Essential Math for AI book cover';
            } else if (altText.includes('Deep Learning')) {
                cover.alt = currentLang === 'zh' ? 'Deep Learning book cover' : 'Deep Learning book cover';
            } else if (altText.includes('Source code')) {
                cover.alt = currentLang === 'zh' ? 'Source code book cover' : 'Source Code book cover';
            }
        });
        
    } else if (path.includes('products.html')) {
        // Products page
        const title = document.querySelector('.products-showcase h2');
        if (title) title.textContent = translate('products.title');
        
        // Update elements with data-translate attribute
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translate(key);
        });

        // Update ROAM product
        const roamCard = document.querySelector('[data-product="roam"]');
        const roamTitle = roamCard?.querySelector('h3');
        if (roamTitle) roamTitle.textContent = translate('products.roam.title');

        const roamDesc = roamCard?.querySelector('p');
        if (roamDesc) roamDesc.textContent = translate('products.roam.description');

        const roamLink = roamCard?.querySelector('.product-link');
        if (roamLink) roamLink.textContent = translate('products.deepfocus.learnmore');

        const roamImg = roamCard?.querySelector('img');
        if (roamImg) roamImg.alt = translate('products.roam.cover.alt');
        
        // Update Deep Focus product
        const deepFocusCard = document.querySelector('[data-product="deepfocus"]');
        const deepFocusTitle = deepFocusCard?.querySelector('h3');
        if (deepFocusTitle) deepFocusTitle.textContent = translate('products.deepfocus.title');
        
        const deepFocusDesc = deepFocusCard?.querySelector('p');
        if (deepFocusDesc) deepFocusDesc.textContent = translate('products.deepfocus.description');
        
        const deepFocusLink = deepFocusCard?.querySelector('.product-link');
        if (deepFocusLink) deepFocusLink.textContent = translate('products.deepfocus.learnmore');
        
        const deepFocusImg = deepFocusCard?.querySelector('img');
        if (deepFocusImg) deepFocusImg.alt = translate('products.deepfocus.cover.alt');
        
        // Update All Write product
        const allWriteCard = document.querySelector('[data-product="allwrite"]');
        const allWriteTitle = allWriteCard?.querySelector('h3');
        if (allWriteTitle) allWriteTitle.textContent = translate('products.allwrite.title');
        
        const allWriteDesc = allWriteCard?.querySelector('p');
        if (allWriteDesc) allWriteDesc.textContent = translate('products.allwrite.description');
        
        const allWriteLink = allWriteCard?.querySelector('.product-link');
        if (allWriteLink) allWriteLink.textContent = translate('products.deepfocus.learnmore');
        
        const allWriteImg = allWriteCard?.querySelector('img');
        if (allWriteImg) allWriteImg.alt = translate('products.allwrite.cover.alt');

        // Update Self-Taught Workshop website
        const selfTaughtCard = document.querySelector('[data-product="selftaught"]');
        const selfTaughtTitle = selfTaughtCard?.querySelector('h3');
        if (selfTaughtTitle) selfTaughtTitle.textContent = translate('products.selftaught.title');

        const selfTaughtDesc = selfTaughtCard?.querySelector('p');
        if (selfTaughtDesc) selfTaughtDesc.textContent = translate('products.selftaught.description');

        const selfTaughtCover = selfTaughtCard?.querySelector('.product-site-cover');
        if (selfTaughtCover) {
            selfTaughtCover.textContent = translate('products.selftaught.title');
            selfTaughtCover.setAttribute('aria-label', translate('products.selftaught.link.label'));
        }

        const selfTaughtLink = selfTaughtCard?.querySelector('.product-link');
        if (selfTaughtLink) selfTaughtLink.textContent = translate('products.selftaught.visit');
        
        // Update support section
        const supportText = document.querySelector('.coffee-thank');
        if (supportText) supportText.textContent = translate('support.title');
        
        const qrImg = document.querySelector('.coffee-qr-card img');
        if (qrImg) qrImg.alt = translate('support.qr.alt');
        
        const buyCoffeeImg = document.querySelector('.coffee-btn-img');
        if (buyCoffeeImg) buyCoffeeImg.alt = translate('support.buycoffee.alt');
        
    } else if (path.includes('product-roam.html')) {
        const title = document.querySelector('.product-detail h2');
        if (title) title.textContent = translate('products.roam.title');

        const description = document.querySelector('.product-detail p');
        if (description) description.textContent = translate('products.roam.description.detail');

        const features = document.querySelectorAll('.product-detail ul li');
        if (features.length >= 4) {
            features[0].textContent = translate('products.roam.feature1');
            features[1].textContent = translate('products.roam.feature2');
            features[2].textContent = translate('products.roam.feature3');
            features[3].textContent = translate('products.roam.feature4');
        }

        const productLink = document.querySelector('.product-link');
        if (productLink) productLink.textContent = translate('products.roam.visit');

        const productBack = document.querySelector('.product-back');
        if (productBack) productBack.textContent = translate('products.roam.back');

        const productImg = document.querySelector('.product-detail img');
        if (productImg) productImg.alt = translate('products.roam.cover.alt');

        document.title = `${translate('products.roam.title')} - ${currentLang === 'zh' ? '产品介绍' : 'Product'}`;

    } else if (path.includes('product-deep-focus.html')) {
        // Deep Focus product detail page
        const title = document.querySelector('.product-detail h2');
        if (title) title.textContent = translate('products.deepfocus.title');
        
        const description = document.querySelector('.product-detail p');
        if (description) description.textContent = translate('products.deepfocus.description.detail');
        
        const features = document.querySelectorAll('.product-detail ul li');
        if (features.length >= 3) {
            features[0].textContent = translate('products.deepfocus.feature1');
            features[1].textContent = translate('products.deepfocus.feature2');
            features[2].textContent = translate('products.deepfocus.feature3');
        }
        
        const downloadLink = document.querySelector('.product-link');
        if (downloadLink) downloadLink.textContent = translate('products.deepfocus.download');
        
        const productImg = document.querySelector('.product-detail img');
        if (productImg) productImg.alt = translate('products.deepfocus.cover.alt');
        
        // Update support section
        const supportText = document.querySelector('.coffee-thank');
        if (supportText) supportText.textContent = translate('support.title');
        
        const qrImg = document.querySelector('.coffee-qr-card img');
        if (qrImg) qrImg.alt = translate('support.qr.alt');
        
        const buyCoffeeImg = document.querySelector('.coffee-btn-img');
        if (buyCoffeeImg) buyCoffeeImg.alt = translate('support.buycoffee.alt');
        
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSiteLogo();
    initializeThemeToggle();
    const savedLang = getCurrentLanguage();
    document.documentElement.lang = savedLang;
    updatePageContent();
    
    // Update language switcher active state on all pages
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    if (zhBtn && enBtn) {
        zhBtn.classList.toggle('active', savedLang === 'zh');
        enBtn.classList.toggle('active', savedLang === 'en');
    }
});
