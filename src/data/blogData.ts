import { images } from './siteData';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'electrical-safety-inspection-guide',
    title: "The Homeowner's Guide to Electrical Safety Inspections",
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
      "Lightning strikes and grid fluctuations can send massive voltage spikes through your home's wiring, destroying expensive electronics instantly.",
      '## Point-of-Use vs Whole-House',
      'Power strips only protect what is plugged into them and often fail during major surges. Whole-house protection is installed directly at the breaker box.',
      '## How It Works',
      'When a surge enters your home, the protector instantly diverts the excess voltage into the ground, safeguarding every circuit, including hardwired appliances like AC units and refrigerators.',
      '## Installation',
      'Installation takes just a few hours and provides years of peace of mind. Call Young Electric Inc today to secure your home.'
    ]
  },
  {
    slug: 'how-much-does-electrician-cost-boca-raton',
    title: 'How Much Does an Electrician Cost in Boca Raton?',
    excerpt: 'Understanding electrical service pricing, from simple service calls to full panel upgrades in the South Florida area.',
    date: '2023-11-15',
    author: 'Young Electric Inc',
    imageUrl: images.floridaHome,
    content: [
      'One of the most common questions we get is, "How much will this cost?" While every job is unique, understanding how electricians price their services can help you budget effectively for your home repairs or upgrades in Boca Raton.',
      '## The Service Call Fee',
      'Most reputable electricians charge a service call or dispatch fee. This covers the cost of sending a licensed professional in a fully stocked truck to your home. At Young Electric Inc, we believe in transparent pricing and will always discuss our fees before we dispatch a technician.',
      '## Flat Rate vs. Hourly',
      'For most residential jobs, we use flat-rate pricing. This means we quote you a single, upfront price for the entire job after evaluating the problem. You know exactly what you will pay before any work begins, regardless of how long it takes.',
      '## Average Costs for Common Jobs',
      '- **Outlet or Switch Repair:** Typically ranges from $150 to $300, depending on wiring condition.',
      '- **Ceiling Fan Installation:** Usually $200 to $400 per fan, assuming pre-existing wiring.',
      '- **Panel Upgrade:** A major project that typically ranges from $2,500 to $4,500 depending on the amperage and local permitting fees.',
      '## Never Compromise on Safety',
      "While it's tempting to hire an unlicensed handyman to save money, electrical work is dangerous. Incorrect wiring can cause fires, void your home insurance, and result in costly repairs down the line."
    ]
  },
  {
    slug: 'signs-your-electrical-panel-needs-replacement',
    title: 'Signs Your Electrical Panel Needs Replacement',
    excerpt: "Your electrical panel is the heart of your home's power system. Here are the warning signs that it might be time for an upgrade.",
    date: '2023-12-02',
    author: 'Young Electric Inc',
    imageUrl: images.inspection,
    content: [
      'Your electrical panel (or breaker box) distributes power throughout your home. Over time, these panels can become outdated or overloaded, especially as we add more energy-hungry appliances to our homes.',
      '## Common Warning Signs',
      '**1. Frequent Tripped Breakers:** If your breakers trip constantly, it means your system is drawing more power than the panel can safely handle.',
      '**2. Flickering or Dimming Lights:** If turning on a microwave or AC unit causes lights to dim, your panel may be struggling to distribute power evenly.',
      '**3. Burning Smells or Scorch Marks:** This is an immediate red flag. A burning smell near your panel indicates an active electrical hazard.',
      '**4. Age of the Panel:** If your home is more than 20-25 years old and still has its original panel (especially brands like Federal Pacific or Zinsco), you should have it evaluated by a professional.',
      '## Upgrading to a 200-Amp Panel',
      'Modern homes often require at least a 200-amp panel to support modern appliances, HVAC systems, and EV chargers safely. If you suspect your panel needs an upgrade, contact a licensed electrician for an inspection.'
    ]
  },
  {
    slug: 'do-you-need-electrician-for-ev-charger',
    title: 'Do You Need an Electrician for an EV Charger?',
    excerpt: 'Can you plug your new EV into a regular outlet, or do you need a dedicated charging station installed by a pro? We explain the differences.',
    date: '2024-01-10',
    author: 'Young Electric Inc',
    imageUrl: images.floridaHome2,
    content: [
      'Congratulations on your new electric vehicle! As you plan how to charge it at home, you might wonder if a professional electrician is really necessary.',
      '## Level 1 vs. Level 2 Charging',
      "Level 1 chargers plug into standard 120-volt household outlets. While convenient, they charge very slowly—adding only about 3-5 miles of range per hour. For many daily commuters, this isn't enough.",
      'Level 2 chargers use a 240-volt circuit and require dedicated wiring. They charge vehicles much faster (15-30 miles of range per hour) but require professional installation.',
      '## The Dangers of DIY',
      'Installing a Level 2 charger requires running a new, high-amperage circuit from your electrical panel to the garage or driveway. Mistakes can lead to overheating wires, melted receptacles, and severe fire hazards.',
      '## Permitting and Rebates',
      'A licensed electrician will ensure the installation meets all local codes and pull the necessary permits. Furthermore, many utility companies and municipalities require proof of professional installation to qualify for EV charger rebates.'
    ]
  }
];
