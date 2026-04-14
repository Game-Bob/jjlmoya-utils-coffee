import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'kaffee-verhaeltnis-rechner';
const title = 'Kaffee Brühverhältnis Rechner';
const description =
  'Berechnen Sie die exakte Menge Kaffee in Gramm oder Wasser in Millilitern für Ihr ideales Brühverhältnis (1:15, 1:16...). Inklusive Tassenergebnis, Gießanleitung, Eiskaffee-Modus und gespeicherten Rezepten.';

const faqData = [
  {
    question: 'Was bedeutet ein 1:15 Kaffee-Verhältnis?',
    answer:
      'Das bedeutet, dass Sie für jedes Gramm gemahlenen Kaffee 15 Milliliter (oder Gramm) Wasser verwenden. Bei 20 g Kaffee gießen Sie also 300 ml Wasser auf. Dies ist das von der Specialty Coffee Association empfohlene Standardverhältnis für Filtermethoden wie V60, Chemex oder Aeropress.',
  },
  {
    question: 'Warum ist weniger Kaffee in meiner Tasse als ich aufgegossen habe?',
    answer:
      'Weil gemahlener Kaffee während der Extraktion Wasser zurückhält. Im Durchschnitt absorbiert jedes Gramm Kaffee etwa 2 ml Flüssigkeit. Wenn Sie 300 ml auf 20 g Kaffee gießen, erhalten Sie ca. 260 ml in der Tasse. Dieser Rechner zeigt Ihnen das reale Ergebnis an.',
  },
  {
    question: 'Was ist Bloom oder Pre-Infusion?',
    answer:
      'Dies ist der erste Wasserguss, der dem doppelten Gewicht des Kaffees entspricht (2 ml pro Gramm). Er dient dazu, frischen Kaffee zu entgasen: Das beim Rösten eingeschlossene CO2 entweicht und ermöglicht es dem Wasser, die Inhaltsstoffe gleichmäßig zu extrahieren. Wenn kein Bloom sichtbar ist, ist der Kaffee schon länger gemahlen oder geröstet.',
  },
  {
    question: 'Wie mache ich Eiskaffee, ohne dass er wässrig schmeckt?',
    answer:
      'Verwenden Sie die Flash-Chilling-Technik: Bereiten Sie 60 % des gesamten Wassers als heißes Wasser (90-96 Grad) vor und geben Sie die restlichen 40 % als Eis in die Karaffe. Gießen Sie den heißen Kaffee direkt über das Eis. Die schnelle Abkühlung versiegelt die Aromen. Dieser Rechner berechnet die Mengen automatisch neu, wenn Sie den Eiskaffee-Modus aktivieren.',
  },
  {
    question: 'Was ist das beste Verhältnis für die Aeropress?',
    answer:
      'Zwischen 1:12 und 1:15, je nach Vorliebe. Wenn Sie den Kaffee schwarz trinken, ist 1:15 ausgewogen. Wenn Sie ihn als Basis für Milchgetränke verwenden oder eine hohe Konzentration wünschen, gehen Sie auf 1:12 oder 1:13 herunter. Die Aeropress ist gerade deshalb so vielseitig, weil sie verschiedene Verhältnisse sehr gut verarbeitet.',
  },
  {
    question: 'Kann ich meine Lieblingsrezepte speichern?',
    answer:
      'Ja. Sobald Sie das perfekte Verhältnis und die optimale Menge für Ihren Lieblingskaffee gefunden haben, klicken Sie auf "Rezept speichern", geben Sie ihm einen Namen (z. B. "Morgendlicher V60") und es wird in Ihrem Browser gespeichert. Sie können es jederzeit mit einem Klick wieder aufrufen.',
  },
];

