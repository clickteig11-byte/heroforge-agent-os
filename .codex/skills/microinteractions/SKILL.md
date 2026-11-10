---
name: microinteractions
description: Engineer tactile hover, focus-visible, active press, and state-change microinteractions across buttons, navigation links, spec selectors, and interactive cards.
---

# Microinteractions — Tactile Feedback & State Precision

## Overview
Microinteractions separate an ordinary template from an engineered instrument. Every interactive element must communicate affordance, state, and precision on pointer hover, keyboard focus, and activation.

## Triggers
- Styling buttons, links, tabs, drawers, and interactive telemetry controls.
- Auditing focus states and interactive polish during Visual QA.

## Procedure

### Step 1: Intentional Selector Hygiene
Following `modern-web-guidance` (`css`), prevent state overmatching:
- Always scope hover effects with `:not(:disabled)` and `@media (hover: hover)`:
  ```css
  button:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  ```
- Use `:has()` to elevate parent containers when child controls are focused or checked (e.g., `.spec-card:has(button:focus-visible)`), without nesting `:has()`.

### Step 2: Four-State Interactive Contract
Every `<button>`, `<a>`, and interactive control must define:
1. **Rest State**: Crisp hairline border (`1px solid var(--border-hairline)`), clear label + directional arrow or status indicator.
2. **Hover State (`:hover:not(:disabled)`)**: Specular border brightening, subtle directional icon shift (`translateX(3px)`), or background fill sweep.
3. **Keyboard Focus (`:focus-visible`)**: High-contrast `2px solid var(--accent-primary)` outline with `outline-offset: 3px`—never `outline: none` without a visible high-contrast replacement (`modern-web-guidance` `accessibility`).
4. **Active / Pressed State (`:active:not(:disabled)`)**: Instant tactile compression (`scale(0.985)`).

### Step 3: Native Dialog & Popover Feedback
- Use native `<dialog>` elements opened via `showModal()` (`modern-web-guidance` `dialog`) with `dialog:modal { overscroll-behavior: contain; }` and `dialog::backdrop { overflow: hidden; overscroll-behavior: contain; }` so interactive modals feel instantaneous, trap focus natively, and close cleanly on `Esc`.

## Expected Outputs
- Tactile button, tab, card, and modal microinteraction styles across all HeroForge apps.

## Verification Criteria
- [ ] Every `<button>` and `<a>` has a distinct `:hover:not(:disabled)` and `:focus-visible` state.
- [ ] Minimum touch target size of `44×44px` on mobile controls (`modern-web-guidance` `accessibility`).
- [ ] Native `<dialog>` modals open and close via both click controls and the `Esc` key.

## Concrete Native Dialog & Focus-Visible Pattern
```css
button:hover:not(:disabled) {
  transform: translateY(-1px);
}
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 3px;
}
dialog:modal {
  overscroll-behavior: contain;
}
dialog::backdrop {
  overflow: hidden;
  overscroll-behavior: contain;
}
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
