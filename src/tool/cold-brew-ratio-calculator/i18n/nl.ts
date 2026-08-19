import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-koffie-verhouding-calculator';
const title = 'Cold brew koffie verhouding calculator';
const description = 'Bereken koffie, zetwater, verdunning van concentraat, trektijd en geschatte opbrengst voor cold brew in metrische of imperiale eenheden.';

const faqData = [
  { question: 'Welke koffie water verhouding gebruik ik voor cold brew?', answer: 'Begin met 1:8 voor cold brew die direct klaar is om te drinken of 1:5 voor concentraat dat je later verdunt. De beste verhouding hangt af van koffie, maling, tijd en serveren.' },
  { question: 'Hoeveel koffie heb ik nodig voor 1 liter cold brew?', answer: 'Gebruik bij 1:8 125 gram koffie met 1.000 milliliter zetwater. De calculator schat ook hoeveel water in het koffiedik achterblijft.' },
  { question: 'Kan ik cold brew berekenen in ounces en fluid ounces?', answer: 'Ja. Kies Imperial om koffie in ounces en water in fluid ounces te tonen. De berekening blijft intern in gram en milliliter voor een constante verhouding.' },
  { question: 'Wat is het verschil tussen drinkklare cold brew en concentraat?', answer: 'Drinkklare cold brew wordt dichtbij de drinksterkte gezet. Concentraat gebruikt meer koffie per hoeveelheid water en wordt na het filteren gemengd met water of melk.' },
  { question: 'Hoe lang moet cold brew trekken?', answer: 'Gebruik als startpunt 12 tot 18 uur bij volledige onderdompeling in de koelkast of een koele ruimte. Langere tijden kunnen meer bitterheid of wrangheid geven.' },
  { question: 'Houdt de calculator rekening met water dat in het koffiedik blijft?', answer: 'Ja. Voor de opbrengst wordt ongeveer 2 milliliter achtergehouden water per gram koffie geschat. Filter, maling en uitlektijd veranderen het echte resultaat.' },
  { question: 'Is deze calculator een voedselveiligheidsgids?', answer: 'Nee. Hij berekent alleen recept hoeveelheden. Gebruik schoon materiaal, koel de drank wanneer nodig en volg actuele richtlijnen voor bewaren en serveren.' },
];

