import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Instrument_Sans, Inter, JetBrains_Mono, Bricolage_Grotesque, IBM_Plex_Sans, Fraunces, Manrope } from 'next/font/google';
import { Analytics } from '@/components/ui/Analytics';
import { SITE_URL } from '@/lib/site';
import '@/styles/site.css';
import '@/styles/demos.css';

/* Marca */
const instrument = Instrument_Sans({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-instrument', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains', display: 'swap' });
/* Demos conceptuales (cada marca ficticia tiene su propia tipografía) */
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '800'], variable: '--font-bricolage', display: 'swap', preload: false });
const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-plex', display: 'swap', preload: false });
const fraunces = Fraunces({ subsets: ['latin'], weight: ['600'], variable: '--font-fraunces', display: 'swap', preload: false });
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-manrope', display: 'swap', preload: false });

const fontVars = [instrument, inter, jetbrains, bricolage, plex, fraunces, manrope].map((f) => f.variable).join(' ');



export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Diseño y desarrollo de páginas web para negocios · Go Dream AI',
  description:
    'Diseñamos y desarrollamos páginas web para negocios: landing pages, webs empresariales, tiendas online y desarrollos a medida. Contanos qué necesitás y lo vemos juntos.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Go Dream AI',
    title: 'Tu negocio merece una web que esté a la altura · Go Dream AI',
    description: 'Páginas web pensadas para mostrar lo mejor de tu negocio y facilitar que tus clientes te contacten.',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Activa el reveal solo si hay JS: sin JS, todo el contenido queda visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
