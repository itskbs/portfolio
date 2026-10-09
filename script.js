document.getElementById('year').textContent = new Date().getFullYear();

// Cursor spotlight
const glow = document.querySelector('.glow');
window.addEventListener('pointermove', (e) => {
  glow.style.setProperty('--x', e.clientX + 'px');
  glow.style.setProperty('--y', e.clientY + 'px');
});

// Highlight the current section in the side nav
const links = [...document.querySelectorAll('nav a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
function updateActive() {
  const line = window.innerHeight * 0.35;
  let current = sections[0];
  sections.forEach((s) => { if (s && s.getBoundingClientRect().top <= line) current = s; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
  links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', updateActive, { passive: true });
updateActive();
