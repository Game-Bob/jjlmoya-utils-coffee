import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kaffee-timer';
const title = 'Kaffee Timer für die Zubereitung';
const description =
  'Professioneller Timer für Spezialitätenkaffee mit Aufgussphasen, Audio-Signalen für den Rhythmus und Extraktionszusammenfassung. Optimiert für V60, Chemex und Aeropress.';

const faqData = [
  {
    question: 'Warum sollte ich diesen Timer anstelle meines Telefons benutzen?',
    answer:
      'Dieser Timer wurde speziell für Kaffee entwickelt. Er umfasst visuelle Phasen (Bloom, Aufguss, Ablauf), Audio-Signale 3 Sekunden vor jedem Übergang und ermöglicht es Ihnen, Ihr komplettes Rezept zu konfigurieren, damit Sie beim Aufgießen nie den Rhythmus verlieren.',
  },
  {
    question: 'Was ist die Bloom-Zeit?',
    answer:
      'Es ist die anfängliche Vorinfusion (in der Regel 30 bis 45 Sekunden), bei der eine kleine Menge Wasser aufgegossen wird, um CO2 freizusetzen. Der Timer hebt diese Phase bernsteinfarben hervor, damit Sie wissen, wann Sie warten und wann Sie weiter gießen müssen.',
  },
  {
    question: 'Woher weiß ich, ob meine Extraktionszeit korrekt ist?',
    answer:
      'Bei einer Standard-V60 sollte die Gesamtzeit zwischen 2:30 und 3:15 Minuten liegen. Wenn es früher fertig ist, ist Ihr Mahlgrad zu grob. Wenn es länger dauert, ist er zu fein. Der Timer ermöglicht es Ihnen, diesen Prozess genau zu diagnostizieren.',
  },
  {
    question: 'Gibt es Audio-Signale?',
    answer:
      'Ja. Das System gibt einen kurzen Signalton ab, bevor die Bloom-Phase endet und am Ende des Prozesses, damit Sie sich auf den Wasserstrahl konzentrieren können, ohne ständig auf den Bildschirm schauen zu müssen.',
  },
  {
    question: 'Ist er mit Chemex kompatibel?',
    answer:
      'Absolut. Sie können die Gesamtzeit auf 4:30 oder 5:00 Minuten (typisch für Chemex aufgrund des dicken Filters) im Einstellungsbereich unten anpassen.',
  },
  {
    question: 'Funktioniert er auf dem Handy?',
    answer:
      'Er ist für die mobile Nutzung optimiert, mit großen Tasten, die auch mit nassen Händen oder während des Haltens Ihres Schwanenhalskessels leicht zu bedienen sind.',
  },
];

