import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-proportsii-kofe-cold-brew';
const title = 'Калькулятор пропорции кофе для cold brew';
const description = 'Рассчитайте кофе, воду для заваривания, разбавление концентрата, время настаивания и выход cold brew в метрических или имперских единицах.';

const faqData = [
  { question: 'Какую пропорцию кофе и воды выбрать для cold brew?', answer: 'Начните с 1:8 для готового к употреблению cold brew или с 1:5 для концентрата, который нужно разбавить. Подходящая пропорция зависит от кофе, помола, времени и способа подачи.' },
  { question: 'Сколько кофе нужно для 1 литра cold brew?', answer: 'При пропорции 1:8 возьмите 125 граммов кофе и 1000 миллилитров воды для заваривания. Калькулятор также оценивает воду, оставшуюся в кофейной гуще.' },
  { question: 'Можно ли считать cold brew в унциях и жидких унциях?', answer: 'Да. Выберите Imperial, чтобы видеть кофе в унциях, а воду в жидких унциях. Основной расчёт остаётся в граммах и миллилитрах.' },
  { question: 'Чем отличается готовый cold brew от концентрата?', answer: 'Готовый cold brew заваривается близко к крепости подачи. В концентрате используется больше кофе, а после фильтрации он смешивается с водой или молоком.' },
  { question: 'Сколько должен настаиваться cold brew?', answer: 'Для начала используйте от 12 до 18 часов полного погружения в холодильнике или прохладном помещении. Более долгое настаивание может усилить горечь и терпкость.' },
  { question: 'Учитывает ли калькулятор воду, оставшуюся в гуще?', answer: 'Да. Для оценки выхода используется примерно 2 миллилитра удержанной воды на грамм кофе. Фильтр, помол и время стекания меняют фактический результат.' },
  { question: 'Является ли этот калькулятор руководством по безопасности продуктов?', answer: 'Нет. Он рассчитывает только количество ингредиентов. Используйте чистое оборудование, охлаждайте напиток при необходимости и соблюдайте актуальные рекомендации по хранению.' },
];

