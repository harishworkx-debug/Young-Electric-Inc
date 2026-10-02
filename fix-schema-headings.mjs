import fs from 'fs';
import path from 'path';

// 1. Update siteData.ts to add localBusinessSchema
const siteDataPath = path.join('src', 'data', 'siteData.ts');
let siteData = fs.readFileSync(siteDataPath, 'utf-8');

const schemaString = `
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: site.name,
  url: site.domain,
  telephone: site.phone,
  image: images.heroElectrician,
  areaServed: {
    '@type': 'City',
    name: site.mainLocation,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.mainLocation,
    addressRegion: site.mainStateAbbr,
    addressCountry: 'US'
  }
};
`;

if (!siteData.includes('export const localBusinessSchema')) {
  // append it at the end of the file
  siteData += schemaString;
  fs.writeFileSync(siteDataPath, siteData, 'utf-8');
  console.log('Added localBusinessSchema to siteData.ts');
}

// 2. Update HomePage.tsx schema
const homePagePath = path.join('src', 'pages', 'HomePage.tsx');
let homePage = fs.readFileSync(homePagePath, 'utf-8');

// replace import to include localBusinessSchema
homePage = homePage.replace(
  /import \{ site, services, locations, images, homeFaqs \} from '@\/data\/siteData';/,
  `import { site, services, locations, images, homeFaqs, localBusinessSchema } from '@/data/siteData';`
);

// replace the schema array in SEO to use localBusinessSchema instead of serviceSchema alone
homePage = homePage.replace(
  /schema=\{\[faqSchema, serviceSchema\]\}/,
  `schema={[localBusinessSchema, faqSchema, serviceSchema]}`
);

// fix H2s in HomePage: find h3 and make them h2 where appropriate
// We have to be careful with string replacements
homePage = homePage.replace(/<h3 className="text-xl/g, '<h2 className="text-xl');
homePage = homePage.replace(/<\/h3>/g, '</h2>');

fs.writeFileSync(homePagePath, homePage, 'utf-8');
console.log('Updated HomePage.tsx schema and headings');

// 3. Update LocationPage.tsx headings
const locationPagePath = path.join('src', 'pages', 'LocationPage.tsx');
let locationPage = fs.readFileSync(locationPagePath, 'utf-8');

// Remove redundant H2: <h2>{isElectrician ? `Electrician in ${location.name}...</h2>
locationPage = locationPage.replace(/<h2>\{isElectrician \? `Electrician in \$\{location\.name\}, \$\{location\.stateAbbr\}` : `Electrical Services in \$\{location\.name\}, \$\{location\.stateAbbr\}`\}<\/h2>/, '');

// Change <h3> to <h2>
locationPage = locationPage.replace(/<h3>/g, '<h2>');
locationPage = locationPage.replace(/<\/h3>/g, '</h2>');

fs.writeFileSync(locationPagePath, locationPage, 'utf-8');
console.log('Updated LocationPage.tsx headings');

// 4. Update ServicePage.tsx headings
const servicePagePath = path.join('src', 'pages', 'ServicePage.tsx');
let servicePage = fs.readFileSync(servicePagePath, 'utf-8');

// Change <h3> to <h2> in ServicePage as well
servicePage = servicePage.replace(/<h3/g, '<h2');
servicePage = servicePage.replace(/<\/h3>/g, '</h2>');

fs.writeFileSync(servicePagePath, servicePage, 'utf-8');
console.log('Updated ServicePage.tsx headings');
