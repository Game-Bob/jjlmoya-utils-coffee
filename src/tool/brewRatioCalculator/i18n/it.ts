import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

const slug = 'calcolatore-proporzione-caffe';
const title = 'Calcolatore Rapporto di Estrazione Caffè';
const description =
 'Calcola gli esatti grammi di caffè o millilitri di acqua per il tuo rapporto ideale (1:15, 1:16...). Include risultato in tazza, guida al versaggio, modalità caffè freddo e ricette salvate.';

const faqData = [
 {
 question: 'Cos\'è un rapporto caffè 1:15?',
 answer:
 'Significa che per ogni grammo di caffè macinato si utilizzano 15 millilitri (o grammi) di acqua. Con 20g di caffè, versi 300ml di acqua. È il rapporto standard raccomandato dalla Specialty Coffee Association per i metodi a filtro come V60, Chemex o Aeropress.',
 },
 {
 question: 'Perché c\'è meno caffè nella mia tazza di quello che ho versato?',
 answer:
 'Perché il caffè macinato trattiene l\'acqua durante l\'estrazione. In media, ogni grammo di caffè assorbe circa 2ml di liquido. Se versi 300ml su 20g di caffè, otterrai circa 260ml in tazza. Questo calcolatore ti mostra il risultato reale.',
 },
 {
 question: 'Cos\'è il bloom o pre-infusione?',
 answer:
 'È il primo versaggio d\'acqua, equivalente al doppio del peso del caffè (2ml per grammo). Si fa per degasare il caffè fresco: la CO2 intrappolata durante la tostatura fuoriesce e permette all\'acqua di estrarre i composti in modo uniforme. Se non c\'è un bloom visibile, il caffè è stato macinato o tastato da tempo.',
 },
 {
 question: 'Come fare il caffè freddo senza che sia acquoso?',
 answer:
 'Usa la tecnica flash chilling: prepara il 60% dell\'acqua totale come acqua calda a 90-96 gradi e metti il rimanente 40% come ghiaccio nella caraffa. Versa il caffè caldo direttamente sul ghiaccio. Il raffreddamento rapido sigilla gli aromi. Questo calcolatore ricalcola automaticamente le quantità quando attivi la modalità Iced Coffee.',
 },
 {
 question: 'Qual è il miglior rapporto per un\'Aeropress?',
 answer:
 'Tra 1:12 e 1:15 a seconda dell\'uso. Se bevi caffè nero, 1:15 è bilanciato. Se lo usi come base per bevande al latte o vuoi un\'alta concentrazione, scendi a 1:12 o 1:13. L\'Aeropress è il metodo più versatile proprio perché gestisce molto bene diversi rapporti.',
 },
 {
 question: 'Posso salvare le mie ricette preferite?',
 answer:
 'Sì. Una volta trovato il rapporto e la quantità perfetti per il tuo caffè preferito, premi il pulsante Salva ricetta, dagli un nome (es. V60 del mattino) e verrà memorizzata nel tuo browser. Puoi richiamarla in qualsiasi momento con un solo clic.',
 },
];

const howToData = [
 {
 name: 'Scegli la modalità di calcolo',
 text: 'Seleziona se parti dai grammi di caffè che hai o dalla capacità della tua tazza (ml di acqua). Il calcolatore adatta tutti i risultati alla modalità scelta.',
 },
 {
 name: 'Inserisci la quantità',
 text: 'Digita i grammi di caffè o i millilitri di acqua che userai. Il calcolatore calcolerà automaticamente l\'altro valore in base al rapporto selezionato.',
 },
 {
 name: 'Seleziona l\'intensità',
 text: 'Scegli tra Forte (1:12-14), Bilanciato (1:15-16), Leggero (1:17-18) o inserisci il tuo rapporto personalizzato. Ogni opzione corrisponde a un diverso profilo aromatico.',
 },
 {
 name: 'Attiva la modalità Iced Coffee (opzionale)',
 text: 'Se stai preparando un caffè freddo, attiva l\'interruttore. Il calcolatore dividerà automaticamente l\'acqua tra acqua calda (60%) e ghiaccio (40%) usando la tecnica flash chilling.',
 },
 {
 name: 'Segui la guida al versaggio',
 text: 'Usa la guida alle fasi (Bloom e Versaggio finale) per strutturare il tuo processo di infusione. Ogni fase indica esattamente quanta acqua versare e quando.',
 },
 {
 name: 'Salva la ricetta',
 text: 'Quando trovi il tuo rapporto perfetto, salvalo con un nome descrittivo. Le tue ricette sono memorizzate nel tuo browser per le sessioni future.',
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
 inLanguage: 'it',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Domande Frequenti sul Rapporto di Estrazione',
 faq: faqData,
 bibliographyTitle: 'Riferimenti Tecnici e Standard SCA',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 modeCoffee: 'Ho il Caffè',
 modeHintCoffee: 'Dimmi quanta acqua serve',
 modeWater: 'Ho l\'Acqua',
 modeHintWater: 'Dimmi quanto caffè macinare',
 inputLabelCoffee: 'Grammi di caffè che hai',
 inputLabelWater: 'Capacità tazza (ml)',
 intensityLabel: 'Intensità del caffè',
 intensityStrong: 'Forte',
 intensityBalanced: 'Bilanciato',
 intensityLight: 'Leggero',
 intensityCustom: 'Personalizzato',
 customCoffeeLabel: 'Caffè',
 customWaterLabel: 'Acqua',
 icedModeLabel: 'Modalità Caffè Freddo',
 recipeLabel: 'La tua ricetta esatta',
 resultTitle: 'Risultato',
 resultCoffeeLabel: 'Caffè',
 resultCoffeeSub: 'Macinatura fine-media',
 resultHotWaterLabel: 'Acqua calda',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Acqua calda (60%)',
 resultIceLabel: 'Ghiaccio',
 resultIceSub: 'Nella caraffa',
 resultCupLabel: 'Nella tua tazza',
 resultCupSub: 'Il caffè trattiene ~2ml/g',
 pouringGuideLabel: 'Guida al versaggio',
 favoritesLabel: 'Le mie ricette preferite',
 saveBtn: '+ Salva questa ricetta',
 favEmptyText: 'Nessuna ricetta salvata. Configura la tua infusione perfetta e salvala.',
 modalTitle: 'Dai un nome alla ricetta',
 modalPlaceholder: 'Es.: "V60 del mattino"',
 modalCancel: 'Annulla',
 modalConfirm: 'Salva',
 phaseBloomTemplate: 'Bloom: Versa {bloomMl} ml d\'acqua a spirale. Attendi {bloomSeconds} secondi per degasare il caffè.',
 phasePourTemplate: 'Versaggio finale: Aggiungi il resto per completare {hotWaterMl} ml in {pourCount} versaggi lenti.',
 phaseIcedTemplate: 'Ghiaccio: Versa il caffè caldo direttamente sui {iceMl} g di ghiaccio nella caraffa.',
 cupWarningTemplate: 'La tazza riceve solo {inCupMl} ml. Il caffè trattiene i liquidi.',
 favModeCoffee: 'g caffè',
 favModeWater: 'ml acqua',
 favModeIced: ' - Ghiaccio',
 },
};
