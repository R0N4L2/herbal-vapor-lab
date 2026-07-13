# Flujo editorial

## Máquina de estados de contenido

```
draft ──────────────► in_review ──────────────► changes_requested
  ▲                       │                            │
  │                       ▼                            │
  │                   approved                          │
  │                       │                             │
  │                       ▼                             │
  │                   published ──────────────► archived│
  │                                                      │
  └──────────────────────────────────────────────────────┘
      (changes_requested vuelve a draft para su autor)
```

Cada transición queda registrada en `content_status_history` con: quién, cuándo, estado previo,
estado nuevo, y comentario opcional (obligatorio en `changes_requested`).

## Roles en el flujo

- **contributor**: crea/edita `draft`. No puede autoaprobarse ni publicar.
- **editor**: mueve `draft → in_review`; puede editar contenido de terceros durante la revisión.
- **reviewer**: decide `in_review → approved` o `in_review → changes_requested` (con comentario
  obligatorio explicando qué falta).
- **admin**: única figura que ejecuta `approved → published`, y la única que puede
  `published → archived`.

Un mismo usuario no puede ser `reviewer` de su propio `draft` (regla de cuatro ojos) — se aplica
a nivel de política RLS/constraint, no solo de convención de equipo.

## Requisitos para pasar de `approved` a `published`

Ver `docs/EVIDENCE_MODEL.md` y `docs/CONTENT_POLICY.md` — todos los campos obligatorios de una
afirmación (fuente, nivel de evidencia, vía, limitaciones, fecha de revisión) deben existir
*antes* de esta transición; la transición se bloquea (constraint de base de datos + validación
de Server Action) si falta alguno.

## Caso especial: `inhalation_records`

Sigue la misma máquina de estados, pero `approved → published` tiene una precondición adicional
no aplicable a otros tipos de contenido: fuente analítica + evidencia toxicológica específica de
vía inhalada + revisión explícita (ver `docs/DATABASE.md`). Un `reviewer` no puede aprobar este
tipo de registro basándose únicamente en fuentes de vía oral extrapoladas.

## Auditoría

`content_status_history` es de solo-inserción (append-only) — ninguna fila se edita ni borra.
Es la fuente para reconstruir "qué decía la ficha X el día Y" y "quién aprobó qué".

## Revisión periódica de contenido publicado

Todo contenido `published` con afirmaciones de salud lleva una fecha de próxima revisión
sugerida (p. ej. 12-24 meses según velocidad de la literatura en ese tema). Contenido vencido
se marca visualmente para el equipo editorial (no para el público) como candidato a
re-revisión, sin despublicarse automáticamente por vencimiento.
