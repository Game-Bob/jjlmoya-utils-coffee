import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

const slug = 'sca-kaffevatten-kalkylator';
const title = 'SCA Kaffevatten Kalkylator';
const description =
  'Beräkna exakta mineralkoncentrationer för specialkaffe. SCA-, Barista Hustle- och Hendon-profiler. Kontrollera magnesium, kalcium och bikarbonat för att maximera smak och skydda din maskin.';

const faqData = [
  {
    question: 'Vad är SCA-vattenkvalitetsstandard?',
    answer:
      'Specialty Coffee Association definierar en teknisk standard för bryggvatten som specificerar optimala intervall för total hårdhet (GH), alkalinitet (KH), pH och natrium för att uppnå en balanserad extraktion som förhöjer smaken utan att skada utrustningen.',
  },
  {
    question: 'Varför inte bara använda kranvatten?',
    answer:
      'Kranvatten varierar avsevärt beroende på plats och säsong. Det kan innehålla klor, överskott av kalk eller mineralnivåer som döljer specialkaffets smaker och skadar kokare och tätningar. Genom att mineralisera destillerat vatten får du full kontroll och repeterbara resultat.',
  },
  {
    question: 'Var får jag tag på mineralsalterna?',
    answer:
      'Epsomsalt (magnesiumsulfat) och natriumbikarbonat finns på apotek och i livsmedelsbutiker. Kalciumklorid är vanligt i butiker för hembryggning. Se alltid till att de är av livsmedelskvalitet.',
  },
  {
    question: 'Är det säkert för min espressomaskin?',
    answer:
      'Kalkylatorn innehåller en riskindikator i realtid. Mycket rent vatten korroderar metallkomponenter; mycket hårt vatten orsakar kalkavlagringar. SCA Ideal- och Barista Hustle-profilerna är utformade för att balansera utrustningens livslängd med smakkvalitet.',
  },
  {
    question: 'Vad är skillnaden mellan magnesium och kalcium i kaffe?',
    answer:
      'Magnesium extraherar fruktiga och söta smakämnen mer effektivt och är den föredragna mineralen för filtermetoder. Kalcium ger mer fyllighet och silkeslen textur men har en större tendens att bilda kalkavlagringar i kokare över tid.',
  },
];

