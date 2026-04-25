import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertisseur-mouture-cafe';
const title = 'Convertisseur de Mouture de Café';
const description =
  "Tableau interactif avec guide de clics et niveaux pour ajuster votre moulin entre Espresso, V60, Presse Française et plus. Cartographie technique en microns pour toutes les méthodes d'extraction.";

const faqData = [
  {
    question: "Pourquoi le même réglage ne convient pas à tous les cafés ?",
    answer:
      "La densité du grain varie selon le niveau de torréfaction et l'origine. Une torréfaction claire est généralement plus dense et nécessite une mouture plus fine, tandis qu'une torréfaction foncée est plus poreuse et nécessite un réglage plus grossier.",
  },
  {
    question: "Comment savoir si je dois moudre plus fin ou plus grossier ?",
    answer:
      "Laissez votre goût vous guider : si le café est amer et sec, moulez plus grossier pour que l'eau passe plus vite. S'il est acide, salé ou aqueux, moulez plus fin pour augmenter la surface de contact.",
  },
  {
    question: "Qu'est-ce que le 'channeling' et comment la mouture l'affecte-t-elle ?",
    answer:
      "Le channeling se produit lorsque l'eau trouve un chemin de moindre résistance à travers le lit de café. Une mouture inégale ou inadaptée à la pression — surtout en espresso — favorise ce problème et ruine l'extraction.",
  },
  {
    question: 'Puis-je utiliser ce tableau avec un moulin à lames ?',
    answer:
      "Les moulins à lames produisent des particules non uniformes — de la poudre fine et de gros morceaux simultanément. Les valeurs en microns sont indicatives, mais les résultats réels varieront significativement par rapport à un moulin à meules.",
  },
  {
    question: "Que signifie l'uniformité du moulin dans la visualisation ?",
    answer:
      "La distribution de particules montrée simule l'uniformité réelle de chaque moulin. Un Comandante C40 avec 0,95 d'uniformité produit des particules très homogènes ; un Hario Skerton avec 0,40 montre beaucoup plus de variation de taille.",
  },
];

const howToData = [
  {
    name: 'Sélectionnez votre moulin',
    text: 'Choisissez votre modèle dans la liste déroulante. Le convertisseur affichera les clics ou niveaux recommandés spécifiquement pour votre équipement.',
  },
  {
    name: "Sélectionnez votre méthode d'extraction",
    text: "Cliquez sur l'icône de la méthode que vous allez utiliser. Le panneau de contrôle se mettra à jour avec tous les paramètres techniques pertinents.",
  },
  {
    name: 'Interprétez l\'indicateur de microns',
    text: "Utilisez la valeur en microns dans le graphique en barre pour comprendre la taille réelle des particules. La référence tactile (sel fin, sucre cristallisé...) vous aide à calibrer visuellement.",
  },
  {
    name: 'Observez la simulation de particules',
    text: "La distribution de points montre l'uniformité typique de votre moulin. Un motif plus homogène signifie une extraction plus prévisible et reproductible.",
  },
  {
    name: 'Ajustez selon le goût',
    text: "Utilisez le guide de diagnostic en bas comme référence. Si le café est amer, allez un clic vers le grossier. S'il est acide, allez vers le fin. Toujours un pas à la fois.",
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: "Questions Fréquentes sur la Mouture du Café",
  faq: faqData,
  bibliographyTitle: "Références sur la Mouture et l'Extraction",
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Physique de la Mouture : Pourquoi la Taille des Particules Change Tout',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous moulez du café, vous ne faites pas que réduire la taille du grain. Vous définissez la <strong>surface de contact</strong> disponible pour que l'eau dissolve les composés aromatiques. Trop fin, et l'eau sur-extrait les composés amers. Trop grossier, et l'eau passe sans assez de résistance, produisant un café faible et acide. Le convertisseur de mouture vous donne la plage exacte pour chaque méthode.",
    },
    {
      type: 'table',
      headers: ['Méthode', 'Microns', 'Référence tactile', 'Temps de contact'],
      rows: [
        ['Ibrik (Turc)', '100-300 μm', 'Talc / Farine fine', '3-5 min ébullition'],
        ['Espresso', '300-500 μm', 'Sel fin', '25-30 sec'],
        ['Moka / AeroPress', '500-700 μm', 'Sel de table', '3-4 min'],
        ['V60 / Filtre', '700-900 μm', 'Sucre cristallisé', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200 μm', 'Sable grossier', '3:30-4:30 min'],
        ['Presse Française', '1200-1500 μm', 'Gros sel', '4 min immersion'],
        ['Cold Brew', '1500+ μm', 'Grains de poivre', '12-24 h froid'],
      ],
    },
    {
      type: 'tip',
      title: 'Règle d\'or pour les nouveaux cafés',
      html: "<p>Lorsque vous ouvrez un nouveau café, commencez toujours au milieu de la plage recommandée pour votre méthode. Ensuite, ajustez selon le goût, un clic à la fois. Prenez des notes sur chaque ajustement pour construire un journal de référence de vos cafés préférés avec chaque moulin.</p>",
    },
  ],
  ui: {
    step1Label: "Étape 1 : Sélection de l'Équipement",
    step2Label: "Étape 2 : Méthode d'Extraction",
    gaugeLabel: 'Cartographie Technique des Particules (μm)',
    distributionLabel: 'Distribution Réelle des Particules',
    refLabel: 'Référence',
    rangeMicrasLabel: 'Plage μm',
    unitMicras: 'MICRONS (μm) CIBLES',
    unitClicks: 'CLICS RECOMMANDÉS',
    unitLevel: 'NIVEAU RECOMMANDÉ',
    suggestGrinderText: 'Votre moulin est absent ? Suggérez-le',
    method0Name: 'Ibrik (Turc)',
    method0Ref: 'Talc / Farine fine',
    method0Desc: "Poudre extra fine, presque comme de la farine. Essentielle pour la suspension du café turc.",
    method1Name: 'Espresso',
    method1Ref: 'Sel fin',
    method1Desc: "L'extraction à haute pression nécessite une mouture très fine pour créer de la résistance.",
    method2Name: 'Moka / AeroPress',
    method2Ref: 'Sel de table',
    method2Desc: 'Pression moyenne ou immersion hybride. Texture polyvalente et équilibrée.',
    method3Name: 'V60 / Filtre',
    method3Ref: 'Sucre cristallisé',
    method3Desc: "Méthodes d'infusion manuelle, le standard pour révéler douceur et acidité.",
    method4Name: 'Chemex / Clever',
    method4Ref: 'Sable grossier',
    method4Desc: 'Filtres épais ou courte immersion. Nécessite un flux constant.',
    method5Name: 'Presse Française',
    method5Ref: 'Gros sel',
    method5Desc: "L'immersion prolongée nécessite de grosses particules pour filtrer à travers le maillage métallique.",
    method6Name: 'Cold Brew',
    method6Ref: 'Grains de poivre',
    method6Desc: "L'extraction à froid pendant de nombreuses heures nécessite la mouture la plus grossière possible.",
    troubleIssue0: 'Goût amer, sec ou astringent ?',
    troubleSolution0:
      "Vous sur-extrayez. Moulez plus grossier pour que l'eau coule plus vite et extrait moins de composés amers.",
    troubleAction0: 'Moudre plus grossier',
    troubleIssue1: 'Goût acide, salé ou aqueux ?',
    troubleSolution1:
      "Vous sous-extrayez. Moulez plus fin pour augmenter la surface de contact et extraire plus de sucres et de corps.",
    troubleAction1: 'Moudre plus fin',
  },
};
