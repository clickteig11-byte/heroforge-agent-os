# 03 — Consolidated 44-Skill Architecture & 2026 AI Design Workflow

Links: [[01-HeroForge-Master-Overview]] | [[02-Minimalist-Hero-Design-Law]] | [[04-7-Flagship-Websites-and-Prompts]] | [[05-Hyperframes-Motion-Graphics-Engine]]

## The 2026 AI Design Workflow & Real-Repo Skill Audit

Every third-party skill in HeroForge V1 has been audited and cloned directly from its real upstream GitHub repository:

1. **`hallmark`** (`https://github.com/Nutlope/hallmark` · `7e213cb6feb4ef82733bd66a0600b2e54ca0994c`) — Together AI / Nutlope's 16-rule Floor, 50 material themes (`theme.mjs`), and `sloplint.mjs`.
2. **`design-taste-frontend`** (`https://github.com/Leonxlnx/taste-skill` · `f6b76575f949707b4e3c37cd86cb44b0b98643e8`) — TasteSkill 2.5.1 enforcing 9 house rules, one section per screen, equal edges, and `gate.mjs`.
3. **`impeccable`** (`https://github.com/pbakaus/impeccable` · `f2baa414a87d9acf1e21ccf776bfaec0262ad6df`) — Anti-slop critique & live remediation across typography, color, spacing, and motion.
4. **`redesign-screen`** (`https://github.com/mobbin/skills/tree/main/skills/redesign-screen` · `79124d92763f6e85107386227a96bbc40479710e`) — Mobbin's 6-point job walk & real shipped app precedent workflow.
5. **`pick-ui-library`** (`https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library` · `715c1807e08c497cfd1dc4feb450a2a3300ef2a9`) — Emil Kowalski's curated UI library picker (`base-ui`, `cmdk`, `Sonner`, `motion`, `NumberFlow`, `Liveline`, `Virtuoso`, `zustand`).
6. **`emil-design-eng`** (`https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng` · `715c1807e08c497cfd1dc4feb450a2a3300ef2a9`) — Emil Kowalski's animation frequency decision table & custom `cubic-bezier(0.23, 1, 0.32, 1)` ease-out curves.
7. **`transitions-dev`** (`https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-dev` · `20d70c1262bf721c0300c2946cbe1fc7605a555c`) — 36 portable `t-*` CSS transitions with `prefers-reduced-motion` guards.
8. **`web-design-guidelines`** (`https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines` · `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`) — Official Vercel UI/UX & keyboard accessibility guidelines.
9. **`frontend-design` & `playwright-browser-testing`** (`https://github.com/anthropics/skills` · `2c5958ecac7cee2b583967a2c4981d0f4a75c579`) — Official Anthropic frontend design and Playwright browser verification skills.
10. **`claude-be-ambitious`** (`https://github.com/DannyMac180/skills/tree/main/be-ambitious` · `5b02caf97c72bdd9fd1a9933032942a8650a836c`) — Felix Rieseberg's 4-step "deeper, not bigger" prompt escalation.

## The 7 Fixes That Make AI UI Look Expensive (`eQ74n4huAcA`)
1. **Focal Point**: `>= 70%` unobstructed hero image/3D subject, 1 primary CTA, zero competing stat cards.
2. **Spacing**: One section per screen (`100dvh`), equal left/right edges, `overflow-x: clip`, `minmax(0, 1fr)` grid tracks.
3. **Typography**: Intentional 2-line balanced headline wraps (`0` orphan words), natural human nav labels, `tabular-nums`.
4. **Color**: Tokenized `:root` palettes; workspace light blue (`#58A6FF`) isolated strictly inside Agent OS (`:4100`).
5. **Real Content**: Authentic telemetry, real 3D/plate interactivity, zero invented metrics or fake testimonials.
6. **Details**: Exposed `1px` hairlines, concentric border radii, instant `:focus-visible`, native `<dialog>`.
7. **Motion**: Compositor-only `transform`/`opacity` with `cubic-bezier(0.23, 1, 0.32, 1)` and `prefers-reduced-motion`.
