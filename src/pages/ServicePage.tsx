import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ServiceIcon from '@/components/ServiceIcon';
import { site, services, locations, type Service } from '@/data/siteData';

export default function ServicePage({ service }: { service: Service }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.shortTitle,
    name: service.title,
    description: service.metaDescription,
    team: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: site.phone,
    },
    areaServed: { '@type': 'City', name: 'Boca Raton, FL' },
  };

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        schema={[faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroImageAlt}
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-primary-950/70 to-neutral-900/80" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="container-page relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-neutral-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-accent-400">{service.shortTitle}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent-400" />
              Boca Raton, FL
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
              {service.h1}
            </h1>
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">{service.intro}</p>
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

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Why Connect With Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">Benefits of This Service</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="card-hover p-6 text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-primary-50 mb-4">
                  <ServiceIcon name={b.icon} className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 mb-2">{b.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-neutral-50">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-content">
              {service.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="card p-6 bg-primary-700 text-white">
                  <h3 className="font-display font-bold text-xl mb-3">Ready to Get Connected?</h3>
                  <p className="text-primary-100 text-sm mb-4">
                    Call now to speak with an expert in-house electrician in Boca Raton.
                  </p>
                  <a href={site.phoneRaw} className="btn-accent w-full">
                    <Phone className="h-4 w-4" />
                    Call {site.phone}
                  </a>
                </div>

                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-4">Other Residential Services</h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.slug}`}
                          className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
                        >
                          <ServiceIcon name={s.icon} className="h-4 w-4 text-primary-500" />
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/#services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:gap-2 transition-all">
                    View All Services <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="card p-6 bg-neutral-50 border-2 border-primary-100">
                  <h3 className="font-display font-bold text-sm text-neutral-900 mb-3">Service Areas</h3>
                  <ul className="space-y-2 text-sm">
                    {locations.slice(0, 5).map((loc) => (
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
        title={`Need ${service.shortTitle} in Boca Raton?`}
        description="Call now to speak with an expert in-house electrician. No obligation."
      />

      <FAQSection faqs={service.faqs} />
    </>
  );
}
