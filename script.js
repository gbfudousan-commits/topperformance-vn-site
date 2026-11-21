// Top Performance Vietnam - Website JavaScript
let currentLanguage = 'en';
let productsSwiper = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeLanguageDropdown();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeSliders();
    initializeGallery();
    initializeContactForm();
    initializeLoadingScreen();
    setupEventListeners();
    
    // 延遲載入商品資料以確保DOM完全準備就緒
    setTimeout(() => {
        loadProducts();
    }, 100);
});

const THEME_STORAGE_KEY = 'topp-theme';

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', theme === 'dark' ? '#0f172a' : '#fafaf9');
    }
    updateThemeToggleLabel();
    if (typeof renderQuoteCaptcha === 'function') {
        renderQuoteCaptcha();
    }
}

function updateThemeToggleLabel() {
    const btn = document.getElementById('themeToggle');
    if (!btn || typeof languages === 'undefined' || !languages[currentLanguage]) return;
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const langData = languages[currentLanguage];
    const label = theme === 'dark'
        ? (langData.theme?.light || 'Switch to light mode')
        : (langData.theme?.dark || 'Switch to dark mode');
    btn.setAttribute('aria-label', label);
}

function initializeTheme() {
    const stored = getStoredTheme();
    const theme = stored || getSystemTheme();
    applyTheme(theme);

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem(THEME_STORAGE_KEY, next);
            applyTheme(next);
        });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getStoredTheme()) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Loading Screen
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => loadingScreen.remove(), 500);
            }
        }, 1000);
    });
}

// Language System
function initializeLanguage() {
    const urlLang = new URLSearchParams(location.search).get('lang');
    const savedLang = localStorage.getItem('preferredLanguage');
    const initial = urlLang || savedLang;
    if (initial && languages[initial]) {
        currentLanguage = initial;
    }
    // 同步 <html lang>，利於 SEO 與無障礙，並避免 Safari 排版怪異
    document.documentElement.setAttribute('lang', currentLanguage);
    applyLanguage(currentLanguage);
    updateLanguageButtons();
}

function switchLanguage(lang) {
    if (!languages[lang]) return;
    const previousScrollY = window.scrollY || document.documentElement.scrollTop || 0;

    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.setAttribute('lang', lang);

    // 將語言寫入 URL（不重整頁面）
    const url = new URL(location.href);
    if (lang === 'en') {
        url.searchParams.delete('lang');
    } else {
        url.searchParams.set('lang', lang);
    }
    history.replaceState({}, '', url.toString());

    // 直接套用語系，避免整頁不透明度動畫造成 Safari 重繪與滾動亂跳
    applyLanguage(lang);
    updateLanguageButtons();
    
    // 重新載入商品資料以顯示對應語言
    onLanguageChanged();

    // Safari 文字「需框選才刷新」的重繪 workaround
    // 輕推一次合成層並恢復，並回復原滾動位置
    const body = document.body;
    const originalTransform = body.style.transform;
    body.style.transform = 'translateZ(0)';
    // 強制 reflow
    void body.offsetHeight;
    requestAnimationFrame(() => {
        body.style.transform = originalTransform || '';
        window.scrollTo({ top: previousScrollY, behavior: 'instant' });
        if (typeof AOS !== 'undefined') {
            setTimeout(() => AOS.refresh(), 50);
        }
    });
}

function applyLanguage(lang) {
    if (!languages[lang]) return;
    const langData = languages[lang];
    const currentYear = new Date().getFullYear();
    
    document.querySelectorAll('[data-text]').forEach(element => {
        const textKey = element.getAttribute('data-text');
        const text = getNestedValue(langData, textKey);
        if (text) {
            // 替換年份佔位符 {YEAR} 為當前年份
            element.innerHTML = text.replace(/\{YEAR\}/g, currentYear);
        }
    });

    // 支援 data-placeholder 屬性（輸入框 placeholder 多語）
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        const text = getNestedValue(langData, key);
        if (typeof text === 'string') {
            element.setAttribute('placeholder', text.replace(/\{YEAR\}/g, currentYear));
        }
    });

    // 支援 data-i18n 屬性（通用多語標籤）
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = getNestedValue(langData, key);
        if (text) element.textContent = text.replace(/\{YEAR\}/g, currentYear);
    });

    document.querySelectorAll('[data-aria-label]').forEach(element => {
        const key = element.getAttribute('data-aria-label');
        const text = getNestedValue(langData, key);
        if (text) element.setAttribute('aria-label', text.replace(/\{YEAR\}/g, currentYear));
    });

    const quoteForm = document.getElementById('contact-form');
    if (quoteForm && typeof clearQuoteFormValidation === 'function') {
        clearQuoteFormValidation(quoteForm);
    }
    const quoteSuccess = document.querySelector('#quote-form [data-fs-success]');
    if (quoteSuccess) {
        quoteSuccess.textContent = '';
        quoteSuccess.removeAttribute('data-fs-active');
    }
    const quoteError = document.querySelector('#quote-form .quote-form-error[data-fs-error]');
    if (quoteError) {
        quoteError.textContent = '';
        quoteError.removeAttribute('data-fs-active');
    }

    updateThemeToggleLabel();
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

function updateLanguageButtons() {
    // Update dropdown options
    const langOptions = document.querySelectorAll('.language-option');
    langOptions.forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === currentLanguage);
    });
    
    // Update current language display
    const currentLangSpan = document.querySelector('.current-lang');
    const activeOption = document.querySelector('.language-option.active');
    if (currentLangSpan && activeOption) {
        currentLangSpan.textContent = activeOption.getAttribute('data-name');
    }
}

// Language Dropdown Functions
function isMobileNavViewport() {
    return window.matchMedia('(max-width: 1024px)').matches;
}

function mountMobileLanguageSheet(languageMenu) {
    if (!languageMenu || languageMenu.classList.contains('language-menu--sheet')) return;

    languageMenu._returnParent = languageMenu.parentElement;
    document.body.appendChild(languageMenu);
    languageMenu.classList.add('language-menu--sheet');
    document.body.classList.add('language-sheet-open');
    languageMenu.setAttribute('role', 'dialog');
    languageMenu.setAttribute('aria-modal', 'true');
    languageMenu.setAttribute('aria-hidden', 'false');
}

