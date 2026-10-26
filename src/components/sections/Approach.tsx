import { PRINCIPLES } from '@/lib/content';

export function Approach() {
  return (
    <section className="section tone-light gd-light" id="enfoque" aria-labelledby="enfoque-title">
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="enfoque-title" className="h2">Antes de diseñar, entendemos tu negocio.</h2>
          <p className="sub">Una web funciona cuando está pensada para tu negocio y para tus clientes, no cuando copia una plantilla.</p>
        </div>
        <ol className="principles">
          {PRINCIPLES.map((p, i) => (
            <li className="reveal" key={p.title}>
              <span className="principle-n" aria-hidden="true">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
