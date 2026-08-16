import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-pomola-kofe';
const title = 'Конвертер степени помола кофе';
const description =
 'Интерактивная таблица помола с руководством по кликам и уровням для настройки вашей кофемолки для эспрессо, V60, френч-пресса и других методов. Техническая карта микронов для всех способов экстракции.';

const faqData = [
 {
 question: 'Почему одна и та же настройка помола не подходит для всего кофе?',
 answer:
 'Плотность зерен варьируется в зависимости от степени обжарки и происхождения. Светлая обжарка обычно плотнее и требует более тонкого помола для правильной экстракции, тогда как темная обжарка более пористая и требует более грубого помола.',
 },
 {
 question: 'Как понять, нужно ли молоть мельче или крупнее?',
 answer:
 'Ориентируйтесь на вкус: если кофе горчит и кажется сухим, уменьшите степень помола (сделайте его крупнее), чтобы вода текла быстрее. Если вкус кислый, соленый или водянистый, увеличьте степень помола (сделайте его мельче), чтобы увеличить площадь контакта.',
 },
 {
 question: 'Что такое "каналирование" (channeling) и как помол влияет на него?',
 answer:
 'Каналирование происходит, когда вода находит путь наименьшего сопротивления через кофейную таблетку. Неравномерный или неподходящий помол для данного давления - особенно в эспрессо - провоцирует эту проблему и портит экстракцию.',
 },
 {
 question: 'Можно ли использовать эту таблицу с ножевой кофемолкой?',
 answer:
 'Ножевые кофемолки дают неоднородные частицы - одновременно мелкую пыль и крупные куски. Значения микронов указаны ориентировочно, фактические результаты будут существенно отличаться по сравнению с жерновой кофемолкой.',
 },
 {
 question: 'Что означает однородность кофемолки в визуализации?',
 answer:
 'Показанное распределение частиц имитирует реальную однородность каждой кофемолки. Comandante C40 с однородностью 0,95 дает очень стабильные частицы; Hario Skerton с 0,40 показывает гораздо больший разброс размеров.',
 },
];

