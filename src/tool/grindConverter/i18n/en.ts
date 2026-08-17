import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildGrindSeo } from '../../seoTranslations';

const slug = 'coffee-grind-size-converter';
const title = 'Coffee Grind Size Converter';
const description =
 'Interactive grind size chart with clicks and levels guide for adjusting your grinder between Espresso, V60, French Press and more. Technical micron mapping for all extraction methods.';

const faqData = [
 {
 question: "Why doesn't the same grind setting work for all coffees?",
 answer:
 'Bean density varies by roast level and origin. A light roast is typically denser and requires a finer grind to extract properly, while a dark roast is more porous and needs a coarser setting.',
 },
 {
 question: 'How do I know whether to grind finer or coarser?',
 answer:
 'Let your taste guide you: if the coffee tastes bitter and dry, grind coarser so the water flows faster. If it tastes sour, salty or watery, grind finer to increase the contact surface area.',
 },
 {
 question: "What is 'channeling' and how does grind affect it?",
 answer:
 'Channeling occurs when water finds a path of least resistance through the coffee bed. An uneven or inappropriate grind for the pressure, especially in espresso, encourages this problem and ruins extraction.',
 },
 {
 question: 'Can I use this chart with a blade grinder?',
 answer:
 'Blade grinders produce non-uniform particles, fine powder and large chunks simultaneously. The micron values are indicative, but actual results will vary significantly compared to a burr grinder.',
 },
 {
 question: 'What does grinder uniformity mean in the visualization?',
 answer:
 'The particle distribution shown simulates the real uniformity of each grinder. A Comandante C40 with 0.95 uniformity produces very consistent particles; a Hario Skerton with 0.40 shows much more size variation.',
 },
].slice(0, 5);

const howToData = [
 {
 name: 'Select your grinder',
 text: 'Choose your model from the dropdown list. The converter will show the recommended clicks or levels specifically for your equipment.',
 },
 {
 name: 'Select your extraction method',
 text: 'Click the icon for the method you plan to use. The control panel will update with all the relevant technical parameters.',
 },
 {
 name: 'Interpret the micron indicator',
 text: "Use the micron value in the bar chart to understand the actual particle size. The tactile reference (fine salt, granulated sugar...) helps you calibrate visually.",
 },
 {
 name: 'Observe the particle simulation',
 text: "The distribution of dots shows your grinder's typical uniformity. A more homogeneous pattern means more predictable and repeatable extraction.",
 },
 {
 name: 'Adjust by taste',
 text: 'Use the diagnostic guide at the bottom as a reference. If coffee tastes bitter, go a couple of clicks coarser. If it tastes sour, go finer. Always adjust one step at a time.',
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
 inLanguage: 'en',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Frequently Asked Questions about Coffee Grind Size',
 faq: faqData,
 bibliographyTitle: 'References on Grind and Extraction',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema,
  {
  "question": "How often should I clean my grinder burrs?",
  "answer": "For manual grinders, clean every 2-3 weeks of daily use. For electric grinders, clean monthly. Accumulated coffee oils turn rancid and affect extraction freshness."
}],
 seo: buildGrindSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 step1Label: 'Step 1: Equipment Selection',
 step2Label: 'Step 2: Extraction Method',
 gaugeLabel: 'Technical Particle Map (μm)',
 distributionLabel: 'Actual Particle Distribution',
 refLabel: 'Reference',
 rangeMicrasLabel: 'Range μm',
 unitMicras: 'TARGET MICRONS (μm)',
 unitClicks: 'RECOMMENDED CLICKS',
 unitLevel: 'RECOMMENDED LEVEL',
 suggestGrinderText: "Don't see your grinder? Suggest it",
 method0Name: 'Ibrik (Turkish)',
 method0Ref: 'Talc / Fine flour',
 method0Desc: 'Extra fine powder, almost like flour. Essential for the suspension of Turkish coffee.',
 method1Name: 'Espresso',
 method1Ref: 'Fine salt',
 method1Desc: 'High-pressure extraction requires very fine grinding to create resistance.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Table salt',
 method2Desc: 'Medium pressure or hybrid immersion. Versatile and balanced texture.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Granulated sugar',
 method3Desc: 'Manual drip methods, the standard for highlighting sweetness and acidity.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Coarse sand',
 method4Desc: 'Thick filters or short immersion. Requires constant and steady flow.',
 method5Name: 'French Press',
 method5Ref: 'Coarse salt',
 method5Desc: 'Extended immersion needs large particles to filter through the metal mesh.',
 method6Name: 'Cold Brew',
 method6Ref: 'Peppercorns',
 method6Desc: 'Cold extraction over many hours requires the coarsest grind possible.',
 troubleIssue0: 'Tastes bitter, dry or astringent?',
 troubleSolution0:
 'You are over-extracting. Grind coarser so water flows faster and extracts fewer bitter compounds.',
 troubleAction0: 'Grind coarser',
 troubleIssue1: 'Tastes sour, salty or watery?',
 troubleSolution1:
 'You are under-extracting. Grind finer to increase contact surface and extract more sugars and body.',
 troubleAction1: 'Grind finer',
 },
};
