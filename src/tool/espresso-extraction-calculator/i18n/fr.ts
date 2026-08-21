import { bibliography } from '../bibliography';
import type { EspressoExtractionLocaleContent } from '../entry';

const slug = 'calculateur-extraction-espresso';
const title = 'Calculateur d extraction espresso';
const description = 'Notez la dose, la masse de boisson et le temps du shot pour lire le ratio, le débit et le rendement d extraction si vous avez une mesure TDS au réfractomètre.';

export const content: EspressoExtractionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    kicker: 'Verre de shot',
    statusClassic: 'Fenêtre classique',
    statusOutside: 'Hors de la fenêtre classique',
    presetTitle: 'Profil du shot',
    presetClassic: 'Classique 1:2',
    presetRistretto: 'Ristretto',
    presetLungo: 'Lungo',
    presetSingle: 'Simple',
    presetTurbo: 'Turbo',
    unitSystemLabel: 'Unités',
    unitMetric: 'g',
    unitImperial: 'oz',
    doseLabel: 'Dose',
    yieldLabel: 'Dans la tasse',
    timeLabel: 'Temps du shot',
    preinfusionLabel: 'Préinfusion',
    preZero: 'Off',
    preShort: '4s',
    preLong: '8s',
    ratioTargetsLabel: 'Remplir jusqu a',
    ratioTargetOne: '1:1',
    ratioTargetTwo: '1:2',
    ratioTargetThree: '1:3',
    tdsToggle: 'TDS',
    tdsLabel: 'TDS',
    tdsHint: 'Lecture du réfractomètre',
    unitGrams: 'g',
    unitOz: 'oz',
    unitSeconds: 's',
    unitPercent: '%',
    unitFlow: 'g/s',
    ratioReadout: 'Ratio',
    timeReadout: 'Temps',
    flowReadout: 'Débit',
    yieldReadout: 'EY',
    yieldEmpty: 'Sans TDS',
    styleRistretto: 'Ristretto',
    styleNormale: 'Normale',
    styleLungo: 'Lungo',
    paceFast: 'Rapide',
    paceTypical: 'Typique',
    paceSlow: 'Lent',
    bandUnmeasured: 'Sans TDS',
    bandLow: 'Sous 18%',
    bandTarget: '18 a 22%',
    bandHigh: 'Au dessus de 22%',
    markOne: '1:1',
    markTwo: '1:2',
    markThree: '1:3',
    deltaOnLine: 'Sur la ligne 1:2',
    deltaPast: '{n} g au dela de 1:2',
    deltaShort: '{n} g sous 1:2',
    resetText: 'Réinitialiser',
    faqTitle: 'Questions sur l extraction espresso',
    bibliographyTitle: 'References d extraction',
  },
  seo: [
    { type: 'title', text: 'Ce que ce calculateur espresso mesure vraiment', level: 2 },
    {
      type: 'paragraph',
      html: 'Les recettes d espresso se répètent mieux quand elles sont écrites en masses et en temps. Le ratio est la masse de boisson divisée par la dose sèche. Une dose de 18 g qui donne 36 g en tasse est un shot 1:2. Le temps de contact est la lecture du minuteur moins une préinfusion. Le débit est la masse de boisson divisée par ce temps de contact.',
    },
    {
      type: 'tip',
      title: 'Pesez la tasse, ne faites pas confiance aux millilitres',
      html: 'La crema et la température rendent les volumes bruyants. Les recettes de spécialité utilisent presque toujours des grammes en entrée et en sortie. Si vous n avez qu une marque de volume, traitez 1 ml comme 1 g approximatif et passez a une balance dès que possible.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:2', label: 'Ratio de départ courant' },
        { value: '20 a 32 s', label: 'Fenêtre de contact typique' },
        { value: '18 a 22%', label: 'Bande de rendement citée' },
      ],
    },
    { type: 'title', text: 'Styles de shot selon le ratio', level: 3 },
    {
      type: 'paragraph',
      html: 'Les étiquettes ristretto, normale et lungo sont des familles de ratio, pas des notes de goût. Cet outil utilise des seuils de masse vers 1:1.5 et 1:2.5 car beaucoup de bars de spécialité écrivent ainsi leurs recettes. Les définitions italiennes traditionnelles en volume sont différentes et ne s appliquent pas ici.',
    },
    {
      type: 'table',
      headers: ['Style', 'Ratio en masse', 'Exemple sur 18 g', 'Ce que montre le verre'],
      rows: [
        ['Ristretto', 'Sous 1:1.5', 'Environ 20 g en tasse', 'Le niveau reste près de la marque 1:1'],
        ['Normale', '1:1.5 a 1:2.5', '36 g en tasse a 1:2', 'Le liquide rejoint la ligne dorée 1:2 si le temps est typique'],
        ['Lungo', 'Au dessus de 1:2.5', 'Environ 54 g en tasse', 'Le niveau grimpe vers la marque 1:3'],
        ['Turbo', 'Souvent vers 1:2.2', '40 g en environ 15 s', 'Rythme rapide, recette tout de même mesurée'],
      ],
    },
    { type: 'title', text: 'Le rendement d extraction exige une lecture TDS', level: 3 },
    {
      type: 'paragraph',
      html: 'Les solides dissous totaux (TDS) sont la force de la boisson, en général lus au réfractomètre. Le rendement d extraction est la part du café sec qui s est dissoute. La relation utilisée ici est la même identité de la carte d extraction discutée par la Specialty Coffee Association: le pourcentage de rendement égal le TDS en pourcent fois la masse de boisson, divisé par la dose.',
    },
    {
      type: 'list',
      items: [
        '<strong>Mesurable sans TDS:</strong> dose, masse de boisson, ratio, temps du shot, préinfusion, temps de contact et débit.',
        '<strong>Mesurable seulement avec TDS:</strong> rendement d extraction. Un TDS de 9.5 pourcent sur 36 g issus de 18 g donne 19 pourcent de rendement.',
        '<strong>Pas un diagnostic de goût:</strong> acide, amer ou creux demande mouture, température et préparation du puck. Utilisez l outil de diagnostic de goût pour ce travail.',
        '<strong>Pas une spec de fabricant:</strong> panier, torréfaction et machine changent le shot qui goûte le mieux. Traitez 18 a 22 pourcent comme une bande de planification citée, pas comme un succès ou un échec.',
      ],
    },
    {
      type: 'summary',
      title: 'Comment utiliser le laboratoire de shots',
      items: [
        'Choisissez un profil ou réglez dose, boisson et temps depuis la balance et le minuteur. Cette recette est conçue pour être pesée, pas devinée.',
        'Regardez le verre se remplir jusqu aux marques 1:1, 1:2 et 1:3 quand ratio et rythme changent.',
        'Activez TDS seulement après une lecture de réfractomètre si vous voulez le rendement d extraction. Passez à la balance dès que possible.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quel ratio dois je utiliser pour l espresso?',
      answer: 'Un point de départ courant en café de spécialité est 1:2 en masse, par exemple 18 g en entrée et 36 g en tasse. Des ratios plus courts comme 1:1.1 restent en style ristretto. Des ratios plus longs comme 1:3 restent en style lungo. Ce sont des fenêtres de planification, pas une recette unique.',
    },
    {
      question: 'Comment calcule t on le rendement d extraction espresso?',
      answer: 'Le rendement en pourcent égal le TDS en pourcent fois la masse de boisson en grammes, divisé par la dose sèche. Une lecture TDS de 10 pourcent sur 36 g issus de 18 g donne 20 pourcent de rendement. Sans TDS mesuré, l outil n invente pas ce chiffre.',
    },
    {
      question: 'Pourquoi le temps du shot n est pas le rendement?',
      answer: 'Le temps et le débit décrivent la vitesse de l eau a travers le puck. Le rendement décrit la part de café sec dissoute dans la tasse. Un 1:2 rapide et un 1:2 lent peuvent partager un ratio et extraire autrement. Le diagnostic de goût appartient a un autre outil.',
    },
    {
      question: 'Dois je inclure la préinfusion dans le temps du shot?',
      answer: 'Saisissez la lecture totale du minuteur, puis indiquez la préinfusion a part si la machine imbibe le puck avant le débit plein. Le temps de contact est le total moins cette infusion, et le débit utilise ce contact pour qu un long trempage ne ressemble pas a un shot lent.',
    },
  ],
  faqTitle: 'Questions sur l extraction espresso',
  bibliography,
  bibliographyTitle: 'References d extraction',
  howTo: [
    {
      name: 'Saisir la dose de cafe',
      text: 'Pesez le café sec dans le porte filtre, puis réglez le curseur de dose sur cette masse en grammes.',
    },
    {
      name: 'Tirer le shot et peser la boisson',
      text: 'Lancez le minuteur quand la pompe s enclenche, arrêtez le au cut et pesez le liquide dans la tasse.',
    },
    {
      name: 'Lire ratio, temps et debit',
      text: 'Le calculateur transforme ces trois chiffres en ratio, temps de contact et grammes par seconde pour comparer le shot a une fenêtre classique.',
    },
    {
      name: 'Ajouter le TDS seulement si mesure',
      text: 'Si vous avez utilisé un réfractomètre, activez TDS et saisissez la lecture. Le rendement est le TDS en pourcent fois la masse de boisson, divisé par la dose. Laissez TDS éteint si vous n avez pas mesuré.',
    },
  ],
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
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel ratio dois je utiliser pour l espresso?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un point de départ courant en café de spécialité est 1:2 en masse, par exemple 18 g en entrée et 36 g en tasse. Des ratios plus courts comme 1:1.1 restent en style ristretto. Des ratios plus longs comme 1:3 restent en style lungo. Ce sont des fenêtres de planification, pas une recette unique.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment calcule t on le rendement d extraction espresso?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le rendement en pourcent égal le TDS en pourcent fois la masse de boisson en grammes, divisé par la dose sèche. Une lecture TDS de 10 pourcent sur 36 g issus de 18 g donne 20 pourcent de rendement. Sans TDS mesuré, l outil n invente pas ce chiffre.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi le temps du shot n est pas le rendement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le temps et le débit décrivent la vitesse de l eau a travers le puck. Le rendement décrit la part de café sec dissoute dans la tasse. Un 1:2 rapide et un 1:2 lent peuvent partager un ratio et extraire autrement. Le diagnostic de goût appartient a un autre outil.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dois je inclure la préinfusion dans le temps du shot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Saisissez la lecture totale du minuteur, puis indiquez la préinfusion a part si la machine imbibe le puck avant le débit plein. Le temps de contact est le total moins cette infusion, et le débit utilise ce contact pour qu un long trempage ne ressemble pas a un shot lent.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: [
        { '@type': 'HowToStep', name: 'Saisir la dose de cafe', text: 'Pesez le café sec dans le porte filtre, puis réglez le curseur de dose sur cette masse en grammes.' },
        { '@type': 'HowToStep', name: 'Tirer le shot et peser la boisson', text: 'Lancez le minuteur quand la pompe s enclenche, arrêtez le au cut et pesez le liquide dans la tasse.' },
        { '@type': 'HowToStep', name: 'Lire ratio, temps et debit', text: 'Le calculateur transforme ces trois chiffres en ratio, temps de contact et grammes par seconde pour comparer le shot a une fenêtre classique.' },
        { '@type': 'HowToStep', name: 'Ajouter le TDS seulement si mesure', text: 'Si vous avez utilisé un réfractomètre, activez TDS et saisissez la lecture. Le rendement est le TDS en pourcent fois la masse de boisson, divisé par la dose. Laissez TDS éteint si vous n avez pas mesuré.' },
      ],
    },
  ],
};
