---
name: hero-design
description: Architect high-impact, unforgettable hero sections with clear focal hierarchy, atmospheric depth, editorial typography lockups, and immediate interactive feedback.
---

# Hero Design — Flagship Above-the-Fold Architecture

## Overview
The hero viewport (`100dvh`) establishes the entire emotional and technical credibility of a website within 1.5 seconds. This skill governs spatial framing, focal layering, HUD/editorial overlays, and above-the-fold performance.

## Triggers
- Designing or refining the hero section of Website A, Website B, or the HeroForge Agent OS Dashboard.
- Fixing a cluttered, low-contrast, or generic hero layout during Visual QA.

## Procedure

### Step 1: Choose an Intentional Hero Archetype
Never default to a centered paragraph over a generic gradient. Select one of four proven high-craft archetypes:
1. **Interactive 3D Stage + Architectural HUD** (Website A): Full-bleed WebGL canvas (`position: fixed` or pinned stage) framed by a perimeter telemetry grid, bottom-left monumental display headline, and top-right live chapter/specification readout.
2. **Asymmetric Editorial Split Plate** (Website B): Precision 12-column architectural grid (`7:5` or `8:4` ratio) combining oversized display serif/grotesk typography, numbered index markers (`01 // ARCHIVE`), and a high-resolution framed visual plate with interactive loupe or lens inspection.
3. **Monolithic Slate Command Deck** (HeroForge Agent OS): Exposed `1px` slate stone structural borders, live pipeline status telemetry, active build cards, and instant view-switching controls.
4. **Kinetic Typographic Mask Portal**: Giant display letterforms acting as a window or framing aperture around an evolving visual centerpiece.

### Step 2: Enforce the Three-Layer Depth Law
1. **Background Layer (Canvas & Atmosphere)**: Deep slate, obsidian, or warm stone surface with subtle radial lighting and SVG film grain (`pointer-events: none`).
2. **Midground Layer (Primary Hero Artifact)**: The 3D WebGL sculpture or high-priority `<picture>` / `<img>` with `fetchpriority="high"` and `loading="eager"` (`modern-web-guidance` `performance` rule).
3. **Foreground Layer (Typographic & Interactive Lockup)**: Crisp `<h1>` headline (only one `<h1>` per page), concise value thesis (`<= 65ch`), primary/secondary CTAs, and scroll progress affordance.

### Step 3: Readability & Safe-Zone Guarantee
- Maintain a minimum `4.5:1` contrast ratio between hero copy and any underlying 3D/image elements by using subtle radial backdrop gradients or glassmorphic surface plates (`backdrop-filter: blur(12px)`).
- Use `min-height: 100dvh` (`modern-web-guidance` `responsive-design` rule) so mobile browser toolbars never clip bottom HUD elements.

## Expected Outputs
- Complete `<Hero />` React component with responsive desktop, tablet, and mobile framing.

## Verification Criteria
- [ ] Single semantic `<h1>` present and immediately legible across `1440×900`, `768×1024`, and `390×844`.
- [ ] Primary CTA and navigation are keyboard focusable and operable above the fold.
- [ ] Hero image or 3D canvas initializes with zero Cumulative Layout Shift (`CLS = 0`).

## Concrete Hero Safe-Zone & LCP Pattern
```tsx
<section className="hero-section" style={{ minHeight: '100dvh' }}>
  <img
    src="/references/plate-reykjavik-basalt.png"
    alt="Reykjanes Cantilevered Basalt Sanctuary"
    width={760}
    height={920}
    fetchPriority="high"
    loading="eager"
  />
</section>
```

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Never build a centered SaaS hero with a generic pill badge, two centered buttons, and a flat screenshot below.
- **Mobile UX Hook**: Use `100dvh` so mobile address bars never clip bottom HUD progress bars or thumb-zone CTAs.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
