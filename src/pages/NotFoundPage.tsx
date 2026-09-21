import { Link } from 'react-router-dom';
import { Phone, Home } from 'lucide-react';
import SEO from '@/components/SEO';
import { site } from '@/data/siteData';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Young Electric Inc"
        description="The page you are looking for could not be found. Call 561-470-1433 to hire a residential electrician in Boca Raton, FL."
        canonicalPath="/404"
      />

      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50 py-20">
        <div className="container-page text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-100 mb-6">
            <Home className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="font-display text-5xl font-bold text-neutral-900 mb-4">404</h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-md mx-auto">
            The page you are looking for could not be found. Let us help you get connected with a local residential electrician.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <a href={site.phoneRaw} className="btn-call">
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
