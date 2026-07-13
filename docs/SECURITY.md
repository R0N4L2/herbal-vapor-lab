# Seguridad — modelo de amenazas y controles

Complementa el `SECURITY.md` raíz (proceso de reporte). Este documento detalla los controles
técnicos.

## Superficies de ataque consideradas

1. **Escalación de privilegios vía RLS mal configurada.** Mitigación: toda política RLS se
   escribe explícitamente por rol (`anon`, `authenticated`, roles editoriales
   viewer/contributor/editor/reviewer/admin); no hay políticas `USING (true)` en tablas con
   datos no públicos. Cada política nueva se prueba con un test de integración que confirma
   tanto el acceso permitido como el denegado (test negativo obligatorio, no solo positivo).
2. **Filtración de contenido no publicado.** Mitigación: el filtro `content_status = 'published'`
   vive en la política RLS, no solo en el `WHERE` de la query de la aplicación — así una query
   mal escrita no puede exponer borradores.
3. **Exposición de `SUPABASE_SECRET_KEY`.** Nunca tiene prefijo `NEXT_PUBLIC_`, nunca se usa
   fuera de Server Components/Server Actions/Route Handlers/scripts de CI. Un grep de
   `SUPABASE_SECRET_KEY` en cualquier archivo bajo `app/**/*client*` o en el bundle de cliente
   es un hallazgo crítico.
4. **Inyección SQL en la construcción de queries dinámicas** (relevante porque el esquema usa
   SQL directo, no un ORM que escape automáticamente). Mitigación: toda query dinámica pasa por
   el cliente de Supabase (parametrizado) o por funciones RPC de Postgres con parámetros
   tipados — nunca concatenación de strings de usuario en SQL.
5. **Secretos en Pull Requests.** Ningún `.env*` real se commitea; CI usa variables de entorno
   de GitHub Environments/Secrets, nunca hardcoded. `git-secrets`/escaneo de GitHub (secret
   scanning) habilitado en el repositorio.
6. **Ejecución de código no confiable en CI.** Los workflows no usan `pull_request_target` para
   ejecutar código del PR con acceso a secretos; `GITHUB_TOKEN` con permisos mínimos
   (`contents: read` salvo excepción justificada).
7. **Cadena de suministro (supply chain).** Dependabot semanal + CodeQL semanal. Nuevas
   dependencias requieren justificación en el PR (por qué, alternativas consideradas).
8. **Abuso de formularios públicos** (reporte de contenido, registro). Rate limiting a nivel de
   Supabase Auth / validación server-side con Zod en cada Server Action, nunca solo
   client-side.

## Roles y autorización (resumen operativo)

| Rol | Puede leer | Puede escribir |
|---|---|---|
| `anon` (público) | Solo `published` | Nada |
| `viewer` (autenticado) | `published` + favoritos propios | Favoritos/colecciones propias |
| `contributor` | `published` + sus propios drafts | Crea/edita sus propios drafts |
| `editor` | Todo contenido en revisión | Transiciona `draft → in_review`, edita contenido |
| `reviewer` | Todo | Aprueba/rechaza (`approved`/`changes_requested`) |
| `admin` | Todo | Publica, gestiona usuarios y roles |

Ninguna transición de `content_status` salta pasos (p. ej. `draft → published` directo no
existe como operación permitida para ningún rol excepto quizá `admin` en casos documentados
explícitamente como excepción, nunca por defecto).

## Reporte y respuesta a incidentes

Ver proceso en `SECURITY.md` (raíz). Cualquier hallazgo de exposición real de secretos requiere
rotación inmediata del secreto afectado, no solo eliminación del commit.
