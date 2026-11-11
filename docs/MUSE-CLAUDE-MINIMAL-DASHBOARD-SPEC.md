# HeroForge Agent OS — Ultra-Minimal High-Craft Dashboard Design Specification
**Inspired by ChatGPT, Claude, and Muse**

**Author**: Antigravity Architect  
**Date**: November 2026  
**Status**: Ready for Implementation  
**Target Codebase**: `heroforge-v1/apps/gallery` (Agent OS Workspace)

---

## 1. Executive Summary & Audit of Current Implementation

### Current State Audit (`apps/gallery/src/App.tsx` & `index.css`)
A forensic audit of the existing HeroForge Agent OS dashboard reveals significant visual and architectural debt:
1. **Dark-Mode Slop Default**: The application defaults to `#111317` (chalkboard black) with glowing `#58A6FF` (mineral light blue) borders and badges. This creates heavy contrast fatigue, reads as a generic dev dashboard, and violates the Daylight Light-Mode Standard.
2. **Tab Clutter & Cognitive Overload**: 8 persistent tabs (`heroforge`, `skyward-hub`, `obsidian`, `hermes-chat`, `codex-chat`, `opendesign`, `prompt-vault`, `hyperframes-brag`) compete simultaneously for attention.
3. **Pill-Button Ubiquity**: Every button, filter, chip, and badge is styled as a rounded pill (`border-radius: 9999px`), creating a restless, cluttered interface.
4. **Monolithic 1,700-Line Codebase**: All chat states, CLI bridges, canvas embeds, Kombai overlays, and Obsidian note viewers are crammed into a single monolithic `App.tsx` file.
5. **Cramped Spacing**: Padding is uniformly tight (8px–14px), lacking the generous white space, unhurried typography, and editorial calm of Claude and Muse.

---

## 2. The Muse-Claude-ChatGPT Design Paradigm

