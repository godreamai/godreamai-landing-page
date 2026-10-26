import { PROBLEMS } from '@/lib/content';

export function Problem() {
  return (
    <section className="section tone-light gd-light bg-dots" id="problema" aria-labelledby="problema-title">
      <div className="container">
        <div className="sec-head reveal">
          <h2 id="problema-title" className="h2">No alcanza con que tu negocio esté online.</h2>
        </div>

        <ol className="problems">
          {PROBLEMS.map((p, i) => (
            <li className="problem reveal" key={p.title}>
              <span className="problem-num" aria-hidden="true">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="fix"><span className="fix-ic" aria-hidden="true" /><span><strong>Con tu web,</strong> {p.fix}</span></p>
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
