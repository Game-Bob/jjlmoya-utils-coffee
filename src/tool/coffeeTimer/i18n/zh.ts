import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';

const slug = 'ka-fei-chong-zhu-ji-shi-qi';
const title = '咖啡冲煮计时器';
const description =
  '专业的精品咖啡计时器，包含注水阶段、节奏音频提醒和萃取摘要。针对 V60、Chemex 和爱乐压进行了优化。';

const faqData = [
  {
    question: '为什么要使用这个计时器而不是手机自带的？',
    answer:
      '此计时器专为咖啡冲煮设计。它包含视觉化的阶段展示（焖蒸、注水、过滤）、每个切换阶段前 3 秒的音频提醒，并允许您配置完整的配方，确保您在注水过程中始终保持节奏。',
  },
  {
    question: '什么是焖蒸 (Bloom) 时间？',
    answer:
      '这是初始的预浸泡阶段（通常为 30 到 45 秒），通过注入少量水来释放二氧化碳。计时器会以琥珀色突出显示此阶段，以便您知道何时等待、何时继续注水。',
  },
  {
    question: '我如何知道我的萃取时间是否正确？',
    answer:
      '对于标准 V60，总时间应在 2:30 到 3:15 分钟之间。如果完成较早，说明研磨太粗；如果时间过长，说明太细。计时器可以帮助您精确诊断这一过程。',
  },
  {
    question: '它有音频提醒吗？',
    answer:
      '是的。系统会在焖蒸阶段结束前以及整个过程结束时发出短促的提示音，让您可以专注于水流，而不必一直盯着屏幕。',
  },
  {
    question: '它兼容 Chemex 吗？',
    answer:
      '完全兼容。您可以在底部的设置部分将总时间调整为 4:30 或 5:00 分钟（这是 Chemex 由于其厚滤纸而常用的时间）。',
  },
  {
    question: '它在手机上运行良好吗？',
    answer:
      '已针对移动应用进行了深度优化，大按钮设计即使手湿或在抓握细口壶时也能轻松操作。',
  },
];

