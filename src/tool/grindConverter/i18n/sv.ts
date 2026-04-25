import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kaffemalnings-konverterare';
const title = 'Konverterare för malningsgrad av kaffe';
const description =
  'Interaktiv malningsgradsstabell med klicks och nivåer för att justera din kvarn för Espresso, V60, franskpress och mer. Teknisk mikron-kartläggning för alla bryggmetoder.';

const faqData = [
  {
    question: 'Varför fungerar inte samma malningsgrad för alla kaffesorter?',
    answer:
      'Bönornas densitet varierar beroende på rostningsgrad och ursprung. Ett ljusrostat kaffe är vanligtvis tätare och kräver en finare malning för korrekt extraktion, medan ett mörkrostat kaffe är mer poröst och behöver en grövre inställning.',
  },
  {
    question: 'Hur vet jag om jag ska mala finare eller grövre?',
    answer:
      'Låt smaken vägleda dig: om kaffet smakar bittert och torrt, mal grövre så att vattnet rinner igenom snabbare. Om det smakar surt, salt eller vattnigt, mal finare för att öka kontaktytan.',
  },
  {
    question: 'Vad är "channeling" och hur påverkar malningsgraden det?',
    answer:
      'Channeling uppstår när vattnet hittar en väg med minsta motstånd genom kaffebädden. En ojämn malning eller en malningsgrad som inte passar trycket — särskilt vid espresso — främjar detta problem och förstör extraktionen.',
  },
  {
    question: 'Kan jag använda den här tabellen med en knivkvarn?',
    answer:
      'Knivkvarnar producerar ojämna partiklar — både fint pulver och stora bitar samtidigt. Mikron-värdena är indikativa, men de faktiska resultaten kommer att variera avsevärt jämfört med en kvarn med malstenar.',
  },
  {
    question: 'Vad betyder kvarnens enhetlighet i visualiseringen?',
    answer:
      'Partikeldistributionen som visas simulerar den faktiska enhetligheten för varje kvarn. En Comandante C40 med 0,95 i enhetlighet producerar mycket jämna partiklar; en Hario Skerton med 0,40 visar mycket större storleksvariation.',
  },
];

