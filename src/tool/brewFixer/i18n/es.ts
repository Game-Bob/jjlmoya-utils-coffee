import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Ácido / Agrio',
    bitter: 'Amargo / Quemado',
    watery: 'Acuoso / Débil',
    astringent: 'Astringente / Seco',
  },
  causes: {
    acidic: ['Molienda demasiado gruesa (subextracción)', 'Temperatura del agua muy baja', 'Tiempo de preparación muy corto', 'Café muy fresco (no desgasificado)'],
    bitter: ['Molienda demasiado fina (sobreextracción)', 'Temperatura del agua muy alta', 'Tiempo de preparación muy largo', 'Café viejo o de tueste oscuro'],
    watery: ['Molienda muy gruesa (extracción débil)', 'Ratio muy alto (mucha agua)', 'Tiempo de preparación muy corto', 'Café viejo o de baja calidad'],
    astringent: ['Problemas de calidad del agua (muchos minerales)', 'Sobreextracción combinada con contenido mineral', 'Molienda muy fina con agua dura', 'Temperatura de preparación muy alta'],
  },
  solutions: {
    acidic: 'El agua fluye demasiado rápido a través de los granos gruesos sin extraer el cuerpo. Una molienda más fina aumenta la superficie de contacto y frena el flujo.',
    bitter: 'El agua pasó demasiado tiempo extrayendo, sacando compuestos amargos y cenizos. Una molienda más gruesa reduce el tiempo de contacto y la intensidad de la extracción.',
    watery: 'No hay suficientes sólidos disueltos en tu taza. Una molienda más fina o aumentar la dosis de café eleva el porcentaje de extracción y el cuerpo.',
    astringent: 'El agua rica en minerales sobreextrae y se une a los compuestos del café, creando una sensación de sequedad en la boca. Una molienda más gruesa reduce la sobreextracción mientras que el filtrado mejora la calidad del agua.',
  },
  actions: {
    acidic: { text: 'Moler un poco más fino', textSevere: 'Moler mucho más fino', icon: 'mdi:chevron-left' },
    bitter: { text: 'Moler un poco más grueso', textSevere: 'Moler mucho más grueso', icon: 'mdi:chevron-right' },
    watery: { text: 'Moler más fino o usar 5g más de café', textSevere: 'Moler mucho más fino o usar 7g más de café', icon: 'mdi:plus-circle' },
    astringent: { text: 'Usar agua filtrada y moler más grueso', textSevere: 'Usar agua filtrada y moler mucho más grueso', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Como sal fina', bitter: 'Como harina', watery: 'Como cacao en polvo', astringent: 'Harina ligeramente más fina' },
    pourover: { acidic: 'Como sal de mesa', bitter: 'Como arena gruesa', watery: 'Como harina de maíz fina', astringent: 'Arena fina' },
    aeropress: { acidic: 'Como harina de maíz fina', bitter: 'Como sal de mesa', watery: 'Como pimienta finamente molida', astringent: 'Arena media' },
    frenchpress: { acidic: 'Como pan rallado', bitter: 'Como sal de roca', watery: 'Como sal marina', astringent: 'Arena gruesa' },
    moka: { acidic: 'Como sal marina fina', bitter: 'Como arena fina', watery: 'Como sal de mesa', astringent: 'Arena media-fina' },
    coldbrew: { acidic: 'Como sal marina gruesa', bitter: 'Como grava', watery: 'Como sal de roca', astringent: 'Arena gruesa con granos' },
  },
  secondaryAction: 'Preparar a {temp}°C por {time}',
  tertiaryAction: 'Deja que el café se enfríe a temperatura ambiente antes de probarlo para captar todas las notas.',
};

const slug = 'diagnostico-extraccion-cafe-brew-fixer';
const title = 'Diagnóstico de Extracción de Café: The Brew Fixer';
const description =
  'Diagnostica por qué tu café sabe mal en segundos. Obtén ajustes personalizados de molienda, temperatura y tiempo según tu método y perfil de sabor.';

