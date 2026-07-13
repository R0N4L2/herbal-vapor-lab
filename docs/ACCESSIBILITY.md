# Accesibilidad

## Objetivo

WCAG 2.1 nivel AA como mínimo aceptable para toda página pública. Contenido de salud tiene una
barra más alta: la información crítica (advertencias de seguridad, nivel de certeza) no puede
depender exclusivamente de percepción de color ni de un solo sentido.

## Principios aplicados

1. **Color nunca es el único portador de significado.** Los niveles de evidencia (`evidence.*`)
   y de riesgo (`risk.*`) siempre van acompañados de texto o ícono (p. ej. "Evidencia clínica" +
   color verde, no solo un punto verde).
2. **Navegación completa por teclado.** Todo elemento interactivo (enlaces, botones, filtros de
   catálogo, formularios del panel editorial) es alcanzable y operable sin ratón. Existe un
   enlace "saltar al contenido" (`app/layout.tsx`) antes de la navegación principal.
3. **Foco visible.** `:focus-visible` con contorno de alto contraste definido en `globals.css`,
   nunca `outline: none` sin reemplazo equivalente.
4. **Contraste de texto** ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande, en modo claro y
   oscuro — verificado para los tokens semánticos `evidence.*`/`risk.*`, no solo los genéricos
   de UI.
5. **Reduced motion.** `prefers-reduced-motion: reduce` desactiva animaciones no esenciales
   (ya presente en `globals.css`).
6. **Formularios accesibles**: cada campo tiene `<label>` asociado, mensajes de error anunciados
   vía `aria-describedby`/`aria-live`, no solo color rojo en el borde.
7. **HTML semántico primero**: encabezados en orden jerárquico real (no se salta de `h1` a
   `h4` por estilo visual), `<nav>`, `<main>`, `<article>` usados con su significado real.
8. **Imágenes con `alt` significativo.** Imágenes puramente decorativas usan `alt=""`.

## Verificación

- Sprint 1: revisión manual de teclado + lector de pantalla (NVDA/VoiceOver) en landing y ficha
  de planta antes de dar el sprint por cerrado.
- Sprint 4: pruebas automatizadas de accesibilidad (`axe-core` vía Playwright) integradas al
  pipeline de E2E — un hallazgo de severidad "critical"/"serious" de axe bloquea el merge.
- No se depende únicamente de herramientas automáticas: un lector de pantalla real detecta
  problemas de orden de lectura y de foco que las herramientas automáticas no capturan.

## Alcance explícitamente fuera del MVP

Traducción a otros idiomas, modo de alto contraste dedicado más allá de los temas claro/oscuro,
soporte de lectura en voz alta integrado en el sitio (el usuario puede usar su lector de
pantalla del sistema).
