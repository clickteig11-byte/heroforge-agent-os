# HeroForge V1 — Autonomous Creative Website Studio (Agent OS Master Charter)

Welcome to **HeroForge V1**, a portable, cross-agent autonomous creative website studio engineered for **Google Antigravity**, **Claude Code**, and **OpenAI Codex**.

## 1. Studio Philosophy & The Three Axes of Ambition (`be-ambitious`)
Every website, 3D assembly, and editorial layout generated inside HeroForge V1 must operate along Felix Rieseberg's three axes of ambition:
1. **Altitude (Goal Beyond the Literal Task)**: Never build boilerplate marketing templates. Build tactile digital artifacts, interactive horological instruments, and architectural monographs where every scroll increment and material surface communicates physical engineering authority.
2. **Depth (Craft & Engineering Standard)**:
   - **Zero-Slop Copywriting**: Strictly reject generic AI buzzwords (`Revolutionize`, `Unleash`, `Seamless integration`, `Elevate your workflow`, `Lorem ipsum`). Write domain-authentic technical telemetry and physical specifications.
   - **Separated Animation Controllers**: Never let GSAP `ScrollTrigger` and Motion springs or Three.js `useFrame` fight over the same DOM node or `Object3D`.
3. **Range (Cross-Disciplinary Synthesis)**: Combine Swiss Editorial Typography, Cinematography/Gaffer Lighting, Industrial Design Materiality, and Principal Frontend Performance Engineering.

## 2. Mandatory Zero-Slop Enforcement (`deslopify`)
The `deslopify` skill is **always active**. Before and after building any site, run:
```bash
node scripts/deslopify-audit.mjs
```
- **Banned Colors**: Never use SaaS purple/indigo/violet gradients (`#6366f1`, `#8b5cf6`, `#a855f7`, `#ec4899`). Ground all palettes in real physical materials (Cleaved Slate Stone `#0B0E12`, Volcanic Basalt `#101214`, Brushed Grade-5 Titanium `#94A3B8`, Unfilled Travertine `#EAE4DC`, Horological Amber `#F59E0B`).
- **Required Typography**: Pair a monumental display face (`Syne` or `Cormorant Garamond`) with a clean humanist body (`Plus Jakarta Sans`) and a tabular monospace (`JetBrains Mono` / `IBM Plex Mono` with `font-variant-numeric: tabular-nums`).
- **Required Interactivity**: Zero dead `<a href="#">` links. Every button must mutate live state or open a native top-layer `<dialog>` modal.

## 3. App-Free Procedural 3D Guarantee (`3d-asset-creation`)
Standalone desktop 3D applications (**Blender**, **Spline**, **Cinema4D**) are **NOT required**.
All 3D geometry, multi-part mechanical hierarchies, procedural `CanvasTexture` grain maps, studio `Lightformer` environments, and damped camera splines are constructed **100% natively in TypeScript** using `three`, `@react-three/fiber`, and `@react-three/drei`.

## 4. The 10-Phase HeroForge V1 Autonomous Workflow
1. **Phase 1 — Skill Discovery & Audit (`audit-and-upgrade-skills.mjs`)**: Verify all 36 skills across `.agents/skills`, `.claude/skills`, and `.codex/skills`.
2. **Phase 2 — Autonomous Ideation (`idea-generator`)**: Generate and rank 20 original concepts in `data/ideas-catalog.json` across 6 quantitative rubric axes.
3. **Phase 3 — Reference Research & Creative Briefs (`deep-creative-research`, `creative-director`)**: Extract structural principles from Awwwards, Godly, Pinterest, and Mobbin into `briefs/`.
4. **Phase 4 — Multi-Concept Visual Reference Generation (`image-generation`)**: Generate 3 hero mockups + desktop (`16:9`) & mobile (`9:16`) reference plates per site in `references/` (or import via `scripts/import-references.mjs`).
5. **Phase 5 — Website A Build (`apps/website-a-3d` on Port `4101`)**: Build the flagship 3D WebGL experience (`AETHERION // CALIBRE ZERO`).
6. **Phase 6 — Website B Build (`apps/website-b-editorial` on Port `4102`)**: Build the flagship non-3D editorial monograph (`KUROKAWA & VANE`).
7. **Phase 7 — Agent OS Slate Stone Dashboard (`apps/gallery` on Port `4100`)**: Build the command center comparing mockups, references, live sites, and QA telemetry.
8. **Phase 8 — Multi-Viewport Playwright Visual QA (`visual-qa`, `scripts/run-visual-qa.mjs`)**: Capture real Chromium screenshots at `1440×900`, `768×1024`, and `390×844`, verify zero console errors, test scroll scrubbing & `<dialog>` modals, and execute multi-pass refinements.
9. **Phase 9 — Portable Packaging (`portable-workflow`)**: Sync multi-agent adapters, starter templates, and CLI utilities.
10. **Phase 10 — Clean-Install Verification (`scripts/verify-clean-install.mjs`)**: Run automated end-to-end verification and package `dist/heroforge-v1-portable.tar.gz`.

## 5. Installed Skill Adapters (36 Total Skills)
All 36 skills (9 verified third-party + 27 original HeroForge V1 skills) are mirrored in:
- **Google Antigravity**: `.agents/skills/<skill-name>/SKILL.md`
- **Claude Code**: `.claude/skills/<skill-name>/SKILL.md`
- **OpenAI Codex**: `.codex/skills/<skill-name>/SKILL.md`

See `skills-manifest.json` for full provenance, commit hashes, and descriptions.

## 6. Essential Commands
```bash
# 1. Install & verify all 36 skills and workspace packages
./scripts/install.sh

# 2. Launch all three Vite servers (4100 Gallery, 4101 Website A, 4102 Website B)
npm run dev:all

# 3. Run zero-slop static verification
node scripts/deslopify-audit.mjs

# 4. Run real Playwright multi-viewport Visual QA
npm run qa:visual

# 5. Scaffold a new website from any of the 20 catalog concepts
npm run generate:site -- --idea idea-05 --port 4103

# 6. Run full clean-install verification suite
npm run test:clean-install
```

## 7. Demo Sites Deployment & GitHub Publishing Policy
When deploying or publishing demo sites, prototypes, or catalog concepts:
- **GitHub Target**: Always initialize and push to a new public repository under the **`clickteig11-byte`** GitHub account:
  ```bash
  gh auth switch -u clickteig11-byte
  gh repo create clickteig11-byte/<repo-name> --public --source=. --remote=origin --push
  ```
- **Vercel CLI Deployment**: Always deploy with **Vercel CLI** under the active **`clickteig11-byte`** profile:
  ```bash
  vercel-key switch clickteig11-byte
  vercel --prod
  ```

