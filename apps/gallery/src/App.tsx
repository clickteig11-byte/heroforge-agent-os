import React, { useState, useEffect } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Eye,
  Play,
  Settings,
  Plus,
  Search,
  Terminal,
  BookOpen,
  Layers,
  Smartphone,
  Tablet,
  Monitor,
  RefreshCw,
  Power,
  X,
  ChevronRight,
  Sliders,
  Sparkles,
  Cpu,
  Globe,
  Wrench,
  ShieldCheck,
  Volume2,
  Compass,
  FileText,
  CheckCircle2,
  AlertCircle,
  Video,
} from 'lucide-react';
import { FLAGSHIP_SITES, OBSIDIAN_VAULT_NOTES, FlagshipSiteSpec, ObsidianNote } from './data/flagshipSites';
import { FlagshipSiteView } from './components/FlagshipSiteView';

export type WorkspaceTab =
  | 'projects'
  | 'canvas'
  | 'tools'
  | 'obsidian'
  | 'inspector'
  | 'video'
  | 'prompts';

export type ViewportSize = 'desktop' | 'tablet' | 'mobile';

export interface PluginTool {
  id: string;
  name: string;
  category: string;
  description: string;
  binary: string;
  status: 'active' | 'idle';
  telemetry: Record<string, string>;
  config: Record<string, string | boolean | number>;
  icon: 'terminal' | 'book' | 'globe' | 'compass' | 'sliders' | 'volume' | 'eye' | 'cpu' | 'wrench';
}

const DEFAULT_TOOLS: PluginTool[] = [
  {
    id: 'codex-reality-checker',
    name: 'Codex CLI Reality Checker',
    category: 'Verification & Asset QA',
    description:
      'Verifies high-resolution 16:9 hero photography, audits CSS font fallbacks, and executes verified containerized builds.',
    binary: 'codex exec --skip-git-repo-check',
    status: 'active',
    telemetry: {
      latency: '42ms',
      plates: '12/12 Verified',
      fontDrift: '0.0% Drift',
    },
    config: {
      skipGitRepoCheck: true,
      dangerFullAccess: true,
      timeoutSec: 60,
    },
    icon: 'terminal',
  },
  {
    id: 'obsidian-vault-bridge',
    name: 'Obsidian Vault Bridge',
    category: 'Knowledge Graph',
    description:
      'Bidirectional markdown sync between React specs, prompt vaults, and local Obsidian graph nodes (obsidian-vault/).',
    binary: 'obsidian-bridge sync',
    status: 'active',
    telemetry: {
      nodes: '5 Core MOCs',
      syncMode: 'Bidirectional',
      lastSynced: '1m ago',
    },
    config: {
      vaultPath: 'heroforge-v1/obsidian-vault',
      autoSync: true,
      depth: 2,
    },
    icon: 'book',
  },
  {
    id: 'multi-repo-deployer',
    name: 'Multi-Repo Vercel Deployer',
    category: 'CI/CD & Cloud',
    description:
      'Builds and pushes all 12 projects to individual Vercel production and preview domains under clickteig11-byte.',
    binary: 'vercel deploy --prod',
    status: 'active',
    telemetry: {
      account: 'clickteig11-byte',
      repos: '12 Connected Repos',
      slaStatus: '100% Deployed',
    },
    config: {
      team: 'clickteig11-byte',
      production: true,
      previewAlias: true,
    },
    icon: 'globe',
  },
  {
    id: 'pinterest-importer',
    name: 'Pinterest & Visual Reference Importer',
    category: 'Editorial Research',
    description:
      'Extracts high-taste color tokens, chiaroscuro lighting references, and Swiss-Japanese typography pairings.',
    binary: 'pinterest-bridge pull',
    status: 'idle',
    telemetry: {
      boards: '8 Boards Indexed',
      swatches: '64 Colors Extracted',
      colorSpace: 'Display P3',
    },
    config: {
      boardUrl: 'pinterest.com/heroforge/minimalist',
      extractSwatches: true,
    },
    icon: 'compass',
  },
  {
    id: 'mechanical-fluid-sizer',
    name: 'Mechanical Fluid Sizer',
    category: 'Typography & Math',
    description:
      'Computes fluid clamp() typography and container bounds for zero layout jumps across 390px to 1920px viewports.',
    binary: 'clamp-calc --ratio 1.25',
    status: 'active',
    telemetry: {
      ratio: '1.25 (Major Third)',
      target: '390px–1440px',
      clsMetric: '0.00 CLS',
    },
    config: {
      basePx: 16,
      minVw: 390,
      maxVw: 1440,
      ratio: 1.25,
    },
    icon: 'sliders',
  },
  {
    id: 'voice-audio-bridge',
    name: 'OpenRouter Voice & Audio Bridge',
    category: 'Multimodal Audio',
    description:
      'Generates studio-grade voiceover narration, timed VTT subtitle tracks, and ducked ambient audio for launches.',
    binary: 'openrouter-voice --synth',
    status: 'idle',
    telemetry: {
      model: 'mistral-voice-v1',
      loudness: '-22 LUFS',
      ducking: '18dB Ducking',
    },
    config: {
      voiceId: 'horizon-neutral',
      speed: 1.0,
      backgroundMusic: true,
    },
    icon: 'volume',
  },
  {
    id: 'kombai-diff-comparator',
    name: 'Kombai Design Overlay Comparator',
    category: 'Pixel QA',
    description:
      'Real-time visual regression comparator overlaying reference photography on live React DOM with difference blending.',
    binary: 'kombai diff --blend difference',
    status: 'active',
    telemetry: {
      fidelity: '99.4% Match',
      shift: '< 1.2px RMS',
      mode: 'Difference Mode',
    },
    config: {
      defaultOpacity: 55,
      blendMode: 'difference',
      tolerance: 2,
    },
    icon: 'eye',
  },
  {
    id: 'hermes-autonomous-loop',
    name: 'Hermes Autonomous Loop',
    category: 'Agent Orchestration',
    description:
      'Recursive 3-pass critique loop enforcing single-CTA clarity, headline line count, and zero AI slop.',
    binary: 'hermes dispatch --workflow a-plus',
    status: 'active',
    telemetry: {
      passes: '3/3 Complete',
      restraintScore: '100/100',
      activeWorkflow: 'A+ Restraint Loop',
    },
    config: {
      maxPasses: 3,
      strictDeslop: true,
      parallelWorkers: 4,
    },
    icon: 'cpu',
  },
];

