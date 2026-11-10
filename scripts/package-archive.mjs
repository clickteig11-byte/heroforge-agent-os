#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');
const ARCHIVE_PATH = path.join(DIST_DIR, 'heroforge-v1-portable.tar.gz');

fs.mkdirSync(DIST_DIR, { recursive: true });

console.log('[PACKAGER] Creating portable HeroForge V1 archive (excluding node_modules and local .env)...');

execSync(
  `tar -czf "${ARCHIVE_PATH}" \
    --exclude="node_modules" \
    --exclude="apps/*/node_modules" \
    --exclude="apps/*/dist" \
    --exclude="dist/heroforge-v1-portable.tar.gz" \
    --exclude=".env" \
    --exclude=".DS_Store" \
    -C "${ROOT}" .`,
  { stdio: 'inherit' }
);

const stats = fs.statSync(ARCHIVE_PATH);
const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`[PACKAGER COMPLETE] Archive written to ${ path.relative(ROOT, ARCHIVE_PATH) } (${sizeMb} MB)`);