function unmountMobileLanguageSheet(languageMenu) {
    if (!languageMenu) return;

    languageMenu.classList.remove('language-menu--sheet');
    document.body.classList.remove('language-sheet-open');
    languageMenu.removeAttribute('role');
    languageMenu.removeAttribute('aria-modal');
    languageMenu.setAttribute('aria-hidden', 'true');

    if (languageMenu._returnParent) {
        languageMenu._returnParent.appendChild(languageMenu);
        delete languageMenu._returnParent;
    }
}

function initializeLanguageDropdown() {
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    const languageMenuClose = document.getElementById('languageMenuClose');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (!languageToggle || !languageMenu) return;
    
    // Toggle dropdown
    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = languageMenu.classList.contains('show');
        
        if (isOpen) {
            closeLanguageDropdown();
        } else {
            openLanguageDropdown();
        }
    });

    if (languageMenuClose) {
        languageMenuClose.addEventListener('click', function(e) {
            e.stopPropagation();
            closeLanguageDropdown();
        });
    }
    
    // Language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            closeLanguageDropdown();
        });
    });
    
    // Close dropdown when clicking outside (desktop only)
    document.addEventListener('click', function() {
        if (!isMobileNavViewport()) {
            closeLanguageDropdown();
        }
    });
    
    // Prevent menu close when clicking inside
    languageMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && languageMenu.classList.contains('show')) {
            closeLanguageDropdown();
        }
    });

    window.addEventListener('resize', function() {
        if (!isMobileNavViewport() && languageMenu.classList.contains('language-menu--sheet')) {
            closeLanguageDropdown();
        }
    });
}

function openLanguageDropdown() {
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    
    if (isMobileNavViewport()) {
        mountMobileLanguageSheet(languageMenu);
    }

    languageToggle.setAttribute('aria-expanded', 'true');
    languageMenu.setAttribute('aria-hidden', 'false');
    languageMenu.classList.add('show');
}

function closeLanguageDropdown() {
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    
    languageToggle.setAttribute('aria-expanded', 'false');
    languageMenu.classList.remove('show');

    if (languageMenu && languageMenu.classList.contains('language-menu--sheet')) {
        // Allow exit animation before restoring DOM position
        window.setTimeout(function() {
            if (!languageMenu.classList.contains('show')) {
                unmountMobileLanguageSheet(languageMenu);
            }
        }, 220);
    } else if (languageMenu) {
        languageMenu.setAttribute('aria-hidden', 'true');
    }
}

