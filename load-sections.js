// load-sections.js
// Fetches each section's standalone HTML partial and mounts it in place.
// Keeps each section's markup in its own file (sections/*.html) for easy editing,
// while still producing a single-page site at runtime.

const sections = [
  { id: 'hero-mount', src: 'sections/hero.html' },
  { id: 'about-mount', src: 'sections/about.html' },
  { id: 'experience-mount', src: 'sections/experience.html' },
  { id: 'contact-mount', src: 'sections/contact.html' },
];

async function loadSection({ id, src }) {
  const mount = document.getElementById(id);
  if (!mount) return;
  try {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`${src}: ${res.status}`);
    mount.outerHTML = await res.text();
  } catch (err) {
    mount.innerHTML = `<p style="padding:2rem;text-align:center;color:#b00020;">Couldn't load this section (${src}). If you're viewing this file directly from disk, serve it over a local web server instead — e.g. <code>python3 -m http.server</code>.</p>`;
    console.error('Section load failed:', err);
  }
}

Promise.all(sections.map(loadSection));
