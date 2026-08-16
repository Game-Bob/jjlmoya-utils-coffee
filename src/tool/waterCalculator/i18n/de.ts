import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-kaffee-wasser-rechner';
const title = 'SCA Kaffee Wasser Rechner';
const description =
 'Berechnen Sie exakte Mineralkonzentrationen für Specialty Coffee. SCA, Barista Hustle und Hendon Profile. Kontrollieren Sie Magnesium, Calcium und Bicarbonat für maximalen Geschmack und Maschinenschutz.';

const faqData = [
 {
 question: 'Was ist der SCA-Wasserqualitätsstandard?',
 answer:
 'Die Specialty Coffee Association definiert einen technischen Standard für Brühwasser, der optimale Bereiche für Gesamthärte (GH), Alkalität (KH), pH-Wert und Natrium festlegt, um eine ausgewogene Extraktion zu erreichen, die den Geschmack verbessert, ohne die Ausrüstung zu beschädigen.',
 },
 {
 question: 'Warum nicht einfach Leitungswasser verwenden?',
 answer:
 'Leitungswasser variiert je nach Standort und Jahreszeit erheblich. Es kann Chlor, überschüssigen Kalk oder Mineralien enthalten, die die Aromen von Specialty Coffee maskieren und Kessel sowie Dichtungen beschädigen. Die Mineralisierung von destilliertem Wasser gibt Ihnen die volle Kontrolle und wiederholbare Ergebnisse.',
 },
 {
 question: 'Wo bekomme ich die Mineralsalze her?',
 answer:
 'Bittersalz (Magnesiumsulfat) und Natron (Natriumbicarbonat) sind in Apotheken und Supermärkten erhältlich. Calciumchlorid findet man häufig in Fachgeschäften für Hobbybrauer. Stellen Sie immer sicher, dass sie Lebensmittelqualität haben.',
 },
 {
 question: 'Ist es sicher für meine Espressomaschine?',
 answer:
 'Der Rechner enthält eine Echtzeit-Risikoanzeige. Sehr reines Wasser korrodiert Metallkomponenten; sehr hartes Wasser führt zu Kalkablagerungen. Die SCA Ideal und Barista Hustle Profile sind darauf ausgelegt, die Langlebigkeit der Ausrüstung mit der Geschmacksqualität in Einklang zu bringen.',
 },
 {
 question: 'Was ist der Unterschied zwischen Magnesium und Calcium im Kaffee?',
 answer:
 'Magnesium extrahiert fruchtige und süße Geschmacksverbindungen effizienter und ist das bevorzugte Mineral für Filtermethoden. Calcium liefert mehr Körper und eine seidige Textur, neigt aber eher dazu, im Laufe der Zeit Kalkablagerungen in Kesseln zu bilden.',
 },
];

