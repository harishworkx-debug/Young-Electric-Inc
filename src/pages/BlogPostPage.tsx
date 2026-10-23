import { Link, Navigate, useParams } from 'react-router-dom';
import { Phone, ShieldCheck, CheckCircle2, ArrowRight, User } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blogData';
import { site } from '@/data/siteData';

// Helper to render inline markdown: **bold**, [text](url)
function renderInlineContent(text: string) {
  // Regex to match markdown links [text](url) and bold **text**
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkUrl = linkMatch[2];
        const isInternal = linkUrl.startsWith('/');
        if (isInternal) {
          return (
            <Link
              key={index}
              to={linkUrl}
              className="text-primary-600 font-semibold hover:text-primary-800 underline decoration-primary-300 underline-offset-2 transition-colors"
            >
              {linkText}
            </Link>
          );
        }
        return (
          <a
            key={index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-semibold hover:text-primary-800 underline decoration-primary-300 underline-offset-2 transition-colors"
          >
            {linkText}
          </a>
        );
      }
    }

    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-bold text-neutral-900">{boldText}</strong>;
    }

    return part;
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${site.domain}${post.imageUrl}`,
    author: {
      '@type': 'Organization',
      name: `${site.name} (Andy & Jake Young)`,
      url: site.domain
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.domain}/favicon.ico`
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.domain}/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | ${site.name}`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        schema={[articleSchema]}
      />

      <article className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white">
        <div className="container-page max-w-4xl">
          <Breadcrumbs 
            items={[
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${post.slug}` }
            ]} 
            theme="light" 
          />
          
          <header className="mb-8 mt-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-3 border border-primary-200">
              South Florida Home Electrical Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 leading-tight text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-neutral-700">
                <User className="h-4 w-4 text-primary-600" />
                By {post.author}
              </span>
              <span>•</span>
              <span className="text-success-700 font-medium flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" />
                Code & Safety Reviewed
              </span>
            </div>
          </header>

          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-[380px] sm:h-[450px] object-cover rounded-2xl mb-12 shadow-lg"
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="450"
          />

          {/* Article Body */}
          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-neutral-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3">
            {post.content.map((paragraph, idx) => {
              // Heading 2
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
              }

              // Heading 3
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
              }

              // Bullet list item
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                const itemText = paragraph.slice(2);
                return (
                  <div key={idx} className="flex items-start gap-2.5 my-2 pl-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 leading-relaxed text-base">
                      {renderInlineContent(itemText)}
                    </span>
                  </div>
                );
              }

              // Numbered list item
              const numMatch = paragraph.match(/^(\d+)\.\s+(.*)/);
              if (numMatch) {
                const num = numMatch[1];
                const itemText = numMatch[2];
                return (
                  <div key={idx} className="flex items-start gap-3 my-2.5 pl-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-800 font-bold text-xs flex-shrink-0 mt-0.5">
                      {num}
                    </span>
                    <span className="text-neutral-700 leading-relaxed text-base">
                      {renderInlineContent(itemText)}
                    </span>
                  </div>
                );
              }

              // Standard paragraph with rich inline links and formatting
              return (
                <p key={idx} className="mb-5 text-neutral-700 leading-relaxed text-base sm:text-lg">
                  {renderInlineContent(paragraph)}
                </p>
              );
            })}
          </div>

          {/* Author Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="h-16 w-16 rounded-2xl bg-primary-700 text-white font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                YE
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-neutral-900 font-display">Andy Young & Jake Young</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-100 text-accent-800 font-semibold">
                    Master Electricians
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                  Andy and Jake are the father-and-son team behind Young Electric Inc, a Florida State Certified Electrical Contractor based in Boca Raton, FL. With over 10 years of hands-on experience, they specialize in residential panel upgrades, Level 2 EV charging, and whole-house surge protection.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                  <span>Florida Licensed & Insured</span>
                  <span>•</span>
                  <span>Palm Beach & Broward Counties</span>
                  <span>•</span>
                  <a href={site.phoneRaw} className="font-bold text-primary-600 hover:underline">
                    Call: {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Service Action Callout */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-900 via-primary-950 to-neutral-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-400">South Florida Electrical Services</span>
              <h2 className="text-2xl font-bold font-display mt-1 text-white">Have Questions About Your Home's Wiring?</h2>
              <p className="text-neutral-300 text-sm mt-2 max-w-xl">
                Speak directly with Andy or Jake Young. We provide honest safety evaluations, upfront flat-rate pricing, and guaranteed workmanship throughout Boca Raton and South Florida.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <a href={site.phoneRaw} className="btn-call w-full sm:w-auto text-base justify-center py-3.5 px-6">
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn-outline text-white border-white/40 hover:border-accent-400 hover:text-accent-400 w-full sm:w-auto text-base justify-center py-3.5 px-6">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Return to Blog Link */}
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700">
              ← Return to All Electrical Guides & Articles
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
