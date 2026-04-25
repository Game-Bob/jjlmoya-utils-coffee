import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-kaffee-wasser-rechner';
const title = 'SCA Kaffee Wasser Rechner';
const description =
  'Berechnen Sie exakte Mineralkonzentrationen für Specialty Coffee. SCA, Barista Hustle und Hendon Profile. Kontrollieren Sie Magnesium, Calcium und Bicarbonat für maximalen Geschmack und Maschinenschutz.';

const faqData = [
  {
    question: 'Was ist der SCA-Wasserqualitätsstandard?',
    answer:
    'Die Specialty Coffee Association definiert einen technischen Standard für Brühwasser, der optimale Bereiche für Gesamthärte (GH), Alkalität (KH), pH-Wert und Natrium festlegt, um eine ausgewogene Extraktion zu erreichen, die den Geschmack verbessert, ohne die Ausrüstung zu beschädigen.',
  },
  {
    question: 'Warum nicht einfach Leitungswasser verwenden?',
    answer:
    'Leitungswasser variiert je nach Standort und Jahreszeit erheblich. Es kann Chlor, überschüssigen Kalk oder Mineralien enthalten, die die Aromen von Specialty Coffee maskieren und Kessel sowie Dichtungen beschädigen. Die Mineralisierung von destilliertem Wasser gibt Ihnen die volle Kontrolle und wiederholbare Ergebnisse.',
  },
  {
    question: 'Wo bekomme ich die Mineralsalze her?',
    answer:
    'Bittersalz (Magnesiumsulfat) und Natron (Natriumbicarbonat) sind in Apotheken und Supermärkten erhältlich. Calciumchlorid findet man häufig in Fachgeschäften für Hobbybrauer. Stellen Sie immer sicher, dass sie Lebensmittelqualität haben.',
  },
  {
    question: 'Ist es sicher für meine Espressomaschine?',
    answer:
    'Der Rechner enthält eine Echtzeit-Risikoanzeige. Sehr reines Wasser korrodiert Metallkomponenten; sehr hartes Wasser führt zu Kalkablagerungen. Die SCA Ideal und Barista Hustle Profile sind darauf ausgelegt, die Langlebigkeit der Ausrüstung mit der Geschmacksqualität in Einklang zu bringen.',
  },
  {
    question: 'Was ist der Unterschied zwischen Magnesium und Calcium im Kaffee?',
    answer:
    'Magnesium extrahiert fruchtige und süße Geschmacksverbindungen effizienter und ist das bevorzugte Mineral für Filtermethoden. Calcium liefert mehr Körper und eine seidige Textur, neigt aber eher dazu, im Laufe der Zeit Kalkablagerungen in Kesseln zu bilden.',
  },
];

