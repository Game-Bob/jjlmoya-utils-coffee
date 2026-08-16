import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-koffie-water-calculator';
const title = 'SCA Koffiewater Calculator';
const description =
 'Bereken exacte minerale concentraties voor specialty coffee. SCA, Barista Hustle en Hendon profielen. Controleer Magnesium, Calcium en Bicarbonaat om smaak te maximaliseren en je machine te beschermen.';

const faqData = [
 {
 question: 'Wat is de SCA-waterkwaliteitsnorm?',
 answer:
 'De Specialty Coffee Association definieert een technische norm voor zetwater, waarbij optimale bereiken voor totale hardheid (GH), alkaliteit (KH), pH en natrium worden gespecificeerd om een gebalanceerde extractie te bereiken die de smaak verbetert zonder apparatuur te beschadigen.',
 },
 {
 question: 'Waarom niet gewoon kraanwater gebruiken?',
 answer:
 'Kraanwater varieert aanzienlijk per locatie en seizoen. Het kan chloor, overtollig kalk of mineralen bevatten die de smaken van specialty coffee maskeren en boilers en afdichtingen beschadigen. Door gedestilleerd water te mineraliseren, heb je volledige controle en herhaalbare resultaten.',
 },
 {
 question: 'Waar haal ik de mineraalzouten?',
 answer:
 'Epsomzout (magnesiumsulfaat) en natriumbicarbonaat zijn verkrijgbaar bij apotheken en supermarkten. Calciumchloride is gebruikelijk in winkels voor zelfgebrouwen bier. Zorg er altijd voor dat ze van voedingskwaliteit zijn.',
 },
 {
 question: 'Is het veilig voor mijn espressomachine?',
 answer:
 'De calculator bevat een realtime risico-indicator. Zeer zuiver water corrodeert metalen onderdelen; zeer hard water veroorzaakt kalkaanslag. De SCA Ideal- en Barista Hustle-profielen zijn ontworpen om de levensduur van apparatuur in evenwicht te brengen met de smaakkwaliteit.',
 },
 {
 question: 'Wat is het verschil tussen Magnesium en Calcium in koffie?',
 answer:
 'Magnesium extraheert fruitige en zoete smaakverbindingen efficiënter en is het voorkeursmineraal voor filtermethoden. Calcium geeft meer body en een zijdezachte textuur, maar heeft een grotere neiging om na verloop van tijd kalkaanslag in boilers te vormen.',
 },
];

const howToData = [
 {
 name: 'Zorg voor zuiver basiswater',
 text: 'Koop gedestilleerd of gedemineraliseerd water, of gebruik een omgekeerd osmosesysteem. Het doel is om te beginnen bij 0 ppm totale opgeloste stoffen voor volledige controle over de mineralisatie.',
 },
 {
 name: 'Bereid je voorraadflessen met concentraat voor',
 text: 'Los elk zout afzonderlijk op in 100 ml gedestilleerd water: 2,46 g Epsomzout voor Magnesium, 1,47 g CaCl2 for Calcium en 1,68 g bicarbonaat voor de Buffer.',
 },
 {
 name: 'Selecteer je doelprofiel',
 text: 'Kies SCA Ideal (gebalanceerd), Barista Hustle (zoetheid en helderheid), Hendon (body), Melbourne (verfijnd) of maak een aangepast profiel met je eigen GH- en KH-waarden.',
 },
 {
 name: 'Voer het eindvolume in',
 text: 'Typ de hoeveelheid water die je wilt mineraliseren in liters. De calculator past automatisch de concentraatdoseringen aan voor dat exacte volume.',
 },
 {
 name: 'Voeg concentraten toe en vul aan met gedestilleerd water',
 text: 'Voeg met een precisiespuit de aangegeven milliliters van elk concentraat toe aan je container en vul aan tot het totale volume met gedestilleerd water.',
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
 inLanguage: 'nl',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Veelgestelde vragen over de SCA Koffiewater Calculator',
 faq: faqData,
 bibliographyTitle: 'Technische referenties en SCA-normen',
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
 sectionMixTitle: 'Mixconfiguratie',
 labelVolume: 'Eindvolume',
 labelProfile: 'Doelwaterprofiel',
 customProfileBtn: 'Aangepast',
 labelGH: 'Doel-GH',
 labelKH: 'Doel-KH',
 concentratesTitle: 'Voorraadflessen concentraat (g/100ml)',
 saltMgName: 'Magnesium (Epsom)',
 saltCaName: 'Calcium (CaCl2)',
 saltBufName: 'Bicarbonaat (Natrium)',
 recipeTitle: 'Recept',
 labelMg: 'Magnesium:',
 labelCa: 'Calcium:',
 labelBuffer: 'Bicarbonaat:',
 labelDistilledWater: 'Gedestilleerd water tot',
 copyBtn: 'Recept kopiëren',
 copiedText: 'Gekopieerd!',
 safetyMetalsTitle: 'Metalen Veiligheid',
 safetyScaleTitle: 'Kalkaanslag Risico',
 calculatingText: 'Berekenen...',
 glossaryTitle: 'Snelle mineralengids',
 profileSubTemplate: 'Doel: {gh} GH / {kh} KH',
 customProfileName: 'Aangepast',
 corrosionHigh: 'Gevaar: Zeer agressief water. Kan boilers en koperen onderdelen corroderen.',
 corrosionMedium: 'Acceptabel: Matig corrosierisico. Aanbevolen voor filtermethoden met zorg bij machines.',
 corrosionLow: 'Veilig: Water heeft voldoende buffercapaciteit om metalen te beschermen.',
 scaleHigh: 'Gevaar: Dreigende kalkaanslag. Alleen gebruiken bij handmatige filtermethoden.',
 scaleMedium: 'Let op: Kan na verloop van tijd kalkaanslag veroorzaken in espressomachines.',
 scaleLow: 'Veilig: Geen significant risico op kalkaanslag.',
 copyTemplate:
 'Recept koffiewater ({profileName}):\n- Volume: {liters}L\n- Magnesiumconcentraat: {mg}ml\n- Calciumconcentraat: {ca}ml\n- Bicarbonaatconcentraat: {buf}ml\n- Gedestilleerd water: {water}ml',
 glossary0Term: 'Totale hardheid (GH)',
 glossary0Desc:
 'De som van calcium en magnesium. Magnesium verbetert zoetheid en complexiteit; calcium voegt body en textuur toe.',
 glossary1Term: 'Alkaliteit (KH)',
 glossary1Desc:
 'Het vermogen van het water om zuren te neutraliseren. Een hoge KH onderdrukt de koffiezuren; een lage KH laat het zuur smaken.',
 glossary2Term: 'TDS (Total Dissolved Solids)',
 glossary2Desc: 'In gemineraliseerd water vertegenwoordigt TDS de gecombineerde concentratie van alle toegevoegde mineraalzouten.',
 glossary3Term: 'Magnesium',
 glossary3Desc:
 'Extraheert complexe fruitige smaakverbindingen efficiënter. Het voorkeursmineraal voor het zetten van specialty coffee.',
 },
};
