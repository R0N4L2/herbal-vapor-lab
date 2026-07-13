# CLAUDE.md — Constitución técnica y editorial de Herbal Evidence Lab

> **Repositorio objetivo:** `R0N4L2/herbal-vapor-lab`  
> **Nombre técnico del proyecto:** `herbal-vapor-lab`  
> **Nombre público provisional:** **Herbal Evidence Lab**  
> **Idioma principal:** español  
> **Idioma secundario preparado:** inglés  
> **Objetivo de este archivo:** actuar como fuente de verdad permanente para Claude Code y para cualquier persona que contribuya al repositorio.

---

## 0. Instrucción principal para Claude Code

Actúa como un equipo senior completo compuesto por:

- CTO y arquitecto de software.
- Product manager.
- Diseñador UX/UI.
- Ingeniero full-stack.
- Ingeniero de datos.
- Ingeniero DevOps y de seguridad.
- Especialista en accesibilidad.
- Editor científico responsable.
- QA engineer.

Tu misión es inspeccionar, diseñar, construir, probar, documentar, versionar, subir y desplegar una plataforma web moderna para divulgación responsable sobre plantas medicinales, usos tradicionales, evidencia científica, riesgos, interacciones y terapias complementarias.

Debes trabajar directamente en el repositorio GitHub indicado, usando Git y GitHub CLI cuando estén disponibles. Debes crear commits pequeños y comprensibles, abrir o preparar pull requests, ejecutar controles de calidad, realizar push y configurar el despliegue web. No declares que una acción se realizó hasta comprobarla.

Este documento es la constitución del proyecto. Cuando una instrucción puntual contradiga este archivo, prioriza:

1. Seguridad de las personas.
2. Protección de secretos y datos.
3. Veracidad científica.
4. Integridad del repositorio.
5. Requisitos explícitos del propietario.
6. Este archivo.
7. Preferencias de implementación.

---

# PARTE I — VISIÓN, PROPÓSITO Y LÍMITES

## 1. Visión del producto

Construir una plataforma de divulgación herbal atractiva, comprensible y rigurosa que aumente el interés por la botánica medicinal sin convertir el sitio en una fuente de diagnósticos, prescripciones ni promesas de curación.

La plataforma debe ayudar al visitante a:

- Conocer plantas, nombres científicos, partes utilizadas y compuestos asociados.
- Distinguir entre uso tradicional, evidencia preclínica, evidencia clínica e incertidumbre.
- Comprender riesgos, contraindicaciones, alergias e interacciones.
- Consultar fuentes verificables.
- Aprender a evaluar afirmaciones de salud.
- Encontrar contenido introductorio visual y accesible.
- Guardar fichas o colecciones, si crea una cuenta.
- Reportar errores o solicitar revisión editorial.

El producto no debe presentarse como “médico”, “clínico” ni “terapéutico” en el sentido de sustituir atención profesional. Puede usar expresiones como “divulgación herbal”, “bienestar”, “usos tradicionales”, “evidencia disponible” y “terapias complementarias”, acompañadas de los límites correspondientes.

## 2. Problema que resuelve

La información herbal en internet suele mezclar tradición, publicidad, estudios de laboratorio, experiencias personales y evidencia clínica como si fueran equivalentes. Este proyecto debe resolver esa confusión mediante:

- Etiquetas claras de nivel de evidencia.
- Fuentes enlazadas y trazables.
- Fecha de última revisión.
- Autoría y revisor editorial.
- Alertas de seguridad visibles.
- Separación entre “qué se ha usado tradicionalmente” y “qué ha demostrado la investigación”.
- Lenguaje prudente que no exagere resultados.

## 3. Audiencia inicial

### 3.1 Público general

Personas adultas que desean aprender sobre plantas medicinales y bienestar complementario.

### 3.2 Estudiantes y divulgadores

Personas que necesitan fichas ordenadas, referencias y explicaciones de conceptos.

### 3.3 Profesionales de salud o investigación

Usuarios que pueden valorar la trazabilidad de fuentes, pero que no deben considerar el sitio una guía clínica.

### 3.4 Editores y administradores

Personas autorizadas para crear, revisar, publicar, corregir o retirar contenido.

## 4. Principios del producto

1. **Interés sin sensacionalismo.**
2. **Evidencia antes que marketing.**
3. **Seguridad antes que engagement.**
4. **Incertidumbre explícita.**
5. **Accesibilidad desde el inicio.**
6. **Privacidad por defecto.**
7. **Arquitectura simple antes que sobreingeniería.**
8. **MVP funcional antes que módulos futuristas.**
9. **Contenido verificable antes que cantidad.**
10. **No inventar datos para llenar la interfaz.**

---

# PARTE II — REGLAS MÉDICAS, CIENTÍFICAS Y EDITORIALES

## 5. Tratamiento del material de ideación original

El material inicial del proyecto contiene conversaciones sobre romero, orégano, lavanda, manzanilla, eucalipto, menta, melisa, té verde, ginseng, tomillo, temperaturas de vaporización y supuestos efectos en concentración, ansiedad, insomnio o respiración.

Ese material es únicamente una fuente de ideas de navegación, categorías y preguntas de usuarios. **No es una fuente científica.**

No copies ni publiques como hechos afirmaciones como:

- “Esta temperatura produce determinado efecto”.
- “Esta planta apaga la ansiedad”.
- “Esta mezcla induce sueño en minutos”.
- “Un compuesto aumenta la oxigenación cerebral”.
- “Vaporizar una planta desinfecta las vías respiratorias”.
- “Una hierba destruye virus o bacterias en el pulmón”.
- “Una mezcla reemplaza un tratamiento”.
- “Un vaporizador herbal es ideal para fitoterapia”.

Todo dato proveniente de esa conversación debe quedar:

- Excluido del contenido público; o
- Marcado internamente como `unverified`; y
- Pendiente de revisión por una persona competente; y
- Respaldado por una fuente primaria o institucional antes de publicarse.

## 6. Política de afirmaciones de salud

Cada afirmación de salud debe tener:

- Texto exacto de la afirmación.
- Planta o compuesto relacionado.
- Parte de la planta.
- Preparación o vía de administración estudiada.
- Población estudiada.
- Tipo de evidencia.
- Fuente.
- Año.
- Resultado resumido.
- Limitaciones.
- Nivel de certeza.
- Estado editorial.
- Fecha de revisión.

Nunca extrapoles automáticamente resultados entre:

- Ingestión e inhalación.
- Aceite esencial y planta seca.
- Extracto estandarizado e infusión.
- Estudios celulares y efectos en humanos.
- Estudios animales y recomendaciones clínicas.
- Asociación estadística y causalidad.
- Concentración de laboratorio y uso doméstico.
- Un compuesto aislado y la planta completa.

## 7. Jerarquía de evidencia

Utiliza esta taxonomía:

- `systematic_review_meta_analysis`
- `clinical_guideline`
- `randomized_controlled_trial`
- `controlled_clinical_trial`
- `observational_human`
- `case_report`
- `pharmacokinetic`
- `animal`
- `in_vitro`
- `chemical_characterization`
- `traditional_use_monograph`
- `traditional_use_only`
- `expert_consensus`
- `insufficient_evidence`
- `conflicting_evidence`

Y esta escala de certeza:

- `high`
- `moderate`
- `low`
- `very_low`
- `not_assessed`

La interfaz debe explicar en palabras sencillas cada nivel.

## 8. Fuentes aceptables

Prioriza fuentes institucionales y académicas:

- OMS/WHO.
- NIH/NCCIH.
- PubMed y artículos originales indexados.
- Cochrane.
- EMA y monografías europeas de productos herbales.
- Organismos regulatorios nacionales.
- Revisiones sistemáticas y guías clínicas.
- Universidades y revistas revisadas por pares.

No uses como respaldo principal:

- Tiendas.
- Blogs comerciales.
- Foros.
- Redes sociales.
- Páginas de fabricantes.
- Contenido generado por IA sin fuente.
- Sitios de vaporizadores.
- Testimonios.
- SEO content farms.

