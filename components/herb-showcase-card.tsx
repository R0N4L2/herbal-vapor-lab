import Image from 'next/image';
import { headingFont } from '@/lib/vaporizacion/fonts';

export type HerbCategory = 'concentracion' | 'relajacion' | 'respiratorio' | 'digestivo';

export type HerbVaporTemps = {
  min: number;
  optimal: number;
  max: number;
};

export type HerbDataSource = 'guia' | 'comunidad';

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
  category?: HerbCategory;
  temps?: HerbVaporTemps;
  compounds?: string;
  mainAction?: string;
  precautions?: string;
  dataSource?: HerbDataSource;
  legalNote?: string;
};

const certaintyLabel: Record<HerbShowcaseEntry['certainty'], string> = {
  traditional: 'Uso tradicional — sin revisión de evidencia clínica',
  low: 'Evidencia preliminar — sin revisión de evidencia clínica',
};

const certaintyClass: Record<HerbShowcaseEntry['certainty'], string> = {
  traditional: 'bg-evidence-traditional/10 text-evidence-traditional',
  low: 'bg-evidence-low/10 text-evidence-low',
};

const dataSourceLabel: Record<HerbDataSource, string> = {
  guia: 'Temperaturas de la guía de referencia del proyecto',
  comunidad: 'Temperaturas de referencia comunitaria, no verificadas por el proyecto',
};

export function HerbShowcaseCard({ herb }: { herb: HerbShowcaseEntry }) {
  return (
    <article
      aria-labelledby={`herb-${herb.slug}-heading`}
      className="grid gap-6 border-b border-border pb-10 last:border-b-0 last:pb-0 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start"
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
        <h3
          id={`herb-${herb.slug}-heading`}
          className={`${headingFont.className} text-xl font-bold text-primary`}
        >
          {herb.commonName}{' '}
          <span className="font-normal italic text-muted-foreground">{herb.botanicalName}</span>
        </h3>
        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${certaintyClass[herb.certainty]}`}
        >
          {certaintyLabel[herb.certainty]}
        </span>
        <p className="mt-3 text-sm text-muted-foreground">{herb.traditionalUse}</p>
        <p className="mt-3 text-sm text-muted-foreground">{herb.description}</p>

        {herb.temps && (
          <div className="mt-5 border-l-2 border-primary/40 pl-4 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="font-medium">Temperatura de vaporización</span>
              <span className="font-mono text-xs text-muted-foreground">
                {herb.temps.min}°C – {herb.temps.optimal}°C (óptima) – {herb.temps.max}°C
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {herb.compounds && (
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">Principales compuestos</dt>
                  <dd>{herb.compounds}</dd>
                </div>
              )}
              {herb.mainAction && (
                <div>
                  <dt className="text-xs font-medium text-muted-foreground">Acción principal</dt>
                  <dd>{herb.mainAction}</dd>
                </div>
              )}
              {herb.precautions && (
                <div className="sm:col-span-2">
                  <dt className="text-xs font-medium text-muted-foreground">Precauciones</dt>
                  <dd>{herb.precautions}</dd>
                </div>
              )}
            </dl>
            {herb.legalNote && (
              <p className="mt-3 rounded-sm bg-risk-caution/10 px-3 py-2 text-xs text-risk-caution">
                {herb.legalNote}
              </p>
            )}
            {herb.dataSource && (
              <p className="mt-3 text-xs italic text-muted-foreground">{dataSourceLabel[herb.dataSource]}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
