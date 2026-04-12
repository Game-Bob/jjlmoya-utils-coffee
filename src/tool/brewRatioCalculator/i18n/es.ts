import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'calculadora-ratio-cafe';
const title = 'Calculadora de Ratio de Café y Agua';
const description =
  'Calcula los gramos exactos de café o mililitros de agua según tu ratio ideal (1:15, 1:16...). Incluye resultado en taza, guía de vertido, modo iced coffee y recetas guardadas.';

const faqData = [
  {
    question: '¿Qué es el ratio 1:15 en café?',
    answer:
      'Significa que por cada gramo de café molido usas 15 mililitros (o gramos) de agua. Con 20 g de café, viertes 300 ml de agua. Es el ratio estándar recomendado por la Specialty Coffee Association para métodos de filtro como V60, Chemex o Aeropress.',
  },
  {
    question: '¿Por qué en mi taza hay menos café del que vierto?',
    answer:
      'Porque el café molido retiene agua durante la extracción. De media, cada gramo de café absorbe unos 2 ml de líquido. Si viertes 300 ml sobre 20 g de café, en la taza tendrás aproximadamente 260 ml. Esta calculadora te muestra el resultado real.',
  },
  {
    question: '¿Qué es el bloom o pre-infusión?',
    answer:
      'Es el primer vertido de agua, equivalente al doble del peso del café (2 ml por gramo). Se hace para desgasificar el café fresco: el CO2 atrapado en el tueste escapa y permite que el agua extraiga los compuestos de forma uniforme. Si no hay bloom visible, el café lleva tiempo molido o tostado.',
  },
  {
    question: '¿Cómo hacer café con hielo sin que quede aguado?',
    answer:
      'Usa la técnica de flash chilling: prepara el 60% del agua total como agua caliente a 90-96 grados y pon el 40% restante como hielo en la jarra. Vierte el café caliente directamente sobre el hielo. El enfriamiento rápido sella los aromas. Esta calculadora recalcula las cantidades automáticamente si activas el modo Iced Coffee.',
  },
  {
    question: '¿Cuál es el mejor ratio para una Aeropress?',
    answer:
      'Entre 1:12 y 1:15 según el uso. Si quieres tomar el café solo, 1:15 es equilibrado. Si lo usas como base para bebidas con leche o buscas concentración alta, baja a 1:12 o 1:13. La Aeropress es el método más versátil precisamente porque tolera muy bien diferentes ratios.',
  },
  {
    question: '¿Puedo guardar mis recetas favoritas?',
    answer:
      'Sí. Una vez que encuentres el ratio y la cantidad perfecta para tu café favorito, pulsa el botón Guardar esta receta, ponle un nombre (por ejemplo, V60 Mañanero) y quedará almacenada en tu navegador. Podrás recuperarla en cualquier momento con un solo clic.',
  },
];

