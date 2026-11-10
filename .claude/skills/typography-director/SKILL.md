---
name: typography-director
description: Design expressive, high-contrast, accessible typography systems pairing architectural grotesks, editorial serifs, and technical monospace fonts with fluid clamp() scales.
---

# Typography Director — Expressive Type Systems & Hierarchy

## Overview
Typography carries 80% of a website's design authority. This skill defines font pairings, fluid sizing scales, optical tracking, line lengths, and numerical alignment across HeroForge projects.

## Triggers
- Defining the typography tokens for a new website or dashboard.
- Auditing text legibility, heading hierarchy, or responsive scaling during Visual QA.

## Procedure

### Step 1: Curated Three-Voice Font Pairing System
Every HeroForge website must define three distinct typographic voices:
1. **Display Voice (`--font-display`)**: High-character headline face for `<h1>`–`<h3>` and monumental callouts.
   - *Futuristic / 3D / Industrial*: `Syne`, `Space Grotesk`, or `Outfit` (`font-weight: 600–800`, tight tracking `-0.03em` to `-0.045em`).
   - *Luxury / Editorial / Architecture*: `Instrument Serif`, `Cormorant Garamond`, or `Playfair Display` (`font-weight: 400–600`, italic accents, tracking `-0.02em`).
2. **Editorial Body Voice (`--font-sans`)**: Clean, highly legible neo-grotesk or humanist sans for long-form copy and UI controls (`Plus Jakarta Sans`, `DM Sans`, or `Inter` with optical sizing).
3. **Telemetry & Index Voice (`--font-mono`)**: Precision monospace (`JetBrains Mono` or `IBM Plex Mono`) with `font-variant-numeric: tabular-nums` for coordinates, timestamps, serial numbers, and rubric scores.

### Step 2: Fluid `clamp()` Type Scale (Mandatory)
Following `modern-web-guidance` (`responsive-design`), never use raw `vw` without `clamp()`. Combine `rem` and `vw` so OS text scaling is respected:
```css
:root {
  --text-hero: clamp(2.75rem, 1.5rem + 5.2vw, 6.25rem);
  --text-h2: clamp(2rem, 1.2rem + 3vw, 3.75rem);
  --text-h3: clamp(1.35rem, 1.05rem + 1.2vw, 2rem);
  --text-body-lg: clamp(1.05rem, 0.95rem + 0.4vw, 1.25rem);
  --text-body: 1rem;
  --text-mono-xs: 0.75rem;
}
```

### Step 3: Semantic & Optical Discipline
- Enforce strict sequential heading hierarchy (`<h1>` -> `<h2>` -> `<h3>`, never skipping levels or using fake `<div class="h2">` headings, per `modern-web-guidance` `accessibility`).
- Constrain body measure to `55ch–70ch` (`max-width: 65ch`) with `line-height: 1.65`.
- Apply `text-wrap: balance` on headlines and `text-wrap: pretty` on body paragraphs.

## Expected Outputs
- Preloaded Google Fonts / Woff2 declarations in `index.html` with `crossorigin` (`modern-web-guidance` `performance` rule).
- Complete typographic CSS custom properties and utility classes in `src/index.css`.

## Verification Criteria
- [ ] Zero skipped heading levels (`<h1>` through `<h4>` verified in DOM).
- [ ] All numerical readouts, counters, and tables use `font-variant-numeric: tabular-nums`.
- [ ] No horizontal text overflow at `390px` mobile width.

## Concrete Three-Voice CSS Implementation
```css
.display-headline {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 1.4rem + 4.6vw, 5.6rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.telemetry-readout {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
}
```

## Deslopify & Quality Guardrails
- Enforce a single `<h1>` per page and strict sequential heading levels (`<h1>` -> `<h2>` -> `<h3>`).

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
