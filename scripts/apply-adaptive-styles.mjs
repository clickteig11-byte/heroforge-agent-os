import fs from 'fs';
import path from 'path';

const ROOT_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';

const APPS = [
  {
    name: 'nordic-turf',
    bg: '#f8f7f2',
    surface: '#ffffff',
    accent: '#2e6337',
    accentLight: '#eaf4eb',
    ink: '#18241a',
    inkMuted: '#526655',
    border: 'rgba(24, 36, 26, 0.12)',
    fontDisplay: "'Cabinet Grotesk', sans-serif",
    brand: 'Nordic Turf & Meadow',
    tag: 'AGRONOMIC LIVING SOIL · BIOLOGICAL AERATION',
    headline1: 'LIVING TURF SCIENCE',
    headline2: 'CULTURED FOR ESTATES.',
    lead: 'Biological soil restoration, micro-clover ecological meadows, and laser-graded creeping bentgrass maintained with emission-free robotic cylinder mowers.',
    action: 'COMMISSION SOIL ANALYSIS',
    coords: 'STOCKHOLM · VERMONT // EST. 1996',
    navLinks: ['AGRONOMY', 'MEADOWS', 'AERATION', 'ANALYSIS'],
    specs: ['6.4–6.8 OPTIMAL pH', '100% ORGANIC RESIDUALS', '12-MONTH GROWTH CADENCE'],
    calcTitle: 'SOIL MICROBIOME & ROOT PENETRATION',
    calcUnit: 'CM DEPTH',
    calcMin: 5,
    calcMax: 30,
    calcDefault: 18,
    isLight: true
  },
  {
    name: 'vane-hydronics',
    bg: '#f6f8fb',
    surface: '#ffffff',
    accent: '#c25e24',
    accentLight: '#fdf2eb',
    ink: '#0e1a2b',
    inkMuted: '#4b5b70',
    border: 'rgba(14, 26, 43, 0.12)',
    fontDisplay: "'Clash Display', sans-serif",
    brand: 'Vane & Tor Hydronics',
    tag: 'HYDROSTATIC PRESSURE · GRADE-316 COPPER & BRASS',
    headline1: 'ARCHITECTURAL PLUMBING',
    headline2: 'ENGINEERED TO TOLERANCE.',
    lead: 'High-recovery hydronic boilers, silent acoustic drainage stacks, and precision manifold water networks built for architect-designed residences.',
    action: 'DISPATCH CHIEF ENGINEER',
    coords: 'GENEVA · BOSTON // EST. 1984',
    navLinks: ['HYDRONICS', 'DIAGNOSTICS', 'MANIFOLDS', 'DISPATCH'],
    specs: ['0.00% LEAK TOLERANCE', '50-YEAR COPPER WARRANTY', '15-MIN CRITICAL DISPATCH'],
    calcTitle: 'HYDROSTATIC PRESSURE & FLOW ENVELOPE',
    calcUnit: 'BAR (WATER COLUMN)',
    calcMin: 1,
    calcMax: 10,
    calcDefault: 4.2,
    isLight: true
  },
  {
    name: 'strata-roofing',
    bg: '#f1f3f6',
    surface: '#ffffff',
    accent: '#334155',
    accentLight: '#e2e8f0',
    ink: '#141a24',
    inkMuted: '#4b5563',
    border: 'rgba(20, 26, 36, 0.14)',
    fontDisplay: "'Clash Display', sans-serif",
    brand: 'Strata Zinc & Slate',
    tag: 'TITANIUM-ZINC ALLOY · WELSH CWT-Y-BUGAIL SLATE',
    headline1: 'METALLURGIC ENVELOPES',
    headline2: 'BUILT FOR CENTURIES.',
    lead: 'Continuous double-lock standing seam zinc, hand-dressed Bangor Blue slate, and concealed drainage gutters engineered for catastrophic alpine wind loads.',
    action: 'COMMISSION ROOF ENVELOPE',
    coords: 'ZURICH · DENVER // EST. 1978',
    navLinks: ['METALLURGY', 'SLATE', 'WIND UPLIFT', 'PORTFOLIO'],
    specs: ['150-YEAR ZERO-DECAY', 'CLASS 4 HAIL RESISTANCE', '0.7mm PRE-WEATHERED ZINC'],
    calcTitle: 'WIND UPLIFT & ROOF PITCH INCLINE',
    calcUnit: 'MPH RESISTANCE',
    calcMin: 80,
    calcMax: 200,
    calcDefault: 160,
    isLight: true
  }
];

