import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <p className="mt-4 text-muted-foreground">
        La página que buscas no existe o fue movida.
      </p>
      <Link href="/" className="mt-6 underline underline-offset-2">
        Volver al inicio
      </Link>
    </main>
  );
}
