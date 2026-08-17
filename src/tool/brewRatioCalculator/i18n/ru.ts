import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

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
seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
