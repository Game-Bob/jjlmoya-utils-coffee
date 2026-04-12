import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';

const slug = 'cronometro-cafe';
const title = 'Cronómetro para Café de Filtro';
const description =
  'Temporizador profesional para café de especialidad con fases de vertido, avisos sonoros de ritmo y resumen de extracción. Optimizado para V60, Chemex y Aeropress.';

const faqData = [
  {
    question: '¿Por qué usar este cronómetro en lugar del móvil?',
    answer:
      'Este cronómetro está diseñado específicamente para café. Incluye fases visuales (Bloom, Vertido, Drenado), alertas sonoras 3 segundos antes de cada cambio y te permite configurar tu receta completa para no perder el ritmo durante el vertido.',
  },
  {
    question: '¿Qué es el tiempo de bloom?',
    answer:
      'Es la pre-infusión inicial (normalmente 30-45 segundos) donde se vierte un poco de agua para liberar el CO2. El cronómetro marca esta fase en color ámbar para que sepas cuándo esperar y cuándo seguir vertiendo.',
  },
  {
    question: '¿Cómo sé si el tiempo de mi extracción es correcto?',
    answer:
      'Para una V60 estándar, el tiempo total debería estar entre 2:30 y 3:15 minutos. Si termina antes, tu molienda es demasiado gruesa. Si tarda más, es demasiado fina. El cronómetro te permite diagnosticar este proceso con precisión.',
  },
  {
    question: '¿Tiene alertas sonoras?',
    answer:
      'Sí. El sistema emite un beep corto antes de terminar el bloom y al finalizar el proceso, permitiéndote concentrarte en el chorro de agua sin mirar la pantalla constantemente.',
  },
  {
    question: '¿Es compatible con Chemex?',
    answer:
      'Totalmente. Puedes ajustar el tiempo total a 4:30 o 5:00 minutos (típico de Chemex por su filtro grueso) en la sección de ajustes al inicio.',
  },
  {
    question: '¿Funciona en móviles?',
    answer:
      'Está optimizado para uso móvil, con botones grandes fáciles de pulsar incluso con las manos húmedas o mientras sujetas la jarra de vertido.',
  },
];