Los artículos de divulgación pueden orientar búsquedas, pero no deben sustentar afirmaciones clínicas.

## 9. Citación y trazabilidad

Toda afirmación publicada debe incluir una o más referencias. Cada referencia debe almacenar, cuando exista:

- DOI.
- PMID.
- URL canónica.
- Título.
- Autores.
- Revista u organismo.
- Año.
- Fecha de acceso.
- Tipo de publicación.
- Estado de retractación o corrección, si se conoce.
- Extracto resumido escrito por el equipo.
- Licencia o condiciones de reutilización.

No copies resúmenes completos ni texto protegido. Resume con redacción propia y enlaza la fuente.

## 10. Política específica sobre inhalación y vaporización

La sección de vaporización debe ser principalmente educativa y de reducción de riesgo.

Por defecto:

- No publicar “recetas” inhaladas.
- No recomendar mezclas.
- No dar dosis.
- No prometer efectos.
- No afirmar temperaturas “terapéuticas”.
- No indicar que una vía inhalada es segura porque una planta se consume por otra vía.
- No sugerir uso en niños, embarazo, lactancia, mascotas o personas con enfermedades respiratorias.
- No recomendar aceites esenciales dentro de dispositivos no diseñados para ellos.
- No convertir puntos de ebullición de compuestos en temperaturas clínicas de uso.
- No presentar dispositivos comerciales como aparatos médicos.

La plataforma puede explicar:

- Diferencia entre combustión, aerosol, vapor y difusión ambiental.
- Que calentar materia vegetal puede producir sustancias distintas de las presentes en la planta fresca.
- Que la seguridad depende del material, dispositivo, temperatura, contaminantes, duración y estado de salud.
- Que “natural” no equivale a “seguro”.
- Que la evidencia de inhalación de muchas plantas es limitada.
- Que irritación, alergias, broncoespasmo y exposición a contaminantes son riesgos relevantes.
- Cuándo suspender la exposición y buscar atención médica.

Cualquier ficha de “temperatura” debe permanecer despublicada hasta contar con:

1. Evidencia analítica de qué se libera a esa temperatura.
2. Evidencia toxicológica.
3. Evidencia específica de vía inhalada.
4. Revisión editorial.
5. Advertencia de que un dato físico-químico no demuestra eficacia clínica.

## 11. Aviso sanitario global

Incluye un aviso visible y no alarmista:

> Este sitio ofrece información educativa sobre plantas y prácticas complementarias. No diagnostica, prescribe ni sustituye la atención de profesionales de salud. La evidencia y la seguridad pueden variar según la preparación, la vía de uso, la dosis, la edad, el embarazo, las enfermedades y los medicamentos. Consulte a un profesional calificado antes de usar productos herbales con fines de salud.

Debe aparecer:

- En el pie de página.
- En páginas de plantas.
- En páginas de seguridad.
- Antes de cualquier contenido de inhalación.
- En el formulario de contacto cuando se solicite consejo médico.

## 12. Emergencias y consultas individuales

No construir un chatbot que diagnostique síntomas en el MVP.

Si un usuario escribe síntomas:

- Mostrar un mensaje de límite.
- Recomendar atención profesional.
- Mostrar una instrucción para emergencias locales sin inventar números.
- No generar una recomendación de planta, dosis, mezcla o temperatura.

---

# PARTE III — ALCANCE FUNCIONAL

## 13. Alcance del MVP público

El primer lanzamiento debe incluir:

1. Landing page profesional.
2. Catálogo de plantas.
3. Página individual de planta.
4. Catálogo de compuestos.
5. Página individual de compuesto.
6. Biblioteca de evidencia.
7. Página de seguridad.
8. Página de metodología.
9. Glosario.
10. Buscador y filtros.
11. Diseño responsive.
12. Modo claro y oscuro.
13. SEO técnico.
14. Sitemap y robots.
15. Avisos legales.
16. Formulario de reporte de errores.
17. Panel administrativo protegido.
18. Flujo editorial borrador → revisión → publicación.
19. Base de datos con RLS.
20. CI/CD y despliegue verificado.

## 14. Funciones pospuestas

No implementar en el primer despliegue salvo que todo el MVP esté completo:

- Recomendador de mezclas.
- Chatbot médico.
- RAG público.
- Diagnóstico.
- Dosificación personalizada.
- Marketplace.
- Venta de suplementos.
- Comunidad o foro.
- Integración con dispositivos.
- Aplicación móvil.
- Suscripciones pagadas.
- API pública.
- Knowledge graph complejo.
- Automatización que publique contenido sin revisión humana.

Se pueden documentar como roadmap.

## 15. Rutas públicas

Usa App Router y rutas en español:

- `/`
- `/plantas`
- `/plantas/[slug]`
- `/compuestos`
- `/compuestos/[slug]`
- `/evidencia`
- `/evidencia/[slug]`
- `/seguridad`
- `/seguridad/inhalacion`
- `/metodologia`
- `/glosario`
- `/colecciones`
- `/acerca`
- `/contacto`
- `/privacidad`
- `/terminos`
- `/aviso-medico`

Rutas de autenticación:

- `/iniciar-sesion`
- `/registro`
- `/recuperar`
- `/auth/callback`

Rutas protegidas:

- `/cuenta`
- `/cuenta/favoritos`
- `/cuenta/colecciones`

Rutas administrativas:

- `/admin`
- `/admin/plantas`
- `/admin/plantas/nueva`
- `/admin/plantas/[id]`
- `/admin/compuestos`
- `/admin/fuentes`
- `/admin/afirmaciones`
- `/admin/revisiones`
- `/admin/reportes`
- `/admin/usuarios`
- `/admin/auditoria`

## 16. Landing page

La página principal debe contener:

1. Hero con mensaje de valor:
   - “Explora plantas medicinales con evidencia, tradición y seguridad claramente diferenciadas.”
2. Buscador principal.
3. Tres pilares:
   - Conoce la planta.
   - Revisa la evidencia.
   - Comprende los riesgos.
4. Plantas destacadas, solo si están publicadas y revisadas.
5. Explicación visual de niveles de evidencia.
6. Bloque “Natural no siempre significa inocuo”.
7. Acceso a metodología.
8. CTA de exploración, no de tratamiento.
9. Pie de página completo.

No usar imágenes que sugieran consumo irresponsable, humo recreativo o estética de productos de cannabis.

## 17. Catálogo de plantas

Filtros:

- Nombre común.
- Nombre científico.
- Familia botánica.
- Parte utilizada.
- Región o procedencia.
- Tipo de uso tradicional.
- Nivel máximo de evidencia disponible.
- Vía de administración estudiada.
- Existencia de alertas.
- Estado editorial.

Cada tarjeta debe mostrar:

- Imagen con licencia o ilustración propia.
- Nombre común.
- Nombre científico en cursiva.
- Resumen neutral.
- Etiqueta de evidencia.
- Etiqueta de seguridad.
- Fecha de revisión.
- Enlace a ficha.

## 18. Ficha de planta

Secciones:

1. Encabezado e identificación.
2. Sinónimos.
3. Clasificación botánica.
4. Partes utilizadas.
5. Descripción.
6. Distribución.
7. Usos tradicionales.
8. Qué dice la evidencia.
9. Preparaciones estudiadas.
10. Compuestos reportados.
11. Seguridad.
12. Contraindicaciones.
13. Interacciones.
14. Embarazo, lactancia y población pediátrica.
15. Vía inhalada, solo si existe información específica.
16. Fuentes.
17. Historial de revisión.
18. Reportar un error.

No mostrar una única puntuación simplista de “eficacia”. Puede existir un resumen por afirmación y vía.

## 19. Biblioteca de evidencia

Permitir filtrar por:

- Planta.
- Compuesto.
- Tema de salud.
- Tipo de estudio.
- Año.
- Población.
- Vía.
- Nivel de certeza.
- Resultado favorable, neutral, desfavorable o mixto.
- Estado de revisión.

Cada resumen debe incluir:

