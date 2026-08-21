import { bibliography } from '../bibliography';
import type { EspressoExtractionLocaleContent } from '../entry';

const slug = 'espresso-extraktionsrechner';
const title = 'Espresso Extraktionsrechner';
const description = 'Erfasse Dosis, Getränkemasse und Shotzeit, um Brühratio, Flussrate und optional die Extraktionsausbeute aus einer Refraktometer TDS Messung zu lesen. Das heißt: Waage und Timer zuerst, TDS nur wenn gemessen.';

const howTo = [
  {
    name: 'Kaffeedosis eingeben',
    text: 'Wäge den trockenen Kaffee im Siebträger und stelle den Dosisschieber auf diese Masse in Gramm.',
  },
  {
    name: 'Shot ziehen und Getränk wiegen',
    text: 'Starte den Timer wenn die Pumpe greift, stoppe ihn beim Schnitt und wiege die Flüssigkeit in der Tasse.',
  },
  {
    name: 'Ratio, Zeit und Fluss ablesen',
    text: 'Der Rechner macht aus diesen drei Zahlen Brühratio, Kontaktzeit und Gramm pro Sekunde, damit du den Shot mit einem klassischen Fenster vergleichen kannst.',
  },
  {
    name: 'TDS nur hinzufügen wenn gemessen',
    text: 'Wenn du ein Refraktometer genutzt hast, aktiviere TDS und trage den Wert ein. Die Ausbeute ist TDS Prozent mal Getränkemasse geteilt durch die Dosis. Lass TDS aus, wenn du nichts gemessen hast.',
  },
];

const faq = [
  {
    question: 'Welche Brühratio sollte ich für Espresso nutzen?',
    answer: 'Ein üblicher Specialty Startpunkt ist 1:2 nach Masse, zum Beispiel 18 g rein und 36 g raus. Kürzere Ratios wie 1:1.1 liegen im Ristretto Stil. Längere Ratios wie 1:3 liegen im Lungo Stil. Das sind Planungsfenster, kein einzig richtiges Rezept.',
  },
  {
    question: 'Wie wird die Espresso Extraktionsausbeute berechnet?',
    answer: 'Die Ausbeute in Prozent ist TDS Prozent mal Getränkemasse in Gramm, geteilt durch die trockene Dosis. Ein TDS Wert von 10 Prozent auf 36 g aus 18 g ist 20 Prozent Ausbeute. Ohne gemessenen TDS Wert erfindet das Werkzeug keine Zahl.',
  },
  {
    question: 'Warum ist die Shotzeit nicht dieselbe Größe wie die Ausbeute?',
    answer: 'Zeit und Fluss beschreiben, wie schnell Wasser durch den Puck lief. Die Ausbeute beschreibt, wie viel trockener Kaffee sich in der Tasse gelöst hat. Ein schneller 1:2 Shot und ein langsamer 1:2 Shot können dieselbe Ratio haben und trotzdem anders extrahieren. Geschmacksdiagnose gehört in ein anderes Werkzeug.',
  },
  {
    question: 'Soll ich die Preinfusion in die Shotzeit einrechnen?',
    answer: 'Gib die gesamte Timeranzeige ein und setze die Preinfusion getrennt, wenn deine Maschine den Puck vor dem vollen Fluss einweicht. Kontaktzeit ist Gesamtzeit minus Preinfusion, und die Flussrate nutzt diese Kontaktzeit, damit ein langes Einweichen nicht wie ein langsamer Shot wirkt.',
  },
];

