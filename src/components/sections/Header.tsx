'use client';

import { useEffect, useRef, useState } from 'react';
import { NAV } from '@/lib/content';
import { Logo } from '@/components/ui/primitives';
import { WhatsAppLink } from '@/components/ui/contact';

export function Header() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Marca en el menú la sección que ocupa la franja central de la pantalla.
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector<HTMLElement>(n.href)).filter((s): s is HTMLElement => !!s);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setCurrent(`#${en.target.id}`);
          else setCurrent((c) => (c === `#${en.target.id}` ? null : c));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="header" id="top">
      <div className="container header-inner">
        <a
          className="lockup"
          href="#top"
          aria-label="Go Dream AI — inicio"
          onClick={(e) => {
            // Salto directo al principio, sin la animación de scroll suave.
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: 'instant' });
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }}
        >
          <Logo priority />
          <span className="lockup-desc" aria-hidden="true">diseño + desarrollo<br />web para negocios</span>
        </a>
        <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Principal" onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setOpen(false); }}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} aria-current={current === n.href ? 'location' : undefined}>{n.label}</a>
          ))}
        </nav>
        <WhatsAppLink location="header" className="btn btn-primary btn-sm header-cta">Hablemos</WhatsAppLink>
        <button
          ref={btn}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}
