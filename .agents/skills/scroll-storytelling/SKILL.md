---
name: scroll-storytelling
description: Engineer scroll-controlled narrative experiences using GSAP ScrollTrigger and CSS scroll-driven progress indicators with reversible scrubbing and clean lifecycle management.
---

# Scroll Storytelling — GSAP ScrollTrigger & Narrative Pacing

## Overview
Transforms vertical page scrolling into a choreographed multi-chapter narrative where 3D camera states, typographic reveals, telemetry counters, and progress bars advance and reverse deterministically.

## Triggers
- Implementing scroll-linked timelines in Website A and Website B.
- Building chapter progress indicators and pinned storytelling sequences.

## Procedure

### Step 1: GSAP + React Lifecycle Hygiene
- Always register `ScrollTrigger` once (`gsap.registerPlugin(ScrollTrigger)`).
- Scope all GSAP animations inside `useEffect` or `gsap.context(() => { ... }, containerRef)` and call `ctx.revert()` on cleanup so React StrictMode double-invocation never duplicates pins or scroll triggers.

### Step 2: Bidirectional Scrubbing Contract
- Use `scrub: true` or `scrub: 0.8` on narrative timelines so:
  1. **Scrolling forward** advances the timeline proportionally.
  2. **Scrolling backward** reverses the exact timeline smoothly.
  3. **Stopping mid-scroll** holds the exact interpolated state without snapping or resetting.
- Update a normalized progress ref (`0.00 -> 1.00`) and active chapter index (`01` through `05`) via `ScrollTrigger.create({ onUpdate: (self) => ... })`.

### Step 3: Avoiding Controller Collisions
- Never animate the same CSS property (`transform` / `opacity`) on the same DOM element with both GSAP `ScrollTrigger` and Motion (`<motion.div>`) simultaneously.
  - **Pattern**: Apply GSAP `ScrollTrigger` to outer section/chapter containers or the 3D scene state ref, and use Motion (`framer-motion` / `motion/react`) for inner component mount transitions, tab switches, and hover/tap microinteractions.

## Expected Outputs
- Scroll-choreographed chapter architecture with live HUD scroll progress readout (`00%` – `100%`) and quick-jump chapter navigation buttons.

## Verification Criteria
- [ ] Programmatic scroll in Playwright (`window.scrollTo(0, y)`) deterministically updates chapter state, progress telemetry, and visual transforms.
- [ ] Reversing scroll back to `y = 0` restores the exact initial hero state.

## Concrete Bidirectional GSAP ScrollTrigger Pattern
```ts
useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        telemetryRef.current.scrollProgress = Number(self.progress.toFixed(4));
      }
    });
  });
  return () => ctx.revert();
}, []);
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
