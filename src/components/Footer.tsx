import { Link } from 'react-router-dom';
import { Phone, Zap, Mail, MapPin, AlertCircle } from 'lucide-react';
import { site, services, locations } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pb-20 lg:pb-0">
      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600">
                <Zap className="h-6 w-6 text-accent-400" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-lg text-white">Young Electric Inc</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              A professional electrical contractor serving Boca Raton and South Florida homeowners with reliable residential electrical services.
            </p>
            <a href={site.phoneRaw} className="inline-flex items-center gap-2 text-success-400 font-semibold hover:text-success-300 transition-colors">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Residential Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-neutral-400 hover:text-primary-400 transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#services" className="text-primary-400 hover:text-primary-300 font-medium">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

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

          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <a href={site.phoneRaw} className="text-neutral-400 hover:text-primary-400 transition-colors">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <a href={`mailto:${site.email}`} className="text-neutral-400 hover:text-primary-400 transition-colors">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-400">{site.mainLocation}, {site.mainStateAbbr}</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors">
                Contact Page →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex items-start gap-3 p-4 bg-neutral-800/50 rounded-lg mb-6">
            <AlertCircle className="h-5 w-5 text-warning-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-400 leading-relaxed">
              <strong className="text-neutral-300">Service Guarantee:</strong> Young Electric Inc is a licensed and insured electrical contractor providing high-quality residential electrical services. We take pride in our workmanship and guarantee the quality of our services. Our team is dedicated to safety and customer satisfaction. We focus exclusively on residential properties, ensuring your home receives the specialized care it deserves.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>Serving Boca Raton, FL & surrounding South Florida residential communities.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
