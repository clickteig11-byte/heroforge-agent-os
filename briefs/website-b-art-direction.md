# Art Direction Brief — Website B: KUROKAWA & VANE (Premium Non-3D Editorial)

## 1. Brand & Architectural Thesis
- **Practice Name**: `KUROKAWA & VANE — ARCHITECTURAL MONOLITHS & THERMAL SANCTUARIES`
- **Studios**: `KYOTO · REYKJAVIK · ZURICH`
- **Practice Philosophy**: Founded by Kenji Kurokawa and Astrid Vane, the practice constructs site-specific architectural sanctuaries carved directly from local geological strata—cleaved Icelandic columnar basalt, subterranean Naoshima acoustic concrete, and high-altitude Atacama rammed earth and travertine. Every commission is engineered for a 500-year weathering horizon without synthetic coatings.

---

## 2. Three Distinct Hero Mockup Directions

### Direction 1 (SELECTED WINNER): Asymmetric 7:5 Swiss-Japanese Monograph Split
- **Composition**: Exposed `1px` stone grid hairlines dividing the viewport into an asymmetric `7:5` desktop architectural spread. The left column features museum monograph index numbers (`MONOGRAPH IX // 2026`), monumental `Cormorant Garamond` serif display typography (`Architecture Carved From Silent Geological Time`), geological coordinates (`63°58'48"N 22°26'12"W`), and an interactive project index. The right column houses a dramatic framed vertical plate of the **Reykjavik Basalt Thermal Sanctuary** cantilevered over black volcanic cliffs with rising geothermal mist.
- **Color & Surface**: Deep volcanic slate (`#111315`) paired with warm travertine stone panels (`#1A1D21`), mineral alabaster ink (`#F4F1EA`), and burnt ochre terracotta accents (`#D97706`).

### Direction 2: Full-Bleed Ocular Skylight & Subterranean Water Court
- **Composition**: Full-screen dark interior photograph of a circular rainwater oculus illuminating a black basalt reflection pool, with bottom-docked minimal editorial typography.

### Direction 3: Brutalist Orthographic Section Blueprint & Material Ledger
- **Composition**: Technical architectural elevation drawing dominating the upper half of the screen above a 4-column material sample ledger.

### Why Direction 1 Is Selected
Direction 1 exemplifies world-class **non-WebGL editorial web design**: it foregrounds typographic authority, exposed structural hairlines, tactile negative space, and museum-monograph proportion while remaining effortlessly responsive across desktop, tablet, and mobile.

---

## 3. Extracted Design Tokens & Layout Specifications

### Color Palette
- `--bg-basalt`: `#101214` (Weathered Volcanic Basalt Canvas)
- `--bg-slate-panel`: `#171A1E` (Cleaved Slate Architectural Plate)
- `--bg-travertine`: `#EAE4DC` (Warm Travertine Contrast Section)
- `--text-ink-light`: `#F4F1EA` (Archival Mineral Chalk)
- `--text-stone-muted`: `#A1A1AA` (Weathered Ash Grey)
- `--text-ink-dark`: `#141413` (Deep Carbon Ink on Travertine Sections)
- `--accent-ochre`: `#D97706` (Terracotta / Geothermal Ochre)
- `--border-stone`: `rgba(244, 241, 234, 0.13)` (1px Exposed Architectural Grid Rule)

### Typography System
- **Editorial Display (`--font-serif`)**: `'Cormorant Garamond', Georgia, serif` (`400–600`, italic & roman contrast, `clamp(2.8rem, 1.6rem + 4.8vw, 5.8rem)`, `line-height: 0.96`, `letter-spacing: -0.025em`)
- **Architectural Sans (`--font-sans`)**: `'Plus Jakarta Sans', sans-serif` (`400–500`, `1rem`, `line-height: 1.7`)
- **Scale & Coordinate Notation (`--font-mono`)**: `'IBM Plex Mono', monospace` (`0.75rem`, `letter-spacing: 0.15em`, `font-variant-numeric: tabular-nums`)

### Multi-Section Editorial Architecture (Zero WebGL)
1. **Section 01 — Hero Monograph Spread**: Asymmetric `7:5` exposed-hairline grid with live project switcher, coordinate telemetry, and framed architectural plate (`fetchpriority="high"`).
2. **Section 02 — Selected Built Works (Sticky Asymmetric Narrative)**: Left sticky curatorial essay paired with right scrolling architectural monographs (*01 // Reykjanes Basalt Thermae*, *02 // Naoshima Subterranean Chamber*, *03 // Atacama Travertine Observatory*), complete with interactive **Photo Plate vs. Structural Section Blueprint** toggle for each building.
3. **Section 03 — Material Patina & Geological Aging Lab**: Interactive 4-material comparator (*Columnar Basalt*, *Rammed Atacama Earth*, *Charred Hinoki Cedar*, *Raw Roman Travertine*) with a **0-Year -> 100-Year -> 500-Year Weathering Horizon Slider** that dynamically shifts surface patina, acoustic absorption coefficients, and thermal mass data.
4. **Section 04 — Structural & Environmental Archive (`<table>`)**: Semantic accessible specification ledger comparing floor area, thermal mass, acoustic RT60 reverberation, and embodied carbon across commissions.
5. **Section 05 — Private Commission & Monograph Inquiry**: Editorial closing manifesto with native `<dialog>` Architectural Commission Dossier & Monograph Request modal.
