# PROJECT_CONTEXT (Resumen operacional)

## Fuente de verdad
- Documento principal: `docs/context.md`
- Contrato de datos: `docs/contract.md`

## Stack
- React + TypeScript + Vite
- Tailwind CSS + componentes UI (shadcn style)
- React Router
- TanStack Query

## Rutas y flujo
- `/` -> listado de servicios.
- `/servicios/:slug` -> detalle del servicio.
- En detalle, `Solicitar cotizacion` abre WhatsApp con mensaje precargado por servicio.
- Existe boton flotante global de WhatsApp.

## Integraciones
- WhatsApp (`wa.me`) al numero operativo.
- Sin integraciones con plataformas de scaffolding externas.

## Variables de entorno
- No hay variables de entorno requeridas en MVP.

## Arquitectura
- SPA cliente con entrada en `src/main.tsx`.
- Ruteo en `src/App.tsx`.
- Data de servicios centralizada en `src/data/services.ts`.

## Seguridad base
- No exponer secretos en frontend.

## Notas operativas
- Favicon servido desde `public/favicon.svg`.
