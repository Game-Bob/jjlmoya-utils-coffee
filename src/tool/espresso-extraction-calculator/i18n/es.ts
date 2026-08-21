import { bibliography } from '../bibliography';
import type { EspressoExtractionLocaleContent } from '../entry';

const slug = 'calculadora-extraccion-espresso';
const title = 'Calculadora de extracción de espresso';
const description = 'Anota dosis, masa de bebida y tiempo del shot para leer ratio, caudal y, si mides TDS con refractómetro, el rendimiento de extracción.';

const howTo = [
  {
    name: 'Introduce la dosis de café',
    text: 'Pesa el café seco en el portafiltro y ajusta el control de dosis a esa masa en gramos.',
  },
  {
    name: 'Extrae el shot y pesa la bebida',
    text: 'Arranca el temporizador al enganchar la bomba, páralo al cortar el shot y pesa el líquido en la taza.',
  },
  {
    name: 'Lee ratio, tiempo y caudal',
    text: 'La calculadora convierte esos tres números en ratio, tiempo de contacto y gramos por segundo para comparar el shot con una ventana clásica.',
  },
  {
    name: 'Añade TDS solo si lo mediste',
    text: 'Si usaste un refractómetro, activa TDS e introduce la lectura. El rendimiento es el porcentaje de TDS por la masa de bebida, dividido entre la dosis. Déjalo apagado si no lo mediste.',
  },
];

const faq = [
  {
    question: '¿Qué ratio de espresso debo usar?',
    answer: 'Un punto de partida habitual en café de especialidad es 1:2 en masa, por ejemplo 18 g de café y 36 g en taza. Ratios más cortos como 1:1.1 quedan en estilo ristretto. Ratios más largos como 1:3 quedan en estilo lungo. Son ventanas de planificación, no una receta única.',
  },
  {
    question: '¿Cómo se calcula el rendimiento de extracción del espresso?',
    answer: 'El porcentaje de rendimiento es el TDS porcentual por la masa de bebida en gramos, dividido entre la dosis seca. Una lectura de 10 por ciento de TDS en 36 g desde 18 g es un 20 por ciento de rendimiento. Sin un TDS medido, la herramienta no inventa esa cifra.',
  },
  {
    question: '¿Por qué el tiempo del shot no es lo mismo que el rendimiento?',
    answer: 'Tiempo y caudal describen lo rápido que pasó el agua por el puck. El rendimiento describe cuánto café seco se disolvió en la taza. Un 1:2 rápido y un 1:2 lento pueden compartir ratio y extraer distinto. El diagnóstico de sabor pertenece a otra herramienta.',
  },
  {
    question: '¿Debo incluir la preinfusión en el tiempo del shot?',
    answer: 'Introduce la lectura total del temporizador y, si tu máquina empapa el puck antes del flujo pleno, indica la preinfusión aparte. El tiempo de contacto es el total menos esa remojo, y el caudal usa ese contacto para que un remojo largo no parezca un shot lento.',
  },
];

