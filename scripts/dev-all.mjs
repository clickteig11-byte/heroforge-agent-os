#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SERVERS = [
  { name: 'GALLERY (4100)', cmd: 'npm', args: ['--workspace=apps/gallery', 'run', 'dev'] },
  { name: 'WEBSITE-A (4101)', cmd: 'npm', args: ['--workspace=apps/website-a-3d', 'run', 'dev'] },
  { name: 'WEBSITE-B (4102)', cmd: 'npm', args: ['--workspace=apps/website-b-editorial', 'run', 'dev'] }
];

const children = [];

for (const srv of SERVERS) {
  const child = spawn(srv.cmd, srv.args, {
    cwd: ROOT,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });
  children.push(child);
}

function shutdown() {
  for (const child of children) {
    try {
      child.kill('SIGTERM');
    } catch {
      // ignore
    }
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
