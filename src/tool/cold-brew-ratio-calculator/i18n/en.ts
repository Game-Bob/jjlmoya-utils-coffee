import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-coffee-ratio-calculator';
const title = 'Cold Brew Coffee Ratio Calculator';
const description = 'Use this cold brew coffee ratio calculator to measure coffee, brew water, concentrate dilution, steep time, and served yield in metric or imperial units.';

const faqData = [
  {
    question: 'What coffee to water ratio should I use for cold brew?',
    answer: 'Start with 1:8 for a ready to drink cold brew or 1:5 for a concentrate that you will dilute. The best ratio depends on the coffee, grind, steep time, and how you plan to serve it.',
  },
  {
    question: 'How much coffee do I need for 1 liter of cold brew?',
    answer: 'At a 1:8 ratio, use 125 grams of coffee with 1,000 milliliters of brew water. The calculator also estimates the liquid held by the grounds so you can see the approximate served yield.',
  },
  {
    question: 'Can I calculate cold brew in ounces and fluid ounces?',
    answer: 'Yes. Choose Imperial to see coffee in ounces and water in fluid ounces. The underlying calculation stays in grams and milliliters so the ratio remains consistent across measurement systems.',
  },
  {
    question: 'What is the difference between ready to drink cold brew and concentrate?',
    answer: 'Ready to drink cold brew is brewed close to its serving strength. Concentrate uses more coffee per amount of brew water and is later mixed with water or milk before serving.',
  },
  {
    question: 'How long should cold brew steep?',
    answer: 'A practical starting point is 12 to 18 hours for full immersion in a refrigerator or cool room. Shorter times may taste thin, while longer times can increase bitterness or astringency.',
  },
  {
    question: 'Does the calculator account for water retained by coffee grounds?',
    answer: 'Yes. It uses an approximate retention of 2 milliliters per gram of coffee to estimate brewed yield. The estimate is not a measurement because filters, grind size, and draining time change the final result.',
  },
  {
    question: 'Is this calculator a food safety guide?',
    answer: 'No. It calculates recipe quantities only. Use clean equipment, refrigerate the finished drink when appropriate, and follow current food safety guidance for storage and service.',
  },
];

