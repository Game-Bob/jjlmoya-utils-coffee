import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Acido / Aspro',
    bitter: 'Amaro / Bruciato',
    watery: 'Acquoso / Debole',
    astringent: 'Astringente / Secco',
  },
  causes: {
    acidic: ['Macinatura troppo grossolana (sotto-estrazione)', 'Temperatura dell\'acqua troppo bassa', 'Tempo di infusione troppo breve', 'Caffè troppo fresco (non degasato)'],
    bitter: ['Macinatura troppo fine (sovra-estrazione)', 'Temperatura dell\'acqua troppo alta', 'Tempo di infusione troppo lungo', 'Caffè vecchio o tostatura scura'],
    watery: ['Macinatura troppo grossolana (estrazione debole)', 'Rapporto troppo alto (troppa acqua)', 'Tempo di infusione troppo breve', 'Caffè troppo vecchio o di bassa qualità'],
    astringent: ['Problemi di qualità dell\'acqua (troppi minerali)', 'Sovra-estrazione combinata con contenuto minerale', 'Macinatura troppo fine con acqua dura', 'Temperatura di infusione troppo alta'],
  },
  solutions: {
    acidic: 'L\'acqua scorre troppo velocemente attraverso i granelli grossolani senza estrarre il corpo. Una macinatura più fine aumenta la superficie di contatto e rallenta il flusso.',
    bitter: 'L\'acqua ha passato troppo tempo a estrarre, tirando fuori composti amari e cinerini. Una macinatura più grossolana riduce il tempo di contatto e l\'intensità dell\'estrazione.',
    watery: 'Non ci sono abbastanza solidi disciolti nella tua tazzina. Una macinatura più fine o un aumento della dose di caffè eleva la percentuale di estrazione e il corpo.',
    astringent: 'L\'acqua ricca di minerali sovra-estrae e si lega ai composti del caffè, creando una sensazione di secchezza in bocca. Una macinatura più grossolana riduce la sovra-estrazione mentre la filtrazione migliora la qualità dell\'acqua.',
  },
  actions: {
    acidic: { text: 'Macinare un po\' più fine', textSevere: 'Macinare molto più fine', icon: 'mdi:chevron-left' },
    bitter: { text: 'Macinare un po\' più grosso', textSevere: 'Macinare molto più grosso', icon: 'mdi:chevron-right' },
    watery: { text: 'Macinare più fine o usare 5g di caffè in più', textSevere: 'Macinare molto più fine o usare 7g de caffè in più', icon: 'mdi:plus-circle' },
    astringent: { text: 'Usare acqua filtrata e macinare più grosso', textSevere: 'Usare acqua filtrata e macinare molto più grosso', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Come sale fino', bitter: 'Come farina', watery: 'Come cacao in polvere', astringent: 'Farina leggermente più fine' },
    pourover: { acidic: 'Come sale da tavola', bitter: 'Come sabbia grossolana', watery: 'Come farina di mais fine', astringent: 'Sabbia fine' },
    aeropress: { acidic: 'Come farina di mais fine', bitter: 'Come sale da tavola', watery: 'Come pepe macinato finemente', astringent: 'Sabbia media' },
    frenchpress: { acidic: 'Come pangrattato', bitter: 'Come sale grosso', watery: 'Come sale marino', astringent: 'Sabbia grossolana' },
    moka: { acidic: 'Come sale marino fino', bitter: 'Come sabbia fine', watery: 'Come sale da tavola', astringent: 'Sabbia medio-fine' },
    coldbrew: { acidic: 'Come sale marino grosso', bitter: 'Come ghiaia', watery: 'Come sale grosso', astringent: 'Sabbia grossolana con grani' },
  },
  secondaryAction: 'Infondere a {temp}°C per {time}',
  tertiaryAction: 'Lascia raffreddare il caffè a temperatura ambiente prima di assaggiarlo per cogliere tutte le note.',
};

const slug = 'diagnosi-estrazione-caffe-brew-fixer';
const title = 'Diagnosi dell\'Estrazione del Caffè: The Brew Fixer';
const description =
  'Scopri perché il tuo caffè ha un cattivo sapore in pochi secondi. Ottieni regolazioni personalizzate per macinatura, temperatura e tempo in base al tuo metodo.';

