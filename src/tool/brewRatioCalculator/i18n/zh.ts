import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'ka-fei-fen-shui-bi-ji-suan-qi';
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
      '使用“急速冷却” (Flash Chilling) 技术：准备总水量 60% 的 90-96 度热水，将其余 40% 的水量以冰块形式放入分享壶。将热咖啡直接冲泡在冰块上。快速降温能锁住芳香。当您开启“冰咖啡”模式时，此计算器会自动重新计算各项数值。',
  },
  {
    question: 'Aeropress（爱乐压）的最佳粉水比是多少？',
    answer:
      '根据用途不同，通常在 1:12 到 1:15 之间。如果您喝黑咖啡，1:15 比较均衡。如果您将其作为奶咖基底或想要高浓度，可以降到 1:12 或 1:13。爱乐压是最灵活的冲煮方式，因为它能很好地适应不同的粉水比。',
  },
  {
    question: '我可以保存我喜欢的配方吗？',
    answer:
      '可以。一旦您为心仪的咖啡找到了完美的比例和分量，请点击“保存配方”按钮并为其命名（例如：早晨 V60），它将存储在您的浏览器中，您可以随时一键调用。',
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
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '咖啡粉水比计算器：完美萃取的大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '冲泡一杯精品咖啡并非主观的烹饪行为，而是一场<strong>流体化学</strong>和<strong>质量传递</strong>的实验。这一过程的核心是<strong>粉水比 (Brew Ratio)</strong>，这是一个关键的指标，决定了溶质（咖啡粉）与溶剂（水）之间的量化关系。我们的计算器整合了<em>精品咖啡协会 (SCA)</em> 的标准和应用热力学原理，助力咖啡师和爱好者在萃取中实现完美的重复性。',
    },
    {
      type: 'summary',
      title: '您将了解到关于咖啡粉水比的内容',
      items: [
        '<strong>粉水比:</strong> 咖啡与水之间的重量关系（如 1:15）如何决定杯中咖啡的潜在强度和感官特征。',
        '<strong>TDS 与萃取:</strong> 溶解固体背后的科学，以及咖啡豆中应有多少百分比的物质真正进入您的饮品。',
        '<strong>吸水率调整:</strong> 为什么咖啡每克粉会吸收约 2 克水，以及如何计算所需的额外补水量。',
        '<strong>特定冲煮法:</strong> 适用于 V60、法压壶、意式浓缩和急速冷却冰咖啡配方的理想比例。',
      ],
    },
    {
      type: 'title',
      text: '什么是粉水比，为什么它是最重要的变量？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '咖啡中含有约 30% 的可溶性物质，但并非所有物质都受到人类味觉的青睐。水作为万能溶剂，会根据化合物的分子量和化学亲和力，按特定顺序萃取这些物质。咖啡粉水比精确地控制了我们提供给每克咖啡的溶解能力。',
    },
    {
      type: 'list',
      items: [
        '<strong>酸味阶段（油脂与有机酸）:</strong> 由于溶解度高，它们最先溶解。这带来了明亮感、苹果酸或柠檬酸味以及花果香。如果比例太低（萃取不足），过程会在此停止，导致咖啡味道酸涩且带有咸味。',
        '<strong>甜味阶段（糖类与碳水化合物）:</strong> 紧随其后被萃取。它们产生平衡感、甜味和醇厚度。这是咖啡达到最高香气复杂度和结构平衡的“黄金窗口”。',
        '<strong>苦味阶段（纤维与酚类化合物）:</strong> 溶解速度最慢。如果比例过高（过度萃取），水会降解咖啡细胞，萃取出干燥的苦味、烟灰味和木质味。',
      ],
    },
    {
      type: 'title',
      text: '推荐比例：按冲煮方法的比例划分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '由于接触时间、水泵压力或滤纸孔径等变量的不同，每种萃取方法都需要特定的比例。下表概述了 2026 年的行业技术标准：',
    },
    {
      type: 'table',
      headers: ['冲煮方法', '粉水比 (克/水)', '口感特征', '目标时间'],
      rows: [
        ['Espresso (意式浓缩)', '1:2 至 1:2.5', '浓郁、粘稠、油脂厚实', '25-30 秒'],
        ['V60 / 手冲', '1:15 至 1:16', '干净、明亮、风味清晰', '2:30-3:30 分钟'],
        ['Aeropress (爱乐压)', '1:12 至 1:15', '灵活、中高醇厚度', '1:30-2:00 分钟'],
        ['French Press (法压)', '1:12 至 1:14', '有质感、厚重、油脂感', '4:00-5:00 分钟'],
        ['Cold Brew (冷萃)', '1:8 至 1:12', '甜感高、低酸、极其厚实', '12-24 小时'],
      ],
    },
    {
      type: 'title',
      text: '计算所需水量：咖啡豆吸水因子',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '手动冲煮中最常见的错误之一是忽略了咖啡粉是一个多孔的亲水结构，会保留恒定量的水分。并非所有注入的水都会进入杯子。',
    },
    {
      type: 'paragraph',
      html: '科学而言，每 <strong>1.0 克咖啡粉</strong>约保留 <strong>2.0 克水</strong>。我们的计算器引入了<strong>动态吸水率调整</strong>：如果您需要填满一个特定的 300 毫升容器，系统会推断出您必须注入 340 毫升水，以补偿豆子的吸收，从而保持萃取比例——以及风味——不被破坏。',
    },
    {
      type: 'stats',
      items: [
        { label: '咖啡粉量', value: '20g', icon: 'mdi:coffee' },
        { label: '总注水量', value: '300ml', icon: 'mdi:water' },
        { label: '吸水量', value: '40ml', icon: 'mdi:minus-circle' },
        { label: '杯中得量', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: '闷蒸 (Bloom) 的重要性：排气实现均匀萃取',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '“闷蒸”阶段不仅仅是为了美观，它是物理上的必然要求。在烘焙过程中，咖啡内部会产生并锁住二氧化碳。如果我们连续注入所有的水，气体会剧烈排出，产生微通道（沟流效应），并阻止溶剂渗透到咖啡颗粒的中心。',
    },
    {
      type: 'tip',
      title: '均匀饱和技术',
      html: '<p>为了达到完美的闷蒸，注入恰好相当于咖啡重量两倍的水（1:2 闷蒸比）。轻轻搅动或晃动，确保所有咖啡粉都湿润。等待 30-45 秒。气体的平稳释放将使后续注水呈层流状态流动，从而在整个咖啡粉床中均匀地萃取固体物质。</p>',
    },
    {
      type: 'title',
      text: '冰咖啡教程：如何在不冲淡风味的情况下冲煮冰咖啡',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '精品冰咖啡（急速冷却冲煮法）需要热力学校准。目标是在 94°C 下萃取挥发性油脂以捕捉风味复杂度，然后迅速冷却以避免氧化和亮度流失。',
    },
    {
      type: 'list',
      items: [
        '<strong>60% 热水:</strong> 实现 18-20% 萃取率所需的最小水量，既不会过度萃取，也不会过快冷却粉床。',
        '<strong>40% 冰块:</strong> 放置在分享壶中。咖啡的热能传递给冰块（熔化潜热），瞬间将饮品冷却至 5°C 以下。',
        '<strong>最终浓度:</strong> 结合后，最终粉水比（如 1:15）保持精确，为您带来风味浓郁、充满活力的冰冷体验。',
      ],
    },
    {
      type: 'title',
      text: '研磨度和粉水比：接触表面积的关键',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '比例只是方程式的一半。研磨度决定了暴露在溶剂中的<strong>总表面积</strong>。较小的颗粒（细研磨）具有更大的比例表面积，这会显著加速化学化合物的萃取速度。',
    },
    {
      type: 'title',
      text: '可重复性与科学：将您的厨房变成咖啡实验室',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '精品咖啡的卓越源于数据的精确。我们的<strong>自定义配方</strong>功能让您可以为成功的调试建立一个技术档案库。它不仅仅是一个收藏夹，还是一个分析工具，用于比较相同的咖啡豆在 1:15 和 1:16 比例下的不同反应，助您精准调整最佳方案。',
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
    modalPlaceholder: '例：“早晨 V60”',
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
