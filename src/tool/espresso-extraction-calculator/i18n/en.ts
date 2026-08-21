import { bibliography } from '../bibliography';
import type { EspressoExtractionLocaleContent } from '../entry';

const slug = 'espresso-extraction-calculator';
const title = 'Espresso Extraction Calculator';
const description = 'Log dose, beverage mass, and shot time to read brew ratio, flow rate, and optional extraction yield from a refractometer TDS reading.';

const howTo = [
  {
    name: 'Enter the coffee dose',
    text: 'Weigh the dry coffee in the basket, then set the dose slider to that mass in grams.',
  },
  {
    name: 'Pull the shot and weigh the beverage',
    text: 'Start a timer as the pump engages, stop it when you cut the shot, and weigh the liquid in the cup.',
  },
  {
    name: 'Read ratio time and flow',
    text: 'The calculator turns those three numbers into brew ratio, contact time, and grams per second so you can compare the shot with a classic window.',
  },
  {
    name: 'Add TDS only if you measured it',
    text: 'If you used a refractometer, enable TDS and enter the reading. Extraction yield is computed as TDS percent times beverage mass divided by dose. Leave TDS off if you did not measure it.',
  },
];

const faq = [
  {
    question: 'What brew ratio should I use for espresso?',
    answer: 'A common specialty starting point is 1:2 by mass, for example 18 g in and 36 g out. Shorter ratios such as 1:1.1 sit in a ristretto style. Longer ratios such as 1:3 sit in a lungo style. These are planning windows, not a single correct recipe.',
  },
  {
    question: 'How is espresso extraction yield calculated?',
    answer: 'Extraction yield percent equals TDS percent times beverage mass in grams, divided by dry dose in grams. A 10 percent TDS reading on a 36 g beverage from an 18 g dose is a 20 percent extraction yield. Without a measured TDS value the tool will not invent a yield number.',
  },
  {
    question: 'Why is shot time not the same as extraction yield?',
    answer: 'Time and flow describe how fast the water moved through the puck. Extraction yield describes how much of the dry coffee dissolved into the cup. A fast 1:2 shot and a slow 1:2 shot can share a ratio and still extract differently. Taste diagnosis belongs in a separate tool.',
  },
  {
    question: 'Should I include preinfusion in the shot time?',
    answer: 'Enter the total timer reading, then set preinfusion separately if your machine soaks the puck before full flow. Contact time is total time minus preinfusion, and flow rate uses that contact time so a long soak does not look like a slow shot.',
  },
];

