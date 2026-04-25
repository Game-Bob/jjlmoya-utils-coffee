import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-agua-cafe-sca';
const title = 'Calculadora de Agua para Café SCA';
const description =
  'Calcula la mineralización exacta para tu café de especialidad. Perfiles SCA, Barista Hustle y Hendon. Controla Magnesio, Calcio y Bicarbonato para maximizar el sabor y proteger tu máquina.';

const faqData = [
  {
    question: '¿Qué es el estándar de agua de la SCA?',
    answer:
      'La Specialty Coffee Association define un estándar técnico para el agua de extracción. Especifica niveles óptimos de dureza total (GH), alcalinidad (KH), pH y sodio para una extracción equilibrada que potencie el sabor sin dañar el equipo.',
  },
  {
    question: '¿Por qué no usar agua del grifo directamente?',
    answer:
      'El agua del grifo varía según la ciudad y la temporada. Puede contener cloro, cal excesiva o niveles minerales que apagan el sabor del café de especialidad y dañan calderas y juntas. Mineralizar agua destilada te da control total y resultados repetibles.',
  },
  {
    question: '¿Dónde consigo las sales minerales?',
    answer:
      'Las sales de Epsom (sulfato de magnesio) y el bicarbonato de sodio se encuentran en farmacias y supermercados. El cloruro de calcio es habitual en tiendas de elaboración de cerveza casera. Asegúrate de que sean siempre de grado alimenticio.',
  },
  {
    question: '¿Es seguro para mi máquina de espresso?',
    answer:
      'La calculadora incluye un semáforo de riesgo. El agua muy pura es corrosiva para los metales; el agua muy dura genera incrustaciones de cal. Los perfiles SCA Ideal y Barista Hustle están diseñados para equilibrar longevidad del equipo y calidad del sabor.',
  },
  {
    question: '¿Qué diferencia hay entre Magnesio y Calcio en el café?',
    answer:
      'El magnesio extrae compuestos frutales y dulces con mayor eficiencia, siendo el favorito para métodos de filtro. El calcio aporta más cuerpo y textura sedosa, pero tiene mayor tendencia a formar incrustaciones en calderas a largo plazo.',
  },
  {
    question: '¿Puedo guardar mis concentraciones habituales?',
    answer:
      'Sí. La calculadora guarda automáticamente los valores de concentrado que introduces (g/100ml) en tu navegador mediante localStorage. La próxima vez que la abras, encontrarás tus valores personalizados listos para usar.',
  },
];

