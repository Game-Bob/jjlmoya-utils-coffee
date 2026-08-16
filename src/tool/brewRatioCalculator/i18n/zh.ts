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
    text: '咖啡粉水比: 精确计算冲煮配方',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '咖啡粉与水的比例会直接影响浓度、风味和配方的重复性。这个计算器可以根据冲煮方式计算咖啡粉用量、注水量以及最终杯中饮品的大致容量。',
  },
  {
    type: 'summary',
    title: '计算器会考虑什么',
    items: [
      '<strong>粉水比:</strong> 选择 1:15 等比例，将咖啡粉重量与水量对应起来。',
      '<strong>吸水量:</strong> 咖啡粉通常会吸收每克咖啡约 2 克水。',
      '<strong>冲煮方式:</strong> V60、法压壶、爱乐压和冰咖啡适合不同的比例范围。',
      '<strong>重复冲煮:</strong> 保存满意的配方，下一次可以直接使用。',
    ],
  },
  {
    type: 'title',
    text: '如何理解咖啡粉水比',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '1:15 表示每 1 克咖啡粉使用 15 克水。例如使用 20 克咖啡粉时，需要约 300 克水。部分水会被咖啡粉吸收，所以杯中实际得到的液体会少于注入量。',
  },
  {
    type: 'list',
    items: [
      '<strong>浓郁口感:</strong> 可以从 1:12-1:14 开始。',
      '<strong>平衡口感:</strong> 建议先尝试 1:15-1:16。',
      '<strong>清淡口感:</strong> 可以尝试 1:17-1:18，再根据味道调整。',
    ],
  },
  {
    type: 'title',
    text: '不同冲煮方式的参考比例',
    level: 2,
  },
  {
    type: 'table',
    headers: ['方式', '比例', '风味表现', '时间'],
    rows: [
      ['意式浓缩', '1:2-1:2.5', '浓缩且醇厚', '25-30 秒'],
      ['V60 手冲', '1:15-1:16', '明亮且干净', '2:30-3:30'],
      ['爱乐压', '1:12-1:15', '饱满且灵活', '1:30-2:00'],
      ['法压壶', '1:12-1:14', '厚重且有质感', '4-5 分钟'],
    ],
  },
  {
    type: 'stats',
    items: [
      { label: '示例粉量', value: '20 克', icon: 'mdi:coffee' },
      { label: '示例水量', value: '300 毫升', icon: 'mdi:water' },
      { label: '吸水量', value: '约 40 毫升', icon: 'mdi:minus-circle' },
      { label: '杯中容量', value: '约 260 毫升', icon: 'mdi:cup' },
    ],
    columns: 4,
  },
  {
    type: 'title',
    text: '闷蒸与冰咖啡',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '闷蒸时通常使用约为咖啡粉重量两倍的水，并等待 30-45 秒。制作冰咖啡时，计算器会把总水量分配给热水和冰块，让咖啡快速降温，同时避免过度稀释。',
  },
  {
    type: 'tip',
    title: '一次只调整一个变量',
    html: '<p>如果咖啡苦涩或干燥，可以把比例调大或把研磨调粗。如果味道酸且单薄，可以把比例调小或把研磨调细。每次只改变一个参数。</p>',
  },
  {
    type: 'title',
    text: '温度与冲煮时间',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '大多数滤泡方式可以从 90-96 度的水开始。水温过高会加快萃取，水温过低则可能让风味平淡。',
  },
  {
    type: 'table',
    headers: ['参数', '起始值', '影响'],
    rows: [
      ['水温', '90-96 °C', '萃取速度'],
      ['闷蒸', '30-45 秒', '粉层湿润均匀度'],
      ['粉水比', '1:15-1:16', '饮品浓度'],
    ],
  },
  {
    type: 'title',
    text: '如何修正杯中风味',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>苦味:</strong> 调粗研磨或降低水温。',
      '<strong>酸味:</strong> 调细研磨或延长接触时间。',
      '<strong>口感单薄:</strong> 减少水粉比并确认粉量准确。',
    ],
  },
  {
    type: 'paragraph',
    html: '每次只调整一个参数，并记录杯中结果。这样可以清楚判断粉水比、研磨度和温度分别带来的变化。',
  },
  {
    type: 'stats',
    items: [
      { label: '滤泡', value: '1:15-1:16', icon: 'mdi:filter' },
      { label: '水温', value: '90-96 °C', icon: 'mdi:thermometer' },
      { label: '闷蒸', value: '30-45 秒', icon: 'mdi:timer-outline' },
    ],
    columns: 3,
  },
  {
    type: 'title',
    text: '保存满意的冲煮配方',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '记录咖啡豆、烘焙日期、粉量、水量和总时间。冲煮几次后，你就能更快复现满意的结果，并调整新豆子。',
  },
  {
    type: 'tip',
    title: '使用电子秤',
    html: '<p>电子秤可以同时准确测量咖啡粉和水，比只看水壶或杯子的体积更容易保持配方稳定。</p>',
  },
  {
    type: 'summary',
    title: '调校顺序',
    items: [
      '先确定一个粉水比。',
      '稳定水温和冲煮时间。',
      '根据味道调整研磨度。',
    ],
  },
  {
    type: 'paragraph',
    html: '每次调整后都在相近温度下品尝，因为咖啡冷却时风味会变化。统一品尝条件，比较才更有意义。',
  },
  {
    type: 'title',
    text: '水质同样重要',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '矿物质适中的洁净水有助于表现咖啡的甜感和酸质。水质过硬可能遮盖香气，也会增加设备中的水垢。',
  },
].slice(0, 24),
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
