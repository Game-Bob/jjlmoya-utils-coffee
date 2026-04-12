import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

const slug = 'sca-coffee-water-calculator';
const title = 'SCA Coffee Water Calculator';
const description =
  'Calculate exact mineral concentrations for specialty coffee. SCA, Barista Hustle and Hendon profiles. Control Magnesium, Calcium and Bicarbonate to maximize flavor and protect your machine.';

const faqData = [
  {
    question: 'What is the SCA water quality standard?',
    answer:
      'The Specialty Coffee Association defines a technical standard for brewing water, specifying optimal ranges for total hardness (GH), alkalinity (KH), pH and sodium to achieve balanced extraction that enhances flavor without damaging equipment.',
  },
  {
    question: 'Why not just use tap water?',
    answer:
      'Tap water varies significantly by location and season. It may contain chlorine, excess limescale or mineral levels that mask specialty coffee flavors and damage boilers and seals. Mineralizing distilled water gives you full control and repeatable results.',
  },
  {
    question: 'Where do I get the mineral salts?',
    answer:
      'Epsom salts (magnesium sulfate) and sodium bicarbonate are available at pharmacies and supermarkets. Calcium chloride is common in home brewing supply shops. Always ensure they are food-grade quality.',
  },
  {
    question: 'Is it safe for my espresso machine?',
    answer:
      'The calculator includes a real-time risk indicator. Very pure water corrodes metal components; very hard water causes limescale buildup. The SCA Ideal and Barista Hustle profiles are designed to balance equipment longevity with flavor quality.',
  },
  {
    question: 'What is the difference between Magnesium and Calcium in coffee?',
    answer:
      'Magnesium extracts fruity and sweet flavor compounds more efficiently and is the preferred mineral for filter methods. Calcium delivers more body and silky texture but has a greater tendency to form scale deposits in boilers over time.',
  },
];

