import fs from 'fs';

const filePath = './src/data/siteData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update the Location type to include sections
content = content.replace(
  /content\?: string\[\];\n\};/,
  'content?: string[];\n  sections?: {\n    heading: string;\n    paragraphs: string[];\n    list?: string[];\n  }[];\n};'
);

// 2. Prepare the rich sections array as a string for Boca Raton
const sectionsString = `,
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
    ]`;

// 3. We find the end of the boca-raton-fl content array and inject sectionsString.
// The boca-raton-fl content array ends with:
// '...our team has the local expertise to handle it.'\n    ],
content = content.replace(
  /('Young Electric Inc provides reliable.*?local expertise to handle it.'\n    \])/,
  `$1${sectionsString}`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added rich sections to Boca Raton location.');
