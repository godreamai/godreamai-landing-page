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
    fix: 'toda la información importante, ordenada en un solo lugar.',
  },
  {
    title: 'Te buscan y no encuentran una presentación profesional.',
    text: 'Alguien te recomienda, te buscan en Google y no aparece nada que muestre la calidad de lo que hacés.',
    fix: 'una presentación que transmite confianza desde el primer vistazo.',
  },
  {
    title: 'Quieren consultar o comprar, pero no saben cómo.',
    text: 'Les interesa lo que ofrecés, pero el siguiente paso no está claro. Y cuando cuesta consultar, muchos lo dejan para después.',
    fix: 'un camino claro para escribirte o comprar.',
  },
];

export const SOLUTIONS: { key: WebType; title: string; what: string; who: string; benefit: string }[] = [
  {
    key: 'landing',
    title: 'Landing pages',
    what: 'Una sola página enfocada en un servicio o propuesta, pensada para que el visitante entienda rápido y te consulte.',
    who: 'Profesionales, emprendimientos y negocios que quieren promocionar un servicio puntual o recibir consultas desde Instagram o anuncios.',
    benefit: 'Un mensaje claro y un solo objetivo: que te escriban.',
  },
  {
    key: 'empresarial',
    title: 'Webs empresariales',
    what: 'Un sitio con varias páginas para presentar tu empresa, tus servicios y tu forma de trabajar.',
    who: 'Empresas y negocios con varios servicios, equipo o trayectoria para mostrar.',
    benefit: 'Una presentación completa y ordenada que transmite confianza.',
  },
  {
    key: 'tienda',
    title: 'Tiendas online',
    what: 'Un catálogo con carrito para que tus clientes elijan productos y compren online.',
    who: 'Comercios y marcas que venden productos y quieren ordenar sus ventas más allá de los mensajes.',
    benefit: 'Tus clientes ven productos y opciones y pueden comprar cuando quieran.',
  },
  {
    key: 'medida',
    title: 'Desarrollo a medida',
    what: 'Cuando tu negocio necesita algo específico que una plantilla no resuelve: reservas, turnos u otras funciones propias.',
    who: 'Negocios con procesos particulares, como consultorios, estudios o servicios con agenda.',
    benefit: 'Una web que se adapta a cómo funciona tu negocio, y no al revés.',
  },
];

export const STEPS = [
  {
    title: 'Nos contás tu idea',
    you: 'Nos contás qué hace tu negocio, a quién le vendés y qué te gustaría lograr con la página.',
    we: 'Escuchamos, hacemos preguntas y te recomendamos qué tipo de web te conviene.',
  },
  {
    title: 'Definimos la estructura',
    you: 'Validás las secciones y nos compartís el material que tengas: logo, fotos o textos.',
    we: 'Armamos el mapa de la página: qué secciones lleva, en qué orden y qué tiene que decir cada una.',
  },
  {
    title: 'Diseñamos y desarrollamos',
    you: 'Ves el avance y nos das tu opinión.',
    we: 'Diseñamos la página con la identidad de tu marca y la desarrollamos para que funcione en celular, tablet y computadora.',
  },
  {
    title: 'Revisamos y publicamos',
    you: 'Revisás todo y nos contás qué ajustarías.',
    we: 'Hacemos los ajustes acordados, los controles finales y publicamos tu web.',
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
