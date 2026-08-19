import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-proportion-cafe-cold-brew';
const title = 'Calculateur de proportion pour café cold brew';
const description = 'Calculez le café, l eau, la dilution du concentré, le temps d infusion et le rendement servi pour un cold brew en unités métriques ou impériales.';

const faqData = [
  { question: 'Quel ratio café eau utiliser pour un cold brew ?', answer: 'Commencez avec 1:8 pour un cold brew prêt à boire ou 1:5 pour un concentré à diluer. Le meilleur ratio dépend du café, de la mouture, du temps et du service prévu.' },
  { question: 'Quelle quantité de café faut il pour 1 litre de cold brew ?', answer: 'Avec un ratio de 1:8, utilisez 125 grammes de café et 1 000 millilitres d eau de brassage. Le calculateur estime aussi l eau retenue par le marc.' },
  { question: 'Puis je calculer un cold brew en onces et en onces liquides ?', answer: 'Oui. Choisissez Imperial pour afficher le café en onces et l eau en onces liquides. Le calcul sous-jacent reste en grammes et millilitres.' },
  { question: 'Quelle est la différence entre un cold brew prêt à boire et un concentré ?', answer: 'Le cold brew prêt à boire est préparé près de sa force de service. Le concentré utilise davantage de café et est ensuite mélangé avec de l eau ou du lait.' },
  { question: 'Combien de temps faut il infuser un cold brew ?', answer: 'Pour commencer, prévoyez 12 à 18 heures en immersion complète au réfrigérateur ou dans une pièce fraîche. Une durée plus longue peut augmenter l amertume et l astringence.' },
  { question: 'Le calculateur tient il compte de l eau retenue par le marc ?', answer: 'Oui. Il estime environ 2 millilitres d eau retenue par gramme de café pour calculer le rendement. Le filtre, la mouture et l égouttage modifient le résultat réel.' },
  { question: 'Ce calculateur est il un guide de sécurité alimentaire ?', answer: 'Non. Il calcule seulement les quantités de recette. Utilisez du matériel propre, réfrigérez la boisson si nécessaire et suivez les recommandations actuelles de conservation.' },
];

