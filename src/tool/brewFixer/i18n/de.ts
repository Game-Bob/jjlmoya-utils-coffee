import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Säuerlich / Sauer',
    bitter: 'Bitter / Verbrannt',
    watery: 'Wässrig / Schwach',
    astringent: 'Astringierend / Trocken',
  },
  causes: {
    acidic: ['Mahlgrad zu grob (Unterextraktion)', 'Wassertemperatur zu niedrig', 'Brühzeit zu kurz', 'Kaffee zu frisch (nicht entgast)'],
    bitter: ['Mahlgrad zu fein (Überextraktion)', 'Wassertemperatur zu hoch', 'Brühzeit zu lang', 'Alter oder dunkel gerösteter Kaffee'],
    watery: ['Mahlgrad zu grob (schwache Extraktion)', 'Brühverhältnis zu hoch (zu viel Wasser)', 'Brühzeit zu kurz', 'Kaffee zu alt oder von geringer Qualität'],
    astringent: ['Wasserqualitätsprobleme (zu viele Mineralien)', 'Überextraktion kombiniert mit Mineralgehalt', 'Mahlgrad zu fein bei hartem Wasser', 'Brühtemperatur zu hoch'],
  },
  solutions: {
    acidic: 'Das Wasser fließt zu schnell durch das grobe Kaffeemehl, ohne Körper zu extrahieren. Ein feinerer Mahlgrad vergrößert die Kontaktfläche und verlangsamt den Durchfluss.',
    bitter: 'Das Wasser hat zu lange extrahiert und dabei bittere und aschige Verbindungen gelöst. Ein gröberer Mahlgrad reduziert die Kontaktzeit und die Extraktionsintensität.',
    watery: 'Nicht genügend gelöste Feststoffe in Ihrer Tasse. Ein feinerer Mahlgrad oder eine höhere Kaffeedosis erhöht den Extraktionsprozentsatz und den Körper.',
    astringent: 'Mineralreiches Wasser überextrahiert und bindet sich an Kaffeeverbindungen, was ein trockenes Mundgefühl erzeugt. Ein gröberer Mahlgrad reduziert die Überextraktion, während Filtern die Wasserqualität verbessert.',
  },
  actions: {
    acidic: { text: 'Etwas feiner mahlen', textSevere: 'Viel feiner mahlen', icon: 'mdi:chevron-left' },
    bitter: { text: 'Etwas gröber mahlen', textSevere: 'Viel gröber mahlen', icon: 'mdi:chevron-right' },
    watery: { text: 'Feiner mahlen oder 5g mehr Kaffee verwenden', textSevere: 'Viel feiner mahlen oder 7g mehr Kaffee verwenden', icon: 'mdi:plus-circle' },
    astringent: { text: 'Gefiltertes Wasser verwenden und gröber mahlen', textSevere: 'Gefiltertes Wasser verwenden und viel gröber mahlen', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Wie feines Salz', bitter: 'Wie Mehl', watery: 'Wie Kakaopulver', astringent: 'Etwas feineres Mehl' },
    pourover: { acidic: 'Wie Tafelsalz', bitter: 'Wie grober Sand', watery: 'Wie feines Maismehl', astringent: 'Feiner Sand' },
    aeropress: { acidic: 'Wie feines Maismehl', bitter: 'Wie Tafelsalz', watery: 'Wie fein gemahlener Pfeffer', astringent: 'Mittlerer Sand' },
    frenchpress: { acidic: 'Wie Semmelbrösel', bitter: 'Wie Steinsalz', watery: 'Wie Meersalz', astringent: 'Grober Sand' },
    moka: { acidic: 'Wie feines Meersalz', bitter: 'Wie feiner Sand', watery: 'Wie Tafelsalz', astringent: 'Mittelfeiner Sand' },
    coldbrew: { acidic: 'Wie grobes Meersalz', bitter: 'Wie Kies', watery: 'Wie Steinsalz', astringent: 'Grober Sand mit Körnern' },
  },
  secondaryAction: 'Brühen bei {temp}°C für {time}',
  tertiaryAction: 'Lassen Sie den Kaffee auf Raumtemperatur abkühlen, bevor Sie ihn probieren, um alle Noten zu erfassen.',
};

