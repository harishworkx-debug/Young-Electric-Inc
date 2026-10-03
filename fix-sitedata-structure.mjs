import fs from 'fs';

let content = fs.readFileSync('./src/data/siteData.ts', 'utf-8');

// 1. Fix domain
content = content.replace("domain: 'https://youngelectricincfl.com'", "domain: 'https://www.youngelectricincfl.com'");

// 2. Fix services structure
// Let's locate the 4 misplaced service objects inside homeFaqs
const misplacedStart = content.indexOf("  {\n    slug: 'emergency-electrician-boca-raton-fl',");
const misplacedEnd = content.indexOf("export const localBusinessSchema = {");

if (misplacedStart !== -1 && misplacedEnd !== -1) {
  const misplacedServicesStr = content.substring(misplacedStart, misplacedEnd).trim();
  // Remove misplacedServicesStr from homeFaqs
  const homeFaqsHeader = content.substring(0, misplacedStart).trim() + "\n];\n\n";
  const restStr = content.substring(misplacedEnd);

  // Find where services ends (before export type Location)
  const servicesEnd = homeFaqsHeader.indexOf("export type Location");
  
  const beforeLocation = homeFaqsHeader.substring(0, servicesEnd);
  const afterLocation = homeFaqsHeader.substring(servicesEnd);

  // Find the last ]; of services array before export type Location
  const lastBracket = beforeLocation.lastIndexOf("];");

  const newServicesPart = beforeLocation.substring(0, lastBracket) + ",\n  " + misplacedServicesStr.slice(0, -1) + "\n];\n\n";

  content = newServicesPart + afterLocation + restStr;
  fs.writeFileSync('./src/data/siteData.ts', content);
  console.log("Successfully fixed siteData.ts structure!");
} else {
  console.log("Could not find misplaced services section", { misplacedStart, misplacedEnd });
}
