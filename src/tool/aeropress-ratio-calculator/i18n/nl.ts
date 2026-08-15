import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-ratio-rekenmachine';
const title = 'AeroPress Verhouding en Recepten Calculator';
const description = 'Bereken waterverdeling, kamervolume, bypass verdunning en extractiestappen voor AeroPress koffie.';

const howTo = [
  {
    name: 'Kies zetmethode en model',
    text: 'Selecteer de standaard of omgekeerde methode en kies uw AeroPress kamerformaat (Original, XL of Go).',
  },
  {
    name: 'Stel koffiedosis en ratio in',
    text: 'Voer de koffiedosis in grammen en de gewenste brouwverhouding in, of kies een baristarecept.',
  },
  {
    name: 'Controleer kamerwater en bypass',
    text: 'Controleer of uw recept de kamerinhoud overschrijdt. De tool berekent automatisch het bypasswater voor in het kopje.',
  },
  {
    name: 'Volg de interactieve fasentimer',
    text: 'Gebruik de timer voor nauwkeurige pre-infusie (bloom), trektijd en rustig doordrukken.',
  },
];

const faq = [
  {
    question: 'Wat is het verschil tussen de standaard en omgekeerde AeroPress methode?',
    answer: 'Bij de standaardmethode rust de AeroPress direct op het kopje, waardoor er een lichte vloeistofstroom kan zijn voor het plaatsen van de zuiger. Bij de omgekeerde methode staat het apparaat ondersteboven op de zuiger voor volledige immersie.',
  },
  {
    question: 'Wat houdt bypass zetten in bij de AeroPress?',
    answer: 'Bypass zetten houdt in dat u een geconcentreerde extractie in de kamer zet en deze achteraf in het kopje verdunt met zuiver heet water. Zo zet u grotere volumes zonder overlopen.',
  },
  {
    question: 'Wat is de ideale koffie-waterverhouding voor AeroPress?',
    answer: 'Voor een klassieke filterkoffie leveren verhoudingen tussen 1:14 en 1:17 een uitstekende balans. Voor espressoachtige concentraten zijn verhoudingen van 1:4 tot 1:8 ideaal.',
  },
  {
    question: 'Hoe beinvloedt de maalgraad de extractie?',
    answer: 'Een medium-fijne maalgraad is optimaal voor korte trektijden van 1 tot 2 minuten. Fijner malen verhoogt het mondgevoel, terwijl grover malen bitterheid bij lange trektijden voorkomt.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Specialty Coffee Tool',
    profileLabel: 'Extractieprofiel',
    unitSystemLabel: 'Eenhedensysteem',
    unitMetricLabel: 'Metrisch (g)',
    unitImperialLabel: 'Imperiaal (oz)',
    presetsTitle: 'Barista en Kampioenschapsrecepten',
    presetCustom: 'Aangepaste Formule',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Lichte Branding',
    presetWacChamp: 'WAC Kampioen Bypass',
    presetAlanAdler: 'Alan Adler Origineel',
    presetIcedBypass: 'Flash Brew Iced AeroPress',
    methodLabel: 'Zettechniek',
    methodStandard: 'Standaard Rechtop',
    methodInverted: 'Omgekeerde Immersie',
    modelLabel: 'AeroPress Model',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Koffiedosis',
    doseUnitMetric: 'gram',
    doseUnitImperial: 'oz',
    ratioLabel: 'Brouwverhouding',
    ratioPrefix: '1:',
    waterTempLabel: 'Watertemperatuur',
    waterTempUnit: '°C',
    grindLabel: 'Maalgraad Profiel',
    grindFine: 'Fijn',
    grindMediumFine: 'Medium Fijn',
    grindMedium: 'Medium',
    grindCoarse: 'Grof',
    resultsTitle: 'Waterverdeling en Statistieken',
    statTotalWater: 'Totaal Water',
    statChamberWater: 'Water in Kamer',
    statBypassWater: 'Bypass Water',
    statYield: 'Volume in Kopje',
    statEstimatedTds: 'Geschatte TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Bypass Verdunning Vereist',
    bypassAlertText: 'Uw recept vereist {chamber} in de kamer en {bypass} direct toegevoegd aan het kopje.',
    timerTitle: 'Fasentimer',
    timerStart: 'Start Timer',
    timerPause: 'Pauze',
    timerReset: 'Resetten',
    phaseBloom: 'Pre-infusie en Bevochtiging',
    phasePour: 'Opschenken en Roeren',
    phaseSteep: 'Immersie en Trektijd',
    phasePress: 'Rustig Doordrukken',
    phaseBypass: 'Bypass Water Toevoegen',
    phaseComplete: 'Koffie Gereed',
    guideTitle: 'Extractiegids',
    guideStep1Title: 'Filter spoelen en doseren',
    guideStep1Desc: 'Plaats het filter in de dop en spoel met heet water. Voeg versgemalen koffie toe.',
    guideStep2Title: 'Kamerwater opschenken',
    guideStep2Desc: 'Schenk het berekende water bij de juiste temperatuur op en roer voorzichtig.',
    guideStep3Title: 'Zuiger plaatsen en laten trekken',
    guideStep3Desc: 'Plaats de zuiger om een vacuum te vormen en laat de koffie trekken.',
    guideStep4Title: 'Doordrukken en verdunnen',
    guideStep4Desc: 'Druk de zuiger 20 tot 30 seconden rustig naar beneden. Stop bij het sissen en voeg bypasswater toe.',
    ratioStrengthLight: 'Licht en Verfijnd',
    ratioStrengthMedium: 'Evenwichtig Kopje',
    ratioStrengthStrong: 'Rijk en Volmondig',
    ratioStrengthConcentrate: 'Espresso Concentraat',
    chamberWaterLabel: 'Water in Kamer',
    coffeeBedLabel: 'Koffiebed',
    airGapLabel: 'Luchtkamer',
  },
  seo: [
    { type: 'title', text: 'Principes van AeroPress Koffie Extractie', level: 2 },
    {
      type: 'paragraph',
      html: 'De <strong>AeroPress</strong> combineert volledige immersie met luchtdrukfiltratie. Een gebalanceerd kopje met zoetheid en helderheid ontstaat door nauwkeurige controle van de verhouding tussen koffie en water.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kamervolume en de Theorie van Bypass Zetten',
      html: 'Een standaard AeroPress kamer bevat circa 220ml tot 240ml water exclusief het koffiebed. Voor grotere volumes gebruiken barista\'s bypass extractie.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Gouden Filterratio' },
        { value: '230 ml', label: 'Standaard Kamervolume' },
        { value: '1.2 tot 1.5%', label: 'Ideaal TDS Bereik' },
      ],
    },
    { type: 'title', text: 'Vergelijking tussen Standaard en Omgekeerde Methode', level: 3 },
    {
      type: 'paragraph',
      html: 'De stand van de cafetiere beinvloedt de contacttijd en het brouwproces.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Standaard Methode Rechtop',
          description: 'Het filter rust direct op het kopje. De zuiger creeert een vacuum dat vroegtijdig druppelen stopt.',
          points: [
            'Veilige en eenvoudige bediening',
            'Lichte vroege percolatie',
            'Aanbevolen door James Hoffmann voor herhaalbaarheid',
          ],
        },
        {
          title: 'Omgekeerde Immersie Methode',
          description: 'De AeroPress staat op de zuigerbasis, waardoor er geen druppel lekt tot het omdraaien.',
          highlight: true,
          points: [
            'Volledige controle over de trektijd',
            'Ideaal voor concentraten en hogere doses',
            'Voorzichtigheid vereist bij het omkeren',
          ],
        },
      ],
    },
    { type: 'title', text: 'Bypass Verdunning Toepassen voor Grote Porties', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass zetten voorkomt late bittere tannines door op een geconcentreerde verhouding van 1:6 tot 1:8 te zetten en direct aan te vullen met zuiver heet water in het kopje.',
    },
    {
      type: 'table',
      headers: ['Recepttype', 'Koffiedosis', 'Kamerwater', 'Bypass Water', 'Maalgraad'],
      rows: [
        ['Hoffmann Filter', '11g', '200g', '0g', 'Medium Fijn (600µm)'],
        ['Tim Wendelboe Licht', '14g', '200g', '0g', 'Medium (700µm)'],
        ['WAC Kampioen Bypass', '30g', '120g', '105g', 'Grof (900µm)'],
        ['Alan Adler Origineel', '17g', '80g', '100g Optioneel', 'Fijn (450µm)'],
        ['Flash Iced AeroPress', '18g', '150g', '100g Ijs', 'Medium Fijn (550µm)'],
      ],
    },
    { type: 'title', text: 'Tips voor de Beste Extractie', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Watertemperatuur:</strong> 92°C tot 96°C voor lichte brandingen, 80°C tot 85°C voor donkere brandingen.',
        '<strong>Gelijkmatig drukken:</strong> Oefen 20 tot 30 seconden rustige druk uit om kanaalvorming te vermijden.',
        '<strong>Filter spoelen:</strong> Spoel papierfilters met heet water om papiersmaak te neutraliseren.',
        '<strong>Stoppen bij het sissen:</strong> Stop direct zodra lucht ontsnapt om bittere olien buiten te sluiten.',
      ],
    },
    {
      type: 'summary',
      title: 'Samenvatting',
      items: [
        'Stem de maalgraad af op de trektijd.',
        'Gebruik bypassberekening wanneer het volume de kamer overstijgt.',
        'Houd temperatuur en tijd constant voor voorspelbare topkwaliteit.',
      ],
    },
  ],
  faq,
  faqTitle: 'Veelgestelde vragen over AeroPress Verhoudingen en Recepten',
  bibliography,
  bibliographyTitle: 'Technische Referenties en Koffiewetenschap',
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
