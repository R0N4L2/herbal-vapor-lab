# Despliegue

## Entornos

| Entorno    | Rama         | Base de datos                                                      | URL                                       |
| ---------- | ------------ | ------------------------------------------------------------------ | ----------------------------------------- |
| Local      | cualquiera   | Supabase local (Docker)                                            | `localhost:3000`                          |
| Preview    | cualquier PR | Supabase de desarrollo (proyecto compartido o por-PR si se decide) | URL generada por Vercel por PR            |
| Producción | `main`       | Supabase producción                                                | dominio final (pendiente, ver Checkpoint) |

## Integración Vercel

Se usa la integración nativa GitHub → Vercel (no `vercel deploy` manual):

1. **Checkpoint humano**: el propietario conecta el repositorio `R0N4L2/herbal-vapor-lab` desde
   el dashboard de Vercel, eligiendo la cuenta/organización correcta.
2. Cada Pull Request genera automáticamente un **Preview Deployment** con su propia URL.
3. Cada push a `main` genera un **Production Deployment**.
4. Variables de entorno de build/runtime se configuran en Vercel → Project Settings →
   Environment Variables, separadas por entorno (Development/Preview/Production). Los valores
   reales nunca se introducen vía chat con el agente — los añade el propietario directamente en
   el dashboard.

## Integración Supabase

1. **Checkpoint humano**: creación del proyecto de producción en el dashboard de Supabase
   (organización, región, contraseña de base de datos).
2. Migraciones se aplican vía CI (`db-deploy.yml`, Sprint 5) usando `supabase db push` contra el
   proyecto de producción, autenticado con `SUPABASE_ACCESS_TOKEN` guardado en un GitHub
   Environment protegido llamado `production` (requiere aprobación manual de un reviewer antes
   de ejecutar contra producción).
3. Migraciones destructivas (`DROP`, `ALTER ... DROP COLUMN`, cambios de tipo con pérdida de
   datos) requieren aprobación explícita adicional del propietario antes de fusionarse — nunca
   se aplican automáticamente solo porque CI pasó.

## Secuencia de despliegue a producción

```
PR → CI verde (lint, typecheck, test, build, check:content) →
Review humano aprueba → Merge a main →
  ├─ Vercel: Production Deployment automático
  └─ GitHub Actions (db-deploy.yml): si hay migraciones nuevas,
     requiere aprobación del Environment `production` → supabase db push
```

## Rollback

- **Aplicación**: Vercel permite "Instant Rollback" a cualquier deployment anterior desde el
  dashboard — no requiere revertir el commit en git para restaurar servicio inmediatamente.
- **Base de datos**: las migraciones no se revierten automáticamente. Un rollback de esquema
  requiere una migración nueva explícita que deshaga el cambio (nunca `git revert` silencioso
  de una migración ya aplicada en producción, porque el historial de migraciones debe reflejar
  lo que realmente ocurrió).

## Checklist antes de habilitar producción real

Ver `PROMPTS/CHECKLIST_DESPLIEGUE_MANUAL.md` para el checklist completo dirigido al propietario
(cuentas, secretos, dominio, verificación final). No se marca ninguna casilla de este documento
como completa sin confirmación explícita del propietario.