const howToData = [
  {
    name: 'Skaffa rent basvatten',
    text: 'Köp destillerat eller demineraliserat vatten, eller använd ett system för omvänd osmos. Målet är att börja vid 0 ppm totalt lösta fasta ämnen för fullständig kontroll över mineraliseringen.',
  },
  {
    name: 'Förbered dina koncentratflaskor',
    text: 'Lös upp varje salt separat i 100 ml destillerat vatten: 2,46 g Epsomsalt för magnesium, 1,47 g CaCl2 för kalcium och 1,68 g bikarbonat fon bufferten.',
  },
  {
    name: 'Välj din målprofil',
    text: 'Välj SCA Ideal (balanserad), Barista Hustle (sötma och klarhet), Hendon (fyllighet), Melbourne (delikat) eller skapa en anpassad profil med dina egna GH- och KH-värden.',
  },
  {
    name: 'Ange slutvolym',
    text: 'Skriv mängden vatten du vill mineralisera i liter. Kalkylatorn justerar automatiskt koncentratdoserna för den exakta volymen.',
  },
  {
    name: 'Tillsätt koncentrat och fyll upp med destillerat vatten',
    text: 'Använd en precisionsspruta för att tillsätta de angivna millilitrarna av varje koncentrat i din behållare och fyll upp till den totala volymen med destillerat vatten.',
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om SCA Kaffevatten Kalkylator',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser och SCA-standarder',
  bibliography: [
    {
      name: 'SCA vattenkvalitetsstandard',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY Water Recipes Redux',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: 'The Science of Coffee Water (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: Vattenkemi och kaffe',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kaffevattenkemi: Varför H₂O är den mest förbisedda ingrediensen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kaffe består till 98–99 % av vatten. Ändå är mineraler i vattnet den mest förbisedda kvalitetsfaktorn i hela specialkaffekedjan. Samma etiopiska single-origin-kaffe extraherat med kranvatten från London jämfört med SCA-optimerat vatten kan smaka som två helt olika kaffesorter. Vår <strong>SCA kaffevattenkalkylator</strong> låter dig formulera perfekt bryggvatten från grunden med vanliga mineralsalter och destillerat vatten.',
    },
    {
      type: 'summary',
      title: 'Varför spelar vattenmineralisering så stor roll?',
      items: [
        '<strong>GH (General Hardness):</strong> Summan av magnesium- och kalciumjoner avgör vattnets förmåga att lösa upp kaffets smakämnen.',
        '<strong>KH (Carbonate Hardness):</strong> Bikarbonatkoncentrationen kontrollerar pH under extraktionen. Lågt KH ger surt kaffe; högt KH gör det platt.',
        '<strong>Repeterbarhet:</strong> Kommunalt vatten förändras beroende på säsong och plats. Mineraliserat vatten är konstant och reproducerbart batch efter batch.',
        '<strong>Skydd av utrustning:</strong> Rätt mineralnivåer förhindrar både korrosion (för rent vatten) och kalkavlagringar (för hårt vatten).',
      ],
    },
    {
      type: 'title',
      text: 'SCA-standarden: Tekniska gränser för perfekt bryggvatten',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Minimum', 'SCA Ideal', 'Maximum'],
      rows: [
        ['Total hårdhet (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alkalinitet (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnesium vs Kalcium: Mineralkampen som definierar din kopp',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alla mineraler beter sig inte på samma sätt med kaffe. Forskaren Christopher Hendon visade att <strong>magnesium</strong> bildar ligander med komplexa flyktiga smakmolekyler, vilket extraherar fruktiga och blommiga toner mer effektivt. <strong>Kalcium</strong> extraherar tyngre föreningar, vilket ger fyllighet och silkeslen munkänsla men med mindre aromatisk klarhet.',
    },
    {
      type: 'tip',
      title: 'Professionell baristas tumregel',
      html: '<p>För espressomaskiner med kokare av mässing eller koppar, använd aldrig profiler med KH under 40 mg/L kontinuerligt. Mycket rent vatten är korrosivt på lång sikt. För filtermetoder (V60, Chemex, AeroPress) finns det ingen kokare att skydda, så du kan säkert använda delikata profiler som Melbourne utan oro.</p>',
    },
  ],
  ui: {
    sectionMixTitle: 'Blandningskonfiguration',
    labelVolume: 'Slutvolym',
    labelProfile: 'Målvattenprofil',
    customProfileBtn: 'Anpassad',
    labelGH: 'Mål-GH',
    labelKH: 'Mål-KH',
    concentratesTitle: 'Koncentratflaskor (g/100ml)',
    saltMgName: 'Magnesium (Epsom)',
    saltCaName: 'Kalcium (CaCl2)',
    saltBufName: 'Bikarbonat (Natrium)',
    recipeTitle: 'Recept',
    labelMg: 'Magnesium:',
    labelCa: 'Kalcium:',
    labelBuffer: 'Bikarbonat:',
    labelDistilledWater: 'Destillerat vatten upp till',
    copyBtn: 'Kopiera recept',
    copiedText: 'Kopierat!',
    safetyMetalsTitle: 'Metallsäkerhet',
    safetyScaleTitle: 'Kalkrisk',
    calculatingText: 'Beräknar...',
    glossaryTitle: 'Snabb mineralguide',
    profileSubTemplate: 'Mål: {gh} GH / {kh} KH',
    customProfileName: 'Anpassad',
    corrosionHigh: 'Fara: Mycket aggressivt vatten. Kan korrodera kokare och kopparkomponenter.',
    corrosionMedium: 'Acceptabelt: Måttlig korrosionsrisk. Rekommenderas för filtermetoder, var försiktig med maskiner.',
    corrosionLow: 'Säkert: Vattnet har tillräcklig buffertkapacitet för att skydda metaller.',
    scaleHigh: 'Fara: Omedelbar kalkbildning. Använd endast med manuella filtermetoder.',
    scaleMedium: 'Varning: Kan generera kalkavlagringar över tid i espressomaskiner.',
    scaleLow: 'Säkert: Ingen betydande risk för kalkavlagringar.',
    copyTemplate:
      'Recept för kaffevatten ({profileName}):\n- Volym: {liters}L\n- Magnesiumkoncentrat: {mg}ml\n- Kalciumkoncentrat: {ca}ml\n- Bikarbonatkoncentrat: {buf}ml\n- Destillerat vatten: {water}ml',
    glossary0Term: 'Total hårdhet (GH)',
    glossary0Desc:
      'Summan av kalcium och magnesium. Magnesium förstärker sötma och komplexitet; kalcium ger fyllighet och textur.',
    glossary1Term: 'Alkalinitet (KH)',
    glossary1Desc:
      'Vattnets förmåga att neutralisera syror. Högt KH dämpar kaffets syra; lågt KH får det att smaka surt.',
    glossary2Term: 'TDS (Total Dissolved Solids)',
    glossary2Desc: 'I mineraliserat vatten representerar TDS den kombinerade koncentrationen av alla tillsatta mineralsalter.',
    glossary3Term: 'Magnesium',
    glossary3Desc:
      'Extraherar komplexa fruktiga smakämnen mer effektivt. Den föredragna mineralen för specialkaffebryggning.',
  },
};
