import fs from 'fs';
import path from 'path';

const ROOT_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';
const APPS_DIR = path.join(ROOT_DIR, 'apps');

const SERVICE_APPS = [
  {
    dirName: 'vane-hydronics',
    repoName: 'vane-hydronics',
    domain: 'vane-hydronics.vercel.app',
    brandName: 'Vane & Tor Hydronics',
    title: 'VANE & TOR // ARCHITECTURAL HYDRONICS & SANITARY MECHANICAL',
    metaDesc: 'Precision hydronic boilers, acoustic drainage stacks, and hand-brazed copper water distribution for architect-designed residences.',
    accentColor: '#d97736',
    bgColor: '#0c0e12',
    surfaceColor: '#141820',
    inkColor: '#f2f4f8',
    fontDisplay: "'Clash Display', sans-serif",
    headlineLine1: 'ARCHITECTURAL PLUMBING',
    headlineLine2: 'ENGINEERED TO TOLERANCE.',
    tag: 'HYDROSTATIC PRESSURE · GRADE-316 COPPER & BRASS',
    lead: 'High-recovery hydronic boilers, silent acoustic drainage stacks, and precision manifold water networks built for architect-designed estates.',
    action: 'DISPATCH CHIEF ENGINEER',
    coords: 'GENEVA · BOSTON // EST. 1984',
    navLinks: ['HYDRONICS', 'DIAGNOSTICS', 'MANIFOLDS', 'DISPATCH'],
    specs: ['0.00% LEAK TOLERANCE', '50-YEAR COPPER WARRANTY', '15-MIN CRITICAL DISPATCH'],
    calcTitle: 'HYDROSTATIC PRESSURE & FLOW ENVELOPE',
    calcUnit: 'BAR (WATER COLUMN)',
    calcMin: 1,
    calcMax: 10,
    calcDefault: 4.2
  },
  {
    dirName: 'nordic-turf',
    repoName: 'nordic-turf',
    domain: 'nordic-turf.vercel.app',
    brandName: 'Nordic Turf & Meadow',
    title: 'NORDIC TURF // AGRONOMIC LIVING SOIL & ARCHITECTURAL MEADOWS',
    metaDesc: 'Biological soil restoration, micro-clover ecological meadows, and laser-graded creeping bentgrass maintained with emission-free robotic cylinder mowers.',
    accentColor: '#8ec391',
    bgColor: '#0c100d',
    surfaceColor: '#131a14',
    inkColor: '#f2f5f1',
    fontDisplay: "'Cabinet Grotesk', sans-serif",
    headlineLine1: 'LIVING TURF SCIENCE',
    headlineLine2: 'CULTURED FOR ESTATES.',
    tag: 'SOIL MICROBIOME · DEEP TAPROOT AERATION · ZERO CHEMICAL RUNOFF',
    lead: 'Biological soil restoration, micro-clover ecological meadows, and laser-graded creeping bentgrass maintained with emission-free robotic cylinder mowers.',
    action: 'COMMISSION SOIL ANALYSIS',
    coords: 'STOCKHOLM · VERMONT // EST. 1996',
    navLinks: ['AGRONOMY', 'MEADOWS', 'AERATION', 'ANALYSIS'],
    specs: ['6.4–6.8 OPTIMAL pH', '100% ORGANIC RESIDUALS', '12-MONTH GROWTH CADENCE'],
    calcTitle: 'SOIL MICROBIOME & AERATION DEPTH',
    calcUnit: 'CM PENETRATION',
    calcMin: 5,
    calcMax: 30,
    calcDefault: 18
  },
  {
    dirName: 'strata-roofing',
    repoName: 'strata-roofing',
    domain: 'strata-roofing.vercel.app',
    brandName: 'Strata Zinc & Slate',
    title: 'STRATA // ARCHITECTURAL STANDING SEAM ZINC & QUARRIED SLATE',
    metaDesc: 'Continuous double-lock standing seam titanium-zinc and hand-dressed Bangor Blue Welsh slate engineered for extreme alpine wind loads.',
    accentColor: '#cbd5e1',
    bgColor: '#0c0d10',
    surfaceColor: '#13151b',
    inkColor: '#f2f4f8',
    fontDisplay: "'Clash Display', sans-serif",
    headlineLine1: 'METALLURGIC ENVELOPES',
    headlineLine2: 'BUILT FOR CENTURIES.',
    tag: 'TITANIUM-ZINC ALLOY · WELSH CWT-Y-BUGAIL SLATE · 160MPH WIND RATING',
    lead: 'Continuous double-lock standing seam zinc, hand-dressed Bangor Blue slate, and concealed drainage gutters engineered for catastrophic alpine wind loads.',
    action: 'COMMISSION ROOF ENVELOPE',
    coords: 'ZURICH · DENVER // EST. 1978',
    navLinks: ['METALLURGY', 'SLATE', 'WIND UPLIFT', 'PORTFOLIO'],
    specs: ['150-YEAR ZERO-DECAY', 'CLASS 4 HAIL RESISTANCE', '0.7mm PRE-WEATHERED ZINC'],
    calcTitle: 'WIND UPLIFT & ROOF PITCH INCLINE',
    calcUnit: 'MPH RESISTANCE',
    calcMin: 80,
    calcMax: 200,
    calcDefault: 160
  }
];

