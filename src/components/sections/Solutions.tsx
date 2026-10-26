'use client';

import { useState } from 'react';
import { SOLUTIONS } from '@/lib/content';
import { Arrow } from '@/components/ui/primitives';
import { useContact } from '@/components/ui/contact';
import { DIAGRAMS } from './StructureDiagrams';

export function Solutions() {
  // Todas cerradas al cargar; un clic en la abierta la vuelve a cerrar.
  const [active, setActive] = useState<number | null>(null);
  const { pickAndGo } = useContact();
  const ActiveDiagram = active === null ? null : DIAGRAMS[SOLUTIONS[active].key];
  const toggle = (i: number) => setActive((cur) => (cur === i ? null : i));

  return (
    <section className="section tone-light gd-light" id="soluciones" aria-labelledby="soluciones-title">
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="soluciones-title" className="h2">¿Qué tipo de web necesita tu negocio?</h2>
          <p className="sub">Cada negocio necesita algo distinto. Abrí cada opción y fijate en cuál te reconocés: qué resuelve, qué cambia y cómo se organiza.</p>
        </div>

        <div className="sol reveal">
          <div className="sol-list">
            {SOLUTIONS.map((s, i) => {
              const on = i === active;
              const Diagram = DIAGRAMS[s.key];
              return (
                <div className={`sol-item${on ? ' active' : ''}`} key={s.key}>
                  <h3 style={{ font: 'inherit', letterSpacing: 'normal' }}>
                    <button className="sol-trigger" type="button" aria-expanded={on} aria-controls={`sol-body-${i}`} id={`sol-btn-${i}`} onClick={() => toggle(i)}>
                      <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                      <span className="t">{s.title}<span className="sol-tag">{s.tag}</span></span>
                      <span className="ic" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="sol-body" id={`sol-body-${i}`} role="region" aria-labelledby={`sol-btn-${i}`} inert={!on}>
                    <div>
                      <div className="sol-body-inner">
                        <p className="sol-pitch">{s.pitch}</p>
                        <p className="sol-ideal"><strong>Ideal para:</strong> {s.ideal}</p>
                        <div className="sol-ba">
                          <p className="sol-ba-before"><span>Hoy</span>{s.before}</p>
                          <p className="sol-ba-after"><span>Con tu web</span>{s.after}</p>
                        </div>
                        <div className="sol-mini" aria-hidden="true"><Diagram /></div>
                        <a className="sol-link" href="#contacto" onClick={(e) => { e.preventDefault(); pickAndGo(s.key); }}>
                          Consultar por esta web <Arrow />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="sol-panel" aria-live="polite">
            {active !== null && ActiveDiagram ? (
              <>
                <p className="sol-panel-label"><span className="mono">{String(active + 1).padStart(2, '0')}</span> Estructura típica</p>
                <div className="sol-panel-body"><ActiveDiagram /></div>
              </>
            ) : (
              <div className="sol-empty">
                <p className="sol-empty-t">Elegí un tipo de web</p>
                <p>Te mostramos para quién es, qué cambia en tu día a día y cómo se organiza la página.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
