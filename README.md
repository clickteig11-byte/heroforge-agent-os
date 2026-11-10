# HeroForge V1 — Autonomous Creative Website Studio

HeroForge V1 is a complete, portable, cross-agent autonomous website studio designed for **Google Antigravity**, **Claude Code**, and **OpenAI Codex**. It combines **36 specialized creative & engineering skills**, a **20-concept quantitative ideation catalog**, **multimodal visual reference generation**, **app-free procedural Three.js / React Three Fiber 3D engineering**, **sunlit Swiss industrial & architectural aesthetics**, and **empirical Playwright multi-viewport Visual QA**.

---

## Key Capabilities & Architectural Highlights

### 1. Sunlit, Tactile, Human-Crafted Materiality (`deslopify` + `be-ambitious`)
- **Zero AI Slop**: Strictly bans generic dark-mode sci-fi clichés, neon cyan/purple gradients (`#6366f1`, `#8b5cf6`, `#a855f7`), centered SaaS hero blobs, and hollow marketing buzzwords.
- **Tactile Daylight Palettes**: Grounded in real physical substances—Warm Swiss Limestone (`#F4F2ED`), Unfilled Roman Travertine (`#EBE7DF`), Deep Carbon Ink (`#161615`), Brushed Anodized Aluminum (`#D6D3CD`), and Braun / Dieter Rams Industrial Vermilion (`#D84315`).
- **Three-Voice Fluid Typography**: Pairs monumental serif/grotesk headlines (`Cormorant Garamond` / `Syne`) with comfortable humanist prose (`Plus Jakarta Sans`) and tabular numeric metrology (`JetBrains Mono` / `IBM Plex Mono` with `font-variant-numeric: tabular-nums`).

### 2. App-Free Procedural 3D Pipeline (`3d-asset-creation`)
- **Zero External Desktop Apps Required**: Standalone desktop applications (**Blender**, **Spline**, **Cinema4D**) are **NOT required**.
- Every 3D mechanism, multi-part horological assembly, custom procedural `CanvasTexture`, studio `Lightformer` rig, and damped camera spline is authored **100% natively in TypeScript** using `three`, `@react-three/fiber`, and `@react-three/drei`.

### 3. Cross-Agent Skill Portability (36 Installed Skills)
All 36 skills (9 verified third-party skills + 27 original HeroForge V1 skills) are synchronized across three native agent harnesses:
- **Google Antigravity**: `.agents/skills/<skill-name>/SKILL.md`
- **Claude Code**: `.claude/skills/<skill-name>/SKILL.md` + `CLAUDE.md`
- **OpenAI Codex**: `.codex/skills/<skill-name>/SKILL.md` + `AGENTS.md`

---

## Workspace Applications & Port Allocation

| Application | Path | Dev Port | Description |
| :--- | :--- | :--- | :--- |
| **HeroForge Studio Gallery** | `apps/gallery` | `http://localhost:4100` | Interactive Studio Command Center: 20-Concept Explorer, Reference vs. Live Build Comparator, 36-Skill Registry, and Visual QA Telemetry |
| **Website A (3D Flagship)** | `apps/website-a-3d` | `http://localhost:4101` | **AETHERION · CALIBRE ZERO** — Sunlit Swiss Horological Atelier & Interactive Triaxial Tourbillon (React Three Fiber + Drei + GSAP) |
| **Website B (Editorial Flagship)** | `apps/website-b-editorial` | `http://localhost:4102` | **KUROKAWA & VANE** — Swiss-Japanese Architectural Monograph, Orthographic Blueprint Switcher & 500-Year Material Patina Lab |
| **Starter Template** | `templates/vite-react-ts-starter` | `http://localhost:4103` | Reusable sunlit limestone Vite + React + TypeScript starter for scaffolding any of the 20 catalog concepts |

---

## Quick Start & Clean Installation

### 1. One-Command Setup
```bash
chmod +x scripts/install.sh
./scripts/install.sh
```

### 2. Start All Three Studio Servers
```bash
npm run dev:all
```
- **Studio Gallery**: `http://localhost:4100`
- **Website A (3D Horology)**: `http://localhost:4101`
- **Website B (Architectural Monograph)**: `http://localhost:4102`

### 3. Run Automated Verification & Playwright Visual QA
```bash
# Run Deslopify static zero-slop audit
node scripts/deslopify-audit.mjs

# Run empirical Playwright multi-viewport Visual QA (1440x900, 768x1024, 390x844)
npm run qa:visual

# Run full clean-install verification suite
npm run test:clean-install
```

### 4. Generate a New Website from the 20-Idea Catalog
```bash
# List all 20 ranked concepts
npm run generate:site -- --list

# Scaffold a new Vite + React + TS project for any concept
npm run generate:site -- --idea idea-05 --port 4103
```

### 5. Offline / Manual Reference Image Import
If you are running without an external image-generation API key (`IMAGE_PROVIDER=manual`), all 13 reference plates are already pre-bundled in `references/website-a/` and `references/website-b/`. You can also import custom reference images at any time:
```bash
npm run import:references -- --verify
npm run import:references -- --site website-a --desktop ./my-desktop-ref.png --mobile ./my-mobile-ref.png
```

### 6. Publishing & Deploying Demo Sites
For all generated demo sites and concept prototypes:
- **GitHub**: Push to a new repository in the **`clickteig11-byte`** account (`gh repo create clickteig11-byte/<repo-name> --public --source=. --remote=origin --push`).
- **Vercel**: Deploy with the Vercel CLI under the **`clickteig11-byte`** profile (`vercel-key switch clickteig11-byte` -> `vercel --prod`).

