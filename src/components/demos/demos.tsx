/* Demos conceptuales — marcas ficticias. Se renderizan a 1280px (desktop) y 390px (mobile) de ancho
   y se escalan. Con `full` se muestra la página completa (vista ampliada, scrolleable);
   sin `full`, solo la portada (1280×800 / 390×800). Son decorativas: siempre van con aria-hidden. */
import type { CSSProperties, ComponentType } from 'react';
import type { WebType } from '@/lib/whatsapp';

type DemoProps = { full?: boolean };

export type Demo = {
  name: string;
  cat: string;
  url: string;
  desc: string;
  Desktop: ComponentType<DemoProps>;
  Mobile: ComponentType<DemoProps>;
};

const cls = (base: string, full?: boolean) => `demo ${base}${full ? ' full' : ''}`;

/* =========================================================
   brío — entrenamiento personal (landing)
   ========================================================= */
function BrioMore() {
  return (
    <>
      <section className="x-sec">
        <div className="x-h">Elegí cómo entrenar.</div>
        <div className="x-cards">
          {[
            ['Personalizado', 'Uno a uno con tu entrenador, con un plan armado para tu objetivo.'],
            ['Grupos reducidos', 'Hasta seis personas por clase, con seguimiento de cada una.'],
            ['Online', 'Tu rutina y seguimiento a distancia, para entrenar donde estés.'],
          ].map(([t, d]) => (
            <div className="x-card" key={t}><b>{t}</b><span>{d}</span><em>Consultar →</em></div>
          ))}
        </div>
      </section>
      <section className="x-sec x-steps">
        <div className="x-h">Así arrancás.</div>
        <div className="x-row">
          {['Nos contás tu objetivo', 'Hacés una clase de prueba', 'Arrancás con tu plan'].map((t, i) => (
            <div key={t}><i>{i + 1}</i><b>{t}</b></div>
          ))}
        </div>
      </section>
      <section className="x-band"><div>Tu primera clase te espera.</div><span>Reservá por WhatsApp</span></section>
      <footer className="x-foot"><span className="logo">brío<b>.</b></span><span>Palermo · Buenos Aires</span><span>@brio.entrena</span></footer>
    </>
  );
}
function BrioDesktop({ full }: DemoProps) {
  return (
    <div className={cls('d-brio', full)}>
      <div className="nav-d">
        <span className="logo">brío<b>.</b></span>
        <div className="links"><span>Planes</span><span>Cómo es</span><span>Entrenadores</span><span>Preguntas</span></div>
        <span className="pill-dark">Reservá tu clase</span>
      </div>
      <div className="hero-d">
        <div>
          <span className="tag">Entrenamiento personal · Palermo</span>
          <div className="h">Entrená con un plan hecho <span className="accent">para vos.</span></div>
          <div className="p">Clases personalizadas y grupos reducidos. Contanos tu objetivo y armamos tu rutina.</div>
          <div className="btns"><span className="b1">Consultar por WhatsApp</span><span className="b2">Ver planes</span></div>
        </div>
        <div className="art">
          <div className="arch" />
          <div className="arch-lines">Fuerza<br />Movilidad<br />Running</div>
          <div className="card"><small>Próxima clase grupal</small><strong>Lunes 19:00</strong><em>Grupos reducidos</em></div>
        </div>
      </div>
      {full && <BrioMore />}
    </div>
  );
}
function BrioMobile({ full }: DemoProps) {
  return (
    <div className={cls('m d-brio', full)}>
      <div className="nav-d"><span className="logo">brío<b>.</b></span><span className="burger"><i /></span></div>
      <span className="tag">Entrenamiento personal</span>
      <div className="h">Entrená con un plan hecho <span className="accent">para vos.</span></div>
      <div className="p">Clases personalizadas y grupos reducidos.</div>
      <span className="b1">Consultar por WhatsApp</span>
      <div className="arch" />
      {full && <BrioMore />}
    </div>
  );
}

/* =========================================================
   Trazo — estudio de ingeniería (empresarial)
   ========================================================= */
