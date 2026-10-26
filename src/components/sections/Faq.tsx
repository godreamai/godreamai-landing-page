'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/content';

export function Faq() {
  // Todas cerradas al cargar.
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="section tone-dark" id="preguntas" aria-labelledby="preguntas-title">
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="preguntas-title" className="h2">Lo que suelen preguntarnos.</h2>
          <p className="sub">¿Tenés otra duda? <a href="#contacto">Escribinos</a> y te respondemos.</p>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => {
            const isOpen = open.has(i);
            return (
              // .reveal va en un wrapper estático: React reescribe el className del ítem al abrirlo.
              <div className="reveal" key={f.q}>
                <div className={`faq-item${isOpen ? ' open' : ''}`}>
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-${i}-btn`} onClick={() => toggle(i)}>
                      {f.q}<i aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-${i}-btn`} inert={!isOpen}>
                    <div><p>{f.a}</p></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