const slug = 'kaffee-extraktions-diagnose-braufehler';
const title = 'Kaffee Extraktions Diagnose: Der Brew Fixer';
const description =
  'Diagnostiziere in Sekundenschnelle, warum dein Kaffee nicht schmeckt. Erhalte personalisierte Anpassungen für Mahlgrad, Temperatur und Zeit basierend auf deiner Methode.';

const faqData = [
  {
    question: 'Woher weiß ich, ob mein Kaffee unter- oder überextrahiert ist?',
    answer:
      'Unterextraktion (saurer/essigartiger Geschmack) bedeutet, dass das Wasser zu schnell durchgelaufen ist, ohne genug Inhaltsstoffe zu lösen. Überextraktion (bitterer/verbrannter Geschmack) bedeutet, dass das Wasser zu lange Kontakt mit dem Kaffee hatte. Der Brew Fixer hilft dir, das Problem anhand deines Geschmacksprofils und deiner Methode zu identifizieren.',
  },
  {
    question: 'Was ist der häufigste Fehler beim Kaffeekochen?',
    answer:
      'Der Mahlgrad. Die meisten Menschen mahlen entweder zu grob (schwacher, saurer Kaffee) oder zu fein (bitterer, überextrahierter Kaffee). Die Einstellung deiner Mühle auf die exakte Größe für deine Methode ist die effektivste Anpassung, die du vornehmen kannst.',
  },
  {
    question: 'Spielt die Temperatur wirklich eine so große Rolle?',
    answer:
      'Ja. Die Wassertemperatur steuert die Extraktionsgeschwindigkeit. Zu kalt und du unterextrahierst (sauer). Zu heiß und du überextrahierst (bitter). Jede Methode hat einen idealen Bereich: Handfilter (V60) bevorzugen 92-96°C, während die French Press bei 85-90°C besser funktioniert, um Überextraktion während der langen Ziehzeit zu vermeiden.',
  },
  {
    question: 'Warum ist mein Kaffee adstringierend oder hinterlässt ein trockenes Mundgefühl?',
    answer:
      'Adstringenz wird meist durch mineralhaltiges Wasser oder eine Kombination aus Überextraktion und Mineralien verursacht. Versuche es mit gefiltertem Wasser und einem etwas gröberen Mahlgrad. Wenn das nicht hilft, ist der TDS-Wert deines Wassers eventuell zu hoch – ein Wasserfilter kann hier Abhilfe schaffen.',
  },
  {
    question: 'Kann ich einen schlechten Kaffee nur durch Temperatur und Zeit retten?',
    answer:
      'Temperatur und Zeit helfen, aber der Mahlgrad ist meist die Ursache. Wenn dein Mahlgrad zu grob ist, hilft längeres oder heißeres Brühen nur minimal. Der Brew Fixer wird immer den Mahlgrad als primäre Maßnahme empfehlen, da er den größten Einfluss auf die Extraktion hat.',
  },
  {
    question: 'Sollte ich für alle meine Kaffees das gleiche Rezept verwenden?',
    answer:
      'Nein. Sehr frischer Kaffee (1-5 Tage alt) extrahiert schneller und braucht eventuell einen etwas gröberen Mahlgrad als älterer Kaffee. Helle Röstungen sind dichter und benötigen oft feinere Mahlgrade; dunkle Röstungen sind poröser und bevorzugen gröbere Mahlgrade.',
  },
];

