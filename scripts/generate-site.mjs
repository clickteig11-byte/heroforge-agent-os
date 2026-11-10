#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : 'true';
      out[key] = val;
    }
  }
  return out;
}

const args = parseArgs(process.argv);
const catalogPath = path.join(ROOT, 'data/ideas-catalog.json');
const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const ideas = catalogData.ideas || [];

if (args.list || args.help) {
  console.log('HeroForge V1 — Autonomous Concept Scaffolder');
  console.log('Usage: npm run generate:site -- --idea <idea-id> [--port 4103] [--out apps/<slug>]');
  console.log('\nAvailable Ranked Concepts:');
  for (const idea of ideas) {
    console.log(
      `  - ${idea.id.padEnd(8)} | ${idea.brandName.padEnd(28)} | ${idea.category} (Avg: ${idea.scores?.average ?? 'N/A'})`
    );
  }
  process.exit(0);
}

const ideaId = args.idea || 'idea-02';
const selected = ideas.find((i) => i.id === ideaId) || ideas[0];

if (!selected) {
  console.error(`[ERROR] Concept ${ideaId} not found in data/ideas-catalog.json`);
  process.exit(1);
}

const slug =
  args.slug ||
  selected.brandName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const port = Number(args.port || 4103);
const targetDir = args.out ? path.resolve(ROOT, args.out) : path.join(ROOT, 'apps', `concept-${slug}`);
const starterDir = path.join(ROOT, 'templates/vite-react-ts-starter');

if (args['dry-run']) {
  console.log(`[DRY RUN] Would scaffold "${selected.brandName}" (${selected.id}) into ${path.relative(ROOT, targetDir)} on port ${port}`);
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });
fs.cpSync(starterDir, targetDir, { recursive: true, force: true });

// Customize package.json
const pkgPath = path.join(targetDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.name = `@heroforge/${slug}`;
pkg.scripts.dev = `vite --port ${port} --host 0.0.0.0`;
pkg.scripts.preview = `vite preview --port ${port} --host 0.0.0.0`;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

// Write concept brief metadata into src/concept-meta.json
const metaPath = path.join(targetDir, 'src/concept-meta.json');
fs.writeFileSync(metaPath, JSON.stringify(selected, null, 2) + '\n', 'utf8');

console.log(`[HEROFORGE GENERATOR] Scaffolded "${selected.brandName}" (${selected.id}) -> ${path.relative(ROOT, targetDir)}`);
console.log(`  Launch command: npx --workspace=${path.relative(ROOT, targetDir)} vite --port ${port}`);
