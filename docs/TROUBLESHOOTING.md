# HeroForge V1 — Troubleshooting & Operations Guide

## 1. Port Conflicts (`4100`, `4101`, `4102`)
### Symptom
`Error: Port 4101 is already in use` when launching `npm run dev:all`.

### Resolution
Check and free any existing processes bound to ports `4100`–`4102`:
```bash
lsof -i :4100 -i :4101 -i :4102
```
Or override the port for an individual workspace:
```bash
npx --workspace=apps/website-a-3d vite --port 4111
```

---

## 2. Running Without Image Generation API Keys (`GEMINI_API_KEY` / `OPENAI_API_KEY`)
### Symptom
You want to run HeroForge V1 offline or without paying for external image generation APIs.

### Resolution
HeroForge V1 ships with **13 high-resolution reference and architectural plates pre-generated and committed** inside `references/website-a/` and `references/website-b/` (mirrored into each app's `public/references/` folder).
1. Set `IMAGE_PROVIDER=manual` in `.env` (or leave `GEMINI_API_KEY` blank in `auto` mode).
2. Verify all local reference plates are intact:
   ```bash
   node scripts/import-references.mjs --verify
   ```
3. To import your own custom mockups for a new site:
   ```bash
   node scripts/import-references.mjs --site website-a --desktop /path/to/desktop.png --mobile /path/to/mobile.png
   ```

---

## 3. Headless WebGL Context in Playwright (`scripts/run-visual-qa.mjs`)
### Symptom
When running `npm run qa:visual` in a headless CI or container environment without a physical GPU, WebGL context creation may fall back to software rasterization.

### Resolution
1. `scripts/run-visual-qa.mjs` launches Chromium with `--use-gl=angle --use-angle=swiftshader --enable-webgl --ignore-gpu-blocklist` so Three.js / React Three Fiber scenes render deterministically even in headless environments.
2. Additionally, `apps/website-a-3d` includes a built-in **WebGL Error Boundary & Interactive SVG Horological Fallback** (`CalibreZeroStage`), guaranteeing zero uncaught runtime crashes even if WebGL is completely disabled in the user's browser.

---

## 4. Playwright Browser Binaries Missing
### Symptom
`browserType.launch: Executable doesn't exist` when running `npm run qa:visual`.

### Resolution
Install the Chromium binary for Playwright:
```bash
npx playwright install chromium
```

---

## 5. Deslopify Audit Failures (`node scripts/deslopify-audit.mjs`)
### Symptom
`[DESLOPIFY AUDIT] Status: FAILED` due to banned buzzwords, purple/indigo SaaS hex codes, dead `href="#"` links, or missing `tabular-nums` / `<dialog>` / `prefers-reduced-motion`.

### Resolution
Inspect `data/deslopify-report.json` to see the exact file and line pattern that triggered the violation:
- Replace any banned marketing buzzwords with concrete engineering or architectural specifications.
- Ensure every stylesheet includes `@media (prefers-reduced-motion: reduce)` and `font-variant-numeric: tabular-nums`.
- Replace any `href="#"` placeholder links with valid section IDs (`href="#chapter-01"`) or `<button type="button">` triggers.
