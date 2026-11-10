---
name: hyperframes-motion-graphics
description: Engineer deterministic 60fps HTML/CSS/GSAP/Canvas motion graphics, kinetic typography, beat-locked UI reveals, and 60-second X/Twitter launch videos (/brag + Hyperframes workflow) directly from live project source code and screenshots.
---

# Hyperframes Motion-Graphics & X-Post Launch Video Studio

## Overview
`hyperframes-motion-graphics` turns live web applications, design systems, and multi-site portfolios into cinema-grade, deterministic 60fps motion-graphics videos for X (Twitter), product launches, and `/brag` showcases.

## Triggers
- User invokes `/brag`, asks for a launch video, X post video, motion graphics reel, or Hyperframes composition.
- Packaging a completed HeroForge Agent OS run into a shareable 60-second showcase video.

---

## Core Architecture: Deterministic Frame-Accurate HTML5 Canvas + GSAP Timeline
Every Hyperframes motion-graphics composition must support both:
1. **Interactive Live Browser Playback (`60fps` real-time preview with timeline scrubber, play/pause, and scene chapter pills)**.
2. **Deterministic Headless Frame Capture -> `ffmpeg` H.264 `.mp4` Export (`1920×1080`, `yuv420p`, `frame 0` poster baked)**.

### The 60-Second (1-Minute) X-Post Storyboard Structure
| Act | Time Window | Scene Focus | Motion & Kinetic Typography Mechanics |
| :--- | :--- | :--- | :--- |
| **Act I: The Hook** | `00.0s – 06.0s` | Problem vs. Craft | High-contrast kinetic typography: *"Stop shipping dark-mode AI slop."* Hard cut on beat to Chalkboard Slate Agent OS (`#14171A` + `#58A6FF`). |
| **Act II: Agent OS Reveal** | `06.0s – 16.0s` | HeroForge Agent OS | 3D perspective tilt reveal of the ChatGPT-style Pill Bar Workspace: `HeroForge`, `Obsidian Vault`, `Hermes Chat`, `Codex CLI`, `OpenDesign`. |
| **Act III: Hero Restraint Loop** | `16.0s – 28.0s` | Before (`B-`) -> After (`A+`) | Split-screen wipe showing how the Minimalist Hero Law strips clutter, fixes orphan headline wraps, and elevates Watch (`:4101`) & Architecture (`:4102`) heroes to `A+`. |
| **Act IV: 7 Flagship Sites** | `28.0s – 46.0s` | Rapid Showcase Reel | Beat-locked carousel through all **7 Flagship Sites** (`Aetherion`, `Kurokawa`, `Valkyr Orbital`, `Sora & Klang`, `Atelier Vespers`, `Veloce Morphos`, `Solaris Lensworks`) + 1-click Replication Prompts. |
| **Act V: Multi-CLI & Obsidian** | `46.0s – 54.0s` | Hermes + Codex + Vault | Live terminal dispatch (`agy`, `opencode`, `hermes`, `codex`) + interactive Obsidian Knowledge Graph node burst. |
| **Act VI: Poster & Outro** | `54.0s – 60.0s` | Final Lockup & URL | HeroForge V1 Slate & Stone emblem + live Vercel & GitHub (`clickteig11-byte`) callout. |

---

## Concrete Seek-Safe Animation Contract
```ts
// Every frame `t` (0.0 to 60.0s) is a pure function of time `renderFrame(ctx, t)`
export function renderHyperframe(ctx: CanvasRenderingContext2D, t: number, assets: LoadedAssets) {
  // Frame 0 (t === 0) renders the high-impact Hero Poster Frame for X/Twitter autoplay thumbnails
  if (t <= 0.04) {
    drawPosterFrame(ctx, assets);
    return;
  }
  // Smooth easeOutQuart helper
  const easeOut = (x: number) => 1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 4);
  // Render active scene based on timestamp `t`
}
```

## Verification Criteria
- [ ] Frame `0` is a dedicated, high-readability poster frame (`brag.jpg`) baked into `brag.mp4`.
- [ ] All claims, site names, and UI screenshots shown in the video are 100% grounded in the real project.
- [ ] Exported `.mp4` uses `-c:v libx264 -pix_fmt yuv420p -movflags +faststart` so it plays natively in X/Twitter, macOS QuickTime, and Chrome.

## Concrete Verification Command
```bash
ls -lh brag-output/brag.mp4 brag-output/brag.jpg brag-output/share-copy.txt
```

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
