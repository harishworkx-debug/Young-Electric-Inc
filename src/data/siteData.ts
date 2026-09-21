export const site = {
  name: 'Young Electric Inc',
  domain: 'https://youngelectricincfl.com',
  phone: '561-470-1433',
  phoneRaw: 'tel:5614701433',
  email: 'info@youngelectricincfl.com',
  mainLocation: 'Boca Raton',
  mainState: 'Florida',
  mainStateAbbr: 'FL',
  mapsUrl: 'https://maps.app.goo.gl/jyRiooFFE5S231r38',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114420.61163989243!2d-80.2016935!3d26.3730385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9e4e7a3a6a94b%3A0x4f10f1e6e7e7b4e0!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000',
  rating: '5.0',
};

export const images = {
  heroElectrician:
    'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  heroPanel:
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  electricianPanel:
    'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  electricianDrill:
    'https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  electricianWiring:
    'https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  panelCloseup:
    'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  outletInstall:
    'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  outletWall:
    'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  switchWall:
    'https://images.pexels.com/photos/36738243/pexels-photo-36738243.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  outletCloseup:
    'https://images.pexels.com/photos/978743/pexels-photo-978743.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  lightingLivingRoom:
    'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  lightingChandelier:
    'https://images.pexels.com/photos/14495880/pexels-photo-14495880.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  lightingCeilingLight:
    'https://images.pexels.com/photos/15269291/pexels-photo-15269291.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  ceilingFanRoom:
    'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  ceilingFanBedroom:
    'https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  evCharger:
    'https://images.pexels.com/photos/27355826/pexels-photo-27355826.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  evCharger2:
    'https://images.pexels.com/photos/27355830/pexels-photo-27355830.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  inspection:
    'https://images.pexels.com/photos/8293680/pexels-photo-8293680.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  inspection2:
    'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  surgeProtection:
    'https://images.pexels.com/photos/39234197/pexels-photo-39234197.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  surgeOutlet:
    'https://images.pexels.com/photos/218445/pexels-photo-218445.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  generator:
    'https://images.pexels.com/photos/9875678/pexels-photo-9875678.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  wiring:
    'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  wiring2:
    'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  floridaHome:
    'https://images.pexels.com/photos/19219055/pexels-photo-19219055.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  floridaHome2:
    'https://images.pexels.com/photos/5177211/pexels-photo-5177211.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  electricianSmile:
    'https://images.pexels.com/photos/7647233/pexels-photo-7647233.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
  lightBulb:
    'https://images.pexels.com/photos/7641361/pexels-photo-7641361.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
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
    metaTitle: 'Residential Electrician Boca Raton, FL | Young Electric Inc',
    metaDescription:
      'Connect with a residential electrician in Boca Raton, FL for safe, reliable home electrical service. Call 561-470-1433 to be connected with a local provider.',
    heroImage: images.heroElectrician,
    heroImageAlt: 'Residential electrician working on an electrical panel in a Boca Raton, FL home',
    icon: 'Home',
    intro:
      'Finding a dependable residential electrician in Boca Raton, FL does not have to be stressful. Young Electric Inc connects homeowners with independent local electrical professionals who handle everyday home electrical needs—from troubleshooting and repairs to new installations and panel upgrades. Every connection we facilitate is focused on residential properties only, so you get help from someone who understands the wiring, panels, and lighting systems common in South Florida homes.',
    benefits: [
      { title: 'Residential Focus', desc: 'Every provider we connect you with works on homes, not commercial or industrial facilities.', icon: 'Home' },
      { title: 'Local Knowledge', desc: 'Connect with professionals familiar with Boca Raton neighborhoods and building practices.', icon: 'MapPin' },
      { title: 'Fast Response', desc: 'Request a connection and get a callback from a local provider, often the same day.', icon: 'Zap' },
      { title: 'Clear Communication', desc: 'You talk directly with the provider we connect you with—no layers in between.', icon: 'Phone' },
    ],
    sections: [
      {
        heading: 'What a Residential Electrician Can Help With',
        paragraphs: [
          'Residential electricians handle a wide range of in-home electrical tasks. If you live in Boca Raton and need help with flickering lights, tripping breakers, outdated outlets, or a panel that cannot keep up with modern appliances, connecting with a qualified local electrician is the safest choice. Electrical work in a home is not a do-it-yourself project—mistakes can lead to shocks, fires, and failed inspections.',
          'When you call Young Electric Inc, we connect you with an independent local provider who can assess your situation, explain what is going on, and give you a clear picture of the work your home needs. You are never obligated, and the provider handles all scheduling and pricing directly with you.',
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
          'Young Electric Inc is a lead-generation service. We do not employ electricians or perform electrical work ourselves. Instead, we connect you with independent local residential electrical providers who serve the Boca Raton area. Your call goes through to a professional who can help, and the relationship from that point is directly between you and that provider.',
        ],
      },
      {
        heading: 'How the Process Works',
        paragraphs: [
          'The process is simple and transparent. You call our number, and we connect you with an available residential electrical provider serving Boca Raton. That provider discusses your needs, answers your questions, and—when you are ready—arranges a visit to your home. You receive a quote and decide whether to move forward. There is no obligation from the initial connection.',
        ],
      },
    ],
    faqs: [
      { q: 'Is Young Electric Inc an electrical contractor?', a: 'No. Young Electric Inc is a lead-generation service that connects homeowners with independent local residential electrical providers. We do not perform electrical work ourselves.' },
      { q: 'How quickly can I get connected with a local electrician?', a: 'When you call 561-470-1433, we connect you with an available provider. In many cases, you will receive a callback the same day, though availability depends on the provider and time of your call.' },
      { q: 'Do you serve commercial properties?', a: 'No. We exclusively connect homeowners with residential electrical providers. We do not facilitate commercial, industrial, or business electrical services.' },
      { q: 'Am I obligated to hire the provider I am connected with?', a: 'No. The initial connection carries no obligation. You speak with the provider, get the information you need, and decide whether to schedule service.' },
    ],
  },
  {
    slug: 'electrical-repair-boca-raton-fl',
    title: 'Electrical Repair Boca Raton, FL',
    shortTitle: 'Electrical Repair',
    h1: 'Electrical Repair in Boca Raton, FL',
    metaTitle: 'Electrical Repair Boca Raton, FL | Fast Home Electrical Fixes',
    metaDescription:
      'Need electrical repair in Boca Raton, FL? Connect with a local residential electrical provider for safe, reliable home repairs. Call 561-470-1433.',
    heroImage: images.electricianDrill,
    heroImageAlt: 'Electrician performing electrical repair work on a residential panel in Boca Raton, FL',
    icon: 'Wrench',
    intro:
      'Electrical problems in your home can range from mildly annoying to genuinely dangerous. Flickering lights, outlets that stopped working, breakers that trip every time you run the microwave—these are all signs that something in your home electrical system needs attention. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who diagnose and repair home electrical issues safely.',
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
          'When you call us, we connect you with a local provider who handles common residential electrical repairs throughout Boca Raton.',
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
          'Young Electric Inc is a lead-generation service, not an electrical contractor. When you call 561-470-1433, we connect you with an independent local provider who handles residential electrical repairs in Boca Raton. The provider discusses your situation, schedules a visit if needed, and handles all work and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a flickering light an emergency?', a: 'A single flickering light may just be a bad bulb, but if changing the bulb does not fix it—or if multiple lights flicker—it could indicate a loose connection or wiring problem. Connecting with a residential electrical provider is the safe move.' },
      { q: 'What does it mean if my breaker keeps tripping?', a: 'A tripping breaker usually means the circuit is overloaded or there is a short somewhere. A residential electrical professional can identify which and repair it safely.' },
      { q: 'Are you the company doing the repair?', a: 'No. Young Electric Inc is a lead-generation service. We connect you with an independent local residential electrical provider who performs the work.' },
    ],
  },
  {
    slug: 'outlet-repair-boca-raton-fl',
    title: 'Outlet Repair Boca Raton, FL',
    shortTitle: 'Outlet Repair',
    h1: 'Outlet Repair in Boca Raton, FL',
    metaTitle: 'Outlet Repair Boca Raton, FL | GFCI, Receptacle & Outlet Fixes',
    metaDescription:
      'Outlet not working in your Boca Raton home? Connect with a local residential electrical provider for safe outlet and GFCI repair. Call 561-470-1433.',
    heroImage: images.outletInstall,
    heroImageAlt: 'Electrician installing and repairing a wall outlet in a Boca Raton, FL residence',
    icon: 'Plug',
    intro:
      'A dead outlet, a loose receptacle, or a GFCI that keeps tripping can disrupt your daily routine and create safety risks in your home. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who repair and replace outlets safely and to code.',
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
          'Outlets are among the most used parts of your home electrical system, and they wear out over time. If you notice any of the following, it is time to connect with a residential electrical provider.',
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
          'Ground Fault Circuit Interrupter (GFCI) outlets are required by modern electrical code in kitchens, bathrooms, garages, and outdoor areas. They protect against electric shock by cutting power when they detect a fault. If your home has older non-GFCI outlets in these areas—or if your existing GFCI outlets are not working—a residential electrical provider can upgrade them.',
          'South Florida homes are particularly vulnerable to moisture, which makes functioning GFCI outlets even more important. A provider we connect you with can test your existing GFCI outlets and replace any that fail.',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Call 561-470-1433 and we connect you with an independent local residential electrical provider serving Boca Raton. The provider handles all scheduling, repairs, and pricing directly with you. Young Electric Inc is a lead-generation service and does not perform electrical work.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I just replace an outlet myself?', a: 'Outlet replacement involves working inside an energized electrical box. Without proper training, you risk shock, fire, or creating a code violation. Connecting with a residential electrical provider is the safer choice.' },
      { q: 'What is a GFCI outlet?', a: 'A GFCI outlet shuts off power when it detects a ground fault, protecting against electric shock. They are required in kitchens, bathrooms, garages, and outdoor areas of homes.' },
      { q: 'Do you handle commercial outlet repair?', a: 'No. We exclusively connect homeowners with residential electrical providers. We do not facilitate commercial or industrial electrical work.' },
    ],
  },
  {
    slug: 'switch-repair-boca-raton-fl',
    title: 'Switch Repair Boca Raton, FL',
    shortTitle: 'Switch Repair',
    h1: 'Switch Repair in Boca Raton, FL',
    metaTitle: 'Switch Repair Boca Raton, FL | Light Switch Fixes & Replacement',
    metaDescription:
      'Light switch sparking or not working? Connect with a local residential electrical provider in Boca Raton for safe switch repair. Call 561-470-1433.',
    heroImage: images.switchWall,
    heroImageAlt: 'Close-up of a residential light switch on a wall in a Boca Raton, FL home',
    icon: 'ToggleLeft',
    intro:
      'A light switch that crackles when you flip it, feels warm, or does not work at all is more than an inconvenience—it can be a safety hazard. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who diagnose and repair switch problems in homes.',
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
          'Not all fixtures are compatible with dimmers, and smart switches require proper wiring—often a neutral wire that older homes may not have at the switch location. A residential electrical provider can assess your home and recommend the right options.',
        ],
      },
      {
        heading: 'Connecting With a Local Provider',
        paragraphs: [
          'Young Electric Inc is a lead-generation service. When you call, we connect you with an independent local residential electrical provider who handles switch repairs and replacements in Boca Raton homes. The provider manages all scheduling and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a warm light switch dangerous?', a: 'A switch that feels warm can indicate an overloaded circuit or a failing switch. It should be inspected by a residential electrical provider to rule out a fire hazard.' },
      { q: 'Can any light be put on a dimmer?', a: 'Not all fixtures and bulbs are dimmable. A residential electrical provider can tell you whether your fixture supports a dimmer and recommend compatible bulbs.' },
      { q: 'Do you do commercial switch repair?', a: 'No. We only connect homeowners with residential electrical providers for home switch repair and replacement.' },
    ],
  },
  {
    slug: 'lighting-installation-boca-raton-fl',
    title: 'Lighting Installation Boca Raton, FL',
    shortTitle: 'Lighting Installation',
    h1: 'Lighting Installation in Boca Raton, FL',
    metaTitle: 'Lighting Installation Boca Raton, FL | Indoor & Outdoor Home Lighting',
    metaDescription:
      'Upgrade your home with professional lighting installation in Boca Raton, FL. Connect with a local residential electrical provider. Call 561-470-1433.',
    heroImage: images.lightingLivingRoom,
    heroImageAlt: 'Beautiful modern living room with elegant lighting installation in a Boca Raton, FL home',
    icon: 'Lightbulb',
    intro:
      'Lighting transforms the look and feel of your home. Whether you want to update a single room with new fixtures or add landscape lighting to your yard, Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who install lighting safely and beautifully.',
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
          'New lighting can completely change the ambiance of a room. From modern recessed cans that brighten a kitchen to a statement chandelier in a dining room, a residential electrical provider can install fixtures that match your home style and meet electrical code.',
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
          'Outdoor lighting enhances curb appeal and improves security around your home. A residential electrical provider can install pathway lights, uplighting for trees and architectural features, and security lighting at entry points.',
          'All outdoor lighting must be properly rated for wet locations and connected to GFCI-protected circuits. A professional ensures your outdoor installation is safe and weather-resistant—especially important in South Florida.',
        ],
      },
      {
        heading: 'LED Upgrades and Energy Efficiency',
        paragraphs: [
          'Upgrading older incandescent or halogen fixtures to LED lighting is one of the easiest ways to reduce your home electricity usage. LEDs use a fraction of the energy, last years longer, and produce less heat. A residential electrical provider can retrofit existing fixtures or install new LED lighting throughout your home.',
        ],
      },
      {
        heading: 'How the Connection Works',
        paragraphs: [
          'Young Electric Inc is a lead-generation service. Call 561-470-1433 and we connect you with an independent local residential electrical provider serving Boca Raton. The provider handles all installation details and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I install a chandelier myself?', a: 'Heavy fixtures require proper support in the ceiling box, and wiring must be connected correctly. A residential electrical provider ensures the fixture is safely supported and wired to code.' },
      { q: 'Do you install commercial or retail lighting?', a: 'No. We only connect homeowners with residential electrical providers for home lighting installation.' },
      { q: 'Can a provider install smart lighting?', a: 'Yes. A residential electrical provider can install smart switches, smart bulbs, and integrated lighting systems for your home.' },
    ],
  },
  {
    slug: 'electrical-panel-service-boca-raton-fl',
    title: 'Electrical Panel Service Boca Raton, FL',
    shortTitle: 'Electrical Panel',
    h1: 'Electrical Panel Service in Boca Raton, FL',
    metaTitle: 'Electrical Panel Service Boca Raton, FL | Panel Upgrades & Repair',
    metaDescription:
      'Need an electrical panel upgrade in Boca Raton, FL? Connect with a local residential electrical provider for safe panel service. Call 561-470-1433.',
    heroImage: images.panelCloseup,
    heroImageAlt: 'Close-up of a residential electrical panel with circuit breakers in a Boca Raton, FL home',
    icon: 'LayoutGrid',
    intro:
      'Your electrical panel is the heart of your home electrical system. It distributes power to every circuit and protects your home from overloads. If your panel is outdated, damaged, or too small for your needs, Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who service, repair, and upgrade home panels.',
    benefits: [
      { title: 'Panel Upgrades', desc: 'Replace outdated 100-amp panels with modern 200-amp service.', icon: 'TrendingUp' },
      { title: 'Safety First', desc: 'Remove dangerous or recalled panels from your home.', icon: 'ShieldCheck' },
      { title: 'More Capacity', desc: 'Add circuits for new appliances, EV chargers, or home additions.', icon: 'Zap' },
      { title: 'Residential Only', desc: 'Home panel service exclusively—no commercial panels.', icon: 'Home' },
    ],
    sections: [
      {
        heading: 'Does Your Home Need a Panel Upgrade?',
        paragraphs: [
          'Many homes in Boca Raton were built with 100-amp or 150-amp electrical panels that are adequate for basic use but struggle to support modern electrical demands. If you have added an EV charger, a tankless water heater, a new addition, or an upgraded kitchen, your panel may need more capacity.',
          'Signs that your panel may need service or replacement include:',
        ],
        list: [
          'Breakers that trip frequently',
          'A panel that is warm, rusted, or has burn marks',
          'Lights that dim when appliances turn on',
          'Not enough breaker space for new circuits',
          'A panel that is over 25 years old',
          'Use of multiple power strips because you lack outlets',
          'Insurance requirements or inspection findings',
        ],
      },
      {
        heading: 'Outdated and Recalled Panels',
        paragraphs: [
          'Some older panels—particularly certain Federal Pacific Electric (FPE) and Zinsco brands—have known safety defects and are considered fire hazards. If your Boca Raton home has one of these panels, connecting with a residential electrical provider to replace it is strongly recommended.',
          'A provider we connect you with can identify your panel type and advise whether replacement is warranted.',
        ],
      },
      {
        heading: 'Subpanel Installation',
        paragraphs: [
          'If your main panel is in good shape but you need additional circuits—such as for a garage workshop, a backyard pool, or a home addition—a subpanel can be a cost-effective solution. A residential electrical provider installs a subpanel fed from your main panel and runs new circuits from it.',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Young Electric Inc is a lead-generation service. We connect you with an independent local residential electrical provider who handles panel inspections, upgrades, and replacements in Boca Raton homes. Call 561-470-1433 to be connected.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does a panel upgrade take?', a: 'A typical residential panel upgrade takes about a day, though the provider we connect you with can give you a specific timeline based on your home.' },
      { q: 'Will my power be off during the upgrade?', a: 'Yes, power is typically shut off for several hours during a panel replacement. The provider coordinates this with you in advance.' },
      { q: 'Do you service commercial panels?', a: 'No. We exclusively connect homeowners with residential electrical providers for home panel service.' },
    ],
  },
  {
    slug: 'residential-wiring-boca-raton-fl',
    title: 'Residential Wiring Boca Raton, FL',
    shortTitle: 'Residential Wiring',
    h1: 'Residential Wiring in Boca Raton, FL',
    metaTitle: 'Residential Wiring Boca Raton, FL | Home Wiring & Rewiring',
    metaDescription:
      'Need home wiring or rewiring in Boca Raton, FL? Connect with a local residential electrical provider for safe, code-compliant wiring. Call 561-470-1433.',
    heroImage: images.wiring,
    heroImageAlt: 'Residential electrical wiring being installed during a home renovation in Boca Raton, FL',
    icon: 'Cable',
    intro:
      'Proper wiring is the foundation of a safe home electrical system. Whether you are renovating a room, adding a new circuit, or rewiring an older home, Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who handle home wiring safely and to code.',
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
          'Many homes built between 1965 and 1973 have aluminum branch-circuit wiring, which is a known fire hazard. Aluminum expands and contracts differently than copper, causing connections to loosen over time. If your home has aluminum wiring, a residential electrical provider can recommend remediation options such as pigtailing with copper connectors or full rewiring.',
        ],
      },
      {
        heading: 'Wiring for Renovations and Additions',
        paragraphs: [
          'If you are remodeling a kitchen, finishing a room, or building a home addition, new wiring is almost always required. A residential electrical provider runs new circuits, installs outlets and switches, and connects fixtures as part of the renovation. All new wiring must meet current code, including AFCI protection on bedroom and living-area circuits.',
        ],
      },
      {
        heading: 'How the Connection Works',
        paragraphs: [
          'Young Electric Inc is a lead-generation service. Call 561-470-1433 and we connect you with an independent local residential electrical provider for home wiring and rewiring in Boca Raton. The provider manages all work and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does whole-home rewiring cost?', a: 'The cost depends on your home size, accessibility, and the scope of work. The provider we connect you with can give you an estimate after assessing your home.' },
      { q: 'How long does rewiring take?', a: 'A full home rewire typically takes several days to a week depending on the size of the home and accessibility of the wiring. The provider can give you a specific timeline.' },
      { q: 'Do you do commercial wiring?', a: 'No. We exclusively connect homeowners with residential electrical providers for home wiring projects.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation-boca-raton-fl',
    title: 'Ceiling Fan Installation Boca Raton, FL',
    shortTitle: 'Ceiling Fan Installation',
    h1: 'Ceiling Fan Installation in Boca Raton, FL',
    metaTitle: 'Ceiling Fan Installation Boca Raton, FL | Safe Ceiling Fan Mounting',
    metaDescription:
      'Need a ceiling fan installed in your Boca Raton home? Connect with a local residential electrical provider for safe, secure installation. Call 561-470-1433.',
    heroImage: images.ceilingFanRoom,
    heroImageAlt: 'Living room with a ceiling fan installed in a Boca Raton, FL home',
    icon: 'Fan',
    intro:
      'A ceiling fan keeps your home comfortable and can lower your cooling costs—but only if it is installed correctly. Ceiling fans are heavier than standard light fixtures and require proper support and wiring. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who install ceiling fans safely and securely.',
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
          'A residential electrical provider installs a fan-rated mounting box, secures it properly to the ceiling structure, and wires the fan and any light kit safely. This is especially important in South Florida homes where fans run year-round.',
        ],
      },
      {
        heading: 'Fan Installation Options',
        paragraphs: [
          'Whether you are replacing an existing fan or adding one where there was only a light, a residential electrical provider handles the full installation.',
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
          'Call 561-470-1433 to be connected with an independent local residential electrical provider serving Boca Raton. The provider handles installation, scheduling, and pricing directly with you. Young Electric Inc is a lead-generation service and does not perform installations.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I hang a ceiling fan where a light fixture is now?', a: 'Only if the existing box is fan-rated and properly supported. Most standard light boxes are not. A residential electrical provider can assess and upgrade the box if needed.' },
      { q: 'Do you install fans in commercial spaces?', a: 'No. We only connect homeowners with residential electrical providers for ceiling fan installation in homes.' },
      { q: 'Can a provider install a fan with a remote control?', a: 'Yes. A residential electrical provider can install fans with remote controls, wall-mounted speed controls, or smart home integration.' },
    ],
  },
  {
    slug: 'ev-charger-installation-boca-raton-fl',
    title: 'EV Charger Installation Boca Raton, FL',
    shortTitle: 'EV Charger Installation',
    h1: 'EV Charger Installation in Boca Raton, FL',
    metaTitle: 'EV Charger Installation Boca Raton, FL | Home EV Charging Stations',
    metaDescription:
      'Install a home EV charger in Boca Raton, FL. Connect with a local residential electrical provider for safe Level 2 charger installation. Call 561-470-1433.',
    heroImage: images.evCharger,
    heroImageAlt: 'Home EV charger installed on a wall for convenient electric vehicle charging in Boca Raton, FL',
    icon: 'BatteryCharging',
    intro:
      'More Boca Raton homeowners are driving electric vehicles, and a dedicated home charging station makes ownership far more convenient. Young Electric Inc connects homeowners with independent local residential electrical providers who install Level 2 EV chargers safely and to code.',
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
          'Installing a Level 2 charger requires a dedicated circuit, proper breaker sizing, and safe wiring from your panel to the charging location. A residential electrical provider handles all of this and ensures the installation meets code.',
        ],
      },
      {
        heading: 'Choosing the Right Charger and Location',
        paragraphs: [
          'EV chargers come in plug-in and hardwired versions. The best choice depends on your panel capacity, charging location, and charger model. A residential electrical provider can help you decide.',
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
          'Young Electric Inc is a lead-generation service. Call 561-470-1433 and we connect you with an independent local residential electrical provider who installs home EV chargers in Boca Raton. The provider manages all installation and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I charge my EV from a regular outlet?', a: 'You can use a standard 120-volt outlet with the charger that comes with most EVs, but it is very slow—typically 3-5 miles of range per hour. A Level 2 charger on a dedicated 240-volt circuit is much faster and safer for regular use.' },
      { q: 'Will I need a panel upgrade for an EV charger?', a: 'It depends on your current panel capacity and existing load. A residential electrical provider can assess your panel and let you know if an upgrade is needed.' },
      { q: 'Do you install commercial EV charging stations?', a: 'No. We exclusively connect homeowners with residential electrical providers for home EV charger installation.' },
    ],
  },
  {
    slug: 'electrical-inspection-boca-raton-fl',
    title: 'Electrical Inspection Boca Raton, FL',
    shortTitle: 'Electrical Inspection',
    h1: 'Electrical Inspection in Boca Raton, FL',
    metaTitle: 'Electrical Inspection Boca Raton, FL | Home Safety Inspections',
    metaDescription:
      'Schedule a residential electrical inspection in Boca Raton, FL. Connect with a local provider for a thorough home safety assessment. Call 561-470-1433.',
    heroImage: images.inspection,
    heroImageAlt: 'Home electrical inspection checklist being reviewed for a residential property in Boca Raton, FL',
    icon: 'ClipboardCheck',
    intro:
      'Whether you are buying a home, selling one, or just want peace of mind about your current home, a residential electrical inspection gives you a clear picture of your electrical system condition. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who perform thorough home electrical inspections.',
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
          'A residential electrical inspection is a top-to-bottom review of your home electrical system. A provider we connect you with can assess the condition of your panel, wiring, outlets, grounding, and protective devices.',
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
          'Young Electric Inc is a lead-generation service. Call 561-470-1433 and we connect you with an independent local residential electrical provider who performs home electrical inspections in Boca Raton. The provider handles all scheduling and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does a home electrical inspection take?', a: 'A thorough residential inspection typically takes 1-2 hours depending on the size and age of your home. The provider can give you a more specific estimate.' },
      { q: 'Do I get a report after the inspection?', a: 'Yes, a residential electrical provider typically provides a written or verbal summary of findings and any recommended repairs or upgrades.' },
      { q: 'Do you do commercial inspections?', a: 'No. We exclusively connect homeowners with residential electrical providers for home inspections.' },
    ],
  },
  {
    slug: 'surge-protection-boca-raton-fl',
    title: 'Surge Protection Boca Raton, FL',
    shortTitle: 'Surge Protection',
    h1: 'Surge Protection in Boca Raton, FL',
    metaTitle: 'Surge Protection Boca Raton, FL | Whole-Home Surge Protection',
    metaDescription:
      'Protect your home electronics with whole-home surge protection in Boca Raton, FL. Connect with a local residential electrical provider. Call 561-470-1433.',
    heroImage: images.surgeProtection,
    heroImageAlt: 'Surge protection equipment for a residential electrical system in a Boca Raton, FL home',
    icon: 'Shield',
    intro:
      'South Florida is the lightning capital of the United States, and power surges can destroy electronics, appliances, and even your electrical panel in seconds. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who install whole-home and point-of-use surge protection.',
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
          'Call 561-470-1433 to be connected with an independent local residential electrical provider serving Boca Raton. The provider assesses your home, recommends the right surge protection, and handles installation and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Does a whole-home surge protector replace power strips?', a: 'No. A whole-home protector handles large surges at the panel, but point-of-use protectors at outlets provide a second layer for sensitive electronics. Both are recommended.' },
      { q: 'How long does a whole-home surge protector last?', a: 'Most whole-home surge protectors last 3-5 years depending on the number and severity of surges they absorb. A residential electrical provider can check its status during an inspection.' },
      { q: 'Do you install commercial surge protection?', a: 'No. We exclusively connect homeowners with residential electrical providers for home surge protection.' },
    ],
  },
  {
    slug: 'generator-electrical-service-boca-raton-fl',
    title: 'Generator Electrical Service Boca Raton, FL',
    shortTitle: 'Generator Electrical',
    h1: 'Generator Electrical Service in Boca Raton, FL',
    metaTitle: 'Generator Electrical Service Boca Raton, FL | Home Generator Hookup',
    metaDescription:
      'Need generator electrical service in Boca Raton, FL? Connect with a local residential electrical provider for home generator hookups. Call 561-470-1433.',
    heroImage: images.generator,
    heroImageAlt: 'Home backup generator installation for a residential property in Boca Raton, FL',
    icon: 'Power',
    intro:
      'Hurricane season means power outages in South Florida, and a backup generator keeps your home running when the grid goes down. Young Electric Inc connects Boca Raton homeowners with independent local residential electrical providers who handle the electrical side of home generator installation—including transfer switches, inlet boxes, and wiring.',
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
          'A residential electrical provider installs and connects all the electrical components needed for your generator system.',
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
          'Standby generators are permanently installed outside your home and start automatically when the power goes out. They require an automatic transfer switch and a dedicated fuel source (natural gas or propane). A residential electrical provider handles all the electrical connections for either type.',
        ],
      },
      {
        heading: 'How We Connect You',
        paragraphs: [
          'Young Electric Inc is a lead-generation service. Call 561-470-1433 and we connect you with an independent local residential electrical provider who handles generator electrical service in Boca Raton homes. The provider manages all work and pricing directly with you.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you sell or deliver generators?', a: 'No. We connect you with residential electrical providers who handle the electrical installation—transfer switches, wiring, and connections. Generator selection and purchase is between you and the provider.' },
      { q: 'Is a transfer switch required?', a: 'Yes. Some form of transfer switch or interlock is required by code to prevent backfeeding utility lines. A residential electrical provider installs the right option for your generator.' },
      { q: 'Do you do commercial generator installation?', a: 'No. We exclusively connect homeowners with residential electrical providers for home generator electrical service.' },
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
    description:
      'Boca Raton is a vibrant residential community in Palm Beach County known for its beautiful homes, family-friendly neighborhoods, and upscale residential developments. Homeowners here value reliable residential electrical service for everything from lighting upgrades to panel modernization.',
    nearbyAreas: ['Boca Raton', 'Boca Del Mar', 'Boca Pointe', 'Mission Bay', 'West Boca Raton'],
  },
  {
    slug: 'delray-beach-fl',
    name: 'Delray Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Delray Beach is a charming coastal community just south of Boca Raton with a mix of historic homes and modern residential developments. Homeowners often need residential electrical help for older home wiring updates and new fixture installations.',
    nearbyAreas: ['Delray Beach', 'Pineapple Grove', 'Lake Ida', 'Tropic Isle'],
  },
  {
    slug: 'deerfield-beach-fl',
    name: 'Deerfield Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Deerfield Beach sits between Boca Raton and Pompano Beach and offers a range of residential neighborhoods. Homeowners here frequently need residential electrical services for panel upgrades, outlet repairs, and lighting installations.',
    nearbyAreas: ['Deerfield Beach', 'Coves', 'Palm Aire', 'The Meadows'],
  },
  {
    slug: 'coral-springs-fl',
    name: 'Coral Springs',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Coral Springs is a family-oriented residential city in Broward County with many single-family homes built in the 1970s through 2000s. These homes often need electrical panel upgrades, additional circuits, and modern lighting.',
    nearbyAreas: ['Coral Springs', 'Eagle Trace', 'Heron Bay', 'Cypress Run'],
  },
  {
    slug: 'parkland-fl',
    name: 'Parkland',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Parkland is a quiet residential city known for its large homes and equestrian properties. Homeowners here often request residential electrical help for new construction wiring, EV charger installation, and whole-home surge protection.',
    nearbyAreas: ['Parkland', 'Coral Springs', 'Heron Bay', 'Pine Tree Parkland'],
  },
  {
    slug: 'pompano-beach-fl',
    name: 'Pompano Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Pompano Beach offers waterfront homes and established residential neighborhoods. Homeowners commonly need residential electrical service for older home rewiring, outlet upgrades, and ceiling fan installation.',
    nearbyAreas: ['Pompano Beach', 'Hillsboro Shores', 'Pompano Beach Highlands', 'Palm Aire'],
  },
  {
    slug: 'coconut-creek-fl',
    name: 'Coconut Creek',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Coconut Creek is a residential city in Broward County with a mix of established and newer home communities. Homeowners frequently need residential electrical help for lighting upgrades, panel service, and generator electrical connections.',
    nearbyAreas: ['Coconut Creek', 'Wynmoor', 'The Township', 'Monterey Lakes'],
  },
  {
    slug: 'boynton-beach-fl',
    name: 'Boynton Beach',
    state: 'Florida',
    stateAbbr: 'FL',
    description:
      'Boynton Beach is a growing residential community in Palm Beach County with many active adult communities and family neighborhoods. Homeowners here often need residential electrical service for outlet repair, surge protection, and electrical inspections.',
    nearbyAreas: ['Boynton Beach', 'Aberdeen', 'Chase Cove', 'Pelican Cove'],
  },
];

