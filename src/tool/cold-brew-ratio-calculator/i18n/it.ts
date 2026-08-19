import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-rapporto-caffe-cold-brew';
const title = 'Calcolatore del rapporto per caffè cold brew';
const description = 'Calcola caffè, acqua di infusione, diluizione del concentrato, tempo di infusione e resa servita per il cold brew in unità metriche o imperiali.';

const faqData = [
  { question: 'Quale rapporto caffè acqua usare per il cold brew?', answer: 'Inizia con 1:8 per un cold brew pronto da bere o 1:5 per un concentrato da diluire. Il rapporto migliore dipende da caffè, macinatura, tempo e servizio.' },
  { question: 'Quanto caffè serve per 1 litro di cold brew?', answer: 'Con un rapporto 1:8 usa 125 grammi di caffè e 1.000 millilitri di acqua di infusione. Il calcolatore stima anche l acqua trattenuta dai fondi.' },
  { question: 'Posso calcolare il cold brew in once e once liquide?', answer: 'Sì. Scegli Imperial per vedere il caffè in once e l acqua in once liquide. Il calcolo resta in grammi e millilitri per mantenere coerente il rapporto.' },
  { question: 'Qual è la differenza tra cold brew pronto da bere e concentrato?', answer: 'Il cold brew pronto da bere viene preparato vicino alla forza di servizio. Il concentrato usa più caffè e viene poi miscelato con acqua o latte.' },
  { question: 'Quanto deve riposare il cold brew?', answer: 'Come punto di partenza usa 12 o 18 ore in immersione completa nel frigorifero o in un ambiente fresco. Tempi più lunghi possono aumentare amaro e astringenza.' },
  { question: 'Il calcolatore considera l acqua trattenuta dai fondi?', answer: 'Sì. Stima circa 2 millilitri di acqua trattenuta per grammo di caffè per calcolare la resa. Filtro, macinatura e sgocciolamento cambiano il valore reale.' },
  { question: 'Questo calcolatore è una guida alla sicurezza alimentare?', answer: 'No. Calcola solo le quantità della ricetta. Usa attrezzatura pulita, raffredda la bevanda quando serve e segui le indicazioni aggiornate per conservazione e servizio.' },
];

