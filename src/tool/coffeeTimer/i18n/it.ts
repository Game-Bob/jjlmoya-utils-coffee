import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';

const slug = 'timer-estrazione-caffe';
const title = 'Timer per l\'Estrazione del Caffè';
const description =
  'Timer professionale per specialty coffee con fasi di versaggio, avvisi audio ritmici e riepilogo dell\'estrazione. Ottimizzato per V60, Chemex e Aeropress.';

const faqData = [
  {
    question: 'Perché usare questo timer invece di quello del telefono?',
    answer:
      'Questo timer è progettato specificamente per il caffè. Include fasi visive (Bloom, Versaggio, Drenaggio), avvisi audio 3 secondi prima di ogni transizione e ti permette di configurare la tua ricetta completa per non perdere mai il ritmo durante il versaggio.',
  },
  {
    question: 'Cos\'è il tempo di bloom?',
    answer:
      'È la pre-infusione iniziale (solitamente da 30 a 45 secondi) in cui si versa una piccola quantità d\'acqua per rilasciare la CO2. Il timer evidenzia questa fase in ambra così sai quando aspettare e quando continuare a versare.',
  },
  {
    question: 'Come faccio a sapere se il mio tempo di estrazione è corretto?',
    answer:
      'Per un V60 standard, il tempo totale dovrebbe essere compreso tra 2:30 e 3:15 minuti. Se finisce prima, la tua macinatura è troppo grossolana. Se impiega più tempo, è troppo fine. Il timer ti permette di diagnosticare questo processo con precisione.',
  },
  {
    question: 'Ha avvisi audio?',
    answer:
      'Sì. Il sistema emette un breve segnale acustico prima che termini la fase di bloom e alla fine del processo, permettendoti di concentrarti sul flusso dell\'acqua senza guardare costantemente lo schermo.',
  },
  {
    question: 'È compatibile con la Chemex?',
    answer:
      'Assolutamente sì. Puoi regolare il tempo totale a 4:30 o 5:00 minuti (tipico per la Chemex a causa del suo filtro spesso) nella sezione delle impostazioni in basso.',
  },
  {
    question: 'Funziona su mobile?',
    answer:
      'È ottimizzato per l\'uso mobile, con pulsanti grandi facili da premere anche con le mani bagnate o mentre tieni il bollitore a collo di cigno.',
  },
];

