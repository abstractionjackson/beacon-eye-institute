// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('is-open');
  });

  // Mobile dropdown toggles
  document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const link = item.querySelector(':scope > .nav-link');
    if (link) {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    }
  });
}

// Close nav on outside click
document.addEventListener('click', e => {
  if (navList && navList.classList.contains('is-open') && !e.target.closest('.main-nav')) {
    navList.classList.remove('is-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }
});