const howToData = [
  {
    name: 'Get pure base water',
    text: 'Purchase distilled or demineralized water, or use a reverse osmosis system. The goal is to start at 0 ppm total dissolved solids for complete control over mineralization.',
  },
  {
    name: 'Prepare your stock concentrate bottles',
    text: 'Dissolve each salt separately in 100ml of distilled water: 2.46g of Epsom salt for Magnesium, 1.47g of CaCl2 for Calcium, and 1.68g of bicarbonate for the Buffer.',
  },
  {
    name: 'Select your target profile',
    text: 'Choose SCA Ideal (balanced), Barista Hustle (sweetness and brightness), Hendon (body), Melbourne (delicate) or create a custom profile with your own GH and KH values.',
  },
  {
    name: 'Enter the final volume',
    text: 'Type the amount of water you want to mineralize in liters. The calculator automatically adjusts concentrate doses for that exact volume.',
  },
  {
    name: 'Add concentrates and top up with distilled water',
    text: 'Using a precision syringe, add the indicated milliliters of each concentrate to your container and fill to the total volume with distilled water.',
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions about the SCA Coffee Water Calculator',
  faq: faqData,
  bibliographyTitle: 'Technical References and SCA Standards',
  bibliography: [
    {
      name: 'SCA Water Quality Standard',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY Water Recipes Redux',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: 'The Science of Coffee Water (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: Water Chemistry and Coffee',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Coffee Water Chemistry: Why H₂O is the Most Overlooked Ingredient',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Coffee is 98-99% water. Yet the mineral composition of that water is the most overlooked quality factor in the entire specialty coffee chain. The same Ethiopian single-origin coffee extracted with London tap water versus SCA-optimized water can taste like two completely different coffees. Our <strong>SCA coffee water calculator</strong> lets you formulate perfect brewing water from scratch using common mineral salts and distilled water.',
    },
    {
      type: 'summary',
      title: 'Why does water mineralization matter so much?',
      items: [
        '<strong>GH (General Hardness):</strong> The sum of Magnesium and Calcium ions determines the water capacity to dissolve coffee flavor compounds.',
        '<strong>KH (Carbonate Hardness):</strong> Bicarbonate concentration controls pH during extraction. Low KH produces sour coffee; high KH makes it flat.',
        '<strong>Repeatability:</strong> Municipal water changes by season and location. Mineralized water is constant and reproducible batch after batch.',
        '<strong>Equipment protection:</strong> Correct mineral levels prevent both corrosion (too-pure water) and limescale buildup (too-hard water).',
      ],
    },
    {
      type: 'title',
      text: 'The SCA Standard: Technical Limits for Perfect Brewing Water',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Minimum', 'SCA Ideal', 'Maximum'],
      rows: [
        ['Total Hardness (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alkalinity (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnesium vs Calcium: The Mineral Battle That Defines Your Cup',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Not all minerals behave the same way with coffee. Researcher Christopher Hendon demonstrated that <strong>magnesium</strong> forms ligands with complex volatile flavor molecules, extracting fruity and floral notes more efficiently. <strong>Calcium</strong> extracts heavier compounds, delivering body and silky mouthfeel but with less aromatic brightness.',
    },
    {
      type: 'tip',
      title: 'Professional barista rule of thumb',
      html: '<p>For espresso machines with brass or copper boilers, never use profiles with KH below 40 mg/L continuously. Very pure water is corrosive long-term. For filter methods (V60, Chemex, AeroPress) there is no boiler to protect, so you can safely use delicate profiles like Melbourne without concern.</p>',
    },
  ],
  ui: {
    sectionMixTitle: 'Mix Configuration',
    labelVolume: 'Final Volume',
    labelProfile: 'Target Water Profile',
    customProfileBtn: 'Custom',
    labelGH: 'Target GH',
    labelKH: 'Target KH',
    concentratesTitle: 'Stock Concentrate Bottles (g/100ml)',
    saltMgName: 'Magnesium (Epsom)',
    saltCaName: 'Calcium (CaCl2)',
    saltBufName: 'Bicarbonate (Sodium)',
    recipeTitle: 'Recipe',
    labelMg: 'Magnesium:',
    labelCa: 'Calcium:',
    labelBuffer: 'Bicarbonate:',
    labelDistilledWater: 'Distilled Water up to',
    copyBtn: 'Copy Recipe',
    copiedText: 'Copied!',
    safetyMetalsTitle: 'Metal Safety',
    safetyScaleTitle: 'Limescale Risk',
    calculatingText: 'Calculating...',
    glossaryTitle: 'Quick Mineral Guide',
    profileSubTemplate: 'Target: {gh} GH / {kh} KH',
    customProfileName: 'Custom',
    corrosionHigh: 'Danger: Very aggressive water. May corrode boilers and copper components.',
    corrosionMedium: 'Acceptable: Moderate corrosion risk. Recommended for filter methods with care on machines.',
    corrosionLow: 'Safe: Water has sufficient buffer capacity to protect metals.',
    scaleHigh: 'Danger: Imminent limescale buildup. Use only with manual filter methods.',
    scaleMedium: 'Caution: May generate scale deposits over time in espresso machines.',
    scaleLow: 'Safe: No significant risk of limescale buildup.',
    copyTemplate:
      'Coffee Water Recipe ({profileName}):\n- Volume: {liters}L\n- Magnesium concentrate: {mg}ml\n- Calcium concentrate: {ca}ml\n- Bicarbonate concentrate: {buf}ml\n- Distilled Water: {water}ml',
    glossary0Term: 'Total Hardness (GH)',
    glossary0Desc:
      'The sum of Calcium and Magnesium. Magnesium enhances sweetness and complexity; Calcium adds body and texture.',
    glossary1Term: 'Alkalinity (KH)',
    glossary1Desc:
      'The water capacity to neutralize acids. High KH suppresses coffee acidity; low KH makes it taste sour.',
    glossary2Term: 'TDS (Total Dissolved Solids)',
    glossary2Desc: 'In mineralized water, TDS represents the combined concentration of all added mineral salts.',
    glossary3Term: 'Magnesium',
    glossary3Desc:
      'Extracts complex fruity flavor compounds more efficiently. The preferred mineral for specialty coffee brewing.',
  },
};
