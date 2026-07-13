# Roadmap

Roadmap operativo — el detalle de alcance por sprint vive en `CLAUDE.md` y el estado vivo del
progreso en `docs/IMPLEMENTATION_PLAN.md`. Este documento es la vista de alto nivel para
comunicar dirección, no el tracker de tareas.

## MVP (Sprints 0–6)

- **Sprint 0** — Bootstrap técnico y documental. *En curso.*
- **Sprint 1** — Sistema de diseño y páginas públicas con datos mock: landing, catálogo de
  plantas, ficha de planta, páginas legales/informativas, SEO básico, primera pasada de
  accesibilidad.
- **Sprint 2** — Supabase real: esquema completo, RLS por rol, autenticación, panel de
  administración con CRUD editorial.
- **Sprint 3** — Modelo de evidencia y seguridad end-to-end: fuentes, afirmaciones, niveles de
  evidencia, advertencias de seguridad, checker automático de política de contenido.
- **Sprint 4** — Búsqueda de texto completo, cuentas de usuario (favoritos/colecciones), suite
  E2E ampliada, afinado de performance (Core Web Vitals).
- **Sprint 5** — CI/CD de producción: branch protection, integración Vercel/Supabase
  productiva, despliegue real, smoke tests post-deploy. **Requiere acción humana** (cuentas,
  secretos, dominio).
- **Sprint 6** — Contenido inicial: ~10 fichas de plantas con afirmaciones y fuentes revisadas
  editorialmente, publicadas siguiendo el flujo completo de `docs/EDITORIAL_WORKFLOW.md`.

## Post-MVP (opcional)

- **Sprint 7 — IA responsable (RAG con citas).** Solo después de tener contenido publicado y
  citable. Cualquier respuesta generada debe citar la fuente exacta del contenido ya revisado
  editorialmente; nunca genera afirmaciones de salud nuevas ni sin fuente. Incluye guardrails
  explícitos contra diagnóstico/prescripción (ver `docs/CONTENT_POLICY.md` regla 1).

## Ideas explícitamente fuera de alcance (por ahora)

- Aplicación móvil nativa.
- Comercio electrónico / venta de productos.
- Multilenguaje.
- Perfiles de salud personalizados o recomendaciones individualizadas (choca directamente con
  la regla de no-diagnóstico).

## Cómo se actualiza este documento

Al cierre de cada sprint, junto con la actualización de `docs/IMPLEMENTATION_PLAN.md`. Cambios
de alcance mayores (agregar/quitar un sprint completo) requieren decisión del propietario, no
se asumen unilateralmente.
