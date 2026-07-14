import Link from 'next/link';
import type { Metadata } from 'next';
import { HerbShowcaseCard, type HerbShowcaseEntry } from '@/components/herb-showcase-card';

export const metadata: Metadata = {
  title: 'Vaporización de hierbas',
  description:
    'Hierbas tradicionalmente asociadas a la aromaterapia y la vaporización, y un recorrido por la historia de liberar compuestos aromáticos con calor.',
};

const herbs: HerbShowcaseEntry[] = [
  {
    slug: 'manzanilla',
    commonName: 'Manzanilla',
    botanicalName: 'Matricaria recutita',
    image: '/images/herbs/manzanilla.jpg',
    imageAlt: 'Ilustración botánica de Matricaria recutita (manzanilla), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    traditionalUse:
      'Una de las plantas más usadas en infusión y aromaterapia, con una reputación tradicional de favorecer la relajación y el descanso.',
    description:
      'En difusores y vaporizadores se emplea para liberar su aroma dulce y ligeramente afrutado. Algunos de sus componentes, como la apigenina, se han estudiado en ensayos pequeños relacionados con ansiedad leve y calidad del sueño, con resultados mixtos y evidencia todavía limitada. No hay evidencia clínica específica sobre sus efectos por vía inhalada.',
    attribution: 'Franz Eugen Köhler, Köhler’s Medizinal-Pflanzen (1897) · dominio público',
  },
  {
    slug: 'menta',
    commonName: 'Menta',
    botanicalName: 'Mentha × piperita',
    image: '/images/herbs/menta.jpg',
    imageAlt: 'Ilustración botánica de Mentha × piperita (menta), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    traditionalUse:
      'Tradicionalmente asociada a una sensación de frescura, la menta se usa desde hace siglos en bálsamos, infusiones e inhalantes.',
    description:
      'Su compuesto característico, el mentol, produce una sensación fría al contacto con receptores de la piel y las mucosas, lo que puede generar una percepción subjetiva de mayor amplitud respiratoria sin que esto implique necesariamente un cambio medible en el flujo de aire. La investigación sobre esta sensación es preliminar y no constituye evidencia de eficacia terapéutica.',
    attribution: 'Franz Eugen Köhler, Köhler’s Medizinal-Pflanzen (1897) · dominio público',
  },
  {
    slug: 'lavanda',
    commonName: 'Lavanda',
    botanicalName: 'Lavandula angustifolia',
    image: '/images/herbs/lavanda.jpg',
    imageAlt: 'Ilustración botánica de Lavandula angustifolia (lavanda), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    traditionalUse:
      'Una de las plantas con mayor tradición en aromaterapia, empleada históricamente para acompañar rutinas de descanso y relajación.',
    description:
      'Es también una de las plantas aromáticas con más estudios pequeños publicados sobre sueño y ansiedad leve, aunque de calidad y tamaño variables. La evidencia disponible se considera preliminar y no respalda afirmaciones de tratamiento; se sigue investigando su mecanismo y la vía por la que sus compuestos podrían actuar.',
    attribution: 'Franz Eugen Köhler, Köhler’s Medizinal-Pflanzen (1897) · dominio público',
  },
  {
    slug: 'romero',
    commonName: 'Romero',
    botanicalName: 'Rosmarinus officinalis',
    image: '/images/herbs/romero.jpg',
    imageAlt: 'Ilustración botánica de Rosmarinus officinalis (romero), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    traditionalUse:
      'El romero carga una larga tradición popular asociada a la memoria y la claridad mental, presente en refranes de distintas culturas.',
    description:
      'El interés científico reciente se ha centrado en el 1,8-cineol, uno de sus compuestos volátiles, explorado en estudios preliminares sobre estado de alerta y estado de ánimo. Los resultados existentes provienen mayormente de muestras pequeñas y no permiten afirmar un efecto establecido, especialmente por vía inhalada.',
    attribution: 'Franz Eugen Köhler, Köhler’s Medizinal-Pflanzen (1897) · dominio público',
  },
  {
    slug: 'eucalipto',
    commonName: 'Eucalipto',
    botanicalName: 'Eucalyptus globulus',
    image: '/images/herbs/eucalipto.jpg',
    imageAlt: 'Ilustración botánica de Eucalyptus globulus (eucalipto), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    traditionalUse:
      'Sus hojas forman parte de remedios caseros de larga data para acompañar el malestar respiratorio, tradicionalmente mediante vahos de agua caliente.',
    description:
      'El eucaliptol (1,8-cineol) es su compuesto más estudiado, con investigación clínica preliminar principalmente sobre formas orales. La vaporización o inhalación directa de sus compuestos no ha pasado todavía por la revisión de evidencia de este proyecto: aquí no se afirma que sea una vía más segura o más eficaz que otras, y no se dan indicaciones de temperatura ni de uso.',
    attribution: 'Franz Eugen Köhler, Köhler’s Medizinal-Pflanzen (1897) · dominio público',
  },
];

export default function VaporizacionPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <section aria-labelledby="vapor-heading" className="text-center">
        <h1 id="vapor-heading" className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Hierbas y vaporización
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Un recorrido por algunas de las plantas más asociadas a la aromaterapia y la
          vaporización, y por la larga historia humana de liberar compuestos aromáticos con calor.
        </p>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-muted p-6 text-sm text-muted-foreground">
        <p>
          Este contenido tiene fines informativos y educativos. No sustituye el diagnóstico,
          consejo o tratamiento de un profesional de salud cualificado, y no recomienda dosis,
          temperaturas ni una vía de administración sobre otra.{' '}
          <Link href="/aviso-medico" className="underline underline-offset-2">
            Leer aviso médico completo
          </Link>
          .
        </p>
      </section>

      <section aria-label="Hierbas asociadas a la vaporización" className="mt-16 space-y-8">
        {herbs.map((herb) => (
          <HerbShowcaseCard key={herb.slug} herb={herb} />
        ))}
      </section>

      <section aria-labelledby="historia-heading" className="mt-20">
        <h2 id="historia-heading" className="text-2xl font-semibold tracking-tight">
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
