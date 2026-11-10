# HeroForge V1 — Creative-Development & Reference Research Synthesis

## 1. Benchmark Sources Studied
Before inventing our 20 website concepts, we synthesized contemporary creative-development patterns across five premier curation platforms and open-source engineering ecosystems:

| Source / Ecosystem | Core Strengths Analyzed | Extracted Architectural Principles |
| :--- | :--- | :--- |
| **Awwwards (SOTD / SOTM)** | Choreographed WebGL storytelling, spatial audio/visual synesthesia, custom cursor/HUD telemetry, seamless scroll-scrubbed camera paths. | Single continuous `<Canvas>` stage behind semantic HTML scroll tracks; HUD perimeter framing that anchors 3D objects in editorial grids. |
| **Godly.website** | Tactile micro-interactions, kinetic typography, high-contrast dark slate & warm stone interfaces, bespoke interactive drawers and spec tables. | Exposed `1px` architectural hairlines (`rgba(255,255,255,0.08)`), tabular monospace indices (`01 // SPEC`), and spring-physics pill switchers. |
| **SiteInspire & Land-book** | Swiss editorial restraint, asymmetric column proportions (`5:7` and `8:4`), monumental serif/grotesk pairings, generous negative space. | Asymmetric sticky narrative sections where a pinned left thesis pairs with a scrolling right gallery of varying aspect ratios (`4:5`, `16:10`, `1:1`). |
| **Codrops (Tympanus)** | Custom GLSL shaders, procedural Three.js geometries, scroll-driven clip-path reveals, lens/loupe image inspection interactions. | Frame-rate-independent damping (`THREE.MathUtils.damp`) inside `useFrame`, procedural `CanvasTexture` brush/noise maps, and `clip-path` curtain reveals. |
| **Modern Web Platform (`modern-web-guidance`)** | Compositor-safe motion, fluid `clamp()` typography, `@container` queries, dynamic viewport units (`100dvh`), native `<dialog>` top-layer modals. | Zero-CLS media reservation (`width`/`height`/`aspect-ratio`), `fetchpriority="high"` on LCP hero media, and native `<dialog>` with `overscroll-behavior: contain`. |

---

## 2. Five Core Engineering & Aesthetic Laws for HeroForge V1

### Law 1: Bold & Slate Stone Agent OS Architecture (The Studio Shell)
The HeroForge V1 Local Dashboard & Comparison Gallery operates as a custom **Agent OS Creative Command Deck** sculpted from cleaved slate stone (`#0B0E12`, `#12171E`, `#1A212B`), brushed titanium borders, mineral chalk typography, and molten forge-ember telemetry (`#F97316`). It tracks active sites in progress, exposes all 20 invented concepts, compares AI reference mockups side-by-side against real Playwright browser captures, and launches new generation runs.

### Law 2: Single-Authority Animation Orchestration
Competing animation controllers cause jitter. In HeroForge V1:
- **GSAP `ScrollTrigger`** owns macro scroll progress (`0.00 -> 1.00`) and chapter pin/scrub states.
- **React Three Fiber `useFrame`** reads the normalized scroll ref and applies `THREE.MathUtils.damp` to interpolate camera position, `lookAt` vectors, and exploded-view mechanical offsets.
- **Motion for React (`motion/react`)** owns discrete UI state transitions, tab indicators (`layoutId`), hover feedback, and staggered card entrances.

### Law 3: App-Free Procedural 3D Craft (Zero Blender/Spline Dependency)
Per user architecture directives, HeroForge V1 requires **zero external desktop apps** (no Blender or Spline installation needed). Website A's 3D centerpiece is engineered in pure TypeScript + Three.js + React Three Fiber as a **14-part articulated mechanical assembly** with custom procedural anisotropic metal textures, refractive sapphire crystal (`MeshPhysicalMaterial` transmission + iridescence), instanced gear/stator teeth, and procedural studio `<Lightformer>` reflections.

### Law 4: Anti-Slop Editorial Authenticity
Every section must justify its existence with domain-specific telemetry, interactive inspection tools (exploded subsystem toggles, architectural blueprint comparators, material sample switchers), and authentic technical specifications. Generic 3-column icon grids and purple SaaS gradients are strictly banned.

### Law 5: Empirical Visual QA & Multi-Pass Refinement
No website is complete when the first build compiles. Every site is rendered in real headless Chromium via Playwright at Desktop (`1440×900`), Tablet (`768×1024`), and Mobile (`390×844`), compared directly against the generated AI reference mockups, critiqued on 10 visual/technical axes, and refined through multiple code passes.
