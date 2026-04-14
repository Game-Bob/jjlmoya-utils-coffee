import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';

const slug = 'koffie-timer';
const title = 'Koffie Zet Timer';
const description =
  'Professionele specialty coffee timer met opschenkfasen, ritmische audiomeldingen en extractiesamenvatting. Geoptimaliseerd voor V60, Chemex en Aeropress.';

const faqData = [
  {
    question: 'Waarom zou ik deze timer gebruiken in plaats van die op mijn telefoon?',
    answer:
      'Deze timer is speciaal ontworpen voor koffie. Hij bevat visuele fasen (Bloom, Opschenken, Doorlopen), audiomeldingen 3 seconden voor elke overgang en laat je je volledige recept configureren zodat je nooit het ritme verliest tijdens het opschenken.',
  },
  {
    question: 'Wat is de bloom-tijd?',
    answer:
      'Het is de initiële pre-infusie (meestal 30 tot 45 seconden) waarbij een kleine hoeveelheid water wordt opgeschonken om CO2 te laten ontsnappen. De timer markeert deze fase in amberkleur, zodat je weet wanneer je moet wachten en wanneer je moet doorstromen.',
  },
  {
    question: 'Hoe weet ik of mijn extractietijd correct is?',
    answer:
      'Bij een standaard V60 moet de totale tijd tussen 2:30 en 3:15 minuten liggen. Als hij eerder klaar is, is je maling te grof. Als het langer duurt, is hij te fijn. Met de timer kun je dit proces precies diagnosticeren.',
  },
  {
    question: 'Zitten er audiomeldingen op?',
    answer:
      'Ja. Het systeem geeft een korte pieptoon voordat de bloom-fase eindigt en aan het einde van het proces, zodat je je kunt concentreren op de waterstraal zonder constant op het scherm te hoeven kijken.',
  },
  {
    question: 'Is het compatibel met Chemex?',
    answer:
      'Absoluut. Je kunt de totale tijd aanpassen naar 4:30 of 5:00 minuten (typisch voor Chemex vanwege het dikke filter) in de instellingen onderaan.',
  },
  {
    question: 'Werkt het op mobiel?',
    answer:
      'Het is geoptimaliseerd voor mobiel gebruik, met grote knoppen die gemakkelijk in te drukken zijn, zelfs met natte handen of terwijl je je schenkkan vasthoudt.',
  },
];

