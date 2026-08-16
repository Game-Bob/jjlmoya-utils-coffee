import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-ratio-calculator';
const title = 'Coffee Brew Ratio Calculator';
const description =
 'Calculate the exact grams of coffee or milliliters of water for your ideal ratio (1:15, 1:16...). Includes in-cup result, pour guide, iced coffee mode and saved recipes.';

const faqData = [
 {
 question: 'What is a 1:15 coffee ratio?',
 answer:
 'It means that for every gram of ground coffee you use 15 milliliters (or grams) of water. With 20g of coffee, you pour 300ml of water. It is the standard ratio recommended by the Specialty Coffee Association for filter methods like V60, Chemex or Aeropress.',
 },
 {
 question: 'Why is there less coffee in my cup than I poured?',
 answer:
 'Because ground coffee retains water during extraction. On average, each gram of coffee absorbs about 2ml of liquid. If you pour 300ml onto 20g of coffee, you will get approximately 260ml in the cup. This calculator shows you the real result.',
 },
 {
 question: 'What is bloom or pre-infusion?',
 answer:
 'It is the first water pour, equivalent to twice the weight of the coffee (2ml per gram). It is done to degas fresh coffee: the CO2 trapped during roasting escapes and allows the water to extract compounds uniformly. If there is no visible bloom, the coffee has been ground or roasted for some time.',
 },
 {
 question: 'How to make iced coffee without it being watery?',
 answer:
 'Use the flash chilling technique: prepare 60% of the total water as hot water at 90-96 degrees and put the remaining 40% as ice in the carafe. Pour the hot coffee directly over the ice. The rapid cooling seals in the aromas. This calculator automatically recalculates the amounts when you activate Iced Coffee mode.',
 },
 {
 question: 'What is the best ratio for an Aeropress?',
 answer:
 'Between 1:12 and 1:15 depending on use. If you drink coffee black, 1:15 is balanced. If you use it as a base for milk drinks or want high concentration, go down to 1:12 or 1:13. The Aeropress is the most versatile method precisely because it handles different ratios very well.',
 },
 {
 question: 'Can I save my favorite recipes?',
 answer:
 'Yes. Once you find the perfect ratio and amount for your favorite coffee, press the Save recipe button, give it a name (e.g., Morning V60) and it will be stored in your browser. You can retrieve it at any time with a single click.',
 },
];

const howToData = [
 {
 name: 'Choose the calculation mode',
 text: 'Select whether you are starting from the grams of coffee you have or the capacity of your cup (ml of water). The calculator adapts all results to the chosen mode.',
 },
 {
 name: 'Enter the amount',
 text: 'Type the grams of coffee or the milliliters of water you are going to use. The calculator will automatically calculate the other value based on the selected ratio.',
 },
 {
 name: 'Select the intensity',
 text: 'Choose between Strong (1:12-14), Balanced (1:15-16), Light (1:17-18) or enter your custom ratio. Each option corresponds to a different flavor profile.',
 },
 {
 name: 'Activate Iced Coffee mode (optional)',
 text: 'If you are making iced coffee, activate the toggle. The calculator will automatically split the water between hot water (60%) and ice (40%) using the flash chilling technique.',
 },
 {
 name: 'Follow the pour guide',
 text: 'Use the phase guide (Bloom and Final Pour) to structure your brewing process. Each phase indicates exactly how much water to pour and when.',
 },
 {
 name: 'Save the recipe',
 text: 'When you find your perfect ratio, save it with a descriptive name. Your recipes are stored in your browser for future sessions.',
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
 inLanguage: 'en',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Frequently Asked Questions about Brew Ratio',
 faq: faqData,
 bibliographyTitle: 'Technical References and SCA Standards',
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
 modeCoffee: 'I have the Coffee',
 modeHintCoffee: 'Tell me how much water',
 modeWater: 'I have the Water',
 modeHintWater: 'Tell me how much coffee to grind',
 inputLabelCoffee: 'Grams of coffee you have',
 inputLabelWater: 'Your cup capacity (ml)',
 intensityLabel: 'Coffee intensity',
 intensityStrong: 'Strong',
 intensityBalanced: 'Balanced',
 intensityLight: 'Light',
 intensityCustom: 'Custom',
 customCoffeeLabel: 'Coffee',
 customWaterLabel: 'Water',
 icedModeLabel: 'Iced Coffee Mode',
 recipeLabel: 'Your exact recipe',
 resultTitle: 'Result',
 resultCoffeeLabel: 'Coffee',
 resultCoffeeSub: 'Fine-medium grind',
 resultHotWaterLabel: 'Hot water',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Hot water (60%)',
 resultIceLabel: 'Ice',
 resultIceSub: 'In the carafe',
 resultCupLabel: 'In your cup',
 resultCupSub: 'Coffee retains ~2ml/g',
 pouringGuideLabel: 'Pour guide',
 favoritesLabel: 'My favorite recipes',
 saveBtn: '+ Save this recipe',
 favEmptyText: 'No saved recipes yet. Configure your perfect brew and save it.',
 modalTitle: 'Name your recipe',
 modalPlaceholder: 'E.g.: "Morning V60"',
 modalCancel: 'Cancel',
 modalConfirm: 'Save',
 phaseBloomTemplate: 'Bloom: Pour {bloomMl} ml of water in a spiral. Wait {bloomSeconds} seconds to degas the coffee.',
 phasePourTemplate: 'Final pour: Add the rest to complete {hotWaterMl} ml in {pourCount} slow pours.',
 phaseIcedTemplate: 'Iced: Pour the hot coffee directly over the {iceMl} g of ice in the carafe.',
 cupWarningTemplate: 'The cup only receives {inCupMl} ml. Coffee retains liquid.',
 favModeCoffee: 'g coffee',
 favModeWater: 'ml water',
 favModeIced: ' - Iced',
 },
};
