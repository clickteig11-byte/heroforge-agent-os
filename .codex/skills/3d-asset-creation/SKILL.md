---
name: 3d-asset-creation
description: Create intricate, multi-part, articulated 3D models and procedural assemblies entirely in code using Three.js parametric geometry, Lathe/Extrude/Tube geometries, instanced meshes, and custom GLSL shaders — requiring ZERO external desktop applications (no Blender or Spline app needed).
---

# 3D Asset Creation — App-Free Procedural & Parametric 3D Engineering

## Overview
Creates museum-grade, articulated 3D hero artifacts directly in TypeScript + Three.js + React Three Fiber without requiring external desktop software like Blender or Spline. Supports procedural mechanical assemblies, horological/aerospace/optical multi-ring rigs, custom GLSL shaders, and optional GLTF/DRACO loading when external `.glb` files are provided.

## Triggers
- Building the 3D centerpiece for Website A.
- Creating 3D components in environments where standalone desktop apps (Blender / Spline) are excluded by user preference.

## Procedure

### Step 1: Multi-Part Articulated Assembly Rule
Never render a single primitive sphere or box and call it a 3D model. Every procedural 3D centerpiece must be a **multi-part hierarchical assembly** (`<group>` hierarchy with at least 8–15 distinct articulated sub-components) that can rotate, gimbal, expand into an **Exploded View**, and respond to scroll chapters:
1. **Primary Structural Chassis / Monocoque**: Built from `CylinderGeometry`, `TorusGeometry`, `LatheGeometry`, or `ExtrudeGeometry` with beveled chamfers (`bevelEnabled: true, bevelSegments: 6`).
2. **Concentric Gimbal / Escapement Rings**: Multiple precision-machined rings (`TorusGeometry` with high radial/tubular segments + instanced index notches around the circumference).
3. **Optical Core / Refracting Lens Element**: Central crystal, prism, or energy core using `IcosahedronGeometry` / `OctahedronGeometry` / `SphereGeometry` with `MeshPhysicalMaterial` (`transmission`, `ior`, `thickness`, `iridescence`).
4. **Instanced Precision Fasteners, Fins, or Stator Blades**: Use `<Instances>` / `InstancedMesh` to place 24–64 radial turbine blades, cooling fins, or calibration ticks around the core with a single draw call.
5. **Volumetric Telemetry / Orbital Field**: Subtle floating calibration rings, dashed orbital trajectories (`<Line>` from `@react-three/drei`), and instanced micro-particles (`<Sparkles>` or custom `Points` buffer geometry).

### Step 2: Exploded-View & Chapter Kinematics
Design each sub-assembly with a `basePosition`, `explodedOffset`, and `chapterTransform` so that:
- Scrolling from Chapter 1 -> Chapter 4 smoothly separates the outer housing, reveals the internal core/stator assembly, and focuses the camera on specific engineering subsystems.
- Clicking the **"Explode Assembly"** or **"Subsystem Focus"** buttons in the UI triggers an immediate, tactile mechanical separation.

### Step 3: Optional GLTF/DRACO Pipeline (Zero-App Fallback Ready)
- Provide a clean hook/utility for loading `.glb` / `.gltf` files via Drei's `useGLTF` when users drop custom models into `public/models/`, while defaulting 100% to the self-contained procedural TypeScript assembly so `npm install && npm run dev` works out-of-the-box on any machine with zero external software.

## Expected Outputs
- Modular R3F procedural 3D assembly components (`src/components/model/*.tsx`) with articulated sub-groups and exploded-view kinematics.

## Verification Criteria
- [ ] 3D centerpiece comprises at least 8 distinct articulated sub-meshes/groups with varied materials.
- [ ] Zero dependency on Blender, Spline, or external network model fetches that could 404.
- [ ] Sub-assemblies animate smoothly during scroll and interactive exploded-view toggles.

## Concrete Procedural Texture & Multi-Part Hierarchy Pattern
```ts
// Generate zero-network procedural Widmanstatten / brushed metal CanvasTexture in memory
const texture = useMemo(() => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  // ... draw procedural crystalline/anisotropic grain ...
  return new THREE.CanvasTexture(canvas);
}, []);
```

## App-Free Guarantee
- 100% of 3D geometry, materials, and studio environments are constructed in TypeScript + Three.js + React Three Fiber + Drei with zero dependency on external Blender or Spline desktop applications.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