- Pregunta estudiada.
- Diseño.
- Tamaño de muestra.
- Preparación.
- Comparador.
- Resultado principal.
- Limitaciones.
- Conclusión prudente.
- Enlace a fuente.

## 20. Página de seguridad

Debe explicar:

- Interacciones planta-medicamento.
- Riesgos de alergia.
- Calidad y contaminación.
- Variabilidad de extractos.
- Poblaciones vulnerables.
- Riesgos de automedicación.
- Diferencias entre vías de administración.
- Señales para suspender el uso.
- Reporte de eventos adversos según país, sin inventar enlaces.
- Importancia de informar al profesional de salud.

## 21. Glosario

Términos iniciales:

- Aceite esencial.
- Alcaloide.
- Biodisponibilidad.
- Compuesto.
- Contraindicación.
- Ensayo clínico.
- Evidencia preclínica.
- Extracto estandarizado.
- Fitoterapia.
- Flavonoide.
- Interacción.
- Monografía.
- Placebo.
- Polifenol.
- Preparación.
- Revisión sistemática.
- Terpeno.
- Uso tradicional.
- Vía de administración.
- Vaporización.
- Aerosol.
- Combustión.

## 22. Cuenta de usuario

MVP:

- Registro.
- Inicio de sesión.
- Recuperación.
- Perfil mínimo.
- Favoritos.
- Colecciones privadas.
- Eliminación de cuenta.
- Exportación básica de datos personales.
- Consentimiento de comunicaciones separado y opcional.

No solicitar fecha de nacimiento, enfermedades, medicamentos ni información médica.

## 23. Panel administrativo

Roles:

- `viewer`
- `contributor`
- `editor`
- `reviewer`
- `admin`

Permisos:

- Contributor crea borradores.
- Editor corrige y solicita revisión.
- Reviewer aprueba o rechaza contenido científico.
- Admin gestiona usuarios, configuración y publicaciones.
- Ninguna persona puede aprobar automáticamente su propia afirmación de alto riesgo, salvo configuración explícita para un equipo de una sola persona y con registro de auditoría.

Funciones:

- CRUD de plantas.
- CRUD de compuestos.
- CRUD de fuentes.
- CRUD de afirmaciones.
- Asociación de fuentes a afirmaciones.
- Alertas de contenido sin fuente.
- Alertas de revisión vencida.
- Vista previa.
- Publicación y retirada.
- Auditoría.
- Exportación CSV/JSON de datos no sensibles.

---

# PARTE IV — ARQUITECTURA TÉCNICA

## 24. Principio de arquitectura

Usa una arquitectura modular monolítica. No crear microservicios en el MVP.

La aplicación debe poder desplegarse como un proyecto Next.js en Vercel, con Supabase para:

- PostgreSQL.
- Auth.
- Storage.
- Row Level Security.
- Funciones Edge solo si son realmente necesarias.

## 25. Stack recomendado

Selecciona las versiones estables compatibles en el momento de ejecución. No fijes versiones obsoletas por este documento.

- Next.js con App Router.
- React.
- TypeScript estricto.
- Node.js compatible con la versión de Next.js.
- `pnpm`.
- Tailwind CSS.
- shadcn/ui.
- Supabase JS.
- Zod.
- React Hook Form.
- TanStack Table para tablas administrativas.
- TanStack Query únicamente cuando aporte valor en componentes cliente.
- Vitest.
- React Testing Library.
- Playwright.
- ESLint.
- Prettier.
- Husky y lint-staged, si no complican el entorno.
- GitHub Actions.
- Vercel.
- Supabase CLI.
- `next-intl` o solución equivalente preparada para i18n, sin traducir todo en el MVP.
- `next-themes`.
- `lucide-react`.

No agregues Drizzle ORM en el MVP salvo que exista una necesidad comprobada. Mantén el esquema como migraciones SQL de Supabase y genera tipos TypeScript desde la base de datos. Evita tener dos fuentes de verdad para el esquema.

## 26. Convenciones de código

- TypeScript con `strict: true`.
- Prohibido usar `any` sin comentario de justificación.
- Preferir `unknown` y validación.
- Componentes servidor por defecto.
- Componentes cliente solo cuando se requiera estado, efectos o APIs del navegador.
- Funciones pequeñas.
- Nombres descriptivos.
- No introducir abstracciones prematuras.
- No duplicar lógica de autorización.
- Validar entradas con Zod.
- Errores tipados.
- No exponer detalles internos al usuario.
- No registrar secretos ni datos personales.
- Todo texto visible debe ser centralizable para i18n.
- Fechas almacenadas en UTC.
- Slugs únicos y normalizados.
- Nombres científicos con estructura específica, no como texto arbitrario cuando pueda evitarse.

## 27. Estructura sugerida

```text
.
├── .claude/
│   ├── commands/
│   └── settings.json.example
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── dependabot.yml
│   └── workflows/
│       ├── ci.yml
│       ├── e2e.yml
│       ├── codeql.yml
│       ├── db-check.yml
│       └── db-deploy.yml
├── app/
│   ├── (marketing)/
│   ├── (catalog)/
│   ├── (auth)/
│   ├── (account)/
│   ├── admin/
│   ├── api/
│   ├── layout.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/
│   ├── layout/
│   ├── plants/
│   ├── evidence/
│   ├── safety/
│   ├── admin/
│   └── forms/
├── content/
│   ├── legal/
│   ├── methodology/
│   └── glossary/
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── CONTENT_POLICY.md
│   ├── EVIDENCE_MODEL.md
│   ├── SECURITY.md
│   ├── DEPLOYMENT.md
│   ├── OPERATIONS.md
│   ├── EDITORIAL_WORKFLOW.md
│   ├── ACCESSIBILITY.md
│   └── ROADMAP.md
├── lib/
│   ├── auth/
│   ├── data/
│   ├── evidence/
│   ├── safety/
│   ├── supabase/
│   ├── validation/
│   ├── seo/
│   └── utils/
├── public/
│   ├── images/
│   └── icons/
├── scripts/
│   ├── check-content.ts
│   ├── seed-reviewed-content.ts
│   ├── verify-env.ts
│   └── smoke-test.ts
├── supabase/
│   ├── config.toml
│   ├── migrations/
│   ├── seed.sql
│   ├── functions/
│   └── tests/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── CLAUDE.md
├── AGENTS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── .env.example
```

Adapta esta estructura a la versión real del framework y al contenido existente. No reorganices por estética si el repositorio ya tiene una estructura coherente.

---

# PARTE V — MODELO DE DATOS

## 28. Principios del esquema

- UUID como claves primarias, salvo tablas de referencia pequeñas.
- `created_at`, `updated_at`, `created_by`, `updated_by` donde corresponda.
- Soft delete solo donde exista necesidad editorial; evitarlo por defecto.
- Estados editoriales explícitos.
- Índices para slugs, búsquedas y claves foráneas.
- Restricciones de integridad.
- RLS en toda tabla expuesta por la Data API.
- Auditoría de operaciones sensibles.
- Datos públicos separados de borradores.
- No almacenar información médica de usuarios.

## 29. Enumeraciones sugeridas

```text
content_status:
draft | in_review | changes_requested | approved | published | archived

evidence_type:
systematic_review_meta_analysis
clinical_guideline
randomized_controlled_trial
controlled_clinical_trial
observational_human
case_report
pharmacokinetic
animal
in_vitro
chemical_characterization
traditional_use_monograph
traditional_use_only
expert_consensus
insufficient_evidence
conflicting_evidence

certainty_level:
high | moderate | low | very_low | not_assessed

claim_outcome:
favorable | neutral | unfavorable | mixed | unclear

route_type:
oral | topical | inhaled | aromatherapy_environmental | other | unknown

risk_level:
informational | caution | high_risk | contraindicated

review_decision:
approved | rejected | changes_requested
```

Usa PostgreSQL enums solo si facilitan consistencia y migraciones. De lo contrario, usa tablas de referencia.

## 30. Tablas de identidad y acceso

### `profiles`

