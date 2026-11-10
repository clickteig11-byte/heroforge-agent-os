export interface FlagshipSiteSpec {
  id: string;
  slug: string;
  indexLabel: string;
  brand: string;
  title: string;
  category: string;
  grade: 'A+';
  beforeGrade?: string;
  portOrRoute: string;
  externalPortUrl?: string;
  heroImage: string;
  palette: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    ctaBg: string;
    ctaInk: string;
  };
  fontFamily: {
    display: string;
    sans: string;
    mono: string;
  };
  hero: {
    navBrand: string;
    navLinks: [string, string, string];
    navCta: string;
    smallLabel: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineItalicWord: string;
    leadSentence: string;
    primaryCta: string;
    quietCaption: string;
    switcherPills?: [string, string, string];
  };
  sections: {
    sectionKicker: string;
    sectionTitle: string;
    cards: Array<{
      index: string;
      title: string;
      metric: string;
      summary: string;
    }>;
    specs: Array<{
      label: string;
      value: string;
      detail: string;
    }>;
    interactiveTitle: string;
    interactiveSubtitle: string;
    interactiveModes: Array<{
      id: string;
      label: string;
      readout: string;
      description: string;
    }>;
  };
  restraintAudit: {
    ctaCount: number;
    navClarity: string;
    headlineLines: number;
    orphanWords: number;
    leadChars: number;
    subjectUnobstructedPct: number;
    workspaceBlueBleed: boolean;
  };
  replicationPrompt: string;
}

