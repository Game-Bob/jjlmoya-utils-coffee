import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-ratio-calculator';
const title = 'AeroPress Recipe and Brew Ratio Calculator';
const description = 'Calculate water distribution, chamber capacity limits, dilution bypass, and extraction steps for AeroPress coffee brewing.';

const howTo = [
  {
    name: 'Choose Your Brewing Method and Model',
    text: 'Select either the Standard upright or Inverted method, and specify your AeroPress chamber size (Original, XL, or Go).',
  },
  {
    name: 'Set Coffee Dose and Brew Ratio',
    text: 'Enter ground coffee weight in grams and desired brew ratio, or pick a world championship recipe preset.',
  },
  {
    name: 'Review Water and Bypass Allocation',
    text: 'Check if total brew water exceeds chamber volume. The tool automatically computes bypass water to dilute directly in your mug.',
  },
  {
    name: 'Follow Interactive Extraction Timer',
    text: 'Start the step timer to execute bloom, steep immersion, and steady plunge phases with precision.',
  },
];

const faq = [
  {
    question: 'What is the difference between standard and inverted AeroPress brewing?',
    answer: 'In the standard method, the filter cap is attached at the bottom over a mug, allowing minor pre-drip during infusion unless a vacuum seal is created with the plunger. In the inverted method, the AeroPress stands upside down on the plunger, enabling complete immersion without any premature liquid leakage before flipping.',
  },
  {
    question: 'What is bypass brewing in AeroPress?',
    answer: 'Bypass brewing involves making a strong coffee concentrate in the limited chamber volume and adding clean hot or room temperature water directly into the serving mug afterwards. This allows brewing large servings or clean sweet profiles without overfilling the chamber.',
  },
  {
    question: 'What is the ideal coffee to water ratio for AeroPress?',
    answer: 'For a classic filter style cup, ratios between 1:14 and 1:17 (e.g. 11g to 15g coffee with 200g water) deliver excellent balance. For concentrated espresso-like shots or iced drinks, ratios between 1:4 and 1:8 provide strong body suited for milk or dilution.',
  },
  {
    question: 'How does grind size affect AeroPress extraction?',
    answer: 'Because AeroPress combines immersion with air pressure filtration, a medium-fine grind works best for short steeps (1 to 2 minutes). Finer grinds produce intense espresso-like body, while coarser grinds suit extended steep times without bitterness.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Specialty Coffee Tool',
    profileLabel: 'Extraction Profile',
    unitSystemLabel: 'Unit System',
    unitMetricLabel: 'Metric (g)',
    unitImperialLabel: 'Imperial (oz)',
    presetsTitle: 'Champion and Barista Recipes',
    presetCustom: 'Custom Formula',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Light Roast',
    presetWacChamp: 'WAC Bypass Champion',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Iced AeroPress',
    methodLabel: 'Brewing Technique',
    methodStandard: 'Standard Upright',
    methodInverted: 'Inverted Immersion',
    modelLabel: 'AeroPress Hardware Model',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Coffee Dose',
    doseUnitMetric: 'grams',
    doseUnitImperial: 'oz',
    ratioLabel: 'Brew Ratio',
    ratioPrefix: '1:',
    waterTempLabel: 'Water Temperature',
    waterTempUnit: '°C',
    grindLabel: 'Grind Profile',
    grindFine: 'Fine',
    grindMediumFine: 'Medium-Fine',
    grindMedium: 'Medium',
    grindCoarse: 'Coarse',
    resultsTitle: 'Brew Distribution and Metrics',
    statTotalWater: 'Total Water',
    statChamberWater: 'Chamber Water',
    statBypassWater: 'Bypass Water',
    statYield: 'Beverage Yield',
    statEstimatedTds: 'Estimated TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Bypass Dilution Required',
    bypassAlertText: 'Your target recipe requires {chamber} in the chamber and {bypass} added directly into the mug.',
    timerTitle: 'Step by Step Timer',
    timerStart: 'Start Timer',
    timerPause: 'Pause',
    timerReset: 'Reset',
    phaseBloom: 'Bloom and Wetting',
    phasePour: 'Pour and Stir',
    phaseSteep: 'Immersion Steep',
    phasePress: 'Gentle Press',
    phaseBypass: 'Add Bypass Water',
    phaseComplete: 'Extraction Ready',
    guideTitle: 'Extraction Guidelines',
    guideStep1Title: 'Rinse Filter and Dose Coffee',
    guideStep1Desc: 'Place paper or metal filter into the cap and rinse with warm water. Dose freshly ground coffee into chamber.',
    guideStep2Title: 'Pour Chamber Water',
    guideStep2Desc: 'Add calculated chamber water at specified temperature and stir gently to saturate all grounds.',
    guideStep3Title: 'Insert Plunger and Steep',
    guideStep3Desc: 'Place plunger into the top to form a vacuum seal and let the coffee immerse for target time.',
    guideStep4Title: 'Press and Dilute',
    guideStep4Desc: 'Press plunger steadily down for 20 to 30 seconds. Stop at the hiss and add bypass water if calculated.',
    ratioStrengthLight: 'Light Delicate',
    ratioStrengthMedium: 'Balanced Cup',
    ratioStrengthStrong: 'Rich Bold',
    ratioStrengthConcentrate: 'Espresso Style Concentrate',
    chamberWaterLabel: 'Chamber Water',
    coffeeBedLabel: 'Coffee Bed',
    airGapLabel: 'Air Headspace',
  },
  seo: [
    { type: 'title', text: 'AeroPress Brewing Science and Ratio Fundamentals', level: 2 },
    {
      type: 'paragraph',
      html: 'The <strong>AeroPress</strong> is among the most versatile coffee makers ever created, combining full immersion extraction with pneumatic pressure filtration. Achieving consistent sweetness, clarity, and body requires dialing in precise water to coffee ratios tailored to your hardware chamber volume and grind size.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Chamber Volume Constraints and Bypass Physics',
      html: 'A standard AeroPress chamber comfortably holds approximately 220ml to 240ml of water once the coffee bed is accounted for. When larger beverage volumes are needed, specialty baristas utilize bypass brewing: pulling a rich extraction within chamber limits and diluting the cup with clean hot water.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Golden Filter Ratio' },
        { value: '230 ml', label: 'Standard Chamber Cap' },
        { value: '1.2-1.5%', label: 'Target Golden TDS' },
      ],
    },
    { type: 'title', text: 'Standard Versus Inverted Method Comparison', level: 3 },
    {
      type: 'paragraph',
      html: 'Choosing between standard upright and inverted orientations affects both contact time control and flow dynamics during early infusion stages.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Standard Upright Brewing',
          description: 'Filter cap sits downward over the mug. Inserting the plunger at an angle creates a vacuum to stop premature dripping.',
          points: [
            'Simpler and safer operation',
            'Slight passive percolation at the start',
            'Favored by James Hoffmann for consistency',
          ],
        },
        {
          title: 'Inverted Immersion Brewing',
          description: 'AeroPress rests upside down on the plunger base, preventing any liquid from escaping until the chamber is inverted onto a cup.',
          highlight: true,
          points: [
            'Complete control over immersion duration',
            'Ideal for high-dose recipes and concentrates',
            'Requires careful inversion technique',
          ],
        },
      ],
    },
    { type: 'title', text: 'Understanding Bypass Brewing for Large Cups', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass brewing is the secret behind many World AeroPress Championship winning recipes. By extracting solubles at a tight 1:6 to 1:8 ratio, undesirable late astringent compounds are avoided. Adding bypass water directly to the decanter restores pleasant beverage strength without over extraction.',
    },
    {
      type: 'table',
      headers: ['Brewing Style', 'Coffee Dose', 'Chamber Water', 'Bypass Water', 'Typical Grind'],
      rows: [
        ['Hoffmann Filter Cup', '11g', '200g', '0g', 'Medium-Fine (600µm)'],
        ['Tim Wendelboe Light', '14g', '200g', '0g', 'Medium (700µm)'],
        ['WAC Championship Concentrate', '30g', '120g', '105g', 'Coarse (900µm)'],
        ['Alan Adler Classic Shot', '17g', '80g', '100g (Optional)', 'Fine (450µm)'],
        ['Flash Iced AeroPress', '18g', '150g', '100g Ice', 'Medium-Fine (550µm)'],
      ],
    },
    { type: 'title', text: 'Best Practices for Optimal AeroPress Extraction', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Water temperature calibration:</strong> Use 92°C to 96°C for light roasts to maximize fruit acidity, and 80°C to 85°C for dark roasts to avoid bitter tannins.',
        '<strong>Gentle pressing speed:</strong> Apply steady, gentle downward pressure for 20 to 30 seconds. Forcing the plunger violently compresses the puck and causes channeling.',
        '<strong>Filter preparation:</strong> Pre-rinse paper filters with hot water to eliminate paper taste and secure the disc firmly inside the cap.',
        '<strong>Stop at the hiss:</strong> Terminating the plunge right as air hisses through the bed prevents extracting residual bitter oils and fines.',
      ],
    },
    {
      type: 'summary',
      title: 'Workflow Summary',
      items: [
        'Match grind size to your steep duration: finer for quick plunges, coarser for long steeps.',
        'Use the automatic bypass calculator whenever your desired yield exceeds the chamber volume.',
        'Monitor temperature and timing meticulously for repeatable specialty coffee quality.',
      ],
    },
  ],
  faq,
  faqTitle: 'Frequently Asked Questions about AeroPress Ratio and Recipes',
  bibliography,
  bibliographyTitle: 'Technical References and Coffee Science',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
