# Go Dream AI — Landing web

Landing comercial del servicio de diseño y desarrollo de páginas web de Go Dream AI.
Next.js 15 (App Router) + TypeScript, sin dependencias de UI. La página se prerenderiza como estática.

## Uso

```bash
npm install
cp .env.example .env.local   # completar las variables
npm run dev                   # http://localhost:3000
npm run build && npm start    # producción
```

`npm run dev` compila en `.next-dev` y `npm run build` en `.next`, así un build no rompe el servidor de desarrollo. Ambos scripts borran su carpeta antes de arrancar (evita errores de OneDrive con archivos sincronizados).

## Variables de entorno

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp, formato internacional sin `+`. Por defecto, el de godreamai.com (`5493364294964`). |
| `NEXT_PUBLIC_SITE_URL` | URL pública (Open Graph, canonical, sitemap, robots). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email de contacto (cierre y footer). Por defecto `go@godreamai.com`. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram (footer). Por defecto `@godreamai.ar`. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (`G-XXXXXXX`). Registra el evento `whatsapp_click`. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel. Registra el evento `Contact` al abrir WhatsApp. |

Todas son opcionales y se leen en build. **`NEXT_PUBLIC_SITE_URL` es obligatoria antes de publicar**: sin ella, la imagen al compartir el link apunta a localhost: después de cambiarlas hay que volver a compilar.

## Contenido que se activa al completarlo

En `src/lib/content.ts`:

- `HERO_NOTE`: línea corta debajo de los botones del hero (ej. "Te respondemos por WhatsApp"). Vacía = no se muestra.
- `TEAM`: personas del equipo (nombre, rol, bio y foto en `src/assets/team/`). Vacío = la sección "Quiénes somos" no se muestra.

## Estructura

```
src/
  app/            layout (metadata, fuentes, analytics), page, not-found (404),
                  opengraph-image (vista previa al compartir), robots, sitemap, icon
  components/
    sections/     una sección por archivo: Hero → Problem → Examples → Solutions →
                  Process → Team → Faq → FinalCta (+ Header, Footer, botón flotante)
    demos/        demos conceptuales con marcas ficticias (brío, Trazo, Molienda, Alma Salud);
                  portada para previews y página completa para la vista ampliada
    ui/           primitivas (Logo, Scaled, ScrollScaled, BrowserFrame, PhoneFrame, SectionEyebrow),
                  contexto de contacto/WhatsApp, Analytics y RevealObserver
  lib/
    content.ts    todo el copy de la página
    whatsapp.ts   número, mensajes por tipo de web y armado del enlace
    site.ts       email, Instagram e IDs de medición (desde variables de entorno)
    analytics.ts  eventos de conversión (GA4, Meta Pixel, dataLayer)
  styles/
    site.css      tokens del design system + estilos de la landing
    demos.css     estilos propios de cada demo ficticia
  assets/         logo oficial gdai (blanco / negro) y capturas de proyectos reales (projects/)
```

## Pendientes (no inventar)

Dominio · confirmar que el WhatsApp de godreamai.com atiende consultas de webs · alcance exacto de los 4 servicios ·
precios / modelo de cotización · plazos · hosting, dominio y mantenimiento ·
medios de pago y envío para tiendas · portfolio real autorizado · logo SVG e isotipo ·
equipo (fotos y nombres) · email de contacto · herramienta de medición · política de privacidad si se activa la medición.

Las demos son marcas ficticias y siempre llevan el rótulo "Demo conceptual".
