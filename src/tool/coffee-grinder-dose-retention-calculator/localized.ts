import type { FAQItem, HowToStep, ToolLocaleContent } from '../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { GrinderRetentionCalculatorLocaleContent } from './entry';
import { content as en } from './i18n/en';
import type { GrinderRetentionCalculatorUI } from './ui';

interface EditorialDraft {
  measureTitle: string;
  measureOne: string;
  measureTwo: string;
  calculationTitle: string;
  calculationList: string[];
  workflowTitle: string;
  workflowText: string;
  costTitle: string;
  costText: string;
  actionList: string[];
  limitsTitle: string;
  limitsText: string;
  tipTitle: string;
  tipText: string;
}

export interface LocaleDraft {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: Partial<GrinderRetentionCalculatorUI>;
  faq: FAQItem[];
  howTo: HowToStep[];
  editorial: EditorialDraft;
}

function buildSeo(draft: LocaleDraft): SEOSection[] {
  const { editorial } = draft;
  return [
    { type: 'title', text: editorial.measureTitle, level: 2 },
    { type: 'paragraph', html: editorial.measureOne },
    { type: 'paragraph', html: editorial.measureTwo },
    { type: 'title', text: editorial.calculationTitle, level: 2 },
    { type: 'list', items: editorial.calculationList },
    { type: 'title', text: editorial.workflowTitle, level: 2 },
    { type: 'paragraph', html: editorial.workflowText },
    { type: 'table', headers: [draft.ui.visualDelivered ?? en.ui.visualDelivered, draft.ui.visualRetained ?? en.ui.visualRetained, draft.ui.visualPurge ?? en.ui.visualPurge], rows: [[draft.ui.deliveredLabel ?? en.ui.deliveredLabel, draft.ui.retentionLabel ?? en.ui.retentionLabel, draft.ui.wasteLabel ?? en.ui.wasteLabel]] },
    { type: 'title', text: editorial.costTitle, level: 2 },
    { type: 'paragraph', html: editorial.costText },
    { type: 'list', items: editorial.actionList },
    { type: 'tip', title: editorial.tipTitle, html: `<p>${editorial.tipText}</p>` },
    { type: 'title', text: editorial.limitsTitle, level: 2 },
    { type: 'paragraph', html: editorial.limitsText },
  ];
}

function buildSchemas(draft: LocaleDraft): ToolLocaleContent<GrinderRetentionCalculatorUI>['schemas'] {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: draft.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as const;
  const howToSchema = { '@context': 'https://schema.org', '@type': 'HowTo', name: draft.title, description: draft.description, step: draft.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as const;
  const appSchema = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: draft.title, description: draft.description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: draft.locale } as const;
  return [faqSchema, howToSchema, appSchema] as ToolLocaleContent<GrinderRetentionCalculatorUI>['schemas'];
}

export function createLocaleContent(draft: LocaleDraft): GrinderRetentionCalculatorLocaleContent {
  return {
    ...en,
    slug: draft.slug,
    title: draft.title,
    description: draft.description,
    faqTitle: draft.faqTitle,
    bibliographyTitle: draft.bibliographyTitle,
    ui: { ...en.ui, ...draft.ui } as GrinderRetentionCalculatorUI,
    faq: draft.faq,
    howTo: draft.howTo,
    schemas: buildSchemas(draft),
    seo: buildSeo(draft),
  };
}
