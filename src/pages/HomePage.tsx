import { Link } from 'react-router-dom';
import { Phone, Zap, MapPin, Clock, ShieldCheck, Home, CheckCircle2, ArrowRight, Star, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import ServiceIcon from '@/components/ServiceIcon';
import { site, services, locations, images, homeFaqs } from '@/data/siteData';

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
  serviceType: 'Residential Electrical Services',
  team: {
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phone,
  },
  areaServed: locations.map((l) => `${l.name}, ${l.stateAbbr}`),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Residential Electrical Services',
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
        title="Residential Electrician Boca Raton, FL | Young Electric Inc"
        description="Hire a local residential electrician in Boca Raton, FL. We provide homeowners with expert in-house electricians for repairs, installations, panel upgrades & more. Call 561-363-0946."
        canonicalPath="/"
        schema={[faqSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={images.heroElectrician}
            alt="Residential electrician working on an electrical panel in a Boca Raton, FL home"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-primary-950/70 to-neutral-900/80" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="container-page relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent-400" />
              Serving Boca Raton & South Florida
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Residential Electrician in <span className="text-accent-400">Boca Raton, FL</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-200 mb-8 leading-relaxed max-w-2xl">
              Hire expert in-house electricians for safe, reliable home electrical service. From repairs to panel upgrades, lighting installation to EV chargers — we help you find available local professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <a href={site.phoneRaw} className="btn-call text-lg px-8 py-4 w-full sm:w-auto">
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
                Residential Only
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <Clock className="h-5 w-5 text-accent-400" />
                Fast Connection
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <ShieldCheck className="h-5 w-5 text-accent-400" />
                No Obligation
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
              <p className="text-sm text-neutral-600 font-medium">User-Rated Service</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Home className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">Residential Focus</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MapPin className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">Boca Raton & South FL</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Phone className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">Direct Provider Connection</p>
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
                Connecting Boca Raton Homeowners With Local Residential Electricians
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Young Electric Inc is a premier electrical contractor serving homeowners in Boca Raton and surrounding South Florida communities. We provide professional, reliable, and high-quality residential electrical services. Our experienced team is ready to handle all your home electrical needs.
                </p>
                <p>
                  Whether you need a simple outlet repair, a full panel upgrade, or an EV charger installed in your garage, one call connects you with a local team who can help. You speak directly with our team, get answers to your questions, and decide whether to schedule service. There is no obligation from the initial connection.
                </p>
                <p>
                  We focus exclusively on residential electrical services. We do not facilitate commercial, industrial, office, retail, restaurant, warehouse, or business electrical work. If you have a home electrical need in Boca Raton or nearby, we are here to help you find the right local team.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Direct connection with expert in-house electricians',
                  'Residential electrical services only',
                  'No obligation from the initial call',
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
                alt="Professional residential electrician examining a home electrical panel in Boca Raton, FL"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-100">
                    <ShieldCheck className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Residential-Only Service</p>
                    <p className="text-sm text-neutral-600">No commercial or industrial work</p>
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
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">Residential Electrical Services in Boca Raton</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              We provide homeowners with local residential electrical team members who handle a full range of home electrical needs.
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
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.shortTitle}
                </h3>
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
              Getting connected with a local residential electrical team is quick and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Call Us', desc: 'Dial 561-363-0946 and tell us what residential electrical help you need.', icon: Phone },
              { num: '2', title: 'Get Connected', desc: 'We provide you with an available expert in-house electrician.', icon: Zap },
              { num: '3', title: 'Get Help', desc: 'Our team discusses your needs, gives you a quote, and schedules service if you choose.', icon: CheckCircle2 },
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
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                alt="Beautiful residential home in Boca Raton, Florida"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Boca Raton Residential Electrical</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Home Electrical Services in Boca Raton, Florida
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Boca Raton is one of South Florida&apos;s most desirable residential communities, with homes ranging from mid-century ranches to modern luxury estates. These homes have diverse electrical needs — from updating 1960s-era panels and wiring to installing the latest EV chargers and smart home lighting.
                </p>
                <p>
                  Florida&apos;s climate adds unique challenges for home electrical systems. Frequent thunderstorms create power surges that can damage electronics, hurricane season demands reliable backup power options, and high humidity affects outdoor wiring and outlets. A local residential electrical team understands these conditions and can recommend the right solutions for your home.
                </p>
                <p>
                  Whether you live in Boca Raton proper or nearby communities like Boca Del Mar, Mission Bay, or West Boca, connecting with a local residential electrical team ensures your home gets the attention it needs from someone who knows the area.
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

      {/* Lead-gen disclaimer callout */}
      <section className="bg-warning-50 border-y border-warning-200">
        <div className="container-page py-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-warning-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong>Professional Electrical Services:</strong> Young Electric Inc provides top-tier residential electrical services. We are a dedicated electrical contractor focused on safety, quality, and customer satisfaction. All work is performed by our skilled professionals to meet your home's needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
}
