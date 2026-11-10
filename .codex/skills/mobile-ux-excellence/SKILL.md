---
name: mobile-ux-excellence
description: Engineer flagship mobile web experiences using Mobbin-grade mobile UX patterns — thumb-zone bottom action docks, compact glass pill drawers, momentum-safe horizontal scrubbers, 100dvh viewport stability, and 44x44px tactile touch ergonomics.
---

# Mobile UX Excellence — Thumb-Zone Ergonomics & Responsive Craft

## Overview
Desktop-first websites often treat mobile (`390×844`) as a vertical stack of squished desktop columns. This skill applies native-app-grade mobile ergonomics (inspired by Mobbin's top iOS/mobile web flows) so mobile viewports feel purposefully art-directed.

## Triggers
- Designing and refining mobile layouts (`<= 768px` and `390×844`) across Website A, Website B, and the HeroForge Agent OS Dashboard.
- Auditing mobile Playwright screenshots during Visual QA.

## Procedure

### Step 1: Thumb-Zone Bottom Action Dock (`<= 768px`)
- On mobile viewports, primary navigation and conversion triggers must sit in the **natural thumb arc** at the bottom of the screen (`position: fixed; inset-block-end: 0.75rem; inset-inline: 0.75rem`) or in a docked glassmorphic bar with:
  - Quick chapter/section jump pills
  - Primary interactive toggle (e.g., `Explode 3D` on Website A or `Blueprint / Plate` on Website B)
  - Direct `Inquire / Folio` modal trigger
- Every interactive mobile control must enforce `min-height: 44px; min-width: 44px` (`modern-web-guidance` `accessibility`).

### Step 2: Mobile Hero Stage Re-Choreography
- **3D Mobile Framing (Website A)**: Place the interactive 3D centerpiece cleanly in the upper `44%` of the `100dvh` viewport (`order: 1`) with the headline, telemetry badge, and dual thumb-zone CTAs docked below (`order: 2`), matching `reference-mobile.png`.
- **Editorial Mobile Framing (Website B)**: Stack the monograph coordinate header, framed architectural plate, and serif headline with reduced mobile padding (`1.25rem`) and zero horizontal overflow.

### Step 3: Momentum-Safe Scrollers & Tables
- Use `-webkit-overflow-scrolling: touch` and `scroll-snap-type: x mandatory` for mobile pin-boards or specification strips so users can swipe cards naturally with one thumb.

## Expected Outputs
- Mobile thumb-zone navigation docks, responsive 3D/editorial hero ordering, and swipe-friendly mobile layouts.

## Verification Criteria
- [ ] Zero horizontal overflow (`scrollWidth <= innerWidth`) at `390×844`.
- [ ] All mobile buttons meet the `44×44px` touch target minimum.
- [ ] Mobile thumb-zone dock is visible and operable on `390×844` viewports.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
