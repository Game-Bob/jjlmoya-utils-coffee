import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: '酸味 / 尖锐的酸',
    bitter: '苦味 / 焦味',
    watery: '水感 / 淡',
    astringent: '涩感 / 口干',
  },
  causes: {
    acidic: ['研磨度太粗（萃取不足）', '水温太低', '萃取时间太短', '咖啡豆太新鲜（未养豆）'],
    bitter: ['研磨度太细（过度萃取）', '水温太高', '萃取时间太长', '陈年豆或深烘焙'],
    watery: ['研磨度太粗（萃取强度低）', '粉水比太高（水太多）', '萃取时间太短', '咖啡豆太陈旧或质量低'],
    astringent: ['水质问题（矿物质过多）', '过度萃取结合矿物质含量', '硬水环境下研磨度过细', '萃取温度太高'],
  },
  solutions: {
    acidic: '由于研磨太粗，水流通过太快，未能萃取足够浓度。调细研磨度可以增加接触面积并减缓水流。',
    bitter: '水接触时间过长，提取了苦涩和烟灰味物质。调粗研磨度可以缩短接触时间并降低萃取强度。',
    watery: '杯中溶解固体不足。调细研磨度或增加粉量可以提高萃取率和浓度。',
    astringent: '富含矿物质的水导致过度萃取并与咖啡物质结合，产生口腔干燥感。调粗研磨度以减少过度萃取，同时通过过滤改善水质。',
  },
  actions: {
    acidic: { text: '调细一点研磨度', textSevere: '调细很多研磨度', icon: 'mdi:chevron-left' },
    bitter: { text: '调粗一点研磨度', textSevere: '调粗很多研磨度', icon: 'mdi:chevron-right' },
    watery: { text: '调细研磨度或增加5克粉', textSevere: '调细很多研磨度或增加7克粉', icon: 'mdi:plus-circle' },
    astringent: { text: '使用过滤水并调粗研磨', textSevere: '使用过滤水并调粗很多研磨', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: '像细盐', bitter: '像面粉', watery: '像可可粉', astringent: '略细的面粉' },
    pourover: { acidic: '像食盐', bitter: '像粗砂', watery: '像细玉米粉', astringent: '细砂' },
    aeropress: { acidic: '像细玉米粉', bitter: '像食盐', watery: '像细磨胡椒粉', astringent: '中砂' },
    frenchpress: { acidic: '像面包屑', bitter: '像岩盐', watery: '像海盐', astringent: '粗砂' },
    moka: { acidic: '像细海盐', bitter: '像细砂', watery: '像食盐', astringent: '中细砂' },
    coldbrew: { acidic: '像粗海盐', bitter: '像碎石', watery: '像岩盐', astringent: '带颗粒的粗砂' },
  },
  secondaryAction: '以 {temp}°C 萃取 {time}',
  tertiaryAction: '在品尝之前让咖啡冷却至室温，以便捕捉所有风味。',
};

const slug = 'coffee-flavor-diagnosis-extraction-problems';
const title = '咖啡萃取诊断：The Brew Fixer';
const description =
  '几秒钟内诊断出咖啡难喝的原因。根据你的冲煮方法和口味，提供研磨度、水温和时间的个性化调整建议。';

const faqData = [
  {
    question: '我怎么知道咖啡是萃取不足还是萃取过度？',
    answer:
      '萃取不足（酸味/尖锐感）意味着水流过得太快，没有溶解足够的风味物质。萃取过度（苦味/焦味）则意味着水与咖啡接触时间过长。The Brew Fixer 通过分析你的风味感受和冲煮方法，帮你锁定问题所在。',
  },
  {
    question: '最常见的冲煮错误是什么？',
    answer:
      '研磨度。大多数人要么磨得太粗（导致口感稀薄、发酸），要么磨得太细（导致口感苦涩、萃取过度）。根据你的冲煮方法精准调整研磨度，是提升咖啡品质最有效的手段。',
  },
  {
    question: '水温真的那么重要吗？',
    answer:
      '是的。水温控制着萃取速度。水温过低会导致萃取不足（酸）；水温过高会导致萃取过度（苦）。每种冲煮法都有理想范围：手冲（如 V60）偏好 92-96°C，而法压壶在 85-90°C 表现更好，以避免长时间浸泡带来的过度苦味。',
  },
  {
    question: '为什么我的咖啡喝起来有涩感或口干？',
    answer:
      '涩感通常是由矿物质含量高的水或过度萃取与矿物质结合造成的。尝试使用过滤水并稍微调粗研磨度。如果仍未改善，可能是水的 TDS（总溶解固体）过高，建议考虑使用净水器。',
  },
  {
    question: '我能只通过调整水温和时间来挽救一杯难喝的咖啡吗？',
    answer:
      '水温和时间会有所帮助，但研磨度通常才是核心。如果研磨太粗，即使增加时间或提高水温，效果也有限。The Brew Fixer 始终建议将调整研磨度作为首要行动，因为它对萃取的影响最大。',
  },
  {
    question: '我应该对所有咖啡都使用相同的配方吗？',
    answer:
      '不应该。极新鲜的咖啡（烘焙后 1-5 天）萃取较快，可能需要比放置较久的咖啡更粗的研磨。浅烘焙豆密度较高，通常需要较细的研磨；深烘焙豆孔隙较多，更容易萃取，因此偏好较粗的研磨。',
  },
];