const howToData = [
  { name: 'Choisir le style de préparation', text: 'Sélectionnez prêt à boire pour servir directement ou concentré si vous ajouterez de l eau ou du lait ensuite.' },
  { name: 'Définir l eau de brassage', text: 'Saisissez la quantité d eau du récipient. Le calculateur adapte la dose de café selon ce volume et le ratio choisi.' },
  { name: 'Régler le ratio', text: 'Choisissez un profil ou déplacez le curseur. Les petits nombres donnent une boisson plus forte et les grands une boisson plus légère.' },
  { name: 'Régler l infusion et la dilution', text: 'Utilisez le temps comme repère. En mode concentré, indiquez l eau de dilution pour chaque part de café infusé.' },
  { name: 'Suivre la fiche du batch', text: 'Utilisez le flux et les étapes pour peser le café, ajouter l eau, infuser, filtrer et diluer le rendement servi estimé.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Ratio et planification d un batch de cold brew', level: 2 },
  { type: 'paragraph', html: 'Le cold brew est plus facile à reproduire quand la masse de café, l eau, la dilution et le temps d infusion sont réglés séparément. Ce calculateur transforme le style choisi en recette pesée.' },
  { type: 'title', text: 'Choisir entre prêt à boire et concentré', level: 2 },
  { type: 'paragraph', html: 'Une recette prête à boire est infusée près de sa force de service. Un concentré utilise un ratio plus serré puis reçoit de l eau après filtration.' },
  { type: 'table', headers: ['Style', 'Ratio de départ', 'Dilution', 'Usage'], rows: [['Prêt à boire', '1:8', 'Aucune', 'Servir froid ou sur glace'], ['Batch doux', '1:10', 'Aucune', 'Tasse légère au quotidien'], ['Concentré', '1:5', '1:1', 'Mélanger avec eau ou lait']] },
  { type: 'title', text: 'Comment fonctionne le calcul du cold brew', level: 2 },
  { type: 'list', items: ['La dose de café correspond à l eau de brassage divisée par le ratio choisi.', 'Le rendement infusé est estimé après retrait d environ 2 millilitres d eau retenue par gramme de café.', 'La dilution du concentré part du rendement infusé pour afficher clairement le volume servi.'] },
  { type: 'title', text: 'Mesures métriques et impériales du cold brew', level: 2 },
  { type: 'paragraph', html: 'Choisissez les grammes et millilitres pour une recette métrique ou les onces et onces liquides pour une recette impériale. La relation entre masse et volume reste cohérente.' },
  { type: 'table', headers: ['Mesure', 'Métrique', 'Impérial'], rows: [['Dose de café', 'g', 'oz'], ['Eau et rendement', 'ml', 'fl oz'], ['Ratio', '1 part de café', '1 part de café']] },
  { type: 'tip', title: 'Utiliser le résultat comme recette de départ', html: '<p>Le café, la mouture, le filtre, la température et l égouttage changent l extraction et le rendement. Goûtez le premier batch et modifiez une variable à la fois.</p>' },
  { type: 'title', text: 'Temps d infusion et sécurité alimentaire', level: 2 },
  { type: 'paragraph', html: 'Le curseur d infusion aide à planifier la recette, mais ne garantit ni le goût ni la sécurité. Utilisez du matériel propre et suivez les recommandations actuelles de refroidissement, de conservation et de service.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Questions sur le cold brew', faq: faqData, bibliographyTitle: 'Références de préparation', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Préparer votre batch', modeReady: 'Prêt à boire', modeReadyHint: 'Infuser et servir', modeConcentrate: 'Concentré', modeConcentrateHint: 'Infuser puis diluer', unitSystemLabel: 'Système de mesure', unitMetric: 'Métrique', unitImperial: 'Impérial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Commencer avec un profil', presetClassic: 'Classique 1:8', presetSmooth: 'Doux 1:10', presetConcentrate: 'Concentré 1:5', presetCustom: 'Personnalisé', brewWaterLabel: 'Eau de brassage', brewWaterHint: 'Eau pour l infusion', ratioLabel: 'Ratio café eau', ratioHint: 'Eau par gramme de café', dilutionLabel: 'Eau de dilution', dilutionHint: 'Parts d eau par part de café infusé', steepLabel: 'Temps d infusion', steepHint: 'Une plage indicative', hoursUnit: 'heures', resultTitle: 'Votre batch', resultBadgeReady: 'Prêt à boire', resultBadgeConcentrate: 'Concentré', coffeeLabel: 'Café moulu', brewWaterResultLabel: 'Eau de brassage', retainedLabel: 'Retenue par le marc', dilutionWaterLabel: 'Eau de dilution', servedYieldLabel: 'Rendement servi estimé', ratioResultLabel: 'Ratio', steepResultLabel: 'Infusion', steepStatusShort: 'Infusion courte', steepStatusBalanced: 'Infusion équilibrée', steepStatusLong: 'Infusion longue', stageCaption: 'Un batch doux prêt pour le réfrigérateur', stageCaptionConcentrate: 'Un concentré intense en attente de dilution', stepsTitle: 'Étapes de la recette', visualTitle: 'Flux du batch', visualBrewCaption: 'Infuser', visualFilterCaption: 'Filtrer', visualServeCaption: 'Servir', visualCoffeeDose: 'Dose de café', visualWaterInput: 'Eau de brassage', visualRetained: 'Retenue par le marc', visualServed: 'Rendement infusé', visualDilution: 'Eau de dilution', stepCoffee: 'Pesez {coffee} {coffeeUnit} de café moulu grossièrement.', stepWater: 'Ajoutez {water} {waterUnit} d eau et saturez complètement le café.', stepSteep: 'Couvrez et laissez infuser environ {hours} heures.', stepDilute: 'Après filtration, ajoutez {water} {waterUnit} d eau de dilution.', stepServe: 'Réfrigérez et servez environ {yield} {waterUnit}.', noteTitle: 'Une estimation utile', noteText: 'Le marc retient de l eau pendant la filtration. Cette quantité est estimée. Calibrez votre premier batch avec votre filtre et votre méthode d égouttage.', copyRecipe: 'Copier la recette', copiedText: 'Recette copiée', resetText: 'Réinitialiser', copyTemplate: 'Recette de cold brew\nCafé : {coffee} {coffeeUnit}\nEau de brassage : {brewWater} {waterUnit}\nRatio : 1:{ratio}\nInfusion : {hours} heures\nEau de dilution : {dilutionWater} {waterUnit}\nRendement servi estimé : {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Références',
  },
};
