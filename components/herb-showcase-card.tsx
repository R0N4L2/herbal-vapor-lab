import Image from 'next/image';

export type HerbShowcaseEntry = {
  slug: string;
  commonName: string;
  botanicalName: string;
  image: string;
  imageAlt: string;
  certainty: 'traditional' | 'low';
  description: string;
  traditionalUse: string;
  attribution: string;
};

const certaintyLabel: Record<HerbShowcaseEntry['certainty'], string> = {
  traditional: 'Uso tradicional — sin revisión de evidencia clínica',
  low: 'Evidencia preliminar — sin revisión de evidencia clínica',
};

const certaintyClass: Record<HerbShowcaseEntry['certainty'], string> = {
  traditional: 'bg-evidence-traditional/10 text-evidence-traditional',
  low: 'bg-evidence-low/10 text-evidence-low',
};

export function HerbShowcaseCard({ herb }: { herb: HerbShowcaseEntry }) {
  return (
    <article
      aria-labelledby={`herb-${herb.slug}-heading`}
      className="grid gap-6 rounded-lg border border-border p-6 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start"
    >
      <div className="mx-auto w-full max-w-[220px] sm:mx-0">
        <div className="overflow-hidden rounded-md border border-border bg-muted">
          <Image
            src={herb.image}
            alt={herb.imageAlt}
            width={438}
            height={597}
            className="h-auto w-full object-contain"
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:text-left">
          {herb.attribution}
        </p>
      </div>
      <div>
        <h3 id={`herb-${herb.slug}-heading`} className="text-lg font-semibold">
          {herb.commonName}{' '}
          <span className="font-normal italic text-muted-foreground">{herb.botanicalName}</span>
        </h3>
        <span
          className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${certaintyClass[herb.certainty]}`}
        >
          {certaintyLabel[herb.certainty]}
        </span>
        <p className="mt-3 text-sm text-muted-foreground">{herb.traditionalUse}</p>
        <p className="mt-3 text-sm text-muted-foreground">{herb.description}</p>
      </div>
    </article>
  );
}