const howToData = [
  { name: 'Scegli lo stile di infusione', text: 'Seleziona pronto da bere per servire direttamente o concentrato se aggiungerai acqua o latte dopo il filtraggio.' },
  { name: 'Imposta l acqua di infusione', text: 'Inserisci la quantità di acqua nel recipiente. Il calcolatore adatta la dose di caffè al volume e al rapporto scelto.' },
  { name: 'Regola il rapporto', text: 'Scegli un profilo o muovi il cursore. Numeri più bassi danno un caffè più intenso e numeri più alti un caffè più leggero.' },
  { name: 'Imposta tempo e diluizione', text: 'Usa il tempo come riferimento. In modalità concentrato indica quanta acqua aggiungere per ogni parte di caffè preparato.' },
  { name: 'Segui la scheda del batch', text: 'Usa il flusso e i passaggi per pesare il caffè, aggiungere acqua, infondere, filtrare e diluire la resa servita stimata.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Rapporto e pianificazione di un batch cold brew', level: 2 },
  { type: 'paragraph', html: 'Il cold brew è più facile da ripetere quando massa del caffè, acqua, diluizione e tempo di infusione sono controllati separatamente. Questo calcolatore li trasforma in una ricetta pesata.' },
  { type: 'title', text: 'Scegli tra pronto da bere e concentrato', level: 2 },
  { type: 'paragraph', html: 'Una ricetta pronta da bere viene infusa vicino alla forza di servizio. Un concentrato usa un rapporto più stretto e riceve acqua dopo il filtraggio.' },
  { type: 'table', headers: ['Stile', 'Rapporto iniziale', 'Diluizione', 'Uso'], rows: [['Pronto da bere', '1:8', 'Nessuna', 'Servire freddo o con ghiaccio'], ['Batch morbido', '1:10', 'Nessuna', 'Tazza quotidiana più leggera'], ['Concentrato', '1:5', '1:1', 'Mescolare con acqua o latte']] },
  { type: 'title', text: 'Come funziona il calcolo del cold brew', level: 2 },
  { type: 'list', items: ['La dose di caffè è l acqua di infusione divisa per il rapporto scelto.', 'La resa preparata viene stimata sottraendo circa 2 millilitri di acqua trattenuta per grammo di caffè.', 'La diluizione del concentrato parte dalla resa preparata per rendere chiaro il volume servito.'] },
  { type: 'title', text: 'Misure metriche e imperiali per il cold brew', level: 2 },
  { type: 'paragraph', html: 'Scegli grammi e millilitri per ricette metriche oppure once e once liquide per ricette imperiali. Il rapporto tra massa e volume resta coerente.' },
  { type: 'table', headers: ['Misura', 'Metrico', 'Imperiale'], rows: [['Dose di caffè', 'g', 'oz'], ['Acqua e resa', 'ml', 'fl oz'], ['Rapporto', '1 parte di caffè', '1 parte di caffè']] },
  { type: 'tip', title: 'Usa il risultato come ricetta iniziale', html: '<p>Origine, macinatura, filtro, temperatura e sgocciolamento cambiano estrazione e resa. Assaggia il primo batch e modifica una variabile alla volta.</p>' },
  { type: 'title', text: 'Tempo di infusione e sicurezza alimentare', level: 2 },
  { type: 'paragraph', html: 'Il cursore del tempo aiuta a pianificare la ricetta, ma non garantisce gusto o sicurezza. Usa attrezzatura pulita e segui le indicazioni aggiornate per raffreddamento, conservazione e servizio.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Domande sul cold brew', faq: faqData, bibliographyTitle: 'Riferimenti per l infusione', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Prepara il batch', modeReady: 'Pronto da bere', modeReadyHint: 'Infondi e servi', modeConcentrate: 'Concentrato', modeConcentrateHint: 'Infondi e diluisci', unitSystemLabel: 'Sistema di misura', unitMetric: 'Metrico', unitImperial: 'Imperiale', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Inizia con un profilo', presetClassic: 'Classico 1:8', presetSmooth: 'Morbido 1:10', presetConcentrate: 'Concentrato 1:5', presetCustom: 'Personalizzato', brewWaterLabel: 'Acqua di infusione', brewWaterHint: 'Acqua per l infusione', ratioLabel: 'Rapporto caffè acqua', ratioHint: 'Acqua per grammo di caffè', dilutionLabel: 'Acqua di diluizione', dilutionHint: 'Parti di acqua per parte di caffè preparato', steepLabel: 'Tempo di infusione', steepHint: 'Un intervallo utile', hoursUnit: 'ore', resultTitle: 'Il tuo batch', resultBadgeReady: 'Pronto da bere', resultBadgeConcentrate: 'Concentrato', coffeeLabel: 'Caffè macinato', brewWaterResultLabel: 'Acqua di infusione', retainedLabel: 'Trattenuta dai fondi', dilutionWaterLabel: 'Acqua di diluizione', servedYieldLabel: 'Resa servita approssimativa', ratioResultLabel: 'Rapporto', steepResultLabel: 'Infusione', steepStatusShort: 'Infusione breve', steepStatusBalanced: 'Infusione equilibrata', steepStatusLong: 'Infusione lunga', stageCaption: 'Un batch morbido pronto per il frigorifero', stageCaptionConcentrate: 'Un concentrato intenso in attesa di diluizione', stepsTitle: 'Passaggi della ricetta', visualTitle: 'Flusso del batch', visualBrewCaption: 'Infondi', visualFilterCaption: 'Filtra', visualServeCaption: 'Servi', visualCoffeeDose: 'Dose di caffè', visualWaterInput: 'Acqua di infusione', visualRetained: 'Trattenuta dai fondi', visualServed: 'Resa preparata', visualDilution: 'Acqua di diluizione', stepCoffee: 'Pesa {coffee} {coffeeUnit} di caffè macinato grosso.', stepWater: 'Aggiungi {water} {waterUnit} di acqua e satura completamente i fondi.', stepSteep: 'Copri e lascia in infusione per circa {hours} ore.', stepDilute: 'Dopo il filtraggio, aggiungi {water} {waterUnit} di acqua di diluizione.', stepServe: 'Raffredda e servi circa {yield} {waterUnit}.', noteTitle: 'Una stima utile', noteText: 'I fondi trattengono acqua durante il filtraggio. La quantità è stimata: calibra il primo batch con il tuo filtro e il tuo metodo di sgocciolamento.', copyRecipe: 'Copia ricetta', copiedText: 'Ricetta copiata', resetText: 'Ripristina', copyTemplate: 'Ricetta cold brew\nCaffè: {coffee} {coffeeUnit}\nAcqua di infusione: {brewWater} {waterUnit}\nRapporto: 1:{ratio}\nInfusione: {hours} ore\nAcqua di diluizione: {dilutionWater} {waterUnit}\nResa servita approssimativa: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Riferimenti',
  },
};
