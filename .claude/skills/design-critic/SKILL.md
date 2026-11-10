---
name: design-critic
description: Ruthlessly audit website implementations against generic "AI slop" anti-patterns, weak typography, flat lighting, and repetitive layouts, prescribing concrete code-level upgrades.
---

# Design Critic — Anti-Slop Aesthetic & Structural Auditor

## Overview
Acts as an uncompromising executive creative director during refinement passes. Detects and eliminates generic AI landing page patterns before final delivery.

## Triggers
- Between Pass 1 and Pass 2 of Phase 8 Visual QA.
- Whenever reviewing component markup, color tokens, or 3D scene composition.

## Procedure

### Step 1: The 12-Point Anti-Slop Detection Checklist
Flag and immediately refactor any occurrence of:
1. **Default Font Syndrome**: Using unstyled system sans or default `Inter` for primary display headlines.
2. **SaaS Purple/Indigo Gradients**: Generic `linear-gradient(to right, #6366f1, #a855f7)` backgrounds or text fills.
3. **Monotonous 3-Card Rows**: Consecutive sections consisting of 3 identical rounded boxes with a small icon, bold title, and 2-line blurb.
4. **Placeholder / Fluff Copywriting**: Vague buzzwords ("Revolutionizing the future of X", "Seamless synergy") instead of concrete technical specifications, serial numbers, and domain telemetry.
5. **Unframed Raw Images**: Dropping square stock-looking images onto a page without aspect-ratio framing, subtle inner hairline borders, caption indices, or lighting integration.
6. **Plastic 3D Primitives**: Using default `MeshStandardMaterial` with flat `ambientLight` instead of multi-part articulated geometry, `MeshPhysicalMaterial`, and studio `<Lightformer>` reflections.
7. **Dead Controls**: Buttons, filter pills, or nav links that do nothing when clicked.
8. **Low Contrast Text Over Busy Backgrounds**: Text overlapping bright 3D geometry or photography without atmospheric scrims or glass backing plates.
9. **Missing Hairline Grid Architecture**: Floating elements with arbitrary margins instead of crisp alignment to an exposed or structural column grid.
10. **Abrupt Unchoreographed Scroll**: Sections popping in jarringly or competing animation controllers jittering during scroll.
11. **Broken Mobile Density**: Huge desktop padding (`padding: 80px`) left unchanged on `390px` mobile screens.
12. **Missing Focus / Reduced-Motion Polish**: Missing `:focus-visible` outlines or unguarded heavy motion.

### Step 2: Prescriptive Remediation Log
For every issue detected in Pass 1, log:
- `defectId`, `location` (file + component), `severity`, `referenceMismatchAnalysis`, and the exact `codeFixApplied` in Pass 2.

## Expected Outputs
- Documented critique and pass-over-pass delta in `data/qa-report.json` and displayed live in the HeroForge Comparison Gallery.

## Verification Criteria
- [ ] Zero items from the 12-Point Anti-Slop Checklist remain in final builds.
- [ ] Every critique item from Pass 1 has a verified code fix and Pass 2 screenshot proof.

## Concrete Automated Deslopify + Critic Gate
Every build must pass both:
1. `node scripts/deslopify-audit.mjs` (0 banned buzzwords, 0 purple gradients, 0 dead links, verified `tabular-nums`, `<dialog>`, and `prefers-reduced-motion`).
2. Multimodal screenshot comparison against `reference-desktop.png` and `reference-mobile.png`.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
