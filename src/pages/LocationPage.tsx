import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import { site, services, locations, type Location } from '@/data/siteData';

export default function LocationPage({
  location,
  pageType,
}: {
  location: Location;
  pageType: 'electrician' | 'services';
}) {
  const isElectrician = pageType === 'electrician';
  const slug = isElectrician ? `electrician-${location.slug}` : `electrical-services-${location.slug}`;
  const h1 = isElectrician
    ? `Electrician in ${location.name}, ${location.stateAbbr}`
    : `Electrical Services in ${location.name}, ${location.stateAbbr}`;
  const metaTitle = isElectrician
    ? `Electrician ${location.name}, ${location.stateAbbr} | Residential Electrical`
    : `Electrical Services ${location.name}, ${location.stateAbbr} | Residential`;
  const metaDescription = isElectrician
    ? `Hire a residential electrician in ${location.name}, ${location.stateAbbr}. We provide homeowners with expert in-house electricians. Call ${site.phone}.`
    : `Residential electrical services in ${location.name}, ${location.stateAbbr}. Hire an expert in-house electrician. Call ${site.phone}.`;

  const localFaqs = [
    { q: `Do you connect homeowners with electricians in ${location.name}, ${location.stateAbbr}?`, a: `Yes. Young Electric Inc connects homeowners in ${location.name} and surrounding areas with expert in-house electricians. Call ${site.phone} to be connected.` },
    { q: `Is this a residential-only service?`, a: `Yes. We exclusively connect homeowners with residential electrical team members. We do not facilitate commercial, industrial, office, retail, restaurant, warehouse, or business electrical services.` },
    { q: `Are you a licensed and insured electrical contractor?`, a: `Yes, Young Electric Inc is a fully licensed and insured electrical contractor serving the local area with professional residential electrical services.` },
    { q: `What electrical services can I request in ${location.name}?`, a: `We provide homeowners with team members who handle residential electrical repair, outlet and switch repair, lighting installation, panel service, wiring, ceiling fan installation, EV charger installation, inspections, surge protection, and generator electrical service. Note: individual service detail pages are available for Boca Raton, our main service location.` },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath={`/${slug}`}
        schema={[faqSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="container-page relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-neutral-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/#service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-accent-400">{location.name}, {location.stateAbbr}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent-400" />
              {location.name}, {location.stateAbbr}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
              {h1}
            </h1>
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
              Hire an expert in-house electrician serving {location.name}, {location.stateAbbr} and nearby neighborhoods. {isElectrician ? 'Find available home electricians for repairs, installations, and upgrades.' : 'Residential electrical service for everything from outlet repair to panel upgrades.'}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href={site.phoneRaw} className="btn-call text-lg px-8 py-4 w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-content">
              <h2>{isElectrician ? `Residential Electrician in ${location.name}, ${location.stateAbbr}` : `Residential Electrical Services in ${location.name}, ${location.stateAbbr}`}</h2>
              <p>{location.description}</p>
              <p>
                Young Electric Inc is your trusted local electrical contractor serving homeowners in {location.name}. Our team of skilled electricians provides top-quality residential electrical services. When you call {site.phone}, you speak directly with our team to schedule service, get pricing, and have your electrical needs resolved efficiently.
              </p>

              <h3>Residential Electrical Help Available in {location.name}</h3>
              <p>
                We connect {location.name} homeowners with local team members who handle a full range of home electrical needs, including:
              </p>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/${s.slug}`} className="text-primary-600 hover:text-primary-700 font-medium">{s.shortTitle}</Link>
                    {s.slug.includes('boca-raton') ? ' (Boca Raton detail page)' : ''}
                  </li>
                ))}
              </ul>

              <h3>Serving {location.name} and Nearby Neighborhoods</h3>
              <p>
                Our teams we provide you with serve {location.name} and the surrounding area, including:
              </p>
              <ul>
                {location.nearbyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>

              <h3>Why Choose a Local Residential Provider?</h3>
              <p>
                Connecting with a local residential electrical team in {location.name} means working with someone who understands the homes, climate, and building practices common to {location.stateAbbr}. South Florida homes face unique electrical challenges — from lightning-induced power surges to humidity affecting outdoor wiring — and a local team can recommend solutions that fit your specific situation.
              </p>

              <div className="mt-6 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <h3 className="mb-3">Ready to Get Connected?</h3>
                <p className="mb-4">
                  Call {site.phone} now and we will provide you with an expert in-house electrician serving {location.name}, {location.stateAbbr}. No obligation.
                </p>
                <a href={site.phoneRaw} className="btn-call">
                  <Phone className="h-4 w-4" />
                  Call {site.phone}
                </a>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="card p-6 bg-primary-700 text-white">
                  <h3 className="font-display font-bold text-xl mb-3">Call Now</h3>
                  <p className="text-primary-100 text-sm mb-4">
                    Hire a local residential electrical team in {location.name}.
                  </p>
                  <a href={site.phoneRaw} className="btn-accent w-full">
                    <Phone className="h-4 w-4" />
                    {site.phone}
                  </a>
                </div>

                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-4">Boca Raton Service Pages</h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    Detailed service information is available for our main location, Boca Raton:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {services.slice(0, 6).map((s) => (
                      <li key={s.slug}>
                        <Link to={`/${s.slug}`} className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors">
                          <Zap className="h-3.5 w-3.5 text-accent-400" />
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-4">Other Service Areas</h3>
                  <ul className="space-y-2 text-sm">
                    {otherLocations.map((loc) => (
                      <li key={loc.slug}>
                        <Link to={`/electrician-${loc.slug}`} className="flex items-center gap-1.5 text-neutral-600 hover:text-primary-600 transition-colors">
                          <MapPin className="h-3.5 w-3.5 text-primary-500" />
                          {loc.name}, {loc.stateAbbr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title={`Need an Electrician in ${location.name}?`}
        description={`Call now to speak with an expert in-house electrician serving ${location.name}, ${location.stateAbbr}.`}
      />

      <FAQSection faqs={localFaqs} />
    </>
  );
}
