import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { locations, site } from '@/data/siteData';

export default function ServiceAreasSection() {
  return (
    <section className="section bg-white" id="service-areas">
      <div className="container-page">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-600">Service Areas</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">Residential Electrical Connections Across South Florida</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            We provide homeowners with expert in-house electricians serving Boca Raton and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <div key={loc.slug} className="card-hover p-6 text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary-50 mb-3">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-display font-bold text-neutral-900 mb-1">{loc.name}, {loc.stateAbbr}</h3>
              <div className="mt-3 space-y-2">
                <Link
                  to={`/electrician-${loc.slug}`}
                  className="block text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Electrician {loc.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-neutral-600 mb-4">
            Don&apos;t see your city? Call us and we will try to connect you with our team in your area.
          </p>
          <a href={site.phoneRaw} className="btn-call">
            <Phone className="h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
