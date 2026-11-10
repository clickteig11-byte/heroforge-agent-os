---
name: portable-workflow
description: Package the entire HeroForge V1 Autonomous Creative Website Studio into a portable, cross-agent repository compatible with Google Antigravity, Claude Code, and OpenAI Codex, complete with manifests, clean-install tests, and distributable archives.
---

# Portable Workflow — Cross-Agent Packaging & Distribution

## Overview
Packages HeroForge V1 so any developer or AI agent can clone or extract the archive, run a single setup command, and immediately use all 31 verified & original skills, inspect the 20 concepts, launch the Slate Stone Agent OS Dashboard, and build new flagship websites.

## Triggers
- Phase 9 & Phase 10 of HeroForge V1.
- Running `scripts/verify-clean-install.mjs` or `scripts/package-archive.mjs`.

## Procedure

### Step 1: Multi-Agent Skill Adapter Architecture
Ensure seamless discovery across all three major agentic coding harnesses using relative paths:
1. **Google Antigravity Adapter**: `.agents/skills/<skill-name>/SKILL.md`
2. **Claude Code Adapter**: `.claude/skills/<skill-name>/SKILL.md` + `CLAUDE.md`
3. **OpenAI Codex / Universal Adapter**: `.codex/skills/<skill-name>/SKILL.md` + `AGENTS.md`

### Step 2: Mandatory Portable Artifacts
Every HeroForge V1 distribution must include:
- `AGENTS.md` & `CLAUDE.md`: Master autonomous studio operating instructions.
- `skills-manifest.json`: Complete provenance manifest documenting exact source URL, version/commit SHA, license, category, and installation status of every third-party and original skill.
- `scripts/install.sh` & `scripts/verify-clean-install.mjs`: Cross-platform setup and verification scripts.
- `.env.example`: Sanitized environment configuration supporting multiple image-generation providers (`GEMINI_API_KEY`, `OPENAI_API_KEY`, `IMAGE_PROVIDER=auto|manual`) with zero hardcoded private keys.
- `scripts/import-references.mjs`: Utility allowing users without an image API key to import custom/manual reference images cleanly.
- `templates/vite-react-ts-starter/`: Reusable starter template with pinned dependencies.
- `docs/TROUBLESHOOTING.md` & `README.md`: Comprehensive setup, architecture, and troubleshooting guides.
- `dist/heroforge-v1-portable.tar.gz` (and `.zip`): Distributable project archive excluding `node_modules` and `.env` secrets.

## Expected Outputs
- Complete portable repository structure, `skills-manifest.json`, automated clean-install verification suite, and distributable archive.

## Verification Criteria
- [ ] `node scripts/verify-clean-install.mjs` passes 100% of checks (all 31 skills verified, zero secrets leaked, all relative paths valid, all 3 apps buildable).
- [ ] Distributable archive (`heroforge-v1-portable.tar.gz`) is created and verified.

## Concrete Clean-Install & Archive Commands
```bash
node scripts/verify-clean-install.mjs
node scripts/package-archive.mjs
```

- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.
- Enforces HeroForge V1 Be-Ambitious (Altitude, Depth, Range) and Deslopify zero-slop standards.

## Minimalist Hero Restraint Law (A+ Showcase Standard)
- **Strict Element Cap**: Keep only 1 floating navigation bar, 1 small unboxed project label, 1 intentional 2-line headline, 1 short sentence (`<= 38ch`), 1 primary CTA button, and at most 1 subtle supporting caption/switcher.
- **No Decorative Jargon**: Use clear human navigation words (`Projects`, `Studio`, `Movement`, `Craft`, `Inquire`) — never templated AI labels.
- **Intentional Line Wrapping**: Balance headline lines explicitly so a short word is never stranded alone on its own line.
- **Subject Dominance & Color Boundary**: Keep `>= 65%` of the hero image/3D subject unobstructed, and keep workspace accent colors (`#58A6FF` light blue) strictly inside the Agent OS dashboard.
