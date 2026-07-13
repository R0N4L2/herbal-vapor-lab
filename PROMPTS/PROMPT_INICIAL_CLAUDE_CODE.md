# Prompt inicial para pegar en Claude Code

Lee íntegramente el archivo `CLAUDE.md` de la raíz y trátalo como la constitución obligatoria del proyecto.

Trabaja sobre el repositorio GitHub `R0N4L2/herbal-vapor-lab`. Tu objetivo es construir y desplegar **Herbal Evidence Lab**, una plataforma pública en español sobre plantas medicinales, usos tradicionales, evidencia, compuestos y seguridad.

## Forma de trabajo

1. Inspecciona el directorio actual, Git, remoto, ramas, historial y archivos.
2. Verifica `gh auth status` y que el remoto corresponda a `R0N4L2/herbal-vapor-lab`.
3. Preserva cualquier trabajo existente. No uses `reset --hard`, `clean -fd`, force push ni reescritura de `main`.
4. Crea una rama de respaldo si el repositorio contiene trabajo previo y vas a reestructurarlo.
5. Crea `docs/IMPLEMENTATION_PLAN.md` con el inventario, decisiones, sprints, riesgos y criterios de aceptación.
6. Implementa en orden los Sprints 0 a 5 definidos en `CLAUDE.md`.
7. Usa versiones estables actuales y documentación oficial.
8. Mantén la arquitectura simple: Next.js App Router + TypeScript estricto + Tailwind/shadcn + Supabase + GitHub Actions + Vercel.
9. Usa migraciones SQL de Supabase como fuente de verdad y genera tipos TypeScript.
10. Implementa RLS y prueba las políticas.
11. Trata el material previo de temperaturas y supuestos efectos de vaporización como ideas no verificadas. No publiques recetas, temperaturas terapéuticas, dosis ni promesas de salud.
12. Crea contenido inicial pequeño y trazable; toda afirmación pública debe tener fuente, vía, preparación, evidencia y estado editorial.
13. Ejecuta lint, format check, typecheck, unit tests, content checks, DB tests, build y E2E crítico.
14. Haz commits Conventional Commits, pequeños y atómicos.
15. Haz push de las ramas y crea PRs con `gh`.
16. Configura CI, Dependabot, CodeQL y protección de `main` cuando los permisos y el plan lo permitan.
17. Integra el repo con Vercel para previews en PR y producción en `main`.
18. Configura Supabase local y producción. Las migraciones de producción deben usar un GitHub Environment protegido o ejecución manual aprobada.
19. No uses secretos de producción en PRs.
20. No declares éxito sin verificar GitHub Actions, Vercel, Supabase y la URL.

## Autenticación

Trabaja de forma autónoma. Detente únicamente cuando sea imprescindible que yo:

- complete un login;
- elija una organización/proyecto;
- cree un recurso con costo;
- introduzca un secreto en mi terminal o dashboard;
- apruebe una migración destructiva;
- configure un dominio.

En ese caso, muestra solo:

1. Qué bloqueo existe.
2. El comando exacto o ruta de interfaz.
3. Qué resultado esperas.

No me pidas pegar tokens en el chat.

## Entrega obligatoria

Antes de terminar, deja:

- `README.md`
- `CLAUDE.md`
- `AGENTS.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- `SECURITY.md`
- documentación de arquitectura, base de datos, política editorial, evidencia, despliegue, operaciones y roadmap;
- migraciones y seed;
- frontend público;
- admin protegido;
- tests;
- GitHub Actions;
- `.env.example`;
- repositorio con commits y push;
- URL pública de producción;
- smoke tests verificados.

Al final entrega este reporte, sin secretos:

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
Contenido publicado:
Credenciales o pasos manuales pendientes:
Riesgos conocidos:
Rollback:
Próximos pasos:
```

Comienza ahora por la auditoría del repositorio y el Sprint 0. No te limites a explicar: realiza las acciones, ejecuta los comandos, corrige los errores y avanza hasta el máximo posible en esta sesión.