const faqData = [
  {
    question: 'Come capisco se il mio caffè è sotto-estratto o sovra-estratto?',
    answer:
      'La sotto-estrazione (sapore aspro/acido) indica che l\'acqua è passata troppo velocemente senza sciogliere abbastanza composti. La sovra-estrazione (sapore amaro/bruciato) significa che l\'acqua è rimasta troppo a lungo a contatto con il caffè. The Brew Fixer ti aiuta a identificare il problema analizzando le tue note di sapore e il metodo di estrazione.',
  },
  {
    question: 'Qual è l\'errore più comune nella preparazione del caffè?',
    answer:
      'La dimensione della macinatura. Molti macinano o troppo grosso (caffè debole e aspro) o troppo fine (caffè amaro e sovra-estratto). Regolare il macinino sulla dimensione esatta per il tuo metodo è l\'intervento più efficace che puoi fare.',
  },
  {
    question: 'La temperatura conta davvero così tanto?',
    answer:
      'Sì. La temperatura dell\'acqua controlla la velocità di estrazione. Se è troppo fredda, sotto-estrai (aspro). Se è troppo calda, sovra-estrai (amaro). Ogni metodo ha un range ideale: i filtrati tipo V60 preferiscono 92-96°C, mentre la French Press rende meglio a 85-90°C per evitare la sovra-estrazione durante l\'infusione prolungata.',
  },
  {
    question: 'Perché il mio caffè è astringente o mi secca la bocca?',
    answer:
      'L\'astringenza è solitamente causata da acqua ricca di minerali o da una combinazione di sovra-estrazione e minerali. Prova a usare acqua filtrata e una macinatura leggermente più grossa. Se non aiuta, il TDS dell\'acqua potrebbe essere troppo alto.',
  },
  {
    question: 'Posso correggere una tazza venuta male solo regolando temperatura e tempo?',
    answer:
      'Temperatura e tempo aiutano, ma la macinatura è spesso la radice del problema. Se è troppo grossa, estrarre più a lungo o con acqua più calda aiuterà solo in minima parte. The Brew Fixer consiglierà sempre la macinatura come azione primaria.',
  },
  {
    question: 'Dovrei usare la stessa ricetta per tutti i miei caffè?',
    answer:
      'No. Il caffè molto fresco (1-5 giorni) si estrae più velocemente e può richiedere una macinatura più grossa rispetto a un caffè più vecchio. Le tostature chiare sono più dense e necessitano di macinature più fini; quelle scure sono più porose e preferiscono macinature più grosse.',
  },
];

