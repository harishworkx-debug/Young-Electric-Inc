import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reviews, reviewStats } from '@/data/reviews';

export default function TestimonialSection() {
  // Get top 3 reviews for the homepage
  const topReviews = reviews.slice(0, 3);

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Customer Testimonials</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">Real Reviews from Real Neighbors</h2>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-neutral-900">{reviewStats.rating}</span>
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-neutral-600">Based on {reviewStats.count} Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {topReviews.map((review, idx) => (
            <div key={idx} className="card p-6 flex flex-col h-full bg-neutral-50 border border-neutral-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-base">{review.name}</h3>
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
                <p className="text-neutral-600 text-sm leading-relaxed italic line-clamp-4">"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/reviews" className="btn-outline inline-flex items-center gap-2 group">
            Read All Reviews
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
