(function(){
  "use strict";

  // ---------- COPY TO CLIPBOARD ----------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  const toast = document.getElementById('liveToast');

  function showToast(message) {
    toast.textContent = message || '📋 Copied to clipboard';
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 1800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText('rainahmudzanani@gmail.com')
        .then(() => showToast('✉️ Email copied'))
        .catch(() => alert('Copy manually: rainahmudzanani@gmail.com'));
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText('+27760138744')
        .then(() => showToast('📞 Phone copied'))
        .catch(() => alert('Copy manually: +27 76 013 8744'));
    });
  }

  // ---------- BACK TO TOP ----------
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (backBtn) {
      backBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    }
  });
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- FADE-UP ANIMATION (Intersection Observer) ----------
  const faders = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.15 });

  faders.forEach(el => observer.observe(el));

})();