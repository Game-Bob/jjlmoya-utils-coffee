import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';

const slug = 'convertitore-macinatura-caffe';
const title = 'Convertitore Dimensione Macinatura Caffè';
const description =
  'Guida interattiva alla macinatura con clic e livelli per regolare il tuo macinacaffè tra Espresso, V60, French Press e altro. Mappatura tecnica in micron per tutti i metodi di estrazione.';

const faqData = [
  {
    question: 'Perché la stessa impostazione di macinatura non funziona per tutti i caffè?',
    answer:
      'La densità dei chicchi varia in base al livello di tostatura e all\'origine. Una tostatura chiara è tipicamente più densa e richiede una macinatura più fine per essere estratta correttamente, mentre una tostatura scura è più porosa e necessita di un\'impostazione più grossolana.',
  },
  {
    question: 'Come faccio a sapere se devo macinare più fine o più grosso?',
    answer:
      'Lasciati guidare dal gusto: se il caffè ha un sapore amaro e secco, macina più grosso in modo che l\'acqua scorra più velocemente. Se ha un sapore acido, salato o acquoso, macina più fine per aumentare l\'area della superficie di contatto.',
  },
  {
    question: "Cos'è il 'channeling' e in che modo la macinatura lo influenza?",
    answer:
      'Il channeling si verifica quando l\'acqua trova un percorso di minor resistenza attraverso il letto di caffè. Una macinatura non uniforme o inappropriata per la pressione — specialmente nell\'espresso — favorisce questo problema e rovina l\'estrazione.',
  },
  {
    question: 'Posso usare questa tabella con un macinacaffè a lame?',
    answer:
      'I macinacaffè a lame producono particelle non uniformi — polvere fine e pezzi grandi contemporaneamente. I valori in micron sono indicativi, ma i risultati reali varieranno significativamente rispetto a un macinacaffè a macine.',
  },
  {
    question: 'Cosa significa l\'uniformità del macinacaffè nella visualizzazione?',
    answer:
      'La distribuzione delle particelle mostrata simula la reale uniformità di ogni macinacaffè. Un Comandante C40 con uniformità 0,95 produce particelle molto costanti; un Hario Skerton con 0,40 mostra molta più variazione di dimensione.',
  },
];

