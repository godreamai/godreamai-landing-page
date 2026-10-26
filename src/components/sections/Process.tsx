'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { STEPS } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/primitives';

export function Process() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = STEPS.length;
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? (i + 1) % n :
      e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? (i - 1 + n) % n :
      e.key === 'Home' ? 0 :
      e.key === 'End' ? n - 1 : null;
    if (next === null) return;
    e.preventDefault();
    tabs.current[next]?.focus();
    setActive(next);
  };

  return (
    <section className="section tone-dark" id="proceso" aria-labelledby="proceso-title">
      <div className="container">
        <SectionEyebrow label="Cómo trabajamos" />
        <div className="proc-head reveal">
          <h2 id="proceso-title" className="h2">De tu idea a tu <span className="acc">web publicada.</span></h2>
          <p className="sub">No necesitás saber de tecnología para empezar.</p>
        </div>

        <div className="steps reveal" role="tablist" aria-label="Pasos del proceso">
          {STEPS.map((s, i) => (
            <button
              key={s.title}
              ref={(el) => { tabs.current[i] = el; }}
              className="step"
              role="tab"
              type="button"
              id={`step-${i}`}
              aria-controls="step-panel"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="step-t">{s.title}</span>
            </button>
          ))}
        </div>
        <div className="step-panel reveal" id="step-panel" role="tabpanel" aria-labelledby={`step-${active}`}>
          <div className="step-col"><p className="step-who">Vos</p><p>{STEPS[active].you}</p></div>
          <div className="step-col"><p className="step-who">Nosotros</p><p>{STEPS[active].we}</p></div>
        </div>
      </div>
    </section>
  );
}