export const content: EspressoExtractionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    kicker: 'Vaso de shot',
    statusClassic: 'Ventana clásica',
    statusOutside: 'Fuera de la ventana clásica',
    presetTitle: 'Perfil del shot',
    presetClassic: 'Clásico 1:2',
    presetRistretto: 'Ristretto',
    presetLungo: 'Lungo',
    presetSingle: 'Simple',
    presetTurbo: 'Turbo',
    unitSystemLabel: 'Unidades',
    unitMetric: 'g',
    unitImperial: 'oz',
    doseLabel: 'Dosis',
    yieldLabel: 'En la taza',
    timeLabel: 'Tiempo del shot',
    preinfusionLabel: 'Preinfusión',
    preZero: 'Off',
    preShort: '4s',
    preLong: '8s',
    ratioTargetsLabel: 'Llenar hasta',
    ratioTargetOne: '1:1',
    ratioTargetTwo: '1:2',
    ratioTargetThree: '1:3',
    tdsToggle: 'TDS',
    tdsLabel: 'TDS',
    tdsHint: 'Lectura del refractómetro',
    unitGrams: 'g',
    unitOz: 'oz',
    unitSeconds: 's',
    unitPercent: '%',
    unitFlow: 'g/s',
    ratioReadout: 'Ratio',
    timeReadout: 'Tiempo',
    flowReadout: 'Caudal',
    yieldReadout: 'EY',
    yieldEmpty: 'Sin TDS',
    styleRistretto: 'Ristretto',
    styleNormale: 'Normale',
    styleLungo: 'Lungo',
    paceFast: 'Rápido',
    paceTypical: 'Típico',
    paceSlow: 'Lento',
    bandUnmeasured: 'Sin TDS',
    bandLow: 'Por debajo del 18%',
    bandTarget: '18 a 22%',
    bandHigh: 'Por encima del 22%',
    markOne: '1:1',
    markTwo: '1:2',
    markThree: '1:3',
    deltaOnLine: 'En la línea 1:2',
    deltaPast: '{n} g por encima de 1:2',
    deltaShort: '{n} g por debajo de 1:2',
    resetText: 'Restablecer',
    faqTitle: 'Preguntas sobre extracción de espresso',
    bibliographyTitle: 'Referencias de extracción',
  },
  seo: [
    { type: 'title', text: 'Qué mide de verdad esta calculadora de espresso', level: 2 },
    {
      type: 'paragraph',
      html: 'Las recetas de espresso se repiten mejor cuando se escriben como masas y tiempos. El ratio es la masa de bebida dividida entre la dosis seca. Una dosis de 18 g que rinde 36 g en taza es un shot 1:2. El tiempo de contacto es la lectura del temporizador menos cualquier remojo de preinfusión. El caudal es la masa de bebida dividida entre ese tiempo de contacto.',
    },
    {
      type: 'tip',
      title: 'Pesa la taza, no confíes en los mililitros',
      html: 'La crema y la temperatura ensucian las lecturas de volumen. Las recetas de especialidad casi siempre usan gramos de entrada y de salida. Si solo tienes una marca de volumen, trata 1 ml como un 1 g aproximado y pasa a una báscula en cuanto puedas.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:2', label: 'Ratio de partida habitual' },
        { value: '20 a 32 s', label: 'Ventana típica de contacto' },
        { value: '18 a 22%', label: 'Banda de rendimiento citada' },
      ],
    },
    { type: 'title', text: 'Estilos de shot según el ratio', level: 3 },
    {
      type: 'paragraph',
      html: 'Las etiquetas ristretto, normale y lungo son familias de ratio, no notas de sabor. Esta herramienta usa cortes de masa cerca de 1:1.5 y 1:2.5 porque coinciden con cómo muchas barras de especialidad escriben recetas. Las definiciones italianas tradicionales por volumen son distintas y no se aplican aquí.',
    },
    {
      type: 'table',
      headers: ['Estilo', 'Ratio en masa', 'Ejemplo con 18 g', 'Qué muestra el vaso'],
      rows: [
        ['Ristretto', 'Por debajo de 1:1.5', 'Unos 20 g en taza', 'El llenado queda cerca de la marca 1:1'],
        ['Normale', '1:1.5 a 1:2.5', '36 g en taza a 1:2', 'El líquido llega a la línea dorada 1:2 si el tiempo es típico'],
        ['Lungo', 'Por encima de 1:2.5', 'Unos 54 g en taza', 'El llenado sube hacia la marca 1:3'],
        ['Turbo', 'A menudo cerca de 1:2.2', '40 g en unos 15 s', 'Ritmo rápido, receta igualmente medida'],
      ],
    },
    { type: 'title', text: 'El rendimiento de extracción necesita una lectura de TDS', level: 3 },
    {
      type: 'paragraph',
      html: 'Los sólidos disueltos totales (TDS) son la fuerza de la bebida, casi siempre leídos con refractómetro. El rendimiento de extracción es la fracción del café seco que se disolvió. La relación usada aquí es la misma identidad de la carta de extracción que discute la Specialty Coffee Association: el porcentaje de rendimiento es el TDS porcentual por la masa de bebida, dividido entre la dosis.',
    },
    {
      type: 'list',
      items: [
        '<strong>Medible sin TDS:</strong> dosis, masa de bebida, ratio, tiempo del shot, preinfusión, tiempo de contacto y caudal.',
        '<strong>Medible solo con TDS:</strong> rendimiento de extracción. Un 9.5 por ciento de TDS en 36 g desde 18 g es un 19 por ciento de rendimiento.',
        '<strong>No es un diagnóstico de sabor:</strong> lo ácido, amargo o hueco pide molienda, temperatura y preparación del puck. Usa la herramienta de diagnóstico de sabor para ese trabajo.',
        '<strong>No es una especificación de fabricante:</strong> el cesto, el tueste y la máquina cambian el shot que mejor sabe. Trata 18 a 22 por ciento como una banda citada de planificación, no como un aprobado o suspenso.',
      ],
    },
    {
      type: 'summary',
      title: 'Cómo usar el laboratorio de shots',
      items: [
        'Elige un perfil o fija dosis, bebida y tiempo desde la báscula y el temporizador.',
        'Mira cómo el vaso se llena hasta las marcas 1:1, 1:2 y 1:3 según cambian ratio y ritmo.',
        'Activa TDS solo después de una lectura de refractómetro si quieres el rendimiento de extracción.',
      ],
    },
  ],
  faq,
  faqTitle: 'Preguntas sobre extracción de espresso',
  bibliography,
  bibliographyTitle: 'Referencias de extracción',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
