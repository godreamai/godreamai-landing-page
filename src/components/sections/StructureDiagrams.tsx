/* Estructura típica de cada tipo de web (panel de Soluciones). */
import { Fragment, type CSSProperties, type ReactNode } from 'react';
import type { WebType } from '@/lib/whatsapp';
import { Arrow } from '@/components/ui/primitives';

function Flow({ steps, style }: { steps: string[]; style?: CSSProperties }) {
  return (
    <div className="flow" style={style}>
      {steps.map((s, i) => (
        <Fragment key={s}>
          {i > 0 && <Arrow />}
          <span className={i === steps.length - 1 ? 'hl' : undefined}>{s}</span>
        </Fragment>
      ))}
    </div>
  );
}

const landingRows: [string, string, boolean?][] = [
  ['Portada', 'Qué ofrecés y botón de contacto', true],
  ['El problema', 'Por qué te necesitan'],
  ['Tu servicio', 'Qué incluye y cómo es'],
  ['Beneficios', 'Qué gana tu cliente'],
  ['Preguntas', 'Dudas frecuentes'],
  ['Contacto', 'Botón a WhatsApp', true],
];

function LandingDiagram() {
  return (
    <>
      <div className="wf">
        {landingRows.map(([t, s, hl], i) => (
          <div key={t} className={`wf-row${hl ? ' hl' : ''}${i === 0 ? ' tall' : ''}`}>
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            <span><strong style={{ fontWeight: 600, color: 'inherit' }}>{t}</strong> · {s}</span>
            <span className="bar"><i style={{ width: 40 - i * 4 }} /><i style={{ width: 18 }} /></span>
          </div>
        ))}
      </div>
      <p className="wf-caption">Una página, de arriba hacia abajo. Cada sección lleva al contacto.</p>
    </>
  );
}

function CompanyDiagram() {
  return (
    <>
      <div className="tree">
        <span className="tree-node root" style={{ width: 'max-content' }}>Inicio</span>
        <div className="tree-kids">
          <div><span className="tree-node">Nosotros</span></div>
          <div><span className="tree-node">Servicios</span><div className="tree-sub"><span>Servicio A</span><span>Servicio B</span></div></div>
          <div><span className="tree-node">Proyectos</span><div className="tree-sub"><span>Proyecto</span></div></div>
          <div><span className="tree-node">Contacto</span></div>
        </div>
      </div>
      <p className="wf-caption">Varias páginas conectadas, cada una con un tema.</p>
    </>
  );
}

function ShopDiagram() {
  return (
    <>
      <div className="shop">
        <div className="shop-grid">
          {Array.from({ length: 6 }, (_, i) => <div className="shop-card" key={i}><i /><b /><s /></div>)}
        </div>
        <Flow steps={['Catálogo', 'Producto', 'Carrito', 'Finalizar compra']} />
      </div>
      <p className="wf-caption">Catálogo, ficha de producto, carrito y compra. Medios de pago y envío se definen en cada proyecto.</p>
    </>
  );
}

const busyDays = [3, 4, 8, 10, 12, 15, 17, 18];
function CustomDiagram() {
  return (
    <>
      <div className="book">
        <div className="cal">
          <div className="cal-h"><span>Elegí el día</span><span className="mono">Mar 11</span></div>
          <div className="cal-g">
            {Array.from({ length: 21 }, (_, i) => {
              const n = i + 1;
              const cls = n === 11 ? 'sel' : busyDays.includes(n) ? 'on' : undefined;
              return <i key={n} className={cls}>{n}</i>;
            })}
          </div>
        </div>
        <div className="slots">
          <span className="lbl">Horarios disponibles</span>
          <span>09:00</span><span className="sel">10:00</span><span>10:30</span><span>11:30</span>
        </div>
      </div>
      <Flow steps={['Profesional', 'Día', 'Horario', 'Confirmación']} style={{ marginTop: 14 }} />
      <p className="wf-caption">Ejemplo: un sistema de turnos propio. Cada desarrollo a medida se define según el negocio.</p>
    </>
  );
}

export const DIAGRAMS: Record<WebType, () => ReactNode> = {
  landing: LandingDiagram,
  empresarial: CompanyDiagram,
  tienda: ShopDiagram,
  medida: CustomDiagram,
};
