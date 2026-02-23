# CLAUDE.MD -- Academic Project Development with Claude Code

<!-- HOW TO USE: Replace [BRACKETED PLACEHOLDERS] with your project info.
     Customize Beamer environments and CSS classes for your theme.
     Keep this file under ~150 lines — Claude loads it every session.
     See the guide at docs/workflow-guide.html for full documentation. -->

**Project:** Mohamed NANA — Personal Academic Website
**Institution:** ETH Zürich (Scientific Assistant, Development Economics)
**Branch:** main

---

## Core Principles

- **Plan first** -- enter plan mode before non-trivial tasks; save plans to `quality_reports/plans/`
- **Verify after** -- compile/render and confirm output at the end of every task
- **Single source of truth** -- HTML/Quarto `.qmd` is authoritative; Beamer `.tex` derives from it (website-first)
- **Quality gates** -- nothing ships below 80/100
- **[LEARN] tags** -- when corrected, save `[LEARN:category] wrong → right` to MEMORY.md

---

## Folder Structure

```
website-momo-nana/
├── CLAUDE.MD                    # This file
├── .claude/                     # Rules, skills, agents, hooks
├── Bibliography_base.bib        # Centralized bibliography
├── Figures/                     # Figures and plot assets
├── Quarto/                      # Quarto .qmd files + eth-clean.scss theme
├── docs/                        # GitHub Pages root (auto-generated)
│   ├── index.html               # Homepage
│   └── slides/                  # Rendered presentations
├── scripts/                     # Utility scripts + R code
│   └── R/                       # R analysis scripts
├── quality_reports/             # Plans, session logs, merge reports
├── explorations/                # Research sandbox (see rules)
├── templates/                   # Session log, quality report templates
├── master_supporting_docs/      # Reference papers and existing slides
├── Slides/                      # Beamer .tex files (inactive — future use)
└── Preambles/                   # LaTeX headers (inactive — future use)
```

---

## Commands

```bash
# Render Quarto website / slides
quarto render Quarto/file.qmd          # Single file
quarto render                           # All files (requires _quarto.yml)

# Deploy to GitHub Pages
./scripts/sync_to_docs.sh              # Sync all rendered output to docs/
./scripts/sync_to_docs.sh LectureN    # Sync specific lecture

# Quality score
python scripts/quality_score.py Quarto/file.qmd
python scripts/quality_score.py docs/index.html

# LaTeX (3-pass, XeLaTeX — future use when Slides/ is active)
# cd Slides && TEXINPUTS=../Preambles:$TEXINPUTS xelatex -interaction=nonstopmode file.tex
# BIBINPUTS=..:$BIBINPUTS bibtex file && (repeat xelatex twice more)
```

---

## Quality Thresholds

| Score | Gate | Meaning |
|-------|------|---------|
| 80 | Commit | Good enough to save |
| 90 | PR | Ready for deployment |
| 95 | Excellence | Aspirational |

---

## Skills Quick Reference

| Command | What It Does |
|---------|-------------|
| `/compile-latex [file]` | 3-pass XeLaTeX + bibtex |
| `/deploy [LectureN]` | Render Quarto + sync to docs/ |
| `/extract-tikz [LectureN]` | TikZ → PDF → SVG |
| `/proofread [file]` | Grammar/typo/overflow review |
| `/visual-audit [file]` | Slide layout audit |
| `/pedagogy-review [file]` | Narrative, notation, pacing review |
| `/review-r [file]` | R code quality review |
| `/qa-quarto [LectureN]` | Adversarial Quarto vs Beamer QA |
| `/slide-excellence [file]` | Combined multi-agent review |
| `/translate-to-quarto [file]` | Beamer → Quarto translation |
| `/validate-bib` | Cross-reference citations |
| `/devils-advocate` | Challenge slide design |
| `/create-lecture` | Full lecture creation |
| `/commit [msg]` | Stage, commit, PR, merge |
| `/lit-review [topic]` | Literature search + synthesis |
| `/research-ideation [topic]` | Research questions + strategies |
| `/interview-me [topic]` | Interactive research interview |
| `/review-paper [file]` | Manuscript review |
| `/data-analysis [dataset]` | End-to-end R analysis |

---

## Quarto / Website CSS Classes

| Class             | Effect                              | Use Case                        |
|-------------------|-------------------------------------|---------------------------------|
| `.paper-card`     | Card with border + hover shadow     | Publication entries             |
| `.badge`          | ETH Petrol pill tag                 | Field / topic labels            |
| `.hero`           | Full-width ETH Blue banner          | Landing page hero section       |
| `.section-title`  | ETH Blue heading + underline        | Section headings                |
| `.abstract`       | Collapsible grey block              | Paper abstracts                 |
| `.smaller`        | 85% font size                       | Dense content, footnotes        |

## Beamer Custom Environments

<!-- Beamer / Slides infrastructure is inactive (future use).
     When Slides/ is activated, add your environments here.
     Example entries:
     | `keybox` | ETH Blue background box | Key points |
     | `definitionbox[Title]` | ETH-bordered titled box | Formal definitions |
-->

---

## Current Project State

| Section    | File               | Status    | Key Content                          |
|------------|--------------------|-----------|--------------------------------------|
| Home       | `docs/index.html`  | Active    | Bio, research interests, recent work |
| Research   | TBD                | Planned   | Working papers, publications         |
| Teaching   | TBD                | Planned   | Course materials                     |
| Data/Code  | TBD                | Planned   | Replication packages                 |
