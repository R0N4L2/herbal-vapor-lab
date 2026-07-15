import Link from 'next/link';
import type { Metadata } from 'next';
import { Droplet } from 'lucide-react';
import { herbs } from '@/lib/vaporizacion/herbs-data';
import { headingFont } from '@/lib/vaporizacion/fonts';
import { formatCompoundTemp, lookupCompoundTemp, parseCompounds } from '@/lib/vaporizacion/compound-temps';

export const metadata: Metadata = {
  title: 'Aceites esenciales y temperaturas de referencia',
  description:
    'Compuesto químico real presente en cada hierba, su temperatura de evaporación de referencia, la planta de origen y la propiedad terapéutica principal documentada.',
};

export default function AceitesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Link
        href="/"
        className="text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
      >
        ← Volver al inicio
      </Link>

      <section aria-labelledby="aceites-heading" className="mt-6 text-center">
        <h1
          id="aceites-heading"
          className={`${headingFont.className} flex items-center justify-center gap-3 text-4xl font-bold tracking-tight text-primary sm:text-6xl`}
        >
          <Droplet aria-hidden className="h-9 w-9 shrink-0 sm:h-12 sm:w-12" />
          Aceites esenciales y temperaturas de referencia
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Compuesto químico real presente en cada hierba, su temperatura de evaporación de
          referencia, la planta de origen y la propiedad terapéutica principal documentada en la
          tradición o en estudios preliminares. Los valores de temperatura provienen de fuentes
          químicas públicas (PubChem, CRC Handbook, fichas de seguridad de proveedores). Cuando el
          compuesto listado es una clase genérica (por ejemplo, flavonoides o mucílagos) o no
          cuenta con un punto de evaporación único y consistente entre fuentes, se indica con un
          guion en vez de inventar un valor.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
      </section>

      <section aria-label="Tabla de aceites esenciales" className="mt-16 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-3 pr-4 font-medium">Compuesto</th>
              <th className="py-3 pr-4 font-medium">Temp. de evaporación</th>
              <th className="py-3 pr-4 font-medium">Planta de origen</th>
              <th className="py-3 font-medium">Propiedades terapéuticas</th>
            </tr>
          </thead>
          <tbody>
            {herbs
              .filter((herb) => herb.compounds)
              .flatMap((herb) =>
                parseCompounds(herb.compounds!).map((compound) => {
                  const compoundTemp = lookupCompoundTemp(compound);
                  return (
                    <tr key={`${herb.slug}-${compound}`} className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">{compound}</td>
                      <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">
                        {compoundTemp ? (
                          formatCompoundTemp(compoundTemp)
                        ) : (
                          <span title="Clase de compuesto genérica o sin punto de evaporación único documentado en fuentes químicas.">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        {herb.commonName} <span className="italic">({herb.botanicalName})</span>
                      </td>
                      <td className="py-3 text-muted-foreground">{herb.mainAction}</td>
                    </tr>
                  );
                }),
              )}
          </tbody>
        </table>
      </section>
      <p className="mt-3 text-xs text-muted-foreground">
        * El acetato de alfa-terpinilo no tiene un punto de ebullición único y consistente entre
        fuentes químicas (se citan valores entre ≈220°C y ≈240°C); se muestra un valor
        aproximado. La cafeína no hierve a presión atmosférica: se sublima (pasa de sólido a
        vapor) a la temperatura indicada.
      </p>
    </main>
  );
}
