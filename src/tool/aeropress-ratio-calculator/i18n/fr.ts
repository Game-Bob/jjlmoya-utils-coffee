import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'calculateur-ratio-aeropress';
const title = 'Calculateur de Ratio et Recettes pour AeroPress';
const description = 'Calculez la répartition de l\'eau, la capacité de chambre, la dilution bypass et les étapes d\'extraction pour café AeroPress.';

const howTo = [
  {
    name: 'Choisir la méthode et le modèle AeroPress',
    text: 'Sélectionnez la méthode Standard ou Inversée et définissez la taille de votre chambre AeroPress (Original, XL ou Go).',
  },
  {
    name: 'Ajuster la dose de café et le ratio',
    text: 'Indiquez le poids de café moulu en grammes et le ratio souhaité, ou choisissez une recette de championnat.',
  },
  {
    name: 'Vérifier l\'eau de chambre et le bypass',
    text: 'Contrôlez si votre recette dépasse le volume utile. L\'outil calcule automatiquement l\'eau de bypass à verser dans la tasse.',
  },
  {
    name: 'Suivre le chronomètre interactif',
    text: 'Lancez le minuteur par étapes pour réussir avec précision la pré-infusion, l\'immersion et la pression lente.',
  },
];

const faq = [
  {
    question: 'Quelle est la différence entre la méthode standard et inversée sur AeroPress?',
    answer: 'Dans la méthode standard, la cafetière repose directement sur la tasse, entraînant un léger écoulement avant l\'insertion du piston. Dans la méthode inversée, l\'AeroPress repose à l\'envers sur son piston, offrant une immersion totale et étanche avant le retournement.',
  },
  {
    question: 'Qu\'est-ce que l\'infusion bypass avec l\'AeroPress?',
    answer: 'Le bypass consiste à extraire un concentré de café riche dans la chambre, puis à le diluer directement dans la tasse avec de l\'eau chaude pure. Cela permet de préparer de grands volumes sans déborder.',
  },
  {
    question: 'Quel est le ratio idéal pour le café AeroPress?',
    answer: 'Pour une tasse filtre classique, les ratios entre 1:14 et 1:17 (par exemple 11g à 15g de café pour 200g d\'eau) apportent un équilibre parfait. Pour des concentrés de style espresso, les ratios de 1:4 à 1:8 sont idéaux.',
  },
  {
    question: 'Comment la mouture influence-t-elle l\'extraction?',
    answer: 'Une mouture moyenne-fine convient parfaitement aux infusions courtes de 1 à 2 minutes. Une mouture plus fine renforce le corps, tandis qu\'une mouture plus grossière évite l\'amertume sur des infusions longues.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Outil Café de Spécialité',
    profileLabel: 'Profil d\'Extraction',
    unitSystemLabel: 'Système d\'Unités',
    unitMetricLabel: 'Métrique (g)',
    unitImperialLabel: 'Impérial (oz)',
    presetsTitle: 'Recettes Barista et Championnats',
    presetCustom: 'Formule Personnalisée',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Torréfaction Claire',
    presetWacChamp: 'Champion WAC Bypass',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Glacé AeroPress',
    methodLabel: 'Technique d\'Infusion',
    methodStandard: 'Standard Directe',
    methodInverted: 'Immersion Inversée',
    modelLabel: 'Modèle AeroPress',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Dose de Café',
    doseUnitMetric: 'grammes',
    doseUnitImperial: 'oz',
    ratioLabel: 'Ratio d\'Infusion',
    ratioPrefix: '1:',
    waterTempLabel: 'Température de l\'Eau',
    waterTempUnit: '°C',
    grindLabel: 'Profil de Mouture',
    grindFine: 'Fine',
    grindMediumFine: 'Moyenne Fine',
    grindMedium: 'Moyenne',
    grindCoarse: 'Grossière',
    resultsTitle: 'Répartition d\'Eau et Métriques',
    statTotalWater: 'Eau Totale',
    statChamberWater: 'Eau en Chambre',
    statBypassWater: 'Eau de Bypass',
    statYield: 'Volume en Tasse',
    statEstimatedTds: 'TDS Estimé',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Dilution Bypass Requise',
    bypassAlertText: 'Votre recette nécessite {chamber} dans la chambre et {bypass} ajoutés directement dans la tasse.',
    timerTitle: 'Minuteur par Étapes',
    timerStart: 'Démarrer',
    timerPause: 'Pause',
    timerReset: 'Réinitialiser',
    phaseBloom: 'Pré-infusion et Humidification',
    phasePour: 'Versement et Agitation',
    phaseSteep: 'Immersion et Infusion',
    phasePress: 'Pression Lente',
    phaseBypass: 'Ajouter Eau de Bypass',
    phaseComplete: 'Extraction Prête',
    guideTitle: 'Guide d\'Extraction',
    guideStep1Title: 'Rincer le filtre et doser',
    guideStep1Desc: 'Placez le filtre dans le bouchon et rincez à l\'eau chaude. Versez le café fraîchement moulu.',
    guideStep2Title: 'Verser l\'eau en chambre',
    guideStep2Desc: 'Versez l\'eau calculée pour la chambre à la bonne température et remuez doucement.',
    guideStep3Title: 'Insérer le piston et laisser infuser',
    guideStep3Desc: 'Placez le piston sur le dessus pour créer un vide et laissez infuser la durée prévue.',
    guideStep4Title: 'Presser et diluer',
    guideStep4Desc: 'Abaissez le piston régulièrement pendant 20 à 30 secondes. Arrêtez au sifflement et ajoutez l\'eau de bypass.',
    ratioStrengthLight: 'Léger et Délicat',
    ratioStrengthMedium: 'Tasse Équilibrée',
    ratioStrengthStrong: 'Riche et Corpulent',
    ratioStrengthConcentrate: 'Concentré Style Espresso',
    chamberWaterLabel: 'Eau en Chambre',
    coffeeBedLabel: 'Lit de Café',
    airGapLabel: 'Espace d\'Air',
  },
  seo: [
    { type: 'title', text: 'Science de l\'Extraction et Ratios AeroPress', level: 2 },
    {
      type: 'paragraph',
      html: 'La cafetière <strong>AeroPress</strong> est reconnue pour sa remarquable polyvalence, combinant infusion par immersion totale et filtration par pression pneumatique. Obtenir une tasse sucrée et aromatique nécessite une parfaite maîtrise du ratio café et eau.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Capacité Utile et Principe du Bypass',
      html: 'Une chambre standard d\'AeroPress contient entre 220ml et 240ml d\'eau une fois le lit de mouture déduit. Pour de plus grandes portions, les baristas utilisent la méthode bypass pour extraire sans déborder.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Ratio d\'Or Filtre' },
        { value: '230 ml', label: 'Capacité Chambre Standard' },
        { value: '1.2 à 1.5%', label: 'Cible Optimale de TDS' },
      ],
    },
    { type: 'title', text: 'Comparaison entre Méthode Standard et Inversée', level: 3 },
    {
      type: 'paragraph',
      html: 'L\'orientation de l\'appareil modifie la cinétique d\'infusion et la maîtrise du temps de contact.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Méthode Standard Directe',
          description: 'Le porte-filtre repose sur la tasse. L\'insertion du piston crée un vide qui bloque l\'écoulement précoce.',
          points: [
            'Utilisation très simple et sûre',
            'Légère percolation passive au début',
            'Privilégiée par James Hoffmann pour sa régularité',
          ],
        },
        {
          title: 'Méthode Inversée en Immersion',
          description: 'La cafetière repose à l\'envers sur le piston pour empêcher toute fuite jusqu\'au retournement.',
          highlight: true,
          points: [
            'Contrôle absolu du temps de contact',
            'Idéale pour les concentrés et fortes doses',
            'Exige de la prudence lors du retournement',
          ],
        },
      ],
    },
    { type: 'title', text: 'Maîtriser la Dilution Bypass pour Grands Volumes', level: 3 },
    {
      type: 'paragraph',
      html: 'Le bypass est le secret de nombreuses recettes championnes du World AeroPress Championship. Extraire à un ratio resserré de 1:6 à 1:8 évite les composés amers tardifs, et l\'ajout d\'eau chaude dans la tasse restaure l\'équilibre.',
    },
    {
      type: 'table',
      headers: ['Style de Recette', 'Dose Café', 'Eau Chambre', 'Eau Bypass', 'Mouture Conseillée'],
      rows: [
        ['Filtre Hoffmann', '11g', '200g', '0g', 'Moyenne Fine (600µm)'],
        ['Tim Wendelboe Clair', '14g', '200g', '0g', 'Moyenne (700µm)'],
        ['Championnat WAC Bypass', '30g', '120g', '105g', 'Grossière (900µm)'],
        ['Alan Adler Classique', '17g', '80g', '100g Optionnel', 'Fine (450µm)'],
        ['Flash Brew Glacé', '18g', '150g', '100g Glaçons', 'Moyenne Fine (550µm)'],
      ],
    },
    { type: 'title', text: 'Bonnes Pratiques pour une Extraction Parfaite', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Ajustement thermique:</strong> 92°C à 96°C pour les torréfactions claires, 80°C à 85°C pour les torréfactions foncées afin d\'éviter l\'astringence.',
        '<strong>Pression lente:</strong> Exercez une poussée régulière pendant 20 à 30 secondes pour éviter le channeling.',
        '<strong>Rinçage du filtre:</strong> Rincez le disque en papier à l\'eau chaude pour neutraliser le goût de cellulose.',
        '<strong>Stopper au sifflement:</strong> Arrêtez l\'abaissement dès que l\'air commence à passer pour ne pas extraire d\'huiles amères.',
      ],
    },
    {
      type: 'summary',
      title: 'Synthèse Pratique',
      items: [
        'Ajustez la mouture selon la durée d\'immersion.',
        'Utilisez le calcul bypass dès que la quantité voulue dépasse le volume de chambre.',
        'Mesurez température et temps avec précision pour des résultats constants.',
      ],
    },
  ],
  faq,
  faqTitle: 'Questions Fréquentes sur le Ratio et les Recettes AeroPress',
  bibliography,
  bibliographyTitle: 'Références Techniques et Science du Café',
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
