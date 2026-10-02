import fs from 'fs';

const filePath = './src/data/siteData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Add the property to the Location type
content = content.replace(
  /export type Location = \{([\s\S]*?)\};/,
  'export type Location = {$1  content?: string[];\n};'
);

const locationData = {
  'boca-raton-fl': [
    'Boca Raton properties range from established mid-century ranches to modern luxury estates and bustling commercial facilities. This diverse architecture means electrical requirements vary significantly from neighborhood to neighborhood.',
    'Older homes in Boca Raton frequently require electrical panel upgrades, rewiring, and surge protection to safely support modern HVAC systems and appliances. Meanwhile, newer properties and renovations often call for EV charger installations, smart home lighting, and backup generator connections to prepare for South Florida storm seasons.',
    'Young Electric Inc provides reliable, code-compliant electrical services tailored to Boca Raton properties. Whether you are dealing with a tripping breaker, need a safety inspection, or are planning a major electrical upgrade, our team has the local expertise to handle it.'
  ],
  'delray-beach-fl': [
    'Electrical properties in Delray Beach have unique requirements based on property age, service capacity, and exposure to coastal weather conditions. The mix of historic homes near Pineapple Grove and newer developments means a one-size-fits-all approach to electrical service does not work here.',
    'Common electrical projects in Delray Beach include upgrading outdated electrical panels in older homes, installing weather-resistant outdoor lighting for waterfront properties, and adding dedicated circuits for home remodels. Salt air and humidity can accelerate wear on exterior electrical components, making professional inspections crucial.',
    'Young Electric Inc understands the specific electrical needs of Delray Beach properties and delivers safe, high-quality solutions for every project.'
  ],
  'deerfield-beach-fl': [
    'Located just south of the Palm Beach County line, Deerfield Beach features a variety of properties that often require targeted electrical upgrades to meet current building codes and safety standards.',
    'Many properties in Deerfield Beach benefit from whole-home surge protection to guard against Florida’s frequent lightning storms. Additionally, upgrading legacy wiring and installing energy-efficient LED lighting are popular services for both older homes and commercial spaces in the area.',
    'When you need an electrician in Deerfield Beach, Young Electric Inc provides the expertise needed to keep your electrical systems running safely and efficiently.'
  ],
  'coral-springs-fl': [
    'Coral Springs is known for its master-planned neighborhoods, many of which were built in the 1970s through the 1990s. As these properties age, their original electrical systems often struggle to keep up with today’s high-tech demands.',
    'Home and business owners in Coral Springs frequently rely on our team for electrical panel upgrades, GFCI outlet replacements, and the installation of dedicated circuits for home offices or new appliances. Generator transfer switches are also highly requested to ensure uninterrupted power during outages.',
    'Young Electric Inc provides Coral Springs with prompt, professional electrical services that prioritize safety and modern convenience.'
  ],
  'parkland-fl': [
    'With its spacious lots and large estate homes, Parkland properties often feature complex electrical systems that require specialized knowledge. High-capacity service panels and extensive outdoor electrical networks are common here.',
    'Electricians in Parkland frequently handle Level 2 EV charger installations, intricate landscape and security lighting designs, and comprehensive backup generator integrations. Ensuring these robust systems operate flawlessly is our top priority.',
    'Young Electric Inc delivers the premium electrical services that Parkland property owners expect, combining technical expertise with exceptional customer care.'
  ],
  'pompano-beach-fl': [
    'Pompano Beach boasts a dynamic mix of waterfront properties, historic homes, and growing commercial sectors. The coastal environment here demands durable, weather-rated electrical installations.',
    'Frequent electrical needs in Pompano Beach include upgrading electrical services to 200-amp panels, replacing corroded outdoor outlets and fixtures, and performing safety inspections for property sales or renovations.',
    'Our team at Young Electric Inc is equipped to handle the unique electrical challenges of Pompano Beach, ensuring your property remains safe, functional, and up to code.'
  ],
  'coconut-creek-fl': [
    'Known as the Butterfly Capital of the World, Coconut Creek features a variety of established neighborhoods and newer developments. Maintaining safe and efficient electrical systems is essential for properties in this community.',
    'Residents and businesses in Coconut Creek regularly call on us for ceiling fan installations to combat the Florida heat, smart lighting upgrades, and troubleshooting for tripping breakers or flickering lights.',
    'Young Electric Inc provides reliable, high-quality electrical solutions to keep Coconut Creek properties powered safely year-round.'
  ],
  'boynton-beach-fl': [
    'As a rapidly growing community, Boynton Beach encompasses everything from active adult communities to new family neighborhoods and commercial plazas. This growth brings a high demand for both new electrical installations and maintenance of existing systems.',
    'Electrical services commonly requested in Boynton Beach include whole-house surge protection, GFCI outlet upgrades for kitchens and bathrooms, and emergency repair services to address sudden electrical faults.',
    'Trust Young Electric Inc to provide Boynton Beach with expert electrical services that meet the highest standards of safety and reliability.'
  ]
};

let newContent = content;

Object.keys(locationData).forEach(slug => {
  const contentArray = locationData[slug];
  const contentStr = `\n    content: [\n      '` + contentArray.join(`',\n      '`) + `'\n    ],`;
  
  const regex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?nearbyAreas:\\s*\\[.*?\\])(,?)(\\s*\\})`, 'g');
  newContent = newContent.replace(regex, `$1,$2${contentStr}$3`);
});

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('Location content updated successfully!');
