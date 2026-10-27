import type { StaticImageData } from 'next/image';
import type { WebType } from './whatsapp';

export const NAV = [
  { href: '#ejemplos', label: 'Ejemplos' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#preguntas', label: 'Preguntas' },
];

/**
 * Línea opcional debajo de los botones del hero (ej.: "Te respondemos por WhatsApp").
 * Vacía = no se muestra. Completar solo con algo confirmado.
 */
export const HERO_NOTE = '';

export const HERO_TABS: { key: WebType; label: string }[] = [
  { key: 'landing', label: 'Landing' },
  { key: 'empresarial', label: 'Empresarial' },
  { key: 'tienda', label: 'Tienda' },
  { key: 'medida', label: 'A medida' },
];

export const PROBLEMS = [
  {
    title: 'Te encuentran en Instagram, pero falta información.',
    text: 'Ven tus publicaciones, pero no encuentran precios, servicios, horarios o cómo trabajás. Terminan preguntando lo mismo una y otra vez, o no preguntan.',
    fix: 'toda la información importante queda ordenada en un solo lugar.',
  },
  {
    title: 'Te buscan y no encuentran una presentación profesional.',
    text: 'Alguien te recomienda, te buscan en Google y no aparece nada que muestre la calidad de lo que hacés.',
    fix: 'te encuentran con una presentación que transmite confianza.',
  },
  {
    title: 'Quieren consultar o comprar, pero no saben cómo.',
    text: 'Les interesa lo que ofrecés, pero el siguiente paso no está claro. Y cuando cuesta consultar, muchos lo dejan para después.',
    fix: 'tienen un camino claro para escribirte o comprarte.',
  },
];

/**
 * Soluciones. `pitch` dice qué es en una frase; `ideal` para quién es;
 * `before`/`after` muestran el cambio concreto en el día a día.
 */
export type Solution = {
  key: WebType;
  title: string;
  tag: string;
  pitch: string;
  ideal: string;
  before: string;
  after: string;
};
export const SOLUTIONS: Solution[] = [
  {
    key: 'landing',
    title: 'Landing pages',
    tag: 'Para que te consulten',
    pitch: 'Una sola página con un solo objetivo: que entiendan qué ofrecés y te escriban.',
    ideal: 'Profesionales y emprendimientos con un servicio principal.',
    before: 'Te escriben "¿precio?" y la charla arranca de cero.',
    after: 'Llegan sabiendo qué hacés y listos para avanzar.',
  },
  {
    key: 'empresarial',
    title: 'Webs empresariales',
    tag: 'Para dar confianza',
    pitch: 'Un sitio de varias páginas que presenta tu empresa, tus servicios y tu trayectoria.',
    ideal: 'Empresas con varios servicios o clientes que te investigan antes de contratarte.',
    before: 'Explicás por mensaje quiénes son y qué hacen, una y otra vez.',
    after: 'Encuentran una presentación completa y profesional.',
  },
  {
    key: 'tienda',
    title: 'Tiendas online',
    tag: 'Para vender',
    pitch: 'Tu catálogo con carrito, para que te compren sin esperar a que respondas un mensaje.',
    ideal: 'Comercios y marcas que venden productos.',
    before: 'Cada venta es una conversación larga por mensaje.',
    after: 'Eligen, compran y vos preparás el pedido.',
  },
  {
    key: 'medida',
    title: 'Desarrollo a medida',
    tag: 'Para tu forma de trabajar',
    pitch: 'Funciones propias de tu negocio que una plantilla no resuelve, como turnos o reservas.',
    ideal: 'Consultorios, estudios y servicios con agenda o procesos propios.',
    before: 'Turnos coordinados a mano y por mensaje.',
    after: 'Tus clientes reservan solos y vos ves todo ordenado.',
  },
];

/** Proceso: cada `text` dice qué hacemos nosotros y, de paso, qué aporta el cliente. */
export const STEPS = [
  {
    title: 'Nos contás tu idea',
    text: 'Charlamos sobre tu negocio y lo que querés lograr, y te recomendamos qué tipo de web te conviene.',
  },
  {
    title: 'Definimos la estructura',
    text: 'Armamos el mapa de la página. Vos lo aprobás y nos pasás tu logo, fotos o textos si los tenés.',
  },
  {
    title: 'Diseñamos y desarrollamos',
    text: 'Creamos la página y vas viendo el avance para opinar en el camino.',
  },
  {
    title: 'Revisamos y publicamos',
    text: 'Ajustamos lo que nos pidas, hacemos los controles finales y la ponemos online.',
  },
];

export const PRINCIPLES = [
  { title: 'Entendemos tu negocio.', text: 'Analizamos qué vendés, a quién y qué querés lograr, para proponer soluciones que tengan sentido y no una plantilla genérica.' },
  { title: 'Pensada para tus clientes.', text: 'Pensamos cada sección desde el lado de quien te visita: qué necesita saber, qué dudas tiene y qué lo convence de elegirte.' },
  { title: 'Identidad visual cuidada.', text: 'Diseñamos con la identidad de tu marca, con colores, tipografías e imágenes coherentes para que tu web se vea profesional y única.' },
  { title: 'Pensada para cada pantalla.', text: 'Tu web se ve bien y funciona perfecto en celular, tablet y computadora, para que tus clientes tengan siempre la mejor experiencia.' },
];

/**
 * Equipo (sección "Quiénes somos"). Vacío = la sección no se muestra.
 * Fotos: guardarlas en src/assets/team/ e importarlas acá.
 */
export type TeamMember = { name: string; role: string; bio?: string; photo?: StaticImageData };
export const TEAM: TeamMember[] = [];

/* Solo dudas que no responde otra sección (tipos de web, proceso, pantallas ya están en la página). Sin precios publicados. */
export const FAQS = [
  {
    q: '¿Cuánto cuesta y cuánto tarda?',
    a: 'Depende de lo que necesites: no es lo mismo una landing que una tienda online. Nos escribís contándonos qué querés, charlamos sobre tu negocio y te pasamos un presupuesto con el tiempo estimado.',
  },
  {
    q: '¿Puedo pedir cambios cuando la web ya está publicada?',
    a: 'Sí. Podés sumar un mantenimiento mensual: nos ocupamos de que tu web funcione bien y hacemos los pequeños cambios que necesites.',
  },
  {
    q: '¿Me van a encontrar en Google?',
    a: 'Una web bien armada ayuda, y además hay un plan mensual que suma un blog con dos publicaciones por mes para mejorar tu posicionamiento. Los resultados dependen de tu rubro y de la competencia.',
  },
  {
    q: '¿Puedo usar mi propio dominio?',
    a: 'Escribinos y te contamos cómo lo manejamos según tu caso, tanto si ya tenés un dominio como si todavía no.',
  },
];

export const CONTACT_CHOICES = [
  { value: 'landing', label: 'Landing page' },
  { value: 'empresarial', label: 'Web empresarial' },
  { value: 'tienda', label: 'Tienda online' },
  { value: 'medida', label: 'Web a medida' },
  { value: 'nose', label: 'Todavía no sé' },
] as const;
