import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  DollarSign, 
  Wrench, 
  AlertTriangle, 
  Zap, 
  HelpCircle,
  Award,
  Star
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceIcon from '@/components/ServiceIcon';
import { site, services, locations, type Service } from '@/data/siteData';
import { getReviewsForService } from '@/data/reviews';
import { trackPhoneCall } from '@/utils/analytics';

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
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: site.phone,
      url: site.domain,
    },
    areaServed: [
      { '@type': 'City', name: 'Boca Raton' },
      { '@type': 'City', name: 'Delray Beach' },
      { '@type': 'City', name: 'Deerfield Beach' },
      { '@type': 'City', name: 'Coral Springs' },
      { '@type': 'City', name: 'Parkland' },
      { '@type': 'City', name: 'Pompano Beach' },
      { '@type': 'City', name: 'Coconut Creek' },
      { '@type': 'City', name: 'Boynton Beach' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const serviceReviews = getReviewsForService(service.slug);

  const defaultProcess = [
    {
      step: 1,
      title: 'Comprehensive Safety Diagnosis',
      description: 'Andy or Jake inspects the circuit, takes voltage and load measurements, and tests device integrity to pinpoint the root issue.'
    },
    {
      step: 2,
      title: 'Upfront Flat-Rate Estimate',
      description: 'We explain our findings clearly and provide an exact, upfront flat-rate price before any work begins. No unexpected hourly bills.'
    },
    {
      step: 3,
      title: 'Code-Compliant Craftsmanship',
      description: 'We install premium, OEM-grade components, torque connections to manufacturer specifications, and adhere to strict Florida Building Codes.'
    },
    {
      step: 4,
      title: 'Multi-Point Testing & Sign-Off',
      description: 'We test the complete installation under full load, verify proper grounding, clean up the workspace, and provide warranty documentation.'
    }
  ];

  const processSteps = service.process && service.process.length > 0 ? service.process : defaultProcess;
  
  // Resolve related services
  const relatedServiceObjects = service.relatedServices 
    ? services.filter((s) => service.relatedServices?.includes(s.slug))
    : services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'Immediate Hazard':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'High Priority':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Code Compliance':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        schema={[faqSchema, serviceSchema]}
      />

      {/* ========================================================= */}
      {/* SECTION 1 · FIRST SCREEN / HERO                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroImageAlt}
            className="w-full h-full object-cover opacity-25"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-primary-950/70 to-neutral-900/80" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="container-page relative">
          <div className="max-w-3xl">
            <Breadcrumbs 
              items={[
                { name: 'Services', url: '/#services' },
                { name: service.shortTitle, url: `/${service.slug}` }
              ]}
              theme="dark"
            />
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white border border-white/20">
                <MapPin className="h-4 w-4 text-accent-400" />
                Boca Raton & South Florida
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-accent-300 border border-accent-400/30">
                <ShieldCheck className="h-3.5 w-3.5" />
                FL Certified Electrical Contractor • $2M Insured
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
              {service.h1}
            </h1>
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">{service.intro}</p>
            
            {/* Primary Action & Visible Phone Number */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href={site.phoneRaw} 
                onClick={() => trackPhoneCall('service_hero')}
                className="btn-call text-base sm:text-lg px-8 py-4 justify-center shadow-lg"
              >
                <Phone className="h-5 w-5" />
                {service.ctaText || `Call for ${service.shortTitle}`}: {site.phone}
              </a>
              <Link to="/contact" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 justify-center py-4 px-6">
                Online Inquiry
              </Link>
            </div>

            {/* Reassurance strip */}
            <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Owner on Every Job</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Upfront Flat-Rate Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Guaranteed Workmanship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section bg-white border-b border-neutral-100">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Why Young Electric Inc</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-neutral-900">
              Key Advantages for South Florida Homeowners
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="card-hover p-6 text-center border border-neutral-200/80 shadow-sm">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary-50 mb-4 text-primary-600">
                  <ServiceIcon name={b.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 · PROBLEMS WE DIAGNOSE                          */}
      {/* ========================================================= */}
      <section className="section bg-neutral-50/70 border-b border-neutral-200">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Symptoms & Safety Diagnosis</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-neutral-900">
              Common Problems We Diagnose & Resolve
            </h2>
            <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
              Electrical faults present distinct symptoms. Here is what causes them, how severe they are, and when a licensed electrical contractor should inspect your home:
            </p>
          </div>

          {service.diagnosedProblems && service.diagnosedProblems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.diagnosedProblems.map((prob, idx) => (
                <div key={idx} className="card p-6 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-warning-600 flex-shrink-0" />
                        <h3 className="font-bold text-base text-neutral-900">{prob.symptom}</h3>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border flex-shrink-0 ${getUrgencyBadge(prob.urgency)}`}>
                        {prob.urgency}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
                      <strong className="text-neutral-900">Likely Cause:</strong> {prob.likelyCause}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg">
                    <strong className="text-primary-800">When to Call:</strong> {prob.whenToCall}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deep Technical Explanations from sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {service.sections.map((section, i) => (
              <div key={i} className="card p-7 bg-white border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 font-display mb-3">{section.heading}</h3>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-neutral-700 text-sm leading-relaxed mb-3">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mt-4 pt-4 border-t border-neutral-100">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3 · OUR REPAIR & SERVICE PROCESS                  */}
      {/* ========================================================= */}
      <section className="section bg-white border-b border-neutral-200">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Structured Quality Control</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-display text-neutral-900">
              Our 4-Step Professional Service Process
            </h2>
            <p className="mt-3 text-neutral-600 text-sm">
              We eliminate guesswork with a proven, transparent workflow executed directly by Andy or Jake Young:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="card p-6 bg-neutral-50 relative border-t-4 border-t-primary-600 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-bold font-display text-base">
                      0{step.step}
                    </span>
                    <Wrench className="h-5 w-5 text-neutral-400" />
                  </div>
                  <h3 className="font-display font-bold text-neutral-900 text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4 · ACTUAL LOCAL WORK (CASE STUDIES)              */}
      {/* ========================================================= */}
      {service.realProjects && service.realProjects.length > 0 && (
        <section className="section bg-neutral-50/50 border-b border-neutral-200">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Substantiated Local Experience</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-neutral-900 mt-2 mb-3">
                Recent {service.shortTitle} Projects in South Florida
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Genuine residential projects completed by Andy & Jake Young across Boca Raton and neighboring communities:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.realProjects.map((proj, idx) => (
                <div key={idx} className="card p-6 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between border-t-4 border-t-accent-500">
                  <div>
                    {proj.image && (
                      <div className="h-44 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl bg-neutral-100">
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                          loading="lazy" 
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-bold text-base text-neutral-900">{proj.title}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
                        <MapPin className="h-3 w-3 text-primary-600" />
                        {proj.location}
                      </span>
                    </div>
                    <div className="space-y-3 text-xs sm:text-sm mt-3">
                      <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200/80">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded mb-1">
                          Diagnosed Condition (Before)
                        </span>
                        <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed">{proj.description}</p>
                      </div>
                      <div className="bg-primary-50/60 p-3 rounded-lg border border-primary-200/70">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary-800 bg-primary-200/70 px-2 py-0.5 rounded mb-1">
                          Contractor Solution (After)
                        </span>
                        <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed">{proj.solution}</p>
                      </div>
                    </div>
                  </div>
                  {proj.outcome && (
                    <div className="mt-4 pt-3 border-t border-neutral-100 bg-success-50/70 p-3 rounded-lg border border-success-200 text-xs text-success-900">
                      <strong>Outcome:</strong> {proj.outcome}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* VERIFIED CUSTOMER REVIEWS (GOOGLE 4.9 RATING)             */}
      {/* ========================================================= */}
      {serviceReviews && serviceReviews.length > 0 && (
        <section className="section bg-white border-b border-neutral-200">
          <div className="container-page">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    4.9 Rating • 47 Verified Google Reviews
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
                  What South Florida Homeowners Say About Our {service.shortTitle}
                </h2>
              </div>
              <Link 
                to="/reviews"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors"
              >
                Read All 47 Google Reviews <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceReviews.map((rev, idx) => (
                <div key={idx} className="card p-6 bg-neutral-50/80 border border-neutral-200 shadow-sm flex flex-col justify-between rounded-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                          {rev.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-neutral-900">{rev.name}</p>
                          <p className="text-xs text-neutral-500">{rev.date} • Verified Google Review</p>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-sm text-neutral-700 italic leading-relaxed">
                      "{rev.text}"
                    </blockquote>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1 text-primary-700 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified Boca Raton Residential Client
                    </span>
                    <span className="text-neutral-400">Google Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* SECTION 5 · PRICING, PERMITS & SERVICE INFORMATION        */}
      {/* ========================================================= */}
      <section className="section bg-white border-b border-neutral-200">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left 2 Cols: Pricing, Cost Factors, Permits, Warranty */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Cost Factors & Flat-Rate Pricing Guide */}
              {(service.costFactors || service.costGuide) && (
                <div className="border border-neutral-200 rounded-2xl p-6 sm:p-8 bg-neutral-50/80 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-success-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-success-700">Pricing Transparency</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-4">
                    Pricing & Cost Factors for {service.shortTitle}
                  </h2>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    We quote every job upfront before performing any work. We never charge by the open-ended hour for residential troubleshooting. Several technical variables determine the exact scope:
                  </p>

                  {/* Typical Investment Box */}
                  {service.costGuide && (
                    <div className="bg-primary-900 text-white rounded-xl p-6 mb-6 shadow-md">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent-400">Typical Investment Range</span>
                        <span className="text-2xl font-bold font-display text-accent-300">{service.costGuide.typicalRange}</span>
                      </div>
                      {service.costGuide.serviceCallFee && (
                        <p className="text-xs text-primary-200 mb-2 font-medium">
                          <strong>Diagnostic Policy:</strong> {service.costGuide.serviceCallFee}
                        </p>
                      )}
                      <p className="text-xs text-neutral-200 leading-relaxed">
                        {service.costGuide.details}
                      </p>
                    </div>
                  )}

                  {/* Factors Breakdown */}
                  {service.costFactors && (
                    <div className="grid gap-3">
                      {service.costFactors.map((cf, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-neutral-200">
                          <h3 className="font-bold text-neutral-900 text-sm mb-1">{cf.factor}</h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">{cf.impact}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Florida Permitting & Code Compliance */}
              {service.permitRequirements && (
                <div className="border border-primary-200 rounded-2xl p-6 sm:p-8 bg-primary-50/40">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-700">Permit & Code Compliance</span>
                      <h3 className="font-bold text-xl text-neutral-900 mt-1 mb-2">
                        {service.permitRequirements.jurisdiction}
                      </h3>
                      <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        {service.permitRequirements.details}
                      </p>
                      <div className="p-3 bg-white rounded-xl border border-primary-200 text-xs text-primary-900 space-y-1.5">
                        <div className="flex items-center gap-2 font-semibold">
                          <CheckCircle2 className="h-4 w-4 text-success-600 flex-shrink-0" />
                          <span>Turn-Key Permitting: Young Electric Inc handles all municipal applications, load calculations, and inspections.</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                          <CheckCircle2 className="h-4 w-4 text-success-600 flex-shrink-0" />
                          <span>HOA Reviews: We provide certified single-line diagrams and technical cut-sheets for your HOA architectural review.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Warranty Coverage */}
              {service.warrantyInfo && (
                <div className="p-6 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-success-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-base mb-1">Our Workmanship Warranty</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">{service.warrantyInfo}</p>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Direct Call & Credentials Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Direct Call Card */}
                <div className="card p-6 bg-primary-900 text-white shadow-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-400">Direct Contractor Contact</span>
                  <h3 className="font-display font-bold text-xl mt-1 mb-2">Speak With Andy or Jake Young</h3>
                  <p className="text-primary-100 text-xs mb-5 leading-relaxed">
                    Have questions about {service.shortTitle.toLowerCase()}? Get honest advice and an upfront quote directly from our master electricians.
                  </p>
                  <a 
                    href={site.phoneRaw} 
                    onClick={() => trackPhoneCall('service_sidebar')}
                    className="btn-call w-full justify-center text-base py-3.5 shadow-md"
                  >
                    <Phone className="h-4 w-4" />
                    Call {site.phone}
                  </a>
                  <p className="text-xs text-primary-200 text-center mt-3">
                    Mon–Sat 8AM–5PM • Emergency Service Available
                  </p>
                </div>

                {/* Verified Credentials */}
                <div className="card p-5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-2.5">
                  <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                    <ShieldCheck className="h-4 w-4 text-success-600" />
                    <span>Contractor Credentials</span>
                  </div>
                  <p><strong>License:</strong> {site.licenseStatus}</p>
                  <p><strong>Insurance:</strong> {site.insuranceCoverage}</p>
                  <p><strong>Experience:</strong> 10+ Years in South Florida</p>
                  <p><strong>Scope:</strong> 100% Residential Specialists</p>
                  <p><strong>Google Rating:</strong> 4.9 Stars (47 Verified Google Reviews)</p>
                </div>

                {/* Related Residential Services */}
                <div className="card p-6">
                  <h3 className="font-display font-bold text-base text-neutral-900 mb-3">
                    Related Residential Services
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    {relatedServiceObjects.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.slug}`}
                          className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                        >
                          <ServiceIcon name={s.icon} className="h-4 w-4 text-primary-500 flex-shrink-0" />
                          <span>{s.shortTitle}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/#services" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:gap-2 transition-all">
                    View All Services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* City Service Areas */}
                <div className="card p-6">
                  <h3 className="font-display font-bold text-base text-neutral-900 mb-2">
                    Service Areas in South Florida
                  </h3>
                  <p className="text-xs text-neutral-500 mb-3">
                    Mobile dispatch available for single-family homes & condos:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/electrician-${loc.slug}`}
                        className="flex items-center gap-1 text-neutral-600 hover:text-primary-600 font-medium"
                      >
                        <MapPin className="h-3 w-3 text-primary-500 flex-shrink-0" />
                        <span>{loc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6 · FAQS & RELEVANT INTERNAL LINKS                */}
      {/* ========================================================= */}
      <FAQSection faqs={service.faqs} />

      {/* CTA Section */}
      <CTASection
        title={`Need ${service.shortTitle} in Boca Raton?`}
        description="Call 561-363-0946 now to speak directly with Andy or Jake Young. Upfront flat-rate pricing, 1-year workmanship warranty, and prompt residential service."
      />
    </>
  );
}