const howToData = [
  {
    name: 'Elegir el modo de cálculo',
    text: 'Selecciona si partes de los gramos de café que tienes o de la capacidad de tu taza (ml de agua). La calculadora adapta todos los resultados al modo elegido.',
  },
  {
    name: 'Introducir la cantidad',
    text: 'Escribe los gramos de café o los mililitros de agua que vas a usar. La calculadora calculará automáticamente el otro valor según el ratio seleccionado.',
  },
  {
    name: 'Seleccionar la intensidad',
    text: 'Elige entre Fuerte (1:12-14), Equilibrado (1:15-16), Suave (1:17-18) o introduce tu ratio personalizado. Cada opción corresponde a un perfil de sabor diferente.',
  },
  {
    name: 'Activar modo Iced Coffee (opcional)',
    text: 'Si preparas café con hielo, activa el toggle. La calculadora dividirá automáticamente el agua entre agua caliente (60%) y hielo (40%) usando la técnica flash chilling.',
  },
  {
    name: 'Seguir la guía de vertido',
    text: 'Usa la guía de fases (Bloom y Vertido final) para estructurar tu proceso de preparación. Cada fase indica exactamente cuánta agua verter y cuándo.',
  },
  {
    name: 'Guardar la receta',
    text: 'Cuando encuentres tu ratio perfecto, guárdalo con un nombre descriptivo. Tus recetas quedan almacenadas en tu navegador para recuperarlas en futuras sesiones.',
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

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes sobre el Brew Ratio',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas y Estándares SCA',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Ratio de Café y Agua: La Guía Maestra para la Extracción Perfecta (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparar una taza de café de especialidad no es un acto culinario subjetivo; es un experimento de <strong>química de fluidos</strong> y <strong>transferencia de masa</strong>. En el centro de este proceso reside el concepto de <strong>Brew Ratio</strong> (proporción de infusión), una medida crítica que dicta la relación cuantitativa entre el soluto (café molido) y el disolvente (agua). Nuestra calculadora ha sido diseñada integrando los estándares de la <em>Specialty Coffee Association (SCA)</em> y principios de termodinámica aplicada para permitir que baristas y entusiastas alcancen la reproducibilidad perfecta en sus extracciones.',
    },
    {
      type: 'summary',
      title: 'Lo que aprenderás sobre el Ratio de Café',
      items: [
        '<strong>Brew Ratio:</strong> Cómo la relación en peso entre café y agua (ej. 1:15) determina la fuerza potencial y el perfil sensorial de tu taza.',
        '<strong>TDS y Extracción:</strong> La ciencia detrás de los sólidos disueltos y qué porcentaje del grano realmente debe terminar en tu bebida.',
        '<strong>Ajuste por Retención:</strong> Por qué el café absorbe 2g de agua por cada gramo de polvo y cómo calcular el agua extra necesaria.',
        '<strong>Métodos Específicos:</strong> Las proporciones ideales para V60, Prensa Francesa, Espresso y recetas de café helado (Flash Brew).',
      ],
    },
    {
      type: 'title',
      text: '¿Qué es el Brew Ratio y por qué es la variable más importante?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El café contiene aproximadamente un 30% de material soluble, pero no todo ese material es deseable para el paladar humano. El agua, actuando como disolvente universal, extrae los compuestos en un orden específico basado en su peso molecular y afinidad química. El ratio de café controla precisamente cuánta capacidad de disolución entregamos a cada gramo de café.',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase Ácida (Lípidos y Ácidos Orgánicos):</strong> Son los primeros en disolverse debido a su alta solubilidad. Aportan brillo, acidez málica o cítrica y notas frutales. Un ratio demasiado bajo (sub-extracción) detiene el proceso aquí, resultando en una taza agria y salada.',
        '<strong>Fase Dulce (Azúcares y Carbohidratos):</strong> Se extraen a continuación. Generan balance, dulzor y cuerpo. Es la "ventana dorada" donde el café alcanza su máxima complejidad aromática y equilibrio estructural.',
        '<strong>Fase Amarga (Fibras y Compuestos Fenólicos):</strong> Son los más lentos en disolverse. Con ratios excesivos (sobre-extracción), el agua degrada las celdas del café, extrayendo amargos secantes, notas a ceniza y madera.',
      ],
    },
    {
      type: 'title',
      text: 'Ratios recomendados: Proporciones por métodos de extracción',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada método de extracción requiere un ratio específico debido a variables como el tiempo de contacto, la presión de la bomba o el micraje del filtro utilizado. La siguiente tabla técnica desglosa los estándares de la industria para 2026:',
    },
    {
      type: 'table',
      headers: ['Método de Preparación', 'Ratio (Gramos/Agua)', 'Perfil en Taza', 'Tiempo Objetivo'],
      rows: [
        ['Espresso', '1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 seg'],
        ['V60 / Pour-Over', '1:15 a 1:16', 'Limpio, brillante, notas claras', '2:30-3:30 min'],
        ['Aeropress', '1:12 a 1:15', 'Versátil, cuerpo medio-alto', '1:30-2:00 min'],
        ['French Press', '1:12 a 1:14', 'Texturizado, pesado, aceitoso', '4:00-5:00 min'],
        ['Cold Brew', '1:8 a 1:12', 'Dulce, baja acidez, gran cuerpo', '12-24 horas'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo calcular el agua necesaria: El Factor de Retención del grano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno de los errores más comunes en la preparación manual es ignorar que el café molido es una estructura hidrofílica porosa que retiene una cantidad constante de agua. No todo el agua que viertes termina en la taza.',
    },
    {
      type: 'paragraph',
      html: 'Científicamente, el café molido retiene aproximadamente <strong>2.0 gramos de agua por cada 1.0 gramo de café</strong>. Nuestra calculadora introduce el <strong>Ajuste Dinámico de Retención</strong>: si necesitas llenar un recipiente específico de 300ml, el sistema deduce que debes verter 340ml de agua para compensar la absorción del grano, manteniendo el ratio de extracción intacto.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Dosis Café', value: '20g', icon: 'mdi:coffee' },
        { label: 'Agua Vertida', value: '300ml', icon: 'mdi:water' },
        { label: 'Retención', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'En Taza Real', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'La importancia del Bloom: Desgasificación para una extracción uniforme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fase de "Bloom" (florecimiento) no es solo estética; es una necesidad física. Durante el tueste, el café genera CO2 que queda atrapado en su matriz celular. Si vertemos todo el agua de forma continua, el gas escapa violentamente, creando micro-canales (channeling) y evitando que el disolvente penetre en el centro de las partículas de café.',
    },
    {
      type: 'tip',
      title: 'Técnica de Saturación Homogénea',
      html: '<p>Para un bloom perfecto, vierte exactamente el doble del peso del café en agua (ratio 1:2 de bloom). Realiza una agitación suave o swirl para garantizar que todo el café esté húmedo. Espera 30-45 segundos. La liberación de gas permitirá que, en los vertidos posteriores, el agua fluya de forma laminar y extraiga los sólidos de manera uniforme por toda la cama de café.</p>',
    },
    {
      type: 'title',
      text: 'Tutorial Iced Coffee: Cómo preparar café con hielo sin diluir el sabor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El café helado de especialidad (Flash Brew) requiere un recalibrado termodinámico. El objetivo es extraer los aceites volátiles a 94°C para capturar la complejidad aromática, pero enfriarlos de golpe para evitar la oxidación y la pérdida de brillo.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% Agua Caliente:</strong> Es la cantidad mínima necesaria para alcanzar una extracción del 18-20% sin sub-extraer en exceso ni enfriar el lecho demasiado pronto.',
        '<strong>40% Hielo Térmico:</strong> Se coloca en la jarra receptora. La energía térmica del café se transfiere al hielo (calor latente de fusión), enfriando la bebida a menos de 5°C instantáneamente.',
        '<strong>Fuerza Final:</strong> Al sumar ambos, el ratio final (ej. 1:15) se mantiene exacto, resultando en una bebida vibrante, fría y con la concentración de sabores correcta.',
      ],
    },
    {
      type: 'title',
      text: 'Grado de molienda y Ratio de café: La clave de la superficie de contacto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El ratio es solo la mitad de la ecuación. La molienda determina el <strong>Área de Superficie Total Expuesta</strong> al disolvente. Partículas más pequeñas (molienda fina) tienen más superficie proporcional, lo que acelera dramáticamente la extracción de compuestos químicos.',
    },
    {
      type: 'paragraph',
      html: 'Si decides usar un ratio largo (1:17 o 1:18) para un café de tueste muy ligero, debes compensar con una molienda ligeramente más fina para asegurar que el agua tenga tiempo de extraer los azúcares antes de atravesar el filtro. Por el contrario, ratios cortos (1:12) en métodos de inmersión prolongada requieren moliendas gruesas para evitar la sobre-extracción.',
    },
    {
      type: 'title',
      text: 'Reproducibilidad y Ciencia: Convierte tu cocina en un laboratorio barista',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La excelencia en el café de especialidad nace de la consistencia métrica. Nuestra función de <strong>Recetas Personalizadas</strong> permite crear un repositorio técnico de tus calibraciones exitosas. No es solo un archivo de favoritos; es una herramienta de análisis para comparar cómo reacciona un mismo kilo de café a un ratio 1:15 frente a un 1:16, permitiéndote ajustar la receta milimétricamente.',
    },
  ],
  ui: {
    modeCoffee: 'Tengo el Café',
    modeHintCoffee: 'Dime cuanta agua',
    modeWater: 'Tengo el Agua',
    modeHintWater: 'Dime cuanto café moler',
    inputLabelCoffee: 'Gramos de café que tienes',
    inputLabelWater: 'Capacidad de tu taza (ml)',
    intensityLabel: 'Intensidad del café',
    intensityStrong: 'Fuerte',
    intensityBalanced: 'Equilibrado',
    intensityLight: 'Suave',
    intensityCustom: 'Custom',
    customCoffeeLabel: 'Café',
    customWaterLabel: 'Agua',
    icedModeLabel: 'Modo Iced Coffee',
    recipeLabel: 'Tu receta exacta',
    resultTitle: 'Resultado',
    resultCoffeeLabel: 'Café',
    resultCoffeeSub: 'Molido fino-medio',
    resultHotWaterLabel: 'Agua caliente',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'Agua caliente (60%)',
    resultIceLabel: 'Hielo',
    resultIceSub: 'En la jarra',
    resultCupLabel: 'En tu taza',
    resultCupSub: 'El café retiene ~2ml/g',
    pouringGuideLabel: 'Guía de vertido',
    favoritesLabel: 'Mis recetas favoritas',
    saveBtn: '+ Guardar esta receta',
    favEmptyText: 'Aún no tienes recetas guardadas. Configura tu brew perfecto y guárdalo.',
    modalTitle: 'Nombra tu receta',
    modalPlaceholder: 'Ej: "V60 Mañanero"',
    modalCancel: 'Cancelar',
    modalConfirm: 'Guardar',
    phaseBloomTemplate: 'Bloom: Vierte {bloomMl} ml de agua en espiral. Espera {bloomSeconds} segundos para desgasificar el café.',
    phasePourTemplate: 'Vertido final: Agrega el resto hasta completar {hotWaterMl} ml en {pourCount} vertidos pausados.',
    phaseIcedTemplate: 'Iced: Vierte el café caliente directamente sobre los {iceMl} g de hielo en la jarra.',
    cupWarningTemplate: 'La taza recibe solo {inCupMl} ml. El café retiene líquido.',
    favModeCoffee: 'g café',
    favModeWater: 'ml agua',
    favModeIced: ' - Iced',
  },
};
