import fs from 'fs';
import path from 'path';

console.log('=== RUNNING TECHNICAL SEO & CRAWL VERIFICATION ===\n');

// 1. Verify robots.txt
const robotsTxt = fs.readFileSync('./public/robots.txt', 'utf-8');
console.log('1. Checking robots.txt:');
const hasAllow = robotsTxt.includes('Allow: /');
const hasSitemap = robotsTxt.includes('Sitemap: https://www.youngelectricincfl.com/sitemap.xml');
console.log(`   - Allow all: ${hasAllow ? '✓ PASS' : '✗ FAIL'}`);
console.log(`   - Sitemap directive: ${hasSitemap ? '✓ PASS' : '✗ FAIL'}`);

// 2. Read sitemap.xml
const sitemapXml = fs.readFileSync('./public/sitemap.xml', 'utf-8');
const locMatches = [...sitemapXml.matchAll(/<loc>https:\/\/www\.youngelectricincfl\.com([^<]*)<\/loc>/g)];
const urls = locMatches.map(m => m[1]);
console.log(`\n2. Checking sitemap.xml: Found ${urls.length} canonical URLs`);

// 3. Audit each pre-rendered HTML file in dist/
console.log('\n3. Crawling & Inspecting Static HTML Files in dist/:');
let passedPages = 0;
let issues = [];
const allInternalHrefs = new Set();

for (const url of urls) {
  const routePath = url === '/' ? '' : url.replace(/\/$/, '');
  const filePath = routePath
    ? path.join('./dist', routePath, 'index.html')
    : path.join('./dist', 'index.html');

  if (!fs.existsSync(filePath)) {
    issues.push(`Missing pre-rendered file: ${filePath} for URL ${url}`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  
  // Title Check
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) {
    issues.push(`Missing <title> in ${url}`);
  }

  // Meta Description Check
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/);
  const desc = descMatch ? descMatch[1].trim() : null;
  if (!desc) {
    issues.push(`Missing meta description in ${url}`);
  }

  // Canonical Link Check
  const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;
  const expectedCanonical = `https://www.youngelectricincfl.com${url}`;
  if (!canonical) {
    issues.push(`Missing canonical tag in ${url}`);
  }

  // Robots Meta Check
  const robotsMatch = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/);
  if (!robotsMatch || !robotsMatch[1].includes('index')) {
    issues.push(`Missing or non-indexable robots meta in ${url}`);
  }

  // Schema LD+JSON Check
  const schemaMatches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (schemaMatches.length === 0) {
    issues.push(`Missing schema JSON-LD in ${url}`);
  } else {
    for (const sm of schemaMatches) {
      try {
        JSON.parse(sm[1]);
      } catch (err) {
        issues.push(`Invalid JSON-LD syntax in ${url}: ${err.message}`);
      }
    }
  }

  // Collect internal hrefs for link validation
  const hrefMatches = [...html.matchAll(/href="(\/[^"#?]*)"/g)];
  for (const hm of hrefMatches) {
    const rawHref = hm[1];
    if (rawHref.startsWith('/') && !rawHref.startsWith('//')) {
      allInternalHrefs.add(rawHref);
    }
  }

  passedPages++;
}

console.log(`   - Audited ${passedPages} / ${urls.length} URLs.`);
if (issues.length === 0) {
  console.log(`   - Indexing, Canonicals, Meta Titles, Descriptions & JSON-LD: 100% PASS (0 issues found)`);
} else {
  console.log(`   - Found ${issues.length} issues:`, issues);
}

// 4. Broken Link Crawl
console.log('\n4. Validating Internal Links across site:');
const knownPaths = new Set(urls.map(u => u === '/' ? '/' : u.replace(/\/$/, '')));
let brokenLinks = [];

for (const href of allInternalHrefs) {
  const cleanHref = href === '/' ? '/' : href.replace(/\/$/, '');
  if (!knownPaths.has(cleanHref)) {
    // Check if it's an asset or static file
    if (!href.startsWith('/images/') && !href.startsWith('/assets/') && !href.endsWith('.xml') && !href.endsWith('.txt') && !href.endsWith('.webmanifest') && !href.endsWith('.svg')) {
      brokenLinks.push(href);
    }
  }
}

if (brokenLinks.length === 0) {
  console.log(`   - Verified ${allInternalHrefs.size} internal link destinations: 0 Broken Links!`);
} else {
  console.log(`   - Found broken internal links:`, brokenLinks);
}

console.log('\n=== TECHNICAL SEO AUDIT COMPLETE ===');