function TrazoMore() {
  return (
    <>
      <section className="x-sec">
        <div className="x-top"><div className="x-h">Proyectos recientes</div><span>Ver todos →</span></div>
        <div className="x-cards">
          {[
            ['Edificio residencial', 'Cálculo estructural · 8 pisos'],
            ['Nave industrial', 'Estructura metálica · dirección de obra'],
            ['Casona de 1920', 'Relevamiento y refuerzo estructural'],
          ].map(([t, d], i) => (
            <div className="x-card" key={t}><i className={`v${i}`} /><b>{t}</b><span>{d}</span></div>
          ))}
        </div>
      </section>
      <section className="x-sec x-split">
        <div className="x-h">Un estudio chico, con seguimiento directo.</div>
        <div>
          <p>Trabajás con los mismos ingenieros desde el primer cálculo hasta la última visita de obra.</p>
          <ul><li>Planos y memorias de cálculo</li><li>Visitas de obra programadas</li><li>Informes técnicos claros</li></ul>
        </div>
      </section>
      <section className="x-band"><div>¿Tenés un proyecto en marcha?</div><span>Pedir presupuesto</span></section>
      <footer className="x-foot"><span className="logo"><i />TRAZO</span><span>Estudio · Servicios · Proyectos</span><span>Buenos Aires</span></footer>
    </>
  );
}
function TrazoDesktop({ full }: DemoProps) {
  return (
    <div className={cls('d-trazo', full)}>
      <div className="nav-d">
        <span className="logo"><i />TRAZO</span>
        <div className="links"><span>Estudio</span><span>Servicios</span><span>Proyectos</span><span>Equipo</span></div>
        <span className="ctab">Pedir presupuesto</span>
      </div>
      <div className="hero-d">
        <div className="hl">
          <div className="kicker">Ingeniería estructural y de obra</div>
          <div className="h">Cálculo y dirección para obras que tienen que durar.</div>
          <div className="p">Acompañamos proyectos residenciales, comerciales e industriales desde el cálculo hasta la obra terminada.</div>
          <div className="btns"><span className="b1">Contanos tu proyecto</span><span className="b2">Ver proyectos</span></div>
        </div>
        <div className="hr"><div className="grid-lines" /><div className="plan">PLANO 04 — ESTRUCTURA</div><div className="beam" /><div className="ground" /></div>
      </div>
      <div className="svc">
        <div><small>01</small><b>Cálculo estructural</b><span>Hormigón, acero y madera.</span></div>
        <div><small>02</small><b>Dirección de obra</b><span>Seguimiento en cada etapa.</span></div>
        <div><small>03</small><b>Relevamientos</b><span>Diagnóstico de estructuras.</span></div>
        <div><small>04</small><b>Consultoría</b><span>Para estudios de arquitectura.</span></div>
      </div>
      {full && <TrazoMore />}
    </div>
  );
}
function TrazoMobile({ full }: DemoProps) {
  return (
    <div className={cls('m d-trazo', full)}>
      <div className="nav-d"><span className="logo"><i />TRAZO</span><span className="menu">Menú</span></div>
      <div className="hl">
        <div className="kicker">Ingeniería estructural</div>
        <div className="h">Cálculo y dirección para obras que tienen que durar.</div>
        <div className="p">Desde el cálculo hasta la obra terminada.</div>
        <span className="b1 b1-m">Contanos tu proyecto</span>
      </div>
      <div className="hr"><div className="grid-lines" /><div className="beam" /><div className="ground" /></div>
      {full && <TrazoMore />}
    </div>
  );
}

/* =========================================================
   Molienda — café de especialidad (tienda)
   ========================================================= */
