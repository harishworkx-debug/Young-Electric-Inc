import { Star } from 'lucide-react';
import { reviews, reviewStats } from '@/data/reviews';
import SEO from '@/components/SEO';
import { site, localBusinessSchema } from '@/data/siteData';

export default function ReviewsPage() {
  const metaTitle = `Customer Reviews | ${site.name} | Boca Raton Electrician`;
  const metaDescription = `Read real customer reviews for ${site.name}. See why Boca Raton homeowners trust our family-owned business for their residential electrical needs.`;

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath="/reviews"
        schema={[localBusinessSchema]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-page relative text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            See what your neighbors in South Florida are saying about our electrical services.
          </p>
          
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-block">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold text-white">{reviewStats.rating}</span>
              <div className="flex text-accent-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-primary-100">Based on {reviewStats.count} Google Reviews</p>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="card p-6 flex flex-col h-full bg-white shadow-sm border border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h2 className="font-semibold text-neutral-900 text-base">{review.name}</h2>
                      <p className="text-xs text-neutral-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-accent-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-600 text-sm leading-relaxed italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
