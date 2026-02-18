# Lima Home Services

Landing web para captar leads de servicios de mantenimiento en Lima y derivar cotizaciones a WhatsApp.

## Requisitos

- Node.js 18+
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: inicia servidor local en modo desarrollo.
- `npm run build`: genera build de produccion.
- `npm run preview`: sirve el build localmente.
- `npm run test`: ejecuta pruebas con Vitest.
- `npm run lint`: ejecuta ESLint.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Estructura base

- `src/pages`: vistas principales (`/`, `/servicios/:slug`)
- `src/components`: componentes de UI y dominio
- `src/data/services.ts`: data estatica de servicios y testimonios
- `docs/context.md`: contexto funcional/arquitectonico (fuente de verdad)
- `docs/contract.md`: contrato de datos de servicios
