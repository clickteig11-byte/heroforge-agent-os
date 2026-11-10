---
name: heroforge-master-studio
description: Consolidated master creative and engineering skill for HeroForge V1. Unifies ideation, reference research, minimalist full-bleed hero restraint, typography balance, app-free Three.js/R3F 3D, Deslopify auditing, and iterative Playwright Visual QA into a single authoritative workflow.
---

# HeroForge Master Studio — Consolidated Creative & Engineering Doctrine

## Overview
`heroforge-master-studio` consolidates the entire HeroForge V1 skill library into one unified, minimal, anti-slop operating standard. Every website generated or refined by the studio must obey the **Five Consolidated Pillars** below.

## Triggers
- Building, refining, or auditing any HeroForge showcase website or Agent OS interface.
- Consolidating multi-skill creative workflows (`idea-generator`, `hero-design`, `typography-director`, `layout-composition`, `cinematic-3d`, `deslopify`, `visual-qa`) into a single pass.

---

## Pillar 1: The Minimalist Hero Restraint Law (From B/B- to A+)
Never crowd a hero section with competing UI cards, multiple buttons, or decorative developer labels. Every showcase hero must strictly follow these 7 rules:
1. **Product / Project Dominance**: The featured full-bleed photograph or 3D object is the undisputed visual focus (`70%+` of the viewport unobstructed). Never cover the focal subject with a long headline or a 4-cell stat card.
2. **Maximum 4 Elements Over the Hero**:
   - **Floating Pill Navigation** (`border-radius: 9999px`)
   - **One Small Project Label** (quiet tracked uppercase text — no bordered badge box or pulsing dot)
   - **One Intentional 2-Line Headline + One 1-Sentence Paragraph (`34ch–40ch`)**
   - **One Single Primary Call-to-Action Button** (never place two competing buttons side-by-side in the hero)
   - **At Most One Subtle Supporting Element** (e.g., a compact 3-item pill switcher or a quiet single-line caption on the bottom-right margin)
3. **Intentional Headline Line-Wrapping (Zero Orphans)**:
   - Use explicit `<br />` or `text-wrap: balance` with calibrated `clamp()` sizing so the headline breaks into **two deliberate, balanced lines**. Never leave a short word (like `"light."` or `"stone."`) stranded alone on a third line.
4. **Short, Natural Human Navigation Labels**:
   - Use clear 1-word labels that tell visitors what they can click:
     - Watch / Product: `Movement`, `Craft`, `Specifications`, `Inquire`
     - Architecture: `Projects`, `Studio`, `Materials`, `Inquire`
     - Aviation / Automotive / Optics: `Aircraft`, `Chassis`, `Optics`, `Specifications`, `Inquire`
   - **BANNED Decorative Interface Labels**: Never write `"Practice Bento"`, `"Lithic Archive"`, `"Bento Architecture"`, `"3D Calibre Vitrine"`, `"Switch Full-Bleed Residence Plate"`, or `"SYS // 01"`.
5. **Color Boundary Between Workspace & Showcase Sites**:
   - The **Agent OS Workspace (`:4100`)** uses **Matte Chalkboard Slate & Stone + Mineral Light Blue (`#58A6FF`)**.
   - **Showcase Websites (`:4101+`)** must NEVER inherit the workspace's cyan/light-blue buttons! Each showcase site uses its own authentic material palette (e.g., warm ivory `#FAF8F3`, champagne gold `#C5A478`, and espresso `#171513` for horology; warm limestone `#F5F2EB` and volcanic charcoal `#161514` for architecture).

```tsx
/* Canonical Minimalist A+ Hero Pattern */
<header className="hero-fullbleed">
  <img src={heroImage} alt={heroAlt} className="hero-bg-image" fetchPriority="high" />
  <div className="hero-scrim" />
  <div className="hero-overlay-content">
    <div className="hero-copy-stack">
      <span className="hero-small-label">Calibre 01 · Geneva</span>
      <h1 className="hero-display-title">
        German silver, shaped<br />by <em>morning light</em>.
      </h1>
      <p className="hero-summary">
        Thirty-eight manual-wind chronographs finished and regulated by hand each year in our Rue du Rhône workshop.
      </p>
      <a href="#examination" className="pill-cta-btn">Explore the Movement</a>
    </div>
    <div className="hero-quiet-caption">312 Parts · 96h Reserve · Raw Maillechort</div>
  </div>
</header>
```

---

## Pillar 2: Typography & Asymmetric Below-the-Fold Rhythm
- Pair an expressive editorial serif (`Cormorant Garamond`) with a clean geometric sans (`Plus Jakarta Sans`) and a tabular monospace (`JetBrains Mono` with `font-variant-numeric: tabular-nums`).
- Alternate below-the-fold sections between:
  1. **Interactive Feature Stage** (`58% / 42%` split vitrine or large-format plate viewer with a compact segmented pill bar).
  2. **Asymmetric 12-Column Bento Spread** (`span-7` narrative card + `span-5` dark contrast metric card + three `span-4` specification cards).

---

## Pillar 3: App-Free Procedural 3D WebGL (`Three.js` + `R3F` + `Drei`)
- Construct multi-part mechanical/industrial assemblies entirely in code with zero dependency on external Blender or Spline desktop apps.
- Frame the 3D assembly at `scale={0.72}` with generous margin inside its container so bezels and crowns never clip against column edges.

---

## Pillar 4: Iterative Visual QA Loop (At-a-Glance Review)
Before marking any website complete:
1. Capture Desktop (`1440×900`) and Mobile (`390×844`) screenshots via Playwright.
2. Inspect the screenshots with multimodal vision (`read_file`).
3. Verify at a glance:
   - Does the visitor immediately understand the visual concept?
   - Is the featured product/project the clear first focal point?
   - Are there zero orphan headline words and only one primary CTA?
   - Do desktop and mobile layouts remain balanced with zero horizontal overflow?

## Verification Criteria
- [ ] Hero contains 1 nav pill bar, 1 small label, 1 balanced 2-line headline, 1 short sentence (`<= 40ch`), 1 primary CTA, and at most 1 subtle supporting element.
- [ ] Zero decorative/jargon UI labels (`"Practice Bento"`, `"Switch Full-Bleed Plate"`, `//` slashes).
- [ ] `node scripts/deslopify-audit.mjs` passes with `100/100` (`0` violations).

## Concrete Verification Command
```bash
node scripts/audit-and-upgrade-skills.mjs && node scripts/deslopify-audit.mjs
```