const howToData = [
  {
    name: 'Configura tu receta',
    text: 'En la sección inferior, ajusta el agua total, el agua de bloom, el tiempo de bloom y el tiempo total según tu método de preparación (V60, Chemex, Aeropress).',
  },
  {
    name: 'Pulsa el botón de inicio',
    text: 'Presiona el botón grande de inicio. El cronómetro arrancará y mostrará la fase activa en la barra de progreso superior.',
  },
  {
    name: 'Fase Bloom',
    text: 'Vierte el agua de bloom (indicada en pantalla) en espiral y espera a que el cronómetro avance. Recibirás un aviso sonoro 3 segundos antes de que termine.',
  },
  {
    name: 'Fase Vertido',
    text: 'Continúa vertiendo el agua restante hasta alcanzar el peso total. Vierte en círculos constantes y lentos para una extracción uniforme.',
  },
  {
    name: 'Fase Drenado',
    text: 'Espera a que el café drene completamente a través del filtro. Esta fase finaliza la extracción y determina la claridad y el final de tu taza.',
  },
  {
    name: 'Revisa el resumen',
    text: 'Al finalizar, el cronómetro muestra el tiempo total y el agua vertida. Anota estos valores junto con tus impresiones de sabor para perfeccionar la receta.',
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes sobre el Cronómetro de Café',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas y Protocolos SCA',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Brewing Best Practices',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
    {
      name: 'Barista Hustle: The Theory of Extraction',
      url: 'https://www.baristahustle.com/blog/the-theory-of-extraction/',
    },
    {
      name: 'World Brewers Cup: Competition Protocol',
      url: 'https://worldcoffeeevents.org/world-brewers-cup/',
    },
    {
      name: 'Perfect Daily Grind: How Brew Time Affects Coffee Flavor',
      url: 'https://perfectdailygrind.com/2019/04/how-brew-time-affects-your-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cronómetro para Café de Filtro: La Ciencia del Tiempo en la Extracción (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el mundo del café de especialidad, el <strong>tiempo de contacto</strong> entre el agua y el café molido no es una simple métrica de espera; es el factor cinético que decide qué compuestos químicos terminan en tu taza. Un segundo de más puede significar el paso del dulzor de un caramelo a la amargura de la ceniza. Nuestra herramienta de cronometraje profesional para V60, Chemex y Aeropress actúa como un <strong>asistente de ritmo</strong>, haciendo que la precisión barista sea accesible en casa.',
    },
    {
      type: 'summary',
      title: '¿Por qué es vital un cronómetro especializado?',
      items: [
        '<strong>Control Cinético:</strong> La velocidad a la que el agua disuelve los sólidos del café es constante. El tiempo es tu freno y acelerador.',
        '<strong>Fases de Vertido:</strong> El café no se extrae de forma lineal. Dividir el tiempo en Bloom, Vertido y Drenado es crítico.',
        '<strong>Reproducibilidad:</strong> Si no mides el tiempo, no puedes repetir tus mejores tazas. La consistencia es la base de la calidad.',
        '<strong>Ajuste de Molienda:</strong> El tiempo final te indica si debes moler más fino o más grueso para la próxima vez.',
      ],
    },
    {
      type: 'title',
      text: 'La Cronología de la Extracción: ¿Qué ocurre en cada segundo?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando el agua caliente toca el café, comienza una carrera de obstáculos molecular. No todos los sabores se extraen al mismo tiempo. Entender esta cronología es la diferencia entre un barista amateur y uno profesional:',
    },
    {
      type: 'list',
      items: [
        '<strong>Segundos 0 a 45 (Bloom):</strong> Es la fase de desgasificación. El CO2 atrapado en el tueste bloquea la entrada del agua. El tiempo de espera aquí permite que el grano se abra, preparando el camino para una extracción homogénea.',
        '<strong>Segundos 45 a 120 (Extracción de Ácidos y Dulces):</strong> El agua fluye y disuelve las sales minerales, ácidos orgánicos y azúcares complejos. Es el corazón del sabor.',
        '<strong>Segundos 120 a 210 (Cuerpo y Final):</strong> Se extraen las fibras más pesadas y los compuestos amargos. Si esta fase se alarga demasiado, el café se vuelve astringente.',
      ],
    },
    {
      type: 'title',
      text: 'La Fase del Bloom: Por qué 30 segundos son el estándar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El <strong>Bloom</strong> o pre-infusión es el momento en que vertemos aproximadamente el doble del peso del café en agua. Estos 30 segundos iniciales sirven para expulsar el dióxido de carbono. Sin respetar este tiempo el gas empujará el agua hacia afuera, creando canales por donde el líquido pasa sin tocar el café (channeling), resultando en una taza aguada e inconsistente.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Tiempo Sugerido', 'Acción Técnica', 'Propósito Químico'],
      rows: [
        ['Bloom', '30 a 45 seg', 'Vierte 2x peso de café', 'Desgasificación (CO2)'],
        ['Primer Vertido', '45 a 90 seg', 'Círculos lentos', 'Extracción de ácidos y dulces'],
        ['Segundo Vertido', '90 a 150 seg', 'Vertido central suave', 'Balance y cuerpo'],
        ['Drawdown', 'Hasta fin', 'Goteo constante', 'Claridad y final'],
      ],
    },
    {
      type: 'title',
      text: 'El Impacto del Tiempo en la Molienda: El Ciclo de Retroalimentación',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El cronómetro es tu mejor herramienta de diagnóstico para el molino. Si tu receta de V60 debe tardar 3:00 minutos y el agua ha drenado por completo en 2:15, el café sabrá probablemente agrio y débil (sub-extracción). La solución no es verter más lento, sino <strong>moler más fino</strong> para que las partículas opongan más resistencia al agua.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Tiempo Ideal V60', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Tiempo Ideal Chemex', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Tiempo Ideal Aeropress', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Alertas de Ritmo: Por qué el asistente sonoro es fundamental',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Preparar un café de filtro exige atención visual constante en la báscula y el patrón de vertido. Nuestro cronómetro incluye <strong>avisos sonoros de proximidad</strong> que te indican 3 segundos antes cuándo debes empezar el siguiente vertido o cuándo termina el bloom. Es la diferencia entre una extracción fluida y una llena de interrupciones.',
    },
    {
      type: 'tip',
      title: 'Consejo de Competencia Barista',
      html: '<p>Mantén el flujo de agua lo más bajo y cercano posible a la cama de café. Un vertido desde mucha altura introduce oxígeno y agitación excesiva, lo que puede sobre-extraer el café y enfriar el agua demasiado rápido. Usa el cronómetro para mantener un ritmo circular constante de unos 5 a 7 gramos de agua por segundo.</p>',
    },
    {
      type: 'title',
      text: 'Termodinámica y Tiempo: La Variable de la Temperatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El tiempo influye en la temperatura del sistema. Una extracción que dura 6 minutos perderá mucha energía térmica, resultando en una taza con acidez desbalanceada al final. Los rangos de tiempo óptimos mantienen el agua entre 90°C y 96°C durante toda la extracción.',
    },
    {
      type: 'title',
      text: 'Cronometrar para Iced Coffee con Técnica Flash Brew',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando preparas café sobre hielo, el tiempo debe ser más agresivo. Al usar menos agua caliente (60% del total), el tiempo de contacto se reduce. Para compensar, usa una molienda ligeramente más fina que mantenga el tiempo de extracción dentro de los 2:30 a 3:00 minutos.',
    },
    {
      type: 'title',
      text: 'Resumen Post-Extracción: Aprendizaje Continuo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al finalizar cada proceso, nuestra herramienta muestra el tiempo total de contacto. Anota este valor junto con tus impresiones de sabor. ¿Sabe amargo? La próxima vez busca un tiempo total 15 segundos menor. ¿Sabe metálico o agrio? Busca 20 segundos más. El cronómetro no hace el café por ti, pero te da los datos necesarios para que tú seas el artista.',
    },
  ],
  ui: {
    readyText: 'Listo para empezar',
    startBtn: 'INICIAR EXTRACCIÓN',
    pauseBtn: 'PAUSAR',
    resumeBtn: 'REANUDAR',
    resetBtn: 'REINICIAR',
    newBrewBtn: 'NUEVO BREW',
    targetLabel: 'Agua Objetivo:',
    instructionStart: 'Pulsa el botón gigante',
    hintStart: 'Prepara tu V60 o Chemex',
    phase1Label: 'Fase 1: Bloom',
    phase2Label: 'Fase 2: Vertido',
    phase3Label: 'Fase 3: Drenado',
    instructionBloom: 'Vierte {bloomWater}g de agua',
    hintBloom: 'Mueve suavemente para saturar',
    instructionPour: 'Llega hasta los {waterTotal}g',
    hintPour: 'Vierte en círculos constantes',
    instructionDrain: 'Espera el drenado final',
    hintDrain: 'Casi listo para disfrutar',
    summaryTitle: '¡Extracción completa!',
    summaryMessage: 'Tu café está listo para servir.',
    statTimeLabel: 'Tiempo Total',
    statWaterLabel: 'Agua Vertida',
    setupTitle: 'Configuración de receta',
    labelWater: 'Agua Total (g)',
    labelBloomWater: 'Agua Bloom (g)',
    labelBloomTime: 'Tiempo Bloom (s)',
    labelTotalTime: 'Tiempo Total (s)',
  },
};