const faqData = [
  {
    question: '¿Cómo sé si mi café está subextraído o sobreextraído?',
    answer:
    'La subextracción (sabor agrio/ácido) ocurre cuando el agua pasa demasiado rápido sin disolver suficientes compuestos. La sobreextracción (sabor amargo/quemado) significa que el agua estuvo demasiado tiempo en contacto con el café. The Brew Fixer te ayuda a identificar qué está pasando analizando tus notas de sabor y método de preparación.',
  },
  {
    question: '¿Cuál es el error más común al preparar café?',
    answer:
    'El tamaño de la molienda. La mayoría de las personas muelen o demasiado grueso (café débil y agrio) o demasiado fino (café amargo y sobreextraído). Ajustar tu molino al tamaño exacto para tu método es el cambio que más impacto tendrá en tu taza.',
  },
  {
    question: '¿Realmente importa tanto la temperatura?',
    answer:
    'Sí. La temperatura del agua controla la velocidad de extracción. Si está muy fría, subextraes (agrio). Si está muy caliente, sobreextraes (amargo). Cada método tiene su rango ideal: los filtrados tipo V60 prefieren 92-96°C, mientras que la prensa francesa funciona mejor a 85-90°C para evitar la sobreextracción durante la inmersión prolongada.',
  },
  {
    question: '¿Por qué mi café es astringente o me deja la boca seca?',
    answer:
    'La astringencia suele deberse a un agua con muchos minerales o a una combinación de sobreextracción y minerales. Prueba a usar agua filtrada y una molienda ligeramente más gruesa. Si eso no ayuda, el TDS (total de sólidos disueltos) de tu agua podría ser muy alto; considera un filtro de agua.',
  },
  {
    question: '¿Puedo arreglar una mala taza ajustando solo temperatura y tiempo?',
    answer:
    'La temperatura y el tiempo ayudan, pero el tamaño de la molienda suele ser la raíz del problema. Si la molienda es demasiado gruesa, preparar por más tiempo o con agua más caliente solo ayudará ligeramente. The Brew Fixer siempre recomendará el ajuste de molienda como acción principal por su gran impacto.',
  },
  {
    question: '¿Debo usar la misma receta para todos mis cafés?',
    answer:
    'No. El café muy fresco (1-5 días de tostado) se extrae más rápido y puede necesitar una molienda algo más gruesa que un café más viejo. Los tuestes ligeros son más densos y suelen requerir moliendas más finas; los tuestes oscuros son más porosos y prefieren moliendas más gruesas.',
  },
];

