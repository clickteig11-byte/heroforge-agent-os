---
name: layout-composition
description: Architect asymmetric, Swiss-inspired, and editorial spatial layouts using CSS Grid, container queries, exposed structural hairlines, and purposeful negative space.
---

# Layout Composition — Spatial Architecture & Grid Systems

## Overview
Eliminates repetitive, cookie-cutter SaaS card grids in favor of bespoke architectural compositions inspired by Swiss editorial design, museum exhibition catalogs, and industrial telemetry interfaces.

## Triggers
- Structuring page sections for Website A, Website B, or the HeroForge Agent OS Dashboard.
- Refactoring repetitive card rows flagged by `design-critic`.

## Procedure

### Step 1: Section Rhythm Alternation Rule
No two consecutive sections on a page may share the same column template. Alternate deliberately across:
1. **Full-Bleed Cinematic Stage (`100dvw × 100dvh`)**: Pinned canvas or atmospheric visual plate with perimeter HUD anchors.
2. **Asymmetric Sticky Narrative (`5:7` or `4:8` Grid)**: Sticky left manifesto column paired with a scrolling right sequence of asymmetric architectural plates, interactive diagrams, and material callouts.
3. **Exposed Blueprint Matrix (`1px` Hairline Grid)**: Architectural grid where cells share `1px solid var(--border-hairline)` borders, mixing `2-column` wide feature panels with `1-column` telemetry cells.
4. **Interactive Comparator / Spec Inspector**: Split-screen or tabbed technical deep-dive with live state switching, exploded metrics, and semantic `<table>` specification sheets.
5. **Monumental Editorial Finale**: High-contrast closing statement with direct interactive reservation/action modal trigger.

### Step 2: Modern CSS Layout Mechanics
- Use CSS Grid (`grid-template-columns: repeat(12, minmax(0, 1fr))`) for macro page structure and `@container` queries (`container-type: inline-size`) for modular cards (`modern-web-guidance` `responsive-design`).
- Use logical properties (`margin-inline`, `padding-block`, `inset-inline-start`) where appropriate (`modern-web-guidance` `css`).
- Reserve at least `30%` of viewport area as intentional negative space (slate stone, obsidian canvas, or warm archival paper).

## Expected Outputs
- Multi-section layout architecture in React + CSS with distinct visual rhythm across the entire scroll journey.

## Verification Criteria
- [ ] Zero consecutive sections with identical 3-column card layouts.
- [ ] Clean alignment along shared vertical grid hairlines on desktop (`1440px`) and graceful single/two-column reflow on tablet (`768px`) and mobile (`390px`).

## Concrete Asymmetric Exposed-Hairline Grid Pattern
```css
.architectural-spread {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  border-block: 1px solid var(--border-hairline);
}
.spread-primary {
  grid-column: span 7 / span 7;
  border-inline-end: 1px solid var(--border-hairline);
}
.spread-secondary {
  grid-column: span 5 / span 5;
}
```

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Zero consecutive sections with 3 identical rounded cards.
- **Pinterest Curation Hook**: Include an asymmetric moodboard / study grid with variable aspect ratios and chromatic swatch strips.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
