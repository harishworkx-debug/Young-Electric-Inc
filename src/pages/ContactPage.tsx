import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { site, locations, services, localBusinessSchema } from '@/data/siteData';
import { trackPhoneCall, trackFormSubmission } from '@/utils/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'electrical-repair',
    city: 'Boca Raton',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmission(formData.service, formData.city);
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title={`Contact ${site.name} | Licensed Electrician Boca Raton, FL`}
        description={`Contact Young Electric Inc directly at 561-363-0946. Speak with owners Andy or Jake Young. Licensed Florida electrical contractor serving Boca Raton, Delray Beach, Parkland, Coral Springs, and South Florida.`}
        canonicalPath="/contact"
        schema={[localBusinessSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 py-16 lg:py-20 text-white">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-page relative">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} theme="dark" />
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-accent-300 border border-accent-400/30 mb-6">
              <Phone className="h-3.5 w-3.5" />
              Direct Owner Contact • Speak With Andy or Jake
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
              Contact Young Electric Inc
            </h1>
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
              Have an electrical emergency, planning a 200A panel upgrade, or need an EV charger installed? Speak directly with master electricians Andy or Jake Young.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href={site.phoneRaw} 
                onClick={() => trackPhoneCall('contact_page_hero')}
                aria-label={`Call Young Electric Inc at ${site.phone}`}
                className="btn-call text-base sm:text-lg px-8 py-4 justify-center shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call {site.phone}
              </a>
              <span className="text-xs text-neutral-300 sm:text-left text-center">
                Mon–Sat 8:00 AM – 5:00 PM • 24/7 Emergency Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels & Online Form */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left 5 Cols: Direct Contact Channels & NAP Verification */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Direct Contractor Contact</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-4">
                  Fast, Dependable Communication
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  At Young Electric Inc, you speak directly with the electricians who evaluate and complete the work. We provide upfront flat-rate pricing, clear timelines, and immediate phone diagnostics.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Card with Click-to-Call */}
                <a 
                  href={site.phoneRaw} 
                  onClick={() => trackPhoneCall('contact_page_card')}
                  aria-label={`Call Young Electric Inc at ${site.phone}`}
                  className="flex items-center gap-4 p-5 card-hover border border-neutral-200 shadow-sm rounded-2xl group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Direct Phone (Fastest Response)</p>
                    <p className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{site.phone}</p>
                    <p className="text-xs text-success-700 font-semibold mt-0.5">Call or Text • Speak with Andy or Jake</p>
                  </div>
                </a>

                {/* Email Card */}
                <a 
                  href={`mailto:${site.email}`} 
                  className="flex items-center gap-4 p-5 card-hover border border-neutral-200 shadow-sm rounded-2xl group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Email Address</p>
                    <p className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{site.email}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">For blueprints, plans & written inquiries</p>
                  </div>
                </a>

                {/* Location / Operating Base (SAB) */}
                <div className="flex items-center gap-4 p-5 card border border-neutral-200 rounded-2xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Service Headquarters & Base</p>
                    <p className="text-base font-bold text-neutral-900">{site.mainLocation}, {site.mainStateAbbr}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Mobile dispatch across Palm Beach & Broward Counties</p>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="flex items-center gap-4 p-5 card border border-neutral-200 rounded-2xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">Operating Hours</p>
                    <p className="text-base font-bold text-neutral-900">Mon–Sat: 8:00 AM – 5:00 PM</p>
                    <p className="text-xs font-semibold text-accent-600 mt-0.5">24/7 Emergency Hazards Dispatched</p>
                  </div>
                </div>
              </div>

              {/* Verified Contractor Credentials Card */}
              <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs text-neutral-700 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-success-600" />
                    <h3 className="font-bold text-sm text-neutral-900">Contractor Credentials</h3>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{site.rating} (47 Google Reviews)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-200">
                  <div>
                    <strong className="text-neutral-900 block">Licensing:</strong>
                    <span>{site.licenseStatus}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Insurance:</strong>
                    <span>{site.insuranceCoverage}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Owners:</strong>
                    <span>{site.owners}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Scope:</strong>
                    <span>100% Residential Specialists</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Online Quote Request Form & Map */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Online Form Card */}
              <div className="card p-6 sm:p-8 bg-neutral-50/70 border border-neutral-200 rounded-3xl shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Online Service Inquiry</span>
                <h3 className="text-2xl font-bold font-display text-neutral-900 mt-1 mb-2">
                  Request an Upfront Quote or Service Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                  Fill out this brief form and Andy or Jake Young will call you directly to discuss your project, confirm details, and provide transparent flat-rate pricing.
                </p>

                {submitted ? (
                  <div className="p-6 bg-success-50 border border-success-200 rounded-2xl text-center space-y-3 animate-fade-in">
                    <div className="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center mx-auto text-success-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-success-900">Thank You, {formData.name || 'Valued Customer'}!</h4>
                    <p className="text-sm text-success-800 leading-relaxed max-w-md mx-auto">
                      Your request has been received directly by master electricians Andy and Jake Young. We will review your project details and contact you shortly at <strong>{formData.phone || 'your phone number'}</strong>.
                    </p>
                    <p className="text-xs text-neutral-600 pt-2">
                      Need immediate help? Call us directly at <a href={site.phoneRaw} className="font-bold text-primary-700 underline">{site.phone}</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="First and last name"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 561-363-0946"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                          Your City / Community
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        >
                          {locations.map((loc) => (
                            <option key={loc.slug} value={loc.name}>
                              {loc.name}, FL
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                      >
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.shortTitle}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                        Project Details / Problem Description
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you need (e.g. 200A panel upgrade, Level 2 EV charger, flickering lights in kitchen)..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-call w-full justify-center text-base py-3.5 shadow-md"
                    >
                      <Send className="h-4 w-4" />
                      Submit Service Request
                    </button>
                    <p className="text-center text-xs text-neutral-500">
                      We respect your privacy. No spam or marketing lists—you speak directly with Andy or Jake Young.
                    </p>
                  </form>
                )}
              </div>

              {/* Map & Google Business Profile Card */}
              <div className="card overflow-hidden border border-neutral-200 shadow-sm rounded-3xl">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    src={site.mapEmbed}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Maps - ${site.name} in ${site.mainLocation}, ${site.mainStateAbbr}`}
                  />
                </div>
                <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-base text-neutral-900">Boca Raton Dispatch Base</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Service-Area Business (SAB) dispatched across Palm Beach & Broward Counties
                    </p>
                  </div>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs px-4 py-2.5 flex-shrink-0"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Verify Google Listing
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="section bg-neutral-50 border-t border-neutral-200">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Dispatched Across South Florida</span>
            <h2 className="mt-2 text-3xl font-bold font-display text-neutral-900">Communities We Serve</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Click any city below to explore specific neighborhood project case studies, common electrical challenges, and local building permit requirements:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/electrician-${loc.slug}`}
                className="card p-5 text-center hover:border-primary-500 hover:shadow-md transition-all group rounded-2xl bg-white"
              >
                <MapPin className="h-5 w-5 mx-auto text-primary-500 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-base font-bold text-neutral-900 group-hover:text-primary-600">{loc.name}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{loc.county}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:underline">
                  View City Details <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
