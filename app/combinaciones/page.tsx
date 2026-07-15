import Link from 'next/link';
import type { Metadata } from 'next';
import { combinaciones } from '@/lib/vaporizacion/herbs-data';
import { OBJETIVO_ICONS } from '@/lib/vaporizacion/category-icons';
import { headingFont } from '@/lib/vaporizacion/fonts';

export const metadata: Metadata = {
  title: 'Combinaciones',
  description: 'Combinaciones de hierbas de referencia y su temperatura sugerida.',
};

export default function CombinacionesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Link
        href="/"
        className="text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
      >
        ← Todas las categorías
      </Link>

      <section aria-labelledby="combinaciones-heading" className="mt-6 text-center">
        <h1
          id="combinaciones-heading"
          className={`${headingFont.className} text-4xl font-bold tracking-tight text-primary sm:text-6xl`}
        >
          Combinaciones
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Combinaciones de referencia entre dos hierbas, con una temperatura sugerida única. Son
          referencias de la guía original del proyecto, no una recomendación de eficacia clínica.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
      </section>

      <section aria-label="Tabla de combinaciones" className="mt-16 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-3 pr-4 font-medium">Objetivo</th>
              <th className="py-3 pr-4 font-medium">Combinación</th>
              <th className="py-3 pr-4 font-medium">Temperatura sugerida</th>
              <th className="py-3 pr-4 font-medium">Comentario</th>
              <th className="py-3 font-medium">Cómo se mezclan</th>
            </tr>
          </thead>
          <tbody>
            {combinaciones.map((combo) => {
              const Icon = OBJETIVO_ICONS[combo.objetivo];
              return (
                <tr key={combo.slug} className="border-b border-border/60">
                  <td className="py-3 pr-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      {Icon && <Icon aria-hidden className="h-4 w-4 shrink-0" />}
                      {combo.objetivo}
                    </span>
                  </td>
                  <td className="py-3 pr-4">{combo.nombre}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">
                    {combo.temperatura}°C
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{combo.comentario}</td>
                  <td className="py-3 text-muted-foreground">{combo.comoSeMezclan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}
