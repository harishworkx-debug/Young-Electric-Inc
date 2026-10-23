import { Star, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reviews, reviewStats } from '@/data/reviews';
import { site } from '@/data/siteData';

// Map specific reviews to relevant service pages for contextual SEO
const reviewTagMap: Record<string, { label: string; url: string }> = {
  'Marc Rosen': { label: 'Lighting Installation', url: '/lighting-installation-boca-raton-fl' },
  'MB W': { label: 'Electrical Repair & Outlets', url: '/electrical-repair-boca-raton-fl' },
  'bombdropper224': { label: 'Outlet Repair', url: '/outlet-repair-boca-raton-fl' },
  'Anand Narwani': { label: 'EV Charger Installation', url: '/ev-charger-installation-boca-raton-fl' },
  'Gabe R.': { label: 'Tesla Charger & Generator', url: '/ev-charger-installation-boca-raton-fl' },
  'Debra Hill': { label: 'Residential Electrician', url: '/residential-electrician-boca-raton-fl' },
};

export default function TestimonialSection() {
  // Curated showcase reviews representing distinct residential services
  const showcaseReviews = reviews.filter((r) => ['Marc Rosen', 'MB W', 'Anand Narwani'].includes(r.name));
  const displayReviews = showcaseReviews.length >= 3 ? showcaseReviews : reviews.slice(0, 3);

  return (
    <section className="section bg-neutral-50/70 border-b border-neutral-200">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-neutral-900">
            Real Boca Raton Homeowners, Genuine Experiences
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-display text-neutral-900">{reviewStats.rating}</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <span className="text-neutral-700 font-semibold text-sm">
              Based on {reviewStats.count} Verified Google Reviews
            </span>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-800 underline underline-offset-4"
            >
              Verify on Google Maps <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {displayReviews.map((review, idx) => {
            const tag = reviewTagMap[review.name];
            return (
              <div 
                key={idx} 
                className="card p-6 flex flex-col justify-between h-full bg-white border border-neutral-200 shadow-sm rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 text-sm">{review.name}</h3>
                        <p className="text-xs text-neutral-500">{review.date} • Google Review</p>
                      </div>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-neutral-700 text-sm leading-relaxed italic line-clamp-5 mb-4">
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
                  <span className="text-neutral-500 flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-success-600" />
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/reviews" 
            className="btn-outline inline-flex items-center gap-2 group font-semibold text-sm"
          >
            Read All {reviewStats.count} Verified Customer Reviews
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
