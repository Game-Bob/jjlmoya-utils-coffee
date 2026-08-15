import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-verhaeltnis-rechner';
const title = 'AeroPress Kaffee Verhältnis und Rezept Rechner';
const description = 'Berechnen Sie Wasserverteilung, Zylinderkapazität, Bypass Verdünnung und Extraktionsschritte für AeroPress Kaffee.';

const howTo = [
  {
    name: 'Brühmethode und Modell auswählen',
    text: 'Wählen Sie die Standard oder Invertierte Methode und bestimmen Sie die Größe Ihrer AeroPress Kammer (Original, XL oder Go).',
  },
  {
    name: 'Kaffeedosis und Verhältnis festlegen',
    text: 'Geben Sie das Kaffeegewicht in Gramm und das Zielverhältnis ein oder wählen Sie ein Meisterschaftsrezept.',
  },
  {
    name: 'Kammerwasser und Bypass prüfen',
    text: 'Prüfen Sie, ob das Rezept das Kammervolumen überschreitet. Das Tool berechnet automatisch das notwendige Bypass Wasser.',
  },
  {
    name: 'Interaktiven Phasen Timer starten',
    text: 'Nutzen Sie den Schritt Timer für präzises Blooming, Ziehzeit und sanftes Drücken des Stempels.',
  },
];

