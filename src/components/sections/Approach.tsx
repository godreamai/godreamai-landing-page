import { PRINCIPLES } from '@/lib/content';

const LIME = '#CCFF00';
const INK = '#0A0A0A';

/* Tarjeta flotante blanca con sombra suave (usa el filtro #ap-shadow definido en la sección) */
function Float({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return <rect x={x} y={y} width={w} height={h} rx="10" fill="#fff" stroke="#ECECEC" filter="url(#ap-shadow)" />;
}

/* Paisaje (montañas + sol) dentro de una imagen oscura */
function Landscape({ x, y, w, h, rx = 6 }: { x: number; y: number; w: number; h: number; rx?: number }) {
  const px = (f: number) => x + w * f;
  const py = (f: number) => y + h * f;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill="url(#ap-dark)" />
      <circle cx={px(0.36)} cy={py(0.3)} r={Math.max(2, w * 0.045)} fill="#6A6A6A" />
      <polyline
        points={`${px(0.1)},${py(0.85)} ${px(0.32)},${py(0.55)} ${px(0.46)},${py(0.72)} ${px(0.66)},${py(0.42)} ${px(0.92)},${py(0.85)}`}
        fill="none" stroke="#F5F5F5" strokeWidth={w > 80 ? 2 : 1.4} strokeLinejoin="round" strokeLinecap="round"
      />
    </g>
  );
}

/* 1 · Entendemos tu negocio: ventana con métricas y clientes */
function BusinessArt() {
  return (
    <svg viewBox="0 0 280 180" aria-hidden="true">
      <rect x="38" y="18" width="210" height="152" rx="12" fill="#FAFAFA" stroke="#EEEEEE" />
      <rect x="20" y="8" width="210" height="152" rx="12" fill="#F3F3F3" stroke="#E2E2E2" />
      <circle cx="38" cy="28" r="4" fill={LIME} />
      <circle cx="51" cy="28" r="4" fill={LIME} />
      <circle cx="64" cy="28" r="4" fill={INK} />
      <rect x="36" y="56" width="80" height="6" rx="3" fill="#D4D4D4" />
      <rect x="36" y="70" width="54" height="6" rx="3" fill="#DCDCDC" />
      <rect x="36" y="96" width="76" height="5" rx="2.5" fill="#E4E4E4" />
      <rect x="36" y="112" width="60" height="5" rx="2.5" fill="#E6E6E6" />
      <rect x="124" y="90" width="92" height="64" rx="8" fill="#EAEAEA" opacity=".7" />
      <rect x="142" y="128" width="13" height="24" rx="2" fill={LIME} />
      <rect x="161" y="116" width="13" height="36" rx="2" fill={LIME} />
      <rect x="180" y="94" width="13" height="58" rx="2" fill={LIME} />
      <Float x={196} y={44} w={66} h={54} />
      <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round">
        <circle cx="229" cy="66" r="5" />
        <path d="M220 82a9 8 0 0 1 18 0" />
        <circle cx="218" cy="68" r="3.5" />
        <path d="M210 80a7 6 0 0 1 6-5" />
        <circle cx="240" cy="68" r="3.5" />
        <path d="M248 80a7 6 0 0 0-6-5" />
      </g>
    </svg>
  );
}

/* 2 · Estructura según el objetivo: diana con dardo, carrito y consultas */
function GoalArt() {
  return (
    <svg viewBox="0 0 280 180" aria-hidden="true">
      <g fill="none">
        <circle cx="140" cy="92" r="82" stroke="#F0F0F0" />
        <circle cx="140" cy="92" r="58" stroke="#E6E6E6" />
        <circle cx="140" cy="92" r="38" stroke="#D2D2D2" />
        <circle cx="140" cy="92" r="20" stroke="#8A8A8A" />
      </g>
      <line x1="142" y1="90" x2="186" y2="49" stroke={LIME} strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="182,54 196,18 204,40" fill={LIME} />
      <polygon points="182,54 204,40 218,46" fill="#B8E600" />
      <Float x={8} y={84} w={60} h={52} />
      <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M27 100h4l4 14h15l3-10H33" />
        <circle cx="37" cy="119" r="1.6" />
        <circle cx="48" cy="119" r="1.6" />
      </g>
      <Float x={210} y={112} w={60} h={52} />
      <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M229 126h22a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-14l-6 5v-5h-2a4 4 0 0 1-4-4v-10a4 4 0 0 1 4-4z" />
      </g>
      <g fill={INK}>
        <circle cx="235" cy="135" r="1.3" />
        <circle cx="240" cy="135" r="1.3" />
        <circle cx="245" cy="135" r="1.3" />
      </g>
    </svg>
  );
}

