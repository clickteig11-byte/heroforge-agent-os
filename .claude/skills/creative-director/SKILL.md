---
name: creative-director
description: Develop cohesive, non-generic art-direction briefs, color systems, surface materiality, and brand narratives for flagship websites. Enforces strict anti-slop rules and tactile authenticity.
---

# Creative Director — Art Direction & Brand Systems

## Overview
Translates a selected website concept into a rigorous Art Direction Brief (`ART_DIRECTION.md` and `design-tokens.json`) before any reference image is generated or component code is written.

## Triggers
- After `idea-generator` selects Website A and Website B (or when a user selects a new concept from the HeroForge Dashboard).
- When auditing a site's visual cohesion or upgrading a generic theme.

## Procedure

### Step 1: Define the Material & Atmospheric Thesis
Every great digital experience is anchored in physical materiality:
- **Slate & Monolithic Stone** (for the HeroForge Agent OS Dashboard): Cleaved dark slate (`#0D1014`, `#141920`, `#1C232D`), warm titanium hairline borders (`rgba(226, 232, 240, 0.1)`), forge ember accents (`#F97316` / `#EA580C`), and mineral chalk typography (`#F1F5F9`).
- **Website A (Cinematic 3D)**: Define the exact index of refraction, metallic anisotropy, emissive telemetry accents, and atmospheric fog density.
- **Website B (Premium Non-3D)**: Define paper/stone/linen surface warmth, ink density, editorial rule lines (`1px solid`), and photographic color grading.

### Step 2: Specify Four-Tier Design Tokens
Following `modern-web-guidance` CSS token architecture, define:
1. **Tier 1 (Literal Tokens)**: Raw hex/OKLCH values, font families, modular spacing steps.
2. **Tier 2 (Semantic Tokens)**: `--bg-canvas`, `--bg-elevated`, `--bg-glass`, `--text-primary`, `--text-secondary`, `--text-muted`, `--accent-primary`, `--accent-secondary`, `--border-hairline`.
3. **Tier 3 (Layout & Grid Tokens)**: `--container-max`, `--grid-gutter`, `--section-pad-y`, `--radius-card`.
4. **Tier 4 (Component & Motion Tokens)**: `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1)`.

### Step 3: Anti-Slop Creative Prohibitions
- **NEVER** use default unstyled `Inter` or `Roboto` for hero display headlines. Pair expressive display serifs (`Instrument Serif`, `Cormorant Garamond`, `Playfair Display`) or architectural display grotesks (`Syne`, `Space Grotesk`, `Clash Display`) with technical monospace (`JetBrains Mono`, `IBM Plex Mono`) for telemetry and indices.
- **NEVER** use neon purple-to-cyan SaaS gradients.
- **NEVER** build three identical rounded cards in a row with generic Lucide icons as the primary content of a section. Every section must have a distinct editorial layout (split sticky narrative, blueprint specification matrix, interactive comparator, full-bleed architectural plate, or horizontal sequence).

## Expected Outputs
- `briefs/<site-slug>-art-direction.md`: Complete creative brief including brand manifesto, color palette, typography hierarchy, section-by-section narrative arc, and image generation prompts.
- `briefs/<site-slug>-tokens.json`: Machine-readable design tokens.

## Verification Criteria
- [ ] Palette meets WCAG AA contrast ratios (`>= 4.5:1` for body copy, `>= 3.0:1` for large display type).
- [ ] Every section has a distinct editorial purpose and bespoke layout structure.
- [ ] Three distinct hero mockup directions are written for the `image-generation` phase.

## Concrete 4-Tier CSS Token Architecture
```css
@layer base, theme, components, utilities;

@layer theme {
  :root {
    /* Tier 1: Physical Material Literals */
    --stone-slate-950: #0b0e13;
    --stone-slate-900: #121720;
    --titanium-300: #cbd5e1;
    --ember-500: #f97316;

    /* Tier 2: Semantic Tokens */
    --bg-canvas: var(--stone-slate-950);
    --bg-surface: var(--stone-slate-900);
    --text-primary: #f8fafc;
    --accent-primary: var(--ember-500);
    --border-hairline: rgba(203, 213, 225, 0.14);
  }
}
```

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Strictly ban `#6366f1` (Indigo), `#8b5cf6` (Violet), and `#a855f7` (Purple) gradients.
- **Pinterest Curation Hook**: Extract 4-color chromatic swatch bars directly from reference photography and surface them in the UI.
- **Mobile UX Hook**: Enforce `min-height: 44px` touch targets and docked bottom thumb-zone action bars on viewports `<= 768px`.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
