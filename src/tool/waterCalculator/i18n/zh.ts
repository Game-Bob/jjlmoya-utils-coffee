import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

const slug = 'sca-ka-fei-shui-ji-suan-qi';
const title = 'SCA 精品咖啡用水计算器';
const description =
  '为精品咖啡计算精确的矿物质浓度。支持 SCA、Barista Hustle 和 Hendon 配方。精准控制镁、钙和碳酸氢盐，最大限度提升风味并保护您的咖啡机。';

const faqData = [
  {
    question: '什么是 SCA 水质标准？',
    answer:
      '精品咖啡协会 (SCA) 定义了冲煮用水的技术标准，规定了总硬度 (GH)、碱度 (KH)、pH 值和钠浓度的最佳范围，旨在实现平衡的萃取，在提升咖啡风味的同时不损伤咖啡设备。',
  },
  {
    question: '为什么不直接使用自来水？',
    answer:
      '自来水因地区和季节差异巨大。它可能含有氯、过多的水垢或会掩盖精品咖啡风味的矿物质水平，并损坏锅炉和密封圈。使用蒸馏水进行矿化处理能让您拥有完全的控制力和可重复的实验结果。',
  },
  {
    question: '在哪里可以买到这些矿物盐？',
    answer:
      '泻盐（硫酸镁）和碳酸氢钠（小苏打）在药店和超市均有销售。氯化钙在自酿啤酒供应店很常见。请务必确保它们是食品级质量。',
  },
  {
    question: '对我的意式咖啡机安全吗？',
    answer:
      '本计算器包含实时风险指示器。极纯的水会腐蚀金属部件；硬度过高的水会导致水垢积聚。SCA Ideal 和 Barista Hustle 配方旨在平衡设备寿命与口感质量。',
  },
  {
    question: '咖啡中镁和钙的区别是什么？',
    answer:
      '镁能更有效地萃取果酸和甜味风味化合物，是手冲过滤的首选矿物质。钙能带来更多的醇厚度和丝滑质感，但随着时间的推移，钙更容易在锅炉中形成水垢沉积。',
  },
];

