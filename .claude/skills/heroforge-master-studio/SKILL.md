---
name: heroforge-master-studio
description: Consolidated master creative and engineering skill for HeroForge V1. Unifies the 2026 AI Design Workflow, Griffin Wooldridge's 7 Expensive UI Fixes, the Hallmark v2.0 16-Rule Floor (Nutlope/hallmark), the 7 Real-Repo Designer Skills (taste-skill, impeccable, mobbin redesign-screen, pick-ui-library, emil-design-eng, transitions.dev, web-design-guidelines), Minimalist Hero Restraint, App-Free Three.js/R3F 3D, and Playwright Visual QA.
---

# HeroForge Master Studio — 2026 AI Design Workflow & Hallmark Doctrine

## Overview
`heroforge-master-studio` consolidates the entire **44-skill HeroForge V1 Studio** (`15` verified third-party open-source GitHub repositories + `29` HeroForge V1 studio skills) into one authoritative workflow.

It synthesizes:
1. **The 7 Fixes That Make AI UI Look Expensive** ([`eQ74n4huAcA`](https://www.youtube.com/watch?v=eQ74n4huAcA) — *Griffin Wooldridge*)
2. **The 8 Real-Repo Designer Skills Stack** ([`ia8xgSqqQ_0`](https://www.youtube.com/watch?v=ia8xgSqqQ_0&t=220s) + [`Nutlope/hallmark`](https://github.com/Nutlope/hallmark))
3. **The Complete 2026 AI Design Workflow** ([`7eCK9ioNpqU`](https://www.youtube.com/watch?v=7eCK9ioNpqU))
4. **The Minimalist Hero Restraint Law (`B / B− → A+` Upgrade Loop)**

## Triggers
- Building, redesigning, refining, or auditing any HeroForge showcase website or Agent OS interface.
- Running the end-to-end 2026 AI Design Workflow across Claude Code, Codex CLI, OpenCode, Hermes, or Google Antigravity.

---

## Part 1: Verified Real-Repo Designer Skills Stack
Every third-party skill in the studio is cloned and verified from its real upstream GitHub repository:

| Skill Name | Real Upstream GitHub Repository | Verified Commit SHA | Install Command | Primary Role in Workflow |
| :--- | :--- | :--- | :--- | :--- |
| **`hallmark`** | [`Nutlope/hallmark`](https://github.com/Nutlope/hallmark) | `7e213cb6feb4ef82733bd66a0600b2e54ca0994c` | `npx skills add nutlope/hallmark -g` | 16-rule Floor, 50 material themes (`theme.mjs`), hero-first build, `sloplint.mjs --render` |
| **`design-taste-frontend`** | [`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) | `f6b76575f949707b4e3c37cd86cb44b0b98643e8` | `npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend` | 9 house rules, one section per screen, equal edges, `gate.mjs` browser check |
| **`impeccable`** | [`pbakaus/impeccable`](https://github.com/pbakaus/impeccable) | `f2baa414a87d9acf1e21ccf776bfaec0262ad6df` | `npx impeccable install` | Anti-slop critique & live remediation across typography, color, spacing, and motion |
| **`redesign-screen`** | [`mobbin/skills`](https://github.com/mobbin/skills/tree/main/skills/redesign-screen) | `79124d92763f6e85107386227a96bbc40479710e` | `/plugin marketplace add mobbin/skills` | 8-step job-walk & real shipped product precedent from Mobbin |
| **`pick-ui-library`** | [`emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library) | `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` | `npx skills add https://github.com/emilkowalski/skills --skill pick-ui-library` | Opinionated library selection (`base-ui`, `cmdk`, `Sonner`, `motion`, `NumberFlow`, `Liveline`, `Virtuoso`, `zustand`) |
| **`emil-design-eng`** | [`emilkowalski/skills`](https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng) | `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` | `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng` | Animation decision matrix, custom `cubic-bezier(0.23, 1, 0.32, 1)` ease-out, invisible UI polish |
| **`transitions-dev`** | [`Jakubantalik/transitions.dev`](https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev) | `20d70c1262bf721c0300c2946cbe1fc7605a555c` | `npx skills add Jakubantalik/transitions.dev` | 36 drop-in `t-*` CSS transitions with motion tokens & `prefers-reduced-motion` |
| **`web-design-guidelines`** | [`vercel-labs/agent-skills`](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` | Vercel UI/UX, keyboard navigation, focus states, and accessibility compliance |
| **`frontend-design`** | [`anthropics/skills`](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | `2c5958ecac7cee2b583967a2c4981d0f4a75c579` | `/plugin install frontend-design@claude-plugins-official` | Official Anthropic frontend design skill |
| **`claude-be-ambitious`** | [`DannyMac180/skills`](https://github.com/DannyMac180/skills/tree/main/be-ambitious) | `5b02caf97c72bdd9fd1a9933032942a8650a836c` | `npx skills add DannyMac180/skills --skill be-ambitious` | Felix Rieseberg's 4-step "deeper, not bigger" expert prompt rewrite |

---

## Part 2: The 7 Fixes That Make AI UI Look Expensive (`eQ74n4huAcA`) + Hallmark Floor (`Nutlope/hallmark`)

Every page generated or refined by HeroForge V1 is audited against these **7 Expensive UI Fixes** and the **16-Rule Hallmark Floor**:

1. **Fix 1 — Unmistakable Focal Point (`heroforge-master-studio` + `hallmark` Rule 12 & 13)**:
   - Keep `>= 70%` of the hero image or 3D object unobstructed.
   - Maximum **5 elements** over the hero: (1) floating pill nav (`border-radius: 9999px`), (2) one small unboxed label, (3) one intentional 2-line headline (`<= 7–8 words`), (4) one short sentence (`<= 12–16 words`, `34ch–40ch`), and (5) **one single primary CTA button** (plus at most one quiet bottom-right caption/switcher).
   - Never place two competing buttons side-by-side or a 4-cell stat grid on top of the hero.
2. **Fix 2 — Deliberate Asymmetric Spacing (`design-taste-frontend` Rules 3 & 4 + `hallmark` Rule 14)**:
   - One section per screen (`100dvh` hero stage), equal left and right outer content edges, capped container measure at `1920px`, and `minmax(0, 1fr)` image-bearing grid tracks (`overflow-x: clip` on `html` and `body`).
3. **Fix 3 — Intentional Typography (`typography-director` + `hallmark` Rules 3, 9, 50)**:
   - Use explicit `<br />` + `text-wrap: balance` so headlines break into **2 deliberate lines** with **zero orphan words** on Desktop (`1440×900`) and Mobile (`390×844`).
   - Pair at most 2 primary font families (`Cormorant Garamond` display + `Plus Jakarta Sans` body) with `font-variant-numeric: tabular-nums` for numbers.
   - Never use developer-jargon nav labels (`"Practice Bento"`, `"Lithic Archive"`, `"Switch Plate"`). Use natural human words (`Movement`, `Craft`, `Projects`, `Studio`, `Materials`, `Specifications`, `Inquire`).
4. **Fix 4 — Material-Grounded Color Tokens (`hallmark` Rule 1 & 11)**:
   - Every color and font goes through `:root` CSS custom properties.
   - **Strict Workspace vs. Showcase Color Boundary**: Mineral Light Blue (`#58A6FF`) belongs **only** to the Chalkboard Slate Agent OS Workspace (`:4100`). Showcase websites (`:4101+`) use their own authentic physical material palettes (warm museum ivory `#FCFAF6`, champagne brass `#C5A478`, volcanic basalt `#141413`). Never use purple-to-blue gradients.
5. **Fix 5 — Real Content & Zero Invented Proof (`hallmark` Rule 8 + `redesign-screen`)**:
   - Show the real product, real procedural 3D calibre, or high-resolution text-free photography. Never invent fake customer counts, fake testimonials, or fake logo walls.
6. **Fix 6 — Invisible Craft Details (`emil-design-eng` + `web-design-guidelines`)**:
   - Exposed `1px` architectural hairlines, concentric border radii per nesting level, instant `:focus-visible` outlines, and `transform: scale(0.97)` active button feedback.
7. **Fix 7 — Purposeful Compositor Motion (`transitions-dev` + `emil-design-eng` + `hallmark` Rules 2 & 7)**:
   - Never `transition: all` and never animate `width`, `height`, `top`, or `left`.
   - Animate `transform` and `opacity` only using custom `cubic-bezier(0.23, 1, 0.32, 1)` (`--ease-out`) or `transitions-dev` `t-*` classes, with mandatory `@media (prefers-reduced-motion: reduce)` fallbacks.

---

## Part 3: The Complete 6-Stage 2026 AI Design Workflow (`7eCK9ioNpqU`)

```
[Stage 1: Research & Deeper Brief]  ──►  claude-be-ambitious + idea-generator (ChatGPT / Hermes)
               │
               ▼
[Stage 2: Real-Product Precedent]   ──►  mobbin/redesign-screen + deep-creative-research (Mobbin / Godly)
               │
               ▼
[Stage 3: Material Theme & Plates]  ──►  Nutlope/hallmark (theme.mjs deal) + image-generation (Codex fallback)
               │
               ▼
[Stage 4: Hero-First Build]         ──►  design-taste-frontend + cinematic-3d + transitions-dev + pick-ui-library
               │
               ▼
[Stage 5: 7-Fix & Sloplint QA]      ──►  impeccable + deslopify-audit.mjs + visual-qa (1440 / 768 / 390)
               │
               ▼
[Stage 6: 30fps /Brag & Ship]       ──►  hyperframes-motion-graphics (brag.mp4) + GitHub & Vercel (clickteig11-byte)
```

---

## Canonical Minimalist A+ Hero Pattern
```tsx
<header className="hero-fullbleed">
  <img src={heroImage} alt={heroAlt} className="hero-bg-image" fetchPriority="high" />
  <div className="hero-scrim" />
  <div className="hero-overlay-content">
    <div className="hero-copy-stack">
      <span className="hero-small-label">Calibre 01 · Geneva</span>
      <h1 className="hero-display-title">
        German silver, shaped<br />by <em>morning light</em>.
      </h1>
      <p className="hero-summary">
        Thirty-eight manual-wind chronographs finished and regulated by hand each year in our Rue du Rhône workshop.
      </p>
      <a href="#examination" className="pill-cta-btn">Explore the Movement</a>
    </div>
    <div className="hero-quiet-caption">312 Parts · 96h Reserve · Raw Maillechort</div>
  </div>
</header>
```

## Verification Criteria
- [ ] All 44 skills (`15` third-party real-repo skills + `29` HeroForge skills) pass `node scripts/audit-and-upgrade-skills.mjs` with `100/100`.
- [ ] Every third-party skill in `skills-manifest.json` has a verified GitHub URL and commit hash.
- [ ] Hero passes all 7 Expensive UI Fixes and the Hallmark Floor (`0` orphan words, `1` primary CTA, natural nav labels, `>= 70%` focal subject visibility).
- [ ] `node scripts/deslopify-audit.mjs` passes with `100/100` (`0` violations).

## Concrete Verification Command
```bash
node scripts/audit-and-upgrade-skills.mjs && node scripts/deslopify-audit.mjs && node scripts/verify-clean-install.mjs
```