const howToData = [
  {
    name: 'Välj din kvarn',
    text: 'Välj din modell från listan. Konverteraren visar rekommenderade klicks eller nivåer specifikt för din utrustning.',
  },
  {
    name: 'Välj din bryggmetod',
    text: 'Klicka på ikonen för den metod du tänker använda. Kontrollpanelen uppdateras med alla relevanta tekniska parametrar.',
  },
  {
    name: 'Tolka mikron-indikatorn',
    text: 'Använd mikron-värdet i stapeldiagrammet för att förstå den faktiska partikelstorleken. Den taktila referensen (fint salt, strösocker...) hjälper dig att kalibrera visuellt.',
  },
  {
    name: 'Observera partikelsimuleringen',
    text: 'Punktfördelningen visar din kvarns typiska enhetlighet. Ett mer homogent mönster innebär en mer förutsägbar och repeterbar extraktion.',
  },
  {
    name: 'Justera efter smak',
    text: 'Använd diagnosguiden längst ner som referens. Om kaffet smakar bittert, gå ett par klicks grövre. Om det smakar surt, gå finare. Justera alltid ett steg i taget.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om malningsgrad för kaffe',
  faq: faqData,
  bibliographyTitle: 'Referenser om malning och extraktion',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Malningsgradens fysik: Varför partikelstorlek förändrar allt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När du maler kaffe minskar du inte bara bönans storlek. Du definierar den <strong>kontaktyta</strong> som är tillgänglig för vattnet att lösa upp aromämnen. För fint, och vattnet överextraherar bittra ämnen. För grovt, och vattnet rinner igenom utan tillräckligt motstånd, vilket ger en svag och sur kopp. Malningskonverteraren ger dig det exakta intervallet för varje metod.',
    },
    {
      type: 'summary',
      title: 'Vad avgör rätt malningsgrad?',
      items: [
        '<strong>Extraktionsmetod:</strong> Tryck, kontakttid och filtertyp dikterar det optimala mikron-intervallet för varje bryggmetod.',
        '<strong>Kvarnens enhetlighet:</strong> En högkvalitativ kvarn med malstenar producerar homogena partiklar; en knivkvarn genererar fint pulver och stora bitar samtidigt.',
        '<strong>Bönornas färskhet:</strong> Nyrostat kaffe innehåller mer CO2 och kan behöva en något grövre malning än samma kaffe som vilat några veckor.',
        '<strong>Smakkalibrering:</strong> Gommen är det slutgiltiga instrumentet. Tabellen är din startpunkt; smaken är ditt mål.',
      ],
    },
    {
      type: 'table',
      headers: ['Metod', 'Mikron', 'Taktil referens', 'Kontakttid'],
      rows: [
        ['Ibrik (Turkiskt)', '100-300 μm', 'Talk / Fint mjöl', '3-5 min kokning'],
        ['Espresso', '300-500 μm', 'Fint salt', '25-30 sek'],
        ['Moka / AeroPress', '500-700 μm', 'Bordssalt', '3-4 min'],
        ['V60 / Filter', '700-900 μm', 'Strösocker', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200 μm', 'Grov sand', '3:30-4:30 min'],
        ['French Press', '1200-1500 μm', 'Grovt salt', '4 min immersion'],
        ['Cold Brew', '1500+ μm', 'Pepparkorn', '12-24 h kallt'],
      ],
    },
    {
      type: 'title',
      text: 'Gyllene regel för nya kaffesorter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>När du öppnar ett nytt kaffe, börja alltid i mitten av det rekommenderade intervallet för din metod. Därifrån justerar du efter smak ett klick i taget. För anteckningar om varje justering för att bygga upp en referenslogg för dina favoritkaffen med varje kvarn.</p>',
    },
  ],
  ui: {
    step1Label: 'Steg 1: Val av utrustning',
    step2Label: 'Steg 2: Extraktionsmetod',
    gaugeLabel: 'Teknisk partikelkarta (μm)',
    distributionLabel: 'Faktisk partikelfördelning',
    refLabel: 'Referens',
    rangeMicrasLabel: 'Intervall μm',
    unitMicras: 'MÅL-MIKRON (μm)',
    unitClicks: 'REKOMMENDERADE KLICKS',
    unitLevel: 'REKOMMENDERAD NIVÅ',
    suggestGrinderText: "Hittar du inte din kvarn? Föreslå den",
    method0Name: 'Ibrik (Turkiskt)',
    method0Ref: 'Talk / Fint mjöl',
    method0Desc: 'Extra fint pulver, nästan som mjöl. Essentiellt för turkiskt kaffe.',
    method1Name: 'Espresso',
    method1Ref: 'Fint salt',
    method1Desc: 'Högtrycksextraktion kräver mycket fin malning för att skapa motstånd.',
    method2Name: 'Moka / AeroPress',
    method2Ref: 'Bordssalt',
    method2Desc: 'Medelhögt tryck eller hybridimmersion. Mångsidig och balanserad textur.',
    method3Name: 'V60 / Filter',
    method3Ref: 'Strösocker',
    method3Desc: 'Manuella pour-over-metoder, standarden för att framhäva sötma och syra.',
    method4Name: 'Chemex / Clever',
    method4Ref: 'Grov sand',
    method4Desc: 'Tjocka filter eller kort immersion. Kräver ett konstant och stadigt flöde.',
    method5Name: 'French Press',
    method5Ref: 'Grovt salt',
    method5Desc: 'Utökad immersion behöver stora partiklar för att filtreras genom metallnätet.',
    method6Name: 'Cold Brew',
    method6Ref: 'Pepparkorn',
    method6Desc: 'Kallextraktion under många timmar kräver den grövsta malningen som är möjlig.',
    troubleIssue0: 'Smakar det bittert, torrt eller kärvt?',
    troubleSolution0:
      'Du överextraherar. Mal grövre så att vattnet rinner snabbare och extraherar färre bittra ämnen.',
    troubleAction0: 'Mal grövre',
    troubleIssue1: 'Smakar det surt, salt eller vattnigt?',
    troubleSolution1:
      'Du underextraherar. Mal finare för att öka kontaktytan och extrahera mer socker och fyllighet.',
    troubleAction1: 'Mal finare',
  },
};
