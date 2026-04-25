import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Zuur / Wrang',
    bitter: 'Bitter / Verbrand',
    watery: 'Waterig / Slap',
    astringent: 'Astringent / Droog',
  },
  causes: {
    acidic: ['Maalgraad te grof (onderextractie)', 'Watertemperatuur te laag', 'Zetduur te kort', 'Koffie te vers (niet ontgast)'],
    bitter: ['Maalgraad te fijn (overextractie)', 'Watertemperatuur te hoog', 'Zetduur te lang', 'Oude of donker gebrande koffie'],
    watery: ['Maalgraad te grof (zwakke extractie)', 'Zetverhouding te hoog (te veel water)', 'Zetduur te kort', 'Koffie te oud of van lage kwaliteit'],
    astringent: ['Problemen met waterkwaliteit (te veel mineralen)', 'Overextractie gecombineerd met mineraalgehalte', 'Maalgraad te fijn met hard water', 'Zettemperatuur te hoog'],
  },
  solutions: {
    acidic: 'Het water stroomt te snel door de grove korrels zonder body te extraheren. Een fijnere maalgraad vergroot het contactoppervlak en vertraagt de stroom.',
    bitter: 'Het water heeft te lang geëxtraheerd, waardoor bittere en asachtige verbindingen vrijkwamen. Een grovere maalgraad verkort de contacttijd en extractie-intensiteit.',
    watery: 'Niet genoeg opgeloste deeltjes in je kopje. Een fijnere maalgraad of een hogere koffiedosis verhoogt het extractiepercentage en de body.',
    astringent: 'Mineraalrijk water extraheert te veel en bindt zich aan koffieverbindingen, wat een droog mondgevoel geeft. Een grovere maalgraad vermindert overextractie, terwijl filtering de waterkwaliteit verbetert.',
  },
  actions: {
    acidic: { text: 'Iets fijner malen', textSevere: 'Veel fijner malen', icon: 'mdi:chevron-left' },
    bitter: { text: 'Iets grover malen', textSevere: 'Veel grover malen', icon: 'mdi:chevron-right' },
    watery: { text: 'Fijner malen of 5g meer koffie gebruiken', textSevere: 'Veel fijner malen of 7g meer koffie gebruiken', icon: 'mdi:plus-circle' },
    astringent: { text: 'Gefilterd water gebruiken and grover malen', textSevere: 'Gefilterd water gebruiken en veel grover malen', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Als fijn zout', bitter: 'Als bloem', watery: 'Als cacaopoeder', astringent: 'Iets fijnere bloem' },
    pourover: { acidic: 'Als tafelzout', bitter: 'Als grof zand', watery: 'Als fijn maïsmeel', astringent: 'Fijn zand' },
    aeropress: { acidic: 'Als fijn maïsmeel', bitter: 'Als tafelzout', watery: 'Als fijn gemalen peper', astringent: 'Gemiddeld zand' },
    frenchpress: { acidic: 'Als paneermeel', bitter: 'Als steenzout', watery: 'Als zeezout', astringent: 'Grof zand' },
    moka: { acidic: 'Als fijn zeezout', bitter: 'Als fijn zand', watery: 'Als tafelzout', astringent: 'Middel-fijn zand' },
    coldbrew: { acidic: 'Als grof zeezout', bitter: 'Als grind', watery: 'Als steenzout', astringent: 'Grof zand met korrels' },
  },
  secondaryAction: 'Zetten op {temp}°C gedurende {time}',
  tertiaryAction: 'Laat de koffie afkoelen tot kamertemperatuur voordat je proeft om alle nuances te ontdekken.',
};

const slug = 'koffie-extractie-diagnose-brew-fixer';
const title = 'Koffie Extractie Diagnose: De Brew Fixer';
const description =
  'Diagnostiseer in seconden waarom je koffie slecht smaakt. Ontvang gepersonaliseerd advies voor maalgraad, temperatuur en tijd op basis van je zetmethode.';

