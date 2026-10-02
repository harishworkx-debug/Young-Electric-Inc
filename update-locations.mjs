import fs from 'fs';

const updatedLocations = `export const locations: Location[] = [
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
    description: 'Delray Beach combines a rich history with rapid modern development. Many classic homes near the Pineapple Grove Arts District and Lake Ida are undergoing renovations that require modern electrical panels and grounded wiring. Whether you need a commercial electrician for an Atlantic Ave storefront or residential electrical repairs, we navigate Delray\\'s local building codes seamlessly.',
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
    description: 'Coral Springs is a rapidly growing family-oriented city with a vast number of homes built in the 1980s and 90s. These properties are now prime candidates for whole-house rewiring, aluminum wiring remediation, and electrical panel upgrades. Our local electricians are highly familiar with Coral Springs\\' residential infrastructure and offer specialized troubleshooting for aging circuits.',
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
    description: 'Boynton Beach is a thriving residential community with a large concentration of active adult communities and rapidly expanding western suburbs. Homeowners here consistently trust us for electrical safety inspections, AFCI/GFCI breaker upgrades, and rapid-response emergency electrical repairs to protect their properties during Florida\\'s severe storm seasons.',
    nearbyAreas: ['Aberdeen', 'Canyon Isles', 'Valencia Lakes', 'Hunters Run', 'Quail Ridge', 'Leisureville'],
  },
];`;

let content = fs.readFileSync('src/data/siteData.ts', 'utf-8');
const startIndex = content.indexOf('export const locations: Location[] = [');
const endIndex = content.indexOf('];', startIndex) + 2;

content = content.substring(0, startIndex) + updatedLocations + content.substring(endIndex);

fs.writeFileSync('src/data/siteData.ts', content);
console.log('Updated locations in siteData.ts');
