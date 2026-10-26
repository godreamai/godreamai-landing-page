'use client';

import Image from 'next/image';
import logoBlack from '@/assets/logo-gdai-black.png';
import { waUrl } from '@/lib/whatsapp';
import { Arrow } from '@/components/ui/primitives';
import { useContact } from '@/components/ui/contact';
import { trackWhatsApp } from '@/lib/analytics';
import { CONTACT_EMAIL } from '@/lib/site';

export function FinalCta() {
  const { choice, toast } = useContact();
  const url = waUrl(choice);

  return (
    <section className="section tone-lime gd-light bg-grid cta" id="contacto" aria-labelledby="contacto-title">
      {/* Logo oficial de fondo, solo con opacidad (sin recolorear) */}
      <Image src={logoBlack} alt="" aria-hidden="true" className="cta-mark" sizes="560px" />
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="contacto-title" className="h2">¿Tu próxima web? Hablemos.</h2>
        </div>
        <div className="cta-box reveal">
          <p className="cta-text">Contanos qué hacés y qué te gustaría lograr con tu página. En una primera charla vemos juntos qué tipo de web te conviene.</p>
          {url ? (
            <a className="btn btn-dark" href={url} target="_blank" rel="noopener" onClick={() => trackWhatsApp('cierre', choice ?? undefined)}>Hablemos de tu web <Arrow /></a>
          ) : (
            <a
              className="btn btn-dark"
              href="#contacto"
              onClick={(e) => { e.preventDefault(); toast('El WhatsApp oficial todavía no está configurado.'); }}
            >
              Hablemos de tu web <Arrow />
            </a>
          )}
          <p className="cta-note">
            {url ? 'Se abre WhatsApp con tu mensaje listo para enviar.' : 'WhatsApp pendiente de configurar.'}
            {CONTACT_EMAIL && <> ¿Preferís email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></>}
          </p>
        </div>
      </div>
    </section>
  );
}
