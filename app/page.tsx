import Link from 'next/link';

const pillars = [
  {
    title: 'Botánica clara',
    description: 'Nombres, partes utilizadas y preparaciones de cada planta.',
  },
  {
    title: 'Evidencia visible',
    description: 'Conoce qué se estudió, con qué diseño y con qué nivel de certeza.',
  },
  {
    title: 'Seguridad primero',
    description: 'Interacciones, contraindicaciones y poblaciones de riesgo, sin rodeos.',
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <section aria-labelledby="hero-heading" className="text-center">
        <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Conoce las plantas más allá de los mitos.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Explora usos tradicionales, evidencia disponible, compuestos y precauciones en una
          biblioteca herbal diseñada para informar, no para prescribir.
        </p>
        <div className="mt-8">
          <Link
            href="/plantas"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Explorar plantas
          </Link>
        </div>
      </section>

      <section
        aria-label="Pilares del proyecto"
        className="mt-20 grid gap-8 sm:grid-cols-3"
      >
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-lg border border-border p-6">
            <h2 className="font-semibold">{pillar.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-lg border border-border bg-muted p-6 text-center">
        <p className="font-medium">Natural no siempre significa inocuo.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Cada ficha distingue tradición, evidencia preclínica y evidencia clínica, con fuentes
          verificables y fecha de revisión.
        </p>
      </section>

      <footer className="mt-20 border-t border-border pt-8 text-center text-xs text-muted-foreground">
        <p>
          Este sitio tiene fines informativos y educativos. No sustituye el diagnóstico, consejo
          o tratamiento de un profesional de salud cualificado.{' '}
          <Link href="/aviso-medico" className="underline underline-offset-2">
            Leer aviso médico completo
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
