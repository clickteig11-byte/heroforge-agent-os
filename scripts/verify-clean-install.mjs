#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const checks = [];
function recordCheck(name, passed, detail) {
  checks.push({ name, passed, detail });
  const icon = passed ? '✓' : '✗';
  console.log(`  ${icon} ${name}: ${detail}`);
}

console.log('======================================================================');
console.log(' HeroForge V1 — Clean-Install & Portable Studio Verification Suite');
console.log('======================================================================');

// 1. Verify all 36 skills across .agents/skills, .claude/skills, and .codex/skills
const ADAPTERS = ['.agents/skills', '.claude/skills', '.codex/skills'];
for (const adapter of ADAPTERS) {
  const dir = path.join(ROOT, adapter);
  const exists = fs.existsSync(dir);
  const skillFolders = exists
    ? fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && fs.existsSync(path.join(dir, d.name, 'SKILL.md')))
    : [];
  recordCheck(
    `Skill Adapter (${adapter})`,
    skillFolders.length === 36,
    `${skillFolders.length}/36 skills installed with SKILL.md`
  );
}

// 2. Verify skills-manifest.json has all 36 skills
const manifestPath = path.join(ROOT, 'skills-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const totalInManifest =
  (manifest.thirdPartyVerifiedSkills?.length || 0) + (manifest.originalHeroForgeSkills?.length || 0);
recordCheck(
  'skills-manifest.json completeness',
  totalInManifest === 36,
  `${totalInManifest}/36 skills documented (${manifest.thirdPartyVerifiedSkills?.length} third-party + ${manifest.originalHeroForgeSkills?.length} original)`
);

// 3. Verify data/ideas-catalog.json has 20 ideas
const catalogPath = path.join(ROOT, 'data/ideas-catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const ideaCount = catalog.ideas?.length || 0;
recordCheck('20-Idea Autonomous Catalog', ideaCount === 20, `${ideaCount}/20 ranked concepts in data/ideas-catalog.json`);

// 4. Verify all reference images exist on disk
const refManifestPath = path.join(ROOT, 'data/references-manifest.json');
const refManifest = JSON.parse(fs.readFileSync(refManifestPath, 'utf8'));
let expectedRefs = 0;
let foundRefs = 0;
for (const site of Object.values(refManifest.websites || {})) {
  for (const relPath of Object.values(site.files || {})) {
    expectedRefs++;
    if (fs.existsSync(path.join(ROOT, relPath.replace(/^\//, '')))) {
      foundRefs++;
    }
  }
}
recordCheck(
  'Generated Reference Plates on Disk',
  expectedRefs > 0 && foundRefs === expectedRefs,
  `${foundRefs}/${expectedRefs} high-res reference PNGs verified`
);

// 5. Verify QA screenshots exist in both qa/ and apps/gallery/public/qa/
const REQUIRED_SHOTS = [
  'desktop-hero.png',
  'desktop-scrolled.png',
  'desktop-full.png',
  'tablet-hero.png',
  'tablet-full.png',
  'mobile-hero.png',
  'mobile-full.png'
];
let expectedShots = 0;
let foundShots = 0;
for (const siteSlug of ['website-a', 'website-b']) {
  for (const shot of REQUIRED_SHOTS) {
    expectedShots += 2;
    const p1 = path.join(ROOT, 'qa', siteSlug, shot);
    const p2 = path.join(ROOT, 'apps/gallery/public/qa', siteSlug, shot);
    if (fs.existsSync(p1) && fs.statSync(p1).size > 1000) foundShots++;
    if (fs.existsSync(p2) && fs.statSync(p2).size > 1000) foundShots++;
  }
}
recordCheck(
  'Playwright Multi-Viewport QA Screenshots',
  foundShots === expectedShots,
  `${foundShots}/${expectedShots} PNG captures verified across qa/ and apps/gallery/public/qa/`
);

// 6. Verify portable studio files exist
const PORTABLE_FILES = [
  'AGENTS.md',
  'CLAUDE.md',
  'README.md',
  '.env.example',
  'docs/TROUBLESHOOTING.md',
  'docs/VISUAL_QA_REPORT.md',
  'scripts/install.sh',
  'scripts/import-references.mjs',
  'scripts/generate-site.mjs',
  'scripts/dev-all.mjs',
  'scripts/run-visual-qa.mjs',
  'templates/vite-react-ts-starter/index.html',
  'templates/vite-react-ts-starter/src/App.tsx',
  'templates/vite-react-ts-starter/src/index.css'
];
const missingPortable = PORTABLE_FILES.filter((f) => !fs.existsSync(path.join(ROOT, f)));
recordCheck(
  'Portable Studio Artifacts & Starter Template',
  missingPortable.length === 0,
  missingPortable.length === 0
    ? `All ${PORTABLE_FILES.length} required portable files present`
    : `Missing: ${missingPortable.join(', ')}`
);

// 7. Verify zero hardcoded private API keys in source/config files
const SECRET_PATTERNS = [/sk-[a-zA-Z0-9]{20,}/, /AIzaSy[a-zA-Z0-9_-]{33}/];
function scanForSecrets(dir) {
  const hits = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git', 'qa', 'references'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      hits.push(...scanForSecrets(full));
    } else if (/\.(ts|tsx|js|mjs|json|md|env\.example|sh)$/.test(entry.name)) {
      const content = fs.readFileSync(full, 'utf8');
      for (const pat of SECRET_PATTERNS) {
        if (pat.test(content)) hits.push(path.relative(ROOT, full));
      }
    }
  }
  return hits;
}
const leakedSecrets = scanForSecrets(ROOT);
recordCheck('Zero Leaked API Keys', leakedSecrets.length === 0, `${leakedSecrets.length} hardcoded secrets found`);

// 8. Run Deslopify static audit
let deslopifyPassed = false;
try {
  execSync('node scripts/deslopify-audit.mjs', { cwd: ROOT, stdio: 'pipe' });
  deslopifyPassed = true;
} catch {
  deslopifyPassed = false;
}
recordCheck('Deslopify Zero-Slop Audit', deslopifyPassed, deslopifyPassed ? 'PASSED_ZERO_SLOP (0 violations)' : 'FAILED');

const allPassed = checks.every((c) => c.passed);
const summaryReport = {
  verifiedAt: new Date().toISOString(),
  allPassed,
  totalChecks: checks.length,
  passedChecks: checks.filter((c) => c.passed).length,
  checks
};

fs.writeFileSync(path.join(ROOT, 'data/clean-install-report.json'), JSON.stringify(summaryReport, null, 2) + '\n', 'utf8');

console.log('======================================================================');
console.log(
  `[CLEAN-INSTALL RESULT] ${summaryReport.passedChecks}/${summaryReport.totalChecks} Checks Passed | Overall: ${
    allPassed ? 'PASS' : 'FAIL'
  }`
);
console.log('======================================================================');

if (!allPassed) {
  process.exit(1);
}
