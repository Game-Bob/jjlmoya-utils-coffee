import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-kaffe-proportion-kalkylator';
const title = 'Kalkylator för cold brew kaffeförhållande';
const description = 'Beräkna kaffe, bryggvatten, utspädning, dragtid och serverad mängd för cold brew i metriska eller imperiala enheter.';

const faqData = [
  { question: 'Vilket förhållande mellan kaffe och vatten ska jag använda för cold brew?', answer: 'Börja med 1:8 för färdig cold brew eller 1:5 för koncentrat som ska spädas. Rätt förhållande beror på kaffe, malning, tid och servering.' },
  { question: 'Hur mycket kaffe behövs till 1 liter cold brew?', answer: 'Vid 1:8 använder du 125 gram kaffe och 1 000 milliliter bryggvatten. Kalkylatorn uppskattar också vattnet som blir kvar i kaffesumpen.' },
  { question: 'Kan jag räkna cold brew i ounces och fluid ounces?', answer: 'Ja. Välj Imperial för att visa kaffe i ounces och vatten i fluid ounces. Den underliggande beräkningen använder gram och milliliter.' },
  { question: 'Vad är skillnaden mellan färdig cold brew och koncentrat?', answer: 'Färdig cold brew bryggs nära serveringsstyrkan. Koncentrat använder mer kaffe per mängd vatten och blandas sedan med vatten eller mjölk.' },
  { question: 'Hur länge ska cold brew dra?', answer: 'Som startpunkt kan du använda 12 till 18 timmar vid full nedsänkning i kylskåp eller ett svalt rum. Längre tid kan ge mer bitterhet eller strävhet.' },
  { question: 'Tar kalkylatorn hänsyn till vatten som hålls kvar i sumpen?', answer: 'Ja. Den uppskattar cirka 2 milliliter kvarhållet vatten per gram kaffe för att beräkna utbytet. Filter, malning och avrinning påverkar det verkliga resultatet.' },
  { question: 'Är detta en guide till livsmedelssäkerhet?', answer: 'Nej. Den beräknar bara receptmängder. Använd ren utrustning, kyl drycken när det behövs och följ aktuella råd för förvaring och servering.' },
];

