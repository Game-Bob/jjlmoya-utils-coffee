import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-grind-size-converter';
const title = '咖啡研磨度转换器';
const description =
 '交互式研磨度图表，提供段位和刻度调整指南，适用于意式浓缩、V60、法压壶等多种器具。针对所有萃取方式提供技术性的微米级映射。';

const faqData = [
 {
 question: '为什么同样的研磨设置不适用于所有的咖啡？',
 answer:
 '咖啡豆的密度随烘焙程度和产地而异。浅焙咖啡豆通常密度较高，需要更细的研磨才能充分萃取；而深焙豆孔隙更多，则需要更粗的设置。',
 },
 {
 question: '我该如何判断需要调细还是调粗研磨？',
 answer:
 '让口感引导您：如果咖啡味道苦涩、口感干燥，请将研磨调粗，这样水流速度会加快。如果味道酸、咸或偏淡，请调细研磨以增加接触表面积。',
 },
 {
 question: '什么是"通道效应" (Channeling)，研磨度会如何影响它？',
 answer:
 '当水流在咖啡粉床中寻找阻力最小的路径通过时，就会产生通道效应。研磨不均匀或相对于压力而言研磨不当（尤其是在制作意式浓缩时）会加剧这一问题，破坏萃取质量。',
 },
 {
 question: '这种图表可以用于砍豆机吗？',
 answer:
 '砍豆机产生的颗粒极不均匀,, 细粉和大颗粒会同时存在。微米数值仅供参考，但与磨豆机相比，实际结果会有显著差异。',
 },
 {
 question: '可视化图表中的磨豆机科学均匀度是什么意思？',
 answer:
 '图示的颗粒分布模拟了每款磨豆机的真实均匀程度。均匀度为 0.95 的 Comandante C40 产生的颗粒非常一致；而 0.40 的 Hario Skerton 则显示出更多的尺寸差异。',
 },
];

const howToData = [
 {
 name: '选择您的磨豆机',
 text: '从下拉列表中选择您的型号。转换器将显示专为您的设备推荐的刻度或段位。',
 },
 {
 name: '选择您的萃取方法',
 text: '点击您打算使用的冲煮方法图标。控制面板将更新所有相关的技术参数。',
 },
 {
 name: '理解微米指标',
 text: '参考柱状图中的微米 (micron) 数值来了解真实的颗粒大小。触觉参考（细盐、砂糖等）能帮助您进行视觉上的校准。',
 },
 {
 name: '观察颗粒模拟',
 text: '圆点分布展示了您磨豆机的典型均匀性。分布越均匀意味着萃取结果越可预测、越具有重复性。',
 },
 {
 name: '根据口味调整',
 text: '参考底部的诊断指南。如果咖啡味道偏苦，请调粗几格刻度。如果味道偏酸，请调细。每次只能调整一小步。',
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
 inLanguage: 'zh',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: '关于咖啡研磨度的常见问题',
 faq: faqData,
 bibliographyTitle: '研磨与萃取参考资料',
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
 step1Label: '第一步：设备选择',
 step2Label: '第二步：萃取方法',
 gaugeLabel: '颗粒物技术映射图 (μm)',
 distributionLabel: '实际颗粒分布',
 refLabel: '触觉参考',
 rangeMicrasLabel: '范围 (μm)',
 unitMicras: '目标微米值 (μm)',
 unitClicks: '推荐刻度',
 unitLevel: '推荐段位',
 suggestGrinderText: "没看到您的磨豆机？建议添加",
 method0Name: '土耳其咖啡 (Ibrik)',
 method0Ref: '滑石粉 / 面粉',
 method0Desc: '极细的粉末，几乎像面粉。是制作土耳其咖啡悬浮液的关键。',
 method1Name: '意式浓缩 (Espresso)',
 method1Ref: '精盐',
 method1Desc: '高压萃取需要极细的研磨来产生阻力。',
 method2Name: '摩卡壶 / 爱乐压',
 method2Ref: '食盐',
 method2Desc: '中等压力或混合浸泡。多功能且平衡的质感。',
 method3Name: 'V60 / 手冲滤泡',
 method3Ref: '砂糖',
 method3Desc: '手动滴滤，突显甜感和酸质的标准选择。',
 method4Name: 'Chemex / 聪明杯',
 method4Ref: '粗砂',
 method4Desc: '厚滤纸或短时间浸泡。需要恒定稳定的流速。',
 method5Name: '法压壶',
 method5Ref: '粗盐',
 method5Desc: '长时间浸泡需要较大的颗粒来通过金属滤网过滤。',
 method6Name: '冷萃咖啡',
 method6Ref: '胡椒粒',
 method6Desc: '数小时的冷水萃取需要尽可能粗的研磨度。',
 troubleIssue0: '味道苦、燥或有涩感？',
 troubleSolution0: '说明萃取过度。请调粗研磨，让水流加快从而减少苦味物质的析出。',
 troubleAction0: '调粗研磨',
 troubleIssue1: '味道酸、咸或口感偏淡？',
 troubleSolution1: '说明萃取不足。请调细研磨以增加接触面积，析出更多糖分和提高浓度。',
 troubleAction1: '调细研磨',
 },
};
