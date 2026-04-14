import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';

const slug = 'koffie-maalgraad-converter';
const title = 'Koffie Maalgraad Converter';
const description =
  'Interactieve maalgraadkaart met gids voor kliks en niveaus voor het afstellen van je molen voor Espresso, V60, French Press en meer. Technische micron-mapping voor alle extractiemethoden.';

const faqData = [
  {
    question: 'Waarom werkt dezelfde maalgraadinstelling niet voor alle koffiesoorten?',
    answer:
      'De dichtheid van bonen varieert per brandingsniveau en herkomst. Een lichte branding is doorgaans dichter en vereist een fijnere maling om goed te extraheren, terwijl een donkere branding poreuzer is en een grovere instelling nodig heeft.',
  },
  {
    question: 'Hoe weet ik of ik fijner of grover moet malen?',
    answer:
      'Laat je leiden door je smaak: als de koffie bitter en droog smaakt, maal dan grover zodat het water sneller stroomt. Als het zuur, zout of waterig smaakt, maal dan fijner om het contactoppervlak te vergroten.',
  },
  {
    question: 'Wat is \'channeling\' en hoe beïnvloedt de maling dit?',
    answer:
      'Channeling vindt plaats wanneer water de weg van de minste weerstand zoekt door het koffiebed. Een ongelijkmatige of ongeschikte maling voor de druk — vooral bij espresso — bevordert dit probleem en verpest de extractie.',
  },
  {
    question: 'Kan ik deze kaart gebruiken met een messenmolen?',
    answer:
      'Messenmolens produceren ongelijkmatige deeltjes — tegelijkertijd fijn poeder en grote brokken. De micronwaarden zijn indicatief, maar de werkelijke resultaten zullen aanzienlijk variëren in vergelijking met een molen met maalschijven.',
  },
  {
    question: 'Wat betekent de gelijkmatigheid van de molen in de visualisatie?',
    answer:
      'De getoonde deeltjesverdeling simuleert de werkelijke gelijkmatigheid van elke molen. Een Comandante C40 met 0,95 gelijkmatigheid produceert zeer consistente deeltjes; een Hario Skerton met 0,40 laat veel meer variatie in grootte zien.',
  },
];

