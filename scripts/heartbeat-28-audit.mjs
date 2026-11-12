import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const BASE_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';

const APPS = [
  { id: 'gallery', name: 'Master OS minimal dashboard', path: 'apps/gallery', daylightBg: '#FAF9F6' },
  { id: 'vane-hydronics', name: 'Vane & Tor Hydronics', path: 'apps/vane-hydronics', daylightBg: '#F6F4EE' },
  { id: 'nordic-turf', name: 'Nordic Turf Living Soil', path: 'apps/nordic-turf', daylightBg: '#f8f7f2' },
  { id: 'strata-roofing', name: 'Strata Slate & Zinc', path: 'apps/strata-roofing', daylightBg: '#f1f3f6' },
  { id: 'kronos-runtime', name: 'Kronos Runtime', path: 'apps/kronos-runtime', daylightBg: '#f8fafc' },
  { id: 'site-4-sora', name: 'Sora Acoustic Monolith', path: 'apps/site-4-sora', daylightBg: '#f7f5f0' },
  { id: 'site-5-vespers', name: 'Atelier Vespers', path: 'apps/site-5-vespers', daylightBg: '#f7f6f2' },
  { id: 'site-6-veloce', name: 'Veloce Aerodynamics', path: 'apps/site-6-veloce', daylightBg: '#f7f7f9' },
  { id: 'site-7-solaris', name: 'Solaris Lensworks', path: 'apps/site-7-solaris', daylightBg: '#f7f6f2' }
];

const BANNED_PATTERNS = [
  { pattern: /\banti-slop\b/i, name: 'anti-slop' },
  { pattern: /\bsynthetic slop\b/i, name: 'synthetic slop' },
  { pattern: /\bas an ai\b/i, name: 'as an AI' },
  { pattern: /\bseamless\b/i, name: 'seamless' },
  { pattern: /\bseamlessly\b/i, name: 'seamlessly' },
  { pattern: /\bnext-gen\b/i, name: 'next-gen' },
  { pattern: /\bnext generation\b/i, name: 'next generation' },
  { pattern: /\bgame-changing\b/i, name: 'game-changing' },
  { pattern: /\bgame changer\b/i, name: 'game changer' },
  { pattern: /\brevolutionize\b/i, name: 'revolutionize' },
  { pattern: /\bunleash\b/i, name: 'unleash' },
  { pattern: /\bsupercharge\b/i, name: 'supercharge' },
  { pattern: /\bdelve into\b/i, name: 'delve into' },
  { pattern: /\btapestry\b/i, name: 'tapestry' },
  { pattern: /\bdive deep\b/i, name: 'dive deep' },
  { pattern: /\bin today's fast-paced\b/i, name: "in today's fast-paced" },
  { pattern: /\bharness the power\b/i, name: 'harness the power' },
  { pattern: /\belevate your workflow\b/i, name: 'elevate your workflow' }
];

function listFilesRecursive(dirPath, rootDir = dirPath) {
  let res = [];
  if (!fs.existsSync(dirPath)) return res;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const full = path.join(dirPath, file);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      res = res.concat(listFilesRecursive(full, rootDir));
    } else {
      res.push({
        rel: path.relative(rootDir, full),
        sizeBytes: st.size,
        size: `${(st.size / 1024).toFixed(2)} kB`
      });
    }
  }
  return res;
}

function scanForJargon(dirPath) {
  const violations = [];
  function walk(current) {
    if (!fs.existsSync(current)) return;
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(current, ent.name);
      if (ent.isDirectory()) {
        if (ent.name !== 'node_modules' && ent.name !== 'dist' && ent.name !== '.git') {
          walk(full);
        }
      } else if (/\.(tsx?|jsx?|css|html|json|md)$/i.test(ent.name)) {
        const text = fs.readFileSync(full, 'utf8');
        for (const { pattern, name } of BANNED_PATTERNS) {
          if (pattern.test(text)) {
            violations.push({
              file: path.relative(BASE_DIR, full),
              term: name
            });
          }
        }
      }
    }
  }
  walk(dirPath);
  return violations;
}

console.log('Starting HeroForge V1 Heartbeat-28 Build & Performance Audit...\n');

const auditResults = [];