- `id` referencia `auth.users`.
- `display_name`.
- `locale`.
- `avatar_path`.
- `created_at`.
- `updated_at`.

### `roles`

- `id`.
- `key`.
- `name`.
- `description`.

### `user_roles`

- `user_id`.
- `role_id`.
- `assigned_by`.
- `assigned_at`.

### `audit_logs`

- `id`.
- `actor_id`.
- `action`.
- `entity_type`.
- `entity_id`.
- `before_json`.
- `after_json`.
- `request_id`.
- `created_at`.

No guardar tokens, contraseñas ni contenido sensible en auditoría.

## 31. Tablas botánicas

### `plant_families`

- `id`.
- `scientific_name`.
- `slug`.

### `plant_genera`

- `id`.
- `family_id`.
- `scientific_name`.
- `slug`.

### `plants`

- `id`.
- `genus_id`.
- `scientific_name`.
- `canonical_common_name`.
- `slug`.
- `summary`.
- `description`.
- `distribution_summary`.
- `status`.
- `published_at`.
- `last_reviewed_at`.
- `review_due_at`.
- `created_by`.
- `updated_by`.
- timestamps.

### `plant_names`

- `id`.
- `plant_id`.
- `name`.
- `language_code`.
- `region_code`.
- `name_type`: common, synonym, deprecated, indigenous.
- `is_preferred`.

### `plant_parts`

- `id`.
- `key`.
- `name`.
- `description`.

### `plant_part_links`

- `plant_id`.
- `plant_part_id`.
- `notes`.

### `plant_regions`

- `plant_id`.
- `country_code`.
- `native_status`.
- `notes`.

### `plant_images`

- `id`.
- `plant_id`.
- `storage_path`.
- `alt_text`.
- `caption`.
- `creator`.
- `source_url`.
- `license`.
- `license_url`.
- `is_primary`.
- `status`.

No usar imágenes sin licencia verificable.

## 32. Compuestos

### `compound_classes`

- `id`.
- `key`.
- `name`.
- `description`.

Ejemplos: terpenes, flavonoids, alkaloids, polyphenols, essential_oil_components.

### `compounds`

- `id`.
- `class_id`.
- `name`.
- `iupac_name`.
- `cas_number`.
- `pubchem_cid`.
- `slug`.
- `summary`.
- `status`.
- timestamps.

### `plant_compounds`

- `id`.
- `plant_id`.
- `compound_id`.
- `plant_part_id`.
- `preparation`.
- `concentration_text`.
- `analytical_method`.
- `source_id`.
- `notes`.
- `status`.

No convertir presencia química en beneficio de salud.

## 33. Temas, usos y afirmaciones

### `health_topics`

- `id`.
- `parent_id`.
- `name`.
- `slug`.
- `summary`.

### `traditional_uses`

- `id`.
- `plant_id`.
- `health_topic_id`.
- `region_text`.
- `preparation_text`.
- `route_id`.
- `description`.
- `source_id`.
- `status`.

Debe indicarse siempre que es uso tradicional.

### `claims`

- `id`.
- `plant_id`, nullable.
- `compound_id`, nullable.
- `health_topic_id`.
- `claim_text`.
- `plain_language_summary`.
- `route_id`.
- `preparation_text`.
- `population_text`.
- `evidence_type`.
- `certainty_level`.
- `outcome`.
- `limitations`.
- `status`.
- `published_at`.
- `last_reviewed_at`.
- `review_due_at`.
- `created_by`.
- `updated_by`.

Restricción: al menos planta o compuesto debe existir.

### `claim_sources`

- `claim_id`.
- `source_id`.
- `relationship`: supports, contradicts, contextualizes, safety.
- `notes`.

### `claim_reviews`

- `id`.
- `claim_id`.
- `reviewer_id`.
- `decision`.
- `comments`.
- `reviewed_at`.

## 34. Fuentes

### `journals`

- `id`.
- `name`.
- `issn`.
- `publisher`.

### `sources`

- `id`.
- `source_type`.
- `title`.
- `journal_id`.
- `organization`.
- `publication_year`.
- `publication_date`.
- `doi`.
- `pmid`.
- `canonical_url`.
- `accessed_at`.
- `abstract_summary`.
- `license`.
- `retraction_status`.
- `status`.
- timestamps.

### `authors`

- `id`.
- `family_name`.
- `given_names`.
- `orcid`.

### `source_authors`

- `source_id`.
- `author_id`.
- `author_order`.

## 35. Seguridad

### `safety_warnings`

- `id`.
- `title`.
- `description`.
- `risk_level`.
- `population`.
- `route_id`.
- `source_id`.
- `status`.

### `plant_safety_warnings`

- `plant_id`.
- `safety_warning_id`.
- `plant_part_id`.
- `preparation_text`.

### `interactions`

- `id`.
- `plant_id`.
- `interacting_agent`.
- `agent_type`: medicine, herb, food, condition, procedure.
- `mechanism_summary`.
- `clinical_significance`.
- `risk_level`.
- `source_id`.
- `status`.

### `adverse_effects`

- `id`.
- `plant_id`.
- `effect`.
- `frequency_text`.
- `severity`.
- `route_id`.
- `source_id`.
- `status`.

### `routes_of_administration`

- `id`.
- `key`.
- `name`.
- `description`.

## 36. Módulo de inhalación en cuarentena editorial

### `inhalation_records`

- `id`.
- `plant_id`.
- `plant_part_id`.
- `device_category`.
- `temperature_min_c`.
- `temperature_max_c`.
- `analytical_basis`.
- `toxicology_summary`.
- `human_evidence_summary`.
- `source_id`.
- `status`.
- `publication_block_reason`.
- `reviewed_by`.
- `reviewed_at`.

Regla de base de datos o aplicación:

- No permitir `published` si faltan fuente, toxicología, evidencia de vía y revisión.
- No mostrar el dato de temperatura en páginas públicas mientras `status != published`.
- En MVP, estos registros pueden existir solo para demostrar el flujo editorial, pero deben estar vacíos o marcados `draft`.

## 37. Contenido editorial

### `content_pages`

- `id`.
- `slug`.
- `title`.
- `body`.
- `excerpt`.
- `status`.
- `published_at`.
- `created_by`.
- `updated_by`.

### `glossary_terms`

- `id`.
- `term`.
- `slug`.
- `definition`.
- `source_id`.
- `status`.

### `editorial_notes`

- `id`.
- `entity_type`.
- `entity_id`.
- `author_id`.
- `note`.
- `created_at`.

## 38. Funciones de usuario

### `favorites`

- `user_id`.
- `plant_id`.
- `created_at`.

### `collections`

- `id`.
- `user_id`.
- `name`.
- `description`.
- `visibility`, inicialmente solo private.
- timestamps.

### `collection_items`

- `collection_id`.
- `plant_id`.
- `notes`.
- `created_at`.

### `content_reports`

- `id`.
- `reporter_user_id`, nullable.
- `reporter_email`, nullable y protegida.
- `entity_type`.
- `entity_id`.
- `reason`.
- `details`.
- `status`.
- timestamps.

Implementa CAPTCHA o rate limiting si el formulario es público.

## 39. Búsqueda

Primera fase:

- PostgreSQL full-text search.
- `unaccent`.
- Trigramas para nombres.
- Índices GIN.
- Búsqueda por nombre común, científico, sinónimo y resumen.

Segunda fase, solo después del MVP:

- `pgvector`.
- Embeddings de fragmentos aprobados.
- Búsqueda híbrida.
- RAG con citas.
- Ninguna respuesta generada sin referencias.
- No usar RAG para consejo médico personal.

---

# PARTE VI — SEGURIDAD Y PRIVACIDAD

## 40. Row Level Security

Activa RLS en todas las tablas expuestas.

Políticas mínimas:

- Público: lectura solo de filas `published`.
- Usuario autenticado: lectura pública más sus favoritos, colecciones y perfil.
- Contributor: crear y editar sus borradores.
- Editor: editar borradores y gestionar revisión.
- Reviewer: revisar afirmaciones.
- Admin: administración completa mediante políticas explícitas.
- Service/secret key: solo en servidor seguro o CI; nunca en navegador.

