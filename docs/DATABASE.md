# Base de datos

## Estado actual (Sprint 0)

No existe esquema todavía. `supabase/migrations/` está vacío salvo por este documento como
referencia de diseño. El esquema completo (~38 tablas) se implementa en **Sprint 2**, derivado
de las especificaciones de `CLAUDE.md` Parte V.

## Principios

- **Migraciones SQL versionadas, nunca editadas tras merge a `main`.** Un cambio de esquema
  siempre es una migración nueva, incluso para corregir un error en una migración reciente.
- **RLS obligatorio en toda tabla alcanzable por la Data API** (`anon`/`authenticated` roles).
  Tablas de uso puramente interno/administrativo vía `service_role` pueden omitir políticas
  públicas, pero deben documentar por qué en un comentario SQL.
- **Tipos generados, no escritos a mano**: `pnpm db:types` ejecuta
  `supabase gen types typescript` contra el esquema real y sobrescribe
  `lib/supabase/database.types.ts`.
- **Nombres en `snake_case`, en inglés técnico** para tablas/columnas (consistente con
  convenciones SQL/Postgres), contenido editorial en español.

## Dominios de tablas (planeados, Sprint 2)

Agrupación funcional según `CLAUDE.md` Parte V — el detalle exacto de columnas se escribe junto
a cada migración, no se duplica aquí para evitar que este documento quede desincronizado del
esquema real:

| Dominio                  | Propósito                         | Ejemplos de tablas                            |
| ------------------------ | --------------------------------- | --------------------------------------------- |
| Identidad                | Usuarios, roles, perfiles         | `profiles`, `user_roles`                      |
| Botánico                 | Taxonomía y partes de planta      | `plants`, `plant_parts`, `plant_synonyms`     |
| Compuestos               | Fitoquímica                       | `compounds`, `plant_compounds`                |
| Afirmaciones/Evidencia   | Núcleo del modelo editorial       | `claims`, `evidence_items`, `evidence_levels` |
| Fuentes                  | Bibliografía citable              | `sources`, `source_authors`                   |
| Seguridad                | Interacciones, contraindicaciones | `safety_warnings`, `drug_interactions`        |
| Cuarentena de inhalación | ADR-004                           | `inhalation_records`                          |
| Contenido editorial      | Flujo de publicación              | `articles`, `content_status_history`          |
| Funciones de usuario     | Cuentas, favoritos                | `favorites`, `collections`                    |
| Búsqueda                 | Índices de texto completo         | vistas materializadas / columnas `tsvector`   |

## Regla de oro: `content_status`

Toda tabla de contenido editable pasa por la máquina de estados:

```
draft → in_review → changes_requested → approved → published → archived
```

Solo las filas en `published` son visibles para `anon`/público general vía RLS. Ningún estado
intermedio se filtra a la Data API pública bajo ninguna circunstancia, ni siquiera para
previsualización (las previsualizaciones de admin usan el cliente autenticado con rol
`editor`/`reviewer`, nunca relajan la política pública).

## `inhalation_records` — cuarentena editorial (ADR-004)

Regla no negociable: un registro de esta tabla **nunca** alcanza `published` sin, como mínimo:

1. Fuente(s) analítica(s) de temperatura/compuesto.
2. Evidencia toxicológica específica de la vía inhalada (no extrapolada de vía oral).
3. Revisión editorial explícita por un `reviewer`/`admin`, registrada en
   `content_status_history`.

Temperaturas de vaporización nunca se muestran en rutas públicas antes de cumplir lo anterior.
El checker de contenido (`pnpm check:content`, Sprint 3) debe fallar el build si detecta texto
de temperatura de inhalación fuera de este flujo.

## Migraciones — convención de nombres

`supabase/migrations/YYYYMMDDHHMMSS_descripcion_corta.sql`, generado por
`supabase migration new <descripcion>`. Cada migración de producción pasa por el guard de 3
estados descrito en `CLAUDE.md` para las tablas Silver equivalentes de este proyecto (aquí
aplica al esquema completo de Supabase, no a un datalake): `MISSING → CTAS`,
`SCHEMA_DRIFT → ALTER`, `CURRENT → no-op`.

## Próximo paso

Sprint 2: escribir la primera migración real con el esquema completo, sus índices, políticas
RLS por rol, y datos de referencia (evidence_levels, roles) vía seed idempotente.
