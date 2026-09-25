import { Phone, Mail, MapPin, Clock, Home, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import { site, locations } from '@/data/siteData';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Young Electric Inc | Boca Raton Residential Electrician"
        description="Contact Young Electric Inc to hire a local residential electrician in Boca Raton, FL. Call 561-363-0946. We provide homeowners with expert in-house electricians."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="container-page relative">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-200 mb-6 leading-relaxed">
              Call now to speak with an expert in-house electrician serving Boca Raton and South Florida. No obligation.
            </p>
            <a href={site.phoneRaw} className="btn-call text-lg px-8 py-4">
              <Phone className="h-5 w-5" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Get In Touch</span>
              <h2 className="mt-2 text-3xl font-bold text-neutral-900 mb-6">Connect With a Local Provider</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Young Electric Inc is your trusted local electrical contractor. We provide reliable residential electrical services. Call us today to speak with our team and schedule your service directly.
              </p>

              <div className="space-y-4">
                <a href={site.phoneRaw} className="flex items-center gap-4 p-5 card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100 flex-shrink-0">
                    <Phone className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Call Us — Fastest</p>
                    <p className="text-lg font-bold text-neutral-900">{site.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${site.email}`} className="flex items-center gap-4 p-5 card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Email</p>
                    <p className="text-lg font-bold text-neutral-900">{site.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Service Area</p>
                    <p className="text-lg font-bold text-neutral-900">{site.mainLocation}, {site.mainStateAbbr} & South Florida</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Availability</p>
                    <p className="text-lg font-bold text-neutral-900">Call for current availability</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <Home className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <p className="text-sm text-neutral-700">
                  <strong>Residential Only:</strong> We provide homeowners with residential electrical team members only. No commercial or industrial services.
                </p>
              </div>
            </div>

            <div>
              <div className="card overflow-hidden">
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <iframe
                    src={site.mapEmbed}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Maps - ${site.mainLocation}, ${site.mainStateAbbr}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">Boca Raton Service Area</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    We provide homeowners with residential electrical team members throughout Boca Raton and surrounding South Florida communities.
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="mt-6 p-5 bg-warning-50 border border-warning-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <strong>Professional Service Guarantee:</strong> Young Electric Inc is a dedicated electrical contractor committed to excellence. We take pride in our work and ensure that every residential electrical project is completed with the highest standards of safety and quality by our experienced team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Quick List */}
      <section className="section bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Service Areas</span>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">Areas We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.slug} className="card p-4 text-center">
                <MapPin className="h-5 w-5 mx-auto text-primary-500 mb-1" />
                <p className="text-sm font-semibold text-neutral-900">{loc.name}</p>
                <p className="text-xs text-neutral-500">{loc.stateAbbr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
