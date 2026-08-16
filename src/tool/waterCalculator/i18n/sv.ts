import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-kaffevatten-kalkylator';
const title = 'SCA Kaffevatten Kalkylator';
const description =
 'Beräkna exakta mineralkoncentrationer för specialkaffe. SCA-, Barista Hustle- och Hendon-profiler. Kontrollera magnesium, kalcium och bikarbonat för att maximera smak och skydda din maskin.';

const faqData = [
 {
 question: 'Vad är SCA-vattenkvalitetsstandard?',
 answer:
 'Specialty Coffee Association definierar en teknisk standard för bryggvatten som specificerar optimala intervall för total hårdhet (GH), alkalinitet (KH), pH och natrium för att uppnå en balanserad extraktion som förhöjer smaken utan att skada utrustningen.',
 },
 {
 question: 'Varför inte bara använda kranvatten?',
 answer:
 'Kranvatten varierar avsevärt beroende på plats och säsong. Det kan innehålla klor, överskott av kalk eller mineralnivåer som döljer specialkaffets smaker och skadar kokare och tätningar. Genom att mineralisera destillerat vatten får du full kontroll och repeterbara resultat.',
 },
 {
 question: 'Var får jag tag på mineralsalterna?',
 answer:
 'Epsomsalt (magnesiumsulfat) och natriumbikarbonat finns på apotek och i livsmedelsbutiker. Kalciumklorid är vanligt i butiker för hembryggning. Se alltid till att de är av livsmedelskvalitet.',
 },
 {
 question: 'Är det säkert för min espressomaskin?',
 answer:
 'Kalkylatorn innehåller en riskindikator i realtid. Mycket rent vatten korroderar metallkomponenter; mycket hårt vatten orsakar kalkavlagringar. SCA Ideal- och Barista Hustle-profilerna är utformade för att balansera utrustningens livslängd med smakkvalitet.',
 },
 {
 question: 'Vad är skillnaden mellan magnesium och kalcium i kaffe?',
 answer:
 'Magnesium extraherar fruktiga och söta smakämnen mer effektivt och är den föredragna mineralen för filtermetoder. Kalcium ger mer fyllighet och silkeslen textur men har en större tendens att bilda kalkavlagringar i kokare över tid.',
 },
 { question: 'Kan jag spara mina vanliga koncentrationer?', answer: 'Ja. Kalkylatorn sparar värdena i webbläsaren så att ditt anpassade recept finns kvar vid nästa besök.' },
];

const howToData = [
 {
 name: 'Skaffa rent basvatten',
 text: 'Köp destillerat eller demineraliserat vatten, eller använd ett system för omvänd osmos. Målet är att börja vid 0 ppm totalt lösta fasta ämnen för fullständig kontroll över mineraliseringen.',
 },
 {
 name: 'Förbered dina koncentratflaskor',
 text: 'Lös upp varje salt separat i 100 ml destillerat vatten: 2,46 g Epsomsalt för magnesium, 1,47 g CaCl2 för kalcium och 1,68 g bikarbonat fon bufferten.',
 },
 {
 name: 'Välj din målprofil',
 text: 'Välj SCA Ideal (balanserad), Barista Hustle (sötma och klarhet), Hendon (fyllighet), Melbourne (delikat) eller skapa en anpassad profil med dina egna GH- och KH-värden.',
 },
 {
 name: 'Ange slutvolym',
 text: 'Skriv mängden vatten du vill mineralisera i liter. Kalkylatorn justerar automatiskt koncentratdoserna för den exakta volymen.',
 },
 {
 name: 'Tillsätt koncentrat och fyll upp med destillerat vatten',
 text: 'Använd en precisionsspruta för att tillsätta de angivna millilitrarna av varje koncentrat i din behållare och fyll upp till den totala volymen med destillerat vatten.',
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
 inLanguage: 'sv',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Vanliga frågor om SCA Kaffevatten Kalkylator',
 faq: faqData,
 bibliographyTitle: 'Tekniska referenser och SCA-standarder',
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
 sectionMixTitle: 'Blandningskonfiguration',
 labelVolume: 'Slutvolym',
 labelProfile: 'Målvattenprofil',
 customProfileBtn: 'Anpassad',
 labelGH: 'Mål-GH',
 labelKH: 'Mål-KH',
 concentratesTitle: 'Koncentratflaskor (g/100ml)',
 saltMgName: 'Magnesium (Epsom)',
 saltCaName: 'Kalcium (CaCl2)',
 saltBufName: 'Bikarbonat (Natrium)',
 recipeTitle: 'Recept',
 labelMg: 'Magnesium:',
 labelCa: 'Kalcium:',
 labelBuffer: 'Bikarbonat:',
 labelDistilledWater: 'Destillerat vatten upp till',
 copyBtn: 'Kopiera recept',
 copiedText: 'Kopierat!',
 safetyMetalsTitle: 'Metallsäkerhet',
 safetyScaleTitle: 'Kalkrisk',
 calculatingText: 'Beräknar...',
 glossaryTitle: 'Snabb mineralguide',
 profileSubTemplate: 'Mål: {gh} GH / {kh} KH',
 customProfileName: 'Anpassad',
 corrosionHigh: 'Fara: Mycket aggressivt vatten. Kan korrodera kokare och kopparkomponenter.',
 corrosionMedium: 'Acceptabelt: Måttlig korrosionsrisk. Rekommenderas för filtermetoder, var försiktig med maskiner.',
 corrosionLow: 'Säkert: Vattnet har tillräcklig buffertkapacitet för att skydda metaller.',
 scaleHigh: 'Fara: Omedelbar kalkbildning. Använd endast med manuella filtermetoder.',
 scaleMedium: 'Varning: Kan generera kalkavlagringar över tid i espressomaskiner.',
 scaleLow: 'Säkert: Ingen betydande risk för kalkavlagringar.',
 copyTemplate:
 'Recept för kaffevatten ({profileName}):\n- Volym: {liters}L\n- Magnesiumkoncentrat: {mg}ml\n- Kalciumkoncentrat: {ca}ml\n- Bikarbonatkoncentrat: {buf}ml\n- Destillerat vatten: {water}ml',
 glossary0Term: 'Total hårdhet (GH)',
 glossary0Desc:
 'Summan av kalcium och magnesium. Magnesium förstärker sötma och komplexitet; kalcium ger fyllighet och textur.',
 glossary1Term: 'Alkalinitet (KH)',
 glossary1Desc:
 'Vattnets förmåga att neutralisera syror. Högt KH dämpar kaffets syra; lågt KH får det att smaka surt.',
 glossary2Term: 'TDS (Total Dissolved Solids)',
 glossary2Desc: 'I mineraliserat vatten representerar TDS den kombinerade koncentrationen av alla tillsatta mineralsalter.',
 glossary3Term: 'Magnesium',
 glossary3Desc:
 'Extraherar komplexa fruktiga smakämnen mer effektivt. Den föredragna mineralen för specialkaffebryggning.',
 },
};