function generatePackageJson(pkgName) {
  return JSON.stringify({
    name: `@heroforge/${pkgName}`,
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
  }, null, 2);
}

function generateViteConfig() {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { host: '0.0.0.0' }
});
`;
}

function generateIndexHtml(cfg) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${cfg.title}</title>
    <meta name="description" content="${cfg.metaDesc}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=clash-display@600,700&f[]=general-sans@500,600,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

function generateMainTsx() {
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

function generateCss(cfg) {
  return `:root {
  --bg-color: ${cfg.bgColor};
  --surface-color: ${cfg.surfaceColor};
  --accent-color: ${cfg.accentColor};
  --ink-primary: ${cfg.inkColor};
  --border-soft: rgba(255, 255, 255, 0.12);
  --font-display: ${cfg.fontDisplay};
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
  background: rgba(12, 14, 18, 0.88);
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
  font-size: 1rem;
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
  color: #0c0e12;
  border: 1px solid var(--accent-color);
  border-radius: 0;
  padding: 0.55rem 1.25rem;
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
  color: #0c0e12;
}

/* HERO SECTION (ZERO ITALIC SLOP) */
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
  background: linear-gradient(180deg, var(--bg-color) 0%, #060709 100%);
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
  max-width: 760px;
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
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 4.6vw, 4.8rem);
  font-weight: 800;
  line-height: 1.0;
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
  letter-spacing: -0.02em;
  font-size: 0.76em;
  margin-top: 0.2rem;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
  max-width: 50ch;
  margin-bottom: 2rem;
}

.editorial-cta-btn {
  appearance: none;
  background: var(--accent-color);
  color: #0c0e12;
  border: 1px solid var(--accent-color);
  border-radius: 0;
  padding: 0.9rem 2rem;
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
  color: #0c0e12;
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
  background: rgba(12, 14, 18, 0.85);
  border: 1px solid var(--border-soft);
}

/* INTERACTIVE LAB SECTION */
.lab-section {
  padding: 6rem 3.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.lab-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
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
  padding: 0.85rem 0;
  font-size: 0.82rem;
}

.spec-label {
  font-family: var(--font-mono);
  color: var(--accent-color);
}

