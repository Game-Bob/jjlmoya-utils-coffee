import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-grind-size-converter';
const title = 'Coffee Grind Size Converter';
const description =
 'Interactive grind size chart with clicks and levels guide for adjusting your grinder between Espresso, V60, French Press and more. Technical micron mapping for all extraction methods.';

const faqData = [
 {
 question: "Why doesn't the same grind setting work for all coffees?",
 answer:
 'Bean density varies by roast level and origin. A light roast is typically denser and requires a finer grind to extract properly, while a dark roast is more porous and needs a coarser setting.',
 },
 {
 question: 'How do I know whether to grind finer or coarser?',
 answer:
 'Let your taste guide you: if the coffee tastes bitter and dry, grind coarser so the water flows faster. If it tastes sour, salty or watery, grind finer to increase the contact surface area.',
 },
 {
 question: "What is 'channeling' and how does grind affect it?",
 answer:
 'Channeling occurs when water finds a path of least resistance through the coffee bed. An uneven or inappropriate grind for the pressure, especially in espresso, encourages this problem and ruins extraction.',
 },
 {
 question: 'Can I use this chart with a blade grinder?',
 answer:
 'Blade grinders produce non-uniform particles, fine powder and large chunks simultaneously. The micron values are indicative, but actual results will vary significantly compared to a burr grinder.',
 },
 {
 question: 'What does grinder uniformity mean in the visualization?',
 answer:
 'The particle distribution shown simulates the real uniformity of each grinder. A Comandante C40 with 0.95 uniformity produces very consistent particles; a Hario Skerton with 0.40 shows much more size variation.',
 },
];

const howToData = [
 {
 name: 'Select your grinder',
 text: 'Choose your model from the dropdown list. The converter will show the recommended clicks or levels specifically for your equipment.',
 },
 {
 name: 'Select your extraction method',
 text: 'Click the icon for the method you plan to use. The control panel will update with all the relevant technical parameters.',
 },
 {
 name: 'Interpret the micron indicator',
 text: "Use the micron value in the bar chart to understand the actual particle size. The tactile reference (fine salt, granulated sugar...) helps you calibrate visually.",
 },
 {
 name: 'Observe the particle simulation',
 text: "The distribution of dots shows your grinder's typical uniformity. A more homogeneous pattern means more predictable and repeatable extraction.",
 },
 {
 name: 'Adjust by taste',
 text: 'Use the diagnostic guide at the bottom as a reference. If coffee tastes bitter, go a couple of clicks coarser. If it tastes sour, go finer. Always adjust one step at a time.',
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
 inLanguage: 'en',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Frequently Asked Questions about Coffee Grind Size',
 faq: faqData,
 bibliographyTitle: 'References on Grind and Extraction',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema,
  {
  "question": "How often should I clean my grinder burrs?",
  "answer": "For manual grinders, clean every 2-3 weeks of daily use. For electric grinders, clean monthly. Accumulated coffee oils turn rancid and affect extraction freshness."
}],
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
 },
 {
 type: 'table',
 headers: ['Method', 'Microns', 'Tactile reference', 'Contact time'],
 rows: [
 ['Ibrik (Turkish)', '100-300 μm', 'Talc / Fine flour', '3-5 min boiling'],
 ['Espresso', '300-500 μm', 'Fine salt', '25-30 sec'],
 ['Moka / AeroPress', '500-700 μm', 'Table salt', '3-4 min'],
 ['V60 / Filter', '700-900 μm', 'Granulated sugar', '2:30-3:15 min'],
 ['Chemex / Clever', '900-1200 μm', 'Coarse sand', '3:30-4:30 min'],
 ['French Press', '1200-1500 μm', 'Coarse salt', '4 min immersion'],
 ['Cold Brew', '1500+ μm', 'Peppercorns', '12-24 h cold'],
 ],
 },
 {
 type: 'tip',
 title: 'Golden rule for new coffees',
 html: '<p>When you open a new coffee, always start at the midpoint of the recommended range for your method. From there, adjust by taste one click at a time. Keep notes on each adjustment to build a reference log of your favorite coffees with each grinder.</p>',
 },
 ],
 ui: {
 step1Label: 'Step 1: Equipment Selection',
 step2Label: 'Step 2: Extraction Method',
 gaugeLabel: 'Technical Particle Map (μm)',
 distributionLabel: 'Actual Particle Distribution',
 refLabel: 'Reference',
 rangeMicrasLabel: 'Range μm',
 unitMicras: 'TARGET MICRONS (μm)',
 unitClicks: 'RECOMMENDED CLICKS',
 unitLevel: 'RECOMMENDED LEVEL',
 suggestGrinderText: "Don't see your grinder? Suggest it",
 method0Name: 'Ibrik (Turkish)',
 method0Ref: 'Talc / Fine flour',
 method0Desc: 'Extra fine powder, almost like flour. Essential for the suspension of Turkish coffee.',
 method1Name: 'Espresso',
 method1Ref: 'Fine salt',
 method1Desc: 'High-pressure extraction requires very fine grinding to create resistance.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Table salt',
 method2Desc: 'Medium pressure or hybrid immersion. Versatile and balanced texture.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Granulated sugar',
 method3Desc: 'Manual drip methods, the standard for highlighting sweetness and acidity.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Coarse sand',
 method4Desc: 'Thick filters or short immersion. Requires constant and steady flow.',
 method5Name: 'French Press',
 method5Ref: 'Coarse salt',
 method5Desc: 'Extended immersion needs large particles to filter through the metal mesh.',
 method6Name: 'Cold Brew',
 method6Ref: 'Peppercorns',
 method6Desc: 'Cold extraction over many hours requires the coarsest grind possible.',
 troubleIssue0: 'Tastes bitter, dry or astringent?',
 troubleSolution0:
 'You are over-extracting. Grind coarser so water flows faster and extracts fewer bitter compounds.',
 troubleAction0: 'Grind coarser',
 troubleIssue1: 'Tastes sour, salty or watery?',
 troubleSolution1:
 'You are under-extracting. Grind finer to increase contact surface and extract more sugars and body.',
 troubleAction1: 'Grind finer',
 },
};
