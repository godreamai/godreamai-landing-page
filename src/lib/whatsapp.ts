/** Tipos de web que se pueden preseleccionar antes de abrir WhatsApp. */
export type WebType = 'landing' | 'empresarial' | 'tienda' | 'medida';
export type ContactChoice = WebType | 'nose';

/**
 * Número oficial de WhatsApp (formato internacional, sin "+"). Por defecto, el de godreamai.com;
 * se puede reemplazar con NEXT_PUBLIC_WHATSAPP_NUMBER si esta línea tiene un número propio.
 */
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5493364294964').replace(/\D/g, '');

export const WA_MESSAGES: Record<ContactChoice | 'default', string> = {
  default: 'Hola. Quisiera consultar por una página web para mi negocio.',
  landing: 'Hola. Me interesa una landing page para mi negocio y quisiera consultar cómo trabajan.',
  empresarial: 'Hola. Me interesa una web empresarial para mi negocio y quisiera consultar cómo trabajan.',
  tienda: 'Hola. Me interesa una tienda online para mi negocio y quisiera consultar cómo trabajan.',
  medida: 'Hola. Me interesa una web a medida para mi negocio y quisiera consultar cómo trabajan.',
  nose: 'Hola. Quiero una página web para mi negocio, pero todavía no sé qué tipo necesito. ¿Me ayudan a definirlo?',
};

export function waUrl(choice: ContactChoice | null = null): string | null {
  if (!WHATSAPP_NUMBER) return null;
  const msg = WA_MESSAGES[choice ?? 'default'];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
