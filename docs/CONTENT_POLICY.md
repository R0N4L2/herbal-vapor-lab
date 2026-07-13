# Política de contenido

## Propósito del sitio

Informar y educar sobre plantas medicinales distinguiendo tradición, evidencia preclínica,
evidencia clínica e incertidumbre. **No es** un sitio de diagnóstico, prescripción ni promesas
de cura.

## Reglas no negociables

1. **Nunca se diagnostica, prescribe ni recomienda dosis de tratamiento a un usuario
   individual.** Cualquier funcionalidad conversacional (si existe, Sprint 7+) responde con
   información general y remite a un profesional de salud — nunca dice "toma X para tu Y".
2. **Toda afirmación de salud publicada requiere**: fuente aceptable, nivel de evidencia, vía de
   administración, limitaciones, fecha de revisión (ver `docs/EVIDENCE_MODEL.md`).
3. **El material de inhalación/vaporización preexistente en este proyecto se trata como no
   verificado.** No se publica ninguna temperatura, afirmación de "vía más segura" ni
   comparación de eficacia por inhalación sin pasar por la cuarentena editorial descrita en
   `docs/DATABASE.md` y `docs/EVIDENCE_MODEL.md`. Esto aplica incluso si el dato parece
   plausible o coincide con fuentes de terceros no verificadas por el equipo editorial.
4. **Aviso médico visible** en pie de página global y en cada ficha de planta/artículo de salud.
5. **Nivel de certeza siempre visible junto a la afirmación**, no solo en un tooltip o página
   aparte.
6. **No se ordena ni destaca contenido por métricas de engagement** (clics, tiempo en página)
   cuando eso pueda sesgar percepción de eficacia o seguridad.
7. **Toda fuente citada debe ser verificable** (DOI, PMID, URL estable de agencia regulatoria).
   No se citan resúmenes de terceros como si fueran la fuente primaria.
8. **Conflictos de interés y limitaciones se declaran**, no se ocultan por brevedad editorial.
9. **Cambios a afirmaciones publicadas quedan auditados** (`content_status_history`) — nunca se
   edita silenciosamente una afirmación de salud ya publicada sin dejar rastro de qué cambió y
   por qué.
10. **Ninguna afirmación de beneficio se publica sin su contraparte de seguridad** revisada (ver
    `docs/EVIDENCE_MODEL.md`).

## Checker automático de contenido (`pnpm check:content`)

Parte del pipeline de CI (`ci.yml`). En Sprint 0 es un placeholder; a partir de Sprint 3 debe
fallar el build si detecta, entre otras cosas:

- Afirmaciones de salud en el código fuente o contenido seed sin los campos obligatorios del
  modelo de evidencia.
- Menciones de temperatura de vaporización/inhalación fuera del flujo de cuarentena.
- Contenido con `content_status = published` sin fecha de revisión o sin fuente asociada.

## Rechazo editorial explícito

Se rechaza cualquier contribución de contenido (interna o externa vía PR) que:

- Prometa cura, "elimina", "reemplaza tu medicación" u otro lenguaje de promesa terapéutica.
- Compare plantas con fármacos de forma que sugiera equivalencia sin evidencia clínica directa.
- Recomiende dosis específicas a un lector individual en segunda persona ("toma 2g de...").
- Provenga de una fuente no verificable o de calidad insuficiente según la jerarquía de
  `docs/EVIDENCE_MODEL.md`.

## Voz editorial

Tercera persona, tono informativo, sin imperativos de tratamiento ("puede ayudar a..." nunca
"usa esto para..."). Incertidumbre se comunica explícitamente ("evidencia limitada",
"resultados mixtos"), nunca se rellena con lenguaje promocional para sonar más útil.