Centraliza comprobaciones de rol. No confíes únicamente en ocultar elementos de UI.

## 41. Variables de entorno

Usa nombres como:

```dotenv
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
SUPABASE_PROJECT_REF=
SUPABASE_DB_PASSWORD=
SUPABASE_ACCESS_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
VERCEL_TOKEN=
```

Notas:

- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` puede usarse en navegador con RLS correcto.
- `SUPABASE_SECRET_KEY` nunca debe llevar prefijo `NEXT_PUBLIC_`.
- No guardar valores reales en `.env.example`.
- Añadir `.env*` al `.gitignore`, preservando `.env.example`.
- Usar secretos de Vercel y GitHub.
- Enmascarar valores en logs.
- Rotar cualquier secreto que haya sido comprometido.

## 42. Cabeceras y seguridad web

Configura:

- Content Security Policy razonable.
- `X-Content-Type-Options`.
- `Referrer-Policy`.
- `Permissions-Policy`.
- Protección contra clickjacking.
- Cookies seguras, `httpOnly` y `sameSite`.
- Validación CSRF donde aplique.
- Sanitización de contenido enriquecido.
- Rate limiting en endpoints públicos.
- Límites de tamaño.
- Protección de formularios.
- No renderizar HTML arbitrario.
- Dependencias mínimas y auditadas.

## 43. Datos personales

- Recopilar el mínimo.
- No vender datos.
- No usar trackers invasivos.
- Consentimiento para analítica no esencial, si se implementa.
- Página de privacidad comprensible.
- Mecanismo para eliminar cuenta.
- No almacenar consultas médicas.
- El correo de reporte de errores debe tener retención limitada.

## 44. Supply chain

- Lockfile obligatorio.
- Dependabot.
- CodeQL.
- `pnpm audit` como señal, no como sustituto de revisión.
- Actions fijadas a versiones mayores estables o SHA cuando el riesgo lo justifique.
- Permisos mínimos del `GITHUB_TOKEN`.
- No ejecutar código de PR no confiable con secretos.
- No usar `pull_request_target` para ejecutar código del PR.
- Revisar scripts `postinstall`.
- No incorporar paquetes abandonados sin evaluación.

---

# PARTE VII — UX, DISEÑO Y ACCESIBILIDAD

## 45. Dirección visual

La marca debe sentirse:

- Botánica.
- Científica.
- Cálida.
- Contemporánea.
- Serena.
- Confiable.

Evitar:

- Estética de dispensario recreativo.
- Nubes de humo.
- Mensajes de “cura natural”.
- Iconografía pseudocientífica.
- Exceso de verde saturado.
- Letras ilegibles sobre fotografías.
- Animaciones distractoras.

Usa un sistema de diseño con tokens semánticos. El color no debe ser el único medio para comunicar niveles de evidencia o riesgo.

## 46. Componentes clave

- Header accesible.
- Search command.
- Plant card.
- Evidence badge con tooltip.
- Safety badge.
- Source card.
- Claim summary.
- Alert/banner.
- Breadcrumbs.
- Table of contents.
- Filters drawer.
- Empty state.
- Skeleton.
- Error state.
- Review status.
- Admin data table.
- Diff viewer de revisiones.
- Confirmación para acciones destructivas.

## 47. Accesibilidad

Objetivo: WCAG 2.2 AA.

Requisitos:

- Navegación completa por teclado.
- Focus visible.
- Jerarquía de encabezados.
- Landmarks.
- Formularios con label y mensajes asociados.
- Contraste adecuado.
- Alt text.
- No autoplay.
- Respeto a `prefers-reduced-motion`.
- Tooltips accesibles.
- Tablas con encabezados.
- Modales con focus trap.
- Pruebas automatizadas con axe y revisión manual.
- Contenido claro y sin lenguaje excesivamente técnico.

## 48. Responsive

Priorizar:

- 360 px.
- 768 px.
- 1024 px.
- 1440 px.

Filtros deben funcionar bien en móvil. Las tablas administrativas pueden convertirse en tarjetas o permitir scroll horizontal accesible.

---

# PARTE VIII — SEO, CONTENIDO Y RENDIMIENTO

## 49. SEO

Implementa:

- Metadata por ruta.
- Canonical.
- Open Graph.
- Twitter/X cards.
- JSON-LD apropiado, sin declarar tratamientos médicos.
- Sitemap.
- Robots.
- Breadcrumb structured data.
- Article schema para contenidos.
- Person/Organization solo si existen datos reales.
- Títulos y descripciones únicas.
- Slugs estables.
- Redirecciones al cambiar slugs.
- Página 404 útil.

No usar schema de producto médico, drug o treatment sin fundamento legal y editorial.

## 50. Calidad del contenido

Cada ficha pública necesita:

- Resumen.
- Al menos una fuente aceptable.
- Nivel de evidencia.
- Seguridad.
- Fecha de revisión.
- Estado publicado.
- Autor/revisor o responsabilidad editorial.
- Aviso correspondiente.

No publicar páginas vacías para ganar SEO.

## 51. Rendimiento

Objetivos de producción:

- Lighthouse Performance ≥ 90 en rutas públicas principales, sujeto a condiciones reales.
- Accessibility ≥ 95.
- Best Practices ≥ 95.
- SEO ≥ 95.
- Imágenes optimizadas.
- Fuentes optimizadas.
- JavaScript cliente reducido.
- Caché y revalidación coherentes.
- Evitar waterfalls.
- Paginación.
- No cargar panel administrativo en bundle público.
- Core Web Vitals razonables.

## 52. Analítica

Preferir analítica respetuosa con privacidad. Puede usarse Vercel Analytics si el propietario lo aprueba.

Medir:

- Búsquedas.
- Filtros usados.
- Fichas vistas.
- Clics en fuentes.
- Reportes de error.
- No almacenar términos que parezcan datos médicos sensibles sin anonimización y política clara.

---

# PARTE IX — PRUEBAS Y CALIDAD

## 53. Scripts obligatorios

`package.json` debe incluir, como mínimo:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --check .",
    "format:write": "prettier --write .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "check:content": "tsx scripts/check-content.ts",
    "verify:env": "tsx scripts/verify-env.ts",
    "ci": "pnpm lint && pnpm format && pnpm typecheck && pnpm test && pnpm check:content && pnpm build"
  }
}
```

Adapta sintaxis y herramientas, pero conserva la intención.

## 54. Cobertura

No persigas 90% artificial en todo el código.

Objetivos:

- 80% global como meta inicial razonable.
- 90% o más en:
  - Evidencia.
  - Permisos.
  - Validación.
  - Transformación de datos.
  - Reglas editoriales.
- Pruebas de comportamiento antes que snapshots masivos.

## 55. Unit tests

Cubrir:

- Mapeo de niveles de evidencia.
- Validación de fuentes.
- Regla de publicación.
- Slugs.
- Búsqueda.
- Seguridad de rutas.
- Helpers de SEO.
- Formateo de nombres científicos.
- Detección de afirmaciones sin fuente.
- Bloqueo de registros de inhalación incompletos.

## 56. Integration tests

Cubrir:

- Supabase local.
- RLS.
- Auth.
- CRUD editorial.
- Flujo de revisión.
- Publicación.
- Favoritos.
- Colecciones.
- Reportes.
- Búsqueda.

## 57. E2E

Escenarios:

1. Usuario público busca una planta y abre la ficha.
2. Usuario filtra por evidencia.
3. Usuario consulta fuentes.
4. Usuario se registra e inicia sesión.
5. Usuario guarda favorito.
6. Contributor crea borrador.
7. Reviewer solicita cambios.
8. Admin publica.
9. Visitante reporta error.
10. Contenido no publicado no es accesible.
11. Registro inhalatorio no aprobado no aparece.
12. Navegación por teclado.
13. Vista móvil.

## 58. Smoke tests después de despliegue

Verificar:

