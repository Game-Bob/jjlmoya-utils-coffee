import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-acqua-caffe-sca';
const title = 'Calcolatore Acqua per Caffè SCA';
const description =
 'Calcola le concentrazioni minerali esatte per lo specialty coffee. Profili SCA, Barista Hustle e Hendon. Controlla Magnesio, Calcio e Bicarbonato per massimizzare il sapore e proteggere la tua macchina.';

const faqData = [
 {
 question: 'Qual è lo standard SCA per la qualità dell\'acqua?',
 answer:
 'La Specialty Coffee Association definisce uno standard tecnico per l\'acqua di infusione, specificando i range ottimali per la durezza totale (GH), l\'alcalinità (KH), il pH e il sodio per ottenere un\'estrazione bilanciata che esalti il sapore senza danneggiare l\'attrezzatura.',
 },
 {
 question: 'Perché non usare semplicemente l\'acqua del rubinetto?',
 answer:
 'L\'acqua del rubinetto varia significativamente a seconda della zona e della stagione. Può contenere cloro, eccesso di calcare o livelli minerali che coprono i sapori dello specialty coffee e danneggiano caldaie e guarnizioni. Mineralizzare l\'acqua distillata ti dà il pieno controllo e risultati ripetibili.',
 },
 {
 question: 'Dove posso trovare i sali minerali?',
 answer:
 'I sali di Epsom (solfato di magnesio) e il bicarbonato di sodio sono disponibili in farmacia e nei supermercati. Il cloruro di calcio è comune nei negozi di articoli per la produzione casalinga di birra. Assicurati sempre che siano di grado alimentare.',
 },
 {
 question: 'È sicuro per la mia macchina da espresso?',
 answer:
 'Il calcolatore include un indicatore di rischio in tempo reale. L\'acqua molto pura corrode i componenti metallici; l\'acqua molto dura causa accumuli di calcare. I profili SCA Ideal e Barista Hustle sono progettati per bilanciare la longevità dell\'attrezzatura con la qualità del gusto.',
 },
 {
 question: 'Qual è la differenza tra Magnesio e Calcio nel caffè?',
 answer:
 'Il magnesio estrae i composti del sapore fruttato e dolce in modo più efficiente ed è il minerale preferito per i metodi filtro. Il calcio conferisce più corpo e una consistenza setosa, ma ha una maggiore tendenza a formare depositi di calcare nelle caldaie nel tempo.',
 },
 { question: 'Posso salvare le concentrazioni abituali?', answer: 'Sì. La calcolatrice salva i valori nel browser, così la ricetta personalizzata sarà disponibile alla prossima visita.' },
];

const howToData = [
 {
 name: 'Procurati acqua base pura',
 text: 'Acquista acqua distillata o demineralizzata, oppure usa un sistema a osmosi inversa. L\'obiettivo è iniziare da 0 ppm di solidi totali disciolti per un controllo completo sulla mineralizzazione.',
 },
 {
 name: 'Prepara le bottiglie di concentrato stock',
 text: 'Sciogli ogni sale separatamente in 100ml di acqua distillata: 2,46g di sali di Epsom per il Magnesio, 1,47g di CaCl2 per il Calcio e 1,68g di bicarbonato per il Buffer.',
 },
 {
 name: 'Seleziona il tuo profilo target',
 text: 'Scegli SCA Ideal (bilanciato), Barista Hustle (dolcezza e brillantezza), Hendon (corpo), Melbourne (delicato) o crea un profilo personalizzato con i tuoi valori di GH e KH.',
 },
 {
 name: 'Inserisci il volume finale',
 text: 'Digita la quantità di acqua che vuoi mineralizzare in litri. Il calcolatore regola automaticamente le dosi di concentrato per quel volume esatto.',
 },
 {
 name: 'Aggiungi i concentrati e rabbocca con acqua distillata',
 text: 'Usando una siringa di precisione, aggiungi i millilitri indicati di ogni concentrato nel tuo contenitore e riempi fino al volume totale con acqua distillata.',
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
 inLanguage: 'it',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Domande frequenti sul Calcolatore Acqua per Caffè SCA',
 faq: faqData,
 bibliographyTitle: 'Riferimenti Tecnici e Standard SCA',
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
 sectionMixTitle: 'Configurazione Miscela',
 labelVolume: 'Volume Finale',
 labelProfile: 'Profilo Acqua Target',
 customProfileBtn: 'Personalizzato',
 labelGH: 'GH Target',
 labelKH: 'KH Target',
 concentratesTitle: 'Bottiglie Concentrato Stock (g/100ml)',
 saltMgName: 'Magnesio (Sali di Epsom)',
 saltCaName: 'Calcio (CaCl2)',
 saltBufName: 'Bicarbonato (Sodio)',
 recipeTitle: 'Ricetta',
 labelMg: 'Magnesio:',
 labelCa: 'Calcio:',
 labelBuffer: 'Bicarbonato:',
 labelDistilledWater: 'Acqua distillata fino a',
 copyBtn: 'Copia Ricetta',
 copiedText: 'Copiato!',
 safetyMetalsTitle: 'Sicurezza Metalli',
 safetyScaleTitle: 'Rischio Calcare',
 calculatingText: 'Calcolo in corso...',
 glossaryTitle: 'Guida Rapida ai Minerali',
 profileSubTemplate: 'Target: {gh} GH / {kh} KH',
 customProfileName: 'Personalizzato',
 corrosionHigh: 'Pericolo: Acqua molto aggressiva. Può corrodere caldaie e componenti in rame.',
 corrosionMedium: 'Accettabile: Rischio di corrosione moderato. Consigliato per i metodi filtro con cautela sulle macchine.',
 corrosionLow: 'Sicuro: L\'acqua ha una capacità tampone sufficiente per proteggere i metalli.',
 scaleHigh: 'Pericolo: Imminente accumulo di calcare. Usare solo con metodi filtro manuali.',
 scaleMedium: 'Attenzione: Può generare depositi di calcare nel tempo nelle macchine da espresso.',
 scaleLow: 'Sicuro: Nessun rischio significativo di accumulo di calcare.',
 copyTemplate:
 'Ricetta Acqua per il Caffè ({profileName}):\n- Volume: {liters}L\n- Concentrato di Magnesio: {mg}ml\n- Concentrato di Calcio: {ca}ml\n- Concentrato di Bicarbonato: {buf}ml\n- Acqua Distillata: {water}ml',
 glossary0Term: 'Durezza Totale (GH)',
 glossary0Desc:
 'La somma di Calcio e Magnesio. Il magnesio esalta la dolcezza e la complessità; il Calcio aggiunge corpo e consistenza.',
 glossary1Term: 'Alcalinità (KH)',
 glossary1Desc:
 'La capacità dell\'acqua di neutralizzare gli acidi. Un KH elevato sopprime l\'acidità del caffè; un KH basso lo rende acido.',
 glossary2Term: 'TDS (Solidi Totali Disciolti)',
 glossary2Desc: 'Nell\'acqua mineralizzata, il TDS rappresenta la concentrazione combinata di tutti i sali minerali aggiunti.',
 glossary3Term: 'Magnesio',
 glossary3Desc:
 'Estrae i composti aromatici fruttati complessi in modo più efficiente. Il minerale preferito per l\'infusione di specialty coffee.',
 },
};
