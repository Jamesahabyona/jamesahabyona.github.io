/* Site behavior
   - Mobile nav toggle
   - Scroll-reveal fade-in
   - Active nav link highlight
   - Smooth-scroll offset
---------------------------------------------------------------- */
(function () {
  'use strict';

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  // --- Scroll-reveal fade-in ---
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { io.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- Active nav based on URL ---
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });

  // --- Click-to-expand paper abstracts (home page research) ---
  document.querySelectorAll('.paper-title').forEach(function (title) {
    const item = title.closest('.research-item');
    if (!item) return;
    const abstract = item.querySelector('.paper-abstract');
    if (!abstract) return;

    function toggle() {
      const isOpen = title.getAttribute('aria-expanded') === 'true';
      title.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) {
        abstract.classList.remove('is-open');
        abstract.setAttribute('hidden', '');
      } else {
        abstract.classList.add('is-open');
        abstract.removeAttribute('hidden');
      }
    }

    title.addEventListener('click', toggle);
    title.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
})();
