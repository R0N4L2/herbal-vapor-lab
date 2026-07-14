import type { HerbCategory, HerbShowcaseEntry } from '@/components/herb-showcase-card';

const KOHLER = 'Franz Eugen Köhler, Köhler’s Medizinal-Pflanzen (1897) · dominio público';

export const CATEGORY_META: Record<
  HerbCategory,
  { slug: HerbCategory; label: string; tagline: string }
> = {
  concentracion: {
    slug: 'concentracion',
    label: 'Concentración',
    tagline: 'Hierbas tradicionalmente asociadas a la alerta, el enfoque y la memoria.',
  },
  relajacion: {
    slug: 'relajacion',
    label: 'Relajación',
    tagline: 'Hierbas tradicionalmente asociadas a la calma, el sueño y la ansiedad leve.',
  },
  respiratorio: {
    slug: 'respiratorio',
    label: 'Respiratorio',
    tagline: 'Hierbas tradicionalmente asociadas al malestar respiratorio y la congestión.',
  },
  digestivo: {
    slug: 'digestivo',
    label: 'Digestivo',
    tagline: 'Hierbas tradicionalmente asociadas a la digestión y el malestar estomacal.',
  },
  cannabis: {
    slug: 'cannabis',
    label: 'Cannabis',
    tagline: 'Una planta con un perfil propio, tratada aparte por su estatus legal y su química particular.',
  },
};

export const CATEGORY_ORDER: HerbCategory[] = [
  'concentracion',
  'relajacion',
  'respiratorio',
  'digestivo',
  'cannabis',
];