const products = [
  { name: 'Colombia Huila', size: '250 g', price: '$ 12.500', color: '#B6492A' },
  { name: 'Brasil Cerrado', size: '250 g', price: '$ 10.900', color: '#2B1D14' },
  { name: 'Etiopía Sidamo', size: '250 g', price: '$ 14.200', color: '#6B7F4A' },
  { name: 'Blend de la casa', size: '500 g', price: '$ 18.700', color: '#D9B98F' },
];
function MoliendaMore() {
  return (
    <>
      <section className="x-sec x-origins">
        <div className="x-h">Tres orígenes, tres perfiles.</div>
        <div className="x-cards">
          {[
            ['Colombia', 'Chocolate, caramelo, cuerpo medio', '#B6492A'],
            ['Brasil', 'Nuez, cacao, poca acidez', '#2B1D14'],
            ['Etiopía', 'Floral, cítrico, té negro', '#6B7F4A'],
          ].map(([t, d, c]) => (
            <div className="x-card" key={t}><i style={{ background: c } as CSSProperties} /><b>{t}</b><span>{d}</span></div>
          ))}
        </div>
      </section>
      <section className="x-sec x-methods">
        <div className="x-h">Te lo molemos para tu método.</div>
        <div className="x-chips">{['Espresso', 'Filtro', 'Prensa francesa', 'Moka', 'En grano'].map((m) => <span key={m}>{m}</span>)}</div>
      </section>
      <section className="x-band"><div>Retiro en el local o envío a domicilio.</div><span>Ir a la tienda</span></section>
      <footer className="x-foot"><span className="logo">Molienda</span><span>Tienda · Orígenes · Métodos</span><span>@molienda.cafe</span></footer>
    </>
  );
}
function MoliendaDesktop({ full }: DemoProps) {
  return (
    <div className={cls('d-mol', full)}>
      <div className="bar-top">Café tostado cada semana · Retiro en el local</div>
      <div className="nav-d">
        <span className="logo">Molienda</span>
        <div className="links"><span>Tienda</span><span>Orígenes</span><span>Métodos</span><span>Nosotros</span></div>
        <span className="cart">Carrito <b>2</b></span>
      </div>
      <div className="hero-d">
        <div>
          <div className="h">Café de especialidad, tostado para tu forma de prepararlo.</div>
          <div className="p">Elegí el origen y la molienda. Nosotros hacemos el resto.</div>
          <span className="b1">Comprar café</span>
        </div>
        <div className="bags">
          <div className="bag b-a"><span>Colombia</span></div>
          <div className="bag b-b"><span>Brasil</span></div>
          <div className="bag b-c"><span>Etiopía</span></div>
        </div>
      </div>
      <div className="shop-h"><b>Más elegidos</b><span>Ver toda la tienda →</span></div>
      <div className="prods">
        {products.map((p) => (
          <div className="prod" key={p.name}>
            <i style={{ background: p.color }} />
            <b>{p.name} · {p.size}</b>
            <span>{p.price} <em>+</em></span>
          </div>
        ))}
      </div>
      {full && <MoliendaMore />}
    </div>
  );
}
function MoliendaMobile({ full }: DemoProps) {
  return (
    <div className={cls('m d-mol', full)}>
      <div className="bar-top">Café tostado cada semana</div>
      <div className="nav-d"><span className="logo">Molienda</span><span className="cart">Carrito <b>2</b></span></div>
      <div className="hero-d">
        <div className="h">Café de especialidad, tostado para vos.</div>
        <div className="p">Elegí el origen y la molienda.</div>
        <span className="b1">Comprar café</span>
      </div>
      <div className="shop-h"><b>Más elegidos</b></div>
      <div className="prods">
        {(full ? products : [products[0], products[2]]).map((p) => (
          <div className="prod" key={p.name}>
            <i style={{ background: p.color }} />
            <b>{p.name}</b>
            <span>{p.price} <em>+</em></span>
          </div>
        ))}
      </div>
      {full && <MoliendaMore />}
    </div>
  );
}

/* =========================================================
   Alma Salud — centro médico (a medida: turnos)
   ========================================================= */
