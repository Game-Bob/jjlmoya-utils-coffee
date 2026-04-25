import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Syrligt / Surt',
    bitter: 'Bittert / Bränt',
    watery: 'Vattnigt / Svagt',
    astringent: 'Strävt / Torrt',
  },
  causes: {
    acidic: ['Malningsgrad för grov (underextraktion)', 'Vattentemperatur för låg', 'Bryggtid för kort', 'Kaffet för färskt (ej avgasat)'],
    bitter: ['Malningsgrad för fin (överextraktion)', 'Vattentemperatur för hög', 'Bryggtid för lång', 'Gammalt eller mörkrostat kaffe'],
    watery: ['Malningsgrad för grov (svag extraktion)', 'Bryggförhållande för högt (för mycket vatten)', 'Bryggtid för kort', 'Kaffet för gammalt eller av låg kvalitet'],
    astringent: ['Vattenkvalitetsproblem (för mycket mineraler)', 'Överextraktion kombinerat med mineralinnehåll', 'Malningsgrad för fin med hårt vatten', 'Bryggtemperatur för hög'],
  },
  solutions: {
    acidic: 'Vattnet rinner för snabbt genom de grova kornen utan att extrahera kropp. En finare malning ökar kontaktytan och saktar ner flödet.',
    bitter: 'Vattnet har spenderat för lång tid med att extrahera och dragit ut bittra och askiga föreningar. En grövre malning minskar kontakttiden och extraktionsintensiteten.',
    watery: 'Inte tillräckligt med upplösta ämnen i din kopp. En finare malning eller ökad kaffedos höjer extraktionsprocenten och kroppen.',
    astringent: 'Mineralrikt vatten överextraherar och binder till kaffeföreningar, vilket skapar en torr munkänsla. En grövre malning minskar överextraktionen medan filtrering förbättrar vattenkvaliteten.',
  },
  actions: {
    acidic: { text: 'Mal något finare', textSevere: 'Mal mycket finare', icon: 'mdi:chevron-left' },
    bitter: { text: 'Mal något grövre', textSevere: 'Mal mycket grövre', icon: 'mdi:chevron-right' },
    watery: { text: 'Mal finare eller använd 5g mer kaffe', textSevere: 'Mal mycket finare eller använd 7g mer kaffe', icon: 'mdi:plus-circle' },
    astringent: { text: 'Använd filtrerat vatten och mal grövre', textSevere: 'Använd filtrerat vatten och mal mycket grövre', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Som fint salt', bitter: 'Som mjöl', watery: 'Som kakaopulver', astringent: 'Något finare mjöl' },
    pourover: { acidic: 'Som bordssalt', bitter: 'Som grov sand', watery: 'Som fint majsmjöl', astringent: 'Fin sand' },
    aeropress: { acidic: 'Som fint majsmjöl', bitter: 'Som bordssalt', watery: 'Som finmalt peppar', astringent: 'Medium sand' },
    frenchpress: { acidic: 'Som ströbröd', bitter: 'Som stensalt', watery: 'Som havssalt', astringent: 'Grov sand' },
    moka: { acidic: 'Som fint havssalt', bitter: 'Som fin sand', watery: 'Som bordssalt', astringent: 'Medium-fin sand' },
    coldbrew: { acidic: 'Som grovt havssalt', bitter: 'Som grus', watery: 'Som stensalt', astringent: 'Grov sand med korn' },
  },
  secondaryAction: 'Brygg vid {temp}°C i {time}',
  tertiaryAction: 'Låt kaffet svalna till rumstemperatur innan du provsmakar för att fånga alla noter.',
};

const slug = 'diagnos-kaffeextraktion-brew-fixer';
const title = 'Diagnos av Kaffeextraktion: The Brew Fixer';
const description =
  'Diagnostisera varför ditt kaffe smakar illa på några sekunder. Få personliga justeringar för malningsgrad, temperatur och tid baserat på din bryggmetod.';