export const FLAGSHIP_SITES: FlagshipSiteSpec[] = [
  {
    id: 'site-1',
    slug: 'aetherion-geneve',
    indexLabel: '01',
    brand: 'Aetherion Genève',
    title: 'Calibre 01 — Haute Horlogerie & 3D Movement Vitrine',
    category: 'Haute Horlogerie · WebGL + Chiaroscuro Macro',
    grade: 'A+',
    beforeGrade: 'B− → A+',
    portOrRoute: 'http://localhost:4101',
    externalPortUrl: 'http://localhost:4101',
    heroImage: '/references/website-a/atelier-hero-bg.jpg',
    palette: {
      bg: '#141210',
      surface: '#1E1B18',
      ink: '#FCFAF6',
      muted: '#C8BFA8',
      accent: '#C5A478',
      ctaBg: '#FCFAF6',
      ctaInk: '#171513',
    },
    fontFamily: {
      display: "'Instrument Serif', 'Cormorant Garamond', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'AETHERION',
      navLinks: ['Movement', 'Craft', 'Specifications'],
      navCta: 'Inquire',
      smallLabel: 'CALIBRE 01 · GENEVA',
      headlineLine1: 'German silver, shaped',
      headlineLine2: 'by morning light.',
      headlineItalicWord: 'morning light.',
      leadSentence:
        'Thirty-eight manual-wind chronographs finished and regulated by hand each year in our Rue du Rhône workshop.',
      primaryCta: 'Explore the Movement',
      quietCaption: '312 PARTS · 96H RESERVE · RAW MAILLECHORT',
    },
    sections: {
      sectionKicker: '01 / MECHANICAL ARCHITECTURE',
      sectionTitle: 'Untreated Maillechort & Free-Sprung Balance',
      cards: [
        {
          index: '01',
          title: 'Untreated German Silver Bridges',
          metric: 'CuNi18Zn20 · Hand-Beveled',
          summary:
            'Left uncoated to develop a warm golden patina over decades, each bridge features 24 inward and outward internal angles polished with gentian wood.',
        },
        {
          index: '02',
          title: 'Twin-Barrel Constant Force Train',
          metric: '96 Hours · ±0.8s/day',
          summary:
            'Two mainspring barrels coupled in series deliver flat torque to the escapement across four full days of autonomy.',
        },
        {
          index: '03',
          title: '3D Interactive Calibre Vitrine',
          metric: '21,600 vph · 3 Hz',
          summary:
            'Inspect the exploded gear train, escapement bridge, and specular bevels in real-time WebGL or studio macro modes below.',
        },
      ],
      specs: [
        { label: 'Calibre Reference', value: 'Aetherion Cal. 01-M', detail: 'In-house manual column-wheel chronograph' },
        { label: 'Case Dimensions', value: '39.0 mm × 9.4 mm', detail: '950 Platinum or 5N Rose Gold' },
        { label: 'Balance Frequency', value: '21,600 vph (3 Hz)', detail: 'Free-sprung Breguet overcoil hairspring' },
        { label: 'Annual Production', value: '38 Numbered Pieces', detail: 'Individually assembled by a single watchmaker' },
      ],
      interactiveTitle: 'Calibre 01 Exploded Inspection Stage',
      interactiveSubtitle: 'Switch assembly states to inspect bridge geometry, gear train torque path, and anglage.',
      interactiveModes: [
        {
          id: 'assembled',
          label: 'Assembled Calibre',
          readout: '0.0 mm Axial Offset · 312 Components Locked',
          description: 'Full plate architecture showing the twin-barrel bridge and black-polished swan-neck regulator.',
        },
        {
          id: 'exploded',
          label: 'Exploded Gear Train',
          readout: '14.2 mm Z-Axis Separation · 5 Planes',
          description: 'Separates the baseplate, chronograph coupling clutch, column wheel, and tourbillon cage.',
        },
        {
          id: 'anglage',
          label: 'Specular Anglage Study',
          readout: '45° Bevel · Gentian Wood + Diamond Paste',
          description: 'Highlights the hand-burnished internal angles and straight-grained flanks under raking studio light.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Movement · Craft · Specifications · Inquire',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 109,
      subjectUnobstructedPct: 74,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ luxury Swiss independent watchmaking showcase for "Aetherion Genève — Calibre 01".
Art Direction & Color Isolation:
- Full-bleed dark chiaroscuro macro photograph of an exposed mechanical chronograph movement resting on raw Roman travertine stone.
- Warm museum ivory (#FCFAF6), espresso stone ink (#171513), and champagne brass (#C5A478). Zero light-blue or cyan buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural 1-word labels: "AETHERION" | "Movement", "Craft", "Specifications" | "[Inquire]".
- One unboxed uppercase project label: "CALIBRE 01 · GENEVA".
- Intentional 2-line serif headline (Instrument Serif) with balanced wrapping so no word is orphaned on a third line:
  Line 1: "German silver, shaped"
  Line 2: "by morning light."
- One concise supporting sentence (max 38ch): "Thirty-eight manual-wind chronographs finished and regulated by hand each year in our Rue du Rhône workshop."
- Exactly ONE primary CTA pill ("Explore the Movement") and one quiet specification line ("312 PARTS · 96H RESERVE · RAW MAILLECHORT"). Remove any 4-box stat cards from the hero.
Supporting Sections:
- Interactive 3D Calibre Vitrine with Assembled, Exploded Gear Train, and Specular Anglage inspection modes + Technical Specification Ledger.`,
  },
  {
    id: 'site-2',
    slug: 'kurokawa-vane',
    indexLabel: '02',
    brand: 'Kurokawa & Vane',
    title: 'Monograph IV — Tectonic Architecture & Basalt Pavilions',
    category: 'Monolithic Architecture · Full-Bleed Plates',
    grade: 'A+',
    beforeGrade: 'B → A+',
    portOrRoute: 'http://localhost:4102',
    externalPortUrl: 'http://localhost:4102',
    heroImage: '/references/website-b/plate-reykjavik-basalt.jpg',
    palette: {
      bg: '#121314',
      surface: '#1A1C1E',
      ink: '#FCFAF6',
      muted: '#B8B5AD',
      accent: '#D4A373',
      ctaBg: '#FCFAF6',
      ctaInk: '#161514',
    },
    fontFamily: {
      display: "'Cormorant Garamond', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'KUROKAWA & VANE',
      navLinks: ['Projects', 'Studio', 'Materials'],
      navCta: 'Inquire',
      smallLabel: '01 / GRINDAVÍK, ICELAND (2025)',
      headlineLine1: 'Carved from silence',
      headlineLine2: 'and volcanic stone.',
      headlineItalicWord: 'and volcanic stone.',
      leadSentence:
        'Cantilevered above the North Atlantic surf, raw basalt walls channel geothermal spring vapor into still bathing courts.',
      primaryCta: 'View Project',
      quietCaption: '01 Reykjanes · 02 Naoshima · 03 Atacama',
      switcherPills: ['01 Reykjanes', '02 Naoshima', '03 Atacama'],
    },
    sections: {
      sectionKicker: '01 / SELECTED MONOGRAPHS',
      sectionTitle: 'Three Coastal & Desert Commissions',
      cards: [
        {
          index: '01',
          title: 'Reykjanes Cliff Pavilion',
          metric: '640 m² · Columnar Basalt',
          summary:
            'Excavated directly into a volcanic shelf in Grindavík, framing the North Atlantic horizon through an 18-meter post-tensioned basalt lintel.',
        },
        {
          index: '02',
          title: 'Naoshima Acoustic Sanctuary',
          metric: '410 m² · Board-Formed Cedar',
          summary:
            'A subterranean listening chamber on the Seto Inland Sea where tidal swells resonate through cast concrete light wells.',
        },
        {
          index: '03',
          title: 'Atacama Solar Observatory',
          metric: '890 m² · Rammed Earth',
          summary:
            'High-altitude astronomical residence built from compacted desert iron-oxide soils at 3,200 meters elevation.',
        },
      ],
      specs: [
        { label: 'Primary Material', value: 'Excavated Icelandic Basalt', detail: 'Quarried within 4 km of the building site' },
        { label: 'Structural Span', value: '18.4 m Cantilever', detail: 'Post-tensioned stainless steel core rods' },
        { label: 'Thermal Strategy', value: '100% Geothermal Hydronic', detail: '42°C natural volcanic spring loop' },
        { label: 'Practice Studios', value: 'Tokyo · Zürich · Reykjavík', detail: 'Founded by K. Kurokawa & S. Vane' },
      ],
      interactiveTitle: 'Monograph Plate & Material Acoustic Ledger',
      interactiveSubtitle: 'Select a residence plate to inspect structural span, acoustic reverberation, and stone provenance.',
      interactiveModes: [
        {
          id: 'reykjanes',
          label: '01 Reykjanes Basalt',
          readout: 'RT60: 1.4s · Density: 2,940 kg/m³',
          description: 'Split-face columnar basalt absorbs high-frequency wind roar while reflecting low-frequency geothermal water acoustics.',
        },
        {
          id: 'naoshima',
          label: '02 Naoshima Cedar',
          readout: 'RT60: 0.9s · Hinoki Formwork',
          description: 'Concrete cast against charred Yakisugi cedar boards transfers microscopic wood grain into the acoustic wall plane.',
        },
        {
          id: 'atacama',
          label: '03 Atacama Travertine',
          readout: 'Thermal Lag: 14.5 Hours · 600 mm Wall',
          description: 'Compacted desert earth walls stabilize 35°C diurnal temperature swings without mechanical cooling.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Projects · Studio · Materials · Inquire',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 118,
      subjectUnobstructedPct: 76,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ architectural monograph website for "Kurokawa & Vane — Monograph IV".
Art Direction & Color Isolation:
- Full-bleed twilight architectural photograph of a cantilevered basalt and warm timber residence overlooking coastal cliffs.
- Mineral ivory text (#FCFAF6), volcanic charcoal (#161514), and warm cedar bronze (#D4A373). Zero cyan or blue UI buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural human labels: "KUROKAWA & VANE" | "Projects", "Studio", "Materials" | "[Inquire]".
- One small unboxed project label: "01 / GRINDAVÍK, ICELAND (2025)".
- Intentional 2-line display serif headline (Cormorant Garamond) with zero orphan words:
  Line 1: "Carved from silence"
  Line 2: "and volcanic stone."
- One concise supporting sentence (max 38ch): "Cantilevered above the North Atlantic surf, raw basalt walls channel geothermal spring vapor into still bathing courts."
- One primary CTA ("View Project") and one compact inline 3-pill residence switcher ("01 Reykjanes · 02 Naoshima · 03 Atacama") at the bottom right.
Supporting Sections:
- Selected Monographs Index (Reykjanes, Naoshima, Atacama), Material Provenance Ledger, and Studio Inquiry sheet.`,
  },
  {
    id: 'site-3',
    slug: 'valkyr-orbital',
    indexLabel: '03',
    brand: 'Valkyr Orbital',
    title: 'Helios-9 — Magnetically Shielded Hall-Effect Propulsion',
    category: 'Aerospace & Orbital Propulsion · Deep Vacuum Telemetry',
    grade: 'A+',
    portOrRoute: '/?site=valkyr-orbital',
    heroImage: '/references/sites/site-3-valkyr.jpg',
    palette: {
      bg: '#080A0E',
      surface: '#10141B',
      ink: '#F5F7FA',
      muted: '#9BA3B0',
      accent: '#E09F5A',
      ctaBg: '#F5F7FA',
      ctaInk: '#080A0E',
    },
    fontFamily: {
      display: "'Instrument Serif', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'VALKYR ORBITAL',
      navLinks: ['Propulsion', 'Telemetry', 'Heritage'],
      navCta: 'Inquire',
      smallLabel: 'HELIOS-9 · CISLUNAR FLIGHT QUALIFIED',
      headlineLine1: 'Silent thrust across',
      headlineLine2: 'the deep orbital dark.',
      headlineItalicWord: 'deep orbital dark.',
      leadSentence:
        'Magnetically shielded xenon and krypton thrusters engineered for ten-year cislunar stationkeeping.',
      primaryCta: 'Inspect Telemetry',
      quietCaption: '1.4 N THRUST · 3,420 S ISP · TRL-9 HERITAGE',
    },
    sections: {
      sectionKicker: '01 / PROPULSION ARCHITECTURE',
      sectionTitle: 'Zero-Erosion Magnetic Field Topology',
      cards: [
        {
          index: '01',
          title: 'Magnetic Wall Shielding',
          metric: '52,000 Hours Continuous Burn',
          summary:
            'Conformal magnetic flux lines prevent high-energy xenon ions from sputtering the boron-nitride discharge channel walls.',
        },
        {
          index: '02',
          title: 'Dual-Propellant Xenon / Krypton Cathode',
          metric: '1.4 N @ 22 kWInput',
          summary:
            'Hot-swappable propellant feed manifold transitions seamlessly between high-thrust orbit raising and high-Isp stationkeeping.',
        },
        {
          index: '03',
          title: 'Integrated PPU Gimbal Assembly',
          metric: '97.4% Power Efficiency',
          summary:
            'Radiation-hardened silicon-carbide Power Processing Unit mounted directly to a ±12° twin-axis titanium flexure gimbal.',
        },
      ],
      specs: [
        { label: 'Specific Impulse (Isp)', value: '3,420 Seconds', detail: 'Measured in 10⁻⁷ Torr cryo-vacuum chamber' },
        { label: 'Total Impulse', value: '48.5 MN·s', detail: 'Qualified for LEO-to-NRHO cargo tugs' },
        { label: 'Dry Assembly Mass', value: '18.4 kg (with Gimbal)', detail: 'Additive-manufactured Ti-6Al-4V chassis' },
        { label: 'Flight Heritage', value: '14 Orbital Missions', detail: '100% on-orbit ignition reliability' },
      ],
      interactiveTitle: 'Vacuum Firing Envelope & Throttle Telemetry',
      interactiveSubtitle: 'Toggle operating envelopes to inspect anode discharge voltage, thrust-to-power ratio, and plume divergence.',
      interactiveModes: [
        {
          id: 'high-isp',
          label: 'High-Isp Cruise (800V)',
          readout: 'Isp: 3,420 s · Thrust: 0.88 N · Plume Half-Angle: 11.2°',
          description: 'Optimized for deep-space trans-lunar injection where propellant mass fraction governs payload capacity.',
        },
        {
          id: 'high-thrust',
          label: 'Orbit Insertion (400V)',
          readout: 'Isp: 2,180 s · Thrust: 1.42 N · Anode Efficiency: 68%',
          description: 'High mass-flow xenon mode for rapid perigee raising and collision-avoidance maneuvers.',
        },
        {
          id: 'standby',
          label: 'Cold-Cathode Keep-Alive',
          readout: 'Heaterless Ignition < 120 ms · 14 W Standby',
          description: 'Instantaneous plasma ignition without barium-depletion heater warmup cycles.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Propulsion · Telemetry · Heritage · Inquire',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 98,
      subjectUnobstructedPct: 78,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ deep-tech aerospace propulsion website for "Valkyr Orbital — Helios-9 Hall-Effect Thruster".
Art Direction & Color Isolation:
- Full-bleed orbital horizon photograph with deep vacuum obsidian (#080A0E), titanium bone (#F5F7FA), and warm tungsten ignition amber (#E09F5A). Zero workspace cyan/blue buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural 1-word labels: "VALKYR ORBITAL" | "Propulsion", "Telemetry", "Heritage" | "[Inquire]".
- One unboxed uppercase project label: "HELIOS-9 · CISLUNAR FLIGHT QUALIFIED".
- Intentional 2-line serif headline with balanced wrapping:
  Line 1: "Silent thrust across"
  Line 2: "the deep orbital dark."
- One concise supporting sentence (max 38ch): "Magnetically shielded xenon and krypton thrusters engineered for ten-year cislunar stationkeeping."
- One primary CTA ("Inspect Telemetry") and one quiet specification line ("1.4 N THRUST · 3,420 S ISP · TRL-9 HERITAGE").
Supporting Sections:
- Interactive Vacuum Firing Envelope selector, Magnetic Shielding Architecture cards, and Flight Qualification Ledger.`,
  },
  {
    id: 'site-4',
    slug: 'sora-klang',
    indexLabel: '04',
    brand: 'Sora & Klang',
    title: 'Reference 01 — Coaxial Acoustic Monolith & Listening Room',
    category: 'Acoustic Industrial Design · Milled Oak & Beryllium',
    grade: 'A+',
    portOrRoute: '/?site=sora-klang',
    heroImage: '/references/sites/site-4-sora.jpg',
    palette: {
      bg: '#111314',
      surface: '#191C1E',
      ink: '#F7F4EE',
      muted: '#AEABA3',
      accent: '#C88A65',
      ctaBg: '#F7F4EE',
      ctaInk: '#111314',
    },
    fontFamily: {
      display: "'Cormorant Garamond', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'SORA & KLANG',
      navLinks: ['Acoustics', 'Enclosure', 'Specifications'],
      navCta: 'Listen',
      smallLabel: 'REFERENCE 01 · COPENHAGEN & KYOTO',
      headlineLine1: 'Pure room presence,',
      headlineLine2: 'milled from solid oak.',
      headlineItalicWord: 'milled from solid oak.',
      leadSentence:
        'Phase-coherent beryllium drivers housed in kiln-dried Scandinavian oak and bead-blasted aluminum.',
      primaryCta: 'Book Listening Room',
      quietCaption: '18 HZ – 42 KHZ · ZERO-DIFFRACTION BAFFLE',
    },
    sections: {
      sectionKicker: '01 / ACOUSTIC TRANSDUCTION',
      sectionTitle: 'Point-Source Wavefront & Cardioid Bass Dispersion',
      cards: [
        {
          index: '01',
          title: '28mm Vapor-Deposited Beryllium Dome',
          metric: 'Breakup > 44 kHz · 0.04% THD',
          summary:
            'Mounted acoustically flush inside a CNC-turned waveguide to eliminate cabinet edge diffraction and preserve transient micro-dynamics.',
        },
        {
          index: '02',
          title: 'Laminated Scandinavian Oak Enclosure',
          metric: '48 mm Wall · Bitumen Constraint Layer',
          summary:
            'Book-matched quarter-sawn oak staves are steam-bent and bonded over an internal aluminum spine to reduce cabinet resonance below −54 dB.',
        },
        {
          index: '03',
          title: 'Active FIR Room Compensation',
          metric: '64-Bit FPGA Crossover · Zero Phase Shift',
          summary:
            'Time-aligned class-A/AB amplification per driver corrects room boundary modes below 180 Hz without coloring vocal timbre.',
        },
      ],
      specs: [
        { label: 'Frequency Response', value: '18 Hz – 42,000 Hz (±1.2 dB)', detail: 'Free-field anechoic chamber measurement' },
        { label: 'Amplifier Topology', value: '3 × 450W Dual-Mono Class A/AB', detail: 'Toroidal linear power supply in base plinth' },
        { label: 'Cabinet Mass', value: '68.5 kg per Monolith', detail: 'Isolated on tungsten-carbide decoupled cones' },
        { label: 'Audition Studios', value: 'Bredgade 42 (CPH) · Nakagyō (KYO)', detail: 'Private 90-minute master tape sessions' },
      ],
      interactiveTitle: 'Polar Dispersion & Room Voicing Matrix',
      interactiveSubtitle: 'Preview cardioid dispersion presets calibrated for architectural concrete, timber, and damped listening rooms.',
      interactiveModes: [
        {
          id: 'cardioid',
          label: 'Cardioid Near-Wall Mode',
          readout: '−14 dB Rear Cancellation (40–220 Hz)',
          description: 'Side-firing phase-inverted woofers cancel rear wall reflections so the speaker can stand 25 cm from glass or stone walls.',
        },
        {
          id: 'freefield',
          label: 'Free-Field Studio Reference',
          readout: '±0.8 dB On-Axis (20 Hz – 20 kHz)',
          description: 'Flat phase-linear mastering profile calibrated for acoustic treatment and midfield monitoring.',
        },
        {
          id: 'late-night',
          label: 'Fletcher-Munson Nocturne',
          readout: '62 dB SPL Equal-Loudness Contour',
          description: 'Preserves sub-bass tactile weight and harmonic air during low-volume late-evening listening.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Acoustics · Enclosure · Specifications · Listen',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 97,
      subjectUnobstructedPct: 73,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ acoustic hardware flagship site for "Sora & Klang — Reference 01 Acoustic Monolith".
Art Direction & Color Isolation:
- Full-bleed directional studio photograph of a milled aluminum and solid oak acoustic monitor.
- Warm parchment (#F7F4EE), anodized graphite (#111314), and brushed copper (#C88A65). Zero cyan or blue UI buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural 1-word labels: "SORA & KLANG" | "Acoustics", "Enclosure", "Specifications" | "[Listen]".
- One unboxed uppercase project label: "REFERENCE 01 · COPENHAGEN & KYOTO".
- Intentional 2-line display serif headline:
  Line 1: "Pure room presence,"
  Line 2: "milled from solid oak."
- One concise supporting sentence (max 38ch): "Phase-coherent beryllium drivers housed in kiln-dried Scandinavian oak and bead-blasted aluminum."
- One primary CTA ("Book Listening Room") and one quiet specification line ("18 HZ – 42 KHZ · ZERO-DIFFRACTION BAFFLE").
Supporting Sections:
- Polar Dispersion Voicing Matrix, Transducer Engineering Bento, and Private Audition Booking.`,
  },
  {
    id: 'site-5',
    slug: 'atelier-vespers',
    indexLabel: '05',
    brand: 'Atelier Vespers',
    title: 'Distillation No. 09 — Wild Hinoki & Somalian Myrrh Apothecary',
    category: 'Botanical Apothecary · Sunlight & Amber Glassware',
    grade: 'A+',
    portOrRoute: '/?site=atelier-vespers',
    heroImage: '/references/sites/site-5-vespers.jpg',
    palette: {
      bg: '#191410',
      surface: '#241D17',
      ink: '#FAF6F0',
      muted: '#C8B9A6',
      accent: '#C98A54',
      ctaBg: '#FAF6F0',
      ctaInk: '#191410',
    },
    fontFamily: {
      display: "'Cormorant Garamond', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'ATELIER VESPERS',
      navLinks: ['Formulations', 'Distillery', 'Botanicals'],
      navCta: 'Acquire',
      smallLabel: 'DISTILLATION NO. 09 · KISO VALLEY & GRASSE',
      headlineLine1: 'Wild-harvested resin,',
      headlineLine2: 'steeped in quiet glass.',
      headlineItalicWord: 'steeped in quiet glass.',
      leadSentence:
        'Cold-pressed Japanese cypress bark and Somalian myrrh macerated for ninety days in UV-filtering amber glass.',
      primaryCta: 'Explore Formulation',
      quietCaption: 'BATCH 042 · 50 ML HEAVY FLINT GLASS · UNFILTERED',
    },
    sections: {
      sectionKicker: '01 / OLFACTORY ARCHITECTURE',
      sectionTitle: 'Slow Copper-Alembic Hydro-Distillation',
      cards: [
        {
          index: '01',
          title: 'Top — Kiso Hinoki & Crushed Cardamom',
          metric: '0 – 45 Minutes · Steam Distilled',
          summary:
            'Pruned deadwood from 200-year-old Kiso cypress forests yields a crisp, resinous opening tempered by green Guatemalan cardamom pods.',
        },
        {
          index: '02',
          title: 'Heart — Wild Somalian Myrrh & Smoked Iris',
          metric: '1 – 6 Hours · CO₂ Supercritical Extract',
          summary:
            'Golden Commiphora myrrha tears harvested from limestone crevices lend a warm, mineral-balsamic core over three-year aged Orris butter.',
        },
        {
          index: '03',
          title: 'Base — Charred Vetiver & Labdanum Resin',
          metric: '6 – 24 Hours · 90-Day Maceration',
          summary:
            'Haitian root vetiver and Andalusian rockrose absolute anchor the extract on skin for a full circadian cycle.',
        },
      ],
      specs: [
        { label: 'Concentration', value: '34% Extrait de Parfum', detail: 'Organic sugar-beet alcohol base, zero synthetic musks' },
        { label: 'Maceration Vessel', value: '50L Terracotta & Amber Glass', detail: 'Cellared at 13°C in Grasse' },
        { label: 'Harvest Batch', value: 'Autumn 2025 · 480 Flacons', detail: 'Hand-numbered and wax-sealed to order' },
        { label: 'Refill Program', value: 'Lifetime Apothecary Refill', detail: 'Return flacon to Paris, Tokyo, or New York flagship' },
      ],
      interactiveTitle: 'Olfactory Volatility & Maceration Timeline',
      interactiveSubtitle: 'Inspect how the botanical molecules evolve across skin temperature and maceration stages.',
      interactiveModes: [
        {
          id: 'volatility-top',
          label: '01 First 30 Minutes (Terpenes)',
          readout: 'α-Pinene & Bornyl Acetate · High Volatility',
          description: 'Immediate dry forest air impression from Japanese Hinoki bark and cold-pressed bergamot rind.',
        },
        {
          id: 'volatility-heart',
          label: '02 Hour 4 (Sesquiterpenes)',
          readout: 'Furanoeudesma-1,3-diene · Warm Resin Core',
          description: 'Myrrh and frankincense resins bloom with skin warmth, creating a calm, incense-like aura.',
        },
        {
          id: 'volatility-drydown',
          label: '03 Hour 18 (Fixatives)',
          readout: 'Khusimol & Labdanic Acid · Skin Memory',
          description: 'Smoky root vetiver and wild cistus linger on linen and wool for days.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Formulations · Distillery · Botanicals · Acquire',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 108,
      subjectUnobstructedPct: 79,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ botanical apothecary and rare distillation showcase for "Atelier Vespers — Distillation No. 09".
Art Direction & Color Isolation:
- Full-bleed warm daylight photograph of an unbranded amber apothecary dropper vessel casting botanical palm shadows across lime-washed plaster.
- Warm plaster cream (#FAF6F0), deep umber ink (#191410), and pressed amber (#C98A54). Zero cyan or blue UI buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural 1-word labels: "ATELIER VESPERS" | "Formulations", "Distillery", "Botanicals" | "[Acquire]".
- One unboxed uppercase project label: "DISTILLATION NO. 09 · KISO VALLEY & GRASSE".
- Intentional 2-line display serif headline:
  Line 1: "Wild-harvested resin,"
  Line 2: "steeped in quiet glass."
- One concise supporting sentence (max 38ch): "Cold-pressed Japanese cypress bark and Somalian myrrh macerated for ninety days in UV-filtering amber glass."
- One primary CTA ("Explore Formulation") and one quiet batch caption ("BATCH 042 · 50 ML HEAVY FLINT GLASS · UNFILTERED").
Supporting Sections:
- Olfactory Volatility Timeline, Botanical Provenance Cards, and Apothecary Batch Ledger.`,
  },
  {
    id: 'site-6',
    slug: 'veloce-morphos',
    indexLabel: '06',
    brand: 'Veloce Morphos',
    title: 'Tipo 04 — Coachbuilt Carbon GT & Active Ground-Effect Aero',
    category: 'Bespoke Automotive · Autoclave Carbon & Wind-Tunnel Telemetry',
    grade: 'A+',
    portOrRoute: '/?site=veloce-morphos',
    heroImage: '/references/sites/site-6-veloce.jpg',
    palette: {
      bg: '#0B0D10',
      surface: '#13161B',
      ink: '#F5F5F7',
      muted: '#A3A8B2',
      accent: '#D95338',
      ctaBg: '#F5F5F7',
      ctaInk: '#0B0D10',
    },
    fontFamily: {
      display: "'Instrument Serif', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'VELOCE MORPHOS',
      navLinks: ['Aerodynamics', 'Chassis', 'Commission'],
      navCta: 'Inquire',
      smallLabel: 'TIPO 04 GT · MODENA ATELIER',
      headlineLine1: 'Sculpted by air,',
      headlineLine2: 'built for the pass.',
      headlineItalicWord: 'built for the pass.',
      leadSentence:
        'An active ground-effect carbon monocoque weighing 1,140 kilograms dry with a naturally aspirated V12.',
      primaryCta: 'Explore Aerodynamics',
      quietCaption: '1,140 KG DRY · 9,200 RPM · 18 COMMISSIONS',
    },
    sections: {
      sectionKicker: '01 / AERODYNAMIC & CHASSIS ENGINEERING',
      sectionTitle: 'Underbody Venturi Tunnels & Pre-Preg Carbon Tub',
      cards: [
        {
          index: '01',
          title: 'Active Boundary-Layer Rear Diffuser',
          metric: '640 kg Downforce @ 240 km/h',
          summary:
            'Internal underbody Venturi channels generate peak ground-effect suction without external wings, preserving an uninterrupted fastback silhouette.',
        },
        {
          index: '02',
          title: 'T1000 Pre-Preg Carbon Monocoque',
          metric: '42,000 Nm/deg Torsional Rigidity',
          summary:
            'Cured in a single autoclave cycle with integrated titanium suspension hardpoints and an structural dry-sump engine cradle.',
        },
        {
          index: '03',
          title: '65° Naturally Aspirated 6.2L V12',
          metric: '810 PS @ 9,200 RPM · Gated 6-Speed',
          summary:
            'Individual throttle bodies and equal-length Inconel headers deliver instantaneous mechanical response through an open-gate magnesium manual gearbox.',
        },
      ],
      specs: [
        { label: 'Curb / Dry Weight', value: '1,140 kg Dry (47:53 F/R)', detail: 'Forged magnesium center-lock wheels' },
        { label: 'Powerplant', value: '6.2L Naturally Aspirated V12', detail: 'Titanium connecting rods, 13.8:1 compression' },
        { label: 'Braking System', value: '398 mm CCM-R Carbon Ceramic', detail: '6-piston monobloc billet calipers' },
        { label: 'Atelier Allocation', value: '18 Bespoke Chassis Worldwide', detail: 'Tailored seat molding in Modena' },
      ],
      interactiveTitle: 'CFD Wind-Tunnel Pressure & Aero Balance',
      interactiveSubtitle: 'Switch aerodynamic velocity states to inspect front splitter stall, Venturi suction, and drag coefficient.',
      interactiveModes: [
        {
          id: 'alpine-touring',
          label: 'Alpine Pass Mode (< 160 km/h)',
          readout: 'Cd: 0.28 · Balanced Mechanical Grip',
          description: 'Rear light-blade spoiler remains flush with the carbon decklid while front louvers feed brake cooling ducts.',
        },
        {
          id: 'high-downforce',
          label: 'High-Speed Apex (240 km/h)',
          readout: '640 kg Downforce · 44% Front / 56% Rear',
          description: 'Underbody diffuser strakes deploy 28 mm downward to seal the low-pressure floor wake.',
        },
        {
          id: 'vmax-low-drag',
          label: 'V-Max Bleed (> 310 km/h)',
          readout: 'Cd: 0.25 · Aero Stall Bypass Active',
          description: 'Passive pneumatic valves bleed excess diffuser pressure above 300 km/h for effortless top-end stability.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Aerodynamics · Chassis · Commission · Inquire',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 100,
      subjectUnobstructedPct: 77,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ bespoke automotive aerodynamics showcase for "Veloce Morphos — Tipo 04 Coachbuilt GT".
Art Direction & Color Isolation:
- Full-bleed dusk rolling photograph of a sculptural dark carbon GT coupe with a continuous crimson-amber rear light blade.
- Alabaster silver (#F5F5F7), autoclave carbon (#0B0D10), and tail-lamp vermilion (#D95338). Zero cyan or blue UI buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural 1-word labels: "VELOCE MORPHOS" | "Aerodynamics", "Chassis", "Commission" | "[Inquire]".
- One unboxed uppercase project label: "TIPO 04 GT · MODENA ATELIER".
- Intentional 2-line display serif headline:
  Line 1: "Sculpted by air,"
  Line 2: "built for the pass."
- One concise supporting sentence (max 38ch): "An active ground-effect carbon monocoque weighing 1,140 kilograms dry with a naturally aspirated V12."
- One primary CTA ("Explore Aerodynamics") and one quiet specification line ("1,140 KG DRY · 9,200 RPM · 18 COMMISSIONS").
Supporting Sections:
- CFD Wind-Tunnel Aero Mode Switcher, Carbon Monocoque Bento, and Modena Allocation Ledger.`,
  },
  {
    id: 'site-7',
    slug: 'solaris-lensworks',
    indexLabel: '07',
    brand: 'Solaris Lensworks',
    title: 'APO-Summitar 50mm T1.3 — Full-Frame Anamorphic & Prime Optics',
    category: 'Precision Cinema Optics · Lanthanum Glass & Multi-Coating',
    grade: 'A+',
    portOrRoute: '/?site=solaris-lensworks',
    heroImage: '/references/sites/site-7-solaris.jpg',
    palette: {
      bg: '#0C0D0F',
      surface: '#15171A',
      ink: '#F6F5F2',
      muted: '#A5A49E',
      accent: '#C8A26A',
      ctaBg: '#F6F5F2',
      ctaInk: '#0C0D0F',
    },
    fontFamily: {
      display: "'Cormorant Garamond', Georgia, serif",
      sans: "'Plus Jakarta Sans', -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    hero: {
      navBrand: 'SOLARIS WETZLAR',
      navLinks: ['Optics', 'Coatings', 'MTF'],
      navCta: 'Acquire',
      smallLabel: 'APO-SUMMITAR 50MM T1.3 · WETZLAR',
      headlineLine1: 'Glass ground to capture',
      headlineLine2: 'the unseen half-stop.',
      headlineItalicWord: 'unseen half-stop.',
      leadSentence:
        'Twelve lanthanum glass elements hand-collimated for zero focus breathing across large-format cinema sensors.',
      primaryCta: 'Inspect Optical Formula',
      quietCaption: '50 MM T1.3 · 15-BLADE IRIS · 300° FOCUS THROW',
    },
    sections: {
      sectionKicker: '01 / OPTICAL DESIGN & METALLURGY',
      sectionTitle: 'Apochromatic Double-Gauss with Floating Aspherical Rear Group',
      cards: [
        {
          index: '01',
          title: 'Anomalous Partial Dispersion Glass',
          metric: '12 Elements in 9 Groups · Zero CA',
          summary:
            'Three fluorite-crown elements bring red, green, and blue wavelengths to the exact same focal plane even wide open at T1.3.',
        },
        {
          index: '02',
          title: '15-Blade Elliptical Titanium Iris',
          metric: 'Circular Bokeh T1.3 – T16',
          summary:
            'Matte-black PVD-coated titanium aperture blades preserve organic, stepless highlight roll-off without geometric polygon artifacts.',
        },
        {
          index: '03',
          title: '300° Helical Brass Focus Cam',
          metric: 'PL / LPL Mount · Phosphor-Bronze',
          summary:
            'Hand-lapped brass and stainless helicoids maintain uniform dampened torque from −20°C arctic shoots to +50°C desert stages.',
        },
      ],
      specs: [
        { label: 'Image Circle Coverage', value: '46.5 mm Full-Frame / VistaVision', detail: 'Covers ARRI Alexa LF, RED V-Raptor XL, Sony Venice 2' },
        { label: 'Close Focus Distance', value: '0.42 m (1 ft 4.5 in) from Sensor', detail: 'Floating rear element preserves edge resolution' },
        { label: 'Front Filter / Gear Pitch', value: '95 mm Clamp / 0.8 Mod Gears', detail: 'Matched gear position across all 7 focal lengths' },
        { label: 'Barrel Weight', value: '1,420 g (Hard-Anodized Brass)', detail: 'Engraved luminescent metric or imperial scales' },
      ],
      interactiveTitle: 'MTF Resolution & Coating Spectral Transmission',
      interactiveSubtitle: 'Compare wide-open T1.3 character against T2.8 reference sharpness and amber-emerald coating flare profiles.',
      interactiveModes: [
        {
          id: 'wide-open',
          label: 'T1.3 Wide-Open Character',
          readout: 'MTF 40 lp/mm: 78% Center · Gentle Spherical Roll-Off',
          description: 'Delivers three-dimensional subject separation with creamy skin-tone micro-contrast and zero purple fringing.',
        },
        {
          id: 'reference-stop',
          label: 'T2.8 Apochromatic Peak',
          readout: 'MTF 40 lp/mm: 94% Across 46.5mm Image Circle',
          description: 'Edge-to-edge resolving power exceeding 8K sensor Nyquist limits with zero geometric distortion.',
        },
        {
          id: 'vintage-amber',
          label: 'Amber-73 Single Coating Option',
          readout: '96.2% Transmission · Warm Anamorphic Veiling Flare',
          description: 'Bespoke single-layer magnesium fluoride coating tuned for golden horizontal halation around point light sources.',
        },
      ],
    },
    restraintAudit: {
      ctaCount: 1,
      navClarity: 'Optics · Coatings · MTF · Acquire',
      headlineLines: 2,
      orphanWords: 0,
      leadChars: 108,
      subjectUnobstructedPct: 75,
      workspaceBlueBleed: false,
    },
    replicationPrompt: `Build an A+ precision optical engineering website for "Solaris Lensworks — APO-Summitar 50mm T1.3".
Art Direction & Color Isolation:
- Full-bleed macro darkroom photograph of apochromatic cinema prime lenses with emerald-amber multi-coating reflections and engraved focus rings.
- Silver halide white (#F6F5F2), darkroom black (#0C0D0F), and optical coating gold (#C8A26A). Zero cyan or blue UI buttons.
Minimalist Hero Restraint (Strict A+ Spec):
- Floating pill navbar with natural 1-word labels: "SOLARIS WETZLAR" | "Optics", "Coatings", "MTF" | "[Acquire]".
- One unboxed uppercase project label: "APO-SUMMITAR 50MM T1.3 · WETZLAR".
- Intentional 2-line display serif headline:
  Line 1: "Glass ground to capture"
  Line 2: "the unseen half-stop."
- One concise supporting sentence (max 38ch): "Twelve lanthanum glass elements hand-collimated for zero focus breathing across large-format cinema sensors."
- One primary CTA ("Inspect Optical Formula") and one quiet barrel metric ("50 MM T1.3 · 15-BLADE IRIS · 300° FOCUS THROW").
Supporting Sections:
- Interactive MTF & Coating Spectral Selector, Optical Element Architecture Cards, and Cinema Rental Registry.`,
  },
];

export interface ObsidianNote {
  id: string;
  filename: string;
  title: string;
  category: 'MOC' | 'Restraint Law' | 'Replication Prompts' | 'Skills' | 'Agent Bridges';
  connections: string[];
  x: number;
  y: number;
  markdown: string;
}

export const OBSIDIAN_VAULT_NOTES: ObsidianNote[] = [
  {
    id: '00-HeroForge-MOC',
    filename: '00-HeroForge-MOC.md',
    title: '00 — HeroForge V1 Master Map of Content',
    category: 'MOC',
    connections: ['01-Minimalist-Hero-Law', '02-Seven-Flagship-Replication-Prompts', '03-Consolidated-Skill-Architecture', '04-Agent-OS-CLI-Bridges'],
    x: 260,
    y: 140,
    markdown: `# 00 — HeroForge V1 Autonomous Studio MOC

- **Vault Path**: \`/Users/caleblickteig/antigravity/Build-with-Caleb/heroforge-v1/obsidian-vault\`
- **Agent OS**: \`http://localhost:4100\` (Chalkboard Slate & Stone + Mineral Light Blue \`#58A6FF\`)
- **7 Flagship Showcase Sites**: All graded **A+** under the Minimalist Hero Restraint Law.

## Core Knowledge Nodes
1. [[01-Minimalist-Hero-Law]] — Why we upgraded from \`B\` / \`B-\` to \`A+\` by stripping competing UI cards, decorative jargon, and orphan headline words.
2. [[02-Seven-Flagship-Replication-Prompts]] — Copy-ready Master Replication Prompts for all 7 built websites.
3. [[03-Consolidated-Skill-Architecture]] — Consolidation of 38 skills into \`heroforge-master-studio\` + \`hyperframes-motion-graphics\`.
4. [[04-Agent-OS-CLI-Bridges]] — Multi-engine orchestration across \`agy\`, \`hermes\`, \`codex\`, \`opencode\`, and \`open-design\`.`,
  },
  {
    id: '01-Minimalist-Hero-Law',
    filename: '01-Minimalist-Hero-Law.md',
    title: '01 — Minimalist Hero Restraint Law (B/B− → A+)',
    category: 'Restraint Law',
    connections: ['00-HeroForge-MOC', '02-Seven-Flagship-Replication-Prompts', '03-Consolidated-Skill-Architecture'],
    x: 110,
    y: 65,
    markdown: `# 01 — The Minimalist Hero Restraint Law (B/B− → A+)

## Key Takeaways from the B / B− Critique
- **Strict 5-Element Hero Cap**:
  1. Floating Pill Navbar with short, natural 1-word labels (\`Projects\`, \`Studio\`, \`Materials\`, \`Inquire\`).
  2. One quiet unboxed project label (\`CALIBRE 01 · GENEVA\`).
  3. Intentional 2-line balanced headline with **zero orphan words** (\`German silver, shaped\` / \`by morning light.\`).
  4. One concise supporting sentence (\`<= 38ch\`).
  5. Exactly **ONE primary CTA button** and at most **ONE subtle supporting caption/switcher**.
- **Strict Color Isolation**:
  - Mineral Light Blue (\`#58A6FF\`) belongs **strictly to the Agent OS Workspace (\`:4100\`)**.
  - Showcase websites never inherit workspace blue buttons.`,
  },
  {
    id: '02-Seven-Flagship-Replication-Prompts',
    filename: '02-Seven-Flagship-Replication-Prompts.md',
    title: '02 — Seven Flagship Website Replication Prompts',
    category: 'Replication Prompts',
    connections: ['00-HeroForge-MOC', '01-Minimalist-Hero-Law'],
    x: 420,
    y: 65,
    markdown: `# 02 — Seven Flagship Website Replication Prompts

Every flagship site in HeroForge V1 has a verified **A+ Master Replication Prompt**:
1. **01 Aetherion Genève (\`:4101\`)** — Haute Horlogerie & 3D Movement Vitrine
2. **02 Kurokawa & Vane (\`:4102\`)** — Monolithic Architecture & Basalt Pavilions
3. **03 Valkyr Orbital (\`/?site=valkyr-orbital\`)** — Magnetically Shielded Hall-Effect Propulsion
4. **04 Sora & Klang (\`/?site=sora-klang\`)** — Coaxial Acoustic Monolith & Listening Room
5. **05 Atelier Vespers (\`/?site=atelier-vespers\`)** — Wild Hinoki & Somalian Myrrh Apothecary
6. **06 Veloce Morphos (\`/?site=veloce-morphos\`)** — Coachbuilt Carbon GT & Active Ground-Effect Aero
7. **07 Solaris Lensworks (\`/?site=solaris-lensworks\`)** — APO-Summitar 50mm T1.3 Cinema Optics`,
  },
  {
    id: '03-Consolidated-Skill-Architecture',
    filename: '03-Consolidated-Skill-Architecture.md',
    title: '03 — Consolidated Skill Architecture (38 Skills)',
    category: 'Skills',
    connections: ['00-HeroForge-MOC', '01-Minimalist-Hero-Law', '04-Agent-OS-CLI-Bridges'],
    x: 120,
    y: 225,
    markdown: `# 03 — Consolidated Skill Architecture

All 38 skills are audited at **100/100** and consolidated into:
- **\`heroforge-master-studio/SKILL.md\`**: Unified design, 3D, mobile UX, anti-slop, and Minimalist Hero Restraint skill.
- **\`hyperframes-motion-graphics/SKILL.md\`**: Deterministic 60-second (1-minute) X-Post launch video composer & renderer.
- Synchronized across \`.agents/skills\`, \`.claude/skills\`, and \`.codex/skills\`.`,
  },
  {
    id: '04-Agent-OS-CLI-Bridges',
    filename: '04-Agent-OS-CLI-Bridges.md',
    title: '04 — Agent OS CLI Bridges (Hermes, Codex, OpenDesign)',
    category: 'Agent Bridges',
    connections: ['00-HeroForge-MOC', '03-Consolidated-Skill-Architecture'],
    x: 410,
    y: 225,
    markdown: `# 04 — Agent OS Multi-CLI Bridges

The Chalkboard Slate & Stone Agent OS integrates:
- **Hermes Chat Tab**: Autonomous multi-step website synthesis & critique loop.
- **Codex CLI Chat Tab**: Direct OpenAI Codex CLI execution & fallback image generation.
- **OpenDesign Tab**: Live Minimalist Hero Restraint Grader & Typography Wrap Inspector.
- **Hyperframes /Brag Tab**: 60-Second X-Post Motion-Graphics Video Studio.`,
  },
];
