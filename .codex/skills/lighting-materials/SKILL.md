---
name: lighting-materials
description: Craft photorealistic and stylized physically based materials (PBR) and cinematic three-point + rim lighting rigs in Three.js and React Three Fiber.
---

# Lighting & Materials — Physically Based Shading & Studio Gaffing

## Overview
Elevates WebGL scenes from flat, plastic-looking primitives to luxury industrial artifacts through physically based rendering (`MeshPhysicalMaterial`), procedural roughness/normal texturing, and cinematographic lighting ratios.

## Triggers
- Configuring materials and lights for Website A's 3D scene.
- Refining specular highlights, reflections, or contrast during Visual QA.

## Procedure

### Step 1: Curated PBR Material Palette
Define reusable material presets in Three.js / R3F:
1. **Brushed Anodized Titanium / Slate Metal**:
   - `metalness: 0.92`, `roughness: 0.24`, `clearcoat: 0.35`, `clearcoatRoughness: 0.2`, `envMapIntensity: 1.4`.
2. **Cleaved Obsidian / Carbon Composite**:
   - Deep charcoal base (`#0d1117`), `metalness: 0.65`, `roughness: 0.38`, `clearcoat: 0.6`, subtle procedural canvas bump/roughness map generated at runtime via HTML5 `<canvas>` (`THREE.CanvasTexture`) so zero external texture files are needed.
3. **Optical Borosilicate / Sapphire Crystal**:
   - `MeshPhysicalMaterial` with `transmission: 0.92`, `opacity: 1`, `transparent: true`, `ior: 1.52` (or `1.77` for sapphire), `thickness: 1.8`, `roughness: 0.06`, `iridescence: 0.45`, `iridescenceIOR: 1.3`.
4. **Emissive Telemetry Accents**:
   - High-precision emissive rings/nodes (`emissive: new THREE.Color('#f97316')` or `#38bdf8`, `emissiveIntensity: 2.2`) that cast localized glow and react to user hover or active subsystem state.

### Step 2: Cinematographic Four-Light Studio Rig
Never rely on a single flat `ambientLight`. Construct a deliberate gaffer rig:
1. **Key Light (`SpotLight` / `DirectionalLight`)**: Positioned at `45°` azimuth / `35°` elevation with warm-neutral temperature (`#fff7ed`), `intensity: 3.5`, casting crisp specular highlights across machined chamfers.
2. **Cool Fill Light (`DirectionalLight` / `PointLight`)**: Opposite azimuth (`-135°`) with slate-blue tint (`#38bdf8` or `#94a3b8`), `intensity: 1.2`, lifting shadow detail without flattening contrast.
3. **Back / Rim Kicker Light (`SpotLight`)**: Positioned behind the artifact (`z < -4`) aimed toward camera to carve a razor-sharp silhouette edge against the dark canvas.
4. **Procedural Environment Map (`<Environment>` / `<Lightformer>`)**: Use Drei's `<Environment resolution={256}>` with custom `<Lightformer>` strips (overhead softbox + side vertical specular bars) so metallic and glass surfaces reflect studio softboxes purely procedurally (no external HDR network fetch required!).

## Expected Outputs
- Procedural studio `<Environment>` + `<Lightformer>` rig and PBR material factory in `Website A`.

## Verification Criteria
- [ ] Metallic and refractive surfaces display crisp studio softbox reflections without requiring external `.hdr` file downloads.
- [ ] Clear separation between silhouette edge and background canvas across all camera angles.

## Concrete Procedural Studio Environment (Zero External HDR Fetch)
```tsx
<Environment resolution={256}>
  <group rotation={[-Math.PI / 3, 0, 1]}>
    <Lightformer form="rect" intensity={4} position={[0, 5, -9]} scale={[10, 10, 1]} />
    <Lightformer form="ring" color="#38bdf8" intensity={3} position={[-5, 2, -1]} scale={[6, 6, 1]} />
    <Lightformer form="rect" color="#f59e0b" intensity={2.5} position={[10, 1, 0]} scale={[12, 2, 1]} />
  </group>
</Environment>
```

## Deslopify & Quality Guardrails
- Never use flat unlit materials; pair warm key lighting with cool rim kickers for unmistakable depth.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
