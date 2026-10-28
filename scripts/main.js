/* ==========================================================================
   Tugas Akhir Dicoding - Belajar Dasar Pemrograman Web
   File: scripts/main.js
   Deskripsi: Script interaktivitas halaman web (Dark Mode, Responsive Drawer,
              Fitur Like Artikel, dan Smooth Scroll Navigation).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Responsive Navbar Mobile Toggle
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      mobileToggle.innerHTML = isExpanded ? '✕' : '☰';
    });

    // Sembunyikan menu setelah tautan diklik di tampilan mobile
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = '☰';
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 2. Dark / Light Theme Switcher
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('dicoding_theme') || 'light';

  // Set tema awal dari localStorage
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      if (activeTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('dicoding_theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('dicoding_theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. Fitur Interaktif Like / Suka Artikel
  // ------------------------------------------------------------------------
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const countSpan = this.querySelector('.like-count');
      let count = parseInt(countSpan.textContent, 10) || 0;

      if (this.classList.contains('liked')) {
        this.classList.remove('liked');
        count--;
        this.querySelector('.like-icon').textContent = '🤍';
      } else {
        this.classList.add('liked');
        count++;
        this.querySelector('.like-icon').textContent = '❤️';
      }
      countSpan.textContent = count;
    });
  });

  // ------------------------------------------------------------------------
  // 4. Update Tahun Hak Cipta Footer secara Dinamis
  // ------------------------------------------------------------------------
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
