import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blogData';

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Electrical Tips & Resources | Young Electric Inc"
        description="Helpful guides and resources about residential electrical systems, safety tips, and maintaining your home's electrical panel."
        canonicalPath="/blog"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="container-page relative">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} theme="dark" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Helpful Resources & Electrical Tips
            </h1>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Actionable advice to keep your home's electrical system safe and efficient.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-white">
                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-neutral-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-neutral-600 mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 group mt-auto"
                  >
                    Read Article 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
