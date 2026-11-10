---
name: visual-qa
description: Execute automated Playwright browser testing across Desktop, Tablet, and Mobile viewports, capture full and viewport screenshots, verify WebGL rendering and scroll scrubbing, and perform multimodal comparison against generated reference images.
---

# Visual QA — Playwright Verification & Reference Comparison Loop

## Overview
Provides hard, empirical browser verification. Launches real Chromium instances via Playwright, tests interactive controls and scroll behavior, captures screenshots across Desktop (`1440×900`), Tablet (`768×1024`), and Mobile (`390×844`), and compares them directly against the selected AI reference images (`reference-desktop.png` and `reference-mobile.png`).

## Triggers
- Phase 8 of HeroForge V1 after Website A, Website B, and the Gallery are built.
- After any refinement pass to verify defects are resolved.

## Procedure

### Step 1: Real Browser Automation (Playwright)
Run `scripts/run-visual-qa.mjs` against the live local Vite servers (`Website A`, `Website B`, and `HeroForge Gallery`):
1. **Zero Console/Page Error Gate**: Attach `page.on('console')` and `page.on('pageerror')` listeners. Any uncaught runtime error fails the pass immediately.
2. **Multi-Viewport Capture**:
   - Desktop: `1440 × 900` (`desktop-hero.png`, `desktop-scrolled.png`, `desktop-full.png`)
   - Tablet: `768 × 1024` (`tablet-hero.png`, `tablet-full.png`)
   - Mobile: `390 × 844` (`mobile-hero.png`, `mobile-full.png`)
3. **WebGL & Scroll Scrubbing Verification (Website A)**:
   - Verify `<canvas>` exists, has non-zero dimensions, and has an active WebGL context (or verified graceful fallback if headless GPU is unavailable).
   - Scroll to `35%`, `70%`, and `100%` of document height, verify chapter telemetry updates deterministically, and scroll back to `0%` to verify reversible state.
4. **Interactive Control Verification**:
   - Click interactive tabs, exploded-view toggles, and modal triggers (`<dialog>`), capturing proof screenshots.

### Step 2: Multimodal Reference Comparison & 10-Axis Evaluation
Inspect the captured Playwright screenshots alongside the selected reference images using `read_file` and score each implementation across all 10 required dimensions:
1. Typography
2. Composition
3. Color
4. Spacing
5. Image Placement
6. Responsive Behavior
7. Animation Quality
8. Visual Originality
9. Accessibility
10. Performance

### Step 3: Multi-Pass Refinement Loop
- **Pass 1 (Initial Capture & Critique)**: Identify any visual discrepancies against the reference image, contrast issues, spacing imbalances, or responsive collisions.
- **Pass 2+ (Targeted Engineering Refinements)**: Edit component code, lighting, camera framing, or CSS tokens, then re-run Playwright capture and re-verify until every site achieves `>= 92/100` composite QA score.

## Expected Outputs
- Captured screenshots in `public/qa/website-a/`, `public/qa/website-b/`, and `public/qa/gallery/`.
- Structured QA telemetry in `data/qa-report.json` and `docs/VISUAL_QA_REPORT.md`.

## Verification Criteria
- [ ] Desktop, Tablet, and Mobile screenshots exist on disk for Website A, Website B, and the Gallery.
- [ ] At least two documented refinement passes (`Pass 1` -> `Pass 2 Final`) are executed and verified with real browser screenshots.
- [ ] Zero console errors or horizontal overflow across all tested viewports.

## Concrete Playwright Multi-Viewport Verification Command
```bash
node scripts/run-visual-qa.mjs
```
Captures Desktop (`1440x900`), Tablet (`768x1024`), and Mobile (`390x844`) screenshots for Website A, Website B, and the HeroForge Gallery, verifies zero console errors, tests scroll scrubbing and modal dialogs, and writes `data/qa-report.json`.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
