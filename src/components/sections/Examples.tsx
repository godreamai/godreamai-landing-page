'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import shotDesktop from '@/assets/projects/godreamai-desktop.png';
import shotMobile from '@/assets/projects/godreamai-mobile.png';
import type { WebType } from '@/lib/whatsapp';
import { DEMOS, DEMO_ORDER } from '@/components/demos/demos';
import { Arrow, BrowserFrame, PhoneFrame, Scaled, SectionEyebrow } from '@/components/ui/primitives';
import { ScrollScaled } from '@/components/ui/ScrollScaled';
import { useContact } from '@/components/ui/contact';

export function Examples() {
  const [openKey, setOpenKey] = useState<WebType | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const { pickAndGo } = useContact();

  useEffect(() => {
    const d = dialog.current;
    if (openKey && d && !d.open) {
      d.showModal();
      document.body.style.overflow = 'hidden';
    }
  }, [openKey]);

  // Toda la tarjeta es clickeable; el foco queda solo en el botón "Ver ejemplo".
  const openFromCard = (key: WebType) => (e: MouseEvent<HTMLElement>) => {
    const btn = e.currentTarget.querySelector<HTMLButtonElement>('[data-open]');
    opener.current = btn;
    setOpenKey(key);
  };

  // Escape, botón o clic afuera disparan el evento "close" del <dialog>.
  const onClose = () => {
    document.body.style.overflow = '';
    setOpenKey(null);
    opener.current?.focus();
  };

  const wantThis = () => {
    const key = openKey;
    opener.current = null;
    dialog.current?.close();
    if (key) pickAndGo(key);
  };

  const demo = openKey ? DEMOS[openKey] : null;

  return (
    <section className="section tone-dark" id="ejemplos" aria-labelledby="ejemplos-title">
      <div className="container">
        <SectionEyebrow label="Ejemplos" />
        <div className="ex-head reveal">
          <h2 id="ejemplos-title" className="h2">Así se puede ver la web de <span className="acc">tu negocio.</span></h2>
          <p className="sub">Un proyecto real y tres demos conceptuales con marcas ficticias, cada una con su propia identidad. Las demos no son proyectos de clientes: muestran lo que podemos diseñar.</p>
        </div>

        <div className="ex-grid">
          {/* Proyecto real: el sitio de Go Dream AI */}
          <article
            className="ex-card reveal"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('a')) return;
              e.currentTarget.querySelector<HTMLAnchorElement>('[data-visit]')?.click();
            }}
          >
            <div className="ex-preview">
              <BrowserFrame url="godreamai.com" badge="Proyecto real">
                <Image src={shotDesktop} alt="" className="shot" sizes="(min-width: 768px) 520px, 90vw" />
              </BrowserFrame>
              <PhoneFrame>
                <Image src={shotMobile} alt="" className="shot" sizes="140px" />
              </PhoneFrame>
            </div>
            <div className="ex-info">
              <div>
                <p className="ex-cat">Proyecto real · Landing page</p>
                <h3>godreamai.com</h3>
                <p>El sitio de Go Dream AI para su línea de automatizaciones e IA, diseñado y desarrollado por nosotros.</p>
              </div>
              <a className="ex-open" href="https://www.godreamai.com/" target="_blank" rel="noopener" data-visit>
                Visitar sitio <span className="circ"><Arrow /></span>
              </a>
            </div>
          </article>

          {DEMO_ORDER.filter((key) => key !== 'landing').map((key) => {
            const d = DEMOS[key];
            return (
              <article className="ex-card reveal" key={key} onClick={openFromCard(key)}>
                <div className="ex-preview">
                  <BrowserFrame url={d.url} demo>
                    <Scaled w={1280} h={800}><d.Desktop /></Scaled>
                  </BrowserFrame>
                  <PhoneFrame>
                    <Scaled w={390} h={800}><d.Mobile /></Scaled>
                  </PhoneFrame>
                </div>
                <div className="ex-info">
                  <div>
                    <p className="ex-cat">{d.cat}</p>
                    <h3>{d.name}</h3>
                    <p>{d.desc}</p>
                  </div>
                  <button className="ex-open" type="button" data-open aria-label={`Ver ejemplo: ${d.name}`}>
                    Ver ejemplo <span className="circ"><Arrow /></span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialog}
        className="modal"
        aria-labelledby="modal-title"
        onClose={onClose}
        onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
      >
        {demo && (
          <div className="modal-inner">
            <div className="modal-top">
              <div>
                <span className="badge-demo badge-static">Demo conceptual — no es un proyecto de cliente</span>
                <h3 id="modal-title">{demo.name}</h3>
                <p className="modal-cat">{demo.cat}</p>
              </div>
              <button className="modal-close" type="button" aria-label="Cerrar" onClick={() => dialog.current?.close()}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
            <div className="modal-view">
              <BrowserFrame url={demo.url}>
                <ScrollScaled w={1280} h={760} label={`Página completa de ${demo.name} (desktop)`}><demo.Desktop full /></ScrollScaled>
              </BrowserFrame>
              <PhoneFrame className="phone-modal">
                <ScrollScaled w={390} h={800} label={`Página completa de ${demo.name} (celular)`}><demo.Mobile full /></ScrollScaled>
              </PhoneFrame>
            </div>
            <p className="modal-hint">Scrolleá dentro de cada pantalla para recorrer la página completa.</p>
            <div className="modal-foot">
              <p>{demo.desc}</p>
              <button className="btn btn-primary" type="button" onClick={wantThis}>Quiero una web así <Arrow /></button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
