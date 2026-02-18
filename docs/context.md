# Contexto del proyecto: Web App de Mantenimiento (Lima)

## Objetivo
Landing SEO-first para captar leads de servicios de mantenimiento y derivar a WhatsApp.
Fase 2 probable: backend/CMS para administrar servicios, testimonios, galerÃ­as y leads.

## Alcance MVP (Fase 1)
- Home `/` con tarjetas grandes animadas por servicio (mobile-first).
- Rutas por servicio: `/servicios/{slug}` con resumen + testimonios + CTA WhatsApp.
- En cada detalle de servicio, el CTA "Solicitar cotizacion" abre WhatsApp con mensaje precargado: "Me interesa el servicio de {SERVICIO} para el distrito de [DISTRITO], estoy listo para empezar."
- BotÃ³n flotante global de WhatsApp a +51 996 997 815.
- Contenido inicial estÃ¡tico (mock) pero con contrato preparado para backend.
- Idioma: espaÃ±ol.
- Localidad: Lima (Chorrillos, Surco).
- SEO fuerte.

## Usuarios
- Visitante sin login (principal).
- Admin (Fase 2): gestiona contenido (servicios, testimonios, imÃ¡genes).

## Stack propuesto
Default recomendado:
- Next.js (App Router), TypeScript
- TailwindCSS
- Framer Motion (animaciones)
- Deploy: Vercel

Alternativa (contenido editable):
- Next.js + Sanity (headless CMS) + Vercel

## Arquitectura
- Frontend SSR/SSG para SEO.
- Datos en Fase 1: archivo estÃ¡tico (JSON/TS) siguiendo el contrato.
- Fase 2: backend/cms que entregue exactamente el contrato (mismos campos), con versionado si hay breaking changes.

## Seguridad base
- El frontend nunca maneja secretos.
- Validar y sanitizar inputs en backend (Fase 2).
- Prohibido ejecutar cÃ³digo arbitrario desde datos persistidos.

## SEO
- Metadata por ruta (title/description).
- Slugs estables por servicio.
- FAQ por servicio + JSON-LD.
- ImÃ¡genes optimizadas.

## AnalÃ­tica (opcional, sin bloqueo)
- Fase 1: simple (Plausible o GA4) para medir CTA WhatsApp y pÃ¡ginas por servicio.
- No almacenar datos sensibles.

## No-objetivos (por ahora)
- Login/registro
- Pagos
- Marketplace multi-proveedor
- Chat interno (WhatsApp es el canal)

## Convenciones
- Slugs: gasfiteria, electricidad, pintura, drywall, cerrajeria
- Zonas: Chorrillos, Surco (expandible)