for (const app of APPS) {
  const appDir = path.join(BASE_DIR, app.path);
  console.log(`[AUDIT] Checking ${app.id} (${app.name})...`);
  const startTime = Date.now();

  // 1. TypeScript Check
  let tsErrors = 0;
  let tsErrorMessages = [];
  try {
    execSync('npx tsc --noEmit', { cwd: appDir, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    tsErrors++;
    const out = (err.stdout || '') + (err.stderr || '');
    tsErrorMessages.push(out.trim());
    console.error(`  [!] TypeScript error in ${app.id}:`, out);
  }

  // 2. Production Build
  let buildErrors = 0;
  let warnings = [];
  let buildOutput = '';
  try {
    buildOutput = execSync('npm run build', { cwd: appDir, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    buildErrors++;
    const errOut = (err.stdout || '') + (err.stderr || '');
    warnings.push(`BUILD_FAILED: ${errOut.slice(0, 300)}`);
    console.error(`  [!] Build failure in ${app.id}:`, errOut);
  }

  // Check for rollup/vite warnings
  const lines = buildOutput.split('\n');
  for (const line of lines) {
    if (/(?:warning|warn|empty chunk)/i.test(line) && !line.includes('0 warnings')) {
      warnings.push(line.trim());
    }
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);

  // 3. Bundle Metrics & Standalone JS check (< 200 KB)
  const distDir = path.join(appDir, 'dist');
  const allDistFiles = listFilesRecursive(distDir);
  const totalDistBytes = allDistFiles.reduce((acc, f) => acc + f.sizeBytes, 0);

  const jsFiles = allDistFiles.filter(f => f.rel.endsWith('.js'));
  const cssFiles = allDistFiles.filter(f => f.rel.endsWith('.css'));
  const htmlFiles = allDistFiles.filter(f => f.rel.endsWith('.html'));

  const totalJsBytes = jsFiles.reduce((acc, f) => acc + f.sizeBytes, 0);
  const totalCssBytes = cssFiles.reduce((acc, f) => acc + f.sizeBytes, 0);

  // Standalone bundle size validation (every JS bundle must be < 200 KB raw)
  const jsSizeViolations = jsFiles.filter(f => f.sizeBytes > 200 * 1024);
  const allJsUnder200KB = jsSizeViolations.length === 0;

  // 4. Copy & Jargon Audit
  const srcDir = path.join(appDir, 'src');
  const jargonViolations = scanForJargon(srcDir);
  const indexHtmlPath = path.join(appDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const htmlText = fs.readFileSync(indexHtmlPath, 'utf8');
    for (const { pattern, name } of BANNED_PATTERNS) {
      if (pattern.test(htmlText)) {
        jargonViolations.push({
          file: path.relative(BASE_DIR, indexHtmlPath),
          term: name
        });
      }
    }
  }

  // 5. Daylight verification
  const cssPath = path.join(appDir, 'src/index.css');
  let daylightVerified = false;
  if (fs.existsSync(cssPath)) {
    const cssText = fs.readFileSync(cssPath, 'utf8');
    daylightVerified = /--bg|background.*(#faf|#f8|#f7|#f6|#f1|#fff)/i.test(cssText);
  }

  const appResult = {
    app: app.id,
    appName: app.name,
    targetPath: app.path,
    status: (tsErrors === 0 && buildErrors === 0 && warnings.length === 0 && allJsUnder200KB && jargonViolations.length === 0) ? 'SUCCESS' : 'FAILED',
    tsErrors,
    tsDiagnostics: tsErrorMessages,
    buildErrors,
    warnings,
    duration: `${durationSec}s`,
    daylightVerified,
    daylightBg: app.daylightBg,
    jargonPromptResidueCount: jargonViolations.length,
    jargonViolations,
    bundleUnder200KBVerified: allJsUnder200KB,
    bundleMetrics: {
      totalDistSize: `${(totalDistBytes / 1024).toFixed(2)} kB`,
      jsSize: `${(totalJsBytes / 1024).toFixed(2)} kB`,
      cssSize: `${(totalCssBytes / 1024).toFixed(2)} kB`,
      htmlFiles: htmlFiles.map(h => ({ rel: h.rel, size: h.size })),
      jsBundles: jsFiles.map(j => ({ rel: j.rel, size: j.size, sizeBytes: j.sizeBytes, under200KB: j.sizeBytes <= 200 * 1024 })),
      cssBundles: cssFiles.map(c => ({ rel: c.rel, size: c.size }))
    },
    files: allDistFiles.map(f => ({ rel: f.rel, size: f.size }))
  };

  auditResults.push(appResult);
  console.log(`  ✓ ${app.id} completed in ${durationSec}s`);
  console.log(`    - Status: ${appResult.status}`);
  console.log(`    - TS errors: ${tsErrors} | Warnings: ${warnings.length}`);
  console.log(`    - JS Bundles: ${jsFiles.map(j => `${j.rel} (${j.size})`).join(', ')}`);
  console.log(`    - Max JS Bundle Size < 200 KB: ${allJsUnder200KB ? 'YES' : 'NO'}`);
  console.log(`    - Jargon/Prompt residue: ${jargonViolations.length} occurrences`);
  console.log(`    - Daylight Light-Mode: ${daylightVerified ? 'VERIFIED' : 'FAILED'} (${app.daylightBg})\n`);
}

const outPath = path.join(BASE_DIR, 'qa/heartbeat-28-build-audit.json');
fs.writeFileSync(outPath, JSON.stringify(auditResults, null, 2), 'utf8');
console.log(`Heartbeat-28 Build & Performance Audit successfully written to ${outPath}`);
