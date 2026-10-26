import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import logoWhite from '@/assets/logo-gdai-white.png';
import logoBlack from '@/assets/logo-gdai-black.png';

/** Logo oficial gdai. Sin recrear, deformar ni recolorear. */
export function Logo({ variant = 'white', height = 26, priority }: { variant?: 'white' | 'black'; height?: number; priority?: boolean }) {
  const src = variant === 'white' ? logoWhite : logoBlack;
  const width = Math.round((src.width / src.height) * height);
  return <Image src={src} alt="gdai" width={width} height={height} priority={priority} />;
}

export function Arrow() {
  return <i className="arr" aria-hidden="true" />;
}

/** Subtítulo de sección (punto + nombre en mayúsculas), mismo estilo que el eyebrow del hero. */
export function SectionEyebrow({ label }: { label: string }) {
  return (
    <p className="eyebrow reveal">
      <span className="dot" aria-hidden="true" />
      {label}
    </p>
  );
}

/**
 * Escala una demo renderizada a tamaño real (w×h) al ancho disponible.
 * El factor se calcula en CSS con unidades de contenedor (ver .scaler en site.css).
 */
export function Scaled({ w, h, children }: { w: number; h: number; children: ReactNode }) {
  const style = { aspectRatio: `${w} / ${h}`, '--w': `${w}px` } as CSSProperties;
  return (
    <div className="scaler" style={style} aria-hidden="true">
      {children}
    </div>
  );
}

/**
 * Marco de navegador. `demo` agrega el rótulo "Demo conceptual" en la barra, sin tapar la página;
 * `badge` muestra otro rótulo destacado (ej.: "Proyecto real").
 */
export function BrowserFrame({ url, demo, badge, children }: { url: string; demo?: boolean; badge?: string; children: ReactNode }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="url" aria-hidden="true">{url}</span>
        {badge ? <span className="bar-badge bar-badge-real">{badge}</span> : demo && <span className="bar-badge">Demo conceptual</span>}
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`phone ${className}`}>{children}</div>;
}
