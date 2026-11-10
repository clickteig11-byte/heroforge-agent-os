# CLAUDE.md — HeroForge V1 Autonomous Creative Website Studio (2026 Workflow & Hallmark Edition)

This file configures **Claude Code** (and compatible Anthropic / OpenCode / Codex agent harnesses) to operate the **HeroForge V1 Autonomous Creative Website Studio**.

## Quick Orientation
- **Skill Directory**: `.claude/skills/` (**44 skills** synchronized with `.agents/skills/` and `.codex/skills/`).
- **Master Workflow Charter**: Read [`WORKFLOW.md`](./WORKFLOW.md), [`AGENTS.md`](./AGENTS.md), and [`skills-manifest.json`](./skills-manifest.json) for the 6-stage 2026 AI Design Workflow and 15 verified real-repo third-party skills.
- **Core Mandatory Skills**:
  1. `.claude/skills/heroforge-master-studio/SKILL.md` — Master doctrine combining the **7 Fixes That Make AI UI Look Expensive** (`eQ74n4huAcA`), the **Hallmark 16-Rule Floor**, and the **Minimalist Hero Restraint Law (`B/B− → A+`)**.
  2. `.claude/skills/hallmark/SKILL.md` — Cloned from [`Nutlope/hallmark`](https://github.com/Nutlope/hallmark) (`v2.0.0`, commit `7e213cb6feb4ef82733bd66a0600b2e54ca0994c`): 16-rule Floor, 50 material themes (`theme.mjs`), and `sloplint.mjs`.
  3. `.claude/skills/design-taste-frontend/SKILL.md` — Cloned from [`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) (`v2.5.1`, commit `f6b76575f949707b4e3c37cd86cb44b0b98643e8`): 9 house rules, one section per screen, equal edges, and `gate.mjs`.
  4. `.claude/skills/impeccable/SKILL.md` — Cloned from [`pbakaus/impeccable`](https://github.com/pbakaus/impeccable) (`commit f2baa414a87d9acf1e21ccf776bfaec0262ad6df`): anti-slop critique & remediation.
  5. `.claude/skills/redesign-screen/SKILL.md` — Cloned from [`mobbin/skills`](https://github.com/mobbin/skills/tree/main/skills/redesign-screen) (`commit 79124d92763f6e85107386227a96bbc40479710e`): 6-point job walk & real product evidence.
  6. `.claude/skills/pick-ui-library/SKILL.md` & `.claude/skills/emil-design-eng/SKILL.md` — Cloned from [`emilkowalski/skills`](https://github.com/emilkowalski/skills) (`commit 715c1807e08c497cfd1dc4feb450a2a3300ef2a9`): curated library selection & custom `cubic-bezier(0.23, 1, 0.32, 1)` animation engineering.
  7. `.claude/skills/transitions-dev/SKILL.md` — Cloned from [`Jakubantalik/transitions.dev`](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) (`commit 20d70c1262bf721c0300c2946cbe1fc7605a555c`): 36 portable `t-*` CSS transitions.
  8. `.claude/skills/claude-be-ambitious/SKILL.md` — Cloned from [`DannyMac180/skills`](https://github.com/DannyMac180/skills/tree/main/be-ambitious) (`commit 5b02caf97c72bdd9fd1a9933032942a8650a836c`): Felix Rieseberg's 4-step "deeper, not bigger" prompt escalation.

## Workspace Port Map
| Application | Workspace Path | Dev Port | Description |
| :--- | :--- | :--- | :--- |
| **HeroForge Agent OS** | `apps/gallery` | `4100` | 7-Tab Chalkboard Slate & Stone Agent OS (`HeroForge 7 Sites`, `Obsidian Vault`, `Hermes Chat`, `Codex CLI`, `OpenDesign`, `Prompt Vault`, `Hyperframes /Brag`) |
| **Website A (3D)** | `apps/website-a-3d` | `4101` | `AETHERION // CALIBRE 01` — Sunlit Museum Ivory & German Silver Triaxial Tourbillon (`A+` Minimalist Hero) |
| **Website B (Editorial)** | `apps/website-b-editorial` | `4102` | `KUROKAWA & VANE` — Monolithic Geothermal & Acoustic Architecture Monograph (`A+` Minimalist Hero) |

## Key Verification & Build Commands
```bash
# Audit all 44 skills across .agents, .claude, and .codex
node scripts/audit-and-upgrade-skills.mjs

# Run the Deslopify zero-slop gate (must return 0 violations)
node scripts/deslopify-audit.mjs

# Build all three production bundles
npm run build:all

# Verify portable clean-install readiness
node scripts/verify-clean-install.mjs
```
