import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type FAQItem = { q: string; a: string };

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-neutral-50" id="faqs">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">FAQ</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-semibold text-neutral-900">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary-600 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5 text-neutral-600 leading-relaxed animate-slide-down">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
