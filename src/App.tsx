import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import ContactPage from '@/pages/ContactPage';
import AboutPage from '@/pages/AboutPage';
import FAQPage from '@/pages/FAQPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { services, locations } from '@/data/siteData';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              {/* Service pages (Boca Raton only) */}
              {services.map((service) => (
                <Route
                  key={service.slug}
                  path={`/${service.slug}`}
                  element={<ServicePage service={service} />}
                />
              ))}

              {/* Location pages: /electrician-[location] */}
              {locations.map((loc) => (
                <Route
                  key={`elec-${loc.slug}`}
                  path={`/electrician-${loc.slug}`}
                  element={<LocationPage location={loc} pageType="electrician" />}
                />
              ))}

              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