const faqData = [
  {
    question: 'Hoe weet ik of mijn koffie ondergeëxtraheerd of overgeëxtraheerd is?',
    answer:
      'Onderextractie (zure smaak) betekent dat het water te snel door de koffie is gelopen zonder genoeg smaken op te lossen. Overextractie (bittere/verbrande smaak) betekent dat het water te lang in contact is geweest met de koffie. De Brew Fixer helpt je dit te identificeren door je smaaknotities en zetmethode te analyseren.',
  },
  {
    question: 'Wat is de meest gemaakte fout bij het koffiezetten?',
    answer:
      'De maalgraad. De meeste mensen malen hun koffie of te grof (wat resulteert in slappe, zure koffie) of te fijn (bittere, overgeëxtraheerde koffie). Het afstemmen van je molen op de exacte grootte voor je zetmethode is de meest impactvolle aanpassing die je kunt doen.',
  },
  {
    question: 'Maakt de temperatuur echt zoveel uit?',
    answer:
      'Ja. De watertemperatuur regelt de extractiesnelheid. Te koud en je krijgt onderextractie (zuur). Te heet en je krijgt overextractie (bitter). Elke zetmethode heeft een ideaal bereik: pour-overs zoals de V60 houden van 92-96°C, terwijl de French press beter presteert op 85-90°C om overextractie tijdens de lange infusie te voorkomen.',
  },
  {
    question: 'Waarom is mijn koffie wrang of droog in mijn mond?',
    answer:
      'Wrangheid wordt meestal veroorzaakt door mineraalrijk water of een combinatie van overextractie en mineralen. Probeer gefilterd water te gebruiken en een iets grovere maalgraad. Als dat niet helpt, is de TDS-waarde van je water mogelijk te hoog.',
  },
  {
    question: 'Kan ik een slecht kopje koffie redden door alleen temperatuur en tijd aan te passen?',
    answer:
      'Temperatuur en tijd helpen, maar de maalgraad is meestal de oorzaak. Als je maling te grof is, zal langer of heter zetten slechts minimaal helpen. De Brew Fixer zal altijd maalgraad aanbevelen als de primaire actie vanwege de grote impact op de extractie.',
  },
  {
    question: 'Moet ik hetzelfde recept gebruiken voor al mijn koffiesoorten?',
    answer:
      'Nee. Vers gebrande koffie (1-5 dagen oud) extraheert sneller en heeft mogelijk een grovere maling nodig dan oudere koffie. Lichte brandingen zijn dichter en hebben vaak fijnere malingen nodig; donkere brandingen zijn poreuzer en geven de voorkeur aan grovere malingen.',
  },
];

