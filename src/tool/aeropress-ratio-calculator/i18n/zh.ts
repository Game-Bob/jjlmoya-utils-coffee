import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-ratio-calculator';
const title = '爱乐压咖啡粉水比与冠军配方计算器';
const description = '精确计算爱乐压咖啡的水量分配、粉筒容量上限、旁路稀释水量与分段萃取计时。';

const howTo = [
  {
    name: '选择萃取方式与器具型号',
    text: '选择正压萃取或反压浸泡法，并选定爱乐压粉筒型号（Original、XL 或 Go）。',
  },
  {
    name: '设定咖啡粉量与目标粉水比',
    text: '输入咖啡粉重量（克）与目标粉水比，或直接点击载入世界咖啡师冠军配方。',
  },
  {
    name: '查看粉筒注水量与旁路补水量',
    text: '确认配方是否超出粉筒容量。计算器将自动算出需要在杯中额外加入的旁路热水量。',
  },
  {
    name: '启动交互式分段计时器',
    text: '跟随内置计时器进行精准闷蒸（Bloom）、浸泡静置与匀速轻柔压滤。',
  },
];

const faq = [
  {
    question: '爱乐压正压法与反压法有什么区别？',
    answer: '正压法直接将粉筒架在分享杯上，插入压杆前会有少许液体自然滴漏。反压法则是将粉筒倒立架在压杆上，在翻转前保持完全密封浸泡，实现精准的浸泡时间控制。',
  },
  {
    question: '什么是爱乐压旁路稀释萃取法（Bypass）？',
    answer: '旁路稀释法是指在粉筒内萃取高浓度的咖啡浓缩液，然后在杯中直接加入干净热水稀释。这种方法可以在不溢出粉筒的前提下制作大杯量咖啡。',
  },
  {
    question: '爱乐压制作手冲风味咖啡的最佳粉水比是多少？',
    answer: '制作经典清亮滤泡咖啡时，1:14 到 1:17 的比例（如 11g 至 15g 咖啡粉配 200g 水）平衡感极佳。制作浓缩型咖啡时，1:4 至 1:8 的比例能带来极高的醇厚度。',
  },
  {
    question: '研磨度如何影响爱乐压的萃取表现？',
    answer: '中细研磨非常适合 1 至 2 分钟的快速萃取。偏细研磨可提升醇厚度和甜感，偏粗研磨则可在较长浸泡时间内避免过度萃取带来的苦涩。',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: '精品咖啡专业工具',
    profileLabel: '萃取风味特征',
    unitSystemLabel: '计量单位',
    unitMetricLabel: '公制 (g)',
    unitImperialLabel: '英制 (oz)',
    presetsTitle: '咖啡师与世界冠军配方',
    presetCustom: '自定义配方',
    presetHoffmann: 'Hoffmann 终极配方',
    presetWendelboe: 'Wendelboe 浅烘配方',
    presetWacChamp: 'WAC 冠军旁路配方',
    presetAlanAdler: 'Alan Adler 经典原版',
    presetIcedBypass: '急冷冰爱乐压',
    methodLabel: '冲煮手法',
    methodStandard: '正压标准法',
    methodInverted: '反压浸泡法',
    modelLabel: '爱乐压硬件型号',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: '咖啡粉量',
    doseUnitMetric: '克',
    doseUnitImperial: 'oz',
    ratioLabel: '冲煮粉水比',
    ratioPrefix: '1:',
    waterTempLabel: '冲煮水温',
    waterTempUnit: '°C',
    grindLabel: '研磨度推荐',
    grindFine: '细研磨',
    grindMediumFine: '中细研磨',
    grindMedium: '中度研磨',
    grindCoarse: '粗研磨',
    resultsTitle: '注水分配与萃取指标',
    statTotalWater: '总用水量',
    statChamberWater: '粉筒注水量',
    statBypassWater: '旁路补水量',
    statYield: '成液体积',
    statEstimatedTds: '预估 TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: '需要旁路加水稀释',
    bypassAlertText: '当前配方需要在粉筒内注入 {chamber}，并在杯中直接额外加入 {bypass} 热水。',
    timerTitle: '分段冲煮计时器',
    timerStart: '开始计时',
    timerPause: '暂停',
    timerReset: '重置',
    phaseBloom: '闷蒸排气与湿润',
    phasePour: '注水与搅拌',
    phaseSteep: '浸泡萃取',
    phasePress: '轻柔下压',
    phaseBypass: '加入旁路热水',
    phaseComplete: '冲煮完成',
    guideTitle: '萃取操作指南',
    guideStep1Title: '润湿滤纸与装粉',
    guideStep1Desc: '将滤纸装入滤盖并用热水冲洗贴合，倒入新鲜研磨的咖啡粉。',
    guideStep2Title: '向粉筒注水',
    guideStep2Desc: '按照计算出的水量与推荐温度注水，并轻轻搅拌均匀。',
    guideStep3Title: '插上压杆静置',
    guideStep3Desc: '在顶部斜插压杆形成气锁负压，静置达到指定时间。',
    guideStep4Title: '下压与稀释',
    guideStep4Desc: '以恒定力量下压 20 至 30 秒。听到排气嘶嘶声立即停下，并加入旁路热水。',
    ratioStrengthLight: '轻盈雅致',
    ratioStrengthMedium: '均衡风味',
    ratioStrengthStrong: '浓郁醇厚',
    ratioStrengthConcentrate: '浓缩型风味',
    chamberWaterLabel: '粉筒注水',
    coffeeBedLabel: '咖啡粉层',
    airGapLabel: '空气层',
  },
  seo: [
    { type: 'title', text: '爱乐压咖啡萃取原理与粉水比科学', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>爱乐压</strong>完美融合了全浸泡萃取与气压过滤技术。制作一杯甜感充足、风味干净明亮的咖啡，核心在于精确掌控咖啡粉与水的比例。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '粉筒容量限制与旁路萃取原理',
      html: '标准爱乐压粉筒扣除咖啡粉体积后，实际容水量约为 220ml 至 240ml。当需要制作大容量咖啡时，咖啡师通常采用旁路萃取：先萃取高浓度液体，再用热水稀释。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: '滤泡黄金粉水比' },
        { value: '230 ml', label: '标准粉筒容量' },
        { value: '1.2% - 1.5%', label: '理想 TDS 浓度' },
      ],
    },
    { type: 'title', text: '正压法与反压法对比', level: 3 },
    {
      type: 'paragraph',
      html: '器具的摆放方向直接决定了浸泡接触时间与水流动态。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '正压标准法',
          description: '滤盖朝下直接置于杯上。插入压杆即可产生气锁负压阻断早期滴漏。',
          points: [
            '操作安全简便',
            '注水初期有少量滴漏',
            'James Hoffmann 力荐的高重复性手法',
          ],
        },
        {
          title: '反压浸泡法',
          description: '倒立架在压杆上注水浸泡，翻转前液体零渗漏。',
          highlight: true,
          points: [
            '完全掌控浸泡时间',
            '极度适合大粉量与高浓度配方',
            '翻转时需小心高温防烫',
          ],
        },
      ],
    },
    { type: 'title', text: '冠军配方中的旁路稀释技巧', level: 3 },
    {
      type: 'paragraph',
      html: '在世界爱乐压大赛（WAC）中，多位冠军采用 1:6 至 1:8 的浓缩比例快速萃取优质风味，避开后段苦涩多酚物质，随后在杯中补足热水调和出极佳口感。',
    },
    {
      type: 'table',
      headers: ['配方类型', '咖啡粉量', '粉筒注水', '旁路补水', '推荐研磨度'],
      rows: [
        ['Hoffmann 滤泡', '11g', '200g', '0g', '中细研磨 (600µm)'],
        ['Tim Wendelboe 浅烘', '14g', '200g', '0g', '中度研磨 (700µm)'],
        ['WAC 冠军旁路', '30g', '120g', '105g', '粗研磨 (900µm)'],
        ['Alan Adler 经典原版', '17g', '80g', '100g 可选', '细研磨 (450µm)'],
        ['急冷冰咖啡', '18g', '150g', '100g 冰块', '中细研磨 (550µm)'],
      ],
    },
    { type: 'title', text: '冲煮建议与技巧', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>水温控制：</strong> 浅烘焙建议 92°C-96°C 以释放花果香气，深烘焙建议 80°C-85°C 避免过萃焦苦。',
        '<strong>匀速缓慢下压：</strong> 保持 20 至 30 秒平稳下压，防止粉层通道效应。',
        '<strong>润湿滤纸：</strong> 预先用热水冲洗滤纸以消除纸浆气味并紧贴滤盖。',
        '<strong>听声即停：</strong> 当听到空气穿透粉层的嘶嘶声时立即停止下压。',
      ],
    },
    {
      type: 'summary',
      title: '要点总结',
      items: [
        '根据浸泡时间精确匹配研磨度。',
        '当目标容量超出粉筒时使用旁路计算。',
        '保持水温与时间一致以实现稳定品质。',
      ],
    },
  ],
  faq,
  faqTitle: '关于爱乐压粉水比与冲煮配方的常见问题',
  bibliography,
  bibliographyTitle: '技术参考文献与咖啡科学',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
