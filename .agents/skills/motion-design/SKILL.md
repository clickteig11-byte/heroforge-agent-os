---
name: motion-design
description: Craft refined interface animations, staggered editorial reveals, and state transitions using Motion for React and compositor-friendly CSS transitions while honoring prefers-reduced-motion.
---

# Motion Design — Interface Choreography & Compositor Performance

## Overview
Defines the physics, easing curves, stagger timings, and reduced-motion adaptations for UI transitions across Website A, Website B, and the HeroForge Agent OS Dashboard.

## Triggers
- Animating hero entrances, section reveals, interactive tabs, modals, and gallery filters.
- Auditing animation smoothness and `prefers-reduced-motion` compliance.

## Procedure

### Step 1: Compositor-Only Property Discipline
Following `modern-web-guidance` (`motion`), restrict continuous animations to compositor-friendly properties:
- `transform` (`translate3d`, `scale`, `rotate`)
- `opacity`
- `clip-path` (for editorial image and headline curtain reveals)
- **Never** animate `top`, `left`, `width`, `height`, or `margin` on scroll or continuous loops, as they trigger expensive layout recalculations.

### Step 2: Bespoke Easing & Spring Vocabulary
Replace default linear or bounce curves with architectural easing:
- **Editorial Expo Out**: `[0.16, 1, 0.3, 1]` (`duration: 0.75s`) for headline and plate reveals.
- **Precision Quart In-Out**: `[0.76, 0, 0.24, 1]` (`duration: 0.55s`) for layout drawer and filter transitions.
- **Tactile Mechanical Spring**: `{ type: 'spring', stiffness: 320, damping: 28, mass: 0.8 }` for interactive pills, active tab indicators (`layoutId`), and button feedback.

### Step 3: Mandatory Reduced-Motion Handling
Following `modern-web-guidance` (`motion` & `accessibility`):
- **Never** globally nuke all transitions with `* { animation-duration: 0.01ms !important }`.
- Instead, scope `@media (prefers-reduced-motion: reduce)` per rule to replace large spatial translations (`translateY(40px)`) with gentle opacity crossfades, and check `useReducedMotion()` in Motion components.

## Expected Outputs
- Reusable motion variants and reduced-motion-safe animation primitives across all three React apps.

## Verification Criteria
- [ ] Animations run at 60fps on the compositor thread (`transform` and `opacity`).
- [ ] Zero flashing effects exceeding 3 flashes per second (`modern-web-guidance` `motion` safety rule).
- [ ] `@media (prefers-reduced-motion: reduce)` is implemented cleanly in CSS and JS.

## Concrete Reduced-Motion & Compositor Pattern
```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .animated-surface {
    transition: none !important;
    animation: none !important;
  }
}
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
