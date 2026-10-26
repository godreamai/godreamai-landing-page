'use client';

import { CONTACT_CHOICES } from '@/lib/content';
import { waUrl, type ContactChoice } from '@/lib/whatsapp';
import { Arrow, SectionEyebrow } from '@/components/ui/primitives';
import { useContact } from '@/components/ui/contact';
import { trackWhatsApp } from '@/lib/analytics';
import { CONTACT_EMAIL } from '@/lib/site';

export function FinalCta() {
  const { choice, setChoice, toast } = useContact();
  const url = waUrl(choice);

  return (
    <section className="section tone-lime gd-light" id="contacto" aria-labelledby="contacto-title">
      <div className="container cta-grid">
        <div>
          <SectionEyebrow label="Empecemos" />
          <h2 id="contacto-title" className="h2 reveal">¿Tu próxima web? Empecemos por una charla.</h2>
          <p className="sub reveal">Contanos qué hacés y qué te gustaría lograr con tu página. Vemos juntos cómo encararlo.</p>
        </div>
        <div className="cta-box reveal">
          <fieldset className="chips">
            <legend>¿Qué te interesa? <span>(opcional)</span></legend>
            {CONTACT_CHOICES.map((c) => (
              <label className="chip" key={c.value}>
                <input
                  type="radio"
                  name="tipo"
                  value={c.value}
                  checked={choice === c.value}
                  onChange={() => setChoice(c.value as ContactChoice)}
                />
                <span>{c.label}</span>
              </label>
            ))}
          </fieldset>
          {url ? (
            <a className="btn btn-dark btn-lg" href={url} target="_blank" rel="noopener" onClick={() => trackWhatsApp('cierre', choice ?? undefined)}>Hablemos de tu página web <Arrow /></a>
          ) : (
            <a
              className="btn btn-dark btn-lg"
              href="#contacto"
              onClick={(e) => { e.preventDefault(); toast('El WhatsApp oficial todavía no está configurado.'); }}
            >
              Hablemos de tu página web <Arrow />
            </a>
          )}
        </div>
      </div>
      {/* Notas centradas al pie de la sección */}
      <div className="container section-foot">
        <p className="cta-note">
          {url ? 'Se abre WhatsApp con tu mensaje listo para enviar.' : 'WhatsApp pendiente de configurar.'}
        </p>
        {CONTACT_EMAIL && (
          <p className="cta-alt">¿Preferís email? Escribinos a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        )}
      </div>
    </section>
  );
}
