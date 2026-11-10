---
name: camera-choreography
description: Design continuous, cinema-grade 3D camera trajectories, focal-length shifts, and damped lookAt targets synchronized with scroll progress and interactive view presets.
---

# Camera Choreography — Continuous 3D Cinematography

## Overview
Orchestrates the virtual camera in React Three Fiber like a physical motion-control cinema rig (e.g., Bolt High-Speed Cinebot). Ensures smooth, continuous transitions between macro engineering close-ups, orbital wide shots, and orthographic-style blueprint inspections.

## Triggers
- Programming camera movement in Website A.
- Synchronizing 3D camera keyframes with GSAP `ScrollTrigger` chapters.

## Procedure

### Step 1: Keyframe Spline & LookAt Architecture
Define explicit camera keyframes corresponding to each narrative scroll section:
- **Chapter 0 (Hero Wide — `progress: 0.00`)**: Slightly low-angle monumental framing (`pos: [0, 0.3, 5.8]`, `lookAt: [0, 0, 0]`, `fov: 38`) placing the 3D artifact cleanly in the right/center focal zone while balancing hero typography.
- **Chapter 1 (Orbital Sweep — `progress: 0.28`)**: Sweeping dolly-in to `45°` oblique angle (`pos: [3.4, 1.4, 3.8]`, `lookAt: [0, 0.1, 0]`, `fov: 34`) inspecting the outer gimbal housing and stator blades.
- **Chapter 2 (Macro Core Inspection — `progress: 0.56`)**: Extreme close-up (`pos: [-2.6, -0.8, 2.9]`, `lookAt: [0, 0, 0]`, `fov: 30`) as the assembly explodes outward to reveal the refractive core and internal kinematics.
- **Chapter 3 (Zenith Blueprint Elevation — `progress: 0.82`)**: High-elevation architectural top-down angle (`pos: [0.2, 4.8, 2.2]`, `lookAt: [0, 0, 0]`, `fov: 36`) aligning the concentric rings with the technical specification matrix.
- **Chapter 4 (Final Horizon Lock — `progress: 1.00`)**: Symmetrical heroic lockup (`pos: [0, 0.0, 4.6]`, `lookAt: [0, 0, 0]`, `fov: 35`) for interactive configuration and reservation.

### Step 2: Frame-Rate-Independent Damping (`THREE.MathUtils.damp`)
Inside `useFrame((state, delta) => ...)`:
- Compute target camera position and target `lookAt` vector by interpolating smoothly between the active chapter keyframes using cubic Hermite / smoothstep interpolation (`THREE.MathUtils.smoothstep`).
- Apply `THREE.MathUtils.damp(current, target, lambda, delta)` (`lambda = 4.5`) so rapid wheel jumps or trackpad flicks resolve into fluid cinematic motion without jitter.
- Layer subtle pointer parallax (`state.pointer.x * 0.25`, `state.pointer.y * 0.18`) when reduced motion is off.

## Expected Outputs
- Deterministic `<CameraRig />` component in Website A supporting both scroll-driven scrubbing and manual camera preset buttons.

## Verification Criteria
- [ ] Scrolling forward and backward produces 100% repeatable, reversible camera positions.
- [ ] Stopping at any scroll position holds the intended framing with zero drift or controller conflict.

## Concrete Multi-Chapter Camera Spline Table
| Chapter | Scroll Range | Desktop Camera `[x, y, z]` | Mobile Camera `[x, y, z]` | Narrative Focus |
| :--- | :--- | :--- | :--- | :--- |
| **01** | `0.00 – 0.25` | `[0.0, 0.15, 5.35]` | `[0.0, 0.15, 6.20]` | Sovereign Hero Lockup |
| **02** | `0.25 – 0.52` | `[1.8, 0.85, 4.40]` | `[0.0, 0.30, 5.60]` | Triaxial Gimbal Orbit |
| **03** | `0.52 – 0.78` | `[-2.1, 0.45, 3.85]` | `[0.0, 0.45, 5.40]` | Axial Exploded Dissection |
| **04–05** | `0.78 – 1.00` | `[0.0, 0.10, 5.10]` | `[0.0, 0.55, 5.80]` | Metallurgy & Allocation Vault |


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
