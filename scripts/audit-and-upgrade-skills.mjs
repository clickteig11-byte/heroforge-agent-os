#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT, '.agents/skills');

const SKILL_UPGRADES = {
  'idea-generator': `
## Concrete Code & Schema Pattern
\`\`\`ts
export interface HeroForgeConcept {
  id: string;
  brandName: string;
  category: string;
  visualIdentity: string;
  heroComposition: string;
  scores: {
    visualOriginality: number;
    cinematicPotential: number;
    designQuality: number;
    feasibility: number;
    performance: number;
    portfolioImpact: number;
    average: number;
  };
}
\`\`\`

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Reject any concept that defaults to a generic SaaS dashboard, AI chatbot wrapper, or crypto token landing page.
- **Pinterest Curation Hook**: Every concept must specify a tactile physical material board (e.g., cleaved basalt, brushed grade-5 titanium, kiln-charred Hinoki, optical lanthanum glass).
- **Mobile UX Hook**: Every concept must define how its hero focal point adapts to a vertical \`390x844\` mobile viewport with thumb-zone navigation.
`,
  'creative-director': `
## Concrete 4-Tier CSS Token Architecture
\`\`\`css
@layer base, theme, components, utilities;

@layer theme {
  :root {
    /* Tier 1: Physical Material Literals */
    --stone-slate-950: #0b0e13;
    --stone-slate-900: #121720;
    --titanium-300: #cbd5e1;
    --ember-500: #f97316;

    /* Tier 2: Semantic Tokens */
    --bg-canvas: var(--stone-slate-950);
    --bg-surface: var(--stone-slate-900);
    --text-primary: #f8fafc;
    --accent-primary: var(--ember-500);
    --border-hairline: rgba(203, 213, 225, 0.14);
  }
}
\`\`\`

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Strictly ban \`#6366f1\` (Indigo), \`#8b5cf6\` (Violet), and \`#a855f7\` (Purple) gradients.
- **Pinterest Curation Hook**: Extract 4-color chromatic swatch bars directly from reference photography and surface them in the UI.
- **Mobile UX Hook**: Enforce \`min-height: 44px\` touch targets and docked bottom thumb-zone action bars on viewports \`<= 768px\`.
`,
  'reference-research': `
## Concrete Research-to-Component Mapping Matrix
| Reference Platform | Extracted Structural Mechanic | Target React Component |
| :--- | :--- | :--- |
| **Awwwards SOTD** | Single continuous WebGL canvas + perimeter HUD | \`<CalibreZeroStage />\` + \`<BottomHudBar />\` |
| **Godly.website** | Exposed \`1px\` stone hairlines + tabular numerals | \`.monograph-frame\` + \`font-variant-numeric: tabular-nums\` |
| **Pinterest Boards** | Variable aspect-ratio (\`16:10\`, \`4:5\`) moodboard pins with hex swatches | \`<PinterestCurationSection />\` |
| **Mobbin Mobile Flows** | Floating thumb-zone bottom bar + native \`<dialog>\` sheet | \`<MobileThumbDock />\` + \`<dialog>\` |

## Deslopify & Quality Guardrails
- Never copy third-party brand names or proprietary copywriting; synthesize structural proportions and choreographic pacing only.
`,
  'image-generation': `
## Concrete Reference Verification Protocol
\`\`\`bash
# Verify all generated reference images exist and exceed 100KB minimum high-res threshold
find references/website-a references/website-b -type f -name "*.png" -size +100k
\`\`\`

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Prompting**: Never prompt for "futuristic glowing neon UI". Specify real camera lenses (\`90mm f/2.8 Apo-Macro\`, \`Alpa 12 MAX 40mm Tilt-Shift\`), physical materials (\`grade-5 titanium\`, \`columnar tholeiitic basalt\`), and studio lighting ratios.
- **Mobile Reference Requirement**: Always generate both a \`16:9\` widescreen desktop reference (\`reference-desktop.png\`) and a \`9:16\` vertical mobile reference (\`reference-mobile.png\`).
`,
  'image-to-react': `
## Concrete Multimodal Token Extraction Workflow
1. Inspect \`reference-desktop.png\` and \`reference-mobile.png\` via multimodal vision.
2. Map exact column proportions (e.g., \`6:6\` HUD split for Website A; \`7:5\` exposed-hairline monograph split for Website B).
3. Implement responsive breakpoint reordering so mobile viewports match \`reference-mobile.png\` (e.g., placing the 3D tourbillon in the upper half of the mobile viewport via \`order: 1\` and typography below via \`order: 2\`).

## Deslopify & Quality Guardrails
- Every button, tab, and chapter selector visible in the reference image must be implemented as a working interactive React control—never a static image slice.
`,
  'hero-design': `
## Concrete Hero Safe-Zone & LCP Pattern
\`\`\`tsx
<section className="hero-section" style={{ minHeight: '100dvh' }}>
  <img
    src="/references/plate-reykjavik-basalt.png"
    alt="Reykjanes Cantilevered Basalt Sanctuary"
    width={760}
    height={920}
    fetchPriority="high"
    loading="eager"
  />
</section>
\`\`\`

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Never build a centered SaaS hero with a generic pill badge, two centered buttons, and a flat screenshot below.
- **Mobile UX Hook**: Use \`100dvh\` so mobile address bars never clip bottom HUD progress bars or thumb-zone CTAs.
`,
  'typography-director': `
## Concrete Three-Voice CSS Implementation
\`\`\`css
.display-headline {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 1.4rem + 4.6vw, 5.6rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.telemetry-readout {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
}
\`\`\`

## Deslopify & Quality Guardrails
- Enforce a single \`<h1>\` per page and strict sequential heading levels (\`<h1>\` -> \`<h2>\` -> \`<h3>\`).
`,
  'layout-composition': `
## Concrete Asymmetric Exposed-Hairline Grid Pattern
\`\`\`css
.architectural-spread {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  border-block: 1px solid var(--border-hairline);
}
.spread-primary {
  grid-column: span 7 / span 7;
  border-inline-end: 1px solid var(--border-hairline);
}
.spread-secondary {
  grid-column: span 5 / span 5;
}
\`\`\`

## Deslopify & Pinterest/Mobile Integration Guardrails
- **Anti-Slop Rule**: Zero consecutive sections with 3 identical rounded cards.
- **Pinterest Curation Hook**: Include an asymmetric moodboard / study grid with variable aspect ratios and chromatic swatch strips.
`,
  'cinematic-3d': `
## Concrete Damped Camera & Exploded-View Hook
\`\`\`ts
useFrame((state, delta) => {
  const dt = Math.min(delta, 0.05);
  currentExplode.current = THREE.MathUtils.damp(
    currentExplode.current,
    targetExplode,
    4.5,
    dt
  );
  state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetCam.x, 4.2, dt);
  state.camera.lookAt(currentLookAt.current);
});
\`\`\`

## Deslopify & Quality Guardrails
- Never use competing animation controllers on the same camera or mesh.
- Always provide a resilient fallback when WebGL is disabled or unavailable.
`,
  '3d-asset-creation': `
## Concrete Procedural Texture & Multi-Part Hierarchy Pattern
\`\`\`ts
// Generate zero-network procedural Widmanstatten / brushed metal CanvasTexture in memory
const texture = useMemo(() => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  // ... draw procedural crystalline/anisotropic grain ...
  return new THREE.CanvasTexture(canvas);
}, []);
\`\`\`

## App-Free Guarantee
- 100% of 3D geometry, materials, and studio environments are constructed in TypeScript + Three.js + React Three Fiber + Drei with zero dependency on external Blender or Spline desktop applications.
`,
  'lighting-materials': `
## Concrete Procedural Studio Environment (Zero External HDR Fetch)
\`\`\`tsx
<Environment resolution={256}>
  <group rotation={[-Math.PI / 3, 0, 1]}>
    <Lightformer form="rect" intensity={4} position={[0, 5, -9]} scale={[10, 10, 1]} />
    <Lightformer form="ring" color="#38bdf8" intensity={3} position={[-5, 2, -1]} scale={[6, 6, 1]} />
    <Lightformer form="rect" color="#f59e0b" intensity={2.5} position={[10, 1, 0]} scale={[12, 2, 1]} />
  </group>
</Environment>
\`\`\`

## Deslopify & Quality Guardrails
- Never use flat unlit materials; pair warm key lighting with cool rim kickers for unmistakable depth.
`,
  'camera-choreography': `
## Concrete Multi-Chapter Camera Spline Table
| Chapter | Scroll Range | Desktop Camera \`[x, y, z]\` | Mobile Camera \`[x, y, z]\` | Narrative Focus |
| :--- | :--- | :--- | :--- | :--- |
| **01** | \`0.00 – 0.25\` | \`[0.0, 0.15, 5.35]\` | \`[0.0, 0.15, 6.20]\` | Sovereign Hero Lockup |
| **02** | \`0.25 – 0.52\` | \`[1.8, 0.85, 4.40]\` | \`[0.0, 0.30, 5.60]\` | Triaxial Gimbal Orbit |
| **03** | \`0.52 – 0.78\` | \`[-2.1, 0.45, 3.85]\` | \`[0.0, 0.45, 5.40]\` | Axial Exploded Dissection |
| **04–05** | \`0.78 – 1.00\` | \`[0.0, 0.10, 5.10]\` | \`[0.0, 0.55, 5.80]\` | Metallurgy & Allocation Vault |
`,
  'scroll-storytelling': `
## Concrete Bidirectional GSAP ScrollTrigger Pattern
\`\`\`ts
useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        telemetryRef.current.scrollProgress = Number(self.progress.toFixed(4));
      }
    });
  });
  return () => ctx.revert();
}, []);
\`\`\`
`,
  'motion-design': `
## Concrete Reduced-Motion & Compositor Pattern
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .animated-surface {
    transition: none !important;
    animation: none !important;
  }
}
\`\`\`
`,
  'microinteractions': `
## Concrete Native Dialog & Focus-Visible Pattern
\`\`\`css
button:hover:not(:disabled) {
  transform: translateY(-1px);
}
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 3px;
}
dialog:modal {
  overscroll-behavior: contain;
}
dialog::backdrop {
  overflow: hidden;
  overscroll-behavior: contain;
}
\`\`\`
`,
  'responsive-design': `
## Concrete Breakpoint Verification Matrix
- **Desktop (\`1440x900\`)**: Full 12-column asymmetric grids and perimeter HUDs.
- **Tablet (\`768x1024\`)**: Adapted 2-column or stacked stage with preserved hairline borders.
- **Mobile (\`390x844\`)**: Zero horizontal overflow (\`scrollWidth <= innerWidth\`), \`100dvh\` hero stage, and floating thumb-zone dock with \`>= 44x44px\` tap targets.
`,
  'visual-qa': `
## Concrete Playwright Multi-Viewport Verification Command
\`\`\`bash
node scripts/run-visual-qa.mjs
\`\`\`
Captures Desktop (\`1440x900\`), Tablet (\`768x1024\`), and Mobile (\`390x844\`) screenshots for Website A, Website B, and the HeroForge Gallery, verifies zero console errors, tests scroll scrubbing and modal dialogs, and writes \`data/qa-report.json\`.
`,
  'design-critic': `
## Concrete Automated Deslopify + Critic Gate
Every build must pass both:
1. \`node scripts/deslopify-audit.mjs\` (0 banned buzzwords, 0 purple gradients, 0 dead links, verified \`tabular-nums\`, \`<dialog>\`, and \`prefers-reduced-motion\`).
2. Multimodal screenshot comparison against \`reference-desktop.png\` and \`reference-mobile.png\`.
`,
  'performance-auditor': `
## Concrete Vite Vendor Chunking Configuration
\`\`\`ts
build: {
  target: 'esnext',
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        three: ['three', '@react-three/fiber', '@react-three/drei'],
        motion: ['gsap', 'motion']
      }
    }
  }
}
\`\`\`
`,
  'batch-website-generator': `
## Concrete Multi-Site Port & CLI Map
- **Port 4100 (\`apps/gallery\`)**: HeroForge V1 Agent OS Slate Stone Local Dashboard & Comparison Gallery.
- **Port 4101 (\`apps/website-a-3d\`)**: Website A — \`AETHERION // CALIBRE ZERO\` (Cinematic 3D WebGL).
- **Port 4102 (\`apps/website-b-editorial\`)**: Website B — \`KUROKAWA & VANE\` (Premium Non-3D Editorial).
- **CLI Generator**: \`node scripts/generate-site.mjs --idea idea-05 --port 4103\`
`,
  'asset-optimization': `
## Concrete Zero-CLS Image Contract
Every \`<img>\` element must declare explicit \`width\`, \`height\`, and \`loading\` (\`eager\` + \`fetchPriority="high"\` above the fold; \`lazy\` + \`decoding="async"\` below the fold).
`,
  'portable-workflow': `
## Concrete Clean-Install & Archive Commands
\`\`\`bash
node scripts/verify-clean-install.mjs
node scripts/package-archive.mjs
\`\`\`
`
};

