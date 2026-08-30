import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildWaterSeo } from '../../seoTranslations';

const slug = 'calculateur-eau-cafe-sca';
const title = "Calculateur d'Eau pour Café SCA";
const description =
 "Calculez les concentrations minérales exactes pour votre café de spécialité. Profils SCA, Barista Hustle et Hendon. Contrôlez Magnésium, Calcium et Bicarbonate pour maximiser la saveur et protéger votre machine.";

const faqData = [
 {
 question: "Qu'est-ce que le standard eau SCA ?",
 answer:
 "La Specialty Coffee Association définit un standard technique pour l'eau d'extraction, spécifiant des plages optimales de dureté totale (GH), d'alcalinité (KH), de pH et de sodium pour une extraction équilibrée qui révèle la saveur sans endommager l'équipement.",
 },
 {
 question: "Pourquoi ne pas utiliser l'eau du robinet ?",
 answer:
 "L'eau du robinet varie selon la ville et la saison. Elle peut contenir du chlore, du calcaire excessif ou des niveaux minéraux qui masquent les saveurs du café de spécialité et endommagent chaudières et joints. Minéraliser de l'eau distillée vous donne un contrôle total et des résultats reproductibles.",
 },
 {
 question: 'Où trouver les sels minéraux ?',
 answer:
 "Les sels d'Epsom (sulfate de magnésium) et le bicarbonate de soude se trouvent en pharmacies et supermarchés. Le chlorure de calcium est courant dans les boutiques de brassage maison. Assurez-vous toujours qu'ils soient de qualité alimentaire.",
 },
 {
 question: 'Est-ce sans danger pour ma machine à espresso ?',
 answer:
 "La calculatrice inclut un indicateur de risque en temps réel. L'eau très pure est corrosive pour les métaux ; l'eau très dure génère des dépôts de calcaire. Les profils SCA Idéal et Barista Hustle sont conçus pour équilibrer la longévité de l'équipement et la qualité de la saveur.",
 },
 {
 question: 'Quelle différence entre Magnésium et Calcium dans le café ?',
 answer:
 "Le magnésium extrait des composés aromatiques fruités et complexes avec plus d'efficacité, étant le minéral préféré pour les méthodes filtre. Le calcium apporte plus de corps et une texture soyeuse, mais a une plus grande tendance à former des dépôts dans les chaudières.",
 },
 {
 question: 'Puis-je enregistrer mes concentrations habituelles ?',
 answer:
 "Oui. La calculatrice enregistre les valeurs de concentré dans votre navigateur afin que votre recette personnalisée soit disponible lors de votre prochaine visite.",
 },
];

const howToData = [
 {
 name: "Procurez-vous de l'eau de base pure",
 text: "Achetez de l'eau distillée ou déminéralisée, ou utilisez l'osmose inverse. L'objectif est de partir de 0 ppm de solides dissous pour un contrôle total de la minéralisation.",
 },
 {
 name: 'Préparez vos flacons de concentré',
 text: "Dissolvez chaque sel séparément dans 100 ml d'eau distillée: 2,46 g de sel d'Epsom pour le Magnésium, 1,47 g de CaCl2 pour le Calcium et 1,68 g de bicarbonate pour le tampon.",
 },
 {
 name: 'Sélectionnez votre profil cible',
 text: "Choisissez SCA Idéal (équilibré), Barista Hustle (douceur et brillance), Hendon (corps), Melbourne (délicat) ou créez un profil personnalisé avec vos propres valeurs GH et KH.",
 },
 {
 name: 'Entrez le volume final',
 text: "Saisissez la quantité d'eau que vous souhaitez minéraliser en litres. La calculatrice ajuste automatiquement les doses de concentré pour ce volume exact.",
 },
 {
 name: "Ajoutez les concentrés et complétez avec de l'eau distillée",
 text: "À l'aide d'une seringue de précision, ajoutez les millilitres indiqués de chaque concentré dans votre récipient et complétez jusqu'au volume total avec de l'eau distillée.",
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: "Questions Fréquentes sur le Calculateur d'Eau pour Café",
 faq: faqData,
 bibliographyTitle: 'Références Techniques et Standards SCA',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildWaterSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 sectionMixTitle: 'Configuration du Mélange',
 labelVolume: 'Volume Final',
 labelProfile: "Profil d'Eau Cible",
 customProfileBtn: 'Personnalisé',
 labelGH: 'GH Cible',
 labelKH: 'KH Cible',
 concentratesTitle: 'Bouteilles de Concentré (g/100ml)',
 saltMgName: 'Magnésium (Epsom)',
 saltCaName: 'Calcium (CaCl2)',
 saltBufName: 'Bicarbonate (Sodium)',
 recipeTitle: 'Recette',
 labelMg: 'Magnésium :',
 labelCa: 'Calcium :',
 labelBuffer: 'Bicarbonate :',
 labelDistilledWater: "Eau Distillée jusqu'à",
 copyBtn: 'Copier la Recette',
 copiedText: 'Copié !',
 safetyMetalsTitle: 'Sécurité Métaux',
 safetyScaleTitle: 'Risque de Calcaire',
 calculatingText: 'Calcul en cours...',
 glossaryTitle: 'Guide Rapide des Minéraux',
 profileSubTemplate: 'Cible: {gh} GH / {kh} KH',
 customProfileName: 'Personnalisé',
 corrosionHigh: 'Danger: Eau très agressive. Peut corroder chaudières et composants en cuivre.',
 corrosionMedium: 'Acceptable: Risque modéré de corrosion. Recommandé pour filtres avec précaution.',
 corrosionLow: 'Sûr: L\'eau a une capacité tampon suffisante pour protéger les métaux.',
 scaleHigh: 'Danger: Formation de calcaire imminente. Utiliser uniquement avec méthodes filtre manuelles.',
 scaleMedium: 'Attention: Peut générer des dépôts de calcaire à long terme dans les machines à espresso.',
 scaleLow: 'Sûr: Aucun risque significatif de dépôts de calcaire.',
 copyTemplate:
 "Recette Eau Café ({profileName}) :\n- Volume: {liters}L\n- Concentré Magnésium: {mg}ml\n- Concentré Calcium: {ca}ml\n- Concentré Bicarbonate: {buf}ml\n- Eau Distillée: {water}ml",
 glossary0Term: 'Dureté Totale (GH)',
 glossary0Desc:
 'La somme du Calcium et du Magnésium. Le Magnésium révèle la douceur et la complexité ; le Calcium apporte corps et texture.',
 glossary1Term: 'Alcalinité (KH)',
 glossary1Desc:
 "La capacité de l'eau à neutraliser les acides. Un KH élevé supprime l'acidité ; un KH faible la rend acide.",
 glossary2Term: 'TDS (Solides Dissous)',
 glossary2Desc: 'Dans l\'eau minéralisée, le TDS représente la concentration combinée de tous les sels minéraux ajoutés.',
 glossary3Term: 'Magnésium',
 glossary3Desc:
 'Extrait des composés aromatiques fruités complexes plus efficacement. Le minéral préféré pour le café de spécialité.',
 },
};