const howToData = [
  {
    name: 'Choose a brew style',
    text: 'Select ready to drink for a direct serving recipe or concentrate when you plan to add water or milk later.',
  },
  {
    name: 'Set the brew water',
    text: 'Enter the amount of water you will put into the brewing vessel. The calculator scales the coffee dose from that volume and the selected ratio.',
  },
  {
    name: 'Shape the ratio',
    text: 'Pick a preset or move the ratio slider. Lower numbers create a stronger brew and higher numbers create a lighter brew.',
  },
  {
    name: 'Set steep time and dilution',
    text: 'Use the steep time slider as a planning guide. In concentrate mode, set how much dilution water you want for each part of brewed concentrate.',
  },
  {
    name: 'Follow the batch card',
    text: 'Use the batch flow and recipe steps to weigh the coffee, add water, steep, filter, and dilute the approximate served yield.',
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

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

const seo: SEOSection[] = [
  { type: 'title', text: 'Cold Brew Ratio and Batch Planning', level: 2 },
  { type: 'paragraph', html: 'Cold brew is easier to repeat when coffee mass, brew water, dilution, and steep time are treated as separate controls. This calculator turns a target brew style into a weighed batch recipe.' },
  { type: 'title', text: 'Choose Between Ready to Drink and Concentrate', level: 2 },
  { type: 'paragraph', html: 'A ready to drink recipe is brewed close to its serving strength. A concentrate recipe uses a tighter ratio and then adds dilution water after filtering. The visual batch card keeps both quantities visible.' },
  { type: 'table', headers: ['Style', 'Starting ratio', 'Dilution', 'Use'], rows: [['Ready to drink', '1:8', 'None', 'Serve over ice or chilled'], ['Smooth batch', '1:10', 'None', 'Lighter everyday cup'], ['Concentrate', '1:5', '1:1', 'Mix with water or milk']] },
  { type: 'title', text: 'How the Cold Brew Calculation Works', level: 2 },
  { type: 'list', items: ['Coffee dose equals brew water divided by the selected ratio.', 'Brewed yield is estimated after subtracting approximately 2 milliliters of retained water per gram of coffee.', 'Concentrate dilution is calculated from the brewed yield, so the served volume remains easy to read.'] },
  { type: 'title', text: 'Metric and Imperial Cold Brew Measurements', level: 2 },
  { type: 'paragraph', html: 'Choose grams and milliliters for metric recipes or ounces and fluid ounces for imperial recipes. The calculator converts the display while keeping the underlying mass and volume relationship consistent.' },
  { type: 'table', headers: ['Measurement', 'Metric display', 'Imperial display'], rows: [['Coffee dose', 'g', 'oz'], ['Water and yield', 'ml', 'fl oz'], ['Brew ratio', '1 part coffee', '1 part coffee']] },
  { type: 'tip', title: 'Use the result as a starting recipe', html: '<p>Coffee origin, grind size, filter, temperature, and draining time all change extraction and final yield. Taste the first batch and adjust one variable at a time.</p>' },
  { type: 'title', text: 'Cold Brew Steep Time and Food Safety', level: 2 },
  { type: 'paragraph', html: 'The steep slider is a recipe planning aid, not a guarantee of flavour or safety. Use clean equipment and follow current guidance for chilling, storage, and serving.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Cold Brew Questions',
  faq: faqData,
  bibliographyTitle: 'Coffee Brewing References',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo,
  ui: {
    controlTitle: 'Build your batch',
    modeReady: 'Ready to drink',
    modeReadyHint: 'Brew and serve',
    modeConcentrate: 'Concentrate',
    modeConcentrateHint: 'Brew, then dilute',
    unitSystemLabel: 'Measurement system',
    unitMetric: 'Metric',
    unitImperial: 'Imperial',
    unitWaterMetric: 'ml',
    unitWaterImperial: 'fl oz',
    unitWeightMetric: 'g',
    unitWeightImperial: 'oz',
    presetTitle: 'Start with a profile',
    presetClassic: 'Classic 1:8',
    presetSmooth: 'Smooth 1:10',
    presetConcentrate: 'Concentrate 1:5',
    presetCustom: 'Custom',
    brewWaterLabel: 'Brew water',
    brewWaterHint: 'Water for brewing',
    ratioLabel: 'Coffee to water ratio',
    ratioHint: 'Water per gram of coffee',
    dilutionLabel: 'Dilution water',
    dilutionHint: 'Parts of water per part brewed',
    steepLabel: 'Steep time',
    steepHint: 'A planning range',
    hoursUnit: 'hours',
    resultTitle: 'Your batch',
    resultBadgeReady: 'Ready to drink',
    resultBadgeConcentrate: 'Concentrate',
    coffeeLabel: 'Coffee grounds',
    brewWaterResultLabel: 'Brew water',
    retainedLabel: 'Held by grounds',
    dilutionWaterLabel: 'Dilution water',
    servedYieldLabel: 'Approximate served yield',
    ratioResultLabel: 'Ratio',
    steepResultLabel: 'Steep',
    steepStatusShort: 'Short steep',
    steepStatusBalanced: 'Balanced steep',
    steepStatusLong: 'Long steep',
    stageCaption: 'A smooth batch ready for the fridge',
    stageCaptionConcentrate: 'A dark concentrate waiting for dilution',
    stepsTitle: 'Recipe steps',
    visualTitle: 'Batch flow',
    visualBrewCaption: 'Brew',
    visualFilterCaption: 'Filter',
    visualServeCaption: 'Serve',
    visualCoffeeDose: 'Coffee dose',
    visualWaterInput: 'Brew water',
    visualRetained: 'Held by grounds',
    visualServed: 'Brewed yield',
    visualDilution: 'Dilution water',
    stepCoffee: 'Weigh {coffee} {coffeeUnit} of coarse ground coffee.',
    stepWater: 'Add {water} {waterUnit} of water and fully saturate the grounds.',
    stepSteep: 'Cover and steep for about {hours} hours.',
    stepDilute: 'After filtering, add {water} {waterUnit} of dilution water.',
    stepServe: 'Chill and serve approximately {yield} {waterUnit}.',
    noteTitle: 'A useful estimate',
    noteText: 'Grounds retain water during filtering. The held amount is an estimate, so use the first batch to calibrate your own filter and draining technique.',
    copyRecipe: 'Copy recipe',
    copiedText: 'Recipe copied',
    resetText: 'Reset',
    copyTemplate: 'Cold brew recipe\nCoffee: {coffee} {coffeeUnit}\nBrew water: {brewWater} {waterUnit}\nRatio: 1:{ratio}\nSteep: {hours} hours\nDilution water: {dilutionWater} {waterUnit}\nApproximate served yield: {servedYield} {waterUnit}',
    faqTitle: 'FAQ',
    bibliographyTitle: 'References',
  },
};
