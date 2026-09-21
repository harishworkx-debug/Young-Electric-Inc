import { Link } from 'react-router-dom';
import { Phone, Zap, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { site, services, locations } from '@/data/siteData';
import ServiceIcon from '@/components/ServiceIcon';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
        <div className="bg-primary-700 text-white text-xs sm:text-sm py-1.5 px-4">
          <div className="container-page flex items-center justify-between">
            <p className="font-medium">Serving Boca Raton & South Florida Residential Homes</p>
            <a href={site.phoneRaw} className="flex items-center gap-1.5 font-semibold hover:text-accent-300 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="container-page">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform">
                <Zap className="h-6 w-6 lg:h-7 lg:w-7 text-accent-400" fill="currentColor" />
              </div>
              <div>
                <span className="block font-display font-bold text-lg lg:text-xl text-neutral-900 leading-tight">Young Electric Inc</span>
                <span className="block text-xs text-neutral-500 leading-tight">Residential Electrical Connections</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link to="/" className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                Home
              </Link>

              {/* Services dropdown */}
              <div 
                ref={servicesRef} 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  onClick={() => { setServicesDropdown(!servicesDropdown); setAreasDropdown(false); }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-[640px] bg-white rounded-xl shadow-2xl ring-1 ring-neutral-200 p-4 grid grid-cols-2 gap-1 animate-slide-down">
                    <div className="col-span-2 px-3 pb-2 mb-1 border-b border-neutral-100">
                      <p className="text-sm font-bold text-neutral-900">Residential Electrical Services in Boca Raton, FL</p>
                    </div>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}`}
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-50 transition-colors group"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors flex-shrink-0">
                          <ServiceIcon name={s.icon} className="h-4 w-4 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">{s.shortTitle}</p>
                          <p className="text-xs text-neutral-500 line-clamp-1">{s.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas dropdown */}
              <div 
                ref={areasRef} 
                className="relative"
                onMouseEnter={() => setAreasDropdown(true)}
                onMouseLeave={() => setAreasDropdown(false)}
              >
                <button
                  onClick={() => { setAreasDropdown(!areasDropdown); setServicesDropdown(false); }}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  Service Areas
                  <ChevronDown className={`h-4 w-4 transition-transform ${areasDropdown ? 'rotate-180' : ''}`} />
                </button>
                {areasDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-80 bg-white rounded-xl shadow-2xl ring-1 ring-neutral-200 p-4 animate-slide-down">
                    <div className="px-3 pb-2 mb-1 border-b border-neutral-100">
                      <p className="text-sm font-bold text-neutral-900">South Florida Service Areas</p>
                    </div>
                    <div className="max-h-[400px] overflow-y-auto">
                      {locations.map((loc) => (
                        <div key={loc.slug} className="py-1">
                          <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-wider text-neutral-400">{loc.name}, {loc.stateAbbr}</p>
                          <Link
                            to={`/electrician-${loc.slug}`}
                            onClick={() => setAreasDropdown(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors text-sm text-neutral-700 hover:text-primary-600"
                          >
                            <MapPin className="h-3.5 w-3.5 text-primary-500" />
                            Electrician {loc.name}, {loc.stateAbbr}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                About
              </Link>
              <Link to="/faqs" className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                FAQs
              </Link>
              <Link to="/contact" className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href={site.phoneRaw} className="btn-call">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white animate-slide-down max-h-[calc(100vh-120px)] overflow-y-auto">
            <nav className="container-page py-4 space-y-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                Home
              </Link>

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-0.5 animate-slide-down">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      <ServiceIcon name={s.icon} className="h-4 w-4 text-primary-500" />
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              )}

              {/* Service Areas accordion */}
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                Service Areas
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 space-y-0.5 animate-slide-down">
                  {locations.map((loc) => (
                    <div key={loc.slug}>
                      <p className="px-4 pt-2 pb-0.5 text-xs font-bold uppercase tracking-wider text-neutral-400">{loc.name}, {loc.stateAbbr}</p>
                      <Link
                        to={`/electrician-${loc.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      >
                        <MapPin className="h-3.5 w-3.5 text-primary-500" />
                        Electrician {loc.name}, {loc.stateAbbr}
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                to="/faqs"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <a href={site.phoneRaw} className="btn-call w-full mt-2">
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-success-500 text-white shadow-2xl">
        <a
          href={site.phoneRaw}
          className="flex items-center justify-center gap-2 py-4 font-bold text-base animate-pulse-glow"
        >
          <Phone className="h-5 w-5" fill="currentColor" />
          Call Now: {site.phone}
        </a>
      </div>
    </>
  );
}
