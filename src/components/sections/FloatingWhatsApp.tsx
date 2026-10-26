'use client';

import { useEffect, useState } from 'react';
import { WhatsAppLink } from '@/components/ui/contact';
import { WhatsAppIcon } from '@/components/ui/icons';

/** Visible después del hero; oculto cuando el CTA final está en pantalla. */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const cta = document.getElementById('contacto');
    if (!hero || !cta) return;
    const state = { hero: true, cta: false };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.target === hero) state.hero = en.isIntersecting;
        else state.cta = en.isIntersecting;
      });
      setShow(!state.hero && !state.cta);
    });
    io.observe(hero);
    io.observe(cta);
    return () => io.disconnect();
  }, []);

  return (
    <WhatsAppLink location="flotante" className={`float-wa${show ? ' show' : ''}`} aria-label="Escribinos por WhatsApp">
      <WhatsAppIcon size={22} />
      <span>Escribinos</span>
    </WhatsAppLink>
  );
}
