import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'koffie-ratio-calculator';
const title = 'Koffie Brew Ratio Calculator';
const description =
  'Bereken de exacte grammen koffie of milliliters water voor je ideale ratio (1:15, 1:16...). Inclusief resultaat per kop, schenkgids, ijskoffiemodus en opgeslagen recepten.';

const faqData = [
  {
    question: 'Wat is een 1:15 koffieratio?',
    answer:
      'Dit betekent dat je voor elke gram gemalen koffie 15 milliliter (of gram) water gebruikt. Voor 20 g koffie giet je 300 ml water op. Dit is de standaardratio die door de Specialty Coffee Association wordt aanbevolen voor filtermethoden zoals V60, Chemex of Aeropress.',
  },
  {
    question: 'Waarom zit er minder koffie in mijn kopje dan ik heb opgeschonken?',
    answer:
      'Omdat gemalen koffie water vasthoudt tijdens de extractie. Gemiddeld absorbeert elke gram koffie ongeveer 2 ml vloeistof. Als je 300 ml op 20 g koffie schenkt, krijg je ongeveer 260 ml in het kopje. Deze calculator laat je het werkelijke resultaat zien.',
  },
  {
    question: 'Wat is bloom of pre-infusie?',
    answer:
      'Dit is de eerste opgieting van water, gelijk aan tweemaal het gewicht van de koffie (2 ml per gram). Dit wordt gedaan om verse koffie te ontgassen: de CO2 die tijdens het branden is opgesloten ontsnapt en zorgt ervoor dat het water de smaakstoffen gelijkmatig kan extraheren. Als er geen zichtbare bloom is, is de koffie al enige tijd geleden gemalen of gebrand.',
  },
  {
    question: 'Hoe maak ik ijskoffie zonder dat deze waterig wordt?',
    answer:
      'Gebruik de flash chilling-techniek: bereid 60% van het totale water als heet water van 90-96 graden en doe de resterende 40% als ijs in de karaf. Giet de hete koffie direct over het ijs. De snelle afkoeling sluit de aroma\'s in. Deze calculator herberekent automatisch de hoeveelheden wanneer je de Iced Coffee-modus activeert.',
  },
  {
    question: 'Wat is de beste ratio voor een Aeropress?',
    answer:
      'Tussen 1:12 en 1:15, afhankelijk van het gebruik. Als je de koffie zwart drinkt, is 1:15 gebalanceerd. Als je het gebruikt als basis voor melkdranken of een hoge concentratie wilt, ga dan naar 1:12 of 1:13. De Aeropress is de meest veelzijdige methode juist omdat deze verschillende rati\'s heel goed aankan.',
  },
  {
    question: 'Kan ik mijn favoriete recepten opslaan?',
    answer:
      'Ja. Zodra je de perfecte ratio en hoeveelheid voor je favoriete koffie hebt gevonden, druk je op de knop Recept opslaan, geef je het een naam (bijv. Ochtend V60) en wordt het in je browser opgeslagen. Je kunt het op elk moment met één klik weer oproepen.',
  },
];