const specs = ['Clínica médica', 'Pediatría', 'Cardiología', 'Dermatología', 'Kinesiología', 'Nutrición'];
function AlmaPro({ style }: { style?: CSSProperties }) {
  return (
    <div className="bk-pro" style={style}>
      <i />
      <div><b>Dra. Laura Méndez</b><small>Clínica médica</small></div>
    </div>
  );
}
function AlmaMore() {
  return (
    <>
      <section className="x-sec">
        <div className="x-h">Especialidades</div>
        <div className="x-grid">{specs.map((s) => <div key={s}><i /><b>{s}</b><span>Ver profesionales →</span></div>)}</div>
      </section>
      <section className="x-sec x-steps">
        <div className="x-h">Pedir un turno es simple.</div>
        <div className="x-row">
          {['Elegí especialidad y profesional', 'Elegí día y horario', 'Recibí la confirmación'].map((t, i) => (
            <div key={t}><i>{i + 1}</i><b>{t}</b></div>
          ))}
        </div>
      </section>
      <section className="x-band"><div>Atendemos obras sociales y prepagas. Consultá la tuya.</div><span>Consultar cobertura</span></section>
      <footer className="x-foot"><span className="logo"><i />alma salud</span><span>Especialidades · Profesionales · Contacto</span><span>Lun a Vie · 8 a 20 h</span></footer>
    </>
  );
}
function AlmaDesktop({ full }: DemoProps) {
  return (
    <div className={cls('d-alma', full)}>
      <div className="nav-d">
        <span className="logo"><i />alma salud</span>
        <div className="links"><span>Especialidades</span><span>Profesionales</span><span>Obras sociales</span><span>Contacto</span></div>
        <span className="ctab">Pedir turno</span>
      </div>
      <div className="hero-d">
        <div>
          <div className="h">Tu turno, en pocos pasos y sin llamar.</div>
          <div className="p">Elegí la especialidad, el profesional y el horario que te quede cómodo.</div>
          <div className="specs">{specs.map((s) => <span key={s}>{s}</span>)}</div>
        </div>
        <div className="booking">
          <div className="bk-h"><b>Pedí tu turno</b><span>Paso 2 de 3</span></div>
          <AlmaPro />
          <div className="days">
            <span>Lun<b>10</b></span><span className="sel">Mar<b>11</b></span><span>Mié<b>12</b></span><span>Jue<b>13</b></span><span>Vie<b>14</b></span>
          </div>
          <div className="hours">
            <span>9:00</span><span className="off">9:30</span><span className="sel">10:00</span><span>10:30</span>
            <span>11:00</span><span className="off">11:30</span><span>12:00</span><span>12:30</span>
          </div>
          <div className="confirm">Confirmar turno · Mar 11, 10:00</div>
        </div>
      </div>
      {full && <AlmaMore />}
    </div>
  );
}
function AlmaMobile({ full }: DemoProps) {
  return (
    <div className={cls('m d-alma', full)}>
      <div className="nav-d"><span className="logo"><i />alma</span><span className="ctab">Pedir turno</span></div>
      <div className="hero-d">
        <div className="h">Tu turno, en pocos pasos y sin llamar.</div>
        <div className="p">Elegí profesional y horario.</div>
        <div className="booking">
          <AlmaPro style={{ marginTop: 0 }} />
          <div className="days"><span>Lun<b>10</b></span><span className="sel">Mar<b>11</b></span><span>Mié<b>12</b></span><span>Jue<b>13</b></span></div>
          <div className="hours"><span>9:00</span><span className="sel">10:00</span><span>10:30</span></div>
          <div className="confirm">Confirmar turno</div>
        </div>
      </div>
      {full && <AlmaMore />}
    </div>
  );
}

export const DEMOS: Record<WebType, Demo> = {
  landing: {
    name: 'brío', cat: 'Entrenamiento personal · Landing page', url: 'brio.com.ar',
    desc: 'Una landing page para un estudio de entrenamiento: un mensaje claro, los planes y un botón para reservar la primera clase.',
    Desktop: BrioDesktop, Mobile: BrioMobile,
  },
  empresarial: {
    name: 'Trazo Ingeniería', cat: 'Estudio de ingeniería · Web empresarial', url: 'trazoingenieria.com.ar',
    desc: 'Una web empresarial para un estudio de ingeniería: quiénes son, qué servicios ofrecen, proyectos y contacto.',
    Desktop: TrazoDesktop, Mobile: TrazoMobile,
  },
  tienda: {
    name: 'Molienda', cat: 'Café de especialidad · Tienda online', url: 'molienda.com.ar',
    desc: 'Una tienda online para una marca de café: catálogo por origen y molienda, carrito y un recorrido de compra simple.',
    Desktop: MoliendaDesktop, Mobile: MoliendaMobile,
  },
  medida: {
    name: 'Alma Salud', cat: 'Centro médico · Desarrollo a medida', url: 'almasalud.com.ar',
    desc: 'Una web a medida para un centro médico, con un sistema propio para elegir profesional, día y horario y pedir un turno.',
    Desktop: AlmaDesktop, Mobile: AlmaMobile,
  },
};

/** Orden en Ejemplos. */
export const DEMO_ORDER: WebType[] = ['landing', 'empresarial', 'tienda', 'medida'];
