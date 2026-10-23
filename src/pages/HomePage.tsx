import { Link } from 'react-router-dom';
import { Phone, Zap, MapPin, Clock, ShieldCheck, Home, CheckCircle2, ArrowRight, Star, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import TestimonialSection from '@/components/TestimonialSection';
import ServiceIcon from '@/components/ServiceIcon';
import { site, services, locations, images, homeFaqs, localBusinessSchema } from '@/data/siteData';
import { trackPhoneCall } from '@/utils/analytics';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electrical Services',
  team: {
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phone,
  },
  areaServed: locations.map((l) => `${l.name}, ${l.stateAbbr}`),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Electrical Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.shortTitle },
    })),
  },
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Young Electric Inc | Residential Electrician in Boca Raton, FL"
        description="Young Electric Inc is Boca Raton's trusted family-owned residential electrician. Master electricians Andy & Jake Young provide upfront flat pricing, 200A panels & EV chargers. Call 561-363-0946."
        canonicalPath="/"
        schema={[localBusinessSchema, faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={images.heroElectrician}
            alt="Residential electrician working on an electrical panel"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-primary-950/70 to-neutral-900/80" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="container-page relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent-400" />
              Boca Raton & South Florida
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              <span className="text-accent-400">Young Electric Inc</span> — Residential Electrician in Boca Raton
            </h1>
            <p className="text-lg lg:text-xl text-neutral-200 mb-8 leading-relaxed max-w-2xl">
              Young Electric Inc is your top-rated residential electrical contractor in Boca Raton. Founded and operated by master electricians Andy and Jake Young, we provide reliable home repairs, 200A panel upgrades, EV chargers, and 24/7 emergency service.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <a 
                href={site.phoneRaw} 
                onClick={() => trackPhoneCall('home_hero')}
                className="btn-call text-lg px-8 py-4 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link to="/#services" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 w-full sm:w-auto">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-200">
                <Home className="h-5 w-5 text-accent-400" />
                Residential Specialists
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <Clock className="h-5 w-5 text-accent-400" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <ShieldCheck className="h-5 w-5 text-accent-400" />
                Upfront Flat-Rate Pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="container-page py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-accent-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5" fill="currentColor" />)}
              </div>
              <Link to="/reviews" className="text-sm text-neutral-700 font-semibold hover:text-primary-600 transition-colors">
                4.9 ★ (47 Google Reviews)
              </Link>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">Residential Only</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MapPin className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">South Florida</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Phone className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">Owner on Every Job</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section className="section bg-white" id="about">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary-600">About Young Electric Inc</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Expert Residential Electricians in South Florida
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Young Electric Inc is a premier residential electrical contractor serving South Florida homeowners. Run by Andy and Jake Young, we provide professional, reliable, and code-compliant electrical craftsmanship. Our experienced team is ready to handle all your home electrical needs.
                </p>
                <p>
                  Whether you need <Link to="/electrical-repair-boca-raton-fl" className="text-primary-600 hover:underline">electrical repair in Boca Raton</Link>, a full <Link to="/electrical-panel-service-boca-raton-fl" className="text-primary-600 hover:underline">electrical panel replacement in Boca Raton</Link>, an EV charger installed, or emergency assistance, you work directly with our master electricians.
                </p>
                <p>
                  We proudly serve Boca Raton and surrounding South Florida communities. No matter the size of the project—from a quick outlet repair to a complete 200-amp panel modernization—we provide dependable, licensed workmanship directly to your doorstep.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Direct service by licensed master electricians Andy & Jake',
                  'Dedicated residential electrical services only',
                  'Fast response for emergency electrical needs',
                  'Serving Boca Raton and surrounding South Florida communities',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success-500 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href={site.phoneRaw} className="btn-call mt-8">
                <Phone className="h-4 w-4" />
                Call Now: {site.phone}
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl -z-10 blur-2xl opacity-50" />
              <img
                src={images.electricianPanel}
                alt="Professional residential electrician examining a home electrical panel"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-100">
                    <ShieldCheck className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Residential Specialists</p>
                    <p className="text-sm text-neutral-600">Home Repairs, Panels & EV Charging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-neutral-50" id="services">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Our Services</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">Residential Electrical Services</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Our licensed master electricians handle a complete range of home electrical repairs, panel modernizations, and safety upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="card-hover p-6 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors mb-4">
                  <ServiceIcon name={service.icon} className="h-7 w-7 text-primary-600" />
                </div>
                <h2 className="font-display font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.shortTitle}
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">{service.intro}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  {service.shortTitle} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Simple Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">How It Works</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Scheduling professional electrical service with Andy and Jake Young is straightforward:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Call Us', desc: 'Dial 561-363-0946 and tell us about your electrical repair or project.', icon: Phone },
              { num: '2', title: 'Direct Assessment', desc: 'Speak directly with master electricians Andy or Jake for upfront pricing.', icon: Zap },
              { num: '3', title: 'Expert Service', desc: 'We complete the job cleanly, safely to code, and provide full warranty coverage.', icon: CheckCircle2 },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="relative inline-flex">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50 mb-4">
                    <step.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-400 text-neutral-900 font-bold text-sm">
                    {step.num}
                  </span>
                </div>
                <h2 className="font-display font-bold text-xl text-neutral-900 mb-2">{step.title}</h2>
                <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Reviews */}
      <TestimonialSection />

      {/* CTA */}
      <CTASection />

      {/* Service Areas */}
      <ServiceAreasSection />

      {/* Local SEO Content */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={images.floridaHome}
                alt="Beautiful South Florida residential home exterior"
                className="rounded-2xl shadow-xl w-full aspect-video object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-wider text-primary-600">South Florida Electrical</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Residential Electrical Specialists in South Florida
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  South Florida homes range from mid-century cottages in Delray Beach to modern luxury estates in Boca Raton and Parkland. These residences have unique electrical demands — from replacing obsolete panels to installing dedicated Level 2 EV chargers, surge protection, and storm-ready backup systems.
                </p>
                <p>
                  Florida&apos;s climate adds unique challenges for electrical systems. Frequent summer thunderstorms create high-voltage surges that destroy delicate electronics, hurricane season requires reliable generator backup power, and salt air rapidly corrodes outdoor meter enclosures. Our local electricians understand these conditions and install code-compliant, weather-resilient solutions.
                </p>
                <p>
                  Whether you live in Boca Raton proper or surrounding communities in Palm Beach and Broward Counties, working with our licensed team ensures your home receives specialized attention, upfront pricing, and guaranteed safety.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {services.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    <Zap className="h-4 w-4 text-accent-400" />
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Guarantee disclaimer callout */}
      <section className="bg-primary-50 border-y border-primary-100">
        <div className="container-page py-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong>Professional Electrical Services:</strong> Young Electric Inc provides top-tier residential electrical services. As a licensed, family-owned electrical contractor, we focus exclusively on homes, ensuring your property receives specialized care, safety, and guaranteed quality.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
}
