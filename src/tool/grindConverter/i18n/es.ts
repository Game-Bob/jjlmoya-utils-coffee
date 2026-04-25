import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conversor-molienda-cafe';
const title = 'Conversor de Molienda de Café';
const description =
  'Tabla interactiva con guía de clics y niveles para ajustar tu molino entre Espresso, V60, Prensa Francesa y más. Mapeo técnico en micras para todos los métodos de extracción.';

const faqData = [
  {
    question: '¿Por qué el mismo ajuste no sirve para todos los cafés?',
    answer:
      'La densidad del grano varía según el tueste y el origen. Un tueste claro suele ser más denso y requiere molienda más fina para extraerse correctamente, mientras que uno oscuro es más poroso y necesita mayor grosor.',
  },
  {
    question: '¿Cómo sé si debo moler más fino o más grueso?',
    answer:
      'Guíate por el sabor: si el café está amargo y seco, muele más grueso para que el agua pase más rápido. Si está agrio, salado o acuoso, muele más fino para aumentar la superficie de contacto.',
  },
  {
    question: "¿Qué es la 'canalización' y cómo le afecta la molienda?",
    answer:
      'La canalización ocurre cuando el agua encuentra un camino de menor resistencia. Una molienda poco uniforme o inadecuada para la presión —especialmente en espresso— favorece este problema y arruina la extracción.',
  },
  {
    question: '¿Puedo usar esta tabla con cualquier molino de cuchillas?',
    answer:
      'Los molinos de cuchillas no producen partículas uniformes: generan polvo fino y trozos grandes simultáneamente. Los valores de micras son orientativos, pero los resultados reales variarán significativamente respecto a un molino de muelas.',
  },
  {
    question: '¿Qué significa la uniformidad del molino en la visualización?',
    answer:
      'La distribución de partículas que ves en pantalla simula la uniformidad real de cada molino. Un Comandante C40 con uniformidad 0,95 producirá partículas muy homogéneas; un Hario Skerton con 0,40 tendrá mucha variación de tamaño.',
  },
  {
    question: '¿Cada cuánto debo limpiar las muelas de mi molino?',
    answer:
      'Para molinos manuales, cada 2-3 semanas de uso diario. Para molinos eléctricos de uso doméstico, mensualmente. Los aceites del café acumulados pueden afectar la frescura del sabor y el comportamiento de la extracción.',
  },
];

