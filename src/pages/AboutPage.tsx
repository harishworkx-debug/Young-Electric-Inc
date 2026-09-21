import { ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import { site, images } from '@/data/siteData';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Young Electric Inc"
        description="Learn more about Young Electric Inc, your premier residential electrical contractor in Boca Raton and South Florida."
        canonicalPath="/about"
      />
      <section className="section bg-white pt-12">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary-600">About Young Electric Inc</span>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Your Trusted Residential Electricians in Boca Raton
              </h1>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Young Electric Inc is a premier electrical contractor serving homeowners in Boca Raton and surrounding South Florida communities. We provide professional, reliable, and high-quality residential electrical services. Our experienced team is ready to handle all your home electrical needs.
                </p>
                <p>
                  Whether you need a simple outlet repair, a full panel upgrade, or an EV charger installed in your garage, one call connects you with our expert team who can help. You speak directly with our team, get answers to your questions, and decide whether to schedule service.
                </p>
                <p>
                  We focus exclusively on residential electrical services. We do not facilitate commercial, industrial, office, retail, restaurant, warehouse, or business electrical work. If you have a home electrical need in Boca Raton or nearby, we are here to help you.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Direct connection with expert in-house electricians',
                  'Residential electrical services only',
                  'Guaranteed workmanship and satisfaction',
                  'Serving Boca Raton and surrounding South Florida communities',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success-500 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href={site.phoneRaw} className="btn-call mt-8">
                <Phone className="h-4 w-4" />
                Call Now: {site.phone}
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl -z-10 blur-2xl opacity-50" />
              <img
                src={images.electricianPanel}
                alt="Professional residential electrician examining a home electrical panel in Boca Raton, FL"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-100">
                    <ShieldCheck className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Residential-Only Service</p>
                    <p className="text-sm text-neutral-600">No commercial or industrial work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