const manifestPath = path.join(ROOT, 'skills-manifest.json');
const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  : { thirdPartyVerifiedSkills: [], originalHeroForgeSkills: [] };

const manifestMap = new Map();
for (const s of manifest.thirdPartyVerifiedSkills || []) {
  manifestMap.set(s.name, {
    category: 'third-party-verified',
    displayName: s.displayName || s.name,
    source: s.source,
    commit: s.commit,
    installCommand: s.installCommand || `npx skills add ${s.source}`
  });
}
for (const s of manifest.originalHeroForgeSkills || []) {
  manifestMap.set(s.name, {
    category: 'heroforge-studio',
    displayName: s.name,
    source: s.source || 'https://github.com/clickteig11-byte/heroforge-agent-os',
    commit: s.commit || '921ec5a6b1fe47610a8e3cc92b205b268423501d',
    installCommand: 'Included in HeroForge V1 Studio'
  });
}

const skillDirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true }).filter(d => d.isDirectory());
const auditResults = [];

for (const dir of skillDirs) {
  const skillName = dir.name;
  const skillPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');
  if (!fs.existsSync(skillPath)) continue;

  let content = fs.readFileSync(skillPath, 'utf8');
  const upgradeBlock = SKILL_UPGRADES[skillName];

  if (upgradeBlock && !content.includes('Deslopify &') && !content.includes('Concrete ')) {
    content = content.trimEnd() + '\n\n' + upgradeBlock.trim() + '\n';
    fs.writeFileSync(skillPath, content, 'utf8');
  }

  const lines = content.split('\n').length;
  const hasFrontmatter = content.startsWith('---');
  const hasTriggers = /##\s*(\d+\.\s*)?(Triggers|When to Use|Overview|The Floor|House rules|Workflow|Quick reference|Initial Response|Core Philosophy|Input|Steps)/i.test(content);
  const hasVerification = /##\s*(\d+\.\s*)?(Verification|Expected Outputs|Guidelines|Rules|Flow|Sweep|Ground rules|Decision rules|How to use|Common mismatches|Review Format|Rewrite|The gate|House rules)/i.test(content);
  const hasCodeExamples = content.includes('```') || content.includes('|');
  const provenance = manifestMap.get(skillName) || {
    category: 'heroforge-studio',
    displayName: skillName,
    source: 'https://github.com/clickteig11-byte/heroforge-agent-os',
    commit: '921ec5a6b1fe47610a8e3cc92b205b268423501d',
    installCommand: 'Included in HeroForge V1 Studio'
  };

  auditResults.push({
    name: skillName,
    displayName: provenance.displayName,
    category: provenance.category,
    source: provenance.source,
    commit: provenance.commit,
    installCommand: provenance.installCommand,
    path: `.agents/skills/${skillName}/SKILL.md`,
    lines,
    hasFrontmatter,
    hasTriggers,
    hasVerification,
    hasCodeExamples,
    upgraded: Boolean(upgradeBlock),
    auditScore: (hasFrontmatter ? 25 : 0) + (hasTriggers ? 25 : 0) + (hasVerification ? 25 : 0) + (lines >= 45 ? 25 : 15)
  });
}