const howToData = [
  {
    name: 'Selecciona tu método de preparación',
    text: 'Elige la cafetera que usaste: filtrado, prensa francesa, Aeropress, cafetera italiana (Moka), espresso o cold brew. La herramienta te dará recomendaciones específicas para ese método.',
  },
  {
    name: 'Identifica el defecto de sabor dominante',
    text: 'Prueba tu café y selecciona el sabor que más resalte: ácido (agrio), amargo (quemado), acuoso (débil) o astringente (seco). También puedes elegir un sabor secundario si el defecto es complejo.',
  },
  {
    name: 'Califica la intensidad',
    text: 'Mueve el deslizador para indicar qué tan fuerte es el defecto. "Leve" significa que apenas se nota; "severo" significa que domina la taza. Esto ayuda a calibrar la agresividad del ajuste.',
  },
  {
    name: 'Ejecuta el diagnóstico',
    text: 'Haz clic en el botón "Diagnosticar" y la herramienta analizará tus datos para darte una acción principal (molienda), acciones secundarias (temperatura y tiempo) y una referencia de textura.',
  },
  {
    name: 'Ajusta y prueba',
    text: 'Aplica el cambio recomendado en tu preparación (ej. moler más grueso, extraer más tiempo, usar agua filtrada). Prepara una nueva taza y pruébala. Los pequeños ajustes se acumulan.',
  },
  {
    name: 'Danos tu opinión',
    text: 'Cuando prepares la siguiente taza, indica si mejoró. Si es así, verás una animación de confeti. Si no, vuelve atrás y prueba con parámetros diferentes.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes sobre la Extracción de Café',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas y Ciencia del Café',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Por qué tu café sabe mal? Guía de Diagnóstico de Extracción',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La diferencia entre un espresso excepcional y una taza que sabe a papel quemado se reduce a un solo concepto: <strong>la extracción del café</strong>. La extracción es el proceso por el cual el agua disuelve los compuestos solubles del café molido. Hazlo bien y desbloquearás complejidad, dulzor y claridad. Hazlo mal y obtendrás acidez excesiva, amargor o un café aguado.',
    },
    {
      type: 'summary',
      title: 'Qué aprenderás con The Brew Fixer',
      items: [
        '<strong>Cómo diagnosticar defectos de extracción:</strong> Identifica si tu café está subextraído, sobreextraído, débil o si tiene problemas con la calidad del agua.',
        '<strong>Las tres palancas que controlan la extracción:</strong> Tamaño de molienda, temperatura del agua y tiempo de contacto. ¿Cuál deberías ajustar primero? The Brew Fixer te lo dice.',
        '<strong>Recomendaciones específicas por método:</strong> La molienda ideal para una V60 es totalmente distinta a la de una prensa francesa. Obtén consejos personalizados para tu cafetera.',
        '<strong>Referencias de textura:</strong> Sabrás exactamente qué punto de molienda buscar comparándolo con materiales familiares (polvo fino, sal marina, arena).',
      ],
    },
    {
      type: 'title',
      text: 'Las Tres Dimensiones de la Extracción de Café',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El porcentaje de extracción es la masa de sólidos disueltos dividida por la masa del café seco original. El café de especialidad busca una <strong>extracción del 18-20%</strong> en todos los métodos. Cualquier valor inferior suena agrio; cualquier valor superior suena amargo.',
    },
    {
      type: 'list',
      items: [
        '<strong>El tamaño de molienda</strong> controla el área de superficie. Las moliendas finas se extraen más rápido porque el agua tiene más superficie para disolver compuestos. Las moliendas gruesas extraen más lento.',
        '<strong>La temperatura del agua</strong> controla la velocidad de disolución. El agua caliente (94-96°C) extrae más rápido; el agua más fría (85-90°C) lo hace más lento. La temperatura también afecta a qué compuestos se disuelven primero.',
        '<strong>El tiempo de contacto</strong> es cuánto tiempo está el agua con el café. Filtrados (2:30-3:30 min), Aeropress (1:30-2:00 min), prensa francesa (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Cómo Diagnosticar un Café Agrio (Subextracción)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El café agrio sabe a limón, lima o manzana: es ácido y punzante. Significa que el agua no pasó suficiente tiempo extrayendo sólidos. La solución más sencilla es casi siempre <strong>moler más fino</strong> para aumentar la superficie y frenar el paso del agua.',
    },
    {
      type: 'list',
      items: [
        'Muele el café más fino (reduce el tamaño de molienda en 5-10 µm)',
        'O extiende el tiempo de preparación ligeramente (añade 15-30 segundos)',
        'O aumenta la temperatura del agua a 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Cómo Diagnosticar un Café Amargo (Sobreextracción)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El café amargo sabe a quemado, a ceniza o a madera. Significa que el agua pasó demasiado tiempo extrayendo sólidos, más allá de los compuestos deseables. La solución es casi siempre <strong>moler más grueso</strong> para aumentar el flujo de agua y reducir el tiempo de contacto.',
    },
    {
      type: 'list',
      items: [
        'Muele el café más grueso (aumenta el tamaño de molienda en 5-10 µm)',
        'O reduce el tiempo de preparación (resta 15-30 segundos)',
        'O baja la temperatura del agua a 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Cómo Diagnosticar un Café Acuoso (Débil, Ligero)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un café débil carece de sabor y cuerpo. Suele significar que tu molienda es muy gruesa, tu ratio es muy alto (demasiada agua para poco café) o el café está viejo. Ajustar el molino es la solución más rápida.',
    },
    {
      type: 'list',
      items: [
        'Usa una molienda más fina para que el agua tenga más superficie de extracción',
        'Usa más café (aumenta el ratio)',
        'Extrae un poco más de tiempo o a mayor temperatura',
      ],
    },
    {
      type: 'title',
      text: 'Cómo Diagnosticar un Café Astringente (Seco, Sabor Mineral)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La astringencia se siente como sequedad en la boca, como si hubieras mordido la piel de una uva. Suele deberse a agua dura (alto contenido mineral) combinada con sobreextracción. Este es más difícil porque requiere tanto ajustar la molienda <em>como</em> mejorar la calidad del agua.',
    },
    {
      type: 'list',
      items: [
        'Usa agua filtrada para reducir minerales (objetivo TDS 60-150 ppm)',
        'Muele más grueso para reducir la sobreextracción',
        'Prueba con agua ligeramente más fría (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Molienda: ¿Cómo se ve y se siente cada punto?',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nombre de Molienda', 'Tamaño de Partícula', 'Referencia de Textura', 'Mejores Métodos'],
      rows: [
        ['Extra Fina', '5-15 µm', 'Polvo fino, cacao', 'Espresso, Cafetera Turca'],
        ['Fina', '15-30 µm', 'Azúcar glass', 'Moka, Aeropress'],
        ['Media-Fina', '30-50 µm', 'Arena fina, sal de mesa', 'V60, Chemex, Filtrados'],
        ['Media', '50-70 µm', 'Arena de playa', 'Cafeteras de goteo, Filtros planos'],
        ['Gruesa', '70-90 µm', 'Arena gruesa, sal gorda', 'Prensa Francesa, Cata'],
        ['Extra Gruesa', '90+ µm', 'Pimienta en grano, pan rallado', 'Cold Brew, Percolador'],
      ],
    },
    {
      type: 'title',
      text: 'Calidad del Agua: El TDS y su Efecto en la Extracción',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El Total de Sólidos Disueltos (TDS) mide el contenido mineral del agua. El agua del grifo varía mucho por región: algunas ciudades tienen 50 ppm (agua blanda) y otras más de 300 ppm (agua dura). La extracción de café es muy sensible a esto.',
    },
    {
      type: 'list',
      items: [
        '<strong>Muy blanda (0-50 ppm):</strong> El agua sobreextrae, el café sabe salado y plano.',
        '<strong>Ideal (60-150 ppm):</strong> Extracción dulce, equilibrada y con cuerpo.',
        '<strong>Muy dura (200+ ppm):</strong> Los minerales se ligan a los compuestos del café, creando astringencia y sequedad.',
      ],
    },
    {
      type: 'tip',
      title: 'Truco rápido para el agua',
      html: '<p>Si sospechas que tu agua es dura, prueba a preparar café con agua filtrada o embotellada para comparar. Si el café sabe mejor de inmediato, has encontrado al culpable. Invierte en una jarra filtrante sencilla o un filtro doméstico.</p>',
    },
  ],
  ui: {
    methodLabel: '¿Qué estás preparando?',
    methodPourover: 'Filtrado / Pour Over',
    methodFrenchpress: 'Prensa Francesa',
    methodAeropress: 'Aeropress',
    methodMoka: 'Cafetera Italiana',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Selecciona tu cafetera',
    flavorLabel: '¿A qué sabe?',
    flavorAcidic: 'Ácido / Agrio',
    flavorBitter: 'Amargo',
    flavorWatery: 'Acuoso / Débil',
    flavorAstringent: 'Astringente',
    flavorHint: 'Elige hasta 2 sabores',
    severityLabel: '¿Qué tan fuerte es el problema?',
    severitySlightLabel: 'Apenas se nota',
    severityModerateLabel: 'Moderado',
    severitySevereLabel: 'Dominante',
    diagnoseBtn: 'Diagnosticar mi café',
    resetBtn: 'Reiniciar',
    resultTitle: 'Diagnóstico Completado',
    resultExplanation: 'Qué está pasando en tu taza',
    actionMainLabel: 'Acción Principal',
    actionSecondaryLabel: 'Temperatura y Tiempo',
    actionTertiaryLabel: 'Consejo Pro',
    textureReferenceLabel: 'Referencia de Textura',
    copyDiagnosisBtn: 'Copiar Diagnóstico',
    feedbackLabel: '¿Mejoró tu café?',
    feedbackSuccessTemplate: '¡Genial! El ajuste ha funcionado.',
    methodPouroverDesc: 'V60, Chemex, Gotero',
    methodFrenchpressDesc: 'Prensa, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka, Cafetera de fuego',
    methodEspressoDesc: 'Máquina de espresso, palanca',
    methodColdbrewDesc: 'Inmersión, en frío',
    fadeOutMessage: '¡Buen trabajo! Sigue ajustando.',
    backBtn: 'Volver',
    mainIssueLabel: 'Problema Principal',
    improvedBtn: 'Mejoró',
    notYetBtn: 'Aún no',
    copiedBtn: '¡Copiado!',
    combinedLabel: 'Combinado',
    diagnosisTitle: 'Diagnóstico de The Brew Fixer',
    issueLabel: 'Problema',
    causeLabel: 'Causa',
    actionLabel: 'Acción',
    whyLabel: 'Por qué',
    nextLabel: 'Siguiente',
    improvementHint: 'Haz el ajuste y prepara otra taza.',
  },
};
