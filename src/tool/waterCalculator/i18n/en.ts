import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildWaterSeo } from '../../seoTranslations';

const slug = 'sca-coffee-water-calculator';
const title = 'SCA Coffee Water Calculator';
const description = 'Calculate custom mineral recipes for specialty coffee according to SCA guidelines for TDS, hardness, alkalinity, and pH.';

const faqData = [
 { question: 'What is the SCA water standard?', answer: 'The Specialty Coffee Association defines target ranges for hardness, alkalinity, pH, and sodium to support balanced extraction and protect equipment.' },
 { question: 'Why should I not use tap water directly?', answer: 'Tap water changes by city and season. Chlorine, scale, or unbalanced minerals can mute specialty coffee and damage boilers. Mineralising distilled water gives repeatable results.' },
 { question: 'Where can I get the mineral salts?', answer: 'Epsom salt and baking soda are commonly available from pharmacies or supermarkets. Calcium chloride is often sold by home-brewing suppliers. Always choose food-grade products.' },
 { question: 'Is this safe for my espresso machine?', answer: 'The calculator shows corrosion and scale risk. Very pure water can corrode metal, while very hard water creates deposits. SCA and Barista Hustle profiles balance equipment life and flavour.' },
 { question: 'What is the difference between magnesium and calcium in coffee?', answer: 'Magnesium extracts fruity and sweet compounds efficiently. Calcium adds body and a silky texture but can create more boiler scale over time.' },
 { question: 'Can I save my usual concentrations?', answer: 'Yes. The calculator stores the concentrate values you enter in your browser, so your customised recipe is ready the next time you open it.' },
];

const howToData = [
 { name: 'Get a pure base water', text: 'Use distilled, demineralised, or reverse-osmosis water. Starting near zero dissolved solids gives you full control.' },
 { name: 'Prepare concentrate bottles', text: 'Dissolve each salt separately in 100 ml of distilled water using the recommended Epsom salt, calcium chloride, and bicarbonate amounts.' },
 { name: 'Choose your target profile', text: 'Select SCA Ideal, Barista Hustle, Hendon, Melbourne, or create a custom profile with your own GH and KH values.' },
 { name: 'Enter the final volume', text: 'Enter how many litres you want to mineralise. The calculator adjusts the concentrate doses for that exact volume.' },
 { name: 'Add concentrates and top up', text: 'Use a precision syringe to add the indicated amounts, then fill the container to the final volume with distilled water.' },
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
  faqTitle: 'Frequently Asked Questions About the Coffee Water Calculator',
 faq: faqData,
  bibliographyTitle: 'Technical References and SCA Standards',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildWaterSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
  sectionMixTitle: 'Mixing Configuration',
  labelVolume: 'Final Volume',
  labelProfile: 'Target Water Profile',
  customProfileBtn: 'Custom',
  labelGH: 'Target GH',
  labelKH: 'Target KH',
  concentratesTitle: 'Concentrate Bottles (g/100ml)',
  saltMgName: 'Magnesium (Epsom)',
  saltCaName: 'Calcium (CaCl2)',
  saltBufName: 'Bicarbonate (Sodium)',
  recipeTitle: 'Recipe',
  labelMg: 'Magnesium:',
  labelCa: 'Calcium:',
  labelBuffer: 'Bicarbonate:',
  labelDistilledWater: 'Distilled Water Up To',
  copyBtn: 'Copy Recipe',
  copiedText: 'Copied!',
  safetyMetalsTitle: 'Metal Safety',
  safetyScaleTitle: 'Scale Risk',
  calculatingText: 'Calculating...',
  glossaryTitle: 'Quick Mineral Guide',
  profileSubTemplate: 'Target: {gh} GH / {kh} KH',
  customProfileName: 'Custom',
  corrosionHigh: 'Danger: Very aggressive water. It may corrode boilers and copper components.',
  corrosionMedium: 'Acceptable: Moderate corrosion risk. Recommended for filters.',
  corrosionLow: 'Safe: The water has enough buffer to protect metal components.',
  scaleHigh: 'Danger: Scale formation is imminent. Use only for manual brewing methods.',
  scaleMedium: 'Caution: It may create deposits in espresso machines over time.',
  scaleLow: 'Safe: No significant risk of scale buildup.',
 copyTemplate:
  'Coffee Water Recipe ({profileName}):\n- Volume: {liters}L\n- Magnesium Concentrate: {mg}ml\n- Calcium Concentrate: {ca}ml\n- Bicarbonate Concentrate: {buf}ml\n- Distilled Water: {water}ml',
  glossary0Term: 'Total Hardness (GH)',
 glossary0Desc:
  'The sum of calcium and magnesium. Magnesium highlights sweetness and complexity; calcium adds body and texture.',
  glossary1Term: 'Alkalinity (KH)',
 glossary1Desc:
  "The water's ability to neutralize acids. High KH mutes coffee acidity; low KH makes it taste sour.",
  glossary2Term: 'TDS (Total Dissolved Solids)',
 glossary2Desc:
  'Total dissolved solids. In mineralized water, this is the sum of all added salts.',
  glossary3Term: 'Magnesium',
 glossary3Desc:
  'It extracts complex, fruity flavour compounds efficiently and is a popular mineral for specialty coffee.',
 },
};