const howToData = [
  {
    name: 'Seleziona il tuo metodo di estrazione',
    text: 'Scegli lo strumento che hai usato: pour-over, French Press, Aeropress, Moka, macchina espresso o cold brew. Lo strumento fornirà raccomandazioni specifiche.',
  },
  {
    name: 'Identifica il difetto di sapore dominante',
    text: 'Assaggia il caffè e seleziona il sapore che risalta di più: acido (aspro), amaro (bruciato), acquoso (debole) o astringente (secco). Puoi anche selezionare un sapore secondario.',
  },
  {
    name: 'Valuta l\'intensità',
    text: 'Sposta lo slider per indicare quanto è forte il difetto. "Lieve" significa che lo noti appena; "severo" significa che domina la tazza. Questo aiuta a calibrare la regolazione.',
  },
  {
    name: 'Esegui la diagnosi',
    text: 'Clicca sul pulsante "Diagnostica" e lo strumento analizzerà i tuoi dati per fornirti un\'azione primaria (macinatura), azioni secondarie e un riferimento di consistenza.',
  },
  {
    name: 'Regola e prova',
    text: 'Applica la modifica raccomandata (es. macina più grosso, estrai più a lungo). Prepara una nuova tazza e assaggiala. Piccoli aggiustamenti portano a grandi risultati.',
  },
  {
    name: 'Dacci un feedback',
    text: 'Dopo aver bevuto la tazza successiva, comunica allo strumento se è migliorata. Se sì, vedrai dei coriandoli! Altrimenti, torna indietro e prova parametri diversi.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti sull\'Estrazione del Caffè',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici e Scienza del Caffè',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Perché il tuo caffè è cattivo? Guida alla Diagnosi dell\'Estrazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La differenza tra un espresso eccezionale e una tazza che sa di carta bruciata risiede in un unico concetto: <strong>l\'estrazione del caffè</strong>. L\'estrazione è il processo attraverso il quale l\'acqua scioglie i composti solubili del caffè macinato. Se la indovini, sbloccherai complessità, dolcezza e chiarezza. Se sbagli, otterrai acidità, amarezza o debolezza.',
    },
    {
      type: 'summary',
      title: 'Cosa imparerai con The Brew Fixer',
      items: [
        '<strong>Come diagnosticare i difetti di estrazione:</strong> Capisci se il tuo caffè è sotto-estratto, sovra-estratto, debole o se l\'acqua ha problemi di qualità.',
        '<strong>Le tre leve che controllano l\'estrazione:</strong> Dimensione della macinatura, temperatura dell\'acqua e tempo di contatto. Quale regolare per prima?',
        '<strong>Consigli specifici per ogni metodo:</strong> La macinatura ideale per una V60 è diversa da quella per una French Press. Ottieni consigli su misura.',
        '<strong>Riferimenti visivi e tattili:</strong> Scopri quale macinatura puntare confrontandola con materiali comuni (polvere fine, sale marino, sabbia).',
      ],
    },
    {
      type: 'title',
      text: 'Le Tre Dimensioni dell\'Estrazione del Caffè',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La percentuale di estrazione è la massa dei solidi disciolti divisa per la massa del caffè secco originale. Il caffè specialty punta a una <strong>estrazione del 18-20%</strong>. Al di sotto sa di aspro, al di sopra di amaro.',
    },
    {
      type: 'list',
      items: [
        '<strong>La macinatura</strong> controlla la superficie di contatto. Macinature fini estraggono più velocemente; macinature grosse più lentamente.',
        '<strong>La temperatura</strong> controlla la velocità di dissoluzione. L\'acqua calda (94-96°C) estrae più velocemente dell\'acqua più fresca (85-90°C).',
        '<strong>Il tempo di contatto</strong> è quanto a lungo l\'acqua resta col caffè. Pour-over (2:30-3:30 min), French Press (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Come Diagnosticare un Caffè Aspro (Sotto-Estrazione)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il caffè aspro sa di limone o mela verde: è acido e pungente. Significa che l\'acqua non ha passato abbastanza tempo a estrarre i solidi. La soluzione è quasi sempre <strong>macinare più fine</strong> per rallentare il flusso d\'acqua.',
    },
    {
      type: 'list',
      items: [
        'Macina più fine (riduci la macinatura di 5-10 µm)',
        'O allunga leggermente il tempo di estrazione (aggiungi 15-30 secondi)',
        'O aumenta la temperatura dell\'acqua a 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'How to Diagnose Bitter Coffee (Over-Extraction)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il caffè amaro sa di bruciato, cenere o legno. Significa che l\'acqua ha estratto troppi solidi, superando i composti desiderabili. La soluzione è <strong>macinare più grosso</strong> per aumentare il flusso d\'acqua e ridurre il tempo di contatto.',
    },
    {
      type: 'list',
      items: [
        'Macina più grosso (aumenta la macinatura di 5-10 µm)',
        'O riduci il tempo di estrazione (togli 15-30 secondi)',
        'O abbassa la temperatura dell\'acqua a 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Come Diagnosticare un Caffè Acquoso (Debole, Leggero)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un caffè debole manca di sapore e corpo. Di solito significa che la macinatura è troppo grossa, il rapporto acqua/caffè è troppo alto o il caffè è vecchio. Regolare il macinino è la soluzione più rapida.',
    },
    {
      type: 'list',
      items: [
        'Usa una macinatura più fine per aumentare la superficie di estrazione',
        'Usa più caffè (aumenta il rapporto)',
        'Estrai un po\' più a lungo o con acqua più calda',
      ],
    },
    {
      type: 'title',
      text: 'Come Diagnosticare un Caffè Astringente (Secco, Sapore Minerale)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'astringenza si sente come secchezza in bocca. Di solito è causata da acqua dura (alto contenuto di minerali) unita a sovra-estrazione. Richiede sia una regolazione della macinatura <em>che</em> un miglioramento dell\'acqua.',
    },
    {
      type: 'list',
      items: [
        'Usa acqua filtrata per ridurre i minerali (obiettivo TDS 60-150 ppm)',
        'Macina più grosso per ridurre la sovra-estrazione',
        'Prova acqua leggermente più fresca (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Tabella Macinatura: Aspetto e Sensazione',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nome Macinatura', 'Dimensione Particella', 'Riferimento Consistenza', 'Metodi Ideali'],
      rows: [
        ['Extra Fine', '5-15 µm', 'Polvere fine, cacao', 'Espresso, Turco'],
        ['Fine', '15-30 µm', 'Zucchero a velo', 'Moka, Aeropress'],
        ['Medio-Fine', '30-50 µm', 'Sabbia fine, sale da tavola', 'V60, Chemex, Pour-over'],
        ['Media', '50-70 µm', 'Sabbia da spiaggia', 'Macchine filtro, Filtri piani'],
        ['Grossolana', '70-90 µm', 'Sale grosso, sabbia grossa', 'French Press, Cupping'],
        ['Extra Grossolana', '90+ µm', 'Grani di pepe, pangrattato', 'Cold Brew, Percolatore'],
      ],
    },
    {
      type: 'title',
      text: 'Qualità dell\'Acqua: Il TDS e l\'Estrazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il Totale dei Solidi Disciolti (TDS) misura il contenuto minerale dell\'acqua. L\'acqua del rubinetto varia molto: da 50 ppm (dolce) a oltre 300 ppm (dura). Il caffè è molto sensibile a questo valore.',
    },
    {
      type: 'list',
      items: [
        '<strong>Troppo dolce (0-50 ppm):</strong> L\'acqua estrae troppo, il caffè sa di salato.',
        '<strong>Ideale (60-150 ppm):</strong> Estrazione dolce, bilanciata e corposa.',
        '<strong>Troppo dura (200+ ppm):</strong> I minerali bloccano gli aromi, creando astringenza.',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio Rapido per l\'Acqua',
      html: '<p>Se sospetti che l\'acqua sia dura, prova a preparare il caffè con acqua filtrata o in bottiglia. Se il sapore migliora subito, hai trovato il colpevole. Investi in una caraffa filtrante (Brita) o in un filtro domestico.</p>',
    },
  ],
  ui: {
    methodLabel: 'Cosa stai preparando?',
    methodPourover: 'Pour Over / Filtro',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Moka / Caffettiera',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Seleziona lo strumento',
    flavorLabel: 'Che sapore ha?',
    flavorAcidic: 'Acido / Aspro',
    flavorBitter: 'Amaro / Bruciato',
    flavorWatery: 'Acquoso / Debole',
    flavorAstringent: 'Astringente / Secco',
    flavorHint: 'Scegli fino a 2 gusti',
    severityLabel: 'Quanto è forte il problema?',
    severitySlightLabel: 'Appena percettibile',
    severityModerateLabel: 'Moderato',
    severitySevereLabel: 'Dominante',
    diagnoseBtn: 'Diagnostica il mio caffè',
    resetBtn: 'Reset',
    resultTitle: 'Diagnosi Completata',
    resultExplanation: 'Cosa sta succedendo nella tua tazza',
    actionMainLabel: 'Azione Principale',
    actionSecondaryLabel: 'Temperatura e Tempo',
    actionTertiaryLabel: 'Consiglio Pro',
    textureReferenceLabel: 'Riferimento Consistenza',
    improvementHint: 'Fai la regolazione e prepara un\'altra tazza.',
    copyDiagnosisBtn: 'Copia Diagnosi',
    feedbackLabel: 'Il caffè è migliorato?',
    feedbackSuccessTemplate: 'Ottimo! La regolazione ha funzionato.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Caffettiera a stantuffo, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka, Caffettiera da fuoco',
    methodEspressoDesc: 'Macchina espresso, leva',
    methodColdbrewDesc: 'Immersione, a freddo',
    fadeOutMessage: 'Ottimo lavoro! Continua a regolare.',
    backBtn: 'Indietro',
    mainIssueLabel: 'Problema Principale',
    improvedBtn: 'Migliorato',
    notYetBtn: 'Non ancora',
    copiedBtn: 'Copiato!',
    combinedLabel: 'Combinato',
    diagnosisTitle: 'Diagnosi di The Brew Fixer',
    issueLabel: 'Problema',
    causeLabel: 'Causa',
    actionLabel: 'Azione',
    whyLabel: 'Perché',
    nextLabel: 'Avanti',
  },
};
