import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'coffee',
  title: '精品咖啡爱好者的工具与计算器',
  description:
    '通过免费的在线工具提升您的咖啡仪式。冲煮比例计算器、咖啡师计时器、SCA 水质矿化及研磨度转换工具。',
  seo: [
    {
      type: 'title',
      text: '咖啡工程：完美杯测后的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '精品咖啡已从一种饮料演变为一门技术研究领域。在本栏目中，我们为追求极致萃取再现性的咖啡师、烘焙师和居家冲煮者提供了一套<strong>免费在线工具</strong>。冲泡出一杯好咖啡是比例、水化学和时间精度的综合体现。',
    },
    {
      type: 'paragraph',
      html: '从冲煮比例的精确计算到科学的水质矿化，再到研磨度的技术管理，我们的实用工具将帮助您理解<strong>为什么</strong>您的咖啡呈现出这样的风味，以及如何系统地进行改进。',
    },
    {
      type: 'title',
      text: '比例精度：权威冲煮比例 (Brew Ratio) 计算器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '良好萃取的基础是咖啡与水的比例。我们的<strong>冲煮比例计算器</strong>可让您根据行业标准比例（轻盈感为 1:15，更高清晰度为 1:17）获取特定水量所需的精确咖啡克数，反之亦然。它还包含预计吸水量计算，让您确切知道杯中实际能得到多少咖啡液。',
    },
    {
      type: 'title',
      text: '时间控制：带注水阶段提醒的咖啡师计时器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在手冲咖啡（V60、Chemex、AeroPress）中，接触时间至关重要。我们的<strong>专用计时器</strong>通过对预浸泡（闷蒸，Bloom）阶段和后续注水阶段的视觉提示，帮助您保持节奏，确保每次冲煮都能获得均匀且受控的萃取。',
    },
    {
      type: 'title',
      text: '水化学：遵循 SCA 标准的矿化调整',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '咖啡中 98% 都是水。蒸馏水或硬度过高的水会破坏高品质风味的萃取。<strong>SCA 水质计算器</strong>可帮助您基于纯水设计自己的矿化水，计算所需的镁、钙和碳酸氢盐毫克数，以达到理想的硬度和碱度平衡。',
    },
    {
      type: 'title',
      text: '研磨变量：转换器与对比表',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '每种萃取方法都需要不同的颗粒大小。<strong>研磨转换器</strong>提供了调整磨豆机（无论是刻度还是步骤）的技术指南，适用于不同方法（意式浓缩、手冲、法压）及市场上流行的磨豆机，让您在不同风味曲线之间轻松转换。',
    },
    {
      type: 'list',
      items: [
        '<strong>全方位可重复性：</strong>记录您的变量，复制昨天那一杯极佳的风味。',
        '<strong>资源优化：</strong>避免因称重误差或比例错误而浪费昂贵的精品咖啡豆。',
        '<strong>SCA 准则：</strong>工具与精品咖啡协会 (SCA) 标准保持一致，实现专业级的咖啡品质。',
        '<strong>配方隐私：</strong>您的比例和研磨设置在您的设备本地处理。',
      ],
    },
    {
      type: 'tip',
      title: '咖啡师萃取小贴士',
      html: '<p><strong>闷蒸 (Bloom) 的重要性：</strong>使用约为咖啡粉重两倍的水量进行 30-45 秒的预浸泡（闷蒸），可以释放新鲜咖啡豆中包裹的二氧化碳。这能防止产生通道效应 (channeling)，并确保后续注水能均匀地萃取咖啡中的油脂和可溶性物质。</p>',
    },
    {
      type: 'title',
      text: '咖啡热力学：临界温度与冷却',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '水温是大多数错误的起始点。95°C 的水萃取的化合物与 88°C 的水完全不同。水温过高 (&gt;96°C) 会导致过度萃取，产生干涩的苦味。水温过低 (&lt;87°C) 则会导致萃取不足，使饮品口感平淡、毫无特色。大多数咖啡的最佳温度区间在 90-94°C，可根据烘焙程度进行调整（浅烘偏好高温，深烘偏好低温）。',
    },
    {
      type: 'title',
      text: '研磨一致性：双峰性与细粉 (Fines)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '调校良好的磨豆机能产生大小一致的颗粒。调校不佳或磨损的磨豆机会产生“双峰性”：即大部分是大颗粒，“同时也”混有极细的粉末（细粉）。细粉萃取极快（产生苦味），而大颗粒萃取较慢（产生涩味）。结果是即便使用了正确的方法和时间，咖啡风味依然不均衡。',
    },
    {
      type: 'title',
      text: '杯测与评分：科学的风味剖面',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '专业杯测师使用“SCA 协议”（精品咖啡协会）在 100 分制量表上对咖啡进行评分。维度包括：干/湿香气、风味、余韵、酸质、体脂感、平衡度、一致性、干净度和综合评价。评分在 85+ 的咖啡被称为“精品咖啡”。这种标准化使得不同原产地、烘焙商和冲煮方法之间能够进行客观比较。',
    },
    {
      type: 'title',
      text: '2026 年的居家冲煮趋势',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '到 2026 年，技术已经让高精度设备得以普及。但设备离不开知识的加持。这些工具是赋能您物理配件的技术大脑，让您能够以曾经仅限杯测实验室享有的科学严谨性，去探索咖啡的感官复杂性。',
    },
    {
      type: 'stats',
      items: [
        { label: '比例', value: '精确 1:15-1:18', icon: 'mdi:water-outline' },
        { label: '水质', value: 'SCA 标准', icon: 'mdi:flask-outline' },
        { label: '时间', value: '闷蒸同步', icon: 'mdi:timer-outline' },
        { label: '研磨', value: '微米级校验', icon: 'mdi:cog-transfer' },
      ],
      columns: 4,
    },
  ],
};
