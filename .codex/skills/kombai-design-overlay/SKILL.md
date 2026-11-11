---
name: kombai-design-overlay
description: Figma-to-code AI translation and pixel-accurate Design Overlay comparator. Bridges Figma Auto Layout, component trees, and tokens into clean React/Tailwind code, paired with a real-time opacity slider and split-screen overlay QA comparator to verify zero visual regressions.
---

# Kombai & Design Overlay — Precision Figma-to-Code & Visual QA Skill

## Overview
`kombai-design-overlay` combines:
1. **Kombai AI Design Engineering**: Parses Figma vectors, Auto Layout frames, design tokens, and component variants directly into production-grade React + Tailwind components without messy boilerplate.
2. **Interactive Design Overlay Comparator**: An in-browser QA utility providing semi-transparent layer overlay (`0%–100%` opacity), split-screen slider wipes, and structural hairline guides to visually benchmark live code against original Figma/plate designs.

## Triggers
- "Kombai", "design overlay", "compare Figma to code", "visual diff overlay", "pixel-perfect QA", "pixelay", "check alignment against design".

## The Kombai + Overlay Protocol
1. **Context Graph Analysis**: Kombai reads your existing repository components (`Button`, `Card`, `Nav`, `Dialog`) and design tokens so generated code reuses existing primitives instead of creating redundant classes.
2. **Auto Layout to Semantic HTML**: Translates Figma frames into clean Flexbox/Grid CSS landmarks with accessible `:focus-visible` and hover feedback.
3. **Design Overlay Verification**:
   - **Opacity Slider (0–100%)**: Overlay the reference Figma frame directly atop the rendered HTML DOM.
   - **Split-Screen Wipe**: Drag a vertical divider to inspect alignment of typography, margins, and border radii.
   - **Difference Mode (`mix-blend-mode: difference`)**: Inverts matching pixels; non-matching pixels glow to highlight exact padding/font mismatches.

## Concrete Implementation Pattern
```tsx
export function KombaiOverlay({ referenceImage, opacity, blendMode }: { referenceImage: string; opacity: number; blendMode: string }) {
  return (
    <div
      className="kombai-overlay-layer"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `url(${referenceImage})`,
        backgroundSize: 'cover',
        opacity: opacity / 100,
        mixBlendMode: blendMode as any,
        zIndex: 50,
      }}
    />
  );
}
```

## Guidelines
- Never leave discrepancies in headline font weight or button padding.
- Use `mix-blend-mode: difference` during final QA to verify `< 2px` alignment drift.
