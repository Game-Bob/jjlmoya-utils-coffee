import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-kaffee-verhaeltnis-rechner';
const title = 'Cold Brew Kaffee Verhältnis Rechner';
const description = 'Berechnen Sie Kaffee, Brühwasser, Verdünnung, Ziehzeit und Ausschankmenge für Cold Brew in metrischen oder imperialen Einheiten.';

const faqData = [
  { question: 'Welches Kaffee Wasser Verhältnis eignet sich für Cold Brew?', answer: 'Beginnen Sie mit 1:8 für trinkfertigen Cold Brew oder 1:5 für ein Konzentrat. Das beste Verhältnis hängt von Kaffee, Mahlgrad, Ziehzeit und Servierweise ab.' },
  { question: 'Wie viel Kaffee brauche ich für 1 Liter Cold Brew?', answer: 'Bei 1:8 verwenden Sie 125 Gramm Kaffee und 1.000 Milliliter Brühwasser. Der Rechner schätzt zusätzlich das Wasser, das im Kaffeemehl bleibt.' },
  { question: 'Kann ich Cold Brew in Unzen und Flüssigunzen berechnen?', answer: 'Ja. Wählen Sie Imperial, um Kaffee in Unzen und Wasser in Flüssigunzen anzuzeigen. Die Berechnung bleibt intern in Gramm und Millilitern.' },
  { question: 'Was ist der Unterschied zwischen trinkfertigem Cold Brew und Konzentrat?', answer: 'Trinkfertiger Cold Brew wird nahe an der Servierstärke gebrüht. Konzentrat verwendet mehr Kaffee und wird nach dem Filtern mit Wasser oder Milch gemischt.' },
  { question: 'Wie lange sollte Cold Brew ziehen?', answer: 'Als praktischer Startwert eignen sich 12 bis 18 Stunden bei vollständiger Immersion im Kühlschrank oder in einem kühlen Raum. Längere Zeiten können Bitterkeit und Adstringenz erhöhen.' },
  { question: 'Berücksichtigt der Rechner Wasser, das im Kaffeemehl bleibt?', answer: 'Ja. Für die Ertragsschätzung werden ungefähr 2 Milliliter zurückgehaltenes Wasser pro Gramm Kaffee abgezogen. Filter, Mahlgrad und Abtropfzeit verändern den echten Wert.' },
  { question: 'Ist dieser Rechner ein Leitfaden zur Lebensmittelsicherheit?', answer: 'Nein. Er berechnet nur Rezeptmengen. Verwenden Sie saubere Geräte, kühlen Sie das fertige Getränk passend und beachten Sie aktuelle Hinweise zur Lagerung.' },
];

