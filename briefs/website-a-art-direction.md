# Art Direction Brief — Website A: AETHERION // CALIBRE ZERO (Cinematic 3D)

## 1. Brand & Product Thesis
- **Brand Name**: `AETHERION // GENÈVE — TOKYO`
- **Flagship Instrument**: `CALIBRE ZERO — Triaxial Sidereal Astrolabe Chronograph`
- **Edition**: Limited Sovereign Allocation of 18 numbered instruments (`REF. AZ-001/T5`)
- **Engineering Narrative**: Engineered to eliminate gravitational rate errors across all three spatial axes, *Calibre Zero* suspends a 0.42-gram titanium balance assembly inside three concentric counter-rotating gimbal cages (`8s`, `24s`, and `60s` orbital periods), crowned by a cold-ground synthetic sapphire dome and a Muonionalusta iron-meteorite dial ring etched with sidereal declination telemetry.

---

## 2. Three Distinct Hero Mockup Directions

### Direction 1 (SELECTED WINNER): Asymmetric Obsidian Stage & Suspended Triaxial Tourbillon
- **Composition**: Left 5 columns hold the monumental stacked `Syne` display headline (`CALIBRE ZERO // TRIAXIAL ASTROLABE`), live frequency badge (`28,800 VPH · 4.0 HZ · 0.00G DELTA`), and dual action triggers (`EXPLODE MECHANISM` / `REQUEST DOSSIER`). Right 7 columns frame the suspended 3D *Calibre Zero* mechanism in a three-quarter macro perspective surrounded by an orbital calibration reticle and bottom chapter scrub bar.
- **Lighting**: Warm phosphor-amber key light (`#F59E0B`) grazing the gold-anodized escapement teeth and titanium chamfers, balanced against cool cryogenic sapphire rim reflections (`#38BDF8`) over a deep obsidian slate void (`#07090D`).

### Direction 2: Macro Axial Cutaway & Cryogenic Sapphire Dome Focus
- **Composition**: Centered symmetrical macro view looking straight down the zenith axis of the sapphire crystal dome, framed by four corner HUD telemetry modules.
- **Lighting**: High-contrast cool cyan caustics passing through the sapphire lens with stark metallic edges.

### Direction 3: Exploded Horological Blueprint & Orbital Astrolabe Grid
- **Composition**: Diagonal exploded axonometric view where all 14 horological components float along a diagonal axis over a technical blueprint grid.
- **Lighting**: Blueprint slate background (`#0B111E`) with amber wireframe callouts and technical dimension lines.

### Why Direction 1 Is Selected
Direction 1 provides the strongest balance between **typographic legibility** on the left and **unobstructed real-time 3D WebGL stage presence** on the right, while naturally transitioning into our 5-chapter scroll-scrubbed camera choreography.

---

## 3. Extracted Design Tokens & Layout Specifications

### Color Palette
- `--bg-void`: `#07090D` (Obsidian Horological Slate)
- `--bg-surface`: `#0E131B` (Elevated Instrument Housing)
- `--bg-glass`: `rgba(14, 19, 27, 0.74)` (HUD Glass Plate with `backdrop-filter: blur(16px)`)
- `--text-primary`: `#F8FAFC` (Mineral Alabaster)
- `--text-secondary`: `#94A3B8` (Brushed Grade-5 Titanium)
- `--text-muted`: `#64748B` (Machined Slate)
- `--accent-amber`: `#F59E0B` (Tritium Phosphor Gold)
- `--accent-cyan`: `#38BDF8` (Cryogenic Sapphire Refraction)
- `--border-hairline`: `rgba(148, 163, 184, 0.16)` (1px Precision Vernier Hairline)

### Typography System
- **Display Headline (`--font-display`)**: `'Syne', sans-serif` (`700–800`, `clamp(2.6rem, 1.4rem + 4.5vw, 5.4rem)`, `line-height: 0.94`, `letter-spacing: -0.035em`)
- **UI & Narrative Body (`--font-sans`)**: `'Plus Jakarta Sans', sans-serif` (`400–600`, `1rem`, `line-height: 1.65`)
- **Telemetry & Calibration (`--font-mono`)**: `'JetBrains Mono', monospace` (`0.75rem`, `letter-spacing: 0.14em`, `font-variant-numeric: tabular-nums`)

### 5-Chapter Scroll & 3D Camera Choreography Specification
1. **Chapter 01 (`0%–20%`) — The Sovereign Horizon**: Full exterior Calibre Zero assembly; camera at `[0.8, 0.25, 5.4]`.
2. **Chapter 02 (`20%–45%`) — Triaxial Gimbal Cage**: Camera orbits to `[3.2, 1.3, 3.7]`; outer and middle titanium cages accelerate orbital demonstration.
3. **Chapter 03 (`45%–70%`) — Exploded Escapement Core**: Camera sweeps to `[-2.5, -0.6, 3.1]`; the 14-part assembly smoothly separates along the Z-axis (`explodeFactor: 0 -> 1`), isolating the 48-tooth gold escapement wheel, hairspring helix, and meteorite bridges.
4. **Chapter 04 (`70%–88%`) — Cryogenic Sapphire & Metallurgy**: Zenith top-down inspection `[0.2, 4.4, 2.5]` aligned with the interactive Material & Tolerance Matrix (`<table>`).
5. **Chapter 05 (`88%–100%`) — Private Allocation Vault**: Heroic centered lockup `[0, 0, 4.8]` paired with the interactive bespoke rotor engraving configurator and native `<dialog>` allocation request modal.
