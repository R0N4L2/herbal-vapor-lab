# Política de seguridad

## Versiones soportadas

Solo la rama `main` desplegada en producción recibe parches de seguridad durante el desarrollo
activo del MVP.

## Reportar una vulnerabilidad

No abras un issue público. Repórtala de forma privada a través de la sección de Security de
este repositorio en GitHub (Security Advisories) o por el canal de contacto indicado en el
perfil del propietario. Incluye:

- Descripción y pasos para reproducir.
- Impacto estimado.
- Versión o commit afectado.

Nos comprometemos a confirmar recepción y a comunicar un plan de remediación en un plazo
razonable.

## Principios técnicos

- Row Level Security activo en toda tabla expuesta por la Data API de Supabase.
- `SUPABASE_SECRET_KEY` nunca se usa en el navegador ni se commitea.
- Autenticación y autorización centralizadas; no se confía únicamente en ocultar elementos de
  la interfaz.
- Cabeceras de seguridad (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
  `X-Frame-Options`) configuradas en `next.config.mjs`.
- Dependencias auditadas vía Dependabot y CodeQL semanal.
- `GITHUB_TOKEN` con permisos mínimos en workflows (`contents: read` salvo lo estrictamente
  necesario).
- No se ejecuta código de Pull Requests no confiables con acceso a secretos; no se usa
  `pull_request_target` para ejecutar código del PR.
- No se almacena información médica de usuarios ni consultas de síntomas.

Ver `docs/SECURITY.md` para el modelo de amenazas completo.
