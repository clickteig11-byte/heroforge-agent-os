import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ArchitecturalWork {
  id: string;
  num: string;
  shortName: string;
  title: string;
  location: string;
  year: string;
  image: string;
  headlineLine1: string;
  headlineLine2: string;
  summary: string;
  stoneType: string;
  acousticRating: string;
  thermalSource: string;
  area: string;
}

const WORKS: ArchitecturalWork[] = [
  {
    id: 'reykjanes',
    num: '01',
    shortName: '01 Reykjanes',
    title: 'Reykjanes Thermal Pavilion',
    location: 'Grindavík, Iceland',
    year: '2025',
    image: '/references/plate-reykjavik-basalt.png',
    headlineLine1: 'Carved from silence',
    headlineLine2: 'and volcanic stone.',
    summary:
      'Cantilevered above the North Atlantic surf, raw basalt walls channel geothermal spring vapor into still bathing courts.',
    stoneType: 'Columnar Basalt',
    acousticRating: '18 dBA Interior',
    thermalSource: 'Geothermal (44°C)',
    area: '1,420 m²',
  },
  {
    id: 'naoshima',
    num: '02',
    shortName: '02 Naoshima',
    title: 'Setouchi Acoustic Sanctuary',
    location: 'Kagawa, Japan',
    year: '2024',
    image: '/references/plate-naoshima-acoustic.png',
    headlineLine1: 'Subterranean timber',
    headlineLine2: 'tuned to tidal stillness.',
    summary:
      'Set beneath an olive grove overlooking the Seto Inland Sea, charred hinoki baffles shape an unamplified string chamber.',
    stoneType: 'Concrete & Hinoki',
    acousticRating: '1.85s RT60',
    thermalSource: 'Tidal Exchange',
    area: '980 m²',
  },
  {
    id: 'atacama',
    num: '03',
    shortName: '03 Atacama',
    title: 'Atacama Travertine Courtyard',
    location: 'San Pedro, Chile',
    year: '2026',
    image: '/references/plate-atacama-travertine.png',
    headlineLine1: 'Quarried travertine',
    headlineLine2: 'under desert light.',
    summary:
      'At 2,400 meters elevation, thick thermal-mass walls absorb daytime solar radiation and release warmth through the Andean night.',
    stoneType: 'Andean Travertine',
    acousticRating: '14 dBA Stillness',
    thermalSource: 'Passive Solar Mass',
    area: '2,150 m²',
  },
];

