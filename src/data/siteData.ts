export const site = {
  name: 'Young Electric Inc',
  domain: 'https://youngelectricincfl.com',
  phone: '561-363-0946',
  phoneRaw: 'tel:5613630946',
  email: 'info@youngelectricincfl.com',
  mainLocation: 'Boca Raton',
  mainState: 'Florida',
  mainStateAbbr: 'FL',
  mapsUrl: 'https://maps.app.goo.gl/jyRiooFFE5S231r38',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13504577.386925368!2d-90.37067053397625!3d34.273645115519706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91bd711ef5b33%3A0xc193b3ec8a30fede!2sYoung%20Electric%20Inc!5e0!3m2!1sen!2sin!4v1790006759620!5m2!1sen!2sin',
  rating: '5.0',
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
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
  faqs: { q: string; a: string }[];
  benefits: { title: string; desc: string; icon: string }[];
};

export const services: Service[] = [
  {
    slug: 'residential-electrician-boca-raton-fl',
    title: 'Residential Electrician Boca Raton, FL',
    shortTitle: 'Residential Electrician',
    h1: 'Residential Electrician in Boca Raton, FL',
    metaTitle: 'Residential Electrician in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Hire a residential electrician in Boca Raton, FL for safe, reliable home electrical service. Call 561-363-0946 to speak with a local team.',
    heroImage: images.heroElectrician,
    heroImageAlt: 'Residential electrician working on an electrical panel in a Boca Raton, FL home',
    icon: 'Home',
    intro:
      'Finding a dependable residential electrician in Boca Raton, FL does not have to be stressful. Young Electric Inc connects homeowners with expert in-house professionals who handle everyday home electrical needs—from troubleshooting and repairs to new installations and panel upgrades. Every service we provide is focused on residential properties only, so you get help from someone who understands the wiring, panels, and lighting systems common in South Florida homes.',
    benefits: [
      { title: 'Residential Focus', desc: 'Our entire team works on homes, not commercial or industrial facilities.', icon: 'Home' },
      { title: 'Local Knowledge', desc: 'Hire professionals familiar with Boca Raton neighborhoods and building practices.', icon: 'MapPin' },
      { title: 'Fast Response', desc: 'Request a connection and get a callback from a local team, often the same day.', icon: 'Zap' },
      { title: 'Clear Communication', desc: 'You talk directly with our team—no layers in between.', icon: 'Phone' },
    ],
    sections: [
      {
        heading: 'What a Residential Electrician Can Help With',
        paragraphs: [
          'Residential electricians handle a wide range of in-home electrical tasks. If you live in Boca Raton and need help with flickering lights, tripping breakers, outdated outlets, or a panel that cannot keep up with modern appliances, connecting with a qualified local electrician is the safest choice. Electrical work in a home is not a do-it-yourself project—mistakes can lead to shocks, fires, and failed inspections.',
          'When you call Young Electric Inc, you speak with our expert team who can assess your situation, explain what is going on, and give you a clear picture of the work your home needs. You are never obligated, and our team handles all scheduling and pricing directly with you.',
        ],
        list: [
          'Troubleshooting electrical problems in homes',
          'Installing and replacing outlets, switches, and fixtures',
          'Upgrading electrical panels and subpanels',
          'Wiring for renovations, additions, and new appliances',
          'Installing ceiling fans, lighting, and EV chargers',
          'Whole-home surge protection and generator connections',
          'Electrical safety inspections for homebuyers and sellers',
        ],
      },
      {
        heading: 'Why Boca Raton Homeowners Choose to Connect Through Us',
        paragraphs: [
          'Boca Raton has a mix of older homes with original 1960s and 1970s wiring and newer builds with modern electrical systems. Both can develop problems—older homes often need panel upgrades and rewiring, while newer homes may need additional circuits for EV chargers, appliance upgrades, or home-office power.',
          'Young Electric Inc is your dedicated local electrical contractor. Our team of in-house electricians handles all electrical work, serving the Boca Raton area with professionalism and care. When you call, you speak directly with our team to schedule your service.',
        ],
      },
      {
        heading: 'How the Process Works',
        paragraphs: [
          'The process is simple and transparent. You call our number, and you speak with an available residential electrician serving Boca Raton. Our team discusses your needs, answers your questions, and—when you are ready—arranges a visit to your home. You receive a quote and decide whether to move forward. There is no obligation from the initial connection.',
        ],
      },
    ],
    faqs: [
      { q: 'Is Young Electric Inc an electrical contractor?', a: 'Yes. Young Electric Inc is a fully licensed and insured electrical contractor providing high-quality residential electrical services. All work is performed by our skilled in-house electricians.' },
      { q: 'How quickly can I get connected with a local electrician?', a: 'When you call 561-363-0946, we connect you directly with our team. In many cases, you will receive a callback the same day, though availability depends on our team and the time of your call.' },
      { q: 'Do you serve commercial properties?', a: 'No. We exclusively provide homeowners with residential electrical services. We do not facilitate commercial, industrial, or business electrical services.' },
      { q: 'Am I obligated to hire our team I am connected with?', a: 'No. The initial connection carries no obligation. You speak with our team, get the information you need, and decide whether to schedule service.' },
    ],
  },
  {
    slug: 'electrical-repair-boca-raton-fl',
    title: 'Electrical Repair Boca Raton, FL',
    shortTitle: 'Electrical Repair',
    h1: 'Electrical Repair in Boca Raton, FL',
    metaTitle: 'Electrical Repair in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Need electrical repair in Boca Raton, FL? Hire a local residential electrical team for safe, reliable home repairs. Call 561-363-0946.',
    heroImage: images.electricianDrill,
    heroImageAlt: 'Electrician performing electrical repair work on a residential panel in Boca Raton, FL',
    icon: 'Wrench',
    intro:
      'Electrical problems in your home can range from mildly annoying to genuinely dangerous. Flickering lights, outlets that stopped working, breakers that trip every time you run the microwave—these are all signs that something in your home electrical system needs attention. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who diagnose and repair home electrical issues safely.',
    benefits: [
      { title: 'Safe Diagnostics', desc: 'A professional safely identifies the root cause rather than guessing at symptoms.', icon: 'ShieldCheck' },
      { title: 'Code-Compliant Repairs', desc: 'Repairs are performed to meet current residential electrical codes.', icon: 'FileCheck' },
      { title: 'Long-Lasting Fixes', desc: 'Quality materials and proper techniques mean repairs that hold up over time.', icon: 'TrendingUp' },
      { title: 'Residential Only', desc: 'Every connection is for home electrical repair—never commercial or industrial.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Common Home Electrical Repairs',
        paragraphs: [
          'Electrical issues in a home should never be ignored. Even a seemingly minor problem—like a warm switch plate or an outlet that only works sometimes—can signal a deeper wiring issue. Connecting with a residential electrical professional ensures the problem is properly diagnosed and repaired, not just temporarily patched.',
          'When you call us, you speak with our local team who handles common residential electrical repairs throughout Boca Raton.',
        ],
        list: [
          'Flickering or dimming lights',
          'Outlets that do not work or feel warm',
          'Circuit breakers that trip repeatedly',
          'Switches that spark, crackle, or feel hot',
          'Burning smell near outlets, switches, or the panel',
          'Tripped GFCI outlets that will not reset',
          'Damaged or frayed wiring behind walls',
          'Malfunctioning doorbell or low-voltage lighting',
        ],
      },
      {
        heading: 'Why You Should Not Ignore Electrical Problems',
        paragraphs: [
          'A flickering light might seem harmless, but it could indicate a loose connection in your wiring—a leading cause of residential electrical fires. Breakers that trip constantly usually mean a circuit is overloaded or has a short, both of which require professional attention. And if an outlet feels warm to the touch, that is a sign of a serious problem that should be addressed immediately.',
          'Home electrical systems are interconnected. A problem at one outlet can affect the entire circuit, and a faulty panel can impact every circuit in your home. A residential electrical professional traces the issue to its source and repairs it properly.',
        ],
      },
      {
        heading: 'Connecting With a Local Repair Provider',
        paragraphs: [
          'Young Electric Inc is a trusted local electrical contractor. When you call 561-363-0946, you reach our dedicated team who handles residential electrical repairs in Boca Raton. We will discuss your situation, schedule a visit, and provide clear pricing directly to you.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a flickering light an emergency?', a: 'A single flickering light may just be a bad bulb, but if changing the bulb does not fix it—or if multiple lights flicker—it could indicate a loose connection or wiring problem. Connecting with our team of electricians is the safe move.' },
      { q: 'What does it mean if my breaker keeps tripping?', a: 'A tripping breaker usually means the circuit is overloaded or there is a short somewhere. A residential electrical professional can identify which and repair it safely.' },
      { q: 'Are you the company doing the repair?', a: 'Yes. We are the electrical contractor doing the repair. Our experienced team performs all the work to ensure the highest quality standards.' },
    ],
  },
  {
    slug: 'outlet-repair-boca-raton-fl',
    title: 'Outlet Repair Boca Raton, FL',
    shortTitle: 'Outlet Repair',
    h1: 'Outlet Repair in Boca Raton, FL',
    metaTitle: 'Outlet Repair in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Outlet not working in your Boca Raton home? Hire a local residential electrical team for safe outlet and GFCI repair. Call 561-363-0946.',
    heroImage: images.outletInstall,
    heroImageAlt: 'Electrician installing and repairing a wall outlet in a Boca Raton, FL residence',
    icon: 'Plug',
    intro:
      'A dead outlet, a loose receptacle, or a GFCI that keeps tripping can disrupt your daily routine and create safety risks in your home. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who repair and replace outlets safely and to code.',
    benefits: [
      { title: 'Safe Replacement', desc: 'Properly installed outlets that meet current residential electrical code.', icon: 'ShieldCheck' },
      { title: 'GFCI Expertise', desc: 'Correct installation of GFCI outlets in kitchens, baths, and outdoor areas.', icon: 'Droplets' },
      { title: 'Child Safety', desc: 'Tamper-resistant outlets to help protect kids in your home.', icon: 'Baby' },
      { title: 'Residential Focus', desc: 'Home outlet repair only—no commercial or industrial work.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Signs Your Outlets Need Repair',
        paragraphs: [
          'Outlets are among the most used parts of your home electrical system, and they wear out over time. If you notice any of the following, it is time to hire our team of electricians.',
        ],
        list: [
          'Outlets that do not work at all',
          'Plugs that fall out or fit loosely',
          'Outlets that feel warm to the touch',
          'Burning smell or discoloration around an outlet',
          'GFCI outlets that trip frequently or will not reset',
          'Sparking when plugging or unplugging devices',
          'Two-prong outlets that need upgrading to three-prong',
        ],
      },
      {
        heading: 'GFCI Outlets in Boca Raton Homes',
        paragraphs: [
          'Ground Fault Circuit Interrupter (GFCI) outlets are required by modern electrical code in kitchens, bathrooms, garages, and outdoor areas. They protect against electric shock by cutting power when they detect a fault. If your home has older non-GFCI outlets in these areas—or if your existing GFCI outlets are not working—our team of electricians can upgrade them.',
          'South Florida homes are particularly vulnerable to moisture, which makes functioning GFCI outlets even more important. Our team can test your existing GFCI outlets and replace any that fail.',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Call 561-363-0946 to speak with our team at Young Electric Inc. We handle all scheduling, repairs, and pricing directly with you. We are a dedicated electrical contractor committed to quality.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I just replace an outlet myself?', a: 'Outlet replacement involves working inside an energized electrical box. Without proper training, you risk shock, fire, or creating a code violation. Connecting with our team of electricians is the safer choice.' },
      { q: 'What is a GFCI outlet?', a: 'A GFCI outlet shuts off power when it detects a ground fault, protecting against electric shock. They are required in kitchens, bathrooms, garages, and outdoor areas of homes.' },
      { q: 'Do you handle commercial outlet repair?', a: 'No. We exclusively provide homeowners with residential electrical services. We do not facilitate commercial or industrial electrical work.' },
    ],
  },
  {
    slug: 'switch-repair-boca-raton-fl',
    title: 'Switch Repair Boca Raton, FL',
    shortTitle: 'Switch Repair',
    h1: 'Switch Repair in Boca Raton, FL',
    metaTitle: 'Switch Repair in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Light switch sparking or not working? Hire a local residential electrical team in Boca Raton for safe switch repair. Call 561-363-0946.',
    heroImage: images.switchWall,
    heroImageAlt: 'Close-up of a residential light switch on a wall in a Boca Raton, FL home',
    icon: 'ToggleLeft',
    intro:
      'A light switch that crackles when you flip it, feels warm, or does not work at all is more than an inconvenience—it can be a safety hazard. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who diagnose and repair switch problems in homes.',
    benefits: [
      { title: 'Precise Diagnosis', desc: 'Identify whether the problem is the switch, the wiring, or the fixture.', icon: 'Search' },
      { title: 'Safe Replacement', desc: 'Quality switches installed correctly and to code.', icon: 'ShieldCheck' },
      { title: 'Modern Upgrades', desc: 'Dimmer, smart, and timer switches for convenience and savings.', icon: 'Lightbulb' },
      { title: 'Residential Only', desc: 'Home switch repair exclusively—no commercial facilities.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Common Switch Problems in Homes',
        paragraphs: [
          'Light switches take a lot of daily use and eventually wear out. Some problems are minor annoyances, but others indicate wiring issues that need immediate attention.',
        ],
        list: [
          'Switches that do not turn the light on or off',
          'Crackling, popping, or buzzing sounds when flipped',
          'Switches that feel warm or hot to the touch',
          'Flickering lights when the switch is on',
          'Loose or wobbly switch plates',
          'Three-way switches that do not work properly',
          'Older toggle switches you want upgraded to dimmers',
        ],
      },
      {
        heading: 'Dimmer and Smart Switch Installation',
        paragraphs: [
          'Many Boca Raton homeowners upgrade their light switches to dimmers or smart switches. Dimmers let you adjust lighting levels for different times of day and can extend bulb life. Smart switches allow you to control lights from your phone or with voice assistants.',
          'Not all fixtures are compatible with dimmers, and smart switches require proper wiring—often a neutral wire that older homes may not have at the switch location. Our team of electricians can assess your home and recommend the right options.',
        ],
      },
      {
        heading: 'Connecting With a Local Provider',
        paragraphs: [
          'Young Electric Inc is your local electrical contractor. When you call, you reach our team who handles switch repairs and replacements in Boca Raton homes. We manage all scheduling and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a warm light switch dangerous?', a: 'A switch that feels warm can indicate an overloaded circuit or a failing switch. It should be inspected by our team of electricians to rule out a fire hazard.' },
      { q: 'Can any light be put on a dimmer?', a: 'Not all fixtures and bulbs are dimmable. Our team of electricians can tell you whether your fixture supports a dimmer and recommend compatible bulbs.' },
      { q: 'Do you do commercial switch repair?', a: 'No. We only provide homeowners with residential electrical services for home switch repair and replacement.' },
    ],
  },
  {
    slug: 'lighting-installation-boca-raton-fl',
    title: 'Lighting Installation Boca Raton, FL',
    shortTitle: 'Lighting Installation',
    h1: 'Lighting Installation in Boca Raton, FL',
    metaTitle: 'Lighting Installation in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Upgrade your home with professional lighting installation in Boca Raton, FL. Hire a local residential electrical team. Call 561-363-0946.',
    heroImage: images.lightingLivingRoom,
    heroImageAlt: 'Beautiful modern living room with elegant lighting installation in a Boca Raton, FL home',
    icon: 'Lightbulb',
    intro:
      'Lighting transforms the look and feel of your home. Whether you want to update a single room with new fixtures or add landscape lighting to your yard, Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who install lighting safely and beautifully.',
    benefits: [
      { title: 'Interior Lighting', desc: 'Recessed lights, chandeliers, pendant lights, and under-cabinet lighting.', icon: 'Lightbulb' },
      { title: 'Outdoor Lighting', desc: 'Landscape, pathway, and exterior security lighting for your home.', icon: 'Trees' },
      { title: 'Energy Savings', desc: 'LED retrofits and efficient fixtures that lower your electric bill.', icon: 'Zap' },
      { title: 'Residential Focus', desc: 'Home lighting installation only—no commercial or retail lighting.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Interior Lighting Installation',
        paragraphs: [
          'New lighting can completely change the ambiance of a room. From modern recessed cans that brighten a kitchen to a statement chandelier in a dining room, our team of electricians can install fixtures that match your home style and meet electrical code.',
          'Popular interior lighting installations in Boca Raton homes include recessed lighting, pendant lights over kitchen islands, under-cabinet task lighting, bathroom vanity lighting, and dimmable fixtures for living areas.',
        ],
        list: [
          'Recessed and can lighting',
          'Chandeliers and pendant fixtures',
          'Under-cabinet and toe-kick lighting',
          'Bathroom vanity lighting',
          'Track and rail lighting',
          'Closet and pantry lighting',
        ],
      },
      {
        heading: 'Outdoor and Landscape Lighting',
        paragraphs: [
          'Outdoor lighting enhances curb appeal and improves security around your home. Our team of electricians can install pathway lights, uplighting for trees and architectural features, and security lighting at entry points.',
          'All outdoor lighting must be properly rated for wet locations and connected to GFCI-protected circuits. A professional ensures your outdoor installation is safe and weather-resistant—especially important in South Florida.',
        ],
      },
      {
        heading: 'LED Upgrades and Energy Efficiency',
        paragraphs: [
          'Upgrading older incandescent or halogen fixtures to LED lighting is one of the easiest ways to reduce your home electricity usage. LEDs use a fraction of the energy, last years longer, and produce less heat. Our team of electricians can retrofit existing fixtures or install new LED lighting throughout your home.',
        ],
      },
      {
        heading: 'How the Connection Works',
        paragraphs: [
          'Young Electric Inc is a dedicated electrical contractor. Call 561-363-0946 to speak with our team serving Boca Raton. We handle all installation details and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I install a chandelier myself?', a: 'Heavy fixtures require proper support in the ceiling box, and wiring must be connected correctly. Our team of electricians ensures the fixture is safely supported and wired to code.' },
      { q: 'Do you install commercial or retail lighting?', a: 'No. We only provide homeowners with residential electrical services for home lighting installation.' },
      { q: 'Can our team install smart lighting?', a: 'Yes. Our team of electricians can install smart switches, smart bulbs, and integrated lighting systems for your home.' },
    ],
  },
  {
    slug: 'electrical-panel-service-boca-raton-fl',
    title: 'Electrical Panel Replacement Boca Raton, FL',
    shortTitle: 'Electrical Panel Replacement',
    h1: 'Electrical Panel Replacement in Boca Raton, FL',
    metaTitle: 'Electrical Panel Replacement in Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Need an electrical panel upgrade or replacement in Boca Raton, FL? Hire a local residential electrical team for safe panel service. Call 561-363-0946.',
    heroImage: images.panelCloseup,
    heroImageAlt: 'Close-up of a residential electrical panel with circuit breakers in a Boca Raton, FL home',
    icon: 'LayoutGrid',
    intro: 'Your electrical panel is the heart of your home electrical system, distributing power safely to every circuit. For Boca Raton homeowners dealing with older properties or increasing electrical demands, an outdated panel can lead to tripped breakers, power loss, and significant safety hazards. Young Electric Inc helps homeowners and businesses in Boca Raton resolve these issues by providing expert, code-compliant electrical panel replacements and upgrades.',
    benefits: [
      { title: 'Increased Capacity', desc: 'Upgrade to 200-amp or 400-amp service for modern needs.', icon: 'TrendingUp' },
      { title: 'Safety First', desc: 'Remove dangerous or recalled panels (e.g., FPE, Zinsco) from your home.', icon: 'ShieldCheck' },
      { title: 'Future-Proof', desc: 'Add capacity for EV chargers, generators, or home additions.', icon: 'Zap' },
      { title: 'Local Permitting', desc: 'We handle all HOA approvals and Boca Raton municipal permits.', icon: 'FileCheck' },
    ],
    sections: [
      {
        heading: 'What Our Panel Replacement Service Includes',
        paragraphs: [
          'Replacing an electrical panel is a major structural upgrade to your electrical system. Our comprehensive service includes safely removing your old equipment, installing a modern, high-capacity panel, grounding the system to current electrical codes, and ensuring every circuit is properly labeled and balanced.'
        ]
      },
      {
        heading: 'Common Signs You Need a Panel Upgrade',
        paragraphs: [
          'Many homes in Boca Raton were built with 100-amp panels that struggle to support today\'s electrical demands. You likely need a panel replacement or upgrade if you experience any of the following:'
        ],
        list: [
          'Frequent breaker trips when running multiple appliances',
          'Insufficient capacity for a new EV charger or HVAC system',
          'Outdated or recalled equipment (like Federal Pacific or Zinsco panels)',
          'Planning a major home renovation or electrical addition',
          'Lights that dim or flicker when the AC kicks on',
          'A panel that is warm to the touch or shows signs of rust and scorch marks'
        ]
      },
      {
        heading: 'Our Panel Replacement Process',
        paragraphs: [
          'We follow a strict, professional process to ensure your panel replacement is seamless and safe:'
        ],
        list: [
          'Inspection: We thoroughly evaluate your current panel, wiring, and grounding.',
          'Load Assessment: We calculate your home\'s total power demand to size your new panel correctly.',
          'Recommendation: You receive a clear, upfront proposal with no hidden fees.',
          'Permit & Coordination: We handle all Boca Raton city permits and coordinate with FPL for service disconnection if required.',
          'Installation: Our expert electricians safely remove the old panel and install the new system to code.',
          'Inspection & Testing: We test every circuit and schedule the final municipal inspection.'
        ]
      },
      {
        heading: 'Why Choose Young Electric Inc',
        paragraphs: [
          'We aren\'t just a generic contractor; we are Boca Raton\'s trusted electrical experts. We differentiate ourselves through our deep understanding of local building codes, our ability to seamlessly navigate HOA requirements, and our commitment to using only premium, corrosion-resistant electrical components suited for South Florida\'s climate.'
        ]
      },
      {
        heading: 'Local Service Areas',
        paragraphs: [
          'While we are based in and frequently serve Boca Raton, our expert panel replacement services extend to surrounding communities where we are genuinely equipped to deliver top-tier service. This includes Delray Beach, Deerfield Beach, Parkland, and Coral Springs.'
        ]
      }
    ],
    faqs: [
      { q: 'How long does a panel replacement take?', a: 'A standard residential panel upgrade typically takes one full day. We coordinate with you to minimize the time your power is turned off.' },
      { q: 'Will I need a permit for a panel upgrade in Boca Raton?', a: 'Yes, panel replacements require a permit. Young Electric Inc handles all the permitting and inspection scheduling with the city on your behalf.' },
      { q: 'Does an EV charger require a panel upgrade?', a: 'It depends on your current capacity. Level 2 EV chargers require a dedicated 240V circuit. During our load assessment, we will determine if your current panel can safely support it.' }
    ]
  },
  {
    slug: 'residential-wiring-boca-raton-fl',
    title: 'Residential Wiring Boca Raton, FL',
    shortTitle: 'Residential Wiring',
    h1: 'Residential Wiring in Boca Raton, FL',
    metaTitle: 'Residential Wiring in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Need home wiring or rewiring in Boca Raton, FL? Hire a local residential electrical team for safe, code-compliant wiring. Call 561-363-0946.',
    heroImage: images.wiring,
    heroImageAlt: 'Residential electrical wiring being installed during a home renovation in Boca Raton, FL',
    icon: 'Cable',
    intro:
      'Proper wiring is the foundation of a safe home electrical system. Whether you are renovating a room, adding a new circuit, or rewiring an older home, Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who handle home wiring safely and to code.',
    benefits: [
      { title: 'Whole-Home Rewiring', desc: 'Replace aging or aluminum wiring throughout your home.', icon: 'RefreshCw' },
      { title: 'New Circuits', desc: 'Add dedicated circuits for appliances, EV chargers, and home offices.', icon: 'Plus' },
      { title: 'Code Compliance', desc: 'All wiring meets current residential electrical code requirements.', icon: 'FileCheck' },
      { title: 'Residential Focus', desc: 'Home wiring only—no commercial, industrial, or multi-unit wiring.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'When Does a Home Need Rewiring?',
        paragraphs: [
          'If your Boca Raton home is more than 40 years old, the original wiring may be nearing the end of its useful life. Common signs that rewiring is needed include:',
        ],
        list: [
          'Two-prong ungrounded outlets',
          'Aluminum wiring (common in 1960s-1970s homes)',
          'Knob-and-tube wiring in older homes',
          'Frayed or brittle insulation on visible wires',
          'Frequent breaker trips or blown fuses',
          'Burning smell or discoloration at outlets',
          'Insurance requirements after an inspection',
        ],
      },
      {
        heading: 'Aluminum Wiring in South Florida Homes',
        paragraphs: [
          'Many homes built between 1965 and 1973 have aluminum branch-circuit wiring, which is a known fire hazard. Aluminum expands and contracts differently than copper, causing connections to loosen over time. If your home has aluminum wiring, our team of electricians can recommend remediation options such as pigtailing with copper connectors or full rewiring.',
        ],
      },
      {
        heading: 'Wiring for Renovations and Additions',
        paragraphs: [
          'If you are remodeling a kitchen, finishing a room, or building a home addition, new wiring is almost always required. Our team of electricians runs new circuits, installs outlets and switches, and connects fixtures as part of the renovation. All new wiring must meet current code, including AFCI protection on bedroom and living-area circuits.',
        ],
      },
      {
        heading: 'How the Connection Works',
        paragraphs: [
          'Young Electric Inc is an experienced electrical contractor. Call 561-363-0946 to speak with our team for home wiring and rewiring in Boca Raton. We manage all work and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does whole-home rewiring cost?', a: 'The cost depends on your home size, accessibility, and the scope of work. Our team can give you an estimate after assessing your home.' },
      { q: 'How long does rewiring take?', a: 'A full home rewire typically takes several days to a week depending on the size of the home and accessibility of the wiring. Our team can give you a specific timeline.' },
      { q: 'Do you do commercial wiring?', a: 'No. We exclusively provide homeowners with residential electrical services for home wiring projects.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation-boca-raton-fl',
    title: 'Ceiling Fan Installation Boca Raton, FL',
    shortTitle: 'Ceiling Fan Installation',
    h1: 'Ceiling Fan Installation in Boca Raton, FL',
    metaTitle: 'Ceiling Fan Installation in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Need a ceiling fan installed in your Boca Raton home? Hire a local residential electrical team for safe, secure installation. Call 561-363-0946.',
    heroImage: images.ceilingFanRoom,
    heroImageAlt: 'Living room with a ceiling fan installed in a Boca Raton, FL home',
    icon: 'Fan',
    intro:
      'A ceiling fan keeps your home comfortable and can lower your cooling costs—but only if it is installed correctly. Ceiling fans are heavier than standard light fixtures and require proper support and wiring. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who install ceiling fans safely and securely.',
    benefits: [
      { title: 'Proper Support', desc: 'Fan-rated ceiling boxes that safely hold the weight and motion of a fan.', icon: 'Anchor' },
      { title: 'Correct Wiring', desc: 'Safe connections for fan motors, lights, and wall controls.', icon: 'Cable' },
      { title: 'Wall Control', desc: 'Fan speed and light controls installed at the wall for convenience.', icon: 'ToggleLeft' },
      { title: 'Residential Only', desc: 'Home ceiling fan installation exclusively—no commercial spaces.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Why Professional Installation Matters',
        paragraphs: [
          'A ceiling fan is not just a light fixture. It weighs 15 to 50 pounds, spins, vibrates, and generates torque. A standard light box is not rated to hold that weight and motion. Installing a fan on an inadequate support is a common cause of fans falling from ceilings.',
          'Our team of electricians installs a fan-rated mounting box, secures it properly to the ceiling structure, and wires the fan and any light kit safely. This is especially important in South Florida homes where fans run year-round.',
        ],
      },
      {
        heading: 'Fan Installation Options',
        paragraphs: [
          'Whether you are replacing an existing fan or adding one where there was only a light, our team of electricians handles the full installation.',
        ],
        list: [
          'Replace existing ceiling fans',
          'Install fans where a light fixture currently exists',
          'Install fans in rooms with no existing ceiling fixture',
          'Connect fan remote controls and wall switches',
          'Install fan-rated boxes for heavy or large fans',
          'Wire separate switches for fan and light',
        ],
      },
      {
        heading: 'Connecting With a Local Provider',
        paragraphs: [
          'Call 561-363-0946 to reach our team at Young Electric Inc serving Boca Raton. We handle all installation, scheduling, and pricing directly with you. We are a fully licensed electrical contractor.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I hang a ceiling fan where a light fixture is now?', a: 'Only if the existing box is fan-rated and properly supported. Most standard light boxes are not. Our team of electricians can assess and upgrade the box if needed.' },
      { q: 'Do you install fans in commercial spaces?', a: 'No. We only provide homeowners with residential electrical services for ceiling fan installation in homes.' },
      { q: 'Can our team install a fan with a remote control?', a: 'Yes. Our team of electricians can install fans with remote controls, wall-mounted speed controls, or smart home integration.' },
    ],
  },
  {
    slug: 'ev-charger-installation-boca-raton-fl',
    title: 'EV Charger Installation Boca Raton, FL',
    shortTitle: 'EV Charger Installation',
    h1: 'EV Charger Installation in Boca Raton, FL',
    metaTitle: 'EV Charger Installation in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Install a home EV charger in Boca Raton, FL. Hire a local residential electrical team for safe Level 2 charger installation. Call 561-363-0946.',
    heroImage: images.evCharger,
    heroImageAlt: 'Home EV charger installed on a wall for convenient electric vehicle charging in Boca Raton, FL',
    icon: 'BatteryCharging',
    intro:
      'More Boca Raton homeowners are driving electric vehicles, and a dedicated home charging station makes ownership far more convenient. Young Electric Inc provides homeowners with expert in-house electricians who install Level 2 EV chargers safely and to code.',
    benefits: [
      { title: 'Faster Charging', desc: 'Level 2 chargers refill your EV in hours, not overnight on a standard outlet.', icon: 'Zap' },
      { title: 'Dedicated Circuit', desc: 'A properly sized circuit prevents overloads and breaker trips.', icon: 'ShieldCheck' },
      { title: 'Outdoor Rated', desc: 'Weatherproof installations for garage and driveway charging.', icon: 'Droplets' },
      { title: 'Residential Only', desc: 'Home EV charger installation exclusively—no commercial stations.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Level 2 Home Charging',
        paragraphs: [
          'A Level 2 EV charger uses a 240-volt circuit—similar to an electric dryer or oven—to deliver much faster charging than a standard wall outlet. Most Level 2 chargers add 25 to 30 miles of range per hour, letting you fully recharge overnight.',
          'Installing a Level 2 charger requires a dedicated circuit, proper breaker sizing, and safe wiring from your panel to the charging location. Our team of electricians handles all of this and ensures the installation meets code.',
        ],
      },
      {
        heading: 'Choosing the Right Charger and Location',
        paragraphs: [
          'EV chargers come in plug-in and hardwired versions. The best choice depends on your panel capacity, charging location, and charger model. Our team of electricians can help you decide.',
          'Common installation locations in Boca Raton homes include attached garages, carports, and exterior walls near a driveway. Outdoor installations require weatherproof, NEMA-rated equipment.',
        ],
        list: [
          'Garage wall mounting',
          'Outdoor driveway or carport installation',
          'Hardwired or plug-in charger connections',
          'Dedicated 40-amp or 50-amp circuits',
          'Panel upgrades if needed for additional capacity',
          'Smart charger connectivity setup',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Young Electric Inc is your trusted electrical contractor. Call 561-363-0946 to speak with our team who installs home EV chargers in Boca Raton. We manage all installation and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I charge my EV from a regular outlet?', a: 'You can use a standard 120-volt outlet with the charger that comes with most EVs, but it is very slow—typically 3-5 miles of range per hour. A Level 2 charger on a dedicated 240-volt circuit is much faster and safer for regular use.' },
      { q: 'Will I need a panel upgrade for an EV charger?', a: 'It depends on your current panel capacity and existing load. Our team of electricians can assess your panel and let you know if an upgrade is needed.' },
      { q: 'Do you install commercial EV charging stations?', a: 'No. We exclusively provide homeowners with residential electrical services for home EV charger installation.' },
    ],
  },
  {
    slug: 'electrical-inspection-boca-raton-fl',
    title: 'Electrical Inspection Boca Raton, FL',
    shortTitle: 'Electrical Inspection',
    h1: 'Electrical Inspection in Boca Raton, FL',
    metaTitle: 'Electrical Inspection in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Schedule a residential electrical inspection in Boca Raton, FL. Hire a local team for a thorough home safety assessment. Call 561-363-0946.',
    heroImage: images.inspection,
    heroImageAlt: 'Home electrical inspection checklist being reviewed for a residential property in Boca Raton, FL',
    icon: 'ClipboardCheck',
    intro:
      'Whether you are buying a home, selling one, or just want peace of mind about your current home, a residential electrical inspection gives you a clear picture of your electrical system condition. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who perform thorough home electrical inspections.',
    benefits: [
      { title: 'Pre-Purchase', desc: 'Know the electrical condition before buying a home in Boca Raton.', icon: 'Home' },
      { title: 'Safety Assessment', desc: 'Identify hazards before they become emergencies.', icon: 'ShieldCheck' },
      { title: 'Insurance & Code', desc: 'Documentation for insurance or code compliance needs.', icon: 'FileCheck' },
      { title: 'Residential Only', desc: 'Home inspections exclusively—no commercial property inspections.', icon: 'House' },
    ],
    sections: [
      {
        heading: 'What a Home Electrical Inspection Covers',
        paragraphs: [
          'A residential electrical inspection is a top-to-bottom review of your home electrical system. Our team can assess the condition of your panel, wiring, outlets, grounding, and protective devices.',
        ],
        list: [
          'Main electrical panel and subpanels',
          'Wiring type and condition throughout the home',
          'Grounding and bonding',
          'GFCI and AFCI protection',
          'Outlets and switches',
          'Smoke and carbon monoxide detectors',
          'Outdoor and exterior electrical components',
          'Visible connections and junction boxes',
        ],
      },
      {
        heading: 'When to Schedule an Inspection',
        paragraphs: [
          'There are several situations where a home electrical inspection makes sense:',
        ],
        list: [
          'Before buying a home in Boca Raton',
          'Before selling your home',
          'If your home is more than 30 years old and has never been inspected',
          'After a major renovation or addition',
          'If you are experiencing unexplained electrical problems',
          'When your insurance company requires an inspection',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Young Electric Inc is a reliable electrical contractor. Call 561-363-0946 to reach our team who performs home electrical inspections in Boca Raton. We handle all scheduling and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does a home electrical inspection take?', a: 'A thorough residential inspection typically takes 1-2 hours depending on the size and age of your home. Our team can give you a more specific estimate.' },
      { q: 'Do I get a report after the inspection?', a: 'Yes, our team of electricians typically provides a written or verbal summary of findings and any recommended repairs or upgrades.' },
      { q: 'Do you do commercial inspections?', a: 'No. We exclusively provide homeowners with residential electrical services for home inspections.' },
    ],
  },
  {
    slug: 'surge-protection-boca-raton-fl',
    title: 'Surge Protection Boca Raton, FL',
    shortTitle: 'Surge Protection',
    h1: 'Surge Protection in Boca Raton, FL',
    metaTitle: 'Surge Protection in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Protect your home electronics with whole-home surge protection in Boca Raton, FL. Hire a local residential electrical team. Call 561-363-0946.',
    heroImage: images.surgeProtection,
    heroImageAlt: 'Surge protection equipment for a residential electrical system in a Boca Raton, FL home',
    icon: 'Shield',
    intro:
      'South Florida is the lightning capital of the United States, and power surges can destroy electronics, appliances, and even your electrical panel in seconds. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who install whole-home and point-of-use surge protection.',
    benefits: [
      { title: 'Whole-Home Protection', desc: 'A panel-mounted surge protector guards your entire home.', icon: 'Shield' },
      { title: 'Lightning Defense', desc: 'Critical protection for South Florida thunderstorms.', icon: 'CloudLightning' },
      { title: 'Appliance Safety', desc: 'Protect HVAC, refrigerators, and home electronics from surges.', icon: 'Refrigerator' },
      { title: 'Residential Only', desc: 'Home surge protection exclusively—no commercial installations.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Why Boca Raton Homes Need Surge Protection',
        paragraphs: [
          'Boca Raton experiences frequent thunderstorms, and lightning strikes can send massive surges through power lines into your home. But lightning is not the only cause—utility grid switching, downed lines, and even large appliances cycling on and off can create surges that damage sensitive electronics over time.',
          'A whole-home surge protector installed at your electrical panel blocks most surges before they enter your home circuits. Combined with point-of-use surge protectors at key outlets, this layered approach provides the best protection.',
        ],
      },
      {
        heading: 'Types of Surge Protection',
        paragraphs: [
          'There are two main levels of surge protection for homes:',
        ],
        list: [
          'Whole-home surge protectors—installed at the panel, protecting every circuit',
          'Point-of-use surge protectors—installed at individual outlets for sensitive devices',
          'Surge-protected outlets—replacing standard outlets in key locations',
          'Combination protection for the highest level of defense',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Call 561-363-0946 to speak with our expert in-house electricians serving Boca Raton. Our team assesses your home, recommends the right surge protection, and handles installation and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Does a whole-home surge protector replace power strips?', a: 'No. A whole-home protector handles large surges at the panel, but point-of-use protectors at outlets provide a second layer for sensitive electronics. Both are recommended.' },
      { q: 'How long does a whole-home surge protector last?', a: 'Most whole-home surge protectors last 3-5 years depending on the number and severity of surges they absorb. Our team of electricians can check its status during an inspection.' },
      { q: 'Do you install commercial surge protection?', a: 'No. We exclusively provide homeowners with residential electrical services for home surge protection.' },
    ],
  },
  {
    slug: 'generator-installation-boca-raton-fl',
    title: 'Generator Electrical Service Boca Raton, FL',
    shortTitle: 'Generator Electrical',
    h1: 'Generator Installation & Transfer Switches in Boca Raton, FL',
    metaTitle: 'Generator Electrical in Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Need generator electrical service in Boca Raton, FL? Hire a local residential electrical team for home generator hookups. Call 561-363-0946.',
    heroImage: images.generator,
    heroImageAlt: 'Home backup generator installation for a residential property in Boca Raton, FL',
    icon: 'Power',
    intro:
      'Hurricane season means power outages in South Florida, and a backup generator keeps your home running when the grid goes down. Young Electric Inc provides Boca Raton homeowners with expert in-house electricians who handle the electrical side of home generator installation—including transfer switches, inlet boxes, and wiring.',
    benefits: [
      { title: 'Transfer Switches', desc: 'Safe, code-compliant transfer switch installation for your generator.', icon: 'Shuffle' },
      { title: 'Inlet Boxes', desc: 'Weatherproof inlet boxes for portable generator connections.', icon: 'Plug' },
      { title: 'Hurricane Ready', desc: 'Be prepared for South Florida storm season with proper wiring.', icon: 'CloudRain' },
      { title: 'Residential Only', desc: 'Home generator electrical service exclusively—no commercial generators.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Generator Electrical Components',
        paragraphs: [
          'A home backup generator requires several electrical components to work safely. The most important is a transfer switch, which isolates your home from the utility grid when the generator is running. Without a transfer switch, generator power can backfeed into utility lines and seriously injure line workers.',
          'Our team of electricians installs and connects all the electrical components needed for your generator system.',
        ],
        list: [
          'Automatic transfer switches for standby generators',
          'Manual transfer switches for portable generators',
          'Generator inlet boxes and connection points',
          'Dedicated generator circuits and subpanels',
          'Wiring between the generator and your electrical panel',
          'Interlock kits as an alternative to transfer switches',
        ],
      },
      {
        heading: 'Portable vs. Standby Generators',
        paragraphs: [
          'Portable generators are wheeled units that you start manually and connect through an inlet box. They are less expensive but require you to be home to set them up during an outage. A manual transfer switch or interlock kit lets you safely connect a portable generator to your home panel.',
          'Standby generators are permanently installed outside your home and start automatically when the power goes out. They require an automatic transfer switch and a dedicated fuel source (natural gas or propane). Our team of electricians handles all the electrical connections for either type.',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Young Electric Inc is an expert electrical contractor. Call 561-363-0946 to speak with our team who handles generator electrical service in Boca Raton homes. We manage all work and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you sell or deliver generators?', a: 'No. Our team handles the electrical installation—transfer switches, wiring, and connections. Generator selection and purchase is handled directly by our dedicated team.' },
      { q: 'Is a transfer switch required?', a: 'Yes. Some form of transfer switch or interlock is required by code to prevent backfeeding utility lines. Our team of electricians installs the right option for your generator.' },
      { q: 'Do you do commercial generator installation?', a: 'No. We exclusively provide homeowners with residential electrical services for home generator electrical service.' },
    ],
  },
];

export type Location = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  description: string;
  nearbyAreas: string[];
};

export const locations: Location[] = [
  {
    slug: 'boca-raton-fl',
    name: 'Boca Raton',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Boca Raton is a premier residential and commercial hub in Palm Beach County. From historic homes in Old Floresta needing complete rewiring to modern estates in Woodfield Country Club requiring advanced smart home automation, electrical needs vary wildly. Our team handles the stringent permitting requirements of the City of Boca Raton, ensuring every panel upgrade, EV charger installation, and emergency repair is safe and code-compliant.',
    nearbyAreas: ['Old Floresta', 'Woodfield Country Club', 'Boca Del Mar', 'Boca Pointe', 'Mission Bay', 'West Boca Raton', 'Royal Palm Yacht & Country Club'],
  },
  {
    slug: 'delray-beach-fl',
    name: 'Delray Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Delray Beach combines a rich history with rapid modern development. Many classic homes near the Pineapple Grove Arts District and Lake Ida are undergoing renovations that require modern electrical panels and grounded wiring. Whether you need a commercial electrician for an Atlantic Ave storefront or residential electrical repairs, we navigate Delray\'s local building codes seamlessly.',
    nearbyAreas: ['Pineapple Grove', 'Lake Ida', 'Tropic Isle', 'Kings Point', 'Marina Historic District', 'Atlantic Ave Area'],
  },
  {
    slug: 'deerfield-beach-fl',
    name: 'Deerfield Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Bordering Boca Raton to the south, Deerfield Beach features a mix of coastal condominiums and inland single-family neighborhoods like The Cove and Century Village. Older coastal properties often face electrical wear from salt air, requiring frequent outlet repairs and panel replacements. We provide prompt emergency electrical services and robust surge protection for these vulnerable systems.',
    nearbyAreas: ['The Cove', 'Century Village', 'Deerfield Island', 'Waterways', 'Crystal Lake'],
  },
  {
    slug: 'coral-springs-fl',
    name: 'Coral Springs',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Coral Springs is a rapidly growing family-oriented city with a vast number of homes built in the 1980s and 90s. These properties are now prime candidates for whole-house rewiring, aluminum wiring remediation, and electrical panel upgrades. Our local electricians are highly familiar with Coral Springs\' residential infrastructure and offer specialized troubleshooting for aging circuits.',
    nearbyAreas: ['Eagle Trace', 'Heron Bay', 'Cypress Run', 'Maplewood', 'Kensington', 'Pine Tree Estates'],
  },
  {
    slug: 'parkland-fl',
    name: 'Parkland',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Known for its sprawling equestrian estates and luxury developments, Parkland demands high-capacity electrical systems. We frequently install Level 2 EV chargers, whole-home standby generators, and extensive outdoor lighting for Parkland homeowners. Our electrical contractors ensure your property has the robust electrical backbone required for modern luxury living.',
    nearbyAreas: ['Heron Bay', 'Pine Tree Estates', 'Parkland Golf & Country Club', 'Watercrest', 'MiraLago'],
  },
  {
    slug: 'pompano-beach-fl',
    name: 'Pompano Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Pompano Beach is undergoing massive redevelopment. From historic beachfront cottages in Hillsboro Shores to new commercial facilities, electrical demands are at an all-time high. Our team provides dedicated circuitry, code violation corrections, and marine-grade outdoor electrical installations designed to withstand the harsh South Florida coastal environment.',
    nearbyAreas: ['Hillsboro Shores', 'Pompano Beach Highlands', 'Palm Aire', 'Cypress Lakes', 'Collier City'],
  },
  {
    slug: 'coconut-creek-fl',
    name: 'Coconut Creek',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Often called the "Butterfly Capital of the World," Coconut Creek features a mix of established retirement communities like Wynmoor and newer family subdivisions. Our residential electricians frequently assist Wynmoor residents with ceiling fan installations, lighting upgrades, and safety inspections, while outfitting newer homes with dedicated EV charging stations.',
    nearbyAreas: ['Wynmoor', 'The Township', 'Monterey Lakes', 'Centura Park', 'Winston Park'],
  },
  {
    slug: 'boynton-beach-fl',
    name: 'Boynton Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description: 'Boynton Beach is a thriving residential community with a large concentration of active adult communities and rapidly expanding western suburbs. Homeowners here consistently trust us for electrical safety inspections, AFCI/GFCI breaker upgrades, and rapid-response emergency electrical repairs to protect their properties during Florida\'s severe storm seasons.',
    nearbyAreas: ['Aberdeen', 'Canyon Isles', 'Valencia Lakes', 'Hunters Run', 'Quail Ridge', 'Leisureville'],
  },
];

export const homeFaqs = [
  { q: 'Is Young Electric Inc an electrical contractor?', a: 'Yes. Young Electric Inc is a fully licensed and insured electrical contractor. Our in-house team performs all electrical work. When you call us, you speak directly with our team who handles all service, scheduling, and pricing directly with you.' },
  { q: 'What areas do you serve?', a: 'We provide homeowners with residential electrical team members serving Boca Raton and surrounding communities in Palm Beach and Broward Counties, including Delray Beach, Deerfield Beach, Coral Springs, Parkland, Pompano Beach, Coconut Creek, and Boynton Beach.' },
  { q: 'Do you handle commercial electrical work?', a: 'No. We exclusively provide homeowners with residential electrical services. We do not facilitate commercial, industrial, office, retail, restaurant, warehouse, or business electrical services of any kind.' },
  { q: 'How quickly can I be connected with a local electrician?', a: 'When you call 561-363-0946, you speak with an available residential electrician. Same-day connections are common, though availability depends on the time of your call and our schedule.' },
  { q: 'Am I obligated to hire our team I am connected with?', a: 'No. The initial connection carries no obligation. You speak with our team, get the information you need, and decide whether to schedule service. The choice is always yours.' },
  { q: 'What types of home electrical services can I request?', a: 'We provide homeowners with team members who handle a wide range of residential electrical needs, including electrical repair, outlet and switch repair, lighting installation, electrical panel service, residential wiring, ceiling fan installation, EV charger installation, electrical inspections, surge protection, and generator electrical service.' },
  { q: 'Is there a cost to call and be connected?', a: 'Calling to speak with a local team is free. Any costs for actual electrical work are discussed and agreed upon directly directly with our dedicated team.' },
  { q: 'Do you guarantee the work of our teams?', a: 'Yes. Young Electric Inc is a professional electrical contractor, and we stand behind our work. All our electrical work is fully guaranteed and warrantied directly by us.' },

  {
    slug: 'emergency-electrician-boca-raton-fl',
    title: 'Emergency Electrician in Boca Raton, FL',
    shortTitle: 'Emergency Electrician',
    h1: '24/7 Emergency Electrician in Boca Raton, FL',
    metaTitle: 'Emergency Electrician in Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Need a 24/7 emergency electrician in Boca Raton? Young Electric Inc provides fast, reliable emergency electrical repairs when you need them most. Call 561-363-0946.',
    heroImage: '/images/friendly-local-electrician.jpg',
    heroImageAlt: 'Emergency electrician arriving quickly in Boca Raton',
    intro: 'Electrical emergencies don\'t wait for regular business hours. Whether you have a sudden power loss, a sparking outlet, or a tripping breaker that won\'t reset, our 24/7 emergency electricians in Boca Raton are ready to restore safety to your home or business.',
    icon: 'Clock',
    sections: [
      {
        heading: 'What Our Emergency Service Includes',
        paragraphs: [
          'When you call us for an emergency, you get immediate attention. Our electricians arrive fully equipped to diagnose and repair urgent electrical faults on the spot.'
        ],
        list: [
          'Rapid response and troubleshooting',
          'Safe isolation of dangerous faults',
          'Temporary emergency repairs to restore power',
          'Comprehensive safety inspections',
        ]
      },
      {
        heading: 'Common Signs You Need an Emergency Electrician',
        paragraphs: [
          'Don\'t ignore these warning signs of severe electrical issues:'
        ],
        list: [
          'Burning smells coming from outlets or the breaker box',
          'Sparking or arcing from switches and receptacles',
          'Partial or total power loss in the home',
          'Breakers that trip immediately after being reset',
          'Water damage near electrical panels or wiring'
        ]
      },
      {
        heading: 'Our Emergency Process',
        paragraphs: [
          'We follow a strict protocol to ensure your safety and a rapid resolution.'
        ],
        list: [
          'Call our 24/7 emergency line',
          'Immediate safety assessment over the phone',
          'Rapid dispatch of an electrician',
          'On-site fault diagnosis and repair',
          'Post-repair safety testing'
        ]
      },
      {
        heading: 'Why Choose Young Electric Inc for Emergencies',
        paragraphs: [
          'When you are facing an electrical hazard, you need a trusted local team that will prioritize your safety without cutting corners.'
        ]
      }
    ],
    faqs: [
      { q: 'What constitutes an electrical emergency?', a: 'Any situation that poses an immediate risk of fire or electric shock is an emergency. This includes burning smells, sparking, exposed live wires, and sudden total power loss.' },
      { q: 'Are you available after hours?', a: 'Yes, we have 24/7 emergency call availability to address critical electrical failures.' }
    ],
    benefits: [
      { title: '24/7 Availability', desc: 'Ready to respond when you need us most.', icon: 'Clock' },
      { title: 'Safety First', desc: 'Immediate mitigation of fire and shock risks.', icon: 'ShieldCheck' },
      { title: 'Expert Diagnostics', desc: 'Fast identification of complex electrical faults.', icon: 'Zap' }
    ]
  },
  {
    slug: 'commercial-electrician-boca-raton-fl',
    title: 'Commercial Electrician in Boca Raton, FL',
    shortTitle: 'Commercial Electrician',
    h1: 'Commercial Electrician in Boca Raton, FL',
    metaTitle: 'Commercial Electrician in Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Trusted commercial electrician in Boca Raton, FL. We provide expert electrical repairs, lighting, wiring, and panel upgrades for businesses. Call 561-363-0946.',
    heroImage: '/images/new-construction-electrical-wiring.jpg',
    heroImageAlt: 'Commercial electrician working on complex business wiring',
    intro: 'Your business relies on a safe, efficient, and up-to-code electrical system. Our commercial electricians in Boca Raton specialize in minimizing downtime and ensuring your facility meets all local electrical codes and operational demands.',
    icon: 'Building',
    sections: [
      {
        heading: 'Comprehensive Commercial Services',
        paragraphs: [
          'From retail build-outs to office rewiring, we handle the unique demands of commercial electrical systems with precision and expertise.'
        ],
        list: [
          'Commercial electrical build-outs and renovations',
          'LED lighting retrofits and energy efficiency upgrades',
          'Dedicated circuitry and equipment wiring',
          'Commercial electrical panel upgrades and maintenance',
          'Code violation corrections'
        ]
      },
      {
        heading: 'The Commercial Electrical Process',
        paragraphs: [
          'We understand that time is money. Our process is designed to be efficient and minimally disruptive.'
        ],
        list: [
          'Initial consultation and site evaluation',
          'Detailed project estimation and timeline',
          'Coordination with local inspectors and permitting',
          'Professional installation or repair',
          'Final walkthrough and testing'
        ]
      },
      {
        heading: 'Why Businesses Choose Young Electric',
        paragraphs: [
          'We partner with local businesses to provide scalable, reliable electrical solutions that support growth and safety.'
        ]
      }
    ],
    faqs: [
      { q: 'Do you handle commercial permitting?', a: 'Yes, we manage all necessary electrical permits and coordinate with Boca Raton city inspectors to ensure compliance.' },
      { q: 'Can you work outside of normal business hours?', a: 'We can schedule projects to minimize disruption to your operations, including after-hours work when necessary.' }
    ],
    benefits: [
      { title: 'Code Compliant', desc: 'Strict adherence to NEC and local commercial codes.', icon: 'CheckCircle2' },
      { title: 'Minimal Downtime', desc: 'Efficient execution to keep your business running.', icon: 'Clock' },
      { title: 'Scalable Solutions', desc: 'Electrical systems designed for future growth.', icon: 'TrendingUp' }
    ]
  },
  {
    slug: 'electrical-troubleshooting-boca-raton-fl',
    title: 'Electrical Troubleshooting in Boca Raton, FL',
    shortTitle: 'Electrical Troubleshooting',
    h1: 'Electrical Troubleshooting & Diagnostics in Boca Raton, FL',
    metaTitle: 'Electrical Troubleshooting in Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Experiencing electrical issues? Our expert electricians provide comprehensive electrical troubleshooting and diagnostics in Boca Raton. Call 561-363-0946.',
    heroImage: '/images/testing-outlet-voltage.jpg',
    heroImageAlt: 'Electrician using a multimeter for troubleshooting',
    intro: 'Unexplained power losses, flickering lights, and tripping breakers can be frustrating and dangerous. Our expert electricians provide advanced electrical troubleshooting in Boca Raton to accurately diagnose and resolve complex hidden faults.',
    icon: 'Search',
    sections: [
      {
        heading: 'Advanced Diagnostic Services',
        paragraphs: [
          'We do not just guess; we use professional diagnostic equipment to trace faults directly to their source, saving you time and money.'
        ],
        list: [
          'Circuit tracing and mapping',
          'Voltage drop and load testing',
          'Grounding system verification',
          'Identifying loose or degrading connections',
          'Testing GFCI and AFCI integrity'
        ]
      },
      {
        heading: 'Common Signs You Need Troubleshooting',
        paragraphs: [
          'Call us for diagnostics if you experience any of these persistent issues:'
        ],
        list: [
          'Lights that dim when appliances turn on',
          'Outlets that occasionally stop working',
          'Unexplained spikes in your electric bill',
          'A slight humming sound near switches or panels',
          'Breakers that trip randomly without a clear overload'
        ]
      },
      {
        heading: 'Our Troubleshooting Process',
        paragraphs: [
          'A systematic approach to uncovering electrical gremlins.'
        ],
        list: [
          'Detailed symptom analysis',
          'Visual inspection of accessible components',
          'Instrument-based circuit testing',
          'Fault isolation and repair recommendation',
          'Execution of repairs and final load testing'
        ]
      },
      {
        heading: 'Why Choose Young Electric Inc',
        paragraphs: [
          'Troubleshooting requires experience. Our seasoned electricians have seen it all and can quickly identify issues that others might miss.'
        ]
      }
    ],
    faqs: [
      { q: 'How long does troubleshooting take?', a: 'Most faults are identified within the first hour of testing, but complex intermittent issues in older wiring can sometimes take longer to trace.' },
      { q: 'Is a tripping breaker always a bad breaker?', a: 'Not always. Often the breaker is doing its job by tripping due to a genuine overload or short circuit elsewhere in the line.' }
    ],
    benefits: [
      { title: 'Accurate Diagnosis', desc: 'We fix the root cause, not just the symptom.', icon: 'Target' },
      { title: 'Professional Tools', desc: 'State-of-the-art testing equipment used.', icon: 'Wrench' },
      { title: 'Safety Focused', desc: 'Identifying hidden fire hazards before they escalate.', icon: 'ShieldCheck' }
    ]
  },
  {
    slug: 'breaker-repair-boca-raton-fl',
    title: 'Circuit Breaker Repair in Boca Raton, FL',
    shortTitle: 'Breaker Repair',
    h1: 'Circuit Breaker Repair & Replacement in Boca Raton, FL',
    metaTitle: 'Circuit Breaker Repair in Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Keep tripping breakers? Get expert circuit breaker repair and replacement in Boca Raton from Young Electric Inc. Call 561-363-0946 for fast service.',
    heroImage: '/images/circuit-breakers-in-electrical-panel.jpg',
    heroImageAlt: 'Electrician replacing a faulty circuit breaker',
    intro: 'Your circuit breakers are the first line of defense against electrical fires. If you have a breaker that will not reset, feels hot to the touch, or trips constantly, our electricians provide expert breaker repair and replacement in Boca Raton.',
    icon: 'ToggleRight',
    sections: [
      {
        heading: 'Comprehensive Breaker Services',
        paragraphs: [
          'We service all major brands of electrical panels and handle everything from simple single-pole replacements to complex AFCI/GFCI upgrades.'
        ],
        list: [
          'Diagnosing frequently tripping breakers',
          'Replacing faulty or burned-out breakers',
          'Installing Arc Fault (AFCI) and Ground Fault (GFCI) breakers',
          'Upgrading breakers to handle higher loads',
          'Addressing double-tapped breakers'
        ]
      },
      {
        heading: 'Signs of a Bad Circuit Breaker',
        paragraphs: [
          'Breakers can wear out over time. Watch for these indicators:'
        ],
        list: [
          'The breaker feels warm or hot to the touch',
          'You smell burning plastic near the panel',
          'The breaker will not stay in the "On" position after resetting',
          'Visible scorching or rust on the breaker or bus bar',
          'The breaker trips constantly under normal loads'
        ]
      },
      {
        heading: 'Our Breaker Replacement Process',
        paragraphs: [
          'We ensure that every replacement is safe, code-compliant, and perfectly matched to your panel.'
        ],
        list: [
          'Load testing the affected circuit',
          'Inspecting the panel bus bar for damage',
          'Selecting the exact manufacturer-approved replacement',
          'Safe installation and torquing to spec',
          'Verification of proper operation under load'
        ]
      },
      {
        heading: 'Why Young Electric Inc',
        paragraphs: [
          'Never compromise on panel components. We only use OEM parts and never install mismatched or counterfeit breakers.'
        ]
      }
    ],
    faqs: [
      { q: 'Can I replace a breaker myself?', a: 'It is highly discouraged. Working inside the panel exposes you to lethal voltages. Only a licensed professional should remove the panel cover.' },
      { q: 'Why do AFCI breakers trip so often?', a: 'AFCI breakers are highly sensitive to arcing. If they trip frequently, it could indicate a loose connection, a damaged appliance cord, or sometimes a nuisance trip that requires a newer generation breaker.' }
    ],
    benefits: [
      { title: 'OEM Parts', desc: 'We only use exact-match, manufacturer-approved breakers.', icon: 'CheckCircle2' },
      { title: 'Fast Service', desc: 'Quick replacements to restore your power safely.', icon: 'Zap' },
      { title: 'Code Compliance', desc: 'Ensuring your panel meets current safety standards.', icon: 'ShieldCheck' }
    ]
  },
];

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: site.name,
  url: site.domain,
  telephone: site.phone,
  image: images.heroElectrician,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  areaServed: {
    '@type': 'City',
    name: site.mainLocation,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.mainLocation,
    addressRegion: site.mainStateAbbr,
    addressCountry: 'US'
  }
};