const howToData = [
  {
    name: 'Configureer je recept',
    text: 'Pas in het onderste gedeelte de totale hoeveelheid water, het bloom-water, de bloom-tijd en de totale tijd aan op basis van je zetmethode (V60, Chemex, Aeropress).',
  },
  {
    name: 'Druk op de startknop',
    text: 'Druk op de grote startknop. De timer begint en toont de actieve fase in de voortgangsbalk bovenaan.',
  },
  {
    name: 'Bloom-fase',
    text: 'Schenk het bloom-water (weergegeven op het scherm) in een spiraalvorm en wacht tot de timer verder gaat. Je krijgt 3 seconden voordat de fase eindigt een audiomelding.',
  },
  {
    name: 'Opschenkfase',
    text: 'Ga door met het schenken van het resterende water tot je het totale gewicht hebt bereikt. Schenk in langzame, gelijkmatige cirkels voor een uniforme extractie.',
  },
  {
    name: 'Doorloopfase',
    text: 'Wacht tot de koffie volledig door het filter is gelopen. Deze fase voltooit de extractie en bepaalt de helderheid en afdronk van je kopje.',
  },
  {
    name: 'Bekijk de samenvatting',
    text: 'Als je klaar bent, toont de timer de totale tijd en het totaal geschonken water. Noteer deze waarden samen met je smaakimpressies om het recept te verfijnen.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over de koffie-timer',
  faq: faqData,
  bibliographyTitle: 'Technische referentie en SCA-protocollen',
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
      text: 'Koffie Zet Timer: De wetenschap van extractie-timing (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In de wereld van specialty coffee is de <strong>contacttijd</strong> tussen water en gemalen koffie geen eenvoudige wachtfactor; het is de kinetische factor die bepaalt welke chemische verbindingen in je kopje terechtkomen. Een extra seconde kan de verschuiving betekenen van karamelzoetheid naar asgrauwe bitterheid. Onze professionele timing-tool voor V60, Chemex en Aeropress fungeert als een <strong>ritme-assistent</strong>, waardoor baristaprecisie thuis toegankelijk wordt.',
    },
    {
      type: 'summary',
      title: 'Waarom een gespecialiseerde timer essentieel is',
      items: [
        '<strong>Kinetische Controle:</strong> De snelheid waarmee water koffiedeeltjes oplost is constant. Tijd is je rem en je gaspedaal.',
        '<strong>Opschenkfasen:</strong> Koffie extraheert niet lineair. Het verdelen van tijd in Bloom, Opschenken en Doorlopen is cruciaal.',
        '<strong>Reproduceerbaarheid:</strong> Als je de tijd niet meet, kun je je beste koppen niet herhalen. Consistentie is de basis van kwaliteit.',
        '<strong>Maling aanpassen:</strong> De uiteindelijke tijd vertelt je of je de volgende keer fijner of grover moet malen.',
      ],
    },
    {
      type: 'title',
      text: 'De extractietijdlijn: Wat gebeurt er elke seconde?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wanneer heet water de koffie raakt, begint een moleculaire hindernisbaan. Niet alle smaken extraheren tegelijkertijd. Het begrijpen van deze tijdlijn maakt het verschil tussen een amateur en een professionele barista:',
    },
    {
      type: 'list',
      items: [
        '<strong>Seconden 0 tot 45 (Bloom):</strong> Dit is de ontgasingsfase. CO2 die tijdens de branding is opgesloten blokkeert het binnendringen van water. Wachten hier stelt de boon in staat zich te openen, wat de weg vrijmaakt voor uniforme extractie.',
        '<strong>Seconden 45 tot 120 (Zuur- en Zoetextractie):</strong> Water stroomt door en lost minerale zouten, organische zuren en complexe suikers op. Dit is de kern van de smaak.',
        '<strong>Seconden 120 tot 210 (Body en Afdronk):</strong> Zwaardere vezels en bittere verbindingen worden geëxtraheerd. Als deze fase te lang duurt, wordt de koffie wrang.',
      ],
    },
    {
      type: 'title',
      text: 'De Bloom-fase: Waarom 30 seconden de standaard is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bij de <strong>Bloom</strong> of pre-infusie schenken we ongeveer twee keer het gewicht van de koffie aan water. Deze eerste 30 seconden dienen om kooldioxide uit te stoten. Zonder deze tijd te respecteren, duwt gas het water naar buiten, waardoor er kanalen ontstaan waar vloeistof doorheen stroomt zonder de koffie aan te raken (channeling), met een waterige en inconsistente kop als resultaat.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Aanbevolen tijd', 'Technische actie', 'Chemisch doel'],
      rows: [
        ['Bloom', '30 tot 45 sec', 'Schenk 2x koffiegewicht', 'Ontgassing (CO2)'],
        ['Eerste Opschenking', '45 tot 90 sec', 'Langzame cirkels', 'Zuur- en zoetextractie'],
        ['Tweede Opschenking', '90 tot 150 sec', 'Zachte centrale schenking', 'Balans en body'],
        ['Doorloop', 'Tot het einde', 'Gelijkmatig druppelen', 'Helderheid en afdronk'],
      ],
    },
    {
      type: 'title',
      text: 'Impact van tijd op de maling: De feedbackloop',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De timer is je beste diagnostische hulpmiddel voor de molen. Als je V60-recept 3:00 minuten zou moeten duren en het water bij 2:15 al volledig is doorgelopen, zal de koffie waarschijnlijk zuur en slap smaken (onder-extractie). De oplossing is niet om langzamer te schenken, maar om <strong>fijner te malen</strong> zodat deeltjes meer weerstand bieden aan het water.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Ideale V60-tijd', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Ideale Chemex-tijd', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Ideale Aeropress-tijd', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Ritme-meldingen: Waarom de assistent onmisbaar is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het zetten van filterkoffie vereist constante visuele aandacht voor je weegschaal en opschenkpatroon. Onze timer bevat <strong>proximity audiomeldingen</strong> die 3 seconden voordat je een volgende opschenking moet starten of wanneer de bloom eindigt signaal geven. Het is het verschil tussen een vloeiende extractie en een vol onderbrekingen.',
    },
    {
      type: 'tip',
      title: 'Tip van een wedstrijdbariasta',
      html: '<p>Houd de waterstraal zo laag en zo dicht mogelijk bij het koffiebed. Opschenken van grote hoogte introduceert zuurstof en overmatige agitatie, wat de koffie kan over-extraheren en het water te snel laat afkoelen. Gebruik de timer om een gestaag cirkelvormig ritme aan te houden van ongeveer 5 tot 7 gram water per seconde.</p>',
    },
    {
      type: 'title',
      text: 'Thermodynamica en tijd: De variabele temperatuur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tijd beïnvloedt de temperatuur van het systeem. Een extractie die 6 minuten duurt, zal veel thermische energie verliezen, wat resulteert in een ongebalanceerde kop. De optimale tijdsbestekken houden het water tussen 90°C en 96°C gedurende de hele extractie.',
    },
    {
      type: 'title',
      text: 'Timing voor ijskoffie met de Flash Brew techniek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bij het zetten van koffie op ijs moet de timing agressiever zijn. Omdat er minder heet water wordt gebruikt (60% van het totaal), wordt de contacttijd verkort. Om dit te compenseren gebruik je een iets fijnere maling om de extractietijd binnen 2:30 tot 3:00 minuten te houden.',
    },
    {
      type: 'title',
      text: 'Samenvatting na extractie: Continu leren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aan het einde van elke brew toont onze tool de totale contacttijd. Noteer deze waarde samen met je smaakbeleving. Smaakt het bitter? Mik de volgende keer op een tijd die 15 seconden korter is. Smaakt het metaalachtig of zuur? Mik op 20 seconden meer. De timer zet de koffie niet voor je, maar geeft je de data om de kunstenaar te zijn.',
    },
  ],
  ui: {
    readyText: 'Klaar om te starten',
    startBtn: 'START EXTRACTIE',
    pauseBtn: 'PAUZE',
    resumeBtn: 'HERVATTEN',
    resetBtn: 'RESET',
    newBrewBtn: 'NIEUWE BREW',
    targetLabel: 'Doelwater:',
    instructionStart: 'Druk op de grote knop',
    hintStart: 'Bereid je V60 of Chemex voor',
    phase1Label: 'Fase 1: Bloom',
    phase2Label: 'Fase 2: Opschenken',
    phase3Label: 'Fase 3: Doorlopen',
    instructionBloom: 'Schenk {bloomWater}g water',
    hintBloom: 'Draai voorzichtig om te verzadigen',
    instructionPour: 'Bereik {waterTotal}g in totaal',
    hintPour: 'Schenk in gelijkmatige cirkels',
    instructionDrain: 'Wacht op het doorlopen',
    hintDrain: 'Bijna klaar om te genieten',
    summaryTitle: 'Extractie voltooid!',
    summaryMessage: 'Je koffie is klaar om te serveren.',
    statTimeLabel: 'Totale tijd',
    statWaterLabel: 'Water geschonken',
    setupTitle: 'Recept-instellingen',
    labelWater: 'Totaal water (g)',
    labelBloomWater: 'Bloom-water (g)',
    labelBloomTime: 'Bloom-tijd (s)',
    labelTotalTime: 'Totale tijd (s)',
  },
};
