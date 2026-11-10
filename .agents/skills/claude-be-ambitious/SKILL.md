---
name: claude-be-ambitious
description: >
  Turn a task or prompt into a deeper version of itself, not a bigger one.
  Before rewriting, say what a top professional in the field would do that the
  user isn't asking for, the rawest source material they would start from, the
  specific methods and tools they would use, and what (other than the user or
  the model) would show the result is right. Then rewrite the prompt to ask for
  exactly that. Cloned from https://github.com/DannyMac180/skills/tree/main/be-ambitious (commit 5b02caf97c72bdd9fd1a9933032942a8650a836c).
---

# Claude Be Ambitious (`DannyMac180/skills` + Felix Rieseberg Methodology)

## Overview
Adapted from Felix Rieseberg's (Anthropic) *"How to be more ambitious: A tutorial for humans with models"* and verified from [`https://github.com/DannyMac180/skills/tree/main/be-ambitious`](https://github.com/DannyMac180/skills/tree/main/be-ambitious) (`commit 5b02caf97c72bdd9fd1a9933032942a8650a836c`):

> I want a deeper version of this task, not a bigger one. Before rewriting it:
> (1) say what a top professional in this field would do here that I'm not asking for;
> (2) name the rawest material they would start from instead of what has already been digested for me;
> (3) name the specific methods and tools they would use;
> (4) say what, other than you or me, would show the result is right.
> Then rewrite my prompt to ask for exactly that.

## Triggers
- `/be-ambitious`, `"be ambitious"`, `"make this prompt deeper"`, `"what would an expert do here"`, `"raise the bar on this task"`.
- Stage 1 of the HeroForge V1 2026 AI Design Workflow before building any flagship website or 3D scene.

## Deeper, Not Bigger
Keep the user's goal and scope. Depth means a higher standard for the same outcome: better raw sources, sharper methods (`Nutlope/hallmark`, `Leonxlnx/taste-skill`, `pbakaus/impeccable`, `mobbin/skills`, `emilkowalski/skills`, `Jakubantalik/transitions.dev`), and real external verification (`sloplint.mjs`, `deslopify-audit.mjs`, Playwright multi-viewport Visual QA). Do not bloat the UI with extra badges, extra buttons, or unrequested cards.

## The Four Expert Depth Questions
1. **What a top professional would do that wasn't asked for**:
   - Strip competing hero UI down to 1 dominant focal point, 1 balanced 2-line headline, 1 short sentence, and 1 primary CTA.
   - Separate workspace chrome (`#58A6FF` light blue in Agent OS `:4100`) from showcase brand palettes (`#FCFAF6` warm ivory / `#C5A478` brass on `:4101`).
2. **The rawest material**:
   - Start from real product screenshots (`capture.mjs`), real Mobbin screen precedents (`redesign-screen`), high-resolution text-free photography plates, and procedural Three.js/R3F geometry (`CalibreZeroScene.tsx`).
3. **Specific methods and tools**:
   - `Nutlope/hallmark` (`theme.mjs`, `sloplint.mjs`), `Leonxlnx/taste-skill` (`gate.mjs`), `pbakaus/impeccable`, `Jakubantalik/transitions.dev` (`t-*` CSS transitions), `emilkowalski/skills` (`cubic-bezier(0.23, 1, 0.32, 1)`), and Playwright (`run-visual-qa.mjs`).
4. **External verification (other than the model or user)**:
   - `node scripts/deslopify-audit.mjs` (`0` violations), `node scripts/verify-clean-install.mjs` (`8/8` checks passed), and real Playwright screenshots at `1440×900`, `768×1024`, and `390×844`.

## Verification & Guidelines
```bash
node scripts/audit-and-upgrade-skills.mjs
```
- Always answer the 4 expert depth questions before executing a flagship build or prompt rewrite.
