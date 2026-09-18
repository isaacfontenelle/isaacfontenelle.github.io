/* ==========================================================
   Hero carousel — cycles through the slides in the home page's
   hero section automatically. Include only on index.html:
   <script src="js/hero-carousel.js" defer></script>
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;

  var current = 0;
  Array.prototype.forEach.call(slides, function (slide, i) {
    if (i !== 0) slide.classList.remove('active');
  });

  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
});
