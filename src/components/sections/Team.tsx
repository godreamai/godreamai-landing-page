import Image from 'next/image';
import { TEAM } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/primitives';

/** "Quiénes somos": se muestra solo cuando TEAM (src/lib/content.ts) tiene datos reales. */
export function Team() {
  if (TEAM.length === 0) return null;
  return (
    <section className="section tone-white gd-light" id="equipo" aria-labelledby="equipo-title">
      <div className="container">
        <SectionEyebrow label="Quiénes somos" />
        <h2 id="equipo-title" className="h2 reveal">Las personas detrás de <mark>tu web.</mark></h2>
        <ul className="team">
          {TEAM.map((m) => (
            <li className="reveal" key={m.name}>
              {m.photo && <Image src={m.photo} alt={`Foto de ${m.name}`} width={320} height={320} />}
              <h3>{m.name}</h3>
              <p className="team-role">{m.role}</p>
              {m.bio && <p>{m.bio}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
