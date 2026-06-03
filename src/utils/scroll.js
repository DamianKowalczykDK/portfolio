export function scrollToSection(id) {
  const target = document.querySelector(id);
  if (target) window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
}

export function handleAnchor(e, id) {
  e.preventDefault();
  scrollToSection(id);
}
