import fs from 'fs';

const filePath = './src/data/siteData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update phone number
content = content.replace(/phone: '561-363-0946'/, "phone: '(561) 470-1433'");
content = content.replace(/phoneRaw: 'tel:5613630946'/, "phoneRaw: 'tel:5614701433'");

// 2. Update Location type
content = content.replace(
  /content\?: string\[\];\n\};/,
  'content?: string[];\n  sections?: {\n    heading: string;\n    paragraphs: string[];\n    list?: string[];\n  }[];\n};'
);

// 3. Update Boca Raton location (from lines 795 to 803 in the original file)
const bocaRegex = /\{\n\s*slug: 'boca-raton-fl'[\s\S]*?nearbyAreas: \['Boca Raton', 'Boca Del Mar', 'Boca Pointe', 'Mission Bay', 'West Boca Raton'\],\n\s*\}/;
const newBocaContent = `{
    slug: 'boca-raton-fl',
    name: 'Boca Raton',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Boca Raton is a vibrant residential community in Palm Beach County known for its beautiful homes, family-friendly neighborhoods, and upscale residential developments. Homeowners here value reliable residential electrical service for everything from lighting upgrades to panel modernization.',
    nearbyAreas: ['Boca Raton', 'Boca Del Mar', 'Boca Pointe', 'Mission Bay', 'West Boca Raton'],
    content: [
      'Boca Raton requires a true electrical partner. From the historic homes near downtown to the expansive estates in West Boca and the bustling commercial corridors, properties here demand specialized knowledge. Young Electric Inc delivers both residential and commercial electrical services tailored specifically for the Boca Raton community.',
    ],
    sections: [
      {
        heading: 'Comprehensive Residential & Commercial Services',
        paragraphs: [
          'Whether you are managing a retail space on Palmetto Park Road or renovating a single-family home in Boca Del Mar, our team handles it all. We understand that commercial properties need minimal downtime during electrical repairs, while residential projects require careful attention to interior aesthetics and safety.'
        ]
      },
      {
        heading: 'Emergency Electrical Service in Boca Raton',
        paragraphs: [
          'Electrical emergencies do not wait for business hours. A sudden power loss, a sparking panel, or storm damage requires immediate attention. Our emergency electrical services ensure that your Boca Raton home or business is safe and fully operational as quickly as possible.'
        ]
      },
      {
        heading: 'Panel Upgrades & EV Chargers',
        paragraphs: [
          'As Boca Raton homeowners adopt electric vehicles and smart home technologies, electrical panels are being pushed to their limits. We specialize in upgrading older 100-amp panels to robust 200-amp or 400-amp services.',
          'With your new capacity, we can safely install Level 2 EV chargers in your garage or driveway, ensuring fast, code-compliant charging for your electric vehicle.'
        ]
      },
      {
        heading: 'Standby Generators for Storm Season',
        paragraphs: [
          'South Florida hurricane seasons make reliable backup power a necessity. We install whole-home and commercial standby generators, complete with automatic transfer switches, ensuring your Boca Raton property never loses power during severe weather.'
        ]
      },
      {
        heading: 'Navigating Local Permitting & HOA Regulations',
        paragraphs: [
          'Electrical work in Boca Raton often involves strict municipal codes and rigorous HOA or condo board approvals. Our team has extensive experience navigating local permitting processes. We handle the paperwork, schedule the inspections, and ensure all work complies perfectly with Boca Raton building regulations and community rules.'
        ]
      }
    ]
  }`;
content = content.replace(bocaRegex, newBocaContent);

// 4. Update the panel service (around line 380 to 442)
// Since we know the slugs, we can just find them and slice the array of strings, or just use substring.
const panelSlugIndex = content.indexOf("slug: 'electrical-panel-service-boca-raton-fl'");
const startObject = content.lastIndexOf('{', panelSlugIndex);
const nextSlugIndex = content.indexOf("slug: 'residential-wiring-boca-raton-fl'");
const endObject = content.lastIndexOf('},', nextSlugIndex) + 2; // includes "},"

const newPanelService = `{
    slug: 'electrical-panel-service-boca-raton-fl',
    title: 'Electrical Panel Replacement Boca Raton, FL',
    shortTitle: 'Electrical Panel Replacement',
    h1: 'Electrical Panel Replacement in Boca Raton, FL',
    metaTitle: 'Electrical Panel Replacement Boca Raton, FL | Upgrades & Repair',
    metaDescription: 'Need an electrical panel upgrade or replacement in Boca Raton, FL? Hire a local residential electrical team for safe panel service. Call (561) 470-1433.',
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
          'Many homes in Boca Raton were built with 100-amp panels that struggle to support today\\'s electrical demands. You likely need a panel replacement or upgrade if you experience any of the following:'
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
          'Load Assessment: We calculate your home\\'s total power demand to size your new panel correctly.',
          'Recommendation: You receive a clear, upfront proposal with no hidden fees.',
          'Permit & Coordination: We handle all Boca Raton city permits and coordinate with FPL for service disconnection if required.',
          'Installation: Our expert electricians safely remove the old panel and install the new system to code.',
          'Inspection & Testing: We test every circuit and schedule the final municipal inspection.'
        ]
      },
      {
        heading: 'Why Choose Young Electric Inc',
        paragraphs: [
          'We aren\\'t just a generic contractor; we are Boca Raton\\'s trusted electrical experts. We differentiate ourselves through our deep understanding of local building codes, our ability to seamlessly navigate HOA requirements, and our commitment to using only premium, corrosion-resistant electrical components suited for South Florida\\'s climate.'
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
  },`;

content = content.substring(0, startObject) + newPanelService + content.substring(endObject);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('All changes applied successfully!');
