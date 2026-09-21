import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { homeFaqs } from '@/data/siteData';
import CTASection from '@/components/CTASection';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Young Electric Inc"
        description="Find answers to common questions about our residential electrical services in Boca Raton, FL."
        canonicalPath="/faqs"
        schema={[faqSchema]}
      />
      <div className="pt-8">
        <FAQSection faqs={homeFaqs} />
      </div>
      <CTASection />
    </>
  );
}