const faq = [
  {
    question: 'Was ist der Unterschied zwischen der Standard und Invertierten AeroPress Methode?',
    answer: 'Bei der Standardmethode steht der Brüher direkt auf der Tasse, wodurch vor dem Aufsetzen des Kolbens geringe Mengen abtropfen. Bei der Invertierten Methode steht die AeroPress kopfüber auf dem Kolben, was eine vollständige Immersion ohne vorzeitigen Durchlauf ermöglicht.',
  },
  {
    question: 'Was bedeutet Bypass Brühverfahren bei der AeroPress?',
    answer: 'Bypass Brühverfahren bedeutet, dass im Zylinder ein starkes Kaffeekonzentrat zubereitet wird, das anschließend in der Serviertasse mit heißem Wasser verdünnt wird. Dies ermöglicht größere Portionen ohne Überfüllung der Kammer.',
  },
  {
    question: 'Welches Verhältnis ist ideal für AeroPress Kaffee?',
    answer: 'Für klassischen Filterkaffee liefern Verhältnisse zwischen 1:14 und 1:17 hervorragende Ergebnisse. Für espressoartige Konzentrate oder Eiskaffee bieten Verhältnisse von 1:4 bis 1:8 viel Körper.',
  },
  {
    question: 'Wie beeinflusst der Mahlgrad die AeroPress Extraktion?',
    answer: 'Ein mittlerer bis feiner Mahlgrad eignet sich bestens für kurze Ziehzeiten von 1 bis 2 Minuten. Feinere Mahlgrade erzeugen dichten Körper, während gröbere Mahlgrade Bitterkeit bei längerer Ziehzeit vermeiden.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Specialty Coffee Werkzeug',
    profileLabel: 'Extraktionsprofil',
    unitSystemLabel: 'Einheitensystem',
    unitMetricLabel: 'Metrisch (g)',
    unitImperialLabel: 'Imperial (oz)',
    presetsTitle: 'Barista und Meisterschaftsrezepte',
    presetCustom: 'Individuelle Formel',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Helle Röstung',
    presetWacChamp: 'WAC Bypass Champion',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Iced AeroPress',
    methodLabel: 'Brühtechnik',
    methodStandard: 'Standard Aufrecht',
    methodInverted: 'Invertierte Immersion',
    modelLabel: 'AeroPress Hardware Modell',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Kaffeedosis',
    doseUnitMetric: 'Gramm',
    doseUnitImperial: 'oz',
    ratioLabel: 'Brühverhältnis',
    ratioPrefix: '1:',
    waterTempLabel: 'Wassertemperatur',
    waterTempUnit: '°C',
    grindLabel: 'Mahlgrad Profil',
    grindFine: 'Fein',
    grindMediumFine: 'Medium Fein',
    grindMedium: 'Medium',
    grindCoarse: 'Grob',
    resultsTitle: 'Wasserverteilung und Kennzahlen',
    statTotalWater: 'Gesamtwasser',
    statChamberWater: 'Kammerwasser',
    statBypassWater: 'Bypass Wasser',
    statYield: 'Getränkeausbeute',
    statEstimatedTds: 'Geschätzter TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Bypass Verdünnung Erforderlich',
    bypassAlertText: 'Ihr Rezept erfordert {chamber} in der Kammer und {bypass} direkt in der Tasse.',
    timerTitle: 'Phasen Timer',
    timerStart: 'Timer Starten',
    timerPause: 'Pause',
    timerReset: 'Zurücksetzen',
    phaseBloom: 'Blooming und Vorbefeuchtung',
    phasePour: 'Aufgießen und Umrühren',
    phaseSteep: 'Immersion Ziehzeit',
    phasePress: 'Sanftes Drücken',
    phaseBypass: 'Bypass Wasser Zugeben',
    phaseComplete: 'Kaffee Fertig',
    guideTitle: 'Brühanleitung',
    guideStep1Title: 'Filter spülen und dosieren',
    guideStep1Desc: 'Papier oder Metallfilter in die Kappe einlegen und mit heißem Wasser spülen. Frisch gemahlenen Kaffee einfüllen.',
    guideStep2Title: 'Kammerwasser aufgießen',
    guideStep2Desc: 'Das berechnete Kammerwasser bei Zieltemperatur eingießen und vorsichtig umrühren.',
    guideStep3Title: 'Stempel aufsetzen und ziehen lassen',
    guideStep3Desc: 'Den Kolben leicht einsetzen um ein Vakuum zu erzeugen und die gewünschte Zeit ziehen lassen.',
    guideStep4Title: 'Drücken und verdünnen',
    guideStep4Desc: 'Kolben gleichmäßig für 20 bis 30 Sekunden herabdrücken. Beim Zischen stoppen und Bypass Wasser ergänzen.',
    ratioStrengthLight: 'Leicht und Delikat',
    ratioStrengthMedium: 'Ausgewogene Tasse',
    ratioStrengthStrong: 'Kräftig und Vollmundig',
    ratioStrengthConcentrate: 'Espresso Konzentrat',
    chamberWaterLabel: 'Kammerwasser',
    coffeeBedLabel: 'Kaffeebett',
    airGapLabel: 'Luftpolster',
  },
  seo: [
    { type: 'title', text: 'Grundlagen der AeroPress Kaffee Extraktion', level: 2 },
    {
      type: 'paragraph',
      html: 'Die <strong>AeroPress</strong> gehört zu den vielseitigsten Kaffeezubereitern der Welt. Sie kombiniert vollständige Immersionsbrühung mit pneumatischer Druckfiltration. Ein perfektes Gleichgewicht aus Süße und Klarheit erfordert präzise Verhältnisse zwischen Kaffeemehl und Wasser.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kammervolumen und die Physik des Bypass Brühverfahrens',
      html: 'Eine reguläre AeroPress Kammer fasst abzüglich des Kaffeebetts etwa 220ml bis 240ml Wasser. Wenn größere Tassenvolumen benötigt werden, nutzen Baristas das Bypass Verfahren zur sauberen Extraktion.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Goldenes Filterverhältnis' },
        { value: '230 ml', label: 'Standard Kammervolumen' },
        { value: '1.2 bis 1.5%', label: 'Optimaler TDS Bereich' },
      ],
    },
    { type: 'title', text: 'Vergleich zwischen Standard und Invertierter Methode', level: 3 },
    {
      type: 'paragraph',
      html: 'Die Ausrichtung des Geräts beeinflusst die Kontaktzeit und den Brühverlauf maßgeblich.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Standard Aufrechte Methode',
          description: 'Der Filterhalter sitzt direkt auf der Tasse. Durch schräges Aufsetzen des Kolbens entsteht ein Vakuum, das vorzeitiges Abtropfen stoppt.',
          points: [
            'Sehr sichere und einfache Handhabung',
            'Geringe passive Perkolation zu Beginn',
            'Von James Hoffmann für hohe Wiederholbarkeit empfohlen',
          ],
        },
        {
          title: 'Invertierte Immersionsmethode',
          description: 'Die AeroPress steht auf dem Kolbenfuß, sodass bis zum Wenden kein Tropfen entweicht.',
          highlight: true,
          points: [
            'Vollständige Kontrolle über die Kontaktzeit',
            'Ideal für Konzentrate und größere Dosen',
            'Erfordert Vorsicht beim Umdrehen',
          ],
        },
      ],
    },
    { type: 'title', text: 'Bypass Brühverfahren für Große Tassen Nutzen', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass Brühverfahren ist das Geheimnis vieler Siegerrezepte der World AeroPress Championship. Durch die Extraktion bei 1:6 bis 1:8 werden unerwünschte späte Bitterstoffe vermieden und das Konzentrat mit reinem heißem Wasser auf Trinkstärke gebracht.',
    },
    {
      type: 'table',
      headers: ['Rezeptstil', 'Kaffeedosis', 'Kammerwasser', 'Bypass Wasser', 'Empfohlener Mahlgrad'],
      rows: [
        ['Hoffmann Filter Tasse', '11g', '200g', '0g', 'Medium Fein (600µm)'],
        ['Tim Wendelboe Hell', '14g', '200g', '0g', 'Medium (700µm)'],
        ['WAC Champion Konzentrat', '30g', '120g', '105g', 'Grob (900µm)'],
        ['Alan Adler Klassiker', '17g', '80g', '100g Optional', 'Fein (450µm)'],
        ['Flash Iced AeroPress', '18g', '150g', '100g Eis', 'Medium Fein (550µm)'],
      ],
    },
    { type: 'title', text: 'Praxistipps für erstklassigen AeroPress Kaffee', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Wassertemperatur anpassen:</strong> 92°C bis 96°C für helle Röstungen zur Betonung fruchtiger Noten, 80°C bis 85°C für dunkle Röstungen.',
        '<strong>Gleichmäßig drücken:</strong> Sanften Druck für 20 bis 30 Sekunden ausüben. Zu starkes Pressen komprimiert das Kaffeebett und erzeugt Channeling.',
        '<strong>Filterpapier spülen:</strong> Papierfilter vorab mit heißem Wasser benetzen, um Papiergeschmack zu entfernen.',
        '<strong>Beim Zischen aufhören:</strong> Sobald Luft durch das Kaffeebett strömt, den Pressvorgang beenden, um Bitterölen vorzubeugen.',
      ],
    },
    {
      type: 'summary',
      title: 'Zusammenfassung',
      items: [
        'Mahlgrad stets auf die Ziehdauer abstimmen.',
        'Bypass Berechnung nutzen, wenn die Zielausbeute das Kammervolumen übersteigt.',
        'Temperatur und Zeit für reproduzierbare Ergebnisse genau steuern.',
      ],
    },
  ],
  faq,
  faqTitle: 'Häufig gestellte Fragen zu AeroPress Verhältnissen und Rezepten',
  bibliography,
  bibliographyTitle: 'Technische Referenzen und Kaffee-Wissenschaft',
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
