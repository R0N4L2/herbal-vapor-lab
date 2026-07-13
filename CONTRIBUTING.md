# Contribuir a Herbal Evidence Lab

Gracias por tu interés en contribuir. Este proyecto trata contenido de salud, así que las
contribuciones de código y de contenido siguen reglas distintas.

## Requisitos previos

- Node.js ≥ 20.9
- pnpm (`corepack enable` o `npm install -g pnpm`)
- Docker (para Supabase local)
- Git

## Flujo de trabajo

1. Crea una rama desde `main`: `feature/<descripcion>`, `fix/<descripcion>`,
   `docs/<descripcion>` o `chore/<descripcion>`.
2. Instala dependencias: `pnpm install`.
3. Levanta Supabase local: `pnpm dlx supabase start`.
4. Copia `.env.example` a `.env.local` y completa los valores locales.
5. Desarrolla y ejecuta `pnpm ci` antes de subir cambios.
6. Commits siguiendo [Conventional Commits](https://www.conventionalcommits.org/):
   `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`, `ci:`, `security:`.
7. Abre un Pull Request usando la plantilla. Espera a que CI esté verde.

## Contribuciones de contenido editorial

Toda afirmación de salud publicada requiere: fuente aceptable (ver `docs/CONTENT_POLICY.md`),
tipo y nivel de evidencia, vía de administración, limitaciones y fecha de revisión. Los
borradores pasan por `draft → in_review → approved → published`. Ver
`docs/EDITORIAL_WORKFLOW.md`.

No se aceptan contribuciones que:

- prometan cura, tratamiento o diagnóstico;
- den dosis, mezclas o temperaturas de uso inhalado;
- se respalden únicamente en blogs comerciales, foros o tiendas.

## Código

- TypeScript estricto, sin `any` sin justificar.
- Componentes de servidor por defecto.
- Validación con Zod en cualquier entrada externa.
- Sin abstracciones prematuras ni duplicación de lógica de autorización.

## Reporte de vulnerabilidades

Ver [`SECURITY.md`](./SECURITY.md). No abras un issue público para vulnerabilidades de
seguridad.