export function App() {
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const currentHero = WORKS[activeHeroIdx];

  return (
    <div>
      {/* ====================================================================
          ARCHITECTURAL EDGE NAVIGATION (ZERO PILL BARS)
          ==================================================================== */}
      <header className="arch-edge-header">
        <div className="arch-brand-lockup">
          <a href="#top" className="arch-brand">
            Kurokawa &amp; Vane
          </a>
          <span className="arch-coords">REYKJAVIK // KYOTO // ZURICH</span>
        </div>

        <nav className="arch-nav-links" aria-label="Primary Navigation">
          <a href="#works">Monographs</a>
          <a href="#studio">Studio</a>
          <a href="#materials">Materiality</a>
        </nav>

        <button
          type="button"
          className="arch-action-btn"
          onClick={() => dialogRef.current?.showModal()}
        >
          Commission · Monograph IV
        </button>
      </header>

      {/* ====================================================================
          REFINED ARCHITECTURAL HERO:
          - Zero fake italic emphasis tropes
          - Clash Display Swiss headline
          - Clean architectural plate switcher
          - Unobstructed geothermal architecture
          ==================================================================== */}
      <header id="top" className="hero-fullbleed">
        <div className="hero-bg-layer">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHero.image}
              src={currentHero.image}
              alt={`${currentHero.title} — ${currentHero.location}`}
              className="hero-bg-image"
              initial={{ opacity: 0.4, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </div>
        <div className="hero-scrim" />

        <div className="hero-overlay-content">
          <motion.div
            key={currentHero.id}
            className="hero-copy-block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-small-label">
              {currentHero.num} / {currentHero.location} ({currentHero.year})
            </span>
            <h1 className="hero-display-title">
              {currentHero.headlineLine1}
              <span className="hero-subline">{currentHero.headlineLine2}</span>
            </h1>
            <p className="hero-summary">{currentHero.summary}</p>
            <a
              href="#works"
              className="arch-primary-btn"
            >
              View Monograph
            </a>
          </motion.div>

          <div className="hero-minimal-switcher" role="tablist" aria-label="Select Project">
            {WORKS.map((work, idx) => (
              <button
                key={work.id}
                type="button"
                role="tab"
                aria-selected={idx === activeHeroIdx}
                className={`arch-switch-plate ${idx === activeHeroIdx ? 'active' : ''}`}
                onClick={() => setActiveHeroIdx(idx)}
              >
                {work.shortName}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ====================================================================
          SECTION 1: SELECTED PROJECTS
          ==================================================================== */}
      <section id="works" className="editorial-section">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span className="section-kicker">01 · Selected Works</span>
            <h2 className="section-heading">Three sanctuaries in extreme landscapes.</h2>
          </div>

          <div className="segmented-pill-row" role="tablist" aria-label="Project Switcher">
            {WORKS.map((w, idx) => (
              <button
                key={w.id}
                type="button"
                role="tab"
                aria-selected={activeHeroIdx === idx}
                className={`seg-pill-btn ${activeHeroIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveHeroIdx(idx)}
              >
                {w.shortName}
              </button>
            ))}
          </div>
        </div>

        <article className="residence-showcase-card">
          <div className="residence-media">
            <img src={currentHero.image} alt={currentHero.title} />
          </div>
          <div className="residence-details">
            <div>
              <span className="section-kicker">
                Project {currentHero.num} · {currentHero.location}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.35rem',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  margin: '0.35rem 0 1rem',
                }}
              >
                {currentHero.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-body)', lineHeight: 1.65 }}>
                {currentHero.summary}
              </p>
            </div>

            <div>
              <dl className="work-specs-dl">
                <div>
                  <dt>Material</dt>
                  <dd>{currentHero.stoneType}</dd>
                </div>
                <div>
                  <dt>Acoustics</dt>
                  <dd>{currentHero.acousticRating}</dd>
                </div>
                <div>
                  <dt>Thermal</dt>
                  <dd>{currentHero.thermalSource}</dd>
                </div>
                <div>
                  <dt>Area</dt>
                  <dd>{currentHero.area}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </section>

      {/* ====================================================================
          SECTION 2: STUDIO PHILOSOPHY & MATERIALS BENTO
          ==================================================================== */}
      <section id="studio" className="editorial-section" style={{ paddingTop: '0.5rem' }}>
        <span className="section-kicker">02 · Studio &amp; Materials</span>
        <h2 className="section-heading">
          Buildings that weather into the geology from which they were quarried.
        </h2>

        <div id="materials" className="bento-12-grid">
          <article className="bento-card span-7">
            <div>
              <span className="section-kicker">Kyoto &amp; Zurich</span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.1rem',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  marginBottom: '0.85rem',
                }}
              >
                Excavating into coastal basalt and alpine stone rather than imposing glass boxes.
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--ink-body)', lineHeight: 1.68 }}>
                Every commission begins at the quarry face: testing how indigenous basalt, unfilled travertine, and
                kiln-charred cedar absorb rain, retain thermal energy, and quiet the human nervous system.
              </p>
            </div>
            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontStyle: 'italic',
                color: 'var(--ink-dark)',
                borderLeft: '2px solid var(--accent-bronze)',
                paddingLeft: '1.15rem',
                marginTop: '1.5rem',
              }}
            >
              “Permanence is achieved when a wall records rain, salt, and sun as patina.”
            </blockquote>
          </article>

          <article className="bento-card span-5" style={{ background: '#161514', color: '#f5f2eb' }}>
            <div>
              <span className="section-kicker" style={{ color: '#c5a478' }}>
                Interior Silence
              </span>
              <div className="bento-big-num" style={{ color: '#ffffff', marginTop: '0.35rem' }}>
                14 dBA
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#b5afa6', lineHeight: 1.6, marginTop: '1rem' }}>
              Porous volcanic stone walls attenuate gale-force Atlantic and Andean winds to a near-anechoic floor.
            </p>
          </article>

          <article className="bento-card span-4">
            <span className="section-kicker">Basalt</span>
            <div className="bento-big-num" style={{ margin: '0.4rem 0' }}>
              44°C
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-body)', lineHeight: 1.55 }}>
              Direct borehole geothermal radiant heating routed through hand-split basalt slabs.
            </p>
          </article>

          <article className="bento-card span-4">
            <span className="section-kicker">Hinoki</span>
            <div className="bento-big-num" style={{ margin: '0.4rem 0' }}>
              1.85s
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-body)', lineHeight: 1.55 }}>
              Calibrated RT60 reverberation inside the Setouchi subterranean string chamber.
            </p>
          </article>

          <article className="bento-card span-4">
            <span className="section-kicker">Travertine</span>
            <div className="bento-big-num" style={{ margin: '0.4rem 0' }}>
              2,400m
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-body)', lineHeight: 1.55 }}>
              Zero-HVAC passive solar thermal mass courtyard in San Pedro de Atacama.
            </p>
          </article>
        </div>
      </section>

      {/* Native HTML Dialog */}
      <dialog ref={dialogRef} className="folio-dialog">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400 }}>
            Commission Inquiry
          </h3>
          <button
            type="button"
            className="seg-pill-btn"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
        </div>

        {submitted ? (
          <div>
            <p style={{ fontSize: '0.94rem', color: 'var(--ink-body)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Thank you. Our Kyoto &amp; Zurich studio has registered your inquiry and will respond within two business
              days.
            </p>
            <button
              type="button"
              className="pill-cta-btn"
              style={{ background: '#161514', color: '#fcfaf6' }}
              onClick={() => {
                setSubmitted(false);
                dialogRef.current?.close();
              }}
            >
              Return
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div>
              <label
                htmlFor="patron-name"
                style={{ display: 'block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}
              >
                NAME
              </label>
              <input
                id="patron-name"
                required
                placeholder="Dr. Elena Rostova"
                style={{
                  width: '100%',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '10px',
                  border: 'var(--border-soft)',
                  background: 'var(--stone-paper)',
                }}
              />
            </div>
            <div>
              <label
                htmlFor="patron-email"
                style={{ display: 'block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}
              >
                EMAIL
              </label>
              <input
                id="patron-email"
                type="email"
                required
                placeholder="elena@eth-foundation.ch"
                style={{
                  width: '100%',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '10px',
                  border: 'var(--border-soft)',
                  background: 'var(--stone-paper)',
                }}
              />
            </div>
            <button
              type="submit"
              className="pill-cta-btn"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem',
                marginTop: '0.4rem',
                background: '#161514',
                color: '#fcfaf6',
              }}
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </dialog>
    </div>
  );
}

export default App;
