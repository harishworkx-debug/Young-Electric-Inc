import fs from 'fs';

let content = fs.readFileSync('src/data/siteData.ts', 'utf-8');

const newServices = `
  {
    slug: 'emergency-electrician-boca-raton-fl',
    title: 'Emergency Electrician in Boca Raton, FL',
    shortTitle: 'Emergency Electrician',
    h1: '24/7 Emergency Electrician in Boca Raton, FL',
    metaTitle: 'Emergency Electrician in Boca Raton, FL | Young Electric Inc',
    metaDescription: 'Need a 24/7 emergency electrician in Boca Raton? Young Electric Inc provides fast, reliable emergency electrical repairs when you need them most. Call (561) 470-1433.',
    heroImage: '/images/friendly-local-electrician.jpg',
    heroImageAlt: 'Emergency electrician arriving quickly in Boca Raton',
    intro: 'Electrical emergencies don\\'t wait for regular business hours. Whether you have a sudden power loss, a sparking outlet, or a tripping breaker that won\\'t reset, our 24/7 emergency electricians in Boca Raton are ready to restore safety to your home or business.',
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
          'Don\\'t ignore these warning signs of severe electrical issues:'
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
    metaDescription: 'Trusted commercial electrician in Boca Raton, FL. We provide expert electrical repairs, lighting, wiring, and panel upgrades for businesses. Call (561) 470-1433.',
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
    metaDescription: 'Experiencing electrical issues? Our expert electricians provide comprehensive electrical troubleshooting and diagnostics in Boca Raton. Call (561) 470-1433.',
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
    metaDescription: 'Keep tripping breakers? Get expert circuit breaker repair and replacement in Boca Raton from Young Electric Inc. Call (561) 470-1433 for fast service.',
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
`;

// Insert the new services at the end of the array
const arrayEndIndex = content.lastIndexOf('];');
content = content.substring(0, arrayEndIndex) + newServices + content.substring(arrayEndIndex);

// Also modify Generator slug and title to include Installation
content = content.replace(/slug:\s*'generator-electrical-service-boca-raton-fl'/, "slug: 'generator-installation-boca-raton-fl'");
content = content.replace(/h1:\s*'Generator Electrical Service in Boca Raton, FL'/, "h1: 'Generator Installation & Transfer Switches in Boca Raton, FL'");
content = content.replace(/title:\s*'Generator Electrical Service'/, "title: 'Generator Installation & Transfer Switch'");

fs.writeFileSync('src/data/siteData.ts', content);
console.log('Added new money pages to siteData.ts');
