# Contexto del proyecto: Lima Home Services

## Objetivo
Landing SEO-first para captar leads de servicios de mantenimiento en Lima y derivar conversiones a WhatsApp.

## Alcance MVP
- Home `/` con grilla de servicios.
- Ruta de detalle por servicio: `/servicios/:slug`.
- CTA principal por servicio: boton `Solicitar cotizacion` con mensaje precargado a WhatsApp.
- Boton flotante global de WhatsApp.
- Contenido estatico local (sin backend en esta fase).

## Usuarios
- Visitante sin autenticacion.
- Admin (fase futura) para gestion de contenidos.

## Stack real
- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query

## Rutas
- `/`: listado de servicios
- `/servicios/:slug`: detalle del servicio
- `*`: pagina 404

## Flujos principales
- Home -> click en tarjeta -> detalle del servicio.
- Detalle -> click en `Solicitar cotizacion` -> apertura de WhatsApp con mensaje:
  - "Me interesa el servicio de {SERVICIO} para el distrito de [DISTRITO], estoy listo para empezar."
- Boton flotante -> apertura de WhatsApp sin mensaje predefinido.

## Integraciones externas
- WhatsApp via `https://wa.me/51996997815`.
- No hay integraciones con plataformas externas de generacion de codigo.
- Metadatos Open Graph y Twitter para previews al compartir enlaces.

## Variables de entorno
- No hay variables de entorno requeridas en MVP.

## Arquitectura
- SPA cliente con punto de entrada en `src/main.tsx`.
- Ruteo en `src/App.tsx`.
- Data de servicios en `src/data/services.ts`.
- Favicon de marca servido desde `public/favicon.svg` y `public/favicon.ico`.
- Imagen social de preview servida desde `public/og-image.png`.

## Seguridad base
- No exponer secretos en frontend.
- Validaciones de entrada se evaluaran en fase backend.

## Convenciones
- Slugs activos: gasfiteria, electricidad, pintura, drywall, cerrajeria, carpinteria.
- Zonas visibles: Chorrillos y Surco.
