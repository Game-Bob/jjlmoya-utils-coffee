import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-kalkulator-vody-dlya-kofe';
const title = 'Калькулятор воды для кофе SCA';
const description =
 'Рассчитайте точные концентрации минералов для спешелти кофе. Профили SCA, Barista Hustle и Hendon. Контролируйте магний, кальций и бикарбонат для максимального вкуса и защиты вашей кофемашины.';

const faqData = [
 {
 question: 'Что такое стандарт качества воды SCA?',
 answer:
 'Ассоциация спешелти кофе (SCA) определяет технический стандарт для воды, используемой при заваривании, указывая оптимальные диапазоны общей жесткости (GH), щелочности (KH), pH и содержания натрия для достижения сбалансированной экстракции, которая подчеркивает вкус, не повреждая оборудование.',
 },
 {
 question: 'Почему бы не использовать обычную водопроводную воду?',
 answer:
 'Водопроводная вода значительно варьируется в зависимости от региона и сезона. Она может содержать хлор, избыток извести или уровень минералов, которые скрывают нюансы вкуса спешелти кофе и повреждают бойлеры и уплотнения. Минерализация дистиллированной воды дает вам полный контроль и воспроизводимые результаты.',
 },
 {
 question: 'Где взять минеральные соли?',
 answer:
 'Английская соль (сульфат магния) и пищевая сода (бикарбонат натрия) продаются в аптеках и супермаркетах. Хлорид кальция часто встречается в магазинах для домашних пивоваров. Всегда выбирайте соли пищевого качества.',
 },
 {
 question: 'Безопасно ли это для моей эспрессо-машины?',
 answer:
 'Калькулятор включает индикатор риска в реальном времени. Слишком чистая вода вызывает коррозию металлических деталей; слишком жесткая вода приводит к образованию накипи. Профили SCA Ideal и Barista Hustle разработаны так, чтобы сбалансировать долговечность оборудования и качество вкуса.',
 },
 {
 question: 'В чем разница между магнием и кальцием для кофе?',
 answer:
 'Магний эффективнее экстрагирует фруктовые и сладкие вкусовые соединения и является предпочтительным минералом для фильтр-кофе. Кальций придает напитку больше тела и шелковистую текстуру, но имеет большую склонность к образованию накипи в бойлерах со временем.',
 },
];

const howToData = [
 {
 name: 'Подготовьте чистую воду-основу',
 text: 'Купите дистиллированную или деминерализованную воду или используйте систему обратного осмоса. Цель - начать с 0 ppm общего содержания растворенных твердых веществ для полного контроля над минерализацией.',
 },
 {
 name: 'Приготовьте концентраты',
 text: 'Растворите каждую соль отдельно в 100 мл дистиллированной воды: 2,46 г английской соли для магния, 1,47 г CaCl2 для кальция и 1,68 г соды для буфера (буферного раствора).',
 },
 {
 name: 'Выберите целевой профиль',
 text: 'Выберите SCA Ideal (сбалансированный), Barista Hustle (сладость и яркость), Hendon (тело), Melbourne (деликатный) или создайте собственный профиль, указав свои значения GH и KH.',
 },
 {
 name: 'Введите итоговый объем',
 text: 'Укажите количество воды в литрах, которое вы хотите минерализовать. Калькулятор автоматически рассчитает дозы концентрата для этого объема.',
 },
 {
 name: 'Добавьте концентраты и долейте дистиллированную воду',
 text: 'С помощью точного шприца добавьте указанное количество миллилитров каждого концентрата в емкость и долейте дистиллированной воды до общего объема.',
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
 inLanguage: 'ru',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Часто задаваемые вопросы о калькуляторе воды для кофе SCA',
 faq: faqData,
 bibliographyTitle: 'Технические справочники и стандарты SCA',
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
 sectionMixTitle: 'Конфигурация смеси',
 labelVolume: 'Итоговый объем',
 labelProfile: 'Целевой профиль воды',
 customProfileBtn: 'Свой',
 labelGH: 'Целевая жесткость (GH)',
 labelKH: 'Целевая щелочность (KH)',
 concentratesTitle: 'Концентраты (г/100мл)',
 saltMgName: 'Магний (Epsom)',
 saltCaName: 'Кальций (CaCl2)',
 saltBufName: 'Бикарбонат (сода)',
 recipeTitle: 'Рецепт',
 labelMg: 'Магний:',
 labelCa: 'Кальций:',
 labelBuffer: 'Бикарбонат:',
 labelDistilledWater: 'Дистиллированная вода до',
 copyBtn: 'Копировать рецепт',
 copiedText: 'Скопировано!',
 safetyMetalsTitle: 'Безопасность металлов',
 safetyScaleTitle: 'Риск образования накипи',
 calculatingText: 'Расчет...',
 glossaryTitle: 'Краткий гид по минералам',
 profileSubTemplate: 'Цель: {gh} GH / {kh} KH',
 customProfileName: 'Свой',
 corrosionHigh: 'Опасно: очень агрессивная вода. Может вызвать коррозию бойлеров и медных деталей.',
 corrosionMedium: 'Приемлемо: умеренный риск коррозии. Рекомендуется для фильтр-методов, для кофемашин - с осторожностью.',
 corrosionLow: 'Безопасно: вода обладает достаточной буферной емкостью для защиты металлов.',
 scaleHigh: 'Опасно: неизбежное образование накипи. Используйте только для ручных фильтр-методов.',
 scaleMedium: 'Предупреждение: со временем может привести к образованию накипи в эспрессо-машинах.',
 scaleLow: 'Безопасно: значительный риск образования накипи отсутствует.',
 copyTemplate:
 'Рецепт воды для кофе ({profileName}):\n- Объем: {liters} л\n- Концентрат магния: {mg} мл\n- Концентрат кальция: {ca} мл\n- Концентрат бикарбоната: {buf} мл\n- Дистиллированная вода: {water} мл',
 glossary0Term: 'Общая жесткость (GH)',
 glossary0Desc:
 'Сумма кальция и магния. Магний усиливает сладость и сложность вкуса; кальций добавляет тело и текстуру.',
 glossary1Term: 'Щелочность (KH)',
 glossary1Desc:
 'Способность воды нейтрализовать кислоты. Высокий KH подавляет кислотность кофе; низкий KH делает вкус кислым.',
 glossary2Term: 'TDS (Общее содержание растворенных веществ)',
 glossary2Desc: 'В минерализованной воде TDS отражает общую концентрацию всех добавленных минеральных солей.',
 glossary3Term: 'Магний',
 glossary3Desc:
 'Эффективнее экстрагирует сложные фруктовые вкусовые соединения. Предпочтительный минерал для спешелти кофе.',
 },
};
