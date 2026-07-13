# Arquitectura

## Visión general

Monolito modular en Next.js (App Router), desplegado en Vercel, con Supabase como backend de
datos, autenticación y almacenamiento. No hay microservicios ni backend separado en el MVP —
la lógica de servidor vive en Server Components, Server Actions y Route Handlers dentro del
mismo proyecto Next.js.

```
┌─────────────────────────────────────────────────────────┐
│                     Vercel (Edge/Node)                    │
│  ┌───────────────────────────────────────────────────┐   │
│  │  Next.js App Router                                │   │
│  │  - Server Components (lectura pública, SEO)        │   │
│  │  - Client Components (interactividad puntual)      │   │
│  │  - Server Actions (mutaciones autenticadas)         │   │
│  │  - Route Handlers (webhooks, API interna mínima)    │   │
│  └───────────────────────────────────────────────────┘   │
└───────────────────────┬───────────────────────────────────┘
                         │ supabase-js / @supabase/ssr
                         ▼
┌─────────────────────────────────────────────────────────┐
│                        Supabase                           │
│  - PostgreSQL (esquema versionado por migraciones SQL)     │
│  - Auth (email/password + OAuth opcional)                 │
│  - Row Level Security (autorización a nivel de fila)       │
│  - Storage (imágenes de plantas, adjuntos editoriales)     │
└─────────────────────────────────────────────────────────┘
```

## Principios de diseño

1. **Server Components por defecto.** Un componente solo es `"use client"` si necesita estado,
   efectos o eventos del navegador. La mayoría del catálogo y las fichas son 100% servidor.
2. **Las migraciones SQL son la única fuente de verdad del esquema.** No hay ORM (Drizzle,
   Prisma). Los tipos de TypeScript se generan desde el esquema real vía
   `supabase gen types typescript`, nunca se escriben tipos de tabla a mano.
3. **RLS es la autorización real, no un extra.** Ninguna tabla expuesta por la Data API de
   Supabase carece de políticas RLS. La UI puede ocultar botones, pero la fila de base de datos
   es la que decide si la operación se permite.
4. **Separación evidencia / interfaz.** El modelo de datos representa afirmaciones, evidencia y
   fuentes como entidades propias (ver `EVIDENCE_MODEL.md`), no como texto libre en la ficha de
   la planta.
5. **Cuarentena editorial explícita para inhalación/vaporización** (ADR-004): estos registros
   viven en una tabla propia con su propio gate de publicación, nunca mezclados con contenido ya
   publicado.

## Estructura de carpetas

```
app/
  (public)/              rutas públicas: /, /plantas, /plantas/[slug], /guias, /aviso-medico...
  (auth)/                login/registro
  admin/                 panel editorial, protegido por rol
  api/                   route handlers puntuales (webhooks, health)
components/
  ui/                    shadcn/ui (primitivas)
  shared/                componentes de dominio reutilizables
  admin/                 componentes exclusivos del panel editorial
lib/
  supabase/              client.ts, server.ts, database.types.ts (generado)
  utils/
  validators/            esquemas Zod compartidos cliente/servidor
scripts/                 verify-env, check-content, migraciones auxiliares
supabase/
  migrations/            *.sql, orden cronológico, nunca editadas tras aplicarse
  config.toml
tests/
  unit/ integration/ e2e/
docs/
```

## Flujo de datos (lectura pública)

`Request → Server Component → lib/supabase/server.ts (cliente anon, RLS aplica) → PostgreSQL
(solo filas published) → HTML renderizado → cliente`.

## Flujo de datos (edición editorial)

`Admin UI (Client Component) → Server Action → cliente Supabase autenticado (RLS aplica según
rol) → PostgreSQL (transición de content_status) → revalidación de caché (revalidatePath/Tag)`.

## Decisiones de arquitectura (ADRs)

Ver `CLAUDE.md` Parte XVII para el texto completo de ADR-001 a ADR-007. Resumen:

- **ADR-001**: Next.js App Router sobre Pages Router — RSC, streaming, colocación de datos.
- **ADR-002**: Supabase sobre backend a medida — Auth + RLS + Postgres administrado reduce
  superficie operativa para un equipo pequeño.
- **ADR-003**: Modelo de evidencia estructurado (afirmación + fuente + nivel), no un score único
  de "beneficio" — evita simplificar en exceso información médica.
- **ADR-004**: Cuarentena editorial para inhalación/vaporización — el material previo no
  verificado nunca se trata como hecho publicable.
- **ADR-005**: SQL migrations como fuente de verdad, sin ORM — auditabilidad y control fino de
  RLS/índices.
- **ADR-006**: Vercel + integración nativa de Git — Preview Deployments por PR sin
  configuración manual.
- **ADR-007**: RAG (Sprint 7) es estrictamente posterior al MVP y condicionado a tener contenido
  ya revisado y citable; nunca genera afirmaciones sin fuente.
