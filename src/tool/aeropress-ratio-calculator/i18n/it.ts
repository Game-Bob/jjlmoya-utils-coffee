import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'calcolatore-ratio-aeropress';
const title = 'Calcolatore di Ratio e Ricette per AeroPress';
const description = 'Calcola la distribuzione dell\'acqua, il volume della camera, la diluizione bypass e le fasi di estrazione per caffè AeroPress.';

const howTo = [
  {
    name: 'Scegliere metodo e modello AeroPress',
    text: 'Seleziona tra metodo Standard e Invertito e imposta la capacità del modello AeroPress (Original, XL o Go).',
  },
  {
    name: 'Impostare dose di caffè e ratio',
    text: 'Inserisci i grammi di caffè macinato e il ratio desiderato, oppure scegli una ricetta di campionato.',
  },
  {
    name: 'Controllare acqua in camera e bypass',
    text: 'Verifica se la ricetta supera il volume utile. Lo strumento calcola in automatico l\'acqua di bypass da versare in tazza.',
  },
  {
    name: 'Avviare il timer a fasi',
    text: 'Usa il cronometro integrato per gestire pre-infusione (bloom), infusione e pressione con la massima precisione.',
  },
];

const faq = [
  {
    question: 'Qual è la differenza tra metodo standard e invertito con AeroPress?',
    answer: 'Nel metodo standard la caffettiera poggia sulla tazza, provocando un leggero gocciolamento prima di inserire lo stantuffo. Nel metodo invertito l\'AeroPress è posizionata a testa in giù sullo stantuffo, garantendo un\'immersione totale e controllata.',
  },
  {
    question: 'Che cosa significa estrazione bypass in AeroPress?',
    answer: 'Il bypass consiste nell\'estrarre un concentrato nella camera e diluirlo in tazza con acqua calda pulita. Permette di preparare porzioni abbondanti senza traboccare.',
  },
  {
    question: 'Qual è il ratio ideale per l\'AeroPress?',
    answer: 'Per una classica tazza filtro, i ratio tra 1:14 e 1:17 (ad esempio da 11g a 15g di caffè per 200g di acqua) offrono un equilibrio eccellente. Per bevande concentrate, i ratio tra 1:4 e 1:8 offrono grande corpo.',
  },
  {
    question: 'Come incide la macinatura sull\'estrazione?',
    answer: 'Una macinatura medio-fine è perfetta per infusioni rapide di 1 o 2 minuti. Macinature più fini aumentano il corpo, mentre macinature medie evitano l\'amarezza su tempi lunghi.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Strumento Specialty Coffee',
    profileLabel: 'Profilo di Estrazione',
    unitSystemLabel: 'Sistema di Unità',
    unitMetricLabel: 'Metrico (g)',
    unitImperialLabel: 'Imperiale (oz)',
    presetsTitle: 'Ricette Barista e Campionati',
    presetCustom: 'Formula Personalizzata',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Tostatura Chiara',
    presetWacChamp: 'Campione WAC Bypass',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Iced AeroPress',
    methodLabel: 'Tecnica di Estrazione',
    methodStandard: 'Standard Diretto',
    methodInverted: 'Immersione Invertita',
    modelLabel: 'Modello AeroPress',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Dose di Caffè',
    doseUnitMetric: 'grammi',
    doseUnitImperial: 'oz',
    ratioLabel: 'Ratio di Estrazione',
    ratioPrefix: '1:',
    waterTempLabel: 'Temperatura Acqua',
    waterTempUnit: '°C',
    grindLabel: 'Profilo Macinatura',
    grindFine: 'Fine',
    grindMediumFine: 'Medio Fine',
    grindMedium: 'Media',
    grindCoarse: 'Grossolana',
    resultsTitle: 'Distribuzione Acqua e Metriche',
    statTotalWater: 'Acqua Totale',
    statChamberWater: 'Acqua in Camera',
    statBypassWater: 'Acqua Bypass',
    statYield: 'Resa in Tazza',
    statEstimatedTds: 'TDS Stimato',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Diluizione Bypass Necessaria',
    bypassAlertText: 'La tua ricetta richiede {chamber} nella camera e {bypass} aggiunti direttamente nella tazza.',
    timerTitle: 'Timer a Fasi',
    timerStart: 'Avvia Timer',
    timerPause: 'Pausa',
    timerReset: 'Reimposta',
    phaseBloom: 'Pre-infusione e Bagnatura',
    phasePour: 'Versamento e Agitazione',
    phaseSteep: 'Immersione e Riposo',
    phasePress: 'Pressione Delicata',
    phaseBypass: 'Aggiungere Acqua Bypass',
    phaseComplete: 'Estrazione Pronta',
    guideTitle: 'Guida all\'Estrazione',
    guideStep1Title: 'Sciacquare filtro e dosare',
    guideStep1Desc: 'Posiziona il filtro nel tappo e risciacqua con acqua calda. Aggiungi il caffè appena macinato.',
    guideStep2Title: 'Versare acqua nella camera',
    guideStep2Desc: 'Versa l\'acqua calcolata alla temperatura indicata e mescola con cura.',
    guideStep3Title: 'Inserire lo stantuffo e attendere',
    guideStep3Desc: 'Posiziona lo stantuffo per creare il vuoto e lascia in infusione per il tempo previsto.',
    guideStep4Title: 'Premere e diluire',
    guideStep4Desc: 'Abbassa lo stantuffo con pressione costante per 20 o 30 secondi. Fermati al sibilo e aggiungi l\'acqua bypass.',
    ratioStrengthLight: 'Leggero e Delicato',
    ratioStrengthMedium: 'Tazza Equilibrata',
    ratioStrengthStrong: 'Intenso e Strutturato',
    ratioStrengthConcentrate: 'Concentrato Tipo Espresso',
    chamberWaterLabel: 'Acqua in Camera',
    coffeeBedLabel: 'Letto di Caffè',
    airGapLabel: 'Camera d\'Aria',
  },
  seo: [
    { type: 'title', text: 'Principi di Estrazione e Ratios per AeroPress', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'<strong>AeroPress</strong> è uno dei sistemi più versatili per la preparazione del caffè filtro, unendo infusione totale e filtrazione pneumatica. Raggiungere la perfetta tazza dolce e aromatica richiede il controllo esatto del rapporto tra caffè e acqua.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Limiti di Volume della Camera e Meccanica del Bypass',
      html: 'La camera di un AeroPress standard contiene circa 220ml-240ml d\'acqua al netto del pannello di caffè. Per dosi più abbondanti, i professionisti utilizzano il bypass per evitare sovraestrazioni sgradevoli.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Ratio Aureo Filtro' },
        { value: '230 ml', label: 'Capacità Standard Camera' },
        { value: '1.2 a 1.5%', label: 'Intervallo Ottimale TDS' },
      ],
    },
    { type: 'title', text: 'Confronto tra Metodo Standard e Invertito', level: 3 },
    {
      type: 'paragraph',
      html: 'L\'orientamento della caffettiera influisce sul tempo di contatto e sull\'omogeneità dell\'estrazione.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metodo Standard Diretto',
          description: 'Il tappo col filtro poggia direttamente sulla tazza. Inserire lo stantuffo inclinato crea un vuoto che arresta il gocciolamento.',
          points: [
            'Procedura molto semplice e sicura',
            'Piccola percolazione passiva iniziale',
            'Scelta consigliata da James Hoffmann per la costanza',
          ],
        },
        {
          title: 'Metodo Invertito in Immersione',
          description: 'L\'AeroPress poggia a testa in giù sullo stantuffo, evitando qualsiasi perdita fino al momento di capovolgere.',
          highlight: true,
          points: [
            'Controllo totale del tempo di contatto',
            'Ideale per concentrati e dosi generose',
            'Richiede attenzione durante il capovolgimento',
          ],
        },
      ],
    },
    { type: 'title', text: 'Utilizzare la Diluizione Bypass per Tazze Grandi', level: 3 },
    {
      type: 'paragraph',
      html: 'Il bypass è la tecnica vincente di molte edizioni del World AeroPress Championship. Estrarre con un ratio concentrato di 1:6 a 1:8 estrae solo le note aromatiche nobili, mentre la diluizione successiva con acqua calda ripristina la piacevolezza gustativa.',
    },
    {
      type: 'table',
      headers: ['Stile Ricetta', 'Dose Caffè', 'Acqua Camera', 'Acqua Bypass', 'Macinatura'],
      rows: [
        ['Filtro Hoffmann', '11g', '200g', '0g', 'Medio Fine (600µm)'],
        ['Tim Wendelboe Chiaro', '14g', '200g', '0g', 'Media (700µm)'],
        ['Campione WAC Bypass', '30g', '120g', '105g', 'Grossolana (900µm)'],
        ['Alan Adler Classico', '17g', '80g', '100g Opzionale', 'Fine (450µm)'],
        ['Flash Brew Ghiacciato', '18g', '150g', '100g Ghiaccio', 'Medio Fine (550µm)'],
      ],
    },
    { type: 'title', text: 'Consigli per un\'Estrazione Perfetta', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Taratura della temperatura:</strong> 92°C a 96°C per tostature chiare e fruttate, 80°C a 85°C per tostature scure.',
        '<strong>Pressione lenta e dolce:</strong> Premi con regolarità per 20-30 secondi per evitare canalizzazioni.',
        '<strong>Risciacquo del filtro:</strong> Bagna la carta con acqua calda per rimuovere sentori legnosi.',
        '<strong>Fermarsi al sibilo:</strong> Interrompi la discesa non appena senti passare l\'aria per escludere oli amari.',
      ],
    },
    {
      type: 'summary',
      title: 'Riepilogo',
      items: [
        'Adatta la macinatura al tempo di infusione.',
        'Sfrutta il calcolo del bypass quando la resa supera la capacità della camera.',
        'Monitora temperatura e tempi con costanza per risultati eccellenti.',
      ],
    },
  ],
  faq,
  faqTitle: 'Domande Frequenti su Ratio e Ricette per AeroPress',
  bibliography,
  bibliographyTitle: 'Riferimenti Tecnici e Scienza del Caffè',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
