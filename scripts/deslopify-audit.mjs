#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BANNED_BUZZWORDS = [
  /\brevolutionize\b/i,
  /\bunleash\b/i,
  /\bsupercharge\b/i,
  /\bgame-changing\b/i,
  /\bseamless integration\b/i,
  /\bin today's fast-paced\b/i,
  /\bdelve into\b/i,
  /\blorem ipsum\b/i,
  /\bunlock the power\b/i,
  /\belevate your workflow\b/i
];

const BANNED_SLOP_COLORS = [
  /#6366f1/i, // Tailwind Indigo 500
  /#8b5cf6/i, // Tailwind Violet 500
  /#a855f7/i, // Tailwind Purple 500
  /#ec4899/i  // Tailwind Pink 500
];

const TARGET_APPS = [
  { id: 'website-a-3d', name: 'Website A — AETHERION // CALIBRE ZERO (3D)', dir: path.join(ROOT, 'apps/website-a-3d/src') },
  { id: 'website-b-editorial', name: 'Website B — KUROKAWA & VANE (Editorial)', dir: path.join(ROOT, 'apps/website-b-editorial/src') },
  { id: 'gallery', name: 'HeroForge Agent OS Slate Dashboard', dir: path.join(ROOT, 'apps/gallery/src') }
];

function collectFiles(dir, extList = ['.ts', '.tsx', '.css']) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(collectFiles(full, extList));
    } else if (extList.includes(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

const results = [];
let totalViolations = 0;

for (const app of TARGET_APPS) {
  const files = collectFiles(app.dir);
  const violations = [];
  let hasTabularNums = false;
  let hasNativeDialog = false;
  let hasReducedMotion = false;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);

    if (content.includes('tabular-nums')) hasTabularNums = true;
    if (content.includes('<dialog')) hasNativeDialog = true;
    if (content.includes('prefers-reduced-motion')) hasReducedMotion = true;

    for (const regex of BANNED_BUZZWORDS) {
      if (regex.test(content)) {
        violations.push({ file: rel, type: 'BANNED_AI_BUZZWORD', pattern: regex.toString() });
      }
    }

    for (const colorRegex of BANNED_SLOP_COLORS) {
      if (colorRegex.test(content)) {
        violations.push({ file: rel, type: 'BANNED_SLOP_GRADIENT_COLOR', pattern: colorRegex.toString() });
      }
    }

    if (content.includes('href="#"')) {
      violations.push({ file: rel, type: 'DEAD_ANCHOR_LINK', pattern: 'href="#"' });
    }
  }

  if (files.length > 0) {
    if (!hasTabularNums) violations.push({ file: app.id, type: 'MISSING_TABULAR_NUMERALS', pattern: 'font-variant-numeric: tabular-nums' });
    if (!hasNativeDialog) violations.push({ file: app.id, type: 'MISSING_NATIVE_DIALOG', pattern: '<dialog>' });
    if (!hasReducedMotion) violations.push({ file: app.id, type: 'MISSING_REDUCED_MOTION', pattern: 'prefers-reduced-motion' });
  }

  totalViolations += violations.length;
  results.push({
    appId: app.id,
    appName: app.name,
    filesScanned: files.length,
    passed: violations.length === 0 && files.length > 0,
    score: files.length === 0 ? 0 : Math.max(0, 100 - violations.length * 15),
    checks: {
      zeroAiBuzzwords: !violations.some(v => v.type === 'BANNED_AI_BUZZWORD'),
      zeroSlopGradients: !violations.some(v => v.type === 'BANNED_SLOP_GRADIENT_COLOR'),
      zeroDeadLinks: !violations.some(v => v.type === 'DEAD_ANCHOR_LINK'),
      tabularNumeralsEnforced: hasTabularNums,
      nativeDialogEnforced: hasNativeDialog,
      reducedMotionEnforced: hasReducedMotion
    },
    violations
  });
}

const report = {
  auditedAt: new Date().toISOString(),
  skill: 'deslopify v1.0.0',
  overallStatus: totalViolations === 0 ? 'PASSED_ZERO_SLOP' : 'FAILED',
  totalViolations,
  apps: results
};

const outPath = path.join(ROOT, 'data/deslopify-report.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

console.log(`[DESLOPIFY AUDIT] Status: ${report.overallStatus} | Violations: ${totalViolations}`);
for (const r of results) {
  console.log(`  - ${r.appName}: ${r.passed ? 'PASS (100/100)' : `FAIL (${r.violations.length} issues)`} [${r.filesScanned} files]`);
}

if (totalViolations > 0) {
  console.error(JSON.stringify(results.flatMap(r => r.violations), null, 2));
  process.exit(1);
}