const howToData = [
  { name: 'Выберите стиль заваривания', text: 'Выберите готовый напиток для подачи без дополнительного смешивания или концентрат, если позже добавите воду или молоко.' },
  { name: 'Укажите воду для заваривания', text: 'Введите количество воды в ёмкости. Калькулятор масштабирует дозу кофе по объёму и выбранной пропорции.' },
  { name: 'Настройте пропорцию', text: 'Выберите профиль или переместите ползунок. Меньшие числа дают более крепкий напиток, а большие более лёгкий.' },
  { name: 'Настройте время и разбавление', text: 'Используйте время как ориентир. В режиме концентрата задайте воду на каждую часть готового кофе.' },
  { name: 'Следуйте карточке партии', text: 'Используйте поток партии и шаги, чтобы взвесить кофе, добавить воду, настоять, отфильтровать и разбавить примерный выход.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ru' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Пропорция и планирование партии cold brew', level: 2 },
  { type: 'paragraph', html: 'Cold brew легче повторять, когда масса кофе, вода, разбавление и время настаивания настраиваются отдельно. Калькулятор превращает выбранный стиль в рецепт с точными весами.' },
  { type: 'title', text: 'Выберите готовый напиток или концентрат', level: 2 },
  { type: 'paragraph', html: 'Готовый напиток настаивается близко к крепости подачи. Концентрат использует более плотную пропорцию, а после фильтрации в него добавляется вода.' },
  { type: 'table', headers: ['Стиль', 'Начальная пропорция', 'Разбавление', 'Использование'], rows: [['Готовый напиток', '1:8', 'Нет', 'Подавать охлаждённым или со льдом'], ['Мягкая партия', '1:10', 'Нет', 'Более лёгкая чашка на каждый день'], ['Концентрат', '1:5', '1:1', 'Смешать с водой или молоком']] },
  { type: 'title', text: 'Как работает расчёт cold brew', level: 2 },
  { type: 'list', items: ['Доза кофе равна воде для заваривания, делённой на выбранную пропорцию.', 'Выход оценивается после вычитания примерно 2 миллилитров удержанной воды на каждый грамм кофе.', 'Разбавление концентрата рассчитывается от объёма готового кофе, чтобы показать понятный объём подачи.'] },
  { type: 'title', text: 'Метрические и имперские меры cold brew', level: 2 },
  { type: 'paragraph', html: 'Выберите граммы и миллилитры для метрических рецептов или унции и жидкие унции для имперских. Соотношение массы и объёма остаётся одинаковым.' },
  { type: 'table', headers: ['Измерение', 'Метрическая система', 'Имперская система'], rows: [['Доза кофе', 'g', 'oz'], ['Вода и выход', 'ml', 'fl oz'], ['Пропорция', '1 часть кофе', '1 часть кофе']] },
  { type: 'tip', title: 'Используйте результат как начальный рецепт', html: '<p>Происхождение кофе, помол, фильтр, температура и стекание меняют экстракцию и выход. Попробуйте первую партию и меняйте только один параметр за раз.</p>' },
  { type: 'title', text: 'Время настаивания и безопасность продуктов', level: 2 },
  { type: 'paragraph', html: 'Ползунок времени помогает планировать рецепт, но не гарантирует вкус или безопасность. Используйте чистое оборудование и соблюдайте актуальные рекомендации по охлаждению, хранению и подаче.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Вопросы о cold brew', faq: faqData, bibliographyTitle: 'Источники о заваривании кофе', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Соберите партию', modeReady: 'Готовый напиток', modeReadyHint: 'Заварить и подать', modeConcentrate: 'Концентрат', modeConcentrateHint: 'Заварить и разбавить', unitSystemLabel: 'Система измерений', unitMetric: 'Метрическая', unitImperial: 'Имперская', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Начните с профиля', presetClassic: 'Классика 1:8', presetSmooth: 'Мягкий 1:10', presetConcentrate: 'Концентрат 1:5', presetCustom: 'Своя настройка', brewWaterLabel: 'Вода для заваривания', brewWaterHint: 'Вода для заваривания', ratioLabel: 'Пропорция кофе и воды', ratioHint: 'Вода на грамм кофе', dilutionLabel: 'Вода для разбавления', dilutionHint: 'Частей воды на часть готового кофе', steepLabel: 'Время настаивания', steepHint: 'Практический диапазон', hoursUnit: 'ч.', resultTitle: 'Ваша партия', resultBadgeReady: 'Готовый напиток', resultBadgeConcentrate: 'Концентрат', coffeeLabel: 'Молотый кофе', brewWaterResultLabel: 'Вода для заваривания', retainedLabel: 'Удержано гущей', dilutionWaterLabel: 'Вода для разбавления', servedYieldLabel: 'Примерный выход для подачи', ratioResultLabel: 'Пропорция', steepResultLabel: 'Настаивание', steepStatusShort: 'Короткое настаивание', steepStatusBalanced: 'Сбалансированное настаивание', steepStatusLong: 'Долгое настаивание', stageCaption: 'Мягкая партия готова для холодильника', stageCaptionConcentrate: 'Крепкий концентрат ждёт разбавления', stepsTitle: 'Шаги рецепта', visualTitle: 'Поток партии', visualBrewCaption: 'Заварить', visualFilterCaption: 'Фильтровать', visualServeCaption: 'Подать', visualCoffeeDose: 'Доза кофе', visualWaterInput: 'Вода для заваривания', visualRetained: 'Удержано гущей', visualServed: 'Выход напитка', visualDilution: 'Вода для разбавления', stepCoffee: 'Взвесьте {coffee} {coffeeUnit} крупно молотого кофе.', stepWater: 'Добавьте {water} {waterUnit} воды и полностью смочите гущу.', stepSteep: 'Накройте и настаивайте около {hours} часов.', stepDilute: 'После фильтрации добавьте {water} {waterUnit} воды для разбавления.', stepServe: 'Охладите и подайте примерно {yield} {waterUnit}.', noteTitle: 'Полезная оценка', noteText: 'Кофейная гуща удерживает воду во время фильтрации. Значение приблизительное, поэтому откалибруйте первую партию по своему фильтру и способу стекания.', copyRecipe: 'Копировать рецепт', copiedText: 'Рецепт скопирован', resetText: 'Сбросить', copyTemplate: 'Рецепт cold brew\nКофе: {coffee} {coffeeUnit}\nВода для заваривания: {brewWater} {waterUnit}\nПропорция: 1:{ratio}\nНастаивание: {hours} часов\nВода для разбавления: {dilutionWater} {waterUnit}\nПримерный выход для подачи: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Источники',
  },
};
