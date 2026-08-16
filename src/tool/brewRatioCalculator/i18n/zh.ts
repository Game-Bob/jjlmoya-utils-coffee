import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-ratio-calculator';
const title = '咖啡粉水比计算器';
const description =
 '为您理想的粉水比（1:15, 1:16...）计算精确的咖啡克数或水的毫升数。包含最终杯内结果、注水指南、冰咖啡模式以及保存配方功能。';

const faqData = [
 {
 question: '1:15 的咖啡粉水比是什么意思？',
 answer:
 '这意味着每使用 1 克咖啡粉，就要使用 15 毫升（或克）水。如果使用 20 克咖啡，则需要注入 300 毫升水。这是精品咖啡协会建议的过滤法（如 V60、Chemex 或 Aeropress）的标准粉水比。',
 },
 {
 question: '为什么杯子里的咖啡比我注入的水少？',
 answer:
 '因为咖啡粉在萃取过程中会吸水。平均而言，每克咖啡会吸收约 2 毫升液体。如果您向 20 克咖啡中注入 300 毫升水，杯子中大约只能得到 260 毫升咖啡。此计算器会显示您的真实所得。',
 },
 {
 question: '什么是闷蒸 (Bloom) 或预浸泡？',
 answer:
 '这是第一次注水，水量相当于咖啡重量的两倍（每克咖啡对应 2 毫升水）。这样做是为了排除新鲜咖啡中的气体：烘焙过程中产生的二氧化碳排出后，水才能均匀地萃取风味物质。如果没有明显的闷蒸气泡，说明咖啡可能已经粉碎或烘焙了较长时间。',
 },
 {
 question: '如何制作冰咖啡而不会让味道变淡？',
 answer:
 '使用"急速冷却" (Flash Chilling) 技术：准备总水量 60% 的 90-96 度热水，将其余 40% 的水量以冰块形式放入分享壶。将热咖啡直接冲泡在冰块上。快速降温能锁住芳香。当您开启"冰咖啡"模式时，此计算器会自动重新计算各项数值。',
 },
 {
 question: 'Aeropress（爱乐压）的最佳粉水比是多少？',
 answer:
 '根据用途不同，通常在 1:12 到 1:15 之间。如果您喝黑咖啡，1:15 比较均衡。如果您将其作为奶咖基底或想要高浓度，可以降到 1:12 或 1:13。爱乐压是最灵活的冲煮方式，因为它能很好地适应不同的粉水比。',
 },
 {
 question: '我可以保存我喜欢的配方吗？',
 answer:
 '可以。一旦您为心仪的咖啡找到了完美的比例和分量，请点击"保存配方"按钮并为其命名（例如：早晨 V60），它将存储在您的浏览器中，您可以随时一键调用。',
 },
];

const howToData = [
 {
 name: '选择计算模式',
 text: '选择是以您现有的咖啡克数为起点，还是以杯子容量（水的毫升数）为起点。计算器将根据所选模式调整所有结果。',
 },
 {
 name: '输入数值',
 text: '输入您打算使用的咖啡克数或水的毫升数。计算器将根据所选的粉水比自动计算出另一个数值。',
 },
 {
 name: '选择强度',
 text: '在较浓 (1:12-14)、均衡 (1:15-16)、较淡 (1:17-18) 之间选择，或输入您的自定义比例。每个选项都对应不同的风味特征。',
 },
 {
 name: '开启冰咖啡模式（可选）',
 text: '如果您正在制作冰咖啡，请开启开关。计算器将利用急速冷却技术，自动将总水量分配为热水 (60%) 和冰块 (40%)。',
 },
 {
 name: '遵循注水指南',
 text: '使用分阶段指南（闷蒸和最终注水）来规划您的冲煮过程。每个阶段都会标明准确的注水量和注水时机。',
 },
 {
 name: '保存配方',
 text: '找到完美的粉水比后，请用一个易记的名称将其保存。您的配方会存储在浏览器中以便日后使用。',
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
 inLanguage: 'zh',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: '关于粉水比的常见问题',
 faq: faqData,
 bibliographyTitle: '技术参考与 SCA 标准',
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
 modeCoffee: '我有咖啡',
 modeHintCoffee: '告诉我要加多少水',
 modeWater: '我有水',
 modeHintWater: '告诉我要磨多少咖啡',
 inputLabelCoffee: '您现有的咖啡克数',
 inputLabelWater: '杯子容量 (ml)',
 intensityLabel: '咖啡强度',
 intensityStrong: '较浓',
 intensityBalanced: '均衡',
 intensityLight: '较淡',
 intensityCustom: '自定义',
 customCoffeeLabel: '咖啡',
 customWaterLabel: '水',
 icedModeLabel: '冰咖啡模式',
 recipeLabel: '您的精准配方',
 resultTitle: '结果',
 resultCoffeeLabel: '咖啡',
 resultCoffeeSub: '细-中研磨',
 resultHotWaterLabel: '热水',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: '热水 (60%)',
 resultIceLabel: '冰块',
 resultIceSub: '放进壺里',
 resultCupLabel: '杯中得量',
 resultCupSub: '咖啡吸水约 2ml/g',
 pouringGuideLabel: '注水指南',
 favoritesLabel: '我保存的配方',
 saveBtn: '+ 保存此配方',
 favEmptyText: '暂无保存的配方。调制并保存您的完美配方。',
 modalTitle: '为配方命名',
 modalPlaceholder: '例："早晨 V60"',
 modalCancel: '取消',
 modalConfirm: '保存',
 phaseBloomTemplate: '闷蒸：螺旋式注入 {bloomMl} 毫升水。等待 {bloomSeconds} 秒让咖啡排气。',
 phasePourTemplate: '最终注水：分 {pourCount} 次缓慢注水补足剩余水量，直至达到 {hotWaterMl} 毫升。',
 phaseIcedTemplate: '加冰：将热咖啡直接冲泡在壶里的 {iceMl} 克冰块上。',
 cupWarningTemplate: '杯子只能盛放 {inCupMl} 毫升。咖啡粉会吸走水分。',
 favModeCoffee: '克咖啡',
 favModeWater: '毫升水',
 favModeIced: ' - 冰模式',
 },
};