const howToData = [
 {
 name: 'Reines Basiswasser besorgen',
 text: 'Kaufen Sie destilliertes oder demineralisiertes Wasser oder verwenden Sie ein Umkehrosmose-System. Das Ziel ist es, bei 0 ppm gelösten Feststoffen (TDS) zu beginnen, um die volle Kontrolle über die Mineralisierung zu haben.',
 },
 {
 name: 'Stammkonzentrat-Flaschen vorbereiten',
 text: 'Lösen Sie jedes Salz separat in 100 ml destilliertem Wasser auf: 2,46 g Bittersalz für Magnesium, 1,47 g CaCl2 für Calcium und 1,68 g Natron für den Puffer (Buffer).',
 },
 {
 name: 'Zielprofil auswählen',
 text: 'Wählen Sie SCA Ideal (ausgewogen), Barista Hustle (Süße und Helligkeit), Hendon (Körper), Melbourne (fein) oder erstellen Sie ein eigenes Profil mit Ihren eigenen GH- und KH-Werten.',
 },
 {
 name: 'Endvolumen eingeben',
 text: 'Geben Sie die Wassermenge an, die Sie mineralisieren möchten, in Litern. Der Rechner passt die Konzentratdosierungen automatisch für dieses exakte Volumen an.',
 },
 {
 name: 'Konzentrate hinzufügen und mit destilliertem Wasser auffüllen',
 text: 'Geben Sie mit einer Präzisionsspritze die angegebenen Milliliter jedes Konzentrats in Ihren Behälter und füllen Sie ihn bis zum Gesamtvolumen mit destilliertem Wasser auf.',
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
 inLanguage: 'de',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Häufig gestellte Fragen zum SCA Kaffee-Wasser-Rechner',
 faq: faqData,
 bibliographyTitle: 'Technische Referenzen und SCA-Standards',
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
 sectionMixTitle: 'Mischungskonfiguration',
 labelVolume: 'Endvolumen',
 labelProfile: 'Ziel-Wasserprofil',
 customProfileBtn: 'Benutzerdefiniert',
 labelGH: 'Ziel-GH',
 labelKH: 'Ziel-KH',
 concentratesTitle: 'Stammkonzentrat-Flaschen (g/100ml)',
 saltMgName: 'Magnesium (Bittersalz)',
 saltCaName: 'Calcium (CaCl2)',
 saltBufName: 'Bicarbonat (Natron)',
 recipeTitle: 'Rezept',
 labelMg: 'Magnesium:',
 labelCa: 'Calcium:',
 labelBuffer: 'Bicarbonate:',
 labelDistilledWater: 'Destilliertes Wasser bis',
 copyBtn: 'Rezept kopieren',
 copiedText: 'Kopiert!',
 safetyMetalsTitle: 'Metallsicherheit',
 safetyScaleTitle: 'Kalkrisiko',
 calculatingText: 'Berechnung...',
 glossaryTitle: 'Kurze Mineral-Übersicht',
 profileSubTemplate: 'Ziel: {gh} GH / {kh} KH',
 customProfileName: 'Benutzerdefiniert',
 corrosionHigh: 'Gefahr: Sehr aggressives Wasser. Kann Kessel und Kupferkomponenten korrodieren.',
 corrosionMedium: 'Akzeptabel: Moderates Korrosionsrisiko. Empfohlen für Filtermethoden, Vorsicht bei Maschinen.',
 corrosionLow: 'Sicher: Das Wasser hat ausreichend Pufferkapazität, um Metalle zu schützen.',
 scaleHigh: 'Gefahr: Unmittelbare Kalkbildung. Nur für manuelle Filtermethoden verwenden.',
 scaleMedium: 'Vorsicht: Kann im Laufe der Zeit Kalkablagerungen in Espressomaschinen verursachen.',
 scaleLow: 'Sicher: Kein signifikantes Risiko für Kalkablagerungen.',
 copyTemplate:
 'Kaffee-Wasser-Rezept ({profileName}):\n- Volumen: {liters}L\n- Magnesiumkonzentrat: {mg}ml\n- Calciumkonzentrat: {ca}ml\n- Bicarbonatkonzentrat: {buf}ml\n- Destilliertes Wasser: {water}ml',
 glossary0Term: 'Gesamthärte (GH)',
 glossary0Desc:
 'Die Summe aus Calcium und Magnesium. Magnesium verstärkt Süße und Komplexität; Calcium verleiht Körper und Textur.',
 glossary1Term: 'Alkalität (KH)',
 glossary1Desc:
 'Die Kapazität des Wassers, Säuren zu neutralisieren. Hohes KH unterdrückt die Kaffee-Säure; niedriges KH lässt ihn sauer schmecken.',
 glossary2Term: 'TDS (gelöste Feststoffe)',
 glossary2Desc: 'Bei mineralisiertem Wasser stellt TDS die kombinierte Konzentration aller zugesetzten Mineralsalze dar.',
 glossary3Term: 'Magnesium',
 glossary3Desc:
 'Extrahiert komplexe fruchtige Aromaverbindungen effizienter. Das bevorzugte Mineral für das Brühen von Specialty Coffee.',
 },
};
