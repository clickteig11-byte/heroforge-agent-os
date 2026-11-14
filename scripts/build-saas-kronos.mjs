import fs from 'fs';
import path from 'path';

const ROOT_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';
const APP_DIR = path.join(ROOT_DIR, 'apps/kronos-runtime');

if (!fs.existsSync(APP_DIR)) {
  fs.mkdirSync(APP_DIR, { recursive: true });
}

// package.json
fs.writeFileSync(path.join(APP_DIR, 'package.json'), JSON.stringify({
  name: '@heroforge/kronos-runtime',
  version: '1.0.0',
  private: true,
  type: 'module',
  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview'
  },
  dependencies: {
    'gsap': '3.12.7',
    'lucide-react': '0.475.0',
    'motion': '12.4.7',
    'react': '18.3.1',
    'react-dom': '18.3.1'
  },
  devDependencies: {
    'typescript': '^5.5.3',
    'vite': '^6.1.1',
    '@vitejs/plugin-react': '^4.3.4',
    '@types/react': '^18.3.18',
    '@types/react-dom': '^18.3.5'
  }
}, null, 2));

// vite.config.ts
fs.writeFileSync(path.join(APP_DIR, 'vite.config.ts'), `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { host: '0.0.0.0' }
});
`);

// index.html
fs.writeFileSync(path.join(APP_DIR, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KRONOS RUNTIME // Distributed Autonomous Agent Orchestration</title>
    <meta name="description" content="Sub-millisecond task mesh and distributed runtime for autonomous AI agent fleets with cryptographic replayability." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=clash-display@600,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

// tsconfig.json
fs.writeFileSync(path.join(APP_DIR, 'tsconfig.json'), JSON.stringify({
  compilerOptions: {
    target: 'ES2020',
    useDefineForClassFields: true,
    lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    module: 'ESNext',
    skipLibCheck: true,
    moduleResolution: 'bundler',
    allowImportingTsExtensions: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: 'react-jsx',
    strict: true
  },
  include: ['src']
}, null, 2));

const srcDir = path.join(APP_DIR, 'src');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

// main.tsx
fs.writeFileSync(path.join(srcDir, 'main.tsx'), `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`);

// index.css
fs.writeFileSync(path.join(srcDir, 'index.css'), `:root {
  --bg-color: #08090c;
  --surface-color: #10131a;
  --accent-color: #38bdf8;
  --accent-secondary: #0284c7;
  --ink-primary: #f8fafc;
  --ink-muted: #94a3b8;
  --border-soft: rgba(255, 255, 255, 0.12);
  --font-display: 'Clash Display', sans-serif;
  --font-sans: 'Cabinet Grotesk', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--bg-color);
  color: var(--ink-primary);
  font-family: var(--font-sans);
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--bg-color);
  color: var(--ink-primary);
  overflow-x: hidden;
}

/* ARCHITECTURAL EDGE HEADER */
.site-edge-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  background: rgba(8, 9, 12, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-soft);
}

.edge-brand-lockup {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.edge-brand {
  color: #ffffff;
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.edge-coords {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--accent-color);
  letter-spacing: 0.1em;
  border-left: 1px solid var(--border-soft);
  padding-left: 1rem;
  font-weight: 600;
}

.edge-nav-links {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.edge-nav-links a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.18s ease;
  position: relative;
  padding: 0.25rem 0;
}

.edge-nav-links a:hover {
  color: #ffffff;
}

.edge-nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-color);
  transition: width 0.2s ease;
}

.edge-nav-links a:hover::after {
  width: 100%;
}

.edge-action-btn {
  appearance: none;
  background: var(--accent-color);
  color: #08090c;
  border: 1px solid var(--accent-color);
  border-radius: 0;
  padding: 0.55rem 1.35rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s ease;
  text-decoration: none;
}

.edge-action-btn:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #08090c;
}

/* HERO FULL-BLEED */
.hero-fullbleed {
  position: relative;
  width: 100vw;
  height: 94vh;
  min-height: 680px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ffffff;
  padding-top: 64px;
  background:
    radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.09) 0%, transparent 55%),
    linear-gradient(180deg, #0e121a 0%, #060709 100%);
}

.hero-body {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3.5rem 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2.5rem;
}

.hero-copy-stack {
  max-width: 820px;
}

.hero-small-label {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 0.75rem;
  font-variant-numeric: tabular-nums;
  border-bottom: 1px solid var(--border-soft);
  padding-bottom: 0.25rem;
  font-weight: 600;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.2vw, 5.2rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 1.25rem;
  text-wrap: balance;
}

.hero-subline {
  display: block;
  font-weight: 700;
  color: var(--accent-color);
  letter-spacing: -0.01em;
  font-size: 0.74em;
  margin-top: 0.2rem;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.82);
  max-width: 52ch;
  margin-bottom: 2.2rem;
}

.editorial-cta-btn {
  appearance: none;
  background: var(--accent-color);
  color: #08090c;
  border: 1px solid var(--accent-color);
  border-radius: 0;
  padding: 0.95rem 2.2rem;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.18s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.editorial-cta-btn:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #08090c;
  transform: translateY(-1px);
}

.hero-quiet-caption {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-color);
  padding: 0.75rem 1.25rem;
  background: rgba(16, 19, 26, 0.85);
  border: 1px solid var(--border-soft);
  font-weight: 600;
}

/* INTERACTIVE LAB */
.lab-section {
  padding: 6rem 3.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.lab-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
  border: 1px solid var(--border-soft);
  background: var(--surface-color);
  padding: 3.5rem;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.spec-table tr {
  border-bottom: 1px solid var(--border-soft);
}

.spec-table td {
  padding: 0.95rem 0;
  font-size: 0.82rem;
}

.spec-label {
  font-family: var(--font-mono);
  color: var(--accent-color);
  font-weight: 600;
}

.spec-value {
  font-family: var(--font-mono);
  text-align: right;
  font-weight: 700;
  color: #ffffff;
}
`);

// App.tsx
fs.writeFileSync(path.join(srcDir, 'App.tsx'), `import React, { useState } from 'react';

export default function App() {
  const [workerCount, setWorkerCount] = useState(12400);
  const [activePipeline, setActivePipeline] = useState('GRAPH-REPLAY');

  const p99Latency = (3.2 + (workerCount / 20000)).toFixed(2);
  const throughput = Math.round(workerCount * 8.4);

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">Kronos Runtime</a>
          <span className="edge-coords">EDGE MESH · P99 &lt;8MS · PROTOCOL V3.4</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#telemetry" onClick={() => setActivePipeline('TASK-DAG')}>DAG Mesh</a>
          <a href="#telemetry" onClick={() => setActivePipeline('REPLAY')}>Trace Log</a>
          <a href="#telemetry" onClick={() => setActivePipeline('CONSENSUS')}>Consensus</a>
          <a href="#telemetry" onClick={() => setActivePipeline('CLUSTERS')}>Edge Nodes</a>
        </nav>

        <a href="#deploy" className="edge-action-btn">
          Deploy Cluster
        </a>
      </header>

      {/* HERO SECTION */}
      <header id="top" className="hero-fullbleed">
        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">SUB-10MS DISTRIBUTED AGENT MESH</span>
            <h1 className="hero-title">
              Autonomous Agent Runtime
              <span className="hero-subline">Sub-Millisecond Task Mesh.</span>
            </h1>
            <p className="hero-lead">
              Deploy, route, and orchestrate thousands of long-running autonomous AI agents across low-latency edge clusters with cryptographic trace replayability.
            </p>
            <a href="#telemetry" className="editorial-cta-btn">
              Open Cluster Telemetry
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Runtime Benchmarks">
            <span>&lt;8ms P99 LATENCY</span>
            <span>·</span>
            <span>100K CONCURRENT WORKERS</span>
            <span>·</span>
            <span>CRYPTOGRAPHIC TRACE</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="telemetry" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">KRONOS CLUSTER SIMULATOR // REGION: GLOBAL-MESH</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Dynamic Worker Pool &amp; Throughput
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Simulate enterprise agent workloads under continuous task DAG scheduling. Zero synthetic overhead, deterministic state snapshots.
            </p>

            <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', border: '1px solid var(--border-soft)' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                <span>CONCURRENT AUTONOMOUS WORKERS</span>
                <span style={{ color: 'var(--accent-color)' }}>{workerCount.toLocaleString()} ACTIVE AGENTS</span>
              </label>
              <input
                type="range"
                min="100"
                max="50000"
                step="500"
                value={workerCount}
                onChange={(e) => setWorkerCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE EXECUTION PIPELINE</td>
                  <td className="spec-value">{activePipeline}</td>
                </tr>
                <tr>
                  <td className="spec-label">P99 INVOCATION LATENCY</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>{p99Latency} ms</td>
                </tr>
                <tr>
                  <td className="spec-label">GLOBAL EVENT THROUGHPUT</td>
                  <td className="spec-value">{throughput.toLocaleString()} TASKS / SEC</td>
                </tr>
                <tr>
                  <td className="spec-label">CRYPTOGRAPHIC TRACE STATUS</td>
                  <td className="spec-value" style={{ color: '#fff' }}>ZERO-KNOWLEDGE VERIFIED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ border: '1px solid var(--border-soft)', padding: '2.5rem', background: 'rgba(0, 0, 0, 0.4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 700 }}>WORKER CLUSTER SPECTRUM</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>MESH: NOMINAL</span>
            </div>

            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'rgba(0,0,0,0.6)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[40, 65, 80, 50, 95, 85, 70, 90, 60, 75, 88, 92].map((base, idx) => {
                const height = Math.min(100, Math.round((base * workerCount) / 25000));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: \`\${height}%\`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
              <span>EDGE CONSENSUS</span>
              <span style={{ color: 'var(--accent-color)' }}>SUB-10MS VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="deploy" style={{ borderTop: '1px solid var(--border-soft)', padding: '4rem 3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
          Kronos Runtime Engine
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-color)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          DISTRIBUTED AUTONOMOUS MESH · CLUSTER DEPLOYMENTS ACTIVE FOR 2026
        </p>
        <div style={{ display: 'inline-flex', gap: '1.5rem' }}>
          <a href="#top" className="editorial-cta-btn" style={{ padding: '0.75rem 1.6rem', fontSize: '0.72rem' }}>
            RETURN TO SUMMIT
          </a>
        </div>
      </footer>
    </div>
  );
}
`);

console.log('✓ Successfully scaffolded apps/kronos-runtime!');
