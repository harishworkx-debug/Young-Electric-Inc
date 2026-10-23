/**
 * Conversion & Click-to-Call Tracking Utility for Young Electric Inc
 * 
 * Provides unified measurement for phone calls and lead form submissions
 * across Google Analytics (gtag.js), Google Tag Manager (dataLayer),
 * custom browser events, and development console logs.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track when a visitor clicks a click-to-call link
 * @param source Identifier of the button/component clicked (e.g., 'header_desktop', 'mobile_sticky_bar', 'service_hero')
 * @param phoneNumber The phone number being dialed
 */
export function trackPhoneCall(source: string, phoneNumber: string = '561-363-0946'): void {
  if (typeof window === 'undefined') return;

  const eventData = {
    event_category: 'contact',
    event_label: source,
    phone_number: phoneNumber,
    value: 1,
    timestamp: new Date().toISOString()
  };

  // 1. Google Analytics 4 (gtag.js) standard conversion event
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'phone_call_click', eventData);
    // Also send standard contact event
    window.gtag('event', 'contact', {
      method: 'phone',
      source: source
    });
  }

  // 2. Google Tag Manager dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'phone_call_click',
      callSource: source,
      phoneNumber: phoneNumber
    });
  }

  // 3. Custom DOM event for third-party trackers or ad platforms
  try {
    const customEvent = new CustomEvent('young_electric_call_click', {
      detail: eventData
    });
    window.dispatchEvent(customEvent);
  } catch {
    // Graceful fallback for legacy environments
  }

  if (import.meta.env.DEV) {
    console.log(`[Young Electric Analytics] Click-to-call triggered from "${source}" dialing ${phoneNumber}`);
  }
}

/**
 * Track when a visitor submits the online quote / service request form
 * @param service The electrical service requested
 * @param city The homeowner's city
 */
export function trackFormSubmission(service: string, city: string): void {
  if (typeof window === 'undefined') return;

  const eventData = {
    event_category: 'lead',
    event_label: `${service} - ${city}`,
    service_requested: service,
    customer_city: city,
    value: 1,
    timestamp: new Date().toISOString()
  };

  // 1. Google Analytics 4 (gtag.js) generate_lead event
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', eventData);
  }

  // 2. Google Tag Manager dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'generate_lead',
      leadService: service,
      leadCity: city
    });
  }

  // 3. Custom DOM event
  try {
    const customEvent = new CustomEvent('young_electric_form_submitted', {
      detail: eventData
    });
    window.dispatchEvent(customEvent);
  } catch {
    // Graceful fallback
  }

  if (import.meta.env.DEV) {
    console.log(`[Young Electric Analytics] Lead form submitted for "${service}" in "${city}"`);
  }
}