const howToData = [
  {
    name: 'Wähle deine Zubereitungsmethode',
    text: 'Wähle den Kaffeebereiter aus, den du verwendet hast: Handfilter, French Press, Aeropress, Espressokocher (Moka), Espressomaschine oder Cold Brew. Das Tool gibt dir dann methodenspezifische Empfehlungen.',
  },
  {
    name: 'Identifiziere den dominanten Geschmacksfehler',
    text: 'Probiere deinen Kaffee und wähle den Geschmack aus, der am meisten hervorsticht: sauer, bitter (verbrannt), wässrig (schwach) oder adstringierend (trocken). Du kannst auch einen zweiten Fehler wählen.',
  },
  {
    name: 'Bewerte die Intensität',
    text: 'Bewege den Schieberegler, um anzugeben, wie stark der Fehler ist. "Leicht" bedeutet kaum wahrnehmbar; "stark" bedeutet, dass er die ganze Tasse dominiert. Dies hilft dem Tool bei der Kalibrierung.',
  },
  {
    name: 'Starte die Diagnose',
    text: 'Klicke auf "Diagnose erstellen" und das Tool analysiert deine Eingaben. Du erhältst eine Hauptempfehlung (meist Mahlgrad), Nebenmaßnahmen (Temperatur und Zeit) sowie eine Textur-Referenz.',
  },
  {
    name: 'Anpassen und Testen',
    text: 'Setze die Empfehlung um (z. B. gröber mahlen, länger brühen). Bereite eine neue Tasse zu und probiere sie. Kleine Anpassungen summieren sich, also hab etwas Geduld.',
  },
  {
    name: 'Gib Feedback',
    text: 'Sobald du die nächste Tasse probiert hast, teile dem Tool mit, ob es besser geworden ist. Wenn ja, erscheint Konfetti! Wenn nicht, geh zurück und versuche andere Parameter.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen zur Kaffee-Extraktion',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen und Kaffeewissenschaft',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Extraktions-Richtlinien',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao: The Coffee Roaster\'s Companion',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle: Espresso-Extraktions-Guide',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind: Kaffee-Extraktion verstehen',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger: Geschmacksnoten im Kaffee artikulieren',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum schmeckt dein Kaffee nicht? Der Extraktions-Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Unterschied zwischen einem exzellenten Espresso und einer Tasse, die nach verbranntem Papier schmeckt, liegt in einem einzigen Konzept: <strong>der Kaffee-Extraktion</strong>. Extraktion ist der Prozess, bei dem Wasser lösliche Verbindungen aus dem Kaffeemehl löst. Wenn du es richtig machst, erhältst du Komplexität, Süße und Klarheit. Wenn nicht, schmeckt es sauer, bitter oder schwach.',
    },
    {
      type: 'summary',
      title: 'Was du vom Brew Fixer lernst',
      items: [
        '<strong>Extraktionsfehler diagnostizieren:</strong> Identifiziere, ob dein Kaffee unter- oder überextrahiert ist oder ob es an der Wasserqualität liegt.',
        '<strong>Die drei Hebel der Extraktion:</strong> Mahlgrad, Wassertemperatur und Kontaktzeit. Was solltest du zuerst anpassen? Der Brew Fixer sagt es dir.',
        '<strong>Methodenspezifische Empfehlungen:</strong> Der ideale Mahlgrad für einen V60 unterscheidet sich völlig von dem für eine French Press. Erhalte individuelle Tipps.',
        '<strong>Textur-Referenzen:</strong> Erfahre genau, welchen Mahlgrad du anstreben solltest, indem du ihn mit bekannten Materialien vergleichst (feines Pulver, Meersalz, Sand).',
      ],
    },
    {
      type: 'title',
      text: 'Die drei Dimensionen der Kaffee-Extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Extraktionsrate ist die Masse der gelösten Stoffe geteilt durch die Masse des trockenen Kaffees. Specialty Coffee strebt eine <strong>Extraktion von 18-20%</strong> an. Alles darunter schmeckt sauer, alles darüber bitter.',
    },
    {
      type: 'list',
      items: [
        '<strong>Der Mahlgrad</strong> steuert die Oberfläche. Feine Mahlgrade extrahieren schneller, da das Wasser mehr Angriffsfläche hat. Grobe Mahlgrade extrahieren langsamer.',
        '<strong>Die Wassertemperatur</strong> steuert die Lösungsgeschwindigkeit. Heißes Wasser (94-96°C) extrahiert schneller; kühleres Wasser (85-90°C) langsamer.',
        '<strong>Die Kontaktzeit</strong> gibt an, wie lange das Wasser mit dem Kaffee in Berührung ist. Handfilter (2:30-3:30 Min), French Press (4:00-5:00 Min).',
      ],
    },
    {
      type: 'title',
      text: 'Sauren Kaffee diagnostizieren (Unterextraktion)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saurer Kaffee schmeckt nach Zitrone oder Apfel – scharf und bissig. Es bedeutet, dass das Wasser nicht genug Zeit hatte, Stoffe zu lösen. Die Lösung ist fast immer: <strong>feiner mahlen</strong>, um die Oberfläche zu vergrößern und den Wasserfluss zu bremsen.',
    },
    {
      type: 'list',
      items: [
        'Mahle den Kaffee feiner (verringere den Mahlgrad um 5-10 µm)',
        'Oder verlängere die Brühzeit leicht (plus 15-30 Sekunden)',
        'Oder erhöhe die Wassertemperatur auf 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Bitteren Kaffee diagnostizieren (Überextraktion)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bitterer Kaffee schmeckt verbrannt, aschig oder holzig. Das Wasser hat zu lange extrahiert – über den Punkt der gewünschten Stoffe hinaus. Die Lösung ist: <strong>gröber mahlen</strong>, um den Wasserfluss zu erhöhen und die Kontaktzeit zu verkürzen.',
    },
    {
      type: 'list',
      items: [
        'Mahle den Kaffee gröber (erhöhe den Mahlgrad um 5-10 µm)',
        'Oder verkürze die Brühzeit (minus 15-30 Sekunden)',
        'Oder senke die Wassertemperatur auf 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Wässrigen Kaffee diagnostizieren (schwach, dünn)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Schwacher Kaffee hat kaum Aroma oder Körper. Meist ist der Mahlgrad zu grob, das Brühverhältnis zu hoch (zu viel Wasser) oder der Kaffee ist alt. Das Justieren der Mühle ist hier der schnellste Weg.',
    },
    {
      type: 'list',
      items: [
        'Wähle einen feineren Mahlgrad für mehr Extraktionsfläche',
        'Nimm mehr Kaffee (erhöhe das Kaffeeverhältnis)',
        'Brühe etwas länger oder mit heißerem Wasser',
      ],
    },
    {
      type: 'title',
      text: 'Adstringierenden Kaffee diagnostizieren (trocken, mineralisch)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Adstringenz fühlt sich pelzig oder trocken auf der Zunge an. Ursache ist meist hartes Wasser kombiniert mit Überextraktion. Hier müssen oft sowohl der Mahlgrad <em>als auch</em> die Wasserqualität angepasst werden.',
    },
    {
      type: 'list',
      items: [
        'Nutze gefiltertes Wasser (Ziel-TDS 60-150 ppm)',
        'Mahle gröber, um Überextraktion zu vermeiden',
        'Versuche es mit etwas kühlerem Wasser (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Mahlgrad-Tabelle: Aussehen und Gefühl',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Mahlgrad', 'Partikelgröße', 'Textur-Referenz', 'Beste Methoden'],
      rows: [
        ['Extra Fein', '5-15 µm', 'Feines Puder, Kakao', 'Espresso, Türkisch'],
        ['Fein', '15-30 µm', 'Puderzucker', 'Espressokocher, Aeropress'],
        ['Mittel-Fein', '30-50 µm', 'Sand, Tafelsalz', 'V60, Chemex, Handfilter'],
        ['Mittel', '50-70 µm', 'Strandsand', 'Kaffeemaschine, Flachbodenfilter'],
        ['Grob', '70-90 µm', 'Grober Sand, Meersalz', 'French Press, Cupping'],
        ['Extra Grob', '90+ µm', 'Pfefferkörner, Semmelbrösel', 'Cold Brew, Perkolator'],
      ],
    },
    {
      type: 'title',
      text: 'Wasserqualität: TDS und die Wirkung auf die Extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Total Dissolved Solids (TDS) misst den Mineralgehalt im Wasser. Leitungswasser variiert stark: von 50 ppm (weich) bis 300+ ppm (hart). Kaffee reagiert extrem sensibel auf Wasserqualität.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zu weich (0-50 ppm):</strong> Wasser extrahiert zu aggressiv, Kaffee schmeckt salzig.',
        '<strong>Ideal (60-150 ppm):</strong> Süße, balancierte Extraktion mit vollem Körper.',
        '<strong>Zu hart (200+ ppm):</strong> Mineralien binden Aromen, sorgen für Adstringenz.',
      ],
    },
    {
      type: 'tip',
      title: 'Schneller Wasser Tipp',
      html: '<p>Wenn du hartes Wasser vermutest, brühe einen Vergleich mit gefiltertem oder Flaschenwasser. Schmeckt es sofort besser? Dann investiere in einen Tischfilter (Brita) oder eine Filteranlage.</p>',
    },
  ],
  ui: {
    methodLabel: 'Was brühst du gerade?',
    methodPourover: 'Handfilter / Pour Over',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Espressokocher / Moka',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Wähle dein Brühgerät aus',
    flavorLabel: 'Wie schmeckt es?',
    flavorAcidic: 'Sauer / Essigartig',
    flavorBitter: 'Bitter / Verbrannt',
    flavorWatery: 'Wässrig / Schwach',
    flavorAstringent: 'Adstringierend / Trocken',
    flavorHint: 'Wähle bis zu 2 Merkmale',
    severityLabel: 'Wie stark ist das Problem?',
    severitySlightLabel: 'Kaum merklich',
    severityModerateLabel: 'Mittelstark',
    severitySevereLabel: 'Überwältigend',
    diagnoseBtn: 'Kaffee diagnostizieren',
    resetBtn: 'Zurücksetzen',
    resultTitle: 'Diagnose abgeschlossen',
    resultExplanation: 'Was in deiner Tasse passiert',
    actionMainLabel: 'Hauptmaßnahme',
    actionSecondaryLabel: 'Temperatur & Zeit',
    actionTertiaryLabel: 'Profi-Tipp',
    textureReferenceLabel: 'Textur-Referenz',
    improvementHint: 'Passe die Einstellung an und brühe eine neue Tasse.',
    copyDiagnosisBtn: 'Diagnose kopieren',
    feedbackLabel: 'Hat sich der Geschmack verbessert?',
    feedbackSuccessTemplate: 'Klasse! Die Anpassung hat funktioniert.',
    methodPouroverDesc: 'V60, Chemex, Handfilter',
    methodFrenchpressDesc: 'Stempelkanne, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Espressokocher, Herdkanne',
    methodEspressoDesc: 'Siebträgermaschine',
    methodColdbrewDesc: 'Immersion, kalt',
    fadeOutMessage: 'Gute Arbeit! Viel Spaß beim weiteren Abstimmen.',
    backBtn: 'Zurück',
    mainIssueLabel: 'Hauptproblem',
    improvedBtn: 'Verbessert',
    notYetBtn: 'Noch nicht',
    copiedBtn: 'Kopiert!',
    combinedLabel: 'Kombiniert',
    diagnosisTitle: 'The Brew Fixer Diagnose',
    issueLabel: 'Problem',
    causeLabel: 'Ursache',
    actionLabel: 'Maßnahme',
    whyLabel: 'Grund',
    nextLabel: 'Nächster Schritt',
  },
};