const howToData = [
  { name: 'Brühart wählen', text: 'Wählen Sie trinkfertig für ein direkt servierbares Rezept oder Konzentrat, wenn Sie später Wasser oder Milch hinzufügen.' },
  { name: 'Brühwasser festlegen', text: 'Geben Sie die Wassermenge im Brühgefäß ein. Der Rechner skaliert die Kaffeemenge aus Wasser und Verhältnis.' },
  { name: 'Verhältnis anpassen', text: 'Wählen Sie ein Profil oder bewegen Sie den Verhältnisregler. Kleinere Zahlen ergeben einen stärkeren, größere Zahlen einen leichteren Cold Brew.' },
  { name: 'Ziehzeit und Verdünnung setzen', text: 'Nutzen Sie die Ziehzeit als Planungswert. Im Konzentratmodus legen Sie die Verdünnungsmenge pro Teil gebrühtem Konzentrat fest.' },
  { name: 'Rezeptkarte abarbeiten', text: 'Nutzen Sie den Batchfluss und die Schritte zum Wiegen, Aufgießen, Ziehen, Filtern und Verdünnen der geschätzten Ausschankmenge.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Cold Brew Verhältnis und Batchplanung', level: 2 },
  { type: 'paragraph', html: 'Cold Brew wird reproduzierbarer, wenn Kaffeemasse, Brühwasser, Verdünnung und Ziehzeit getrennt eingestellt werden. Dieser Rechner macht daraus ein abgewogenes Batchrezept.' },
  { type: 'title', text: 'Trinkfertig oder Konzentrat wählen', level: 2 },
  { type: 'paragraph', html: 'Trinkfertiger Cold Brew wird nahe an der Servierstärke gebrüht. Ein Konzentrat verwendet ein engeres Verhältnis und wird nach dem Filtern verdünnt.' },
  { type: 'table', headers: ['Stil', 'Startverhältnis', 'Verdünnung', 'Verwendung'], rows: [['Trinkfertig', '1:8', 'Keine', 'Gekühlt servieren'], ['Sanftes Batch', '1:10', 'Keine', 'Leichter Alltagscup'], ['Konzentrat', '1:5', '1:1', 'Mit Wasser oder Milch mischen']] },
  { type: 'title', text: 'So funktioniert die Cold Brew Berechnung', level: 2 },
  { type: 'list', items: ['Kaffeemenge ist Brühwasser geteilt durch das gewählte Verhältnis.', 'Der Brüh-Ertrag wird nach Abzug von ungefähr 2 Millilitern zurückgehaltenem Wasser pro Gramm Kaffee geschätzt.', 'Die Verdünnung im Konzentratmodus wird aus dem Brüh-Ertrag berechnet.'] },
  { type: 'title', text: 'Metrische und imperiale Cold Brew Einheiten', level: 2 },
  { type: 'paragraph', html: 'Wählen Sie Gramm und Milliliter für metrische Rezepte oder Unzen und Flüssigunzen für imperiale Rezepte. Das Verhältnis bleibt in beiden Systemen gleich.' },
  { type: 'table', headers: ['Messung', 'Metrisch', 'Imperial'], rows: [['Kaffeemenge', 'g', 'oz'], ['Wasser und Ertrag', 'ml', 'fl oz'], ['Brühverhältnis', '1 Teil Kaffee', '1 Teil Kaffee']] },
  { type: 'tip', title: 'Das Ergebnis als Startrezept verwenden', html: '<p>Kaffee, Mahlgrad, Filter, Temperatur und Abtropfzeit verändern Extraktion und Ertrag. Probieren Sie das erste Batch und ändern Sie jeweils nur eine Variable.</p>' },
  { type: 'title', text: 'Cold Brew Ziehzeit und Lebensmittelsicherheit', level: 2 },
  { type: 'paragraph', html: 'Der Ziehregler ist eine Rezeptplanung und keine Garantie für Geschmack oder Sicherheit. Verwenden Sie saubere Geräte und beachten Sie aktuelle Hinweise zu Kühlung, Lagerung und Ausschank.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Cold Brew Fragen', faq: faqData, bibliographyTitle: 'Kaffeebrüh Quellen', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Batch aufbauen', modeReady: 'Trinkfertig', modeReadyHint: 'Brühen und servieren', modeConcentrate: 'Konzentrat', modeConcentrateHint: 'Brühen und verdünnen', unitSystemLabel: 'Maßsystem', unitMetric: 'Metrisch', unitImperial: 'Imperial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Profil auswählen', presetClassic: 'Klassisch 1:8', presetSmooth: 'Sanft 1:10', presetConcentrate: 'Konzentrat 1:5', presetCustom: 'Benutzerdefiniert', brewWaterLabel: 'Brühwasser', brewWaterHint: 'Wasser zum Brühen', ratioLabel: 'Kaffee Wasser Verhältnis', ratioHint: 'Wasser pro Gramm Kaffee', dilutionLabel: 'Verdünnungswasser', dilutionHint: 'Wasserteile pro Teil Brühkonzentrat', steepLabel: 'Ziehzeit', steepHint: 'Ein praktischer Bereich', hoursUnit: 'Stunden', resultTitle: 'Ihr Batch', resultBadgeReady: 'Trinkfertig', resultBadgeConcentrate: 'Konzentrat', coffeeLabel: 'Kaffeemehl', brewWaterResultLabel: 'Brühwasser', retainedLabel: 'Im Kaffeemehl', dilutionWaterLabel: 'Verdünnungswasser', servedYieldLabel: 'Geschätzte Ausschankmenge', ratioResultLabel: 'Verhältnis', steepResultLabel: 'Ziehzeit', steepStatusShort: 'Kurze Ziehzeit', steepStatusBalanced: 'Ausgewogene Ziehzeit', steepStatusLong: 'Lange Ziehzeit', stageCaption: 'Ein sanftes Batch für den Kühlschrank', stageCaptionConcentrate: 'Ein kräftiges Konzentrat zur Verdünnung', stepsTitle: 'Rezeptschritte', visualTitle: 'Batchfluss', visualBrewCaption: 'Brühen', visualFilterCaption: 'Filtern', visualServeCaption: 'Servieren', visualCoffeeDose: 'Kaffeemenge', visualWaterInput: 'Brühwasser', visualRetained: 'Im Kaffeemehl', visualServed: 'Brüh-Ertrag', visualDilution: 'Verdünnungswasser', stepCoffee: 'Wiegen Sie {coffee} {coffeeUnit} grob gemahlenen Kaffee ab.', stepWater: 'Geben Sie {water} {waterUnit} Wasser hinzu und sättigen Sie das Kaffeemehl vollständig.', stepSteep: 'Abdecken und etwa {hours} Stunden ziehen lassen.', stepDilute: 'Nach dem Filtern {water} {waterUnit} Verdünnungswasser hinzufügen.', stepServe: 'Kühlen und ungefähr {yield} {waterUnit} servieren.', noteTitle: 'Eine nützliche Schätzung', noteText: 'Kaffeemehl hält beim Filtern Wasser zurück. Der Betrag ist geschätzt. Kalibrieren Sie ihn mit Ihrem Filter und Ihrer Abtropftechnik.', copyRecipe: 'Rezept kopieren', copiedText: 'Rezept kopiert', resetText: 'Zurücksetzen', copyTemplate: 'Cold Brew Rezept\nKaffee: {coffee} {coffeeUnit}\nBrühwasser: {brewWater} {waterUnit}\nVerhältnis: 1:{ratio}\nZiehzeit: {hours} Stunden\nVerdünnungswasser: {dilutionWater} {waterUnit}\nGeschätzte Ausschankmenge: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Quellen',
  },
};
