import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

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
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Coffee Ratio Calculator: The Master Guide to Perfect Extraction (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Brewing a cup of specialty coffee is not a subjective culinary act; it is an experiment in <strong>fluid chemistry</strong> and <strong>mass transfer</strong>. At the center of this process lies the concept of <strong>Brew Ratio</strong>, a critical measure that dictates the quantitative relationship between the solute (ground coffee) and the solvent (water). Our calculator integrates the standards of the <em>Specialty Coffee Association (SCA)</em> and principles of applied thermodynamics to enable baristas and enthusiasts to achieve perfect reproducibility in their extractions.',
    },
    {
      type: 'summary',
      title: 'What you will learn about Coffee Ratio',
      items: [
        '<strong>Brew Ratio:</strong> How the weight relationship between coffee and water (e.g. 1:15) determines the potential strength and sensory profile of your cup.',
        '<strong>TDS and Extraction:</strong> The science behind dissolved solids and what percentage of the bean should actually end up in your drink.',
        '<strong>Retention Adjustment:</strong> Why coffee absorbs 2g of water per gram of powder and how to calculate the extra water needed.',
        '<strong>Specific Methods:</strong> The ideal proportions for V60, French Press, Espresso and flash brew iced coffee recipes.',
      ],
    },
    {
      type: 'title',
      text: 'What is Brew Ratio and why is it the most important variable?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Coffee contains approximately 30% soluble material, but not all of that material is desirable to the human palate. Water, acting as a universal solvent, extracts compounds in a specific order based on their molecular weight and chemical affinity. The coffee ratio precisely controls how much dissolving capacity we deliver to each gram of coffee.',
    },
    {
      type: 'list',
      items: [
        '<strong>Acidic Phase (Lipids and Organic Acids):</strong> These dissolve first due to their high solubility. They contribute brightness, malic or citric acidity and fruity notes. A ratio that is too low (under-extraction) stops the process here, resulting in a sour and salty cup.',
        '<strong>Sweet Phase (Sugars and Carbohydrates):</strong> These are extracted next. They generate balance, sweetness and body. This is the "golden window" where coffee reaches its maximum aromatic complexity and structural balance.',
        '<strong>Bitter Phase (Fibers and Phenolic Compounds):</strong> These are the slowest to dissolve. With excessive ratios (over-extraction), water degrades coffee cells, extracting drying bitters, ash and woody notes.',
      ],
    },
    {
      type: 'title',
      text: 'Recommended ratios: Proportions by extraction method',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Each extraction method requires a specific ratio due to variables such as contact time, pump pressure or filter pore size. The following technical table outlines industry standards for 2026:',
    },
    {
      type: 'table',
      headers: ['Brewing Method', 'Ratio (Grams/Water)', 'Cup Profile', 'Target Time'],
      rows: [
        ['Espresso', '1:2 to 1:2.5', 'Intense, viscous, dense crema', '25-30 sec'],
        ['V60 / Pour-Over', '1:15 to 1:16', 'Clean, bright, clear notes', '2:30-3:30 min'],
        ['Aeropress', '1:12 to 1:15', 'Versatile, medium-high body', '1:30-2:00 min'],
        ['French Press', '1:12 to 1:14', 'Textured, heavy, oily', '4:00-5:00 min'],
        ['Cold Brew', '1:8 to 1:12', 'Sweet, low acidity, great body', '12-24 hours'],
      ],
    },
    {
      type: 'title',
      text: 'Calculating the water needed: The bean Retention Factor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'One of the most common mistakes in manual brewing is ignoring that ground coffee is a porous hydrophilic structure that retains a constant amount of water. Not all the water you pour ends up in the cup.',
    },
    {
      type: 'paragraph',
      html: 'Scientifically, ground coffee retains approximately <strong>2.0 grams of water per 1.0 gram of coffee</strong>. Our calculator introduces <strong>Dynamic Retention Adjustment</strong>: if you need to fill a specific 300ml container, the system deduces that you must pour 340ml of water to compensate for grain absorption, keeping the extraction ratio—and therefore the flavor—intact.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Coffee Dose', value: '20g', icon: 'mdi:coffee' },
        { label: 'Water Poured', value: '300ml', icon: 'mdi:water' },
        { label: 'Retention', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'In Cup', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'The importance of Bloom: Degassing for uniform extraction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The "Bloom" phase is not just aesthetic; it is a physical necessity. During roasting, coffee generates CO2 that becomes trapped in its cellular matrix. If we pour all the water continuously, the gas escapes violently, creating micro-channels (channeling) and preventing the solvent from penetrating the center of the coffee particles.',
    },
    {
      type: 'tip',
      title: 'Homogeneous Saturation Technique',
      html: '<p>For a perfect bloom, pour exactly twice the weight of coffee in water (1:2 bloom ratio). Gently agitate or swirl to ensure all the coffee is wet. Wait 30-45 seconds. The gas release will allow subsequent pours to flow in a laminar manner, extracting solids uniformly throughout the coffee bed.</p>',
    },
    {
      type: 'title',
      text: 'Iced Coffee Tutorial: How to brew iced coffee without diluting the flavor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Specialty iced coffee (Flash Brew) requires thermodynamic recalibration. The goal is to extract volatile oils at 94°C to capture aromatic complexity, then cool them rapidly to avoid oxidation and loss of brightness.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% Hot Water:</strong> The minimum amount needed to achieve 18-20% extraction without over-extracting or cooling the bed too soon.',
        '<strong>40% Thermal Ice:</strong> Placed in the receiving carafe. The thermal energy of the coffee transfers to the ice (latent heat of fusion), cooling the drink to below 5°C instantly.',
        '<strong>Final Strength:</strong> Combined, the final ratio (e.g. 1:15) remains exact, resulting in a vibrant, cold drink with the correct flavor concentration.',
      ],
    },
    {
      type: 'title',
      text: 'Grind size and Coffee Ratio: The key to contact surface area',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The ratio is only half the equation. The grind determines the <strong>Total Exposed Surface Area</strong> to the solvent. Smaller particles (fine grind) have more proportional surface area, which dramatically accelerates the extraction of chemical compounds.',
    },
    {
      type: 'title',
      text: 'Reproducibility and Science: Turn your kitchen into a barista laboratory',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Excellence in specialty coffee comes from metric consistency. Our <strong>Custom Recipes</strong> feature lets you create a technical repository of your successful calibrations. It is not just a favorites file; it is an analysis tool to compare how the same kilo of coffee reacts to a 1:15 ratio versus a 1:16, allowing you to adjust the recipe precisely.',
    },
  ],
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
