export type CompoundTemp = {
  celsius: number;
  approx?: boolean;
  sublimation?: boolean;
};

/**
 * Puntos de ebullición/evaporación de referencia (°C a presión atmosférica),
 * tomados de PubChem, CRC Handbook y fichas de seguridad química (Sigma-Aldrich,
 * ChemicalBook). Solo se incluyen compuestos específicos con un valor
 * razonablemente consistente entre fuentes; clases genéricas (flavonoides,
 * mucílagos, alcaloides, etc.) y compuestos sin un punto único bien documentado
 * quedan fuera a propósito.
 */
const COMPOUND_TEMPS: Record<string, CompoundTemp> = {
  '1,8-cineol': { celsius: 176 },
  'alfa-pineno': { celsius: 156 },
  pineno: { celsius: 156 },
  mentol: { celsius: 212 },
  linalool: { celsius: 198 },
  citral: { celsius: 229 },
  timol: { celsius: 233 },
  carvacrol: { celsius: 237 },
  anetol: { celsius: 234 },
  cuminaldehido: { celsius: 235 },
  tuyona: { celsius: 200 },
  cafeina: { celsius: 178, sublimation: true },
  thc: { celsius: 157 },
  cbd: { celsius: 180 },
  mirceno: { celsius: 167 },
  limoneno: { celsius: 176 },
  'acetato de alfa-terpinilo': { celsius: 230, approx: true },
};

const COMBINING_DIACRITICS_START = 0x0300;
const COMBINING_DIACRITICS_END = 0x036f;

function normalize(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .split('')
    .filter((char) => {
      const code = char.codePointAt(0) ?? 0;
      return code < COMBINING_DIACRITICS_START || code > COMBINING_DIACRITICS_END;
    })
    .join('')
    .trim();
}

export function lookupCompoundTemp(name: string): CompoundTemp | undefined {
  return COMPOUND_TEMPS[normalize(name)];
}

export function formatCompoundTemp(data: CompoundTemp): string {
  if (data.sublimation) return `${data.celsius}°C (sublima)`;
  if (data.approx) return `≈${data.celsius}°C*`;
  return `${data.celsius}°C`;
}

/**
 * Divide el string `compounds` de una hierba en compuestos individuales.
 * Si un compuesto trae una lista entre paréntesis separada por comas
 * (p. ej. "terpenos (mirceno, limoneno, pineno)"), se expande a esos
 * compuestos concretos en lugar de la etiqueta genérica.
 */
export function parseCompounds(raw: string): string[] {
  return raw.split(';').flatMap((part) => {
    const trimmed = part.trim();
    const match = trimmed.match(/^(.+?)\s*\(([^)]+)\)$/);
    const base = match?.[1];
    const inner = match?.[2];
    if (base !== undefined && inner !== undefined) {
      if (inner.includes(',')) {
        return inner.split(',').map((c) => c.trim());
      }
      return [base.trim()];
    }
    return [trimmed];
  });
}