const howToData = [
 {
 name: 'Выберите свою кофемолку',
 text: 'Выберите модель из выпадающего списка. Конвертер покажет рекомендуемые клики или уровни специально для вашего оборудования.',
 },
 {
 name: 'Выберите метод экстракции',
 text: 'Нажмите на иконку метода, который вы собираетесь использовать. Панель управления обновится со всеми соответствующими техническими параметрами.',
 },
 {
 name: 'Изучите индикатор микронов',
 text: 'Используйте значение микронов на гистограмме, чтобы понять фактический размер частиц. Тактильный ориентир (мелкая соль, сахарный песок...) поможет вам откалибровать помол визуально.',
 },
 {
 name: 'Наблюдайте за симуляцией частиц',
 text: 'Распределение точек показывает типичную однородность вашей кофемолки. Более гомогенный паттерн означает более предсказуемую и воспроизводимую экстракцию.',
 },
 {
 name: 'Настраивайте по вкусу',
 text: 'Используйте диагностическое руководство внизу в качестве ориентира. Если кофе горчит, сделайте помол на пару кликов крупнее. Если кислит - сделайте мельче. Всегда делайте изменения только на один шаг за раз.',
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

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Часто задаваемые вопросы о помоле кофе',
 faq: faqData,
 bibliographyTitle: 'Источники информации о помоле и экстракции',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'La Física de la Molienda: Por qué el Tamaño de Partícula lo Cambia Todo',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cuando mueles café, no solo estás reduciendo el tamaño del grano. Estás definiendo la <strong>superficie de contacto</strong> disponible para que el agua disuelva los compuestos de sabor. Una molienda demasiado fina expone tanta superficie que el agua extrae en exceso los compuestos amargos. Demasiado gruesa, y el agua pasa sin encontrar suficiente resistencia, resultando en un café débil y agrio. El conversor de molienda te da el punto exacto para cada método.',
 },
 {
 type: 'summary',
 title: '¿Qué determina el grosor de molienda correcto?',
 items: [
 '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
 '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
 '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
 '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
 ],
 },
 {
 type: 'title',
 text: 'Espresso vs V60: Los Dos Extremos del Espectro',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El <strong>espresso</strong> extrae a 9 bares de presión en apenas 25-30 segundos. Para que esto funcione, el café molido debe ofrecer exactamente la resistencia correcta: una molienda entre 300-500 micras crea ese lecho compacto. Demasiado grueso y el agua pasa en 10 segundos produciendo una taza aguada; demasiado fino y la máquina no puede generar flujo.',
 },
 {
 type: 'paragraph',
 html: 'El <strong>V60</strong>, en cambio, funciona por gravedad. El agua tiene que fluir a través de un lecho de partículas más gruesas (700-900 micras) durante 2-3 minutos completos. Si el grano está demasiado fino, el filtro de papel se satura y el café tarda demasiado, sobre-extrayendo. Si está muy grueso, el agua pasa en 60 segundos sin extraer suficiente sabor.',
 },
 {
 type: 'table',
 headers: ['Método', 'Micras', 'Referencia táctil', 'Tiempo contacto'],
 rows: [
 ['Ibrik (Turco)', '100-300 μm', 'Talco / Harina fina', '3-5 min ebullición'],
 ['Espresso', '300-500 μm', 'Sal fina', '25-30 seg'],
 ['Moka / Aeropress', '500-700 μm', 'Sal de mesa', '3-4 min'],
 ['V60 / Filtro', '700-900 μm', 'Azúcar granulada', '2:30-3:15 min'],
 ['Chemex / Clever', '900-1200 μm', 'Arena gruesa', '3:30-4:30 min'],
 ['Prensa Francesa', '1200-1500 μm', 'Sal gorda', '4 min inmersión'],
 ['Cold Brew', '1500+ μm', 'Granos de pimienta', '12-24 h en frío'],
 ],
 },
 {
 type: 'title',
 text: 'Uniformidad: El Factor Diferencial entre Molinos',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La <strong>uniformidad de la partícula</strong> es la métrica real que separa un molino de gama alta de uno básico. Cuando un Comandante C40 muele a 20 clics, produce partículas casi idénticas entre sí (95% uniformidad). Cuando un molino de cuchillas "muele" al mismo tiempo, el resultado es caótico: polvo fino y trozos grandes conviven, extrayéndose a velocidades completamente diferentes.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Comandante C40', value: '95%', icon: 'mdi:star' },
 { label: 'Timemore C2/C3', value: '85%', icon: 'mdi:star-half-full' },
 { label: 'Hario Skerton', value: '40%', icon: 'mdi:star-outline' },
 ],
 columns: 3,
 },
 {
 type: 'title',
 text: 'Diagnóstico por Sabor: La Brújula del Barista',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'Ninguna tabla sustituye al paladar. El conversor te da el punto de partida técnico, pero el ajuste final siempre lo hace el sabor. <strong>Amargo y seco</strong> = sobre-extracción = muele más grueso. <strong>Agrio y acuoso</strong> = sub-extracción = muele más fino. Ajusta de uno en uno (un clic, un nivel) hasta encontrar el equilibrio perfecto para tu grano y agua específicos.',
 },
 {
 type: 'tip',
 title: 'Regla de oro para nuevos cafés',
 html: '<p>Cuando abras un café nuevo, empieza siempre por el punto medio del rango recomendado para tu método. Desde ahí, ajusta según sabor en pasos de un clic. Anota el resultado de cada ajuste para construir un registro de referencia de tus cafés favoritos con cada molino.</p>',
 },
 ],
 ui: {
 step1Label: 'Шаг 1: Выбор оборудования',
 step2Label: 'Шаг 2: Метод экстракции',
 gaugeLabel: 'Техническая карта частиц (μм)',
 distributionLabel: 'Реальное распределение частиц',
 refLabel: 'Ориентир',
 rangeMicrasLabel: 'Диапазон μм',
 unitMicras: 'ЦЕЛЕВОЙ ПОМОЛ (μм)',
 unitClicks: 'РЕКОМЕНДУЕМЫЕ КЛИКИ',
 unitLevel: 'РЕКОМЕНДУЕМЫЙ УРОВЕНЬ',
 suggestGrinderText: "Не нашли свою кофемолку? Предложите ее нам",
 method0Name: 'Ибрик (Турка)',
 method0Ref: 'Талк / Мука',
 method0Desc: 'Экстра-тонкий порошок, почти как мука. Необходим для взвеси в турецком кофе.',
 method1Name: 'Эспрессо',
 method1Ref: 'Мелкая соль',
 method1Desc: 'Экстракция под высоким давлением требует очень тонкого помола для создания сопротивления.',
 method2Name: 'Мока / Аэропресс',
 method2Ref: 'Столовая соль',
 method2Desc: 'Среднее давление или гибридная иммерсия. Универсальная и сбалансированная текстура.',
 method3Name: 'V60 / Фильтр',
 method3Ref: 'Сахарный песок',
 method3Desc: 'Ручные методы пуровера - стандарт для раскрытия сладости и кислотности.',
 method4Name: 'Кемекс / Клевер',
 method4Ref: 'Крупный песок',
 method4Desc: 'Плотные фильтры или короткая иммерсия. Требует стабильного и равномерного потока.',
 method5Name: 'Френч-пресс',
 method5Ref: 'Крупная соль',
 method5Desc: 'Длительная иммерсия требует крупных частиц для фильтрации через металлическую сетку.',
 method6Name: 'Колд-брю',
 method6Ref: 'Горошины перца',
 method6Desc: 'Холодная экстракция в течение многих часов требует максимально крупного помола.',
 troubleIssue0: 'Кофе горчит, кажется сухим или вяжущим?',
 troubleSolution0:
 'Происходит переэкстракция. Сделайте помол крупнее, чтобы вода текла быстрее и извлекала меньше горечи.',
 troubleAction0: 'Молоть крупнее',
 troubleIssue1: 'Кофе кислый, соленый или водянистый?',
 troubleSolution1:
 'Происходит недоэкстракция. Сделайте помол мельче, чтобы увеличить площадь контакта и извлечь больше сахаров и тела.',
 troubleAction1: 'Молоть мельче',
 },
};
