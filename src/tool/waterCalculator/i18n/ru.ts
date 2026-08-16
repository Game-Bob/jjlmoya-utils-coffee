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
 { question: 'Можно ли сохранить обычные концентрации?', answer: 'Да. Калькулятор сохраняет введенные значения в браузере, поэтому ваш рецепт будет доступен при следующем посещении.' },
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
 text: 'Вода для кофе: как минеральный состав меняет вкус',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Чашка кофе почти полностью состоит из воды. Жёсткость и минералы влияют на кислотность, сладость и плотность напитка. Калькулятор помогает подобрать воду по ориентирам SCA для конкретного зерна и способа заваривания.',
 },
 {
 type: 'summary',
 title: 'Почему минералы так важны для вкуса',
 items: [
 '<strong>GH (Dureza General):</strong> La suma de iones Magnesio y Calcio determina la capacidad del agua para disolver compuestos de sabor del café.',
 '<strong>KH (Alcalinidad):</strong> La cantidad de bicarbonato controla el pH durante la extracción. Un KH bajo produce café agrio; un KH alto lo aplana.',
 '<strong>Repetibilidad:</strong> El agua municipal cambia por temporada y ciudad. El agua mineralizada es constante y reproducible.',
 '<strong>Protección del equipo:</strong> Los niveles correctos evitan tanto la corrosión (agua muy pura) como las incrustaciones de cal (agua muy dura).',
 ],
 },
 {
 type: 'title',
 text: 'Рекомендации SCA для воды под кофе',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Стандарт SCA задаёт ориентиры для жёсткости, щёлочности, pH и TDS. Эти диапазоны помогают получить сбалансированную кислотность, сладость и плотность без лишней горечи.',
 },
 {
 type: 'table',
 headers: ['Параметр', 'Минимум', 'Ориентир SCA', 'Максимум'],
 rows: [
 ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
 ['Alcalinidad (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
 ['pH', '6.5', '7.0', '7.5'],
 ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
 ],
 },
 {
 type: 'title',
 text: 'Магний и кальций: разные оттенки в чашке',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Минералы действуют по-разному. Магний лучше подчёркивает фруктовые и цветочные оттенки, а кальций добавляет плотность и мягкую текстуру.',
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
 text: 'Как защитить эспрессо-машину качеством воды',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'По значениям GH и KH калькулятор показывает, не слишком ли вода агрессивна для металла и не создаст ли она накипь в бойлере и трубках.',
 },
 {
 type: 'tip',
 title: 'Практическое правило бариста',
 html: '<p>Для машин с латунным или медным бойлером не используйте постоянно воду с очень низким KH. Для фильтр-методов можно пробовать более мягкие минеральные профили.</p>',
 },
 {
 type: 'title',
 text: 'Как приготовить концентрат минералов дома',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'Для точной минерализации удобнее приготовить концентрат и добавлять его малыми дозами, а не сыпать соль сразу в готовую воду. Используйте дистиллированную воду, точные весы и записывайте состав каждой смеси.',
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
