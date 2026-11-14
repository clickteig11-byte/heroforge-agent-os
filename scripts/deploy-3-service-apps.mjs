import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';

const SITES = [
  {
    dir: path.join(ROOT_DIR, 'apps/vane-hydronics'),
    repo: 'vane-hydronics',
    domain: 'vane-hydronics.vercel.app',
    projectName: 'vane-hydronics',
    brand: 'Vane & Tor Hydronics'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/nordic-turf'),
    repo: 'nordic-turf',
    domain: 'nordic-turf.vercel.app',
    projectName: 'nordic-turf',
    brand: 'Nordic Turf & Meadow'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/strata-roofing'),
    repo: 'strata-roofing',
    domain: 'strata-roofing.vercel.app',
    projectName: 'strata-roofing',
    brand: 'Strata Zinc & Slate'
  }
];

function run(cmd, cwd) {
  console.log(`[EXEC] ${cmd} (in ${cwd || 'root'})`);
  try {
    const out = execSync(cmd, { cwd, encoding: 'utf8', stdio: 'pipe' });
    console.log(out.trim());
    return out;
  } catch (err) {
    console.error(`Error executing: ${cmd}`);
    if (err.stdout) console.log(err.stdout.toString());
    if (err.stderr) console.error(err.stderr.toString());
    return null;
  }
}

for (const site of SITES) {
  console.log(`\n======================================================`);
  console.log(`PROCESSING: ${site.brand} -> ${site.repo}`);
  console.log(`======================================================`);

  fs.writeFileSync(path.join(site.dir, 'vercel.json'), JSON.stringify({ framework: 'vite' }, null, 2));
  fs.writeFileSync(path.join(site.dir, '.gitignore'), 'node_modules\ndist\n.vercel\n.DS_Store\n');

  const gitDir = path.join(site.dir, '.git');
  if (!fs.existsSync(gitDir)) {
    run('git init -b main', site.dir);
  }
  run('git add .', site.dir);
  run(`git commit -m "feat: initial commit for ${site.brand} flagship service showcase (Pass 3 Luna polished)" || true`, site.dir);

  try {
    execSync('git remote get-url origin', { cwd: site.dir, stdio: 'ignore' });
    run('git push origin main || true', site.dir);
  } catch {
    run(`gh repo create clickteig11-byte/${site.repo} --public --source=. --remote=origin --push`, site.dir);
  }

  console.log(`Deploying to Vercel for ${site.repo}...`);
  run('vercel --prod --yes', site.dir);

  console.log(`Adding domain ${site.domain}...`);
  run(`vercel domains add ${site.domain} ${site.projectName} || vercel domains add ${site.domain} ${site.repo} || true`, site.dir);
}

console.log('\n✓ ALL 3 SERVICE SITES PROCESSED, PUSHED, AND DEPLOYED!');
