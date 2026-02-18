# PROJECT_CONTEXT (Resumen Operacional)

## Fuente de verdad
- Documento primario: `docs/context.md`
- Contrato de datos: `docs/contract.md`

## Flujo principal vigente
- Home `/` lista servicios y dirige a `/servicios/{slug}`.
- En cada detalle de servicio, el boton `Solicitar cotizacion` abre WhatsApp a `+51996997815` con mensaje precargado:
  - "Me interesa el servicio de {SERVICIO} para el distrito de [DISTRITO], estoy listo para empezar."
- Boton flotante global de WhatsApp disponible en toda la app.

## Stack actual
- React + TypeScript + Vite
- TailwindCSS + componentes UI (shadcn style)
- React Router

## Convenciones
- Slugs de servicios: gasfiteria, electricidad, pintura, drywall, cerrajeria, carpinteria
- Zonas visibles en UI: Chorrillos y Surco (expandible)
