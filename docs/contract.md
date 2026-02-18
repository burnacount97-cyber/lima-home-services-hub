# Contracto de datos (v1) - Mantenimiento Landing

## Principios
- Este contrato es la fuente de verdad mecánica.
- Cualquier breaking change requiere versionado explícito (v2).
- Nuevos campos deben ser opcionales para no romper clientes.

## Tipos

### Service (Servicio)
Representa una categoría de servicio mostrada en Home y detalle.

Campos:
- id: string (requerido) - identificador estable interno
- slug: string (requerido) - usado en URL: /servicios/{slug}
- name: string (requerido) - nombre visible (ej: "Gasfitería")
- heroImage: ImageRef (requerido) - imagen de fondo para tarjeta y header
- summary: string (requerido) - resumen corto (1-2 párrafos)
- included: string[] (requerido) - lista de trabajos incluidos (bullets)
- zones: string[] (requerido) - ej ["Chorrillos", "Surco"]
- seo: SeoMeta (requerido)
- testimonials: Testimonial[] (requerido)
- faq?: FaqItem[] (opcional)
- createdAt?: string ISO-8601 (opcional, backend)
- updatedAt?: string ISO-8601 (opcional, backend)

### Testimonial
Testimonio asociado a un servicio.

Campos:
- id: string (requerido)
- serviceSlug: string (requerido)
- name: string (requerido) - nombre del cliente (MVP puede ser ficticio)
- district?: string (opcional) - ej "Surco"
- quote: string (requerido)
- photo: ImageRef (requerido) - foto del cliente (MVP: placeholder)
- rating?: number (opcional) - 1..5
- date?: string ISO-8601 (opcional)

### FaqItem (opcional)
- q: string (requerido)
- a: string (requerido)

### SeoMeta
- title: string (requerido)
- description: string (requerido)
- canonicalPath?: string (opcional) - ej "/servicios/gasfiteria"
- ogImage?: ImageRef (opcional)

### ImageRef
- url: string (requerido)
- alt: string (requerido)

## Config global (v1)
- whatsapp:
  - phoneE164: string (requerido) = "+51996997815"
  - waMeUrl: string (requerido) = "https://wa.me/51996997815"
  - defaultMessage?: string (opcional)
