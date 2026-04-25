import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-brew-timer';
const title = 'Coffee Brew Timer';
const description =
  'Professional specialty coffee timer with pour phases, rhythm audio alerts and extraction summary. Optimized for V60, Chemex and Aeropress.';

const faqData = [
  {
    question: 'Why use this timer instead of my phone?',
    answer:
      'This timer is designed specifically for coffee. It includes visual phases (Bloom, Pour, Drain), audio alerts 3 seconds before each transition and lets you configure your full recipe so you never lose rhythm during the pour.',
  },
  {
    question: 'What is bloom time?',
    answer:
      'It is the initial pre-infusion (usually 30 to 45 seconds) where a small amount of water is poured to release CO2. The timer highlights this phase in amber so you know when to wait and when to keep pouring.',
  },
  {
    question: 'How do I know if my extraction time is correct?',
    answer:
      'For a standard V60, total time should be between 2:30 and 3:15 minutes. If it finishes sooner, your grind is too coarse. If it takes longer, it is too fine. The timer lets you diagnose this process precisely.',
  },
  {
    question: 'Does it have audio alerts?',
    answer:
      'Yes. The system emits a short beep before the bloom phase ends and at the end of the process, letting you focus on the water stream without constantly looking at the screen.',
  },
  {
    question: 'Is it compatible with Chemex?',
    answer:
      'Absolutely. You can adjust the total time to 4:30 or 5:00 minutes (typical for Chemex due to its thick filter) in the settings section at the bottom.',
  },
  {
    question: 'Does it work on mobile?',
    answer:
      'It is optimized for mobile use, with large buttons that are easy to press even with wet hands or while holding your gooseneck kettle.',
  },
];

