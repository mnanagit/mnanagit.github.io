# Workflow Quick Reference

**Model:** Contractor (you direct, Claude orchestrates)

---

## The Loop

```
Your instruction
    ↓
[PLAN] (if multi-file or unclear) → Show plan → Your approval
    ↓
[EXECUTE] Implement, verify, done
    ↓
[REPORT] Summary + what's ready
    ↓
Repeat
```

---

## I Ask You When

- **Design forks:** "Option A (fast) vs. Option B (robust). Which?"
- **Code ambiguity:** "Spec unclear on X. Assume Y?"
- **Replication edge case:** "Just missed tolerance. Investigate?"
- **Scope question:** "Also refactor Y while here, or focus on X?"

---

## I Just Execute When

- Code fix is obvious (bug, pattern application)
- Verification (tolerance checks, tests, compilation)
- Documentation (logs, commits)
- Plotting (per established standards)
- Deployment (after you approve, I ship automatically)

---

## Quality Gates (No Exceptions)

| Score | Action |
|-------|--------|
| >= 80 | Ready to commit |
| < 80  | Fix blocking issues |

---

## Non-Negotiables

- **Paths:** always relative; use `here::here()` in R — no hardcoded machine paths ever
- **Seeds:** `set.seed(42)` once at the top of any stochastic R script
- **Figures:** white background, 300 DPI minimum, saved to `Figures/` with descriptive snake_case names
- **Colors:** ETH Blue `#215CAF` (primary), ETH Petrol `#007894` (accent), Grey `#6F6F6F` (text) — no other brand colors without approval
- **Responsiveness:** all HTML pages must render correctly at 320 px, 768 px, and 1200 px viewport widths

---

## Preferences

**Visual:** Publication-ready; no chart junk; Plotly for interactive web charts; ggplot2 for static R figures
**Reporting:** Concise bullets in summary; detailed prose on request only
**Session logs:** Always — post-plan, incremental (1-3 lines per decision), end-of-session
**Replication:** Strict — flag any near-miss; no hardcoded paths; R scripts must run top-to-bottom on a clean session

---

## Exploration Mode

For experimental work, use the **Fast-Track** workflow:
- Work in `explorations/` folder
- 60/100 quality threshold (vs. 80/100 for production)
- No plan needed — just a research value check (2 min)
- See `.claude/rules/exploration-fast-track.md`

---

## Next Step

You provide task → I plan (if needed) → Your approval → Execute → Done.
