---
name: be-ambitious
description: Escalate creative and engineering tasks along three axes of ambition — Altitude, Depth, and Range — based on Felix Rieseberg's "How to be more ambitious" methodology. Use before planning or building any HeroForge website, 3D scene, or architectural system to ensure world-class execution rather than boilerplate output.
---

# Claude "Be Ambitious" — Creative & Engineering Escalation Protocol

## Overview
Most AI prompts and default agent plans scale to the size of a routine micro-task, resulting in safe, generic, middle-of-the-bell-curve outputs. This skill forces the agent to aim **deeper, not merely bigger** by applying the four-question escalation protocol across **Altitude**, **Depth**, and **Range**.

## Triggers
- Starting a new website concept, brand creation, or architectural design inside HeroForge V1.
- Reviewing a draft design brief, hero layout, or 3D scene plan that feels conventional or predictable.
- Invoked explicitly via `/be-ambitious` or during Phase 1–3 of the HeroForge workflow.

## The Four Escalation Questions
Before executing any creative or engineering brief, answer these four questions explicitly:
1. **What would a top 0.1% creative director, graphic designer, and graphics programmer do here that wasn't explicitly asked for?**
   - Example: Instead of placing a static 3D mesh over a gradient, choreograph a continuous scroll-linked camera rig through multi-layered physically based materials with custom Fresnel rim lighting, synchronized typographic mask reveals, and tactile soundless haptics via micro-springs.
2. **What is the rawest material they would start from instead of pre-digested templates?**
   - Example: Start from primary industrial design materiality (anodized titanium, cleaved slate, optical borosilicate glass, horological escapement kinematics, brutalist concrete formwork) rather than generic "SaaS dark mode" UI kits.
3. **What specific instruments, mathematical models, and tools would they use?**
   - Example: Custom GLSL shaders or PBR `MeshPhysicalMaterial` (`transmission`, `ior`, `clearcoat`, `iridescence`, `roughnessMap`), GSAP `ScrollTrigger` scrubbed timelines (`scrub: 1.2`) with deterministic progress normalization, fluid `clamp()` typographic scales, and Playwright multi-viewport pixel inspection.
4. **What independent outside check proves the result is genuinely exceptional?**
   - Example: Side-by-side Playwright screenshot comparison against high-craft generated art-direction reference mockups across Desktop (`1440×900`), Tablet (`768×1024`), and Mobile (`390×844`), zero console/WebGL errors, verified `prefers-reduced-motion` compliance, and a 90+ Design Critic rubric score.

## The Three Axes of Ambition

### 1. Altitude (The Goal Beyond the Literal Task)
- **Literal Task**: "Build a landing page for a brand."
- **Elevated Altitude**: Build a tactile digital artifact and interactive flagship showroom where every scroll increment, hover state, and typographic proportion communicates the brand's physical engineering and cultural authority.

### 2. Depth (The Craft & Engineering Standard)
- Reject placeholder copy ("Lorem ipsum", "Transform your workflow"). Write authentic, domain-accurate technical telemetry, architectural specifications, and editorial narratives.
- Reject uncoordinated animations. Separate layout orchestration (GSAP `ScrollTrigger`) from component micro-feedback (Motion springs) so controllers never fight over the same DOM node or Three.js `Object3D`.

### 3. Range (Cross-Disciplinary Synthesis)
- Bring four distinct lenses to every build:
  1. **Swiss Editorial Typographer** (grid tension, optical kerning, tabular numerals, hierarchy).
  2. **Cinematographer / Gaffer** (key-to-fill ratios, rim lighting, focal length compression, camera dolly curves).
  3. **Industrial Designer** (chamfers, surface roughness, parting lines, weight, material honesty).
  4. **Principal Frontend Performance Engineer** (compositor-only animations, instanced draws, CLS prevention, keyboard & screen-reader semantics).

## Expected Outputs
- An escalated **Ambitious Execution Charter** embedded in the project's creative brief or ideation rationale.
- Measurable upgrades to materiality, typography, choreography, and domain authenticity.

## Verification Criteria
- [ ] All four escalation questions are answered with concrete technical and aesthetic specifics.
- [ ] Zero generic SaaS clichés (no purple-to-blue gradients, no 3-column generic icon cards, no fake testimonials).
- [ ] Independent browser verification via Playwright confirms the ambitious elements render cleanly.


## Concrete Verification Command
```bash
node scripts/deslopify-audit.mjs && node scripts/run-visual-qa.mjs
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