const howToData = [
  {
    name: 'Configure your recipe',
    text: 'In the bottom section, adjust total water, bloom water, bloom time and total time according to your brewing method (V60, Chemex, Aeropress).',
  },
  {
    name: 'Press the start button',
    text: 'Press the large start button. The timer will begin and show the active phase in the progress bar at the top.',
  },
  {
    name: 'Bloom phase',
    text: 'Pour the bloom water (shown on screen) in a spiral and wait for the timer to advance. You will receive an audio alert 3 seconds before it ends.',
  },
  {
    name: 'Pour phase',
    text: 'Continue pouring the remaining water until you reach the total weight. Pour in slow, steady circles for uniform extraction.',
  },
  {
    name: 'Drain phase',
    text: 'Wait for the coffee to drain completely through the filter. This phase finishes the extraction and determines the clarity and finish of your cup.',
  },
  {
    name: 'Review the summary',
    text: 'When done, the timer shows the total time and water poured. Note these values alongside your flavor impressions to refine the recipe.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions about the Coffee Timer',
  faq: faqData,
  bibliographyTitle: 'Technical References and SCA Protocols',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Coffee Brew Timer: The Science of Extraction Timing (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the world of specialty coffee, the <strong>contact time</strong> between water and ground coffee is not a simple waiting metric; it is the kinetic factor that decides which chemical compounds end up in your cup. One extra second can mean the shift from caramel sweetness to ashy bitterness. Our professional timing tool for V60, Chemex and Aeropress acts as a <strong>rhythm assistant</strong>, making barista-level precision accessible at home.',
    },
    {
      type: 'summary',
      title: 'Why a specialized timer is vital',
      items: [
        '<strong>Kinetic Control:</strong> The rate at which water dissolves coffee solids is constant. Time is your brake and accelerator.',
        '<strong>Pour Phases:</strong> Coffee does not extract linearly. Dividing time into Bloom, Pour and Drain is critical.',
        '<strong>Reproducibility:</strong> If you do not measure time, you cannot repeat your best cups. Consistency is the foundation of quality.',
        '<strong>Grind Adjustment:</strong> The final time tells you whether to grind finer or coarser next time.',
      ],
    },
    {
      type: 'title',
      text: 'The Extraction Timeline: What happens each second?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When hot water touches coffee, a molecular obstacle course begins. Not all flavors extract at the same time. Understanding this timeline is the difference between an amateur and a professional barista:',
    },
    {
      type: 'list',
      items: [
        '<strong>Seconds 0 to 45 (Bloom):</strong> This is the degassing phase. CO2 trapped during roasting blocks water entry. Waiting here allows the bean to open up, preparing the way for uniform extraction.',
        '<strong>Seconds 45 to 120 (Acid and Sweet Extraction):</strong> Water flows and dissolves mineral salts, organic acids and complex sugars. This is the heart of flavor.',
        '<strong>Seconds 120 to 210 (Body and Finish):</strong> Heavier fibers and bitter compounds are extracted. If this phase runs too long, the coffee becomes astringent.',
      ],
    },
    {
      type: 'title',
      text: 'The Bloom Phase: Why 30 seconds is the standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>Bloom</strong> or pre-infusion is when we pour approximately twice the weight of the coffee in water. These initial 30 seconds serve to expel carbon dioxide. Without respecting this time, gas pushes water outward, creating channels where liquid passes without touching the coffee (channeling), resulting in a watery and inconsistent cup.',
    },
    {
      type: 'table',
      headers: ['Phase', 'Suggested Time', 'Technical Action', 'Chemical Purpose'],
      rows: [
        ['Bloom', '30 to 45 sec', 'Pour 2x coffee weight', 'Degassing (CO2)'],
        ['First Pour', '45 to 90 sec', 'Slow circles', 'Acid and sweet extraction'],
        ['Second Pour', '90 to 150 sec', 'Gentle central pour', 'Balance and body'],
        ['Drawdown', 'Until end', 'Steady drip', 'Clarity and finish'],
      ],
    },
    {
      type: 'title',
      text: 'Time Impact on Grind: The Feedback Loop',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The timer is your best diagnostic tool for the grinder. If your V60 recipe should take 3:00 minutes and the water has fully drained at 2:15, the coffee will likely taste sour and weak (under-extraction). The solution is not to pour more slowly, but to <strong>grind finer</strong> so particles resist the water more.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Ideal V60 Time', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Ideal Chemex Time', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Ideal Aeropress Time', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Rhythm Alerts: Why the audio assistant is essential',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Brewing filter coffee demands constant visual attention to your scale and pour pattern. Our timer includes <strong>proximity audio alerts</strong> that signal 3 seconds before you should start the next pour or when the bloom ends. It is the difference between a fluid extraction and one full of interruptions.',
    },
    {
      type: 'tip',
      title: 'Competition Barista Tip',
      html: '<p>Keep the water flow as low and close to the coffee bed as possible. Pouring from a great height introduces oxygen and excessive agitation, which can over-extract the coffee and cool the water too quickly. Use the timer to maintain a steady circular rhythm of about 5 to 7 grams of water per second.</p>',
    },
    {
      type: 'title',
      text: 'Thermodynamics and Time: The Temperature Variable',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Time influences the temperature of the system. An extraction lasting 6 minutes will lose much thermal energy, resulting in an unbalanced cup. The optimal time ranges keep water between 90°C and 96°C throughout the extraction.',
    },
    {
      type: 'title',
      text: 'Timing for Iced Coffee with Flash Brew Technique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When brewing coffee over ice, timing must be more aggressive. Using less hot water (60% of total), contact time is reduced. To compensate, use a slightly finer grind to keep extraction time within 2:30 to 3:00 minutes.',
    },
    {
      type: 'title',
      text: 'Post-Extraction Summary: Continuous Learning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'At the end of each brew, our tool shows the total contact time. Note this value alongside your flavor impressions. Does it taste bitter? Next time target a time 15 seconds shorter. Does it taste metallic or sour? Aim for 20 seconds more. The timer does not make the coffee for you, but gives you the data to be the artist.',
    },
  ],
  ui: {
    readyText: 'Ready to start',
    startBtn: 'START EXTRACTION',
    pauseBtn: 'PAUSE',
    resumeBtn: 'RESUME',
    resetBtn: 'RESET',
    newBrewBtn: 'NEW BREW',
    targetLabel: 'Target Water:',
    instructionStart: 'Press the big button',
    hintStart: 'Prepare your V60 or Chemex',
    phase1Label: 'Phase 1: Bloom',
    phase2Label: 'Phase 2: Pour',
    phase3Label: 'Phase 3: Drain',
    instructionBloom: 'Pour {bloomWater}g of water',
    hintBloom: 'Swirl gently to saturate',
    instructionPour: 'Reach {waterTotal}g total',
    hintPour: 'Pour in steady circles',
    instructionDrain: 'Wait for final draining',
    hintDrain: 'Almost ready to enjoy',
    summaryTitle: 'Extraction complete!',
    summaryMessage: 'Your coffee is ready to serve.',
    statTimeLabel: 'Total Time',
    statWaterLabel: 'Water Poured',
    setupTitle: 'Recipe settings',
    labelWater: 'Total Water (g)',
    labelBloomWater: 'Bloom Water (g)',
    labelBloomTime: 'Bloom Time (s)',
    labelTotalTime: 'Total Time (s)',
  },
};
