# Max Semchuk — Personal Website

A single-page personal site (Material Design, maroon theme), built from separate
HTML/CSS files per section so each part is easy to find and edit independently.

## Structure

```
index.html              Shell page: nav, footer, loads all sections via JS
scripts/
  load-sections.js      Fetches each sections/*.html file and mounts it
sections/
  hero.html             Name, title, intro, CTA buttons
  about.html             Bio + skills chips
  experience.html        Work history cards + education
  contact.html            Email / LinkedIn / GitHub links
css/
  base.css               Design tokens (colors, type, spacing), reset
  nav.css                 Top app bar
  hero.css                Hero section + buttons
  about.css               About section + skills card
  experience.css          Job cards, education card
  contact.css             Contact links + footer
```

## To update content

Edit the relevant file in `sections/`. No need to touch `index.html` or the JS.
- New job → add a `<article class="job-card">` block in `sections/experience.html`
- New skill → add a `<li class="chip">` in `sections/about.html`
- Update intro → edit `sections/hero.html`

## To restyle

Colors and spacing all flow from CSS variables in `css/base.css` (`--color-primary`
is the maroon accent). Change them there and the whole site updates.

## Running locally

Because sections are loaded via `fetch()`, opening `index.html` directly from disk
(`file://`) won't load them — serve it locally instead:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This is a drop-in replacement for your existing `FriedBender.github.io` repo.
Copy these files into the repo root (replacing `index.html`, and adding the new
`css/`, `sections/`, `scripts/` folders) and push — GitHub Pages serves it as-is.
