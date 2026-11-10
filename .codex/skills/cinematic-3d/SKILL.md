---
name: cinematic-3d
description: Build production-grade interactive WebGL experiences using Three.js, React Three Fiber (@react-three/fiber), and Drei (@react-three/drei) with deterministic scroll synchronization, reduced-motion support, and resilient WebGL fallbacks.
---

# Cinematic 3D — React Three Fiber & WebGL Engineering

## Overview
Guides the architecture of Website A's real-time 3D WebGL experience. Combines React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Three.js PBR materials, custom shaders, and GSAP ScrollTrigger into a single continuous, butter-smooth 3D stage.

## Triggers
- Building Website A (Cinematic 3D winner).
- Adding interactive 3D inspection modes, exploded views, or scroll-choreographed WebGL scenes.

## Procedure

### Step 1: Single Continuous Scene Architecture
- Prefer **one persistent `<Canvas>`** mounted in a fixed viewport background layer (`position: fixed; inset: 0; pointer-events: none` with selective `pointer-events: auto` or window pointer tracking) while semantic HTML sections scroll in the foreground.
- Never mount multiple competing `<Canvas>` instances that exhaust browser WebGL contexts.
- Expose a shared scroll-state ref (`scrollProgressRef.current` normalized `0.0 -> 1.0`, plus active chapter index and interactive mode state) read inside `useFrame((state, delta) => ...)` with frame-rate-independent damping (`THREE.MathUtils.damp`).

### Step 2: Deterministic Controller Separation
- **Rule of Single Authority**: Never let `OrbitControls` and a scroll-driven camera rig fight over `state.camera.position` simultaneously.
  - In **Scroll Narrative Mode** (default), camera position and lookAt target are interpolated smoothly from `scrollProgressRef.current` + subtle pointer parallax offset.
  - Provide an explicit **"Interactive Free-Inspect / Exploded View" toggle button** in the HUD that lets the user rotate/inspect presets or trigger an exploded assembly state cleanly.

### Step 3: Accessibility & WebGL Resilience
- **Reduced Motion (`prefers-reduced-motion: reduce`)**: Detect via `window.matchMedia('(prefers-reduced-motion: reduce)')`. When active, disable continuous orbital rotation and rapid camera sweeps, snapping gently between static keyframe compositions.
- **WebGL Context Fallback**: Wrap `<Canvas>` in an ErrorBoundary + WebGL support detector (`canvas.getContext('webgl2') || canvas.getContext('webgl')`). If WebGL is unavailable or disabled in headless/legacy environments, render a high-craft interactive SVG/Canvas2D + high-resolution reference fallback so the site remains 100% functional and visually stunning.

## Expected Outputs
- `src/components/Scene3D.tsx`: Complete React Three Fiber scene with multi-part articulated 3D geometry, studio lighting, environment reflections, particle/field telemetry, and `useFrame` choreography.
- `src/components/WebGLFallback.tsx`: Resilient fallback component.

## Verification Criteria
- [ ] Real `<canvas>` WebGL context renders with zero console errors.
- [ ] Scrolling forward advances the 3D state; scrolling backward reverses it; stopping holds the exact state.
- [ ] `prefers-reduced-motion` is respected in both CSS and the `useFrame` loop.

## Concrete Damped Camera & Exploded-View Hook
```ts
useFrame((state, delta) => {
  const dt = Math.min(delta, 0.05);
  currentExplode.current = THREE.MathUtils.damp(
    currentExplode.current,
    targetExplode,
    4.5,
    dt
  );
  state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetCam.x, 4.2, dt);
  state.camera.lookAt(currentLookAt.current);
});
```

## Deslopify & Quality Guardrails
- Never use competing animation controllers on the same camera or mesh.
- Always provide a resilient fallback when WebGL is disabled or unavailable.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