const howToData = [
  {
    name: '选择你的冲煮方法',
    text: '选择你使用的器具：手冲、法压壶、爱乐压、摩卡壶、意式咖啡机或冷萃。工具将根据器具提供专属建议。',
  },
  {
    name: '辨别主导的负面风味',
    text: '品尝咖啡并选择最明显的口感缺陷：发酸、苦味（焦味）、稀薄（没味）或干涩。如果有多种问题，也可以选择次要风味。',
  },
  {
    name: '评价严重程度',
    text: '移动滑块表示该问题的严重程度。“轻微”表示几乎察觉不到，“严重”表示该味道主导了整杯咖啡。这有助于工具校准调整幅度。',
  },
  {
    name: '运行诊断',
    text: '点击“诊断”按钮，工具将分析你的输入并提供首要行动（通常是研磨度）、次要行动（水温和时间）以及研磨质感参考。',
  },
  {
    name: '调整并测试',
    text: '根据建议进行调整（如：调粗研磨、延长冲煮）。重新冲煮一杯并品尝。微小的调整积少成多。',
  },
  {
    name: '提供反馈',
    text: '喝完下一杯后，告知工具是否有改善。如果有，你会看到纸屑庆祝动画！如果没有，请返回并尝试不同的参数。',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: '咖啡萃取常见问题解答',
  faq: faqData,
  bibliographyTitle: '技术参考与咖啡科学',
  bibliography: [
    {
      name: 'Specialty Coffee Association: 萃取指南',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao: 咖啡烘焙师伴侣',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle: 意式浓缩萃取指南',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind: 深入理解咖啡萃取',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger: 咖啡风味描述词',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '为什么你的咖啡难喝？萃取诊断指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '顶级浓缩与一杯像烧焦纸一样的咖啡，其区别在于一个核心概念：<strong>咖啡萃取</strong>。萃取是水溶解咖啡粉中风味物质的过程。做得好，你会解锁咖啡的复杂、甜感和通透；做得不好，则会得到酸涩、苦味或稀薄感。',
    },
    {
      type: 'summary',
      title: '你可以从 Brew Fixer 中学到什么',
      items: [
        '<strong>如何诊断萃取缺陷：</strong> 辨别咖啡是萃取不足、过度，还是口感稀薄，或者是水质问题。',
        '<strong>控制萃取的三大杠杆：</strong> 研磨度、水温和接触时间。该先调哪一个？Brew Fixer 告诉你答案。',
        '<strong>针对器具的专属建议：</strong> V60 的理想研磨与法压壶完全不同。获取适合你器具的个性化建议。',
        '<strong>研磨质感参考：</strong> 通过与常见物质（精细粉末、海盐、沙子）对比，准确掌握目标研磨度。',
      ],
    },
    {
      type: 'title',
      text: '咖啡萃取的三大维度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '萃取率是溶解物质量除以原始干粉质量的比率。精品咖啡的目标通常是 <strong>18-20% 的萃取率</strong>。低于此值会发酸，高于此值则会发苦。',
    },
    {
      type: 'list',
      items: [
        '<strong>研磨度</strong>控制表面积。研磨越细，水能溶解物质的表面积越大，萃取越快。',
        '<strong>水温</strong>控制溶解速度。热水（94-96°C）萃取快；较凉的水（85-90°C）萃取慢。',
        '<strong>接触时间</strong>是水与咖啡接触的时长。手冲（2:30-3:30 分钟），法压壶（4:00-5:00 分钟）。',
      ],
    },
    {
      type: 'title',
      text: '如何诊断咖啡发酸（萃取不足）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '发酸的咖啡喝起来像柠檬或苹果，且带有尖锐的酸感。这意味着水没有足够的时间溶解出足够的物质。最简单的解决方案通常是<strong>调细研磨</strong>，以增加表面积并减缓水流。',
    },
    {
      type: 'list',
      items: [
        '调细研磨（将研磨度降低 5-10 µm）',
        '或者稍微延长冲煮时间（增加 15-30 秒）',
        '或者将水温提高到 95-96°C',
      ],
    },
    {
      type: 'title',
      text: '如何诊断咖啡发苦（过度萃取）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '发苦的咖啡带有焦味、灰烬感或木质味。这意味着萃取时间太长，溶解出了不该有的物质。解决方案是<strong>调粗研磨</strong>，以加快水流并减少接触时间。',
    },
    {
      type: 'list',
      items: [
        '调粗研磨（将研磨度增加 5-10 µm）',
        '或者缩短冲煮时间（减少 15-30 秒）',
        '或者将水温降低到 92-93°C',
      ],
    },
    {
      type: 'title',
      text: '如何诊断咖啡稀薄（没味、单薄）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '稀薄的咖啡缺乏风味和厚实度。这通常意味着你的研磨太粗、水粉比太高（水太多），或者是咖啡豆不新鲜。调整研磨度是最快的解决方法。',
    },
    {
      type: 'list',
      items: [
        '使用更细的研磨，增加萃取表面积',
        '增加咖啡粉用量（降低水粉比）',
        '稍微延长冲煮时间或使用更高水温',
      ],
    },
    {
      type: 'title',
      text: '如何诊断咖啡干涩（口干、矿物质味）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '涩感表现为口干，就像咬了葡萄皮一样。这通常是由硬水（矿物质含量高）结合过度萃取造成的。这比较棘手，因为需要同时调整研磨度<em>并</em>改善水质。',
    },
    {
      type: 'list',
      items: [
        '使用过滤水减少矿物质（目标 TDS 为 60-150 ppm）',
        '调粗研磨以减少过度萃取',
        '尝试稍微降低水温（90-92°C）',
      ],
    },
    {
      type: 'title',
      text: '研磨参考表：不同细度看起来和摸起来是什么样的？',
      level: 2,
    },
    {
      type: 'table',
      headers: ['研磨名称', '颗粒大小', '质感参考', '最适合的方法'],
      rows: [
        ['极细', '5-15 µm', '精细粉末，可可粉', '意式浓缩，土耳其咖啡'],
        ['细', '15-30 µm', '糖粉', '摩卡壶，爱乐压'],
        ['中细', '30-50 µm', '沙子，食盐', 'V60，Chemex，手冲'],
        ['中等', '50-70 µm', '沙滩沙子', '滴滤机，平底滤杯'],
        ['粗', '70-90 µm', '粗海盐，粗沙', '法压壶，杯测'],
        ['极粗', '90+ µm', '胡椒粒，面包糠', '冷萃，渗滤壶'],
      ],
    },
    {
      type: 'title',
      text: '水质：TDS 及其对萃取的影响',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '总溶解固体（TDS）是衡量水中矿物质含量的指标。各地自来水差异巨大：软水（50 ppm）或硬水（300+ ppm）。咖啡萃取对水质非常敏感。',
    },
    {
      type: 'list',
      items: [
        '<strong>太软 (0-50 ppm):</strong> 水会产生侵略性萃取，咖啡可能带有咸味且口感单薄。',
        '<strong>理想 (60-150 ppm):</strong> 甜感足、平衡且厚实的萃取。',
        '<strong>太硬 (200+ ppm):</strong> 矿物质会锁住风味物质，产生涩感和干燥口触。',
      ],
    },
    {
      type: 'tip',
      title: '水质快速改善技巧',
      html: '<p>如果你怀疑是硬水问题，尝试用过滤水或瓶装矿泉水冲煮对比。如果口感立即变好，你就找到了元凶。建议投资一个简单的滤水壶或安装净水器。</p>',
    },
  ],
  ui: {
    methodLabel: '你正在使用什么冲煮器具？',
    methodPourover: '手冲 / 滴滤',
    methodFrenchpress: '法压壶',
    methodAeropress: '爱乐压',
    methodMoka: '摩卡壶',
    methodEspresso: '意式浓缩',
    methodColdbrew: '冷萃',
    methodDescription: '选择你的冲煮设备',
    flavorLabel: '喝起来是什么味道？',
    flavorAcidic: '发酸 / 尖锐酸感',
    flavorBitter: '苦味 / 焦味',
    flavorWatery: '稀薄 / 没味',
    flavorAstringent: '干涩 / 口干',
    flavorHint: '最多选择 2 种风味',
    severityLabel: '该问题有多强烈？',
    severitySlightLabel: '几乎察觉不到',
    severityModerateLabel: '中等',
    severitySevereLabel: '主导整杯咖啡',
    diagnoseBtn: '诊断我的咖啡',
    resetBtn: '重置',
    resultTitle: '诊断完成',
    resultExplanation: '你的杯中发生了什么',
    actionMainLabel: '首要行动',
    actionSecondaryLabel: '水温与时间',
    actionTertiaryLabel: '专业技巧',
    textureReferenceLabel: '研磨质感参考',
    improvementHint: '进行调整后，再冲煮一杯。',
    copyDiagnosisBtn: '复制诊断结果',
    feedbackLabel: '咖啡有改善吗？',
    feedbackSuccessTemplate: '太棒了！调整奏效了。',
    methodPouroverDesc: 'V60, Chemex, 滤杯',
    methodFrenchpressDesc: '压滤壶, Bodum',
    methodAeropressDesc: '爱乐压, Prismo',
    methodMokaDesc: '摩卡壶, 直火壶',
    methodEspressoDesc: '意式机, 拉杆机',
    methodColdbrewDesc: '浸泡, 冷制',
    fadeOutMessage: '做得好！继续精进。',
    backBtn: '返回',
    mainIssueLabel: '主要问题',
    improvedBtn: '有改善',
    notYetBtn: '还没有',
    copiedBtn: '已复制！',
    combinedLabel: '组合',
    diagnosisTitle: 'The Brew Fixer 诊断结果',
    issueLabel: '问题',
    causeLabel: '原因',
    actionLabel: '行动',
    whyLabel: '原因',
    nextLabel: '下一步',
  },
};
