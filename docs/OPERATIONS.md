# Operaciones

## Monitoreo (planeado, Sprint 5)

- **Vercel Analytics / Speed Insights**: Core Web Vitals por página pública.
- **Supabase Dashboard**: uso de base de datos, conexiones activas, logs de Auth.
- **GitHub Actions**: estado de CI en cada PR y en `main`; fallo de CI en `main` es prioridad
  inmediata de investigación.

## Alertas

- Fallo de CI en `main` (rama de producción) — requiere atención antes de cualquier otro
  trabajo de feature.
- Fallo de `db-deploy.yml` tras aprobación del Environment `production` — puede indicar
  migración incompatible con el estado real de producción; no reintentar automáticamente.
- CodeQL con hallazgo de severidad alta/crítica — bloquea merge hasta triage.

## Runbook — CI roto en `main`

1. Identificar el commit que rompió CI (`git log` / historial de Actions).
2. Reproducir localmente: `pnpm ci` (mismo pipeline que CI).
3. Si es un flake conocido (p. ej. timeout de E2E), reintentar el job antes de investigar más.
4. Si es real, decidir entre fix-forward (nuevo commit) o revert del commit problemático —
   preferir fix-forward salvo que el fix no sea evidente en minutos.

## Runbook — migración fallida contra producción

1. **No reintentar automáticamente.** Confirmar el estado real de la base de datos de
   producción (`supabase db diff` / `supabase migration list --linked`) antes de cualquier
   acción.
2. Si la migración quedó parcialmente aplicada, escribir una migración correctiva nueva — nunca
   editar la migración fallida ya commiteada.
3. Notificar al propietario antes de reintentar contra producción.

## Runbook — secreto expuesto

1. Rotar el secreto afectado inmediatamente en el proveedor correspondiente (Supabase, Vercel,
   GitHub) — la rotación es lo primero, no lo último.
2. Eliminar el secreto del historial de git si quedó commiteado (requiere coordinación con el
   propietario; reescribir historia es una operación destructiva que se confirma antes de
   ejecutar).
3. Revisar logs de acceso del proveedor por uso indebido durante la ventana de exposición.

## Backups

Supabase gestiona backups automáticos de PostgreSQL en el plan del proyecto (frecuencia según
plan contratado — a confirmar por el propietario al crear el proyecto de producción, Sprint 5).
No se depende de un mecanismo de backup adicional en el MVP.

## Mantenimiento recurrente

- Revisar y fusionar PRs de Dependabot semanalmente (agrupados por minor/patch).
- Revisar hallazgos de CodeQL en cada ejecución semanal programada.
- Revisar `docs/ROADMAP.md` al cierre de cada sprint y actualizar su estado.
