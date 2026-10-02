import fs from 'fs';

const filePath = './src/data/siteData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update phone number
content = content.replace(/phone: '561-363-0946'/, "phone: '(561) 470-1433'");
content = content.replace(/phoneRaw: 'tel:5613630946'/, "phoneRaw: 'tel:5614701433'");

// 2. Safely replace the electrical-panel-service-boca-raton-fl object.
// Instead of a massive greedy regex, let's just find the start of the object
// and find where it ends, or use a more precise regex.
const startIndex = content.indexOf(`slug: 'electrical-panel-service-boca-raton-fl'`);
if (startIndex !== -1) {
  // Find the opening brace before the slug
  const objectStartIndex = content.lastIndexOf('{', startIndex);
  // Find the next service's slug to know where to stop
  const nextServiceIndex = content.indexOf(`slug: 'home-wiring-rewiring-boca-raton-fl'`);
  const objectEndIndex = content.lastIndexOf('},', nextServiceIndex) + 1; // get the '}'

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
  }`;

  content = content.substring(0, objectStartIndex) + newPanelService + content.substring(objectEndIndex);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Updated Panel Service structure and global phone number.');
} else {
  console.log('Could not find electrical panel service');
}
