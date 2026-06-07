# Mohamed Nana — Academic Website

Personal academic website for **Mohamed Nana**, Research Assistant at ETH Zürich (NADEL).

**Live site:** [mohamednana.github.io](https://mohamednana.github.io)

---

## Stack

- Plain HTML · CSS · JavaScript — no build step, no framework
- Deployed via **GitHub Pages** from the `docs/` folder
- Single-page application: dark fixed sidebar + switchable content panels
- Dark / light theme toggle (persisted in `localStorage`)
- Fully responsive (mobile topbar + slide-in sidebar)

---

## Structure

```
docs/
├── index.html       # Entire site — About, Research, Experience, Education, Contact
├── styles.css       # All styles (Fira Sans + Fira Mono, CSS custom properties)
├── script.js        # Panel switching, theme toggle, mobile sidebar
└── assets/
    ├── cv/          # Drop cv_YYYY_MM.pdf here
    └── photos/      # Profile photo (mohamed_nana.jpg)
```

---

## Editing

### Update biography or content
Edit the relevant `<section class="panel" id="panel-*">` block in `docs/index.html`.

### Add a paper
Duplicate an `<article class="paper">` block in the Research panel and fill in the details. Use `.pbadge-wp` (working paper), `.pbadge-rev` (under review), or `.pbadge-pub` (published/technical note).

### Update the CV
Drop the new PDF into `docs/assets/cv/` and update the `href` on the `<a class="s-cv">` link in the sidebar.

### Change styles
Edit `docs/styles.css` — one file controls everything. Key design tokens are in `:root` and `[data-theme]` blocks at the top.

---

## Deployment

Push to `main` — GitHub Pages serves `docs/` automatically.

```bash
git add docs/
git commit -m "update: ..."
git push
```

---

## Contact

**Mohamed Nana** · [monana@ethz.ch](mailto:monana@ethz.ch) · [mohamednana.github.io](https://mohamednana.github.io)
