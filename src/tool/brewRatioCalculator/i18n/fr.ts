import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
 "C'est le premier versage d'eau, équivalent au double du poids du café (2ml par gramme). Il est effectué pour dégazer le café frais: le CO2 piégé lors de la torréfaction s'échappe et permet à l'eau d'extraire les composés de manière uniforme. S'il n'y a pas de bloom visible, le café a été moulu ou torréfié depuis un certain temps.",
 },
 {
 question: "Comment faire du café glacé sans qu'il soit trop dilué ?",
 answer:
 "Utilisez la technique du flash chilling: préparez 60% de l'eau totale comme eau chaude à 90-96 degrés et mettez les 40% restants sous forme de glace dans la carafe. Versez le café chaud directement sur la glace. Le refroidissement rapide scelle les arômes. Ce calculateur recalcule automatiquement les quantités lorsque vous activez le mode Café Glacé.",
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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'Calculadora de Ratio de Café y Agua: La Guía Maestra para la Extracción Perfecta (2026)',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Preparar una taza de café de especialidad no es un acto culinario subjetivo; es un experimento de <strong>química de fluidos</strong> y <strong>transferencia de masa</strong>. En el centro de este proceso reside el concepto de <strong>Brew Ratio</strong> (proporción de infusión), una medida crítica que dicta la relación cuantitativa entre el soluto (café molido) y el disolvente (agua). Nuestra calculadora ha sido diseñada integrando los estándares de la <em>Specialty Coffee Association (SCA)</em> y principios de termodinámica aplicada para permitir que baristas y entusiastas alcancen la reproducibilidad perfecta en sus extracciones.',
 },
 {
 type: 'summary',
 title: 'Lo que aprenderás sobre el Ratio de Café',
 items: [
 '<strong>Brew Ratio:</strong> Cómo la relación en peso entre café y agua (ej. 1:15) determina la fuerza potencial y el perfil sensorial de tu taza.',
 '<strong>TDS y Extracción:</strong> La ciencia detrás de los sólidos disueltos y qué porcentaje del grano realmente debe terminar en tu bebida.',
 '<strong>Ajuste por Retención:</strong> Por qué el café absorbe 2g de agua por cada gramo de polvo y cómo calcular el agua extra necesaria.',
 '<strong>Métodos Específicos:</strong> Las proporciones ideales para V60, Prensa Francesa, Espresso y recetas de café helado (Flash Brew).',
 ],
 },
 {
 type: 'title',
 text: '¿Qué es el Brew Ratio y por qué es la variable más importante?',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café contiene aproximadamente un 30% de material soluble, pero no todo ese material es deseable para el paladar humano. El agua, actuando como disolvente universal, extrae los compuestos en un orden específico basado en su peso molecular y afinidad química. El ratio de café controla precisamente cuánta capacidad de disolución entregamos a cada gramo de café.',
 },
 {
 type: 'list',
 items: [
 '<strong>Fase Ácida (Lípidos y Ácidos Orgánicos):</strong> Son los primeros en disolverse debido a su alta solubilidad. Aportan brillo, acidez málica o cítrica y notas frutales. Un ratio demasiado bajo (sub-extracción) detiene el proceso aquí, resultando en una taza agria y salada.',
 '<strong>Fase Dulce (Azúcares y Carbohidratos):</strong> Se extraen a continuación. Generan balance, dulzor y cuerpo. Es la "ventana dorada" donde el café alcanza su máxima complejidad aromática y equilibrio estructural.',
 '<strong>Fase Amarga (Fibras y Compuestos Fenólicos):</strong> Son los más lentos en disolverse. Con ratios excesivos (sobre-extracción), el agua degrada las celdas del café, extrayendo amargos secantes, notas a ceniza y madera.',
 ],
 },
 {
 type: 'title',
 text: 'Ratios recomendados: Proporciones por métodos de extracción',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cada método de extracción requiere un ratio específico debido a variables como el tiempo de contacto, la presión de la bomba o el micraje del filtro utilizado. La siguiente tabla técnica desglosa los estándares de la industria para 2026:',
 },
 {
 type: 'table',
 headers: ['Método de Preparación', 'Ratio (Gramos/Agua)', 'Perfil en Taza', 'Tiempo Objetivo'],
 rows: [
 ['Espresso', '1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 seg'],
 ['V60 / Pour-Over', '1:15 a 1:16', 'Limpio, brillante, notas claras', '2:30-3:30 min'],
 ['Aeropress', '1:12 a 1:15', 'Versátil, cuerpo medio-alto', '1:30-2:00 min'],
 ['French Press', '1:12 a 1:14', 'Texturizado, pesado, aceitoso', '4:00-5:00 min'],
 ['Cold Brew', '1:8 a 1:12', 'Dulce, baja acidez, gran cuerpo', '12-24 horas'],
 ],
 },
 {
 type: 'title',
 text: 'Cómo calcular el agua necesaria: El Factor de Retención del grano',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Uno de los errores más comunes en la preparación manual es ignorar que el café molido es una estructura hidrofílica porosa que retiene una cantidad constante de agua. No todo el agua que viertes termina en la taza.',
 },
 {
 type: 'paragraph',
 html: 'Científicamente, el café molido retiene aproximadamente <strong>2.0 gramos de agua por cada 1.0 gramo de café</strong>. Nuestra calculadora introduce el <strong>Ajuste Dinámico de Retención</strong>: si necesitas llenar un recipiente específico de 300ml, el sistema deduce que debes verter 340ml de agua para compensar la absorción del grano, manteniendo el ratio de extracción intacto.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Dosis Café', value: '20g', icon: 'mdi:coffee' },
 { label: 'Agua Vertida', value: '300ml', icon: 'mdi:water' },
 { label: 'Retención', value: '40ml', icon: 'mdi:minus-circle' },
 { label: 'En Taza Real', value: '260ml', icon: 'mdi:cup' },
 ],
 columns: 4,
 },
 {
 type: 'title',
 text: 'La importancia del Bloom: Desgasificación para una extracción uniforme',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La fase de "Bloom" (florecimiento) no es solo estética; es una necesidad física. Durante el tueste, el café genera CO2 que queda atrapado en su matriz celular. Si vertemos todo el agua de forma continua, el gas escapa violentamente, creando micro-canales (channeling) y evitando que el disolvente penetre en el centro de las partículas de café.',
 },
 {
 type: 'tip',
 title: 'Técnica de Saturación Homogénea',
 html: '<p>Para un bloom perfecto, vierte exactamente el doble del peso del café en agua (ratio 1:2 de bloom). Realiza una agitación suave o swirl para garantizar que todo el café esté húmedo. Espera 30-45 segundos. La liberación de gas permitirá que, en los vertidos posteriores, el agua fluya de forma laminar y extraiga los sólidos de manera uniforme por toda la cama de café.</p>',
 },
 {
 type: 'title',
 text: 'Tutorial Iced Coffee: Cómo preparar café con hielo sin diluir el sabor',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café helado de especialidad (Flash Brew) requiere un recalibrado termodinámico. El objetivo es extraer los aceites volátiles a 94°C para capturar la complejidad aromática, pero enfriarlos de golpe para evitar la oxidación y la pérdida de brillo.',
 },
 {
 type: 'list',
 items: [
 '<strong>60% Agua Caliente:</strong> Es la cantidad mínima necesaria para alcanzar una extracción del 18-20% sin sub-extraer en exceso ni enfriar el lecho demasiado pronto.',
 '<strong>40% Hielo Térmico:</strong> Se coloca en la jarra receptora. La energía térmica del café se transfiere al hielo (calor latente de fusión), enfriando la bebida a menos de 5°C instantáneamente.',
 '<strong>Fuerza Final:</strong> Al sumar ambos, el ratio final (ej. 1:15) se mantiene exacto, resultando en una bebida vibrante, fría y con la concentración de sabores correcta.',
 ],
 },
 {
 type: 'title',
 text: 'Grado de molienda y Ratio de café: La clave de la superficie de contacto',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El ratio es solo la mitad de la ecuación. La molienda determina el <strong>Área de Superficie Total Expuesta</strong> al disolvente. Partículas más pequeñas (molienda fina) tienen más superficie proporcional, lo que acelera dramáticamente la extracción de compuestos químicos.',
 },
 {
 type: 'paragraph',
 html: 'Si decides usar un ratio largo (1:17 o 1:18) para un café de tueste muy ligero, debes compensar con una molienda ligeramente más fina para asegurar que el agua tenga tiempo de extraer los azúcares antes de atravesar el filtro. Por el contrario, ratios cortos (1:12) en métodos de inmersión prolongada requieren moliendas gruesas para evitar la sobre-extracción.',
 },
 {
 type: 'title',
 text: 'Reproducibilidad y Ciencia: Convierte tu cocina en un laboratorio barista',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La excelencia en el café de especialidad nace de la consistencia métrica. Nuestra función de <strong>Recetas Personalizadas</strong> permite crear un repositorio técnico de tus calibraciones exitosas. No es solo un archivo de favoritos; es una herramienta de análisis para comparar cómo reacciona un mismo kilo de café a un ratio 1:15 frente a un 1:16, permitiéndote ajustar la receta milimétricamente.',
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
 modalPlaceholder: 'Ex: "V60 du Matin"',
 modalCancel: 'Annuler',
 modalConfirm: 'Enregistrer',
 phaseBloomTemplate: 'Bloom: Versez {bloomMl} ml d\'eau en spirale. Attendez {bloomSeconds} secondes pour dégazer le café.',
 phasePourTemplate: 'Versage final: Ajoutez le reste pour compléter {hotWaterMl} ml en {pourCount} versages lents.',
 phaseIcedTemplate: 'Glacé: Versez le café chaud directement sur les {iceMl} g de glace dans la carafe.',
 cupWarningTemplate: 'La tasse ne reçoit que {inCupMl} ml. Le café retient du liquide.',
 favModeCoffee: 'g café',
 favModeWater: 'ml eau',
 favModeIced: ' - Glacé',
 },
};