const faqData = [
  {
    question: 'Hur vet jag om mitt kaffe är underextraherat eller överextraherat?',
    answer:
      'Underextraktion (sur/skarp smak) betyder att vattnet passerat för snabbt utan att lösa upp tillräckligt med ämnen. Överextraktion (bitter/bränd smak) betyder att vattnet varit i kontakt med kaffet för länge. The Brew Fixer hjälper dig att identifiera vad som händer genom att analysera dina smaknoter och din bryggmetod.',
  },
  {
    question: 'Vad är det vanligaste bryggfelet?',
    answer:
      'Malningsgraden. De flesta maler antingen för grovt (vilket ger svagt, surt kaffe) eller för fint (vilket ger bittert, överextraherat kaffe). Att ställa in din kvarn på exakt rätt storlek för din metod är den enskilt mest effektiva justeringen du kan göra.',
  },
  {
    question: 'Spelar temperaturen verkligen så stor roll?',
    answer:
      'Ja. Vattentemperaturen styr extraktionshastigheten. För kallt och du underextraherar (surt). För varmt och du överextraherar (bittert). Varje bryggmetod har ett idealiskt intervall: V60 föredrar 92-96°C, medan presskaffe fungerar bäst vid 85-90°C för att undvika överextraktion under den långa kontakttiden.',
  },
  {
    question: 'Varför är mitt kaffe strävt eller torrt i munnen?',
    answer:
      'Strävhet (astringens) orsakas vanligtvis av mineralrikt vatten eller en kombination av överextraktion och mineraler. Prova att använda filtrerat vatten och en något grövre malning. Om det inte hjälper kan ditt vattens TDS-värde vara för högt.',
  },
  {
    question: 'Kan jag fixa en dålig kopp genom att bara justera temperatur och tid?',
    answer:
      'Temperatur och tid hjälper, men malningsgraden är oftast grundorsaken. Om din malning är för grov kommer längre bryggtid eller varmare vatten bara hjälpa marginellt. The Brew Fixer rekommenderar alltid malningsjustering som den främsta åtgärden.',
  },
  {
    question: 'Ska jag använda samma recept för alla mina kaffesorter?',
    answer:
      'Nej. Mycket färskt kaffe (1-5 dagar gammalt) extraheras snabbare och kan behöva en något grövre malning än äldre kaffe. Ljusrostade bönor är tätare och kan behöva finare malning; mörkrostade är mer porösa och föredrar grövre malning.',
  },
];