const howToData = [
  { name: 'Välj bryggstil', text: 'Välj färdig att dricka för direkt servering eller koncentrat om du ska tillsätta vatten eller mjölk senare.' },
  { name: 'Ställ in bryggvattnet', text: 'Ange mängden vatten i bryggkärlet. Kalkylatorn skalar kaffemängden efter volymen och valt förhållande.' },
  { name: 'Forma förhållandet', text: 'Välj en profil eller flytta reglaget. Lägre tal ger starkare kaffe och högre tal ger en lättare dryck.' },
  { name: 'Ställ in dragtid och spädning', text: 'Använd tiden som planeringsstöd. I koncentratläget anger du mängden vatten per del bryggt koncentrat.' },
  { name: 'Följ batchkortet', text: 'Använd batchflödet och stegen för att väga kaffe, tillsätta vatten, dra, filtrera och späda den uppskattade serverade mängden.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Cold brew förhållande och batchplanering', level: 2 },
  { type: 'paragraph', html: 'Cold brew blir enklare att upprepa när kaffemängd, bryggvatten, spädning och dragtid ställs in var för sig. Kalkylatorn gör detta till ett vägt recept.' },
  { type: 'title', text: 'Välj färdig att dricka eller koncentrat', level: 2 },
  { type: 'paragraph', html: 'Ett färdigt recept bryggs nära serveringsstyrkan. Ett koncentrat använder ett tätare förhållande och späds efter filtrering.' },
  { type: 'table', headers: ['Stil', 'Startförhållande', 'Spädning', 'Användning'], rows: [['Färdig att dricka', '1:8', 'Ingen', 'Servera kall eller med is'], ['Mjuk batch', '1:10', 'Ingen', 'Lättare vardagskopp'], ['Koncentrat', '1:5', '1:1', 'Blanda med vatten eller mjölk']] },
  { type: 'title', text: 'Så fungerar cold brew beräkningen', level: 2 },
  { type: 'list', items: ['Kaffedosen är bryggvattnet delat med det valda förhållandet.', 'Den bryggda mängden uppskattas efter avdrag för cirka 2 milliliter kvarhållet vatten per gram kaffe.', 'Spädningen räknas från den bryggda mängden så att serveringsvolymen blir tydlig.'] },
  { type: 'title', text: 'Metriska och imperiala cold brew mått', level: 2 },
  { type: 'paragraph', html: 'Välj gram och milliliter för metriska recept eller ounces och fluid ounces för imperiala recept. Förhållandet mellan massa och volym förblir konsekvent.' },
  { type: 'table', headers: ['Mätning', 'Metriskt', 'Imperial'], rows: [['Kaffedos', 'g', 'oz'], ['Vatten och mängd', 'ml', 'fl oz'], ['Bryggförhållande', '1 del kaffe', '1 del kaffe']] },
  { type: 'tip', title: 'Använd resultatet som ett startrecept', html: '<p>Kaffe, malning, filter, temperatur och avrinning ändrar extraktion och utbyte. Smaka på första batchen och ändra en variabel i taget.</p>' },
  { type: 'title', text: 'Dragit och livsmedelssäkerhet för cold brew', level: 2 },
  { type: 'paragraph', html: 'Tidsreglaget hjälper dig att planera receptet men garanterar inte smak eller säkerhet. Använd ren utrustning och följ aktuella råd för kylning, förvaring och servering.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Frågor om cold brew', faq: faqData, bibliographyTitle: 'Källor om bryggning', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Bygg din batch', modeReady: 'Färdig att dricka', modeReadyHint: 'Brygg och servera', modeConcentrate: 'Koncentrat', modeConcentrateHint: 'Brygg och späd', unitSystemLabel: 'Måttsystem', unitMetric: 'Metriskt', unitImperial: 'Imperial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Börja med en profil', presetClassic: 'Klassisk 1:8', presetSmooth: 'Mjuk 1:10', presetConcentrate: 'Koncentrat 1:5', presetCustom: 'Eget', brewWaterLabel: 'Bryggvatten', brewWaterHint: 'Vatten för bryggning', ratioLabel: 'Förhållande kaffe och vatten', ratioHint: 'Vatten per gram kaffe', dilutionLabel: 'Spädningsvatten', dilutionHint: 'Delar vatten per del bryggt kaffe', steepLabel: 'Dragtid', steepHint: 'Ett praktiskt intervall', hoursUnit: 'timmar', resultTitle: 'Din batch', resultBadgeReady: 'Färdig att dricka', resultBadgeConcentrate: 'Koncentrat', coffeeLabel: 'Kaffesump', brewWaterResultLabel: 'Bryggvatten', retainedLabel: 'Kvar i sumpen', dilutionWaterLabel: 'Spädningsvatten', servedYieldLabel: 'Ungefärlig serverad mängd', ratioResultLabel: 'Förhållande', steepResultLabel: 'Dragning', steepStatusShort: 'Kort dragning', steepStatusBalanced: 'Balanserad dragning', steepStatusLong: 'Lång dragning', stageCaption: 'En mjuk batch redo för kylskåpet', stageCaptionConcentrate: 'Ett mörkt koncentrat som väntar på spädning', stepsTitle: 'Receptsteg', visualTitle: 'Batchflöde', visualBrewCaption: 'Brygg', visualFilterCaption: 'Filtrera', visualServeCaption: 'Servera', visualCoffeeDose: 'Kaffedos', visualWaterInput: 'Bryggvatten', visualRetained: 'Kvar i sumpen', visualServed: 'Bryggd mängd', visualDilution: 'Spädningsvatten', stepCoffee: 'Väg upp {coffee} {coffeeUnit} grovmalet kaffe.', stepWater: 'Tillsätt {water} {waterUnit} vatten och blöt all sump.', stepSteep: 'Täck över och låt dra i ungefär {hours} timmar.', stepDilute: 'Tillsätt {water} {waterUnit} spädningsvatten efter filtrering.', stepServe: 'Kyl och servera ungefär {yield} {waterUnit}.', noteTitle: 'En användbar uppskattning', noteText: 'Kaffesump håller kvar vatten under filtreringen. Mängden är uppskattad, så kalibrera första batchen med ditt filter och din avrinningsmetod.', copyRecipe: 'Kopiera recept', copiedText: 'Recept kopierat', resetText: 'Återställ', copyTemplate: 'Cold brew recept\nKaffe: {coffee} {coffeeUnit}\nBryggvatten: {brewWater} {waterUnit}\nFörhållande: 1:{ratio}\nDragning: {hours} timmar\nSpädningsvatten: {dilutionWater} {waterUnit}\nUngefärlig serverad mängd: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Källor',
  },
};
