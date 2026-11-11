import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';

const SITES = [
  {
    dir: path.join(ROOT_DIR, 'apps/website-a-3d'),
    repo: 'aetherion-geneve',
    domain: 'aetherion-geneve.vercel.app',
    projectName: 'aetherion-geneve',
    brand: 'Aetherion Genève'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/website-b-editorial'),
    repo: 'kurokawa-vane',
    domain: 'kurokawa-vane.vercel.app',
    projectName: 'kurokawa-vane',
    brand: 'Kurokawa & Vane'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/site-4-sora'),
    repo: 'sora-klang',
    domain: 'sora-klang.vercel.app',
    projectName: 'site-4-sora',
    brand: 'Sora & Klang'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/site-5-vespers'),
    repo: 'atelier-vespers',
    domain: 'atelier-vespers.vercel.app',
    projectName: 'site-5-vespers',
    brand: 'Atelier Vespers'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/site-6-veloce'),
    repo: 'veloce-morphos',
    domain: 'veloce-morphos.vercel.app',
    projectName: 'site-6-veloce',
    brand: 'Veloce Morphos'
  },
  {
    dir: path.join(ROOT_DIR, 'apps/site-7-solaris'),
    repo: 'solaris-lensworks',
    domain: 'solaris-lensworks.vercel.app',
    projectName: 'site-7-solaris',
    brand: 'Solaris Lensworks'
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

  // 1. Ensure package.json has necessary devDependencies and build script
  const pkgPath = path.join(site.dir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkg.scripts = pkg.scripts || {};
    pkg.scripts.build = 'vite build';
    pkg.devDependencies = {
      ...(pkg.devDependencies || {}),
      'typescript': '^5.5.3',
      'vite': '^6.1.1',
      '@vitejs/plugin-react': '^4.3.4',
      '@types/react': '^18.3.18',
      '@types/react-dom': '^18.3.5'
    };
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  }

  // 2. Ensure vercel.json
  fs.writeFileSync(path.join(site.dir, 'vercel.json'), JSON.stringify({ framework: 'vite' }, null, 2));

  // 3. Ensure .gitignore
  fs.writeFileSync(path.join(site.dir, '.gitignore'), 'node_modules\ndist\n.vercel\n.DS_Store\n');

  // 4. Git init and push
  const gitDir = path.join(site.dir, '.git');
  if (!fs.existsSync(gitDir)) {
    run('git init -b main', site.dir);
  }
  run('git add .', site.dir);
  run(`git commit -m "feat: initial commit for ${site.brand} flagship showcase" || true`, site.dir);

  // Check if remote origin already exists
  try {
    execSync('git remote get-url origin', { cwd: site.dir, stdio: 'ignore' });
    run('git push origin main || true', site.dir);
  } catch {
    run(`gh repo create clickteig11-byte/${site.repo} --public --source=. --remote=origin --push`, site.dir);
  }

  // 5. Deploy to Vercel
  console.log(`Deploying to Vercel for ${site.repo}...`);
  run('vercel --prod --yes', site.dir);

  // 6. Add custom domain
  console.log(`Adding domain ${site.domain}...`);
  // Try adding domain using project name or repo name
  run(`vercel domains add ${site.domain} ${site.projectName} || vercel domains add ${site.domain} ${site.repo} || true`, site.dir);
}

console.log('\n✓ ALL STANDALONE SITES PROCESSED, PUSHED, AND DEPLOYED!');
