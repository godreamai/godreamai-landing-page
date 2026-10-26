import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

/* Imagen de vista previa al compartir el link (WhatsApp, Instagram, LinkedIn, etc.). Se genera en el build. */
export const alt = 'Go Dream AI — Tu negocio merece una web que esté a la altura.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'src/assets/logo-gdai-white.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0A0A0A', color: '#F5F5F5', padding: '72px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={116} height={60} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid #5E5E5E', paddingLeft: 24, fontSize: 24, color: '#B5B5B5', lineHeight: 1.3 }}>
            <span>diseño + desarrollo</span>
            <span>web para negocios</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 84, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.02 }}>
          <span>Tu negocio merece una web</span>
          <span style={{ display: 'flex' }}>
            que esté&nbsp;<span style={{ color: '#CCFF00' }}>a la altura.</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#B5B5B5' }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: '#CCFF00' }} />
          Landing pages · Webs empresariales · Tiendas online · Desarrollos a medida
        </div>
      </div>
    ),
    size,
  );
}
