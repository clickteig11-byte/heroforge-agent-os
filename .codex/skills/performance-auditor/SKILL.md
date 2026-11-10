---
name: performance-auditor
description: Audit and optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), bundle chunking, and WebGL frame pacing across React + Vite websites.
---

# Performance Auditor — Core Web Vitals & WebGL Frame Pacing

## Overview
Ensures cinematic visuals never come at the expense of engineering performance. Applies `modern-web-guidance` (`performance`) and `react-best-practices` rules to keep startup instant, layout shifts at zero, and animations locked at 60fps.

## Triggers
- Configuring `vite.config.ts`, `index.html`, image tags, and Three.js render loops.
- Running Phase 8 QA performance checks.

## Procedure

### Step 1: Resource Prioritization & LCP Optimization
Following `modern-web-guidance` (`performance`):
1. **Above-the-Fold Hero Media**: Use `fetchpriority="high"` and `loading="eager"` with explicit `width` and `height` attributes on the primary hero image (`Website B` and `Gallery`). Never lazy-load above-the-fold LCP images.
2. **Below-the-Fold Media**: Apply `loading="lazy"` and `decoding="async"` with explicit dimensions (`width` & `height` or `aspect-ratio`) on all offscreen images.
3. **Font Preloading Hygiene**: Preload only critical display/mono fonts in `index.html` with `crossorigin` (`<link rel="preload" as="font" type="font/woff2" crossorigin>`), avoiding `fetchpriority="high"` on fonts (`modern-web-guidance` `performance` rule).

### Step 2: CSS & Layout Containment
- Apply `contain: layout style paint;` on isolated telemetry widgets and cards (`modern-web-guidance` `performance`).
- Apply `content-visibility: auto; contain-intrinsic-size: auto 600px;` on deep below-the-fold archive/comparison sections to reduce initial rendering work.

### Step 3: WebGL & Bundle Optimization
- Clamp device pixel ratio in React Three Fiber (`dpr={[1, 2]}`) so 3x/4x retina screens don't quadruple fragment shader load unnecessarily.
- Reuse `THREE.Geometry` and `THREE.Material` instances via `useMemo` rather than recreating objects inside render or `useFrame`.
- Configure `build.rollupOptions.output.manualChunks` in `vite.config.ts` to split heavy vendor libraries (`three`, `gsap`, `motion`) cleanly from application code.

## Expected Outputs
- Optimized `vite.config.ts` with vendor chunking, preloaded critical assets, zero-CLS media attributes, and measured load/render timings in `data/qa-report.json`.

## Verification Criteria
- [ ] `vite build` succeeds cleanly with vendor chunk splitting for all 3 applications.
- [ ] Above-the-fold images use `fetchpriority="high"` and `loading="eager"`; below-the-fold images use `loading="lazy"`.
- [ ] Zero layout shift (`CLS = 0`) during page load.

## Concrete Vite Vendor Chunking Configuration
```ts
build: {
  target: 'esnext',
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        three: ['three', '@react-three/fiber', '@react-three/drei'],
        motion: ['gsap', 'motion']
      }
    }
  }
}
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
