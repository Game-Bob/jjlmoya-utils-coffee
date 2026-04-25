import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

const slug = 'diagnostic-extraction-cafe-brew-fixer';
const title = 'Diagnostic d\'Extraction du Café : The Brew Fixer';
const description =
  'Diagnostiquez pourquoi votre café a mauvais goût en quelques secondes. Obtenez des ajustements personnalisés pour la mouture, la température et le temps selon votre méthode.';

const faqData = [
  {
    question: 'Comment savoir si mon café est sous-extrait ou sur-extrait ?',
    answer:
      'La sous-extraction (goût acide/aigre) signifie que l\'eau a traversé le café trop rapidement sans dissoudre assez de composés. La sur-extraction (goût amer/brûlé) signifie que l\'eau est restée trop longtemps en contact avec le café. The Brew Fixer vous aide à identifier le problème en analysant vos notes de dégustation et votre méthode.',
  },
  {
    question: 'Quelle est l\'erreur la plus courante lors de la préparation du café ?',
    answer:
      'La taille de la mouture. La plupart des gens moulent soit trop grossièrement (café faible et acide), soit trop finement (café amer et sur-extrait). Calibrer votre moulin à la taille exacte pour votre méthode est l\'ajustement le plus efficace que vous puissiez faire.',
  },
  {
    question: 'La température de l\'eau est-elle vraiment si importante ?',
    answer:
      'Oui. La température contrôle la vitesse d\'extraction. Trop froide, et vous sous-extrayez (acide). Trop chaude, et vous sur-extrayez (amer). Chaque méthode a sa plage idéale : les méthodes douces (V60) préfèrent 92-96°C, tandis que la presse française réussit mieux à 85-90°C pour éviter la sur-extraction durant l\'infusion.',
  },
  {
    question: 'Pourquoi mon café est-il astringent ou me sèche-t-il la bouche ?',
    answer:
      'L\'astringence est généralement causée par une eau trop minéralisée ou une combinaison de sur-extraction et de minéraux. Essayez d\'utiliser de l\'eau filtrée et une mouture légèrement plus grossière. Si cela n\'aide pas, le TDS de votre eau est peut-être trop élevé.',
  },
  {
    question: 'Puis-je corriger une mauvaise tasse en ajustant seulement la température et le temps ?',
    answer:
      'La température et le temps aident, mais la mouture est souvent la racine du problème. Si votre mouture est trop grossière, infuser plus longtemps ou plus chaud n\'aidera que légèrement. The Brew Fixer recommandera toujours l\'ajustement de la mouture comme action principale.',
  },
  {
    question: 'Dois-je utiliser la même recette pour tous mes cafés ?',
    answer:
      'Non. Un café très frais (1 à 5 jours) s\'extrait plus vite et peut nécessiter une mouture plus grossière qu\'un café plus ancien. Les torréfactions claires sont plus denses et demandent des moutures plus fines ; les torréfactions foncées sont plus poreuses et préfèrent des moutures plus grossières.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez votre méthode de préparation',
    text: 'Choisissez l\'appareil utilisé : pour-over, presse française, Aeropress, cafetière italienne (Moka), espresso ou cold brew. L\'outil fournira des conseils spécifiques à votre méthode.',
  },
  {
    name: 'Identifiez le défaut de goût dominant',
    text: 'Goûtez votre café et sélectionnez la saveur qui ressort le plus : acide, amer, aqueux (faible) ou astringent (sec). Vous pouvez aussi choisir une saveur secondaire.',
  },
  {
    name: 'Évaluez l\'intensité',
    text: 'Déplacez le curseur pour indiquer la force du défaut. "Léger" signifie que vous le remarquez à peine ; "sévère" signifie qu\'il domine la tasse. Cela aide à calibrer l\'ajustement.',
  },
  {
    name: 'Lancez le diagnostic',
    text: 'Cliquez sur "Diagnostiquer" et l\'outil analysera vos données pour vous donner une action principale (mouture), des actions secondaires et une référence de texture.',
  },
  {
    name: 'Ajustez et testez',
    text: 'Appliquez le changement recommandé (ex: moudre plus gros, infuser plus longtemps). Préparez une nouvelle tasse et goûtez-la. Les petits ajustements s\'accumulent.',
  },
  {
    name: 'Donnez votre avis',
    text: 'Une fois la tasse suivante bue, dites à l\'outil si cela s\'est amélioré. Si oui, vous verrez des confettis ! Sinon, revenez en arrière et testez d\'autres paramètres.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes sur l\'Extraction du Café',
  faq: faqData,
  bibliographyTitle: 'Références Techniques et Science du Café',
  bibliography: [
    {
      name: 'Specialty Coffee Association : Directives d\'Extraction',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao : The Coffee Roaster\'s Companion',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle : Guide d\'Extraction de l\'Espresso',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind : Comprendre l\'Extraction du Café',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger : Articuler les Notes de Goût',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi votre café est-il mauvais ? Guide de Diagnostic d\'Extraction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La différence entre un espresso exceptionnel et une tasse qui a un goût de papier brûlé tient à un seul concept : <strong>l\'extraction du café</strong>. L\'extraction est le processus par lequel l\'eau dissout les composés solubles du café moulu. Réussissez-la, et vous débloquerez complexité, douceur et clarté. Échouez, et vous aurez de l\'acidité, de l\'amertume ou de la fadeur.',
    },
    {
      type: 'summary',
      title: 'Ce que vous apprendrez avec The Brew Fixer',
      items: [
        '<strong>Comment diagnostiquer les défauts d\'extraction :</strong> Identifiez si votre café est sous-extrait, sur-extrait, faible ou si l\'eau est en cause.',
        '<strong>Les trois leviers de l\'extraction :</strong> Taille de mouture, température de l\'eau et temps de contact. Lequel ajuster en premier ? L\'outil vous guide.',
        '<strong>Conseils par méthode :</strong> La mouture idéale pour un V60 est très différente de celle pour une presse française. Obtenez des conseils personnalisés.',
        '<strong>Références de texture :</strong> Sachez quelle mouture viser en comparant avec des matières familières (poudre fine, sel de mer, sable).',
      ],
    },
    {
      type: 'title',
      text: 'Les Trois Dimensions de l\'Extraction du Café',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le pourcentage d\'extraction est la masse de solides dissous divisée par la masse du café sec original. Le café de spécialité vise <strong>18-20% d\'extraction</strong>. En dessous, c\'est acide ; au-dessus, c\'est amer.',
    },
    {
      type: 'list',
      items: [
        '<strong>La taille de la mouture</strong> contrôle la surface de contact. Plus c\'est fin, plus l\'extraction est rapide. Plus c\'est gros, plus c\'est lent.',
        '<strong>La température de l\'eau</strong> contrôle la vitesse de dissolution. L\'eau chaude (94-96°C) extrait plus vite que l\'eau plus fraîche (85-90°C).',
        '<strong>Le temps de contact</strong> est la durée pendant laquelle l\'eau touche le café. Pour-over (2:30-3:30 min), presse française (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Diagnostiquer un Café Acide (Sous-Extraction)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un café acide rappelle le citron ou la pomme verte. Cela signifie que l\'eau n\'a pas passé assez de temps à extraire les solides. La solution est presque toujours de <strong>moudre plus fin</strong> pour ralentir le passage de l\'eau.',
    },
    {
      type: 'list',
      items: [
        'Moulez plus fin (réduisez la taille de 5-10 µm)',
        'Ou augmentez légèrement le temps d\'infusion (ajoutez 15-30 secondes)',
        'Ou montez la température de l\'eau à 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Diagnostiquer un Café Amer (Sur-Extraction)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un café amer a un goût de brûlé, de cendre ou de bois. Cela signifie que l\'eau a extrait trop de composés, même les indésirables. La solution est de <strong>moudre plus gros</strong> pour accélérer le flux et réduire le temps de contact.',
    },
    {
      type: 'list',
      items: [
        'Moulez plus gros (augmentez la taille de 5-10 µm)',
        'Ou réduisez le temps d\'infusion (enlevez 15-30 secondes)',
        'Ou baissez la température de l\'eau à 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Diagnostiquer un Café Aqueux (Faible, Fade)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un café faible manque de saveur et de corps. Cela signifie que votre mouture est trop grosse, que vous n\'utilisez pas assez de café, ou qu\'il est éventé. Ajuster le moulin est la solution la plus rapide.',
    },
    {
      type: 'list',
      items: [
        'Utilisez une mouture plus fine pour augmenter la surface d\'extraction',
        'Utilisez plus de café (augmentez le ratio)',
        'Infusez un peu plus longtemps ou avec de l\'eau plus chaude',
      ],
    },
    {
      type: 'title',
      text: 'Diagnostiquer un Café Astringent (Sec, Goût Minéral)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'astringence donne une sensation de sécheresse en bouche. Elle est souvent due à une eau dure (riche en minéraux) combinée à une sur-extraction. Il faut alors ajuster la mouture <em>et</em> la qualité de l\'eau.',
    },
    {
      type: 'list',
      items: [
        'Utilisez de l\'eau filtrée pour réduire les minéraux (cible TDS 60-150 ppm)',
        'Moulez plus gros pour limiter la sur-extraction',
        'Essayez une eau légèrement plus fraîche (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Tableau des Moutures : Aspect et Texture',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nom de la Mouture', 'Taille de Particule', 'Référence de Texture', 'Meilleures Méthodes'],
      rows: [
        ['Extra Fine', '5-15 µm', 'Poudre fine, cacao', 'Espresso, Turc'],
        ['Fine', '15-30 µm', 'Sucre glace', 'Moka, Aeropress'],
        ['Moyenne-Fine', '30-50 µm', 'Sable fin, sel de table', 'V60, Chemex, Filtre'],
        ['Moyenne', '50-70 µm', 'Sable de plage', 'Machines à goutte, Filtres plats'],
        ['Grossière', '70-90 µm', 'Gros sel, sable grossier', 'Presse Française, Cupping'],
        ['Extra Grossière', '90+ µm', 'Poivre concassé', 'Cold Brew, Percolateur'],
      ],
    },
    {
      type: 'title',
      text: 'Qualité de l\'Eau : Le TDS et l\'Extraction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le Total des Solides Dissous (TDS) mesure les minéraux dans l\'eau. L\'eau du robinet varie : douce (50 ppm) ou dure (300+ ppm). L\'extraction y est très sensible.',
    },
    {
      type: 'list',
      items: [
        '<strong>Trop douce (0-50 ppm) :</strong> L\'eau sur-extrait, le café est salé et plat.',
        '<strong>Idéale (60-150 ppm) :</strong> Extraction douce, équilibrée et riche.',
        '<strong>Trop dure (200+ ppm) :</strong> Les minéraux bloquent les saveurs, créant de l\'astringence.',
      ],
    },
    {
      type: 'tip',
      title: 'Astuce Rapide pour l\'Eau',
      html: '<p>Si vous soupçonnez une eau dure, testez avec de l\'eau filtrée ou en bouteille. Si le goût s\'améliore, investissez dans une carafe filtrante (Brita) ou un filtre sous évier.</p>',
    },
  ],
  ui: {
    methodLabel: 'Que préparez-vous ?',
    methodPourover: 'Pour-Over / Filtre',
    methodFrenchpress: 'Presse Française',
    methodAeropress: 'Aeropress',
    methodMoka: 'Moka / Italienne',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Sélectionnez votre appareil',
    flavorLabel: 'Quel est le goût ?',
    flavorAcidic: 'Acide',
    flavorBitter: 'Amer',
    flavorWatery: 'Aqueux / Faible',
    flavorAstringent: 'Astringent / Sec',
    flavorHint: 'Choisissez jusqu\'à 2 saveurs',
    severityLabel: 'Quelle est la force du problème ?',
    severitySlightLabel: 'À peine perceptible',
    severityModerateLabel: 'Modéré',
    severitySevereLabel: 'Dominant',
    diagnoseBtn: 'Diagnostiquer mon café',
    resetBtn: 'Réinitialiser',
    resultTitle: 'Diagnostic Terminé',
    resultExplanation: 'Ce qui se passe dans votre tasse',
    actionMainLabel: 'Action Principale',
    actionSecondaryLabel: 'Température & Temps',
    actionTertiaryLabel: 'Conseil Pro',
    textureReferenceLabel: 'Référence de Texture',
    improvementHint: 'Faites l\'ajustement et préparez une autre tasse.',
    copyDiagnosisBtn: 'Copier le Diagnostic',
    feedbackLabel: 'Votre café s\'est-il amélioré ?',
    feedbackSuccessTemplate: 'Génial ! L\'ajustement a fonctionné.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Cafetière à piston, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka, Cafetière italienne',
    methodEspressoDesc: 'Machine espresso, levier',
    methodColdbrewDesc: 'Immersion, à froid',
    fadeOutMessage: 'Beau travail ! Continuez les réglages.',
    backBtn: 'Retour',
    mainIssueLabel: 'Problème Principal',
    improvedBtn: 'Amélioré',
    notYetBtn: 'Pas encore',
    copiedBtn: 'Copié !',
    combinedLabel: 'Combiné',
    diagnosisTitle: 'Diagnostic de The Brew Fixer',
    issueLabel: 'Problème',
    causeLabel: 'Cause',
    actionLabel: 'Action',
    whyLabel: 'Pourquoi',
    nextLabel: 'Ensuite',
    improvementHint: 'Faites l\'ajustement et préparez une autre tasse.',
  },
};
