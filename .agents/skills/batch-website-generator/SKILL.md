---
name: batch-website-generator
description: Orchestrate multi-site autonomous generation runs, manage local dev/preview ports, coordinate shared catalogs and manifests, and allow users to launch new concept runs from the HeroForge Agent OS Dashboard.
---

# Batch Website Generator — Multi-Site Studio Orchestration

## Overview
Coordinates the end-to-end execution of multiple autonomous website builds (`Website A`, `Website B`, and future runs queued from the HeroForge Agent OS Dashboard) while keeping each demonstration website cleanly separated from the reusable comparison gallery.

## Triggers
- Running the full HeroForge V1 pipeline across multiple websites.
- Clicking "Launch Generation Run" on any of the 20 concepts inside the HeroForge Agent OS Dashboard.

## Procedure

### Step 1: Clean Multi-App Workspace Topology
Maintain strict separation between the reusable Agent OS Gallery/Dashboard and the built websites:
- `apps/gallery/` (Port `4100`): **HeroForge V1 Agent OS Dashboard & Visual Comparison Gallery** (Bold & Slate Stone architectural theme).
- `apps/website-a-3d/` (Port `4101`): **Website A — Cinematic 3D Experience** (Standalone React + Vite + TypeScript + R3F + Drei + GSAP app).
- `apps/website-b-editorial/` (Port `4102`): **Website B — Premium Non-3D Experience** (Standalone React + Vite + TypeScript + Motion + GSAP app).
- `templates/vite-react-ts-starter/`: Reusable clean starter template for spawning `website-c`, `website-d`, etc.

### Step 2: Autonomous Run Queue & CLI Generator
Provide both:
1. **Interactive Dashboard Run Launcher**: In the Agent OS Gallery (`http://localhost:4100`), allow users to select any of the 20 website concepts, inspect its creative brief, customize generation parameters (3D WebGL vs. Editorial Non-3D, color temperature, motion intensity), and trigger/export a structured build job (`heroforge-run-<slug>.json` + CLI command).
2. **CLI Batch Runner (`scripts/generate-site.mjs`)**: Scaffolds a new Vite + React + TypeScript site from `templates/vite-react-ts-starter/` pre-populated with the chosen idea's design tokens, brief, and component architecture.

## Expected Outputs
- Independent, self-contained Vite apps in `apps/gallery`, `apps/website-a-3d`, and `apps/website-b-editorial`.
- Root orchestration scripts (`npm run dev:all`, `npm run build:all`, `npm run qa:all`, `npm run generate:site`).

## Verification Criteria
- [ ] All three Vite applications build (`npm run build:all`) and serve concurrently on their designated ports (`4100`, `4101`, `4102`).
- [ ] Users can select any of the 20 concepts in the Gallery and launch/configure a generation run.

## Concrete Multi-Site Port & CLI Map
- **Port 4100 (`apps/gallery`)**: HeroForge V1 Agent OS Slate Stone Local Dashboard & Comparison Gallery.
- **Port 4101 (`apps/website-a-3d`)**: Website A — `AETHERION // CALIBRE ZERO` (Cinematic 3D WebGL).
- **Port 4102 (`apps/website-b-editorial`)**: Website B — `KUROKAWA & VANE` (Premium Non-3D Editorial).
- **CLI Generator**: `node scripts/generate-site.mjs --idea idea-05 --port 4103`


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
