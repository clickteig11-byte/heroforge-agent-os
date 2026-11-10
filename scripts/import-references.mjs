#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else {
        args[key] = 'true';
      }
    }
  }
  return args;
}

const args = parseArgs(process.argv);

if (args.help || (!args.site && !args.verify)) {
  console.log(`
HeroForge V1 — Manual Reference Importer (Offline / Zero-API-Key Mode)
Usage:
  node scripts/import-references.mjs --verify
  node scripts/import-references.mjs --site <website-a|website-b|slug> [--desktop <path>] [--mobile <path>] [--mockup1 <path>]
`);
  process.exit(0);
}

if (args.verify) {
  const manifestPath = path.join(ROOT, 'data/references-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('[ERROR] data/references-manifest.json not found.');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  let count = 0;
  for (const [, site] of Object.entries(manifest.websites || {})) {
    for (const [, relUrl] of Object.entries(site.files || {})) {
      const diskPath = path.join(ROOT, relUrl.replace(/^\//, ''));
      if (!fs.existsSync(diskPath)) {
        console.error(`[MISSING] ${diskPath}`);
        process.exit(1);
      }
      count++;
    }
  }
  console.log(`[REFERENCES VERIFIED] All ${count} reference plates exist on disk.`);
  process.exit(0);
}

const siteSlug = args.site;
const targetDir = path.join(ROOT, 'references', siteSlug);
fs.mkdirSync(targetDir, { recursive: true });

const mappings = [
  { arg: 'desktop', filename: 'reference-desktop.png' },
  { arg: 'mobile', filename: 'reference-mobile.png' },
  { arg: 'mockup1', filename: 'hero-mockup-1.png' },
  { arg: 'mockup2', filename: 'hero-mockup-2.png' },
  { arg: 'mockup3', filename: 'hero-mockup-3.png' }
];

let copied = 0;
for (const m of mappings) {
  if (args[m.arg]) {
    const src = path.resolve(process.cwd(), args[m.arg]);
    if (!fs.existsSync(src)) {
      console.error(`[ERROR] Source file does not exist: ${src}`);
      process.exit(1);
    }
    const dest = path.join(targetDir, m.filename);
    fs.copyFileSync(src, dest);
    console.log(`[IMPORTED] ${src} -> ${path.relative(ROOT, dest)}`);
    copied++;
  }
}

console.log(`[DONE] Imported ${copied} reference file(s) into references/${siteSlug}/`);
