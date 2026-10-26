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

export const HERO_TABS: { key: WebType; label: string; desc: string }[] = [
  { key: 'landing', label: 'Landing', desc: 'Landing page: una página enfocada en un servicio y en que te escriban.' },
  { key: 'empresarial', label: 'Empresarial', desc: 'Web empresarial: varias páginas para presentar tu empresa y tus servicios.' },
  { key: 'tienda', label: 'Tienda', desc: 'Tienda online: catálogo y carrito para vender tus productos.' },
  { key: 'medida', label: 'A medida', desc: 'A medida: funciones propias de tu negocio, como un sistema de turnos.' },
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
    before: 'Te buscan y solo aparece un perfil de redes.',
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

/** Proceso: `text` es lo que hacemos nosotros; `you` es tu parte, en pocas palabras. */
export const STEPS = [
  {
    title: 'Nos contás tu idea',
    text: 'Charlamos sobre tu negocio y lo que querés lograr. Te recomendamos qué tipo de web te conviene.',
    you: 'Contarnos cómo trabajás.',
  },
  {
    title: 'Definimos la estructura',
    text: 'Armamos el mapa de la página: qué secciones lleva y qué dice cada una.',
    you: 'Aprobarla y pasarnos logo, fotos o textos.',
  },
  {
    title: 'Diseñamos y desarrollamos',
    text: 'Creamos la página con la identidad de tu marca, lista para celular y computadora.',
    you: 'Ver el avance y opinar.',
  },
  {
    title: 'Revisamos y publicamos',
    text: 'Hacemos los ajustes, los controles finales y la ponemos online.',
    you: 'Revisar y pedir cambios.',
  },
];

export const PRINCIPLES = [
  { title: 'Entender el negocio antes de diseñar.', text: 'Qué vendés, a quién y cómo te consultan hoy. De ahí sale todo lo demás.' },
  { title: 'Estructura según el objetivo.', text: 'Una web para recibir consultas no se arma igual que una para vender online.' },
  { title: 'Identidad visual cuidada.', text: 'Colores, tipografías e imágenes coherentes con tu marca, para que se vea como vos.' },
  { title: 'Pensada para cada pantalla.', text: 'Se ve y se usa bien en celular, tablet y computadora.' },
];

/* Lo no confirmado (dominio, mantenimiento, plazos, precios) se responde invitando a consultar. */
/**
 * Equipo (sección "Quiénes somos"). Vacío = la sección no se muestra.
 * Fotos: guardarlas en src/assets/team/ e importarlas acá.
 */
export type TeamMember = { name: string; role: string; bio?: string; photo?: StaticImageData };
export const TEAM: TeamMember[] = [];

export const FAQS = [
  {
    q: '¿Qué tipo de página necesito?',
    a: 'Depende de lo que quieras lograr. Si querés que te consulten por un servicio, suele alcanzar con una landing page. Si necesitás presentar varios servicios o tu empresa, una web empresarial. Si querés vender productos, una tienda online. Si no estás seguro, contanos qué hacés y lo vemos juntos.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Solo contarnos qué hace tu negocio y qué te gustaría lograr con la página. Si ya tenés logo, fotos o textos, suman; si no, lo charlamos.',
  },
  {
    q: '¿La página funciona en celulares?',
    a: 'Sí. Diseñamos cada página para que se vea y se use bien en celular, tablet y computadora.',
  },
  {
    q: '¿Puedo usar mi propio dominio?',
    a: 'Escribinos y te contamos cómo lo manejamos según tu caso, tanto si ya tenés un dominio como si todavía no.',
  },
  {
    q: '¿Cómo es el proceso de desarrollo?',
    a: 'Primero nos contás tu idea, después definimos juntos la estructura, diseñamos y desarrollamos la página, y por último la revisamos con vos antes de publicarla. Los detalles de cada etapa los vemos al conversar.',
  },
  {
    q: '¿Qué pasa cuando está terminada?',
    a: 'Consultanos y te contamos qué opciones hay después de la publicación según el tipo de proyecto.',
  },
];

export const CONTACT_CHOICES = [
  { value: 'landing', label: 'Landing page' },
  { value: 'empresarial', label: 'Web empresarial' },
  { value: 'tienda', label: 'Tienda online' },
  { value: 'medida', label: 'Web a medida' },
  { value: 'nose', label: 'Todavía no sé' },
] as const;
