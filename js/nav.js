// ── MENU MOBILE ───────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.nav-hamburger');
  if (!menu || !hamburger) return;
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ── SCROLL REVEAL ─────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ── NAV SCROLL SHADOW ─────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});