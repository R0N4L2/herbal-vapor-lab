# AGENTS.md

Resumen operativo de Herbal Evidence Lab para cualquier agente o herramienta de codificación
asistida. La fuente de verdad completa es [`CLAUDE.md`](./CLAUDE.md); este archivo es un resumen
compatible con herramientas que buscan `AGENTS.md`.

## Stack

Next.js (App Router) + TypeScript estricto + Tailwind CSS + shadcn/ui + Supabase
(PostgreSQL, Auth, Storage, RLS) + pnpm + Vitest + Playwright + GitHub Actions + Vercel.

## Scripts

```bash
pnpm dev            # servidor de desarrollo
pnpm build           # build de producción
pnpm lint            # ESLint
pnpm format          # Prettier (check)
pnpm typecheck       # tsc --noEmit
pnpm test            # Vitest
pnpm test:e2e        # Playwright
pnpm check:content   # reglas de política editorial
pnpm ci              # todo lo anterior, orden de CI
```

## Arquitectura

Monolito modular. Un único proyecto Next.js desplegado en Vercel; Supabase provee base de
datos, autenticación, storage y RLS. Sin microservicios en el MVP. Ver `docs/ARCHITECTURE.md`.

## Reglas médicas y editoriales (no negociables)

- Ninguna afirmación de salud se publica sin fuente aceptable, nivel de evidencia y fecha de
  revisión (ver `docs/CONTENT_POLICY.md` y `docs/EVIDENCE_MODEL.md`).
- El material de ideación original sobre temperaturas y efectos de vaporización es
  **no verificado**: no se publica como hecho bajo ninguna circunstancia sin evidencia
  analítica, toxicológica, de vía inhalada y revisión editorial (ver `CLAUDE.md` §5, §10, §36).
- No se prescribe, diagnostica ni dosifica. No se usan palabras como "cura", "sana", "trata".
- El módulo de inhalación permanece en cuarentena editorial (`inhalation_records`, ADR-004).

## Row Level Security

RLS activo en toda tabla expuesta por la Data API. Público lee solo filas `published`. El
`SUPABASE_SECRET_KEY` nunca se usa en el navegador ni lleva prefijo `NEXT_PUBLIC_`. Ver
`docs/DATABASE.md`.

## Testing

Unit (Vitest) + integración (Supabase local) + E2E (Playwright). Cobertura alta obligatoria en
evidencia, permisos, validación y reglas editoriales. Ver `CLAUDE.md` Parte IX.

## Git

Trunk-based: `main` es producción. Ramas `feature/`, `fix/`, `docs/`, `chore/`. Conventional
Commits. PRs obligatorios, sin force-push a `main`, sin `reset --hard` ni `clean -fd` sin
confirmación explícita.

## No secretos

Nunca commitear `.env*` (salvo `.env.example`), tokens, claves de servicio o credenciales de
base de datos. Enmascarar en logs.

## No recomendaciones

Este repositorio no genera consejo médico personalizado, dosis, mezclas ni temperaturas de uso.
Ante síntomas de usuario, remitir a atención profesional (`CLAUDE.md` §12).
