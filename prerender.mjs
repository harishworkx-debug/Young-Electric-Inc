import fs from 'fs';
import path from 'path';

async function prerender() {
  console.log('Starting SSG Pre-rendering for all sitemap routes...');

  const template = fs.readFileSync('./dist/index.html', 'utf-8');
  const { render } = await import('./dist/server/entry-server.js');

  // Read sitemap to get all routes
  const sitemapXml = fs.readFileSync('./public/sitemap.xml', 'utf-8');
  const locRegex = /<loc>https:\/\/www\.youngelectricincfl\.com([^<]*)<\/loc>/g;
  const routes = [];
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    routes.push(match[1]);
  }

  console.log(`Found ${routes.length} routes to pre-render.`);

  for (const url of routes) {
    try {
      const { html, helmet } = render(url);

      const title = helmet?.title?.toString() || '';
      const meta = helmet?.meta?.toString() || '';
      const link = helmet?.link?.toString() || '';
      const script = helmet?.script?.toString() || '';

      // Inject rendered content and helmet tags into HTML template
      let pageHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      const headInjections = [title, meta, link, script].filter(Boolean).join('\n    ');

      pageHtml = pageHtml.replace('</head>', `  ${headInjections}\n  </head>`);

      // Determine output filepath
      const routePath = url === '/' ? '' : url.replace(/\/$/, '');
      const filePath = routePath
        ? path.join('./dist', routePath, 'index.html')
        : path.join('./dist', 'index.html');

      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, pageHtml, 'utf-8');
      console.log(`✓ Pre-rendered: ${url} -> ${filePath}`);
    } catch (err) {
      console.error(`✗ Error pre-rendering ${url}:`, err);
    }
  }

  // Clean up dist/server
  if (fs.existsSync('./dist/server')) {
    fs.rmSync('./dist/server', { recursive: true, force: true });
    console.log('Cleaned up temporary dist/server directory.');
  }

  console.log('✨ SSG Pre-rendering completed successfully!');
}

prerender();
