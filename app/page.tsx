import type { Metadata } from 'next';
import { headingFont } from '@/lib/vaporizacion/fonts';

export const metadata: Metadata = {
  title: { absolute: 'VAPORA — Herbal Experience' },
  description:
    'Hierbas tradicionalmente asociadas a la aromaterapia y la vaporización, organizadas por efecto terapéutico, con rangos de temperatura de referencia y un recorrido por la historia de liberar compuestos aromáticos con calor.',
};

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <section aria-labelledby="vapor-heading" className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          VAPORA · Vaporización herbal y aromaterapia
        </p>
        <h1
          id="vapor-heading"
          className={`${headingFont.className} mt-3 text-4xl font-bold tracking-tight text-primary sm:text-6xl`}
        >
          Bienestar natural, hierba por hierba
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          En VAPORA acercamos la sabiduría herbal de siempre a tu día a día: hierbas organizadas
          por objetivo —concentración, relajación, digestión, respiración—, temperaturas de
          referencia y toda la información que necesitas para empezar con criterio. Sin promesas
          vacías: solo tradición, evidencia disponible y mucha curiosidad por las plantas.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
      </section>

      <section aria-labelledby="quienes-somos-heading" className="mt-16">
        <h2
          id="quienes-somos-heading"
          className={`${headingFont.className} text-2xl font-bold tracking-tight text-primary`}
        >
          Quiénes somos
        </h2>
        <div className="mt-6 space-y-6 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold text-primary">Orígenes</h3>
            <p className="mt-2">
              VAPORA nace de una inquietud simple: la vaporización herbal lleva miles de años
              practicándose en culturas de todo el mundo, pero la información disponible en
              español suele estar dispersa, incompleta o mezclar tradición con afirmaciones sin
              respaldo. Quisimos reunir ambas cosas —la sabiduría tradicional y lo que hoy
              realmente se sabe— en un solo lugar, claro y honesto.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Visión</h3>
            <p className="mt-2">
              Ser la referencia en español para entender la vaporización herbal y la
              aromaterapia: un espacio confiable donde la tradición y la evidencia disponible
              conviven sin exagerar ni minimizar lo que cada planta puede ofrecer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Misión</h3>
            <p className="mt-2">
              Mejorar la calidad de vida de quienes nos visitan, entregando conocimiento claro
              sobre los tratamientos terapéuticos asociados a la vaporización herbal, para que
              cada persona pueda explorar esta práctica con información real y tomar decisiones
              más informadas sobre su bienestar.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="historia-heading" className="mt-16">
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