- URL responde.
- `/` devuelve 200.
- `/plantas` devuelve 200.
- `/seguridad` devuelve 200.
- `/metodologia` devuelve 200.
- Sitemap disponible.
- No hay errores críticos de consola.
- Login carga.
- Conexión a Supabase funciona.
- Contenido publicado se muestra.
- Borradores no se muestran.
- No se exponen secretos.
- Build ID y commit SHA se pueden rastrear en logs o endpoint interno seguro.

---

# PARTE X — GIT Y GITHUB

## 59. Reglas de Git

Antes de modificar:

```bash
pwd
git status --short
git branch --show-current
git remote -v
git log --oneline -n 10
```

Si el repositorio no está clonado:

```bash
gh auth status
gh repo clone R0N4L2/herbal-vapor-lab
cd herbal-vapor-lab
```

Si ya existe:

- No sobrescribir trabajo no confirmado.
- No borrar archivos sin comprenderlos.
- No hacer `git reset --hard`.
- No hacer `git clean -fd`.
- No hacer force push.
- No reescribir historial de `main`.
- Si existen cambios del usuario, preservarlos y documentarlos.
- Antes de una reestructuración amplia, crear una rama de respaldo local y remota si procede:
  `backup/pre-claude-YYYYMMDD-HHMM`.

## 60. Estrategia de ramas

Para un proyecto de una persona, usar trunk-based development:

- `main`: producción.
- `feature/<descripcion>`.
- `fix/<descripcion>`.
- `docs/<descripcion>`.
- `chore/<descripcion>`.

No crear `develop` salvo que exista una necesidad concreta de integración prolongada.

Flujo:

1. Actualizar `main`.
2. Crear rama.
3. Implementar.
4. Ejecutar calidad.
5. Commit.
6. Push.
7. Crear PR.
8. Esperar CI.
9. Fusionar.
10. Verificar despliegue.

## 61. Commits

Usar Conventional Commits:

- `feat:`
- `fix:`
- `docs:`
- `test:`
- `refactor:`
- `chore:`
- `ci:`
- `security:`

Ejemplos:

- `feat(plants): add evidence-aware plant detail pages`
- `security(db): enforce RLS on editorial tables`
- `ci: add quality gates and Supabase schema checks`
- `docs: document medical content policy`

Cada commit debe ser:

- Atómico.
- Probado.
- Sin secretos.
- Con mensaje preciso.
- Con cambios relacionados.

## 62. Pull requests

El template debe pedir:

- Qué cambia.
- Por qué.
- Capturas para UI.
- Pruebas ejecutadas.
- Impacto en base de datos.
- Impacto editorial o sanitario.
- Checklist de accesibilidad.
- Riesgos.
- Plan de rollback.

## 63. Protección de `main`

Configurar, si la cuenta y el plan lo permiten:

- PR obligatorio.
- Al menos una aprobación cuando exista equipo.
- Checks obligatorios:
  - lint
  - typecheck
  - unit
  - content-policy
  - build
  - db-check
  - e2e para cambios relevantes
- Conversaciones resueltas.
- Branch actualizada.
- No force push.
- No delete.
- Deployments exitosos antes de merge, cuando sea viable.

Si no puede configurarse por CLI/API, documentar pasos exactos.

## 64. Issues

Crear labels:

- `bug`
- `feature`
- `content`
- `evidence`
- `safety`
- `accessibility`
- `security`
- `database`
- `devops`
- `good first issue`
- `needs-review`

Crear milestones alineados con los sprints.

---

# PARTE XI — CI/CD

## 65. Filosofía de CI/CD

- CI comprueba que el código es integrable.
- Vercel gestiona previews y producción del frontend.
- Las migraciones de producción requieren protección.
- No ejecutar cambios destructivos de base de datos automáticamente sin aprobación.
- Los despliegues deben ser reproducibles.
- No mezclar secretos de preview con producción.
- El resultado final debe ser verificable por URL y commit.

## 66. Workflow `ci.yml`

Triggers:

- `pull_request` a `main`.
- `push` a `main`.
- `workflow_dispatch`.

Permisos mínimos:

```yaml
permissions:
  contents: read
```

Pasos:

1. Checkout.
2. Setup pnpm.
3. Setup Node con cache.
4. `pnpm install --frozen-lockfile`.
5. `pnpm lint`.
6. `pnpm format`.
7. `pnpm typecheck`.
8. `pnpm test:coverage`.
9. `pnpm check:content`.
10. `pnpm build`.

Usar variables de entorno de prueba no sensibles. No usar secretos de producción en PRs.

## 67. Workflow `e2e.yml`

- Ejecutar en PRs relevantes, `main` o manualmente.
- Instalar navegadores de Playwright.
- Usar Supabase local o un entorno de prueba aislado.
- Subir reportes como artifact cuando falle.
- No conservar datos sensibles.

## 68. Workflow `db-check.yml`

En PR:

1. Iniciar Supabase local.
2. Aplicar migraciones desde cero.
3. Ejecutar tests SQL.
4. Generar tipos.
5. Verificar que los tipos generados estén actualizados.
6. Detectar cambios destructivos.
7. Ejecutar linter SQL si está configurado.
8. Detener servicios.

No conectar a producción.

## 69. Workflow `db-deploy.yml`

Trigger recomendado:

- `workflow_dispatch`.
- Opcionalmente push a `main`, pero con `environment: production` protegido y aprobación requerida.

Debe:

1. Usar `SUPABASE_ACCESS_TOKEN`.
2. Usar `SUPABASE_PROJECT_REF`.
3. Usar credencial de base de datos protegida.
4. Linkear proyecto.
5. Mostrar migraciones pendientes.
6. Ejecutar migraciones.
7. Desplegar Edge Functions solo si existen.
8. Ejecutar smoke test.
9. Registrar resultado.

No imprimir credenciales.

En cambios destructivos:

- Requerir migración expand/contract.
- Backfill separado.
- No eliminar columna usada por producción en el mismo despliegue.
- Documentar rollback.

## 70. CodeQL y Dependabot

Configurar:

- CodeQL para JavaScript/TypeScript.
- Ejecución en PR, `main` y cron semanal.
- Dependabot semanal para npm y GitHub Actions.
- Agrupar actualizaciones menores compatibles.
- No auto-merge de cambios mayores.
- CI obligatorio antes de fusionar.

## 71. Vercel

Método preferido: integración GitHub–Vercel.

Comportamiento esperado:

- Cada PR: Preview Deployment.
- Push/merge a `main`: Production Deployment.
- Variables separadas por Development, Preview y Production.
- Checks de despliegue vinculados al commit.

Configuración:

- Framework detectado: Next.js.
- Production branch: `main`.
- Root directory: raíz del repositorio, salvo monorepo.
- Build command: `pnpm build`.
- Install command: `pnpm install --frozen-lockfile`.
- Output: automático de Next.js.
- Node version compatible.

No crear un segundo workflow de despliegue Vercel si la integración Git ya funciona. Evitar despliegues duplicados.

Fallback si no puede conectarse GitHub:

