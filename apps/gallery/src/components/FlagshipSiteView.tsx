import React, { useState } from 'react';
import { FlagshipSiteSpec } from '../data/flagshipSites';

interface FlagshipSiteViewProps {
  site: FlagshipSiteSpec;
  isEmbedded?: boolean;
  onSelectSwitchIndex?: (idx: number) => void;
}

const B_PLATES = [
  {
    label: '01 / GRINDAVÍK, ICELAND (2025)',
    line1: 'Carved from silence',
    line2: 'and volcanic stone.',
    lead: 'Cantilevered above the North Atlantic surf, raw basalt walls channel geothermal spring vapor into still bathing courts.',
    img: '/references/website-b/plate-reykjavik-basalt.jpg',
  },
  {
    label: '02 / NAOSHIMA, SETO INLAND SEA (2025)',
    line1: 'Tidal resonance in',
    line2: 'charred cedar walls.',
    lead: 'Subterranean acoustic chambers cast against Hinoki timber frame the shifting horizon of the Seto Inland Sea.',
    img: '/references/website-b/plate-naoshima-acoustic.jpg',
  },
  {
    label: '03 / SAN PEDRO DE ATACAMA, CHILE (2024)',
    line1: 'Rammed desert earth',
    line2: 'under astral light.',
    lead: 'Compacted iron-oxide earth walls stabilize thirty-five-degree desert temperature swings at 3,200 meters.',
    img: '/references/website-b/plate-atacama-travertine.jpg',
  },
];

