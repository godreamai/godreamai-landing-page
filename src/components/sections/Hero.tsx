'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { HERO_NOTE, HERO_TABS } from '@/lib/content';
import { DEMOS } from '@/components/demos/demos';
import { Arrow, BrowserFrame, PhoneFrame, Scaled } from '@/components/ui/primitives';
import { WhatsAppLink } from '@/components/ui/contact';

export function Hero() {
  const [selected, setSelected] = useState(0);
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const select = (i: number) => {
    setSelected(i);
    if (i === shown && !fading) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(i);
      return;
    }
    setFading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShown(i);
      requestAnimationFrame(() => setFading(false));
    }, 220);
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = HERO_TABS.length;
    const next =
      e.key === 'ArrowRight' ? (i + 1) % n :
      e.key === 'ArrowLeft' ? (i - 1 + n) % n :
      e.key === 'Home' ? 0 :
      e.key === 'End' ? n - 1 : null;
    if (next === null) return;
    e.preventDefault();
    tabs.current[next]?.focus();
    select(next);
  };

  const demo = DEMOS[HERO_TABS[shown].key];
  const fade = `fade-swap${fading ? ' out' : ''}`;

  return (
    <section className="hero bg-glow" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="display">Tu negocio merece una web que esté <span className="acc">a la altura.</span></h1>
          <p className="lead">Diseñamos y desarrollamos páginas web pensadas para mostrar lo mejor de tu negocio y facilitar que tus clientes te contacten.</p>
          <div className="cta-row">
            <WhatsAppLink location="hero" className="btn btn-primary">Quiero mi página web <Arrow /></WhatsAppLink>
            <a className="btn btn-secondary" href="#soluciones">Explorar soluciones</a>
          </div>
          {HERO_NOTE && <p className="hero-note">{HERO_NOTE}</p>}
        </div>

        <div className="hero-visual">
          <div className="stage">
            <div className={fade}>
              <BrowserFrame url={demo.url} demo>
                <Scaled w={1280} h={800}><demo.Desktop /></Scaled>
              </BrowserFrame>
            </div>
            <PhoneFrame className={fade}>
              <Scaled w={390} h={800}><demo.Mobile /></Scaled>
            </PhoneFrame>
          </div>
          <div className="seg" role="tablist" aria-label="Tipo de web de ejemplo">
            {HERO_TABS.map((t, i) => (
              <button
                key={t.key}
                ref={(el) => { tabs.current[i] = el; }}
                role="tab"
                type="button"
                aria-selected={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="seg-desc" aria-live="polite">{HERO_TABS[selected].desc}</p>
        </div>
      </div>
    </section>
  );
}