const howToData = [
  {
    name: 'Kies de berekeningsmodus',
    text: 'Selecteer of je begint bij het aantal gram koffie dat je hebt of bij de capaciteit van je kopje (ml water). De calculator past alle resultaten aan de gekozen modus aan.',
  },
  {
    name: 'Voer de hoeveelheid in',
    text: 'Typ het aantal gram koffie of milliliters water dat je gaat gebruiken. De calculator berekent automatisch de andere waarde op basis van de geselecteerde ratio.',
  },
  {
    name: 'Selecteer de intensiteit',
    text: 'Kies tussen Sterk (1:12-14), Gebalanceerd (1:15-16), Licht (1:17-18) of voer je eigen ratio in. Elke optie komt overeen met een ander smaakprofiel.',
  },
  {
    name: 'Activeer de Iced Coffee-modus (optioneel)',
    text: 'Als je ijskoffie maakt, activeer dan de schakelaar. De calculator verdeelt het water automatisch in heet water (60%) and ijs (40%) met behulp van de flash chilling-techniek.',
  },
  {
    name: 'Volg de schenkgids',
    text: 'Gebruik de fasengids (Bloom en Final Pour) om je zetproces te structureren. Elke fase geeft precies aan hoeveel water je wanneer moet schenken.',
  },
  {
    name: 'Sla het recept op',
    text: 'Wanneer je de perfecte ratio hebt gevonden, sla deze dan op met een beschrijvende naam. Je recepten worden in je browser opgeslagen voor toekomstige sessies.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over de Brew Ratio',
  faq: faqData,
  bibliographyTitle: 'Technische referenties en SCA-normen',
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
      text: 'Koffieratio Calculator: De Meestergids voor Perfecte Extractie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het zetten van een kopje specialty coffee is geen subjectieve culinaire handeling; het is een experiment in <strong>vloeistofchemie</strong> en <strong>massawaverdracht</strong>. Centraal in dit proces staat het concept van de <strong>Brew Ratio</strong>, een kritische maatstaf die de kwantitatieve relatie tussen de opgeloste stof (gemalen koffie) and het oplosmiddel (water) dicteert. Onze calculator integreert de standaarden van de <em>Specialty Coffee Association (SCA)</em> en principes van toegepaste thermodynamica om barista\'s en liefhebbers in staat te stellen een perfecte reproduceerbaarheid in hun extracties te bereiken.',
    },
    {
      type: 'summary',
      title: 'Wat je leert over Koffieratio',
      items: [
        '<strong>Brew Ratio:</strong> Hoe de gewichtsverhouding tussen koffie en water (bijv. 1:15) de potentiële sterkte en het sensorische profiel van je kopje bepaalt.',
        '<strong>TDS en Extractie:</strong> De wetenschap achter opgeloste vaste stoffen en welk percentage van de boon daadwerkelijk in je drankje terecht moet komen.',
        '<strong>Retentieaanpassing:</strong> Waarom koffie 2 g water per gram poeder absorbeert en hoe je het benodigde extra water berekent.',
        '<strong>Specifieke Methoden:</strong> De ideale proporties voor V60, French Press, Espresso en flash brew ijskoffierecepten.',
      ],
    },
    {
      type: 'title',
      text: 'Wat is Brew Ratio en waarom is dit de belangrijkste variabele?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Koffie bevat ongeveer 30% oplosbaar materiaal, maar niet al dat materiaal is wenselijk voor het menselijk gehemelte. Water, fungerend als universeel oplosmiddel, extraheert verbindingen in een specifieke volgorde op basis van hun moleculaire gewicht en chemische affiniteit. De koffieratio controleert precies hoeveel oploscapaciteit we aan elke gram koffie leveren.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zure Fase (Lipiden en Organische Zuren):</strong> Deze lossen als eerste op vanwege hun hoge oplosbaarheid. Ze dragen bij aan helderheid, appel- of citroenzuur en fruitige tonen. Een ratio die te laag is (onder-extractie) stopt het proces hier, wat resulteert in een zure en zoute kop.',
        '<strong>Zoete Fase (Suikers en Koolhydraten):</strong> Deze worden als volgende geëxtraheerd. Ze zorgen voor balans, zoetheid en body. Dit is het "gouden venster" waar koffie zijn maximale aromatische complexiteit en structurele balans bereikt.',
        '<strong>Bittere Fase (Vezels en Fenolische Verbindingen):</strong> Deze lossen het langzaamst op. Bij overmatige ratio\'s (over-extractie) breekt het water de koffiecellen af, waardoor droge bitterstoffen, as en houtachtige tonen worden geëxtraheerd.',
      ],
    },
    {
      type: 'title',
      text: 'Aanbevolen ratio\'s: Proporties per extractiemethode',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elke extractiemethode vereist een specifieke ratio vanwege variabelen zoals contacttijd, pompdruk of de poriegrootte van het filter. De volgende technische tabel schetst de industriestandaarden voor 2026:',
    },
    {
      type: 'table',
      headers: ['Zetmethode', 'Ratio (Gram/Water)', 'Profiel per Kop', 'Doeltijd'],
      rows: [
        ['Espresso', '1:2 tot 1:2.5', 'Intens, stroperig, dikke crema', '25-30 sec'],
        ['V60 / Pour-Over', '1:15 tot 1:16', 'Schoon, helder, duidelijke tonen', '2:30-3:30 min'],
        ['Aeropress', '1:12 tot 1:15', 'Veelzijdig, medium-hoge body', '1:30-2:00 min'],
        ['French Press', '1:12 tot 1:14', 'Textuur, zwaar, olieachtig', '4:00-5:00 min'],
        ['Cold Brew', '1:8 tot 1:12', 'Zoet, lage zuurgraad, veel body', '12-24 uur'],
      ],
    },
    {
      type: 'title',
      text: 'Het benodigde water berekenen: De Retentie Factor van de boon',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een van de meest voorkomende fouten bij handmatig zetten is het negeren van het feit dat gemalen koffie een poreuze hydrofiele structuur is die een constante hoeveelheid water vasthoudt. Niet al het water dat je schenkt komt terecht in het kopje.',
    },
    {
      type: 'paragraph',
      html: 'Wetenschappelijk gezien houdt gemalen koffie ongeveer <strong>2,0 gram water per 1,0 gram koffie</strong> vast. Onze calculator introduceert <strong>Dynamische Retentieaanpassing</strong>: als je een specifieke 300ml container moet vullen, leidt het systeem af dat je 340ml water moet schenken om de absorptie door de korrel te compenseren, waardoor de extractieratio — en dus de smaak — intact blijft.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Koffiedosis', value: '20g', icon: 'mdi:coffee' },
        { label: 'Water geschonken', value: '300ml', icon: 'mdi:water' },
        { label: 'Retentie', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'In het kopje', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'Het belang van Bloom: Ontgassen voor uniforme extractie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De "Bloom"-fase is niet alleen esthetisch; het is een fysieke noodzaak. Tijdens het branden genereert koffie CO2 die vast komt te zitten in de cellulaire matrix. Als we al het water continu opgieten, ontsnapt het gas heftig, waardoor microkanalen (channeling) ontstaan en wordt voorkomen dat het oplosmiddel tot in het centrum van de koffiedeeltjes doordringt.',
    },
    {
      type: 'tip',
      title: 'Homogene Saturatie Techniek',
      html: '<p>Voor een perfecte bloom schenk je precies tweemaal het gewicht van de koffie aan water (1:2 bloom ratio). Roer voorzichtig of draai de karaf rond om ervoor te zorgen dat alle koffie nat is. Wacht 30-45 seconden. Het vrijkomen van gas zal ervoor zorgen dat volgende opgietingen op een laminaire manier vloeien, waardoor vaste stoffen uniform door het koffiebed worden geëxtraheerd.</p>',
    },
    {
      type: 'title',
      text: 'IJskoffie Tutorial: Hoe maak je ijskoffie zonder de smaak te verwateren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Specialty ijskoffie (Flash Brew) vereist thermodynamische herkalibratie. Het doel is om vluchtige oliën te extraheren bij 94°C om de aromatische complexiteit vast te leggen en ze vervolgens snel af te koelen om oxidatie en verlies van helderheid te voorkomen.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% Heet Water:</strong> De minimale hoeveelheid die nodig is om 18-20% extractie te bereiken zonder te veel te extraheren of het bed te vroeg af te koelen.',
        '<strong>40% Thermisch IJs:</strong> Geplaatst in de opvangkaraf. De thermische energie van de koffie gaat over op het ijs (latente smeltwarmte), waardoor de drank onmiddellijk afkoelt tot onder 5°C.',
        '<strong>Uiteindelijke Sterkte:</strong> Gecombineerd blijft de uiteindelijke ratio (bijv. 1:15) exact gelijk, wat resulteert in een levendige, koude drank met de juiste smaakconcentratie.',
      ],
    },
    {
      type: 'title',
      text: 'Maalgraad en Koffieratio: De sleutel tot het contactoppervlak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De ratio is slechts de helft van de vergelijking. De maalgraad bepaalt het <strong>Totale Blootgestelde Oppervlak</strong> aan het oplosmiddel. Kleinere deeltjes (fijne maalgraad) hebben een proportioneel groter oppervlak, wat de extractie van chemische verbindingen drastisch versnelt.',
    },
    {
      type: 'title',
      text: 'Reproduceerbaarheid en Wetenschap: Verander je keuken in een barista-laboratorium',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uitmuntendheid in specialty coffee komt voort uit metrische consistentie. Met onze functie <strong>Aangepaste Recepten</strong> kun je een technisch archief aanmaken van je succesvolle kalibraties. Het is niet alleen een map voor favorieten; het is een analyse-instrument om te vergelijken hoe dezelfde kilo koffie reageert op een ratio van 1:15 versus 1:16, waardoor je het recept nauwkeurig kunt aanpassen.',
    },
  ],
  ui: {
    modeCoffee: 'Ik heb de Koffie',
    modeHintCoffee: 'Vertel me hoeveel water',
    modeWater: 'Ik heb het Water',
    modeHintWater: 'Vertel me hoeveel koffie ik moet malen',
    inputLabelCoffee: 'Gram koffie die je hebt',
    inputLabelWater: 'Inhoud van je kopje (ml)',
    intensityLabel: 'Koffie-intensiteit',
    intensityStrong: 'Sterk',
    intensityBalanced: 'Gebalanceerd',
    intensityLight: 'Licht',
    intensityCustom: 'Aangepast',
    customCoffeeLabel: 'Koffie',
    customWaterLabel: 'Water',
    icedModeLabel: 'IJskoffie Modus',
    recipeLabel: 'Je exacte recept',
    resultTitle: 'Resultaat',
    resultCoffeeLabel: 'Koffie',
    resultCoffeeSub: 'Fijn-medium maalgraad',
    resultHotWaterLabel: 'Heet water',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'Heet water (60%)',
    resultIceLabel: 'IJs',
    resultIceSub: 'In de karaf',
    resultCupLabel: 'In je kopje',
    resultCupSub: 'Koffie houdt ~2ml/g vast',
    pouringGuideLabel: 'Schenkgids',
    favoritesLabel: 'Mijn favoriete recepten',
    saveBtn: '+ Sla dit recept op',
    favEmptyText: 'Nog geen opgeslagen recepten. Configureer je perfecte brew en sla hem op.',
    modalTitle: 'Geef je recept een naam',
    modalPlaceholder: 'Bijv.: "Ochtend V60"',
    modalCancel: 'Annuleren',
    modalConfirm: 'Opslaan',
    phaseBloomTemplate: 'Bloom: Giet {bloomMl} ml water in een spiraal. Wacht {bloomSeconds} seconden om de koffie te ontgassen.',
    phasePourTemplate: 'Final pour: Voeg de rest toe om {hotWaterMl} ml te voltooien in {pourCount} langzame opgietingen.',
    phaseIcedTemplate: 'Iced: Giet de hete koffie direct over de {iceMl} g ijs in de karaf.',
    cupWarningTemplate: 'Het kopje ontvangt slechts {inCupMl} ml. Koffie houdt vloeistof vast.',
    favModeCoffee: 'g koffie',
    favModeWater: 'ml water',
    favModeIced: ' - IJs',
  },
};
