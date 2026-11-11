import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalibreZeroScene, CalibreFinish, ScrollState } from './components/CalibreZeroScene';

gsap.registerPlugin(ScrollTrigger);

const FINISH_OPTIONS: { id: CalibreFinish; label: string; swatch: string; desc: string }[] = [
  {
    id: 'german-silver',
    label: 'German Silver',
    swatch: '#dfdcd5',
    desc: 'Untreated maillechort (CuNi18Zn20) hand-beveled with gentian wood and diamond paste.',
  },
  {
    id: 'frosted-brass',
    label: 'Gilt Brass',
    swatch: '#d1b47a',
    desc: 'Wire-brushed horological brass with traditional Geneva straight graining.',
  },
  {
    id: 'anodized-slate',
    label: 'Brushed Titanium',
    swatch: '#5a5d64',
    desc: 'Micro-blasted Grade 5 titanium bridges with heat-blued steel screws.',
  },
];

const VITRINE_STAGES = [
  {
    id: 0,
    pill: '01 · Bridges',
    progress: 0.05,
    title: 'Three-quarter untreated German silver bridges.',
    body: 'Every interior angle is hand-polished with boxwood sticks so natural window light traces the perimeter of the gear train.',
    metricLabel: 'Alloy',
    metricValue: 'Raw Maillechort (CuNi18Zn20)',
  },
  {
    id: 1,
    pill: '02 · Exploded View',
    progress: 0.48,
    title: 'Coaxial separation across four serviceable planes.',
    body: 'Separate the regulator chapter ring, three-quarter bridge, free-sprung escapement carriage, and twin barrel along the central arbor.',
    metricLabel: 'Calibre Height',
    metricValue: '6.8 mm Total Stack',
  },
  {
    id: 2,
    pill: '03 · Escapement',
    progress: 0.72,
    title: 'Free-sprung balance wheel with Breguet overcoil.',
    body: 'Four gold inertia weights recessed along the balance rim allow micro-regulation across six positions without disturbing hairspring breathing.',
    metricLabel: 'Frequency',
    metricValue: '21,600 / 28,800 vph',
  },
  {
    id: 3,
    pill: '04 · Barrels',
    progress: 0.95,
    title: 'Series-coupled barrels for 96 hours of linear torque.',
    body: 'Twin mainsprings unwind in sequence to deliver four full days of constant amplitude from manual crown winding.',
    metricLabel: 'Power Reserve',
    metricValue: '96 Hours Autonomous',
  },
];

