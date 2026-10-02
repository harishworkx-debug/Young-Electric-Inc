import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { site } from '@/data/siteData';

type BreadcrumbItem = {
  name: string;
  url: string; // The relative path e.g. "/services"
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  theme?: 'dark' | 'light';
};

export default function Breadcrumbs({ items, theme = 'light' }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: site.domain,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${site.domain}${item.url}`,
      })),
    ],
  };

  const navClasses = theme === 'dark' 
    ? 'flex items-center gap-2 text-sm text-neutral-300 mb-6'
    : 'py-3 px-4 mb-4 bg-neutral-100 rounded-lg flex items-center space-x-2 text-sm text-neutral-600';

  const linkClasses = theme === 'dark'
    ? 'hover:text-white transition-colors truncate'
    : 'hover:text-primary-600 transition-colors truncate';

  const currentClasses = theme === 'dark'
    ? 'text-accent-400 font-medium truncate'
    : 'font-medium text-neutral-900 truncate';

  const separatorClasses = theme === 'dark'
    ? 'text-neutral-500'
    : 'text-neutral-400';

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <nav aria-label="Breadcrumb" className={theme === 'light' ? "py-3 px-4 mb-4 bg-neutral-100 rounded-lg" : "mb-6"}>
        <ol className={`flex items-center space-x-2 text-sm ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
          <li>
            <Link to="/" className={`flex items-center ${linkClasses}`}>
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              <ChevronRight className={`h-4 w-4 mx-1 flex-shrink-0 ${separatorClasses}`} />
              {index === items.length - 1 ? (
                <span className={currentClasses} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.url} className={linkClasses}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
