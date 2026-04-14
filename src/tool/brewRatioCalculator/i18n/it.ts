import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

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
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Rapporto Caffè: La Guida Definitiva per un\'Estrazione Perfetta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparare una tazza di specialty coffee non è un atto culinario soggettivo; è un esperimento di <strong>chimica dei fluidi</strong> e <strong>trasferimento di massa</strong>. Al centro di questo processo si trova il concetto di <strong>Brew Ratio</strong>, una misura critica che dettata la relazione quantitativa tra il soluto (caffè macinato) e il solvente (acqua). Il nostro calcolatore integra gli standard della <em>Specialty Coffee Association (SCA)</em> e i principi della termodinamica applicata per permettere a barista e appassionati di ottenere una perfetta riproducibilità nelle loro estrazioni.',
    },
    {
      type: 'summary',
      title: 'Cosa imparerai sul Rapporto Caffè',
      items: [
        '<strong>Brew Ratio:</strong> Come la relazione di peso tra caffè e acqua (es. 1:15) determina la forza potenziale e il profilo sensoriale della tua tazza.',
        '<strong>TDS ed Estrazione:</strong> La scienza dietro i solidi disciolti e quale percentuale del chicco dovrebbe effettivamente finire nella tua bevanda.',
        '<strong>Regolazione della Ritenzione:</strong> Perché il caffè assorbe 2g di acqua per ogni grammo di polvere e come calcolare l\'acqua extra necessaria.',
        '<strong>Metodi Specifici:</strong> Le proporzioni ideali per V60, French Press, Espresso e ricette di caffè freddo flash brew.',
      ],
    },
    {
      type: 'title',
      text: 'Cos\'è il Brew Ratio e perché è la variabile più importante?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il caffè contiene circa il 30% di materiale solubile, ma non tutto quel materiale è desiderabile per il palato umano. L\'acqua, agendo come solvente universale, estrae i composti in un ordine specifico basato sul loro peso molecolare e affinità chimica. Il rapporto caffè controlla precisamente quanta capacità di dissoluzione forniamo a ogni grammo di caffè.',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase Acida (Lipidi e Acidi Organici):</strong> Questi si dissolvono per primi grazie alla loro alta solubilità. Contribuiscono alla brillantezza, all\'acidità malica o citrica e alle note fruttate. Un rapporto troppo basso (sotto-estrazione) interrompe il processo qui, risultando in una tazza acida e salata.',
        '<strong>Fase Dolce (Zuccheri e Carboidrati):</strong> Questi vengono estratti successivamente. Generano equilibrio, dolcezza e corpo. Questa è la "finestra d\'oro" dove il caffè raggiunge la sua massima complessità aromatica ed equilibrio strutturale.',
        '<strong>Fase Amara (Fibre e Composti Fenolici):</strong> Questi sono i più lenti a dissolversi. Con rapporti eccessivi (sovra-estrazione), l\'acqua degrada le cellule del caffè, estraendo amari secchi, cenere e note legnose.',
      ],
    },
    {
      type: 'title',
      text: 'Rapporti consigliati: Proporzioni per metodo di estrazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ogni metodo di estrazione richiede un rapporto specifico a causa di variabili come il tempo di contatto, la pressione della pompa o la dimensione dei pori del filtro. La seguente tabella tecnica delinea gli standard del settore per il 2026:',
    },
    {
      type: 'table',
      headers: ['Metodo di Infusione', 'Rapporto (Grammi/Acqua)', 'Profilo Tazza', 'Tempo Target'],
      rows: [
        ['Espresso', 'da 1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 sec'],
        ['V60 / Pour-Over', 'da 1:15 a 1:16', 'Pulito, brillante, note chiare', '2:30-3:30 min'],
        ['Aeropress', 'da 1:12 a 1:15', 'Versatile, corpo medio-alto', '1:30-2:00 min'],
        ['French Press', 'da 1:12 a 1:14', 'Texturizzato, pesante, oleoso', '4:00-5:00 min'],
        ['Cold Brew', 'da 1:8 a 1:12', 'Dolce, bassa acidità, ottimo corpo', '12-24 ore'],
      ],
    },
    {
      type: 'title',
      text: 'Calcolo dell\'acqua necessaria: Il Fattore di Ritenzione del chicco',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno degli errori più comuni nell\'infusione manuale è ignorare che il caffè macinato è una struttura idrofila porosa che trattiene una quantità costante di acqua. Non tutta l\'acqua che versi finisce nella tazza.',
    },
    {
      type: 'paragraph',
      html: 'Scientificamente, il caffè macinato trattiene circa <strong>2.0 grammi di acqua per ogni 1.0 grammo di caffè</strong>. Il nostro calcolatore introduce la <strong>Regolazione Dinamica della Ritenzione</strong>: se hai bisogno di riempire un contenitore specifico da 300ml, il sistema deduce che devi versare 340ml di acqua per compensare l\'assorbimento del chicco, mantenendo intatto il rapporto di estrazione e quindi il sapore.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Dose di Caffè', value: '20g', icon: 'mdi:coffee' },
        { label: 'Acqua Versata', value: '300ml', icon: 'mdi:water' },
        { label: 'Ritenzione', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'In Tazza', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'L\'importanza del Bloom: Degasamento per un\'estrazione uniforme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fase di "Bloom" non è solo estetica; è una necessità fisica. Durante la tostatura, il caffè genera CO2 che rimane intrappolata nella sua matrice cellulare. Se versiamo tutta l\'acqua continuamente, il gas fuoriesce violentemente, creando micro-canali (channeling) e impedendo al solvente di penetrare nel centro delle particelle di caffè.',
    },
    {
      type: 'tip',
      title: 'Tecnica di Saturazione Omogenea',
      html: '<p>Per un bloom perfetto, versa esattamente il doppio del peso del caffè in acqua (rapporto bloom 1:2). Agita delicatamente o fai roteare per assicurarti che tutto il caffè sia bagnato. Attendi 30-45 secondi. Il rilascio di gas permetterà ai versaggi successivi di fluire in modo laminare, estraendo i solidi uniformemente in tutto il letto di caffè.</p>',
    },
    {
      type: 'title',
      text: 'Tutorial Caffè Freddo: Come preparare il caffè freddo senza diluire il sapore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lo specialty coffee freddo (Flash Brew) richiede una ricalibrazione termodinamica. L\'obiettivo è estrarre gli oli volatili a 94°C per catturare la complessità aromatica, quindi raffreddarli rapidamente per evitare l\'ossidazione e la perdita di brillantezza.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% Acqua Calda:</strong> La quantità minima necessaria per ottenere un\'estrazione del 18-20% senza sovra-estrarre o raffreddare troppo presto il letto.',
        '<strong>40% Ghiaccio Termico:</strong> Posizionato nella caraffa ricevente. L\'energia termica del caffè si trasferisce al ghiaccio (calore latente di fusione), raffreddando istantaneamente la bevanda al di sotto dei 5°C.',
        '<strong>Forza Finale:</strong> Combinati, il rapporto finale (es. 1:15) rimane esatto, risultando in una bevanda fredda e vibrante con la corretta concentrazione di sapore.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensione della macinatura e Rapporto Caffè: La chiave per l\'area superficiale di contatto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il rapporto è solo metà dell\'equazione. La macinatura determina l\'<strong>Area Superficiale Totale Esposta</strong> al solvente. Le particelle più piccole (macinatura fine) hanno un\'area superficiale proporzionalmente maggiore, il che accelera drasticamente l\'estrazione dei composti chimici.',
    },
    {
      type: 'title',
      text: 'Riproducibilità e Scienza: Trasforma la tua cucina in un laboratorio da barista',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'eccellenza nello specialty coffee deriva dalla costanza metrica. La nostra funzione <strong>Ricette Personalizzate</strong> ti permette di creare un archivio tecnico delle tue calibrazioni di successo. Non è solo una cartella di preferiti; è uno strumento di analisi per confrontare come lo stesso chilo di caffè reagisce a un rapporto 1:15 rispetto a un 1:16, permettendoti di regolare la ricetta con precisione.',
    },
  ],
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
