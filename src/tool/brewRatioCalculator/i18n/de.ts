import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
