---
name: idea-generator
description: Invent, structure, and quantitatively rank 20+ original website concepts across diverse high-craft categories without user prompting. Selects winning 3D and non-3D concepts based on a 6-axis rubric.
---

# Idea Generator — Autonomous Website Concept Engine

## Overview
Invent original, commercially and artistically compelling website concepts across diverse industries. Every concept must feature a bespoke brand identity, product/service thesis, visual language, hero choreography, and technical feasibility profile.

## Triggers
- Launching a new HeroForge V1 generation cycle.
- Expanding the HeroForge Agent OS Dashboard idea catalog.
- Requesting new 3D or non-3D flagship website concepts.

## Procedure

### Step 1: Category Diversification Matrix
Generate at least 20 distinct concepts spanning at least 10 categories so no two ideas share the same visual trope or industry cliché:
1. **Horology & Haute Mécanique** (e.g., tourbillon chronographs, celestial complications)
2. **Aerospace & Orbital Infrastructure** (e.g., stratospheric propulsion, autonomous reentry capsules)
3. **Architectural Monoliths & Material Studios** (e.g., cleaved basalt pavilions, desert rammed-earth sanctuaries)
4. **Precision Optical & Cinema Instruments** (e.g., medium-format digital backs, anamorphic cine lenses)
5. **Bespoke Electric & Hyper-Mobility** (e.g., magnesium-monocoque endurance motorcycles, hydrofoil vessels)
6. **High-Jewelry & Metamorphic Gemology** (e.g., lab-grown structural diamond sculptures, kinetic platinum)
7. **Acoustic & Mastering Hardware** (e.g., planar-magnetic studio reference systems, modular analog synthesizers)
8. **Botanical Alchemy & Rare Perfumery** (e.g., supercritical CO2 botanical extractions, volcanic stone diffusers)
9. **Autonomous Robotics & Bionics** (e.g., tendon-driven prosthetic hands, deep-trench abyssal AUVs)
10. **Experimental Digital Archives & Editorial Foundations** (e.g., brutalist type foundries, kinetic cartography)

### Step 2: Mandatory Concept Specification Schema
For every generated idea (1 through 20), produce all 9 required fields:
- `id`: Stable slug (`idea-01` to `idea-20`)
- `brandName`: Original, evocative, trademark-style name (never reuse the same fictional brand across sites)
- `category`: Primary industry vertical
- `concept`: Product or service thesis with specific technical/physical grounding
- `targetAudience`: Specific buyer, collector, or patron profile
- `visualIdentity`: Color palette hex tokens, surface materiality, and typographic voice
- `heroComposition`: Spatial framing, focal point, and typographic lockup
- `animationConcept`: Scroll and interactive choreography
- `threeDOpportunities`: WebGL / R3F potential (or why non-WebGL editorial craft is superior for this concept)
- `referenceImageDirection`: Exact art-direction prompt strategy for visual reference generation
- `implementationFeasibility`: Code-first build plan (procedural 3D vs. editorial layout)

### Step 3: Six-Axis Quantitative Rubric (0–100 Scale per Axis)
Score each concept objectively on:
1. **Visual Originality (`visualOriginality`)**: Distinctiveness from standard web templates.
2. **Cinematic Potential (`cinematicPotential`)**: Depth of camera, scroll, and lighting drama.
3. **Design Quality (`designQuality`)**: Typographic rigor, grid tension, and tactile finish.
4. **Feasibility (`feasibility`)**: Ability to execute cleanly in React + Vite + TypeScript without external desktop app dependencies (no Blender/Spline required).
5. **Performance (`performance`)**: Ability to maintain 60fps and fast LCP.
6. **Portfolio Impact (`portfolioImpact`)**: Immediate "Awwwards Site of the Day" memorability.

### Step 4: Dual Winner Selection Protocol
- **Website A (Cinematic 3D Winner)**: Select the highest-scoring concept where real-time WebGL geometry, physically based materials, lighting, and GSAP ScrollTrigger camera choreography are essential to the narrative. Do not automatically pick a speaker brand.
- **Website B (Premium Non-3D Winner)**: Select a completely different brand and category where Swiss/editorial typography, asymmetric grid composition, tactile photography, and refined Motion micro-interactions shine without WebGL.

## Expected Outputs
- `data/ideas-catalog.json` (and TypeScript module export) containing all 20 fully specified ideas, scores, and selection rationale.
- `docs/IDEATION_REPORT.md` documenting the 20 ideas, comparative scoring table, and winner selection justification.

## Verification Criteria
- [ ] Exactly 20 or more original ideas are documented with all 9 descriptive fields and all 6 rubric scores.
- [ ] Website A and Website B use completely different brands, industries, and aesthetic palettes.
- [ ] Neither winner relies on external Blender/Spline desktop apps to build its assets.

## Concrete Code & Schema Pattern
```ts
export interface HeroForgeConcept {
  id: string;
  brandName: string;
  category: string;
  visualIdentity: string;
  heroComposition: string;
  scores: {
    visualOriginality: number;
    cinematicPotential: number;
    designQuality: number;
    feasibility: number;
    performance: number;
    portfolioImpact: number;
    average: number;
  };
}
```

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Reject any concept that defaults to a generic SaaS dashboard, AI chatbot wrapper, or crypto token landing page.
- **Pinterest Curation Hook**: Every concept must specify a tactile physical material board (e.g., cleaved basalt, brushed grade-5 titanium, kiln-charred Hinoki, optical lanthanum glass).
- **Mobile UX Hook**: Every concept must define how its hero focal point adapts to a vertical `390x844` mobile viewport with thumb-zone navigation.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