// Sync all upgraded skills across all 4 adapter directories
const TARGET_ADAPTERS = [
  path.join(ROOT, '.claude/skills'),
  path.join(ROOT, '.codex/skills'),
  path.resolve(ROOT, '../.agents/skills')
];

for (const adapterDir of TARGET_ADAPTERS) {
  fs.mkdirSync(adapterDir, { recursive: true });
  for (const dir of skillDirs) {
    const src = path.join(SKILLS_DIR, dir.name);
    const dest = path.join(adapterDir, dir.name);
    fs.cpSync(src, dest, { recursive: true, force: true });
  }
}

const report = {
  auditedAt: new Date().toISOString(),
  totalSkillsAudited: auditResults.length,
  thirdPartyVerifiedCount: auditResults.filter(s => s.category === 'third-party-verified').length,
  heroForgeStudioCount: auditResults.filter(s => s.category === 'heroforge-studio').length,
  averageScore: Number((auditResults.reduce((acc, s) => acc + s.auditScore, 0) / auditResults.length).toFixed(1)),
  allPassed: auditResults.every(s => s.auditScore >= 90),
  skills: auditResults.sort((a, b) => a.name.localeCompare(b.name))
};

fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'data/skills-audit-report.json'), JSON.stringify(report, null, 2));
const galleryDataDir = path.join(ROOT, 'apps/gallery/src/data');
if (fs.existsSync(galleryDataDir)) {
  fs.writeFileSync(path.join(galleryDataDir, 'skills-audit-report.json'), JSON.stringify(report, null, 2));
}

console.log(`[SKILL AUDIT COMPLETE] Total Skills: ${report.totalSkillsAudited} (${report.thirdPartyVerifiedCount} 3rd-party real repos + ${report.heroForgeStudioCount} studio) | Avg Score: ${report.averageScore}/100 | All Passed: ${report.allPassed}`);