export const homeFaqs = [
  { q: 'Is Young Electric Inc an electrical contractor?', a: 'No. Young Electric Inc is a lead-generation service that connects homeowners with independent local residential electrical providers. We do not employ electricians or perform electrical work ourselves. When you call us, we connect you with an available local provider who handles all service, scheduling, and pricing directly with you.' },
  { q: 'What areas do you serve?', a: 'We connect homeowners with residential electrical providers serving Boca Raton and surrounding communities in Palm Beach and Broward Counties, including Delray Beach, Deerfield Beach, Coral Springs, Parkland, Pompano Beach, Coconut Creek, and Boynton Beach.' },
  { q: 'Do you handle commercial electrical work?', a: 'No. We exclusively connect homeowners with residential electrical providers. We do not facilitate commercial, industrial, office, retail, restaurant, warehouse, or business electrical services of any kind.' },
  { q: 'How quickly can I be connected with a local electrician?', a: 'When you call 561-470-1433, we connect you with an available residential electrical provider. Same-day connections are common, though availability depends on the time of your call and provider schedules.' },
  { q: 'Am I obligated to hire the provider I am connected with?', a: 'No. The initial connection carries no obligation. You speak with the provider, get the information you need, and decide whether to schedule service. The choice is always yours.' },
  { q: 'What types of home electrical services can I request?', a: 'We connect homeowners with providers who handle a wide range of residential electrical needs, including electrical repair, outlet and switch repair, lighting installation, electrical panel service, residential wiring, ceiling fan installation, EV charger installation, electrical inspections, surge protection, and generator electrical service.' },
  { q: 'Is there a cost to call and be connected?', a: 'Calling to be connected with a local provider is free. Any costs for actual electrical work are discussed and agreed upon directly between you and the provider.' },
  { q: 'Do you guarantee the work of the providers?', a: 'No. Young Electric Inc is a lead-generation service and does not perform or warranty electrical work. Any guarantees or warranties would come directly from the provider you are connected with.' },
];
