import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'calculadora-ratio-aeropress';
const title = 'Calculadora de Ratio y Recetas para AeroPress';
const description = 'Calcula la distribución de agua, límites de capacidad de la cámara, dilución bypass y fases de extracción para café en AeroPress.';

const howTo = [
  {
    name: 'Elige el método y modelo de AeroPress',
    text: 'Selecciona entre el método Estándar o Invertido y define el tamaño de cámara de tu AeroPress (Original, XL o Go).',
  },
  {
    name: 'Ajusta la dosis de café y el ratio deseado',
    text: 'Introduce el peso de café molido en gramos y el ratio objetivo, o pulsa en una de las recetas de baristas de campeonato.',
  },
  {
    name: 'Comprueba el agua de cámara y dilución bypass',
    text: 'Verifica si la receta excede la capacidad de la cámara. La herramienta calcula automáticamente el agua de bypass a verter en la taza.',
  },
  {
    name: 'Sigue el cronómetro interactivo de fases',
    text: 'Inicia el temporizador integrado para clavar con precisión el preinfusionado (bloom), el tiempo de inmersión y el prensado suave.',
  },
];

const faq = [
  {
    question: '¿Cuál es la diferencia entre el método estándar e invertido en AeroPress?',
    answer: 'En el método estándar la cafetera apoya sobre la taza desde el inicio, produciendo un ligero goteo pasivo antes de colocar el émbolo. En el método invertido la cafetera reposa sobre el émbolo boca arriba, logrando una inmersión 100% estanca y un control milimétrico del tiempo de contacto antes de voltear.',
  },
  {
    question: '¿Qué es el bypass brewing o dilución en café de AeroPress?',
    answer: 'El método bypass consiste en extraer un concentrado de café muy intenso dentro de la capacidad física de la cámara y diluirlo posteriormente en la taza con agua limpia caliente. Esto permite preparar tazas grandes o perfiles muy dulces sin sobrellenar la cafetera.',
  },
  {
    question: '¿Cuál es el ratio ideal de café y agua para AeroPress?',
    answer: 'Para una taza clásica de filtro, los ratios entre 1:14 y 1:17 (por ejemplo 11g a 15g de café por 200g de agua) ofrecen un equilibrio excelente. Para concentrados tipo espresso o recetas con hielo, los ratios de 1:4 a 1:8 proporcionan gran cuerpo y densidad.',
  },
  {
    question: '¿Cómo afecta el tamaño de molienda a la extracción en AeroPress?',
    answer: 'Al combinar inmersión con filtrado por presión de aire, una molienda media fina es ideal para tiempos cortos de 1 a 2 minutos. Moliendas más finas aportan cuerpo y fuerza, mientras que moliendas medias o gruesas evitan la sobreextracción en tiempos largos.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Herramienta de Café de Especialidad',
    profileLabel: 'Perfil de Extracción',
    unitSystemLabel: 'Sistema de Unidades',
    unitMetricLabel: 'Métrico (g)',
    unitImperialLabel: 'Imperial (oz)',
    presetsTitle: 'Recetas de Baristas y Campeonatos',
    presetCustom: 'Fórmula Personalizada',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Tueste Claro',
    presetWacChamp: 'Campeón WAC Bypass',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew AeroPress Frío',
    methodLabel: 'Técnica de Preparación',
    methodStandard: 'Estándar Directo',
    methodInverted: 'Invertido en Inmersión',
    modelLabel: 'Modelo de AeroPress',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Dosis de Café',
    doseUnitMetric: 'gramos',
    doseUnitImperial: 'oz',
    ratioLabel: 'Ratio de Extracción',
    ratioPrefix: '1:',
    waterTempLabel: 'Temperatura del Agua',
    waterTempUnit: '°C',
    grindLabel: 'Perfil de Molienda',
    grindFine: 'Fina',
    grindMediumFine: 'Media Fina',
    grindMedium: 'Media',
    grindCoarse: 'Gruesa',
    resultsTitle: 'Distribución de Agua y Métricas',
    statTotalWater: 'Agua Total',
    statChamberWater: 'Agua en Cámara',
    statBypassWater: 'Agua de Bypass',
    statYield: 'Rendimiento en Taza',
    statEstimatedTds: 'TDS Estimado',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Dilución de Bypass Requerida',
    bypassAlertText: 'Tu receta requiere {chamber} en la cámara y {bypass} añadidos directamente en la taza.',
    timerTitle: 'Cronómetro por Fases',
    timerStart: 'Iniciar Cronómetro',
    timerPause: 'Pausar',
    timerReset: 'Reiniciar',
    phaseBloom: 'Preinfusión y Mojado',
    phasePour: 'Vertido y Agitado',
    phaseSteep: 'Inmersión y Reposo',
    phasePress: 'Prensado Suave',
    phaseBypass: 'Añadir Agua Bypass',
    phaseComplete: 'Extracción Lista',
    guideTitle: 'Guía de Extracción',
    guideStep1Title: 'Enjuagar Filtro y Dosificar Café',
    guideStep1Desc: 'Coloca el filtro de papel o metal en la tapa y enjuaga con agua caliente. Añade el café recién molido.',
    guideStep2Title: 'Verter Agua en la Cámara',
    guideStep2Desc: 'Vierte el agua calculada para la cámara a la temperatura adecuada y remueve suavemente.',
    guideStep3Title: 'Colocar Émbolo y Reposar',
    guideStep3Desc: 'Coloca el émbolo en la parte superior para crear vacío y deja infusionar el tiempo marcado.',
    guideStep4Title: 'Prensar y Diluir',
    guideStep4Desc: 'Baja el émbolo con presión constante durante 20 a 30 segundos. Para al oír el siseo y añade el agua bypass si aplica.',
    ratioStrengthLight: 'Ligero y Delicado',
    ratioStrengthMedium: 'Taza Equilibrada',
    ratioStrengthStrong: 'Intenso y Marcado',
    ratioStrengthConcentrate: 'Concentrado Tipo Espresso',
    chamberWaterLabel: 'Agua en Cámara',
    coffeeBedLabel: 'Lecho de Café',
    airGapLabel: 'Cámara de Aire',
  },
  seo: [
    { type: 'title', text: 'Fundamentos de Extracción y Ratios en AeroPress', level: 2 },
    {
      type: 'paragraph',
      html: 'La cafetera <strong>AeroPress</strong> es una de las herramientas más versátiles en el mundo del café de especialidad gracias a su combinación de inmersión completa y filtrado neumático por presión de aire. Obtener una taza dulce, limpia y aromática depende de dominar con precisión la proporción entre café molido y agua.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Límites de Capacidad y Física del Bypass',
      html: 'La cámara de una AeroPress estándar admite aproximadamente de 220ml a 240ml de líquido descontando el espacio ocupado por el lecho de café. Cuando se buscan volúmenes mayores o perfiles cristalinos, los baristas profesionales recurren al bypass: extraer un concentrado controlado y completar la taza con agua caliente limpia.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Ratio Áureo de Filtro' },
        { value: '230 ml', label: 'Capacidad de Cámara Estándar' },
        { value: '1.2 a 1.5%', label: 'Rango Óptimo de TDS' },
      ],
    },
    { type: 'title', text: 'Comparativa entre Método Estándar e Invertido', level: 3 },
    {
      type: 'paragraph',
      html: 'La orientación de la cafetera modifica sensiblemente la cinética de extracción y el control del tiempo de inmersión.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Método Estándar Directo',
          description: 'La tapa con filtro descansa directamente sobre el vaso o servidor. Colocar el émbolo en ángulo genera un vacío que detiene el goteo inicial.',
          points: [
            'Operación muy sencilla y segura',
            'Ligera percolación inicial durante el llenado',
            'Técnica predilecta de James Hoffmann por su repetibilidad',
          ],
        },
        {
          title: 'Método Invertido',
          description: 'La cafetera reposa boca arriba sobre el pistón, imposibilitando cualquier fuga de líquido hasta el momento exacto del giro.',
          highlight: true,
          points: [
            'Control absoluto del tiempo de contacto',
            'Perfecto para concentrados y altas dosis de café',
            'Exige precaución al voltear la cafetera caliente',
          ],
        },
      ],
    },
    { type: 'title', text: 'Cómo Utilizar la Técnica de Dilución Bypass', level: 3 },
    {
      type: 'paragraph',
      html: 'El bypass es la clave detrás de múltiples recetas ganadoras del World AeroPress Championship. Al extraer los solubles deseados con un ratio cerrado de 1:6 a 1:8, se evitan los compuestos amargos y astringentes que aparecen al final de la extracción prolongada. Diluir en la taza con agua caliente restaura el balance perfecto.',
    },
    {
      type: 'table',
      headers: ['Estilo de Receta', 'Dosis Café', 'Agua Cámara', 'Agua Bypass', 'Molienda Sugerida'],
      rows: [
        ['Filtro Hoffmann', '11g', '200g', '0g', 'Media Fina (600µm)'],
        ['Tim Wendelboe Claro', '14g', '200g', '0g', 'Media (700µm)'],
        ['Campeonato WAC Bypass', '30g', '120g', '105g', 'Gruesa (900µm)'],
        ['Alan Adler Concentrado', '17g', '80g', '100g Opcional', 'Fina (450µm)'],
        ['Flash Brew con Hielo', '18g', '150g', '100g Hielo', 'Media Fina (550µm)'],
      ],
    },
    { type: 'title', text: 'Consejos Prácticos para Maximizar la Calidad en Taza', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Ajuste de temperatura por tueste:</strong> Utiliza entre 92°C y 96°C para cafés de tueste claro y resalta notas afrutadas, y entre 80°C y 85°C para tuestes oscuros para evitar amargor astringente.',
        '<strong>Prensado lento y continuo:</strong> Aplica una presión suave y uniforme durante 20 a 30 segundos. Forzar el émbolo comprime en exceso el lecho y genera canalizaciones.',
        '<strong>Enjuague del filtro:</strong> Moja el disco de papel con agua caliente para eliminar sabores a celulosa y adherirlo perfectamente a la rejilla de la tapa.',
        '<strong>Detén el prensado al oír el siseo:</strong> Finalizar el recorrido cuando empieza a escapar aire previene extraer aceites pesados y finos amargos.',
      ],
    },
    {
      type: 'summary',
      title: 'Resumen de Recomendaciones',
      items: [
        'Adapta la molienda al tiempo de infusión: más fina para tiempos rápidos y más gruesa para inmersiones prolongadas.',
        'Usa el cálculo de bypass cada vez que el rendimiento supere la capacidad física de la cámara.',
        'Controla temperatura y tiempos de manera constante para obtener resultados reproducibles de nivel profesional.',
      ],
    },
  ],
  faq,
  faqTitle: 'Preguntas Frecuentes sobre Ratios y Recetas de AeroPress',
  bibliography,
  bibliographyTitle: 'Referencias Técnicas y Ciencia del Café',
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
