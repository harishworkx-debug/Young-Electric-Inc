import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Phone, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { reviews, reviewStats } from '@/data/reviews';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { site, localBusinessSchema } from '@/data/siteData';

// Map reviews to relevant services for contextual SEO linking
const reviewServiceTagMap: Record<string, { label: string; url: string }> = {
  'Marc Rosen': { label: 'Lighting Installation', url: '/lighting-installation-boca-raton-fl' },
  'MB W': { label: 'Electrical Repair & Outlets', url: '/electrical-repair-boca-raton-fl' },
  'bombdropper224': { label: 'Outlet Repair', url: '/outlet-repair-boca-raton-fl' },
  'Katt': { label: 'Light Switch Repair', url: '/switch-repair-boca-raton-fl' },
  'Nancy Methot': { label: 'Residential Electrical Work', url: '/residential-electrician-boca-raton-fl' },
  'Emy Delmonaco': { label: 'Emergency & Safety Guidance', url: '/emergency-electrician-boca-raton-fl' },
  'Contessa': { label: 'Residential Wiring & Renovation', url: '/residential-wiring-boca-raton-fl' },
  'paul rasmussen': { label: 'Electrical Repair & Installation', url: '/electrical-repair-boca-raton-fl' },
  'Cindi Woodrum': { label: 'Electrical Troubleshooting', url: '/electrical-troubleshooting-boca-raton-fl' },
  'Debra Hill': { label: 'Residential Electrician', url: '/residential-electrician-boca-raton-fl' },
  'Barbara Fuchs': { label: 'Residential Electrician', url: '/residential-electrician-boca-raton-fl' },
  'Deborah Garcia': { label: 'Electrical Panel Service', url: '/electrical-panel-service-boca-raton-fl' },
  'Anand Narwani': { label: 'Level 2 EV Charger Installation', url: '/ev-charger-installation-boca-raton-fl' },
  'Michael R Rigolizzo': { label: 'Ceiling Fan Installation', url: '/ceiling-fan-installation-boca-raton-fl' },
  'Jessica O': { label: 'Residential Electrical Work', url: '/residential-electrician-boca-raton-fl' },
  'Ruby Riley': { label: 'Lighting Fixtures', url: '/lighting-installation-boca-raton-fl' },
  'J Carl Jean-Francois': { label: 'Electrical Troubleshooting', url: '/electrical-troubleshooting-boca-raton-fl' },
  'Kristin S': { label: 'Recessed Lighting & Chandeliers', url: '/lighting-installation-boca-raton-fl' },
  'Ron Jarrell': { label: 'Whole-Home Surge Protection', url: '/surge-protection-boca-raton-fl' },
  'Salvatore Tosi': { label: 'Circuit Breaker Repair', url: '/breaker-repair-boca-raton-fl' },
  'Gabe R.': { label: 'Tesla EV Charger & Generator Hookup', url: '/ev-charger-installation-boca-raton-fl' },
};

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const metaTitle = `Customer Reviews | ${site.name} | Boca Raton Electrician`;
  const metaDescription = `Read 47+ real Google reviews with a 4.9 rating for Young Electric Inc. See why Boca Raton homeowners trust Andy & Jake Young for residential repairs, panels, and EV chargers.`;

  const filteredReviews = selectedFilter === 'all'
    ? reviews
    : reviews.filter((r) => {
        const tag = reviewServiceTagMap[r.name]?.label.toLowerCase() || '';
        return tag.includes(selectedFilter.toLowerCase());
      });

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath="/reviews"
        schema={[localBusinessSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24 text-white">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-page relative text-center max-w-4xl">
          <Breadcrumbs items={[{ name: 'Reviews', url: '/reviews' }]} theme="dark" />
          
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-accent-300 border border-accent-400/30 mb-6">
            <ShieldCheck className="h-4 w-4" />
            Verified Google Reviews • 100% Authentic Homeowners
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Customer Reviews & Experiences
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover why homeowners across Boca Raton, Delray Beach, and South Florida trust father-and-son team Andy & Jake Young for all residential electrical needs.
          </p>
          
          {/* Google Business Rating Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-bold text-white font-display">{reviewStats.rating}</span>
              <div>
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-neutral-300">Based on {reviewStats.count} Verified Google Reviews</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-300 hover:text-accent-200 underline underline-offset-4"
            >
              Verify on Google Maps <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-neutral-300 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              <span>10+ Years in South Florida</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              <span>Owner on Every Call</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              <span>FL Certified & $2M Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              <span>Upfront Flat-Rate Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="section bg-neutral-50">
        <div className="container-page">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Reviews (47)' },
              { id: 'lighting', label: 'Lighting & Fans' },
              { id: 'charger', label: 'EV Chargers' },
              { id: 'outlet', label: 'Outlets & Switches' },
              { id: 'panel', label: 'Panels & Breakers' },
              { id: 'troubleshooting', label: 'Troubleshooting & Repairs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-primary-700 text-white shadow-md'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, idx) => {
              const tag = reviewServiceTagMap[review.name];
              return (
                <div key={idx} className="card p-6 flex flex-col justify-between h-full bg-white shadow-sm border border-neutral-200/90 rounded-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-base shadow-sm">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h2 className="font-bold text-neutral-900 text-base">{review.name}</h2>
                          <p className="text-xs text-neutral-500">{review.date} • Google Review</p>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-neutral-700 text-sm leading-relaxed italic mb-4">
                      "{review.text}"
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto text-xs">
                    {tag ? (
                      <Link
                        to={tag.url}
                        className="inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        <span>{tag.label}</span> →
                      </Link>
                    ) : (
                      <span className="text-neutral-400">Boca Raton Resident</span>
                    )}
                    <span className="text-neutral-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-success-600" />
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary-900 via-primary-950 to-neutral-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-400">Experience the Young Electric Standard</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display mt-2 mb-3">
                Ready for Honest, 5-Star Electrical Craftsmanship?
              </h2>
              <p className="text-neutral-200 text-sm leading-relaxed">
                You speak directly with Andy or Jake Young. We provide clear upfront flat-rate pricing, respectful in-home service, and guaranteed code compliance on every job.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <a href={site.phoneRaw} className="btn-call text-base justify-center py-3.5 px-7">
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 text-base justify-center py-3.5 px-7">
                Schedule Service
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
