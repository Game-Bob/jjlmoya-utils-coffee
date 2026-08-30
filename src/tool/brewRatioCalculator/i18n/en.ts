import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

const slug = 'coffee-ratio-calculator';
const title = 'Coffee Brew Ratio Calculator';
const description =
 'Calculate the exact grams of coffee or milliliters of water for your ideal ratio (1:15, 1:16...). Includes in-cup result, pour guide, iced coffee mode and saved recipes.';

const faqData = [
 {
 question: 'What is a 1:15 coffee ratio?',
 answer:
 'It means that for every gram of ground coffee you use 15 milliliters (or grams) of water. With 20g of coffee, you pour 300ml of water. It is the standard ratio recommended by the Specialty Coffee Association for filter methods like V60, Chemex or Aeropress.',
 },
 {
 question: 'Why is there less coffee in my cup than I poured?',
 answer:
 'Because ground coffee retains water during extraction. On average, each gram of coffee absorbs about 2ml of liquid. If you pour 300ml onto 20g of coffee, you will get approximately 260ml in the cup. This calculator shows you the real result.',
 },
 {
 question: 'What is bloom or pre-infusion?',
 answer:
 'It is the first water pour, equivalent to twice the weight of the coffee (2ml per gram). It is done to degas fresh coffee: the CO2 trapped during roasting escapes and allows the water to extract compounds uniformly. If there is no visible bloom, the coffee has been ground or roasted for some time.',
 },
 {
 question: 'How to make iced coffee without it being watery?',
 answer:
 'Use the flash chilling technique: prepare 60% of the total water as hot water at 90-96 degrees and put the remaining 40% as ice in the carafe. Pour the hot coffee directly over the ice. The rapid cooling seals in the aromas. This calculator automatically recalculates the amounts when you activate Iced Coffee mode.',
 },
 {
 question: 'What is the best ratio for an Aeropress?',
 answer:
 'Between 1:12 and 1:15 depending on use. If you drink coffee black, 1:15 is balanced. If you use it as a base for milk drinks or want high concentration, go down to 1:12 or 1:13. The Aeropress is the most versatile method precisely because it handles different ratios very well.',
 },
 {
 question: 'Can I save my favorite recipes?',
 answer:
 'Yes. Once you find the perfect ratio and amount for your favorite coffee, press the Save recipe button, give it a name (e.g., Morning V60) and it will be stored in your browser. You can retrieve it at any time with a single click.',
 },
];

const howToData = [
 {
 name: 'Choose the calculation mode',
 text: 'Select whether you are starting from the grams of coffee you have or the capacity of your cup (ml of water). The calculator adapts all results to the chosen mode.',
 },
 {
 name: 'Enter the amount',
 text: 'Type the grams of coffee or the milliliters of water you are going to use. The calculator will automatically calculate the other value based on the selected ratio.',
 },
 {
 name: 'Select the intensity',
 text: 'Choose between Strong (1:12-14), Balanced (1:15-16), Light (1:17-18) or enter your custom ratio. Each option corresponds to a different flavor profile.',
 },
 {
 name: 'Activate Iced Coffee mode (optional)',
 text: 'If you are making iced coffee, activate the toggle. The calculator will automatically split the water between hot water (60%) and ice (40%) using the flash chilling technique.',
 },
 {
 name: 'Follow the pour guide',
 text: 'Use the phase guide (Bloom and Final Pour) to structure your brewing process. Each phase indicates exactly how much water to pour and when.',
 },
 {
 name: 'Save the recipe',
 text: 'When you find your perfect ratio, save it with a descriptive name. Your recipes are stored in your browser for future sessions.',
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
 inLanguage: 'en',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Frequently Asked Questions about Brew Ratio',
 faq: faqData,
 bibliographyTitle: 'Technical References and SCA Standards',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 modeCoffee: 'I have the Coffee',
 modeHintCoffee: 'Tell me how much water',
 modeWater: 'I have the Water',
 modeHintWater: 'Tell me how much coffee to grind',
 inputLabelCoffee: 'Grams of coffee you have',
 inputLabelWater: 'Your cup capacity (ml)',
 intensityLabel: 'Coffee intensity',
 intensityStrong: 'Strong',
 intensityBalanced: 'Balanced',
 intensityLight: 'Light',
 intensityCustom: 'Custom',
 customCoffeeLabel: 'Coffee',
 customWaterLabel: 'Water',
 icedModeLabel: 'Iced Coffee Mode',
 recipeLabel: 'Your exact recipe',
 resultTitle: 'Result',
 resultCoffeeLabel: 'Coffee',
 resultCoffeeSub: 'Fine-medium grind',
 resultHotWaterLabel: 'Hot water',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Hot water (60%)',
 resultIceLabel: 'Ice',
 resultIceSub: 'In the carafe',
 resultCupLabel: 'In your cup',
 resultCupSub: 'Coffee retains ~2ml/g',
 pouringGuideLabel: 'Pour guide',
 favoritesLabel: 'My favorite recipes',
 saveBtn: '+ Save this recipe',
 favEmptyText: 'No saved recipes yet. Configure your perfect brew and save it.',
 modalTitle: 'Name your recipe',
 modalPlaceholder: 'E.g.: "Morning V60"',
 modalCancel: 'Cancel',
 modalConfirm: 'Save',
 phaseBloomTemplate: 'Bloom: Pour {bloomMl} ml of water in a spiral. Wait {bloomSeconds} seconds to degas the coffee.',
 phasePourTemplate: 'Final pour: Add the rest to complete {hotWaterMl} ml in {pourCount} slow pours.',
 phaseIcedTemplate: 'Iced: Pour the hot coffee directly over the {iceMl} g of ice in the carafe.',
 cupWarningTemplate: 'The cup only receives {inCupMl} ml. Coffee retains liquid.',
 favModeCoffee: 'g coffee',
 favModeWater: 'ml water',
 favModeIced: ' - Iced',
 },
};
