import { ShieldCheck, CheckCircle2, Phone, MapPin, Award, Users, Star, Building2, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { site, images, locations } from '@/data/siteData';
import { reviews } from '@/data/reviews';
import CTASection from '@/components/CTASection';
import { trackPhoneCall } from '@/utils/analytics';

export default function AboutPage() {
  const featuredReviews = reviews.slice(0, 4);

  return (
    <>
      <SEO
        title={`About ${site.name} | Family-Owned Licensed Electricians in Boca Raton, FL`}
        description={`Learn about Young Electric Inc, a family-owned electrical contractor run by Andy and Jake Young. Over 10 years serving Boca Raton and South Florida with certified licensing, $2M insurance, and 5-star workmanship.`}
        canonicalPath="/about"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-20 text-white">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-page relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-accent-300 border border-accent-400/30 mb-6">
              <Users className="h-4 w-4" />
              Family-Owned & Operated Electrical Contractor
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight mb-6 text-balance">
              Who We Are: Dedicated Craftsmanship by Andy & Jake Young
            </h1>
            <p className="text-lg text-neutral-200 leading-relaxed mb-8">
              Young Electric Inc is not a broker, lead referral network, or distant franchise. We are a licensed, family-operated residential electrical contractor based in Boca Raton, Florida. When you call our office, you speak directly with Andy or Jake Young—the electricians who personally inspect, repair, and guarantee your home’s electrical system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={site.phoneRaw} 
                onClick={() => trackPhoneCall('about_hero')}
                className="btn-call text-lg px-8 py-4"
              >
                <Phone className="h-5 w-5" />
                Call Andy & Jake: {site.phone}
              </a>
              <Link to="/contact" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 text-lg px-8 py-4">
                Verify Credentials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Business Identity & Credentials Card */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-4xl mx-auto -mt-16 sm:-mt-24 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Verified Business Identity</span>
                  <h2 className="text-2xl font-bold font-display text-neutral-900 mt-1">Official Licensing & Credentials</h2>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-success-50 text-success-700 border border-success-200 font-semibold text-xs">
                  <ShieldCheck className="h-4 w-4 text-success-600" />
                  Active Florida State License
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Legal Entity Name</p>
                  <p className="font-bold text-neutral-900 mt-0.5">{site.legalName}</p>
                  <p className="text-xs text-neutral-500 mt-1">Incorporated in Florida</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Owners & Master Electricians</p>
                  <p className="font-bold text-neutral-900 mt-0.5">{site.owners}</p>
                  <p className="text-xs text-neutral-500 mt-1">Father & Son Partnership</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">State Licensing Status</p>
                  <p className="font-bold text-neutral-900 mt-0.5">{site.licenseStatus}</p>
                  <p className="text-xs text-neutral-500 mt-1">Palm Beach & Broward Authorized</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">General Liability Insurance</p>
                  <p className="font-bold text-neutral-900 mt-0.5">{site.insuranceCoverage}</p>
                  <p className="text-xs text-neutral-500 mt-1">Full Coverage for Residential Work</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Workers’ Compensation</p>
                  <p className="font-bold text-neutral-900 mt-0.5">Fully Insured & Compliant</p>
                  <p className="text-xs text-neutral-500 mt-1">Zero Homeowner Liability</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Experience in South Florida</p>
                  <p className="font-bold text-neutral-900 mt-0.5">{site.yearsInBusiness}</p>
                  <p className="text-xs text-neutral-500 mt-1">4.9 Star Rating (47 Google Reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section bg-white pt-6">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600">The Young Electric Story</span>
              <h2 className="mt-2 text-3xl font-bold font-display text-neutral-900 mb-6">
                Built on Trust, Fair Pricing, and Family Integrity
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <p>
                  For over a decade, Andy Young and his son Jake have served homeowners across Boca Raton, Delray Beach, Parkland, Coral Springs, and neighboring South Florida communities. Having seen homeowners struggle with national franchise dispatchers and commissioned salespeople pushing unnecessary panel overhauls, Andy and Jake founded Young Electric Inc on a simpler, more honest foundation.
                </p>
                <p>
                  When you invite Young Electric into your home, you are working directly with the business owners. Jake handles field diagnosis and installations with obsessive attention to wire-dressing, torque specs, and code compliance. Andy oversees customer care, load calculations, and municipal permitting.
                </p>
                <p>
                  We focus exclusively on <strong>residential electrical services</strong>. By keeping our team nimble, specialized, and family-operated, we offer personal accountability that large commercial outfits and lead-referral middlemen simply cannot match.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Owner on Every Job', desc: 'No sub-contractors or junior trainees sent without master oversight.' },
                  { title: 'Transparent Flat-Rate', desc: 'You receive an exact price before any work begins—no surprise hourly fees.' },
                  { title: 'Permit & Code Certified', desc: 'Every panel change, EV charger, and rewiring project meets Florida Building Code.' },
                  { title: '100% Guaranteed Work', desc: 'We stand behind our materials and workmanship with solid warranties.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="h-4 w-4 text-success-600 flex-shrink-0" />
                      <h3 className="font-bold text-sm text-neutral-900">{item.title}</h3>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl -z-10 blur-2xl opacity-60" />
              <img
                src={images.heroElectrician}
                alt="Master electrician Andy and Jake Young inspecting residential electrical panel in South Florida"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                loading="eager"
                width="800"
                height="600"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-neutral-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">10+ Years in South Florida</p>
                    <p className="text-xs text-neutral-500">Over 1,200 homes safely serviced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Status Transparency */}
      <section className="section bg-neutral-50 border-y border-neutral-200">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Where We Operate</span>
            <h2 className="mt-2 text-3xl font-bold font-display text-neutral-900">
              Service-Area Business (SAB) Model Explained
            </h2>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Young Electric Inc operates as a mobile <strong>Service-Area Electrical Contractor</strong> based in Boca Raton, Florida. We dispatch fully stocked service vehicles directly to residential customer homes across Palm Beach and Broward Counties. Because we perform all work directly on-site at your residence, we do not operate a walk-in retail counter—ensuring all our resources remain dedicated to on-site service calls.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/electrician-${loc.slug}`}
                className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-primary-500 hover:shadow-md transition-all text-center group"
              >
                <MapPin className="h-5 w-5 mx-auto text-primary-600 mb-1 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-sm text-neutral-900 group-hover:text-primary-600">{loc.name}</p>
                <p className="text-xs text-neutral-500">{loc.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Evidence */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1 text-accent-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl font-bold font-display text-neutral-900">
              Real Reviews from Real Homeowners
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Read verified feedback from customers who have hired Andy and Jake for their residential electrical needs:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredReviews.map((r, idx) => (
              <div key={idx} className="card p-6 border border-neutral-200 shadow-sm relative">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-base text-neutral-900">{r.name}</h3>
                    <p className="text-xs text-neutral-500">{r.date}</p>
                  </div>
                  <div className="flex text-accent-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews" className="btn-outline">
              Read All 47+ Customer Reviews
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Licensed Professionals Who Care?"
        description="Call 561-363-0946 now to speak directly with Andy or Jake Young. We provide prompt diagnostics, upfront flat-rate pricing, and guaranteed electrical workmanship."
      />
    </>
  );
}
