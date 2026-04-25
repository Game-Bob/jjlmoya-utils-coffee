import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Acidic / Sour',
    bitter: 'Bitter / Burnt',
    watery: 'Watery / Weak',
    astringent: 'Astringent / Drying',
  },
  causes: {
    acidic: ['Grind too coarse (under-extraction)', 'Water temperature too low', 'Brewing time too short', 'Coffee too fresh (not degassed)'],
    bitter: ['Grind too fine (over-extraction)', 'Water temperature too high', 'Brewing time too long', 'Stale or dark roast coffee'],
    watery: ['Grind too coarse (weak extraction)', 'Brew ratio too high (more water)', 'Brewing time too short', 'Coffee too old or low quality'],
    astringent: ['Water quality issues (too many minerals)', 'Over-extraction combined with mineral content', 'Grind too fine with hard water', 'Brewing temperature too high'],
  },
  solutions: {
    acidic: 'Water flows too quickly through coarse grounds without extracting the body. Finer grind increases contact surface and slows flow.',
    bitter: 'Water spent too long extracting—over-extracting bitter compounds and ash. Coarser grind reduces contact time and extraction intensity.',
    watery: 'Insufficient dissolved solids in your cup. Finer grind or increased coffee dose raises extraction percentage and body.',
    astringent: 'Mineral-rich water over-extracts and bonds to coffee compounds, creating a drying mouthfeel. Coarser grind reduces over-extraction while filtering improves water quality.',
  },
  actions: {
    acidic: { text: 'Grind slightly finer', textSevere: 'Grind much finer', icon: 'mdi:chevron-left' },
    bitter: { text: 'Grind slightly coarser', textSevere: 'Grind much coarser', icon: 'mdi:chevron-right' },
    watery: { text: 'Grind finer or use 5g more coffee', textSevere: 'Grind much finer or use 7g more coffee', icon: 'mdi:plus-circle' },
    astringent: { text: 'Use filtered water and grind coarser', textSevere: 'Use filtered water and grind much coarser', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Like fine salt', bitter: 'Like flour', watery: 'Like cocoa powder', astringent: 'Slightly finer flour' },
    pourover: { acidic: 'Like table salt', bitter: 'Like coarse sand', watery: 'Like fine cornmeal', astringent: 'Fine sand' },
    aeropress: { acidic: 'Like fine cornmeal', bitter: 'Like table salt', watery: 'Like finely ground pepper', astringent: 'Medium sand' },
    frenchpress: { acidic: 'Like breadcrumbs', bitter: 'Like rock salt', watery: 'Like sea salt', astringent: 'Coarse sand' },
    moka: { acidic: 'Like fine sea salt', bitter: 'Like fine sand', watery: 'Like table salt', astringent: 'Medium-fine sand' },
    coldbrew: { acidic: 'Like coarse sea salt', bitter: 'Like gravel', watery: 'Like rock salt', astringent: 'Coarse sand with grains' },
  },
  secondaryAction: 'Brew at {temp}°C for {time}',
  tertiaryAction: 'Allow the coffee to cool to room temperature before tasting to catch all notes.',
};

const slug = 'coffee-flavor-diagnosis-extraction-problems';
const title = 'Coffee Extraction Diagnostics: The Brew Fixer';
const description =
  'Diagnose why your coffee tastes bad in seconds. Get personalized adjustments for grind size, temperature, and time based on your brewing method and taste profile.';

const faqData = [
  {
    question: 'How do I know if my coffee is under-extracted or over-extracted?',
    answer:
      'Under-extraction (sour/acidic taste) means water passed through too quickly without dissolving enough compounds. Over-extraction (bitter/burnt taste) means water spent too much time in contact with the coffee. The Brew Fixer helps you identify which one is happening by analyzing your flavor notes and brew method.',
  },
  {
    question: 'What is the most common brewing mistake?',
    answer:
      'The grind size. Most people grind either too coarse (resulting in weak, sour coffee) or too fine (resulting in bitter, over-extracted coffee). Dialing in your grinder to the exact size for your brew method is the single most impactful adjustment you can make.',
  },
  {
    question: 'Does temperature really matter that much?',
    answer:
      'Yes. Water temperature controls extraction speed. Too cold and you under-extract (sour). Too hot and you over-extract (bitter). Each brew method has an ideal range: pour-overs and V60s prefer 92-96°C, while French presses do better at 85-90°C to avoid over-extraction during the long soak.',
  },
  {
    question: 'Why is my coffee astringent or drying in my mouth?',
    answer:
      'Astringency is usually caused by mineral-heavy water or a combination of over-extraction plus minerals. Try using filtered water and slightly coarser grind. If that does not help, your water TDS (total dissolved solids) might be too high—consider a water filter.',
  },
  {
    question: 'Can I fix a bad cup by adjusting temperature and time alone?',
    answer:
      'Temperature and time help, but grind size is usually the root cause. If your grind is too coarse, brewing longer or hotter will only help slightly. The Brew Fixer will always recommend grind adjustment as the primary action because it has the biggest impact on extraction.',
  },
  {
    question: 'Should I use the same brew recipe for all my coffees?',
    answer:
      'No. Fresh coffee (1-5 days old) extracts faster and may need a slightly coarser grind than older coffee. Light roasts are denser and may need finer grinds; dark roasts are more porous and prefer coarser grinds. Adjust incrementally and taste after each change.',
  },
];