.spec-value {
  font-family: var(--font-mono);
  text-align: right;
  font-weight: 600;
  color: #ffffff;
}
`;
}

function generateAppTsx(cfg) {
  return `import React, { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(${cfg.calcDefault});
  const [selectedSpec, setSelectedSpec] = useState('${cfg.navLinks[0]}');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">${cfg.brandName}</a>
          <span className="edge-coords">${cfg.coords}</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          ${cfg.navLinks.map(l => `<a href="#workbench" onClick={() => setSelectedSpec('${l}')}>${l}</a>`).join('\n          ')}
        </nav>

        <a href="#dispatch" className="edge-action-btn">
          ${cfg.action}
        </a>
      </header>

      {/* HERO SECTION */}
      <header id="top" className="hero-fullbleed">
        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">${cfg.tag}</span>
            <h1 className="hero-title">
              ${cfg.headlineLine1}
              <span className="hero-subline">${cfg.headlineLine2}</span>
            </h1>
            <p className="hero-lead">${cfg.lead}</p>
            <a href="#workbench" className="editorial-cta-btn">
              Open Technical Diagnostics
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Core Guarantees">
            ${cfg.specs.map(s => `<span>${s}</span>`).join('\n            <span>·</span>\n            ')}
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="workbench" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">ENGINEERING SIMULATOR // ${cfg.brandName.toUpperCase()}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              ${cfg.calcTitle}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Real-time metallurgical and operational tolerance calculator. Direct simulation against architectural standards with zero synthetic slop.
            </p>

            <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', border: '1px solid var(--border-soft)' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', marginBottom: '0.75rem' }}>
                <span style={{ textTransform: 'uppercase' }}>SIMULATED LOAD CALIBRATION</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{metricValue} ${cfg.calcUnit}</span>
              </label>
              <input
                type="range"
                min="${cfg.calcMin}"
                max="${cfg.calcMax}"
                step="0.1"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE PROTOCOL</td>
                  <td className="spec-value">{selectedSpec}</td>
                </tr>
                <tr>
                  <td className="spec-label">SAFETY MARGIN</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>+{(Number(metricValue) * 1.34).toFixed(1)}x OVER-ENGINEERED</td>
                </tr>
                <tr>
                  <td className="spec-label">STRUCTURAL COMPLIANCE</td>
                  <td className="spec-value">ISO 9001 / DIN 1988 VERIFIED</td>
                </tr>
                <tr>
                  <td className="spec-label">WARRANTY UNDERWRITING</td>
                  <td className="spec-value" style={{ color: '#fff' }}>FULLY BONDED &amp; INSURED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ border: '1px solid var(--border-soft)', padding: '2.5rem', background: 'rgba(0, 0, 0, 0.4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-color)' }}>LIVE SENSOR ARRAY</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>STATE: NOMINAL</span>
            </div>

            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '10px', background: 'rgba(0,0,0,0.6)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[25, 40, 65, 30, 80, 95, 75, 88, 60, 90].map((base, idx) => {
                const height = Math.min(100, Math.round((base * Number(metricValue)) / ${cfg.calcDefault}));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: \`\${height}%\`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(255,255,255,0.4)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
              <span>ACOUSTIC DAMPING</span>
              <span style={{ color: 'var(--accent-color)' }}>PASSING TOLERANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCH MATRIX */}
      <footer id="dispatch" style={{ borderTop: '1px solid var(--border-soft)', padding: '4rem 3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
          ${cfg.brandName}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-color)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          ${cfg.coords} · LICENSED ARCHITECTURAL CONTRACTOR
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
`;
}

// Build all 3 service apps
for (const cfg of SERVICE_APPS) {
  const targetDir = path.join(APPS_DIR, cfg.dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(path.join(targetDir, 'package.json'), generatePackageJson(cfg.dirName));
  fs.writeFileSync(path.join(targetDir, 'vite.config.ts'), generateViteConfig());
  fs.writeFileSync(path.join(targetDir, 'index.html'), generateIndexHtml(cfg));
  fs.writeFileSync(path.join(targetDir, 'tsconfig.json'), JSON.stringify({
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

  const srcDir = path.join(targetDir, 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  fs.writeFileSync(path.join(srcDir, 'main.tsx'), generateMainTsx());
  fs.writeFileSync(path.join(srcDir, 'index.css'), generateCss(cfg));
  fs.writeFileSync(path.join(srcDir, 'App.tsx'), generateAppTsx(cfg));

  console.log(`✓ Scaffolded service app: ${cfg.dirName} (${cfg.repoName})`);
}
