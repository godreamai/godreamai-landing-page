import Link from 'next/link';
import { Logo, Arrow } from '@/components/ui/primitives';

export const metadata = { title: 'Página no encontrada · Go Dream AI' };

export default function NotFound() {
  return (
    <main className="nf">
      <Link href="/" aria-label="Go Dream AI — inicio"><Logo height={30} /></Link>
      <div className="nf-body">
        <p className="eyebrow"><span className="dot" aria-hidden="true" />Error 404</p>
        <h1 className="h2">Esta página no existe.</h1>
        <p className="sub">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <Link className="btn btn-primary btn-lg" href="/">Volver al inicio <Arrow /></Link>
      </div>
    </main>
  );
}
