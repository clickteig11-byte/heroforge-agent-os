#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "======================================================================"
echo " HeroForge V1 — Autonomous Creative Website Studio Setup"
echo "======================================================================"

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js is required (>= 18.x). Please install Node.js and retry."
  exit 1
fi

NODE_VER="$(node -v)"
echo "[1/5] Detected Node.js version: $NODE_VER"

if [ ! -f ".env" ] && [ -f ".env.example" ]; then
  echo "[2/5] Creating local .env from .env.example (zero private keys)..."
  cp .env.example .env
else
  echo "[2/5] .env configuration check complete."
fi

echo "[3/5] Installing workspace dependencies..."
npm install --no-fund --no-audit

echo "[4/5] Synchronizing & auditing all 36 skills across .agents, .claude, and .codex..."
node scripts/audit-and-upgrade-skills.mjs

echo "[5/5] Running Deslopify zero-slop audit..."
node scripts/deslopify-audit.mjs

echo "======================================================================"
echo " HeroForge V1 Setup Complete!"
echo " - Launch all 3 servers : npm run dev:all"
echo " - Run Visual QA        : npm run qa:visual"
echo " - Generate new concept : npm run generate:site -- --idea idea-05"
echo "======================================================================"
