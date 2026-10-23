import { Link } from 'react-router-dom';
import { Phone, Zap, Mail, MapPin, ShieldCheck, Star } from 'lucide-react';
import { site, services, locations } from '@/data/siteData';
import { reviewStats } from '@/data/reviews';
import { trackPhoneCall } from '@/utils/analytics';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pb-20 lg:pb-0">
      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Credentials */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600">
                <Zap className="h-6 w-6 text-accent-400" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-lg text-white">Young Electric Inc</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Owner-operated residential electrical contractor run by father-and-son master electricians Andy & Jake Young. Serving Boca Raton and South Florida with upfront flat-rate pricing.
            </p>
            
            {/* Reviews Trust Badge */}
            <div className="mb-4 p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60 inline-block">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">{reviewStats.rating} / 5.0</span>
              </div>
              <Link 
                to="/reviews" 
                className="text-xs text-neutral-300 hover:text-accent-400 transition-colors underline underline-offset-2"
              >
                Based on {reviewStats.count} Verified Google Reviews
              </Link>
            </div>

            <div className="flex flex-col space-y-2 mb-4">
              <Link to="/about" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">About Andy & Jake Young</Link>
              <Link to="/reviews" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Customer Reviews</Link>
              <Link to="/faqs" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Frequently Asked Questions</Link>
            </div>
            
            <a 
              href={site.phoneRaw} 
              onClick={() => trackPhoneCall('footer_brand')}
              className="inline-flex items-center gap-2 text-success-400 font-semibold hover:text-success-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          {/* Primary Residential Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Residential Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#services" className="text-accent-400 hover:text-accent-300 font-medium">
                  View all 15 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas (Municipalities) */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/electrician-${loc.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors">
                    Electrician {loc.name}, {loc.stateAbbr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP Details & Operating Schedule */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contractor Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <a 
                  href={site.phoneRaw} 
                  onClick={() => trackPhoneCall('footer_contact_list')}
                  className="text-neutral-300 hover:text-primary-400 transition-colors font-medium"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <a href={`mailto:${site.email}`} className="text-neutral-400 hover:text-primary-400 transition-colors">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-400">Headquarters: {site.mainLocation}, {site.mainStateAbbr} 33433 (SAB Mobile Dispatch)</span>
              </li>
              <li className="pt-2 border-t border-neutral-800">
                <p className="text-neutral-300 font-medium">Operating Hours:</p>
                <p className="text-neutral-400">Mon–Sat: 8:00 AM – 5:00 PM</p>
                <p className="text-accent-400 font-medium mt-1">24/7 Emergency Hazards Dispatched</p>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-accent-400 font-medium hover:text-accent-300 transition-colors">
                Request Service or Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Verified Licensing & Insurance Guarantee */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex items-start gap-3 p-4 bg-neutral-800/60 rounded-xl mb-6 border border-neutral-700/50">
            <ShieldCheck className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-300 leading-relaxed">
              <strong className="text-white">Verified Contractor Status:</strong> {site.name} is a Florida Certified Electrical Contractor ({site.licenseStatus}) carrying {site.insuranceCoverage} General Liability and Workers' Compensation coverage. Work is performed directly by owners Andy Young & Jake Young with an exclusive focus on residential single-family homes, townhomes, and condominiums across Palm Beach and Broward Counties.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>Accurate NAP: {site.name} • {site.phone} • {site.mainLocation}, {site.mainStateAbbr} 33433</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
