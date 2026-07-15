import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-10 text-xs text-muted-foreground">
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
        <p className="mt-4">© {new Date().getFullYear()} VAPORA — Herbal Experience.</p>
      </div>
    </footer>
  );
}
