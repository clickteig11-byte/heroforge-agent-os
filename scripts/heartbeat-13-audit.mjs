import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const APPS = [
  { name: 'gallery', path: 'apps/gallery' },
  { name: 'vane-hydronics', path: 'apps/vane-hydronics' },
  { name: 'nordic-turf', path: 'apps/nordic-turf' },
  { name: 'strata-roofing', path: 'apps/strata-roofing' },
  { name: 'kronos-runtime', path: 'apps/kronos-runtime' },
  { name: 'site-4-sora', path: 'apps/site-4-sora' },
  { name: 'site-5-vespers', path: 'apps/site-5-vespers' },
  { name: 'site-6-veloce', path: 'apps/site-6-veloce' },
  { name: 'site-7-solaris', path: 'apps/site-7-solaris' }
];

const results = [];

function getDirectorySize(dirPath) {
  let total = 0;
  if (!fs.existsSync(dirPath)) return 0;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      total += getDirectorySize(filePath);
    } else {
      total += stats.size;
    }
  }
  return total;
}

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
        size: `${(st.size / 1024).toFixed(2)} kB`,
        bytes: st.size
      });
    }
  }
  return res;
}

console.log('Starting Heartbeat Iteration 13 Audit...\n');

for (const app of APPS) {
  const appDir = path.resolve(process.cwd(), app.path);
  console.log(`Auditing target: ${app.name} (${app.path})`);
  const startTime = Date.now();

  let tsErrors = 0;
  let tsOutput = '';
  try {
    tsOutput = execSync('npx tsc --noEmit', { cwd: appDir, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    tsErrors++;
    tsOutput = (err.stdout || '') + (err.stderr || '');
    console.error(`[TS ERROR in ${app.name}]:`, tsOutput);
  }

  let buildErrors = 0;
  let buildOutput = '';
  let warnings = [];

  try {
    buildOutput = execSync('npm run build', { cwd: appDir, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (err) {
    buildErrors++;
    buildOutput = (err.stdout || '') + (err.stderr || '');
    console.error(`[BUILD ERROR in ${app.name}]:`, buildOutput);
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);

  // Check for warnings
  const lines = buildOutput.split('\n');
  for (const line of lines) {
    if (/warn|warning|empty chunk/i.test(line) && !line.includes('0 warnings')) {
      warnings.push(line.trim());
    }
  }

  const distDir = path.join(appDir, 'dist');
  const distFiles = listFilesRecursive(distDir);
  const totalDistBytes = getDirectorySize(distDir);

  const jsFiles = distFiles.filter(f => f.rel.endsWith('.js'));
  const cssFiles = distFiles.filter(f => f.rel.endsWith('.css'));
  const htmlFiles = distFiles.filter(f => f.rel.endsWith('.html'));

  const totalJsBytes = jsFiles.reduce((acc, f) => acc + f.bytes, 0);
  const totalCssBytes = cssFiles.reduce((acc, f) => acc + f.bytes, 0);

  // Daylight styling check
  const cssPath = path.join(appDir, 'src/index.css');
  let daylightVerified = false;
  if (fs.existsSync(cssPath)) {
    const cssText = fs.readFileSync(cssPath, 'utf8');
    daylightVerified = /--bg|background.*(#faf|#f8|#f7|#f6|#f1|#fff)/i.test(cssText);
  }

  results.push({
    app: app.name,
    targetPath: app.path,
    status: (tsErrors === 0 && buildErrors === 0 && warnings.length === 0) ? 'SUCCESS' : 'FAILED',
    tsErrors,
    buildErrors,
    warnings,
    duration: `${durationSec}s`,
    daylightVerified,
    bundleMetrics: {
      totalDistSize: `${(totalDistBytes / 1024).toFixed(2)} kB`,
      jsSize: `${(totalJsBytes / 1024).toFixed(2)} kB`,
      cssSize: `${(totalCssBytes / 1024).toFixed(2)} kB`,
      htmlFiles: htmlFiles.map(h => ({ rel: h.rel, size: h.size })),
      jsBundles: jsFiles.map(j => ({ rel: j.rel, size: j.size })),
      cssBundles: cssFiles.map(c => ({ rel: c.rel, size: c.size }))
    },
    files: distFiles.map(f => ({ rel: f.rel, size: f.size }))
  });

  console.log(`✓ ${app.name} completed in ${durationSec}s — TS errors: ${tsErrors}, Warnings: ${warnings.length}, Dist size: ${(totalDistBytes / 1024).toFixed(2)} kB\n`);
}

const outPath = path.resolve(process.cwd(), 'qa/heartbeat-13-build-audit.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
console.log(`Audit complete! Summary saved to ${outPath}`);
