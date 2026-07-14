# Herbal Evidence Lab

Biblioteca pública en español sobre plantas medicinales, usos tradicionales, evidencia,
compuestos y seguridad. Ayuda a distinguir tradición, evidencia preclínica, evidencia clínica
e incertidumbre — sin diagnosticar, prescribir ni prometer curas.

## Estado

🚧 **Sprint 0 (bootstrap) en curso.** Ver [`docs/IMPLEMENTATION_PLAN.md`](./docs/IMPLEMENTATION_PLAN.md)
para el estado detallado por sprint. Aún no hay despliegue de producción.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript estricto
- [Tailwind CSS](https://tailwindcss.com/) + shadcn/ui
- [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage, Row Level Security)
- Zod, React Hook Form, TanStack Table/Query
- Vitest, React Testing Library, Playwright
- GitHub Actions, Vercel

## Requisitos

- Node.js ≥ 20.9
- pnpm (`corepack enable pnpm` o `npm install -g pnpm`)
- Docker Desktop (para Supabase local)
- Supabase CLI (`pnpm dlx supabase`)

## Instalación

```bash
pnpm install
cp .env.example .env.local
# completa .env.local con los valores de tu proyecto Supabase local o de desarrollo
```

## Variables de entorno

Ver [`.env.example`](./.env.example). Nunca commitees `.env.local` ni ningún valor real.
`SUPABASE_SECRET_KEY` es exclusivo del servidor/CI y nunca lleva prefijo `NEXT_PUBLIC_`.

## Supabase local

```bash
pnpm dlx supabase start
pnpm dlx supabase db reset
pnpm db:types   # genera lib/supabase/database.types.ts
```

## Desarrollo

```bash
pnpm dev
```

Abre http://localhost:3000.

## Tests

```bash
pnpm lint
pnpm typecheck
pnpm test              # unit (Vitest)
pnpm test:coverage
pnpm test:e2e          # Playwright
pnpm check:content      # reglas de política editorial
pnpm ci                 # pipeline completo, igual que en CI
```

## Despliegue

Integración nativa GitHub → Vercel: cada PR genera un Preview Deployment, cada push a `main`
genera Production Deployment. Migraciones de base de datos requieren un GitHub Environment
`production` protegido. Ver [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md).

## Política de contenido

Toda afirmación de salud publicada requiere fuente aceptable, tipo y nivel de evidencia, vía de
administración, limitaciones y fecha de revisión. El contenido sobre inhalación/vaporización
permanece en cuarentena editorial hasta contar con evidencia analítica, toxicológica y de vía
inhalada, más revisión editorial. Ver [`docs/CONTENT_POLICY.md`](./docs/CONTENT_POLICY.md) y
[`docs/EVIDENCE_MODEL.md`](./docs/EVIDENCE_MODEL.md).

## Contribución

Ver [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Licencia

Apache License 2.0. Ver [`LICENSE`](./LICENSE).

## Aviso médico

Este sitio tiene fines informativos y educativos. No sustituye el diagnóstico, consejo o
tratamiento de un profesional de salud cualificado. Ante una emergencia, contacta a los
servicios de emergencia locales.