const howToData = [
  {
    name: 'Selecteer je zetmethode',
    text: 'Kies de koffiezetter die je hebt gebruikt: pour-over, French press, Aeropress, Moka pot, espressomachine of cold brew. De tool geeft je dan specifiek advies.',
  },
  {
    name: 'Identificeer het dominante smaakdefect',
    text: 'Proef je koffie en selecteer de smaak die het meest opvalt: zuur, bitter (verbrand), waterig (slap) of wrang (droog). Je kunt ook een secundaire smaak kiezen.',
  },
  {
    name: 'Geef de ernst aan',
    text: 'Gebruik de schuifregelaar om aan te geven hoe sterk de afwijkende smaak is. "Licht" betekent dat je het nauwelijks merkt; "ernstig" betekent dat het de hele beker overheerst. Dit helpt de tool bij het kalibreren.',
  },
  {
    name: 'Start de diagnose',
    text: 'Klik op de knop "Diagnose stellen" en de tool analyseert je gegevens om je een primaire actie (maalgraad), secundaire acties en een textuur-referentie te geven.',
  },
  {
    name: 'Aanpassen en testen',
    text: 'Voer de aanbevolen wijziging door (bijv. grover malen, langer zetten). Zet een nieuw kopje en proef. Kleine aanpassingen maken het verschil.',
  },
  {
    name: 'Geef feedback',
    text: 'Zodra je de volgende beker hebt geproefd, vertel je de tool of het verbeterd is. Zo ja, dan zie je een confetti-animatie! Zo niet, ga dan terug en probeer andere parameters.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen over Koffie Extractie',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties en Koffiewetenschap',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Extractie Richtlijnen',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao: The Coffee Roaster\'s Companion',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle: Espresso Extractie Gids',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind: Koffie Extractie Begrijpen',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger: Smaaknotities in Koffie Verwoorden',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Waarom smaakt je koffie slecht? De Extractie Diagnose Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het verschil tussen een uitzonderlijke espresso en een kopje dat smaakt naar verbrand papier komt neer op één concept: <strong>koffie-extractie</strong>. Extractie is het proces waarbij water oplosbare verbindingen uit gemalen koffie haalt. Doe het goed en je krijgt complexiteit, zoetheid en helderheid. Doe het fout en je krijgt zuurheid, bitterheid of slapheid.',
    },
    {
      type: 'summary',
      title: 'Wat je leert van de Brew Fixer',
      items: [
        '<strong>Extractie-defecten diagnostiseren:</strong> Identificeer of je koffie ondergeëxtraheerd, overgeëxtraheerd of slap is, of dat de waterkwaliteit een probleem is.',
        '<strong>De drie knoppen die extractie regelen:</strong> Maalgraad, watertemperatuur en contacttijd. Welke moet je eerst aanpassen? De Brew Fixer vertelt het je.',
        '<strong>Methode-specifiek advies:</strong> De ideale maling voor een V60 is heel anders dan voor een French press. Ontvang persoonlijk advies voor jouw zetmethode.',
        '<strong>Textuur-referenties:</strong> Weet precies welke maalgraad je moet nastreven door te vergelijken met bekende materialen (fijn poeder, zeezout, zand).',
      ],
    },
    {
      type: 'title',
      text: 'De Drie Dimensies van Koffie-Extractie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het extractiepercentage is de massa opgeloste stoffen gedeeld door de massa van de droge koffie. Specialty coffee streeft naar <strong>18-20% extractie</strong>. Alles daaronder smaakt zuur; alles daarboven smaakt bitter.',
    },
    {
      type: 'list',
      items: [
        '<strong>Maalgraad</strong> regelt het oppervlak. Fijnere malingen extraheren sneller omdat het water meer oppervlak heeft om smaken op te lossen. Grovere malingen extraheren langzamer.',
        '<strong>Watertemperatuur</strong> regelt de oplossnelheid. Heet water (94-96°C) extraheert sneller; koeler water (85-90°C) extraheert langzamer.',
        '<strong>Contacttijd</strong> is hoe lang het water in contact is met de koffie. Pour-over (2:30-3:30 min), Aeropress (1:30-2:00 min), French press (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Zure Koffie Diagnostiseren (Onderextractie)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zure koffie smaakt naar citroen of appel – scherp en fel. Het betekent dat het water niet genoeg tijd heeft gehad om smaken uit de koffie te halen. De oplossing is bijna altijd: <strong>fijner malen</strong> om het oppervlak te vergroten en het water te vertragen.',
    },
    {
      type: 'list',
      items: [
        'Maal de koffie fijner (verklein de maalgraad met 5-10 µm)',
        'Of verleng de zettijd iets (voeg 15-30 seconden toe)',
        'Of verhoog de watertemperatuur naar 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Bittere Koffie Diagnostiseren (Overextractie)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bittere koffie smaakt verbrand, asachtig of houterig. Het betekent dat het water te lang smaken heeft geëxtraheerd – voorbij de gewenste smaken en in de ongewenste. De oplossing is: <strong>grover malen</strong> om de waterdoorloop te versnellen en de contacttijd te verkorten.',
    },
    {
      type: 'list',
      items: [
        'Maal de koffie grover (vergroot de maalgraad met 5-10 µm)',
        'Of verkort de zettijd (trek 15-30 seconden af)',
        'Of verlaag de watertemperatuur naar 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Waterige Koffie Diagnostiseren (Slap, Dun)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Slappe koffie mist smaak en body. Het betekent meestal dat je maling te grof is, je verhouding te hoog (te veel water), of je koffie oud is. De molen bijstellen is de snelste oplossing.',
    },
    {
      type: 'list',
      items: [
        'Gebruik een fijnere maling voor meer extractieoppervlak',
        'Gebruik meer koffie (verhoog de verhouding)',
        'Zet iets langer of op een hogere temperatuur',
      ],
    },
    {
      type: 'title',
      text: 'Wrange Koffie Diagnostiseren (Droog, Smaak van Mineralen)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wrangheid voelt droog aan in je mond – alsof je op een druivenschil kauwt. Het wordt meestal veroorzaakt door hard water gecombineerd met overextractie. Dit vereist vaak zowel maalaanpassing <em>als</em> verbetering van de waterkwaliteit.',
    },
    {
      type: 'list',
      items: [
        'Gebruik gefilterd water (streef naar TDS 60-150 ppm)',
        'Maal grover om overextractie te verminderen',
        'Probeer iets koeler water (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Maalgraad Tabel: Hoe het eruit ziet en voelt',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Naam Maling', 'Deeltjesgrootte', 'Textuur-Referentie', 'Beste Methoden'],
      rows: [
        ['Extra Fijn', '5-15 µm', 'Fijn poeder, cacao', 'Espresso, Turks'],
        ['Fijn', '15-30 µm', 'Poedersuiker', 'Moka pot, Aeropress'],
        ['Medium-Fijn', '30-50 µm', 'Zand, tafelzout', 'V60, Chemex, Pour-over'],
        ['Medium', '50-70 µm', 'Strandzand', 'Filterkoffie-apparaat'],
        ['Grof', '70-90 µm', 'Grof zand, zeezout', 'French press, Cupping'],
        ['Extra Grof', '90+ µm', 'Peperkorrels, paneermeel', 'Cold brew, Percolator'],
      ],
    },
    {
      type: 'title',
      text: 'Waterkwaliteit: TDS en het Effect op Extractie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Total Dissolved Solids (TDS) is de maatstaf voor mineralen in het water. Kraanwater verschilt per regio: van 50 ppm (zacht) tot 300+ ppm (hard). Koffie-extractie is hier erg gevoelig voor.',
    },
    {
      type: 'list',
      items: [
        '<strong>Te zacht (0-50 ppm):</strong> Water extraheert te agressief, koffie smaakt zoutig.',
        '<strong>Ideaal (60-150 ppm):</strong> Zoete, gebalanceerde extractie met volle body.',
        '<strong>Te hard (200+ ppm):</strong> Mineralen binden aan aroma\'s, wat wrangheid veroorzaakt.',
      ],
    },
    {
      type: 'tip',
      title: 'Snelle Water Tip',
      html: '<p>Als je hard water vermoedt, probeer dan een zetbeurt met gefilterd of flessenwater ter vergelijking. Als de koffie direct beter smaakt, heb je de dader gevonden. Investeer in een waterfilter (Brita) of een vast filtersysteem.</p>',
    },
  ],
  ui: {
    methodLabel: 'Wat ben je aan het zetten?',
    methodPourover: 'Pour Over / Filter',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Moka Pot',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Selecteer je koffiezetter',
    flavorLabel: 'Hoe smaakt het?',
    flavorAcidic: 'Zuur',
    flavorBitter: 'Bitter',
    flavorWatery: 'Waterig / Slap',
    flavorAstringent: 'Wrang / Droog',
    flavorHint: 'Kies maximaal 2 smaken',
    severityLabel: 'Hoe sterk is het probleem?',
    severitySlightLabel: 'Nauwelijks merkbaar',
    severityModerateLabel: 'Gemiddeld',
    severitySevereLabel: 'Overheersend',
    diagnoseBtn: 'Stel diagnose',
    resetBtn: 'Reset',
    resultTitle: 'Diagnose voltooid',
    resultExplanation: 'Wat er gebeurt in je kopje',
    actionMainLabel: 'Primaire actie',
    actionSecondaryLabel: 'Temperatuur & Tijd',
    actionTertiaryLabel: 'Pro Tip',
    textureReferenceLabel: 'Textuur-referentie',
    improvementHint: 'Maak de aanpassing en zet een nieuwe beker.',
    copyDiagnosisBtn: 'Kopieer diagnose',
    feedbackLabel: 'Smaakt je koffie nu beter?',
    feedbackSuccessTemplate: 'Geweldig! De aanpassing heeft gewerkt.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Cafetière, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka pot, Percolator',
    methodEspressoDesc: 'Espressomachine',
    methodColdbrewDesc: 'Immersion, koud',
    fadeOutMessage: 'Goed gedaan! Blijf afstellen.',
    backBtn: 'Terug',
    mainIssueLabel: 'Hoofdprobleem',
    improvedBtn: 'Verbeterd',
    notYetBtn: 'Nog niet',
    copiedBtn: 'Gekopieerd!',
    combinedLabel: 'Gecombineerd',
    diagnosisTitle: 'The Brew Fixer Diagnose',
    issueLabel: 'Problem',
    causeLabel: 'Oorzaak',
    actionLabel: 'Actie',
    whyLabel: 'Waarom',
    nextLabel: 'Volgende',
  },
};
