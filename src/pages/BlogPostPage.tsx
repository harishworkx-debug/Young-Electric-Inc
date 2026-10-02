import { Navigate, useParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blogData';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Very basic article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.imageUrl,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    datePublished: post.date,
  };

  return (
    <>
      <SEO
        title={`${post.title} | Young Electric Inc`}
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-2xl mb-12"
            loading="eager"
            fetchpriority="high"
            width="1200"
            height="400"
          />

          <div className="prose prose-lg prose-primary max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl">
            {post.content.map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('**') && paragraph.includes('**', 2)) {
                // simple bold parsing for lists
                const parts = paragraph.split('**');
                return (
                  <p key={idx} className="mb-4">
                    <strong>{parts[1]}</strong>{parts[2]}
                  </p>
                );
              }
              return <p key={idx} className="mb-4 text-neutral-700 leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </div>
      </article>
    </>
  );
}
