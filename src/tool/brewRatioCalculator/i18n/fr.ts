import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'calculateur-ratio-cafe';
const title = 'Calculateur de Ratio Café et Eau';
const description =
  "Calculez les grammes exacts de café ou les millilitres d'eau pour votre ratio idéal (1:15, 1:16...). Inclut le résultat en tasse, guide de versage, mode café glacé et recettes sauvegardées.";

const faqData = [
  {
    question: "Qu'est-ce que le ratio 1:15 en café ?",
    answer:
      "Cela signifie que pour chaque gramme de café moulu, vous utilisez 15 millilitres (ou grammes) d'eau. Avec 20g de café, vous versez 300ml d'eau. C'est le ratio standard recommandé par la Specialty Coffee Association pour les méthodes filtre comme V60, Chemex ou Aeropress.",
  },
  {
    question: "Pourquoi y a-t-il moins de café dans ma tasse que ce que j'ai versé ?",
    answer:
      "Parce que le café moulu retient de l'eau pendant l'extraction. En moyenne, chaque gramme de café absorbe environ 2ml de liquide. Si vous versez 300ml sur 20g de café, vous obtiendrez environ 260ml dans la tasse. Ce calculateur vous montre le résultat réel.",
  },
  {
    question: "Qu'est-ce que le bloom ou la pré-infusion ?",
    answer:
      "C'est le premier versage d'eau, équivalent au double du poids du café (2ml par gramme). Il est effectué pour dégazer le café frais : le CO2 piégé lors de la torréfaction s'échappe et permet à l'eau d'extraire les composés de manière uniforme. S'il n'y a pas de bloom visible, le café a été moulu ou torréfié depuis un certain temps.",
  },
  {
    question: "Comment faire du café glacé sans qu'il soit trop dilué ?",
    answer:
      "Utilisez la technique du flash chilling : préparez 60% de l'eau totale comme eau chaude à 90-96 degrés et mettez les 40% restants sous forme de glace dans la carafe. Versez le café chaud directement sur la glace. Le refroidissement rapide scelle les arômes. Ce calculateur recalcule automatiquement les quantités lorsque vous activez le mode Café Glacé.",
  },
  {
    question: "Quel est le meilleur ratio pour un Aeropress ?",
    answer:
      "Entre 1:12 et 1:15 selon l'utilisation. Si vous prenez le café noir, 1:15 est équilibré. Si vous l'utilisez comme base pour des boissons lactées ou cherchez une concentration élevée, descendez à 1:12 ou 1:13. L'Aeropress est la méthode la plus polyvalente précisément parce qu'elle supporte très bien différents ratios.",
  },
  {
    question: 'Puis-je sauvegarder mes recettes favorites ?',
    answer:
      "Oui. Une fois que vous avez trouvé le ratio et la quantité parfaits pour votre café préféré, appuyez sur le bouton Enregistrer cette recette, donnez-lui un nom (par ex. V60 du Matin) et elle sera stockée dans votre navigateur. Vous pourrez la récupérer à tout moment en un seul clic.",
  },
];