const howToData = [
  {
    name: 'Configura la tua ricetta',
    text: 'Nella sezione in basso, regola l\'acqua totale, l\'acqua di bloom, il tempo di bloom e il tempo totale in base al tuo metodo di estrazione (V60, Chemex, Aeropress).',
  },
  {
    name: 'Premi il pulsante di avvio',
    text: 'Premi il grande pulsante di avvio. Il timer inizierà e mostrerà la fase attiva nella barra di avanzamento in alto.',
  },
  {
    name: 'Fase di Bloom',
    text: 'Versa l\'acqua di bloom (mostrata sullo schermo) a spirale e aspetta che il timer avanzi. Riceverai un avviso audio 3 secondi prima che finisca.',
  },
  {
    name: 'Fase di Versaggio',
    text: 'Continua a versare l\'acqua rimanente fino a raggiungere il peso totale. Versa compiendo cerchi lenti e regolari per un\'estrazione uniforme.',
  },
  {
    name: 'Fase di Drenaggio',
    text: 'Aspetta che il caffè dreni completamente attraverso il filtro. Questa fase conclude l\'estrazione e determina la chiarezza e il finale della tua tazza.',
  },
  {
    name: 'Rivedi il riepilogo',
    text: 'Al termine, il timer mostra il tempo totale e l\'acqua versata. Tieni nota di questi valori insieme alle tue impressioni sul gusto per affinare la ricetta.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti sul Timer del Caffè',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici e Protocolli SCA',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Brewing Best Practices',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
    {
      name: 'Barista Hustle: The Theory of Extraction',
      url: 'https://www.baristahustle.com/blog/the-theory-of-extraction/',
    },
    {
      name: 'World Brewers Cup: Competition Protocol',
      url: 'https://worldcoffeeevents.org/world-brewers-cup/',
    },
    {
      name: 'Perfect Daily Grind: How Brew Time Affects Coffee Flavor',
      url: 'https://perfectdailygrind.com/2019/04/how-brew-time-affects-your-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Timer Estrazione Caffè: La Scienza dei Tempi di Estrazione (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nel mondo degli specialty coffee, il <strong>tempo di contatto</strong> tra acqua e caffè macinato non è un semplice parametro di attesa; è il fattore cinetico che decide quali composti chimici finiscono nella tua tazza. Un solo secondo in più può significare il passaggio dalla dolcezza del caramello all\'amarezza della cenere. Il nostro strumento professionale per V60, Chemex e Aeropress agisce come un <strong>assistente di ritmo</strong>, rendendo accessibile a casa la precisione di un barista.',
    },
    {
      type: 'summary',
      title: 'Perché un timer specializzato è vitale',
      items: [
        '<strong>Controllo Cinetico:</strong> Il ritmo con cui l\'acqua dissolve i solidi del caffè è costante. Il tempo è il tuo freno e acceleratore.',
        '<strong>Fasi di Versaggio:</strong> Il caffè non si estrae in modo lineare. Dividere il tempo in Bloom, Versaggio e Drenaggio è fondamentale.',
        '<strong>Riproducibilità:</strong> Se non misuri il tempo, non puoi ripetere le tue tazze migliori. La costanza è la base della qualità.',
        '<strong>Regolazione della Macinatura:</strong> Il tempo finale ti dice se macinare più fine o più grosso la volta successiva.',
      ],
    },
    {
      type: 'title',
      text: 'La Cronologia dell\'Estrazione: Cosa succede ogni secondo?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando l\'acqua calda tocca il caffè, inizia un percorso a ostacoli molecolare. Non tutti i sapori si estraggono contemporaneamente. Comprendere questa cronologia fa la differenza tra un barista amatoriale e uno professionale:',
    },
    {
      type: 'list',
      items: [
        '<strong>Secondi da 0 a 45 (Bloom):</strong> Questa è la fase di degasamento. La CO2 intrappolata durante la tostatura blocca l\'ingresso dell\'acqua. Aspettare qui permette al chicco di aprirsi, preparando la strada per un\'estrazione uniforme.',
        '<strong>Secondi da 45 a 120 (Estrazione di Acidi e Zuccheri):</strong> L\'acqua scorre e dissolve sali minerali, acidi organici e zuccheri complessi. Questo è il cuore del sapore.',
        '<strong>Secondi da 120 a 210 (Corpo e Finale):</strong> Vengono estratte le fibre più pesanti e i composti amari. Se questa fase dura troppo, il caffè diventa astringente.',
      ],
    },
    {
      type: 'title',
      text: 'La Fase di Bloom: Perché 30 secondi sono lo standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>Bloom</strong> o pre-infusione è quando versiamo circa il doppio del peso del caffè in acqua. Questi 30 secondi iniziali servono per espellere l\'anidride carbonica. Senza rispettare questo tempo, il gas spinge l\'acqua verso l\'esterno, creando canali dove il liquido passa senza toccare il caffè (channeling), con il risultato di una tazza acquosa e inconsistente.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Tempo Suggerito', 'Azione Tecnica', 'Scopo Chimico'],
      rows: [
        ['Bloom', 'da 30 a 45 sec', 'Versa 2x peso caffè', 'Degasamento (CO2)'],
        ['Primo Versaggio', 'da 45 a 90 sec', 'Cerchi lenti', 'Estrazione acidi e zuccheri'],
        ['Secondo Versaggio', 'da 90 a 150 sec', 'Versaggio centrale delicato', 'Bilanciamento e corpo'],
        ['Drawdown', 'Fino alla fine', 'Gocciolamento costante', 'Chiarezza e finale'],
      ],
    },
    {
      type: 'title',
      text: 'Impatto del Tempo sulla Macinatura: Il Ciclo di Feedback',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il timer è il tuo miglior strumento diagnostico per il macinacaffè. Se la tua ricetta per V60 dovrebbe impiegare 3:00 minuti e l\'acqua è drenata completamente a 2:15, il caffè saprà probabilmente di acido e debole (sotto-estrazione). La soluzione non è versare più lentamente, ma <strong>macinare più fine</strong> così le particelle resistono di più all\'acqua.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Tempo V60 Ideale', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Tempo Chemex Ideale', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Tempo Aeropress Ideale', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Avvisi di Ritmo: Perché l\'assistente audio è essenziale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Preparare il caffè filtro richiede un\'attenzione visiva costante per la bilancia e il pattern di versaggio. Il nostro timer include <strong>avvisi audio di prossimità</strong> che segnalano 3 secondi prima di iniziare il versaggio successivo o quando finisce il bloom. È la differenza tra un\'estrazione fluida e una piena di interruzioni.',
    },
    {
      type: 'tip',
      title: 'Suggerimento da Barista da Competizione',
      html: '<p>Mantieni il flusso d\'acqua il più basso e vicino possibile al letto di caffè. Versare da una grande altezza introduce ossigeno e un\'agitazione eccessiva, che può sovra-estrarre il caffè e raffreddare l\'acqua troppo velocemente. Usa il timer per mantenere un ritmo circolare costante di circa 5-7 grammi d\'acqua al secondo.</p>',
    },
    {
      type: 'title',
      text: 'Termodinamica e Tempo: La Variabile Temperatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tempo influenza la temperatura del sistema. Un\'estrazione che dura 6 minuti perderà molta energia termica, con il risultato di una tazza sbilanciata. I range di tempo ottimali mantengono l\'acqua tra 90°C e 96°C durante tutta l\'estrazione.',
    },
    {
      type: 'title',
      text: 'Tempistica per il caffè freddo con tecnica Flash Brew',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando si prepara il caffè sul ghiaccio, la tempistica deve essere più aggressiva. Usando meno acqua calda (60% del totale), il tempo di contatto si riduce. Per compensare, usa una macinatura leggermente più fine per mantenere il tempo di estrazione tra 2:30 e 3:00 minuti.',
    },
    {
      type: 'title',
      text: 'Riepilogo Post-Estrazione: Apprendimento Continuo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alla fine di ogni preparazione, il nostro strumento mostra il tempo di contatto totale. Segna questo valore insieme alle tue impressioni sul gusto. Sa di amaro? La prossima volta punta a un tempo inferiore di 15 secondi. Sa di metallico o acido? Punta a 20 secondi in più. Il timer non fa il caffè per te, ma ti dà i dati per essere un artista.',
    },
  ],
  ui: {
    readyText: 'Pronto per iniziare',
    startBtn: 'INIZIA ESTRAZIONE',
    pauseBtn: 'PAUSA',
    resumeBtn: 'RIPRENDI',
    resetBtn: 'RESET',
    newBrewBtn: 'NUOVA ESTRAZIONE',
    targetLabel: 'Acqua Target:',
    instructionStart: 'Premi il pulsante grande',
    hintStart: 'Prepara la tua V60 o Chemex',
    phase1Label: 'Fase 1: Bloom',
    phase2Label: 'Fase 2: Versaggio',
    phase3Label: 'Fase 3: Drenaggio',
    instructionBloom: 'Versa {bloomWater}g di acqua',
    hintBloom: 'Fai ruotare delicatamente per saturare',
    instructionPour: 'Raggiungi {waterTotal}g totali',
    hintPour: 'Versa con cerchi regolari',
    instructionDrain: 'Attendi il drenaggio finale',
    hintDrain: 'Quasi pronto da gustare',
    summaryTitle: 'Estrazione completata!',
    summaryMessage: 'Il tuo caffè è pronto per essere servito.',
    statTimeLabel: 'Tempo Totale',
    statWaterLabel: 'Acqua Versata',
    setupTitle: 'Impostazioni ricetta',
    labelWater: 'Acqua Totale (g)',
    labelBloomWater: 'Acqua di Bloom (g)',
    labelBloomTime: 'Tempo di Bloom (s)',
    labelTotalTime: 'Tempo Totale (s)',
  },
};