const howToData = [
  {
    name: 'Select your brewing method',
    text: 'Choose the coffee maker you used: pour-over, French press, Aeropress, Moka pot, espresso machine, or cold brew. The tool will then provide method-specific recommendations.',
  },
  {
    name: 'Identify the dominant flavor defect',
    text: 'Taste your coffee and select the flavor that stands out most: acidic (sour), bitter (burnt), watery (weak), or astringent (drying). You can also select a secondary flavor if the coffee has a complex defect.',
  },
  {
    name: 'Rate the severity',
    text: 'Move the slider to indicate how strong the flavor defect is. Slight means you barely notice it; severe means it dominates the cup. This helps the tool calibrate how aggressive the adjustment should be.',
  },
  {
    name: 'Run the diagnosis',
    text: 'Click the "Diagnose" button and the tool will analyze your inputs and provide a primary action (usually grind adjustment), secondary actions (temperature and time), and a texture reference so you know what to aim for.',
  },
  {
    name: 'Adjust and test',
    text: 'Make the recommended change to your setup (e.g., grind coarser, brew longer, use filtered water). Brew a new cup and taste it. Small adjustments accumulate, so be patient.',
  },
  {
    name: 'Give feedback',
    text: 'Once you brew the next cup, tell the tool if it improved. If yes, you will see a celebratory confetti animation. If not, go back and try different parameters.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions About Coffee Extraction',
  faq: faqData,
  bibliographyTitle: 'Technical References and Coffee Science',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Does Your Coffee Taste Bad? The Extraction Diagnostics Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The difference between exceptional espresso and a cup that tastes like burnt paper comes down to a single concept: <strong>coffee extraction</strong>. Extraction is the process by which water dissolves soluble compounds from ground coffee. Get it right, and you unlock complexity, sweetness, and clarity. Get it wrong, and you get sourness, bitterness, or weakness.',
    },
    {
      type: 'summary',
      title: 'What you will learn from the Brew Fixer',
      items: [
        '<strong>How to diagnose extraction defects:</strong> Identify whether your coffee is under-extracted, over-extracted, weak, or has mineral/water quality issues.',
        '<strong>The three levers that control extraction:</strong> Grind size, water temperature, and contact time. Which one should you adjust first? The Brew Fixer tells you.',
        '<strong>Method-specific recommendations:</strong> The ideal grind for a V60 is completely different from the ideal grind for a French press. Get personalized advice for your brewer.',
        '<strong>Texture references and feedback loops:</strong> Know exactly what grind size to target by comparing with familiar materials (fine powder, sea salt, sand).',
      ],
    },
    {
      type: 'title',
      text: 'The Three Dimensions of Coffee Extraction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Extraction percentage is the mass of dissolved solids divided by the mass of the original dry coffee. Specialty coffee aims for <strong>18-20% extraction</strong> across all methods. Anything lower tastes sour; anything higher tastes bitter.',
    },
    {
      type: 'list',
      items: [
        '<strong>Grind size</strong> controls surface area. Finer grinds extract faster because water has more surface to dissolve compounds from. Coarser grinds extract slower.',
        '<strong>Water temperature</strong> controls dissolution rate. Hot water (94-96°C) extracts faster; cool water (85-90°C) extracts slower. Temperature also affects which compounds dissolve first.',
        '<strong>Contact time</strong> is how long water stays in contact with coffee. Pour-overs (2:30-3:30 min), Aeropress (1:30-2:00 min), French press (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'How to Diagnose Sour Coffee (Under-Extraction)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sour coffee tastes like lemon, lime, or apple—acidic and sharp. It means water did not spend enough time extracting solids from the coffee. The simplest fix is almost always <strong>grind finer</strong> to increase surface area and slow down the water.',
    },
    {
      type: 'list',
      items: [
        'Grind the coffee finer (reduce grind size by 5-10 µm)',
        'Or extend brew time slightly (add 15-30 seconds)',
        'Or increase water temperature to 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'How to Diagnose Bitter Coffee (Over-Extraction)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bitter coffee tastes burnt, ashy, or woody. It means water spent too long extracting solids—past the point of desirable compounds and into undesirable ones. The fix is almost always <strong>grind coarser</strong> to increase water flow and reduce contact time.',
    },
    {
      type: 'list',
      items: [
        'Grind the coffee coarser (increase grind size by 5-10 µm)',
        'Or reduce brew time (subtract 15-30 seconds)',
        'Or reduce water temperature to 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'How to Diagnose Watery Coffee (Weak, Thin)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Weak coffee lacks flavor and body. It usually means either your grind is too coarse, your brew ratio is too high (more water than coffee), or your coffee is stale. Dialing in the grinder is the fastest solution.',
    },
    {
      type: 'list',
      items: [
        'Use a finer grind so water has more surface to extract from',
        'Use more coffee (increase brew ratio)',
        'Brew slightly longer or at higher temperature',
      ],
    },
    {
      type: 'title',
      text: 'How to Diagnose Astringent Coffee (Drying, Mineral Taste)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Astringency feels drying in your mouth—like you have sucked on a grape skin. It is usually caused by hard water (high mineral content) combined with over-extraction. This one is trickier because it requires both grind adjustment <em>and</em> water quality improvement.',
    },
    {
      type: 'list',
      items: [
        'Use filtered water to reduce minerals (target TDS 60-150 ppm)',
        'Grind coarser to reduce over-extraction',
        'Try slightly cooler water (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Grind Size Chart: What Does Each Grind Look and Feel Like?',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Grind Name', 'Particle Size', 'Texture Reference', 'Best Methods'],
      rows: [
        ['Extra Fine', '5-15 µm', 'Fine powder, cocoa', 'Espresso, Turkish'],
        ['Fine', '15-30 µm', 'Powdered sugar', 'Moka pot, Aeropress'],
        ['Medium-Fine', '30-50 µm', 'Sand, sea salt', 'V60, Chemex, Pour-over'],
        ['Medium', '50-70 µm', 'Beach sand', 'Drip machine, Flat-bottom filters'],
        ['Coarse', '70-90 µm', 'Coarse sand, rock salt', 'French press, Cupping'],
        ['Extra Coarse', '90+ µm', 'Peppercorns, breadcrumbs', 'Cold brew, Percolator'],
      ],
    },
    {
      type: 'title',
      text: 'Water Quality: TDS and Its Effect on Extraction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Total Dissolved Solids (TDS) is the measure of mineral content in water. Tap water varies widely by region: some cities have 50 ppm (soft water), others 300+ ppm (hard water). Coffee extraction is sensitive to water quality.',
    },
    {
      type: 'list',
      items: [
        '<strong>Too soft (0-50 ppm):</strong> Water over-extracts, coffee tastes salty and thin.',
        '<strong>Ideal (60-150 ppm):</strong> Sweet, balanced extraction with full body.',
        '<strong>Too hard (200+ ppm):</strong> Minerals bind to coffee compounds, creating astringency and drying mouthfeel.',
      ],
    },
    {
      type: 'tip',
      title: 'Quick Water Quality Fix',
      html: '<p>If you suspect hard water, try brewing with filtered water or bottled water for comparison. If the coffee immediately tastes better, you have found your culprit. Invest in a simple water filter pitcher (Brita, PUR) or a whole-house filter.</p>',
    },
  ],
  ui: {
    methodLabel: 'What are you brewing?',
    methodPourover: 'Pour Over',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Moka Pot',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Select your brewing device',
    flavorLabel: 'What does it taste like?',
    flavorAcidic: 'Acidic',
    flavorBitter: 'Bitter',
    flavorWatery: 'Watery',
    flavorAstringent: 'Astringent',
    flavorHint: 'Select up to 2 flavors',
    severityLabel: 'How strong is the issue?',
    severitySlightLabel: 'Barely noticeable',
    severityModerateLabel: 'Moderate',
    severitySevereLabel: 'Overpowering',
    diagnoseBtn: 'Diagnose My Coffee',
    resetBtn: 'Reset',
    resultTitle: 'Diagnosis Complete',
    resultExplanation: 'What is happening in your cup',
    actionMainLabel: 'Primary Action',
    actionSecondaryLabel: 'Temperature & Time',
    actionTertiaryLabel: 'Pro Tip',
    textureReferenceLabel: 'Texture Reference',
    copyDiagnosisBtn: 'Copy Diagnosis',
    feedbackLabel: 'Did your coffee improve?',
    feedbackSuccessTemplate: 'Amazing! Your adjustment fixed it.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Press pot, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka pot, Stovetop',
    methodEspressoDesc: 'Espresso machine, lever',
    methodColdbrewDesc: 'Immersion, cold',
    fadeOutMessage: 'Great job! Keep dialing in.',
    backBtn: 'Back',
    mainIssueLabel: 'Main Issue',
    improvedBtn: 'Improved',
    notYetBtn: 'Not yet',
    copiedBtn: 'Copied!',
    combinedLabel: 'Combined',
    diagnosisTitle: 'The Brew Fixer Diagnosis',
    issueLabel: 'Issue',
    causeLabel: 'Cause',
    actionLabel: 'Action',
    whyLabel: 'Why',
    nextLabel: 'Next',
    improvementHint: 'Make the adjustment and brew another cup.',
  },
};
