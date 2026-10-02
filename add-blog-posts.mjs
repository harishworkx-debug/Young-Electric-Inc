import fs from 'fs';

const newPosts = `
  {
    slug: 'electrical-safety-inspection-guide',
    title: 'The Homeowner\\'s Guide to Electrical Safety Inspections',
    excerpt: 'When should you get an electrical inspection? Learn the key warning signs and what to expect during a comprehensive home safety check.',
    date: '2026-09-28',
    author: 'Young Electric Inc',
    imageUrl: '/images/electrical-safety-inspection-checklist.jpg',
    content: [
      '## Why Inspections Matter',
      'Electrical systems degrade over time. Heat, pests, and moisture can compromise wiring, leading to hidden fire hazards.',
      '## Key Triggers for an Inspection',
      '**1. Buying or Selling:** Always require an inspection before closing.',
      '**2. Older Homes:** Homes over 30 years old often have outdated panels or aluminum wiring.',
      '**3. Post-Renovation:** Ensure new additions are up to code.',
      '## What We Look For',
      'During an inspection, our team checks the grounding system, panel integrity, AFCI/GFCI protection, and tests individual circuits for proper voltage and load capacity.'
    ]
  },
  {
    slug: 'why-whole-house-surge-protection',
    title: 'Why Florida Homes Need Whole-House Surge Protection',
    excerpt: 'South Florida is the lightning capital of the US. Discover how whole-house surge protection saves your appliances and electronics from devastating strikes.',
    date: '2026-10-01',
    author: 'Young Electric Inc',
    imageUrl: '/images/whole-home-surge-protector.jpg',
    content: [
      '## The Threat of Power Surges',
      'Lightning strikes and grid fluctuations can send massive voltage spikes through your home\\'s wiring, destroying expensive electronics instantly.',
      '## Point-of-Use vs Whole-House',
      'Power strips only protect what is plugged into them and often fail during major surges. Whole-house protection is installed directly at the breaker box.',
      '## How It Works',
      'When a surge enters your home, the protector instantly diverts the excess voltage into the ground, safeguarding every circuit, including hardwired appliances like AC units and refrigerators.',
      '## Installation',
      'Installation takes just a few hours and provides years of peace of mind. Call Young Electric Inc today to secure your home.'
    ]
  },
];`;

let content = fs.readFileSync('src/data/blogData.ts', 'utf-8');
content = content.replace('];', newPosts);
fs.writeFileSync('src/data/blogData.ts', content);
console.log('Added informational blog posts');
