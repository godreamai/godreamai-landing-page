import { CONTACT_EMAIL, INSTAGRAM_URL, LOCATION } from '@/lib/site';
import { waUrl } from '@/lib/whatsapp';
import { Logo } from '@/components/ui/primitives';
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/icons';

/* Mismo armado que el footer de godreamai.com: marca · Empresa · Contacto, y barra de copyright. */
const LINKS = [
  { href: '#ejemplos', label: 'Ejemplos' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#enfoque', label: 'Nuestro enfoque' },
  { href: '#preguntas', label: 'Preguntas frecuentes' },
];

export function Footer() {
  const wa = waUrl();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="https://www.godreamai.com/" aria-label="Go Dream AI: ir al sitio principal" className="footer-logo">
            <Logo height={32} />
          </a>
          <p>Webs a medida para que tu negocio se vea profesional y tus clientes te contacten fácil.</p>
        </div>
        <nav className="footer-col" aria-label="Pie de página">
          <span className="footer-eyebrow">Empresa</span>
          {LINKS.map((l) => <a key={l.href} className="footer-link" href={l.href}>{l.label}</a>)}
        </nav>
        <div className="footer-col footer-contact">
          <span className="footer-h">Contacto</span>
          {wa && <a className="footer-contact-link" href={wa} target="_blank" rel="noopener"><WhatsAppIcon />WhatsApp</a>}
          {INSTAGRAM_URL && <a className="footer-contact-link" href={INSTAGRAM_URL} target="_blank" rel="noopener"><InstagramIcon />Instagram</a>}
          {CONTACT_EMAIL && <a className="footer-contact-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}
          <span className="footer-loc">{LOCATION}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Go Dream AI</span>
        </div>
      </div>
    </footer>
  );
}
