import Link from 'next/link';
import type { Metadata } from 'next';
import { herbs } from '@/lib/vaporizacion/herbs-data';
import { headingFont } from '@/lib/vaporizacion/fonts';
import { formatCompoundTemp, lookupCompoundTemp, parseCompounds } from '@/lib/vaporizacion/compound-temps';

export const metadata: Metadata = {
  title: 'Vaporización de hierbas',
  description:
    'Hierbas tradicionalmente asociadas a la aromaterapia y la vaporización, organizadas por efecto terapéutico, con rangos de temperatura de referencia y un recorrido por la historia de liberar compuestos aromáticos con calor.',
};

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <section aria-labelledby="vapor-heading" className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Vaporización · Hierbas y aromaterapia
        </p>
        <h1
          id="vapor-heading"
          className={`${headingFont.className} mt-3 text-4xl font-bold tracking-tight text-primary sm:text-6xl`}
        >
          Hierbas y vaporización
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Un recorrido por plantas asociadas a la aromaterapia y la vaporización, organizadas por
          efecto terapéutico, y por la larga historia humana de liberar compuestos aromáticos con
          calor.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
      </section>

      <section className="mt-10 rounded-lg border border-border bg-muted p-6 text-sm text-muted-foreground">
        <p>
          Este contenido tiene fines informativos y educativos. No sustituye el diagnóstico,
          consejo o tratamiento de un profesional de salud cualificado. Los rangos de temperatura
          son valores de referencia (algunos tomados de una guía de referencia del proyecto, otros
          de fuentes comunitarias no verificadas clínicamente, según se indica en cada ficha) y no
          constituyen una recomendación médica ni una afirmación de eficacia o seguridad por vía
          inhalada.{' '}
          <Link href="/aviso-medico" className="underline underline-offset-2">
            Leer aviso médico completo
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="aceites-heading" className="mt-16">
        <h2
          id="aceites-heading"
          className={`${headingFont.className} text-2xl font-bold tracking-tight text-primary`}
        >
          Aceites esenciales y temperaturas de referencia
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Compuesto químico real presente en cada hierba, su temperatura de evaporación de
          referencia, la planta de origen y la propiedad terapéutica principal documentada en la
          tradición o en estudios preliminares. Los valores de temperatura provienen de fuentes
          químicas públicas (PubChem, CRC Handbook, fichas de seguridad de proveedores). Cuando el
          compuesto listado es una clase genérica (por ejemplo, flavonoides o mucílagos) o no
          cuenta con un punto de evaporación único y consistente entre fuentes, se indica con un
          guion en vez de inventar un valor.
        </p>
        <div className="mt-6 overflow-x-auto">
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
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          * El acetato de alfa-terpinilo no tiene un punto de ebullición único y consistente entre
          fuentes químicas (se citan valores entre ≈220°C y ≈240°C); se muestra un valor
          aproximado. La cafeína no hierve a presión atmosférica: se sublima (pasa de sólido a
          vapor) a la temperatura indicada.
        </p>
      </section>

      <section aria-labelledby="historia-heading" className="mt-20">
        <h2
          id="historia-heading"
          className={`${headingFont.className} text-2xl font-bold tracking-tight text-primary`}
        >
          Una historia larga antes que una tendencia
        </h2>
        <div className="mt-6 space-y-4 text-sm text-muted-foreground">
          <p>
            Calentar plantas para liberar sus compuestos aromáticos es una práctica que aparece,
            de forma independiente, en culturas muy distintas y muy anteriores a cualquier
            dispositivo electrónico. En Mesopotamia y Egipto se quemaban resinas e hierbas con
            fines rituales y medicinales miles de años atrás. En Mesoamérica, el temazcal —una
            construcción cerrada donde se vierte agua sobre piedras calientes, a veces con hierbas
            aromáticas— sigue practicándose hoy como parte de tradiciones de limpieza y comunidad.
          </p>
          <p>
            Prácticas similares surgieron en paralelo en otras regiones: la sauna finlandesa, donde
            el vapor (löyly) se genera vertiendo agua sobre piedras calientes, a veces con hojas de
            abedul; el hammam del mundo islámico y mediterráneo, construido alrededor del vapor de
            agua como espacio social e higiénico; y el mushi-buro japonés, un baño de vapor
            antecesor del baño de inmersión más conocido hoy. En casi todos los casos, el vapor de
            agua —con o sin plantas— fue durante siglos la tecnología disponible para calentar sin
            quemar directamente el material vegetal.
          </p>
          <p>
            Los vaporizadores modernos, ya sean de aceites esenciales o de otros materiales
            vegetales, son una reinterpretación reciente de esa misma idea: aplicar calor
            controlado para liberar los compuestos volátiles de una planta. La química detrás
            —terpenos, fenoles y otros aceites esenciales— es hoy objeto de estudio en campos como
            la farmacognosia, pero la investigación sobre qué ocurre específicamente cuando estos
            compuestos se inhalan sigue siendo incipiente. Este sitio no evalúa aquí la seguridad
            relativa de distintas vías de administración; ese análisis, cuando exista, pasará por
            el modelo de evidencia propio del proyecto.
          </p>
        </div>
      </section>
    </main>
  );
}
