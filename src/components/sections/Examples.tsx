'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import humanusDesktop from '@/assets/projects/humanus-desktop.png';
import humanusMobile from '@/assets/projects/humanus-mobile.png';
import lieverDesktop from '@/assets/projects/liever-desktop.png';
import lieverMobile from '@/assets/projects/liever-mobile.png';
import malanoDesktop from '@/assets/projects/virginiamalanoinmobiliaria-desktop.png';
import malanoMobile from '@/assets/projects/virginiamalanoinmobiliaria-mobile.png';
import hermolyDesktop from '@/assets/projects/hermoly-desktop.png';
import hermolyMobile from '@/assets/projects/hermoly-mobile.png';
import { Arrow, BrowserFrame, PhoneFrame } from '@/components/ui/primitives';

const REAL_PROJECTS = [
  {
    host: 'humanus.godreamai.com',
    name: 'Humanus',
    cat: 'Proyecto real · Landing page',
    desc: 'Kinesiología, pilates y alquiler de consultorios. Cada botón abre WhatsApp con el mensaje del servicio.',
    desktop: humanusDesktop,
    mobile: humanusMobile,
  },
  {
    host: 'liever.godreamai.com',
    name: 'Liever',
    cat: 'Proyecto real · E-commerce',
    desc: 'Mobiliario comercial y piezas a medida: catálogo, carrito, envíos al país y cotización por WhatsApp.',
    desktop: lieverDesktop,
    mobile: lieverMobile,
  },
  {
    host: 'virginiamalanoinmobiliaria.godreamai.com',
    name: 'Virginia Malano Inmobiliaria',
    cat: 'Proyecto real · Landing page',
    desc: 'Departamentos en venta y alquiler en edificios premium de Mar del Plata, con tasación por WhatsApp.',
    desktop: malanoDesktop,
    mobile: malanoMobile,
  },
  {
    host: 'hermoly.godreamai.com',
    name: 'Hermoly',
    cat: 'Proyecto real · Sitio de producto',
    desc: 'Gestión para peluquerías y centros de estética: clientas, stock y costo real de cada servicio.',
    desktop: hermolyDesktop,
    mobile: hermolyMobile,
  },
];

export function Examples() {
  const track = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState({ prev: false, next: true, active: 0, dots: REAL_PROJECTS.length });

  // Distancia entre el inicio de una tarjeta y la siguiente (ancho + gap).
  const stepOf = (t: HTMLDivElement) => {
    const [a, b] = Array.from(t.children) as HTMLElement[];
    return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
  };

  const update = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const step = stepOf(t);
    const max = t.scrollWidth - t.clientWidth;
    const dots = Math.max(1, Math.round(max / step) + 1);
    const prev = t.scrollLeft > 4;
    const next = t.scrollLeft < max - 4;
    const active = next ? Math.min(dots - 1, Math.round(t.scrollLeft / step)) : dots - 1;
    setNav((s) => (s.prev === prev && s.next === next && s.active === active && s.dots === dots ? s : { prev, next, active, dots }));
  }, []);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    update();
    const ro = new ResizeObserver(update);
    ro.observe(t);
    return () => ro.disconnect();
  }, [update]);

  const go = (left: number) => track.current?.scrollTo({ left, behavior: 'smooth' });
  const step = (dir: 1 | -1) => {
    const t = track.current;
    if (t) go(t.scrollLeft + dir * stepOf(t));
  };

  return (
    <section className="section tone-dark bg-glow" id="ejemplos" aria-labelledby="ejemplos-title">
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="ejemplos-title" className="h2">Así se puede ver la web de tu negocio.</h2>
          <p className="sub">Un proyecto real y tres demos conceptuales con marcas ficticias, cada una con su propia identidad. Las demos no son proyectos de clientes: muestran lo que podemos diseñar.</p>
        </div>

        <div className="ex-carousel reveal" role="group" aria-roledescription="carrusel" aria-label="Proyectos reales">
          <div className="ex-stage">
          <div className="ex-track" ref={track} onScroll={update} tabIndex={0}>
            {REAL_PROJECTS.map((p) => (
              <article
                className="ex-card"
                key={p.host}
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a')) return;
                  e.currentTarget.querySelector<HTMLAnchorElement>('[data-visit]')?.click();
                }}
              >
                <div className="ex-preview">
                  <BrowserFrame url={p.host} badge="Proyecto real">
                    <Image src={p.desktop} alt="" className="shot" sizes="(min-width: 768px) 520px, 90vw" />
                  </BrowserFrame>
                  <PhoneFrame>
                    <Image src={p.mobile} alt="" className="shot" sizes="140px" />
                  </PhoneFrame>
                </div>
                <div className="ex-info">
                  <div>
                    <p className="ex-cat">{p.cat}</p>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <a className="btn btn-secondary btn-sm ex-visit" href={`https://${p.host}/`} target="_blank" rel="noopener" data-visit>
                    Visitar sitio <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="ex-arrow ex-prev" aria-label="Proyecto anterior" disabled={!nav.prev} onClick={() => step(-1)}>
            <span className="flip"><Arrow /></span>
          </button>
          <button type="button" className="ex-arrow ex-next" aria-label="Proyecto siguiente" disabled={!nav.next} onClick={() => step(1)}>
            <Arrow />
          </button>
          </div>

          <div className="ex-controls">
            <div className="ex-dots">
              {Array.from({ length: nav.dots }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className="ex-dot"
                  aria-label={`Ir al proyecto ${i + 1}`}
                  aria-current={i === nav.active ? 'true' : undefined}
                  onClick={() => track.current && go(i * stepOf(track.current))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