The refactored HeroForge OS adopts a tranquil, high-craft aesthetic combining:
- **Muse**: Tactile paper canvas, spatial calmness, warm parchment, and modular card nesting.
- **Claude**: Elegant editorial typography, spacious document-like artifact sidecar, and refined conversational cadence.
- **ChatGPT**: Distraction-free central stream, collapsible quiet sidebar, and focused command input.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ TOP BAR: Fixed 1px hairline border, whisper-quiet breadcrumbs, Cmd+K search, Status     │
├──────────────┬──────────────────────────────────────────┬──────────────────────────────┤
│ COLLAPSIBLE  │ MAIN WORKSPACE CANVAS                    │ EXTENSIBLE TOOL SIDECAR      │
│ SIDEBAR      │ (Warm Limestone #FAF9F5)                 │ (Modular Plug-in Panel)      │
│              │                                          │                              │
│ • Projects   │  • Unhurried Typography                  │  • Active Tool:              │
│ • Showcases  │  • Generous 48px Padding                 │    - Codex CLI Runner        │
│ • Vault MOC  │  • Fluid Document Stream                 │    - Live Site Preview       │
│ • Tool Docks │  • Minimal Hero Preview                  │    - Obsidian Graph          │
│              │                                          │    - 3-Loop Reality Check    │
│              │  ┌────────────────────────────────────┐  │                              │
│              │  │ Quiet Floating Composer (Cmd+Enter)│  │                              │
│              │  └────────────────────────────────────┘  │                              │
└──────────────┴──────────────────────────────────────────┴──────────────────────────────┘
```

---

## 3. Design Tokens & Aesthetic System

### Color Palette (Natural Limestone & Mineral Pigments)
```css
:root {
  /* Warm Neutral Surfaces */
  --bg-canvas: #FAF9F5;       /* Warm Honed Limestone */
  --bg-sidebar: #F4F2EC;      /* Soft Raw Linen */
  --bg-surface: #FFFFFF;      /* Pure Parchment White */
  --bg-elevated: #F7F5EE;     /* Subtle Raised Card */
  --bg-subtle-hover: #EFECE3;  /* Quiet Hover Tone */
  
  /* Hairlines & Borders */
  --border-hairline: #E5E0D5; /* 1px Solid Natural Stone */
  --border-focus: #241812;    /* Dark Copper Focus Ring */

  /* Mineral Typography (WCAG AAA) */
  --ink-primary: #241812;     /* Dark Copper (15.2:1 contrast) */
  --ink-secondary: #4A443C;   /* Deep Umber (8.4:1 contrast) */
  --ink-muted: #7E776D;       /* Warm Sandstone (4.8:1 contrast) */

  /* Tactile Accents */
  --accent-copper: #B85D2A;   /* Viega Copper */
  --accent-brass: #99783D;    /* Patina Brass */
  --accent-sage: #5A7061;     /* Verified Pass Green */
  --accent-terracotta: #A84534;/* Warning/Fail Red */

  /* Elevation Shadows (Daylight Chiaroscuro) */
  --shadow-subtle: 0 1px 2px rgba(36, 24, 18, 0.04);
  --shadow-float: 0 8px 24px -4px rgba(36, 24, 18, 0.06),
                  0 2px 6px rgba(36, 24, 18, 0.02);
}
```

### Typography Hierarchy
- **Serif Headings**: *Instrument Serif* or *Cormorant Garamond* (upright, 400/500 weight, letter-spacing -0.01em).
- **Body & Controls**: *Geist Sans* or *Plus Jakarta Sans* (400 regular, 500 medium, line-height 1.6).
- **Technical Specs & Formulas**: *JetBrains Mono* (12px–13px, tracking -0.02em).

---

## 4. Extensible Tool Plug-in Architecture

Instead of hardcoded UI tabs, HeroForge OS implements an **open plug-in registry**:

```typescript
// src/plugins/types.ts
export type PluginLocation = 'main' | 'sidecar' | 'modal' | 'background';

export interface PluginContext {
  activeSite: FlagshipSiteSpec;
  activeNoteId: string;
  theme: 'light' | 'dark';
  executeCli: (cli: string, cmd: string) => Promise<string>;
  openSidecar: (pluginId: string) => void;
  closeSidecar: () => void;
}

export interface DashboardPlugin {
  id: string;
  name: string;
  category: 'showcase' | 'knowledge' | 'intelligence' | 'qa' | 'motion';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  defaultLocation: PluginLocation;
  shortcut?: string; // e.g. "Mod+Shift+R"
  component: React.ComponentType<{ context: PluginContext }>;
}
```

### Registered Core Plugins

| Plugin ID | Name | Category | Primary Function |
| :--- | :--- | :--- | :--- |
| `showcase-curator` | Flagship Gallery | Showcase | Visual catalog of all 7 luxury websites with instant viewport switching |
| `reality-check-runner` | 3-Loop Reality Auditor | QA | Automated Codex CLI (`gpt-6-luna`) + Playwright multi-viewport inspector |
| `obsidian-knowledge` | Obsidian Vault Syncer | Knowledge | Markdown reader, backlink graph, and MOC explorer linked to local vault |
| `agent-loop-console` | Hermes & Codex Console | Intelligence | Multi-turn prompt execution, agent logs, and code patch applicator |
| `hydronics-calculator` | Fluid Mechanics Simulator | Engineering | Interactive $V = 0.4085 \times \text{GPM} / d^2$ calculator with Type L lookup |
| `hyperframes-motion` | 60s Video Teaser Lab | Motion | Headless Remotion / Canvas 60fps frame scrubber and export bridge |

---

## 5. Screen Layout & Component Breakdown

### 1. Left Quiet Navigation Rail (Collapsible)
- **Width**: 240px expanded / 60px collapsed.
- **Top**: Clean serif logomark (`HeroForge`) + subtle project switcher.
- **Sections**:
  - *Showcase Sites* (7 items, single-line text, subtle active indicator).
  - *Knowledge Nodes* (Obsidian MOCs, recent memories).
  - *Tools & Plugins* (Icons with quiet tooltips, draggable to reorder).
- **Bottom**: User profile (`clickteig11-byte`), connection status, and light/dark toggle.

### 2. Main Center Canvas (Warm Document Stream)
- Maximum reading width: 880px centered in viewport with vast margins.
- **Header**: Quiet breadcrumb (`HeroForge / Showcases / Vane Hydronics`) + 1-click external open link.
- **Interactive Stage**: High-resolution interactive site preview, fluidly toggling between:
  - *Architectural Canvas* (interactive Three.js/WebGL scene)
  - *Design Specification Document* (typography scale, material swatches)
  - *P&ID Fluid Mechanics Schematic*
- **Floating Input Bar (Claude-style)**:
  - Fixed at bottom with 32px clearance.
  - Multi-line textarea that expands gracefully up to 160px.
  - Quick action chips for registered plugins (`/reality-check`, `/codex-exec`, `/playwright-qa`).

### 3. Right Extensible Sidecar (Drawer or Split)
- **Width**: 440px to 600px resizable.
- Displays the active plugin context without obscuring the main document stream.
- Supports side-by-side split comparison (e.g. Code vs Render, or Reality Check Log vs Live View).

---

## 6. Migration & Refactoring Roadmap

```
  Phase 1: Token & Shell Extraction (Week 1)
  ├── Extract CSS tokens into theme system (--bg-canvas: #FAF9F5)
  ├── Build modular 3-pane layout shell (Sidebar, MainStream, Sidecar)
  └── Implement Command Palette (Cmd+K)
  
  Phase 2: Plugin System & Component Decoupling (Week 2)
  ├── Define DashboardPlugin registry interface
  ├── Break 1,700-line App.tsx into individual plugin components:
  │   ├── plugins/showcase/ShowcasePlugin.tsx
  │   ├── plugins/obsidian/ObsidianPlugin.tsx
  │   ├── plugins/reality-check/RealityCheckPlugin.tsx
  │   └── plugins/cli-console/CliConsolePlugin.tsx
  
  Phase 3: Daylight Mode Polish & Playwright Verification (Week 3)
  ├── Enforce WCAG AAA contrast across all plugin cards
  ├── Replace all rounded pillbars with 1px hairline top bars
  └── Verify with Playwright test suite across 1440px, 768px, 390px
```
