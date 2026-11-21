// 離線展示版：商品 API 與聯絡表單模擬
(function () {
  const offlineTexts = {
    en: 'Offline demo only — the contact form cannot send messages.',
    'zh-TW': '此為離線展示版本，聯絡表單僅供預覽，無法實際送出。',
    'zh-CN': '此为离线展示版本，联系表单仅供预览，无法实际送出。',
    vi: 'Bản demo ngoại tuyến — biểu mẫu liên hệ không thể gửi tin nhắn.',
    th: 'เวอร์ชันออฟไลน์ — แบบฟอร์มติดต่อไม่สามารถส่งข้อความได้',
    ja: 'オフラインデモ版のため、お問い合わせフォームは送信できません。',
    ko: '오프라인 데모 버전입니다. 문의 양식은 실제로 전송되지 않습니다.',
  };
  if (typeof languages !== 'undefined') {
    Object.keys(offlineTexts).forEach(function (lang) {
      if (!languages[lang]) return;
      languages[lang].contact = languages[lang].contact || {};
      languages[lang].contact.offlineNotice = offlineTexts[lang];
      languages[lang].notifications = languages[lang].notifications || {};
      languages[lang].notifications.offlineDemo = offlineTexts[lang];
    });
  }

  const originalFetch = window.fetch;
  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (url.includes('products') && window.TOPP_OFFLINE_PRODUCTS) {
      let lang = 'en';
      try {
        const parsed = new URL(url, window.location.href);
        lang = parsed.searchParams.get('lang') || 'en';
      } catch (e) {
        const m = url.match(/[?&]lang=([^&]+)/);
        if (m) lang = decodeURIComponent(m[1]);
      }
      const bucket = window.TOPP_OFFLINE_PRODUCTS[lang] || window.TOPP_OFFLINE_PRODUCTS.en;
      let limit = 10;
      try {
        const parsed = new URL(url, window.location.href);
        limit = parseInt(parsed.searchParams.get('limit') || '10', 10);
      } catch (e) {
        const m = url.match(/[?&]limit=(\d+)/);
        if (m) limit = parseInt(m[1], 10);
      }
      const payload = {
        success: true,
        data: (bucket && bucket.data ? bucket.data : []).slice(0, limit),
      };
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(payload),
      });
    }
    return originalFetch.apply(this, arguments);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('offline-contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const dict = (typeof languages !== 'undefined' && languages[currentLanguage])
        ? languages[currentLanguage].notifications
        : null;
      const msg = (dict && dict.offlineDemo)
        || '此為離線展示版本，表單無法送出。正式網站上線後即可使用聯絡功能。';
      if (typeof showNotification === 'function') {
        showNotification(msg, 'info');
      } else {
        alert(msg);
      }
    });
  });
})();
