import Link from 'next/link';
import type { Metadata } from 'next';
import { CATEGORY_META, CATEGORY_ORDER, getHerbsByCategory } from '@/lib/vaporizacion/herbs-data';
import { headingFont } from '@/lib/vaporizacion/fonts';

export const metadata: Metadata = {
  title: 'Vaporización de hierbas',
  description:
    'Hierbas tradicionalmente asociadas a la aromaterapia y la vaporización, organizadas por efecto terapéutico, con rangos de temperatura de referencia y un recorrido por la historia de liberar compuestos aromáticos con calor.',
};

export default function VaporizacionPage() {
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

      <section aria-label="Categorías" className="mt-16 grid gap-6 sm:grid-cols-2">
        {CATEGORY_ORDER.map((slug) => {
          const meta = CATEGORY_META[slug];
          const count = getHerbsByCategory(slug).length;
          return (
            <Link
              key={slug}
              href={`/vaporizacion/${slug}`}
              className="rounded-lg border border-border p-6 transition-colors hover:border-primary/40 hover:bg-muted"
            >
              <h2 className={`${headingFont.className} text-lg font-semibold text-primary`}>
                {meta.label}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{meta.tagline}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {count} {count === 1 ? 'hierba' : 'hierbas'}
              </p>
            </Link>
          );
        })}
        <Link
          href="/vaporizacion/combinaciones"
          className="rounded-lg border border-border p-6 transition-colors hover:border-primary/40 hover:bg-muted"
        >
          <h2 className={`${headingFont.className} text-lg font-semibold text-primary`}>
            Combinaciones
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Combinaciones de dos hierbas y su temperatura sugerida.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">5 combinaciones</p>
        </Link>
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