const howToData = [
  {
    name: '配置您的配方',
    text: '在底部部分，根据您的冲煮方法（V60、Chemex、爱乐压）调整总水量、焖蒸水量、焖蒸时间和总时间。',
  },
  {
    name: '按下开始按钮',
    text: '按下巨大的开始按钮。计时器将启动，并在顶部的进度条中显示当前活动的阶段。',
  },
  {
    name: '焖蒸阶段',
    text: '以螺旋方式注入焖蒸水（屏幕会有数值提示）并等待计时。您将在结束前 3 秒收到音频提醒。',
  },
  {
    name: '注水阶段',
    text: '继续注入剩余的水，直到达到总重量。以缓慢、稳定的画圆方式注水，以确保萃取均匀。',
  },
  {
    name: '过滤阶段',
    text: '等待咖啡完全通过滤纸流下。此阶段完成萃取，并决定了咖啡的清晰度和余韵。',
  },
  {
    name: '查看摘要',
    text: '完成后，计时器显示总时间和总注水量。记录这些数值及您的口感印象，以便精进配方。',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: '咖啡计时器常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考与 SCA 标准协议',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Brewing Best Practices',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
    {
      name: 'Barista Hustle: The Theory of Extraction',
      url: 'https://www.baristahustle.com/blog/the-theory-of-extraction/',
    },
    {
      name: 'World Brewers Cup: Competition Protocol',
      url: 'https://worldcoffeeevents.org/world-brewers-cup/',
    },
    {
      name: 'Perfect Daily Grind: How Brew Time Affects Coffee Flavor',
      url: 'https://perfectdailygrind.com/2019/04/how-brew-time-affects-your-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '咖啡冲煮计时器：萃取时间的科学 (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在精品咖啡的世界里，水与咖啡粉的<strong>接触时间</strong>不只是一个简单的等待指标；它是决定哪些化学物质最终进入您咖啡杯的动力学因素。多冲一秒可能意味着从焦糖甜感向烟灰苦味的转变。我们针对 V60、Chemex 和爱乐压设计的专业计时工具就像一位<strong>节奏助手</strong>，让您在家中也能实现咖啡师级的精准掌控。',
    },
    {
      type: 'summary',
      title: '为什么专业计时器至关重要',
      items: [
        '<strong>动力学控制：</strong> 水溶解咖啡固体物质的速率是恒定的。时间就是您的刹车和油门。',
        '<strong>注水阶段：</strong> 咖啡的萃取并不是线性的。将时间划分为焖蒸、注水和过滤是至关重要的。',
        '<strong>可重复性：</strong> 如果不测量时间，您就无法复制最棒的那杯咖啡。一致性是质量的基石。',
        '<strong>研磨度调整：</strong> 最终时间会告诉您下次应该磨细一点还是粗一点。',
      ],
    },
    {
      type: 'title',
      text: '萃取的时间轴：每一秒都在发生什么？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当热水触碰到咖啡时，一场分子级的障碍赛就开始了。所有的风味并不是同时被萃取出来的。了解这段时间轴是业余爱好者与专业咖啡师之间的区别：',
    },
    {
      type: 'list',
      items: [
        '<strong>0 到 45 秒 (焖蒸期):</strong> 这是排气阶段。烘焙中残留的二氧化碳会阻碍水分进入。此处的等待能让咖啡豆“打开”，为均匀萃取铺平道路。',
        '<strong>45 到 120 秒 (酸质与甜感萃取):</strong> 水流通过并溶解矿物盐、有机酸和复合糖。这是风味的核心。',
        '<strong>120 到 210 秒 (体脂感与余韵):</strong> 较重的纤维和苦味物质被萃取。如果这一阶段持续太久，咖啡会变得涩口。',
      ],
    },
    {
      type: 'title',
      text: '焖蒸阶段：为什么 30 秒是标准',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>焖蒸 (Bloom)</strong> 或预浸泡，是指我们注入约为咖啡粉重两倍的水。最初的这 30 秒是为了排出二氧化碳。如果不遵守这段时间，气体会将水向外推，形成通道，导致液体在没有接触咖啡粉的情况下流过（通道效应），从而产生淡而无味且不稳定的结果。',
    },
    {
      type: 'table',
      headers: ['阶段', '建议时间', '技术动作', '化学目的'],
      rows: [
        ['焖蒸 (Bloom)', '30 到 45 秒', '注入两倍粉重的水', '排气 (CO2)'],
        ['第一次注水', '45 到 90 秒', '慢速画圆', '酸质与甜度萃取'],
        ['第二次注水', '90 到 150 秒', '中心定点注水', '平衡感与体脂感'],
        ['过滤 (Drawdown)', '直至结束', '稳定滴滤', '清晰度与余韵'],
      ],
    },
    {
      type: 'title',
      text: '时间对研磨的影响：反馈闭环',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '计时器是您针对磨豆机最好的诊断工具。如果您的 V60 配方目标时间是 3:00 分钟，而水在 2:15 就已经排空，咖啡可能会尝起来偏酸且淡薄（萃取不足）。解决方案不是注水更慢，而是<strong>调细研磨</strong>，让咖啡粉对水流产生更多阻力。',
    },
    {
      type: 'stats',
      items: [
        { label: '理想 V60 时间', value: '3:00', icon: 'mdi:clock-check' },
        { label: '理想 Chemex 时间', value: '4:30', icon: 'mdi:timer-sand' },
        { label: '理想爱乐压时间', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '节奏提醒：为什么音频助手必不可少',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '冲煮手冲咖啡需要对秤和注水手法保持高度的视觉专注。我们的计时器包含<strong>临近音频提醒</strong>，在您需要开始下一次注水前 3 秒或焖蒸结束时发出提示。这是流畅萃取与充满中断的萃取之间的区别。',
    },
    {
      type: 'tip',
      title: '比赛级咖啡师小建议',
      html: '<p>保持水流尽可能低且贴近粉床。从高处注水会带入氧气并造成过度扰动，这可能会导致过度萃取，并使水温过快下降。使用计时器保持恒定的圆周节奏，每秒注水约 5 到 7 克。</p>',
    },
    {
      type: 'title',
      text: '热力学与时间：温度变量',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '时间会影响系统的温度。持续 6 分钟的萃取会损失大量热能，导致口感失衡。最佳的时间范围能确保水在整个萃取过程中保持在 90°C 到 96°C 之间。',
    },
    {
      type: 'title',
      text: '冰咖啡 (Flash Brew) 的注水时间',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在冰块上冲煮咖啡时，计时必须更具侵略性。由于使用的热水较少（总量的 60%），接触时间会缩短。为了补偿，请使用稍细的研磨度，将萃取时间保持在 2:30 到 3:00 分钟内。',
    },
    {
      type: 'title',
      text: '萃取后摘要：持续学习',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '每次冲煮结束时，我们的工具会显示总接触时间。记录这个数值以及您的口感印象。尝起来苦吗？下次目标时间缩短 15 秒。尝起来有金属感或酸味？下次目标时间延长 20 秒。计时器不会代您冲煮，但它为您提供了成为大师所需的数据。',
    },
  ],
  ui: {
    readyText: '准备开始',
    startBtn: '开始萃取',
    pauseBtn: '暂停',
    resumeBtn: '恢复',
    resetBtn: '重置',
    newBrewBtn: '新冲煮',
    targetLabel: '目标水量：',
    instructionStart: '按下大按钮',
    hintStart: '准备好您的 V60 或 Chemex',
    phase1Label: '阶段 1: 焖蒸 (Bloom)',
    phase2Label: '阶段 2: 注水 (Pour)',
    phase3Label: '阶段 3: 过滤 (Drain)',
    instructionBloom: '注入 {bloomWater}g 水',
    hintBloom: '轻旋滤杯以确保饱和',
    instructionPour: '达到总重 {waterTotal}g',
    hintPour: '平稳圆周注水',
    instructionDrain: '等待最终过滤',
    hintDrain: '即将享用美食',
    summaryTitle: '萃取完成！',
    summaryMessage: '您的咖啡已准备就绪。',
    statTimeLabel: '总时间',
    statWaterLabel: '注水总量',
    setupTitle: '配方设置',
    labelWater: '总水量 (g)',
    labelBloomWater: '焖蒸水量 (g)',
    labelBloomTime: '焖蒸时间 (s)',
    labelTotalTime: '总时间 (s)',
  },
};
