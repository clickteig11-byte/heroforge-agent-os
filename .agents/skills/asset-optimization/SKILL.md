---
name: asset-optimization
description: Optimize raster reference images, procedural textures, SVG noise overlays, and 3D geometries for fast delivery, crisp high-DPI rendering, and zero external app dependencies.
---

# Asset Optimization — Media, Texture & Geometry Pipeline

## Overview
Ensures all visual reference images, section photographic plates, procedural 3D textures, and vector diagrams are lightweight, properly dimensioned, and self-contained within the repository.

## Triggers
- Processing generated reference images and section assets in Phase 4.
- Auditing payload sizes and rendering sharpness in Phase 8.

## Procedure

### Step 1: Raster Image Hygiene
- Store all generated reference mockups (`hero-mockup-1..3`, `reference-desktop`, `reference-mobile`) and section plates in organized project directories with deterministic filenames.
- Always pair `<img>` elements with explicit `width`, `height`, `aspect-ratio`, and descriptive `alt` text (`modern-web-guidance` `accessibility` & `performance`).
- Mark purely decorative atmospheric textures or background grids with `alt=""` or `aria-hidden="true"` so screen readers aren't polluted (`modern-web-guidance` `accessibility`).

### Step 2: Procedural Runtime Textures (Zero External Bloat)
- For 3D surface micro-detail (brushed titanium anisotropy, radial gauge markings, carbon weave bump maps), generate compact `THREE.CanvasTexture` instances in `useMemo` with anisotropic filtering (`texture.anisotropy = 8`) and proper disposal on unmount. This delivers 4K-feel surface detail with `0 KB` of network texture downloads.

### Step 3: Geometry Instancing & Disposal
- Use `<Instances>` or shared `BufferGeometry` instances for repeated mechanical elements (stator blades, calibration ticks, fasteners).
- Ensure segment counts are balanced (e.g., `64` radial segments on primary focal rings, `16–24` on secondary struts) to maintain razor-sharp silhouettes under `<50,000` total triangles.

## Expected Outputs
- Optimized image assets, zero-network procedural 3D textures, and clean geometry memory management.

## Verification Criteria
- [ ] Zero broken image links (`naturalWidth > 0` verified via Playwright for every `<img>` on all 3 sites).
- [ ] 3D scene maintains smooth frame pacing with `<50k` triangles and low draw call count.

## Concrete Zero-CLS Image Contract
Every `<img>` element must declare explicit `width`, `height`, and `loading` (`eager` + `fetchPriority="high"` above the fold; `lazy` + `decoding="async"` below the fold).


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

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