export const herbs: HerbShowcaseEntry[] = [
  // ---- Concentración ----
  {
    slug: 'romero',
    commonName: 'Romero',
    botanicalName: 'Rosmarinus officinalis',
    image: '/images/herbs/romero.jpg',
    imageAlt: 'Ilustración botánica de Rosmarinus officinalis (romero), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'concentracion',
    traditionalUse:
      'El romero carga una larga tradición popular asociada a la memoria y la claridad mental, presente en refranes de distintas culturas.',
    description:
      'El interés científico reciente se ha centrado en el 1,8-cineol, uno de sus compuestos volátiles, explorado en estudios preliminares sobre estado de alerta y estado de ánimo. Los resultados existentes provienen mayormente de muestras pequeñas y no permiten afirmar un efecto establecido, especialmente por vía inhalada.',
    attribution: KOHLER,
    temps: { min: 120, optimal: 130, max: 150 },
    compounds: '1,8-cineol; alfa-pineno',
    mainAction: 'Memoria y alerta',
    precautions: 'Puede irritar',
    dataSource: 'guia',
  },
  {
    slug: 'te-verde',
    commonName: 'Té verde',
    botanicalName: 'Camellia sinensis',
    image: '/images/herbs/te.jpg',
    imageAlt: 'Ilustración botánica de Camellia sinensis (té), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'concentracion',
    traditionalUse:
      'El té verde se ha consumido durante siglos en Asia oriental como bebida estimulante y, más recientemente, como base de infusiones para acompañar la concentración.',
    description:
      'Combina cafeína con L-teanina, un aminoácido estudiado por su posible efecto calmante sin sedación; la combinación de ambos se ha explorado en estudios pequeños sobre atención sostenida. No hay evidencia clínica específica sobre sus efectos por vía inhalada.',
    attribution: KOHLER,
    temps: { min: 170, optimal: 175, max: 185 },
    compounds: 'Cafeína; L-teanina',
    mainAction: 'Enfoque',
    precautions: 'Contiene cafeína',
    dataSource: 'guia',
  },
  {
    slug: 'te-negro',
    commonName: 'Té negro',
    botanicalName: 'Camellia sinensis',
    image: '/images/herbs/te.jpg',
    imageAlt: 'Ilustración botánica de Camellia sinensis (té), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'concentracion',
    traditionalUse:
      'Producido a partir de la misma planta que el té verde pero con un proceso de oxidación completo, el té negro es la infusión estimulante más consumida en buena parte de Europa y Asia meridional.',
    description:
      'Su oxidación genera teaflavinas, ausentes en el té verde, junto con un contenido de cafeína generalmente mayor. La investigación sobre estos compuestos es en gran parte preliminar y no cubre la vía inhalada.',
    attribution: KOHLER,
    temps: { min: 180, optimal: 190, max: 200 },
    compounds: 'Cafeína; teaflavinas',
    mainAction: 'Estimulación',
    precautions: 'Contiene cafeína',
    dataSource: 'guia',
  },
  {
    slug: 'menta',
    commonName: 'Menta',
    botanicalName: 'Mentha × piperita',
    image: '/images/herbs/menta.jpg',
    imageAlt: 'Ilustración botánica de Mentha × piperita (menta), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'concentracion',
    traditionalUse:
      'Tradicionalmente asociada a una sensación de frescura, la menta se usa desde hace siglos en bálsamos, infusiones e inhalantes.',
    description:
      'Su compuesto característico, el mentol, produce una sensación fría al contacto con receptores de la piel y las mucosas, lo que puede generar una percepción subjetiva de mayor amplitud respiratoria sin que esto implique necesariamente un cambio medible en el flujo de aire. La investigación sobre esta sensación es preliminar y no constituye evidencia de eficacia terapéutica.',
    attribution: KOHLER,
    temps: { min: 150, optimal: 160, max: 170 },
    compounds: 'Mentol',
    mainAction: 'Alerta',
    precautions: 'Puede irritar',
    dataSource: 'guia',
  },
  {
    slug: 'salvia',
    commonName: 'Salvia',
    botanicalName: 'Salvia officinalis',
    image: '/images/herbs/salvia.jpg',
    imageAlt: 'Ilustración botánica de Salvia officinalis (salvia), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'concentracion',
    traditionalUse:
      'La salvia tiene una larga historia de uso en medicina popular europea, asociada tanto a la memoria como a dolencias de garganta.',
    description:
      'Contiene tuyona y ácido rosmarínico, ambos estudiados de forma preliminar en relación con la función cognitiva, principalmente en preparaciones orales. No forma parte de la guía de referencia original de este proyecto: se incluye a partir de referencias generales sobre uso en vaporizadores herbales, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 150, optimal: 170, max: 185 },
    compounds: 'Tuyona; ácido rosmarínico',
    mainAction: 'Claridad mental (uso tradicional)',
    precautions: 'Evitar uso prolongado por el contenido de tuyona; evitar en el embarazo',
    dataSource: 'comunidad',
  },
  {
    slug: 'ginkgo',
    commonName: 'Ginkgo',
    botanicalName: 'Ginkgo biloba',
    image: '/images/herbs/ginkgo.jpg',
    imageAlt: 'Ilustración botánica de Ginkgo biloba, Flora Japonica (Siebold & Zuccarini), 1870',
    certainty: 'low',
    category: 'concentracion',
    traditionalUse:
      'Las hojas de ginkgo se usan en la medicina tradicional china y, más recientemente, en suplementos occidentales asociados a la circulación y la memoria.',
    description:
      'Sus flavonoides y ginkgólidos se han estudiado sobre todo en extractos estandarizados por vía oral, con resultados mixtos. No hay evidencia sobre su vaporización; se incluye aquí solo como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: 'Siebold & Zuccarini, Flora Japonica (1870) · dominio público',
    temps: { min: 140, optimal: 150, max: 165 },
    compounds: 'Flavonoides; ginkgólidos',
    mainAction: 'Circulación y memoria (uso tradicional)',
    precautions: 'Evitar combinar con anticoagulantes',
    dataSource: 'comunidad',
  },

  // ---- Relajación ----
  {
    slug: 'lavanda',
    commonName: 'Lavanda',
    botanicalName: 'Lavandula angustifolia',
    image: '/images/herbs/lavanda.jpg',
    imageAlt: 'Ilustración botánica de Lavandula angustifolia (lavanda), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'Una de las plantas con mayor tradición en aromaterapia, empleada históricamente para acompañar rutinas de descanso y relajación.',
    description:
      'Es también una de las plantas aromáticas con más estudios pequeños publicados sobre sueño y ansiedad leve, aunque de calidad y tamaño variables. La evidencia disponible se considera preliminar y no respalda afirmaciones de tratamiento; se sigue investigando su mecanismo y la vía por la que sus compuestos podrían actuar.',
    attribution: KOHLER,
    temps: { min: 120, optimal: 130, max: 145 },
    compounds: 'Linalool',
    mainAction: 'Calma',
    precautions: 'Evitar si hay alergia',
    dataSource: 'guia',
  },
  {
    slug: 'manzanilla',
    commonName: 'Manzanilla',
    botanicalName: 'Matricaria recutita',
    image: '/images/herbs/manzanilla.jpg',
    imageAlt: 'Ilustración botánica de Matricaria recutita (manzanilla), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    category: 'relajacion',
    traditionalUse:
      'Una de las plantas más usadas en infusión y aromaterapia, con una reputación tradicional de favorecer la relajación y el descanso.',
    description:
      'En difusores y vaporizadores se emplea para liberar su aroma dulce y ligeramente afrutado. Algunos de sus componentes, como la apigenina, se han estudiado en ensayos pequeños relacionados con ansiedad leve y calidad del sueño, con resultados mixtos y evidencia todavía limitada. No hay evidencia clínica específica sobre sus efectos por vía inhalada.',
    attribution: KOHLER,
    temps: { min: 100, optimal: 120, max: 135 },
    compounds: 'Apigenina; bisabolol',
    mainAction: 'Relajación',
    precautions: 'Posibles alergias',
    dataSource: 'guia',
  },
  {
    slug: 'melisa',
    commonName: 'Melisa',
    botanicalName: 'Melissa officinalis',
    image: '/images/herbs/melisa.jpg',
    imageAlt: 'Ilustración botánica de Melissa officinalis (melisa), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'Conocida también como toronjil, la melisa se ha usado tradicionalmente en infusión para acompañar momentos de nerviosismo o dificultad para conciliar el sueño.',
    description:
      'Su compuesto principal, el citral, se ha estudiado en preparaciones orales por su posible relación con la ansiedad leve, con resultados preliminares. No existe evidencia clínica sobre su vaporización.',
    attribution: KOHLER,
    temps: { min: 135, optimal: 140, max: 150 },
    compounds: 'Citral',
    mainAction: 'Ansiedad',
    dataSource: 'guia',
  },
  {
    slug: 'pasiflora',
    commonName: 'Pasiflora',
    botanicalName: 'Passiflora incarnata',
    image: '/images/herbs/pasiflora.jpg',
    imageAlt: 'Ilustración botánica de Passiflora incarnata (pasiflora), lámina de Nikolaus Joseph von Jacquin, 1844',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'La pasiflora tiene una larga tradición de uso popular en América y Europa como planta calmante, sobre todo asociada al sueño.',
    description:
      'Sus flavonoides se han estudiado en combinación con otras plantas sedantes, principalmente por vía oral, con resultados preliminares sobre calidad del sueño. No hay evidencia clínica sobre su vaporización.',
    attribution: 'Nikolaus Joseph von Jacquin (1844) · dominio público',
    temps: { min: 145, optimal: 155, max: 165 },
    compounds: 'Flavonoides',
    mainAction: 'Sueño',
    dataSource: 'guia',
  },
  {
    slug: 'valeriana',
    commonName: 'Valeriana',
    botanicalName: 'Valeriana officinalis',
    image: '/images/herbs/valeriana.jpg',
    imageAlt: 'Ilustración botánica de Valeriana officinalis (valeriana), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'La raíz de valeriana es una de las plantas sedantes más usadas en fitoterapia europea, tradicionalmente asociada al insomnio.',
    description:
      'Su ácido valerénico y sus valepotriatos se han estudiado sobre todo en extractos orales para el sueño, con evidencia mixta. No forma parte de la guía de referencia original: se incluye por su presencia habitual en la comunidad de vaporización herbal, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 130, optimal: 140, max: 155 },
    compounds: 'Ácido valerénico; valepotriatos',
    mainAction: 'Sedación (uso tradicional)',
    precautions: 'Olor intenso; evitar junto con sedantes o alcohol',
    dataSource: 'comunidad',
  },
  {
    slug: 'tilo',
    commonName: 'Tilo',
    botanicalName: 'Tilia spp.',
    image: '/images/herbs/tilo.jpg',
    imageAlt: 'Ilustración botánica de Tilia cordata (tilo), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    category: 'relajacion',
    traditionalUse:
      'Las flores de tilo se usan tradicionalmente en infusión como remedio calmante para acompañar el descanso.',
    description:
      'Sus flavonoides y mucílagos no cuentan con estudios clínicos relevantes por vía inhalada. Se incluye aquí como referencia comunitaria, no como parte de la guía de referencia evaluada originalmente por el proyecto.',
    attribution: KOHLER,
    temps: { min: 120, optimal: 130, max: 145 },
    compounds: 'Flavonoides; mucílagos',
    mainAction: 'Calma (uso tradicional)',
    dataSource: 'comunidad',
  },
  {
    slug: 'lupulo',
    commonName: 'Lúpulo',
    botanicalName: 'Humulus lupulus',
    image: '/images/herbs/lupulo.jpg',
    imageAlt: 'Ilustración botánica de Humulus lupulus (lúpulo), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'Además de su uso en la elaboración de cerveza, el lúpulo tiene una tradición como planta sedante, a menudo combinado con valeriana.',
    description:
      'Sus ácidos amargos y el mirceno se han estudiado de forma preliminar por su posible efecto sedante. Es una planta frecuente en la comunidad de vaporización herbal, aunque sin revisión de evidencia clínica en este proyecto.',
    attribution: KOHLER,
    temps: { min: 130, optimal: 140, max: 155 },
    compounds: 'Ácidos amargos; mirceno',
    mainAction: 'Sedación / sueño (uso tradicional)',
    precautions: 'Puede potenciar el efecto de otros sedantes',
    dataSource: 'comunidad',
  },
  {
    slug: 'lechuga-silvestre',
    commonName: 'Lechuga silvestre',
    botanicalName: 'Lactuca virosa',
    image: '/images/herbs/lechuga_silvestre.jpg',
    imageAlt: 'Ilustración botánica de Lactuca virosa (lechuga silvestre), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'Conocida históricamente como "lechuga de opio" por su látex amargo, se ha usado de forma tradicional como calmante suave, sin relación química con los opioides.',
    description:
      'Sus principales compuestos, lactucina y lactucopicrina, se han estudiado muy escasamente y casi nunca por vía inhalada. Es popular en la comunidad de vaporización herbal como alternativa suave, pero la información disponible es limitada y no verificada clínicamente.',
    attribution: KOHLER,
    temps: { min: 140, optimal: 150, max: 165 },
    compounds: 'Lactucina; lactucopicrina',
    mainAction: 'Relajación (uso tradicional, sin evidencia clínica)',
    precautions: 'Evitar junto con sedantes; información limitada a uso tradicional',
    dataSource: 'comunidad',
  },
  {
    slug: 'damiana',
    commonName: 'Damiana',
    botanicalName: 'Turnera diffusa',
    image: '/images/herbs/damiana.jpg',
    imageAlt: 'Fotografía de Turnera diffusa var. aphrodisiaca (damiana)',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'La damiana se ha usado tradicionalmente en México y Centroamérica en infusión, asociada popularmente al estado de ánimo y, en la tradición popular, a efectos afrodisíacos no confirmados.',
    description:
      'Sus flavonoides y damianina cuentan con poca investigación farmacológica moderna. Se incluye por su presencia habitual en vaporizadores herbales, sin revisión de evidencia clínica en este proyecto.',
    attribution: 'H. Zell · CC BY-SA 3.0',
    temps: { min: 150, optimal: 160, max: 175 },
    compounds: 'Damianina; flavonoides',
    mainAction: 'Estado de ánimo (uso tradicional)',
    precautions: 'Evitar en el embarazo; información limitada',
    dataSource: 'comunidad',
  },
  {
    slug: 'amapola-california',
    commonName: 'Amapola de California',
    botanicalName: 'Eschscholzia californica',
    image: '/images/herbs/amapola_california.jpg',
    imageAlt: 'Fotografía de Eschscholzia californica (amapola de California)',
    certainty: 'low',
    category: 'relajacion',
    traditionalUse:
      'A diferencia de la adormidera, esta especie no contiene opioides; se ha usado tradicionalmente en América del Norte como calmante suave.',
    description:
      'Sus alcaloides son de tipo isoquinolínico, químicamente distintos a los de Papaver somniferum. La evidencia sobre su uso es escasa y se incluye aquí solo como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: 'Andrey Butko · CC BY-SA 3.0',
    temps: { min: 140, optimal: 150, max: 165 },
    compounds: 'Alcaloides isoquinolínicos (no opioides)',
    mainAction: 'Relajación / sueño (uso tradicional)',
    precautions: 'No debe confundirse con la adormidera (Papaver somniferum)',
    dataSource: 'comunidad',
  },

  // ---- Respiratorio ----
  {
    slug: 'eucalipto',
    commonName: 'Eucalipto',
    botanicalName: 'Eucalyptus globulus',
    image: '/images/herbs/eucalipto.jpg',
    imageAlt: 'Ilustración botánica de Eucalyptus globulus (eucalipto), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    category: 'respiratorio',
    traditionalUse:
      'Sus hojas forman parte de remedios caseros de larga data para acompañar el malestar respiratorio, tradicionalmente mediante vahos de agua caliente.',
    description:
      'El eucaliptol (1,8-cineol) es su compuesto más estudiado, con investigación clínica preliminar principalmente sobre formas orales. La vaporización o inhalación directa de sus compuestos no ha pasado todavía por la revisión de evidencia de este proyecto: aquí no se afirma que sea una vía más segura o más eficaz que otras.',
    attribution: KOHLER,
    temps: { min: 120, optimal: 130, max: 150 },
    compounds: '1,8-cineol',
    mainAction: 'Descongestión',
    precautions: 'Puede irritar',
    dataSource: 'guia',
  },
  {
    slug: 'tomillo',
    commonName: 'Tomillo',
    botanicalName: 'Thymus vulgaris',
    image: '/images/herbs/tomillo.jpg',
    imageAlt: 'Ilustración botánica de Thymus vulgaris (tomillo), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'respiratorio',
    traditionalUse:
      'El tomillo se usa desde la antigüedad en remedios caseros para la garganta y las vías respiratorias.',
    description:
      'Su compuesto principal, el timol, tiene propiedades antisépticas estudiadas principalmente in vitro y en preparaciones tópicas u orales. No hay evidencia clínica específica sobre sus efectos por vía inhalada.',
    attribution: KOHLER,
    temps: { min: 170, optimal: 185, max: 195 },
    compounds: 'Timol',
    mainAction: 'Antiséptico',
    dataSource: 'guia',
  },
  {
    slug: 'oregano',
    commonName: 'Orégano',
    botanicalName: 'Origanum vulgare',
    image: '/images/herbs/oregano.jpg',
    imageAlt: 'Ilustración botánica de Origanum vulgare (orégano), Flora medica, 1831',
    certainty: 'low',
    category: 'respiratorio',
    traditionalUse:
      'Además de su uso culinario, el orégano tiene una tradición popular como remedio para el malestar respiratorio y digestivo leve.',
    description:
      'El carvacrol, su compuesto característico, se ha estudiado in vitro por sus propiedades antimicrobianas, con investigación clínica todavía escasa. El aroma es particularmente intenso al vaporizarlo.',
    attribution: 'Flora medica (1831) · dominio público',
    temps: { min: 140, optimal: 150, max: 170 },
    compounds: 'Carvacrol',
    mainAction: 'Antimicrobiano',
    precautions: 'Muy intenso',
    dataSource: 'guia',
  },
  {
    slug: 'malva',
    commonName: 'Malva',
    botanicalName: 'Malva sylvestris',
    image: '/images/herbs/malva.jpg',
    imageAlt: 'Ilustración botánica de Malva sylvestris (malva), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    category: 'respiratorio',
    traditionalUse:
      'La malva es una planta emoliente tradicional, usada en infusión para irritaciones leves de garganta y vías respiratorias.',
    description:
      'Sus mucílagos son el componente más estudiado, principalmente en preparaciones acuosas. No hay evidencia sobre su comportamiento al vaporizarse; se incluye como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 110, optimal: 120, max: 135 },
    compounds: 'Mucílagos',
    mainAction: 'Emoliente para vías respiratorias (uso tradicional)',
    dataSource: 'comunidad',
  },
  {
    slug: 'gordolobo',
    commonName: 'Gordolobo',
    botanicalName: 'Verbascum thapsus',
    image: '/images/herbs/gordolobo.jpg',
    imageAlt: 'Ilustración botánica de Verbascum thapsus (gordolobo), Flora Batava, siglo XIX',
    certainty: 'traditional',
    category: 'respiratorio',
    traditionalUse:
      'El gordolobo tiene una larga tradición de uso como expectorante en infusión, y es una de las hierbas más mencionadas en foros y comunidades de vaporización herbal para uso respiratorio.',
    description:
      'Sus saponinas y mucílagos se asocian tradicionalmente a un efecto expectorante, sin ensayos clínicos relevantes sobre su vaporización. Se recomienda filtrar bien la hierba seca antes de usarla, ya que los pelillos finos de la planta pueden irritar la garganta.',
    attribution: 'Flora Batava (siglo XIX) · dominio público',
    temps: { min: 130, optimal: 140, max: 155 },
    compounds: 'Saponinas; mucílagos',
    mainAction: 'Expectorante (uso tradicional)',
    precautions: 'Filtrar bien la hierba: sus pelillos finos pueden irritar la garganta',
    dataSource: 'comunidad',
  },

  // ---- Digestivo ----
  {
    slug: 'hinojo',
    commonName: 'Hinojo',
    botanicalName: 'Foeniculum vulgare',
    image: '/images/herbs/hinojo.jpg',
    imageAlt: 'Ilustración botánica de Foeniculum vulgare (hinojo), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'Las semillas de hinojo se usan tradicionalmente en infusión para acompañar la digestión.',
    description:
      'Su compuesto principal, el anetol, se ha estudiado en preparaciones orales por su posible efecto sobre la digestión, con evidencia todavía preliminar. No hay estudios específicos sobre su vaporización.',
    attribution: KOHLER,
    temps: { min: 150, optimal: 160, max: 170 },
    compounds: 'Anetol',
    mainAction: 'Digestión',
    dataSource: 'guia',
  },
  {
    slug: 'jengibre',
    commonName: 'Jengibre',
    botanicalName: 'Zingiber officinale',
    image: '/images/herbs/jengibre.jpg',
    imageAlt: 'Ilustración botánica de Zingiber officinale (jengibre), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'El jengibre tiene una tradición amplia como remedio casero para las náuseas y el malestar digestivo.',
    description:
      'Sus gingeroles cuentan con estudios clínicos relativamente más sólidos que otras plantas de esta lista, aunque prácticamente todos evalúan preparaciones orales, no la vía inhalada.',
    attribution: KOHLER,
    temps: { min: 170, optimal: 180, max: 190 },
    compounds: 'Gingeroles',
    mainAction: 'Náuseas',
    dataSource: 'guia',
  },
  {
    slug: 'anis-estrella',
    commonName: 'Anís estrella',
    botanicalName: 'Illicium verum',
    image: '/images/herbs/anis_estrella.jpg',
    imageAlt: 'Ilustración botánica de Illicium verum (anís estrella), lámina de Rozier, Cours complet d’agriculture, siglo XIX',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'El anís estrella se usa tradicionalmente en Asia oriental como digestivo y saborizante.',
    description:
      'Comparte el anetol con el anís verde, aunque proviene de una especie botánica distinta. Es importante no confundirlo con Illicium anisatum (anís estrella japonés), una especie similar pero tóxica. Se incluye como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: 'Rozier, Cours complet d’agriculture (siglo XIX) · dominio público',
    temps: { min: 160, optimal: 170, max: 185 },
    compounds: 'Anetol',
    mainAction: 'Digestión (uso tradicional)',
    precautions: 'No confundir con Illicium anisatum (tóxico)',
    dataSource: 'comunidad',
  },
  {
    slug: 'anis-verde',
    commonName: 'Anís verde',
    botanicalName: 'Pimpinella anisum',
    image: '/images/herbs/anis_verde.jpg',
    imageAlt: 'Ilustración botánica de Pimpinella anisum (anís verde), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'El anís verde se usa tradicionalmente en Europa y el Mediterráneo como digestivo en infusión.',
    description:
      'Su anetol es el mismo compuesto característico del hinojo y el anís estrella. No forma parte de la guía de referencia original del proyecto; se incluye como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 150, optimal: 160, max: 175 },
    compounds: 'Anetol',
    mainAction: 'Digestión (uso tradicional)',
    dataSource: 'comunidad',
  },
  {
    slug: 'cardamomo',
    commonName: 'Cardamomo',
    botanicalName: 'Elettaria cardamomum',
    image: '/images/herbs/cardamomo.jpg',
    imageAlt: 'Ilustración botánica de Elettaria cardamomum (cardamomo), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'El cardamomo se usa tradicionalmente en Asia meridional como digestivo y aromatizante.',
    description:
      'Contiene 1,8-cineol —el mismo compuesto del eucalipto y el romero— junto con acetato de alfa-terpinilo. Se incluye como referencia comunitaria, sin revisión de evidencia clínica en este proyecto.',
    attribution: KOHLER,
    temps: { min: 150, optimal: 160, max: 175 },
    compounds: '1,8-cineol; acetato de alfa-terpinilo',
    mainAction: 'Digestión (uso tradicional)',
    dataSource: 'comunidad',
  },
  {
    slug: 'boldo',
    commonName: 'Boldo',
    botanicalName: 'Peumus boldus',
    image: '/images/herbs/boldo.jpg',
    imageAlt: 'Ilustración botánica de Peumus boldus (boldo), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'El boldo es una planta de origen chileno usada tradicionalmente en infusión como digestivo y para molestias hepáticas leves.',
    description:
      'Su alcaloide principal, la boldina, se ha estudiado sobre todo en preparaciones orales. El uso prolongado no se recomienda por la escasa evidencia sobre seguridad a largo plazo. Se incluye aquí como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 140, optimal: 150, max: 165 },
    compounds: 'Boldina',
    mainAction: 'Digestivo / hepático (uso tradicional)',
    precautions: 'Evitar el uso prolongado; consultar en caso de embarazo o enfermedad hepática',
    dataSource: 'comunidad',
  },
  {
    slug: 'diente-de-leon',
    commonName: 'Diente de león',
    botanicalName: 'Taraxacum officinale',
    image: '/images/herbs/diente_leon.jpg',
    imageAlt: 'Ilustración botánica de Taraxacum officinale (diente de león), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'traditional',
    category: 'digestivo',
    traditionalUse:
      'El diente de león se usa tradicionalmente en infusión como digestivo y diurético suave.',
    description:
      'Sus sesquiterpenos e inulina se han estudiado de forma limitada. No hay evidencia sobre su comportamiento al vaporizarse; se incluye como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 120, optimal: 130, max: 145 },
    compounds: 'Sesquiterpenos; inulina',
    mainAction: 'Digestivo / diurético (uso tradicional)',
    precautions: 'Evitar en caso de obstrucción de las vías biliares',
    dataSource: 'comunidad',
  },
  {
    slug: 'comino',
    commonName: 'Comino',
    botanicalName: 'Cuminum cyminum',
    image: '/images/herbs/comino.jpg',
    imageAlt: 'Ilustración botánica de Cuminum cyminum (comino), Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'digestivo',
    traditionalUse:
      'El comino se usa tradicionalmente como especia digestiva en Asia meridional y Medio Oriente.',
    description:
      'Su compuesto característico, el cuminaldehído, tiene escasa investigación clínica, y ninguna específica sobre inhalación. Se incluye como referencia comunitaria, sin revisión de evidencia clínica.',
    attribution: KOHLER,
    temps: { min: 150, optimal: 160, max: 175 },
    compounds: 'Cuminaldehído',
    mainAction: 'Digestión (uso tradicional)',
    dataSource: 'comunidad',
  },

  // ---- Cannabis ----
  {
    slug: 'cannabis',
    commonName: 'Cannabis',
    botanicalName: 'Cannabis sativa / Cannabis indica',
    image: '/images/herbs/cannabis.jpg',
    imageAlt: 'Ilustración botánica de Cannabis sativa, Köhler’s Medizinal-Pflanzen, 1897',
    certainty: 'low',
    category: 'cannabis',
    traditionalUse:
      'El cannabis tiene un uso medicinal y ritual documentado desde hace milenios en distintas culturas, y hoy es, además, la planta con más literatura clínica publicada de toda esta lista.',
    description:
      'A diferencia del resto de las plantas de esta guía, el cannabis cuenta con un cuerpo de investigación clínica extenso sobre sus cannabinoides (THC, CBD) y su vía inhalada específicamente. Ese cuerpo de evidencia no ha pasado por el modelo de revisión propio de este proyecto y no se resume aquí: el objetivo de esta ficha es únicamente ofrecer un rango de temperatura de referencia, no una evaluación de eficacia o seguridad.',
    attribution: KOHLER,
    temps: { min: 160, optimal: 185, max: 205 },
    compounds: 'THC; CBD; terpenos (mirceno, limoneno, pineno)',
    mainAction:
      'Variable según la cepa y la proporción THC:CBD — relajación, analgesia percibida y alteración del ánimo, entre otros efectos reportados',
    precautions:
      'Puede alterar la capacidad de conducir u operar maquinaria; contraindicado en embarazo, lactancia, menores de edad y antecedentes de psicosis; puede interactuar con otros medicamentos',
    legalNote:
      'El estatus legal del cannabis varía según el país y la jurisdicción. Verificá la normativa local antes de cualquier uso; este sitio no promueve su uso donde no esté permitido.',
    dataSource: 'comunidad',
  },
];