const howToData = [
  {
    name: 'Konfigurieren Sie Ihr Rezept',
    text: 'Passen Sie im unteren Bereich die Gesamtwassermenge, die Bloom-Wassermenge, die Bloom-Zeit und die Gesamtzeit entsprechend Ihrer Brühmethode (V60, Chemex, Aeropress) an.',
  },
  {
    name: 'Drücken Sie den Start-Knopf',
    text: 'Drücken Sie die große Start-Taste. Der Timer beginnt und zeigt die aktive Phase im Fortschrittsbalken oben an.',
  },
  {
    name: 'Bloom-Phase',
    text: 'Gießen Sie das Bloom-Wasser (auf dem Bildschirm angezeigt) spiralförmig auf und warten Sie, bis der Timer voranschreitet. Sie erhalten 3 Sekunden vor Ende ein Audio-Signal.',
  },
  {
    name: 'Aufguss-Phase',
    text: 'Gießen Sie das restliche Wasser weiter auf, bis Sie das Gesamtgewicht erreicht haben. Gießen Sie in langsamen, stetigen Kreisen für eine gleichmäßige Extraktion.',
  },
  {
    name: 'Ablauf-Phase',
    text: 'Warten Sie, bis der Kaffee vollständig durch den Filter abgelaufen ist. Diese Phase schließt die Extraktion ab und bestimmt die Klarheit und den Abgang Ihrer Tasse.',
  },
  {
    name: 'Überprüfen Sie die Zusammenfassung',
    text: 'Wenn Sie fertig sind, zeigt der Timer die Gesamtzeit und das aufgegossene Wasser an. Notieren Sie diese Werte zusammen mit Ihren Geschmackseindrücken, um das Rezept zu verfeinern.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen zum Kaffee-Timer',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen und SCA-Protokolle',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kaffee-Timer: Die Wissenschaft des Extraktions-Timings (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der Welt des Spezialitätenkaffees ist die <strong>Kontaktzeit</strong> zwischen Wasser und Kaffeemehl kein einfacher Wartewert; sie ist der kinetische Faktor, der entscheidet, welche chemischen Verbindungen in Ihrer Tasse landen. Eine einzige Sekunde zu viel kann den Wechsel von karamelliger Süße zu aschiger Bitterkeit bedeuten. Unser professionelles Timing-Tool für V60, Chemex und Aeropress fungiert als <strong>Rhythmus-Assistent</strong> und macht Präzision auf Barista-Niveau zu Hause zugänglich.',
    },
    {
      type: 'summary',
      title: 'Warum ein spezialisierter Timer wichtig ist',
      items: [
        '<strong>Kinetische Kontrolle:</strong> Die Rate, mit der Wasser Kaffeebestandteile löst, ist konstant. Die Zeit ist Ihre Bremse und Ihr Gaspedal.',
        '<strong>Aufgussphasen:</strong> Kaffee extrahiert nicht linear. Die Unterteilung der Zeit in Bloom, Aufguss und Ablauf ist entscheidend.',
        '<strong>Reproduzierbarkeit:</strong> Wenn Sie die Zeit nicht messen, können Sie Ihre besten Tassen nicht wiederholen. Konsistenz ist die Grundlage für Qualität.',
        '<strong>Anpassung des Mahlgrads:</strong> Die Endzeit sagt Ihnen, ob Sie beim nächsten Mal feiner oder gröber mahlen sollten.',
      ],
    },
    {
      type: 'title',
      text: 'Die Extraktions-Timeline: Was passiert in jeder Sekunde?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn heißes Wasser den Kaffee berührt, beginnt ein molekularer Hindernislauf. Nicht alle Aromen werden gleichzeitig extrahiert. Das Verständnis dieses Zeitplans macht den Unterschied zwischen einem Amateur und einem professionellen Barista aus:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sekunden 0 bis 45 (Bloom):</strong> Dies ist die Entgasungsphase. CO2, das beim Rösten eingeschlossen wurde, blockiert das Eindringen von Wasser. Das Warten hier ermöglicht es der Bohne, sich zu öffnen und den Weg für eine gleichmäßige Extraktion freizumachen.',
        '<strong>Sekunden 45 bis 120 (Säure- und Süßeextraktion):</strong> Wasser fließt und löst Mineralsalze, organische Säuren und komplexe Zucker. Dies ist das Herzstück des Geschmacks.',
        '<strong>Sekunden 120 bis 210 (Körper und Abgang):</strong> Schwerere Fasern und bittere Verbindungen werden extrahiert. Wenn diese Phase zu lange dauert, wird der Kaffee adstringierend.',
      ],
    },
    {
      type: 'title',
      text: 'Die Bloom-Phase: Warum 30 Sekunden der Standard sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beim <strong>Bloom</strong> oder der Vorinfusion gießen wir etwa die doppelte Menge des Kaffeegewichts an Wasser auf. Diese ersten 30 Sekunden dienen dazu, Kohlendioxid auszustoßen. Wenn diese Zeit nicht eingehalten wird, drückt das Gas das Wasser nach außen, wodurch Kanäle entstehen, durch die die Flüssigkeit fließt, ohne den Kaffee zu berühren (Channeling), was zu einer wässrigen und inkonsistenten Tasse führt.',
    },
    {
      type: 'table',
      headers: ['Phase', 'Empfohlene Zeit', 'Technische Aktion', 'Chemischer Zweck'],
      rows: [
        ['Bloom', '30 bis 45 Sek.', '2x Kaffeegewicht aufgießen', 'Entgasung (CO2)'],
        ['Erster Aufguss', '45 bis 90 Sek.', 'Langsame Kreise', 'Säure- und Süßeextraktion'],
        ['Zweiter Aufguss', '90 bis 150 Sek.', 'Sanfter zentraler Aufguss', 'Balance und Körper'],
        ['Ablauf', 'Bis zum Ende', 'Gleichmäßiges Tropfen', 'Klarheit und Abgang'],
      ],
    },
    {
      type: 'title',
      text: 'Einfluss der Zeit auf den Mahlgrad: Die Feedback-Schleife',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Timer ist Ihr bestes Diagnoseinstrument für die Mühle. Wenn Ihr V60-Rezept 3:00 Minuten dauern sollte und das Wasser bereits nach 2:15 vollständig abgelaufen ist, wird der Kaffee wahrscheinlich sauer und schwach schmecken (Unterextraktion). Die Lösung besteht nicht darin, langsamer aufzugießen, sondern <strong>feiner zu mahlen</strong>, damit die Partikel dem Wasser mehr Widerstand leisten.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Ideale V60-Zeit', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Ideale Chemex-Zeit', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Ideale Aeropress-Zeit', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Rhythmus-Signale: Warum der Audio-Assistent unverzichtbar ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Brühen von Filterkaffee erfordert ständige visuelle Aufmerksamkeit für Ihre Waage und Ihr Aufgussmuster. Unser Timer enthält <strong>Proximity-Audio-Signale</strong>, die 3 Sekunden vor Beginn des nächsten Aufgusses oder vor Ende des Blooms ertönen. Es ist der Unterschied zwischen einer fließenden Extraktion und einer voller Unterbrechungen.',
    },
    {
      type: 'tip',
      title: 'Tipp vom Wettbewerbs Barista',
      html: '<p>Halten Sie den Wasserfluss so gering und so nah wie möglich am Kaffeebett. Das Aufgießen aus großer Höhe führt Sauerstoff und übermäßige Agitation ein, was den Kaffee überextrahieren und das Wasser zu schnell abkühlen kann. Verwenden Sie den Timer, um einen stetigen kreisförmigen Rhythmus von etwa 5 bis 7 Gramm Wasser pro Sekunde einzuhalten.</p>',
    },
    {
      type: 'title',
      text: 'Thermodynamik und Zeit: Die Variable Temperatur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Zeit beeinflusst die Temperatur des Systems. Eine Extraktion, die 6 Minuten dauert, verliert viel thermische Energie, was zu einer unausgewogenen Tasse führt. Die optimalen Zeitbereiche halten das Wasser während der gesamten Extraktion zwischen 90°C und 96°C.',
    },
    {
      type: 'title',
      text: 'Timing für Eiskaffee mit der Flash-Brew-Technik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beim Brühen von Kaffee auf Eis muss das Timing aggressiver sein. Durch die Verwendung von weniger heißem Wasser (60% der Gesamtmenge) wird die Kontaktzeit verkürzt. Um dies zu kompensieren, verwenden Sie einen etwas feineren Mahlgrad, um die Extraktionszeit im Bereich von 2:30 bis 3:00 Minuten zu halten.',
    },
    {
      type: 'title',
      text: 'Zusammenfassung nach der Extraktion: Kontinuierliches Lernen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Am Ende jeder Brühung zeigt unser Tool die Gesamtkontaktzeit an. Notieren Sie diesen Wert zusammen mit Ihren Geschmackseindrücken. Schmeckt es bitter? Zielen Sie beim nächsten Mal auf eine 15 Sekunden kürzere Zeit ab. Schmeckt es metallisch oder sauer? Zielen Sie auf 20 Sekunden mehr ab. Der Timer macht den Kaffee nicht für Sie, aber er liefert Ihnen die Daten, um der Künstler zu sein.',
    },
  ],
  ui: {
    readyText: 'Bereit zum Starten',
    startBtn: 'EXTRAKTION STARTEN',
    pauseBtn: 'PAUSE',
    resumeBtn: 'FORTSETZEN',
    resetBtn: 'ZURÜCKSETZEN',
    newBrewBtn: 'NEUE BRÜHUNG',
    targetLabel: 'Ziel-Wasser:',
    instructionStart: 'Drücken Sie die große Taste',
    hintStart: 'Bereiten Sie Ihre V60 oder Chemex vor',
    phase1Label: 'Phase 1: Bloom',
    phase2Label: 'Phase 2: Aufguss',
    phase3Label: 'Phase 3: Ablauf',
    instructionBloom: 'Gießen Sie {bloomWater}g Wasser auf',
    hintBloom: 'Vorsichtig schwenken zum Sättigen',
    instructionPour: 'Erreichen Sie insgesamt {waterTotal}g',
    hintPour: 'In stetigen Kreisen aufgießen',
    instructionDrain: 'Warten auf den finalen Ablauf',
    hintDrain: 'Fast bereit zum Genießen',
    summaryTitle: 'Extraktion abgeschlossen!',
    summaryMessage: 'Ihr Kaffee ist servierbereit.',
    statTimeLabel: 'Gesamtzeit',
    statWaterLabel: 'Aufgegossenes Wasser',
    setupTitle: 'Rezept-Einstellungen',
    labelWater: 'Gesamt-Wasser (g)',
    labelBloomWater: 'Bloom-Wasser (g)',
    labelBloomTime: 'Bloom-Zeit (s)',
    labelTotalTime: 'Gesamtzeit (s)',
  },
};
