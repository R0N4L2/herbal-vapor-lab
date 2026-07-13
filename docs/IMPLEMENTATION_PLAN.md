# Plan de implementación — Herbal Evidence Lab

Documento vivo. Se actualiza al cierre de cada sprint. Fuente de verdad de alcance:
[`CLAUDE.md`](../CLAUDE.md).

## Inventario inicial (auditoría, 2026-07-13)

- Repositorio GitHub `R0N4L2/herbal-vapor-lab`: existía vacío (creado el mismo día, sin
  commits, sin ramas, `size: 0`). No había trabajo previo que preservar.
- Directorio local `E:\Agentes\PAQUETE_CLAUDE_CODE_HERBAL_EVIDENCE_LAB\`: solo contenía
  `PROMPTS/` (los tres documentos de instrucción). No era un repositorio git.
- Entorno local:
  - `git` disponible (`C:\Program Files\Git\cmd\git.exe`).
  - `node` v24.18.0 disponible.
  - `gh` (GitHub CLI) **no instalado** en esta máquina, ni en Git Bash ni en PowerShell.
  - `pnpm` no instalado globalmente; `corepack enable`/`prepare` falla con `EPERM` porque el
    Node de esta máquina está instalado en `C:\Program Files\nodejs` y requiere privilegios de
    administrador para crear shims. `npx pnpm@latest` también fue inestable en esta máquina.
  - Acceso de red: confirmado hacia GitHub API y `registry.npmjs.org` desde PowerShell.
  - `GITHUB_PERSONAL_ACCESS_TOKEN` presente como variable de entorno de usuario (documentado en
    memoria de OpenClaw), y hay un servidor MCP `github` conectado en esta sesión — se usó como
    vía alternativa a `gh` CLI para operaciones de GitHub cuando fue necesario.

## Decisiones tomadas en Sprint 0

1. **No se ejecutó `create-next-app` interactivo.** Se escribió a mano la estructura Next.js
   (App Router, TypeScript estricto, Tailwind, ESLint flat config, Prettier) para tener control
   total sobre el layout exigido en `CLAUDE.md` §27 y evitar la inestabilidad de red observada
   con instaladores interactivos en esta máquina.
2. **pnpm sigue siendo el gestor de paquetes del proyecto** (`packageManager` en
   `package.json`, workflows de CI lo usan vía `pnpm/action-setup`), pero **localmente en esta
   máquina requiere que el propietario habilite pnpm con privilegios adecuados** (ver
   "Pendiente de acción humana"). Esto no bloquea CI, que corre en runners limpios sin esta
   restricción.
3. **LICENSE** se dejó como "todos los derechos reservados" como placeholder explícito —
   pendiente de que el propietario decida si el proyecto será open source antes del
   lanzamiento.
4. El esquema completo de base de datos (~38 tablas descritas en `CLAUDE.md` Parte V) se
   implementa en **Sprint 2**, no en Sprint 0. Sprint 0 solo deja Supabase listo para
   inicializarse localmente (`supabase/config.toml`).
5. El contenido semilla (romero, orégano, manzanilla, etc.) es **Sprint 6**, condicionado a que
   el modelo editorial (Sprint 2-3) exista primero.

## Estado por sprint

| Sprint | Alcance | Estado |
|---|---|---|
| 0 — Auditoría y bootstrap | Repo, rama, Next.js, docs base, calidad, CI básico, primer commit | **En curso — este PR** |
| 1 — Diseño y páginas públicas | Sistema visual, layout, landing, catálogos con mocks, fichas, legal, a11y inicial, SEO | Pendiente |
| 2 — Supabase y modelo editorial | Migraciones, RLS, tipos, seed, auth, roles, admin, CRUD, auditoría | Pendiente |
| 3 — Evidencia y seguridad | Fuentes, afirmaciones, reviews, safety warnings, checker de contenido | Pendiente |
| 4 — Búsqueda, cuentas y refinamiento | Full-text search, filtros, favoritos, colecciones, E2E, performance | Pendiente |
| 5 — GitHub, CI/CD y producción | Branch protection, Vercel, Supabase producción, smoke tests, URL pública | Pendiente — **requiere acción humana** |
| 6 — Contenido revisado | Fichas iniciales verificadas y publicadas | Pendiente |
| 7 — IA responsable (opcional) | pgvector, RAG con citas, guardrails | Pospuesto, post-MVP |

### Sprint 0 — detalle de lo entregado en este PR

- [x] Auditoría de repositorio remoto y directorio local (arriba).
- [x] Rama `chore/sprint-0-bootstrap` creada desde `main`.
- [x] Next.js 15 + React 19 + TypeScript estricto + Tailwind + ESLint + Prettier.
- [x] Landing page pública mínima (hero, tres pilares, aviso "natural no es inocuo", CTA de
      exploración, aviso médico en pie de página) — copia tomada de `CLAUDE.md` §81.
- [x] `robots.ts`, `sitemap.ts`, `not-found.tsx`, `error.tsx`.
- [x] Cabeceras de seguridad básicas en `next.config.mjs` (CSP completa queda para Sprint 5).
- [x] `next-themes` integrado (modo claro/oscuro vía clase `.dark` + tokens semánticos de
      evidencia/riesgo en `globals.css`, para no depender solo de color).
- [x] Vitest + Testing Library (1 test unitario real) y Playwright (1 E2E real) configurados y
      ejecutables.
- [x] `.github/workflows/ci.yml` (lint, format, typecheck, test, check:content, build) y
      `codeql.yml`; `dependabot.yml`; plantillas de PR e issues.
- [x] `.env.example` completo, sin valores reales; `.gitignore` excluye `.env*`.
- [x] Documentación obligatoria completa (`README.md`, `AGENTS.md`, `CONTRIBUTING.md`,
      `CHANGELOG.md`, `SECURITY.md`, `LICENSE`, y los 10 documentos de `docs/`).
- [x] `supabase/config.toml` inicial (sin esquema todavía — Sprint 2).
- [ ] Build ejecutado y verificado localmente — **bloqueado en esta máquina** (ver riesgo
      abajo: interceptación TLS de Kaspersky sobre Node.js). El código fue escrito para
      compilar (estructura, imports y tipos revisados manualmente), pero no se ha podido
      ejecutar `npm install`/`next build` real en esta sesión. **CI lo verificará en el primer
      push/PR**, en un runner sin este problema.

## Riesgos conocidos

- **`npm install` no pudo completarse en esta máquina — causa raíz identificada: Kaspersky
  intercepta las conexiones TLS de procesos Node.js y las resetea/cuelga silenciosamente**
  (`ECONNRESET` o cuelgue con CPU casi nula y `node_modules` nunca creado), mientras que
  herramientas .NET/navegador (PowerShell `Invoke-WebRequest`, por ejemplo) sí acceden a la red
  sin problema. Se reprodujo tanto desde Bash como desde una sesión nueva de PowerShell,
  descartando "Bash sin red" como causa en este caso — es un problema por proceso (node.exe),
  no por shell. Es un problema de entorno ya documentado (ver memoria de sesión
  `project_kaspersky_node_econnreset.md`), no un defecto del proyecto. **Ver "Pendiente de
  acción humana" para el fix.** Esto no bloquea Sprint 0: el build/lint/test se verificará en
  CI al abrir el PR, en un runner de GitHub Actions sin Kaspersky.
- **Sin `gh` CLI**: los pasos futuros que el `CLAUDE.md` describe con `gh` (branch protection,
  milestones, issues) se harán vía la API/MCP de GitHub o vía la interfaz web; se documentará
  cada vez que se use una vía alternativa.
- **Licencia sin decidir**: no bloquea Sprint 0-4, pero debe resolverse antes de Sprint 5
  (publicación real).

## Pendiente de acción humana (no se puede resolver de forma autónoma)

1. **Kaspersky bloquea `npm install`/`npx` en esta máquina** (interceptación de conexiones
   cifradas de Node.js, ver riesgo arriba). Fix: en la consola de Kaspersky, agregar
   `node.exe`, `npm.cmd` y `npx.cmd` (bajo `C:\Program Files\nodejs\`) a las exclusiones del
   escaneo de conexiones cifradas (Configuración → Protección → Analizar conexiones cifradas),
   o desactivar ese escaneo para esos procesos. Es un cambio de postura de seguridad — debe
   hacerlo el propietario desde la GUI, no se automatiza. Sin este fix, ninguna instalación
   local de dependencias npm/pnpm funcionará en esta máquina.
2. **pnpm local**: adicionalmente, `corepack enable`/`prepare pnpm --activate` falla por
   permisos (`EPERM` en `C:\Program Files\nodejs`). Opciones para el propietario:
   - Ejecutar una terminal como administrador una vez: `corepack enable` y
     `corepack prepare pnpm@9.15.0 --activate`; o
   - Instalar Node mediante `nvm-windows` (instalación por usuario, sin permisos de admin); o
   - Usar `npm install -g pnpm` si el PATH de npm global es escribible por el usuario.
   Comando esperado: cualquiera de los anteriores, una sola vez.
4. **GitHub CLI (`gh`)**: no instalado. No es obligatorio (se usa la API/MCP de GitHub como
   alternativa), pero si el propietario lo prefiere: `winget install GitHub.cli` (winget está
   disponible en esta máquina).
5. **Vercel**: crear/enlazar el proyecto. Comando: `npx vercel login` seguido de
   `npx vercel link`, eligiendo la cuenta/organización correcta. Requiere login OAuth
   interactivo — no se puede automatizar.
6. **Supabase**: crear el proyecto de producción en el dashboard de Supabase, guardar el
   `project ref`, generar `publishable key` y `secret key`. Requiere decisión de organización y
   creación de un recurso — checkpoint humano explícito por `CLAUDE.md` §76.
7. **GitHub Environment `production`** con los secrets `SUPABASE_ACCESS_TOKEN`,
   `SUPABASE_PROJECT_REF`, `SUPABASE_DB_PASSWORD` (y `VERCEL_*` si se usa el fallback de CLI):
   se configuran en GitHub → Settings → Environments. No se introducen secretos por chat.
8. **Licencia final**: decidir si el proyecto será open source (y bajo qué licencia) o
   propietario, antes de Sprint 5.

## Próximo paso

Abrir el PR de Sprint 0 hacia `main` y dejar que CI (GitHub Actions, sin el bloqueo de Kaspersky
de esta máquina) verifique `install`/`lint`/`typecheck`/`test`/`build`. En paralelo, el
propietario aplica la exclusión de Kaspersky para `node.exe`/`npm.cmd`/`npx.cmd` para poder
volver a desarrollar localmente. Una vez CI esté verde, comenzar Sprint 1 (sistema visual
completo + páginas públicas con datos mock tipados).
