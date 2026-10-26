import { STEPS } from '@/lib/content';

/* Línea de tiempo: círculos numerados unidos por una línea (horizontal en desktop, vertical en mobile). */
export function Process() {
  return (
    <section className="section tone-dark bg-grid" id="proceso" aria-labelledby="proceso-title">
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="proceso-title" className="h2">De tu idea a tu web publicada.</h2>
          <p className="sub">Cuatro pasos claros. No necesitás saber de tecnología: vos ponés el conocimiento de tu negocio, nosotros el resto.</p>
        </div>

        <ol className="tl">
          {STEPS.map((s, i) => (
            <li className="tl-step reveal" key={s.title} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="tl-n" aria-hidden="true">{i + 1}</span>
              <div className="tl-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <p className="tl-you"><strong>Tu parte:</strong> {s.you}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
