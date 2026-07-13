# Modelo de evidencia

## Por qué no un score único

Un solo número de "efectividad" o "beneficio" oculta más de lo que informa: mezcla evidencia
tradicional, preclínica y clínica; ignora la vía de administración; y no distingue "no hay
evidencia" de "hay evidencia de que no funciona". El modelo de Herbal Evidence Lab (ADR-003)
representa explícitamente cada eslabón: **afirmación → evidencia → fuente**, con nivel de
certeza asociado a cada afirmación individual, no a la planta en su conjunto.

## Jerarquía de evidencia (de mayor a menor certeza)

1. Revisiones sistemáticas / meta-análisis de ensayos clínicos aleatorizados (ECA).
2. ECA individuales.
3. Estudios observacionales en humanos (cohortes, casos-control).
4. Estudios preclínicos (in vitro, animales).
5. Uso tradicional documentado (farmacopeas, etnobotánica) — se presenta como tal, nunca como
   evidencia de eficacia clínica.

Cada `claim` (afirmación) se vincula a uno o más `evidence_items`, cada uno con su propio nivel
de esta jerarquía — una planta puede tener una afirmación con evidencia clínica sólida y otra
con solo uso tradicional, y ambas se muestran con su nivel real, no se promedian.

## Componentes de una afirmación publicable

Toda afirmación de salud que llega a `published` debe tener, como mínimo:

- **Afirmación** en lenguaje llano, acotada (no "ayuda con la ansiedad" sino, p. ej., "un ECA en
  N=60 adultos mostró reducción de puntaje STAI vs. placebo tras 8 semanas").
- **Preparación** (infusión, extracto estandarizado, tintura, etc.) — la evidencia de una forma
  de preparación no se generaliza a otras.
- **Vía de administración** (oral, tópica; **inhalada nunca por defecto**, ver cuarentena).
- **Fuente(s)** citable(s) con DOI/PMID cuando exista.
- **Nivel de evidencia** según la jerarquía anterior.
- **Limitaciones** explícitas (tamaño muestral, conflictos de interés, replicación pendiente).
- **Fecha de revisión editorial.**

Si falta cualquiera de estos campos, la afirmación no puede transicionar a `published` (se
aplica tanto en RLS/constraints de base de datos como en el checker de contenido).

## Fuentes aceptables

- Revistas indexadas (PubMed/MEDLINE, Cochrane, Scopus) con revisión por pares.
- Farmacopeas oficiales y monografías reconocidas (p. ej. WHO monographs, ESCOP, Comisión E).
- Agencias regulatorias (EMA, FDA, EFSA) para seguridad y contraindicaciones.

**No aceptables como fuente única de una afirmación de eficacia**: blogs, sitios de venta de
productos, foros, contenido generado por IA sin verificación humana, estudios retractados.

## Certeza vs. popularidad

El modelo nunca ordena plantas o afirmaciones por popularidad, tráfico o "me gusta" cuando se
trata de presentar evidencia. Popularidad puede influir en qué se escribe primero (priorización
editorial), nunca en cómo se representa la certeza de una afirmación ya publicada.

## Relación con `SAFETY` y contraindicaciones

Las advertencias de seguridad (`safety_warnings`, interacciones farmacológicas) son un dominio
separado de las afirmaciones de beneficio y se muestran con la misma o mayor prominencia visual
(tokens de color `risk.*`, nunca solo `evidence.*`). Ninguna ficha de planta puede publicarse
sin al menos una revisión de seguridad, aunque sea "no se han reportado interacciones
relevantes a la fecha de esta revisión".

## Relación con la cuarentena de inhalación/vaporización

Ver `docs/DATABASE.md#inhalation_records--cuarentena-editorial-adr-004` y `docs/CONTENT_POLICY.md`.
El material previo de este proyecto sobre temperaturas de vaporización se trata como **no
verificado** hasta pasar por este mismo modelo de evidencia con fuente analítica y toxicológica
específica de vía inhalada — nunca se publica por herencia de investigación previa sin ese
proceso.