// Mobile Menu
function initializeMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const wrapper = document.querySelector('.nav-menu-wrapper');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    function toggleMenu() {
        toggle.classList.toggle('active');
        wrapper.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
    }
    
    function closeMenu() {
        toggle.classList.remove('active');
        wrapper.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }
    
    if (toggle) toggle.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.querySelectorAll('.header-quote-btn').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (scrollTop > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// === 產品載入功能 ===
// 載入ERP商品資料
async function loadProducts() {
    // 確保 currentLanguage 已初始化
    if (!currentLanguage) {
        currentLanguage = 'en'; // 預設英文
    }
    
    console.log('loadProducts 開始執行, currentLanguage:', currentLanguage);
    try {
        const apiBase = (window.toppVnConfig && window.toppVnConfig.productsApi) || '/api/products.php';
        const apiUrl = `${apiBase}?lang=${currentLanguage}&limit=10`;
        console.log('API URL:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('API Response:', response.status, response.statusText);
        
        const data = await response.json();
        console.log('API Data:', data);
        
        if (data.success && data.data.length > 0) {
            console.log('有商品資料，載入商品列表');
            renderProducts(data.data);
        } else {
            console.log('無商品資料，顯示無商品狀態');
            renderNoProducts();
        }
    } catch (error) {
        console.error('載入商品失敗:', error);
        renderNoProducts();
    }
}

// 渲染商品列表
function renderProducts(products) {
    const productsSlider = document.querySelector('.products-slider');
    if (!productsSlider) return;
    
    // 重新創建完整的swiper結構
    productsSlider.innerHTML = `
        <div class="swiper-wrapper" id="products-swiper-wrapper">
            <!-- 商品資料將在這裡動態插入 -->
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    `;
    
    const wrapper = document.getElementById('products-swiper-wrapper');
    
    products.forEach(product => {
        const slide = createProductSlide(product);
        wrapper.appendChild(slide);
    });

    applyLanguage(currentLanguage);
    
    // 重新初始化Swiper
    initializeProductsSwiper();
}

// 創建商品卡片
function createProductSlide(product) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    
    // 處理照片 - 優先選擇封面照片
    let selectedPhoto = null;
    if (product.photos && product.photos.length > 0) {
        // 尋找封面照片
        selectedPhoto = product.photos.find(photo => photo.is_cover) || product.photos[0];
    }
    const themeAssets = (window.toppVnConfig && window.toppVnConfig.themeUrl) || '';
    const resolveMediaUrl = (path) => {
        if (!path) return '';
        if (/^https?:\/\//i.test(path)) return path;
        return path.startsWith('/') ? ('.' + path) : (themeAssets + '/' + path.replace(/^\//, ''));
    };
    const imageUrl = selectedPhoto
        ? resolveMediaUrl(selectedPhoto.url || selectedPhoto.thumbnail_url)
        : themeAssets + '/assets/images/products/product-1.png';
    const imageAlt = `${product.name} - ${product.description || 'Product Image'}`;
    
    // 處理規格
    const specs = [];
    if (product.specifications.width_cm) specs.push(`W${product.specifications.width_cm}cm`);
    if (product.specifications.depth_cm) specs.push(`D${product.specifications.depth_cm}cm`);
    if (product.specifications.height_cm) specs.push(`H${product.specifications.height_cm}cm`);
    if (product.specifications.weight_kg) specs.push(`${product.specifications.weight_kg}kg`);

    const viewDetailsText = getNestedValue(languages[currentLanguage], 'products.viewDetails') || 'View Details';
    
    slide.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <img src="${imageUrl}" alt="${imageAlt}" loading="lazy" decoding="async" width="800" height="600">
                <div class="product-overlay">
                    <button class="product-btn" data-product-id="${product.id}" onclick="viewProductDetails(${product.id})">
                        <span data-text="products.viewDetails">${viewDetailsText}</span>
                    </button>
                </div>
            </div>
            <div class="product-content">
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                </div>
                <h3>${product.name}</h3>
                <div class="product-code">${product.code}</div>
            </div>
        </div>
    `;
    
    return slide;
}

// 顯示無商品狀態
function renderNoProducts() {
    console.log('renderNoProducts 開始執行');
    const productsSlider = document.querySelector('.products-slider');
    console.log('找到 products-slider:', !!productsSlider);
    
    if (!productsSlider) return;
    
    // 完全替換slider結構為簡短介紹
    productsSlider.innerHTML = `
        <div class="no-products-section">
            <div class="no-products-content">
                <div class="no-products-icon">
                    <i class="fas fa-cog fa-spin"></i>
                </div>
                <h3 data-text="products.noProducts">商品展示區建置中</h3>
                <p data-text="products.noProductsDesc">我們正在精心準備產品展示內容，敬請期待我們的優質傢俱產品。</p>
                <div class="product-intro">
                    <p data-text="products.introLine1">Top Performance Vietnam 專注於提供高品質的辦公傢俱、教育傢俱及家居用品。</p>
                    <p data-text="products.introLine2">我們的產品涵蓋辦公桌椅、收納櫃、兒童傢俱等多元化系列，滿足不同客戶需求。</p>
                </div>
            </div>
        </div>
    `;
    
    console.log('無商品內容已插入');
    
    // 應用翻譯
    console.log('應用翻譯, currentLanguage:', currentLanguage);
    applyLanguage(currentLanguage);
}

// 初始化商品Swiper
function initializeProductsSwiper() {
    if (productsSwiper) {
        productsSwiper.destroy(true, true);
    }
    
    productsSwiper = new Swiper('.products-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// 查看商品詳情
async function viewProductDetails(productId) {
    console.log('查看商品詳情:', productId);
    
    try {
        // 從API獲取商品詳情
        const apiBase = (window.toppVnConfig && window.toppVnConfig.productsApi) || '/api/products.php';
        const response = await fetch(`${apiBase}?lang=${currentLanguage}&limit=100`);
        const data = await response.json();
        
        if (data.success && data.data) {
            const product = data.data.find(p => p.id === productId);
            if (product) {
                showProductModal(product);
            } else {
                console.error('找不到商品:', productId);
            }
        } else {
            console.error('無法載入商品資料');
        }
    } catch (error) {
        console.error('載入商品詳情失敗:', error);
    }
}

// 顯示商品詳情模態框
function showProductModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    // 設置商品標題
    const title = modal.querySelector('[data-product-title]');
    if (title) title.textContent = product.name || '';
    
    // 設置商品編號
    const codeElement = modal.querySelector('[data-product-code]');
    if (codeElement) codeElement.textContent = product.code || '';
    
    // 設置商品描述
    const descElement = modal.querySelector('[data-product-desc]');
    if (descElement) descElement.textContent = product.description || '';
    
    // 設置特色標語
    const featuresElement = modal.querySelector('[data-product-features]');
    if (featuresElement) {
        featuresElement.innerHTML = '';
        if (product.features && product.features.length > 0) {
            product.features.forEach(feature => {
                const span = document.createElement('span');
                span.className = 'feature-tag';
                span.textContent = feature;
                featuresElement.appendChild(span);
            });
        }
    }
    
    // 設置商品照片：桌面用 grid、手機用 Swiper（圓點分頁、無限循環）
    const photosElement = modal.querySelector('[data-product-photos]');
    if (photosElement && product.photos && product.photos.length > 0) {
        if (window._productModalSwiper) {
            window._productModalSwiper.destroy(true, true);
            window._productModalSwiper = null;
        }
        photosElement.innerHTML = '';
        const swiperEl = document.createElement('div');
        swiperEl.className = 'swiper product-modal-swiper';
        const wrapper = document.createElement('div');
        wrapper.className = 'swiper-wrapper';
        product.photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            const item = document.createElement('div');
            item.className = 'gallery-item';
            const img = document.createElement('img');
            img.src = /^https?:\/\//i.test(photo.url) ? photo.url : ('.' + photo.url);
            img.alt = (product.name || '') + ' - ' + (index + 1);
            img.loading = 'lazy';
            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            overlay.innerHTML = '<i class="fas fa-search-plus"></i>';
            item.appendChild(img);
            item.appendChild(overlay);
            item.addEventListener('click', function() {
                if (typeof window.openGalleryLightbox === 'function') {
                    window.openGalleryLightbox(photo.url, img.alt);
                } else {
                    window.open(photo.url, '_blank');
                }
            });
            slide.appendChild(item);
            wrapper.appendChild(slide);
        });
        const pagination = document.createElement('div');
        pagination.className = 'swiper-pagination product-modal-pagination';
        swiperEl.appendChild(wrapper);
        swiperEl.appendChild(pagination);
        photosElement.appendChild(swiperEl);

        window._productModalSwiper = new Swiper('.product-modal-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.product-modal-pagination',
                clickable: true,
            },
            breakpoints: {
                641: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                    loop: false,
                    grid: { rows: 2, fill: 'row' },
                    pagination: false,
                },
            },
        });
    }
    
    // 設置商品規格
    const specsElement = modal.querySelector('[data-product-specs]');
    if (specsElement) {
        specsElement.innerHTML = '';
        const specs = product.specifications || {};
        
        // 創建規格項目
        const specItems = [
            { label: languages[currentLanguage]?.products?.details?.width || '寬度', value: specs.width_cm, unit: 'cm' },
            { label: languages[currentLanguage]?.products?.details?.depth || '深度', value: specs.depth_cm, unit: 'cm' },
            { label: languages[currentLanguage]?.products?.details?.height || '高度', value: specs.height_cm, unit: 'cm' },
            { label: languages[currentLanguage]?.products?.details?.weight || '重量', value: specs.weight_kg, unit: 'kg' }
        ];
        
        let hasSpecs = false;
        specItems.forEach(spec => {
            if (spec.value && spec.value > 0) {
                hasSpecs = true;
                const specDiv = document.createElement('div');
                specDiv.style.cssText = 'background:white;padding:12px;border-radius:6px;border:1px solid #e9ecef;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.1)';
                
                const label = document.createElement('div');
                label.textContent = spec.label;
                label.style.cssText = 'font-size:12px;color:#666;margin-bottom:4px;font-weight:500';
                
                const value = document.createElement('div');
                value.textContent = `${spec.value}${spec.unit}`;
                value.style.cssText = 'font-size:18px;font-weight:600;color:#333';
                
                specDiv.appendChild(label);
                specDiv.appendChild(value);
                specsElement.appendChild(specDiv);
            }
        });
        
        if (!hasSpecs) {
            const noSpecsDiv = document.createElement('div');
            noSpecsDiv.style.cssText = 'grid-column:1/-1;text-align:center;padding:20px;color:#999;font-style:italic';
            noSpecsDiv.textContent = '規格資訊待更新';
            specsElement.appendChild(noSpecsDiv);
        }
    }
    
    // 顯示模態框
    openModal('productModal');
}

// 語言切換時重新載入商品
function onLanguageChanged() {
    console.log('語言已切換為:', currentLanguage);
    loadProducts();
}

// Sliders
function initializeSliders() {
    // Initialize Craft Swipers
    if (document.querySelector('.craft-swiper')) {
        new Swiper('.craft-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
        });
    }
}

// Gallery & Lightbox
function initializeGallery() {
    // Tabs
    const tabs = document.querySelectorAll('.gallery-tab');
    const items = document.querySelectorAll('.gallery-item');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('is-hidden');
                    item.style.animation = 'none';
                    item.offsetHeight;
                    item.style.animation = 'fadeInGrid 0.5s forwards';
                } else {
                    item.classList.add('is-hidden');
                }
            });
            if (typeof AOS !== 'undefined') setTimeout(() => AOS.refresh(), 100);
        });
    });

    // ── Lightbox with pinch-to-zoom ──
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Scroll-lock helpers (no page jump)
    function lockScroll() {
        document.documentElement.classList.add('lightbox-scroll-lock');
        document.body.classList.add('lightbox-scroll-lock');
    }
    function unlockScroll() {
        document.documentElement.classList.remove('lightbox-scroll-lock');
        document.body.classList.remove('lightbox-scroll-lock');
    }

    // ── Pinch / drag state ──
    let scale = 1, posX = 0, posY = 0;
    let startDist = 0, startScale = 1;
    let startX = 0, startY = 0, startPosX = 0, startPosY = 0;
    let isDragging = false;
    let lastTouchEnd = 0;

    function resetTransform() {
        scale = 1; posX = 0; posY = 0;
        lightboxImg.style.transform = '';
        lightboxImg.style.transition = '';
    }
    function applyTransform(animate) {
        if (animate) lightboxImg.style.transition = 'transform 0.25s ease';
        else lightboxImg.style.transition = 'none';
        lightboxImg.style.transform = 'translate(' + posX + 'px,' + posY + 'px) scale(' + scale + ')';
    }

    // Distance between two touch points
    function getTouchDist(t) {
        const dx = t[0].clientX - t[1].clientX;
        const dy = t[0].clientY - t[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // -- Touch handlers on the image --
    lightboxImg.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            // Pinch start
            e.preventDefault();
            startDist = getTouchDist(e.touches);
            startScale = scale;
        } else if (e.touches.length === 1 && scale > 1) {
            // Drag start (only when zoomed in)
            isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startPosX = posX;
            startPosY = posY;
            lightboxImg.style.transition = 'none';
        }
    }, { passive: false });

    lightboxImg.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            // Pinch move
            e.preventDefault();
            const dist = getTouchDist(e.touches);
            scale = Math.min(5, Math.max(1, startScale * (dist / startDist)));
            if (scale <= 1) { posX = 0; posY = 0; }
            applyTransform(false);
        } else if (e.touches.length === 1 && isDragging && scale > 1) {
            // Drag move
            e.preventDefault();
            posX = startPosX + (e.touches[0].clientX - startX);
            posY = startPosY + (e.touches[0].clientY - startY);
            applyTransform(false);
        }
    }, { passive: false });

    lightboxImg.addEventListener('touchend', function(e) {
        isDragging = false;
        if (scale <= 1.05) {
            scale = 1; posX = 0; posY = 0;
            applyTransform(true);
        }
        // Double-tap to toggle zoom
        const now = Date.now();
        if (now - lastTouchEnd < 300 && e.changedTouches.length === 1) {
            e.preventDefault();
            if (scale > 1) {
                scale = 1; posX = 0; posY = 0;
            } else {
                scale = 2.5;
            }
            applyTransform(true);
        }
        lastTouchEnd = now;
    }, { passive: false });

    // Prevent overlay from scrolling on touch devices
    lightbox.addEventListener('touchmove', function(e) {
        // Only allow default if image is zoomed and touch is on the image
        if (scale <= 1) e.preventDefault();
    }, { passive: false });

    // -- Desktop wheel zoom --
    lightboxImg.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale = Math.min(5, Math.max(1, scale * delta));
        if (scale <= 1) { posX = 0; posY = 0; }
        applyTransform(false);
    }, { passive: false });

    // ── Navigation state ──
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const counterEl = lightbox.querySelector('.lightbox-counter');
    let galleryImages = [];   // [{src, alt}] for current context
    let currentIndex = 0;
    let navSource = '';       // 'gallery' or 'craft'

    function getVisibleGalleryImages() {
        const imgs = [];
        items.forEach(item => {
            if (!item.classList.contains('is-hidden')) {
                const img = item.querySelector('img');
                if (img) imgs.push({ src: img.src, alt: img.alt || '' });
            }
        });
        return imgs;
    }

    function getCraftImages() {
        const imgs = [];
        document.querySelectorAll('.craft-swiper .swiper-slide img').forEach(img => {
            imgs.push({ src: img.src, alt: img.alt || '' });
        });
        return imgs;
    }

    function updateCounter() {
        if (counterEl && galleryImages.length > 1) {
            counterEl.textContent = (currentIndex + 1) + ' / ' + galleryImages.length;
            counterEl.style.display = '';
        } else if (counterEl) {
            counterEl.style.display = 'none';
        }
    }

    function showNav(show) {
        const display = show && galleryImages.length > 1 ? '' : 'none';
        if (prevBtn) prevBtn.style.display = display;
        if (nextBtn) nextBtn.style.display = display;
    }

    function showImage(index) {
        if (!galleryImages.length) return;
        currentIndex = ((index % galleryImages.length) + galleryImages.length) % galleryImages.length;
        resetTransform();
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transition = 'opacity 0.2s ease';
        setTimeout(() => {
            lightboxImg.src = galleryImages[currentIndex].src;
            lightboxImg.alt = galleryImages[currentIndex].alt;
            lightboxImg.style.opacity = '1';
        }, 150);
        updateCounter();
    }

    function navigatePrev() { if (galleryImages.length > 1) showImage(currentIndex - 1); }
    function navigateNext() { if (galleryImages.length > 1) showImage(currentIndex + 1); }

    // ── Open lightbox ──
    function openLightbox(src, alt) {
        resetTransform();
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transition = '';
        lightbox.classList.add('active');
        lockScroll();
        updateCounter();
        showNav(true);
    }
    window.openGalleryLightbox = openLightbox;

    // ── Close lightbox ──
    function closeLightbox() {
        lightbox.classList.remove('active');
        unlockScroll();
        resetTransform();
        galleryImages = [];
        navSource = '';
        showNav(false);
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    }

    // Open on gallery item click
    items.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (!img) return;
            galleryImages = getVisibleGalleryImages();
            navSource = 'gallery';
            currentIndex = galleryImages.findIndex(g => g.src === img.src);
            if (currentIndex < 0) currentIndex = 0;
            openLightbox(img.src, img.alt);
        });
    });

    // Also open on craft card image click
    document.querySelectorAll('.craft-swiper .swiper-slide img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            galleryImages = getCraftImages();
            navSource = 'craft';
            currentIndex = galleryImages.findIndex(g => g.src === this.src);
            if (currentIndex < 0) currentIndex = 0;
            openLightbox(this.src, this.alt);
        });
    });

    // ── Arrow button clicks ──
    if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); navigatePrev(); });
    if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateNext(); });

    // ── Keyboard navigation ──
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') { closeLightbox(); return; }
        if (e.key === 'ArrowLeft') { e.preventDefault(); navigatePrev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); navigateNext(); }
    });

    // ── Swipe navigation (single finger, not zoomed) ──
    let swipeStartX = 0, swipeStartY = 0, isSwiping = false;
    lightbox.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1 && scale <= 1) {
            swipeStartX = e.touches[0].clientX;
            swipeStartY = e.touches[0].clientY;
            isSwiping = true;
        } else {
            isSwiping = false;
        }
    }, { passive: true });
    lightbox.addEventListener('touchend', function(e) {
        if (!isSwiping || scale > 1 || !e.changedTouches.length) return;
        isSwiping = false;
        const dx = e.changedTouches[0].clientX - swipeStartX;
        const dy = e.changedTouches[0].clientY - swipeStartY;
        // Must be mostly horizontal and at least 50px
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) navigateNext();
            else navigatePrev();
        }
    }, { passive: true });

    // Close triggers
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });
}

// Contact Form — Formspree AJAX (@formspree/ajax)
const FORMSPREE_FORM_ID = 'mvgqvvag';
const HCAPTCHA_SITEKEY = '98eae204-e0a2-4996-83d8-36ba8dbe4cca';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getQuoteCaptchaTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function renderQuoteCaptcha() {
    const el = document.getElementById('quote-captcha');
    if (!el || !window.hcaptcha) return;

    const theme = getQuoteCaptchaTheme();
    if (el.dataset.widgetId && el.dataset.currentTheme === theme) return;

    if (el.dataset.widgetId) {
        window.hcaptcha.remove(el.dataset.widgetId);
        el.innerHTML = '';
        delete el.dataset.widgetId;
    }

    el.dataset.currentTheme = theme;
    el.dataset.widgetId = String(window.hcaptcha.render(el, {
        sitekey: HCAPTCHA_SITEKEY,
        theme: theme,
    }));
}

window.hcaptchaOnLoad = function hcaptchaOnLoad() {
    renderQuoteCaptcha();
};

function getHcaptchaResponse() {
    const el = document.getElementById('quote-captcha');
    if (!el || !window.hcaptcha) return '';

    if (el.dataset.widgetId) {
        const widgetResponse = window.hcaptcha.getResponse(el.dataset.widgetId);
        if (widgetResponse) return widgetResponse;
    }

    const responseField = document.querySelector('#contact-form [name="h-captcha-response"]');
    return responseField ? responseField.value : '';
}

function clearQuoteOutcomeMessages() {
    const successEl = document.querySelector('#quote-form [data-fs-success]');
    if (successEl) {
        successEl.textContent = '';
        successEl.removeAttribute('data-fs-active');
    }
    const failEl = document.querySelector('#quote-form .quote-form-error[data-fs-error]');
    if (failEl) {
        failEl.textContent = '';
        failEl.removeAttribute('data-fs-active');
    }
}

function resetQuoteCaptcha() {
    const el = document.getElementById('quote-captcha');
    if (el && el.dataset.widgetId && window.hcaptcha) {
        window.hcaptcha.reset(el.dataset.widgetId);
    }
    const captchaError = document.querySelector('[data-fs-error="captcha"]');
    if (captchaError) {
        captchaError.textContent = '';
        captchaError.removeAttribute('data-fs-active');
    }
}

function getQuoteFormErrors() {
    return languages[currentLanguage]?.contact?.formErrors || {};
}

function clearQuoteFormValidation(form) {
    form.querySelectorAll('[data-fs-error]').forEach((el) => {
        if (el.hasAttribute('data-fs-error') && el.getAttribute('data-fs-error')) {
            el.textContent = '';
            el.removeAttribute('data-fs-active');
        }
    });
    form.querySelectorAll('[data-fs-field]').forEach((field) => {
        field.removeAttribute('aria-invalid');
    });
    const formError = form.closest('.contact-form-wrapper')?.querySelector('.quote-form-error[data-fs-error]');
    if (formError) {
        formError.textContent = '';
        formError.removeAttribute('data-fs-active');
    }
    const captchaError = form.querySelector('[data-fs-error="captcha"]');
    if (captchaError) {
        captchaError.textContent = '';
        captchaError.removeAttribute('data-fs-active');
    }
}

function setQuoteFieldError(form, name, message) {
    const field = form.querySelector(`[name="${name}"]`);
    const errorEl = form.querySelector(`[data-fs-error="${name}"]`);
    if (field) {
        field.setAttribute('aria-invalid', 'true');
    }
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.setAttribute('data-fs-active', '');
    }
}

function trimQuoteFormValues(form) {
    form.querySelectorAll('input, textarea').forEach((field) => {
        if (field.type === 'hidden' || field.type === 'submit') return;
        field.value = field.value.trim();
    });
}

function syncQuoteFormMetaFields(form) {
    const emailField = form.querySelector('[name="email"]');
    const replytoField = form.querySelector('[name="_replyto"]');
    const tsField = form.querySelector('[name="form_ts"]');
    if (replytoField && emailField) {
        replytoField.value = emailField.value.trim();
    }
    if (tsField) {
        tsField.value = String(Date.now());
    }
}

function validateQuoteForm(form) {
    const errors = getQuoteFormErrors();
    clearQuoteFormValidation(form);
    trimQuoteFormValues(form);

    let valid = true;
    const requiredFields = ['name', 'email', 'message'];

    requiredFields.forEach((name) => {
        const field = form.querySelector(`[name="${name}"]`);
        const value = field ? field.value : '';
        if (!value) {
            setQuoteFieldError(form, name, errors.required || 'This field is required.');
            valid = false;
        } else if (/\s/.test(value) === false && value.length === 0) {
            setQuoteFieldError(form, name, errors.whitespace || 'Invalid value.');
            valid = false;
        }
    });

    const emailField = form.querySelector('[name="email"]');
    const emailValue = emailField ? emailField.value : '';
    if (emailValue && !EMAIL_PATTERN.test(emailValue)) {
        setQuoteFieldError(form, 'email', errors.invalidEmail || 'Please enter a valid email address.');
        valid = false;
    }

    if (!getHcaptchaResponse()) {
        const captchaError = form.querySelector('[data-fs-error="captcha"]');
        const dict = languages[currentLanguage]?.notifications;
        if (captchaError) {
            captchaError.textContent = dict?.captchaRequired || 'Please complete the verification.';
            captchaError.setAttribute('data-fs-active', '');
        }
        valid = false;
    }

    return valid;
}

function showQuoteFormSuccess(message, options) {
    const notify = !options || options.notify !== false;
    const successEl = document.querySelector('#quote-form [data-fs-success]');
    if (successEl) {
        successEl.textContent = message;
        successEl.setAttribute('data-fs-active', '');
    }
    if (notify && typeof showNotification === 'function') {
        showNotification(message, 'success');
    }
}

function showQuoteFormFailure(message, options) {
    const notify = !options || options.notify !== false;
    const errorEl = document.querySelector('#quote-form .quote-form-error[data-fs-error]');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.setAttribute('data-fs-active', '');
    }
    if (notify && typeof showNotification === 'function') {
        showNotification(message, 'info');
    }
}

function getFormspreeErrorMessage(error) {
    const dict = languages[currentLanguage]?.notifications;
    if (!error || typeof error.getFormErrors !== 'function') {
        return dict?.failed || 'Submission failed. Please try again later or contact us via email.';
    }

    const formErrors = error.getFormErrors();
    if (formErrors.length) {
        return formErrors.map((entry) => entry.message).join(' ');
    }

    const fieldErrors = typeof error.getAllFieldErrors === 'function' ? error.getAllFieldErrors() : [];
    if (fieldErrors.length) {
        return fieldErrors.map((entry) => entry.message).join(' ');
    }

    return dict?.failed || 'Submission failed. Please try again later or contact us via email.';
}

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        if (!validateQuoteForm(form)) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }, true);

    form.querySelectorAll('[data-fs-field]').forEach((field) => {
        field.addEventListener('input', function() {
            const name = field.getAttribute('name');
            const errorEl = form.querySelector(`[data-fs-error="${name}"]`);
            if (errorEl) {
                errorEl.textContent = '';
                errorEl.removeAttribute('data-fs-active');
            }
            field.removeAttribute('aria-invalid');
        });
    });

    window.formspree = window.formspree || function() {
        (window.formspree.q = window.formspree.q || []).push(arguments);
    };

    window.formspree('initForm', {
        formElement: '#contact-form',
        formId: FORMSPREE_FORM_ID,
        onSubmit: function({ form: quoteForm }) {
            trimQuoteFormValues(quoteForm);
            syncQuoteFormMetaFields(quoteForm);
            clearQuoteOutcomeMessages();
        },
        onSuccess: function(ctx) {
            const dict = languages[currentLanguage]?.notifications;
            showNotification(
                dict?.success || 'Your message has been sent. We will get back to you soon.',
                'success'
            );
            // Only reset on a genuine success — never at submit start.
            if (ctx && ctx.form) {
                ctx.form.reset();
                clearQuoteFormValidation(ctx.form);
            }
            resetQuoteCaptcha();
        },
        onFailure: function() {
            const dict = languages[currentLanguage]?.notifications;
            showNotification(
                dict?.failed || 'Submission failed. Please try again later or contact us via email.',
                'info'
            );
        },
        onError: function(_ctx, error) {
            const dict = languages[currentLanguage]?.notifications;
            const message = getFormspreeErrorMessage(error);

            if (/captcha/i.test(message)) {
                const captchaError = document.querySelector('[data-fs-error="captcha"]');
                if (captchaError) {
                    captchaError.textContent = dict?.captchaRequired || message;
                    captchaError.setAttribute('data-fs-active', '');
                }
            }

            // hCaptcha tokens are single-use; force a fresh challenge after any rejection.
            resetQuoteCaptcha();

            showQuoteFormFailure(message, { notify: false });
            showNotification(message, 'info');
        },
        renderSuccess: function(_ctx, message) {
            // The library calls this with null at submit start to clear stale UI.
            // Do NOT reset the form/captcha here, or the POST would be sent empty.
            if (!message) {
                const successEl = document.querySelector('#quote-form [data-fs-success]');
                if (successEl) {
                    successEl.textContent = '';
                    successEl.removeAttribute('data-fs-active');
                }
                return;
            }
            const dict = languages[currentLanguage]?.notifications;
            showQuoteFormSuccess(dict?.success || message, { notify: false });
        },
        renderFormError: function(_ctx, message) {
            if (!message) {
                const errorEl = document.querySelector('#quote-form .quote-form-error[data-fs-error]');
                if (errorEl) {
                    errorEl.textContent = '';
                    errorEl.removeAttribute('data-fs-active');
                }
                return;
            }
            showQuoteFormFailure(message, { notify: false });
        },
        disable: function({ form: quoteForm }) {
            const btn = quoteForm.querySelector('[data-fs-submit-btn]');
            if (btn) {
                btn.disabled = true;
                btn.classList.add('is-loading');
            }
        },
        enable: function({ form: quoteForm }) {
            const btn = quoteForm.querySelector('[data-fs-submit-btn]');
            if (btn) {
                btn.disabled = false;
                btn.classList.remove('is-loading');
            }
        },
    });
}

// Event Listeners
function setupEventListeners() {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLanguage) switchLanguage(lang);
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Counter animation
    const counters = document.querySelectorAll('.stat-number[data-number]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-number'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            counter.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    return num >= 1000 ? (num / 1000).toFixed(0) + ',000' : num.toString();
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: ${type === 'success' ? '#10b981' : '#3b82f6'}; 
                    color: white; padding: 16px 20px; border-radius: 12px; z-index: 10000; 
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transform: translateX(100%); 
                    transition: transform 0.3s ease; max-width: 400px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span style="margin-left: 8px;">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    const notificationEl = notification.firstElementChild;
    
    setTimeout(() => notificationEl.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notificationEl.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Enhanced AOS initialization with aggressive animation triggering
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: false, // Allow animations to retrigger
            offset: 20,  // Very low offset for immediate triggering
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 30,  // Faster response
            throttleDelay: 50   // More frequent updates
        });
        
        // Aggressive animation triggering for fast scrolling
        let scrollTimeout;
        let isScrolling = false;
        
        // Enhanced scroll handler
        function handleScroll() {
            if (!isScrolling) {
                isScrolling = true;
                // Immediate check for visible elements
                checkAndTriggerAnimations();
                
                // Throttled AOS refresh
                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    AOS.refresh();
                    isScrolling = false;
                }, 50);
            }
        }
        
        // Manual animation trigger for elements in viewport
        function checkAndTriggerAnimations() {
            const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
                
                if (isVisible) {
                    element.classList.add('aos-animate');
                }
            });
        }
        
        // Enhanced scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Force initial check after load
        window.addEventListener('load', function() {
            setTimeout(() => {
                checkAndTriggerAnimations();
                AOS.refresh();
            }, 300);
        });
        
        // Resize handler
        window.addEventListener('resize', function() {
            setTimeout(() => {
                checkAndTriggerAnimations();
                AOS.refresh();
            }, 100);
        });
        
        // Initial animation check
        setTimeout(() => {
            checkAndTriggerAnimations();
        }, 500);
    }
});

// Global API
window.TopPerformance = {
    switchLanguage: switchLanguage,
    getCurrentLanguage: () => currentLanguage,
    getSupportedLanguages: () => Object.keys(languages || {}),
    showNotification: showNotification
};

// Enhanced Animation System for All Sections
function createAdvancedAnimationTriggers() {
    // Get all sections with AOS elements
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionElements = section.querySelectorAll('[data-aos]');
        if (sectionElements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Immediate animation trigger
                    sectionElements.forEach(el => {
                        if (!el.classList.contains('aos-animate')) {
                            el.classList.add('aos-animate');
                        }
                    });
                    
                    // Force AOS refresh for this section
                    if (typeof AOS !== 'undefined') {
                        AOS.refresh();
                    }
                }
            });
        }, {
            threshold: 0.05, // Very low threshold for early triggering
            rootMargin: '100px 0px -50px 0px' // Start animation well before element is fully visible
        });
        
        observer.observe(section);
    });
}

// Enhanced scroll-based animation triggering
function initScrollBasedAnimations() {
    let scrollTimer = null;
    
    function triggerVisibleAnimations() {
        const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            // Very generous triggering area
            const isVisible = rect.top < windowHeight * 0.95 && rect.bottom > -50;
            
            if (isVisible) {
                element.classList.add('aos-animate');
            }
        });
    }
    
    // Immediate trigger on scroll
    window.addEventListener('scroll', function() {
        triggerVisibleAnimations();
        
        // Also trigger AOS refresh with debounce
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 100);
    }, { passive: true });
    
    // Initial trigger
    setTimeout(triggerVisibleAnimations, 300);
}

// Language-aware height recalculation
function recalculateAnimationPositions() {
    // 強制重新計算所有 AOS 元素位置
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    // 重新設置所有動畫狀態
    document.querySelectorAll('[data-aos]').forEach(element => {
        element.classList.remove('aos-animate');
    });
    
    // 等待一個渲染幀後重新觸發可見動畫
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            triggerVisibleAnimations();
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });
}

// 手動觸發所有可見動畫的改進版本
function triggerVisibleAnimations() {
    const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        
        // 非常寬鬆的觸發條件
        const isVisible = (
            elementTop < scrollTop + windowHeight * 1.1 && 
            elementTop + rect.height > scrollTop - 100
        );
        
        if (isVisible) {
            element.classList.add('aos-animate');
        }
    });
}

// 語言變化觀察器
function observeLanguageChanges() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                // 語言屬性變化時重新計算
                setTimeout(() => {
                    recalculateAnimationPositions();
                }, 200);
            }
        });
    });
    
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lang']
    });
}

// Initialize all advanced animation systems
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        createAdvancedAnimationTriggers();
        initScrollBasedAnimations();
        observeLanguageChanges(); // 啟動語言變化觀察
    }, 800);
});


// Ultimate animation insurance - aggressive triggering
function ultimateAnimationInsurance() {
    // Super aggressive animation triggering for fast scrollers
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    
    function detectScrollDirection() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop;
    }
    
    function forceAllVisibleAnimations() {
        const elements = document.querySelectorAll('[data-aos]');
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollTop;
            const elementBottom = elementTop + rect.height;
            
            // Check if element is anywhere near the viewport
            const isNearViewport = (
                elementTop < scrollTop + windowHeight * 1.2 && 
                elementBottom > scrollTop - 200
            );
            
            if (isNearViewport && !element.classList.contains('aos-animate')) {
                element.classList.add('aos-animate');
                
                // Force immediate style application
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Multiple trigger mechanisms
    window.addEventListener('scroll', function() {
        detectScrollDirection();
        forceAllVisibleAnimations();
    }, { passive: true });
    
    // Trigger on page visibility change (tab switching)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            setTimeout(forceAllVisibleAnimations, 100);
        }
    });
    
    // Trigger on resize
    window.addEventListener('resize', function() {
        setTimeout(forceAllVisibleAnimations, 100);
    });
    
    // Initial trigger with multiple delays
    setTimeout(forceAllVisibleAnimations, 500);
    setTimeout(forceAllVisibleAnimations, 1000);
    setTimeout(forceAllVisibleAnimations, 2000);
}

// Initialize ultimate insurance
window.addEventListener('load', ultimateAnimationInsurance);
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(ultimateAnimationInsurance, 1000);
});

// Privacy Policy Modal 與 Product Modal
document.addEventListener('DOMContentLoaded', function() {
    // 初始化隱私權連結
    const privacyLink = document.getElementById('privacyLink');
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('privacyModal');
        });
    }

    // 產品詳情按鈕
    document.querySelectorAll('.product-btn').forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pid = this.getAttribute('data-product-id') || '';
            openProductModal(pid);
        });
    });

    // 關閉按鈕與背景
    document.querySelectorAll('[data-modal-close]').forEach((el) => {
        el.addEventListener('click', () => closeModal(el.closest('.modal-overlay')?.id));
    });
    document.querySelectorAll('.modal-overlay').forEach((ov) => {
        ov.addEventListener('click', (e) => {
            if (e.target === ov) closeModal(ov.id);
        });
    });
});

function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return;
    el.classList.remove('show');
    document.body.style.overflow = '';
}

function openProductModal(productId) {
    // 以現有多語字典為主，補充示意規格
    const dict = languages[currentLanguage] || languages['en'];
    const p = {
        flipTable: {
            title: dict?.products?.flipTable?.title,
            desc: dict?.products?.flipTable?.description,
            specs: [
                'Size: 1400 x 600 x 750 mm',
                'Materials: Steel frame + MDF top',
                'Finish: Powder coating',
                'Feature: One-touch flip, nested storage'
            ],
            img: 'assets/images/products/product-1.png'
        },
        childWardrobe: {
            title: dict?.products?.childWardrobe?.title,
            desc: dict?.products?.childWardrobe?.description,
            specs: [
                'Size: 800 x 500 x 1800 mm',
                'Materials: Particle board + PVC edge',
                'Safety: CPSIA compliant',
                'Colors: White wood grain'
            ],
            img: 'assets/images/products/product-2.png'
        },
        bookshelf: {
            title: dict?.products?.bookshelf?.title,
            desc: dict?.products?.bookshelf?.description,
            specs: [
                'Size: 900 x 350 x 1800 mm',
                'Structure: Knock-down (KD) design',
                'Load: 25 kg/shelf',
                'Finish: UV coating'
            ],
            img: 'assets/images/products/product-3.png'
        },
        fileCabinet: {
            title: dict?.products?.fileCabinet?.title,
            desc: dict?.products?.fileCabinet?.description,
            specs: [
                'Size: 900 x 450 x 1800 mm',
                'Security: Cam lock',
                'Shelves: Adjustable',
                'Finish: Powder coating'
            ],
            img: 'assets/images/products/product-4.png'
        },
        storageCabinet: {
            title: dict?.products?.storageCabinet?.title,
            desc: dict?.products?.storageCabinet?.description,
            specs: [
                'Size: 800 x 400 x 1600 mm',
                'Usage: Multi-room storage',
                'Assembly: Tool-less options',
                'Customization: Colors/handles'
            ],
            img: 'assets/images/products/product-5.png'
        }
    }[productId] || null;

    const modal = document.getElementById('productModal');
    if (!modal) return;

    if (p) {
        modal.querySelector('[data-product-title]').textContent = p.title || '';
        modal.querySelector('[data-product-desc]').textContent = p.desc || '';
        modal.querySelector('[data-product-img]').setAttribute('src', p.img);
        modal.querySelector('[data-product-img]').setAttribute('alt', p.title || '');
        const ul = modal.querySelector('[data-product-specs]');
        ul.innerHTML = '';
        (p.specs || []).forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            ul.appendChild(li);
        });
    }

    openModal('productModal');
}