- Usar Vercel CLI.
- `vercel link`.
- Obtener configuración.
- Configurar `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- Crear workflow de preview y producción.
- Documentar por qué se eligió fallback.

## 72. Supabase environments

Mínimo:

- Local.
- Producción.

Recomendado si el plan lo permite:

- Local.
- Preview/staging.
- Producción.

No apuntar previews de PR a producción con permisos de escritura. Si no existe staging, usar datos mock o Supabase local para pruebas y hacer previews públicos en modo lectura segura.

## 73. Secuencia de despliegue

Para cambios sin migración:

1. CI.
2. Preview.
3. Revisión.
4. Merge.
5. Producción Vercel.
6. Smoke tests.

Para cambios con migración compatible:

1. CI y db-check.
2. Aplicar migración backward-compatible.
3. Verificar DB.
4. Desplegar aplicación.
5. Smoke tests.
6. Realizar limpieza en una migración posterior.

## 74. Rollback

Documentar:

- Revertir commit y desplegar.
- Restaurar versión anterior en Vercel.
- Rollback de DB mediante migración inversa segura, no borrando historial.
- Restauración desde backup cuando corresponda.
- Incidentes y timeline.

---

# PARTE XII — CONFIGURACIÓN LOCAL Y AUTENTICACIÓN

## 75. Comprobaciones iniciales

Claude Code debe ejecutar:

```bash
git --version
gh --version
gh auth status
node --version
corepack --version || true
pnpm --version || true
npx vercel --version || true
pnpm dlx supabase --version || true
```

Si falta una herramienta:

- Preferir `corepack enable` para pnpm.
- Preferir `pnpm dlx` o `npx` antes que instalaciones globales innecesarias.
- No ejecutar instaladores remotos inseguros.
- Documentar el requisito.

## 76. Checkpoints humanos permitidos

Trabaja de forma autónoma, pero detente cuando sea indispensable para:

- Login OAuth.
- Introducción de tokens.
- Creación de un proyecto de pago.
- Selección de organización Vercel.
- Selección o creación de proyecto Supabase.
- Compra o configuración de dominio.
- Aprobación de migración destructiva.
- Cambio de visibilidad del repositorio.
- Eliminación de recursos.
- Activación de servicios con costo.
- Decisiones legales o médicas.

Cuando te detengas:

1. Explica el bloqueo en una línea.
2. Da el comando exacto o la pantalla.
3. No pidas que peguen el secreto en el chat.
4. Continúa inmediatamente después de la autenticación.

## 77. GitHub

Comprobar:

```bash
gh auth status
gh repo view R0N4L2/herbal-vapor-lab
```

Si el remoto no coincide:

- No reemplazarlo silenciosamente.
- Informar.
- Añadir el remoto correcto solo con seguridad.

## 78. Vercel

Comprobar:

```bash
npx vercel whoami
```

Si no hay sesión:

```bash
npx vercel login
```

Luego:

```bash
npx vercel link
npx vercel env pull .env.local
```

No confirmar producción hasta verificar el dominio de Vercel y el estado del deployment.

## 79. Supabase

Comprobar:

```bash
pnpm dlx supabase --version
pnpm dlx supabase status
```

Login y link, si procede:

```bash
pnpm dlx supabase login
pnpm dlx supabase link --project-ref <PROJECT_REF>
```

Local:

```bash
pnpm dlx supabase start
pnpm dlx supabase db reset
pnpm dlx supabase gen types typescript --local > lib/supabase/database.types.ts
```

Nunca guardar access token en Git.

---

# PARTE XIII — CONTENIDO INICIAL

## 80. Estrategia de seed

No sembrar decenas de afirmaciones no verificadas.

Crear un seed pequeño que demuestre el modelo:

- Romero.
- Orégano.
- Manzanilla.
- Lavanda.
- Menta piperita.
- Melisa/toronjil.
- Eucalipto.
- Tomillo.
- Té verde.
- Ginseng.

Reglas:

- Identidad botánica y nombres pueden cargarse si se verifican.
- Descripciones deben ser neutrales.
- Usos tradicionales deben citar monografías o fuentes aceptables.
- Afirmaciones clínicas deben permanecer en borrador hasta revisión.
- Registros de vaporización deben estar vacíos o en borrador.
- No afirmar temperaturas terapéuticas.
- No afirmar beneficios respiratorios de inhalación sin evidencia específica.
- Incluir al menos una alerta de seguridad donde corresponda.
- Cada fuente debe tener enlace canónico y metadatos.

Si no puedes verificar un dato, usa placeholders editoriales solo en admin, nunca en la vista pública.

## 81. Copia inicial

### Hero

“Conoce las plantas más allá de los mitos.”

### Subtítulo

“Explora usos tradicionales, evidencia disponible, compuestos y precauciones en una biblioteca herbal diseñada para informar, no para prescribir.”

### Pilares

- **Botánica clara:** nombres, partes y preparaciones.
- **Evidencia visible:** conoce qué se estudió y con qué certeza.
- **Seguridad primero:** interacciones, límites y poblaciones de riesgo.

### CTA

“Explorar plantas”

No usar “sana”, “cura”, “trata”, “desintoxica”, “fortalece defensas” o “mejora” como promesa.

---

# PARTE XIV — DOCUMENTACIÓN OBLIGATORIA

## 82. README.md

Debe incluir:

- Qué es el proyecto.
- Estado.
- Captura.
- Stack.
- Requisitos.
- Instalación.
- Variables.
- Supabase local.
- Tests.
- Despliegue.
- Política de contenido.
- Contribución.
- Licencia.
- Aviso médico.

## 83. ARCHITECTURE.md

- Contexto.
- Diagrama Mermaid.
- Componentes.
- Flujo de datos.
- Límites de confianza.
- Decisiones.
- ADRs.
- Escalabilidad.
- Módulos pospuestos.

## 84. DATABASE.md

- ERD Mermaid.
- Tablas.
- RLS.
- Migraciones.
- Seed.
- Backups.
- Generación de tipos.
- Política de cambios.

## 85. CONTENT_POLICY.md

- Jerarquía de fuentes.
- Redacción.
- Afirmaciones prohibidas.
- Inhalación.
- Conflictos.
- Retractaciones.
- Frecuencia de revisión.
- Correcciones.
- Uso de IA.

## 86. EVIDENCE_MODEL.md

- Taxonomía.
- Certeza.
- Resultados.
- Ejemplos.
- Diferencia entre compuesto y planta.
- Diferencia entre vías.
- Reglas de publicación.

## 87. SECURITY.md

- Threat model.
- RLS.
- Secrets.
- Auth.
- Reporte de vulnerabilidades.
- Dependencias.
- Incidentes.
- Backups.

## 88. DEPLOYMENT.md

- GitHub.
- Vercel.
- Supabase.
- Variables.
- Preview.
- Producción.
- Migraciones.
- Rollback.
- Dominio.
- Troubleshooting.

## 89. EDITORIAL_WORKFLOW.md

- Roles.
- Estados.
- Revisión.
- Publicación.
- Retirada.
- Conflicto de interés.
- Auditoría.
- Caducidad.
- Reportes.

## 90. ROADMAP.md

- MVP.
- Post-MVP.
- IA responsable.
- API.
- i18n.
- App móvil.
- Grafo.
- Comunidad.
- Monetización responsable, si alguna vez se evalúa.

---

# PARTE XV — ROADMAP DE IMPLEMENTACIÓN

## 91. Sprint 0 — Auditoría y bootstrap

Objetivos:

- Inspeccionar repositorio.
- Preservar contenido.
- Confirmar remoto.
- Crear rama.
- Definir stack según versiones estables.
- Inicializar Next.js si está vacío.
- Crear documentación base.
- Configurar calidad.
- Crear `.env.example`.
- Crear ADR inicial.
- Ejecutar build.
- Primer commit.

Criterio de salida:

- Proyecto ejecuta localmente.
- CI básico definido.
- No hay secretos.
- README permite levantarlo.

## 92. Sprint 1 — Diseño y páginas públicas

- Sistema visual.
- Layout.
- Landing.
- Catálogos con datos mock tipados o seed local.
- Plant detail.
- Evidencia.
- Seguridad.
- Metodología.
- Glosario.
- Legal.
- Responsive.
- Accesibilidad inicial.
- SEO.

Criterio:

- Navegación pública completa.
- Contenido seguro.
- Lighthouse razonable.

## 93. Sprint 2 — Supabase y modelo editorial

- Supabase local.
- Migraciones.
- RLS.
- Tipos.
- Seed.
- Auth.
- Roles.
- Admin.
- CRUD.
- Auditoría.
- Tests RLS.

Criterio:

- Publicado vs borrador funciona.
- Usuario no autorizado no accede.
- Admin puede crear borrador.

## 94. Sprint 3 — Evidencia y seguridad

- Fuentes.
- Afirmaciones.
- Reviews.
- Safety warnings.
- Interactions.
- Reglas de publicación.
- Checker de contenido.
- UI de niveles.
- Reporte de errores.

Criterio:

- No se publica afirmación sin fuente.
- No se publica inhalación incompleta.
- La ficha comunica incertidumbre.

## 95. Sprint 4 — Búsqueda, cuentas y refinamiento

- Full-text.
- Filtros.
- Favoritos.
- Colecciones.
- Performance.
- Accesibilidad.
- E2E.
- Analytics opcional.

## 96. Sprint 5 — GitHub, CI/CD y producción

- Workflows.
- Dependabot.
- CodeQL.
- Branch protection.
- Vercel.
- Supabase producción.
- Variables.
- Migraciones.
- Smoke tests.
- Documentación.
- URL pública.

Criterio:

- PR genera preview.
- `main` genera producción.
- CI verde.
- DB segura.
- URL verificada.

## 97. Sprint 6 — Contenido revisado

- Cargar fichas iniciales.
- Verificar fuentes.
- Revisar lenguaje.
- Publicar contenido suficiente para el lanzamiento.
- No rellenar por volumen.

## 98. Sprint 7 — IA responsable, opcional

Solo después del MVP:

- pgvector.
- Ingesta de fragmentos aprobados.
- RAG con citas.
- Guardrails.
- Evaluación.
- No consejo personalizado.
- Logs sin datos médicos.
- Feature flag.
- Beta cerrada.

---

# PARTE XVI — CRITERIOS DE ACEPTACIÓN FINAL

## 99. Producto

- Landing terminada.
- Catálogo y fichas.
- Evidencia y seguridad.
- Metodología.
- Glosario.
- Legal.
- Admin.
- Auth.
- Favoritos.
- Búsqueda.
- Responsive.
- Dark mode.

## 100. Editorial

- Todo contenido publicado tiene fuente.
- Uso tradicional está etiquetado.
- Evidencia preclínica no se presenta como clínica.
- Se separan vías.
- Existe fecha de revisión.
- Existe aviso médico.
- No hay recomendaciones inhaladas no verificadas.
- No hay promesas de cura.

## 101. Seguridad

- RLS activo.
- Secret key no expuesta.
- Inputs validados.
- Admin protegido.
- Rate limiting en formularios.
- Dependencias revisadas.
- CodeQL.
- No secretos en historial.

## 102. Calidad

- Lint verde.
- Typecheck verde.
- Tests verdes.
- Build verde.
- E2E crítico verde.
- CI verde.
- Sin warnings relevantes.
- Sin errores críticos de consola.

## 103. Despliegue

- Repositorio actualizado.
- Commits claros.
- Push completado.
- PRs o historial documentado.
- Vercel conectado.
- Supabase conectado.
- Producción desplegada.
- URL responde.
- Smoke tests.
- README muestra URL.
- DEPLOYMENT.md actualizado.
- No afirmar éxito sin verificación.

---

# PARTE XVII — PROTOCOLO DE EJECUCIÓN AUTÓNOMA

## 104. Antes de empezar

1. Lee completamente `CLAUDE.md`.
2. Inspecciona repositorio.
3. Resume estado.
4. Identifica bloqueos.
5. Crea plan en `docs/IMPLEMENTATION_PLAN.md`.
6. Crea o actualiza issues/milestones si `gh` tiene permisos.
7. Comienza por Sprint 0.

No hagas preguntas generales que puedas resolver inspeccionando el entorno.

## 105. Durante el trabajo

- Mantén una lista de tareas.
- Ejecuta tests después de bloques coherentes.
- Corrige errores antes de continuar.
- Haz commits atómicos.
- Push de cada etapa estable.
- Usa PRs.
- Actualiza documentación junto con el código.
- No dejes TODOs críticos sin issue.
- No generes miles de líneas en un solo archivo.
- No ocultes fallos.
- Si una dependencia no funciona, busca solución oficial.
- No rebajes controles para “hacer pasar” CI.

## 106. Manejo de errores

Cuando algo falle:

1. Captura el error.
2. Determina causa.
3. Consulta documentación oficial.
4. Corrige.
5. Añade prueba si aplica.
6. Reejecuta.
7. Documenta si puede repetirse.

No repitas el mismo comando indefinidamente.

## 107. Cambios destructivos

Antes de:

- Borrar tablas.
- Borrar datos.
- Eliminar ramas.
- Cambiar remoto.
- Hacer producción pública.
- Cambiar dominio.
- Generar costo.

Detente y solicita aprobación específica.

## 108. Cierre de cada sprint

Entregar:

- Resumen.
- Commits.
- Archivos principales.
- Tests.
- Estado CI.
- URL de preview.
- Riesgos.
- Pendientes.
- Próximo paso.

## 109. Cierre final

Entregar un informe con:

```text
Repositorio:
Rama:
Commit de producción:
Pull request:
CI:
Vercel project:
Production URL:
Supabase project ref:
Migraciones aplicadas:
Smoke tests:
Datos seed:
Credenciales pendientes:
Riesgos conocidos:
Rollback:
Próximos pasos:
```

No incluir valores secretos.

---

# PARTE XVIII — COMANDOS DE CLAUDE CODE Y AUTOMATIZACIÓN

## 110. Archivo AGENTS.md

Crea `AGENTS.md` como resumen compatible con otras herramientas:

- Stack.
- Scripts.
- Arquitectura.
- Reglas médicas.
- RLS.
- Testing.
- Git.
- No secretos.
- No recomendaciones.

## 111. Comandos personalizados

Crear, si Claude Code soporta el mecanismo vigente:

- `/project-status`
- `/run-quality`
- `/check-content`
- `/prepare-pr`
- `/deploy-preview`
- `/verify-production`

Cada comando debe ejecutar pasos seguros y explicar el resultado.

## 112. Hooks

Solo si son confiables:

- Formatear archivos modificados.
- Impedir commit si detecta secretos.
- Ejecutar `typecheck` y tests focalizados.
- No ejecutar despliegues automáticos desde hooks locales.
- No ocultar comandos destructivos.

---

# PARTE XIX — DECISIONES DE ARQUITECTURA

## ADR-001 — Modular monolith

Se elige Next.js + Supabase sin microservicios.

## ADR-002 — SQL migrations as source of truth

Se evita duplicación ORM/esquema en MVP.

## ADR-003 — Evidence-first content model

La unidad principal no es “beneficio”, sino afirmación + preparación + vía + fuente + nivel de evidencia.

## ADR-004 — Inhalation quarantine

Los datos de vaporización no se publican por defecto.

## ADR-005 — Vercel Git integration

Se prefiere integración nativa frente a workflow duplicado.

## ADR-006 — Production DB approval

Migraciones productivas protegidas por environment/revisión.

## ADR-007 — No AI in public MVP

La IA se pospone hasta contar con datos aprobados, evaluación y guardrails.

---

# PARTE XX — DEFINICIÓN DE HECHO

Una tarea está “Done” solo si:

- Código completo.
- Tipado.
- Tests.
- Documentación.
- Accesibilidad.
- Seguridad.
- Contenido responsable.
- CI verde.
- Commit y push.
- PR o merge.
- Despliegue verificado si corresponde.
- Sin secretos.
- Sin afirmaciones falsas.

---

# INSTRUCCIÓN FINAL

Empieza inspeccionando el repositorio `R0N4L2/herbal-vapor-lab`. Preserva todo trabajo existente. Implementa el proyecto por sprints, comenzando con una versión pública segura y profesional. Usa versiones estables actuales, documentación oficial y el mínimo de complejidad necesario.

Tu objetivo no es producir una maqueta, sino dejar un producto real:

- ejecutable localmente;
- probado;
- documentado;
- con base de datos;
- seguro;
- subido a GitHub;
- integrado con CI/CD;
- desplegado en una URL pública;
- y editorialmente responsable.

Cuando la autenticación o una decisión irreversible requiera al propietario, detente únicamente en ese punto, indica el paso exacto y continúa después. Nunca solicites que un secreto sea pegado en el chat. Nunca declares que el push, la migración o el despliegue tuvieron éxito sin comprobarlo.
