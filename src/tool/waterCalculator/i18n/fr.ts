import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
 seo: [
 {
 type: 'title',
 text: 'Química del Agua para Café: Por qué el H₂O es el ingrediente olvidado',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café es agua en un 98-99%. Sin embargo, la composición mineral de ese agua es el factor diferencial más ignorado en la cadena de calidad. Un café de especialidad de Etiopía extraído con agua del grifo de Madrid puede saber completamente distinto al mismo café preparado con agua mineralizada siguiendo el estándar SCA. Nuestra <strong>calculadora de agua para café</strong> te permite formular el agua perfecta desde cero, usando sales minerales comunes y partiendo de agua destilada.',
 },
 {
 type: 'summary',
 title: '¿Por qué la mineralización del agua importa tanto?',
 items: [
 '<strong>GH (Dureza General):</strong> La suma de iones Magnesio y Calcio determina la capacidad del agua para disolver compuestos de sabor del café.',
 '<strong>KH (Alcalinidad):</strong> La cantidad de bicarbonato controla el pH durante la extracción. Un KH bajo produce café agrio; un KH alto lo aplana.',
 '<strong>Repetibilidad:</strong> El agua municipal cambia por temporada y ciudad. El agua mineralizada es constante y reproducible.',
 '<strong>Protección del equipo:</strong> Los niveles correctos evitan tanto la corrosión (agua muy pura) como las incrustaciones de cal (agua muy dura).',
 ],
 },
 {
 type: 'title',
 text: 'El Estándar SCA: Los Límites Técnicos del Agua Perfecta para Café',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La Specialty Coffee Association publicó en 2015 su estándar de calidad del agua. Tras años de investigación sensorial y química, estableció rangos ideales para cada parámetro. No son números arbitrarios: son el resultado de catas a ciegas con profesionales donde se maximizó la percepción de acidez equilibrada, dulzor y cuerpo.',
 },
 {
 type: 'table',
 headers: ['Parámetro', 'Mínimo', 'Ideal SCA', 'Máximo'],
 rows: [
 ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
 ['Alcalinidad (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
 ['pH', '6.5', '7.0', '7.5'],
 ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
 ],
 },
 {
 type: 'title',
 text: 'Magnesio vs Calcio: La Batalla Mineral que Define tu Taza',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'No todos los minerales actúan igual sobre el café. El investigador Christopher Hendon demostró que el <strong>magnesio</strong> forma ligandos con las moléculas de sabor más complejas y volátiles, extrayendo notas frutales y florales con mayor eficiencia. El <strong>calcio</strong>, en cambio, extrae compuestos más pesados, aportando cuerpo y textura sedosa pero con menos brillo aromático.',
 },
 {
 type: 'list',
 items: [
 '<strong>Magnesio puro (ratio 1:0):</strong> Máxima complejidad aromática y fruta. Ideal para cafés naturales o de perfil frutal. Mayor riesgo de sobresalir la acidez.',
 '<strong>Calcio puro (ratio 0:1):</strong> Cuerpo denso y sedoso. Ideal para espresso clásico y tuestes oscuros. Mayor riesgo de incrustaciones en calderas.',
 '<strong>Mix equilibrado (SCA 1:0, Hendon 1:1):</strong> La mayoría de perfiles de calidad usan magnesio como ión principal pero añaden algo de calcio para equilibrar la textura.',
 ],
 },
 {
 type: 'title',
 text: 'El Semáforo de Seguridad: Protege tu Máquina de Espresso',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Nuestra calculadora incluye un <strong>análisis de riesgo en tiempo real</strong> basado en los valores de GH y KH que introduces. El índice de corrosión evalúa si el agua es demasiado pura y agresiva para los metales. El índice de cal mide si el KH y GH combinados generarán depósitos en calderas y tuberías.',
 },
 {
 type: 'tip',
 title: 'Regla práctica del barista profesional',
 html: '<p>Para máquinas de espresso con caldera de latón o cobre, nunca uses perfiles con KH inferior a 40 mg/L de forma continua. El agua muy pura es corrosiva a largo plazo. Para métodos de filtro (V60, Chemex, Aeropress) no hay caldera que proteger, por lo que puedes usar perfiles más delicados como Melbourne sin problema.</p>',
 },
 {
 type: 'title',
 text: 'Cómo Preparar las Botellas de Concentrado en Casa',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'La clave para una mineralización precisa es trabajar con <strong>concentrados stock</strong> en lugar de añadir sales directamente al agua final. Un concentrado de 2,46 g de sales de Epsom en 100 ml de agua destilada te permite dosificar con jeringas de 1 ml con una precisión de ±0,01 ml. Esta metodología, popularizada por Barista Hustle, convierte la química del café en algo tan sencillo como mezclar cócteles.',
 },
 {
 type: 'stats',
 items: [
 { label: 'GH ideal SCA', value: '68 mg/L', icon: 'mdi:water' },
 { label: 'KH ideal SCA', value: '40 mg/L', icon: 'mdi:water-percent' },
 { label: 'Coste aproximado por litro', value: '<0.05€', icon: 'mdi:currency-eur' },
 ],
 columns: 3,
 },
 ],
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
