import { PRINCIPLES } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/primitives';

export function Approach() {
  return (
    <section className="section tone-light gd-light" id="enfoque" aria-labelledby="enfoque-title">
      <div className="container app-grid">
        <div>
          <SectionEyebrow label="Nuestro enfoque" />
          <h2 id="enfoque-title" className="h2 reveal">Antes de diseñar, entendemos <mark>tu negocio.</mark></h2>
          <p className="sub reveal">Una web funciona cuando está pensada para tu negocio y para tus clientes, no cuando copia una plantilla.</p>
        </div>
        <ol className="principles">
          {PRINCIPLES.map((p, i) => (
            <li className="reveal" key={p.title}>
              <span className="principle-n" aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