export const FlagshipSiteView: React.FC<FlagshipSiteViewProps> = ({ site, isEmbedded = false }) => {
  const [activeModeId, setActiveModeId] = useState<string>(site.sections.interactiveModes[0]?.id || '');
  const [activePlateIdx, setActivePlateIdx] = useState<number>(0);
  const [inquireOpen, setInquireOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const activeMode =
    site.sections.interactiveModes.find((m) => m.id === activeModeId) || site.sections.interactiveModes[0];

  const isKurokawa = site.slug === 'kurokawa-vane';
  const currentHeroImg = isKurokawa ? B_PLATES[activePlateIdx].img : site.heroImage;
  const currentSmallLabel = isKurokawa ? B_PLATES[activePlateIdx].label : site.hero.smallLabel;
  const currentLine1 = isKurokawa ? B_PLATES[activePlateIdx].line1 : site.hero.headlineLine1;
  const currentLine2 = isKurokawa ? B_PLATES[activePlateIdx].line2 : site.hero.headlineLine2;
  const currentLead = isKurokawa ? B_PLATES[activePlateIdx].lead : site.hero.leadSentence;

  return (
    <div
      style={{
        backgroundColor: site.palette.bg,
        color: site.palette.ink,
        fontFamily: site.fontFamily.sans,
        minHeight: isEmbedded ? '100%' : '100vh',
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* FLOATING PILL NAVIGATION (1 OF 5 RESTRAINED HERO ELEMENTS) */}
      <header
        style={{
          position: 'sticky',
          top: '18px',
          zIndex: 40,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px',
          marginBottom: '-64px',
          pointerEvents: 'none',
        }}
      >
        <nav
          aria-label={`${site.brand} Primary Navigation`}
          style={{
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '24px',
            background: 'rgba(16, 15, 14, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(252, 250, 246, 0.16)',
            borderRadius: '9999px',
            padding: '6px 8px 6px 20px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.28)',
          }}
        >
          <a
            href="#top"
            style={{
              color: site.palette.ink,
              textDecoration: 'none',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {site.hero.navBrand}
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="flagship-nav-links">
            {site.hero.navLinks.map((lbl, idx) => (
              <a
                key={lbl}
                href={idx === 0 ? '#interactive-stage' : idx === 1 ? '#architecture' : '#specifications'}
                style={{
                  color: 'rgba(252, 250, 246, 0.82)',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: '9999px',
                }}
              >
                {lbl}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setInquireOpen(true);
            }}
            style={{
              background: site.palette.ctaBg,
              color: site.palette.ctaInk,
              border: 'none',
              borderRadius: '9999px',
              padding: '7px 16px',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {site.hero.navCta}
          </button>
        </nav>
      </header>

      {/* FULL-BLEED MINIMALIST A+ HERO */}
      <section
        id="top"
        style={{
          position: 'relative',
          width: '100%',
          height: isEmbedded ? '640px' : '100vh',
          minHeight: '580px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <img
          src={currentHeroImg}
          alt={site.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background:
              'linear-gradient(90deg, rgba(12,12,12,0.72) 0%, rgba(12,12,12,0.28) 44%, rgba(12,12,12,0.04) 76%), linear-gradient(180deg, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0) 42%, rgba(12,12,12,0.68) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1360px',
            width: '100%',
            margin: '0 auto',
            padding: '0 44px 44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Editorial Stack: 1 small label, 2-line balanced headline, 1 short sentence, 1 primary CTA */}
          <div style={{ maxWidth: '580px' }}>
            <span
              style={{
                display: 'block',
                fontFamily: site.fontFamily.mono,
                fontSize: '0.68rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: site.palette.accent,
                marginBottom: '12px',
              }}
            >
              {currentSmallLabel}
            </span>

            <h1
              style={{
                fontFamily: site.fontFamily.display,
                fontSize: isEmbedded ? 'clamp(2.1rem, 3.3vw, 3.25rem)' : 'clamp(2.35rem, 3.8vw, 3.85rem)',
                fontWeight: 400,
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: '0 0 14px 0',
              }}
            >
              {currentLine1}
              <br />
              <em style={{ fontStyle: 'italic', color: site.palette.ink }}>{currentLine2}</em>
            </h1>

            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.6,
                color: 'rgba(252, 250, 246, 0.86)',
                maxWidth: '38ch',
                margin: '0 0 24px 0',
              }}
            >
              {currentLead}
            </p>

            <a
              href="#interactive-stage"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: site.palette.ctaBg,
                color: site.palette.ctaInk,
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              {site.hero.primaryCta}
            </a>
          </div>

          {/* Right Single Supporting Element: Either 3-Pill Switcher or Quiet Specification Line */}
          {site.hero.switcherPills ? (
            <div
              role="group"
              aria-label="Project Switcher"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(18, 18, 18, 0.68)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(252, 250, 246, 0.16)',
                borderRadius: '9999px',
                padding: '4px',
              }}
            >
              {site.hero.switcherPills.map((pill, idx) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActivePlateIdx(idx)}
                  style={{
                    background: activePlateIdx === idx ? site.palette.ctaBg : 'transparent',
                    color: activePlateIdx === idx ? site.palette.ctaInk : 'rgba(252, 250, 246, 0.78)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {pill}
                </button>
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: site.fontFamily.mono,
                fontSize: '0.68rem',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: 'rgba(252, 250, 246, 0.8)',
                paddingBottom: '4px',
                borderBottom: '1px solid rgba(252, 250, 246, 0.26)',
              }}
            >
              {site.hero.quietCaption}
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE ENGINEERING / MATERIAL INSPECTION STAGE */}
      <section
        id="interactive-stage"
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '72px 40px 36px',
        }}
      >
        <div
          style={{
            background: site.palette.surface,
            border: '1px solid rgba(252, 250, 246, 0.1)',
            borderRadius: '20px',
            padding: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: site.fontFamily.mono,
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: site.palette.accent,
                }}
              >
                INTERACTIVE TELEMETRY &amp; MATERIAL VITRINE
              </span>
              <h2
                style={{
                  fontFamily: site.fontFamily.display,
                  fontSize: 'clamp(1.65rem, 2.4vw, 2.25rem)',
                  fontWeight: 400,
                  margin: '6px 0 4px',
                }}
              >
                {site.sections.interactiveTitle}
              </h2>
              <p style={{ margin: 0, fontSize: '0.88rem', color: site.palette.muted }}>
                {site.sections.interactiveSubtitle}
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                gap: '6px',
                background: 'rgba(0,0,0,0.32)',
                padding: '5px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.08)',
                flexWrap: 'wrap',
              }}
            >
              {site.sections.interactiveModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveModeId(mode.id)}
                  style={{
                    background: activeMode?.id === mode.id ? site.palette.ctaBg : 'transparent',
                    color: activeMode?.id === mode.id ? site.palette.ctaInk : site.palette.ink,
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '7px 14px',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {activeMode && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                padding: '22px',
                background: 'rgba(0, 0, 0, 0.25)',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: site.fontFamily.mono,
                    fontSize: '0.72rem',
                    color: site.palette.accent,
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  ACTIVE STATE READOUT
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>{activeMode.readout}</div>
                <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.6, color: site.palette.muted }}>
                  {activeMode.description}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div>
                  <div style={{ fontFamily: site.fontFamily.mono, fontSize: '0.68rem', color: site.palette.muted }}>
                    HERO RESTRAINT AUDIT
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, marginTop: '4px' }}>
                    Grade {site.grade} · {site.restraintAudit.subjectUnobstructedPct}% Unobstructed Subject
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: site.fontFamily.mono,
                    fontSize: '0.72rem',
                    padding: '5px 11px',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.08)',
                    color: site.palette.accent,
                  }}
                >
                  2-Line Wrap Verified
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BELOW-THE-FOLD ARCHITECTURAL / ENGINEERING CARDS */}
      <section
        id="architecture"
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '36px 40px',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              fontFamily: site.fontFamily.mono,
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: site.palette.accent,
            }}
          >
            {site.sections.sectionKicker}
          </span>
          <h2
            style={{
              fontFamily: site.fontFamily.display,
              fontSize: 'clamp(1.75rem, 2.6vw, 2.5rem)',
              fontWeight: 400,
              margin: '6px 0 0',
            }}
          >
            {site.sections.sectionTitle}
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {site.sections.cards.map((card) => (
            <article
              key={card.index}
              style={{
                background: site.palette.surface,
                border: '1px solid rgba(252, 250, 246, 0.1)',
                borderRadius: '18px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: site.fontFamily.mono,
                    fontSize: '0.7rem',
                    color: site.palette.accent,
                    marginBottom: '12px',
                  }}
                >
                  <span>{card.index}</span>
                  <span>{card.metric}</span>
                </div>
                <h3
                  style={{
                    fontFamily: site.fontFamily.display,
                    fontSize: '1.45rem',
                    fontWeight: 400,
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.62, color: site.palette.muted }}>
                  {card.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SPECIFICATION LEDGER */}
      <section
        id="specifications"
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '24px 40px 80px',
        }}
      >
        <div
          style={{
            background: site.palette.surface,
            border: '1px solid rgba(252, 250, 246, 0.1)',
            borderRadius: '18px',
            padding: '28px 32px',
          }}
        >
          <div
            style={{
              fontFamily: site.fontFamily.mono,
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: site.palette.accent,
              marginBottom: '16px',
            }}
          >
            02 / SPECIFICATION LEDGER &amp; PROVENANCE
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {site.sections.specs.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(252, 250, 246, 0.08)',
                }}
              >
                <div style={{ fontFamily: site.fontFamily.mono, fontSize: '0.68rem', color: site.palette.muted }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 600, margin: '4px 0 2px' }}>{s.value}</div>
                <div style={{ fontSize: '0.78rem', color: site.palette.muted }}>{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRE MODAL */}
      {inquireOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0,0,0,0.72)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              background: site.palette.surface,
              color: site.palette.ink,
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '20px',
              maxWidth: '440px',
              width: '100%',
              padding: '28px',
            }}
          >
            <div style={{ fontFamily: site.fontFamily.mono, fontSize: '0.68rem', color: site.palette.accent }}>
              PRIVATE DOSSIER &amp; ALLOCATION
            </div>
            <h3 style={{ fontFamily: site.fontFamily.display, fontSize: '1.7rem', margin: '6px 0 12px' }}>
              {site.brand} — {site.hero.navCta}
            </h3>
            {submitted ? (
              <p style={{ fontSize: '0.9rem', color: site.palette.muted, lineHeight: 1.6 }}>
                Your dossier inquiry for <strong>{site.brand}</strong> has been logged. Our atelier director will respond
                within 24 hours.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <input
                  required
                  placeholder="Full Name or Studio"
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.16)',
                    background: 'rgba(0,0,0,0.3)',
                    color: '#fff',
                  }}
                />
                <input
                  required
                  type="email"
                  placeholder="Direct Email"
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.16)',
                    background: 'rgba(0,0,0,0.3)',
                    color: '#fff',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: site.palette.ctaBg,
                    color: site.palette.ctaInk,
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '11px 18px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginTop: '4px',
                  }}
                >
                  Request Private Monograph
                </button>
              </form>
            )}
            <button
              type="button"
              onClick={() => setInquireOpen(false)}
              style={{
                marginTop: '14px',
                background: 'transparent',
                color: site.palette.muted,
                border: 'none',
                fontSize: '0.78rem',
                cursor: 'pointer',
              }}
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