const howToData = [
  {
    name: 'Selecteer je molen',
    text: 'Kies je model uit de dropdownlijst. De converter laat de aanbevolen kliks of niveaus zien die specifiek zijn voor jouw apparatuur.',
  },
  {
    name: 'Selecteer je extractiemethode',
    text: 'Klik op het icoon voor de methode die je gaat gebruiken. Het bedieningspaneel wordt bijgewerkt met alle relevante technische parameters.',
  },
  {
    name: 'Interpreteer de micron-indicator',
    text: 'Gebruik de micronwaarde in het staafdiagram om de werkelijke deeltjesgrootte te begrijpen. De tactiele referentie (fijn zout, basterdsuiker...) helpt je bij het visueel kalibreren.',
  },
  {
    name: 'Observeer de deeltjessimulatie',
    text: 'De verdeling van de stippen laat de typische gelijkmatigheid van je molen zien. Een homogener patroon betekent een voorspelbaardere en reproduceerbaardere extractie.',
  },
  {
    name: 'Pas aan op smaak',
    text: 'Gebruik de diagnosegids onderaan als referentie. Als de koffie bitter smaakt, ga dan een paar kliks grover. Als het zuur smaakt, ga dan fijner. Pas altijd één stap tegelijk aan.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over de maalgraad van koffie',
  faq: faqData,
  bibliographyTitle: 'Referenties over maling en extractie',
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
      text: 'De fysica van de maalgraad: Waarom deeltjesgrootte alles verandert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wanneer je koffie maalt, verminder je niet alleen de grootte van de boon. Je bepaalt het <strong>contactoppervlak</strong> dat beschikbaar is voor water om smaakverbindingen op te lossen. Te fijn, en het water extraheert bittere stoffen overmatig. Te grof, en water stroomt er doorheen zonder genoeg weerstand, wat een zwak en zuur kopje oplevert. De maalgraadconverter geeft je het exacte bereik voor elke methode.',
    },
    {
      type: 'summary',
      title: 'Wat bepaalt de juiste maalgraad?',
      items: [
        '<strong>Extractiemethode:</strong> Druk, contacttijd en filtertype dicteren het optimale micronbereik voor elke zetmethode.',
        '<strong>Gelijkmatigheid van de molen:</strong> Een hoogwaardige molen met schijven produceert homogene deeltjes; een messenmolen genereert tegelijkertijd fijn poeder en grote brokken.',
        '<strong>Versheid van de bonen:</strong> Vers gebrande koffie bevat meer CO2 en kan een iets grovere maling nodig hebben dan dezelfde koffie die een paar weken oud is.',
        '<strong>Smaakkalibratie:</strong> Het palet is het uiteindelijke instrument. De kaart is je startpunt; smaak is je bestemming.',
      ],
    },
    {
      type: 'table',
      headers: ['Methode', 'Microns', 'Tactiele referentie', 'Contacttijd'],
      rows: [
        ['Ibrik (Turks)', '100-300 μm', 'Talkpoeder / Fijne bloem', '3-5 min koken'],
        ['Espresso', '300-500 μm', 'Fijn zout', '25-30 sec'],
        ['Moka / AeroPress', '500-700 μm', 'Tafelzout', '3-4 min'],
        ['V60 / Filter', '700-900 μm', 'Kristalsuiker', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200 μm', 'Grof zand', '3:30-4:30 min'],
        ['French Press', '1200-1500 μm', 'Grof zout', '4 min immersie'],
        ['Cold Brew', '1500+ μm', 'Peperkorrels', '12-24 u koud'],
      ],
    },
    {
      type: 'title',
      text: 'Gouden regel voor nieuwe koffies',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>Wanneer je een nieuwe koffie opent, begin dan altijd in het midden van het aanbevolen bereik voor jouw methode. Pas vanaf daar de smaak aan met één klik per keer. Maak notities van elke aanpassing om een referentielogboek op te bouwen van je favoriete koffies met elke molen.</p>',
    },
  ],
  ui: {
    step1Label: 'Stap 1: Selectie Apparatuur',
    step2Label: 'Stap 2: Extractiemethode',
    gaugeLabel: 'Technische deeltjeskaart (μm)',
    distributionLabel: 'Werkelijke deeltjesverdeling',
    refLabel: 'Referentie',
    rangeMicrasLabel: 'Bereik μm',
    unitMicras: 'DOEL-MICRONS (μm)',
    unitClicks: 'AANBEVOLEN KLIKS',
    unitLevel: 'AANBEVOLEN NIVEAU',
    suggestGrinderText: "Staat je molen er niet bij? Stel hem voor",
    method0Name: 'Ibrik (Turks)',
    method0Ref: 'Talkpoeder / Bloem',
    method0Desc: 'Extra fijn poeder, bijna als bloem. Essentieel voor de suspensie van Turkse koffie.',
    method1Name: 'Espresso',
    method1Ref: 'Fijn zout',
    method1Desc: 'Extractie onder hoge druk vereist een zeer fijne maling om weerstand te creëren.',
    method2Name: 'Moka / AeroPress',
    method2Ref: 'Tafelzout',
    method2Desc: 'Gemiddelde druk of hybride infusie. Veelzijdige en gebalanceerde textuur.',
    method3Name: 'V60 / Filter',
    method3Ref: 'Kristalsuiker',
    method3Desc: 'Handmatige opschenkmethoden, de standaard voor het benadrukken van zoetheid en zuurgraad.',
    method4Name: 'Chemex / Clever',
    method4Ref: 'Grof zand',
    method4Desc: 'Dikke filters of korte infusie. Vereist een constante en gestage stroom.',
    method5Name: 'French Press',
    method5Ref: 'Grof zout',
    method5Desc: 'Langdurige infusie heeft grote deeltjes nodig om door het metalen gaas te filteren.',
    method6Name: 'Cold Brew',
    method6Ref: 'Peperkorrels',
    method6Desc: 'Koude extractie over vele uren vereist de grofste maling die mogelijk is.',
    troubleIssue0: 'Smaakt het bitter, droog of wrang?',
    troubleSolution0:
      'Je extraheert te veel. Maal grover zodat het water sneller stroomt en minder bittere stoffen extraheert.',
    troubleAction0: 'Maal grover',
    troubleIssue1: 'Smaakt het zuur, zout of waterig?',
    troubleSolution1:
      'Je extraheert te weinig. Maal fijner om het contactoppervlak te vergroten en meer suikers en body te extraheren.',
    troubleAction1: 'Maal fijner',
  },
};