export const content: EspressoExtractionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    kicker: 'Shot glass',
    statusClassic: 'Classic window',
    statusOutside: 'Off the classic window',
    presetTitle: 'Shot profile',
    presetClassic: 'Classic 1:2',
    presetRistretto: 'Ristretto',
    presetLungo: 'Lungo',
    presetSingle: 'Single',
    presetTurbo: 'Turbo',
    unitSystemLabel: 'Units',
    unitMetric: 'g',
    unitImperial: 'oz',
    doseLabel: 'Dose',
    yieldLabel: 'In the cup',
    timeLabel: 'Shot time',
    preinfusionLabel: 'Preinfusion',
    preZero: 'Off',
    preShort: '4s',
    preLong: '8s',
    ratioTargetsLabel: 'Fill to',
    ratioTargetOne: '1:1',
    ratioTargetTwo: '1:2',
    ratioTargetThree: '1:3',
    tdsToggle: 'TDS',
    tdsLabel: 'TDS',
    tdsHint: 'Refractometer reading',
    unitGrams: 'g',
    unitOz: 'oz',
    unitSeconds: 's',
    unitPercent: '%',
    unitFlow: 'g/s',
    ratioReadout: 'Ratio',
    timeReadout: 'Time',
    flowReadout: 'Flow',
    yieldReadout: 'EY',
    yieldEmpty: 'No TDS',
    styleRistretto: 'Ristretto',
    styleNormale: 'Normale',
    styleLungo: 'Lungo',
    paceFast: 'Fast',
    paceTypical: 'Typical',
    paceSlow: 'Slow',
    bandUnmeasured: 'No TDS',
    bandLow: 'Below 18%',
    bandTarget: '18 to 22%',
    bandHigh: 'Above 22%',
    markOne: '1:1',
    markTwo: '1:2',
    markThree: '1:3',
    deltaOnLine: 'On the 1:2 line',
    deltaPast: '{n} g past 1:2',
    deltaShort: '{n} g short of 1:2',
    resetText: 'Reset',
    faqTitle: 'Espresso extraction questions',
    bibliographyTitle: 'Extraction references',
  },
  seo: [
    { type: 'title', text: 'What this espresso calculator actually measures', level: 2 },
    {
      type: 'paragraph',
      html: 'Espresso recipes are easier to repeat when they are written as masses and times. A brew ratio is beverage mass divided by dry dose. A 18 g dose that yields 36 g in the cup is a 1:2 shot. Contact time is the timer reading minus any preinfusion soak. Flow rate is beverage mass divided by that contact time.',
    },
    {
      type: 'tip',
      title: 'Weigh the cup, do not trust milliliters',
      html: 'Crema and temperature make volume readings noisy. Specialty recipes almost always use grams in and grams out. If you only have a volume mark, treat 1 ml as a rough 1 g stand-in and switch to a scale as soon as you can.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:2', label: 'Common starting ratio' },
        { value: '20 to 32 s', label: 'Typical contact window' },
        { value: '18 to 22%', label: 'Often cited yield band' },
      ],
    },
    { type: 'title', text: 'Shot styles from brew ratio', level: 3 },
    {
      type: 'paragraph',
      html: 'The labels ristretto, normale, and lungo are ratio families, not flavor scores. This tool uses mass ratio cutoffs near 1:1.5 and 1:2.5 as a map, because those bands match how many specialty bars write recipes. Traditional volume based Italian definitions are different and are not applied here.',
    },
    {
      type: 'table',
      headers: ['Style', 'Mass ratio', 'Example on 18 g', 'What the glass shows'],
      rows: [
        ['Ristretto', 'Below 1:1.5', 'About 20 g out', 'Fill sits near the 1:1 mark'],
        ['Normale', '1:1.5 to 1:2.5', '36 g out at 1:2', 'Fill meets the gold 1:2 line when time is typical'],
        ['Lungo', 'Above 1:2.5', 'About 54 g out', 'Fill climbs toward the 1:3 mark'],
        ['Turbo', 'Often near 1:2.2', '40 g out in about 15 s', 'Fast pace, still a measured recipe'],
      ],
    },
    { type: 'title', text: 'Extraction yield needs a TDS reading', level: 3 },
    {
      type: 'paragraph',
      html: 'Total dissolved solids (TDS) is the strength of the beverage, usually read with a refractometer. Extraction yield is the share of the dry coffee that dissolved. The relationship used here is the same brewing-chart identity discussed by the Specialty Coffee Association: yield percent equals TDS percent times beverage mass divided by dose.',
    },
    {
      type: 'list',
      items: [
        '<strong>Measurable without TDS:</strong> dose, beverage mass, brew ratio, shot time, preinfusion, contact time, and flow rate.',
        '<strong>Measurable only with TDS:</strong> extraction yield. A 9.5 percent TDS on 36 g from 18 g is a 19 percent yield.',
        '<strong>Not a taste diagnosis:</strong> sour, bitter, or hollow flavors need grind, temperature, and puck prep. Use the flavor diagnosis tool for that work.',
        '<strong>Not a manufacturer spec:</strong> basket size, roast, and machine change the shot that tastes best. Treat 18 to 22 percent as a cited planning band, not a pass/fail grade.',
      ],
    },
    {
      type: 'summary',
      title: 'How to use the shot lab',
      items: [
        'Pick a profile or set dose, yield, and time from the scale and timer.',
        'Watch the glass fill to the 1:1, 1:2 and 1:3 marks as ratio and pace change.',
        'Enable TDS only after a refractometer reading if you want extraction yield.',
      ],
    },
  ],
  faq,
  faqTitle: 'Espresso extraction questions',
  bibliography,
  bibliographyTitle: 'Extraction references',
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
