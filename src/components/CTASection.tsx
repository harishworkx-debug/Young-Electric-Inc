import { Phone, Clock, ShieldCheck, Home } from 'lucide-react';
import { site } from '@/data/siteData';
import { trackPhoneCall } from '@/utils/analytics';

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = 'Need a Residential Electrician in Boca Raton?',
  description = 'Call 561-363-0946 now to speak directly with master electricians Andy or Jake Young. Honest diagnostics, transparent flat-rate pricing, and guaranteed code compliance.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-neutral-900 py-16 md:py-20">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent-300 mb-6 border border-white/20">
            <Clock className="h-3.5 w-3.5 text-accent-400" />
            Mon–Sat 8:00 AM – 5:00 PM • 24/7 Emergency Dispatch
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{title}</h2>
          <p className="text-base sm:text-lg text-neutral-200 mb-8 leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={site.phoneRaw} 
              onClick={() => trackPhoneCall('cta_section')}
              aria-label={`Call Young Electric Inc at ${site.phone}`}
              className="btn-call text-base sm:text-lg px-8 py-4 w-full sm:w-auto justify-center shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call {site.phone}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 text-neutral-200">
              <Home className="h-4 w-4 text-accent-400 flex-shrink-0" />
              <span>100% Residential Focus</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-200">
              <ShieldCheck className="h-4 w-4 text-accent-400 flex-shrink-0" />
              <span>FL Certified & $2M Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-200">
              <Phone className="h-4 w-4 text-accent-400 flex-shrink-0" />
              <span>Owner On Every Service Call</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
