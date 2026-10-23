export const site = {
  name: 'Young Electric Inc',
  legalName: 'Young Electric Inc',
  owners: 'Andy Young & Jake Young',
  businessType: 'Family-Owned Residential Electrical Contractor',
  licenseStatus: 'Florida Licensed Electrical Contractor & Fully Insured',
  licenseNumber: 'State of Florida Certified Electrical Contractor',
  insuranceCoverage: '$2,000,000 General Liability & Workers’ Compensation Insured',
  yearsInBusiness: '10+ Years Serving South Florida',
  domain: 'https://www.youngelectricincfl.com',
  phone: '561-363-0946',
  phoneRaw: 'tel:5613630946',
  email: 'info@youngelectricincfl.com',
  mainLocation: 'Boca Raton',
  mainState: 'Florida',
  mainStateAbbr: 'FL',
  serviceAreaSummary: 'Boca Raton, Delray Beach, Boynton Beach, Parkland, Coral Springs, Deerfield Beach, Coconut Creek, Pompano Beach',
  serviceCounties: 'Palm Beach County & Broward County',
  hours: 'Mon-Sat 8:00 AM - 5:00 PM (24/7 Emergency Service Available)',
  mapsUrl: 'https://maps.app.goo.gl/jyRiooFFE5S231r38',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13504577.386925368!2d-90.37067053397625!3d34.273645115519706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91bd711ef5b33%3A0xc193b3ec8a30fede!2sYoung%20Electric%20Inc!5e0!3m2!1sen!2sin!4v1790006759620!5m2!1sen!2sin',
  rating: '4.9',
  reviewCount: '47',
};

export const images = {
  heroElectrician: '/images/electrician-boca-raton-fl.jpg',
  heroPanel: '/images/residential-electrical-panel-upgrade.jpg',
  electricianPanel: '/images/electrician-inspecting-breaker-box.jpg',
  electricianDrill: '/images/electrical-contractor-drilling.jpg',
  electricianWiring: '/images/installing-new-home-wiring.jpg',
  panelCloseup: '/images/circuit-breakers-in-electrical-panel.jpg',
  outletInstall: '/images/repairing-wall-receptacle.jpg',
  outletWall: '/images/standard-120v-wall-outlet.jpg',
  switchWall: '/images/modern-light-switch-installation.jpg',
  outletCloseup: '/images/testing-outlet-voltage.jpg',
  lightingLivingRoom: '/images/living-room-recessed-lighting.jpg',
  lightingChandelier: '/images/dining-room-chandelier-installation.jpg',
  lightingCeilingLight: '/images/led-ceiling-light-fixture.jpg',
  ceilingFanRoom: '/images/living-room-ceiling-fan.jpg',
  ceilingFanBedroom: '/images/bedroom-ceiling-fan-replacement.jpg',
  evCharger: '/images/home-ev-charging-station.jpg',
  evCharger2: '/images/level-2-ev-charger-plugged-in.jpg',
  inspection: '/images/electrical-safety-inspection-checklist.jpg',
  inspection2: '/images/electrician-evaluating-home-wiring.jpg',
  surgeProtection: '/images/whole-home-surge-protector.jpg',
  surgeOutlet: '/images/point-of-use-surge-protection-strip.jpg',
  generator: '/images/residential-standby-generator.jpg',
  wiring: '/images/new-construction-electrical-wiring.jpg',
  wiring2: '/images/running-romex-cable-in-attic.jpg',
  floridaHome: '/images/south-florida-residential-home.jpg',
  floridaHome2: '/images/modern-florida-house-exterior.jpg',
  electricianSmile: '/images/friendly-local-electrician.jpg',
  lightBulb: '/images/led-light-bulb-energy-savings.jpg',
};

export type ServiceProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type ServiceCostFactor = {
  factor: string;
  impact: string;
};

export type ServiceProject = {
  title: string;
  location: string;
  description: string;
  solution: string;
  outcome?: string;
  image?: string;
};

export type ServiceDiagnosedProblem = {
  symptom: string;
  likelyCause: string;
  urgency: 'Immediate Hazard' | 'High Priority' | 'Maintenance' | 'Code Compliance';
  whenToCall: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  icon: string;
  ctaText?: string;
  diagnosedProblems?: ServiceDiagnosedProblem[];
  process?: ServiceProcessStep[];
  costFactors?: ServiceCostFactor[];
  costGuide?: {
    typicalRange: string;
    serviceCallFee?: string;
    details: string;
  };
  permitRequirements?: {
    required: boolean;
    jurisdiction: string;
    details: string;
  };
  warrantyInfo?: string;
  realProjects?: ServiceProject[];
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
  faqs: { q: string; a: string }[];
  benefits: { title: string; desc: string; icon: string }[];
  relatedServices?: string[];
};

