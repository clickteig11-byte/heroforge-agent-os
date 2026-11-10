---
name: reference-research
description: Study high-craft web design references (Awwwards, Godly, Codrops, SiteInspire, Land-book) and extract actionable spatial, typographic, and choreographic principles without copying existing websites.
---

# Reference Research — Design Pattern Extraction

## Overview
Analyzes award-winning digital experiences to distill structural principles—grid ratios, scroll pacing, WebGL integration patterns, and typographic contrast—into reusable engineering blueprints.

## Triggers
- Phase 1 & Phase 3 of the HeroForge V1 workflow.
- Before designing a new hero composition, scroll narrative, or 3D stage.

## Procedure

### Step 1: Deconstruct Across Five Structural Layers
When studying reference paradigms from Awwwards, Godly, Codrops, Land-book, and SiteInspire, extract principles across five orthogonal layers:
1. **Spatial Grid & Proportions**:
   - Exposed architectural hairlines (`1px` structural grid lines dividing viewport columns).
   - Asymmetric column ratios (e.g., `5:7` or `4:8` desktop splits rather than predictable `6:6` centering).
   - Generous negative space (`35%+` open canvas in hero viewports) that lets focal imagery or 3D forms breathe.
2. **Typographic Tension**:
   - Extreme scale contrast: Pairing `clamp(3.25rem, 7.5vw, 7.5rem)` tight-tracked display headlines (`letter-spacing: -0.035em`, `line-height: 0.92`) with micro-tracked uppercase technical metadata (`0.72rem`, `letter-spacing: 0.18em`, `font-variant-numeric: tabular-nums`).
3. **Choreography & Pacing**:
   - Pinned scroll stages with scrub-linked state transitions (`GSAP ScrollTrigger`).
   - Staggered mask reveals (`clip-path: inset(...)` or `translateY` inside overflow-hidden line wrappers).
4. **Depth & Surface Tactility**:
   - Subtle SVG noise/grain overlays (`opacity: 0.035`) to eliminate flat digital banding.
   - Specular top-edge highlights (`border-top: 1px solid rgba(255,255,255,0.14)`) simulating overhead studio lighting on slate/glass panels.
5. **Interactive Telemetry & Utility**:
   - Live coordinates, chapter indicators, interactive spec switchers, exploded-view toggles, and working drawers/modals.

### Step 2: Ethical Synthesis Rule
- Extract **structural mechanics and proportional relationships**, never copy a brand's copywriting, proprietary assets, or exact layout verbatim.

## Expected Outputs
- Documented reference synthesis in `docs/RESEARCH_SYNTHESIS.md` mapping extracted principles to Website A, Website B, and the HeroForge Slate Stone Agent OS Dashboard.

## Verification Criteria
- [ ] Principles are translated into concrete CSS/GSAP/R3F implementation patterns.
- [ ] Zero verbatim copying of existing third-party websites.

## Concrete Research-to-Component Mapping Matrix
| Reference Platform | Extracted Structural Mechanic | Target React Component |
| :--- | :--- | :--- |
| **Awwwards SOTD** | Single continuous WebGL canvas + perimeter HUD | `<CalibreZeroStage />` + `<BottomHudBar />` |
| **Godly.website** | Exposed `1px` stone hairlines + tabular numerals | `.monograph-frame` + `font-variant-numeric: tabular-nums` |
| **Pinterest Boards** | Variable aspect-ratio (`16:10`, `4:5`) moodboard pins with hex swatches | `<PinterestCurationSection />` |
| **Mobbin Mobile Flows** | Floating thumb-zone bottom bar + native `<dialog>` sheet | `<MobileThumbDock />` + `<dialog>` |

## Deslopify & Quality Guardrails
- Never copy third-party brand names or proprietary copywriting; synthesize structural proportions and choreographic pacing only.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
