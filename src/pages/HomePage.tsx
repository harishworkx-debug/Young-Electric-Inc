import { Link } from 'react-router-dom';
import { Phone, Zap, MapPin, Clock, ShieldCheck, Home, CheckCircle2, ArrowRight, Star, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import TestimonialSection from '@/components/TestimonialSection';
import ServiceIcon from '@/components/ServiceIcon';
import { site, services, locations, images, homeFaqs, localBusinessSchema } from '@/data/siteData';

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
        title="Electrician in Boca Raton, FL | Young Electric Inc"
        description="Young Electric Inc provides residential and electrical services in Boca Raton, FL and surrounding areas. Call 561-363-0946 for service."
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
            fetchpriority="high"
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
              Trusted <span className="text-accent-400">Electrician in Boca Raton, FL</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-200 mb-8 leading-relaxed max-w-2xl">
              Young Electric Inc is your top-rated electrical contractor in Boca Raton. Whether you need a residential electrician, a commercial electrician, or a 24/7 emergency electrician in Boca Raton, our expert team is ready to help.
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
                Residential & Commercial
              </div>
              <div className="flex items-center gap-2 text-neutral-200">
                <Clock className="h-5 w-5 text-accent-400" />
                Emergency Electrician
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
              <Zap className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">Residential & Commercial</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MapPin className="h-6 w-6 text-primary-600" />
              <p className="text-sm text-neutral-600 font-medium">South Florida</p>
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
                Expert Electrical Services in South Florida
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Young Electric Inc is a premier electrical contractor serving South Florida communities. We provide professional, reliable, and high-quality electrical services. Our experienced team is ready to handle all your residential and commercial electrical needs.
                </p>
                <p>
                  Whether you need <Link to="/outlet-repair" className="text-primary-600 hover:underline">electrical repair in Boca Raton</Link>, a full <Link to="/electrical-panel-replacement" className="text-primary-600 hover:underline">electrical panel replacement in Boca Raton</Link>, an EV charger installed, or emergency assistance, one call connects you with a trusted local professional. If you are searching for an "electrician near me," we are your local experts.
                </p>
                <p>
                  We proudly serve Boca Raton and the greater South Florida area. No matter the size of the project—from small home repairs to complex commercial electrical jobs—we are here to help you find the right local team.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Direct connection with expert in-house electricians',
                  'Residential and commercial electrical services',
                  'Fast response for emergency electrical needs',
                  'Serving Boca Raton and surrounding South Florida',
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
                    <p className="font-bold text-neutral-900">Comprehensive Service</p>
                    <p className="text-sm text-neutral-600">Residential, Commercial & Emergency</p>
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
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">Electrical Services in South Florida</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              We provide you with local electrical team members who handle a full range of residential and commercial electrical needs.
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
                <h2 className="font-display font-bold text-xl text-neutral-900 mb-2">{step.title}</h2>
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
                Home & Business Electrical Services in South Florida
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  South Florida properties range from mid-century homes to modern luxury estates and dynamic business facilities. These properties have diverse electrical needs — from updating older panels and wiring to installing the latest EV chargers and smart lighting systems.
                </p>
                <p>
                  Florida&apos;s climate adds unique challenges for electrical systems. Frequent thunderstorms create power surges that can damage electronics, hurricane season demands reliable backup power options, and high humidity affects outdoor wiring. A local electrical team understands these conditions and can recommend the right residential or commercial solutions.
                </p>
                <p>
                  Whether you live in Boca Raton proper or nearby communities, connecting with a local electrical team ensures your property gets the attention it needs. We are equipped to handle routine electrical maintenance, emergency repairs, and large-scale installations.
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

      {/* Lead-gen disclaimer callout */}
      <section className="bg-warning-50 border-y border-warning-200">
        <div className="container-page py-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-warning-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong>Professional Electrical Services:</strong> Young Electric Inc provides top-tier residential and commercial electrical services. We are a dedicated electrical contractor focused on safety, quality, and customer satisfaction. All work is performed by our skilled professionals to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
}