export function getHerbsByCategory(category: HerbCategory): HerbShowcaseEntry[] {
  return herbs.filter((herb) => herb.category === category);
}

export type Combinacion = {
  slug: string;
  nombre: string;
  objetivo: string;
  temperatura: number;
  comentario: string;
};

export const combinaciones: Combinacion[] = [
  {
    slug: 'romero-te-verde',
    nombre: 'Romero + Té verde',
    objetivo: 'Concentración',
    temperatura: 175,
    comentario: 'Enfoque prolongado',
  },
  {
    slug: 'romero-menta',
    nombre: 'Romero + Menta',
    objetivo: 'Concentración',
    temperatura: 150,
    comentario: 'Alerta mental',
  },
  {
    slug: 'lavanda-manzanilla',
    nombre: 'Lavanda + Manzanilla',
    objetivo: 'Relajación',
    temperatura: 125,
    comentario: 'Relajación',
  },
  {
    slug: 'melisa-pasiflora',
    nombre: 'Melisa + Pasiflora',
    objetivo: 'Sueño',
    temperatura: 150,
    comentario: 'Calma',
  },
  {
    slug: 'eucalipto-tomillo',
    nombre: 'Eucalipto + Tomillo',
    objetivo: 'Respiratorio',
    temperatura: 180,
    comentario: 'Descongestión',
  },
];