const howToData = [
  {
    name: 'Reines Basiswasser besorgen',
    text: 'Kaufen Sie destilliertes oder demineralisiertes Wasser oder verwenden Sie ein Umkehrosmose-System. Das Ziel ist es, bei 0 ppm gelösten Feststoffen (TDS) zu beginnen, um die volle Kontrolle über die Mineralisierung zu haben.',
  },
  {
    name: 'Stammkonzentrat-Flaschen vorbereiten',
    text: 'Lösen Sie jedes Salz separat in 100 ml destilliertem Wasser auf: 2,46 g Bittersalz für Magnesium, 1,47 g CaCl2 für Calcium und 1,68 g Natron für den Puffer (Buffer).',
  },
  {
    name: 'Zielprofil auswählen',
    text: 'Wählen Sie SCA Ideal (ausgewogen), Barista Hustle (Süße und Helligkeit), Hendon (Körper), Melbourne (fein) oder erstellen Sie ein eigenes Profil mit Ihren eigenen GH- und KH-Werten.',
  },
  {
    name: 'Endvolumen eingeben',
    text: 'Geben Sie die Wassermenge an, die Sie mineralisieren möchten, in Litern. Der Rechner passt die Konzentratdosierungen automatisch für dieses exakte Volumen an.',
  },
  {
    name: 'Konzentrate hinzufügen und mit destilliertem Wasser auffüllen',
    text: 'Geben Sie mit einer Präzisionsspritze die angegebenen Milliliter jedes Konzentrats in Ihren Behälter und füllen Sie ihn bis zum Gesamtvolumen mit destilliertem Wasser auf.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen zum SCA Kaffee-Wasser-Rechner',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen und SCA-Standards',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kaffeewasser-Chemie: Warum H₂O die meistunterschätzte Zutat ist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kaffee besteht zu 98-99 % aus Wasser. Dennoch ist die Mineralzusammensetzung dieses Wassers der am häufigsten übersehene Qualitätsfaktor in der gesamten Specialty Coffee Kette. Derselbe äthiopische Single-Origin Kaffee, extrahiert mit Londoner Leitungswasser im Vergleich zu SCA-optimiertem Wasser, kann wie zwei völlig verschiedene Kaffees schmecken. Unser <strong>SCA Kaffee-Wasser-Rechner</strong> ermöglicht es Ihnen, perfektes Brühwasser von Grund auf mit gewöhnlichen Mineralsalzen und destilliertem Wasser zu formulieren.',
    },
    {
      type: 'summary',
      title: 'Warum spielt die Wassermineralisierung eine so große Rolle?',
      items: [
        '<strong>GH (Gesamthärte):</strong> Die Summe aus Magnesium- und Calciumionen bestimmt die Kapazität des Wassers, Kaffeearomen zu lösen.',
        '<strong>KH (Karbonathärte):</strong> Die Bicarbonatkonzentration steuert den pH-Wert während der Extraktion. Niedriges KH erzeugt sauren Kaffee; hohes KH macht ihn flach.',
        '<strong>Wiederholbarkeit:</strong> Kommunales Wasser ändert sich je nach Jahreszeit und Standort. Mineralisiertes Wasser ist konstant und Charge für Charge reproduzierbar.',
        '<strong>Schutz der Ausrüstung:</strong> Korrekte Mineralwerte verhindern sowohl Korrosion (zu reines Wasser) als auch Kalkablagerungen (zu hartes Wasser).',
      ],
    },
    {
      type: 'title',
      text: 'Der SCA-Standard: Technische Grenzwerte für perfektes Brühwasser',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Minimum', 'SCA Ideal', 'Maximum'],
      rows: [
        ['Gesamthärte (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alkalität (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH-Wert', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnesium vs. Calcium: Der Kampf der Mineralien, der Ihre Tasse definiert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Mineralien verhalten sich im Kaffee gleich. Der Forscher Christopher Hendon hat nachgewiesen, dass <strong>Magnesium</strong> Liganden mit komplexen flüchtigen Aromamolekülen bildet und so fruchtige und florale Noten effizienter extrahiert. <strong>Calcium</strong> extrahiert schwerere Verbindungen und verleiht Körper und ein seidiges Mundgefühl, jedoch mit weniger aromatischer Helligkeit.',
    },
    {
      type: 'tip',
      title: 'Faustregel für professionelle Baristas',
      html: '<p>Bei Espressomaschinen mit Messing- oder Kupferkesseln sollten Sie niemals dauerhaft Profile mit einem KH-Wert unter 40 mg/L verwenden. Sehr reines Wasser ist langfristig korrosiv. Bei Filtermethoden (V60, Chemex, AeroPress) gibt es keinen Kessel zu schützen, sodass Sie problemlos feine Profile wie Melbourne verwenden können.</p>',
    },
  ],
  ui: {
    sectionMixTitle: 'Mischungskonfiguration',
    labelVolume: 'Endvolumen',
    labelProfile: 'Ziel-Wasserprofil',
    customProfileBtn: 'Benutzerdefiniert',
    labelGH: 'Ziel-GH',
    labelKH: 'Ziel-KH',
    concentratesTitle: 'Stammkonzentrat-Flaschen (g/100ml)',
    saltMgName: 'Magnesium (Bittersalz)',
    saltCaName: 'Calcium (CaCl2)',
    saltBufName: 'Bicarbonat (Natron)',
    recipeTitle: 'Rezept',
    labelMg: 'Magnesium:',
    labelCa: 'Calcium:',
    labelBuffer: 'Bicarbonate:',
    labelDistilledWater: 'Destilliertes Wasser bis',
    copyBtn: 'Rezept kopieren',
    copiedText: 'Kopiert!',
    safetyMetalsTitle: 'Metallsicherheit',
    safetyScaleTitle: 'Kalkrisiko',
    calculatingText: 'Berechnung...',
    glossaryTitle: 'Kurze Mineral-Übersicht',
    profileSubTemplate: 'Ziel: {gh} GH / {kh} KH',
    customProfileName: 'Benutzerdefiniert',
    corrosionHigh: 'Gefahr: Sehr aggressives Wasser. Kann Kessel und Kupferkomponenten korrodieren.',
    corrosionMedium: 'Akzeptabel: Moderates Korrosionsrisiko. Empfohlen für Filtermethoden, Vorsicht bei Maschinen.',
    corrosionLow: 'Sicher: Das Wasser hat ausreichend Pufferkapazität, um Metalle zu schützen.',
    scaleHigh: 'Gefahr: Unmittelbare Kalkbildung. Nur für manuelle Filtermethoden verwenden.',
    scaleMedium: 'Vorsicht: Kann im Laufe der Zeit Kalkablagerungen in Espressomaschinen verursachen.',
    scaleLow: 'Sicher: Kein signifikantes Risiko für Kalkablagerungen.',
    copyTemplate:
      'Kaffee-Wasser-Rezept ({profileName}):\n- Volumen: {liters}L\n- Magnesiumkonzentrat: {mg}ml\n- Calciumkonzentrat: {ca}ml\n- Bicarbonatkonzentrat: {buf}ml\n- Destilliertes Wasser: {water}ml',
    glossary0Term: 'Gesamthärte (GH)',
    glossary0Desc:
      'Die Summe aus Calcium und Magnesium. Magnesium verstärkt Süße und Komplexität; Calcium verleiht Körper und Textur.',
    glossary1Term: 'Alkalität (KH)',
    glossary1Desc:
      'Die Kapazität des Wassers, Säuren zu neutralisieren. Hohes KH unterdrückt die Kaffee-Säure; niedriges KH lässt ihn sauer schmecken.',
    glossary2Term: 'TDS (gelöste Feststoffe)',
    glossary2Desc: 'Bei mineralisiertem Wasser stellt TDS die kombinierte Konzentration aller zugesetzten Mineralsalze dar.',
    glossary3Term: 'Magnesium',
    glossary3Desc:
      'Extrahiert komplexe fruchtige Aromaverbindungen effizienter. Das bevorzugte Mineral für das Brühen von Specialty Coffee.',
  },
};
