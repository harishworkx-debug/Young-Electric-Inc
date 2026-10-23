import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, ShieldCheck, CheckCircle2, AlertTriangle, FileText, Clock, ArrowRight, Quote, Building, Star, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { site, services, locations, type Location } from '@/data/siteData';
import { trackPhoneCall } from '@/utils/analytics';

export default function LocationPage({
  location,
  pageType,
}: {
  location: Location;
  pageType: 'electrician' | 'services';
}) {
  const isElectrician = pageType === 'electrician';
  const isPrimary = location.slug === 'boca-raton-fl';
  const slug = isElectrician ? `electrician-${location.slug}` : `electrical-services-${location.slug}`;
  
  const h1 = isPrimary
    ? `Electrician in Boca Raton, FL`
    : isElectrician
    ? `Electrician in ${location.name}, ${location.stateAbbr}`
    : `Residential Electrical Services in ${location.name}, ${location.stateAbbr}`;

  const metaTitle = isPrimary
    ? `Electrician Boca Raton FL | ${site.name}`
    : `Electrician ${location.name} FL | ${site.name}`;

  const metaDescription = isPrimary
    ? `Looking for a top-rated licensed electrician in Boca Raton, FL? Andy & Jake Young provide 200A panel upgrades, EV chargers & repairs. Call ${site.phone}.`
    : `Looking for a licensed residential electrician in ${location.name}, ${location.stateAbbr}? Young Electric Inc provides expert home repairs, 200A panel upgrades, EV chargers, and safety inspections. Call ${site.phone}.`;

  const faqsToUse = location.localFaqs || [
    {
      q: `Do you provide residential electrical services in ${location.name}, ${location.stateAbbr}?`,
      a: `Yes. Young Electric Inc is a fully licensed and insured electrical contractor dispatched directly to homes throughout ${location.name}. Call ${site.phone} to schedule service.`
    },
    {
      q: `Are you a licensed and insured electrical contractor?`,
      a: `Yes, Young Electric Inc is a Florida State Certified Electrical Contractor carrying $2,000,000 in general liability insurance and workers' compensation coverage.`
    },
    {
      q: `How quickly can you dispatch to ${location.name}?`,
      a: `We provide same-day dispatch for urgent electrical issues and scheduled service appointments for renovations, panel upgrades, and EV charger installations in ${location.name}.`
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsToUse.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const localBusinessCitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: `${site.name} - ${location.name}`,
    telephone: site.phone,
    url: `${site.domain}/${slug}`,
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: location.county || 'Florida'
      }
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00'
      }
    ]
  };

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath={`/${slug}`}
        schema={[faqSchema, localBusinessCitySchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="container-page relative">
          <div className="max-w-3xl">
            <Breadcrumbs 
              items={[
                { name: 'Service Areas', url: '/#service-areas' },
                { name: `${location.name}, ${location.stateAbbr}`, url: `/${slug}` }
              ]}
              theme="dark"
            />
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {isPrimary ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-accent-300 border border-accent-400/30">
                  <Award className="h-4 w-4" />
                  Headquarters & Primary Service Market • Boca Raton, FL
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white border border-white/20">
                  <MapPin className="h-3.5 w-3.5 text-accent-400" />
                  {location.name}, {location.stateAbbr} • {location.county}
                </div>
              )}
              <div className="inline-flex items-center gap-2 rounded-full bg-success-500/20 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-success-300 border border-success-500/30">
                <Clock className="h-3.5 w-3.5" />
                {isPrimary ? 'Local Same-Day Dispatch Across Boca Raton' : `Dispatched Directly to ${location.name} Homes`}
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
              {h1}
            </h1>
            
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
              {isPrimary
                ? 'Searching for a licensed residential electrician in Boca Raton? Young Electric Inc is your neighborhood, family-owned electrical contractor headquartered right here in Boca Raton. Founded and operated by master electricians Andy and Jake Young, we deliver code-compliant home repairs, 200A panel upgrades, EV chargers, and 24/7 emergency service.'
                : location.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                href={site.phoneRaw} 
                onClick={() => trackPhoneCall(`location_hero_${location.slug}`)}
                className="btn-call text-lg px-8 py-4 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call Andy & Jake: {site.phone}
              </a>
              <Link to="/contact" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 w-full sm:w-auto">
                Request Service
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>FL Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Andy & Jake (Owners on Site)</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Upfront Flat-Rate Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <span>Permits & Code Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left 2 Columns */}
            <div className="lg:col-span-2 space-y-12">

              {/* Primary Market Spotlight (Boca Raton Flagship Hub) */}
              {isPrimary && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-900 to-neutral-900 text-white shadow-xl">
                  <div className="flex items-center gap-2 text-accent-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Star className="h-4 w-4 fill-current" />
                    Boca Raton Primary Service Hub
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                    Your Neighborhood Residential Electrician in Boca Raton
                  </h2>
                  <p className="text-sm text-neutral-200 leading-relaxed mb-6">
                    Boca Raton is our home. When you call Young Electric Inc, you deal directly with master electricians Andy and Jake Young. We live, work, and operate right here in Boca Raton, meaning faster response times, zero travel surcharges, and total familiarity with the City of Boca Raton Building Division inspection requirements.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <Link
                      to="/electrical-panel-service-boca-raton-fl"
                      className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold text-white group-hover:text-accent-300">200A Panel Replacements</span>
                      <ArrowRight className="h-4 w-4 text-accent-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/ev-charger-installation-boca-raton-fl"
                      className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold text-white group-hover:text-accent-300">Level 2 EV Charger Installation</span>
                      <ArrowRight className="h-4 w-4 text-accent-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/electrical-repair-boca-raton-fl"
                      className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold text-white group-hover:text-accent-300">Home Troubleshooting & Repairs</span>
                      <ArrowRight className="h-4 w-4 text-accent-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/outlet-repair-boca-raton-fl"
                      className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold text-white group-hover:text-accent-300">GFCI & Receptacle Modernization</span>
                      <ArrowRight className="h-4 w-4 text-accent-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Local Electrical Infrastructure Profile */}
              {location.electricalProfile && (
                <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Local Infrastructure Profile</span>
                  <h2 className="text-2xl font-bold font-display text-neutral-900 mt-2 mb-4">
                    Electrical Demands of {location.name} Homes
                  </h2>
                  <p className="text-sm text-neutral-600 mb-4">
                    <strong>Typical Housing Age:</strong> {location.electricalProfile.housingAge}
                  </p>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    {location.electricalProfile.localGridNotes}
                  </p>
                  
                  <h3 className="text-base font-bold text-neutral-900 mb-3">Primary Electrical Priorities in {location.name}:</h3>
                  <ul className="space-y-2.5">
                    {location.electricalProfile.primaryConcerns.map((concern, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <CheckCircle2 className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{concern}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Local Hazards & Safety Guidance */}
              {location.commonIssues && location.commonIssues.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-warning-700">Local Safety Guidance</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mt-2 mb-6">
                    Common Electrical Problems We Resolve in {location.name}
                  </h2>
                  <div className="grid gap-4">
                    {location.commonIssues.map((issue, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-warning-200 bg-warning-50/50">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-warning-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-neutral-900 text-base">{issue.title}</h3>
                            <p className="text-sm text-neutral-700 mt-1 leading-relaxed">{issue.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Real Project Case Studies */}
              {location.realProjects && location.realProjects.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Substantiated Work</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mt-2 mb-2">
                    Recent Residential Projects in {location.name}
                  </h2>
                  <p className="text-neutral-600 text-sm mb-6">
                    Every installation is performed directly by Andy or Jake Young to strict National Electrical Code and Florida standards.
                  </p>

                  <div className="grid gap-6">
                    {location.realProjects.map((proj, idx) => (
                      <div key={idx} className="card p-6 border-l-4 border-l-primary-600 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="font-bold text-lg text-neutral-900">{proj.title}</h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 border border-primary-200">
                            <MapPin className="h-3 w-3" />
                            {proj.neighborhood}
                          </span>
                        </div>
                        <div className="space-y-2.5 text-sm text-neutral-700 mt-3">
                          <p>
                            <strong className="text-neutral-900">The Challenge:</strong> {proj.challenge}
                          </p>
                          <p>
                            <strong className="text-neutral-900">Our Solution:</strong> {proj.solution}
                          </p>
                          <p className="text-success-800 bg-success-50 p-2.5 rounded-lg border border-success-200">
                            <strong>Outcome:</strong> {proj.outcome}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Local Customer Testimonial */}
              {location.customerQuote && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-900 to-neutral-900 text-white relative overflow-hidden shadow-lg">
                  <Quote className="h-16 w-16 text-white/10 absolute -bottom-4 -right-4" />
                  <p className="text-accent-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Verified Homeowner Review • {location.customerQuote.area}
                  </p>
                  <blockquote className="text-base sm:text-lg italic leading-relaxed text-neutral-100">
                    "{location.customerQuote.quote}"
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent-400/20 flex items-center justify-center font-bold text-accent-400">
                      {location.customerQuote.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{location.customerQuote.author}</p>
                      <p className="text-xs text-neutral-400">Verified Residential Client • {location.name}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Local Permitting & Municipal Building Department */}
              {location.permitInfo && (
                <div className="border border-neutral-200 rounded-xl p-6 bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <Building className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg text-neutral-900 mb-1">
                        Building Permits & Florida Code Compliance in {location.name}
                      </h3>
                      <p className="text-xs text-neutral-500 mb-3">
                        Jurisdiction: {location.permitInfo.authority} • {location.permitInfo.officeAddress}
                      </p>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {location.permitInfo.inspectionInfo}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Dedicated Service Menu for this City */}
              <div>
                <h2 className="text-2xl font-bold font-display text-neutral-900 mb-2">
                  {isPrimary
                    ? 'Complete Boca Raton Residential Services'
                    : `Residential Electrical Services Dispatched to ${location.name}`}
                </h2>
                <p className="text-neutral-600 text-sm mb-6">
                  {isPrimary
                    ? 'Explore our comprehensive residential services, detailed cost guides, and local code compliance information:'
                    : `We provide full on-site dispatch to ${location.name} homes for all primary residential electrical needs. Explore our technical service guides and transparent cost breakdowns:`}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="p-4 rounded-xl border border-neutral-200 hover:border-primary-500 hover:bg-primary-50/40 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <Zap className="h-4 w-4 text-accent-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary-700">
                            {s.shortTitle}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {isPrimary ? 'Boca Raton Service Hub' : `Dispatched to ${location.name}`}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Neighborhoods Served List */}
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="font-bold text-base text-neutral-900 mb-3">
                  Communities & Neighborhoods We Serve in {location.name}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white text-neutral-700 border border-neutral-200"
                    >
                      <MapPin className="h-3 w-3 text-primary-500" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Sticky Direct Contact & Other Cities */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Direct Call Card */}
                <div className="card p-6 bg-gradient-to-br from-primary-800 to-primary-950 text-white shadow-xl">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-accent-400/20 text-accent-300 font-semibold text-xs mb-3">
                    {isPrimary ? 'Boca Raton Direct Line' : `Local Service in ${location.name}`}
                  </span>
                  <h3 className="font-display font-bold text-xl mb-2">Speak Directly With Andy or Jake</h3>
                  <p className="text-primary-100 text-sm mb-5 leading-relaxed">
                    No middlemen or automated call centers. Call now to discuss your electrical project directly with our licensed owners.
                  </p>
                  <a href={site.phoneRaw} className="btn-accent w-full justify-center text-base py-3.5 shadow-lg">
                    <Phone className="h-5 w-5" />
                    Call {site.phone}
                  </a>
                  <p className="text-xs text-primary-200 text-center mt-3">
                    Fast response • Same-day emergency service available
                  </p>
                </div>

                {/* Business Verification Card */}
                <div className="card p-5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 space-y-2.5">
                  <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                    <ShieldCheck className="h-4 w-4 text-success-600" />
                    <span>Verified Contractor Credentials</span>
                  </div>
                  <p><strong>Business:</strong> {site.name}</p>
                  <p><strong>Licensing:</strong> {site.licenseStatus}</p>
                  <p><strong>Coverage:</strong> {site.insuranceCoverage}</p>
                  <p><strong>Lead Electricians:</strong> {site.owners}</p>
                  <p><strong>Service Type:</strong> Residential Electrical Only</p>
                  <p><strong>Hours:</strong> {site.hours}</p>
                </div>

                {/* Other Service Areas */}
                <div className="card p-6">
                  <h3 className="font-display font-bold text-base text-neutral-900 mb-3">
                    Other Service Locations
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {otherLocations.map((loc) => (
                      <li key={loc.slug}>
                        <Link
                          to={`/electrician-${loc.slug}`}
                          className="flex items-center justify-between p-2 rounded-md hover:bg-neutral-50 text-neutral-700 hover:text-primary-600 transition-colors"
                        >
                          <span className="flex items-center gap-1.5 font-medium">
                            <MapPin className="h-3.5 w-3.5 text-primary-500" />
                            {loc.name}
                          </span>
                          <span className="text-xs text-neutral-400">{loc.stateAbbr}</span>
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

      {/* City Specific FAQs */}
      <FAQSection
        title={`Frequently Asked Questions — ${location.name}, ${location.stateAbbr}`}
        faqs={faqsToUse}
      />

      {/* Final Call to Action */}
      <CTASection
        title={`Need a Licensed Residential Electrician in ${location.name}?`}
        description={`Call ${site.phone} today for safe, reliable home electrical service in ${location.name}. Upfront flat-rate pricing and guaranteed workmanship by Andy & Jake Young.`}
      />
    </>
  );
}
