---
name: image-generation
description: Generate, organize, and verify actual visual reference images (3 distinct hero mockups per site, desktop & mobile references, and bespoke visual assets) before writing website code. Supports AI image generation providers and user-supplied imports.
---

# Image Generation — Visual Mockup & Asset Production

## Overview
Generates real image files on disk for every selected website concept before implementation begins. Replaces abstract text descriptions with concrete visual targets that guide layout, lighting, color grading, and Visual QA comparison.

## Triggers
- Phase 4 of HeroForge V1 (after selecting winning Website A and Website B concepts).
- When generating bespoke product imagery, architectural plates, or textures for a website build.

## Procedure

### Step 1: Mandatory Reference Set per Website
For each selected website (`website-a` and `website-b`), produce and save to `public/references/<site-slug>/`:
1. **Three Genuinely Distinct Hero Mockups**:
   - `hero-mockup-1.png`: Direction 1 (e.g., Macro Monolithic Centerpiece / Chiaroscuro Studio Lighting).
   - `hero-mockup-2.png`: Direction 2 (e.g., Asymmetric Editorial Split / Architectural Blueprint Telemetry).
   - `hero-mockup-3.png`: Direction 3 (e.g., Exploded Kinematic Perspective / Atmospheric Horizon).
2. **Winner Selection & Full Reference Views**:
   - Evaluate the 3 hero mockups against the Creative Director brief and select the strongest visual direction.
   - `reference-desktop.png`: Full desktop design reference (`16:9` widescreen layout target).
   - `reference-mobile.png`: Mobile responsive design reference (`9:16` vertical viewport target).
3. **Section Visual Assets**:
   - Generate high-craft editorial/product photography (`asset-1.png`, `asset-2.png`, `asset-3.png`) so the built websites use authentic, domain-specific visual plates rather than generic stock placeholders.

### Step 2: Provider Agnosticism & Fallback Protocol
- **Primary Mode (Antigravity `image-generator` subagent / Gemini Imagen)**: Invoke the `image-generator` subagent with detailed art-direction prompts and target file paths.
- **Alternative Mode (Environment API / Local Import)**: Support `OPENAI_API_KEY`, `GEMINI_API_KEY`, or manual user reference placement in `public/references/<site-slug>/` via `scripts/import-references.mjs`.
- **Strict Honesty Rule**: Never substitute text descriptions or empty SVG placeholders while claiming AI reference images were generated. Verify every file exists on disk and has non-zero byte size (`> 10KB`).

## Expected Outputs
- Saved PNG/WebP files in `public/references/website-a/` and `public/references/website-b/`.
- Reference metadata manifest (`data/references-manifest.json`) linking each mockup, selection rationale, and extracted design tokens.

## Verification Criteria
- [ ] At least 3 distinct hero mockups exist on disk for Website A and 3 for Website B.
- [ ] Desktop and mobile reference images exist on disk for both websites.
- [ ] All generated image files are verified non-empty and accessible by both the websites and the Comparison Gallery.

## Concrete Reference Verification Protocol
```bash
# Verify all generated reference images exist and exceed 100KB minimum high-res threshold
find references/website-a references/website-b -type f -name "*.png" -size +100k
```

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Prompting**: Never prompt for "futuristic glowing neon UI". Specify real camera lenses (`90mm f/2.8 Apo-Macro`, `Alpa 12 MAX 40mm Tilt-Shift`), physical materials (`grade-5 titanium`, `columnar tholeiitic basalt`), and studio lighting ratios.
- **Mobile Reference Requirement**: Always generate both a `16:9` widescreen desktop reference (`reference-desktop.png`) and a `9:16` vertical mobile reference (`reference-mobile.png`).

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
