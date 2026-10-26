/* Eventos de conversión. Funciona con la herramienta que esté cargada (GA4, Meta Pixel o GTM vía dataLayer). */

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer?.push({ event, ...params });
  window.gtag?.('event', event, params);
}

/** Clic que abre WhatsApp. `location` indica desde dónde (header, hero, flotante, cierre). */
export function trackWhatsApp(location: string, webType?: string) {
  track('whatsapp_click', { location, web_type: webType });
  window.fbq?.('track', 'Contact', { content_name: webType ?? 'general', location });
}
