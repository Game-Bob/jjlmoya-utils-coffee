import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-coffee-water-calculator';
const title = 'SCA Coffee Water Calculator';
const description =
 'Calculate exact mineral concentrations for specialty coffee. SCA, Barista Hustle and Hendon profiles. Control Magnesium, Calcium and Bicarbonate to maximize flavor and protect your machine.';

const faqData = [
 {
 question: 'What is the SCA water quality standard?',
 answer:
 'The Specialty Coffee Association defines a technical standard for brewing water, specifying optimal ranges for total hardness (GH), alkalinity (KH), pH and sodium to achieve balanced extraction that enhances flavor without damaging equipment.',
 },
 {
 question: 'Why not just use tap water?',
 answer:
 'Tap water varies significantly by location and season. It may contain chlorine, excess limescale or mineral levels that mask specialty coffee flavors and damage boilers and seals. Mineralizing distilled water gives you full control and repeatable results.',
 },
 {
 question: 'Where do I get the mineral salts?',
 answer:
 'Epsom salts (magnesium sulfate) and sodium bicarbonate are available at pharmacies and supermarkets. Calcium chloride is common in home brewing supply shops. Always ensure they are food-grade quality.',
 },
 {
 question: 'Is it safe for my espresso machine?',
 answer:
 'The calculator includes a real-time risk indicator. Very pure water corrodes metal components; very hard water causes limescale buildup. The SCA Ideal and Barista Hustle profiles are designed to balance equipment longevity with flavor quality.',
 },
 {
 question: 'What is the difference between Magnesium and Calcium in coffee?',
 answer:
 'Magnesium extracts fruity and sweet flavor compounds more efficiently and is the preferred mineral for filter methods. Calcium delivers more body and silky texture but has a greater tendency to form scale deposits in boilers over time.',
 },
];

const howToData = [
 {
 name: 'Get pure base water',
 text: 'Purchase distilled or demineralized water, or use a reverse osmosis system. The goal is to start at 0 ppm total dissolved solids for complete control over mineralization.',
 },
 {
 name: 'Prepare your stock concentrate bottles',
 text: 'Dissolve each salt separately in 100ml of distilled water: 2.46g of Epsom salt for Magnesium, 1.47g of CaCl2 for Calcium, and 1.68g of bicarbonate for the Buffer.',
 },
 {
 name: 'Select your target profile',
 text: 'Choose SCA Ideal (balanced), Barista Hustle (sweetness and brightness), Hendon (body), Melbourne (delicate) or create a custom profile with your own GH and KH values.',
 },
 {
 name: 'Enter the final volume',
 text: 'Type the amount of water you want to mineralize in liters. The calculator automatically adjusts concentrate doses for that exact volume.',
 },
 {
 name: 'Add concentrates and top up with distilled water',
 text: 'Using a precision syringe, add the indicated milliliters of each concentrate to your container and fill to the total volume with distilled water.',
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Frequently Asked Questions about the SCA Coffee Water Calculator',
 faq: faqData,
 bibliographyTitle: 'Technical References and SCA Standards',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema,
  {
  "question": "Can I use zero-water or 100% distilled water for coffee?",
  "answer": "Distilled or reverse osmosis water with 0 TDS results in flat, hollow, and sharp acidic coffee because minerals are required to bind to aromatic compounds."
}],
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
 sectionMixTitle: 'Mix Configuration',
 labelVolume: 'Final Volume',
 labelProfile: 'Target Water Profile',
 customProfileBtn: 'Custom',
 labelGH: 'Target GH',
 labelKH: 'Target KH',
 concentratesTitle: 'Stock Concentrate Bottles (g/100ml)',
 saltMgName: 'Magnesium (Epsom)',
 saltCaName: 'Calcium (CaCl2)',
 saltBufName: 'Bicarbonate (Sodium)',
 recipeTitle: 'Recipe',
 labelMg: 'Magnesium:',
 labelCa: 'Calcium:',
 labelBuffer: 'Bicarbonate:',
 labelDistilledWater: 'Distilled Water up to',
 copyBtn: 'Copy Recipe',
 copiedText: 'Copied!',
 safetyMetalsTitle: 'Metal Safety',
 safetyScaleTitle: 'Limescale Risk',
 calculatingText: 'Calculating...',
 glossaryTitle: 'Quick Mineral Guide',
 profileSubTemplate: 'Target: {gh} GH / {kh} KH',
 customProfileName: 'Custom',
 corrosionHigh: 'Danger: Very aggressive water. May corrode boilers and copper components.',
 corrosionMedium: 'Acceptable: Moderate corrosion risk. Recommended for filter methods with care on machines.',
 corrosionLow: 'Safe: Water has sufficient buffer capacity to protect metals.',
 scaleHigh: 'Danger: Imminent limescale buildup. Use only with manual filter methods.',
 scaleMedium: 'Caution: May generate scale deposits over time in espresso machines.',
 scaleLow: 'Safe: No significant risk of limescale buildup.',
 copyTemplate:
 'Coffee Water Recipe ({profileName}):\n- Volume: {liters}L\n- Magnesium concentrate: {mg}ml\n- Calcium concentrate: {ca}ml\n- Bicarbonate concentrate: {buf}ml\n- Distilled Water: {water}ml',
 glossary0Term: 'Total Hardness (GH)',
 glossary0Desc:
 'The sum of Calcium and Magnesium. Magnesium enhances sweetness and complexity; Calcium adds body and texture.',
 glossary1Term: 'Alkalinity (KH)',
 glossary1Desc:
 'The water capacity to neutralize acids. High KH suppresses coffee acidity; low KH makes it taste sour.',
 glossary2Term: 'TDS (Total Dissolved Solids)',
 glossary2Desc: 'In mineralized water, TDS represents the combined concentration of all added mineral salts.',
 glossary3Term: 'Magnesium',
 glossary3Desc:
 'Extracts complex fruity flavor compounds more efficiently. The preferred mineral for specialty coffee brewing.',
 },
};
