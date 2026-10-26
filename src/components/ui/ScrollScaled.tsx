'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Ventana scrolleable de una demo de página completa: muestra un viewport de w×h
 * y escala el contenido (con zoom, para que el scroll use la altura real).
 */
export function ScrollScaled({ w, h, label, children }: { w: number; h: number; label: string; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    const content = inner.current;
    if (!el || !content) return;
    const update = () => { content.style.zoom = String(el.clientWidth / w); };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);

  return (
    // Región scrolleable y enfocable para poder recorrerla con teclado.
    <div ref={box} className="scroller" style={{ aspectRatio: `${w} / ${h}` }} tabIndex={0} role="region" aria-label={label}>
      <div ref={inner} className="scroller-inner" aria-hidden="true">{children}</div>
    </div>
  );
}