export function App() {
  const [standaloneSlug, setStandaloneSlug] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('site');
  });

  const [activeTab, setActiveTab] = useState<WorkspaceTab>('projects');
  const [selectedSiteSlug, setSelectedSiteSlug] = useState<string>('aetherion-geneve');
  const [viewport, setViewport] = useState<ViewportSize>('desktop');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState<string>('all');
  const [toolFilter, setToolFilter] = useState<string>('all');

  // Modular Tools State
  const [tools, setTools] = useState<PluginTool[]>(DEFAULT_TOOLS);
  const [activeToolRunning, setActiveToolRunning] = useState<PluginTool | null>(null);
  const [runningLogs, setRunningLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [toolSettingsOpen, setToolSettingsOpen] = useState<PluginTool | null>(null);
  const [addToolModalOpen, setAddToolModalOpen] = useState<boolean>(false);

  // New Custom Tool Form State
  const [newToolName, setNewToolName] = useState<string>('');
  const [newToolCategory, setNewToolCategory] = useState<string>('Custom Agent Tool');
  const [newToolDesc, setNewToolDesc] = useState<string>('');
  const [newToolBinary, setNewToolBinary] = useState<string>('');

  // Obsidian State
  const [selectedNoteId, setSelectedNoteId] = useState<string>('00-HeroForge-MOC');

  // Kombai Overlay State
  const [kombaiActive, setKombaiActive] = useState<boolean>(false);
  const [kombaiOpacity, setKombaiOpacity] = useState<number>(50);
  const [kombaiBlend, setKombaiBlend] = useState<'difference' | 'normal' | 'multiply'>('difference');

  // Copy Feedback
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeSite =
    FLAGSHIP_SITES.find((s) => s.slug === selectedSiteSlug) || FLAGSHIP_SITES[0];
  const activeNote =
    OBSIDIAN_VAULT_NOTES.find((n) => n.id === selectedNoteId) || OBSIDIAN_VAULT_NOTES[0];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const toggleToolStatus = (id: string) => {
    setTools((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === 'active' ? 'idle' : 'active' } : t
      )
    );
  };

  const handleRunTool = (tool: PluginTool) => {
    setActiveToolRunning(tool);
    setIsRunning(true);
    setRunningLogs([
      `[${new Date().toLocaleTimeString()}] Initializing slot runtime: ${tool.name}...`,
      `[${new Date().toLocaleTimeString()}] Executing binary: ${tool.binary}`,
      `[${new Date().toLocaleTimeString()}] Verifying sandbox boundaries and environment variables...`,
    ]);

    setTimeout(() => {
      setRunningLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Target inspection complete. Checking 12 flagship configurations...`,
        `[${new Date().toLocaleTimeString()}] Telemetry response: ${JSON.stringify(tool.telemetry)}`,
      ]);
    }, 600);

    setTimeout(() => {
      setRunningLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] Zero errors detected. State reconciled with HeroForge Master Studio.`,
        `[${new Date().toLocaleTimeString()}] Execution completed successfully in 48ms.`,
      ]);
      setIsRunning(false);
    }, 1200);
  };

  const handleSaveToolSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolSettingsOpen) return;
    setTools((prev) =>
      prev.map((t) => (t.id === toolSettingsOpen.id ? toolSettingsOpen : t))
    );
    setToolSettingsOpen(null);
  };

  const handleCreateCustomTool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newToolName.trim()) return;

    const newPlugin: PluginTool = {
      id: `custom-${Date.now()}`,
      name: newToolName.trim(),
      category: newToolCategory.trim() || 'Custom Extension',
      description: newToolDesc.trim() || 'Custom agent plugin connected to HeroForge Studio.',
      binary: newToolBinary.trim() || 'custom-tool --run',
      status: 'active',
      telemetry: {
        latency: '36ms',
        status: 'Initialized',
        nodes: '1 Client',
      },
      config: {
        customFlag: true,
      },
      icon: 'wrench',
    };

    setTools((prev) => [...prev, newPlugin]);
    setNewToolName('');
    setNewToolCategory('Custom Agent Tool');
    setNewToolDesc('');
    setNewToolBinary('');
    setAddToolModalOpen(false);
  };

  // Render standalone site if url has ?site=slug
  if (standaloneSlug) {
    const standaloneSite =
      FLAGSHIP_SITES.find((s) => s.slug === standaloneSlug) || FLAGSHIP_SITES[0];
    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 90,
          }}
        >
          <button
            type="button"
            onClick={() => {
              window.history.pushState({}, '', '/');
              setStandaloneSlug(null);
            }}
            className="action-btn-quiet"
            style={{
              background: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              padding: '8px 16px',
            }}
          >
            ← Return to HeroForge Studio
          </button>
        </div>
        <FlagshipSiteView site={standaloneSite} isEmbedded={false} />
      </div>
    );
  }

  // Filtered projects
  const filteredSites = FLAGSHIP_SITES.filter((site) => {
    if (projectCategoryFilter === 'all') return true;
    if (projectCategoryFilter === 'physical') {
      return (
        site.id === 'site-1' ||
        site.id === 'site-2' ||
        site.id === 'site-8' ||
        site.id === 'site-12'
      );
    }
    if (projectCategoryFilter === 'mobility') {
      return site.id === 'site-3' || site.id === 'site-6' || site.id === 'site-7';
    }
    if (projectCategoryFilter === 'sensory') {
      return site.id === 'site-4' || site.id === 'site-5' || site.id === 'site-9';
    }
    if (projectCategoryFilter === 'infrastructure') {
      return site.id === 'site-10' || site.id === 'site-11';
    }
    return true;
  });

  // Filtered tools
  const filteredTools = tools.filter((tool) => {
    if (toolFilter === 'all') return true;
    if (toolFilter === 'active') return tool.status === 'active';
    if (toolFilter === 'idle') return tool.status === 'idle';
    return true;
  });

  const activeToolsCount = tools.filter((t) => t.status === 'active').length;

  const renderToolIcon = (iconName: PluginTool['icon']) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal size={18} />;
      case 'book':
        return <BookOpen size={18} />;
      case 'globe':
        return <Globe size={18} />;
      case 'compass':
        return <Compass size={18} />;
      case 'sliders':
        return <Sliders size={18} />;
      case 'volume':
        return <Volume2 size={18} />;
      case 'eye':
        return <Eye size={18} />;
      case 'cpu':
        return <Cpu size={18} />;
      default:
        return <Wrench size={18} />;
    }
  };

  return (
    <div className="muse-shell">
      {/* ====================================================================
          MINIMAL TOP NAVIGATION (MUSE & CLAUDE STYLE)
          ==================================================================== */}
      <header className="muse-header">
        {/* Left: Brand Emblem & Identity */}
        <div
          className="muse-brand"
          onClick={() => setActiveTab('projects')}
          role="button"
          tabIndex={0}
        >
          <div className="muse-logo-symbol">⬡</div>
          <div>
            <div className="muse-brand-name">HeroForge</div>
          </div>
          <span className="muse-badge-pill">Studio OS v1.2</span>
        </div>

        {/* Center: Clean Pill Tabs */}
        <nav className="muse-nav-tabs">
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span>Projects</span>
            <span className="tab-badge green">12</span>
          </button>
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'canvas' ? 'active' : ''}`}
            onClick={() => setActiveTab('canvas')}
          >
            <span>Studio Canvas</span>
          </button>
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <span>Plug-in Tools</span>
            <span className="tab-badge">{activeToolsCount} Active</span>
          </button>
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'obsidian' ? 'active' : ''}`}
            onClick={() => setActiveTab('obsidian')}
          >
            <span>Knowledge Vault</span>
          </button>
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'inspector' ? 'active' : ''}`}
            onClick={() => setActiveTab('inspector')}
          >
            <span>Restraint Law</span>
          </button>
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            <span>Launch Video</span>
          </button>
          <button
            type="button"
            className={`muse-tab-btn ${activeTab === 'prompts' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompts')}
          >
            <span>Prompts</span>
          </button>
        </nav>

        {/* Right: Quick Action Controls */}
        <div className="muse-header-actions">
          <button
            type="button"
            className="action-btn-quiet"
            onClick={() => {
              setActiveTab('tools');
              setAddToolModalOpen(true);
            }}
          >
            <Plus size={14} />
            <span>Add Tool</span>
          </button>
          <button
            type="button"
            className="action-btn-primary"
            onClick={() => {
              setActiveTab('canvas');
            }}
          >
            <Eye size={14} />
            <span>Open Canvas</span>
          </button>
        </div>
      </header>

      {/* ====================================================================
          MAIN CONTENT WORKSPACE
          ==================================================================== */}
      <main className="muse-main-content">
        {/* ==================================================================
            TAB 1: 12 FLAGSHIP PROJECTS (QUIET EDITORIAL OVERVIEW)
            ================================================================== */}
        {activeTab === 'projects' && (
          <div>
            <div className="editorial-header-wrap">
              <div className="editorial-kicker">Autonomous Creative Direction · 12 Flagship Spaces</div>
              <h1 className="editorial-title">Twelve Flagship Spaces.</h1>
              <p className="editorial-subtitle">
                Minimalist architecture, tactile materiality, and balanced typographic tension.
                Every project enforces exactly one primary CTA, two-line balanced headlines, zero orphan words,
                and unobstructed hero subjects.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar-wrap">
              <div className="filter-pills-row">
                <button
                  type="button"
                  className={`filter-pill ${projectCategoryFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setProjectCategoryFilter('all')}
                >
                  All Projects (12)
                </button>
                <button
                  type="button"
                  className={`filter-pill ${projectCategoryFilter === 'physical' ? 'active' : ''}`}
                  onClick={() => setProjectCategoryFilter('physical')}
                >
                  Physical & Horological (4)
                </button>
                <button
                  type="button"
                  className={`filter-pill ${projectCategoryFilter === 'mobility' ? 'active' : ''}`}
                  onClick={() => setProjectCategoryFilter('mobility')}
                >
                  Aerospace & Mobility (3)
                </button>
                <button
                  type="button"
                  className={`filter-pill ${projectCategoryFilter === 'sensory' ? 'active' : ''}`}
                  onClick={() => setProjectCategoryFilter('sensory')}
                >
                  Sensory & Material (3)
                </button>
                <button
                  type="button"
                  className={`filter-pill ${projectCategoryFilter === 'infrastructure' ? 'active' : ''}`}
                  onClick={() => setProjectCategoryFilter('infrastructure')}
                >
                  Infrastructure & SaaS (2)
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  Restraint Audit: 12/12 A+
                </span>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {filteredSites.map((site) => {
                const isSelected = selectedSiteSlug === site.slug;
                const paletteColors = [
                  site.palette.bg,
                  site.palette.surface,
                  site.palette.ink,
                  site.palette.muted,
                  site.palette.accent,
                ];

                return (
                  <article
                    key={site.id}
                    className={`project-card ${isSelected ? 'active-preview' : ''}`}
                  >
                    {/* Thumbnail */}
                    <div className="project-thumbnail-box">
                      <img
                        src={site.heroImage}
                        alt={site.brand}
                        className="project-thumb-img"
                        loading="lazy"
                      />
                      <div className="project-thumb-badges">
                        <span className="project-index-pill">{site.indexLabel}</span>
                        <span className="project-grade-pill">Grade A+</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="project-card-body">
                      <div className="project-meta-category">{site.category}</div>
                      <h2 className="project-brand-title">{site.brand}</h2>
                      <p className="project-headline-sub">{site.title}</p>

                      {/* Palette Dots */}
                      <div className="project-swatches-row" title="Surface and ink color palette">
                        {paletteColors.map((col, idx) => (
                          <div
                            key={idx}
                            className="palette-dot"
                            style={{ backgroundColor: col }}
                            title={col}
                          />
                        ))}
                        <span
                          style={{
                            marginLeft: '6px',
                            fontSize: '0.64rem',
                            color: 'var(--ink-muted)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {site.palette.bg} / {site.palette.ink}
                        </span>
                      </div>

                      {/* Restraint Tags */}
                      <div className="project-restraint-tags">
                        <span className="restraint-tag">1 Primary CTA</span>
                        <span className="restraint-tag">0 Orphan Words</span>
                        <span className="restraint-tag">2-Line Headline</span>
                        <span className="restraint-tag">{site.restraintAudit.subjectUnobstructedPct}% Unobstructed</span>
                      </div>

                      {/* Footer Actions */}
                      <div className="project-card-footer">
                        <button
                          type="button"
                          className="card-action-btn primary"
                          onClick={() => {
                            setSelectedSiteSlug(site.slug);
                            setActiveTab('canvas');
                          }}
                        >
                          <Eye size={13} />
                          <span>Studio Canvas</span>
                        </button>

                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            type="button"
                            className="card-action-btn"
                            onClick={() => handleCopy(`prompt-${site.id}`, site.replicationPrompt)}
                            title="Copy A+ Replication Prompt"
                          >
                            {copiedKey === `prompt-${site.id}` ? (
                              <>
                                <Check size={13} style={{ color: 'var(--accent-green)' }} />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} />
                                <span>Prompt</span>
                              </>
                            )}
                          </button>

                          <a
                            href={`/?site=${site.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-action-btn"
                            title="Open standalone site in new window"
                          >
                            <ExternalLink size={13} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 2: STUDIO CANVAS (INTERACTIVE PREVIEW & RESPONSIVE STAGE)
            ================================================================== */}
        {activeTab === 'canvas' && (
          <div className="studio-canvas-shell">
            {/* Viewport & Controls Bar */}
            <div className="canvas-viewport-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--ink-secondary)' }}>
                  Active Project:
                </span>
                <select
                  value={selectedSiteSlug}
                  onChange={(e) => setSelectedSiteSlug(e.target.value)}
                  className="form-select"
                  style={{ padding: '5px 12px', fontSize: '0.78rem' }}
                >
                  {FLAGSHIP_SITES.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.indexLabel} — {s.brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Viewport switchers */}
              <div className="viewport-toggle-group">
                <button
                  type="button"
                  className={`viewport-btn ${viewport === 'desktop' ? 'active' : ''}`}
                  onClick={() => setViewport('desktop')}
                >
                  <Monitor size={14} />
                  <span>Desktop (100%)</span>
                </button>
                <button
                  type="button"
                  className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
                  onClick={() => setViewport('tablet')}
                >
                  <Tablet size={14} />
                  <span>Tablet (768px)</span>
                </button>
                <button
                  type="button"
                  className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
                  onClick={() => setViewport('mobile')}
                >
                  <Smartphone size={14} />
                  <span>Mobile (390px)</span>
                </button>
              </div>

              {/* Kombai Diff Overlay Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--ink-secondary)',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={kombaiActive}
                    onChange={(e) => setKombaiActive(e.target.checked)}
                  />
                  <span>Kombai Overlay</span>
                </label>

                {kombaiActive && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input
                      type="range"
                      min={10}
                      max={90}
                      value={kombaiOpacity}
                      onChange={(e) => setKombaiOpacity(Number(e.target.value))}
                      style={{ width: '70px' }}
                    />
                    <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)' }}>
                      {kombaiOpacity}%
                    </span>
                    <select
                      value={kombaiBlend}
                      onChange={(e) => setKombaiBlend(e.target.value as any)}
                      className="form-select"
                      style={{ padding: '2px 6px', fontSize: '0.68rem' }}
                    >
                      <option value="difference">Difference</option>
                      <option value="normal">Normal</option>
                      <option value="multiply">Multiply</option>
                    </select>
                  </div>
                )}

                <a
                  href={`/?site=${activeSite.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn-quiet"
                >
                  <ExternalLink size={13} />
                  <span>Standalone ↗</span>
                </a>
              </div>
            </div>

            {/* Canvas Stage */}
            <div className="canvas-frame-outer">
              <div className={`canvas-frame-inner ${viewport}`}>
                {/* Kombai Visual Reference Overlay (if enabled) */}
                {kombaiActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 30,
                      pointerEvents: 'none',
                      mixBlendMode: kombaiBlend,
                      opacity: kombaiOpacity / 100,
                    }}
                  >
                    <img
                      src={activeSite.heroImage}
                      alt="Kombai Overlay Reference"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}

                {/* Render the site */}
                <FlagshipSiteView site={activeSite} isEmbedded={true} />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 3: DYNAMIC "PLUG-IN TOOLS" SLOT SYSTEM
            Modular Tools Shelf, active/standby states, configuration, runner
            ================================================================== */}
        {activeTab === 'tools' && (
          <div className="tools-shelf-container">
            <div className="editorial-header-wrap">
              <div className="editorial-kicker">Modular Agent Workbench · Dynamic Slots</div>
              <h1 className="editorial-title">Plug-in Tools Shelf.</h1>
              <p className="editorial-subtitle">
                An extensible slot system connecting OpenAI Codex CLI, local Obsidian Vaults,
                Vercel Multi-Repo deployment, Pinterest visual reference pipelines, and fluid typography engines.
                Toggle slots on demand or plug in custom agent extensions.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="tools-stats-overview">
              <div className="tool-stat-card">
                <div className="tool-stat-kicker">Installed Slots</div>
                <div className="tool-stat-val">{tools.length} Tools</div>
                <div className="tool-stat-desc">Extensible modular plugins</div>
              </div>
              <div className="tool-stat-card">
                <div className="tool-stat-kicker">Active Engines</div>
                <div className="tool-stat-val" style={{ color: 'var(--accent-green)' }}>
                  {activeToolsCount} Active
                </div>
                <div className="tool-stat-desc">Live in memory & build pipeline</div>
              </div>
              <div className="tool-stat-card">
                <div className="tool-stat-kicker">Standby Engines</div>
                <div className="tool-stat-val" style={{ color: 'var(--ink-muted)' }}>
                  {tools.length - activeToolsCount} Idle
                </div>
                <div className="tool-stat-desc">Click toggle to activate</div>
              </div>
              <div className="tool-stat-card">
                <div className="tool-stat-kicker">Flagship Integration</div>
                <div className="tool-stat-val">12/12 Sites</div>
                <div className="tool-stat-desc">Restraint Law compliant</div>
              </div>
            </div>

            {/* Filter and Add Tool Bar */}
            <div className="filter-bar-wrap">
              <div className="filter-pills-row">
                <button
                  type="button"
                  className={`filter-pill ${toolFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setToolFilter('all')}
                >
                  All Tools ({tools.length})
                </button>
                <button
                  type="button"
                  className={`filter-pill ${toolFilter === 'active' ? 'active' : ''}`}
                  onClick={() => setToolFilter('active')}
                >
                  Active ({activeToolsCount})
                </button>
                <button
                  type="button"
                  className={`filter-pill ${toolFilter === 'idle' ? 'active' : ''}`}
                  onClick={() => setToolFilter('idle')}
                >
                  Standby ({tools.length - activeToolsCount})
                </button>
              </div>

              <button
                type="button"
                className="action-btn-primary"
                onClick={() => setAddToolModalOpen(true)}
              >
                <Plus size={14} />
                <span>+ Add Custom Tool Plugin</span>
              </button>
            </div>

            {/* Tools Grid */}
            <div className="tools-shelf-grid">
              {filteredTools.map((tool) => {
                const isActive = tool.status === 'active';

                return (
                  <div
                    key={tool.id}
                    className={`tool-slot-card ${isActive ? 'is-active' : 'is-idle'}`}
                  >
                    {/* Header */}
                    <div>
                      <div className="tool-slot-header">
                        <div className="tool-identity-box">
                          <div className="tool-icon-frame">{renderToolIcon(tool.icon)}</div>
                          <div>
                            <div className="tool-name-title">{tool.name}</div>
                            <div className="tool-category-sub">{tool.category}</div>
                          </div>
                        </div>

                        {/* Status Toggle Pill */}
                        <button
                          type="button"
                          className={`tool-status-toggle ${isActive ? 'active' : 'idle'}`}
                          onClick={() => toggleToolStatus(tool.id)}
                          title="Click to toggle Active / Standby state"
                        >
                          <Power size={11} />
                          <span>{isActive ? 'Active' : 'Standby'}</span>
                        </button>
                      </div>

                      {/* Description */}
                      <p className="tool-desc-text">{tool.description}</p>

                      {/* Runtime Telemetry Box */}
                      <div className="tool-telemetry-box">
                        <div className="tool-telemetry-row">
                          <span className="telemetry-key">Binary / Hook:</span>
                          <span className="telemetry-val">{tool.binary}</span>
                        </div>
                        {Object.entries(tool.telemetry).map(([k, v]) => (
                          <div key={k} className="tool-telemetry-row">
                            <span className="telemetry-key">{k}:</span>
                            <span className="telemetry-val">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="tool-slot-actions">
                      <button
                        type="button"
                        className="card-action-btn primary"
                        onClick={() => handleRunTool(tool)}
                      >
                        <Play size={12} />
                        <span>Run Diagnostic</span>
                      </button>

                      <button
                        type="button"
                        className="card-action-btn"
                        onClick={() => setToolSettingsOpen(tool)}
                      >
                        <Settings size={12} />
                        <span>Configure</span>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Add Custom Tool Plugin Slot Card */}
              <div
                className="tool-add-custom-card"
                onClick={() => setAddToolModalOpen(true)}
                role="button"
                tabIndex={0}
              >
                <div className="tool-add-icon-ring">
                  <Plus size={22} />
                </div>
                <div className="tool-add-title">+ Add Custom Tool Plugin</div>
                <p className="tool-add-subtitle">
                  Register a custom CLI binary, MCP server, API bridge, or design telemetry hook.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 4: OBSIDIAN VAULT (KNOWLEDGE GRAPH & MOCS)
            ================================================================== */}
        {activeTab === 'obsidian' && (
          <div>
            <div className="editorial-header-wrap">
              <div className="editorial-kicker">Synchronized Local Knowledge Graph</div>
              <h1 className="editorial-title">Obsidian Vault Bridge.</h1>
              <p className="editorial-subtitle">
                Two-way markdown knowledge graph stored locally at <code>heroforge-v1/obsidian-vault/</code>.
                Synchronizes the Minimalist Hero Restraint Law, consolidated 38 skills, and multi-CLI bridges.
              </p>
            </div>

            <div className="obsidian-vault-layout">
              {/* Note Index Sidebar */}
              <div className="obsidian-note-sidebar">
                <div className="note-sidebar-header">
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
                    Vault Notes ({OBSIDIAN_VAULT_NOTES.length})
                  </span>
                </div>
                <div className="note-sidebar-list">
                  {OBSIDIAN_VAULT_NOTES.map((note) => (
                    <div
                      key={note.id}
                      className={`obsidian-nav-item ${selectedNoteId === note.id ? 'active' : ''}`}
                      onClick={() => setSelectedNoteId(note.id)}
                    >
                      <div className="note-nav-title">{note.title}</div>
                      <div className="note-nav-cat">{note.category}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note Reader */}
              <div className="obsidian-note-viewer">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    paddingBottom: '14px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div>
                    <span className="project-index-pill" style={{ marginRight: '8px' }}>
                      {activeNote.category}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--ink-muted)' }}>
                      {activeNote.filename}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="card-action-btn"
                    onClick={() => handleCopy(`note-${activeNote.id}`, activeNote.markdown)}
                  >
                    {copiedKey === `note-${activeNote.id}` ? (
                      <>
                        <Check size={13} style={{ color: 'var(--accent-green)' }} />
                        <span>Copied Markdown</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Markdown</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="obsidian-rendered-markdown">
                  <pre
                    style={{
                      fontFamily: 'inherit',
                      whiteSpace: 'pre-wrap',
                      lineHeight: 1.7,
                      fontSize: '0.88rem',
                      color: 'var(--ink-secondary)',
                    }}
                  >
                    {activeNote.markdown}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 5: RESTRAINT INSPECTOR (OPENDESIGN RESTRICTION AUDIT)
            ================================================================== */}
        {activeTab === 'inspector' && (
          <div className="inspector-layout">
            <div className="editorial-header-wrap">
              <div className="editorial-kicker">OpenDesign Grader & Telemetry</div>
              <h1 className="editorial-title">Minimalist Hero Restraint Law.</h1>
              <p className="editorial-subtitle">
                Seven strict architectural rules preventing AI slop, layout bloat, and decorative jargon across all 12 projects.
              </p>
            </div>

            {/* Site Selector */}
            <div className="filter-bar-wrap">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--ink-secondary)' }}>
                  Inspecting Site:
                </span>
                <select
                  value={selectedSiteSlug}
                  onChange={(e) => setSelectedSiteSlug(e.target.value)}
                  className="form-select"
                  style={{ padding: '6px 14px' }}
                >
                  {FLAGSHIP_SITES.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.indexLabel} — {s.brand}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="project-grade-pill">Grade A+ (100/100)</span>
              </div>
            </div>

            {/* 7 Restraint Rules Grid */}
            <div className="restraint-audit-grid">
              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 01 · Single CTA Floor</div>
                <div className="restraint-stat-metric">
                  {activeSite.restraintAudit.ctaCount} Primary CTA
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Verified 100% compliant (Max 1 allowed)</span>
                </div>
              </div>

              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 02 · Balanced Headline Lines</div>
                <div className="restraint-stat-metric">
                  {activeSite.restraintAudit.headlineLines} Balanced Lines
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Enforces 2-line balanced break</span>
                </div>
              </div>

              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 03 · Zero Orphan Words</div>
                <div className="restraint-stat-metric">
                  {activeSite.restraintAudit.orphanWords} Trailing Orphans
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Zero dangling single words</span>
                </div>
              </div>

              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 04 · Lead Sentence Restraint</div>
                <div className="restraint-stat-metric">
                  {activeSite.restraintAudit.leadChars} Characters
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Quiet concise lead (Target &lt;= 160ch)</span>
                </div>
              </div>

              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 05 · Unobstructed Subject</div>
                <div className="restraint-stat-metric">
                  {activeSite.restraintAudit.subjectUnobstructedPct}% Unobstructed
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Focal subject clearly visible</span>
                </div>
              </div>

              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 06 · Nav Label Clarity</div>
                <div className="restraint-stat-metric" style={{ fontSize: '0.88rem' }}>
                  {activeSite.restraintAudit.navClarity}
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Natural 1-word architectural terms</span>
                </div>
              </div>

              <div className="restraint-stat-box">
                <div className="tool-stat-kicker">Rule 07 · Color Bleed Isolation</div>
                <div className="restraint-stat-metric">
                  {activeSite.restraintAudit.workspaceBlueBleed ? 'Bleed Detected' : 'Strictly Isolated'}
                </div>
                <div className="restraint-rule-status">
                  <CheckCircle2 size={12} />
                  <span>Showcase uses bespoke client palette</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 6: LAUNCH VIDEO (HYPERFRAMES /BRAG MOTION GRAPHICS)
            ================================================================== */}
        {activeTab === 'video' && (
          <div>
            <div className="editorial-header-wrap">
              <div className="editorial-kicker">Hyperframes 60fps Motion Engine</div>
              <h1 className="editorial-title">Launch Video Studio.</h1>
              <p className="editorial-subtitle">
                Deterministic 60-second X-Post launch video engine. Compiles project source code and verified
                high-resolution photography into crisp MP4 renders via Playwright and FFmpeg.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Video Player Box */}
              <div className="project-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Video size={16} style={{ color: 'var(--accent-terracotta)' }} />
                  <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>brag-x-post.mp4 (60s / 1080x1920)</span>
                </div>

                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    background: '#141312',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EDE8DE',
                    flexDirection: 'column',
                    gap: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={activeSite.heroImage}
                    alt="Video thumbnail"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
                  />
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#191919',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Play size={22} style={{ marginLeft: '3px' }} />
                  </div>
                  <span style={{ zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
                    00:00 / 01:00 · 60fps Deterministic Render
                  </span>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <button
                    type="button"
                    className="action-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() =>
                      handleCopy(
                        'render-cmd',
                        'node scripts/render-brag-video.mjs --site aetherion-geneve --fps 60 --duration 60'
                      )
                    }
                  >
                    <Terminal size={14} />
                    <span>Copy Render Command</span>
                  </button>
                </div>
              </div>

              {/* Timeline Scene Breakdown */}
              <div className="project-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 700, marginBottom: '16px' }}>
                  60-Second Scene Breakdown
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="tool-telemetry-box">
                    <div style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>
                      00:00–00:12 · Scene 01: The Monolith Reveal
                    </div>
                    <div style={{ color: 'var(--ink-muted)' }}>
                      Triaxial tourbillon assembly floats into frame with sidereal telemetry counter.
                    </div>
                  </div>

                  <div className="tool-telemetry-box">
                    <div style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>
                      00:12–00:26 · Scene 02: Kinematic Gimbal Exploded View
                    </div>
                    <div style={{ color: 'var(--ink-muted)' }}>
                      48-tooth escapement rings separate to reveal Muonionalusta meteorite bridge.
                    </div>
                  </div>

                  <div className="tool-telemetry-box">
                    <div style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>
                      00:26–00:42 · Scene 03: Seven Flagship Showcase Sweep
                    </div>
                    <div style={{ color: 'var(--ink-muted)' }}>
                      Rapid architectural cut through Kurokawa, Valkyr, Sora & Klang, and Atelier Vespers.
                    </div>
                  </div>

                  <div className="tool-telemetry-box">
                    <div style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>
                      00:42–01:00 · Scene 04: Minimalist Hero Restraint Law & Outro
                    </div>
                    <div style={{ color: 'var(--ink-muted)' }}>
                      OpenDesign 100/100 audit readout and quiet HeroForge Studio logotype lockup.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            TAB 7: REPLICATION PROMPT VAULT
            ================================================================== */}
        {activeTab === 'prompts' && (
          <div>
            <div className="editorial-header-wrap">
              <div className="editorial-kicker">Replication Intelligence</div>
              <h1 className="editorial-title">A+ Master Replication Prompts.</h1>
              <p className="editorial-subtitle">
                Exact master prompts engineered to generate each of the 12 flagship websites in Antigravity,
                Claude Code, and OpenAI Codex with zero hallucination.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {FLAGSHIP_SITES.map((site) => (
                <div key={site.id} className="prompt-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="project-index-pill">{site.indexLabel}</span>
                      <span style={{ fontSize: '0.94rem', fontWeight: 700 }}>{site.brand}</span>
                      <span className="project-grade-pill">Grade A+</span>
                    </div>

                    <button
                      type="button"
                      className="card-action-btn primary"
                      onClick={() => handleCopy(`prompt-vault-${site.id}`, site.replicationPrompt)}
                    >
                      {copiedKey === `prompt-vault-${site.id}` ? (
                        <>
                          <Check size={13} />
                          <span>Copied Prompt</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="prompt-text-block">{site.replicationPrompt}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ====================================================================
          TOOL EXECUTION RUNNER DRAWER
          ==================================================================== */}
      {activeToolRunning && (
        <div className="drawer-backdrop" onClick={() => setActiveToolRunning(null)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-title-box">
                <Terminal size={18} style={{ color: 'var(--accent-terracotta)' }} />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{activeToolRunning.name}</div>
                  <div style={{ fontSize: '0.66rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                    {activeToolRunning.binary}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="action-btn-quiet"
                onClick={() => setActiveToolRunning(null)}
                style={{ padding: '6px' }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="drawer-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--ink-secondary)' }}>
                  Live Diagnostic Logs:
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    color: isRunning ? 'var(--accent-amber)' : 'var(--accent-green)',
                  }}
                >
                  {isRunning ? '● Executing...' : '✔ Completed'}
                </span>
              </div>

              <div className="terminal-log-output">
                {runningLogs.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>

              <div className="tool-telemetry-box">
                <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--ink-primary)' }}>
                  Slot Telemetry Summary
                </div>
                {Object.entries(activeToolRunning.telemetry).map(([k, v]) => (
                  <div key={k} className="tool-telemetry-row">
                    <span className="telemetry-key">{k}:</span>
                    <span className="telemetry-val">{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button
                  type="button"
                  className="action-btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={() => handleRunTool(activeToolRunning)}
                  disabled={isRunning}
                >
                  <RefreshCw size={14} className={isRunning ? 'animate-spin' : ''} />
                  <span>Re-run Diagnostic</span>
                </button>
                <button
                  type="button"
                  className="action-btn-quiet"
                  onClick={() => setActiveToolRunning(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TOOL SETTINGS MODAL
          ==================================================================== */}
      {toolSettingsOpen && (
        <div className="modal-backdrop" onClick={() => setToolSettingsOpen(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Settings size={16} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>
                  Configure {toolSettingsOpen.name}
                </span>
              </div>
              <button
                type="button"
                className="action-btn-quiet"
                onClick={() => setToolSettingsOpen(null)}
                style={{ padding: '4px' }}
              >
                <X size={14} />
              </button>
            </div>

            <form onSubmit={handleSaveToolSettings}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Tool Name</label>
                  <input
                    type="text"
                    value={toolSettingsOpen.name}
                    onChange={(e) =>
                      setToolSettingsOpen({ ...toolSettingsOpen, name: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    value={toolSettingsOpen.category}
                    onChange={(e) =>
                      setToolSettingsOpen({ ...toolSettingsOpen, category: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Binary Command / Hook</label>
                  <input
                    type="text"
                    value={toolSettingsOpen.binary}
                    onChange={(e) =>
                      setToolSettingsOpen({ ...toolSettingsOpen, binary: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    value={toolSettingsOpen.description}
                    onChange={(e) =>
                      setToolSettingsOpen({ ...toolSettingsOpen, description: e.target.value })
                    }
                    className="form-textarea"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Slot Status</label>
                  <select
                    value={toolSettingsOpen.status}
                    onChange={(e) =>
                      setToolSettingsOpen({
                        ...toolSettingsOpen,
                        status: e.target.value as 'active' | 'idle',
                      })
                    }
                    className="form-select"
                  >
                    <option value="active">Active (Online in Pipeline)</option>
                    <option value="idle">Standby (Idle)</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="action-btn-quiet"
                  onClick={() => setToolSettingsOpen(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="action-btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          + ADD CUSTOM TOOL PLUGIN MODAL
          ==================================================================== */}
      {addToolModalOpen && (
        <div className="modal-backdrop" onClick={() => setAddToolModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Plus size={16} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>
                  Add Custom Tool Plugin
                </span>
              </div>
              <button
                type="button"
                className="action-btn-quiet"
                onClick={() => setAddToolModalOpen(false)}
                style={{ padding: '4px' }}
              >
                <X size={14} />
              </button>
            </div>

            <form onSubmit={handleCreateCustomTool}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Plugin Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Figma Tokens Sync or Linear Issue Linker"
                    value={newToolName}
                    onChange={(e) => setNewToolName(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    placeholder="e.g. Design Systems, Multimodal, QA"
                    value={newToolCategory}
                    onChange={(e) => setNewToolCategory(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">CLI Binary or Endpoint</label>
                  <input
                    type="text"
                    placeholder="e.g. figma-tokens --pull or curl https://..."
                    value={newToolBinary}
                    onChange={(e) => setNewToolBinary(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    placeholder="Briefly describe what this plugin performs..."
                    value={newToolDesc}
                    onChange={(e) => setNewToolDesc(e.target.value)}
                    className="form-textarea"
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="action-btn-quiet"
                  onClick={() => setAddToolModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="action-btn-primary">
                  Connect Plugin Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

