/* ─────────────────────────────────────────────────────────────
   script.js — Mohamed Nana academic website

   1. Panel switching (sidebar nav + inline links)
   2. Theme toggle (dark / light, persisted in localStorage)
   3. Mobile sidebar toggle with overlay
───────────────────────────────────────────────────────────── */

/* ── Panel switching ─────────────────────────────────────── */
function showPanel(name) {
  document.querySelectorAll('.panel').forEach(function (p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.s-link').forEach(function (l) {
    l.classList.remove('active');
  });

  var panel = document.getElementById('panel-' + name);
  if (panel) { panel.classList.add('active'); }

  var link = document.querySelector('.s-link[data-panel="' + name + '"]');
  if (link) { link.classList.add('active'); }

  window.scrollTo(0, 0);
  closeSidebar();
}

// Expose for inline onclick handlers in HTML
window.showPanel = showPanel;

document.querySelectorAll('.s-link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    showPanel(this.dataset.panel);
  });
});

/* ── Theme toggle ────────────────────────────────────────── */
var html       = document.documentElement;
var themeBtn   = document.getElementById('theme-toggle');
var themeLabel = document.getElementById('theme-label');
var themeIcon  = document.getElementById('theme-icon');

var moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
var sunPath  = '<circle cx="12" cy="12" r="5"/>'
             + '<line x1="12" y1="1" x2="12" y2="3"/>'
             + '<line x1="12" y1="21" x2="12" y2="23"/>'
             + '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>'
             + '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>'
             + '<line x1="1" y1="12" x2="3" y2="12"/>'
             + '<line x1="21" y1="12" x2="23" y2="12"/>'
             + '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>'
             + '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';

function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  if (t === 'dark') {
    themeLabel.textContent = 'Light';
    themeIcon.innerHTML    = sunPath;
  } else {
    themeLabel.textContent = 'Dark';
    themeIcon.innerHTML    = moonPath;
  }
}

// Init from localStorage or default dark
setTheme(localStorage.getItem('theme') || 'dark');

themeBtn.addEventListener('click', function () {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ── Mobile sidebar ──────────────────────────────────────── */
var sidebar = document.getElementById('sidebar');
var overlay = document.getElementById('overlay');
var toggle  = document.getElementById('topbar-toggle');

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}

toggle.addEventListener('click', function () {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});

overlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { closeSidebar(); }
});