const howToData = [
  {
    name: 'Välj din bryggmetod',
    text: 'Välj den kaffebryggare du använde: pour-over, presskaffe (French press), Aeropress, mokabryggare, espressomaskin eller cold brew. Verktyget ger sedan metodspecifika rekommendationer.',
  },
  {
    name: 'Identifiera den dominerande smakdefekten',
    text: 'Smaka på ditt kaffe och välj den smak som sticker ut mest: sur, bitter (bränd), vattnig (svag) eller sträv (torr). Du kan också välja en sekundär smak.',
  },
  {
    name: 'Ange intensitet',
    text: 'Flytta reglaget för att ange hur stark smakdefekten är. "Lätt" betyder att du knappt märker den; "kraftig" betyder att den dominerar hela koppen. Detta hjälper verktyget att kalibrera justeringen.',
  },
  {
    name: 'Kör diagnosen',
    text: 'Klicka på knappen "Diagnostisera" så analyserar verktyget din information och ger en primär åtgärd (oftast malningsgrad), sekundära åtgärder och en textur-referens.',
  },
  {
    name: 'Justera och testa',
    text: 'Gör den rekommenderade ändringen (t.ex. mal grövre, brygg längre). Brygg en ny kopp och smaka. Små justeringar ger stora resultat.',
  },
  {
    name: 'Ge feedback',
    text: 'När du har bryggt nästa kopp, berätta för verktyget om det blev bättre. Om ja, ser du en konfettianimation! Om inte, gå tillbaka och prova andra parametrar.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om kaffeextraktion',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser och kaffevetenskap',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Varför smakar ditt kaffe illa? Guide för extraktionsdiagnos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Skillnaden mellan en exceptionell espresso och en kopp som smakar bränt papper beror på ett enda koncept: <strong>kaffeextraktion</strong>. Extraktion är processen där vatten löser upp lösliga ämnen från det malda kaffet. Gör rätt och du låser upp komplexitet, sötma och klarhet. Gör fel och du får surhet, bitterhet eller svaghet.',
    },
    {
      type: 'summary',
      title: 'Vad du lär dig av The Brew Fixer',
      items: [
        '<strong>Hur du diagnostiserar extraktionsfel:</strong> Identifiera om ditt kaffe är underextraherat, överextraherat, svagt eller har vattenkvalitetsproblem.',
        '<strong>De tre variablerna som styr extraktionen:</strong> Malningsgrad, vattentemperatur och kontakttid. Vilken ska du justera först? Brew Fixer berättar det för dig.',
        '<strong>Metodspecifika rekommendationer:</strong> Den ideala malningen för en V60 är helt annorlunda än för en presskanna. Få personliga råd.',
        '<strong>Referensmaterial för textur:</strong> Vet exakt vilken malningsgrad du ska sikta på genom att jämföra med bekanta material (fint pulver, havssalt, sand).',
      ],
    },
    {
      type: 'title',
      text: 'Kaffeextraktionens tre dimensioner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Extraktionsprocenten är massan av upplösta ämnen dividerat med massan av det torra kaffet. Specialkaffe siktar på <strong>18-20% extraktion</strong>. Allt under smakar surt; allt över smakar bittert.',
    },
    {
      type: 'list',
      items: [
        '<strong>Malningsgraden</strong> styr ytan. Finare malning extraheras snabbare eftersom vattnet har mer yta att lösa upp ämnen ifrån. Grövre malning extraheras långsammare.',
        '<strong>Vattentemperaturen</strong> styr upplösningshastigheten. Varmt vatten (94-96°C) extraherar snabbare; svalare vatten (85-90°C) extraherar långsammare.',
        '<strong>Kontakttiden</strong> är hur länge vattnet är i kontakt med kaffet. Pour-over (2:30-3:30 min), presskaffe (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Hur man diagnostiserar surt kaffe (underextraktion)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Surt kaffe smakar som citron eller äpple – skarpt och stickigt. Det betyder att vattnet inte hunnit lösa upp tillräckligt med ämnen. Den enklaste lösningen är nästan alltid att <strong>mala finare</strong> för att öka ytan och sakta ner vattnet.',
    },
    {
      type: 'list',
      items: [
        'Mal kaffet finare (minska malningsgraden med 5-10 µm)',
        'Eller förläng bryggtiden något (lägg till 15-30 sekunder)',
        'Eller höj vattentemperaturen till 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Hur man diagnostiserar bittert kaffe (överextraktion)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bittert kaffe smakar bränt, askigt eller träigt. Det betyder att vattnet extraherat för mycket – förbi de önskvärda ämnena. Lösningen är att <strong>mala grövre</strong> för att öka vattenflödet och minska kontakttiden.',
    },
    {
      type: 'list',
      items: [
        'Mal kaffet grövre (öka malningsgraden med 5-10 µm)',
        'Eller förkorta bryggtiden (dra ifrån 15-30 sekunder)',
        'Eller sänk vattentemperaturen till 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Hur man diagnostiserar vattnigt kaffe (svagt, tunt)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Svagt kaffe saknar smak och kropp. Det betyder oftast att din malning är för grov, din ratio är för hög (för mycket vatten), eller att kaffet är gammalt. Att justera kvarnen är den snabbaste lösningen.',
    },
    {
      type: 'list',
      items: [
        'Använd en finare malning för mer extraktionsyta',
        'Använd mer kaffe (öka ration)',
        'Brygg något längre eller vid högre temperatur',
      ],
    },
    {
      type: 'title',
      text: 'Hur man diagnostiserar strävt kaffe (torrt, mineralsmak)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Strävhet känns uttorkande i munnen – som att tugga på ett druvskal. Det orsakas oftast av hårt vatten i kombination med överextraktion. Detta kräver både malningsjustering <em>och</em> bättre vattenkvalitet.',
    },
    {
      type: 'list',
      items: [
        'Använd filtrerat vatten (sikta på TDS 60-150 ppm)',
        'Mal grövre för att minska överextraktion',
        'Prova något svalare vatten (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Malningsgradstabell: Utseende och känsla',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Malningsnamn', 'Partikelstorlek', 'Referens för textur', 'Bästa metoder'],
      rows: [
        ['Extrafin', '5-15 µm', 'Fint puder, kakao', 'Espresso, Turkiskt'],
        ['Fin', '15-30 µm', 'Florsocker', 'Mokabryggare, Aeropress'],
        ['Mediumfin', '30-50 µm', 'Sand, bordssalt', 'V60, Chemex, Pour-over'],
        ['Medium', '50-70 µm', 'Strandsand', 'Bryggkaffe, platta filter'],
        ['Grov', '70-90 µm', 'Grovt havssalt', 'Presskaffe, Koppning'],
        ['Extragrov', '90+ µm', 'Pepparkorn, ströbröd', 'Cold brew, Perkolator'],
      ],
    },
    {
      type: 'title',
      text: 'Vattenkvalitet: TDS och dess effekt på extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Total Dissolved Solids (TDS) är måttet på mineralinnehåll i vatten. Kranvatten varierar stort: mjukt vatten (50 ppm) eller hårt vatten (300+ ppm). Kaffeextraktion är mycket känsligt för vattenkvalitet.',
    },
    {
      type: 'list',
      items: [
        '<strong>För mjukt (0-50 ppm):</strong> Vattnet extraherar för aggressivt, kaffet smakar salt och tunt.',
        '<strong>Idealiskt (60-150 ppm):</strong> Söt, balanserad extraktion med fyllig kropp.',
        '<strong>För hårt (200+ ppm):</strong> Mineraler binder smakämnen, vilket skapar strävhet.',
      ],
    },
    {
      type: 'tip',
      title: 'Snabbfix för vatten',
      html: '<p>Om du misstänker hårt vatten, prova att brygga med filtrerat eller flaskvatten för jämförelse. Om kaffet genast smakar bättre har du hittat boven. Investera i en enkel filterkanna (Brita) eller ett fast filter.</p>',
    },
  ],
  ui: {
    methodLabel: 'Vad brygger du?',
    methodPourover: 'Pour Over / Filter',
    methodFrenchpress: 'Presskaffe',
    methodAeropress: 'Aeropress',
    methodMoka: 'Mokabryggare',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Välj din bryggare',
    flavorLabel: 'Hur smakar det?',
    flavorAcidic: 'Surt',
    flavorBitter: 'Bittert',
    flavorWatery: 'Vattnigt / Svagt',
    flavorAstringent: 'Strävt / Torrt',
    flavorHint: 'Välj upp till 2 smaker',
    severityLabel: 'Hur starkt är problemet?',
    severitySlightLabel: 'Knappt märkbart',
    severityModerateLabel: 'Måttligt',
    severitySevereLabel: 'Dominerande',
    diagnoseBtn: 'Diagnostisera mitt kaffe',
    resetBtn: 'Återställ',
    resultTitle: 'Diagnos klar',
    resultExplanation: 'Vad som händer i din kopp',
    actionMainLabel: 'Primär åtgärd',
    actionSecondaryLabel: 'Temperatur & Tid',
    actionTertiaryLabel: 'Proffstips',
    textureReferenceLabel: 'Referens för textur',
    improvementHint: 'Gör justeringen och brygg en ny kopp.',
    copyDiagnosisBtn: 'Kopiera diagnos',
    feedbackLabel: 'Blev ditt kaffe bättre?',
    feedbackSuccessTemplate: 'Strålande! Justeringen fungerade.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Presskanna, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Mokabryggare, Percolator',
    methodEspressoDesc: 'Espressomaskin',
    methodColdbrewDesc: 'Immersion, kallt',
    fadeOutMessage: 'Bra jobbat! Fortsätt att finjustera.',
    backBtn: 'Tillbaka',
    mainIssueLabel: 'Huvudproblem',
    improvedBtn: 'Förbättrad',
    notYetBtn: 'Inte än',
    copiedBtn: 'Kopierat!',
    combinedLabel: 'Kombinerad',
    diagnosisTitle: 'The Brew Fixer Diagnos',
    issueLabel: 'Problem',
    causeLabel: 'Orsak',
    actionLabel: 'Åtgärd',
    whyLabel: 'Varför',
    nextLabel: 'Nästa',
  },
};
