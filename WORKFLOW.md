# HeroForge V1 — Complete 2026 AI Design & Hallmark Workflow

This document defines the updated **HeroForge V1 End-to-End Autonomous Design & Engineering Workflow**, integrating:
1. **[How to Make AI-Generated UI Look Expensive (7 Fixes)](https://www.youtube.com/watch?v=eQ74n4huAcA)** — *Griffin Wooldridge*
2. **[Claude Skills for Designers (Ban AI Slop Forever)](https://www.youtube.com/watch?v=ia8xgSqqQ_0&t=220s)** — *Griffin Wooldridge*
3. **[My Complete AI Design Workflow in 2026](https://www.youtube.com/watch?v=7eCK9ioNpqU)** — *Griffin Wooldridge*
4. **[Hallmark v2.0 (`Nutlope/hallmark`)](https://github.com/Nutlope/hallmark)** — *Together AI / Hassan El Mghari*

---

## 1. The 15 Verified Real-Repo Third-Party Skills (`skills-manifest.json`)

Every third-party skill installed in `.agents/skills/`, `.claude/skills/`, and `.codex/skills/` is cloned directly from its official open-source GitHub repository with a verified commit SHA:

| # | Skill Name | Upstream GitHub Repository | Verified Commit SHA | CLI Install Command |
| :--- | :--- | :--- | :--- | :--- |
| **01** | `hallmark` | [`github.com/Nutlope/hallmark`](https://github.com/Nutlope/hallmark) | `7e213cb6feb4ef82733bd66a0600b2e54ca0994c` | `npx skills add nutlope/hallmark -g` |
| **02** | `design-taste-frontend` | [`github.com/Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) | `f6b76575f949707b4e3c37cd86cb44b0b98643e8` | `npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend` |
| **03** | `impeccable` | [`github.com/pbakaus/impeccable`](https://github.com/pbakaus/impeccable) | `f2baa414a87d9acf1e21ccf776bfaec0262ad6df` | `npx impeccable install` |
| **04** | `redesign-screen` | [`github.com/mobbin/skills`](https://github.com/mobbin/skills/tree/main/skills/redesign-screen) | `79124d92763f6e85107386227a96bbc40479710e` | `/plugin marketplace add mobbin/skills` |
| **05** | `pick-ui-library` | [`github.com/emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library) | `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` | `npx skills add https://github.com/emilkowalski/skills --skill pick-ui-library` |
| **06** | `emil-design-eng` | [`github.com/emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng) | `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` | `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng` |
| **07** | `transitions-dev` | [`github.com/Jakubantalik/transitions.dev`](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) | `20d70c1262bf721c0300c2946cbe1fc7605a555c` | `npx skills add Jakubantalik/transitions.dev` |
| **08** | `web-design-guidelines` | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` |
| **09** | `frontend-design` | [`github.com/anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | `2c5958ecac7cee2b583967a2c4981d0f4a75c579` | `/plugin install frontend-design@claude-plugins-official` |
| **10** | `playwright-browser-testing` | [`github.com/anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | `2c5958ecac7cee2b583967a2c4981d0f4a75c579` | `npx skills add anthropics/skills --skill webapp-testing` |
| **11** | `react-best-practices` | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) | `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | `npx skills add vercel-labs/agent-skills --skill react-best-practices` |
| **12** | `composition-patterns` | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns) | `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | `npx skills add vercel-labs/agent-skills --skill composition-patterns` |
| **13** | `react-view-transitions` | [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions) | `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | `npx skills add vercel-labs/agent-skills --skill react-view-transitions` |
| **14** | `ui-ux-pro-max` | [`github.com/nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | `6ae86f61f520d6ca229d2f40e070410638c908c5` | `npx skills add nextlevelbuilder/ui-ux-pro-max-skill` |
| **15** | `claude-be-ambitious` | [`github.com/DannyMac180/skills`](https://github.com/DannyMac180/skills/tree/main/be-ambitious) | `5b02caf97c72bdd9fd1a9933032942a8650a836c` | `npx skills add DannyMac180/skills --skill be-ambitious` |

Plus **29 HeroForge V1 Studio Skills** (`heroforge-master-studio`, `hyperframes-motion-graphics`, `idea-generator`, `cinematic-3d`, `3d-asset-creation`, `deslopify`, `visual-qa`, etc.) = **44 Total Synchronized Skills**.

---

## 2. The 6-Stage 2026 AI Design Workflow (`7eCK9ioNpqU`)

### Stage 1 — Research, Architecture & Deeper Prompting (`claude-be-ambitious` + ChatGPT / Hermes)
- Start with `/be-ambitious` (`DannyMac180/skills`) to ask the 4 expert depth questions:
  1. What would a top creative director / design engineer do here that wasn't asked for?
  2. What is the rawest source material (real product UI, physical materials, real photographs)?
  3. Which specialized skills and libraries (`pick-ui-library`) belong in the stack?
  4. What independent browser check proves the result is right?
- Generate or select a high-craft concept from the 20-Idea Autonomous Catalog (`data/ideas-catalog.json`).

### Stage 2 — Real-Product Inspiration, Skyward Hub & Job Walk (`mobbin/redesign-screen` + `deep-creative-research`)
- Consult the **Skyward Design Hub** in the Agent OS (`:4100`) for the world's top 10 design libraries:
  1. **Mobbin**: 300,000+ real iOS, Android, and Web application screens.
  2. **Godly**: Kinetic web aesthetics, typography lockups, and 3D WebGL scenes.
  3. **Refero**: SaaS dashboards, pricing tables, and desktop conversion funnels.
  4. **Kombai**: AI frontend design engineering & Figma Auto Layout translation.
  5. **Page Flows**: Video archives of user journeys.
  6. **Lookup.design**: Micro-component states and edge cases.
  7. **Linear & Stripe Design Systems**: Masterclass in information density, subtle borders, and craft.
  8. **Component Gallery**: Real design tokens across 60+ enterprise systems.
  9. **Bento Grids**: 12-column asymmetric layout spreads and architectural perimeter HUDs.
  10. **Awwwards / Siteinspire**: Award-winning digital experiences.
- Run the **Mobbin `redesign-screen` 6-Point Job Walk**:
  1. **The path leads**: Eye lands on the first step; one primary control finishes it; nothing off the path competes.
  2. **Every decision has its information beside it**, not a scroll or tap away.
  3. **Nothing the job needs is missing.**
  4. **Every label and value is true** (natural human words: `Movement`, `Craft`, `Projects`, `Studio`, `Materials`, `Inquire` — zero developer jargon).
  5. **Every state works** (hover, focus-visible, active press, modal `<dialog>`).
  6. **Platform minimums hold** (`>= 44×44px` tap targets, `>= 16px` body text, WCAG AA contrast).

### Stage 3 — Material Theme Deal & Visual Direction (`Nutlope/hallmark` + `image-generation`)
- Deal 3 material directions via Hallmark (`node .agents/skills/hallmark/scripts/theme.mjs deal`) or lock a bespoke `DESIGN.md` token system.
- Generate high-resolution, text-free photographic plates (`references/`) using the `image-generation` skill (with automatic **Codex CLI** synthesis fallback if external API credits are exhausted).

### Stage 4 — Hero-First Build with the 7 Expensive UI Fixes (`eQ74n4huAcA` + `design-taste-frontend`)
Build the navigation and hero **first**, applying all **7 Fixes That Make AI UI Look Expensive**:
1. **Focal Point**: `>= 70%` of the hero photograph or procedural Three.js/R3F object unobstructed; 1 floating pill nav, 1 quiet label, 1 balanced 2-line headline, 1 short sentence (`<= 40ch`), and **1 single primary CTA button**.
2. **Spacing**: One section per screen (`100dvh`), equal left/right edges, `overflow-x: clip`, `minmax(0, 1fr)` grid tracks.
3. **Typography**: Explicit 2-line balanced headlines (`<br />` + `text-wrap: balance`) so a short word (`"light."`, `"stone."`) is never stranded alone on its own line; `font-variant-numeric: tabular-nums`.
4. **Color**: Strict `:root` CSS tokens; keep the Agent OS workspace accent (`#58A6FF` Mineral Light Blue) strictly inside `:4100` while showcase sites (`:4101+`) use authentic material palettes (`#FCFAF6` warm ivory, `#C5A478` brass, `#141413` volcanic basalt).
5. **Real Content**: Authentic horological/architectural telemetry and interactive 3D/plate switchers; zero invented testimonials or fake metrics.
6. **Details**: Exposed `1px` structural hairlines, concentric border radii, instant `:focus-visible` rings, native `<dialog>` inquiry sheets.
7. **Motion**: Custom `cubic-bezier(0.23, 1, 0.32, 1)` (`emil-design-eng`) and portable `t-*` transitions (`transitions-dev`); animate `transform` and `opacity` only (`never transition: all`); honor `@media (prefers-reduced-motion: reduce)`.

### Stage 5 — Hallmark Sloplint, Impeccable Critique & Multi-Viewport Playwright QA
- Run static and rendered verification:
  ```bash
  node scripts/audit-and-upgrade-skills.mjs
  node scripts/deslopify-audit.mjs
  npm run qa:visual
  node scripts/verify-clean-install.mjs
  ```
- Inspect real Chromium screenshots at Desktop (`1440×900`), Tablet (`768×1024`), and Mobile (`390×844`) and grade the hero in the **OpenDesign Restraint Grader** until every site achieves **`A+` (`98/100`)**.

### Stage 6 — Presentation, 30fps Light-Mode `/Brag` Motion Film & Deployment
- Render the 60-second (`1,800` unique frames @ `30.0 fps`, `dup=0`) Light-Mode Swiss Editorial motion-graphics film (`node scripts/render-brag-video.mjs` -> `brag-output/brag.mp4`).
- Push to GitHub (`clickteig11-byte/heroforge-agent-os`) and deploy to Vercel (`https://heroforge-v1.vercel.app`) under `clickteig11-byte`.