const howToData = [
  { name: 'Kies een zetstijl', text: 'Kies drinkklaar voor direct serveren of concentraat als je later water of melk toevoegt.' },
  { name: 'Stel het zetwater in', text: 'Voer de hoeveelheid water in het zetvat in. De calculator schaalt de koffiedosis op basis van volume en verhouding.' },
  { name: 'Pas de verhouding aan', text: 'Kies een profiel of verschuif de regelaar. Lagere getallen geven sterkere koffie en hogere getallen een lichtere drank.' },
  { name: 'Stel trektijd en verdunning in', text: 'Gebruik de tijd als planningshulp. Stel in concentraatmodus de hoeveelheid verdunningswater per deel gezette koffie in.' },
  { name: 'Volg de batchkaart', text: 'Gebruik de batchstroom en stappen om koffie te wegen, water toe te voegen, te trekken, te filteren en de geschatte opbrengst te verdunnen.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Cold brew verhouding en batchplanning', level: 2 },
  { type: 'paragraph', html: 'Cold brew wordt beter herhaalbaar wanneer koffiemassa, zetwater, verdunning en trektijd apart worden ingesteld. Deze calculator maakt er een gewogen batchrecept van.' },
  { type: 'title', text: 'Kies drinkklaar of concentraat', level: 2 },
  { type: 'paragraph', html: 'Een drinkklaar recept wordt dichtbij de drinksterkte gezet. Een concentraat gebruikt een strakkere verhouding en krijgt na het filteren verdunningswater.' },
  { type: 'table', headers: ['Stijl', 'Startverhouding', 'Verdunning', 'Gebruik'], rows: [['Drinkklaar', '1:8', 'Geen', 'Koud of met ijs serveren'], ['Zachte batch', '1:10', 'Geen', 'Lichtere dagelijkse kop'], ['Concentraat', '1:5', '1:1', 'Mengen met water of melk']] },
  { type: 'title', text: 'Zo werkt de cold brew berekening', level: 2 },
  { type: 'list', items: ['De koffiedosis is het zetwater gedeeld door de gekozen verhouding.', 'De gezette opbrengst wordt geschat na aftrek van ongeveer 2 milliliter achtergehouden water per gram koffie.', 'Verdunning van concentraat wordt berekend vanaf de gezette opbrengst zodat het serveervolume duidelijk blijft.'] },
  { type: 'title', text: 'Metrische en imperiale maten voor cold brew', level: 2 },
  { type: 'paragraph', html: 'Kies gram en milliliter voor metrische recepten of ounce en fluid ounce voor imperiale recepten. De verhouding tussen massa en volume blijft gelijk.' },
  { type: 'table', headers: ['Meting', 'Metrisch', 'Imperial'], rows: [['Koffiedosis', 'g', 'oz'], ['Water en opbrengst', 'ml', 'fl oz'], ['Verhouding', '1 deel koffie', '1 deel koffie']] },
  { type: 'tip', title: 'Gebruik de uitkomst als startrecept', html: '<p>Koffie, maling, filter, temperatuur en uitlekken veranderen extractie en opbrengst. Proef de eerste batch en verander telkens een variabele.</p>' },
  { type: 'title', text: 'Trektijd en voedselveiligheid bij cold brew', level: 2 },
  { type: 'paragraph', html: 'De trektijdregelaar helpt bij receptplanning en garandeert geen smaak of veiligheid. Gebruik schoon materiaal en volg actuele richtlijnen voor koelen, bewaren en serveren.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Cold brew vragen', faq: faqData, bibliographyTitle: 'Bronnen voor koffiezetten', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Bouw je batch', modeReady: 'Drinkklaar', modeReadyHint: 'Zetten en serveren', modeConcentrate: 'Concentraat', modeConcentrateHint: 'Zetten en verdunnen', unitSystemLabel: 'Meetsysteem', unitMetric: 'Metrisch', unitImperial: 'Imperial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Begin met een profiel', presetClassic: 'Klassiek 1:8', presetSmooth: 'Zacht 1:10', presetConcentrate: 'Concentraat 1:5', presetCustom: 'Aangepast', brewWaterLabel: 'Zetwater', brewWaterHint: 'Water voor het zetten', ratioLabel: 'Koffie water verhouding', ratioHint: 'Water per gram koffie', dilutionLabel: 'Verdunningswater', dilutionHint: 'Delen water per deel gezette koffie', steepLabel: 'Trektijd', steepHint: 'Een praktische planning', hoursUnit: 'uur', resultTitle: 'Jouw batch', resultBadgeReady: 'Drinkklaar', resultBadgeConcentrate: 'Concentraat', coffeeLabel: 'Gemalen koffie', brewWaterResultLabel: 'Zetwater', retainedLabel: 'In koffiedik', dilutionWaterLabel: 'Verdunningswater', servedYieldLabel: 'Geschatte serveeropbrengst', ratioResultLabel: 'Verhouding', steepResultLabel: 'Trekken', steepStatusShort: 'Kort getrokken', steepStatusBalanced: 'Evenwichtig getrokken', steepStatusLong: 'Lang getrokken', stageCaption: 'Een zachte batch klaar voor de koelkast', stageCaptionConcentrate: 'Een krachtig concentraat wacht op verdunning', stepsTitle: 'Receptstappen', visualTitle: 'Batchstroom', visualBrewCaption: 'Zetten', visualFilterCaption: 'Filteren', visualServeCaption: 'Serveren', visualCoffeeDose: 'Koffiedosis', visualWaterInput: 'Zetwater', visualRetained: 'In koffiedik', visualServed: 'Gezette opbrengst', visualDilution: 'Verdunningswater', stepCoffee: 'Weeg {coffee} {coffeeUnit} grof gemalen koffie af.', stepWater: 'Voeg {water} {waterUnit} water toe en maak het koffiedik volledig nat.', stepSteep: 'Dek af en laat ongeveer {hours} uur trekken.', stepDilute: 'Voeg na het filteren {water} {waterUnit} verdunningswater toe.', stepServe: 'Koel en serveer ongeveer {yield} {waterUnit}.', noteTitle: 'Een nuttige schatting', noteText: 'Koffiedik houdt water vast tijdens het filteren. De hoeveelheid is geschat; kalibreer de eerste batch met je filter en uitlektechniek.', copyRecipe: 'Recept kopiëren', copiedText: 'Recept gekopieerd', resetText: 'Resetten', copyTemplate: 'Cold brew recept\nKoffie: {coffee} {coffeeUnit}\nZetwater: {brewWater} {waterUnit}\nVerhouding: 1:{ratio}\nTrektijd: {hours} uur\nVerdunningswater: {dilutionWater} {waterUnit}\nGeschatte serveeropbrengst: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Bronnen',
  },
};
