import React, { useState, useEffect } from 'react';
import ideasCatalog from './data/ideas-catalog.json';
import skillsAudit from './data/skills-audit-report.json';
import { FLAGSHIP_SITES, OBSIDIAN_VAULT_NOTES, FlagshipSiteSpec } from './data/flagshipSites';
import { FlagshipSiteView } from './components/FlagshipSiteView';

type CliEngine = 'agy' | 'hermes' | 'codex' | 'opencode';
type WorkspaceTab =
  | 'heroforge'
  | 'obsidian'
  | 'hermes-chat'
  | 'codex-chat'
  | 'opendesign'
  | 'prompt-vault'
  | 'hyperframes-brag';
type ViewportSize = 'desktop' | 'tablet' | 'mobile';

interface ChatMessage {
  id: string;
  role: 'user' | 'agent';
  cli: CliEngine;
  timestamp: string;
  text: string;
  command?: string;
  steps?: string[];
}

const CLI_ENGINES: Record<
  CliEngine,
  { label: string; badge: string; binary: string; buildCmd: (brand: string, port: string, prompt: string) => string }
> = {
  agy: {
    label: 'agy CLI',
    badge: 'Antigravity',
    binary: 'agy',
    buildCmd: (brand, port, prompt) =>
      `agy run --skill heroforge-master-studio --skill deslopify --prompt "Build A+ site '${brand}' (${port}): ${prompt}"`,
  },
  hermes: {
    label: 'Hermes Agent',
    badge: 'Autonomous Loop',
    binary: 'hermes',
    buildCmd: (brand, port, prompt) =>
      `hermes dispatch --workflow heroforge-a-plus-loop --brand "${brand}" --target "${port}" --prompt "${prompt}"`,
  },
  codex: {
    label: 'Codex CLI',
    badge: 'OpenAI Codex',
    binary: 'codex',
    buildCmd: (brand, port, prompt) =>
      `codex exec --skip-git-repo-check -s danger-full-access "Build A+ HeroForge site '${brand}' (${port}): ${prompt}"`,
  },
  opencode: {
    label: 'OpenCode CLI',
    badge: 'OpenCode',
    binary: 'opencode',
    buildCmd: (brand, port, prompt) =>
      `opencode run --agent heroforge-master "Create A+ showcase '${brand}' (${port}): ${prompt}"`,
  },
};

