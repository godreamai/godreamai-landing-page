/* Datos de contacto (los mismos de godreamai.com, reemplazables por variables de entorno) y medición (opcional). */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'go@godreamai.com';
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/godreamai.ar/';
export const LOCATION = 'Buenos Aires, Argentina';

/** Google Analytics 4 (ej.: G-XXXXXXX) y Meta Pixel (ID numérico). Vacíos = no se cargan. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';
