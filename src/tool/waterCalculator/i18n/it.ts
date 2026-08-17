import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildWaterSeo } from '../../seoTranslations';

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
 seo: buildWaterSeo({ title, description, faq: faqData, howTo: howToData }),
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