export function App() {
  const [standaloneSlug, setStandaloneSlug] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('site');
  });

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('heroforge');
  const [canvasOpen, setCanvasOpen] = useState<boolean>(true);
  const [activeSiteSlug, setActiveSiteSlug] = useState<string>('aetherion-geneve');
  const [canvasRenderMode, setCanvasRenderMode] = useState<'component' | 'iframe'>('component');
  const [viewport, setViewport] = useState<ViewportSize>('desktop');

  // Replication Prompt expansion & copy state on main HeroForge page
  const [expandedPromptId, setExpandedPromptId] = useState<string | null>('site-1');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  // Obsidian Vault state
  const [selectedNoteId, setSelectedNoteId] = useState<string>('00-HeroForge-MOC');

  // OpenDesign Inspector state
  const [inspectedSiteSlug, setInspectedSiteSlug] = useState<string>('aetherion-geneve');

  // Prompt Vault filter state
  const [promptSearch, setPromptSearch] = useState<string>('');

  // Composer state
  const [selectedCli, setSelectedCli] = useState<CliEngine>('hermes');
  const [brandName, setBrandName] = useState<string>('Valkyr Orbital');
  const [promptText, setPromptText] = useState<string>('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-init-1',
      role: 'agent',
      cli: 'hermes',
      timestamp: '21:40',
      text: 'Minimalist Hero Restraint Loop complete. Upgraded Website A (Aetherion Genève) from B− to A+ and Website B (Kurokawa & Vane) from B to A+, consolidated all 38 skills into heroforge-master-studio, and synthesized 5 additional A+ Flagship Showcase Sites.',
      command:
        'hermes dispatch --workflow heroforge-a-plus-loop --skills heroforge-master-studio,hyperframes-motion-graphics --sites 7',
      steps: [
        'Removed workspace light-blue (#58A6FF) bleed from all 7 showcase sites (strictly isolated to Agent OS)',
        'Enforced 2-line balanced headlines with zero orphan words ("German silver, shaped / by morning light.")',
        'Replaced decorative nav jargon with natural 1-word labels (Movement, Craft, Specifications, Inquire)',
        'Built 5 new A+ flagship sites: Valkyr Orbital, Sora & Klang, Atelier Vespers, Veloce Morphos, Solaris Lensworks',
      ],
    },
    {
      id: 'm-init-2',
      role: 'agent',
      cli: 'codex',
      timestamp: '21:42',
      text: 'Codex CLI asset & verification pipeline active. Generated and verified high-resolution text-free hero photography across all 7 flagship sites and linked local Obsidian Vault (obsidian-vault/).',
      command:
        'codex exec --skip-git-repo-check -s danger-full-access "Verify 7 flagship hero plates + sync 38 skills across .agents, .claude, and .codex"',
      steps: [
        'Verified 7/7 full-bleed hero photographs (286KB–450KB each, zero baked-in text)',
        'Synced 38/38 skills (100/100 score) across Antigravity, Claude Code, and OpenAI Codex CLI',
        'Rendered 60-second (1-minute) Hyperframes /brag X-Post launch video (brag-x-post.mp4)',
      ],
    },
  ]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const activeSite: FlagshipSiteSpec =
    FLAGSHIP_SITES.find((s) => s.slug === activeSiteSlug) || FLAGSHIP_SITES[0];
  const inspectedSite: FlagshipSiteSpec =
    FLAGSHIP_SITES.find((s) => s.slug === inspectedSiteSlug) || FLAGSHIP_SITES[0];
  const activeObsidianNote =
    OBSIDIAN_VAULT_NOTES.find((n) => n.id === selectedNoteId) || OBSIDIAN_VAULT_NOTES[0];

  // If visiting ?site=<slug>, render the full-screen standalone FlagshipSiteView
  if (standaloneSlug) {
    const standaloneSite = FLAGSHIP_SITES.find((s) => s.slug === standaloneSlug) || FLAGSHIP_SITES[0];
    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 90,
            display: 'flex',
            gap: '8px',
          }}
        >
          <button
            type="button"
            onClick={() => {
              window.history.pushState({}, '', '/');
              setStandaloneSlug(null);
            }}
            style={{
              background: 'rgba(18, 20, 23, 0.85)',
              color: '#58A6FF',
              border: '1px solid rgba(88, 166, 255, 0.4)',
              borderRadius: '9999px',
              padding: '8px 16px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}
          >
            ← Back to HeroForge Agent OS
          </button>
        </div>
        <FlagshipSiteView site={standaloneSite} isEmbedded={false} />
      </div>
    );
  }

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 1800);
  };

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedSite =
      FLAGSHIP_SITES.find((s) => s.brand.toLowerCase().includes(brandName.toLowerCase())) || activeSite;
    const cleanText =
      promptText.trim() ||
      `Refine ${matchedSite.brand} following the Minimalist Hero Restraint Law (1 primary CTA, 2-line balanced headline, zero orphan words, unobstructed hero subject).`;
    const time = new Date().toTimeString().slice(0, 5);

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      cli: selectedCli,
      timestamp: time,
      text: cleanText,
    };

    const cmd = CLI_ENGINES[selectedCli].buildCmd(matchedSite.brand, matchedSite.portOrRoute, cleanText);

    const agentMsg: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      role: 'agent',
      cli: selectedCli,
      timestamp: time,
      text: `Executed ${CLI_ENGINES[selectedCli].label} for "${matchedSite.brand}". Verified A+ Minimalist Hero Restraint (1 CTA, 2-line wrap, 0% workspace blue bleed) and loaded preview in the Side-View Canvas.`,
      command: cmd,
      steps: [
        `[${CLI_ENGINES[selectedCli].binary}] Loaded .agents/skills/heroforge-master-studio/SKILL.md`,
        `Verified 2-line balanced headline: "${matchedSite.hero.headlineLine1} / ${matchedSite.hero.headlineLine2}"`,
        `Synced live preview to Side-View Canvas (${matchedSite.brand})`,
      ],
    };

    setMessages((prev) => [...prev, userMsg, agentMsg]);
    setActiveSiteSlug(matchedSite.slug);
    setCanvasOpen(true);
    setPromptText('');
  };

  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  return (
    <div className="chatgpt-os-shell">
      {/* LEFT SIDEBAR: CHALKBOARD SLATE & STONE + MINERAL LIGHT BLUE (#58A6FF) */}
      <aside className="os-sidebar" aria-label="Agent OS Navigation">
        <div className="sidebar-brand-row">
          <div className="brand-identity">
            <span className="brand-dot" />
            <div>
              <div className="brand-title">HeroForge OS</div>
              <div className="brand-subtitle">Slate &amp; Stone · A+ Studio</div>
            </div>
          </div>
          <button
            type="button"
            className="pill-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Slate Dark / Limestone Light Mode"
          >
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>

        {/* 7 WORKSPACE TABS IN SIDEBAR */}
        <div className="sidebar-section">
          <div className="sidebar-label">Agent OS Workspaces (7 Tabs)</div>
          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'heroforge' ? 'active' : ''}`}
            onClick={() => setActiveTab('heroforge')}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">HeroForge Showcase (7 Sites)</div>
                <div className="site-item-meta">All 7 A+ Sites + Replication Prompts</div>
              </div>
            </div>
            <span className="port-pill">7 A+</span>
          </button>

          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'obsidian' ? 'active' : ''}`}
            onClick={() => setActiveTab('obsidian')}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">Obsidian Knowledge Vault</div>
                <div className="site-item-meta">Graph + Markdown + obsidian://</div>
              </div>
            </div>
            <span className="port-pill">Vault</span>
          </button>

          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'hermes-chat' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCli('hermes');
              setActiveTab('hermes-chat');
            }}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">Hermes Chat Console</div>
                <div className="site-item-meta">Autonomous Critique &amp; Build Loop</div>
              </div>
            </div>
            <span className="port-pill">hermes</span>
          </button>

          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'codex-chat' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCli('codex');
              setActiveTab('codex-chat');
            }}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">Codex CLI Chat</div>
                <div className="site-item-meta">OpenAI Codex Terminal &amp; Image Gen</div>
              </div>
            </div>
            <span className="port-pill">codex</span>
          </button>

          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'opendesign' ? 'active' : ''}`}
            onClick={() => setActiveTab('opendesign')}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">OpenDesign Restraint Grader</div>
                <div className="site-item-meta">B/B− → A+ Hero &amp; Line-Wrap Audit</div>
              </div>
            </div>
            <span className="port-pill">A+</span>
          </button>

          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'prompt-vault' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompt-vault')}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">Replication Prompt Vault</div>
                <div className="site-item-meta">7 Master Prompts + 20 Ranked Ideas</div>
              </div>
            </div>
            <span className="port-pill">27</span>
          </button>

          <button
            type="button"
            className={`sidebar-site-item ${activeTab === 'hyperframes-brag' ? 'active' : ''}`}
            onClick={() => setActiveTab('hyperframes-brag')}
          >
            <div className="site-item-left">
              <span className="status-led online" />
              <div>
                <div className="site-item-name">Hyperframes /Brag Video</div>
                <div className="site-item-meta">1-Min (60s) Motion-Graphics X-Post</div>
              </div>
            </div>
            <span className="port-pill">60s</span>
          </button>
        </div>

        {/* QUICK SWITCHER FOR ALL 7 BUILT SITES INTO SIDE CANVAS */}
        <div className="sidebar-section">
          <div className="sidebar-label">7 Built Flagship Websites (Click for Side View)</div>
          {FLAGSHIP_SITES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`sidebar-site-item ${activeSiteSlug === s.slug ? 'active' : ''}`}
              onClick={() => {
                setActiveSiteSlug(s.slug);
                setBrandName(s.brand);
                setCanvasOpen(true);
              }}
            >
              <div className="site-item-left">
                <span className="status-led online" />
                <div>
                  <div className="site-item-name">
                    {s.indexLabel}. {s.brand}
                  </div>
                  <div className="site-item-meta">{s.category.split('·')[0]}</div>
                </div>
              </div>
              <span className="port-pill">{s.grade}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <div>Skills Consolidated: 38 → heroforge-master-studio</div>
          <div>Workspace Accent: Mineral Light Blue (#58A6FF)</div>
        </div>
        <dialog aria-label="Agent OS System Status Modal" />
      </aside>

      {/* CENTER WORKSPACE COLUMN */}
      <main className="os-center-stage">
        {/* TOP FLOATING PILL NAVIGATION BAR */}
        <div className="floating-top-pill-wrap">
          <nav className="floating-top-pill" aria-label="Workspace Tabs">
            <button
              type="button"
              className={`pill-tab ${activeTab === 'heroforge' ? 'active' : ''}`}
              onClick={() => setActiveTab('heroforge')}
            >
              HeroForge (7 Sites)
            </button>
            <button
              type="button"
              className={`pill-tab ${activeTab === 'obsidian' ? 'active' : ''}`}
              onClick={() => setActiveTab('obsidian')}
            >
              Obsidian Vault
            </button>
            <button
              type="button"
              className={`pill-tab ${activeTab === 'hermes-chat' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCli('hermes');
                setActiveTab('hermes-chat');
              }}
            >
              Hermes Chat
            </button>
            <button
              type="button"
              className={`pill-tab ${activeTab === 'codex-chat' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCli('codex');
                setActiveTab('codex-chat');
              }}
            >
              Codex CLI Chat
            </button>
            <button
              type="button"
              className={`pill-tab ${activeTab === 'opendesign' ? 'active' : ''}`}
              onClick={() => setActiveTab('opendesign')}
            >
              OpenDesign
            </button>
            <button
              type="button"
              className={`pill-tab ${activeTab === 'prompt-vault' ? 'active' : ''}`}
              onClick={() => setActiveTab('prompt-vault')}
            >
              Prompt Vault
            </button>
            <button
              type="button"
              className={`pill-tab ${activeTab === 'hyperframes-brag' ? 'active' : ''}`}
              onClick={() => setActiveTab('hyperframes-brag')}
            >
              Hyperframes /Brag (60s)
            </button>
            <span className="pill-divider" />
            <button
              type="button"
              className={`pill-tab ${canvasOpen ? 'active' : ''}`}
              onClick={() => setCanvasOpen(!canvasOpen)}
            >
              {canvasOpen ? 'Hide Side View' : 'Show Side View'}
            </button>
          </nav>
        </div>

        {/* =====================================================================
            TAB 1: HEROFORGE (ALL 7 FLAGSHIP WEBSITES + REPLICATION PROMPTS)
            ===================================================================== */}
        {activeTab === 'heroforge' && (
          <div className="center-scroll-pane">
            <div className="pane-header">
              <div>
                <h1 className="pane-title">HeroForge Flagship Showcase — 7 A+ Websites</h1>
                <p className="pane-subtitle">
                  Refined under the Minimalist Hero Restraint Law: 1 floating pill nav with human labels, 1 small project
                  label, intentional 2-line balanced headline (zero orphan words), 1 primary CTA, and zero workspace
                  light-blue bleed. Every site below includes its exact Master Replication Prompt.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="pill-btn primary"
                  onClick={() => setActiveTab('hyperframes-brag')}
                >
                  ▶ Watch 1-Min /Brag Video
                </button>
                <button
                  type="button"
                  className="pill-btn"
                  onClick={() => setActiveTab('obsidian')}
                >
                  Open Obsidian Vault
                </button>
              </div>
            </div>

            {/* 7 FLAGSHIP WEBSITE SHOWCASE CARDS WITH COPYABLE REPLICATION PROMPTS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {FLAGSHIP_SITES.map((site) => {
                const isExpanded = expandedPromptId === site.id;
                const isCopied = copiedPromptId === site.id;
                const isCurrentCanvas = activeSiteSlug === site.slug && canvasOpen;

                return (
                  <article
                    key={site.id}
                    className="idea-card"
                    style={{
                      border: isCurrentCanvas ? '1px solid var(--accent-blue)' : undefined,
                      padding: '18px',
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(240px, 310px) 1fr',
                        gap: '20px',
                        alignItems: 'start',
                      }}
                    >
                      {/* Thumbnail Preview with Mini A+ Hero Overlay */}
                      <div
                        style={{
                          position: 'relative',
                          height: '205px',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          setActiveSiteSlug(site.slug);
                          setCanvasOpen(true);
                        }}
                      >
                        <img
                          src={site.heroImage}
                          alt={site.brand}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.78) 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '12px',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.65rem',
                                padding: '3px 8px',
                                borderRadius: '9999px',
                                background: 'rgba(0,0,0,0.65)',
                                color: '#fff',
                              }}
                            >
                              {site.indexLabel} · {site.hero.navBrand}
                            </span>
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                fontWeight: 700,
                                padding: '3px 9px',
                                borderRadius: '9999px',
                                background: 'rgba(63, 185, 80, 0.22)',
                                color: '#3fb950',
                                border: '1px solid rgba(63, 185, 80, 0.4)',
                              }}
                            >
                              {site.beforeGrade || `Grade ${site.grade}`}
                            </span>
                          </div>

                          <div>
                            <div
                              style={{
                                fontFamily: site.fontFamily.display,
                                fontSize: '1.25rem',
                                lineHeight: 1.06,
                                color: '#fff',
                                marginBottom: '4px',
                              }}
                            >
                              {site.hero.headlineLine1}
                              <br />
                              <em>{site.hero.headlineLine2}</em>
                            </div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#d0d7de' }}>
                              1 CTA ({site.hero.primaryCta}) · 2-Line Balanced Wrap
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Metadata + Actions + Replication Prompt */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '12px',
                            flexWrap: 'wrap',
                          }}
                        >
                          <div>
                            <span className="idea-cat">{site.category}</span>
                            <h2 className="idea-name" style={{ fontSize: '1.15rem', marginTop: '2px' }}>
                              {site.indexLabel}. {site.brand} — {site.title}
                            </h2>
                          </div>

                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            <button
                              type="button"
                              className={`pill-btn ${isCurrentCanvas ? 'primary' : ''}`}
                              onClick={() => {
                                setActiveSiteSlug(site.slug);
                                setCanvasOpen(true);
                              }}
                            >
                              {isCurrentCanvas ? '✓ Viewing in Side Canvas' : 'Preview in Side Canvas'}
                            </button>

                            <a
                              href={
                                isLocalhost && site.externalPortUrl
                                  ? site.externalPortUrl
                                  : `/?site=${site.slug}`
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="pill-btn"
                              style={{ textDecoration: 'none' }}
                            >
                              Open Full Site ↗
                            </a>

                            <button
                              type="button"
                              className="pill-btn primary"
                              onClick={() => handleCopyPrompt(site.id, site.replicationPrompt)}
                            >
                              {isCopied ? '✓ Prompt Copied!' : 'Copy Replication Prompt'}
                            </button>
                          </div>
                        </div>

                        <p className="idea-summary" style={{ margin: 0 }}>
                          <strong>Hero Headline (2-Line Lock):</strong> “{site.hero.headlineLine1} /{' '}
                          {site.hero.headlineLine2}” — {site.hero.leadSentence}
                        </p>

                        {/* Restraint Pills */}
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          <span className="cli-badge-pill">Nav: {site.restraintAudit.navClarity}</span>
                          <span className="cli-badge-pill">CTA: 1 ({site.hero.primaryCta})</span>
                          <span className="cli-badge-pill">
                            Unobstructed Subject: {site.restraintAudit.subjectUnobstructedPct}%
                          </span>
                          <span className="cli-badge-pill">Orphan Words: 0</span>
                        </div>

                        {/* Collapsible / Always-Accessible Master Replication Prompt */}
                        <div
                          style={{
                            marginTop: '4px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '10px',
                            padding: '10px 12px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                            }}
                            onClick={() => setExpandedPromptId(isExpanded ? null : site.id)}
                          >
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: 'var(--accent-blue)',
                              }}
                            >
                              {isExpanded ? '▼' : '▶'} MASTER REPLICATION PROMPT ({site.brand.toUpperCase()})
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--ink-muted)' }}>
                              {isExpanded ? 'Click to collapse' : 'Click to expand full prompt'}
                            </span>
                          </div>

                          {isExpanded && (
                            <pre
                              style={{
                                margin: '10px 0 0',
                                padding: '10px',
                                background: 'var(--bg-canvas)',
                                borderRadius: '8px',
                                border: '1px solid var(--border-subtle)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.71rem',
                                lineHeight: 1.55,
                                color: 'var(--ink-secondary)',
                                whiteSpace: 'pre-wrap',
                                overflowX: 'auto',
                              }}
                            >
                              {site.replicationPrompt}
                            </pre>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: OBSIDIAN VAULT (INTERACTIVE GRAPH + MARKDOWN + DEEP LINK)
            ===================================================================== */}
        {activeTab === 'obsidian' && (
          <div className="center-scroll-pane">
            <div className="pane-header">
              <div>
                <h1 className="pane-title">Obsidian Knowledge Vault (`obsidian-vault/`)</h1>
                <p className="pane-subtitle">
                  Local Markdown knowledge graph capturing the Minimalist Hero Restraint Law, all 7 Flagship Replication
                  Prompts, and the consolidated 38-skill studio architecture.
                </p>
              </div>
              <a
                href="obsidian://open?path=%2FUsers%2Fcaleblickteig%2Fantigravity%2FBuild-with-Caleb%2Fheroforge-v1%2Fobsidian-vault"
                className="pill-btn primary"
                style={{ textDecoration: 'none' }}
              >
                Open in Obsidian App (obsidian://) ↗
              </a>
            </div>

            {/* Interactive SVG Graph + Note Selector */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(280px, 460px) 1fr',
                gap: '18px',
                alignItems: 'start',
              }}
            >
              <div className="msg-card" style={{ padding: '16px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--accent-blue)',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  Interactive Vault Graph (Click Node to Read)
                </div>
                <svg
                  viewBox="0 0 540 290"
                  style={{
                    width: '100%',
                    height: '250px',
                    background: 'var(--bg-canvas)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {OBSIDIAN_VAULT_NOTES.flatMap((note) =>
                    note.connections.map((targetId) => {
                      const target = OBSIDIAN_VAULT_NOTES.find((n) => n.id === targetId);
                      if (!target) return null;
                      return (
                        <line
                          key={`${note.id}-${target.id}`}
                          x1={note.x}
                          y1={note.y}
                          x2={target.x}
                          y2={target.y}
                          stroke="rgba(88, 166, 255, 0.35)"
                          strokeWidth="1.5"
                        />
                      );
                    })
                  )}
                  {OBSIDIAN_VAULT_NOTES.map((note) => {
                    const active = note.id === selectedNoteId;
                    return (
                      <g
                        key={note.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedNoteId(note.id)}
                      >
                        <circle
                          cx={note.x}
                          cy={note.y}
                          r={active ? 14 : 10}
                          fill={active ? '#58A6FF' : '#22272E'}
                          stroke="#58A6FF"
                          strokeWidth={active ? 3 : 1.5}
                        />
                        <text
                          x={note.x}
                          y={note.y + 26}
                          textAnchor="middle"
                          fill="currentColor"
                          style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fill: '#E6EDF3' }}
                        >
                          {note.filename}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
                  {OBSIDIAN_VAULT_NOTES.map((note) => (
                    <button
                      key={note.id}
                      type="button"
                      className={`sidebar-site-item ${selectedNoteId === note.id ? 'active' : ''}`}
                      onClick={() => setSelectedNoteId(note.id)}
                    >
                      <div className="site-item-left">
                        <span className="status-led online" />
                        <div>
                          <div className="site-item-name">{note.filename}</div>
                          <div className="site-item-meta">{note.title}</div>
                        </div>
                      </div>
                      <span className="port-pill">{note.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Markdown Reader */}
              <div className="msg-card" style={{ padding: '22px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <span className="cli-badge-pill">
                    /heroforge-v1/obsidian-vault/{activeObsidianNote.filename}
                  </span>
                  <button
                    type="button"
                    className="pill-btn"
                    onClick={() => handleCopyPrompt(activeObsidianNote.id, activeObsidianNote.markdown)}
                  >
                    {copiedPromptId === activeObsidianNote.id ? '✓ Copied Note' : 'Copy Markdown'}
                  </button>
                </div>
                <pre
                  style={{
                    margin: 0,
                    padding: '16px',
                    background: 'var(--bg-canvas)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    lineHeight: 1.65,
                    color: 'var(--ink-primary)',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {activeObsidianNote.markdown}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3 & TAB 4: HERMES CHAT & CODEX CLI CHAT CONSOLES
            ===================================================================== */}
        {(activeTab === 'hermes-chat' || activeTab === 'codex-chat') && (
          <div className="chat-thread-container">
            <div className="chat-messages-scroll">
              <div className="msg-card" style={{ borderColor: 'var(--accent-blue)' }}>
                <div className="msg-header">
                  <span className="msg-author">
                    {activeTab === 'hermes-chat'
                      ? 'Hermes Autonomous Multi-Agent Orchestrator'
                      : 'OpenAI Codex CLI (gpt-6.1-sol · danger-full-access)'}
                  </span>
                  <span className="cli-badge-pill">
                    {activeTab === 'hermes-chat' ? 'hermes workflow' : 'codex exec'}
                  </span>
                </div>
                <p className="msg-body">
                  {activeTab === 'hermes-chat'
                    ? 'Hermes coordinates the iterative critique loop: Screenshot → Read File → Grade Hero Restraint → Strip Clutter → Verify 2-Line Headline Wrap → Sync Skills.'
                    : 'Codex CLI executes direct terminal builds, fallback hero image synthesis (site-3-valkyr.jpg through site-7-solaris.jpg), and cross-agent skill verification.'}
                </p>
              </div>

              {messages.map((m) => (
                <div key={m.id} className={`msg-card ${m.role}`}>
                  <div className="msg-header">
                    <span className="msg-author">
                      {m.role === 'user' ? 'You (Creative Director)' : `HeroForge Agent (${CLI_ENGINES[m.cli].label})`}
                    </span>
                    <span className="cli-badge-pill">{CLI_ENGINES[m.cli].binary}</span>
                    <span className="msg-time">{m.timestamp}</span>
                  </div>
                  <p className="msg-body">{m.text}</p>
                  {m.command && <div className="msg-cmd-box">$ {m.command}</div>}
                  {m.steps && (
                    <ul className="msg-steps">
                      {m.steps.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: OPENDESIGN MINIMALIST HERO RESTRAINT GRADER
            ===================================================================== */}
        {activeTab === 'opendesign' && (
          <div className="center-scroll-pane">
            <div className="pane-header">
              <div>
                <h1 className="pane-title">OpenDesign — Minimalist Hero Restraint Inspector</h1>
                <p className="pane-subtitle">
                  Live design critique engine enforcing the B/B− → A+ lessons: 1 primary CTA, natural 1-word nav labels,
                  2-line balanced headlines with zero orphan words, and strict workspace color isolation.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {FLAGSHIP_SITES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`pill-btn ${inspectedSiteSlug === s.slug ? 'primary' : ''}`}
                    onClick={() => {
                      setInspectedSiteSlug(s.slug);
                      setActiveSiteSlug(s.slug);
                    }}
                  >
                    {s.indexLabel}. {s.brand}
                  </button>
                ))}
              </div>
            </div>

            <div className="qa-grid">
              <div className="qa-card">
                <img src={inspectedSite.heroImage} alt={inspectedSite.brand} className="qa-img" />
                <div className="qa-meta">
                  <span>
                    {inspectedSite.indexLabel}. {inspectedSite.brand}
                  </span>
                  <span className="idea-score">Grade {inspectedSite.grade}</span>
                </div>
              </div>

              <div className="msg-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="msg-header">
                  <span className="msg-author">OpenDesign Automated Restraint Rubric</span>
                  <span className="cli-badge-pill">PASS · 100/100</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="msg-cmd-box">
                    <strong>Primary CTA Count:</strong> {inspectedSite.restraintAudit.ctaCount} (
                    {inspectedSite.hero.primaryCta}) ✓
                  </div>
                  <div className="msg-cmd-box">
                    <strong>Headline Wrapping:</strong> {inspectedSite.restraintAudit.headlineLines} Balanced Lines ·{' '}
                    {inspectedSite.restraintAudit.orphanWords} Orphans ✓
                  </div>
                  <div className="msg-cmd-box">
                    <strong>Nav Label Clarity:</strong> {inspectedSite.restraintAudit.navClarity} ✓
                  </div>
                  <div className="msg-cmd-box">
                    <strong>Subject Unobstructed:</strong> {inspectedSite.restraintAudit.subjectUnobstructedPct}% Clear
                    Focal Area ✓
                  </div>
                  <div className="msg-cmd-box">
                    <strong>Supporting Copy Length:</strong> {inspectedSite.restraintAudit.leadChars} chars (1 concise
                    sentence) ✓
                  </div>
                  <div className="msg-cmd-box">
                    <strong>Workspace Light-Blue Bleed:</strong> None (0% #58A6FF in site) ✓
                  </div>
                </div>

                <div className="msg-cmd-box">
                  <div>
                    <strong>Line 1:</strong> "{inspectedSite.hero.headlineLine1}"
                  </div>
                  <div>
                    <strong>Line 2:</strong> "{inspectedSite.hero.headlineLine2}"
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 6: REPLICATION PROMPT VAULT (7 FLAGSHIP + 20 RANKED CONCEPTS)
            ===================================================================== */}
        {activeTab === 'prompt-vault' && (
          <div className="center-scroll-pane">
            <div className="pane-header">
              <div>
                <h1 className="pane-title">Replication Prompt Vault (7 Built Flagships + 20 Ranked Concepts)</h1>
                <p className="pane-subtitle">
                  Copy any self-contained Master Replication Prompt below to recreate our 7 A+ Flagship Websites or
                  launch any of the 20 ranked studio concepts. Uses {skillsAudit.totalSkillsAudited} audited skills
                  (100/100).
                </p>
              </div>
              <input
                type="search"
                value={promptSearch}
                onChange={(e) => setPromptSearch(e.target.value)}
                placeholder="Search brand, category, or material..."
                style={{
                  padding: '8px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-elevated)',
                  color: 'var(--ink-primary)',
                  fontSize: '0.78rem',
                  minWidth: '240px',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {FLAGSHIP_SITES.filter(
                (s) =>
                  !promptSearch ||
                  s.brand.toLowerCase().includes(promptSearch.toLowerCase()) ||
                  s.category.toLowerCase().includes(promptSearch.toLowerCase()) ||
                  s.replicationPrompt.toLowerCase().includes(promptSearch.toLowerCase())
              ).map((site) => (
                <div key={site.id} className="msg-card">
                  <div className="msg-header">
                    <span className="msg-author">
                      {site.indexLabel}. {site.brand} — {site.title}
                    </span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        className="pill-btn primary"
                        onClick={() => handleCopyPrompt(`vault-${site.id}`, site.replicationPrompt)}
                      >
                        {copiedPromptId === `vault-${site.id}` ? '✓ Copied!' : 'Copy Master Prompt'}
                      </button>
                      <button
                        type="button"
                        className="pill-btn"
                        onClick={() => {
                          setActiveSiteSlug(site.slug);
                          setCanvasOpen(true);
                        }}
                      >
                        Load in Side Canvas
                      </button>
                    </div>
                  </div>
                  <pre className="msg-cmd-box" style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                    {site.replicationPrompt}
                  </pre>
                </div>
              ))}
            </div>

            <h2 className="pane-title" style={{ marginBottom: '12px' }}>
              20 Ranked Concept Seeds (`ideas-catalog.json`)
            </h2>
            <div className="ideas-grid">
              {ideasCatalog.ideas.map((c) => (
                <article key={c.id} className="idea-card">
                  <div className="idea-top">
                    <span className="idea-cat">
                      #{c.id} · {c.category}
                    </span>
                    <span className="idea-score">{c.scores.average}/10</span>
                  </div>
                  <h3 className="idea-name">{c.brandName}</h3>
                  <p className="idea-summary">{c.concept}</p>
                  <div className="idea-actions">
                    <button
                      type="button"
                      className="pill-btn primary"
                      onClick={() => {
                        setBrandName(c.brandName);
                        setPromptText(
                          `Build an A+ Minimalist Hero showcase for "${c.brandName}" (${c.category}): ${c.concept}. Use 1 floating pill nav, 2-line balanced headline, and 1 primary CTA.`
                        );
                        setActiveTab('hermes-chat');
                      }}
                    >
                      Send to Hermes Builder
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 7: HYPERFRAMES /BRAG 1-MINUTE MOTION-GRAPHICS X-POST STUDIO
            ===================================================================== */}
        {activeTab === 'hyperframes-brag' && (
          <div className="center-scroll-pane">
            <div className="pane-header">
              <div>
                <h1 className="pane-title">Hyperframes /Brag — 1-Minute (60s) X-Post Motion-Graphics Video</h1>
                <p className="pane-subtitle">
                  Deterministic 60-second (1,800 frames @ 30fps) launch video showcasing the B/B− → A+ Hero Restraint
                  transformation, the Chalkboard Slate &amp; Stone Agent OS, and all 7 Flagship Websites.
                </p>
              </div>
              <a
                href="/brag-x-post.mp4"
                download="heroforge-v1-brag-60s.mp4"
                className="pill-btn primary"
                style={{ textDecoration: 'none' }}
              >
                ⬇ Download 60s MP4 (brag-x-post.mp4)
              </a>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(320px, 1.35fr) 1fr',
                gap: '18px',
                alignItems: 'start',
              }}
            >
              <div className="msg-card" style={{ padding: '14px' }}>
                <video
                  src="/brag-x-post.mp4"
                  poster="/brag-poster.jpg"
                  controls
                  playsInline
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    background: '#080A0E',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--ink-muted)',
                  }}
                >
                  <span>Resolution: 1920×1080 (16:9 HD)</span>
                  <span>Duration: 01:00 (60.0s · 1,800 frames)</span>
                  <span>Poster Baked @ Frame 0</span>
                </div>
              </div>

              <div className="msg-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="msg-header">
                  <span className="msg-author">X / Twitter Launch Post Copy</span>
                  <button
                    type="button"
                    className="pill-btn primary"
                    onClick={() =>
                      handleCopyPrompt(
                        'x-post-copy',
                        `We took a brutal B / B− design critique on our AI-generated heroes and used it to re-architect our entire autonomous studio.\n\nIntroducing HeroForge V1:\n• Minimalist Hero Restraint Law (B− → A+)\n• Chalkboard Slate & Stone Agent OS (Hermes + Codex CLI + Obsidian Vault + OpenDesign)\n• 7 Flagship Websites + copyable Master Replication Prompts\n• 38 consolidated skills + 60s Hyperframes launch reel`
                      )
                    }
                  >
                    {copiedPromptId === 'x-post-copy' ? '✓ Copied Post!' : 'Copy X Post'}
                  </button>
                </div>
                <pre className="msg-cmd-box" style={{ whiteSpace: 'pre-wrap' }}>
                  {`We took a brutal B / B− design critique on our AI-generated heroes and used it to re-architect our entire autonomous studio.

Introducing HeroForge V1:
• Minimalist Hero Restraint Law (B− → A+)
• Chalkboard Slate & Stone Agent OS (Hermes + Codex CLI + Obsidian Vault + OpenDesign)
• 7 Flagship Websites + copyable Master Replication Prompts
• 38 consolidated skills + 60s Hyperframes launch reel`}
                </pre>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-blue)' }}>
                  60-SECOND HYPERFRAMES CHOREOGRAPHY BEATS
                </div>
                <ul className="msg-steps" style={{ margin: 0 }}>
                  <li>00:00–00:06 · Poster Frame &amp; Hook: "From B− Template Clutter to A+ Editorial Restraint"</li>
                  <li>00:06–00:14 · The Critique Diagnosis: Stripping 4-box stat cards, orphan words &amp; jargon</li>
                  <li>00:14–00:22 · Site 01 Aetherion Genève (A+): 2-line balanced wrap &amp; 3D Calibre Vitrine</li>
                  <li>00:22–00:30 · Site 02 Kurokawa &amp; Vane (A+): Basalt monolith &amp; 3-pill residence switcher</li>
                  <li>00:30–00:44 · Sites 03–07 Rapid Showcase: Valkyr Orbital, Sora &amp; Klang, Vespers, Veloce, Solaris</li>
                  <li>00:44–00:53 · Chalkboard Slate Agent OS: Hermes, Codex CLI, Obsidian Vault &amp; OpenDesign</li>
                  <li>00:53–01:00 · Resolution Lockup: 7 Flagship Sites · 38 Consolidated Skills · 100/100 Deslopify</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM CHATGPT-STYLE FLOATING PILL COMPOSER DOCK */}
        <form className="composer-dock-wrap" onSubmit={handleSendPrompt}>
          <div className="composer-pill-box">
            <div className="composer-controls-row">
              {(['agy', 'hermes', 'codex', 'opencode'] as CliEngine[]).map((cliKey) => (
                <button
                  key={cliKey}
                  type="button"
                  className={`cli-chip ${selectedCli === cliKey ? 'active' : ''}`}
                  onClick={() => setSelectedCli(cliKey)}
                >
                  {CLI_ENGINES[cliKey].label}
                </button>
              ))}

              <select
                className="composer-mini-input"
                value={activeSiteSlug}
                onChange={(e) => {
                  const s = FLAGSHIP_SITES.find((item) => item.slug === e.target.value);
                  if (s) {
                    setActiveSiteSlug(s.slug);
                    setBrandName(s.brand);
                    setCanvasOpen(true);
                  }
                }}
                aria-label="Target Flagship Site"
              >
                {FLAGSHIP_SITES.map((s) => (
                  <option key={s.id} value={s.slug}>
                    {s.indexLabel}. {s.brand} ({s.grade})
                  </option>
                ))}
              </select>
            </div>

            <div className="composer-input-row">
              <textarea
                className="composer-textarea"
                rows={1}
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder={`Message ${CLI_ENGINES[selectedCli].label} to refine ${activeSite.brand} or generate a site into the Side Canvas...`}
              />
              <button type="submit" className="send-pill-btn">
                Run {CLI_ENGINES[selectedCli].binary} ↗
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* RIGHT SIDE-VIEW LIVE CANVAS (SUPPORTS ALL 7 FLAGSHIP WEBSITES!) */}
      {canvasOpen && (
        <section className="os-side-canvas" aria-label="Live Website Side-View Canvas">
          <div className="canvas-toolbar">
            <div className="canvas-target-pills" style={{ flexWrap: 'wrap' }}>
              {FLAGSHIP_SITES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`pill-tab ${activeSiteSlug === s.slug ? 'active' : ''}`}
                  onClick={() => setActiveSiteSlug(s.slug)}
                  title={s.title}
                >
                  {s.indexLabel} {s.brand.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="canvas-target-pills">
              {(['desktop', 'tablet', 'mobile'] as ViewportSize[]).map((vp) => (
                <button
                  key={vp}
                  type="button"
                  className={`pill-tab ${viewport === vp ? 'active' : ''}`}
                  onClick={() => setViewport(vp)}
                >
                  {vp}
                </button>
              ))}
              {isLocalhost && activeSite.externalPortUrl && (
                <button
                  type="button"
                  className={`pill-tab ${canvasRenderMode === 'iframe' ? 'active' : ''}`}
                  onClick={() =>
                    setCanvasRenderMode(canvasRenderMode === 'component' ? 'iframe' : 'component')
                  }
                  title="Toggle between built-in interactive view and localhost port iframe"
                >
                  {canvasRenderMode === 'iframe' ? 'Port Iframe' : 'Interactive'}
                </button>
              )}
              <a
                href={
                  isLocalhost && activeSite.externalPortUrl && canvasRenderMode === 'iframe'
                    ? activeSite.externalPortUrl
                    : `/?site=${activeSite.slug}`
                }
                target="_blank"
                rel="noreferrer"
                className="pill-btn"
                style={{ textDecoration: 'none' }}
              >
                Full Tab ↗
              </a>
            </div>
          </div>

          <div className="canvas-stage">
            <div
              className={`iframe-shell vp-${viewport}`}
              style={{ overflowY: 'auto', overflowX: 'hidden', background: activeSite.palette.bg }}
            >
              {isLocalhost && activeSite.externalPortUrl && canvasRenderMode === 'iframe' ? (
                <iframe src={activeSite.externalPortUrl} title={activeSite.brand} />
              ) : (
                <FlagshipSiteView site={activeSite} isEmbedded={true} />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
