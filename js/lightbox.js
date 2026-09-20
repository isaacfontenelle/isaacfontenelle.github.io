/* ==========================================================
   Site interactions — include on every project page:
   <script src="js/lightbox.js" defer></script>

   1) Lightbox — click a gallery image to view it fullscreen.
      Works on any image inside an element with class "project-gallery".
   2) Back to top — a floating button that appears after scrolling
      down, and smooth-scrolls back to the top of the page on click.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Lightbox ---- */
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<img alt="">';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-gallery img, .service-visual img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---- Back to top ---- */
  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = '&uarr;';
  document.body.appendChild(backToTop);

  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