const howToData = [
  {
    name: 'Seleziona il tuo macinacaffè',
    text: 'Scegli il tuo modello dall\'elenco a discesa. Il convertitore mostrerà i clic o i livelli consigliati specificamente per la tua attrezzatura.',
  },
  {
    name: 'Seleziona il tuo metodo di estrazione',
    text: 'Fai clic sull\'icona del metodo che intendi utilizzare. Il pannello di controllo si aggiornerà con tutti i parametri tecnici rilevanti.',
  },
  {
    name: 'Interpreta l\'indicatore in micron',
    text: "Usa il valore in micron nel grafico a barre per capire la dimensione effettiva delle particelle. Il riferimento tattile (sale fino, zucchero semolato...) ti aiuta a calibrare visivamente.",
  },
  {
    name: 'Osserva la simulazione delle particelle',
    text: "La distribuzione dei punti mostra l'uniformità tipica del tuo macinacaffè. Un pattern più omogeneo significa un'estrazione più prevedibile e ripetibile.",
  },
  {
    name: 'Regola in base al gusto',
    text: 'Usa la guida diagnostica in fondo come riferimento. Se il caffè sa di amaro, vai un paio di clic più grosso. Se sa di acido, vai più fine. Regola sempre un passo alla volta.',
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

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti sulla Dimensione della Macinatura',
  faq: faqData,
  bibliographyTitle: 'Riferimenti su Macinatura ed Estrazione',
  bibliography: [
    {
      name: 'James Hoffmann: The Ultimate Guide to Coffee Grind Size',
      url: 'https://www.youtube.com/watch?v=83n7Yp_p2yM',
    },
    {
      name: 'Barista Hustle: Grind Size and Extraction',
      url: 'https://www.baristahustle.com/blog/the-grind-size-and-extraction/',
    },
    {
      name: 'Comandante C40: Official Extraction Chart',
      url: 'https://www.comandantegrinder.com/',
    },
    {
      name: 'SCA Brewing Best Practices: Grind Standards',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Fisica della Macinatura: Perché la Dimensione delle Particelle Cambia Tutto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando macini il caffè, non stai solo riducendo la dimensione dei chicchi. Stai definendo l\'<strong>area della superficie di contatto</strong> disponibile affinché l\'acqua dissolva i composti aromatici. Troppo fine, e l\'acqua sovra-estrae i composti amari. Troppo grosso, e l\'acqua passa attraverso senza abbastanza resistenza, producendo una tazza debole e acida. Il convertitore di macinatura ti dà il range esatto per ogni metodo.',
    },
    {
      type: 'summary',
      title: 'Cosa determina la corretta dimensione della macinatura?',
      items: [
        '<strong>Metodo di estrazione:</strong> Pressione, tempo di contatto e tipo di filtro dettano il range ottimale di micron per ogni metodo di infusione.',
        '<strong>Uniformità del macinacaffè:</strong> Un macinacaffè a macine di alta qualità produce particelle omogenee; uno a lame genera polvere fine e pezzi grandi contemporaneamente.',
        '<strong>Freschezza dei chicchi:</strong> Il caffè appena tostato contiene più CO2 e potrebbe necessitare di una macinatura leggermente più grossolana rispetto allo stesso caffè invecchiato di qualche settimana.',
        '<strong>Calibrazione del gusto:</strong> Il palato è lo strumento finale. La tabella è il tuo punto di partenza; il sapore è la tua destinazione.',
      ],
    },
    {
      type: 'table',
      headers: ['Metodo', 'Micron', 'Riferimento tattile', 'Tempo di contatto'],
      rows: [
        ['Ibrik (Turco)', '100-300 μm', 'Talco / Farina fine', '3-5 min bollitura'],
        ['Espresso', '300-500 μm', 'Sale fino', '25-30 sec'],
        ['Moka / AeroPress', '500-700 μm', 'Sale da tavola', '3-4 min'],
        ['V60 / Filtro', '700-900 μm', 'Zucchero semolato', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200 μm', 'Sabbia grossa', '3:30-4:30 min'],
        ['French Press', '1200-1500 μm', 'Sale grosso', '4 min immersione'],
        ['Cold Brew', '1500+ μm', 'Grani di pepe', '12-24 h freddo'],
      ],
    },
    {
      type: 'title',
      text: 'Regola d\'oro per nuovi caffè',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>Quando apri un nuovo caffè, inizia sempre dal punto medio del range consigliato per il tuo metodo. Da lì, regola in base al gusto un clic alla volta. Prendi nota di ogni regolazione per costruire un registro di riferimento dei tuoi caffè preferiti con ogni macinacaffè.</p>',
    },
  ],
  ui: {
    step1Label: 'Passaggio 1: Selezione Attrezzatura',
    step2Label: 'Passaggio 2: Metodo di Estrazione',
    gaugeLabel: 'Mappa Tecnica delle Particelle (μm)',
    distributionLabel: 'Distribuzione Reale delle Particelle',
    refLabel: 'Riferimento',
    rangeMicrasLabel: 'Range μm',
    unitMicras: 'MICRON TARGET (μm)',
    unitClicks: 'CLIC CONSIGLIATI',
    unitLevel: 'LIVELLO CONSIGLIATO',
    suggestGrinderText: "Non vedi il tuo macinacaffè? Suggeriscilo",
    method0Name: 'Ibrik (Turco)',
    method0Ref: 'Talco / Farina fine',
    method0Desc: 'Polvere extra fine, quasi come farina. Essenziale per la sospensione del caffè turco.',
    method1Name: 'Espresso',
    method1Ref: 'Sale fino',
    method1Desc: 'L\'estrazione ad alta pressione richiede una macinatura molto fine per creare resistenza.',
    method2Name: 'Moka / AeroPress',
    method2Ref: 'Sale da tavola',
    method2Desc: 'Pressione media o immersione ibrida. Texture versatile e bilanciata.',
    method3Name: 'V60 / Filtro',
    method3Ref: 'Zucchero semolato',
    method3Desc: 'Metodi pour-over manuali, lo standard per esaltare dolcezza e acidità.',
    method4Name: 'Chemex / Clever',
    method4Ref: 'Sabbia grossa',
    method4Desc: 'Filtri spessi o breve immersione. Richiede un flusso costante e regolare.',
    method5Name: 'French Press',
    method5Ref: 'Sale grosso',
    method5Desc: 'L\'immersione prolungata richiede particelle grandi per filtrare attraverso la rete metallica.',
    method6Name: 'Cold Brew',
    method6Ref: 'Grani di pepe',
    method6Desc: 'L\'estrazione a freddo per molte ore richiede la macinatura più grossolana possibile.',
    troubleIssue0: 'Ha un sapore amaro, secco o astringente?',
    troubleSolution0:
      'Stai sovra-estraendo. Macina più grosso così l\'acqua scorre più velocemente ed estrae meno composti amari.',
    troubleAction0: 'Macina più grosso',
    troubleIssue1: 'Ha un sapore acido, salato o acquoso?',
    troubleSolution1:
      'Stai sotto-estraendo. Macina più fine per aumentare la superficie di contatto ed estrarre più zuccheri e corpo.',
    troubleAction1: 'Macina più fine',
  },
};