const howToData = [
  {
    name: 'Berechnungsmodus wählen',
    text: 'Wählen Sie aus, ob Sie von der vorhandenen Kaffeemenge (g) oder der Kapazität Ihrer Tasse (ml Wasser) ausgehen möchten. Der Rechner passt alle Ergebnisse an den gewählten Modus an.',
  },
  {
    name: 'Menge eingeben',
    text: 'Geben Sie die Gramm Kaffee oder Milliliter Wasser ein, die Sie verwenden möchten. Der Rechner berechnet automatisch den anderen Wert basierend auf dem gewählten Verhältnis.',
  },
  {
    name: 'Intensität wählen',
    text: 'Wählen Sie zwischen Stark (1:12-14), Ausgewogen (1:15-16), Mild (1:17-18) oder geben Sie Ihr eigenes Verhältnis ein. Jede Option entspricht einem anderen Geschmacksprofil.',
  },
  {
    name: 'Eiskaffee-Modus aktivieren (optional)',
    text: 'Wenn Sie Eiskaffee zubereiten, aktivieren Sie den Schalter. Der Rechner teilt das Wasser automatisch in heißes Wasser (60 %) und Eis (40 %) auf, basierend auf der Flash-Chilling-Technik.',
  },
  {
    name: 'Gießanleitung folgen',
    text: 'Nutzen Sie die Phasen-Anleitung (Bloom und finaler Aufguss), um Ihren Brühprozess zu strukturieren. Jede Phase zeigt genau an, wie viel Wasser wann gegossen werden sollte.',
  },
  {
    name: 'Rezept speichern',
    text: 'Wenn Sie Ihr perfektes Verhältnis gefunden haben, speichern Sie es unter einem aussagekräftigen Namen. Ihre Rezepte werden für zukünftige Sitzungen in Ihrem Browser gespeichert.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen zum Brühverhältnis',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen und SCA-Standards',
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
      text: 'Kaffee-Verhältnis-Rechner: Der ultimative Leitfaden zur perfekten Extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Brühen einer Tasse Specialty Coffee ist kein subjektiver kulinarischer Akt, sondern ein Experiment in <strong>Flüssigkeitschemie</strong> und <strong>Massentransfer</strong>. Im Zentrum dieses Prozesses steht das Konzept des <strong>Brühverhältnisses</strong>, ein kritisches Maß, das die quantitative Beziehung zwischen dem gelösten Stoff (gemahlener Kaffee) und dem Lösungsmittel (Wasser) bestimmt. Unser Rechner integriert die Standards der <em>Specialty Coffee Association (SCA)</em> und Prinzipien der angewandten Thermodynamik, um Baristas und Enthusiasten eine perfekte Reproduzierbarkeit ihrer Extraktionen zu ermöglichen.',
    },
    {
      type: 'summary',
      title: 'Was Sie über das Kaffee Verhältnis lernen werden',
      items: [
        '<strong>Brühverhältnis:</strong> Wie das Gewichtsverhältnis zwischen Kaffee und Wasser (z. B. 1:15) die potenzielle Stärke und das sensorische Profil Ihrer Tasse bestimmt.',
        '<strong>TDS und Extraktion:</strong> Die Wissenschaft hinter den gelösten Feststoffen und welcher Prozentsatz der Bohne tatsächlich in Ihrem Getränk landen sollte.',
        '<strong>Anpassung der Retention:</strong> Warum Kaffee 2 g Wasser pro Gramm Pulver absorbiert und wie man das zusätzlich benötigte Wasser berechnet.',
        '<strong>Spezifische Methoden:</strong> Die idealen Proportionen für V60, French Press, Espresso und Flash Brew Eiskaffee-Rezepte.',
      ],
    },
    {
      type: 'title',
      text: 'Was ist das Brühverhältnis und warum ist es die wichtigste Variable?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kaffee enthält ca. 30 % lösliches Material, aber nicht alles davon ist für den menschlichen Gaumen wünschenswert. Wasser, das als universelles Lösungsmittel fungiert, extrahiert Verbindungen in einer bestimmten Reihenfolge basierend auf ihrem Molekulargewicht und ihrer chemischen Affinität. Das Kaffee-Verhältnis steuert präzise, wie viel Lösungskapazität wir jedem Gramm Kaffee zur Verfügung stellen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Saure Phase (Lipide und organische Säuren):</strong> Diese lösen sich aufgrund ihrer hohen Löslichkeit zuerst auf. Sie tragen zur Helligkeit, Äpfel- oder Zitronensäure und fruchtigen Noten bei. Ein zu niedriges Verhältnis (Unterextraktion) stoppt den Prozess hier, was zu einer sauren und salzigen Tasse führt.',
        '<strong>Süße Phase (Zucker und Kohlenhydrate):</strong> Diese werden als Nächstes extrahiert. Sie sorgen für Ausgewogenheit, Süße und Körper. Dies ist das "goldene Fenster", in dem der Kaffee seine maximale aromatische Komplexität und strukturelle Balance erreicht.',
        '<strong>Bittere Phase (Fasern und phenolische Verbindungen):</strong> Diese lösen sich am langsamsten auf. Bei übermäßigen Verhältnissen (Überextraktion) zersetzt das Wasser die Kaffeezellen und extrahiert trockene Bitterstoffe, aschige und holzige Noten.',
      ],
    },
    {
      type: 'title',
      text: 'Empfohlene Verhältnisse: Proportionen nach Extraktionsmethode',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jede Extraktionsmethode erfordert aufgrund von Variablen wie Kontaktzeit, Pumpendruck oder Filterporengröße ein spezifisches Verhältnis. Die folgende technische Tabelle skizziert die Industriestandards für 2026:',
    },
    {
      type: 'table',
      headers: ['Brühmethode', 'Verhältnis (Gramm/Wasser)', 'Tassenprofil', 'Zielzeit'],
      rows: [
        ['Espresso', '1:2 bis 1:2.5', 'Intensiv, viskos, dichte Crema', '25-30 Sek.'],
        ['V60 / Pour-Over', '1:15 bis 1:16', 'Sauber, hell, klare Noten', '2:30-3:30 Min.'],
        ['Aeropress', '1:12 bis 1:15', 'Vielseitig, mittlerer bis hoher Körper', '1:30-2:00 Min.'],
        ['French Press', '1:12 bis 1:14', 'Texturiert, schwer, ölig', '4:00-5:00 Min.'],
        ['Cold Brew', '1:8 bis 1:12', 'Süß, säurearm, viel Körper', '12-24 Stunden'],
      ],
    },
    {
      type: 'title',
      text: 'Berechnung des benötigten Wassers: Der Retention-Faktor der Bohne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Einer der häufigsten Fehler beim manuellen Brühen besteht darin, zu ignorieren, dass gemahlener Kaffee eine poröse, hydrophile Struktur ist, die eine konstante Menge Wasser zurückhält. Nicht alles Wasser, das Sie aufgießen, landet am Ende in der Tasse.',
    },
    {
      type: 'paragraph',
      html: 'Wissenschaftlich gesehen hält gemahlener Kaffee ca. <strong>2,0 Gramm Wasser pro 1,0 Gramm Kaffee</strong> zurück. Unser Rechner führt die <strong>Dynamische Retentions-Anpassung</strong> ein: Wenn Sie einen bestimmten 300-ml-Behälter füllen möchten, leitet das System ab, dass Sie 340 ml Wasser gießen müssen, um die Absorption durch das Korn zu kompensieren, wobei das Extraktionsverhältnis — und damit der Geschmack — intakt bleibt.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Kaffeemenge', value: '20g', icon: 'mdi:coffee' },
        { label: 'Gegossenes Wasser', value: '300ml', icon: 'mdi:water' },
        { label: 'Retention (Rückhalt)', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'In der Tasse', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'Die Bedeutung des Bloom: Entgasung für gleichmäßige Extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die "Bloom"-Phase ist nicht nur ästhetisch, sondern eine physikalische Notwendigkeit. Während des Röstens bildet Kaffee CO2, das in seiner Zellmatrix eingeschlossen wird. Wenn wir das gesamte Wasser kontinuierlich aufgießen, entweicht das Gas heftig, erzeugt Mikrokanäle (Channeling) und verhindert, dass das Lösungsmittel in das Zentrum der Kaffeepartikel eindringt.',
    },
    {
      type: 'tip',
      title: 'Technik der homogenen Sättigung',
      html: '<p>Für einen perfekten Bloom gießen Sie genau das doppelte Gewicht des Kaffees an Wasser auf (1:2 Bloom-Verhältnis). Rühren Sie vorsichtig um oder schwenken Sie den Filter, um sicherzustellen, dass der gesamte Kaffee nass ist. Warten Sie 30-45 Sekunden. Die Gasfreisetzung ermöglicht es den nachfolgenden Aufgüssen, laminar zu fließen und die Feststoffe gleichmäßig aus dem Kaffeebett zu extrahieren.</p>',
    },
    {
      type: 'title',
      text: 'Eiskaffee-Tutorial: Wie man Eiskaffee brüht, ohne den Geschmack zu verwässern',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Für Specialty Eiskaffee (Flash Brew) ist eine thermodynamische Neukalibrierung erforderlich. Das Ziel ist es, flüchtige Öle bei 94 °C zu extrahieren, um die aromatische Komplexität einzufangen, und sie dann schnell abzukühlen, um Oxidation und den Verlust von Helligkeit zu vermeiden.',
    },
    {
      type: 'list',
      items: [
        '<strong>60 % heißes Wasser:</strong> Die Mindestmenge, die benötigt wird, um eine Extraktion von 18-20 % zu erreichen, ohne das Bett zu schnell abzukühlen.',
        '<strong>40 % thermisches Eis:</strong> Wird in die Auffangkaraffe gegeben. Die thermische Energie des Kaffees überträgt sich auf das Eis (latente Schmelzwärme) und kühlt das Getränk sofort auf unter 5 °C ab.',
        '<strong>Finale Stärke:</strong> Kombiniert bleibt das finale Verhältnis (z. B. 1:15) exakt gleich, was zu einem lebendigen, kalten Getränk mit der richtigen Geschmackskonzentration führt.',
      ],
    },
    {
      type: 'title',
      text: 'Mahlgrad und Kaffee-Verhältnis: Der Schlüssel zur Kontaktoberfläche',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Verhältnis ist nur die halbe Miete. Der Mahlgrad bestimmt die <strong>gesamte exponierte Oberfläche</strong> für das Lösungsmittel. Kleinere Partikel (feiner Mahlgrad) haben eine proportional größere Oberfläche, was die Extraktion der chemischen Verbindungen drastisch beschleunigt.',
    },
    {
      type: 'title',
      text: 'Reproduzierbarkeit und Wissenschaft: Verwandeln Sie Ihre Küche in ein Barista-Labor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Exzellenz bei Specialty Coffee kommt von konsequenten Messungen. Unsere Funktion für <strong>benutzerdefinierte Rezepte</strong> ermöglicht es Ihnen, ein technisches Verzeichnis Ihrer erfolgreichen Kalibrierungen zu erstellen. Es ist nicht nur ein Favoriten-Ordner, sondern ein Analyse-Tool, um zu vergleichen, wie dasselbe Kilo Kaffee auf ein Verhältnis von 1:15 im Vergleich zu 1:16 reagiert, sodass Sie das Rezept präzise anpassen können.',
    },
  ],
  ui: {
    modeCoffee: 'Ich habe den Kaffee',
    modeHintCoffee: 'Berechne mir die Wassermenge',
    modeWater: 'Ich habe das Wasser',
    modeHintWater: 'Sag mir, wie viel Kaffee ich mahlen soll',
    inputLabelCoffee: 'Kaffeemenge in Gramm',
    inputLabelWater: 'Tassengröße (ml)',
    intensityLabel: 'Kaffee-Intensität',
    intensityStrong: 'Stark',
    intensityBalanced: 'Ausgewogen',
    intensityLight: 'Mild',
    intensityCustom: 'Individuell',
    customCoffeeLabel: 'Kaffee',
    customWaterLabel: 'Wasser',
    icedModeLabel: 'Eiskaffee-Modus',
    recipeLabel: 'Ihr exaktes Rezept',
    resultTitle: 'Ergebnis',
    resultCoffeeLabel: 'Kaffee',
    resultCoffeeSub: 'Fein-mittlerer Mahlgrad',
    resultHotWaterLabel: 'Heißes Wasser',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'Heißes Wasser (60%)',
    resultIceLabel: 'Eis',
    resultIceSub: 'In der Karaffe',
    resultCupLabel: 'In der Tasse',
    resultCupSub: 'Kaffee hält ~2ml/g zurück',
    pouringGuideLabel: 'Gießanleitung',
    favoritesLabel: 'Meine Lieblingsrezepte',
    saveBtn: '+ Rezept speichern',
    favEmptyText: 'Noch keine Rezepte gespeichert. Brühen Sie Ihren perfekten Kaffee und speichern Sie ihn.',
    modalTitle: 'Name für das Rezept',
    modalPlaceholder: 'z.B.: "Morgendlicher V60"',
    modalCancel: 'Abbrechen',
    modalConfirm: 'Speichern',
    phaseBloomTemplate: 'Bloom: Gießen Sie {bloomMl} ml Wasser spiralförmig auf. Warten Sie {bloomSeconds} Sekunden, damit der Kaffee entgasen kann.',
    phasePourTemplate: 'Finaler Aufguss: Den Rest in {pourCount} langsamen Güssen hinzufügen, bis {hotWaterMl} ml erreicht sind.',
    phaseIcedTemplate: 'Eis: Gießen Sie den heißen Kaffee direkt über die {iceMl} g Eis in der Karaffe.',
    cupWarningTemplate: 'Die Tasse erhält nur {inCupMl} ml. Kaffee bindet Flüssigkeit.',
    favModeCoffee: 'g Kaffee',
    favModeWater: 'ml Wasser',
    favModeIced: ' - Eis',
  },
};
