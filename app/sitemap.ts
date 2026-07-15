import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const staticRoutes = [
  '',
  '/plantas',
  '/compuestos',
  '/evidencia',
  '/seguridad',
  '/seguridad/inhalacion',
  '/metodologia',
  '/glosario',
  '/acerca',
  '/contacto',
  '/privacidad',
  '/terminos',
  '/aviso-medico',
  '/aceites',
  '/concentracion',
  '/relajacion',
  '/respiratorio',
  '/digestivo',
  '/cannabis',
  '/combinaciones',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
