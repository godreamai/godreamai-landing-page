'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/**
 * Escala una demo renderizada a tamaño real (w×h) al ancho disponible.
 * El factor se calcula con JS (ResizeObserver) y se pasa por la variable --s: la versión
 * solo CSS con tan()/atan2() no la entienden los Safari de iPhone y la demo quedaba sin escalar.
 */
export function Scaled({ w, h, children }: { w: number; h: number; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => el.style.setProperty('--s', String(el.clientWidth / w));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);

  const style = { aspectRatio: `${w} / ${h}`, '--w': `${w}px` } as CSSProperties;
  return (
    <div ref={box} className="scaler" style={style} aria-hidden="true">
      {children}
    </div>
  );
}