function generateCss(app) {
  return `:root {
  --bg-color: ${app.bg};
  --surface-color: ${app.surface};
  --accent-color: ${app.accent};
  --accent-light: ${app.accentLight};
  --ink-primary: ${app.ink};
  --ink-muted: ${app.inkMuted};
  --border-soft: ${app.border};
  --font-display: ${app.fontDisplay};
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
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-soft);
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}

.edge-brand-lockup {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.edge-brand {
  color: var(--ink-primary);
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
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
  color: var(--ink-muted);
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
  color: var(--ink-primary);
}

.edge-nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.2s ease;
}

.edge-nav-links a:hover::after {
  width: 100%;
}

.edge-action-btn {
  appearance: none;
  background: var(--accent-color);
  color: #ffffff;
  border: 1px solid var(--accent-color);
  border-radius: 0;
  padding: 0.6rem 1.4rem;
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
  background: var(--ink-primary);
  border-color: var(--ink-primary);
  color: #ffffff;
}

/* HERO SECTION (ADAPTIVE LIGHT-MODE ARCHITECTURE) */
.hero-fullbleed {
  position: relative;
  width: 100vw;
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--ink-primary);
  padding-top: 100px;
  background: var(--bg-color);
}

.hero-body {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3rem;
}

.hero-copy-stack {
  max-width: 760px;
}

.hero-small-label {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-weight: 700;
  background: var(--accent-light);
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--border-soft);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 5rem);
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--ink-primary);
  margin-bottom: 1.25rem;
  text-wrap: balance;
}

.hero-subline {
  display: block;
  font-weight: 700;
  color: var(--accent-color);
  letter-spacing: -0.02em;
  font-size: 0.76em;
  margin-top: 0.3rem;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  line-height: 1.62;
  color: var(--ink-muted);
  max-width: 50ch;
  margin-bottom: 2.2rem;
}

.editorial-cta-btn {
  appearance: none;
  background: var(--accent-color);
  color: #ffffff;
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

.editorial-cta-btn:hover {
  background: var(--ink-primary);
  border-color: var(--ink-primary);
  color: #ffffff;
  transform: translateY(-1px);
}

.hero-quiet-caption {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-color);
  padding: 0.85rem 1.4rem;
  background: var(--surface-color);
  border: 1px solid var(--border-soft);
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  font-weight: 600;
}

/* INTERACTIVE LAB SECTION */
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
  box-shadow: 0 8px 30px rgba(0,0,0,0.03);
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
  font-size: 0.84rem;
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
  color: var(--ink-primary);
}
`;
}

function generateAppTsx(app) {
  return `import React, { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(${app.calcDefault});
  const [selectedSpec, setSelectedSpec] = useState('${app.navLinks[0]}');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">${app.brand}</a>
          <span className="edge-coords">${app.coords}</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          ${app.navLinks.map(l => `<a href="#workbench" onClick={() => setSelectedSpec('${l}')}>${l}</a>`).join('\n          ')}
        </nav>

        <a href="#dispatch" className="edge-action-btn">
          ${app.action}
        </a>
      </header>

      {/* HERO SECTION */}
      <header id="top" className="hero-fullbleed">
        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">${app.tag}</span>
            <h1 className="hero-title">
              ${app.headline1}
              <span className="hero-subline">${app.headline2}</span>
            </h1>
            <p className="hero-lead">${app.lead}</p>
            <a href="#workbench" className="editorial-cta-btn">
              Open Technical Diagnostics
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Core Guarantees">
            ${app.specs.map(s => `<span>${s}</span>`).join('\n            <span>·</span>\n            ')}
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="workbench" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">ENGINEERING SIMULATOR // ${app.brand.toUpperCase()}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--ink-primary)' }}>
              ${app.calcTitle}
            </h2>
            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Real-time metallurgical and operational tolerance calculator. Direct simulation against architectural standards with zero synthetic slop.
            </p>

            <div style={{ marginBottom: '1.5rem', background: 'var(--bg-color)', padding: '1.5rem', border: '1px solid var(--border-soft)' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                <span style={{ textTransform: 'uppercase' }}>SIMULATED LOAD CALIBRATION</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{metricValue} ${app.calcUnit}</span>
              </label>
              <input
                type="range"
                min="${app.calcMin}"
                max="${app.calcMax}"
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
                  <td className="spec-value">FULLY BONDED &amp; INSURED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ border: '1px solid var(--border-soft)', padding: '2.5rem', background: 'var(--bg-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 700 }}>LIVE SENSOR ARRAY</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600 }}>STATE: NOMINAL</span>
            </div>

            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '10px', background: 'var(--surface-color)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[25, 40, 65, 30, 80, 95, 75, 88, 60, 90].map((base, idx) => {
                const height = Math.min(100, Math.round((base * Number(metricValue)) / ${app.calcDefault}));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: \`\${height}%\`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(0,0,0,0.12)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)', fontWeight: 600 }}>
              <span>HARMONIC ATTENUATION</span>
              <span style={{ color: 'var(--accent-color)' }}>PASSING TOLERANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCH MATRIX */}
      <footer id="dispatch" style={{ borderTop: '1px solid var(--border-soft)', padding: '4rem 3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em', color: 'var(--ink-primary)' }}>
          ${app.brand}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-color)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>
          ${app.coords} · LICENSED ARCHITECTURAL CONTRACTOR
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

for (const app of APPS) {
  const appDir = path.join(ROOT_DIR, 'apps', app.name);
  const srcDir = path.join(appDir, 'src');

  fs.writeFileSync(path.join(srcDir, 'index.css'), generateCss(app));
  fs.writeFileSync(path.join(srcDir, 'App.tsx'), generateAppTsx(app));
  console.log(`✓ Applied unique adaptive daylight styling to: ${app.name}`);
}
