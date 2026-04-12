import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';

const slug = 'chronometre-cafe';
const title = 'Chronomètre pour Café Filtre';
const description =
  'Minuteur professionnel pour café de spécialité avec phases de versage, alertes sonores de rythme et résumé d\'extraction. Optimisé pour V60, Chemex et Aeropress.';

const faqData = [
  {
    question: 'Pourquoi utiliser ce chronomètre plutôt que mon téléphone ?',
    answer:
      'Ce chronomètre est conçu spécifiquement pour le café. Il inclut des phases visuelles (Bloom, Versage, Égouttage), des alertes sonores 3 secondes avant chaque transition et vous permet de configurer votre recette complète pour ne jamais perdre le rythme pendant le versage.',
  },
  {
    question: 'Qu\'est-ce que le temps de bloom ?',
    answer:
      'C\'est la pré-infusion initiale (généralement 30 à 45 secondes) où l\'on verse un peu d\'eau pour libérer le CO2. Le chronomètre indique cette phase en ambre pour vous signaler quand attendre et quand continuer à verser.',
  },
  {
    question: 'Comment savoir si mon temps d\'extraction est correct ?',
    answer:
      'Pour un V60 standard, le temps total devrait être entre 2:30 et 3:15 minutes. Si cela se termine plus tôt, votre mouture est trop grossière. Si cela prend plus de temps, elle est trop fine. Le chronomètre vous permet de diagnostiquer ce processus avec précision.',
  },
  {
    question: 'A-t-il des alertes sonores ?',
    answer:
      'Oui. Le système émet un bip court avant la fin du bloom et à la fin du processus, vous permettant de vous concentrer sur le filet d\'eau sans regarder constamment l\'écran.',
  },
  {
    question: 'Est-il compatible avec le Chemex ?',
    answer:
      'Absolument. Vous pouvez régler le temps total sur 4:30 ou 5:00 minutes (typique pour le Chemex en raison de son filtre épais) dans la section de configuration en bas.',
  },
  {
    question: 'Fonctionne-t-il sur mobile ?',
    answer:
      'Il est optimisé pour une utilisation mobile, avec de grands boutons faciles à appuyer même avec les mains mouillées ou en tenant votre bouilloire à col de cygne.',
  },
];

