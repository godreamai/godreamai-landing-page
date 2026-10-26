import { PROBLEMS } from '@/lib/content';
import { Arrow, SectionEyebrow } from '@/components/ui/primitives';

export function Problem() {
  return (
    <section className="section tone-light gd-light" id="problema" aria-labelledby="problema-title">
      <div className="container">
        <SectionEyebrow label="El problema" />
        <h2 id="problema-title" className="h2 reveal">No alcanza con que tu negocio esté <mark>online.</mark></h2>

        <ol className="problems">
          {PROBLEMS.map((p, i) => (
            <li className="problem reveal" key={p.title}>
              <span className="problem-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="fix"><span>Con una web</span> <Arrow /> {p.fix}</p>
            </li>
          ))}
        </ol>

        <p className="problem-close reveal">
          Tu web no reemplaza Instagram ni WhatsApp: los <strong>complementa</strong>. Es el lugar al que podés mandar a cualquiera para que entienda qué hacés.
        </p>
      </div>
    </section>
  );
}