const howToData = [
  {
    name: '准备纯净的基础水',
    text: '购买蒸馏水或去离子水，或使用反渗透系统。目标是从总溶解固体 (TDS) 为 0 ppm 开始，以便完全控制矿化过程。',
  },
  {
    name: '准备浓缩母液瓶',
    text: '将每种盐分别溶解在 100 毫升蒸馏水中：镁离子使用 2.46 克泻盐，钙离子使用 1.47 克氯化钙，缓冲液 (Buffer) 使用 1.68 克碳酸氢钠。',
  },
  {
    name: '选择您的目标配方',
    text: '选择 SCA Ideal（均衡）、Barista Hustle（甜感与明亮度）、Hendon（醇厚度）、Melbourne（精致）或根据您自己的 GH 和 KH 值创建自定义配方。',
  },
  {
    name: '输入最终水量',
    text: '以升为单位输入您想要配置的水量。计算器会自动根据该精确水量调整浓缩液的剂量。',
  },
  {
    name: '添加浓缩液并补足蒸馏水',
    text: '使用精密注射器将指示毫升数的每种浓缩液添加到容器中，并用蒸馏水填满至总水量。',
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '关于 SCA 精品咖啡用水计算器的常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考与 SCA 标准',
  bibliography: [
    {
      name: 'SCA 水质标准',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY 水配方进阶版',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: '咖啡用水科学 (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: 水化学与咖啡',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '咖啡水化学：为什么 H₂O 是最容易被忽视的成分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '咖啡中 98-99% 都是水。然而，这种水的矿物质成分却是整个精品咖啡产业链中最容易被忽视的质量因素。同一种埃塞俄比亚单品咖啡，使用伦敦自来水与使用 SCA 优化水萃取出来的口感可能完全不同。我们的 <strong>SCA 咖啡用水计算器</strong> 让您可以使用常见的矿物盐和蒸馏水，从零开始调制完美的冲煮用水。',
    },
    {
      type: 'summary',
      title: '为什么水质矿化如此重要？',
      items: [
        '<strong>GH (总硬度):</strong> 镁离子和钙离子的总和决定了水溶解咖啡风味化合物的能力。',
        '<strong>KH (碳酸盐硬度):</strong> 碳酸氢盐浓度控制萃取过程中的 pH 值。KH 过低会使咖啡发酸；KH 过高则会使咖啡口感平淡。',
        '<strong>可重复性:</strong> 市政自来水随季节和地点变化。矿化水则保持恒定，确保每一批次的咖啡品质始终如一。',
        '<strong>设备保护:</strong> 正确的矿物质水平既能防止腐蚀（水质过纯），又能防止水垢积聚（硬度过高）。',
      ],
    },
    {
      type: 'title',
      text: 'SCA 标准：完美冲煮用水的技术指标',
      level: 2,
    },
    {
      type: 'table',
      headers: ['参数', '最小值', 'SCA 理想值', '最大值'],
      rows: [
        ['总硬度 (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['总碱度 (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH 值', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: '镁 vs 钙：决定您那杯咖啡的矿物质之战',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '并非所有矿物质在咖啡中的表现都相同。研究员 Christopher Hendon 证明，<strong>镁</strong>能与复杂的挥发性风味分子形成配位键，从而更有效地萃取水果和花香笔记。<strong>钙</strong>则萃取较重的化合物，带来醇厚度和丝滑的口感，但香气的鲜明度较低。',
    },
    {
      type: 'tip',
      title: '专业咖啡师的经验法则',
      html: '<p>对于配有黄铜或铜质锅炉的意式咖啡机，切勿长期使用 KH 低于 40 mg/L 的配方。极纯的水具有长期腐蚀性。对于手冲过滤方法（如 V60、Chemex、AeroPress），由于没有需要保护的锅炉，您可以放心使用像 Melbourne 这样精致的配方。</p>',
    },
  ],
  ui: {
    sectionMixTitle: '混合配置',
    labelVolume: '最终水量',
    labelProfile: '目标水质配方',
    customProfileBtn: '自定义',
    labelGH: '目标 GH',
    labelKH: '目标 KH',
    concentratesTitle: '浓缩母液瓶 (克/100毫升)',
    saltMgName: '镁 (泻盐)',
    saltCaName: '钙 (氯化钙)',
    saltBufName: '碳酸氢盐 (小苏打)',
    recipeTitle: '配方',
    labelMg: '镁浓缩液:',
    labelCa: '钙浓缩液:',
    labelBuffer: '碳酸氢盐浓缩液:',
    labelDistilledWater: '补足蒸馏水至',
    copyBtn: '复制配方',
    copiedText: '已复制！',
    safetyMetalsTitle: '金属安全',
    safetyScaleTitle: '水垢风险',
    calculatingText: '计算中...',
    glossaryTitle: '矿物质快速指南',
    profileSubTemplate: '目标: {gh} GH / {kh} KH',
    customProfileName: '自定义',
    corrosionHigh: '危险：水质极具侵蚀性。可能会腐蚀锅炉和铜质部件。',
    corrosionMedium: '可接受：中度腐蚀风险。推荐用于手冲过滤方法，在机器上使用需谨慎。',
    corrosionLow: '安全：水具有足够的缓冲能力来保护金属。',
    scaleHigh: '危险：即将产生水垢。仅限用于手动过滤方法。',
    scaleMedium: '注意：随着时间的推移，可能会在意式咖啡机中产生水垢沉积。',
    scaleLow: '安全：无明显水垢积聚风险。',
    copyTemplate:
      '咖啡用水配方 ({profileName}):\n- 体积: {liters}L\n- 镁浓缩液: {mg}ml\n- 钙浓缩液: {ca}ml\n- 碳酸氢盐浓缩液: {buf}ml\n- 蒸馏水: {water}ml',
    glossary0Term: '总硬度 (GH)',
    glossary0Desc: '钙和镁的总和。镁可增强甜感和复杂性；钙可增加醇厚度和质感。',
    glossary1Term: '碱度 (KH)',
    glossary1Desc: '中和酸的能力。高 KH 会抑制咖啡酸度；低 KH 则会使口感发酸。',
    glossary2Term: 'TDS (总溶解固体)',
    glossary2Desc: '在矿化水中，TDS 代表所有添加矿物盐的合并浓度。',
    glossary3Term: '镁',
    glossary3Desc: '更有效地萃取复杂的果味风味化合物。是精品咖啡冲煮的首选矿物质。',
  },
};
