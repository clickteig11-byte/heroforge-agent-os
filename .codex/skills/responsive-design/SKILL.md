---
name: responsive-design
description: Adapt complex 3D and editorial layouts seamlessly across Desktop (1440px+), Tablet (768px), and Mobile (390px) viewports using container queries, dynamic viewport units, and fluid typography.
---

# Responsive Design — Multi-Viewport Fluid Architecture

## Overview
Ensures Website A, Website B, and the HeroForge Slate Stone Agent OS Dashboard look intentionally art-directed at Desktop (`1440×900`), Tablet (`768×1024`), and Mobile (`390×844`) viewports—never merely squished or overflowing.

## Triggers
- Implementing layout grids, navigation headers, and 3D camera FOV adjustments across breakpoints.
- Fixing horizontal scrollbars, cramped cards, or overlapping text flagged in Playwright tablet/mobile screenshots.

## Procedure

### Step 1: Modern Viewport & Container Mechanics
Following `modern-web-guidance` (`responsive-design`):
1. **Dynamic Viewport Units**: Use `100dvh` instead of `100vh` for full-screen hero stages so mobile browser address bars never clip bottom controls.
2. **Container Queries (`@container`)**: Declare `container-type: inline-size` on bento cells, gallery cards, and specification modules so components adapt to their actual available column width rather than just window width.
3. **Media Space Reservation**: Always provide explicit `width`, `height`, and `aspect-ratio` on `<img>` and `<canvas>` wrappers to prevent Cumulative Layout Shift (`CLS`).

### Step 2: Responsive 3D & Editorial Adaptation
- **3D Camera Adaptation (Website A)**: In React Three Fiber, inspect `viewport.width` or `size.width`:
  - When `size.width < 768`, pull the camera `z` distance back by `1.25x`–`1.45x` and center the 3D artifact vertically in the upper `52%` of the viewport so bottom-docked mobile typography never collides with the primary mesh focal point.
- **Navigation Adaptation**: On mobile (`< 768px`), collapse horizontal nav links into an accessible mobile command drawer or compact pill switcher with `44×44px` minimum tap targets.
- **Responsive Tables**: Wrap semantic `<table>` specification matrices in an accessible horizontal scroll container (`overflow-x: auto; -webkit-overflow-scrolling: touch; tabindex="0"`) with `<th scope="col">` and `<th scope="row">` (`modern-web-guidance` `accessibility`).

## Expected Outputs
- Fluid CSS grid, `@container` rules, and responsive 3D camera scaling across Desktop, Tablet, and Mobile.

## Verification Criteria
- [ ] `document.documentElement.scrollWidth <= window.innerWidth` verified via Playwright at `1440px`, `768px`, and `390px`.
- [ ] Mobile navigation and interactive triggers are operable without horizontal panning.

## Concrete Breakpoint Verification Matrix
- **Desktop (`1440x900`)**: Full 12-column asymmetric grids and perimeter HUDs.
- **Tablet (`768x1024`)**: Adapted 2-column or stacked stage with preserved hairline borders.
- **Mobile (`390x844`)**: Zero horizontal overflow (`scrollWidth <= innerWidth`), `100dvh` hero stage, and floating thumb-zone dock with `>= 44x44px` tap targets.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