const howToData = [
  {
    name: 'Consigue agua base pura',
    text: 'Compra agua destilada, desmineralizada o utiliza osmosis inversa. El objetivo es partir de 0 ppm de sólidos disueltos para un control total de la mineralización.',
  },
  {
    name: 'Prepara tus botellas de concentrado',
    text: 'Mezcla cada sal por separado en 100 ml de agua destilada: 2,46 g de Epsom para el Magnesio, 1,47 g de CaCl2 para el Calcio y 1,68 g de bicarbonato para el Buffer.',
  },
  {
    name: 'Selecciona tu perfil objetivo',
    text: 'Elige entre SCA Ideal (equilibrado), Barista Hustle (dulzor y brillo), Hendon (cuerpo), Melbourne (delicado) o crea un perfil personalizado con tus propios valores de GH y KH.',
  },
  {
    name: 'Introduce el volumen final',
    text: 'Escribe la cantidad de agua que quieres mineralizar en litros. La calculadora ajusta automáticamente las dosis de concentrado para ese volumen exacto.',
  },
  {
    name: 'Añade los concentrados y completa con agua destilada',
    text: 'Con una jeringa de precisión, añade los mililitros indicados de cada concentrado a tu recipiente y completa hasta el volumen total con agua destilada.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, idx) => ({
    '@type': 'HowToStep',
    position: idx + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes sobre la Calculadora de Agua para Café',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas y Estándares SCA',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Química del Agua para Café: Por qué el H₂O es el ingrediente olvidado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El café es agua en un 98-99%. Sin embargo, la composición mineral de ese agua es el factor diferencial más ignorado en la cadena de calidad. Un café de especialidad de Etiopía extraído con agua del grifo de Madrid puede saber completamente distinto al mismo café preparado con agua mineralizada siguiendo el estándar SCA. Nuestra <strong>calculadora de agua para café</strong> te permite formular el agua perfecta desde cero, usando sales minerales comunes y partiendo de agua destilada.',
    },
    {
      type: 'summary',
      title: '¿Por qué la mineralización del agua importa tanto?',
      items: [
        '<strong>GH (Dureza General):</strong> La suma de iones Magnesio y Calcio determina la capacidad del agua para disolver compuestos de sabor del café.',
        '<strong>KH (Alcalinidad):</strong> La cantidad de bicarbonato controla el pH durante la extracción. Un KH bajo produce café agrio; un KH alto lo aplana.',
        '<strong>Repetibilidad:</strong> El agua municipal cambia por temporada y ciudad. El agua mineralizada es constante y reproducible.',
        '<strong>Protección del equipo:</strong> Los niveles correctos evitan tanto la corrosión (agua muy pura) como las incrustaciones de cal (agua muy dura).',
      ],
    },
    {
      type: 'title',
      text: 'El Estándar SCA: Los Límites Técnicos del Agua Perfecta para Café',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La Specialty Coffee Association publicó en 2015 su estándar de calidad del agua. Tras años de investigación sensorial y química, estableció rangos ideales para cada parámetro. No son números arbitrarios: son el resultado de catas a ciegas con profesionales donde se maximizó la percepción de acidez equilibrada, dulzor y cuerpo.',
    },
    {
      type: 'table',
      headers: ['Parámetro', 'Mínimo', 'Ideal SCA', 'Máximo'],
      rows: [
        ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alcalinidad (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnesio vs Calcio: La Batalla Mineral que Define tu Taza',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No todos los minerales actúan igual sobre el café. El investigador Christopher Hendon demostró que el <strong>magnesio</strong> forma ligandos con las moléculas de sabor más complejas y volátiles, extrayendo notas frutales y florales con mayor eficiencia. El <strong>calcio</strong>, en cambio, extrae compuestos más pesados, aportando cuerpo y textura sedosa pero con menos brillo aromático.',
    },
    {
      type: 'list',
      items: [
        '<strong>Magnesio puro (ratio 1:0):</strong> Máxima complejidad aromática y fruta. Ideal para cafés naturales o de perfil frutal. Mayor riesgo de sobresalir la acidez.',
        '<strong>Calcio puro (ratio 0:1):</strong> Cuerpo denso y sedoso. Ideal para espresso clásico y tuestes oscuros. Mayor riesgo de incrustaciones en calderas.',
        '<strong>Mix equilibrado (SCA 1:0, Hendon 1:1):</strong> La mayoría de perfiles de calidad usan magnesio como ión principal pero añaden algo de calcio para equilibrar la textura.',
      ],
    },
    {
      type: 'title',
      text: 'El Semáforo de Seguridad: Protege tu Máquina de Espresso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora incluye un <strong>análisis de riesgo en tiempo real</strong> basado en los valores de GH y KH que introduces. El índice de corrosión evalúa si el agua es demasiado pura y agresiva para los metales. El índice de cal mide si el KH y GH combinados generarán depósitos en calderas y tuberías.',
    },
    {
      type: 'tip',
      title: 'Regla práctica del barista profesional',
      html: '<p>Para máquinas de espresso con caldera de latón o cobre, nunca uses perfiles con KH inferior a 40 mg/L de forma continua. El agua muy pura es corrosiva a largo plazo. Para métodos de filtro (V60, Chemex, Aeropress) no hay caldera que proteger, por lo que puedes usar perfiles más delicados como Melbourne sin problema.</p>',
    },
    {
      type: 'title',
      text: 'Cómo Preparar las Botellas de Concentrado en Casa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La clave para una mineralización precisa es trabajar con <strong>concentrados stock</strong> en lugar de añadir sales directamente al agua final. Un concentrado de 2,46 g de sales de Epsom en 100 ml de agua destilada te permite dosificar con jeringas de 1 ml con una precisión de ±0,01 ml. Esta metodología, popularizada por Barista Hustle, convierte la química del café en algo tan sencillo como mezclar cócteles.',
    },
    {
      type: 'stats',
      items: [
        { label: 'GH ideal SCA', value: '68 mg/L', icon: 'mdi:water' },
        { label: 'KH ideal SCA', value: '40 mg/L', icon: 'mdi:water-percent' },
        { label: 'Coste aproximado por litro', value: '<0.05€', icon: 'mdi:currency-eur' },
      ],
      columns: 3,
    },
  ],
  ui: {
    sectionMixTitle: 'Configuración de Mezcla',
    labelVolume: 'Volumen Final',
    labelProfile: 'Perfil de Agua Objetivo',
    customProfileBtn: 'Personalizado',
    labelGH: 'GH Objetivo',
    labelKH: 'KH Objetivo',
    concentratesTitle: 'Botellas de Concentrado (g/100ml)',
    saltMgName: 'Magnesio (Epsom)',
    saltCaName: 'Calcio (CaCl2)',
    saltBufName: 'Bicarbonato (Sodio)',
    recipeTitle: 'Receta',
    labelMg: 'Magnesio:',
    labelCa: 'Calcio:',
    labelBuffer: 'Bicarbonato:',
    labelDistilledWater: 'Agua Destilada hasta',
    copyBtn: 'Copiar Receta',
    copiedText: '¡Copiado!',
    safetyMetalsTitle: 'Seguridad Metales',
    safetyScaleTitle: 'Riesgo de Cal',
    calculatingText: 'Calculando...',
    glossaryTitle: 'Guía Rápida de Minerales',
    profileSubTemplate: 'Objetivo: {gh} GH / {kh} KH',
    customProfileName: 'Personalizado',
    corrosionHigh: 'Peligro: Agua muy agresiva. Puede corroer calderas y componentes de cobre.',
    corrosionMedium: 'Aceptable: Riesgo moderado de corrosión. Recomendado para filtros.',
    corrosionLow: 'Seguro: El agua tiene suficiente buffer para proteger los metales.',
    scaleHigh: 'Peligro: Formación de cal inminente. Usar solo en métodos de filtrado manual.',
    scaleMedium: 'Precaución: Puede generar depósitos de cal a largo plazo en máquinas de espresso.',
    scaleLow: 'Seguro: No hay riesgo significativo de incrustaciones de cal.',
    copyTemplate:
      'Receta de Agua Café ({profileName}):\n- Volumen: {liters}L\n- Concentrado Magnesio: {mg}ml\n- Concentrado Calcio: {ca}ml\n- Concentrado Bicarbonato: {buf}ml\n- Agua Destilada: {water}ml',
    glossary0Term: 'Dureza Total (GH)',
    glossary0Desc:
      'La suma de Calcio y Magnesio. El Magnesio resalta el dulzor y la complejidad; el Calcio aporta cuerpo y textura.',
    glossary1Term: 'Alcalinidad (KH)',
    glossary1Desc:
      'Capacidad del agua para neutralizar ácidos. Un KH alto apaga la acidez del café; un KH bajo lo hace agrio.',
    glossary2Term: 'TDS (Sólidos Disueltos)',
    glossary2Desc:
      'Total de sólidos disueltos. En agua mineralizada, es la suma de todas nuestras sales añadidas.',
    glossary3Term: 'Magnesio',
    glossary3Desc:
      'Extrae compuestos de sabor complejos y frutales. Es el mineral favorito para cafés de especialidad.',
  },
};