export const content: EspressoExtractionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    kicker: 'Shotglas',
    statusClassic: 'Klassisches Fenster',
    statusOutside: 'Außerhalb des klassischen Fensters',
    presetTitle: 'Shotprofil',
    presetClassic: 'Klassisch 1:2',
    presetRistretto: 'Ristretto',
    presetLungo: 'Lungo',
    presetSingle: 'Single',
    presetTurbo: 'Turbo',
    unitSystemLabel: 'Einheiten',
    unitMetric: 'g',
    unitImperial: 'oz',
    doseLabel: 'Dosis',
    yieldLabel: 'In der Tasse',
    timeLabel: 'Shotzeit',
    preinfusionLabel: 'Preinfusion',
    preZero: 'Aus',
    preShort: '4s',
    preLong: '8s',
    ratioTargetsLabel: 'Füllen bis',
    ratioTargetOne: '1:1',
    ratioTargetTwo: '1:2',
    ratioTargetThree: '1:3',
    tdsToggle: 'TDS',
    tdsLabel: 'TDS',
    tdsHint: 'Refraktometerwert',
    unitGrams: 'g',
    unitOz: 'oz',
    unitSeconds: 's',
    unitPercent: '%',
    unitFlow: 'g/s',
    ratioReadout: 'Ratio',
    timeReadout: 'Zeit',
    flowReadout: 'Fluss',
    yieldReadout: 'EY',
    yieldEmpty: 'Kein TDS',
    styleRistretto: 'Ristretto',
    styleNormale: 'Normale',
    styleLungo: 'Lungo',
    paceFast: 'Schnell',
    paceTypical: 'Typisch',
    paceSlow: 'Langsam',
    bandUnmeasured: 'Kein TDS',
    bandLow: 'Unter 18%',
    bandTarget: '18 bis 22%',
    bandHigh: 'Über 22%',
    markOne: '1:1',
    markTwo: '1:2',
    markThree: '1:3',
    deltaOnLine: 'Auf der 1:2 Linie',
    deltaPast: '{n} g über 1:2',
    deltaShort: '{n} g unter 1:2',
    resetText: 'Zurücksetzen',
    faqTitle: 'Fragen zur Espresso Extraktion',
    bibliographyTitle: 'Quellen zur Extraktion',
  },
  seo: [
    { type: 'title', text: 'Was dieser Espresso Rechner wirklich misst', level: 2 },
    {
      type: 'paragraph',
      html: 'Espressorezepte lassen sich leichter wiederholen, wenn sie als Massen und Zeiten notiert sind. Die Brühratio ist Getränkemasse geteilt durch trockene Dosis. Eine 18 g Dosis mit 36 g in der Tasse ist ein 1:2 Shot. Die Kontaktzeit ist die Timeranzeige minus einer Preinfusion. Die Flussrate ist Getränkemasse geteilt durch diese Kontaktzeit.',
    },
    {
      type: 'tip',
      title: 'Wäge die Tasse, vertraue nicht auf Milliliter',
      html: 'Crema und Temperatur machen Volumenwerte unruhig. Specialty Rezepte nutzen fast immer Gramm rein und Gramm raus. Wenn du nur eine Volumenmarke hast, nimm 1 ml grob als 1 g und wechsle so bald wie möglich zur Waage.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:2', label: 'Übliche Startratio' },
        { value: '20 bis 32 s', label: 'Typisches Kontaktfenster' },
        { value: '18 bis 22%', label: 'Häufig genannte Ausbeute' },
      ],
    },
    { type: 'title', text: 'Shotstile aus der Brühratio', level: 3 },
    {
      type: 'paragraph',
      html: 'Die Bezeichnungen Ristretto, Normale und Lungo sind Ratiofamilien, keine Geschmackspunkte. Dieses Werkzeug nutzt Masseschnitte nahe 1:1.5 und 1:2.5, weil viele Specialty Bars so Rezepte schreiben. Traditionelle italienische Volumendefinitionen sind anders und gelten hier nicht.',
    },
    {
      type: 'table',
      headers: ['Stil', 'Masseratio', 'Beispiel bei 18 g', 'Was das Glas zeigt'],
      rows: [
        ['Ristretto', 'Unter 1:1.5', 'Etwa 20 g raus', 'Die Füllung sitzt nahe der 1:1 Marke'],
        ['Normale', '1:1.5 bis 1:2.5', '36 g raus bei 1:2', 'Die Füllung trifft die goldene 1:2 Linie bei typischer Zeit'],
        ['Lungo', 'Über 1:2.5', 'Etwa 54 g raus', 'Die Füllung steigt zur 1:3 Marke'],
        ['Turbo', 'Oft nahe 1:2.2', '40 g raus in etwa 15 s', 'Schnelles Tempo, trotzdem ein gemessenes Rezept'],
      ],
    },
    { type: 'title', text: 'Extraktionsausbeute braucht einen TDS Wert', level: 3 },
    {
      type: 'paragraph',
      html: 'Gesamtlösliche Feststoffe (TDS) sind die Stärke des Getränks, meist mit einem Refraktometer gelesen. Die Extraktionsausbeute ist der Anteil des trockenen Kaffees, der sich gelöst hat. Die hier genutzte Beziehung ist dieselbe Brühchart Identität der Specialty Coffee Association: Ausbeuteprozent gleich TDS Prozent mal Getränkemasse geteilt durch die Dosis.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ohne TDS messbar:</strong> Dosis, Getränkemasse, Brühratio, Shotzeit, Preinfusion, Kontaktzeit und Flussrate.',
        '<strong>Nur mit TDS messbar:</strong> Extraktionsausbeute. 9.5 Prozent TDS auf 36 g aus 18 g sind 19 Prozent Ausbeute.',
        '<strong>Keine Geschmacksdiagnose:</strong> sauer, bitter oder hohl braucht Mahlung, Temperatur und Puckvorbereitung. Nutze dafür das Werkzeug zur Geschmacksdiagnose.',
        '<strong>Keine Herstellervorgabe:</strong> Sieb, Röstung und Maschine ändern den Shot, der am besten schmeckt. Behandle 18 bis 22 Prozent als zitiertes Planungsband, nicht als Bestanden oder Durchgefallen.',
      ],
    },
    {
      type: 'summary',
      title: 'So nutzt du das Shotlabor',
      items: [
        'Wähle ein Profil oder setze Dosis, Ausbeute und Zeit von Waage und Timer.',
        'Sieh zu, wie das Glas zu den Marken 1:1, 1:2 und 1:3 füllt, wenn Ratio und Tempo wechseln.',
        'Aktiviere TDS erst nach einem Refraktometerwert, wenn du die Extraktionsausbeute willst.',
      ],
    },
  ],
  faq,
  faqTitle: 'Fragen zur Espresso Extraktion',
  bibliography,
  bibliographyTitle: 'Quellen zur Extraktion',
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
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
