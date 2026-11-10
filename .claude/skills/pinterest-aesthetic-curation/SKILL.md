---
name: pinterest-aesthetic-curation
description: Extract high-taste editorial moodboards, asymmetric masonry pin grids, tactile materiality swatches, chiaroscuro lighting studies, and Swiss-Japanese graphic layouts inspired by curated Pinterest design boards to elevate website aesthetics.
---

# Pinterest Aesthetic Curation — Editorial Moodboard & Materiality Engine

## Overview
Translates the visual richness of curated Pinterest industrial design, brutalist architecture, horological macro photography, and Swiss editorial graphic design boards into concrete web layout modules and surface treatments.

## Triggers
- Designing or upgrading visual sections for HeroForge V1 websites.
- Adding editorial detail studies, material moodboards, or asymmetric masonry galleries.
- Invoked alongside `creative-director` and `deslopify` to ensure authentic human-curated taste.

## Procedure

### Step 1: Curated Pin-Board Archetypes
Every HeroForge website must incorporate at least one **Editorial Detail & Materiality Pin-Board Section** featuring:
1. **Asymmetric Masonry / Variable Aspect-Ratio Grid**:
   - Mix `4:5` vertical portrait plates, `16:10` horizontal architectural/macro studies, and `1:1` square material/detail callouts rather than uniform rectangle cards.
2. **Tactile Specimen Metadata Tags**:
   - Each visual pin includes a monospace catalog index (`PIN // 01`), surface finish note, lighting Kelvin temperature or focal length (`85mm f/2.8 Macro`), and color swatch hex tokens extracted from the image.
3. **Interactive Detail Inspection**:
   - Clicking or focusing a pin reveals its curatorial lighting/material breakdown and connects directly to the product's physical engineering.

### Step 2: Surface & Chromatic Polish from Print/Industrial Boards
- **Micro-Grain & Paper/Stone Texture**: Layer subtle grain and hairline rules (`1px solid`) that mimic archival print monographs and machined aluminum plates.
- **Chiaroscuro Contrast**: Pair deep obsidian or basalt shadows (`#07090D` / `#101214`) with warm tungsten/amber (`#F59E0B` / `#D97706`) or cool sapphire highlights (`#38BDF8`).

## Expected Outputs
- Bespoke Editorial Moodboard / Macro Detail Study sections integrated into Website A, Website B, and the HeroForge Agent OS Dashboard.

## Verification Criteria
- [ ] Variable aspect ratios (`4:5`, `16:10`, `1:1`) and extracted color swatch tokens are rendered cleanly.
- [ ] Interactive pin selection updates live curatorial telemetry.


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
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