export function App() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [manualExplode, setManualExplode] = useState(false);
  const [highBeat, setHighBeat] = useState(false);
  const [finish, setFinish] = useState<CalibreFinish>('german-silver');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const vitrineRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const scrollStateRef = useRef<ScrollState>({
    progress: 0.05,
    activeChapter: 0,
    reducedMotion: false,
    manualExplode: false,
    highBeat: false,
    finish: 'german-silver',
  });

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    scrollStateRef.current.reducedMotion = mq.matches;
  }, []);

  useEffect(() => {
    scrollStateRef.current.manualExplode = manualExplode;
    scrollStateRef.current.highBeat = highBeat;
    scrollStateRef.current.finish = finish;
    scrollStateRef.current.reducedMotion = reducedMotion;
  }, [manualExplode, highBeat, finish, reducedMotion]);

  useEffect(() => {
    if (!vitrineRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: vitrineRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 0.5,
        onUpdate: (self) => {
          scrollStateRef.current.progress = Number(self.progress.toFixed(4));
        },
      });
    }, vitrineRef);
    return () => ctx.revert();
  }, []);

  const selectStage = (idx: number) => {
    setActiveChapter(idx);
    scrollStateRef.current.activeChapter = idx;
    scrollStateRef.current.progress = VITRINE_STAGES[idx].progress;
    if (idx === 1) setManualExplode(true);
  };

  const currentStage = VITRINE_STAGES[activeChapter];
  const currentFinishObj = FINISH_OPTIONS.find((f) => f.id === finish)!;

  return (
    <div>
      {/* ====================================================================
          ARCHITECTURAL EDGE NAVIGATION (ZERO PILL BARS)
          ==================================================================== */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Aetherion Genève
          </a>
          <span className="edge-coords">CH-1204 · RUE DU RHÔNE</span>
        </div>
        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#examination">Architecture</a>
          <a href="#craft">Craft</a>
          <a href="#specifications">Specifications</a>
        </nav>
        <button
          type="button"
          className="edge-action-btn"
          onClick={() => dialogRef.current?.showModal()}
        >
          Inquire · Comm. 2026
        </button>
      </header>

      {/* ====================================================================
          RESTRAINED ARCHITECTURAL HERO:
          - No fake italic emphasis tropes
          - Syne display typography
          - Pure Swiss layout
          - Unobstructed sunlit watch focal point
          ==================================================================== */}
      <header id="top" className="atelier-hero-fullbleed">
        <img
          src="/references/atelier-hero-bg.png"
          alt="Calibre 01 manual-wind chronograph movement resting on a sunlit travertine workbench in Geneva"
          className="atelier-hero-photo"
        />
        <div className="atelier-hero-scrim" />

        <div className="atelier-hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">Calibre 01 · Geneva Horlogerie</span>
            <h1 className="atelier-hero-title">
              German Silver
              <span className="hero-subline">Shaped By Raw Light.</span>
            </h1>
            <p className="atelier-hero-lead">
              Thirty-eight manual-wind chronographs finished and regulated by hand each year in our Rue du Rhône
              workshop.
            </p>
            <a
              href="#examination"
              className="editorial-cta-btn"
            >
              Explore Movement
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Key Specifications">
            <span>312 Parts</span>
            <span>·</span>
            <span>96h Reserve</span>
            <span>·</span>
            <span>Raw Maillechort</span>
          </div>
        </div>
      </header>

      {/* ====================================================================
          SECTION 1: INTERACTIVE 3D MOVEMENT EXAMINATION
          ==================================================================== */}
      <section id="examination" ref={vitrineRef} className="studio-section">
        <div className="section-header-row">
          <div>
            <span className="section-kicker">01 · Movement Architecture</span>
            <h2 className="editorial-headline">Inspect the Calibre 01 assembly.</h2>
          </div>

          <div className="pill-selector-group" role="tablist" aria-label="Movement Stages">
            {VITRINE_STAGES.map((st) => (
              <button
                key={st.id}
                type="button"
                role="tab"
                aria-selected={activeChapter === st.id}
                className={`pill-option-btn ${activeChapter === st.id ? 'active' : ''}`}
                onClick={() => selectStage(st.id)}
              >
                {st.pill}
              </button>
            ))}
          </div>
        </div>

        <div className="vitrine-3d-shell">
          <div className="vitrine-left-panel">
            <div>
              <span className="section-kicker">Stage 0{activeChapter + 1} of 04</span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.2rem',
                  fontWeight: 400,
                  lineHeight: 1.06,
                  margin: '0.35rem 0 1rem',
                }}
              >
                {currentStage.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-secondary)', lineHeight: 1.65 }}>
                {currentStage.body}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  padding: '0.95rem 1.2rem',
                  borderRadius: '14px',
                  background: 'var(--bg-paper)',
                  border: 'var(--border-soft)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--ink-muted)' }}>
                  {currentStage.metricLabel}
                </span>
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}>
                  {currentStage.metricValue}
                </strong>
              </div>

              <div className="pill-selector-group" role="group" aria-label="Bridge Finish">
                {FINISH_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`pill-option-btn ${finish === opt.id ? 'active' : ''}`}
                    onClick={() => setFinish(opt.id)}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        background: opt.swatch,
                        border: '1px solid rgba(0,0,0,0.25)',
                      }}
                    />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="vitrine-right-canvas">
            {webglSupported ? (
              <CalibreZeroScene scrollStateRef={scrollStateRef} />
            ) : (
              <img
                src="/references/atelier-hero-bg.png"
                alt="Calibre 01 Fallback View"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}

            <div className="floating-3d-pill-dock">
              <button
                type="button"
                className="pill-option-btn"
                aria-pressed={manualExplode}
                onClick={() => setManualExplode((v) => !v)}
              >
                {manualExplode ? 'Assemble' : 'Explode View'}
              </button>
              <button
                type="button"
                className="pill-option-btn"
                aria-pressed={highBeat}
                onClick={() => setHighBeat((v) => !v)}
              >
                {highBeat ? '28,800 vph' : '21,600 vph'}
              </button>
              <button
                type="button"
                className="pill-option-btn"
                aria-pressed={reducedMotion}
                onClick={() => setReducedMotion((v) => !v)}
              >
                {reducedMotion ? 'Resume' : 'Pause'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: HOROLOGICAL CRAFT & BENTO SPECIFICATIONS
          ==================================================================== */}
      <section id="craft" className="studio-section" style={{ paddingTop: '0.5rem' }}>
        <div className="section-header-row">
          <div>
            <span className="section-kicker">02 · Hand Craftsmanship</span>
            <h2 className="editorial-headline">Built for century-scale serviceability.</h2>
          </div>
        </div>

        <div className="bento-12-grid">
          <article className="bento-card span-7">
            <div>
              <span className="section-kicker">{currentFinishObj.label}</span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.1rem',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  marginBottom: '0.85rem',
                }}
              >
                Unplated bridges that develop a warm patina over decades.
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--ink-secondary)', lineHeight: 1.65 }}>
                {currentFinishObj.desc} Pressed 18k gold chatons secure the corundum jewel bearings while heat-blued
                screws provide clear visual indexing on the watchmaker&apos;s bench.
              </p>
            </div>
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: 'var(--border-soft)',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--ink-muted)',
              }}
            >
              <span>TOLERANCE: ±0.002 MM</span>
              <span>GENEVA ATELIER</span>
            </div>
          </article>

          <article className="bento-card span-5" style={{ background: '#171513', color: '#f5f2eb' }}>
            <div>
              <span className="section-kicker" style={{ color: '#c5a478' }}>
                Components
              </span>
              <div className="bento-big-num" style={{ color: '#ffffff', marginTop: '0.35rem' }}>
                312
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#b5afa6', lineHeight: 1.6, marginTop: '1rem' }}>
              Every wheel spoke, bridge bevel, and steel jewel sink is finished by hand before first assembly.
            </p>
          </article>

          <article id="specifications" className="bento-card span-4">
            <span className="section-kicker">Power Reserve</span>
            <div className="bento-big-num" style={{ margin: '0.5rem 0' }}>
              96h
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
              Four days of constant-force autonomy delivered via two series-coupled mainspring barrels.
            </p>
          </article>

          <article className="bento-card span-4">
            <span className="section-kicker">Regulation</span>
            <div className="bento-big-num" style={{ margin: '0.5rem 0' }}>
              6 Pos.
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
              Adjusted across six positions and two temperatures with a hand-formed Breguet overcoil.
            </p>
          </article>

          <article className="bento-card span-4">
            <span className="section-kicker">Annual Edition</span>
            <div className="bento-big-num" style={{ margin: '0.5rem 0' }}>
              38
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
              Individually numbered movements signed and assembled by a single watchmaker in Geneva.
            </p>
          </article>
        </div>
      </section>

      {/* Native HTML Dialog */}
      <dialog ref={dialogRef} className="atelier-dialog">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 500 }}>
            Private Allocation Inquiry
          </h3>
          <button
            type="button"
            className="pill-option-btn"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
        </div>

        {submitted ? (
          <div>
            <p style={{ fontSize: '0.94rem', color: 'var(--ink-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Your inquiry has been recorded for the 2026 Geneva production tranche. Our workshop will respond within
              48 hours.
            </p>
            <button
              type="button"
              className="pill-cta-btn"
              style={{ background: '#171513', color: '#fcfaf6' }}
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
          >
            <div className="form-field">
              <label htmlFor="collector-name">Name</label>
              <input id="collector-name" required placeholder="Henri de Montmollin" />
            </div>
            <div className="form-field">
              <label htmlFor="collector-email">Email</label>
              <input id="collector-email" type="email" required placeholder="henri@geneve-private.ch" />
            </div>
            <div className="form-field">
              <label htmlFor="collector-finish">Bridge Alloy</label>
              <select
                id="collector-finish"
                value={finish}
                onChange={(e) => setFinish(e.target.value as CalibreFinish)}
              >
                <option value="german-silver">German Silver (Maillechort)</option>
                <option value="frosted-brass">Gilt Brass</option>
                <option value="anodized-slate">Brushed Titanium</option>
              </select>
            </div>
            <button
              type="submit"
              className="pill-cta-btn"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem',
                marginTop: '0.5rem',
                background: '#171513',
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
