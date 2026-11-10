# CLAUDE.md — HeroForge V1 Autonomous Creative Website Studio

This file configures **Claude Code** (and compatible Anthropic agent harnesses) to operate the **HeroForge V1 Autonomous Creative Website Studio**.

## Quick Orientation
- **Skill Directory**: `.claude/skills/` (36 skills synchronized with `.agents/skills/` and `.codex/skills/`).
- **Master Workflow Charter**: Read `AGENTS.md` and `skills-manifest.json` for the complete 10-phase autonomous studio specification.
- **Core Mandatory Skills**:
  1. `.claude/skills/be-ambitious/SKILL.md` — Escalate every task along **Altitude**, **Depth**, and **Range**.
  2. `.claude/skills/deslopify/SKILL.md` — Enforce zero AI buzzwords, zero purple/indigo SaaS gradients, physical material color tokens, tabular numerals (`tabular-nums`), and native `<dialog>` modals.
  3. `.claude/skills/pinterest-aesthetic-curation/SKILL.md` — Include variable aspect-ratio editorial pin-boards with extracted hex swatches and optical camera metadata.
  4. `.claude/skills/mobile-ux-excellence/SKILL.md` — Enforce `100dvh` mobile hero framing, `>= 44×44px` tap targets, zero horizontal overflow at `390×844`, and bottom thumb-zone action docks.
  5. `.claude/skills/3d-asset-creation/SKILL.md` — Build multi-part procedural 3D assemblies in Three.js / React Three Fiber with **zero dependency on Blender or Spline desktop apps**.

## Workspace Port Map
| Application | Workspace Path | Dev Port | Description |
| :--- | :--- | :--- | :--- |
| **HeroForge Gallery** | `apps/gallery` | `4100` | Slate Stone Agent OS Dashboard, 20-Idea Explorer, Visual QA Matrix & Concept Launcher |
| **Website A (3D)** | `apps/website-a-3d` | `4101` | `AETHERION // CALIBRE ZERO` — Procedural Triaxial Tourbillon (R3F + Drei + GSAP) |
| **Website B (Editorial)** | `apps/website-b-editorial` | `4102` | `KUROKAWA & VANE` — Monolithic Geothermal & Acoustic Architecture Monograph |

## Key Verification & Build Commands
```bash
# Audit all 36 skills across .agents, .claude, and .codex
node scripts/audit-and-upgrade-skills.mjs

# Run the Deslopify zero-slop gate (must return 0 violations)
node scripts/deslopify-audit.mjs

# Build all three production bundles
npm run build:all

# Execute empirical Playwright Visual QA across 1440x900, 768x1024, and 390x844
npm run qa:visual

# Verify portable clean-install readiness
npm run test:clean-install
```

## Coding Conventions
- **TypeScript + React 18 + Vite 6**: Strictly typed components, zero `any` leaks, explicit `width`/`height` on all `<img>` tags to prevent CLS.
- **CSS Architecture**: 4-tier CSS custom properties grounded in physical materials, `@media (prefers-reduced-motion: reduce)` support in every stylesheet, and semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<dialog>`, `<footer>`).
