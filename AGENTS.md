# HeroForge V1 — Autonomous Creative Website Studio (2026 AI Design & Hallmark Charter)

Welcome to **HeroForge V1**, a portable, cross-agent autonomous creative website studio engineered for **Google Antigravity**, **Claude Code**, **OpenAI Codex**, **OpenCode**, and **Hermes**.

## 1. Studio Philosophy & The 2026 AI Design Workflow
Every website, 3D assembly, editorial layout, and motion-graphics video generated inside HeroForge V1 follows our **6-Stage 2026 AI Design Workflow** (see [`WORKFLOW.md`](./WORKFLOW.md)):
1. **Stage 1 — Deeper Prompting & Ideation (`claude-be-ambitious` + `idea-generator`)**: Answer Felix Rieseberg's 4 expert depth questions (`DannyMac180/skills`) before building—making the work **deeper, not bigger**.
2. **Stage 2 — Real-Product Precedent & Job Walk (`redesign-screen` + `deep-creative-research`)**: Walk the user's job path using [`mobbin/skills`](https://github.com/mobbin/skills/tree/main/skills/redesign-screen) and extract structural evidence from real shipped apps, Godly, and Awwwards.
3. **Stage 3 — Material Theme Deal & Text-Free Plate Synthesis (`hallmark` + `image-generation`)**: Deal a material theme from [`Nutlope/hallmark`](https://github.com/Nutlope/hallmark) (`theme.mjs`) or lock a bespoke `DESIGN.md`, and synthesize text-free hero plates (with automatic Codex CLI fallback).
4. **Stage 4 — Hero-First Build with the 7 Expensive UI Fixes (`design-taste-frontend` + `heroforge-master-studio` + `cinematic-3d`)**:
   - **Fix 1 (Focal Point)**: `>= 70%` of the hero image or 3D object unobstructed; max 5 hero elements; **1 single primary CTA button**.
   - **Fix 2 (Spacing)**: One section per screen (`100dvh`), equal left/right edges (`Leonxlnx/taste-skill`), `overflow-x: clip`, `minmax(0, 1fr)` grid tracks.
   - **Fix 3 (Typography)**: Intentional 2-line balanced headlines (`<br />` + `text-wrap: balance`) with **zero orphan words**; natural human nav labels (`Movement`, `Craft`, `Projects`, `Studio`, `Materials`, `Inquire`); `font-variant-numeric: tabular-nums`.
   - **Fix 4 (Color)**: All colors/fonts declared via `:root` tokens (`Nutlope/hallmark` Floor Rule 1). **Mineral Light Blue (`#58A6FF`) belongs strictly to the Agent OS Workspace (`:4100`)**—never leak workspace blue onto showcase websites (`:4101+`).
   - **Fix 5 (Real Content)**: Authentic specifications, real procedural Three.js/R3F mechanisms, and zero invented testimonials/metrics.
   - **Fix 6 (Details)**: Exposed `1px` hairlines, concentric border radii, instant `:focus-visible`, native `<dialog>` modals.
   - **Fix 7 (Motion)**: Custom `cubic-bezier(0.23, 1, 0.32, 1)` (`emil-design-eng`) and portable `t-*` CSS transitions (`Jakubantalik/transitions.dev`); animate `transform`/`opacity` only (`never transition: all`); full `prefers-reduced-motion` support.
5. **Stage 5 — Hallmark Sloplint, Impeccable Critique & Multi-Viewport Playwright QA (`impeccable` + `deslopify` + `visual-qa`)**: Run `deslopify-audit.mjs`, `sloplint.mjs`, and empirical Playwright captures across `1440×900`, `768×1024`, and `390×844`.
6. **Stage 6 — 30fps Light-Mode `/Brag` Motion Film & Deployment (`hyperframes-motion-graphics` + `portable-workflow`)**: Render `brag-output/brag.mp4` (`1,800` unique frames @ `30.0 fps`, `dup=0`), sync all 44 skills, push to GitHub, and deploy to Vercel.

## 2. Installed Skill Adapters (44 Total Verified Skills)
All **44 skills** (**15 verified third-party open-source GitHub repositories** + **29 HeroForge V1 studio skills**) are mirrored in:
- **Google Antigravity**: `.agents/skills/<skill-name>/SKILL.md`
- **Claude Code**: `.claude/skills/<skill-name>/SKILL.md`
- **OpenAI Codex**: `.codex/skills/<skill-name>/SKILL.md`

### Verified Third-Party Real-Repo Skills (15)
1. **`hallmark`** — [`github.com/Nutlope/hallmark`](https://github.com/Nutlope/hallmark) (`7e213cb6feb4ef82733bd66a0600b2e54ca0994c`)
2. **`design-taste-frontend`** — [`github.com/Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) (`f6b76575f949707b4e3c37cd86cb44b0b98643e8`)
3. **`impeccable`** — [`github.com/pbakaus/impeccable`](https://github.com/pbakaus/impeccable) (`f2baa414a87d9acf1e21ccf776bfaec0262ad6df`)
4. **`redesign-screen`** — [`github.com/mobbin/skills`](https://github.com/mobbin/skills/tree/main/skills/redesign-screen) (`79124d92763f6e85107386227a96bbc40479710e`)
5. **`pick-ui-library`** — [`github.com/emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library) (`715c1807e08c497cfd1dc4feb450a2a3300ef2a9`)
6. **`emil-design-eng`** — [`github.com/emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng) (`715c1807e08c497cfd1dc4feb450a2a3300ef2a9`)
7. **`transitions-dev`** — [`github.com/Jakubantalik/transitions.dev`](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) (`20d70c1262bf721c0300c2946cbe1fc7605a555c`)
8. **`web-design-guidelines`** — [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`)
9. **`frontend-design`** — [`github.com/anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (`2c5958ecac7cee2b583967a2c4981d0f4a75c579`)
10. **`playwright-browser-testing`** — [`github.com/anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) (`2c5958ecac7cee2b583967a2c4981d0f4a75c579`)
11. **`react-best-practices`** — [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) (`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`)
12. **`composition-patterns`** — [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns) (`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`)
13. **`react-view-transitions`** — [`github.com/vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions) (`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`)
14. **`ui-ux-pro-max`** — [`github.com/nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (`6ae86f61f520d6ca229d2f40e070410638c908c5`)
15. **`claude-be-ambitious`** — [`github.com/DannyMac180/skills`](https://github.com/DannyMac180/skills/tree/main/be-ambitious) (`5b02caf97c72bdd9fd1a9933032942a8650a836c`)

See `skills-manifest.json` and `WORKFLOW.md` for full provenance, commit hashes, and descriptions.

## 3. Essential Commands
```bash
# 1. Audit & sync all 44 skills across .agents, .claude, and .codex
node scripts/audit-and-upgrade-skills.mjs

# 2. Launch all three Vite servers (4100 Agent OS, 4101 Website A, 4102 Website B)
npm run dev:all

# 3. Run zero-slop static verification
node scripts/deslopify-audit.mjs

# 4. Run real Playwright multi-viewport Visual QA
npm run qa:visual

# 5. Render the 60-second 30fps Light-Mode Motion-Graphics /Brag film
node scripts/render-brag-video.mjs

# 6. Run full clean-install verification suite
npm run test:clean-install
```

## 4. Demo Sites Deployment & GitHub Publishing Policy
- **GitHub Target**: Push to `clickteig11-byte/heroforge-agent-os` under the **`clickteig11-byte`** GitHub account.
- **Vercel CLI Deployment**: Deploy with **Vercel CLI** under the active **`clickteig11-byte`** profile (`https://heroforge-v1.vercel.app`).