export const services: Service[] = [
  // ==========================================
  // PRIORITY 1: ELECTRICAL REPAIR
  // ==========================================
  {
    slug: 'electrical-repair-boca-raton-fl',
    title: 'Electrical Repair Boca Raton, FL',
    shortTitle: 'Electrical Repair',
    h1: 'Electrical Repair in Boca Raton, FL',
    metaTitle: 'Electrical Repair Boca Raton FL | Young Electric Inc',
    metaDescription: 'Need fast, reliable electrical repair in Boca Raton, FL? Andy & Jake Young diagnose and fix flickering lights, dead outlets, and tripped breakers safely. Call 561-363-0946.',
    heroImage: images.electricianDrill,
    heroImageAlt: 'Electrician performing electrical repair work on a residential panel in Boca Raton, FL',
    icon: 'Wrench',
    ctaText: 'Call for Electrical Repair',
    intro: 'Electrical faults in your home should never be left to guesswork. Flickering fixtures, hot outlet faceplates, dead kitchen receptacles, and breakers that repeatedly trip are symptoms of underlying resistance, loose terminations, or circuit overloads. Young Electric Inc provides Boca Raton homeowners with direct, owner-operated residential electrical repairs. When you call, you speak directly with Andy or Jake Young—licensed master electricians with over a decade of hands-on South Florida diagnostic experience.',
    benefits: [
      { title: 'Thermal & Meter Diagnostics', desc: 'We pinpoint the exact root cause using calibrated multimeters and thermal imaging—no guesswork.', icon: 'ShieldCheck' },
      { title: 'Upfront Flat-Rate Pricing', desc: 'You receive an exact price before tools touch wires. No surprise hourly overruns or open-ended billing.', icon: 'DollarSign' },
      { title: 'Code-Compliant Repairs', desc: 'All repairs adhere strictly to 2023 NEC and Florida Building Codes using commercial-grade materials.', icon: 'FileCheck' },
      { title: 'Owner on Every Call', desc: 'Andy or Jake personally inspects and completes every repair, backing it with a 1-year workmanship warranty.', icon: 'Home' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Flickering or Dimming Lights Across Multiple Rooms',
        likelyCause: 'Loose or corroded neutral wire in the panel or meter socket, or high-resistance splice in an attic junction box.',
        urgency: 'High Priority',
        whenToCall: 'Call an electrician if flickering occurs when major appliances kick on, or if bulbs burn out at an abnormally fast rate.'
      },
      {
        symptom: 'Outlet or Wall Switch Warm to the Touch or Buzzing',
        likelyCause: 'High-resistance electrical arcing behind the wall plate caused by deteriorated backstabbed connections.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Shut off the circuit breaker immediately. Warm plates are a leading precursor to residential electrical fires.'
      },
      {
        symptom: 'Circuit Breaker Trips Repeatedly After Being Reset',
        likelyCause: 'Direct short circuit, ground fault, or continuous electrical draw exceeding the breaker\'s 80% continuous rating.',
        urgency: 'High Priority',
        whenToCall: 'Do not force the breaker to stay on. Repeatedly resetting a fault breaker causes busbar pitting and cable damage.'
      },
      {
        symptom: 'GFCI Receptacle Will Not Reset or "Dead" Half-Room',
        likelyCause: 'Downstream ground fault, moisture intrusion in an outdoor or bathroom box, or end-of-life internal sensor failure.',
        urgency: 'Maintenance',
        whenToCall: 'If unplugging all devices does not allow the GFCI to reset, professional circuit tracing is required.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Systematic Diagnostic Inspection',
        description: 'Andy or Jake inspects the affected circuit, takes voltage drop and continuity readings, and evaluates wire terminations to identify the root cause.'
      },
      {
        step: 2,
        title: 'Upfront Flat-Rate Solution',
        description: 'We present the exact diagnostic findings and provide an itemized flat-rate quote. You approve the scope and price before any repair begins.'
      },
      {
        step: 3,
        title: 'Precision Code-Compliant Repair',
        description: 'We replace compromised components with industrial-grade devices, re-torque lugs to manufacturer inch-pound specs, and correct compromised splices.'
      },
      {
        step: 4,
        title: 'Full Load & Polarity Safety Testing',
        description: 'We test the circuit under real-world operational load, verify grounding electrode integrity, verify AFCI/GFCI trip curves, and provide a 1-year warranty.'
      }
    ],
    realProjects: [
      {
        title: 'Overheating Attic Junction Box Neutral Repair',
        location: 'Millpond, Boca Raton, FL',
        description: 'Homeowner experienced unpredictable voltage dips and flickering in three rear bedrooms whenever the central vacuum or dryer was activated.',
        solution: 'Conducted circuit tracing and discovered an unboxed, loose neutral splice buried under blown-in attic insulation that was actively scorching the joist. Installed a code-approved steel junction box, re-spliced with commercial wire connectors, and balanced phase distribution.',
        outcome: 'Stable 120V line voltage restored across all bedroom circuits and a severe concealed fire hazard was completely resolved.'
      },
      {
        title: 'Kitchen Island Island Backsplash GFCI Arcing',
        location: 'Woodfield Country Club, Boca Raton, FL',
        description: 'Customer noticed a faint burning plastic smell and buzzing when running a countertop espresso machine and air fryer simultaneously.',
        solution: 'Found deteriorated quick-wire (backstabbed) terminals behind the builder-grade receptacle that had begun melting the nylon box. Replaced with an industrial-rated 20A tamper-resistant GFCI receptacle secured with side-screw clamp terminals torqued to 14 in-lbs.',
        outcome: 'Zero arcing, zero heat generation under 1800W continuous load, and instant trip response verified with an external ground-fault tester.'
      },
      {
        title: '1970s Aluminum Branch Wiring Remediation',
        location: 'Camino Gardens, Boca Raton, FL',
        description: 'Buyer inspection flagged unmitigated single-strand aluminum wiring across 12 branch circuits, threatening insurance underwriting.',
        solution: 'Pigtail-spliced all device terminations using UL-listed AlumiConn dual-rated torque connectors pre-filled with antioxidant inhibitor, calibrated to exact factory torque specifications.',
        outcome: 'Passed Citizens insurance four-point electrical certification on the first inspection, avoiding a costly whole-home drywall tear-out.'
      }
    ],
    costFactors: [
      { factor: 'Type of Electrical Fault', impact: 'Isolated device failures (outlet, switch) require less labor than intermittent multi-circuit wiring faults behind finished walls.' },
      { factor: 'Accessibility of Wiring', impact: 'Attics with high clearance or accessible crawlspaces require less diagnostic labor than conduit embedded in CBS block walls.' },
      { factor: 'Material Grade Required', impact: 'Commercial-grade tamper-resistant receptacles, dual-function AFCI/GFCI breakers, and copper pigtails add small material costs with long-term reliability.' },
      { factor: 'Safety Code Updates', impact: 'Older homes requiring AFCI retrofits or grounding electrode upgrades to satisfy current NEC regulations.' }
    ],
    costGuide: {
      serviceCallFee: '$99 diagnostic fee (waived when proceeding with repair)',
      typicalRange: '$175 – $485 for standard repairs; $350 – $750 for complex circuit tracing',
      details: 'All repairs include upfront flat-rate pricing before work begins. We never charge by the open-ended hour for residential troubleshooting.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Standard like-for-like device replacements and minor circuit repairs do not require city building permits under Florida Building Code Chapter 27. Running new dedicated branch circuits or panel alterations will be fully permitted.'
    },
    warrantyInfo: 'Young Electric Inc backs all residential electrical repairs with a 1-Year Comprehensive Workmanship Warranty plus full manufacturer warranties on replacement parts.',
    sections: [
      {
        heading: 'Why Timely Electrical Diagnostics Matter in South Florida Homes',
        paragraphs: [
          'South Florida\'s tropical climate places unique stressors on residential electrical systems. Persistent high humidity promotes surface oxidation on brass terminal screws, while frequent summer lightning storms generate transient voltage spikes that degrade circuit breaker trip mechanisms over time.',
          'Ignoring subtle warning signs—such as a warm switch plate, a faint buzzing inside a wall cavity, or a circuit breaker that trips once or twice a week—allows high-resistance connections to generate intense localized heat. Electrical arcing can reach temperatures exceeding 1,000°F inside wall cavities without immediately tripping older standard thermal breakers.',
          'When Andy or Jake Young arrives at your Boca Raton home, we conduct an exhaustive, methodical diagnostic walkthrough. We inspect panel terminations, test breaker trip thresholds, measure circuit amperage draw, and use sensitive thermal imaging to detect abnormal heat signatures before they pose danger to your family.'
        ]
      },
      {
        heading: 'Common Symptoms Boca Raton Homeowners Experience',
        paragraphs: [
          'Many Boca Raton neighborhoods—from Camino Gardens and Millpond to early sections of Boca Square—were built between 1965 and 1985. These homes frequently operate on electrical systems designed for a fraction of today\'s home office, EV charging, and luxury kitchen appliance demands.'
        ],
        list: [
          'Multiple outlets going dead simultaneously when a vacuum or hair dryer is switched on',
          'Breakers that trip instantly with an audible snap upon turning on a light switch',
          'GFCI receptacles in kitchens, bathrooms, or patios that refuse to reset',
          'Sparks flying from an outlet when inserting a standard 120V household plug',
          'Light fixtures that flicker rhythmically or dim when the central air conditioning compressor starts',
          'A persistent acrid fishy or burning plastic odor near switch boxes or panel enclosures'
        ]
      }
    ],
    faqs: [
      { q: 'How much does a typical electrical repair cost in Boca Raton?', a: 'Most common residential repairs (such as replacing failed GFCI outlets, resolving loose neutral connections, or replacing weak circuit breakers) range between $175 and $450. We provide an exact, flat-rate quote before any work starts so you never face surprise bills.' },
      { q: 'Is a warm wall outlet dangerous?', a: 'Yes. Receptacles should never feel noticeably warm or hot to the touch. Warmth indicates electrical resistance and arcing behind the wall plate, typically from loose wire nuts or deteriorated backstabbed connections. Switch off the breaker controlling that circuit and call us for an inspection.' },
      { q: 'Why does my circuit breaker keep tripping even when nothing is plugged in?', a: 'If a breaker trips immediately upon resetting with nothing connected, there is likely a direct short circuit (hot wire contacting a bare ground or neutral) or a defective breaker mechanism. Forcing the breaker to stay on can cause wire insulation to melt.' },
      { q: 'Do you offer same-day electrical repair in Boca Raton?', a: 'Yes. We prioritize urgent residential repair calls throughout Boca Raton, Delray Beach, and neighboring communities. When you call 561-363-0946, you speak directly with Andy or Jake to arrange fast dispatch.' }
    ],
    relatedServices: ['electrical-panel-service-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'outlet-repair-boca-raton-fl', 'electrical-troubleshooting-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 1: ELECTRICAL PANEL SERVICE
  // ==========================================
  {
    slug: 'electrical-panel-service-boca-raton-fl',
    title: 'Electrical Panel Replacement Boca Raton, FL',
    shortTitle: 'Electrical Panel Replacement',
    h1: 'Electrical Panel Replacement in Boca Raton, FL',
    metaTitle: 'Electrical Panel Replacement Boca Raton FL | Young Electric Inc',
    metaDescription: 'Need a 200A electrical panel upgrade or replacement in Boca Raton, FL? Florida licensed contractor Andy & Jake Young handle load calculations, City permits, and FPL coordination. Call 561-363-0946.',
    heroImage: images.panelCloseup,
    heroImageAlt: 'Close-up of a modern 200-amp residential electrical panel with circuit breakers in a Boca Raton, FL home',
    icon: 'LayoutGrid',
    ctaText: 'Call for Panel Replacement',
    intro: 'Your electrical panel is the central nervous system of your home, distributing incoming utility power to every lighting circuit, major appliance, and comfort system. For Boca Raton homeowners with older 100-amp or 150-amp services—or hazardous legacy panels like Federal Pacific Electric (FPE), Zinsco, or Challenger—an outdated panel restricts capacity and creates serious fire and insurance liabilities. Young Electric Inc delivers complete, turn-key residential electrical panel replacements and 200A/400A service upgrades. We perform exact NEC load calculations, manage all City of Boca Raton municipal permitting, coordinate with Florida Power & Light (FPL), and provide technical documentation for your HOA architectural review.',
    benefits: [
      { title: '200A & 400A Capacity', desc: 'Expand electrical headroom for Level 2 EV charging, variable-speed pool heat pumps, and modern HVAC systems.', icon: 'TrendingUp' },
      { title: 'Insurance Compliance', desc: 'Eliminate uninsurable recalled panels (FPE Stab-Lok, Zinsco, Challenger) to pass Florida 4-point inspections.', icon: 'ShieldCheck' },
      { title: 'Turn-Key Permitting', desc: 'We handle all City of Boca Raton building permits, engineering calculations, and FPL disconnects.', icon: 'FileCheck' },
      { title: 'Whole-Home Surge Included', desc: 'Every panel installation includes integrated Type 2 surge protection to safeguard sensitive appliances.', icon: 'Zap' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Recalled or Uninsurable Panel (Federal Pacific, Zinsco, Challenger)',
        likelyCause: 'Manufacturing defects where breakers fail to trip during sustained overloads, causing busbar melting and structural fires.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Immediately. Citizens and Florida admitted carriers routinely cancel coverage or issue 30-day remediation notices for these brands.'
      },
      {
        symptom: 'Panel Enclosure Warm, Humming, or Shows Rust / Moisture',
        likelyCause: 'Severe contact resistance, loose main lug connection, or moisture entering through degraded exterior service mast weatherhead.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Do not touch the panel if wet. Call our master electricians for immediate evaluation and emergency isolation.'
      },
      {
        symptom: 'Breakers Trip When Running Air Conditioner & Range Simultaneously',
        likelyCause: 'Main service capacity (100A or 150A) is maxed out, exceeding the continuous 80% demand rating of the main breaker.',
        urgency: 'High Priority',
        whenToCall: 'When planning home additions, heat pump replacements, or EV charger installations, a 200A upgrade is required.'
      },
      {
        symptom: 'Double-Tapped Breakers or Overcrowded Panel With No Spares',
        likelyCause: 'Previous unpermitted additions where two circuit conductors were jammed into a single terminal screw.',
        urgency: 'Code Compliance',
        whenToCall: 'Flagged during home sales or insurance audits. Requires subpanel addition or full service replacement.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'NEC Load Calculation & Site Inspection',
        description: 'Andy or Jake conducts an on-site evaluation, calculating whole-home connected load under NEC Article 220 and inspecting your meter socket, grounding electrode system, and service entrance cable.'
      },
      {
        step: 2,
        title: 'City Permitting & Utility Coordination',
        description: 'We submit stamped plans to the City of Boca Raton Building Department and coordinate scheduled service disconnect and reconnect timing with Florida Power & Light (FPL).'
      },
      {
        step: 3,
        title: 'Complete Demolition & Code Installation',
        description: 'We remove old equipment, install a premium copper-bus panel (Square D QO or Siemens), drive dual 8ft copper ground rods, wire dual-function AFCI/GFCI breakers, and neatly label all circuits.'
      },
      {
        step: 4,
        title: 'Municipal Inspection & Lifetime Warranty Hand-Off',
        description: 'We meet the municipal electrical inspector on-site, coordinate the final FPL meter seal, and hand you full documentation, inspection sign-off, and warranty paperwork.'
      }
    ],
    realProjects: [
      {
        title: '200A Service Upgrade & Insurance 4-Point Clearance',
        location: 'Boca Square, Boca Raton, FL',
        description: 'Homeowner faced imminent cancellation of their Citizens property insurance policy due to an original 1971 Federal Pacific Electric 125A Stab-Lok panel with double-tapped branch circuits.',
        solution: 'Pulled City of Boca Raton permits, scheduled morning FPL disconnect, removed the obsolete panel, and installed a 200A Square D QO copper-bus load center with whole-home Type 2 surge protection, dual 8ft copper ground rods, and intersystem bonding.',
        outcome: 'Passed municipal inspection at 2:30 PM same day, FPL re-energized power before evening, and delivered a signed 4-point electrical compliance report clearing homeowner insurance.'
      },
      {
        title: '400A Split-Bus Service Upgrade for Estate Expansion',
        location: 'Royal Palm Yacht & Country Club, Boca Raton, FL',
        description: 'Major renovation adding two 48A Tesla Wall Connectors, a 5-ton variable-speed heat pump, and an electric pool heater exceeded the residence\'s 200A electrical service capacity.',
        solution: 'Engineered a 400A split-bus service configuration with a 320A continuous meter base, dual 200A interior panels, and heavy-duty 500 kcmil copper service entrance conductors coordinated with FPL transformer upgrades.',
        outcome: 'Zero voltage drop across heavy simultaneous loads, passed city building inspection with zero defects, and full NEC 220 compliance.'
      }
    ],
    costFactors: [
      { factor: 'Amperage Upgrade Level', impact: 'Standard 200A service upgrades require less utility infrastructure than 400A dual-panel estate services.' },
      { factor: 'Meter Base & Service Mast Condition', impact: 'If the exterior meter can or overhead service riser mast is rusted or below Florida storm elevation codes, it must be upgraded concurrently.' },
      { factor: 'Grounding Electrode System', impact: 'Upgrading older homes without modern grounding requires driving two 8-foot copper-clad grounding rods spaced at least 6 feet apart and bonding water lines.' },
      { factor: 'Municipal Permit & Utility Fees', impact: 'City of Boca Raton permit fees and FPL coordination fees are included transparently in our itemized quotes.' }
    ],
    costGuide: {
      serviceCallFee: 'Free in-person load assessment and panel replacement estimate',
      typicalRange: '$2,450 – $4,200 for standard 200A residential panel replacement; $4,500 – $7,800 for 400A estate service upgrades',
      details: 'All panel replacements include permit procurement, FPL disconnect coordination, dual ground rods, circuit labeling, surge protection, and municipal inspection.'
    },
    permitRequirements: {
      required: true,
      jurisdiction: 'City of Boca Raton Building Department / Palm Beach County',
      details: 'Electrical panel replacements legally require a municipal building permit and post-installation inspection in Florida. Young Electric Inc handles the entire permit process from initial application to final green tag.'
    },
    warrantyInfo: 'We provide an exclusive 10-Year Craftsmanship Guarantee on all residential panel installations plus lifetime manufacturer warranties on Square D QO and Siemens load centers.',
    sections: [
      {
        heading: 'Why Outdated Panels Pose Severe Hazards in Boca Raton',
        paragraphs: [
          'Many single-family homes across Boca Raton, Delray Beach, and Deerfield Beach were built in the 1960s, 70s, and 80s when typical household consumption rarely exceeded 60 to 100 amps. Today, central air conditioning, induction cooktops, dual refrigerators, home EV chargers, and pool equipment push older panels past their engineered thermal limits.',
          'Additionally, several panel brands manufactured during this era possess documented design defects. Federal Pacific Electric (FPE) Stab-Lok breakers frequently fail to trip under short circuits (jamming in the "on" position), Zinsco panels suffer from aluminum busbars that melt and weld to breakers, and Challenger panels have defective 15A and 20A breakers that overheat. Florida insurance underwriters actively deny coverage for homes with these panels.',
          'Young Electric Inc provides peace of mind with modern, high-capacity panel replacements engineered specifically for South Florida coastal conditions, featuring corrosion-resistant copper busbars and whole-home transient surge suppression.'
        ]
      },
      {
        heading: 'Clear HOA Architectural Review & City Permitting Support',
        paragraphs: [
          'Navigating local building bureaucracy should not fall on the homeowner. While contractor regulations require municipal building permits from the City of Boca Raton Building Department (or Palm Beach County for unincorporated areas), gated communities and HOAs also require architectural documentation.',
          'Young Electric Inc handles all municipal permit filings directly. For your HOA architectural review board (ARB), we provide stamped electrical single-line load calculations, panel specification cut sheets, and contractor license and insurance certificates to ensure prompt, smooth approvals.'
        ]
      }
    ],
    faqs: [
      { q: 'How long will my power be off during a panel replacement?', a: 'Power is typically disconnected by FPL at approximately 8:30 AM and safely re-energized by late afternoon (between 3:00 PM and 5:00 PM) on the same day. We coordinate closely with the city inspector to minimize downtime.' },
      { q: 'Can I keep my Federal Pacific or Zinsco panel if it has not given me problems?', a: 'We strongly advise against it. The danger with FPE and Zinsco panels is that they do not give warning symptoms—the breakers fail to trip specifically when a catastrophic dead short or fire hazard occurs. Furthermore, almost all Florida insurance carriers require their replacement before binding or renewing a homeowner policy.' },
      { q: 'Do you handle the city permit and inspection?', a: 'Yes. Young Electric Inc pulls the required City of Boca Raton or Palm Beach County electrical permit, submits the load calculations, coordinates with FPL, and meets the municipal inspector at your home for the final walkthrough.' },
      { q: 'Is a 200-amp panel upgrade necessary for an EV charger?', a: 'In most homes with 100A or 150A service and existing central air conditioning, adding a 48A or 50A continuous Level 2 EV charging circuit exceeds code load limits. An upgrade to 200A guarantees safe headroom without main breaker trips.' }
    ],
    relatedServices: ['breaker-repair-boca-raton-fl', 'ev-charger-installation-boca-raton-fl', 'surge-protection-boca-raton-fl', 'electrical-inspection-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 1: EMERGENCY ELECTRICIAN
  // ==========================================
  {
    slug: 'emergency-electrician-boca-raton-fl',
    title: 'Emergency Electrician in Boca Raton, FL',
    shortTitle: 'Emergency Electrician',
    h1: 'Emergency Electrician in Boca Raton, FL',
    metaTitle: 'Emergency Electrician Boca Raton FL | Young Electric Inc',
    metaDescription: 'Active electrical emergency in Boca Raton? Burning smells, sparking outlets, or total power loss? Call Andy & Jake Young for rapid residential hazard response: 561-363-0946.',
    heroImage: '/images/friendly-local-electrician.jpg',
    heroImageAlt: 'Emergency electrician arriving quickly in Boca Raton for urgent electrical repairs',
    icon: 'Clock',
    ctaText: 'Call Emergency Dispatch: 561-363-0946',
    intro: 'Electrical emergencies present real risks of shock, structural fire, and catastrophic damage. Whether you are experiencing an acrid burning odor from your breaker box, violent arcing from a wall outlet, or a sudden loss of power during a tropical storm, Young Electric Inc provides rapid, dependable residential emergency response in Boca Raton. You speak directly with Andy or Jake Young—licensed master electricians who guide you through emergency shut-off steps over the phone and dispatch immediately with fully stocked service vehicles.',
    benefits: [
      { title: 'Immediate Contractor Contact', desc: 'No call centers or third-party answering services. Speak directly with owners Andy or Jake Young.', icon: 'Phone' },
      { title: 'Urgent Hazard Triage', desc: 'We assess fire and shock severity over the phone, directing you on how to isolate the hazard safely.', icon: 'ShieldCheck' },
      { title: 'Fully Stocked Mobile Trucks', desc: 'We arrive equipped with commercial-grade breakers, panels, wire, and diagnostic instruments for on-the-spot repairs.', icon: 'Wrench' },
      { title: 'Residential Safety Priority', desc: 'We focus 100% on protecting single-family homes and condominiums from electrical hazards.', icon: 'Home' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Acrid Burning Plastic Odor Near Main Panel or Outlets',
        likelyCause: 'Severe electrical arcing or overheating conductor insulation reaching temperatures over 450°F.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Shut off the main breaker immediately if safe to approach. Call 911 if active smoke is present, then call us for dispatch.'
      },
      {
        symptom: 'Loud Popping, Sizzling, or Visible Sparks From Wall Receptacle',
        likelyCause: 'Direct line-to-ground or line-to-neutral short circuit caused by loose terminal connections or rodent wire damage.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Do not touch the wall outlet. De-energize the circuit breaker and call our emergency dispatch line.'
      },
      {
        symptom: 'Partial Power Loss / "Half-Dead" Home With AC & Dryer Inoperable',
        likelyCause: 'Dropped 120V utility phase from FPL service lateral or melted service entrance lug inside your meter socket/panel.',
        urgency: 'High Priority',
        whenToCall: 'Call for diagnostic triage. Running 240V equipment on a single phase can burn out sensitive compressor motors.'
      },
      {
        symptom: 'Storm Water Intrusion Dripping Down Inside Electrical Panel',
        likelyCause: 'Compromised service mast weatherhead or deteriorated exterior meter enclosure seal allowing rainwater entry.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Extreme electrocution hazard. Stay away from standing water near the panel. Call immediately for emergency isolation.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Immediate Phone Triage & Safety Guidance',
        description: 'You speak directly with Andy or Jake. We assess the danger, direct you on isolating the breaker or power supply, and verify safe evacuation if needed.'
      },
      {
        step: 2,
        title: 'Priority Emergency Dispatch',
        description: 'We deploy immediately to your Boca Raton home with all necessary parts, high-draw breakers, and safety testing instrumentation.'
      },
      {
        step: 3,
        title: 'Hazard Isolation & Diagnostic Pinpoint',
        description: 'We safely de-energize the compromised segment, trace the fault using thermal imaging and multi-meters, and formulate an immediate safe repair plan.'
      },
      {
        step: 4,
        title: 'Permanent Repair & Safety Clearance',
        description: 'We complete the repair to full Florida Building Code standards, test the entire home grounding and phase balance, and restore safe power.'
      }
    ],
    realProjects: [
      {
        title: 'Midnight Main Breaker Meltdown & Emergency Bypass',
        location: 'Spanish River Blvd, Boca Raton, FL',
        description: 'Homeowner called at 10:15 PM reporting violent sizzling sounds and sudden loss of air conditioning and half the home\'s lighting during a severe thunderstorm.',
        solution: 'Jake Young arrived on site in 35 minutes, found a 150A main breaker lug arcing against the copper bus due to severe thermal stress. Safely de-energized the service, installed a temporary heavy-duty bypass to protect home refrigeration, and returned next morning to complete a permanent panel upgrade.',
        outcome: 'Immediate fire hazard neutralized, home secured without property damage, and full service restored to 100% code compliance.'
      },
      {
        title: 'Post-Hurricane Water Intrusion in Exterior Meter Panel',
        location: 'Camino Real, Boca Raton, FL',
        description: 'Driving tropical storm winds forced rainwater through a cracked weatherhead conduit, flooding the main disconnect box and tripping the master breaker.',
        solution: 'Andy isolated the service at the meter, removed water and moisture utilizing industrial drying equipment, re-sealed the service mast with heavy-duty weatherhead fittings, and replaced water-damaged breakers.',
        outcome: 'Power safely re-energized with zero arc-fault risk, fully verified with insulation resistance megohmmeter testing.'
      }
    ],
    costFactors: [
      { factor: 'Urgency & Time of Call', impact: 'After-hours, weekend, and severe weather emergency calls involve prioritized dispatch and rapid mobilization.' },
      { factor: 'Nature of Electrical Fault', impact: 'Simple breaker or device isolation is faster than repairing hidden conduit damage or coordinating FPL emergency disconnects.' },
      { factor: 'Replacement Components Needed', impact: 'Standard breakers and receptacles are readily available on our trucks; specialized high-amp main breakers or meter bases involve higher equipment costs.' }
    ],
    costGuide: {
      serviceCallFee: 'Transparent emergency diagnostic fee quoted over the phone prior to dispatch',
      typicalRange: '$250 – $650 for urgent emergency repairs & fault isolation',
      details: 'We provide clear, honest pricing before initiating repairs. We never take advantage of stressful emergency situations with extortionate rates.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Emergency safety isolation, hazardous breaker replacements, and temporary repairs to restore critical power do not require advance permits. If full panel replacement is needed, emergency repair permits are pulled retroactively per Florida building statute.'
    },
    warrantyInfo: 'All emergency repairs are backed by our standard 1-Year Workmanship Warranty and tested to strict National Electrical Code safety standards.',
    sections: [
      {
        heading: 'What To Do In An Active Electrical Emergency',
        paragraphs: [
          'When facing an electrical crisis in your Boca Raton residence, remaining calm and following established safety protocols is essential to prevent injury and structural damage:',
          '1. Evacuate the Area Immediately: If you see visible flames, dense smoke, or hear continuous explosive popping, evacuate everyone from the home and call 911 immediately.',
          '2. Safely De-Energize Power: If it is safe to approach the panel (no standing water on the floor, no smoke or active sparks emitting from the enclosure), firmly flip the Main Circuit Breaker to the OFF position.',
          '3. Do Not Touch Compromised Appliances: If an appliance or cord is sizzling, do not attempt to yank the plug with bare hands. Shut down the breaker controlling that specific branch first.',
          '4. Identify Utility Responsibilities: If overhead power lines connecting from the street pole to your home weatherhead are torn down or sparking on your lawn, keep at least 30 feet away and call FPL immediately at 1-800-4-OUTAGE (1-800-468-8243).',
          '5. Call Young Electric Inc: For all internal wiring hazards, panel meltdowns, and sparking circuits, call 561-363-0946 for immediate expert contractor guidance.'
        ]
      },
      {
        heading: 'Transparent Response Expectations',
        paragraphs: [
          'We believe in complete honesty regarding response times. We are an owner-operated family contractor, not an anonymous dispatch conglomerate. When you call, Andy or Jake Young answers. We triage the situation immediately, determine if live fire risks exist, give you specific safety instructions, and provide an accurate arrival ETA based on real-time traffic and location.'
        ]
      }
    ],
    faqs: [
      { q: 'What is considered an electrical emergency?', a: 'Any situation presenting an immediate threat of fire or shock is an emergency. This includes acrid burning odors, buzzing panels, sparking outlets, water entering electrical enclosures, or exposed live wires. Intermittent light flickering can usually be scheduled during normal hours.' },
      { q: 'Can I reset a breaker that tripped with a loud bang?', a: 'No. A loud bang indicates a severe short circuit or dead ground fault. Resetting the breaker forces it to close into an active fault, which can cause arc flash, vaporize copper, and ruin the panel busbar. Leave it off until diagnosed.' },
      { q: 'Who do I call if my power goes out completely?', a: 'First, check if your neighbors have power. If the entire street is dark, report the outage to FPL at 1-800-4-OUTAGE. If your neighbors have power but your home is completely dead—or only half the circuits work—call Young Electric Inc at 561-363-0946.' },
      { q: 'Do you charge extra for emergency service calls?', a: 'We maintain clear, upfront flat-rate emergency pricing. We explain our diagnostic fee and repair rates before dispatching so you have complete visibility and peace of mind.' }
    ],
    relatedServices: ['electrical-repair-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'electrical-panel-service-boca-raton-fl', 'electrical-troubleshooting-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 1: RESIDENTIAL ELECTRICIAN
  // ==========================================
  {
    slug: 'residential-electrician-boca-raton-fl',
    title: 'Residential Electrician Boca Raton, FL',
    shortTitle: 'Residential Electrician',
    h1: 'Residential Electrician in Boca Raton, FL',
    metaTitle: 'Licensed Residential Electrician Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Trusted residential electrician in Boca Raton, FL. Andy & Jake Young deliver expert home electrical repairs, panel upgrades, and EV charger installations. Call 561-363-0946.',
    heroImage: images.heroElectrician,
    heroImageAlt: 'Residential electrician working on an electrical panel in a Boca Raton, FL home',
    icon: 'Home',
    ctaText: 'Speak With Andy or Jake',
    intro: 'When you invite an electrician into your Boca Raton home, you deserve skilled craftsmanship, verified credentials, and total respect for your property. Young Electric Inc is an owner-operated, family-run electrical contractor dedicated 100% to residential homeowners across Boca Raton and South Florida. We don\'t split our focus with commercial buildouts or industrial facilities. From troubleshooting elusive electrical faults to executing comprehensive 200A panel upgrades and Level 2 EV charging installations, Andy and Jake Young provide personal service, upfront flat-rate pricing, and guaranteed code compliance on every job.',
    benefits: [
      { title: '100% Residential Focus', desc: 'Every tool, vehicle, and training hour is dedicated specifically to single-family homes, townhomes, and condos.', icon: 'Home' },
      { title: 'Owner-Operated Care', desc: 'You work directly with master electricians Andy or Jake Young—no junior apprentices or sales brokers.', icon: 'ShieldCheck' },
      { title: 'State Certified & $2M Insured', desc: 'State of Florida Certified Electrical Contractor backed by $2,000,000 in liability and workers\' compensation coverage.', icon: 'FileCheck' },
      { title: 'Upfront Flat-Rate Pricing', desc: 'You receive clear, guaranteed pricing before any work begins. No hidden trip fees or open-ended hourly surprises.', icon: 'DollarSign' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Outdated Electrical System in a 1970s–1990s Boca Raton Home',
        likelyCause: 'Original wiring, ungrounded two-prong outlets, and undersized 100A panels unable to support modern loads.',
        urgency: 'High Priority',
        whenToCall: 'Schedule a comprehensive safety inspection before undertaking renovations or purchasing major appliances.'
      },
      {
        symptom: 'Frequent Breaker Trips When Running High-Draw Appliances',
        likelyCause: 'Overloaded branch circuits where kitchen, laundry, or patio equipment exceed safe continuous amperage limits.',
        urgency: 'Maintenance',
        whenToCall: 'When breakers trip on a weekly basis, dedicated circuits must be added to relieve line strain.'
      },
      {
        symptom: 'Unprotected Sensitive Home Electronics From Florida Lightning',
        likelyCause: 'Absence of whole-home Type 2 surge suppression at the main distribution panel.',
        urgency: 'High Priority',
        whenToCall: 'South Florida experiences the highest lightning density in North America; surge defense is critical.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Direct Consultation With Andy or Jake',
        description: 'Call 561-363-0946. We listen to your specific home electrical goals or concerns and schedule a prompt, convenient home walkthrough.'
      },
      {
        step: 2,
        title: 'Thorough On-Site Assessment',
        description: 'We evaluate your electrical panel, test circuit loads, examine existing wiring, and explain our diagnostic findings in clear, plain language.'
      },
      {
        step: 3,
        title: 'Guaranteed Flat-Rate Proposal',
        description: 'You receive an exact, itemized estimate detailing all materials, labor, and municipal permit requirements before work begins.'
      },
      {
        step: 4,
        title: 'Master Craftsman Execution & Clean Up',
        description: 'Andy or Jake personally completes the installation to exact Florida Building Code standards, cleans the workspace, and provides a 1-year warranty.'
      }
    ],
    realProjects: [
      {
        title: 'Full Home Electrical Modernization & Surge Defense',
        location: 'Timbercreek, Boca Raton, FL',
        description: 'New homeowners purchasing a 1982 residence required an electrical overhaul including panel replacement, whole-home surge protection, and 14 dedicated AFCI/GFCI circuits.',
        solution: 'Andy and Jake upgraded the service to 200A, installed Eaton Type 2 surge suppression, retrofitted tamper-resistant outlets throughout, and installed dimmable LED recessed lighting in the living areas.',
        outcome: 'Passed city building inspection with zero defects, secured preferred homeowner insurance tier, and modernized interior ambiance.'
      },
      {
        title: 'Dedicated Kitchen Appliance & EV Charging Infrastructure',
        location: 'Boca Falls, Boca Raton, FL',
        description: 'Homeowner needed two new dedicated 20A kitchen circuits for commercial countertop appliances and a 60A Level 2 Tesla charging station in the garage.',
        solution: 'Ran individual THHN copper conductors through clean EMT conduit concealed within garage framing, installed an industrial 60A breaker, and torqued all terminations to factory specifications.',
        outcome: 'Flawless simultaneous operation of kitchen appliances and lightning-fast 48A EV charging with zero circuit tripping.'
      }
    ],
    costFactors: [
      { factor: 'Scope of Service', impact: 'Individual fixture or outlet installations require minimal labor; comprehensive panel upgrades and whole-home rewires are larger structural investments.' },
      { factor: 'Home Construction Architecture', impact: 'South Florida CBS (concrete block) homes require specialized conduit routing compared to wood-framed second stories.' },
      { factor: 'Permit & Inspection Requirements', impact: 'Projects requiring municipal engineering, plan reviews, and inspector coordination are fully handled by our licensed team.' }
    ],
    costGuide: {
      serviceCallFee: '$99 diagnostic fee (waived when proceeding with recommended repairs)',
      typicalRange: 'Transparent flat-rate pricing based on your exact residential project scope',
      details: 'We believe homeowners deserve complete financial predictability. You always know the exact total cost before we begin.'
    },
    permitRequirements: {
      required: true,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'All major electrical additions, panel replacements, EV chargers, and new circuit runs require municipal permits. Young Electric Inc handles 100% of the permitting process from application to final inspection.'
    },
    warrantyInfo: 'All residential electrical work performed by Young Electric Inc is backed by our 1-Year Comprehensive Workmanship Warranty plus full manufacturer product warranties.',
    sections: [
      {
        heading: 'Complete Residential Electrical Services in Boca Raton',
        paragraphs: [
          'Young Electric Inc provides comprehensive, master-level electrical solutions for every room in your home and exterior living spaces:',
          '• Electrical Panel Upgrades & Replacements: Replacing hazardous or undersized panels with modern 200A and 400A Square D and Siemens load centers.',
          '• Diagnostic Troubleshooting & Repairs: Rapid pinpointing of intermittent power dips, buzzing switches, warm receptacles, and nuisance breaker trips.',
          '• EV Charger Installations: Dedicated Level 2 240V circuits for Tesla, Rivian, ChargePoint, and all universal J1772 electric vehicles.',
          '• Recessed & Architectural Lighting: Elegant LED wafer lighting, chandelier hanging, and landscape lighting with Lutron smart dimming.',
          '• Whole-Home Surge Protection: Heavy-duty Type 2 surge suppressors protecting HVAC compressors, refrigeration, and delicate electronics from lightning.',
          '• Ceiling Fan Installations: Secure fan-rated junction boxes, high-ceiling downrods, and dual-control wall switches.',
          '• Four-Point Insurance Inspections: Thorough electrical evaluations to satisfy Citizens and Florida private insurance carrier requirements.'
        ]
      },
      {
        heading: 'Why Boca Raton Homeowners Trust Andy & Jake Young',
        paragraphs: [
          'In South Florida\'s crowded contractor market, finding an honest, responsive electrician can be difficult. Many companies operate as marketing front-ends, subcontracting work to the lowest bidder or sending inexperienced technicians who push high-pressure upsells.',
          'At Young Electric Inc, the owners who give you the quote are the master electricians who do the work. With over 10 years of South Florida residential experience, we take immense pride in our reputation for punctuality, meticulous craftsmanship, clean job sites, and clear communication.'
        ]
      }
    ],
    faqs: [
      { q: 'Are you licensed and insured in the State of Florida?', a: 'Yes. Young Electric Inc is a State of Florida Certified Electrical Contractor. We carry $2,000,000 in commercial general liability insurance and full workers\' compensation coverage to protect you and your property completely.' },
      { q: 'Do you work on commercial buildings or rental properties?', a: 'We exclusively serve residential homeowners, including single-family residences, townhomes, and private condominiums. We do not take on commercial office buildings, industrial warehouses, or retail projects, allowing us to deliver unmatched residential specialization.' },
      { q: 'How do I schedule an appointment with Andy or Jake?', a: 'Simply call us at 561-363-0946 or submit an inquiry through our contact form. You speak directly with our team, and we will schedule a convenient time to assess your home.' },
      { q: 'What areas in South Florida do you serve?', a: 'Our primary dispatch hub is Boca Raton, and we regularly serve homeowners throughout Delray Beach, Boynton Beach, Parkland, Coral Springs, Deerfield Beach, Coconut Creek, and Pompano Beach.' }
    ],
    relatedServices: ['electrical-repair-boca-raton-fl', 'electrical-panel-service-boca-raton-fl', 'ev-charger-installation-boca-raton-fl', 'electrical-inspection-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 2: EV CHARGER INSTALLATION
  // ==========================================
  {
    slug: 'ev-charger-installation-boca-raton-fl',
    title: 'EV Charger Installation Boca Raton, FL',
    shortTitle: 'EV Charger Installation',
    h1: 'EV Charger Installation in Boca Raton, FL',
    metaTitle: 'EV Charger Installation Boca Raton FL | Young Electric Inc',
    metaDescription: 'Certified Level 2 home EV charger installation in Boca Raton, FL. Andy & Jake Young handle 240V dedicated circuits, panel load calculations, and City permits. Call 561-363-0946.',
    heroImage: images.evCharger,
    heroImageAlt: 'Level 2 home EV charging station installed in a modern Boca Raton, FL garage',
    icon: 'BatteryCharging',
    ctaText: 'Call for EV Charger Installation',
    intro: 'Charging your electric vehicle at home should be fast, seamless, and completely safe. Standard 120V Level 1 trickle chargers only add 3 to 4 miles of range per hour, taking upwards of 24 hours for a full charge. A dedicated Level 2 (240V) home charging station delivers 30 to 50 miles of range per hour, fully replenishing your battery overnight. Young Electric Inc installs professional, code-compliant EV charging stations for Boca Raton homeowners. We perform precise NEC Article 220 load calculations, install hardwired Wall Connectors or NEMA 14-50 receptacles, manage City of Boca Raton building permits, and ensure your electrical panel has adequate headroom.',
    benefits: [
      { title: 'Tesla & Universal Compatible', desc: 'Expert installation of Tesla Wall Connectors, ChargePoint Home Flex, JuiceBox, Emporia, and Rivian chargers.', icon: 'Zap' },
      { title: 'NEC Continuous Load Compliance', desc: 'Sized to the 125% continuous load rule (e.g. 48A charging on a 60A breaker with heavy-duty 6 AWG copper).', icon: 'ShieldCheck' },
      { title: 'Turn-Key Permitting', desc: 'We handle load calculations, permit filing with the City of Boca Raton, and municipal inspection sign-off.', icon: 'FileCheck' },
      { title: 'Garage & Outdoor Rated', desc: 'Clean EMT conduit runs, weather-resistant outdoor disconnects, and cable management.', icon: 'Wrench' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Insufficient Main Panel Capacity for 50A or 60A EV Circuit',
        likelyCause: 'Existing 100A or 150A panel already operating near capacity with dual AC units and pool heaters.',
        urgency: 'High Priority',
        whenToCall: 'Must be verified via load calculation before installing an EV circuit to prevent main breaker trips during peak hours.'
      },
      {
        symptom: 'NEMA 14-50 Receptacle Overheating or Melting Plastic',
        likelyCause: 'Use of standard builder-grade $12 dryer outlet rather than an industrial-rated receptacle designed for 8+ hours of continuous high-amperage draw.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Stop charging immediately. Industrial receptacles (Hubbell or Bryant) or hardwired connections are mandatory for safety.'
      },
      {
        symptom: 'GFCI Breaker Nuisance Tripping on EV Charger',
        likelyCause: 'Nuisance trip caused by conflicting internal GFCI circuitry between the EVSE station and upstream GFCI circuit breaker.',
        urgency: 'Maintenance',
        whenToCall: 'Hardwiring the charging station eliminates double-GFCI conflicts while satisfying 2023 NEC code requirements.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Electrical Load Calculation & Site Walkthrough',
        description: 'Andy or Jake inspects your panel capacity, measures conduit distance to your desired parking stall, and calculates total home electrical demand.'
      },
      {
        step: 2,
        title: 'Hardwire vs. Outlet Recommendation',
        description: 'We review charging speed preferences (48A hardwired vs 40A plug-in) and provide an upfront flat-rate quote including permit procurement.'
      },
      {
        step: 3,
        title: 'Conduit, Breaker & Station Installation',
        description: 'We install a dedicated double-pole breaker, run heavy-duty THHN copper wire inside clean EMT conduit, and torque terminals to manufacturer specs.'
      },
      {
        step: 4,
        title: 'Commissioning & Wi-Fi Configuration',
        description: 'We power up the unit, configure internal amperage limits, assist with smartphone app pairing, test charging rates, and schedule city inspection.'
      }
    ],
    realProjects: [
      {
        title: 'Dual Tesla Wall Connector Installation with Power Sharing',
        location: 'The Bridges, Boca Raton, FL',
        description: 'Homeowner purchased two electric vehicles (Model Y and Cybertruck) and needed dual high-speed charging without exceeding their 200A main service panel capacity.',
        solution: 'Engineered a master-slave dynamic power-sharing setup between two hardwired Gen 3 Tesla Wall Connectors on an 80A feeder, dynamically balancing power between vehicles when both charge simultaneously.',
        outcome: 'Both vehicles fully charge overnight without nuisance trips, completely compliant with NEC 625 load management codes.'
      },
      {
        title: 'Detached Garage ChargePoint Home Flex Hardwire Installation',
        location: 'Old Floresta, Boca Raton, FL',
        description: 'Historic home requiring a 50A EV charging circuit run to a detached garage 65 feet away from the main distribution panel.',
        solution: 'Trench-routed direct-burial Schedule 80 PVC conduit beneath paver walkway, pulled 6 AWG copper THHN conductors, and hardwired a ChargePoint Home Flex unit configured for 48A charging.',
        outcome: 'Aesthetic, concealed installation that preserved historic pavers and delivered 44 miles of range per hour.'
      }
    ],
    costFactors: [
      { factor: 'Distance from Panel to Charging Station', impact: 'Adjacent panel-to-garage installs require minimal conduit; long runs through attics or outdoor trenches require additional copper wire and labor.' },
      { factor: 'Hardwired vs. Receptacle Installation', impact: 'Hardwired installations allow 48A charging (faster) and avoid the cost of an expensive 50A GFCI breaker and industrial receptacle.' },
      { factor: 'Main Panel Headroom', impact: 'Homes with maxed-out 100A or 150A panels may require a subpanel or service upgrade to safely support a 50A/60A continuous load.' }
    ],
    costGuide: {
      serviceCallFee: 'Free on-site consultation and quote for EV charger installations',
      typicalRange: '$750 – $1,850 for standard dedicated circuit installation (excluding EVSE hardware)',
      details: 'Price includes dedicated 2-pole breaker, copper conductors, EMT conduit, mounting, commissioning, and City of Boca Raton permit filing.'
    },
    permitRequirements: {
      required: true,
      jurisdiction: 'City of Boca Raton Building Department / Palm Beach County',
      details: 'All new 240V EV charging circuit installations legally require a municipal electrical permit and final building inspection in Florida. Young Electric Inc prepares and files all documents.'
    },
    warrantyInfo: 'Young Electric Inc provides a 3-Year Craftsmanship Guarantee on all EV charging circuit installations and electrical wiring.',
    sections: [
      {
        heading: 'Why Proper EV Circuit Sizing Is Critical (NEC Article 625)',
        paragraphs: [
          'Under the National Electrical Code (NEC Article 625), electric vehicle charging is classified as a "continuous load." Unlike a microwave or toaster that operates for a few minutes, an EV charger draws peak current continuously for 6 to 10 hours overnight.',
          'The NEC mandates that branch circuits feeding continuous loads must be sized at 125% of the charger\'s rated output. For example:',
          '• A 48-amp charger draws 48A continuously, requiring a 60-amp breaker and heavy-duty 6 AWG copper conductors.',
          '• A 40-amp charger draws 40A continuously, requiring a 50-amp breaker and 8 AWG or 6 AWG copper wire.',
          'Using undersized wiring, cheap residential-grade receptacles, or loose push-in connections creates extreme thermal stress that melts outlets and trips breakers. Young Electric Inc ensures your installation is engineered for continuous maximum current with zero heat fatigue.'
        ]
      },
      {
        heading: 'Hardwired vs. NEMA 14-50 Plug-In: What We Recommend',
        paragraphs: [
          'Homeowners often ask whether they should install a NEMA 14-50 wall receptacle or hardwire their charging unit. While a plug-in receptacle offers portability, hardwiring provides three significant advantages:',
          '1. Faster Charging Speeds: Hardwired connections support up to 48A or 80A charging (up to 44–50 miles per hour of charge), whereas 14-50 plugs are capped at 40A charging (30 miles per hour).',
          '2. Eliminates Nuisance Trips: Recent Florida Building Codes require GFCI protection on all garage 240V receptacles. EV charging stations also possess built-in GFCI sensors, which can cause erratic "nuisance tripping." Hardwiring eliminates the need for an upstream GFCI breaker.',
          '3. Greater Long-Term Durability: Eliminates mechanical plug blades that can loosen and heat up over years of repeated insertion cycles.'
        ]
      }
    ],
    faqs: [
      { q: 'Will my current electrical panel support an EV charger?', a: 'During our initial consultation, Andy or Jake Young performs an NEC Article 220 load calculation taking into account your home\'s AC tonnage, pool pumps, water heaters, and square footage. If your panel has adequate headroom, we install the circuit directly. If capacity is constrained, we discuss subpanels, smart energy management switches, or panel upgrades.' },
      { q: 'How long does an EV charger installation take?', a: 'A standard garage installation typically takes between 3 to 5 hours. We test the unit, guide you through smartphone app pairing, and leave the workspace spotless.' },
      { q: 'Can you install an EV charger outdoors if I do not have a garage?', a: 'Yes. We install NEMA 4X weather-rated charging stations mounted on exterior walls or dedicated pedestals, using liquid-tight or rigid conduit to withstand South Florida rain, sun, and humidity.' },
      { q: 'Do you provide the charger, or do I buy it?', a: 'Most homeowners purchase their preferred charger directly from their vehicle manufacturer (Tesla, ChargePoint, Rivian, etc.). We provide all heavy-duty wiring, conduit, breakers, disconnects, and professional installation. If you need advice on which charger to buy, we are happy to assist.' }
    ],
    relatedServices: ['electrical-panel-service-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'surge-protection-boca-raton-fl', 'residential-wiring-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 2: OUTLET REPAIR & SWITCH REPAIR
  // ==========================================
  {
    slug: 'outlet-repair-boca-raton-fl',
    title: 'Outlet Repair Boca Raton, FL',
    shortTitle: 'Outlet Repair',
    h1: 'Outlet Repair & Replacement in Boca Raton, FL',
    metaTitle: 'Outlet Repair Boca Raton FL | Young Electric Inc',
    metaDescription: 'Need outlet repair or GFCI installation in Boca Raton, FL? Andy & Jake Young diagnose dead receptacles, burning outlets, and tripped GFCIs. Call 561-363-0946.',
    heroImage: images.outletInstall,
    heroImageAlt: 'Electrician repairing a wall receptacle in a residential Boca Raton, FL home',
    icon: 'Plug',
    ctaText: 'Call for Outlet Repair',
    intro: 'Electrical wall outlets (receptacles) are used multiple times every day, yet they are often overlooked until a plug falls out, a breaker trips, or an outlet stops working entirely. In South Florida\'s coastal climate, internal metal tension springs and screw terminals can oxidize, leading to loose connections, persistent electrical arcing, and fire hazards. Young Electric Inc delivers expert residential outlet repair, GFCI installation, tamper-resistant upgrades, and 240V dedicated receptacle additions throughout Boca Raton. Andy or Jake Young inspects your circuits to ensure your family is fully protected against shock and fire hazards.',
    benefits: [
      { title: 'GFCI Safety Compliance', desc: 'Code-compliant ground-fault protection for kitchens, bathrooms, garages, and outdoor living areas.', icon: 'ShieldCheck' },
      { title: 'Commercial-Grade Devices', desc: 'We install heavy-duty tamper-resistant receptacles with screw-clamp terminals that never loosen.', icon: 'Wrench' },
      { title: 'Tamper-Resistant (TR) Safety', desc: 'Protect children from accidental shock with built-in safety shutters meeting Florida Building Code.', icon: 'Home' },
      { title: 'Upfront Flat-Rate Pricing', desc: 'Transparent repair pricing with no hidden charges or hourly overruns.', icon: 'DollarSign' },
    ],
    diagnosedProblems: [
      {
        symptom: 'GFCI Receptacle Trips Repeatedly or Refuses to Reset',
        likelyCause: 'Active moisture intrusion in outdoor/bathroom box, downstream ground fault, or end-of-life internal sensor failure.',
        urgency: 'High Priority',
        whenToCall: 'If resetting the button with all cords unplugged fails, professional circuit tracing is required.'
      },
      {
        symptom: 'Plugs Fall Out or Feel Very Loose in the Outlet',
        likelyCause: 'Internal brass contact tension springs are worn out, creating high-resistance micro-arcing and heat buildup.',
        urgency: 'Maintenance',
        whenToCall: 'Loose receptacles should be replaced to prevent sparks and scorched plug prongs.'
      },
      {
        symptom: 'Scorching, Black Soot, or Plastic Melting on Outlet Faceplate',
        likelyCause: 'Severe electrical arcing caused by deteriorated backstabbed connections or overcurrent overload.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Shut off the circuit breaker immediately and call for emergency outlet replacement.'
      },
      {
        symptom: 'Two-Prong Ungrounded Outlets Throughout Older Home',
        likelyCause: 'Original 1960s/70s wiring lacking an equipment grounding conductor.',
        urgency: 'Code Compliance',
        whenToCall: 'Sensitive modern electronics require ground-fault or equipment ground protection to prevent damage.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Safety De-energization & Testing',
        description: 'We test line voltage, neutral polarity, and grounding integrity with calibrated circuit analyzers to isolate the failure.'
      },
      {
        step: 2,
        title: 'Terminal & Box Inspection',
        description: 'We pull the receptacle to inspect wire gauge, check for aluminum wiring or melted insulation, and verify junction box volume.'
      },
      {
        step: 3,
        title: 'Premium Device Installation',
        description: 'We install commercial-grade, tamper-resistant receptacles using side-screw torque terminations rather than failure-prone push-in connections.'
      },
      {
        step: 4,
        title: 'Trip Testing & Certification',
        description: 'We test GFCI/AFCI response times with an external calibrated tester to verify instant disconnect within milliseconds.'
      }
    ],
    realProjects: [
      {
        title: 'Historic Ungrounded Outlet GFCI Remediation',
        location: 'Old Floresta, Boca Raton, FL',
        description: 'Home sale inspection flagged ungrounded two-prong outlets in four bedrooms, preventing prospective buyer financing.',
        solution: 'Installed line-load feed-through GFCI receptacles at the first outlet of each branch circuit, providing certified shock protection to all downstream outlets labeled "GFCI Protected, No Equipment Ground" per NEC 406.4(D)(2).',
        outcome: 'Passed re-inspection with flying colors, saved homeowner thousands over a full rewiring, and closed escrow on schedule.'
      },
      {
        title: 'Outdoor Covered Patio Weather-Resistant GFCI Replacement',
        location: 'Boca Del Mar, Boca Raton, FL',
        description: 'Exterior lanai outlet repeatedly tripped master breaker whenever high humidity or rain occurred.',
        solution: 'Replaced corroded standard outlet with an industrial-grade Weather-Resistant (WR) GFCI receptacle housed inside a heavy-duty in-use bubble weatherproof cover.',
        outcome: '100% weather sealing and zero nuisance tripping even during heavy afternoon tropical downpours.'
      }
    ],
    costFactors: [
      { factor: 'Type of Outlet', impact: 'Standard 15A/20A tamper-resistant outlets are lower cost than GFCI, AFCI, USB-C integrated, or 240V heavy appliance receptacles.' },
      { factor: 'Wiring Condition in Box', impact: 'Short, brittle, or oxidized conductors requiring pigtailing and box extension add minor labor.' },
      { factor: 'Quantity of Receptacles', impact: 'Replacing multiple outlets throughout a home during a single visit reduces the per-unit cost significantly.' }
    ],
    costGuide: {
      serviceCallFee: '$99 diagnostic fee (applied directly to repair)',
      typicalRange: '$150 – $350 for isolated outlet/GFCI repairs; package rates for whole-home upgrades',
      details: 'All outlet replacements include premium commercial-grade tamper-resistant hardware and polarity testing.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Direct replacement of existing residential outlets with code-compliant GFCI/TR receptacles does not require building permits. Adding new outlet locations or running new circuits requires a minor electrical permit.'
    },
    warrantyInfo: 'Young Electric Inc backs all outlet installations with a 1-Year Comprehensive Workmanship Warranty.',
    sections: [
      {
        heading: 'Why Tamper-Resistant (TR) and GFCI Outlets are Mandatory in Florida',
        paragraphs: [
          'Under current Florida Building Codes, all 15-amp and 20-amp 120V household receptacles installed in residential living areas must be Tamper-Resistant (TR). These devices feature built-in safety shutters that prevent children from inserting foreign metal objects (keys, paperclips, hairpins) into a live slot.',
          'Ground Fault Circuit Interrupters (GFCIs) are mandatory in all areas where moisture could be present: kitchens, bathrooms, laundry rooms, garages, unfinished basements, and outdoor living spaces. A GFCI constantly monitors current flow between hot and neutral conductors. If an imbalance as tiny as 4 to 6 milliamperes occurs (indicating electricity is flowing through water or a human body to ground), the GFCI cuts power in as little as 1/40th of a second, preventing lethal electrocution.'
        ]
      }
    ],
    faqs: [
      { q: 'Why did my outlet stop working if the breaker is not tripped?', a: 'In residential wiring, outlets are daisy-chained together in series. A loose wire in an upstream outlet (or a tripped GFCI outlet in another bathroom or garage) can cause all downstream outlets to lose power. Andy or Jake can trace and resolve the circuit chain.' },
      { q: 'What is the difference between a standard outlet and a GFCI?', a: 'Standard outlets simply provide power. GFCIs contain a sensitive internal micro-circuit that constantly measures electrical balance and trips within milliseconds if a ground fault occurs, preventing fatal shock in wet areas.' },
      { q: 'Can I replace a 2-prong outlet with a 3-prong outlet myself?', a: 'No. Simply installing a 3-prong outlet on ungrounded 2-wire cable without an actual ground path creates a "false ground" shock hazard. Code permits installing a GFCI receptacle on an ungrounded circuit as long as it is properly labeled, which our master electricians can execute safely.' }
    ],
    relatedServices: ['switch-repair-boca-raton-fl', 'electrical-repair-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'electrical-inspection-boca-raton-fl']
  },

  {
    slug: 'switch-repair-boca-raton-fl',
    title: 'Light Switch Repair Boca Raton, FL',
    shortTitle: 'Light Switch Repair',
    h1: 'Light Switch Repair & Replacement in Boca Raton, FL',
    metaTitle: 'Light Switch Repair & Dimmer Installation Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Need light switch repair or smart dimmer installation in Boca Raton, FL? Andy & Jake Young fix sparking switches, 3-way faults, and buzzing dimmers. Call 561-363-0946.',
    heroImage: images.switchWall,
    heroImageAlt: 'Modern decora light switch installation in a Boca Raton, FL home',
    icon: 'ToggleLeft',
    ctaText: 'Call for Switch Repair',
    intro: 'A malfunctioning light switch is more than an annoyance—crackling sounds, warm faceplates, and sparking toggles are clear indicators of electrical arcing inside your wall cavity. Furthermore, modern LED lighting and smart home systems require specialized dimmer switches and dedicated neutral wires that older toggle switches cannot support. Young Electric Inc provides Boca Raton homeowners with fast, professional light switch repairs, 3-way/4-way circuit troubleshooting, and smart dimmer installations. Andy and Jake Young ensure every switch in your home operates smoothly, safely, and quietly.',
    benefits: [
      { title: 'Smart Switch Integration', desc: 'Expert wiring for Lutron Caseta, Leviton, and smart home automation systems requiring neutral wires.', icon: 'Zap' },
      { title: 'Flicker-Free Dimming', desc: 'Proper pairing of LED-compatible trailing-edge (ELV) dimmers that eliminate bulb hum and strobe.', icon: 'Lightbulb' },
      { title: 'Multi-Way Circuit Experts', desc: 'We resolve complex 3-way and 4-way hallway and stair traveler wiring confusion.', icon: 'Wrench' },
      { title: 'Fire-Safe Terminations', desc: 'Eliminate sparking contacts with heavy-duty commercial decora switches and torqued terminals.', icon: 'ShieldCheck' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Switch Crackles, Pops, or Emits Sparks When Flipped',
        likelyCause: 'Deteriorated internal mechanical contacts arcing under electrical load, creating intense localized heat.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Do not continue using the switch. Arcing inside plastic switch boxes is a recognized residential fire cause.'
      },
      {
        symptom: 'LED Lights Hum, Buzz, or Strobe When Dimmed',
        likelyCause: 'Incompatible legacy incandescent TRIAC dimmer installed on low-voltage electronic LED drivers.',
        urgency: 'Maintenance',
        whenToCall: 'Requires upgrading to a microprocessor-controlled LED trailing-edge electronic low-voltage (ELV) dimmer.'
      },
      {
        symptom: '3-Way Switch Only Works When the Other Switch is In One Position',
        likelyCause: 'Crossed traveler and common wires caused by previous unpermitted replacement or miswired junction box.',
        urgency: 'Maintenance',
        whenToCall: 'Circuit tracing required to identify common feed, line, load, and traveler conductors.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Circuit Identification & Voltage Verification',
        description: 'We safely de-energize the circuit, test conductors for voltage, and trace line, load, and traveler wires.'
      },
      {
        step: 2,
        title: 'Neutral & Box Depth Evaluation',
        description: 'We inspect box capacity, check for dedicated neutral conductors (essential for smart switches), and ensure code wire volume.'
      },
      {
        step: 3,
        title: 'Precision Wiring & Calibration',
        description: 'We install premium decora or smart switches, secure copper splices, and calibrate high-end/low-end LED trim adjustments.'
      },
      {
        step: 4,
        title: 'Operational Load & Dimming Test',
        description: 'We test multi-way switching from all locations, verify smooth 1%–100% dimming with zero flicker, and reinstall clean wall plates.'
      }
    ],
    realProjects: [
      {
        title: 'Smart Lighting & Multi-Way Traveler Rewiring',
        location: 'Mizner Park, Boca Raton, FL',
        description: 'Condo homeowner attempted DIY smart switch install on a 3-way stairwell, resulting in dead lighting and tripped breakers.',
        solution: 'Andy Young tone-traced traveler pairs through conduit, re-established line and load separation, and installed Lutron Caseta smart dimmers with wireless Pico remotes.',
        outcome: 'Flawless multi-location lighting control with voice and smartphone integration.'
      }
    ],
    costFactors: [
      { factor: 'Type of Switch', impact: 'Standard mechanical toggle/decora switches are simple; smart dimmers, timers, or motion sensor switches involve hardware configuration.' },
      { factor: 'Multi-Way Traveler Complexity', impact: '3-way and 4-way circuits with multiple switch locations require diagnostic tracing compared to single-pole switches.' },
      { factor: 'Presence of Neutral Wire', impact: 'Older homes without neutral conductors in switch boxes may require specialized smart switches (e.g. Lutron Caseta without neutral) or rewiring.' }
    ],
    costGuide: {
      serviceCallFee: '$99 diagnostic fee (applied directly to repair)',
      typicalRange: '$125 – $295 for standard switch/dimmer repair and replacement',
      details: 'Upfront flat-rate pricing for single switches, multi-gang switch boxes, and smart home lighting packages.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Direct replacement of residential wall switches and dimmers does not require building permits under Florida Building Code.'
    },
    warrantyInfo: 'All switch and dimmer installations include our 1-Year Workmanship Warranty.',
    sections: [
      {
        heading: 'Why Modern LED Lighting Requires Modern Dimmer Switches',
        paragraphs: [
          'Older incandescent light switches controlled brightness by simply resisting voltage across a mechanical resistor. Modern LED fixtures utilize internal semiconductor drivers that require precise digital wave-chopping.',
          'When an older dimmer is paired with modern LEDs, the driver starves for current, producing audible buzzing, rhythmic flickering, or ghosting (lights staying faintly illuminated when switched off). Young Electric Inc installs digital, microprocessor-controlled dimmers engineered specifically for LED loads, allowing smooth dimming down to 1% without hum.'
        ]
      }
    ],
    faqs: [
      { q: 'Why is my wall switch warm when the lights are on?', a: 'Standard on/off switches should never feel warm; warmth indicates contact resistance and impending failure. Dimmer switches naturally generate slight warmth as they dissipate wattage, but if a dimmer plate feels hot to the touch or smells like burning plastic, it is overloaded and must be inspected.' },
      { q: 'Do smart switches require a neutral wire?', a: 'Most Wi-Fi smart switches require a neutral wire (white wire) to maintain power when the light is switched off. If your home was built before the mid-1980s, your switch boxes may only contain a switch loop without a neutral. We offer specialized smart solutions (such as Lutron Caseta) that operate without a neutral wire.' }
    ],
    relatedServices: ['outlet-repair-boca-raton-fl', 'lighting-installation-boca-raton-fl', 'electrical-repair-boca-raton-fl', 'electrical-troubleshooting-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 2: ELECTRICAL INSPECTION
  // ==========================================
  {
    slug: 'electrical-inspection-boca-raton-fl',
    title: 'Electrical Inspection Boca Raton, FL',
    shortTitle: 'Electrical Inspection',
    h1: 'Electrical Inspection in Boca Raton, FL',
    metaTitle: 'Home Electrical Inspection Boca Raton FL | Young Electric Inc',
    metaDescription: 'Need a residential electrical inspection in Boca Raton, FL? Andy & Jake Young deliver comprehensive home safety & insurance 4-point electrical inspections. Call 561-363-0946.',
    heroImage: images.inspection,
    heroImageAlt: 'Home electrical inspection checklist being reviewed for a residential property in Boca Raton, FL',
    icon: 'ClipboardCheck',
    ctaText: 'Schedule an Electrical Inspection',
    intro: 'Whether you are purchasing a home in Boca Raton, renewing your Florida property insurance, or seeking peace of mind about an older electrical system, a professional electrical inspection delivers total clarity. General home inspectors frequently lack specialized diagnostic tools and master electrician credentials, often overlooking concealed panel defects or issuing inaccurate warnings. Young Electric Inc conducts comprehensive, rigorous residential electrical inspections across Boca Raton. Andy or Jake Young personally evaluates your service panel, wiring condition, grounding electrodes, and safety devices, delivering an authoritative written report with photo evidence and clear recommendations.',
    benefits: [
      { title: 'Insurance 4-Point Certified', desc: 'We inspect and certify electrical panels and wiring to satisfy Citizens and Florida private insurance requirements.', icon: 'FileCheck' },
      { title: 'Master Electrician Eyes', desc: 'Conducted directly by licensed contractors Andy or Jake Young, not entry-level home inspectors.', icon: 'ShieldCheck' },
      { title: 'Detailed Written Report', desc: 'Receive high-resolution photo documentation, code references, and itemized flat-rate repair solutions.', icon: 'ClipboardCheck' },
      { title: 'Pre-Purchase Leverage', desc: 'Identify hidden electrical hazards before closing escrow to negotiate repairs or seller credits.', icon: 'Home' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Insurance Carrier Threatening Policy Non-Renewal',
        likelyCause: 'Presence of Federal Pacific Electric, Zinsco, Challenger, or aluminum branch wiring flagged on an insurance questionnaire.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Call immediately upon receiving an insurance notice to inspect the panel and provide certified remediation.'
      },
      {
        symptom: 'Purchasing an Older Single-Family Home (Built Before 1990)',
        likelyCause: 'Concealed DIY modifications, ungrounded outlets, double-tapped breakers, or deteriorated service entrance cable.',
        urgency: 'High Priority',
        whenToCall: 'Schedule during your inspection contingency period prior to closing escrow.'
      },
      {
        symptom: 'Frequent Electrical Glitches or Post-Storm Flickering',
        likelyCause: 'Compromised grounding electrode system, loose utility neutral connection, or storm surge degradation.',
        urgency: 'Maintenance',
        whenToCall: 'Thorough multi-point inspection pinpoints hidden faults before they become emergencies.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Service Entrance & Meter Base Evaluation',
        description: 'We inspect the utility drop/lateral, weatherhead, meter socket enclosure, main disconnect, and grounding electrode conductors.'
      },
      {
        step: 2,
        title: 'Deadfront Removal & Panel Diagnostics',
        description: 'We remove the panel deadfront, evaluate busbar condition, verify breaker ratings against wire gauges, inspect for double taps, and measure line voltages.'
      },
      {
        step: 3,
        title: 'Branch Wiring, Outlets & Safety Devices',
        description: 'We test receptacles throughout the home for polarity and grounding, verify GFCI and AFCI trip times, and check smoke/CO detector coverage.'
      },
      {
        step: 4,
        title: 'Written Report & Consultation',
        description: 'We provide an itemized report with photo evidence, prioritize defects by safety severity, and provide upfront pricing for any needed corrections.'
      }
    ],
    realProjects: [
      {
        title: 'Pre-Purchase Electrical Inspection & Seller Credit',
        location: 'Camino Gardens, Boca Raton, FL',
        description: 'Prospective buyer requested an independent electrical evaluation of a 1974 single-family home during the 10-day inspection period.',
        solution: 'Andy Young uncovered an overloaded 150A panel with multiple double-tapped breakers, ungrounded outlets in living areas, and an unbonded pool pump motor.',
        outcome: 'Buyer used our detailed photographic report to secure a $4,200 seller credit at closing, and Young Electric completed all corrections post-close.'
      }
    ],
    costFactors: [
      { factor: 'Square Footage & Panel Count', impact: 'Single-panel single-family homes require less inspection time than large estates with multiple subpanels and pool automation.' },
      { factor: 'Type of Inspection Required', impact: 'Standard safety audits, insurance 4-point electrical certifications, or comprehensive pre-purchase diagnostic evaluations.' }
    ],
    costGuide: {
      serviceCallFee: 'Standalone flat-rate inspection fees',
      typicalRange: '$225 – $450 depending on home size and subpanel complexity',
      details: 'Includes comprehensive written report, photo documentation, and a direct consultation with master electrician Andy or Jake Young.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Inspections do not require municipal permits. If remediation repairs or panel upgrades are needed, permits are pulled by Young Electric Inc.'
    },
    warrantyInfo: 'All findings and remediation recommendations are backed by our licensed contractor credentials and 100% inspection guarantee.',
    sections: [
      {
        heading: 'What Our Boca Raton Electrical Inspection Checklist Covers',
        paragraphs: [
          'A residential electrical inspection conducted by Young Electric Inc leaves no stone unturned:',
          '• Main Service Panel & Subpanels: Checking busbar integrity, breaker torque, brand compatibility, signs of overheating, corrosion, and main lug connections.',
          '• Grounding & Bonding System: Verifying connection to 8ft copper ground rods, water main bonding, intersystem bonding termination, and pool deck equipotential bonding.',
          '• Branch Circuit Conductors: Identifying wiring materials (copper, aluminum, cloth-jacketed Romex), checking wire gauge compatibility with breaker amperage, and inspecting junction boxes.',
          '• Life Safety Devices: Testing GFCI and AFCI receptacles and breakers in kitchens, bathrooms, garages, and exteriors; inspecting hardwired smoke and carbon monoxide detectors.',
          '• Surge Suppression & Emergency Readiness: Inspecting whole-home surge protective devices (SPDs) and backup generator interlock systems.'
        ]
      }
    ],
    faqs: [
      { q: 'How is your inspection different from a standard home inspector?', a: 'General home inspectors possess a broad, surface-level overview of an entire home (roof, plumbing, HVAC, structure), but they are not licensed electricians. They are prohibited from removing panel deadfronts or performing in-depth circuit diagnostics. Andy and Jake Young are State Certified Electrical Contractors who understand the intricate physics, load limits, and code mandates of South Florida residential systems.' },
      { q: 'Do you provide insurance 4-point inspection sign-offs?', a: 'Yes. We regularly inspect electrical systems and complete the electrical section of Florida 4-Point inspection forms required by Citizens, Heritage, Universal, and other Florida property insurance carriers.' },
      { q: 'How long does an electrical inspection take?', a: 'A thorough residential inspection for an average-sized Boca Raton home takes approximately 1.5 to 2.5 hours. We review all findings with you in person immediately following the walkthrough.' }
    ],
    relatedServices: ['electrical-panel-service-boca-raton-fl', 'electrical-repair-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'surge-protection-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 2: LIGHTING INSTALLATION
  // ==========================================
  {
    slug: 'lighting-installation-boca-raton-fl',
    title: 'Lighting Installation Boca Raton, FL',
    shortTitle: 'Lighting Installation',
    h1: 'Lighting Installation in Boca Raton, FL',
    metaTitle: 'Lighting Installation Boca Raton FL | Young Electric Inc',
    metaDescription: 'Upgrade your home with custom lighting installation in Boca Raton, FL. Recessed LED wafer lights, chandeliers, and landscape lighting by Andy & Jake Young. Call 561-363-0946.',
    heroImage: images.lightingLivingRoom,
    heroImageAlt: 'Beautiful modern living room with elegant lighting installation in a Boca Raton, FL home',
    icon: 'Lightbulb',
    ctaText: 'Call for Lighting Installation',
    intro: 'Lighting defines the architectural beauty, ambiance, and functionality of your South Florida home. Dated track lighting, dark hallways, and yellow fluorescent fixtures make interiors feel tired and uninviting. Young Electric Inc delivers precision residential lighting installations across Boca Raton. Whether you want to brighten your open-concept living area with ultra-thin LED recessed wafer lights, safely suspend an 80-pound designer chandelier in a two-story foyer, or illuminate your outdoor patio with elegant landscape lighting, Andy and Jake Young deliver flawless craftsmanship and clean, code-compliant execution.',
    benefits: [
      { title: 'Recessed LED Specialists', desc: 'Ultra-thin, IC-rated airtight wafer downlights with selectable color temperature (2700K–5000K).', icon: 'Lightbulb' },
      { title: 'Heavy Chandelier Experts', desc: 'Installation of steel fan/fixture-rated ceiling boxes bolted to framing, supporting up to 150 lbs.', icon: 'ShieldCheck' },
      { title: 'Under-Cabinet & Accent', desc: 'Concealed LED strip task lighting with diffuse channels and discreet low-voltage drivers.', icon: 'Zap' },
      { title: 'Landscape & Patio Ambiance', desc: 'Durable low-voltage brass path lights, tree uplights, and patio illumination.', icon: 'Trees' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Heavy Chandelier Hung From Standard Plastic Ceiling Box',
        likelyCause: 'Improper builder installation where a heavy fixture is suspended from a box only rated for 6-pound lights.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Ceiling box deformation can cause the fixture to fall. Heavy fixtures require steel structural saddle boxes.'
      },
      {
        symptom: 'Recessed Cans Overheating or Flickering Rhythmically',
        likelyCause: 'Insulation touching non-IC rated can housings, triggering thermal cutoff switches, or incompatible dimmers.',
        urgency: 'Maintenance',
        whenToCall: 'Retrofitting to modern IC-rated airtight LED wafer fixtures eliminates thermal cutoff trips and lowers cooling bills.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Design Consultation & Beam Layout',
        description: 'Andy or Jake reviews your lighting goals, creates a laser-measured layout for even light distribution, and calculates total circuit load.'
      },
      {
        step: 2,
        title: 'Structural Box & Conduit Preparation',
        description: 'We install heavy-duty steel junction boxes anchored to structural trusses for heavy fixtures or cut precise drywall openings for wafer cans.'
      },
      {
        step: 3,
        title: 'Clean Cable Routing & Termination',
        description: 'We fish Romex NM-B cable through joist cavities without unnecessary drywall damage, securing connections to code.'
      },
      {
        step: 4,
        title: 'Dimmer Pairing & Scene Tuning',
        description: 'We install matching LED dimmers, adjust color temperatures (e.g. warm 3000K), test dimming ranges, and vacuum the workspace.'
      }
    ],
    realProjects: [
      {
        title: 'Two-Story Foyer Chandelier & 16-Can LED Retrofit',
        location: 'Por La Mar, Boca Raton, FL',
        description: 'Homeowner wanted to replace an outdated brass fixture with a 95-pound crystal chandelier in an 18-foot foyer and add recessed lighting in the great room.',
        solution: 'Engineered a structural unistrut ceiling support anchored directly to attic roof trusses, ran new dedicated wiring to a Lutron Diva dimmer, and installed 16 warm-white 3000K recessed LED cans.',
        outcome: 'Breathtaking foyer transformation, 100% structural safety, and smooth dimming control from the entryway.'
      }
    ],
    costFactors: [
      { factor: 'Ceiling Height & Access', impact: 'Standard 8–10 foot ceilings require standard ladders; two-story foyers or vaulted ceilings require scaffolding and specialized rigging.' },
      { factor: 'Attic Wiring Pathways', impact: 'Direct attic access allows fast, clean cable fishing; flat roofs or ground-floor rooms beneath second stories require specialized low-profile routing.' },
      { factor: 'Fixture Weight', impact: 'Fixtures over 50 lbs legally require specialized steel structural boxes bolted directly to ceiling joists.' }
    ],
    costGuide: {
      serviceCallFee: 'Free lighting layout and upfront installation proposal',
      typicalRange: '$125 – $250 per recessed LED can installed; $250 – $650 for chandelier hanging depending on height',
      details: 'All lighting projects include clean-up, dimmer installation options, and upfront flat-rate pricing.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Replacing existing light fixtures or retrofitting recessed cans does not require city permits. Adding new dedicated lighting circuits is permitted as part of major remodels.'
    },
    warrantyInfo: 'Young Electric Inc provides a 1-Year Workmanship Warranty on all lighting installations.',
    sections: [
      {
        heading: 'Why Modern LED Wafer Downlights Outperform Older Recessed Cans',
        paragraphs: [
          'Older traditional "can lights" required large metal housings that penetrated the ceiling drywall, creating significant heat transfer between hot South Florida attics and your air-conditioned living space. Furthermore, their incandescent and halogen bulbs consumed high wattage and generated intense localized heat.',
          'Modern ultra-thin LED wafer downlights are less than 1/2-inch thick, allowing installation directly beneath joists without cutting structural wood. They are IC-rated (Insulation Contact) and airtight, sealing out attic heat and saving significant cooling costs while lasting up to 50,000 hours.'
        ]
      }
    ],
    faqs: [
      { q: 'Can you install recessed lighting in rooms without attic access?', a: 'Yes. Because ultra-thin LED wafer lights require only 1/2-inch of clearance, we can fish cables through joist bays and mount fixtures directly into drywall ceilings without large destructive openings.' },
      { q: 'What color temperature should I choose for my home?', a: 'We typically recommend 2700K (soft warm white) for bedrooms and relaxed living spaces, and 3000K (warm white) for modern kitchens, bathrooms, and open living areas. Our LED fixtures feature selectable color switches so you can adjust the warmth to your exact preference.' }
    ],
    relatedServices: ['switch-repair-boca-raton-fl', 'ceiling-fan-installation-boca-raton-fl', 'residential-wiring-boca-raton-fl', 'electrical-repair-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 3: RESIDENTIAL WIRING & BREAKER REPAIR
  // ==========================================
  {
    slug: 'residential-wiring-boca-raton-fl',
    title: 'Residential Wiring Boca Raton, FL',
    shortTitle: 'Residential Wiring',
    h1: 'Residential Wiring & Rewiring in Boca Raton, FL',
    metaTitle: 'Residential Electrical Wiring & Rewiring Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Complete residential wiring, dedicated appliance circuits, and home rewiring in Boca Raton, FL. Andy & Jake Young deliver master-level code-compliant wiring. Call 561-363-0946.',
    heroImage: images.wiring,
    heroImageAlt: 'Electrician installing new residential electrical wiring in a Boca Raton, FL home',
    icon: 'Cable',
    ctaText: 'Call for Residential Wiring',
    intro: 'Your home\'s hidden electrical wiring is the critical infrastructure delivering energy to every light, outlet, and heavy appliance. When wires age, corrode, or become overloaded by modern electrical demands, they become serious fire and shock hazards. Young Electric Inc delivers master-level residential wiring and rewiring services in Boca Raton. Whether you need new dedicated 240V circuits for an induction range or heat pump, aluminum wiring remediation, or whole-home rewiring for a historic property, Andy and Jake Young ensure every foot of wire is correctly sized, grounded, and protected.',
    benefits: [
      { title: 'Dedicated Appliance Circuits', desc: 'Safe 120V & 240V dedicated runs for induction stoves, double ovens, pool pumps, and tankless water heaters.', icon: 'Zap' },
      { title: 'Aluminum Wiring Remediation', desc: 'UL-listed AlumiConn torque connections that pass Florida insurance underwriting without gutting drywall.', icon: 'ShieldCheck' },
      { title: 'CBS Block Routing Experts', desc: 'Specialized techniques for routing clean, code-compliant wiring through South Florida concrete block walls.', icon: 'Wrench' },
      { title: 'Turn-Key Permitting', desc: 'Full architectural permits and municipal inspection sign-off from the City of Boca Raton.', icon: 'FileCheck' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Single-Strand Aluminum Branch Wiring (1965–1975 Builds)',
        likelyCause: 'Aluminum wiring expands and contracts at a rate 30% higher than copper, loosening screw terminals and causing fires.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Mandatory remediation required for Florida homeowners insurance coverage.'
      },
      {
        symptom: 'Cloth-Insulated or Ungrounded Romex Cable',
        likelyCause: 'Aging 1950s/60s rubberized cloth insulation drying out and crumbling, exposing bare live conductors inside wall cavities.',
        urgency: 'High Priority',
        whenToCall: 'Inspect wiring before undertaking kitchen or bathroom renovations.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Circuit Pathway & Load Engineering',
        description: 'We map circuit paths, verify main panel amperage headroom, and select proper conductor gauge (14 AWG, 12 AWG, 10 AWG, or heavy feeder cable).'
      },
      {
        step: 2,
        title: 'Conduit & Cable Pulling',
        description: 'We route Romex NM-B through interior stud bays or pull THHN conductors through EMT conduit for CBS block exterior walls.'
      },
      {
        step: 3,
        title: 'Torqued Box Terminations',
        description: 'We secure all connections inside metal or fiberglass junction boxes using commercial wire connectors torqued to manufacturer specs.'
      },
      {
        step: 4,
        title: 'Megohmmeter & Continuity Testing',
        description: 'We perform insulation resistance testing to verify zero conductor leakage and schedule final municipal inspection.'
      }
    ],
    realProjects: [
      {
        title: 'Kitchen Remodel 5-Circuit Rewiring in CBS Wall',
        location: 'Boca Woods Country Club, Boca Raton, FL',
        description: 'Full kitchen renovation requiring five new dedicated 20A appliance circuits and a 50A induction range feed through solid concrete block exterior walls.',
        solution: 'Channeled conduit pathways with minimal drywall disruption, installed dedicated copper runs, and labeled all circuits.',
        outcome: 'Full compliance with 2023 NEC small-appliance codes and passed inspection on first walkthrough.'
      }
    ],
    costFactors: [
      { factor: 'Home Construction Material', impact: 'Wood-frame interior walls allow fast cable fishing; solid concrete block (CBS) exterior walls require surface conduit or channeling.' },
      { factor: 'Wire Gauge & Distance', impact: 'Heavy-gauge copper conductors (6 AWG, 4 AWG, 2 AWG) for 240V appliances have higher material costs than standard 14/2 Romex.' }
    ],
    costGuide: {
      serviceCallFee: 'Free project estimates for residential rewiring and dedicated circuits',
      typicalRange: '$350 – $850 for dedicated 240V appliance circuits; custom quotes for whole-home rewiring',
      details: 'All wiring includes premium copper conductors, junction boxes, breakers, and permit procurement.'
    },
    permitRequirements: {
      required: true,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Installing new electrical circuits or whole-home rewiring requires a municipal electrical permit and inspection in Florida.'
    },
    warrantyInfo: 'Young Electric Inc backs all residential wiring installations with a 10-Year Craftsmanship Guarantee.',
    sections: [
      {
        heading: 'Why Dedicated Electrical Circuits Are Essential For Modern Appliances',
        paragraphs: [
          'Under the National Electrical Code (NEC Article 210), high-draw household appliances must be served by dedicated branch circuits that supply no other outlets or fixtures. This includes refrigerators, microwaves, dishwashers, garbage disposals, electric ranges, clothes dryers, and central air conditioning compressors.',
          'Sharing an appliance circuit with standard convenience outlets leads to chronic breaker tripping and potential wire overheating. Young Electric Inc installs clean, code-compliant dedicated circuits tailored to the exact nameplate specifications of your appliances.'
        ]
      }
    ],
    faqs: [
      { q: 'How do you run new wires through concrete block (CBS) walls?', a: 'In South Florida homes with concrete block exterior walls, we utilize specialized masonry bits, low-profile decorative raceways, or fish cables through furring strip cavities to route wiring cleanly with minimal cosmetic disruption.' },
      { q: 'Can my aluminum wiring be made safe without tearing down all my walls?', a: 'Yes. The US Consumer Product Safety Commission (CPSC) approves AlumiConn dual-rated torque connectors for aluminum branch wiring remediation. We install these connectors at every outlet, switch, and fixture junction box, satisfying Florida insurance requirements at a fraction of the cost of a full rewire.' }
    ],
    relatedServices: ['breaker-repair-boca-raton-fl', 'electrical-panel-service-boca-raton-fl', 'ev-charger-installation-boca-raton-fl', 'electrical-repair-boca-raton-fl']
  },

  {
    slug: 'breaker-repair-boca-raton-fl',
    title: 'Circuit Breaker Repair Boca Raton, FL',
    shortTitle: 'Breaker Repair',
    h1: 'Circuit Breaker Repair & Replacement in Boca Raton, FL',
    metaTitle: 'Circuit Breaker Repair & Replacement Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Need circuit breaker repair or replacement in Boca Raton, FL? Andy & Jake Young diagnose tripping breakers, burnt busbars, and AFCI faults. Call 561-363-0946.',
    heroImage: images.panelCloseup,
    heroImageAlt: 'Close-up of circuit breakers in an electrical panel in a Boca Raton, FL home',
    icon: 'Cpu',
    ctaText: 'Call for Breaker Repair',
    intro: 'A circuit breaker is your home\'s frontline defense against electrical fires, designed to cut power instantly when current exceeds safe levels or a short circuit occurs. However, circuit breakers are mechanical devices that wear out over time—especially in South Florida\'s hot, humid garages. Breaker clips can lose spring tension, internal bimetallic strips fatigue, and electrical arcing can damage panel busbars. Young Electric Inc provides fast, accurate circuit breaker repair and replacement in Boca Raton. Andy or Jake Young diagnoses the root cause of tripping breakers, replaces defective units with exact OEM parts, and ensures your panel busbar is completely safe.',
    benefits: [
      { title: 'Exact OEM Matching', desc: 'We only install UL-listed breakers matching your panel manufacturer specs (Square D QO, Siemens, Eaton).', icon: 'ShieldCheck' },
      { title: 'Busbar Thermal Inspection', desc: 'We check for busbar pitting, scorching, and loose clip connections before replacing breakers.', icon: 'Wrench' },
      { title: 'AFCI / GFCI Dual-Function', desc: 'Upgrading standard breakers to modern dual-function arc-fault and ground-fault protection.', icon: 'Zap' },
      { title: 'Same-Day Fast Dispatch', desc: 'Stocked trucks with standard, tandem, and high-amp double-pole breakers ready for immediate replacement.', icon: 'Clock' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Breaker Feels Hot to the Touch or Buzzes Under Normal Load',
        likelyCause: 'Loose wire termination on the breaker lug or deteriorated breaker clip causing high contact resistance.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Shut off the breaker immediately. Excess heat can melt busbars and damage adjacent breakers.'
      },
      {
        symptom: 'Breaker Trips Instantly With a Loud Pop When Reset',
        likelyCause: 'Direct line-to-neutral or line-to-ground short circuit on the branch circuit.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Do not force the breaker on. Forcing a tripped breaker ruins the internal trip mechanism.'
      },
      {
        symptom: 'Mismatched "Cheater" Breaker Installed in Panel',
        likelyCause: 'Previous handyman installed an incompatible brand (e.g., Murray breaker jammed into a Square D QO panel).',
        urgency: 'Code Compliance',
        whenToCall: 'Incompatible breakers violate National Electrical Code and can fail to trip during an overload.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Thermal & Load Diagnostics',
        description: 'We measure line amperage with clamp meters and evaluate busbar temperature with infrared thermal imaging.'
      },
      {
        step: 2,
        title: 'Busbar Clip & Lug Inspection',
        description: 'We remove the breaker to inspect the busbar stab for pitting, corrosion, or arcing burns.'
      },
      {
        step: 3,
        title: 'OEM Code-Approved Replacement',
        description: 'We install the exact manufacturer-specified replacement breaker and torque the terminal lug to factory inch-pound specs.'
      },
      {
        step: 4,
        title: 'Operational Load Verification',
        description: 'We power on the branch circuit under full appliance load, verify temperature stability, and test AFCI/GFCI trip curves.'
      }
    ],
    realProjects: [
      {
        title: 'Air Conditioner 50A Breaker Overheating Replacement',
        location: 'Boca Pointe, Boca Raton, FL',
        description: 'Central air conditioning breaker tripped daily at 3:00 PM during peak heat. Homeowner assumed the AC compressor was failing.',
        solution: 'Jake Young discovered the 50A breaker lug was under-torqued, reaching 185°F under load. Cleaned the copper busbar, replaced the heat-fatigued breaker with a new Square D QO 50A double-pole unit, and torqued lugs to 45 in-lbs.',
        outcome: 'Normal operating temperature restored (92°F under load) with zero nuisance trips throughout peak summer.'
      }
    ],
    costFactors: [
      { factor: 'Type of Breaker', impact: 'Standard single-pole 15A/20A breakers are lower cost than high-amp 2-pole 240V breakers or electronic AFCI/GFCI dual-function units.' },
      { factor: 'Panel Busbar Condition', impact: 'If arcing has pitted the busbar stab, the breaker may need relocation to a clean spare slot or busbar remediation.' }
    ],
    costGuide: {
      serviceCallFee: '$99 diagnostic fee (applied directly to repair)',
      typicalRange: '$175 – $375 for breaker diagnosis and replacement',
      details: 'Includes thermal diagnostic inspection, busbar evaluation, OEM breaker replacement, and load testing.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Replacing individual defective breakers with like-for-like OEM units does not require building permits under Florida Building Code.'
    },
    warrantyInfo: 'All breaker replacements are backed by our 1-Year Workmanship Warranty plus manufacturer component warranties.',
    sections: [
      {
        heading: 'Why You Should Never Install Mismatched Breakers',
        paragraphs: [
          'A common dangerous shortcut found during inspections is the presence of "alien" or mismatched breakers. Every electrical panel manufacturer (Square D, Siemens, Eaton, GE) designs their breakers with proprietary clip profiles, busbar thickness tolerances, and tension springs.',
          'While a different brand may physically snap into place, the mechanical contact with the busbar is often imperfect, leaving tiny air gaps. When current flows across these gaps, electrical micro-arcing occurs, slowly melting the busbar. Young Electric Inc strictly installs UL-classified, manufacturer-approved breakers.'
        ]
      }
    ],
    faqs: [
      { q: 'How long do circuit breakers typically last?', a: 'Under normal operating conditions, residential circuit breakers have an expected lifespan of 25 to 30 years. However, in South Florida garages subjected to intense summer heat and humidity, breakers can fatigue earlier, especially if subjected to chronic high loads.' },
      { q: 'Why did my breaker trip and won\'t reset?', a: 'When a breaker trips, the internal handle moves to a center neutral position. To reset it, you must firmly push the handle all the way to the OFF position until it clicks, and then push it to the ON position. If it instantly trips again with a loud snap, an active short circuit exists and an electrician should inspect it.' }
    ],
    relatedServices: ['electrical-panel-service-boca-raton-fl', 'electrical-repair-boca-raton-fl', 'residential-wiring-boca-raton-fl', 'electrical-troubleshooting-boca-raton-fl']
  },

  // ==========================================
  // PRIORITY 3: CEILING FANS, SURGE, GENERATORS
  // ==========================================
  {
    slug: 'ceiling-fan-installation-boca-raton-fl',
    title: 'Ceiling Fan Installation Boca Raton, FL',
    shortTitle: 'Ceiling Fan Installation',
    h1: 'Ceiling Fan Installation in Boca Raton, FL',
    metaTitle: 'Ceiling Fan Installation & Replacement Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Professional ceiling fan installation in Boca Raton, FL. Secure fan-rated boxes, high-ceiling downrods, and patio fans installed by Andy & Jake Young. Call 561-363-0946.',
    heroImage: images.ceilingFanRoom,
    heroImageAlt: 'Modern ceiling fan installed in a residential living room in Boca Raton, FL',
    icon: 'Fan',
    ctaText: 'Call for Ceiling Fan Installation',
    intro: 'In South Florida\'s climate, ceiling fans are essential for year-round comfort, circulating air and reducing load on your central air conditioning system. However, ceiling fans are heavy, dynamic vibrating loads that cannot be hung from standard light fixture boxes. Hanging a fan from an unrated box risks ceiling collapse, motor wobble, and electrical shorts. Young Electric Inc provides safe, professional ceiling fan installation across Boca Raton. Andy or Jake Young installs UL-listed fan-rated structural boxes, extends high-ceiling downrods, wires separate wall controls, and installs wet-rated outdoor patio fans.',
    benefits: [
      { title: 'UL-Listed Fan-Rated Boxes', desc: 'Secure expanding saddle boxes anchored between trusses, supporting up to 70 lbs of dynamic motion.', icon: 'ShieldCheck' },
      { title: 'High-Ceiling Specialists', desc: 'Expert rigging, assembly, and extension downrods for vaulted, tray, and 12+ foot ceilings.', icon: 'Home' },
      { title: 'Outdoor Lanai Rated', desc: 'Installation of damp and wet-rated outdoor fans built to withstand Florida moisture and coastal air.', icon: 'Trees' },
      { title: 'Dual-Switch Wiring', desc: 'Separate wall switches for independent fan speed and dimmable light control without pull chains.', icon: 'Zap' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Fan Wobbles Violently or Makes Clicking / Grinding Sounds',
        likelyCause: 'Mounted to an unrated plastic light box or loose mounting bracket screws.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Stop using the fan. Loose dynamic fixtures can detach from ceiling framing.'
      },
      {
        symptom: 'Outdoor Patio Fan Blades Drooping or Motor Rusting',
        likelyCause: 'Indoor-rated fan installed in an exterior environment exposed to South Florida humidity.',
        urgency: 'Maintenance',
        whenToCall: 'Requires replacement with a UL-listed wet-rated outdoor ceiling fan with ABS composite blades.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Ceiling Box Structural Inspection',
        description: 'We inspect the existing electrical box to verify if it is rated for dynamic fan loads (UL 514C). If not, we install a heavy-duty expanding steel saddle brace.'
      },
      {
        step: 2,
        title: 'Precision Assembly & Downrod Sizing',
        description: 'We assemble fan motor, bracket, and downrod, ensuring optimal blade height (8 to 9 feet above the floor) for maximum airflow efficiency.'
      },
      {
        step: 3,
        title: 'Code-Compliant Wiring & Controls',
        description: 'We connect line, neutral, and equipment ground, wiring separate wall controls or integrating wireless remote receivers inside the canopy.'
      },
      {
        step: 4,
        title: 'Blade Balancing & Speed Testing',
        description: 'We attach blades, test all speeds and directional reverse switches, calibrate blade balance for silent operation, and clean up.'
      }
    ],
    realProjects: [
      {
        title: 'Covered Lanai Wet-Rated Dual Fan Installation',
        location: 'Saturnia, Boca Raton, FL',
        description: 'Homeowner wanted to replace two basic outdoor lights on a screened lanai with large 65-inch outdoor ceiling fans.',
        solution: 'Retrofit two UL-listed expanding metal fan-rated braces between ceiling trusses, ran dedicated switch leg wiring, and mounted wet-rated outdoor fans.',
        outcome: 'Silent, wobble-free airflow and refreshing breeze across the entire outdoor living space.'
      }
    ],
    costFactors: [
      { factor: 'Ceiling Height', impact: 'Standard 8–10 ft ceilings are straightforward; 12–20 ft vaulted or tray ceilings require scaffolding and extended downrod balancing.' },
      { factor: 'Need for Fan-Rated Box Retrofit', impact: 'Replacing an unrated plastic light box with an expanding structural steel brace adds small hardware/labor costs.' }
    ],
    costGuide: {
      serviceCallFee: 'Upfront flat-rate pricing per fan installation',
      typicalRange: '$175 – $325 for standard ceiling fan replacement; $295 – $550 for high ceilings or new box additions',
      details: 'Includes unboxing, assembly, fan-rated box inspection/retrofit, mounting, balancing, and clean up.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Replacing existing ceiling fixtures or fans does not require municipal building permits under Florida Building Code.'
    },
    warrantyInfo: 'All ceiling fan installations include our 1-Year Workmanship Warranty.',
    sections: [
      {
        heading: 'Why Fan-Rated Ceiling Boxes Are Required By Law',
        paragraphs: [
          'Under the National Electrical Code (NEC Article 314.27(C)), any electrical box supporting a ceiling-suspended paddle fan must be specifically listed and marked by the manufacturer as "Acceptable for Fan Support."',
          'Standard ceiling boxes are engineered only to bear static, downward-hanging light fixtures weighing under 6 to 10 pounds. A ceiling fan generates dynamic, vibrating, and rotational torque that will fatigue plastic screws and tabs over time. Young Electric Inc ensures your fan is mounted to structural trusses with steel expanding braces.'
        ]
      }
    ],
    faqs: [
      { q: 'Can you install a ceiling fan where only a light fixture currently exists?', a: 'Yes. We remove the existing light fixture, evaluate the electrical box, and if it is not fan-rated, we install an expanding structural steel brace between the ceiling trusses without damaging your drywall.' },
      { q: 'What size ceiling fan do I need for my room?', a: 'As a general rule: rooms up to 144 sq ft (12x12) require a 44–50 inch fan; rooms between 144 and 225 sq ft require a 52–56 inch fan; and large open great rooms or outdoor lanais require a 60-inch or larger fan.' }
    ],
    relatedServices: ['lighting-installation-boca-raton-fl', 'switch-repair-boca-raton-fl', 'electrical-repair-boca-raton-fl', 'residential-wiring-boca-raton-fl']
  },

  {
    slug: 'surge-protection-boca-raton-fl',
    title: 'Surge Protection Boca Raton, FL',
    shortTitle: 'Surge Protection',
    h1: 'Whole-Home Surge Protection in Boca Raton, FL',
    metaTitle: 'Whole-Home Surge Protection Boca Raton, FL | Lightning Defense | Young Electric Inc',
    metaDescription: 'Protect your appliances and electronics from Florida lightning surges. Andy & Jake Young install Type 2 whole-home surge protectors in Boca Raton. Call 561-363-0946.',
    heroImage: images.surgeProtection,
    heroImageAlt: 'Whole-home surge protection device installed beside a residential electrical panel in Boca Raton, FL',
    icon: 'Shield',
    ctaText: 'Call for Whole-Home Surge Protection',
    intro: 'South Florida holds the unenviable title of the "Lightning Capital of the United States," experiencing over 1.2 million lightning strikes annually. While plug-in power strips offer minor protection for a lamp or computer, they do nothing to protect expensive 240V equipment like your central air conditioner compressor, variable-speed pool heat pump, smart refrigerator, or EV charging station. A single indirect lightning strike or utility grid capacitor switch can send tens of thousands of volts through your home wiring, instantly frying microprocessors. Young Electric Inc installs commercial-grade Type 2 whole-home surge protective devices (SPDs) directly inside or adjacent to your main electrical panel in Boca Raton.',
    benefits: [
      { title: 'Comprehensive Whole-Home Defense', desc: 'Protects all 120V and 240V appliances, HVAC compressors, pool equipment, and smart electronics simultaneously.', icon: 'ShieldCheck' },
      { title: 'Sub-Nanosecond Response', desc: 'Heavy-duty Metal Oxide Varistors (MOVs) divert up to 108,000 amps of surge current safely to ground in nanoseconds.', icon: 'Zap' },
      { title: '2023 NEC Code Mandate', desc: 'Complies with modern Florida Building Code requirements for whole-home surge protective devices on residential services.', icon: 'FileCheck' },
      { title: 'Equipment Warranty Coverage', desc: 'Includes up to $75,000 in manufacturer connected-equipment warranty protection for your home appliances.', icon: 'DollarSign' },
    ],
    diagnosedProblems: [
      {
        symptom: 'AC Compressor or Smart Refrigerator Control Board Fries Repeatedly',
        likelyCause: 'Transient voltage spikes from utility grid switching or nearby lightning inducing high voltage into branch wiring.',
        urgency: 'High Priority',
        whenToCall: 'Modern inverter-driven AC units require Type 2 whole-home surge suppression to protect sensitive microchips.'
      },
      {
        symptom: 'Absence of Whole-Home Surge Protection on Main Electrical Panel',
        likelyCause: 'Home built before the 2020/2023 NEC code cycle when surge protection was not mandatory.',
        urgency: 'High Priority',
        whenToCall: 'Essential upgrade for all South Florida homeowners before summer thunderstorm season.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Panel & Grounding System Audit',
        description: 'Andy or Jake inspects your panel busbar and tests grounding electrode resistance (a surge protector is only as effective as the ground path it discharges to).'
      },
      {
        step: 2,
        title: 'SPD Sizing & Placement Selection',
        description: 'We select a premium Type 2 SPD (Square D, Eaton, or Siemens) with minimum 50kA–108kA surge rating per phase.'
      },
      {
        step: 3,
        title: 'Direct Busbar Installation with Short Leads',
        description: 'We install the device immediately adjacent to the main breaker with ultra-short, direct lead lengths to maximize surge response speed.'
      },
      {
        step: 4,
        title: 'Operational Status & LED Indicator Verification',
        description: 'We verify active LED status indicators, test dual-phase protection, and register the unit\'s connected-equipment warranty.'
      }
    ],
    realProjects: [
      {
        title: 'Whole-Home Surge Protection Retrofit Following Storm Loss',
        location: 'Boca Chase, Boca Raton, FL',
        description: 'Homeowner lost an induction cooktop control board and smart TV motherboard ($3,400 in damages) after a nearby lightning strike.',
        solution: 'Installed an Eaton 108kA Type 2 whole-home surge protector connected to a dedicated 50A breaker with 3-inch leads directly beneath the main breaker, alongside enhanced grounding rod bonding.',
        outcome: 'Comprehensive multi-stage transient surge defense backed by a $75,000 connected-equipment warranty.'
      }
    ],
    costFactors: [
      { factor: 'Surge Amperage Capacity', impact: 'Units rated for 50kA, 80kA, or 108kA surge current offer varying levels of protection and warranty payout coverage.' },
      { factor: 'Panel Space Availability', impact: 'Requires two adjacent breaker slots in the main panel; homes with fully packed panels may require tandem breaker reorganization.' }
    ],
    costGuide: {
      serviceCallFee: 'Flat-rate whole-home installation packages',
      typicalRange: '$385 – $650 fully installed (hardware, breaker, and installation included)',
      details: 'Includes premium commercial-grade Type 2 SPD, dedicated double-pole breaker, grounding verification, and warranty registration.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Adding a plug-on or panel-mounted Type 2 surge protective device to an existing residential panel does not require building permits in Florida.'
    },
    warrantyInfo: 'Includes our 1-Year Workmanship Warranty plus up to $75,000 manufacturer connected-equipment warranty.',
    sections: [
      {
        heading: 'Why South Florida Homeowners Cannot Rely On Power Strips Alone',
        paragraphs: [
          'Many homeowners believe their electronic devices are safe because they are plugged into power strips. However, standard power strips are only rated to absorb small, point-of-use residual voltage fluctuations. They provide zero protection for your most expensive household investments:',
          '• Central HVAC Inverter Compressors ($6,000 – $12,000 to replace)',
          '• Variable-Speed Pool Pumps & Heaters ($2,500 – $5,000)',
          '• Smart Refrigerators, Washers & Dryers ($1,500 – $3,500)',
          '• Electric Vehicle Charging Stations & Onboard Chargers ($1,000 – $4,000)',
          'A Type 2 Whole-Home Surge Protective Device installs directly at your main distribution panel, arresting massive high-voltage transients at the front door before they can enter interior branch circuits.'
        ]
      }
    ],
    faqs: [
      { q: 'How does a whole-home surge protector work?', a: 'A whole-home surge protector utilizes heavy-duty Metal Oxide Varistors (MOVs). Under normal 120V/240V voltage, the MOVs remain non-conductive. When a voltage spike exceeds safe thresholds (e.g. 500V+), the MOVs instantaneously conduct, shunting the excess electrical energy safely into your home\'s grounding electrode system in less than a nanosecond.' },
      { q: 'How do I know if my surge protector has absorbed a strike and needs replacement?', a: 'All units installed by Young Electric Inc feature visible LED status indicator lights (and optional audible alarms). As long as the green LEDs are illuminated, protection is active. If a massive direct strike sacrifices the internal MOVs to save your appliances, the LED turns red, indicating it is time for replacement.' }
    ],
    relatedServices: ['electrical-panel-service-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'generator-installation-boca-raton-fl', 'electrical-inspection-boca-raton-fl']
  },

  {
    slug: 'generator-installation-boca-raton-fl',
    title: 'Generator Hookup & Interlock Boca Raton, FL',
    shortTitle: 'Generator Installation',
    h1: 'Generator Hookup & Interlock Kits in Boca Raton, FL',
    metaTitle: 'Generator Interlock & Hookup Boca Raton, FL | Hurricane Power | Young Electric Inc',
    metaDescription: 'Safely connect your portable hurricane generator to your home panel. Andy & Jake Young install 30A/50A generator interlocks in Boca Raton. Call 561-363-0946.',
    heroImage: images.generator,
    heroImageAlt: 'Residential standby generator installation in a South Florida residential neighborhood',
    icon: 'Flame',
    ctaText: 'Call for Generator Hookup',
    intro: 'During South Florida hurricane season, tropical storms and hurricanes can knock out utility power for days or even weeks. Running hazardous extension cords through cracked windows creates severe tripping, shock, and carbon monoxide hazards, and only powers a handful of small items. A professional generator interlock kit and exterior power inlet box allows you to plug your portable generator directly into your main electrical panel. You can safely power your central air conditioner, refrigerator, well pump, lights, and outlets from your existing wall switches without dangerous backfeeding. Young Electric Inc installs safe, code-compliant 30-amp and 50-amp generator connections across Boca Raton.',
    benefits: [
      { title: 'Safe Utility Interlock Mechanism', desc: 'Mechanical interlock physically prevents generator power and FPL utility power from being energized simultaneously.', icon: 'ShieldCheck' },
      { title: 'Power Essential Circuits or Whole House', desc: 'Run your refrigerator, lighting, outlets, fans, and central air conditioner directly from your main breaker panel.', icon: 'Zap' },
      { title: 'Exterior Weatherproof Inlet Box', desc: 'Heavy-duty CS6375 50A or L14-30 30A twist-lock power inlet installed on the exterior of your home.', icon: 'Home' },
      { title: 'Cost-Effective Hurricane Defense', desc: 'Achieve total home hurricane resilience for thousands less than the cost of a permanent standby system.', icon: 'DollarSign' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Dangerous Extension Cord Routing During Power Outages',
        likelyCause: 'Homeowner running extension cords through cracked doors or windows, introducing deadly carbon monoxide fumes and shock risks.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Install an interlock kit and power inlet box before hurricane season arrives.'
      },
      {
        symptom: 'Illegal Generator "Suicide Cord" Backfeeding',
        likelyCause: 'Connecting a generator into a standard dryer outlet without a mechanical interlock.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Extremely illegal and lethal. Backfeeding power into the utility grid can electrocute FPL linemen working on downed wires.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Generator Wattage & Sizing Review',
        description: 'Andy or Jake reviews your generator running and starting wattage (e.g. 7,500W to 12,000W) and calculates critical home circuits.'
      },
      {
        step: 2,
        title: 'Mechanical Interlock Kit Installation',
        description: 'We install a precision-machined mechanical interlock plate on your main electrical panel, guaranteeing mutual utility/generator lockout.'
      },
      {
        step: 3,
        title: 'Exterior Inlet Box & Feeder Wiring',
        description: 'We mount an exterior weatherproof 30A or 50A inlet box and run heavy copper THHN conductors in conduit back to a dedicated interlock breaker.'
      },
      {
        step: 4,
        title: 'Simulated Outage & Load Demonstration',
        description: 'We perform a full live test, walking you through the safe step-by-step procedure to transition from FPL power to generator power and back.'
      }
    ],
    realProjects: [
      {
        title: '50A Portable Generator Interlock & Soft Start AC Hookup',
        location: 'Loggers\' Run, Boca Raton, FL',
        description: 'Homeowner wanted storm backup power to run their refrigerator, lighting, Wi-Fi, and 4-ton central AC using a 10,000W dual-fuel generator.',
        solution: 'Installed a 50A exterior twist-lock inlet box, panel mechanical interlock plate, dedicated 50A breaker, and added an AC soft-starter kit to reduce compressor inrush amps.',
        outcome: 'Homeowner powered their entire home including central air conditioning throughout an extended post-hurricane outage with zero issues.'
      }
    ],
    costFactors: [
      { factor: 'Amperage Capacity (30A vs. 50A)', impact: '30-amp setups (7,500W) handle basic essentials; 50-amp setups (12,000W+) power larger loads including central air conditioning.' },
      { factor: 'Distance from Inlet to Panel', impact: 'Inlets mounted directly on the wall behind the garage panel require short conduit runs; long distances require additional heavy copper feeder.' }
    ],
    costGuide: {
      serviceCallFee: 'Upfront flat-rate hurricane readiness packages',
      typicalRange: '$850 – $1,650 for complete 30A/50A interlock kit, exterior inlet, breaker, and installation',
      details: 'Includes mechanical interlock plate, dedicated 2-pole breaker, weatherproof inlet box, wiring, and full operational walkthrough.'
    },
    permitRequirements: {
      required: true,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Installing a generator power inlet and interlock breaker legally requires a municipal electrical permit and inspection to ensure utility backfeed safety.'
    },
    warrantyInfo: 'Young Electric Inc backs all generator interlock installations with our 1-Year Workmanship Warranty.',
    sections: [
      {
        heading: 'The Critical Safety Danger of Generator Backfeeding',
        paragraphs: [
          'Attempting to connect a portable generator directly into an existing dryer outlet or wall plug—often called a "suicide cord" or illegal backfeed—is a felony under Florida utility safety statutes.',
          'When generator power enters an electrical panel without a mechanical interlock cutting the main utility connection, electricity travels backward through your service entrance wires into the neighborhood utility transformer. This steps the 240V generator power back up to 7,200 volts on the utility lines, creating an invisible, deadly electrocution hazard for Florida Power & Light (FPL) linemen working to restore neighborhood power.',
          'A mechanical interlock kit is physically designed so that the main utility breaker MUST be turned OFF before the generator breaker can physically be turned ON. It is 100% fail-safe and code-compliant.'
        ]
      }
    ],
    faqs: [
      { q: 'Can a portable generator run my central air conditioning?', a: 'Yes, if sized properly. Modern 9,000W to 12,000W portable generators can start and run a 3-ton to 4-ton central air conditioner, especially when paired with an AC Soft Starter (which reduces compressor starting surge by up to 70%). During our consultation, we calculate your exact starting and running loads.' },
      { q: 'What is the difference between an interlock kit and a transfer switch?', a: 'A traditional transfer switch only powers 6 to 10 pre-selected circuits wired into a secondary box. An interlock kit installs directly on your main panel, allowing you to power ANY circuit in your entire home on demand, simply by toggling breakers as needed.' }
    ],
    relatedServices: ['electrical-panel-service-boca-raton-fl', 'surge-protection-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'residential-wiring-boca-raton-fl']
  },

  // ==========================================
  // ELECTRICAL TROUBLESHOOTING
  // ==========================================
  {
    slug: 'electrical-troubleshooting-boca-raton-fl',
    title: 'Electrical Troubleshooting Boca Raton, FL',
    shortTitle: 'Electrical Troubleshooting',
    h1: 'Electrical Troubleshooting & Diagnostics in Boca Raton, FL',
    metaTitle: 'Master Electrical Troubleshooting Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Struggling with elusive electrical problems in Boca Raton, FL? Andy & Jake Young use advanced diagnostic tools to trace intermittent faults and hidden shorts. Call 561-363-0946.',
    heroImage: images.electricianPanel,
    heroImageAlt: 'Electrician inspecting breaker box for electrical troubleshooting in a Boca Raton, FL home',
    icon: 'HelpCircle',
    ctaText: 'Call for Electrical Troubleshooting',
    intro: 'Some electrical issues are straightforward, but many are complex, intermittent, and difficult to isolate. Unexplained breaker trips, floating neutral voltages, mystery outlets that die unexpectedly, and ghosting lights are frustrating symptoms of concealed wiring damage, improper multi-wire branch circuits, or failing utility connections. Guessing at these issues wastes time and money. Young Electric Inc delivers master-level residential electrical troubleshooting across Boca Raton. Andy and Jake Young bring over a decade of South Florida diagnostic experience, utilizing advanced thermal cameras, digital circuit analyzers, and megohmmeters to locate the exact source of your electrical malfunction.',
    benefits: [
      { title: 'Advanced Diagnostic Tools', desc: 'Calibrated Fluke multi-meters, infrared thermal imaging, and circuit tracer tone generators.', icon: 'Wrench' },
      { title: 'Master Electrician Logic', desc: 'Over a decade of diagnostic experience isolating complex ground faults and open neutrals.', icon: 'ShieldCheck' },
      { title: 'No Guesswork Guarantee', desc: 'We verify the root cause with scientific measurement before recommending component replacement.', icon: 'Zap' },
      { title: 'Upfront Flat-Rate Pricing', desc: 'Clear diagnostic fees and upfront quotes before any repair begins.', icon: 'DollarSign' },
    ],
    diagnosedProblems: [
      {
        symptom: 'Intermittent AFCI Breaker Tripping With No Clear Cause',
        likelyCause: 'Shared neutral between two separate branch circuits in an attic box, or electromagnetic interference from an older motorized appliance.',
        urgency: 'High Priority',
        whenToCall: 'Requires circuit tracing to isolate multi-wire branch circuit neutral separation.'
      },
      {
        symptom: 'Wild Voltage Fluctuations (Lights Glow Abnormally Bright or Dim)',
        likelyCause: 'Open or high-resistance neutral connection on the utility service entrance drop, splitting 240V unevenly across 120V legs.',
        urgency: 'Immediate Hazard',
        whenToCall: 'Shut off sensitive electronics immediately. Floating neutrals can send up to 180V into standard 120V appliances, frying equipment.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Homeowner Interview & Symptom Mapping',
        description: 'We listen carefully to when the fault occurs, what appliances were running, and note any recent changes or storms.'
      },
      {
        step: 2,
        title: 'Scientific Voltage & Thermal Analysis',
        description: 'We check voltage drops under load, evaluate phase balance at the main bus, and scan boxes with thermal imaging.'
      },
      {
        step: 3,
        title: 'Segment Isolation & Circuit Tracing',
        description: 'We disconnect branch sections systematically, testing continuity and insulation resistance until the exact fault location is isolated.'
      },
      {
        step: 4,
        title: 'Root-Cause Resolution & Verification',
        description: 'We perform a code-compliant permanent repair and re-test the circuit under continuous load to ensure complete stability.'
      }
    ],
    realProjects: [
      {
        title: 'Shared Neutral Arc-Fault Mystery Resolution',
        location: 'Newport Bay Club, Boca Raton, FL',
        description: 'Homeowner struggled with master bedroom AFCI breaker tripping unpredictably 3-4 times a week for 6 months despite two other contractors replacing the breaker.',
        solution: 'Andy Young used an advanced circuit tracer to uncover an improperly shared neutral connection between the master bedroom and hallway circuit inside a recessed can fixture box. Separated neutrals and verified dedicated neutral paths.',
        outcome: 'Zero nuisance trips over 12 months of follow-up; completely stable circuit.'
      }
    ],
    costFactors: [
      { factor: 'Symptom Consistency', impact: 'Consistent faults (breakers tripping immediately) are faster to diagnose than intermittent faults occurring once a week.' },
      { factor: 'Circuit Concealment', impact: 'Concealed splices inside drywall or crowded attics require specialized tracing instrumentation.' }
    ],
    costGuide: {
      serviceCallFee: '$99 diagnostic fee (applied directly to repair)',
      typicalRange: '$175 – $485 for diagnostic troubleshooting and minor repair',
      details: 'We quote all repairs upfront once the root cause is identified. You are in total control.'
    },
    permitRequirements: {
      required: false,
      jurisdiction: 'City of Boca Raton & Palm Beach County',
      details: 'Diagnostic troubleshooting and resolving loose connections or damaged splices does not require municipal building permits.'
    },
    warrantyInfo: 'All diagnostic repairs are backed by our 1-Year Workmanship Warranty.',
    sections: [
      {
        heading: 'Why You Need a Master Electrician For Elusive Electrical Faults',
        paragraphs: [
          'Electrical troubleshooting is part science, part experience. Inexperienced handymen often guess at symptoms—replacing a breaker because it trips, only to find the new breaker trips too because the root cause was an arcing staple in an attic or a rodent-chewed conductor inside an exterior wall.',
          'At Young Electric Inc, Andy and Jake Young approach every diagnostic challenge with structured engineering logic. We measure line impedance, calculate voltage drop, evaluate harmonic distortion, and test ground-fault loops. We do not stop until the exact physical root cause is proven and permanently resolved.'
        ]
      }
    ],
    faqs: [
      { q: 'How long does electrical troubleshooting usually take?', a: 'Most residential troubleshooting diagnostics are resolved within 1 to 2 hours. Our service trucks are equipped with specialized circuit locators, megohmmeters, and thermal cameras that accelerate isolation of hidden faults.' },
      { q: 'Why did my previous electrician fail to fix my tripping breaker?', a: 'Many contractors simply swap out the breaker without diagnosing what triggered the trip in the first place. If the trip was caused by an arc-fault, shared neutral, or intermittent insulation breakdown, replacing the breaker solves nothing. We find and fix the root cause.' }
    ],
    relatedServices: ['electrical-repair-boca-raton-fl', 'breaker-repair-boca-raton-fl', 'electrical-panel-service-boca-raton-fl', 'electrical-inspection-boca-raton-fl']
  }
];

export type LocationProject = {
  title: string;
  neighborhood: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export type LocationIssue = {
  title: string;
  description: string;
};

export type LocationProfile = {
  housingAge: string;
  primaryConcerns: string[];
  localGridNotes: string;
};

export type LocationPermitInfo = {
  authority: string;
  officeAddress: string;
  inspectionInfo: string;
};

export type LocationCustomerQuote = {
  quote: string;
  author: string;
  area: string;
};

export type Location = {
  slug: string;
  name: string;
  county: string;
  state: string;
  stateAbbr: string;
  tagline: string;
  description: string;
  nearbyAreas: string[];
  electricalProfile?: LocationProfile;
  commonIssues?: LocationIssue[];
  realProjects?: LocationProject[];
  permitInfo?: LocationPermitInfo;
  customerQuote?: LocationCustomerQuote;
  localFaqs?: { q: string; a: string }[];
  content?: string[];
  sections?: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
};


export const locations: Location[] = [
  {
    slug: 'boca-raton-fl',
    name: 'Boca Raton',
    county: 'Palm Beach County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Premier Residential Electrical Services in Boca Raton',
    description: 'Boca Raton is our home base. From historic mid-century homes in Old Floresta with ungrounded cloth wiring to sprawling luxury estates in Woodfield Country Club and Royal Palm Yacht Club requiring 400-amp services, our team handles all local residential electrical needs. We navigate City of Boca Raton building codes seamlessly, providing licensed, insured workmanship directly to your doorstep.',
    nearbyAreas: ['Old Floresta', 'Woodfield Country Club', 'Boca Del Mar', 'Boca Pointe', 'Mission Bay', 'West Boca Raton', 'Royal Palm Yacht & Country Club', 'The Sanctuary', 'Boca West'],
    electricalProfile: {
      housingAge: '1960s–1980s mid-century and ranch homes mixed with 1990s–2020s custom luxury estates',
      primaryConcerns: [
        'Aging Challenger & Zinsco breaker panels causing insurance 4-point inspection rejections',
        'High air conditioning loads causing subpanel overheating during South Florida summers',
        'Need for Level 2 EV charging circuits and dedicated whole-home surge protection'
      ],
      localGridNotes: 'FPL grid infrastructure with high summer lightning strike frequency, making service entrance surge suppression critical.'
    },
    commonIssues: [
      {
        title: 'Challenger & Zinsco Panel Failures',
        description: 'Many 1970s and 1980s homes in Boca Del Mar and Central Boca still house Challenger or Zinsco panels. Insurance carriers in Florida frequently require replacement before issuing or renewing policies due to known breaker trip failures.'
      },
      {
        title: 'Salt & Moisture Corrosion on Outdoor Panels',
        description: 'Homes east of Federal Highway experience accelerated corrosion on outdoor meter enclosures and disconnects from coastal sea air, creating dangerous high-resistance connections.'
      },
      {
        title: 'Overloaded Kitchen and Lanai Circuits',
        description: 'Modern luxury appliances, outdoor kitchen grills, and patio heating regularly exceed the capacity of older 15-amp circuits, causing nuisance tripping and warm receptacle faceplates.'
      }
    ],
    realProjects: [
      {
        title: 'Dual Level 2 EV Charger Installation with Smart Load Sharing',
        neighborhood: 'Woodfield Country Club',
        challenge: 'Homeowner added a second electric vehicle and needed fast overnight charging without exceeding their home 200-amp main utility service capacity.',
        solution: 'Installed two hardwired Tesla Gen 3 Wall Connectors configured with dynamic Wi-Fi power sharing on a dedicated 60-amp circuit, avoiding an expensive utility heavy-up.',
        outcome: 'Safe, simultaneous charging delivering up to 44 miles of range per hour to both vehicles with full City of Boca Raton permit sign-off.'
      },
      {
        title: '200-Amp Insurance Panel Replacement & Whole-Home SPD',
        neighborhood: 'Old Floresta',
        challenge: 'A 4-point insurance inspection flagged an original 1974 Challenger panel with busbar heat pitting, threatening policy cancellation.',
        solution: 'Replaced the old panel with a modern copper-bus Square D QO 200-amp panel, installed new dual 8-foot copper grounding rods, and added a Type 2 whole-house surge protector.',
        outcome: 'Completed within 7 hours, passed municipal inspection on first visit, and satisfied all insurance underwriting conditions.'
      },
      {
        title: 'Outdoor Patio & Pool Lanai GFCI Weatherproofing',
        neighborhood: 'Boca Del Mar',
        challenge: 'Intermittent circuit breaker trips during rainstorms were cutting power to the patio ceiling fans and refrigerator.',
        solution: 'Traced the fault to deteriorated non-weatherproof outlet boxes. Replaced with NEMA 3R wet-location boxes, extra-duty in-use bubble covers, and weather-resistant GFCI receptacles.',
        outcome: 'Completely eliminated storm-related tripping and restored safe power throughout the outdoor living space.'
      }
    ],
    permitInfo: {
      authority: 'City of Boca Raton Building & Code Enforcement Division',
      officeAddress: '200 NW 2nd Ave, Boca Raton, FL 33432',
      inspectionInfo: 'Permits are required for panel upgrades, EV chargers, and new branch circuits. Young Electric handles permit drafting, filing, and the final inspector walkthrough.'
    },
    localFaqs: [
      {
        q: 'Do I need a City of Boca Raton permit for an EV charger or panel upgrade?',
        a: 'Yes. The City of Boca Raton requires an electrical permit for panel replacements, Level 2 EV charging circuits, and subpanel installations. Young Electric manages the entire permit process from initial engineering load calculations to scheduling and passing the city inspection.'
      },
      {
        q: 'Why are insurance companies in Boca Raton requiring panel replacements?',
        a: 'Florida insurance carriers heavily scrutinize 4-point inspections on homes over 20 years old. Obsolete panels like Challenger, Zinsco, and Federal Pacific have documented failure rates where breakers do not trip during short circuits, posing severe fire hazards. Replacing them with a modern 200A panel restores insurance eligibility.'
      },
      {
        q: 'How fast can an electrician arrive at my Boca Raton residence?',
        a: 'Because our shop and master electricians are based in Boca Raton, we offer rapid same-day dispatch for electrical emergencies, power loss, and sparking fixtures, as well as scheduled appointments for installations.'
      },
      {
        q: 'Can you install outdoor lighting and fans in covered patios and lanais?',
        a: 'Yes. We specialize in wet- and damp-rated ceiling fan installations, recessed LED high-hats, and outdoor GFCI convenience circuits built specifically to withstand Florida humidity and heavy rain.'
      }
    ],
    customerQuote: {
      author: 'Marc Rosen',
      area: 'Boca Raton',
      quote: 'Just had all LED high hats and kitchen counter lights installed as well as landscape lighting. Jake was terrific for both jobs. Precise on measurements and a true gentleman. Highly recommend Young Electric!'
    }
  },
  {
    slug: 'delray-beach-fl',
    name: 'Delray Beach',
    county: 'Palm Beach County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Expert Residential Electricians Serving Delray Beach Neighborhoods',
    description: 'Delray Beach features a distinctive mix of historic mid-century cottages near Pineapple Grove and Lake Ida, coastal waterfront residences along the Intracoastal, and active adult communities like Kings Point. Each neighborhood presents unique electrical considerations—from ungrounded 2-prong circuits to marine corrosion. Young Electric provides dependable, licensed electrical services tailored specifically to Delray Beach homes.',
    nearbyAreas: ['Pineapple Grove', 'Lake Ida', 'Tropic Isle', 'Kings Point', 'Marina Historic District', 'Sherwood Park', 'Seagate', 'Delaire Country Club'],
    electricalProfile: {
      housingAge: '1950s–1970s historic cottages and ranch homes alongside modern luxury rebuilds',
      primaryConcerns: [
        'Cloth-jacketed Romex wiring and lack of equipment grounding in vintage cottages',
        'Salt air corrosion on exterior meter sockets and disconnects along the Intracoastal',
        'Aging electrical panels unable to support high-efficiency modern HVAC systems'
      ],
      localGridNotes: 'Coastal grid exposure with frequent seasonal outages during tropical storms and afternoon squalls.'
    },
    commonIssues: [
      {
        title: 'Ungrounded Outlets in Historic Lake Ida & Pineapple Grove',
        description: 'Many homes built prior to 1968 lack third-prong equipment grounds. Plugging modern 3-prong electronics into ungrounded receptacles creates shock hazards and equipment vulnerability.'
      },
      {
        title: 'Severe Salt-Air Oxidation in Tropic Isle & Seagate',
        description: 'Waterfront properties experience rapid galvanic corrosion on exterior circuit breaker enclosures, causing breaker binding and dangerous localized overheating.'
      },
      {
        title: 'Overloaded Branch Circuits in Kings Point Condos',
        description: 'Older multi-family units frequently experience recurring breaker trips when running modern appliances alongside space cooling or medical equipment.'
      }
    ],
    realProjects: [
      {
        title: 'Complete Kitchen & Living Room Rewiring with AFCI Protection',
        neighborhood: 'Lake Ida',
        challenge: 'A 1962 home renovation revealed brittle cloth wiring, multiple open-splice junction boxes hidden behind drywall, and no grounded outlets.',
        solution: 'Rewired all kitchen and living circuits using modern copper Romex, installed dedicated circuits for the dishwasher and microwave, and added dual-function AFCI/GFCI breakers.',
        outcome: 'Brought the entire renovation to 2024 Florida Building Code compliance and provided safe, grounded power throughout the home.'
      },
      {
        title: 'Marine-Grade Exterior Disconnect & Dock Lighting Circuit',
        neighborhood: 'Tropic Isle',
        challenge: 'Corroded outdoor breaker box had rusted shut, causing intermittent power failure to the dock lift and patio safety lights.',
        solution: 'Replaced the rusted enclosure with a stainless-steel NEMA 4X weather-sealed disconnect, installed GFCI protection, and re-pulled THHN wire in PVC schedule 80 conduit.',
        outcome: 'Weatherproofed the marine electrical feed against salt air and passed final city electrical inspection.'
      },
      {
        title: 'Emergency Breaker Replacement & Diagnostic',
        neighborhood: 'Kings Point',
        challenge: 'Homeowner noticed a buzzing sound and burning plastic smell emanating from their main breaker panel.',
        solution: 'Arrived within 45 minutes, safely de-energized the circuit, diagnosed a charred 50A main breaker connection, and installed a certified OEM replacement with torqued terminations.',
        outcome: 'Prevented an electrical fire and restored safe air conditioning and refrigeration power that same afternoon.'
      }
    ],
    permitInfo: {
      authority: 'City of Delray Beach Building Department',
      officeAddress: '100 NW 1st Ave, Delray Beach, FL 33444',
      inspectionInfo: 'Delray Beach enforces Florida Building Code (8th Edition) and NEC 2020. Permits are required for service changes, subpanels, and EV charging stations.'
    },
    localFaqs: [
      {
        q: 'Can you safely upgrade ungrounded 2-prong outlets in older Delray Beach homes?',
        a: 'Yes. Where pulling new ground wires through finished plaster walls is impractical, the NEC allows the installation of GFCI-protected receptacles labeled "No Equipment Ground." This provides human shock protection for modern 3-prong appliances without costly wall demolition.'
      },
      {
        q: 'Do you pull electrical permits with the City of Delray Beach?',
        a: 'Yes. Young Electric handles all permit documentation, load calculations, and inspection appointments with the Delray Beach Building Department on NW 1st Ave.'
      },
      {
        q: 'How do you protect Delray Beach coastal homes from salt air damage?',
        a: 'We use corrosion-resistant NEMA 3R or stainless NEMA 4X outdoor enclosures, schedule 80 PVC conduits, weather-resistant (WR) rated receptacles, and dielectric grease on connections to prevent oxidation.'
      },
      {
        q: 'Do you work in 55+ communities like Kings Point?',
        a: 'Yes, we regularly perform panel tune-ups, ceiling fan replacements, outlet upgrades, and lighting modernizations for residents in Kings Point and surrounding communities.'
      }
    ],
    customerQuote: {
      author: 'Barbara Fuchs',
      area: 'Delray Beach Area',
      quote: 'We have used Young Electric exclusively for years! Starting with Andy and now Jake. They are extremely professional, punctual, knowledgeable, and neat. Very fair pricing and safe work.'
    }
  },
  {
    slug: 'deerfield-beach-fl',
    name: 'Deerfield Beach',
    county: 'Broward County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Reliable Electrical Contractors Serving Deerfield Beach, FL',
    description: 'Located directly south of Boca Raton across the Hillsboro Canal, Deerfield Beach encompasses coastal neighborhoods like The Cove and large residential communities like Century Village. High ambient humidity, ocean salt spray, and aging electrical infrastructure in older subdivisions make expert electrical troubleshooting vital. Young Electric brings over 10 years of South Florida experience to every Deerfield Beach service call.',
    nearbyAreas: ['The Cove', 'Century Village', 'Deerfield Island', 'Waterways', 'Crystal Lake', 'Riverview', 'Stowe Mountain'],
    electricalProfile: {
      housingAge: '1960s–1980s waterfront and inland homes alongside 55+ multi-unit buildings',
      primaryConcerns: [
        'Salt air rust on outdoor meter bases and breaker panels in The Cove',
        'Obsolete Zinsco and Federal Pacific panels in Century Village residences',
        'Underground feeder deterioration caused by sandy coastal soil and high water tables'
      ],
      localGridNotes: 'Broward County electrical grid segment prone to lightning surges from western thunderstorm corridors.'
    },
    commonIssues: [
      {
        title: 'Exterior Service Mast & Meter Corrosion',
        description: 'In coastal neighborhoods like The Cove, the exterior electrical service entrance is battered by ocean breezes, rusting galvanized conduits and compromising the ground rod connection.'
      },
      {
        title: 'Federal Pacific & Zinsco Panels in Century Village',
        description: 'Original breaker boxes installed during early community construction frequently fail 4-point inspections and pose fire hazards due to unseated breakers and non-tripping busbars.'
      },
      {
        title: 'GFCI Ground Fault Failures from Humidity',
        description: 'Bathrooms, exterior outlets, and garage receptacles frequently trip prematurely due to salt-air moisture buildup inside junction boxes.'
      }
    ],
    realProjects: [
      {
        title: 'Exterior 200A Service Mast & Meter Enclosure Replacement',
        neighborhood: 'The Cove',
        challenge: 'A corroded galvanized service mast had begun leaning during storm gusts, causing water to track down the conduit directly into the interior panel.',
        solution: 'Coordinated an emergency power disconnect with FPL, replaced the mast with heavy-duty aluminum conduit, installed a new meter base with weatherhead, and resealed the roof flashing.',
        outcome: 'Restored rock-solid, watertight utility service and passed Broward County municipal inspection.'
      },
      {
        title: 'Panel Modernization & Multi-Room Safety Upgrade',
        neighborhood: 'Century Village',
        challenge: 'Resident had an outdated breaker box that failed to reset after an afternoon surge, cutting power to bedroom lighting and medical equipment.',
        solution: 'Installed a modern Eaton 125-amp panel, replaced all branch breakers with combination AFCI/GFCI breakers, and tested every branch circuit for correct polarity.',
        outcome: 'Delivered whisper-quiet, code-compliant electrical distribution and gave the homeowner total peace of mind.'
      },
      {
        title: 'Level 2 48A EV Charger Installation with Conduit Run',
        neighborhood: 'Crystal Lake',
        challenge: 'Homeowner needed a charging station in their detached garage stall, requiring a 65-foot circuit run from the opposite side of the home.',
        solution: 'Engineered a clean overhead conduit path through the attic and garage rafters, installed a 60-amp dedicated breaker, and hardwired a ChargePoint Home Flex charger.',
        outcome: 'Fast Level 2 charging delivering up to 37 miles per hour of charge time, fully permitted and verified.'
      }
    ],
    permitInfo: {
      authority: 'City of Deerfield Beach Building Division',
      officeAddress: '150 NE 2nd Ave, Deerfield Beach, FL 33441',
      inspectionInfo: 'Requires Broward County uniform building permit applications for service changes, generator transfers, and new electrical equipment.'
    },
    localFaqs: [
      {
        q: 'Do you service condos in Century Village Deerfield Beach?',
        a: 'Yes. We are very familiar with the electrical layouts, association guidelines, and panel changeout requirements in Century Village. We ensure all work meets city code and building management standards.'
      },
      {
        q: 'How does salt spray affect my outdoor electrical panel in The Cove?',
        a: 'Salt spray deposits airborne sodium chloride onto metal surfaces. Over time, this corrodes copper terminals and steel enclosures, leading to voltage drops, flickering lights, and potential arcing. We install weather-resistant NEMA 3R enclosures with anti-oxidant compound on all terminations.'
      },
      {
        q: 'Are your electricians licensed to work in Broward County?',
        a: 'Yes. Young Electric Inc is a Florida State Certified Electrical Contractor licensed to pull permits and perform work throughout both Palm Beach and Broward Counties.'
      },
      {
        q: 'Can you install a whole-house surge protector in Deerfield Beach?',
        a: 'Yes. We install Type 2 surge protective devices directly inside your main electrical panel to safeguard expensive A/C compressors, TVs, and smart appliances from Florida lightning spikes.'
      }
    ],
    customerQuote: {
      author: 'Contessa',
      area: 'Deerfield Beach Area',
      quote: 'Jake from Young Electric took care of a long list of electrical updates for some renovations. He was on time, friendly, and neat with his work. Provided great recommendations. Highly recommend!'
    }
  },
  {
    slug: 'coral-springs-fl',
    name: 'Coral Springs',
    county: 'Broward County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Trusted Residential Electrical Specialists in Coral Springs, FL',
    description: 'Coral Springs is known for its master-planned neighborhoods, lush parks, and spacious family homes built largely between 1975 and 1995. Properties in communities like Eagle Trace, Cypress Run, and Maplewood are now entering the phase where electrical modernization is critical. From remediating aging aluminum wiring to upgrading obsolete panels and installing modern EV charging infrastructure, Young Electric delivers skilled craftsmanship.',
    nearbyAreas: ['Eagle Trace', 'Heron Bay South', 'Cypress Run', 'Maplewood', 'Kensington', 'Pine Tree Estates', 'Whispering Woods', 'Ramblewood'],
    electricalProfile: {
      housingAge: '1970s–1990s single-family homes with large floor plans and private pools',
      primaryConcerns: [
        'Aging Challenger and Federal Pacific breaker panels needing replacement for insurance renewals',
        'Aluminum branch wiring in late 1960s/1970s builds requiring COPALUM or AlumiConn remediation',
        'High electrical loads from pool heat pumps, dual A/C units, and modern appliances'
      ],
      localGridNotes: 'Western Broward grid subject to severe summer thunderstorm activity and afternoon utility power flickers.'
    },
    commonIssues: [
      {
        title: 'Challenger Electrical Panels Failing Underwriters Standards',
        description: 'Challenger panels were widely installed in Coral Springs throughout the 1980s. Florida homeowners insurance companies now routinely mandate their replacement due to breaker failure rates.'
      },
      {
        title: 'Aluminum Wiring Connections Overheating',
        description: 'Homes built in the 1970s often feature aluminum branch wiring. Over time, thermal expansion causes wire terminations at outlets and switches to loosen, creating arcing risks.'
      },
      {
        title: 'Pool Equipment & Heat Pump Subpanel Overloads',
        description: 'Upgrading to modern variable-speed pool pumps and electric heat pumps frequently overloads original 60A pool subpanels, leading to frequent thermal trips.'
      }
    ],
    realProjects: [
      {
        title: 'Whole-Home Aluminum Wiring Remediation with AlumiConn',
        neighborhood: 'Cypress Run',
        challenge: 'Homebuyer needed to satisfy an insurance contingency requiring certified remediation of aluminum branch circuit connections before closing.',
        solution: 'Trained technicians fitted every switch, receptacle, and light fixture box throughout the 2,400 sq. ft. home with torque-calibrated AlumiConn connectors, pigtailed to copper conductors.',
        outcome: 'Provided certified engineering documentation satisfying the insurer, passing underwriting without policy surcharges.'
      },
      {
        title: '200A Main Panel Replacement with Whole-House SPD',
        neighborhood: 'Maplewood',
        challenge: 'An obsolete Challenger panel had developed melted breaker casing along the 50-amp range circuit.',
        solution: 'Replaced the panel with a modern Square D QO 200A panel, added dual ground rods, installed an integrated Type 2 surge protector, and neatly relabeled every circuit.',
        outcome: 'Completed and inspected in a single day, eliminating fire risk and restoring dependable power distribution.'
      },
      {
        title: 'Dedicated Pool Heat Pump Subpanel & Timer Installation',
        neighborhood: 'Eagle Trace',
        challenge: 'New 140,000 BTU pool heat pump was repeatedly tripping the main house breaker whenever the central air conditioning kicked on.',
        solution: 'Installed a dedicated 100A outdoor subpanel with heavy-gauge copper feeders, an automated digital timer, and proper GFCI disconnect protection.',
        outcome: 'Enabled simultaneous operation of pool heating and dual home A/C systems with balanced electrical phases.'
      }
    ],
    permitInfo: {
      authority: 'City of Coral Springs Building Department',
      officeAddress: '9500 W Sample Rd, Coral Springs, FL 33065',
      inspectionInfo: 'Coral Springs maintains strict inspection standards for electrical load calculations, grounding electrode resistance, and AFCI breaker installations.'
    },
    localFaqs: [
      {
        q: 'Does Coral Springs require permits for electrical panel changeouts?',
        a: 'Yes. The City of Coral Springs requires an electrical permit and plan review for all service changes and panel replacements. Young Electric handles all paperwork and represents you during the city inspector walkthrough.'
      },
      {
        q: 'How do you fix aluminum wiring in Coral Springs homes?',
        a: 'We use AlumiConn connectors—the CPSC-approved method for aluminum-to-copper pigtailing. Each terminal is coated with anti-oxidant paste and torqued to exact inch-pound specifications, preventing loose connections and overheating.'
      },
      {
        q: 'Why did my Coral Springs homeowners insurance demand a panel replacement?',
        a: 'Most 1980s Coral Springs homes had Challenger panels installed. Insurance underwriters have identified that Challenger breakers often fail to trip during overcurrent events. Installing a new 200A panel satisfies all 4-point inspection criteria.'
      },
      {
        q: 'Can you install a Level 2 EV charger in my Coral Springs garage?',
        a: 'Yes. We install both hardwired chargers (Tesla Wall Connector, ChargePoint) and NEMA 14-50 240V outlets, calculating your panel capacity to ensure safe, efficient overnight charging.'
      }
    ],
    customerQuote: {
      author: 'Debra Hill',
      area: 'Coral Springs Area',
      quote: 'I have hired Young Electric for probably around 10 years for my electrical needs. Andy and his son Jake explain why something is not working, how they will fix it, keep their word, and charge reasonably.'
    }
  },
  {
    slug: 'parkland-fl',
    name: 'Parkland',
    county: 'Broward County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'High-Capacity Luxury Electrical Solutions for Parkland Estates',
    description: 'Parkland is renowned for its expansive equestrian properties, gated golf communities, and newer luxury developments such as Parkland Golf & Country Club, Heron Bay, MiraLago, and Watercrest. These large-scale homes have substantial power requirements—often requiring 300A to 400A services, dual EV chargers, whole-house standby generator interlocks, and extensive outdoor architectural lighting. Young Electric delivers premium, code-exceeding electrical craftsmanship for Parkland homeowners.',
    nearbyAreas: ['Heron Bay', 'Pine Tree Estates', 'Parkland Golf & Country Club', 'Watercrest', 'MiraLago', 'Parkland Reserve', 'Fox Ridge', 'Tall Pines'],
    electricalProfile: {
      housingAge: 'Late 1990s through 2020s modern custom luxury estates and sprawling ranch acreage',
      primaryConcerns: [
        'High continuous electrical loads from multiple HVAC zones, pool automation, and EV charging',
        'Severe vulnerability to summer thunderstorm grid interruptions requiring generator readiness',
        'Strict HOA guidelines regarding exterior conduit routing, meter locations, and lighting color temperature'
      ],
      localGridNotes: 'Frequent summer lightning storms create high-voltage surges that destroy delicate smart home automation boards.'
    },
    commonIssues: [
      {
        title: 'Service Capacity Bottlenecks with Multiple EVs',
        description: 'Charging two electric vehicles simultaneously while multiple 5-ton A/C units and pool heaters run can push a standard 200A service beyond its 80% continuous operating threshold.'
      },
      {
        title: 'Power Outages During Hurricane & Storm Season',
        description: 'Parkland homes frequently lose utility power during major storm fronts. Without a manual interlock or automatic transfer switch, running essential circuits requires risky extension cords.'
      },
      {
        title: 'Smart Home Automation & Lighting Board Failures',
        description: 'Whole-house Lutron, Control4, and smart lighting systems are extremely sensitive to Florida lightning strikes and require specialized secondary surge suppression.'
      }
    ],
    realProjects: [
      {
        title: 'Dual 48A Tesla Wall Connectors with Power Sharing',
        neighborhood: 'Heron Bay',
        challenge: 'Homeowner needed to charge a Model X and Model S simultaneously in a finished 3-car garage without tripping the main 200A house panel.',
        solution: 'Installed two Tesla Gen 3 Wall Connectors linked via wireless dynamic power-sharing on a dedicated 60A circuit, running concealed wiring through the attic.',
        outcome: 'Both cars charge seamlessly at maximum available capacity without overloading the home electrical service, with complete HOA and city sign-off.'
      },
      {
        title: 'Whole-House Generator Interlock & 50A Inlet Box',
        neighborhood: 'Parkland Golf & Country Club',
        challenge: 'Homeowner wanted storm-resilient backup power for refrigeration, Wi-Fi, and a primary bedroom A/C unit without the $15,000+ cost of an automatic standby generator.',
        solution: 'Installed a custom mechanical generator interlock kit on the main electrical panel, wired a 50A exterior generator power inlet box, and installed a dedicated surge protector.',
        outcome: 'Safe, code-compliant portable generator integration allowing the homeowner to power selected circuits during utility blackouts.'
      },
      {
        title: 'Architectural LED Landscape & Patio Lighting System',
        neighborhood: 'Pine Tree Estates',
        challenge: 'Acreage estate required low-glare perimeter illumination, pathway lighting, and tree uplighting that could be managed via smartphone automation.',
        solution: 'Engineered a multi-zone low-voltage LED system with commercial-grade stainless steel transformers, astronomical timers, and weather-sealed buried connectors.',
        outcome: 'Stunning night-time curb appeal, enhanced estate security, and ultra-low energy consumption.'
      }
    ],
    permitInfo: {
      authority: 'City of Parkland Building Division',
      officeAddress: '6600 University Dr, Parkland, FL 33067',
      inspectionInfo: 'Permits are mandatory for EV charger circuits, generator transfer switches, and panel upgrades. Young Electric coordinates all inspections and HOA compliance documentation.'
    },
    localFaqs: [
      {
        q: 'Can my Parkland home handle two Level 2 EV chargers?',
        a: 'Yes. With smart load-sharing chargers (such as Tesla Wall Connectors), both vehicles share a single 60A circuit dynamically. Alternatively, if your electrical panel has sufficient spare amperage, we can run two dedicated circuits after conducting a NEC load calculation.'
      },
      {
        q: 'What is a generator interlock kit and why is it popular in Parkland?',
        a: 'A generator interlock is an engineered mechanical bracket installed on your breaker panel that prevents utility power and generator power from being energized at the same time. It allows you to power any circuit in your home directly from a portable generator safely, legally, and affordably.'
      },
      {
        q: 'How do you hide electrical conduits on luxury Parkland homes?',
        a: 'We prioritize attic routing, crawlspaces, and behind-wall drops so that conduits are invisible. When exterior surface conduit is unavoidable, we use neat EMT conduit painted to match your exterior stucco perfectly per HOA guidelines.'
      },
      {
        q: 'Do you offer surge protection for high-end smart home systems?',
        a: 'Yes. We install commercial-grade Type 2 surge protectors at the main panel and subpanels to protect smart home automation hubs, security systems, and high-end appliances from lightning spikes.'
      }
    ],
    customerQuote: {
      author: 'Gabe R.',
      area: 'Parkland Area',
      quote: 'I had an incredible experience with Young Electric! Prompt, professional, and highly skilled. They first set up a Level 2 Tesla charger and later a generator outlet. My go-to company for anything electrical.'
    }
  },
  {
    slug: 'pompano-beach-fl',
    name: 'Pompano Beach',
    county: 'Broward County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Coastal & Residential Electrical Experts in Pompano Beach, FL',
    description: 'Pompano Beach is experiencing rapid revitalization alongside its historic beachside and waterfront communities. From coastal cottages in Hillsboro Shores and canal-front properties with boat lifts in Garden Isles to established inland neighborhoods like Palm Aire, electrical demands are uniquely influenced by South Florida coastal conditions. Young Electric provides code-compliant, weather-resilient residential electrical services throughout Pompano Beach.',
    nearbyAreas: ['Hillsboro Shores', 'Pompano Beach Highlands', 'Palm Aire', 'Cypress Lakes', 'Collier City', 'Garden Isles', 'Harbor Village', 'Leisureville'],
    electricalProfile: {
      housingAge: '1950s–1970s coastal cottages, waterfront canal homes, and mid-century condos',
      primaryConcerns: [
        'Intense salt air exposure corroding outdoor electrical disconnects and meter cans',
        'Aging split-bus and fuse-style panels failing current property insurance standards',
        'Outdoor dock wiring, boat lift motors, and submerged ground fault hazards'
      ],
      localGridNotes: 'Coastal barrier island and canal grid sectors vulnerable to hurricane storm surges and lightning fluctuations.'
    },
    commonIssues: [
      {
        title: 'Salt Spray Corrosion on Outdoor Meter Sockets',
        description: 'Properties east of the Intracoastal face constant exposure to salt air, which eats away at galvanized steel boxes and oxidizes copper ground connections.'
      },
      {
        title: 'Obsolete 100A Split-Bus Panels in Older Condos & Homes',
        description: 'Older Pompano residences frequently feature 100A split-bus panels lacking a single main disconnect, creating safety hazards and failing 4-point inspections.'
      },
      {
        title: 'Deteriorated Dock & Patio Electrical Circuits',
        description: 'Exterior circuits feeding boat lifts, dock outlets, and patio refrigeration often suffer water intrusion, tripping master GFCI breakers.'
      }
    ],
    realProjects: [
      {
        title: 'Marine-Grade 200A Service & Disconnect Replacement',
        neighborhood: 'Hillsboro Shores',
        challenge: 'A beachside home experienced intermittent power loss due to severe salt corrosion that had eaten through the exterior meter socket lugs.',
        solution: 'Coordinated an FPL service drop disconnect, installed a NEMA 3R powder-coated stainless steel meter enclosure, and replaced the interior main panel with arc-fault protection.',
        outcome: 'Eliminated hazardous voltage fluctuations and restored safe, storm-ready power to the residence.'
      },
      {
        title: '100A to 200A Panel Upgrade for Central A/C Addition',
        neighborhood: 'Palm Aire',
        challenge: 'Homeowner upgrading from window units to high-efficiency central air conditioning needed to double their electrical service capacity.',
        solution: 'Installed a new 200A Siemens electrical panel, upgraded entrance conductors, installed dual 8-foot ground rods, and balanced circuit loads.',
        outcome: 'Passed Pompano Beach city inspection on the first review, enabling prompt A/C installation.'
      },
      {
        title: 'Canal Dock GFCI Circuit Re-Wiring & Waterproofing',
        neighborhood: 'Garden Isles',
        challenge: 'Recurring breaker trips prevented the boat lift from operating reliably during weekend boating outings.',
        solution: 'Replaced degraded underground wiring with THWN-2 conductors in Schedule 80 PVC conduit, installed an in-use extra-duty waterproof box, and added a dedicated marine GFCI.',
        outcome: 'Provided robust, moisture-resistant power with smooth boat lift operation.'
      }
    ],
    permitInfo: {
      authority: 'City of Pompano Beach Building Department',
      officeAddress: '100 W Atlantic Blvd, Pompano Beach, FL 33060',
      inspectionInfo: 'Permits are required for all service upgrades, panel replacements, EV chargers, and exterior dock wiring. Young Electric manages all filings and inspections.'
    },
    localFaqs: [
      {
        q: 'Do you wire boat lifts and dock power in Pompano Beach?',
        a: 'Yes. We install and repair dedicated circuits for boat lifts, dock pedestals, and marine lighting using waterproof schedule 80 PVC conduit and GFCI protection compliant with NEC Article 555.'
      },
      {
        q: 'How do you prevent outdoor electrical panels from rusting in Pompano Beach?',
        a: 'We use premium NEMA 3R weather-rated enclosures, stainless steel hardware, and anti-oxidant coating on aluminum and copper terminals to resist coastal salt spray.'
      },
      {
        q: 'Can you replace an outdated 100-amp panel with a 200-amp panel in Pompano Beach?',
        a: 'Yes. We specialize in 200-amp service upgrades, coordinating the permit with the City of Pompano Beach and the meter pull with FPL so the work is completed in a single day.'
      },
      {
        q: 'Are your electricians licensed for condo electrical repairs in Palm Aire?',
        a: 'Yes. We are fully licensed and carry $2,000,000 in general liability plus workers’ compensation insurance, meeting all condo association requirements.'
      }
    ],
    customerQuote: {
      author: 'Michael R Rigolizzo',
      area: 'Pompano Beach Area',
      quote: 'Jake, Andy’s son and coworker, was prompt, courteous, and very efficient. Installed our new ceiling fan and briefed us on the remote. Glad we found Young Electric!'
    }
  },
  {
    slug: 'coconut-creek-fl',
    name: 'Coconut Creek',
    county: 'Broward County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Professional Residential Electrical Services in Coconut Creek, FL',
    description: 'Coconut Creek, the "Butterfly Capital of the World," is home to mature active adult communities like Wynmoor alongside modern family subdivisions in Winston Park, Regency Lakes, and Centura Park. Whether modernizing aging electrical circuits and ceiling fans in a classic condo or outfitting a single-family home with a high-speed Level 2 EV charging station, Young Electric delivers transparent, family-owned electrical services.',
    nearbyAreas: ['Wynmoor', 'The Township', 'Monterey Lakes', 'Centura Park', 'Winston Park', 'Regency Lakes', 'Lyons Creek'],
    electricalProfile: {
      housingAge: '1970s–1980s active adult condominiums mixed with 1990s–2010s suburban family communities',
      primaryConcerns: [
        'Aging breakers, non-fan-rated ceiling boxes, and ungrounded circuits in Wynmoor units',
        'Need for dedicated Level 2 EV charger circuits in Winston Park and Regency Lakes garages',
        'Overheated outdoor A/C disconnects during summer heat waves'
      ],
      localGridNotes: 'Northern Broward grid sector requiring whole-house surge suppression against frequent lightning transients.'
    },
    commonIssues: [
      {
        title: 'Non-Fan-Rated Ceiling Boxes in Wynmoor',
        description: 'Many older condo units have plastic or non-structural light fixture boxes. Hanging heavy modern ceiling fans without installing steel fan-rated spreader bars poses serious falling hazards.'
      },
      {
        title: 'Weak Breaker Spring Tension in 1980s Panels',
        description: 'Breakers over 30 years old lose internal tension, causing nuisance tripping or failing to trip during dangerous overloads.'
      },
      {
        title: 'Lack of Dedicated EV Charging in Garages',
        description: 'Standard 120V convenience outlets in Winston Park garages only add 3-4 miles of charge per hour, requiring a dedicated 240V 50A circuit upgrade.'
      }
    ],
    realProjects: [
      {
        title: 'Fan-Rated Steel Ceiling Box Retrofit & Fan Installation',
        neighborhood: 'Wynmoor',
        challenge: 'Resident wanted to replace two wobbly, noisy 1980s ceiling fans in their living and bedroom areas.',
        solution: 'Safely removed the obsolete plastic fixture boxes, installed UL-listed expandable steel fan-rated braces rated for 70 lbs, hung new quiet DC-motor fans, and programmed wall-mounted remotes.',
        outcome: 'Rock-solid, vibration-free fan operation delivering improved air circulation and lower cooling costs.'
      },
      {
        title: 'Dedicated 50A EV Charging Outlet (NEMA 14-50) Installation',
        neighborhood: 'Winston Park',
        challenge: 'Homeowner purchased an electric SUV and needed a reliable 240V charging outlet in their 2-car garage.',
        solution: 'Installed a dedicated 50-amp two-pole breaker in the main panel, routed 6/3 Romex through attic conduit, and mounted an industrial-grade Bryant NEMA 14-50 receptacle.',
        outcome: 'Safe overnight Level 2 charging delivering a full battery every morning.'
      },
      {
        title: 'Kitchen GFCI Receptacle Upgrades & Circuit Troubleshooting',
        neighborhood: 'The Township',
        challenge: 'Outlets along the kitchen countertop were sparking intermittently when plugging in a coffee maker and toaster.',
        solution: 'Traced the fault to backstabbed connections that had loosened over time. Replaced with 20A commercial-grade tamper-resistant GFCI receptacles with screw-clamp terminals.',
        outcome: 'Eliminated sparking, restored safe kitchen power, and met modern National Electrical Code standards.'
      }
    ],
    permitInfo: {
      authority: 'City of Coconut Creek Sustainable Development Department',
      officeAddress: '4800 W Copans Rd, Coconut Creek, FL 33063',
      inspectionInfo: 'Permits are required for panel upgrades, EV chargers, and new circuits. Young Electric handles all city filings and condo association paperwork.'
    },
    localFaqs: [
      {
        q: 'Do you work inside Wynmoor condos in Coconut Creek?',
        a: 'Yes! We have performed dozens of electrical repairs and installations in Wynmoor. We carry the required licensing, insurance, and worker’s comp certificates to satisfy Wynmoor association requirements.'
      },
      {
        q: 'Can any ceiling box support a ceiling fan?',
        a: 'No. Standard light fixture boxes are only rated for 35 lbs of static weight and cannot handle dynamic fan vibration. We always verify or install a UL-listed fan-rated steel box to ensure safety.'
      },
      {
        q: 'How much does it cost to install an EV charger in Coconut Creek?',
        a: 'Typical Level 2 EV charger installations in Coconut Creek range between $750 and $1,400 depending on panel distance, conduit run, and whether a hardwired or NEMA 14-50 setup is chosen.'
      },
      {
        q: 'Are you available for emergency electrical calls in Coconut Creek?',
        a: 'Yes. We offer fast-response emergency service for power outages, burning electrical smells, and sparking breakers throughout Coconut Creek.'
      }
    ],
    customerQuote: {
      author: 'Katt',
      area: 'Coconut Creek Area',
      quote: 'New to Florida and was looking for an electrician to replace a light and switch. Neighbor recommended Young Electric. Jake was prompt, professional, and friendly. Definitely recommend!'
    }
  },
  {
    slug: 'boynton-beach-fl',
    name: 'Boynton Beach',
    county: 'Palm Beach County',
    state: 'Florida',
    stateAbbr: 'FL',
    tagline: 'Trusted Home Electrical Repair & Upgrades in Boynton Beach, FL',
    description: 'Boynton Beach is a thriving community encompassing premier active adult neighborhoods such as Valencia Lakes and Valencia Reserve, family developments along the Lyons Road corridor like Canyon Isles, and established golf communities like Aberdeen and Hunters Run. Homeowners in Boynton Beach rely on Young Electric for transparent pricing, meticulous attention to code, and prompt local service from a father-and-son team.',
    nearbyAreas: ['Canyon Isles', 'Canyon Lakes', 'Valencia Lakes', 'Valencia Reserve', 'Aberdeen', 'Hunters Run', 'Quail Ridge', 'Leisureville'],
    electricalProfile: {
      housingAge: '1970s–1980s golf communities alongside 2000s–2020s modern master-planned developments',
      primaryConcerns: [
        'Summer thunderstorm surge events damaging air conditioners and home electronics',
        'Aging breaker panels and subpanels in Aberdeen and Hunters Run needing upgrades',
        'High demand for Level 2 EV charging in newer western Boynton developments'
      ],
      localGridNotes: 'Western Palm Beach County grid corridor subject to high lightning strike rates during June–September convective storms.'
    },
    commonIssues: [
      {
        title: 'Severe Lightning Surges Destroying Smart Inverter A/Cs',
        description: 'Frequent lightning activity along the Turnpike corridor in Boynton Beach sends voltage spikes through utility lines, destroying expensive inverter boards on modern HVAC systems.'
      },
      {
        title: 'Outdated GFCI & Smoke Detector Compliance',
        description: 'Homes over 15 years old often feature expired smoke detectors (which have a 10-year lifespan) and ungrounded or non-functioning GFCI outlets.'
      },
      {
        title: 'EV Charger Installation in Canyon Communities',
        description: 'High EV adoption in Canyon Isles and Canyon Lakes requires dedicated 50A or 60A circuits routed through spacious garages and multi-story attic cavities.'
      }
    ],
    realProjects: [
      {
        title: 'Whole-Home Surge Protection & LED Recessed Lighting',
        neighborhood: 'Valencia Lakes',
        challenge: 'Homeowner lost a smart refrigerator and microwave control board during an afternoon thunderstorm and wanted whole-home electrical defense.',
        solution: 'Installed a Type 2 Square D surge protector directly at the main breaker box and retrofitted 18 outdated incandescent can lights with energy-saving dimmable LED high hats.',
        outcome: 'Protected all home electronics with a manufacturer equipment warranty and cut lighting electricity draw by 80%.'
      },
      {
        title: 'Level 2 EV Charger Installation with Attic Conduit Drop',
        neighborhood: 'Canyon Isles',
        challenge: 'Main electrical panel was located on the exterior opposite wall from the garage charging stall in a two-story home.',
        solution: 'Ran #6 THHN copper conductors in heavy-duty conduit through the attic space, installed a 60A breaker, and hardwired a Wallbox Pulsar Plus charger.',
        outcome: 'Flawless aesthetic installation with zero visible exterior conduit and full City of Boynton Beach permit sign-off.'
      },
      {
        title: '200A Electrical Panel Upgrade & Ground Rod Modernization',
        neighborhood: 'Aberdeen Golf & Country Club',
        challenge: 'A 4-point inspection revealed an original 1984 panel with pitted busbars and missing grounding electrodes, delaying a home sale.',
        solution: 'Replaced the panel with a modern 200A copper-bus panel, drove two 8-foot copper-bonded grounding rods, and issued a certified completion report.',
        outcome: 'Passed inspection within 24 hours, satisfying the buyer’s insurance carrier and keeping the closing on schedule.'
      }
    ],
    permitInfo: {
      authority: 'City of Boynton Beach Building Division',
      officeAddress: '100 E Ocean Ave, Boynton Beach, FL 33435',
      inspectionInfo: 'Permits are required for panel changeouts, EV chargers, and new electrical circuits. Young Electric prepares all permit documentation and manages inspections.'
    },
    localFaqs: [
      {
        q: 'Do you install EV chargers in Boynton Beach communities like Canyon Isles?',
        a: 'Yes. We frequently install Level 2 EV charging stations in Canyon Isles, Valencia, and surrounding neighborhoods, handling all load calculations, wiring, and city permits.'
      },
      {
        q: 'Why should I install a whole-house surge protector in Boynton Beach?',
        a: 'Palm Beach County experiences some of the highest lightning frequencies in the nation. Whole-house surge protectors stop dangerous high-voltage spikes at your electrical panel before they reach your A/C compressor, computers, or appliances.'
      },
      {
        q: 'How long does a 200-amp panel upgrade take in Boynton Beach?',
        a: 'Most residential panel replacements are completed within a single day (usually 6 to 8 hours), including coordinating power shutoff and restoration with FPL.'
      },
      {
        q: 'Are your electricians licensed and insured in Boynton Beach?',
        a: 'Yes. Young Electric Inc is a State of Florida Certified Electrical Contractor with $2,000,000 in liability insurance and full workers’ compensation coverage.'
      }
    ],
    customerQuote: {
      author: 'Nancy Methot',
      area: 'Boynton Beach Area',
      quote: 'Jake was exceptional. Highly recommend for small and larger electrical needs. He was recommended to me and I will definitely be utilizing them for future work!'
    }
  }
];

export const homeFaqs = [
  { q: 'Is Young Electric Inc an electrical contractor?', a: 'Yes. Young Electric Inc is a fully licensed and insured electrical contractor. Our in-house team performs all electrical work. When you call us, you speak directly with our team who handles all service, scheduling, and pricing directly with you.' },
  { q: 'What areas do you serve?', a: 'We provide homeowners with residential electrical team members serving Boca Raton and surrounding communities in Palm Beach and Broward Counties, including Delray Beach, Deerfield Beach, Coral Springs, Parkland, Pompano Beach, Coconut Creek, and Boynton Beach.' },
  { q: 'Do you handle commercial electrical work?', a: 'No. We exclusively provide homeowners with residential electrical services. We do not facilitate commercial, industrial, office, retail, restaurant, warehouse, or business electrical services of any kind.' },
  { q: 'How quickly can I be connected with a local electrician?', a: 'When you call 561-363-0946, you speak with an available residential electrician. Same-day connections are common, though availability depends on the time of your call and our schedule.' },
  { q: 'Am I obligated to hire our team I am connected with?', a: 'No. The initial connection carries no obligation. You speak with our team, get the information you need, and decide whether to schedule service. The choice is always yours.' },
  { q: 'What types of home electrical services can I request?', a: 'We provide homeowners with team members who handle a wide range of residential electrical needs, including electrical repair, outlet and switch repair, lighting installation, electrical panel service, residential wiring, ceiling fan installation, EV charger installation, electrical inspections, surge protection, and generator electrical service.' },
  { q: 'How does your pricing work?', a: 'We provide upfront flat-rate pricing. After Andy or Jake diagnoses your electrical issue on-site, we give you an exact, guaranteed price before any work begins. There are no open-ended hourly fees or unexpected surprise charges.' },
  { q: 'Do you guarantee your electrical work?', a: 'Yes. Young Electric Inc is a State of Florida Certified Electrical Contractor. We back all residential installations and repairs with a 1-Year Comprehensive Workmanship Warranty plus full manufacturer warranties on equipment.' },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: site.name,
  legalName: site.legalName,
  url: site.domain,
  telephone: site.phone,
  image: images.heroElectrician,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1'
  },
  areaServed: [
    { '@type': 'City', name: 'Boca Raton', addressRegion: 'FL' },
    { '@type': 'City', name: 'Delray Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Deerfield Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Coral Springs', addressRegion: 'FL' },
    { '@type': 'City', name: 'Parkland', addressRegion: 'FL' },
    { '@type': 'City', name: 'Pompano Beach', addressRegion: 'FL' },
    { '@type': 'City', name: 'Coconut Creek', addressRegion: 'FL' },
    { '@type': 'City', name: 'Boynton Beach', addressRegion: 'FL' }
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.mainLocation,
    addressRegion: site.mainStateAbbr,
    addressCountry: 'US'
  }
};

