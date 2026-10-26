'use client';

import { createContext, useCallback, useContext, useRef, useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { waUrl, type ContactChoice } from '@/lib/whatsapp';
import { trackWhatsApp } from '@/lib/analytics';

type ContactCtx = {
  choice: ContactChoice | null;
  setChoice: (c: ContactChoice | null) => void;
  /** Preselecciona el tipo de web en el CTA final y lleva al usuario ahí. */
  pickAndGo: (c: ContactChoice) => void;
  toast: (msg: string) => void;
};

const Ctx = createContext<ContactCtx | null>(null);

export function useContact() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useContact debe usarse dentro de <ContactProvider>');
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ContactChoice | null>(null);
  const [toastMsg, setToastMsg] = useState('');
  const [toastOn, setToastOn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastOn(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastOn(false), 3600);
  }, []);

  const pickAndGo = useCallback((c: ContactChoice) => {
    setChoice(c);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contacto')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => {
      document.querySelector<HTMLInputElement>(`input[name="tipo"][value="${c}"]`)?.focus({ preventScroll: true });
    }, reduce ? 0 : 600);
  }, []);

  return (
    <Ctx.Provider value={{ choice, setChoice, pickAndGo, toast }}>
      {children}
      <div className={`toast${toastOn ? ' show' : ''}`} role="status" aria-live="polite">{toastMsg}</div>
    </Ctx.Provider>
  );
}

/**
 * Enlace directo a WhatsApp (header, hero, flotante).
 * Sin número configurado no abre ningún enlace inventado: lleva al CTA final.
 */
export function WhatsAppLink({
  className,
  children,
  location,
  ...rest
}: { className?: string; children: ReactNode; location: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const url = waUrl();
  return url ? (
    <a className={className} href={url} target="_blank" rel="noopener" onClick={() => trackWhatsApp(location)} {...rest}>{children}</a>
  ) : (
    <a className={className} href="#contacto" {...rest}>{children}</a>
  );
}