const howToData = [
  {
    name: 'Selecciona tu molino',
    text: 'Elige tu modelo de la lista desplegable. El conversor mostrará los clics o niveles recomendados específicamente para tu equipo.',
  },
  {
    name: 'Selecciona tu método de extracción',
    text: 'Pulsa el icono del método que vas a usar hoy. El panel de control se actualizará con todos los parámetros técnicos relevantes.',
  },
  {
    name: 'Interpreta el indicador de micras',
    text: 'Usa el valor de micras en el gráfico de barra para entender el tamaño real de la partícula. La referencia táctil (sal fina, azúcar granulada...) te ayuda a calibrar visualmente el resultado.',
  },
  {
    name: 'Observa la simulación de partículas',
    text: 'La distribución de puntos muestra la uniformidad típica de tu molino. Un patrón más homogéneo significa extracción más predecible y repetible.',
  },
  {
    name: 'Ajusta por sabor',
    text: 'Usa la guía de diagnóstico inferior como referencia. Si el café sabe amargo, sube un par de clics hacia lo grueso. Si sabe agrio, baja hacia lo fino. Siempre de uno en uno.',
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

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes sobre la Molienda del Café',
  faq: faqData,
  bibliographyTitle: 'Referencias sobre Molienda y Extracción',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Física de la Molienda: Por qué el Tamaño de Partícula lo Cambia Todo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando mueles café, no solo estás reduciendo el tamaño del grano. Estás definiendo la <strong>superficie de contacto</strong> disponible para que el agua disuelva los compuestos de sabor. Una molienda demasiado fina expone tanta superficie que el agua extrae en exceso los compuestos amargos. Demasiado gruesa, y el agua pasa sin encontrar suficiente resistencia, resultando en un café débil y agrio. El conversor de molienda te da el punto exacto para cada método.',
    },
    {
      type: 'summary',
      title: '¿Qué determina el grosor de molienda correcto?',
      items: [
        '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
        '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
        '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
        '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
      ],
    },
    {
      type: 'title',
      text: 'Espresso vs V60: Los Dos Extremos del Espectro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>espresso</strong> extrae a 9 bares de presión en apenas 25-30 segundos. Para que esto funcione, el café molido debe ofrecer exactamente la resistencia correcta: una molienda entre 300-500 micras crea ese lecho compacto. Demasiado grueso y el agua pasa en 10 segundos produciendo una taza aguada; demasiado fino y la máquina no puede generar flujo.',
    },
    {
      type: 'paragraph',
      html: 'El <strong>V60</strong>, en cambio, funciona por gravedad. El agua tiene que fluir a través de un lecho de partículas más gruesas (700-900 micras) durante 2-3 minutos completos. Si el grano está demasiado fino, el filtro de papel se satura y el café tarda demasiado, sobre-extrayendo. Si está muy grueso, el agua pasa en 60 segundos sin extraer suficiente sabor.',
    },
    {
      type: 'table',
      headers: ['Método', 'Micras', 'Referencia táctil', 'Tiempo contacto'],
      rows: [
        ['Ibrik (Turco)', '100-300 μm', 'Talco / Harina fina', '3-5 min ebullición'],
        ['Espresso', '300-500 μm', 'Sal fina', '25-30 seg'],
        ['Moka / Aeropress', '500-700 μm', 'Sal de mesa', '3-4 min'],
        ['V60 / Filtro', '700-900 μm', 'Azúcar granulada', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200 μm', 'Arena gruesa', '3:30-4:30 min'],
        ['Prensa Francesa', '1200-1500 μm', 'Sal gorda', '4 min inmersión'],
        ['Cold Brew', '1500+ μm', 'Granos de pimienta', '12-24 h en frío'],
      ],
    },
    {
      type: 'title',
      text: 'Uniformidad: El Factor Diferencial entre Molinos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>uniformidad de la partícula</strong> es la métrica real que separa un molino de gama alta de uno básico. Cuando un Comandante C40 muele a 20 clics, produce partículas casi idénticas entre sí (95% uniformidad). Cuando un molino de cuchillas "muele" al mismo tiempo, el resultado es caótico: polvo fino y trozos grandes conviven, extrayéndose a velocidades completamente diferentes.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Comandante C40', value: '95%', icon: 'mdi:star' },
        { label: 'Timemore C2/C3', value: '85%', icon: 'mdi:star-half-full' },
        { label: 'Hario Skerton', value: '40%', icon: 'mdi:star-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Diagnóstico por Sabor: La Brújula del Barista',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ninguna tabla sustituye al paladar. El conversor te da el punto de partida técnico, pero el ajuste final siempre lo hace el sabor. <strong>Amargo y seco</strong> = sobre-extracción = muele más grueso. <strong>Agrio y acuoso</strong> = sub-extracción = muele más fino. Ajusta de uno en uno (un clic, un nivel) hasta encontrar el equilibrio perfecto para tu grano y agua específicos.',
    },
    {
      type: 'tip',
      title: 'Regla de oro para nuevos cafés',
      html: '<p>Cuando abras un café nuevo, empieza siempre por el punto medio del rango recomendado para tu método. Desde ahí, ajusta según sabor en pasos de un clic. Anota el resultado de cada ajuste para construir un registro de referencia de tus cafés favoritos con cada molino.</p>',
    },
  ],
  ui: {
    step1Label: 'Paso 1: Selección de Equipo',
    step2Label: 'Paso 2: Método de Extracción',
    gaugeLabel: 'Mapeo Técnico de Partícula (μm)',
    distributionLabel: 'Distribución Real de Partículas',
    refLabel: 'Referencia',
    rangeMicrasLabel: 'Rango μm',
    unitMicras: 'MICRAS (μm) OBJETIVO',
    unitClicks: 'CLICS RECOMENDADO',
    unitLevel: 'NIVEL RECOMENDADO',
    suggestGrinderText: '¿No está tu molino? Sugiérelo',
    method0Name: 'Ibrik (Turco)',
    method0Ref: 'Talco / Harina fina',
    method0Desc: 'Polvo extra fino, casi como harina. Vital para la suspensión del café turco.',
    method1Name: 'Espresso',
    method1Ref: 'Sal fina',
    method1Desc: 'Extracción a alta presión, requiere molienda muy fina para crear resistencia.',
    method2Name: 'Moka / Aeropress',
    method2Ref: 'Sal de mesa',
    method2Desc: 'Presión media o inmersión híbrida. Textura versátil y equilibrada.',
    method3Name: 'V60 / Filtro',
    method3Ref: 'Azúcar granulada',
    method3Desc: 'Métodos de goteo manual, el estándar para resaltar dulzor y acidez.',
    method4Name: 'Chemex / Clever',
    method4Ref: 'Arena gruesa',
    method4Desc: 'Filtros gruesos o inmersión breve. Requiere flujo constante.',
    method5Name: 'Prensa Francesa',
    method5Ref: 'Sal gorda',
    method5Desc: 'Inmersión prolongada, necesita partículas grandes para filtrar con malla.',
    method6Name: 'Cold Brew',
    method6Ref: 'Granos de pimienta',
    method6Desc: 'Extracción en frío durante horas, requiere la molienda más gruesa posible.',
    troubleIssue0: '¿Sabe amargo, seco o astringente?',
    troubleSolution0:
      'Estás sobre-extrayendo. Muele más grueso para que el agua pase más rápido y extraiga menos compuestos amargos.',
    troubleAction0: 'Moler más grueso',
    troubleIssue1: '¿Sabe agrio, salado o acuoso?',
    troubleSolution1:
      'Estás sub-extrayendo. Muele más fino para aumentar la superficie de contacto y extraer más azúcares y cuerpo.',
    troubleAction1: 'Moler más fino',
  },
};
