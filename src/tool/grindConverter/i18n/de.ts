import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildGrindSeo } from '../../seoTranslations';

const slug = 'kaffee-mahlgrad-rechner';
const title = 'Kaffee Mahlgrad Konverter';
const description =
 'Interaktive Mahlgrad-Tabelle mit Klick- und Stufen-Leitfaden zur Einstellung Ihrer Mühle für Espresso, V60, French Press und mehr. Technische Mikron-Zuordnung für alle Extraktionsmethoden.';

const faqData = [
 {
 question: 'Warum funktioniert derselbe Mahlgrad nicht für alle Kaffeesorten?',
 answer:
 'Die Dichte der Bohnen variiert je nach Röstgrad und Herkunft. Eine helle Röstung ist in der Regel dichter und erfordert einen feineren Mahlgrad für eine ordnungsgemäße Extraktion, während eine dunkle Röstung poröser ist und eine gröbere Einstellung benötigt.',
 },
 {
 question: 'Woher weiß ich, ob ich feiner oder gröber mahlen soll?',
 answer:
 'Lassen Sie sich von Ihrem Geschmack leiten: Wenn der Kaffee bitter und trocken schmeckt, mahlen Sie gröber, damit das Wasser schneller fließt. Wenn er sauer, salzig oder wässrig schmeckt, mahlen Sie feiner, um die Kontaktoberfläche zu vergrößern.',
 },
 {
 question: 'Was ist "Channeling" und wie beeinflusst der Mahlgrad dies?',
 answer:
 'Channeling tritt auf, wenn das Wasser den Weg des geringsten Widerstands durch das Kaffeebett findet. Ein ungleichmäßiger oder für den Druck ungeeigneter Mahlgrad, insbesondere beim Espresso, begünstigt dieses Problem und ruiniert die Extraktion.',
 },
 {
 question: 'Kann ich diese Tabelle auch für eine Schlagmesser-Mühle verwenden?',
 answer:
 'Schlagmesser-Mühlen erzeugen ungleichmäßige Partikel, gleichzeitig feines Pulver und große Stücke. Die Mikron-Werte sind Richtwerte, aber die tatsächlichen Ergebnisse werden im Vergleich zu einer Mühle mit Mahlwerk erheblich variieren.',
 },
 {
 question: 'Was bedeutet die Gleichmäßigkeit der Mühle in der Visualisierung?',
 answer:
 'Die gezeigte Partikelverteilung simuliert die reale Gleichmäßigkeit jeder Mühle. Eine Comandante C40 mit 0,95 Gleichmäßigkeit erzeugt sehr konsistente Partikel; eine Hario Skerton mit 0,40 zeigt deutlich mehr Größenabweichungen.',
 },
 { question: 'Wie passe ich die Mahlung an den Geschmack an?', answer: 'Bei bitterem oder trockenem Kaffee mahlen Sie gröber. Bei saurem oder dünnem Kaffee mahlen Sie feiner und ändern jeweils nur einen Parameter.' },
].slice(0, 5);

const howToData = [
 {
 name: 'Wählen Sie Ihre Mühle',
 text: 'Wählen Sie Ihr Modell aus der Liste aus. Der Konverter zeigt die empfohlenen Klicks oder Stufen speziell für Ihr Gerät an.',
 },
 {
 name: 'Wählen Sie Ihre Extraktionsmethode',
 text: 'Klicken Sie auf das Symbol für die Methode, die Sie verwenden möchten. Das Bedienfeld wird mit allen relevanten technischen Parametern aktualisiert.',
 },
 {
 name: 'Interpretieren Sie die Mikron-Anzeige',
 text: 'Nutzen Sie den Mikron-Wert im Balkendiagramm, um die tatsächliche Partikelgröße zu verstehen. Die haptische Referenz (feines Salz, Kristallzucker...) hilft Ihnen bei der visuellen Kalibrierung.',
 },
 {
 name: 'Beobachten Sie die Partikel-Simulation',
 text: 'Die Verteilung der Punkte zeigt die typische Gleichmäßigkeit Ihrer Mühle. Ein homogeneres Muster bedeutet eine vorhersehbarere und reproduzierbarere Extraktion.',
 },
 {
 name: 'Nach Geschmack anpassen',
 text: 'Nutzen Sie den Diagnose-Leitfaden unten als Referenz. Wenn der Kaffee bitter schmeckt, stellen Sie ihn ein paar Klicks gröber. Wenn er sauer schmeckt, mahlen Sie feiner. Passen Sie immer nur einen Schritt nach dem anderen an.',
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

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Häufig gestellte Fragen zum Kaffee-Mahlgrad',
 faq: faqData,
 bibliographyTitle: 'Referenzen zu Mahlgrad und Extraktion',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildGrindSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 step1Label: 'Schritt 1: Auswahl der Mühle',
 step2Label: 'Schritt 2: Extraktionsmethode',
 gaugeLabel: 'Technische Partikelübersicht (μm)',
 distributionLabel: 'Tatsächliche Partikelverteilung',
 refLabel: 'Referenz',
 rangeMicrasLabel: 'Bereich μm',
 unitMicras: 'ZIEL-MIKRON (μm)',
 unitClicks: 'EMPFOHLENE KLICKS',
 unitLevel: 'EMPFOHLENE STUFE',
 suggestGrinderText: "Vermissen Sie Ihre Mühle? Schlagen Sie sie vor",
 method0Name: 'Ibrik (Türkisch)',
 method0Ref: 'Talkum / Mehl',
 method0Desc: 'Extrem feines Pulver, fast wie Mehl. Essenziell für den Bodensatz im türkischen Kaffee.',
 method1Name: 'Espresso',
 method1Ref: 'Feines Salz',
 method1Desc: 'Die Hochdruck-Extraktion benötigt eine sehr feine Mahlung, um Widerstand zu erzeugen.',
 method2Name: 'Mokka / AeroPress',
 method2Ref: 'Speisesalz',
 method2Desc: 'Mittlerer Druck oder Hybrid-Immersion. Vielseitige und ausgewogene Textur.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Kristallzucker',
 method3Desc: 'Manuelle Aufgussmethoden, der Standard zur Hervorhebung von Süße und Säure.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Grober Sand',
 method4Desc: 'Dicke Filter oder kurze Immersion. Erfordert einen konstanten und gleichmäßigen Fluss.',
 method5Name: 'French Press',
 method5Ref: 'Grobes Salz',
 method5Desc: 'Längere Immersion benötigt große Partikel, um durch das Metallsieb zu filtern.',
 method6Name: 'Cold Brew',
 method6Ref: 'Pfefferkörner',
 method6Desc: 'Kalte Extraktion über viele Stunden erfordert den gröbstmöglichen Mahlgrad.',
 troubleIssue0: 'Schmeckt bitter, trocken oder adstringierend?',
 troubleSolution0:
 'Sie extrahieren zu stark. Mahlen Sie gröber, damit das Wasser schneller fließt und weniger Bitterstoffe löst.',
 troubleAction0: 'Gröber mahlen',
 troubleIssue1: 'Schmeckt sauer, salzig oder wässrig?',
 troubleSolution1:
 'Sie extrahieren zu schwach. Mahlen Sie feiner, um die Kontaktoberfläche zu erhöhen und mehr Süße und Körper zu lösen.',
 troubleAction1: 'Feiner mahlen',
 },
};
