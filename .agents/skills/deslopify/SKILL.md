---
name: deslopify
description: Ruthlessly detect, strip, and replace generic "AI slop" across visual design, layout architecture, typography, copywriting, and 3D scenes. Mandatory pre-flight and post-build filter for every HeroForge V1 website to guarantee authentic, human-grade creative direction.
---

# Deslopify — Zero-Tolerance Anti-AI-Slop Engine

## Overview
AI-generated websites almost universally suffer from recognizable "AI slop": purple-to-cyan gradients, default `Inter` headings, centered hero text with two pill buttons over a blurry blob, rows of three identical rounded cards with Lucide `Sparkles`/`Rocket`/`Shield` icons, and hollow marketing buzzwords (*"Unleash the future"*, *"Seamless workflow"*, *"Elevate your experience"*).

The **`deslopify`** skill is a mandatory, always-on enforcement filter in HeroForge V1. Every concept, reference prompt, React component, stylesheet, and copy string must pass through **Deslopify** before shipping.

## Triggers
- **Always active** on every website, component, and dashboard built by HeroForge V1.
- Triggered automatically before generating code, between Visual QA passes, and via `node scripts/deslopify-audit.mjs`.
- Triggered whenever the user says "deslopify", "no AI slop", "make it look human-designed", or "audit for generic patterns".

---

## Procedure: The 5-Layer Deslopification Protocol

### Layer 1: Chromatic & Surface Deslopification
- **BANNED**:
  - Purple/indigo/violet-to-cyan gradients (`#6366f1`, `#8b5cf6`, `#a855f7`, `#ec4899` neon SaaS blends).
  - Pure `#000000` backgrounds with `#ffffff` borders at `0.1` opacity and glowing neon purple radial blobs.
  - Generic Tailwind blue (`#3b82f6`) primary buttons on dark grey cards.
- **REQUIRED REPLACEMENT**:
  - **Physical Material Palettes**: Ground every color token in a real physical substance:
    - *Cleaved Slate Stone & Obsidian* (`#0B0E12`, `#12171E`, `#1A212B`)
    - *Weathered Volcanic Basalt & Travertine* (`#101214`, `#171A1E`, `#EAE4DC`)
    - *Brushed Grade-5 Titanium & Unlacquered Brass* (`#94A3B8`, `#D97706`, `#F59E0B`)
  - Use subtle top-edge specular highlights (`border-top: 1px solid rgba(255,255,255,0.16)`) and exposed `1px` architectural grid hairlines instead of heavy drop-shadows or neon glows.

### Layer 2: Typographic Deslopification
- **BANNED**:
  - Using unstyled system sans-serif or default `Inter`/`Roboto` for display headlines.
  - Uniform font weights (`500` everywhere) with default tracking (`letter-spacing: 0`).
  - Proportional numerals in technical tables, counters, coordinates, or prices.
- **REQUIRED REPLACEMENT**:
  - **High-Contrast Three-Voice Pairing**:
    1. *Monumental Display*: Architectural Grotesk (`Syne`, `Space Grotesk`) or High-Contrast Editorial Serif (`Cormorant Garamond`, `Instrument Serif`) with tight optical tracking (`-0.025em` to `-0.04em`) and tight leading (`0.92`–`0.98`).
    2. *Humanist Body*: Clean, comfortable reading measure (`55ch–68ch`, `line-height: 1.65`).
    3. *Technical Monospace*: `JetBrains Mono` or `IBM Plex Mono` with mandatory `font-variant-numeric: tabular-nums` and wide uppercase tracking (`0.14em–0.18em`) for indices, coordinates, and specifications.

### Layer 3: Layout & Structural Deslopification
- **BANNED**:
  - The "AI SaaS Bento": 3 identical `border-radius: 16px` cards in a row, each containing a `40×40px` colored icon box, a `1.25rem` title, and 2 lines of grey text.
  - Fake social proof ("Trusted by 10,000+ teams", fictional 5-star quote cards with stock avatars).
  - Generic 3-tier pricing tables (`Starter / Pro / Enterprise`).
  - Symmetrical centered text blocks stacked vertically down the entire page.
- **REQUIRED REPLACEMENT**:
  - **Asymmetric Editorial & Blueprint Grids**:
    - Use `7:5`, `5:7`, or `4:8` column splits with exposed `1px` structural hairlines.
    - Alternate section archetypes: Full-viewport interactive 3D stage -> Sticky asymmetric monograph narrative -> Interactive exploded subsystem laboratory -> Semantic `<table>` engineering specification ledger -> Bespoke configuration & dossier vault.

### Layer 4: Copywriting & Vocabulary Deslopification
- **BANNED AI BUZZWORDS (Hard Fail in `deslopify-audit.mjs`)**:
  - Never output: *"Revolutionize"*, *"Unleash"*, *"Unlock the power"*, *"Supercharge"*, *"Elevate your"*, *"Next-generation"*, *"Seamless integration"*, *"Game-changing"*, *"Cutting-edge"*, *"Empowering"*, *"Delve into"*, *"Tapestry"*, *"Testament to"*, *"In today's fast-paced world"*, *"Lorem ipsum"*.
- **REQUIRED REPLACEMENT**:
  - Write **domain-authentic technical prose and physical telemetry**:
    - Instead of *"Experience next-generation precision"*, write: *"Machined to ±1.2 micron concentric tolerance from grade-5 titanium; regulated across six positional axes at 28,800 vibrations per hour (4.0 Hz)."*
    - Instead of *"Sustainable modern architecture"*, write: *"Cantilevered 14 meters over Reykjanes columnar basalt strata; engineered for a 500-year geothermal weathering horizon with 2.4-second acoustic RT60 decay."*

### Layer 5: Interaction & 3D Deslopification
- **BANNED**:
  - Dead `<button>` or `<a href="#">` elements that do nothing when clicked.
  - Single primitive 3D spheres or floating `TorusKnotGeometry` meshes passed off as "3D product design".
  - Competing scroll and pointer controllers that make camera motion stutter.
- **REQUIRED REPLACEMENT**:
  - Multi-part articulated 3D assemblies (`>= 10` hierarchical sub-meshes with distinct PBR materials, instanced teeth/fasteners, and interactive exploded-view separation).
  - Every interactive button must either mutate live visual/technical state (e.g., switching blueprints, adjusting weathering horizon, exploding 3D mechanisms, changing alloy finishes) or open a working native `<dialog>` modal.

---

## Automated Verification (`scripts/deslopify-audit.mjs`)
Run `node scripts/deslopify-audit.mjs` across all application source trees (`apps/gallery`, `apps/website-a-3d`, `apps/website-b-editorial`). The audit checks:
1. **Zero Banned AI Buzzwords** in `.tsx` / `.ts` / `.html` source files.
2. **Zero SaaS Purple/Indigo Gradient Hex Codes** (`#6366f1`, `#8b5cf6`, `#a855f7`).
3. **Zero Dead Anchor Links** (`href="#"` without handler or valid section ID).
4. **Verified Three-Voice Typography & Tabular Numerals** (`tabular-nums` present).
5. **Verified Semantic Landmarks & Native `<dialog>` Usage**.

## Expected Outputs
- Clean `PASS` report from `node scripts/deslopify-audit.mjs` saved to `data/deslopify-report.json` and surfaced live in the HeroForge Agent OS Dashboard.

## Verification Criteria
- [ ] `node scripts/deslopify-audit.mjs` exits with code `0` and `0` violations across all built websites and the dashboard.
- [ ] Every built site passes the 5-Layer Deslopification Protocol.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
