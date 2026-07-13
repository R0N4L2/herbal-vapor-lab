# Checklist manual del propietario

Este archivo resume los pocos pasos que normalmente requieren intervención humana.

## 1. Preparación local

- Abrir terminal en la carpeta donde se desea trabajar.
- Ejecutar Claude Code con permisos sobre el repositorio.
- Confirmar que Git, GitHub CLI, Node y pnpm estén disponibles.

## 2. GitHub

```bash
gh auth login
gh auth status
gh repo view R0N4L2/herbal-vapor-lab
```

No entregar a Claude tokens por chat. El login debe hacerse mediante el flujo seguro de GitHub CLI.

## 3. Vercel

Opción recomendada:

- Entrar a Vercel.
- Importar el repositorio `R0N4L2/herbal-vapor-lab`.
- Seleccionar `main` como rama de producción.
- Añadir las variables de Development, Preview y Production.
- Mantener habilitados los Preview Deployments.

CLI, si Claude lo solicita:

```bash
npx vercel login
npx vercel link
```

## 4. Supabase

- Crear proyecto de producción en Supabase.
- Guardar el project ref.
- Crear publishable key y secret key según la interfaz vigente.
- No exponer la secret key.
- Configurar URL y publishable key en Vercel.
- Configurar tokens de CI como GitHub environment secrets.

CLI:

```bash
pnpm dlx supabase login
pnpm dlx supabase link --project-ref <PROJECT_REF>
```

## 5. GitHub Secrets / Environment

Crear un environment llamado `production` y, si el plan lo permite, exigir aprobación.

Secrets habituales:

- `SUPABASE_ACCESS_TOKEN`
- `SUPABASE_PROJECT_REF`
- `SUPABASE_DB_PASSWORD`

Solo si se usa despliegue Vercel por CLI:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 6. Dominio

El dominio es opcional. Primero verificar el subdominio de Vercel. Añadir dominio propio únicamente después de que:

- CI esté verde.
- El sitio cargue.
- Los avisos legales estén publicados.
- La base de datos tenga RLS.
- No existan secretos expuestos.

## 7. Verificación final

- Abrir la URL de producción.
- Probar búsqueda.
- Abrir una ficha.
- Abrir fuentes.
- Revisar móvil.
- Confirmar aviso médico.
- Confirmar que borradores no sean públicos.
- Confirmar que no haya recetas o temperaturas inhaladas sin revisión.
