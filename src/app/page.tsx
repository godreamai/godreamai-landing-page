import { ContactProvider } from '@/components/ui/contact';
import { RevealObserver } from '@/components/ui/RevealObserver';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Examples } from '@/components/sections/Examples';
import { Solutions } from '@/components/sections/Solutions';
import { Process } from '@/components/sections/Process';
import { Approach } from '@/components/sections/Approach';
import { Team } from '@/components/sections/Team';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { FloatingWhatsApp } from '@/components/sections/FloatingWhatsApp';

export default function Home() {
  return (
    <ContactProvider>
      <a className="skip" href="#main">Saltar al contenido</a>
      <Header />
      {/* Qué hacemos → por qué importa → cómo se ve → qué tipo necesitás → cómo trabajamos → cómo pensamos → dudas → cómo empezar */}
      <main id="main">
        <Hero />
        <Problem />
        <Examples />
        <Solutions />
        <Process />
        <Approach />
        <Faq />
        <Team />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RevealObserver />
    </ContactProvider>
  );
}
