import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-proporcii-kofe';
const title = 'Калькулятор пропорций кофе';
const description =
 'Рассчитайте точное количество граммов кофе или миллилитров воды для вашего идеального соотношения (1:15, 1:16...). Включает результат в чашке, руководство по вливанию, режим кофе со льдом и сохраненные рецепты.';

const faqData = [
 {
 question: 'Что такое соотношение кофе 1:15?',
 answer:
 'Это означает, что на каждый грамм молотого кофе вы используете 15 миллилитров (или граммов) воды. При 20 г кофе вы вливаете 300 мл воды. Это стандартное соотношение, рекомендованное Ассоциацией спешелти кофе для фильтр-методов, таких как V60, Chemex или Aeropress.',
 },
 {
 question: 'Почему в моей чашке меньше кофе, чем я влил?',
 answer:
 'Потому что молотый кофе удерживает воду во время экстракции. В среднем каждый грамм кофе поглощает около 2 мл жидкости. Если вы вольете 300 мл в 20 г кофе, вы получите примерно 260 мл в чашке. Этот калькулятор показывает реальный результат.',
 },
 {
 question: 'Что такое блум (цветение) или преинфузия?',
 answer:
 'Это первое вливание воды, равное двойному весу кофе (2 мл на грамм). Оно проводится для дегазации свежего кофе: углекислый газ, застрявший во время обжарки, выходит и позволяет воде равномерно извлекать вкусовые соединения. Если видимого блума нет, значит, кофе был смолот или обжарен достаточно давно.',
 },
 {
 question: 'Как приготовить кофе со льдом, чтобы он не был водянистым?',
 answer:
 'Используйте технику flash chilling (мгновенное охлаждение): подготовьте 60% от общего объема воды в виде горячей воды (90-96 градусов), а остальные 40% положите в виде льда в декантер. Заваривайте горячий кофе прямо на лед. Быстрое охлаждение запечатывает ароматы. Этот калькулятор автоматически пересчитывает количество при активации режима Iced Coffee.',
 },
 {
 question: 'Какое соотношение лучше всего подходит для аэропресса?',
 answer:
 'От 1:12 до 1:15 в зависимости от предпочтений. Если вы пьете черный кофе, 1:15 - это баланс. Если вы используете его как основу для молочных напитков или хотите высокую концентрацию, опуститесь до 1:12 или 1:13. Аэропресс - самый универсальный метод именно потому, что он отлично справляется с разными пропорциями.',
 },
 {
 question: 'Могу ли я сохранить свои любимые рецепты?',
 answer:
 'Да. Как только вы найдете идеальное соотношение и количество для вашего любимого кофе, нажмите кнопку "Сохранить рецепт", дайте ему название (например, "Утренний V60"), и он будет сохранен в вашем браузере. Вы можете вызвать его в любое время одним щелчком мыши.',
 },
];

const howToData = [
 {
 name: 'Выберите режим расчета',
 text: 'Выберите, от чего вы отталкиваетесь: от веса кофе в граммах или от емкости вашей чашки (мл воды). Калькулятор адаптирует все результаты под выбранный режим.',
 },
 {
 name: 'Введите количество',
 text: 'Укажите вес кофе в граммах или объем воды в миллилитрах. Калькулятор автоматически рассчитает другое значение на основе выбранного соотношения.',
 },
 {
 name: 'Выберите интенсивность',
 text: 'Выберите один из вариантов: Крепкий (1:12-14), Сбалансированный (1:15-16), Легкий (1:17-18) или введите свое соотношение. Каждый вариант соответствует отдельному вкусовому профилю.',
 },
 {
 name: 'Активируйте режим Iced Coffee (опционально)',
 text: 'Если вы готовите кофе со льдом, включите этот режим. Калькулятор автоматически распределит воду между горячей (60%) и льдом (40%), используя технику flash chilling.',
 },
 {
 name: 'Следуйте руководству по вливанию',
 text: 'Используйте пошаговое руководство (цветение и основное вливание) для структурирования процесса заваривания. На каждом этапе указано, сколько воды вливать и когда.',
 },
 {
 name: 'Сохраните рецепт',
 text: 'Когда вы найдете идеальное соотношение, сохраните его под понятным названием. Ваши рецепты будут храниться в браузере для будущих сессий.',
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
 inLanguage: 'ru',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Часто задаваемые вопросы о пропорциях заваривания',
 faq: faqData,
 bibliographyTitle: 'Технические справочники и стандарты SCA',
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
 modeCoffee: 'У меня есть кофе',
 modeHintCoffee: 'Скажи мне, сколько нужно воды',
 modeWater: 'У меня есть вода',
 modeHintWater: 'Скажи мне, сколько кофе смолоть',
 inputLabelCoffee: 'Вес кофе в граммах',
 inputLabelWater: 'Емкость чашки (мл)',
 intensityLabel: 'Интенсивность кофе',
 intensityStrong: 'Крепкий',
 intensityBalanced: 'Сбалансированный',
 intensityLight: 'Легкий',
 intensityCustom: 'Свой',
 customCoffeeLabel: 'Кофе',
 customWaterLabel: 'Вода',
 icedModeLabel: 'Режим кофе со льдом',
 recipeLabel: 'Ваш точный рецепт',
 resultTitle: 'Результат',
 resultCoffeeLabel: 'Кофе',
 resultCoffeeSub: 'Мелко-средний помол',
 resultHotWaterLabel: 'Горячая вода',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Горячая вода (60%)',
 resultIceLabel: 'Лед',
 resultIceSub: 'В декантере',
 resultCupLabel: 'В вашей чашке',
 resultCupSub: 'Кофе удерживает ~2мл/г',
 pouringGuideLabel: 'Инструкция по завариванию',
 favoritesLabel: 'Мои любимые рецепты',
 saveBtn: '+ Сохранить этот рецепт',
 favEmptyText: 'Пока нет сохраненных рецептов. Настройте свой идеальный кофе и сохраните его.',
 modalTitle: 'Дайте название рецепту',
 modalPlaceholder: 'Напр.: "Утренний V60"',
 modalCancel: 'Отмена',
 modalConfirm: 'Сохранить',
 phaseBloomTemplate: 'Цветение: влейте {bloomMl} мл воды спиралью. Подождите {bloomSeconds} сек., чтобы кофе дегазировался.',
 phasePourTemplate: 'Основное вливание: добавьте остаток до {hotWaterMl} мл в {pourCount} медленных приема.',
 phaseIcedTemplate: 'Со льдом: заваривайте горячий кофе прямо на {iceMl} г льда в декантере.',
 cupWarningTemplate: 'В чашку попадает только {inCupMl} мл. Кофе удерживает жидкость.',
 favModeCoffee: 'г кофе',
 favModeWater: 'мл воды',
 favModeIced: ' - Со льдом',
 },
};
