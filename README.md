# HeroForge V1 — Autonomous Creative Website Studio (2026 AI Design Workflow & Hallmark Edition)

HeroForge V1 is a complete, portable, cross-agent autonomous website studio designed for **Google Antigravity**, **Claude Code**, **OpenAI Codex**, **OpenCode**, and **Hermes**. It combines **44 verified creative & engineering skills** (`15` real upstream open-source GitHub repositories + `29` HeroForge studio skills), the **6-Stage 2026 AI Design Workflow** ([`WORKFLOW.md`](./WORKFLOW.md)), **Griffin Wooldridge's 7 Fixes That Make AI UI Look Expensive**, **Together AI / Nutlope's Hallmark v2.0 16-Rule Floor**, **app-free procedural Three.js / React Three Fiber 3D engineering**, **7 A+ Flagship Websites**, and a **60-second 30fps Light-Mode Motion-Graphics `/Brag` film**.

---

## 1. The 15 Verified Real-Repo Designer Skills (`skills-manifest.json`)

Every third-party skill in HeroForge V1 is cloned and verified from its real upstream GitHub repository:

| Skill | Real GitHub Repository | Commit SHA | Install Command |
| :--- | :--- | :--- | :--- |
| **`hallmark`** | [`github.com/Nutlope/hallmark`](https://github.com/Nutlope/hallmark) | `7e213cb` | `npx skills add nutlope/hallmark -g` |
| **`design-taste-frontend`** | [`github.com/Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) | `f6b7657` | `npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend` |
| **`impeccable`** | [`github.com/pbakaus/impeccable`](https://github.com/pbakaus/impeccable) | `f2baa41` | `npx impeccable install` |
| **`redesign-screen`** | [`github.com/mobbin/skills`](https://github.com/mobbin/skills/tree/main/skills/redesign-screen) | `79124d9` | `/plugin marketplace add mobbin/skills` |
| **`pick-ui-library`** | [`github.com/emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library) | `715c180` | `npx skills add https://github.com/emilkowalski/skills --skill pick-ui-library` |
| **`emil-design-eng`** | [`github.com/emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng) | `715c180` | `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng` |
| **`transitions-dev`** | [`github.com/Jakubantalik/transitions.dev`](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) | `20d70c1` | `npx skills add Jakubantalik/transitions.dev` |
| **`web-design-guidelines`** | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | `1a2c79d` | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` |
| **`frontend-design`** | [`github.com/anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | `2c5958e` | `/plugin install frontend-design@claude-plugins-official` |
| **`playwright-browser-testing`** | [`github.com/anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | `2c5958e` | `npx skills add anthropics/skills --skill webapp-testing` |
| **`react-best-practices`** | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) | `1a2c79d` | `npx skills add vercel-labs/agent-skills --skill react-best-practices` |
| **`composition-patterns`** | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns) | `1a2c79d` | `npx skills add vercel-labs/agent-skills --skill composition-patterns` |
| **`react-view-transitions`** | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions) | `1a2c79d` | `npx skills add vercel-labs/agent-skills --skill react-view-transitions` |
| **`ui-ux-pro-max`** | [`github.com/nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `6ae86f6` | `npx skills add nextlevelbuilder/ui-ux-pro-max-skill` |
| **`claude-be-ambitious`** | [`github.com/DannyMac180/skills`](https://github.com/DannyMac180/skills/tree/main/be-ambitious) | `5b02caf` | `npx skills add DannyMac180/skills --skill be-ambitious` |

Plus **29 HeroForge V1 Studio Skills** (`heroforge-master-studio`, `hyperframes-motion-graphics`, `cinematic-3d`, `3d-asset-creation`, `deslopify`, `visual-qa`, etc.) = **44 Total Synchronized Skills** across `.agents/skills`, `.claude/skills`, and `.codex/skills`.

---

## 2. The 6-Stage 2026 AI Design Workflow (`WORKFLOW.md`)

1. **Stage 1 — Deeper Prompting & Research (`claude-be-ambitious` + ChatGPT / Hermes)**: Answer Felix Rieseberg's 4 expert depth questions before writing code.
2. **Stage 2 — Real-Product Precedent & Job Walk (`mobbin/redesign-screen` + `deep-creative-research`)**: Walk the 6-point Mobbin job path backed by real shipped product screens.
3. **Stage 3 — Material Theme Deal & Plate Comps (`Nutlope/hallmark` + `image-generation`)**: Deal a material theme via `theme.mjs` and synthesize high-res text-free plates (with Codex CLI fallback).
4. **Stage 4 — Hero-First Build with the 7 Expensive UI Fixes (`eQ74n4huAcA` + `design-taste-frontend`)**:
   - **Focal Point**: `>= 70%` unobstructed hero subject, 1 primary CTA, zero competing stat cards.
   - **Spacing**: One section per `100dvh` screen, equal edges, `overflow-x: clip`, `minmax(0, 1fr)` grid tracks.
   - **Typography**: Intentional 2-line balanced headline wraps (`0` orphans), natural 1-word nav labels, `tabular-nums`.
   - **Color**: Tokenized `:root` palettes; workspace Mineral Light Blue (`#58A6FF`) isolated strictly inside Agent OS (`:4100`).
   - **Real Content**: Authentic telemetry, interactive 3D/plate switchers, zero invented proof.
   - **Details**: Exposed `1px` hairlines, concentric border radii, instant `:focus-visible`, native `<dialog>`.
   - **Motion**: Custom `cubic-bezier(0.23, 1, 0.32, 1)` (`emil-design-eng`) and `t-*` CSS transitions (`transitions-dev`).
5. **Stage 5 — Hallmark Sloplint, Impeccable Critique & Multi-Viewport Playwright QA (`1440×900`, `768×1024`, `390×844`)**.
6. **Stage 6 — 30fps Light-Mode `/Brag` Motion Film (`brag-output/brag.mp4`) & GitHub/Vercel Deployment (`clickteig11-byte`)**.

---

## 3. Workspace Applications & Port Allocation

| Application | Path | Dev Port | Description |
| :--- | :--- | :--- | :--- |
| **HeroForge Agent OS** | `apps/gallery` | `http://localhost:4100` | 7-Tab Chalkboard Slate & Stone Agent OS (`HeroForge 7 Sites`, `Obsidian Vault`, `Hermes Chat`, `Codex CLI`, `OpenDesign`, `Prompt Vault`, `Hyperframes /Brag`) |
| **Website A (3D Flagship)** | `apps/website-a-3d` | `http://localhost:4101` | **AETHERION · CALIBRE 01** — Sunlit Museum Ivory & German Silver Triaxial Tourbillon (`A+` Minimalist Hero) |
| **Website B (Editorial Flagship)** | `apps/website-b-editorial` | `http://localhost:4102` | **KUROKAWA & VANE** — Swiss-Japanese Architectural Monograph & Residence Plate Switcher (`A+` Minimalist Hero) |

---

## 4. Verification & Build Commands
```bash
# Audit & sync all 44 skills across .agents, .claude, and .codex
node scripts/audit-and-upgrade-skills.mjs

# Run Deslopify static zero-slop audit
node scripts/deslopify-audit.mjs

# Build all 3 production apps
npm run build:all

# Run full clean-install verification suite
node scripts/verify-clean-install.mjs
```
