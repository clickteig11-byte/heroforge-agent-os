import fs from 'fs';
import path from 'path';

const ROOT_DIR = '/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1';
const APPS_DIR = path.join(ROOT_DIR, 'apps');

const SITES_CONFIG = [
  {
    dirName: 'site-3-valkyr',
    repoName: 'valkyr-orbital',
    brandName: 'Valkyr Orbital',
    title: 'VALKYR // CRYOGENIC & ION PROPULSION',
    metaDesc: 'Autonomous deep-space ion propulsion and closed-cycle cryogenic telemetry systems.',
    heroImgSrc: '/references/sites/site-3-valkyr.jpg',
    sourceImg: path.join(ROOT_DIR, 'apps/gallery/public/references/sites/site-3-valkyr.jpg'),
    fontLinks: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
    `,
    theme: {
      bg: '#0a0d14',
      surface: '#111724',
      accent: '#64a0e8',
      ink: '#f1f5f9',
      subline: 'ENGINEERED FOR DEEP SPACE.',
      headline: 'ION PROPULSION SYSTEM',
      lead: 'High-impulse electrostatic ion thrusters and closed-cycle cryogenics engineered for autonomous outer-solar exploration.',
      tag: 'TRAJECTORY IV · ORBITAL ESCAPE',
      action: 'TRANSMIT MISSION SPECS',
      coords: 'JPL · PASADENA // DEEP SPACE NET',
      navLinks: ['TRAJECTORY', 'CRYOGENICS', 'TELEMETRY'],
      specs: ['4,200s ISP', 'XENON HALL-EFFECT', '35kW CRYOGENIC']
    },
    appType: 'valkyr'
  },
  {
    dirName: 'site-4-sora',
    repoName: 'sora-klang',
    brandName: 'Sora & Klang',
    title: 'SORA & KLANG // SOLID OAK ACOUSTICS',
    metaDesc: 'Single-origin Scandinavian white oak acoustic monitors with point-source coaxial ribbon drivers.',
    heroImgSrc: '/references/sites/site-4-sora.jpg',
    sourceImg: path.join(ROOT_DIR, 'apps/gallery/public/references/sites/site-4-sora.jpg'),
    fontLinks: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&f[]=cabinet-grotesk@700,800,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    `,
    theme: {
      bg: '#12100d',
      surface: '#1c1914',
      accent: '#e68a3e',
      ink: '#f6f2eb',
      headline: 'ANALOG PURITY',
      subline: 'MILLED SOLID OAK REFERENCE.',
      lead: 'Near-field studio monitors machined from single-origin Scandinavian white oak with point-source coaxial ribbon drivers.',
      tag: 'REFERENCE 01 · ACOUSTIC MONITOR',
      action: 'AUDITION RECORDINGS',
      coords: 'COPENHAGEN · KYOTO // 96kHz ANALOG',
      navLinks: ['ACOUSTICS', 'ENCLOSURE', 'CROSSOVER'],
      specs: ['28Hz–42kHz', 'SOLID NORDIC OAK', 'BERYLLIUM RIBBON']
    },
    appType: 'sora'
  },
  {
    dirName: 'site-5-vespers',
    repoName: 'atelier-vespers',
    brandName: 'Atelier Vespers',
    title: 'ATELIER VESPERS // BOTANICAL RESINS',
    metaDesc: 'Slow cold-extraction resins and wild rockrose aged in dark glass demijohns across Provencal winters.',
    heroImgSrc: '/references/sites/site-5-vespers.jpg',
    sourceImg: path.join(ROOT_DIR, 'apps/gallery/public/references/sites/site-5-vespers.jpg'),
    fontLinks: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
    `,
    theme: {
      bg: '#111311',
      surface: '#181c18',
      accent: '#9cb58a',
      ink: '#f2f0eb',
      headline: 'BOTANICAL RESIN EXTRACTION',
      subline: 'SLOW DISTILLATION NO. 09.',
      lead: 'Slow cold-extraction resins and wild rockrose aged in dark glass demijohns across Provencal winters.',
      tag: 'DISTILLATION NO. 09 · PROVENCE',
      action: 'ACQUIRE FLACON',
      coords: 'GRASSE · VALENSOLE // WINTER HARVEST',
      navLinks: ['FORMULATIONS', 'HARVESTS', 'DISTILLERY'],
      specs: ['18-MONTH CURE', 'HAND-PRESSED LABDANUM', 'UV-DARK GLASS']
    },
    appType: 'vespers'
  },
  {
    dirName: 'site-6-veloce',
    repoName: 'veloce-morphos',
    brandName: 'Veloce Morphos',
    title: 'VELOCE MORPHOS // AERODINAMICA TORINO',
    metaDesc: 'Autoclaved dry carbon fiber coachwork with active ground-effect venturi tunnels and 720hp V12.',
    heroImgSrc: '/references/sites/site-6-veloce.jpg',
    sourceImg: path.join(ROOT_DIR, 'apps/gallery/public/references/sites/site-6-veloce.jpg'),
    fontLinks: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@600,700,800,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
    `,
    theme: {
      bg: '#0c0c0e',
      surface: '#151518',
      accent: '#e24a3b',
      ink: '#f5f5f7',
      headline: 'TIPO 04 CARBON GT',
      subline: 'AERODYNAMICS SHAPED BY SPEED.',
      lead: 'Autoclaved dry carbon coachwork with active ground-effect venturi tunnels and 720hp dry-sump naturally aspirated V12.',
      tag: 'TIPO 04 GT · CHASSIS 007',
      action: 'COMMISSION CHASSIS',
      coords: 'TORINO · MONZA // 0.24 Cd TUNNEL',
      navLinks: ['DOWNFORCE', 'VENTURI', 'POWERTRAIN'],
      specs: ['1,080kg DRY', '720HP AT 9,200RPM', '680KG DOWNFORCE']
    },
    appType: 'veloce'
  },
  {
    dirName: 'site-7-solaris',
    repoName: 'solaris-lensworks',
    brandName: 'Solaris Lensworks',
    title: 'SOLARIS // WETZLAR CINEMA OPTICS',
    metaDesc: 'Full-frame fluorite cinema primes with 16-blade circular iris and zero chromatic aberration.',
    heroImgSrc: '/references/sites/site-7-solaris.jpg',
    sourceImg: path.join(ROOT_DIR, 'apps/gallery/public/references/sites/site-7-solaris.jpg'),
    fontLinks: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=cabinet-grotesk@700,800,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
    `,
    theme: {
      bg: '#0a0d12',
      surface: '#121720',
      accent: '#38bdf8',
      ink: '#f1f5f9',
      headline: 'APO 50MM T1.3 CINEMA OPTICS',
      subline: 'ZERO CHROMATIC ABERRATION.',
      lead: 'Full-frame cinema primes hand-ground from fluorite crystal with circular 16-blade aperture iris and anamorphic flare suppression.',
      tag: 'APOCHROMATIC PRIME · T1.3',
      action: 'RESERVE PRODUCTION SET',
      coords: 'WETZLAR · GERMANY // 8K RESOLUTION',
      navLinks: ['RESOLUTION', 'IRIS', 'ANAMORPHIC'],
      specs: ['T1.3 FAST IRIS', '16 CURVED BLADES', 'FLUORITE CRYSTAL']
    },
    appType: 'solaris'
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
      build: 'tsc -b && vite build',
      preview: 'vite preview'
    },
    dependencies: {
      'gsap': '3.12.7',
      'lucide-react': '0.475.0',
      'motion': '12.4.7',
      'react': '18.3.1',
      'react-dom': '18.3.1'
    }
  }, null, 2);
}

function generateViteConfig() {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  }
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
    ${cfg.fontLinks}
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
  --bg-color: ${cfg.theme.bg};
  --surface-color: ${cfg.theme.surface};
  --accent-color: ${cfg.theme.accent};
  --ink-primary: ${cfg.theme.ink};
  --border-soft: rgba(255, 255, 255, 0.12);
  --font-display: ${cfg.appType === 'vespers' ? "'Instrument Serif', Georgia, serif" : cfg.appType === 'veloce' ? "'Syne', sans-serif" : cfg.appType === 'solaris' ? "'Clash Display', sans-serif" : "'Space Grotesk', 'Cabinet Grotesk', sans-serif"};
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
  background: rgba(10, 13, 20, 0.85);
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
  color: #0c0d12;
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
  color: #0c0d12;
}

/* HERO SECTION */
.hero-fullbleed {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 680px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ffffff;
  padding-top: 64px;
}

.hero-bg-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(
      90deg,
      rgba(8, 10, 14, 0.85) 0%,
      rgba(8, 10, 14, 0.45) 45%,
      rgba(8, 10, 14, 0.08) 75%
    ),
    linear-gradient(
      180deg,
      rgba(8, 10, 14, 0.35) 0%,
      rgba(8, 10, 14, 0) 35%,
      rgba(8, 10, 14, 0.9) 100%
    );
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
  max-width: 620px;
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
  font-size: clamp(2.4rem, 4.2vw, 4.2rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 1.15rem;
  text-wrap: balance;
}

.hero-subline {
  display: block;
  font-weight: 700;
  color: var(--accent-color);
  letter-spacing: -0.02em;
  font-size: 0.78em;
  margin-top: 0.2rem;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 44ch;
  margin-bottom: 1.85rem;
}

.editorial-cta-btn {
  appearance: none;
  background: var(--accent-color);
  color: #0c0d12;
  border: 1px solid var(--accent-color);
  border-radius: 0;
  padding: 0.85rem 1.85rem;
  font-family: var(--font-sans);
  font-size: 0.76rem;
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
  color: #0c0d12;
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
  background: rgba(10, 13, 20, 0.75);
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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  border: 1px solid var(--border-soft);
  background: var(--surface-color);
  padding: 3rem;
}

.lab-display-card {
  border: 1px solid var(--border-soft);
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
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
  const [metricValue, setMetricValue] = useState(75);
  const [activeTab, setActiveTab] = useState('${cfg.theme.navLinks[0]}');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            ${cfg.brandName}
          </a>
          <span className="edge-coords">${cfg.theme.coords}</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          ${cfg.theme.navLinks.map(l => `<a href="#details" onClick={() => setActiveTab('${l}')}>${l}</a>`).join('\n          ')}
        </nav>

        <a href="#inquire" className="edge-action-btn">
          ${cfg.theme.action}
        </a>
      </header>

      {/* FULL-BLEED ARCHITECTURAL HERO (ZERO ITALIC SLOP, ZERO PILL BARS) */}
      <header id="top" className="hero-fullbleed">
        <img
          src="${cfg.heroImgSrc}"
          alt="${cfg.title}"
          className="hero-bg-photo"
        />
        <div className="hero-scrim" />

        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">${cfg.theme.tag}</span>
            <h1 className="hero-title">
              ${cfg.theme.headline}
              <span className="hero-subline">${cfg.theme.subline}</span>
            </h1>
            <p className="hero-lead">${cfg.theme.lead}</p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Engineering Readouts">
            ${cfg.theme.specs.map(s => `<span>${s}</span>`).join('\n            <span>·</span>\n            ')}
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">ENGINEERING BENCH // ACTIVE MODE</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Precision Telemetry & Output
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Calibrated performance envelope with real-time operational feedback. Zero synthetic slop, machined to tolerance.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                <span>CALIBRATION ENVELOPE</span>
                <span style={{ color: 'var(--accent-color)' }}>{metricValue}% NOMINAL</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE SUB-SYSTEM</td>
                  <td className="spec-value">{activeTab}</td>
                </tr>
                <tr>
                  <td className="spec-label">EFFICIENCY FACTOR</td>
                  <td className="spec-value">{(0.91 + (metricValue / 1000)).toFixed(3)} η</td>
                </tr>
                <tr>
                  <td className="spec-label">THERMAL DISSIPATION</td>
                  <td className="spec-value">{(24 + (metricValue * 0.4)).toFixed(1)} °C</td>
                </tr>
                <tr>
                  <td className="spec-label">STATUS PROTOCOL</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>VERIFIED · ZERO TOLERANCE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)' }}>DIAGNOSTIC VISUALIZER</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>STAGE: {metricValue} / 100</span>
            </div>

            <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'rgba(0,0,0,0.5)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[30, 45, 60, 40, 75, 90, 85, 95, 70, 80, 65, 88].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 75));
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
              <span>HARMONIC HARVEST</span>
              <span style={{ color: 'var(--accent-color)' }}>DELTA-V PASSING</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          ${cfg.brandName}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
          ${cfg.theme.coords} · COMMISSIONS &amp; SPECIFICATIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}
`;
}

// Scaffold all 5 sites
for (const cfg of SITES_CONFIG) {
  const targetDir = path.join(APPS_DIR, cfg.dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // package.json
  fs.writeFileSync(path.join(targetDir, 'package.json'), generatePackageJson(cfg.dirName));
  // vite.config.ts
  fs.writeFileSync(path.join(targetDir, 'vite.config.ts'), generateViteConfig());
  // index.html
  fs.writeFileSync(path.join(targetDir, 'index.html'), generateIndexHtml(cfg));
  // tsconfig.json
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
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true
    },
    include: ['src']
  }, null, 2));

  // src directory
  const srcDir = path.join(targetDir, 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  fs.writeFileSync(path.join(srcDir, 'main.tsx'), generateMainTsx());
  fs.writeFileSync(path.join(srcDir, 'index.css'), generateCss(cfg));
  fs.writeFileSync(path.join(srcDir, 'App.tsx'), generateAppTsx(cfg));

  // public/references/sites directory for the hero image
  const publicRefDir = path.join(targetDir, 'public/references/sites');
  fs.mkdirSync(publicRefDir, { recursive: true });

  const destImg = path.join(targetDir, 'public', cfg.heroImgSrc);
  fs.copyFileSync(cfg.sourceImg, destImg);

  console.log(`✓ Scaffolded standalone app: ${cfg.dirName} (${cfg.repoName})`);
}