const howToData = [
  {
    name: 'Choisir le mode de calcul',
    text: "Sélectionnez si vous partez des grammes de café que vous avez ou de la capacité de votre tasse (ml d'eau). Le calculateur adapte tous les résultats au mode choisi.",
  },
  {
    name: 'Entrer la quantité',
    text: "Tapez les grammes de café ou les millilitres d'eau que vous allez utiliser. Le calculateur calculera automatiquement l'autre valeur selon le ratio sélectionné.",
  },
  {
    name: "Sélectionner l'intensité",
    text: "Choisissez entre Fort (1:12-14), Équilibré (1:15-16), Léger (1:17-18) ou entrez votre ratio personnalisé. Chaque option correspond à un profil de saveur différent.",
  },
  {
    name: 'Activer le mode Café Glacé (optionnel)',
    text: "Si vous préparez un café glacé, activez le toggle. Le calculateur divisera automatiquement l'eau entre eau chaude (60%) et glace (40%) en utilisant la technique flash chilling.",
  },
  {
    name: 'Suivre le guide de versage',
    text: "Utilisez le guide des phases (Bloom et Versage Final) pour structurer votre processus de préparation. Chaque phase indique exactement combien d'eau verser et quand.",
  },
  {
    name: 'Sauvegarder la recette',
    text: "Quand vous trouvez votre ratio parfait, sauvegardez-le avec un nom descriptif. Vos recettes sont stockées dans votre navigateur pour les sessions futures.",
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes sur le Brew Ratio',
  faq: faqData,
  bibliographyTitle: 'Références Techniques et Standards SCA',
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
      text: "Calculateur de Ratio Café et Eau : Le Guide Maître pour l'Extraction Parfaite (2026)",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Préparer une tasse de café de spécialité n'est pas un acte culinaire subjectif ; c'est une expérience de <strong>chimie des fluides</strong> et de <strong>transfert de masse</strong>. Au centre de ce processus réside le concept de <strong>Brew Ratio</strong>, une mesure critique qui dicte la relation quantitative entre le soluté (café moulu) et le solvant (eau). Notre calculateur intègre les standards de la <em>Specialty Coffee Association (SCA)</em> et des principes de thermodynamique appliquée.",
    },
    {
      type: 'summary',
      title: 'Ce que vous apprendrez sur le Ratio de Café',
      items: [
        "<strong>Brew Ratio :</strong> Comment la relation en poids entre café et eau (ex. 1:15) détermine la force potentielle et le profil sensoriel de votre tasse.",
        "<strong>TDS et Extraction :</strong> La science derrière les solides dissous et quel pourcentage du grain doit réellement se retrouver dans votre boisson.",
        "<strong>Ajustement par Rétention :</strong> Pourquoi le café absorbe 2g d'eau par gramme de poudre et comment calculer l'eau supplémentaire nécessaire.",
        "<strong>Méthodes Spécifiques :</strong> Les proportions idéales pour V60, Cafetière à Piston, Espresso et recettes de café glacé (Flash Brew).",
      ],
    },
    {
      type: 'title',
      text: "Qu'est-ce que le Brew Ratio et pourquoi est-ce la variable la plus importante ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le café contient environ 30% de matières solubles, mais toutes ces matières ne sont pas désirables pour le palais humain. L'eau, agissant comme solvant universel, extrait les composés dans un ordre spécifique basé sur leur poids moléculaire et leur affinité chimique.",
    },
    {
      type: 'list',
      items: [
        "<strong>Phase Acide (Lipides et Acides Organiques) :</strong> Ce sont les premiers à se dissoudre en raison de leur haute solubilité. Ils apportent de la brillance, de l'acidité malique ou citrique et des notes fruitées.",
        "<strong>Phase Sucrée (Sucres et Glucides) :</strong> Ils sont extraits ensuite. Ils génèrent de l'équilibre, de la douceur et du corps. C'est la \"fenêtre dorée\" où le café atteint sa complexité aromatique maximale.",
        "<strong>Phase Amère (Fibres et Composés Phénoliques) :</strong> Ce sont les plus lents à se dissoudre. Avec des ratios excessifs (sur-extraction), l'eau dégrade les cellules du café, extrayant des amers desséchants, des notes de cendre et de bois.",
      ],
    },
    {
      type: 'title',
      text: "Ratios recommandés : Proportions par méthode d'extraction",
      level: 2,
    },
    {
      type: 'table',
      headers: ["Méthode de Préparation", "Ratio (Grammes/Eau)", "Profil en Tasse", "Temps Cible"],
      rows: [
        ['Espresso', '1:2 à 1:2.5', 'Intense, visqueux, crème dense', '25-30 sec'],
        ['V60 / Pour-Over', '1:15 à 1:16', 'Propre, brillant, notes claires', '2:30-3:30 min'],
        ['Aeropress', '1:12 à 1:15', 'Polyvalent, corps moyen-élevé', '1:30-2:00 min'],
        ['Cafetière à Piston', '1:12 à 1:14', 'Texturé, lourd, huileux', '4:00-5:00 min'],
        ['Cold Brew', '1:8 à 1:12', 'Doux, faible acidité, grand corps', '12-24 heures'],
      ],
    },
    {
      type: 'title',
      text: "L'importance du Bloom : Dégazage pour une extraction uniforme",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La phase de \"Bloom\" (floraison) n'est pas seulement esthétique ; c'est une nécessité physique. Pendant la torréfaction, le café génère du CO2 qui reste piégé dans sa matrice cellulaire. Si nous versons toute l'eau de manière continue, le gaz s'échappe violemment, créant des micro-canaux (channeling) et empêchant le solvant de pénétrer au centre des particules de café.",
    },
    {
      type: 'tip',
      title: 'Technique de Saturation Homogène',
      html: "<p>Pour un bloom parfait, versez exactement le double du poids du café en eau (ratio de bloom 1:2). Agitez doucement ou faites tournoyer pour vous assurer que tout le café est mouillé. Attendez 30-45 secondes. La libération de gaz permettra que, lors des versages suivants, l'eau s'écoule de manière laminaire et extraie les solides de manière uniforme dans tout le lit de café.</p>",
    },
    {
      type: 'title',
      text: 'Taille de mouture et Ratio de café : La clé de la surface de contact',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le ratio n'est que la moitié de l'équation. La mouture détermine la <strong>Surface Totale Exposée</strong> au solvant. Des particules plus petites (mouture fine) ont plus de surface proportionnelle, ce qui accélère dramatiquement l'extraction des composés chimiques.",
    },
    {
      type: 'title',
      text: 'Reproductibilité et Science : Transformez votre cuisine en laboratoire barista',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'excellence dans le café de spécialité naît de la cohérence métrique. Notre fonction <strong>Recettes Personnalisées</strong> permet de créer un référentiel technique de vos calibrations réussies. Ce n'est pas seulement un fichier de favoris ; c'est un outil d'analyse pour comparer comment le même kilo de café réagit à un ratio 1:15 par rapport à un 1:16.",
    },
  ],
  ui: {
    modeCoffee: "J'ai le Café",
    modeHintCoffee: "Dis-moi combien d'eau",
    modeWater: "J'ai l'Eau",
    modeHintWater: 'Dis-moi combien de café moudre',
    inputLabelCoffee: 'Grammes de café que vous avez',
    inputLabelWater: 'Capacité de votre tasse (ml)',
    intensityLabel: 'Intensité du café',
    intensityStrong: 'Fort',
    intensityBalanced: 'Équilibré',
    intensityLight: 'Léger',
    intensityCustom: 'Custom',
    customCoffeeLabel: 'Café',
    customWaterLabel: 'Eau',
    icedModeLabel: 'Mode Café Glacé',
    recipeLabel: 'Votre recette exacte',
    resultTitle: 'Résultat',
    resultCoffeeLabel: 'Café',
    resultCoffeeSub: 'Mouture fine-moyenne',
    resultHotWaterLabel: 'Eau chaude',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'Eau chaude (60%)',
    resultIceLabel: 'Glace',
    resultIceSub: 'Dans la carafe',
    resultCupLabel: 'Dans votre tasse',
    resultCupSub: 'Le café retient ~2ml/g',
    pouringGuideLabel: 'Guide de versage',
    favoritesLabel: 'Mes recettes favorites',
    saveBtn: '+ Enregistrer cette recette',
    favEmptyText: "Pas encore de recettes sauvegardées. Configurez votre brew parfait et sauvegardez-le.",
    modalTitle: 'Nommez votre recette',
    modalPlaceholder: 'Ex : "V60 du Matin"',
    modalCancel: 'Annuler',
    modalConfirm: 'Enregistrer',
    phaseBloomTemplate: 'Bloom : Versez {bloomMl} ml d\'eau en spirale. Attendez {bloomSeconds} secondes pour dégazer le café.',
    phasePourTemplate: 'Versage final : Ajoutez le reste pour compléter {hotWaterMl} ml en {pourCount} versages lents.',
    phaseIcedTemplate: 'Glacé : Versez le café chaud directement sur les {iceMl} g de glace dans la carafe.',
    cupWarningTemplate: 'La tasse ne reçoit que {inCupMl} ml. Le café retient du liquide.',
    favModeCoffee: 'g café',
    favModeWater: 'ml eau',
    favModeIced: ' - Glacé',
  },
};
