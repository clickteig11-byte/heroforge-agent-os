---
name: image-to-react
description: Translate selected visual reference mockups into pixel-accurate, responsive React + Vite + TypeScript components with extracted design tokens, semantic HTML landmarks, and fluid CSS architecture.
---

# Image-to-React — Visual Reference to Production Code

## Overview
Bridges the gap between a selected visual reference image (`reference-desktop.png` & `reference-mobile.png`) and living React + TypeScript code. Ensures the built website faithfully captures the atmosphere, spatial proportions, typography, lighting, and color palette of the winning mockup while remaining fully responsive and interactive.

## Triggers
- Phase 5 & Phase 6 of HeroForge V1 after visual references are selected.
- During Phase 8 Visual QA refinement passes when fixing discrepancies between browser screenshots and reference images.

## Procedure

### Step 1: Optical & Structural Deconstruction
Inspect the selected desktop and mobile reference images using `read_file` (multimodal vision inspection) and extract:
1. **Chromatic Profile**: Exact background canvas hex/OKLCH values, surface card elevation shades, primary/secondary text contrast, and accent highlights.
2. **Spatial Proportions**: Viewport grid columns, header height, hero focal coordinates, negative space ratios, and border/divider geometry.
3. **Typographic Lockups**: Headline scale, serif vs. grotesk contrast, monospace metadata badges, line heights, and alignment.
4. **Lighting & Atmosphere**: Radial spotlights, backdrop blur intensity, subtle vignette/grain, and 3D camera framing.

### Step 2: Token-Driven CSS Architecture
- Define all extracted parameters in `:root` CSS custom properties inside `src/index.css` using `@layer base, theme, components, utilities;`.
- Use fluid `clamp(min, val, max)` for typography and spacing (`modern-web-guidance` `responsive-design` rule) and dynamic viewport units (`100dvh`) for hero stages.

### Step 3: Component Decomposition
Translate the reference into modular, typed React components:
- `<Header />`: Semantic `<header>` + `<nav aria-label="Primary">` with live section anchors, telemetry badge, and action trigger.
- `<HeroStage />`: Matches the selected hero reference composition (WebGL `<Canvas>` + HUD overlay for Website A; Asymmetric Editorial Plate + Kinetic Typography for Website B).
- `<NarrativeSections />`: Multi-chapter content sections expanding the product story with interactive controls.
- `<SpecificationMatrix />`: Semantic `<table>` with `<caption>` and `<th scope="col">` (`modern-web-guidance` `accessibility` rule) for technical tolerances.
- `<InteractiveDrawerOrDialog />`: Native `<dialog>` modal with `showModal()` and `overscroll-behavior: contain` (`modern-web-guidance` `dialog` rule) for reservations, configurators, or dossier inspection.

## Expected Outputs
- Production React + Vite + TypeScript source files matching the selected reference mockup.
- Extracted token specification (`tokens.json`).

## Verification Criteria
- [ ] Multimodal visual comparison between the rendered Playwright screenshot and the selected reference image confirms strong alignment in color, layout, typography, and focal composition.
- [ ] All interactive elements are real DOM controls (no flattened static images of UI text).

## Concrete Multimodal Token Extraction Workflow
1. Inspect `reference-desktop.png` and `reference-mobile.png` via multimodal vision.
2. Map exact column proportions (e.g., `6:6` HUD split for Website A; `7:5` exposed-hairline monograph split for Website B).
3. Implement responsive breakpoint reordering so mobile viewports match `reference-mobile.png` (e.g., placing the 3D tourbillon in the upper half of the mobile viewport via `order: 1` and typography below via `order: 2`).

## Deslopify & Quality Guardrails
- Every button, tab, and chapter selector visible in the reference image must be implemented as a working interactive React control—never a static image slice.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