const howToData = [
  {
    name: 'Configurez votre recette',
    text: 'Dans la section inférieure, ajustez l\'eau totale, l\'eau de bloom, le temps de bloom et le temps total selon votre méthode de préparation (V60, Chemex, Aeropress).',
  },
  {
    name: 'Appuyez sur le bouton de démarrage',
    text: 'Appuyez sur le grand bouton de démarrage. Le chronomètre commencera et affichera la phase active dans la barre de progression en haut.',
  },
  {
    name: 'Phase Bloom',
    text: 'Versez l\'eau de bloom (indiquée à l\'écran) en spirale et attendez que le chronomètre avance. Vous recevrez une alerte sonore 3 secondes avant la fin.',
  },
  {
    name: 'Phase de Versage',
    text: 'Continuez à verser l\'eau restante jusqu\'à atteindre le poids total. Versez en cercles lents et réguliers pour une extraction uniforme.',
  },
  {
    name: 'Phase d\'Égouttage',
    text: 'Attendez que le café s\'écoule complètement à travers le filtre. Cette phase termine l\'extraction et détermine la clarté et la finale de votre tasse.',
  },
  {
    name: 'Consultez le résumé',
    text: 'À la fin, le chronomètre affiche le temps total et l\'eau versée. Notez ces valeurs avec vos impressions de goût pour affiner la recette.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes sur le Chronomètre à Café',
  faq: faqData,
  bibliographyTitle: 'Références Techniques et Protocoles SCA',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Brewing Best Practices',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
    {
      name: 'Barista Hustle: The Theory of Extraction',
      url: 'https://www.baristahustle.com/blog/the-theory-of-extraction/',
    },
    {
      name: 'World Brewers Cup: Competition Protocol',
      url: 'https://worldcoffeeevents.org/world-brewers-cup/',
    },
    {
      name: 'Perfect Daily Grind: How Brew Time Affects Coffee Flavor',
      url: 'https://perfectdailygrind.com/2019/04/how-brew-time-affects-your-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Chronomètre pour Café Filtre : La Science du Temps dans l\'Extraction (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans le monde du café de spécialité, le <strong>temps de contact</strong> entre l\'eau et le café moulu n\'est pas une simple métrique d\'attente ; c\'est le facteur cinétique qui décide quels composés chimiques terminent dans votre tasse. Notre outil de chronométrage professionnel pour V60, Chemex et Aeropress agit comme un <strong>assistant de rythme</strong>, rendant la précision barista accessible à la maison.',
    },
    {
      type: 'summary',
      title: 'Pourquoi un chronomètre spécialisé est vital',
      items: [
        '<strong>Contrôle Cinétique :</strong> La vitesse à laquelle l\'eau dissout les solides du café est constante. Le temps est votre frein et accélérateur.',
        '<strong>Phases de Versage :</strong> Le café ne s\'extrait pas de façon linéaire. Diviser le temps en Bloom, Versage et Égouttage est critique.',
        '<strong>Reproductibilité :</strong> Si vous ne mesurez pas le temps, vous ne pouvez pas reproduire vos meilleures tasses.',
        '<strong>Ajustement de Mouture :</strong> Le temps final vous indique si vous devez moudre plus fin ou plus grossier la prochaine fois.',
      ],
    },
    {
      type: 'title',
      text: 'La Chronologie de l\'Extraction : Que se passe-t-il chaque seconde ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quand l\'eau chaude touche le café, une course d\'obstacles moléculaire commence. Tous les arômes ne s\'extraient pas en même temps. Comprendre cette chronologie est la différence entre un barista amateur et un professionnel :',
    },
    {
      type: 'list',
      items: [
        '<strong>Secondes 0 à 45 (Bloom) :</strong> C\'est la phase de dégazage. Le CO2 piégé lors de la torréfaction bloque l\'entrée de l\'eau. Le temps d\'attente permet au grain de s\'ouvrir pour une extraction homogène.',
        '<strong>Secondes 45 à 120 (Extraction des Acides et Sucres) :</strong> L\'eau dissout les sels minéraux, acides organiques et sucres complexes. C\'est le cœur de la saveur.',
        '<strong>Secondes 120 à 210 (Corps et Finale) :</strong> Les fibres plus lourdes et les composés amers sont extraits. Si cette phase dure trop longtemps, le café devient astringent.',
      ],
    },
    {
      type: 'title',
      text: 'La Phase Bloom : Pourquoi 30 secondes est le standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>Bloom</strong> ou pré-infusion est le moment où l\'on verse environ deux fois le poids du café en eau. Ces 30 premières secondes servent à expulser le dioxyde de carbone. Sans respecter ce temps, le gaz pousse l\'eau vers l\'extérieur, créant des canaux (channeling) et résultant en une tasse aqueuse et inconsistante.',
    },
    {
      type: 'table',
      headers: ['Phase', 'Temps Suggéré', 'Action Technique', 'Objectif Chimique'],
      rows: [
        ['Bloom', '30 à 45 sec', 'Verser 2x poids café', 'Dégazage (CO2)'],
        ['Premier Versage', '45 à 90 sec', 'Cercles lents', 'Extraction acides et sucres'],
        ['Deuxième Versage', '90 à 150 sec', 'Versage central doux', 'Équilibre et corps'],
        ['Égouttage', 'Jusqu\'à la fin', 'Goutte régulière', 'Clarté et finale'],
      ],
    },
    {
      type: 'title',
      text: 'Impact du Temps sur la Mouture : La Boucle de Rétroaction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le chronomètre est votre meilleur outil de diagnostic pour le moulin. Si votre recette V60 doit prendre 3:00 minutes et l\'eau a complètement drainé à 2:15, le café aura probablement un goût aigre et faible (sous-extraction). La solution n\'est pas de verser plus lentement, mais de <strong>moudre plus fin</strong>.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Temps Idéal V60', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Temps Idéal Chemex', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Temps Idéal Aeropress', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Alertes de Rythme : Pourquoi l\'assistant sonore est fondamental',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Préparer un café filtre demande une attention visuelle constante. Notre chronomètre inclut des <strong>alertes sonores de proximité</strong> qui signalent 3 secondes avant chaque changement de phase. C\'est la différence entre une extraction fluide et une pleine d\'interruptions.',
    },
    {
      type: 'tip',
      title: 'Conseil de Compétition Barista',
      html: '<p>Maintenez le flux d\'eau aussi bas et proche du lit de café que possible. Un versage en hauteur introduit de l\'oxygène et une agitation excessive, ce qui peut sur-extraire le café et refroidir l\'eau trop rapidement. Utilisez le chronomètre pour maintenir un rythme circulaire constant d\'environ 5 à 7 grammes d\'eau par seconde.</p>',
    },
    {
      type: 'title',
      text: 'Thermodynamique et Temps : La Variable Température',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le temps influence la température du système. Une extraction de 6 minutes perdra beaucoup d\'énergie thermique, résultant en une tasse avec une acidité déséquilibrée. Les plages de temps optimales maintiennent l\'eau entre 90°C et 96°C pendant toute l\'extraction.',
    },
    {
      type: 'title',
      text: 'Chronométrer pour le Café Glacé avec la Technique Flash Brew',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsque vous préparez du café sur glace, le temps doit être plus agressif. En utilisant moins d\'eau chaude (60% du total), le temps de contact est réduit. Pour compenser, utilisez une mouture légèrement plus fine pour maintenir le temps d\'extraction entre 2:30 et 3:00 minutes.',
    },
    {
      type: 'title',
      text: 'Résumé Post-Extraction : Apprentissage Continu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'À la fin de chaque préparation, notre outil affiche le temps de contact total. Notez cette valeur avec vos impressions de saveur. Un goût amer ? La prochaine fois visez 15 secondes de moins. Un goût métallique ou acide ? Visez 20 secondes de plus. Le chronomètre ne fait pas le café pour vous, mais vous donne les données pour être l\'artiste.',
    },
  ],
  ui: {
    readyText: 'Prêt à démarrer',
    startBtn: 'DÉMARRER L\'EXTRACTION',
    pauseBtn: 'PAUSE',
    resumeBtn: 'REPRENDRE',
    resetBtn: 'RÉINITIALISER',
    newBrewBtn: 'NOUVEAU BREW',
    targetLabel: 'Eau Cible :',
    instructionStart: 'Appuyez sur le grand bouton',
    hintStart: 'Préparez votre V60 ou Chemex',
    phase1Label: 'Phase 1 : Bloom',
    phase2Label: 'Phase 2 : Versage',
    phase3Label: 'Phase 3 : Égouttage',
    instructionBloom: 'Versez {bloomWater}g d\'eau',
    hintBloom: 'Faites tournoyer doucement pour saturer',
    instructionPour: 'Atteignez {waterTotal}g au total',
    hintPour: 'Versez en cercles réguliers',
    instructionDrain: 'Attendez l\'égouttage final',
    hintDrain: 'Presque prêt à déguster',
    summaryTitle: 'Extraction terminée !',
    summaryMessage: 'Votre café est prêt à servir.',
    statTimeLabel: 'Temps Total',
    statWaterLabel: 'Eau Versée',
    setupTitle: 'Configuration de la recette',
    labelWater: 'Eau Totale (g)',
    labelBloomWater: 'Eau Bloom (g)',
    labelBloomTime: 'Temps Bloom (s)',
    labelTotalTime: 'Temps Total (s)',
  },
};
