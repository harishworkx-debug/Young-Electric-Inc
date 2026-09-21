import fs from 'fs';

const content = fs.readFileSync('./src/data/siteData.ts', 'utf-8');

// Find all matches for services and locations
const serviceBlock = content.split('export const services: Service[] = [')[1].split('export type Location')[0];
const locationBlock = content.split('export const locations: Location[] = [')[1];

const getSlugs = (block) => {
  if (!block) return [];
  const regex = /slug:\s*'([^']+)'/g;
  const slugs = [];
  let match;
  while ((match = regex.exec(block)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
};

const services = getSlugs(serviceBlock);
const locations = getSlugs(locationBlock);

const domain = 'https://www.youngelectricincfl.com';

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Core routes
const routes = [
  '/',
  '/about/',
  '/faqs/',
  '/contact/'
];

services.forEach(slug => {
  routes.push(`/${slug}/`);
});

locations.forEach(slug => {
  routes.push(`/electrician-${slug}/`);
});

routes.forEach(route => {
  const priority = route === '/' ? '1.0' : '0.8';
  sitemap += `  <url>\n    <loc>${domain}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
});

sitemap += '</urlset>\n';

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Generated public/sitemap.xml with', routes.length, 'URLs');

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`;
fs.writeFileSync('./public/robots.txt', robots);
console.log('Generated public/robots.txt');
