import type { SEOSection } from '@jjlmoya/utils-shared';

type FAQ = { question: string; answer: string };
type Step = { name: string; text: string };

export interface LocalizedSeoSource {
  title: string;
  description: string;
  faq: FAQ[];
  howTo: Step[];
}

const text = (source: LocalizedSeoSource, index: number): string =>
  source.faq[index % source.faq.length]?.answer ?? source.description;

const question = (source: LocalizedSeoSource, index: number): string =>
  source.faq[index % source.faq.length]?.question ?? source.title;

const step = (source: LocalizedSeoSource, index: number): string =>
  source.howTo[index % source.howTo.length]?.text ?? source.description;

const stepName = (source: LocalizedSeoSource, index: number): string =>
  source.howTo[index % source.howTo.length]?.name ?? source.title;

const answerItem = (source: LocalizedSeoSource, index: number): string =>
  `<strong>${question(source, index)}:</strong> ${text(source, index)}`;

const table = (headers: string[], rows: string[][]): SEOSection => ({
  type: 'table',
  headers,
  rows,
});

export function buildGrindSeo(source: LocalizedSeoSource): SEOSection[] {
  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    {
      type: 'summary',
      title: question(source, 0),
      items: [0, 1, 2, 3].map((index) => answerItem(source, index)),
    },
    { type: 'title', text: question(source, 1), level: 2 },
    { type: 'paragraph', html: text(source, 1) },
    { type: 'paragraph', html: step(source, 0) },
    table(
      [source.title, 'μm', 'Reference', 'Time'],
      [
        ['Turkish', '100-300', 'Fine powder', '3-5 min'],
        ['Espresso', '300-500', 'Fine salt', '25-30 s'],
        ['Moka / Aeropress', '500-700', 'Table salt', '3-4 min'],
        ['V60 / Filter', '700-900', 'Granulated sugar', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200', 'Coarse sand', '3:30-4:30 min'],
        ['French Press', '1200-1500', 'Coarse salt', '4 min'],
        ['Cold Brew', '1500+', 'Peppercorns', '12-24 h'],
      ],
    ),
    { type: 'title', text: question(source, 2), level: 2 },
    { type: 'paragraph', html: text(source, 2) },
    {
      type: 'stats',
      items: [
        { label: stepName(source, 0), value: '95%', icon: 'mdi:star' },
        { label: stepName(source, 1), value: '85%', icon: 'mdi:star-half-full' },
        { label: stepName(source, 2), value: '40%', icon: 'mdi:star-outline' },
      ],
      columns: 3,
    },
    { type: 'title', text: question(source, 3), level: 3 },
    { type: 'paragraph', html: text(source, 3) },
    {
      type: 'tip',
      title: stepName(source, 4),
      html: `<p>${step(source, 4)}</p>`,
    },
  ];
}

export function buildBrewRatioSeo(source: LocalizedSeoSource): SEOSection[] {
  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    {
      type: 'summary',
      title: question(source, 0),
      items: [0, 1, 2, 3].map((index) => answerItem(source, index)),
    },
    { type: 'title', text: question(source, 1), level: 2 },
    { type: 'paragraph', html: text(source, 1) },
    {
      type: 'list',
      items: [0, 1, 2].map((index) => `<strong>${stepName(source, index)}:</strong> ${step(source, index)}`),
    },
    { type: 'title', text: question(source, 2), level: 2 },
    { type: 'paragraph', html: text(source, 2) },
    table(
      [source.title, 'Ratio', 'Profile', 'Time'],
      [
        ['Espresso', '1:2-1:2.5', 'Concentrated', '25-30 s'],
        ['V60 / Pour-over', '1:15-1:16', 'Clean and bright', '2:30-3:30 min'],
        ['Aeropress', '1:12-1:15', 'Versatile', '1:30-2:00 min'],
        ['French Press', '1:12-1:14', 'Full-bodied', '4:00-5:00 min'],
        ['Cold Brew', '1:8-1:12', 'Sweet and smooth', '12-24 h'],
      ],
    ),
    { type: 'title', text: question(source, 3), level: 2 },
    { type: 'paragraph', html: text(source, 3) },
    { type: 'paragraph', html: step(source, 0) },
    {
      type: 'stats',
      items: [
        { label: stepName(source, 0), value: '1:15', icon: 'mdi:scale-balance' },
        { label: stepName(source, 1), value: '60%', icon: 'mdi:water' },
        { label: stepName(source, 2), value: '40%', icon: 'mdi:snowflake' },
      ],
      columns: 3,
    },
    { type: 'title', text: stepName(source, 3), level: 2 },
    { type: 'paragraph', html: step(source, 3) },
    {
      type: 'tip',
      title: stepName(source, 4),
      html: `<p>${text(source, 4)}</p>`,
    },
    { type: 'title', text: question(source, 4), level: 2 },
    { type: 'paragraph', html: text(source, 4) },
    {
      type: 'list',
      items: [3, 4, 5].map((index) => `<strong>${stepName(source, index)}:</strong> ${step(source, index)}`),
    },
    { type: 'title', text: stepName(source, 5), level: 2 },
    { type: 'paragraph', html: step(source, 5) },
    { type: 'paragraph', html: source.description },
    { type: 'title', text: question(source, 5), level: 2 },
    { type: 'paragraph', html: text(source, 5) },
  ];
}

export function buildWaterSeo(source: LocalizedSeoSource): SEOSection[] {
  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    {
      type: 'summary',
      title: question(source, 0),
      items: [0, 1, 2, 3].map((index) => answerItem(source, index)),
    },
    { type: 'title', text: question(source, 1), level: 2 },
    { type: 'paragraph', html: text(source, 1) },
    table(
      [source.title, 'Minimum', 'Target', 'Maximum'],
      [
        ['GH', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['KH', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    ),
    { type: 'title', text: question(source, 2), level: 2 },
    { type: 'paragraph', html: text(source, 2) },
    {
      type: 'list',
      items: [2, 3, 4].map((index) => `<strong>${stepName(source, index)}:</strong> ${step(source, index)}`),
    },
    { type: 'title', text: question(source, 3), level: 2 },
    { type: 'paragraph', html: text(source, 3) },
    {
      type: 'tip',
      title: stepName(source, 0),
      html: `<p>${step(source, 0)}</p>`,
    },
    {
      type: 'title',
      text: stepName(source, 1),
      level: 2,
    },
    { type: 'paragraph', html: step(source, 1) },
    {
      type: 'stats',
      items: [
        { label: 'GH', value: '68 mg/L', icon: 'mdi:water' },
        { label: 'KH', value: '40 mg/L', icon: 'mdi:water-percent' },
        { label: 'TDS', value: '150 mg/L', icon: 'mdi:chart-bell-curve' },
      ],
      columns: 3,
    },
  ];
}
