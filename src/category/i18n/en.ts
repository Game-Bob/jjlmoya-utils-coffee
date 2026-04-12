import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'coffee',
  title: 'Tools and Calculators for Specialty Coffee Lovers',
  description:
    'Elevate your coffee ritual with free online tools. Brew Ratio calculators, barista timers, SCA water mineralization and grind conversion.',
  seo: [
    {
      type: 'title',
      text: 'Coffee Engineering: The Science Behind the Perfect Cup',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Specialty coffee has evolved from a beverage into a field of technical study. In this section, we offer a suite of <strong>free online tools</strong> designed for baristas, roasters and home brewers seeking perfect reproducibility in their extractions. Brewing great coffee is a matter of ratios, water chemistry and temporal precision.',
    },
    {
      type: 'paragraph',
      html: 'From the exact calculation of the brew ratio to scientific water mineralization and technical grind management, our utilities help you understand <strong>why</strong> your coffee tastes the way it does and how to systematically improve it.',
    },
    {
      type: 'title',
      text: 'Ratio Precision: The Definitive Brew Ratio Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The foundation of a good extraction is the proportion between coffee and water. Our <strong>Brew Ratio calculator</strong> lets you obtain the exact grams of coffee needed for a given water amount, or vice versa, based on industry-standard ratios (1:15 for lighter body, 1:17 for greater clarity). It includes an estimated water retention calculation so you know exactly how much beverage you will actually get in the cup.',
    },
    {
      type: 'title',
      text: 'Time Control: Barista Timer with Pour Phases',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In filter coffee (V60, Chemex, AeroPress), contact time is critical. Our <strong>specialized timer</strong> helps you keep pace with visual cues for the pre-infusion phase (Bloom) and successive pour stages, ensuring uniform and controlled extraction every session.',
    },
    {
      type: 'title',
      text: 'Water Chemistry: Mineralization to SCA Standards',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Coffee is 98% water. Distilled or excessively hard water ruins the extraction of noble flavors. The <strong>SCA water calculator</strong> helps you design your own mineralized water from pure water, calculating the milligrams of Magnesium, Calcium and Bicarbonates needed to achieve the ideal hardness and alkalinity balance.',
    },
    {
      type: 'title',
      text: 'Grind Variables: Converter and Comparative Table',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Each extraction method requires a different particle size. The <strong>grind converter</strong> provides a technical guide to adjust your grinder (whether by clicks or steps) between different methods (Espresso, Filter, French Press) and popular market grinders, making it easy to transition between different flavor profiles.',
    },
    {
      type: 'list',
      items: [
        '<strong>Total Reproducibility:</strong> Document your variables and replicate that exceptional cup you had yesterday.',
        "<strong>Resource Optimization:</strong> Don't waste specialty coffee through weighing errors or incorrect ratios.",
        '<strong>SCA Foundation:</strong> Tools aligned with Specialty Coffee Association standards for professional-level coffee.',
        '<strong>Recipe Privacy:</strong> Your ratios and grind settings are processed locally on your device.',
      ],
    },
    {
      type: 'tip',
      title: 'Barista Extraction Tip',
      html: '<p><strong>The Importance of Bloom:</strong> Performing a pre-infusion (Bloom) of about 30-45 seconds with twice the water weight as coffee weight allows CO2 trapped in fresh beans to escape. This prevents channeling and ensures that subsequent pour water can uniformly extract the oils and soluble compounds from the coffee.</p>',
    },
    {
      type: 'title',
      text: 'Coffee Thermodynamics: Critical Temperatures and Cooling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Water temperature is where most mistakes begin. Water at 95°C extracts different compounds than water at 88°C. Too hot (&gt;96°C) over-extracts and produces an astringent bitter taste. Too cold (&lt;87°C) under-extracts and the drink is flat and tasteless. The optimal window for most coffee is 90-94°C, adjustable by roast level (light roasts prefer more heat; dark roasts, less).',
    },
    {
      type: 'title',
      text: 'Grind Consistency: Bimodality and Fines',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A well-calibrated grinder produces consistent particle sizes. A poorly calibrated or worn grinder produces "bimodality": mostly large particles BUT also fine powder (fines). Fines extract very quickly (creating bitterness), while large particles extract slowly (creating astringency). The result is unbalanced coffee despite using the correct method and time.',
    },
    {
      type: 'title',
      text: 'Cupping and Scoring: Scientific Flavor Profiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Professional cuppers use an "SCA protocol" (Specialty Coffee Association) to score coffee on a 100-point scale. Dimensions include: aroma, flavor, aftertaste, acidity, body, balance, uniformity, cleanliness and overall score. Coffee scoring 85+ is considered "specialty". This standardization allows objective comparison between origin coffees, roasters and methods.',
    },
    {
      type: 'title',
      text: 'The Home Brewing Trend in 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In 2026, technology has democratized access to high-precision equipment. But equipment is nothing without knowledge. These tools are the technical brain that powers your physical accessories, allowing you to explore the sensory complexity of coffee from a scientific rigor that was previously only available to cupping laboratories.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Ratio', value: 'Exact 1:15-1:18', icon: 'mdi:water-outline' },
        { label: 'Water', value: 'SCA Standards', icon: 'mdi:flask-outline' },
        { label: 'Time', value: 'Bloom-Sync', icon: 'mdi:timer-outline' },
        { label: 'Grind', value: 'Micron-Check', icon: 'mdi:cog-transfer' },
      ],
      columns: 4,
    },
  ],
};
