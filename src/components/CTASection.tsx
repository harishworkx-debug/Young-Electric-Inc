import { Phone, Clock, ShieldCheck, Home } from 'lucide-react';
import { site } from '@/data/siteData';

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = 'Need a Residential Electrician in Boca Raton?',
  description = 'Call now and we will connect you with an independent local residential electrical provider. Fast, free, and no obligation.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 py-16 md:py-20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-6">
            <Clock className="h-4 w-4 text-accent-400" />
            Available for connection now
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{title}</h2>
          <p className="text-lg text-primary-100 mb-8 leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={site.phoneRaw} className="btn-accent text-lg px-8 py-4 w-full sm:w-auto">
              <Phone className="h-5 w-5" />
              Call {site.phone}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2 text-primary-100">
              <Home className="h-5 w-5 text-accent-400" />
              Residential Only
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-100">
              <ShieldCheck className="h-5 w-5 text-accent-400" />
              No Obligation
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-100">
              <Phone className="h-5 w-5 text-accent-400" />
              Direct Provider Connection
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
