import { Helmet } from 'react-helmet-async';
import { site } from '@/data/siteData';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  schema?: object[];
};

export default function SEO({ title, description, canonicalPath, schema = [] }: SEOProps) {
  const canonical = `${site.domain}${canonicalPath}`;
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phone,
    url: site.domain,
    image: `${site.domain}/og-image.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.mainLocation,
      addressRegion: site.mainStateAbbr,
      addressCountry: 'US',
    },
    areaServed: ['Boca Raton, FL', 'Delray Beach, FL', 'Deerfield Beach, FL', 'Coral Springs, FL', 'Parkland, FL', 'Pompano Beach, FL', 'Coconut Creek, FL', 'Boynton Beach, FL'],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