/* 3 · Identidad visual cuidada: tipografía, imagen seleccionada y paleta */
function IdentityArt() {
  const handles = [[110, 24], [256, 24], [110, 148], [256, 148]];
  return (
    <svg viewBox="0 0 280 180" aria-hidden="true">
      <rect x="64" y="6" width="150" height="110" rx="8" fill="#F8F8F8" stroke="#EEEEEE" />
      <rect x="14" y="24" width="98" height="116" rx="8" fill="#F4F4F4" stroke="#E4E4E4" />
      <text x="34" y="86" fontSize="34" fontWeight="600" fill={INK} fontFamily="var(--font-display)" letterSpacing="-1">Aa</text>
      <rect x="110" y="24" width="146" height="124" fill="none" stroke="#C4C4C4" strokeDasharray="3 3" />
      {handles.map(([hx, hy]) => (
        <rect key={`${hx}-${hy}`} x={hx - 2.5} y={hy - 2.5} width="5" height="5" fill="#fff" stroke="#C4C4C4" />
      ))}
      <Landscape x={126} y={42} w={116} h={92} rx={8} />
      <Float x={20} y={116} w={136} h={42} />
      <circle cx="40" cy="137" r="9" fill={LIME} />
      <circle cx="62" cy="137" r="9" fill="#EBEBEB" />
      <circle cx="84" cy="137" r="9" fill={INK} />
      <circle cx="106" cy="137" r="9" fill="#ABABAB" />
      <circle cx="128" cy="137" r="9" fill="#E4E4E4" />
    </svg>
  );
}

/* 4 · Pensada para cada pantalla: notebook y celular */
function ScreensArt() {
  return (
    <svg viewBox="0 0 280 180" aria-hidden="true">
      <rect x="30" y="10" width="204" height="134" rx="9" fill={INK} />
      <rect x="35" y="15" width="194" height="124" rx="5" fill="#F7F7F7" />
      <path d="M12 144h240v3a5 5 0 0 1-5 5H17a5 5 0 0 1-5-5z" fill="#C9C9C9" />
      <rect x="112" y="144" width="40" height="3" rx="1.5" fill="#B0B0B0" />
      <g fill="#BDBDBD">
        <circle cx="46" cy="26" r="1.8" /><circle cx="52" cy="26" r="1.8" /><circle cx="58" cy="26" r="1.8" />
        <circle cx="204" cy="26" r="1.8" /><circle cx="210" cy="26" r="1.8" /><circle cx="216" cy="26" r="1.8" />
      </g>
      <rect x="46" y="42" width="64" height="5" rx="2.5" fill="#C4C4C4" />
      <rect x="46" y="54" width="50" height="5" rx="2.5" fill="#D4D4D4" />
      <rect x="46" y="70" width="70" height="4" rx="2" fill="#E0E0E0" />
      <rect x="46" y="81" width="58" height="4" rx="2" fill="#E0E0E0" />
      <rect x="46" y="100" width="32" height="8" rx="4" fill={LIME} />
      <Landscape x={148} y={38} w={58} h={52} rx={4} />
      <rect x="196" y="46" width="68" height="126" rx="11" fill={INK} />
      <rect x="200" y="50" width="60" height="118" rx="8" fill="#FAFAFA" />
      <rect x="221" y="53" width="18" height="4" rx="2" fill={INK} />
      <rect x="208" y="66" width="34" height="4" rx="2" fill="#C4C4C4" />
      <rect x="208" y="74" width="26" height="4" rx="2" fill="#DCDCDC" />
      <Landscape x={208} y={86} w={44} h={32} rx={3} />
      <rect x="218" y="128" width="24" height="6" rx="3" fill={LIME} />
      <rect x="208" y="142" width="40" height="3" rx="1.5" fill="#E0E0E0" />
      <rect x="208" y="150" width="30" height="3" rx="1.5" fill="#E6E6E6" />
    </svg>
  );
}

const ART = [BusinessArt, GoalArt, IdentityArt, ScreensArt];

/* Propuesta de valor: por qué una web a medida, sin pasos ni numeración (eso es "Proceso") */
export function Approach() {
  return (
    <section className="section tone-light gd-light" id="enfoque" aria-labelledby="enfoque-title">
      {/* Recursos compartidos por las ilustraciones */}
      <svg className="ap-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="ap-shadow" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#0A0A0A" floodOpacity=".08" />
          </filter>
          <linearGradient id="ap-dark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3A3A3A" />
            <stop offset="1" stopColor="#111111" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="enfoque-title" className="h2">Antes de diseñar, entendemos tu negocio.</h2>
          <p className="sub">Una buena web no nace de una plantilla, sino de entender tu negocio, tus objetivos y tus clientes. Así diseñamos sitios que realmente funcionan para vos y para quienes te eligen.</p>
        </div>
        <ul className="values">
          {PRINCIPLES.map((p, i) => {
            const Art = ART[i];
            return (
              <li className="value-card reveal" key={p.title} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="value-art">{Art && <Art />}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
