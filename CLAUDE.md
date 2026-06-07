# CLAUDE.md — Mohamed NANA Academic Website

**Project:** Personal academic website
**Stack:** Plain HTML · CSS · JavaScript
**Deployment:** GitHub Pages (`docs/` folder → `mohamednana.github.io`)
**Branch:** main

---

## Folder Structure

```
website-momo-nana/
├── CLAUDE.md                        # This file
├── README.md
├── MEMORY.md                        # AI memory index
├── .claude/                         # Claude Code config (skills, hooks, rules)
│
├── docs/                            # GitHub Pages root (what visitors see)
│   ├── index.html                   # About / homepage
│   ├── styles.css                   # Shared stylesheet — edit here, applies everywhere
│   ├── pages/
│   │   ├── research.html
│   │   ├── teaching.html
│   │   ├── projects.html
│   │   └── contact.html
│   ├── assets/
│   │   ├── cv/                      # Drop cv_YYYY_MM.pdf here
│   │   ├── papers/                  # Paper PDFs
│   │   ├── photos/                  # Profile photos
│   │   ├── figures/                 # Maps, charts
│   │   └── icons/
│   └── data/
│       └── publications.json        # Structured publication data
│
├── drafts/                          # Working text — not served
│   ├── biography.md
│   ├── research_statement.md
│   └── website_text.md
│
├── quality_reports/                 # Session logs and plans
│   └── session_logs/
└── templates/                       # Claude workflow templates
```

---

## Editing the Site

### Adding a paper to Research
1. Open `docs/pages/research.html`
2. Duplicate the `<div class="paper">` block
3. Fill in title, authors, year, abstract, and links
4. Also update `docs/data/publications.json`

### Updating the CV
- Drop the new PDF into `docs/assets/cv/` using the name `cv_YYYY_MM.pdf`
- Update the `href` in the nav of every HTML file (`index.html` + all `pages/*.html`)

### Changing shared styles
- Edit `docs/styles.css` — one file, applies to all pages

### Adding a new page
1. Copy any existing page from `docs/pages/`
2. Update `<title>`, `<meta name="description">`, and content
3. Add a nav link in every other HTML file

---

## Nav path reference

| From file | CSS path | Root link |
|-----------|----------|-----------|
| `docs/index.html` | `styles.css` | `index.html` |
| `docs/pages/*.html` | `../styles.css` | `../index.html` |

---

## Deployment

`docs/` is served directly by GitHub Pages. Push to `main` — no build step needed.

```bash
git add docs/
git commit -m "update: ..."
git push
```
