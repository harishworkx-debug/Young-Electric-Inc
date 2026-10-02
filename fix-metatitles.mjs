import fs from 'fs';

const filePath = './src/data/siteData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Update metaTitles for all services.
// We can use a regex to match metaTitle and shortTitle inside each object
// But since the objects might have them in different order, let's just parse the file string or use regex
content = content.replace(/shortTitle:\s*'([^']+)',[\s\S]*?metaTitle:\s*'([^']+)',/g, (match, shortTitle, oldMetaTitle) => {
  return match.replace(oldMetaTitle, `${shortTitle} in Boca Raton, FL | Young Electric Inc`);
});

// Since some objects might have metaTitle before shortTitle, let's do the opposite match as well, just in case
content = content.replace(/metaTitle:\s*'([^']+)',[\s\S]*?shortTitle:\s*'([^']+)',/g, (match, oldMetaTitle, shortTitle) => {
  // Only replace if it doesn't already have Young Electric Inc
  if (!oldMetaTitle.includes('Young Electric Inc')) {
    return match.replace(oldMetaTitle, `${shortTitle} in Boca Raton, FL | Young Electric Inc`);
  }
  return match;
});

// For specific meta description for EV
content = content.replace(
  /metaDescription: 'Need a home EV charging station.*?',/,
  "metaDescription: 'Expert EV charger installation in Boca Raton, FL. Get your Level 2 home charging station installed safely by Young Electric Inc. Call (561) 470-1433.',"
);

// For electrical repair
content = content.replace(
  /metaDescription: 'Fast and reliable home electrical repair.*?',/,
  "metaDescription: 'Fast and reliable electrical repair in Boca Raton, FL. From tripping breakers to wiring issues, Young Electric Inc provides expert service. Call (561) 470-1433.',"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('metaTitles updated in siteData.ts');
