import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-coffee-ratio-calculator';
const title = '冷萃咖啡比例计算器';
const description = '用公制或英制单位计算冷萃咖啡所需的咖啡、水、浓缩液稀释量、浸泡时间和预计出杯量。';

const faqData = [
  { question: '冷萃咖啡应该使用什么咖啡和水的比例？', answer: '直接饮用的冷萃可以从1:8开始，需要稀释的浓缩液可以从1:5开始。合适的比例取决于咖啡、研磨度、时间和饮用方式。' },
  { question: '制作1升冷萃咖啡需要多少咖啡？', answer: '按1:8的比例，使用125克咖啡和1,000毫升冲泡水。计算器还会估算咖啡粉中保留的水量。' },
  { question: '可以用盎司和液量盎司计算冷萃吗？', answer: '可以。选择Imperial后，咖啡会显示为盎司，水会显示为液量盎司。为保持比例一致，底层计算仍使用克和毫升。' },
  { question: '直接饮用的冷萃和浓缩液有什么区别？', answer: '直接饮用的冷萃会冲泡到接近饮用浓度。浓缩液在相同水量下使用更多咖啡，过滤后再与水或牛奶混合。' },
  { question: '冷萃咖啡应该浸泡多久？', answer: '在冰箱或凉爽室内采用完全浸泡时，可以从12到18小时开始。时间过长可能增加苦味或涩感。' },
  { question: '计算器会考虑咖啡粉中保留的水吗？', answer: '会。计算器按每克咖啡约保留2毫升水来估算出液量。滤器、研磨度和沥干时间都会改变实际结果。' },
  { question: '这个计算器是食品安全指南吗？', answer: '不是。它只计算配方用量。请使用清洁设备，必要时冷藏饮品，并遵循最新的储存和供应建议。' },
];

const howToData = [
  { name: '选择冲泡方式', text: '要直接饮用请选择准备即饮，要之后加入水或牛奶请选择浓缩液。' },
  { name: '设置冲泡水量', text: '输入冲泡容器中的水量。计算器会根据水量和所选比例调整咖啡用量。' },
  { name: '调整比例', text: '选择预设，或移动比例滑块。数字越小味道越浓，数字越大味道越轻。' },
  { name: '设置浸泡时间和稀释量', text: '将时间滑块作为计划参考。在浓缩液模式中，设置每一份冲泡咖啡需要加入的水量。' },
  { name: '按照批次卡操作', text: '按照流程和步骤称量咖啡、加水、浸泡、过滤，并稀释预计的出杯量。' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };

const seo: SEOSection[] = [
  { type: 'title', text: '冷萃咖啡比例和批次规划', level: 2 },
  { type: 'paragraph', html: '将咖啡质量、冲泡水量、稀释量和浸泡时间分别控制，冷萃咖啡会更容易重复制作。这个计算器会把选择的风格转换成可称量的批次配方。' },
  { type: 'title', text: '选择直接饮用或浓缩液', level: 2 },
  { type: 'paragraph', html: '直接饮用的配方会冲泡到接近饮用浓度。浓缩液使用更高的咖啡比例，过滤后再加入水。' },
  { type: 'table', headers: ['风格', '起始比例', '稀释', '用途'], rows: [['直接饮用', '1:8', '无', '冷藏或加冰饮用'], ['柔和批次', '1:10', '无', '更轻盈的日常咖啡'], ['浓缩液', '1:5', '1:1', '与水或牛奶混合']] },
  { type: 'title', text: '冷萃咖啡计算方式', level: 2 },
  { type: 'list', items: ['咖啡用量等于冲泡水量除以所选比例。', '冲泡后的出液量会扣除每克咖啡约2毫升的保留水量后进行估算。', '浓缩液稀释量根据冲泡后的出液量计算，让最终饮用量更清晰。'] },
  { type: 'title', text: '冷萃咖啡的公制和英制单位', level: 2 },
  { type: 'paragraph', html: '公制配方可以选择克和毫升，英制配方可以选择盎司和液量盎司。质量和体积之间的比例关系会保持一致。' },
  { type: 'table', headers: ['测量项目', '公制', '英制'], rows: [['咖啡用量', 'g', 'oz'], ['水和出液量', 'ml', 'fl oz'], ['冲泡比例', '1份咖啡', '1份咖啡']] },
  { type: 'tip', title: '把结果作为起始配方', html: '<p>咖啡产地、研磨度、滤器、温度和沥干时间都会改变萃取和出液量。先品尝第一批，再一次只调整一个变量。</p>' },
  { type: 'title', text: '冷萃浸泡时间和食品安全', level: 2 },
  { type: 'paragraph', html: '时间滑块用于规划配方，并不保证味道或安全。请使用清洁设备，并遵循最新的冷却、储存和供应建议。' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: '冷萃咖啡常见问题', faq: faqData, bibliographyTitle: '咖啡冲泡参考资料', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: '制作批次', modeReady: '直接饮用', modeReadyHint: '冲泡并饮用', modeConcentrate: '浓缩液', modeConcentrateHint: '冲泡后稀释', unitSystemLabel: '计量系统', unitMetric: '公制', unitImperial: '英制', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: '从一个配置开始', presetClassic: '经典 1:8', presetSmooth: '柔和 1:10', presetConcentrate: '浓缩液 1:5', presetCustom: '自定义', brewWaterLabel: '冲泡水', brewWaterHint: '用于冲泡的水', ratioLabel: '咖啡和水的比例', ratioHint: '每克咖啡对应的水量', dilutionLabel: '稀释水', dilutionHint: '每份冲泡咖啡对应的水量', steepLabel: '浸泡时间', steepHint: '计划参考范围', hoursUnit: '小时', resultTitle: '你的批次', resultBadgeReady: '直接饮用', resultBadgeConcentrate: '浓缩液', coffeeLabel: '咖啡粉', brewWaterResultLabel: '冲泡水', retainedLabel: '咖啡粉保留', dilutionWaterLabel: '稀释水', servedYieldLabel: '预计出杯量', ratioResultLabel: '比例', steepResultLabel: '浸泡', steepStatusShort: '短时间浸泡', steepStatusBalanced: '平衡浸泡', steepStatusLong: '长时间浸泡', stageCaption: '适合放入冰箱的柔和批次', stageCaptionConcentrate: '等待稀释的浓郁浓缩液', stepsTitle: '配方步骤', visualTitle: '批次流程', visualBrewCaption: '冲泡', visualFilterCaption: '过滤', visualServeCaption: '饮用', visualCoffeeDose: '咖啡用量', visualWaterInput: '冲泡水', visualRetained: '咖啡粉保留', visualServed: '冲泡出液量', visualDilution: '稀释水', stepCoffee: '称取 {coffee} {coffeeUnit} 粗研磨咖啡。', stepWater: '加入 {water} {waterUnit} 水，让咖啡粉完全浸湿。', stepSteep: '盖好并浸泡约 {hours} 小时。', stepDilute: '过滤后加入 {water} {waterUnit} 稀释水。', stepServe: '冷却后饮用约 {yield} {waterUnit}。', noteTitle: '实用估算', noteText: '过滤时咖啡粉会保留水分。这个数值是估算值，请用第一批校准自己的滤器和沥干方式。', copyRecipe: '复制配方', copiedText: '配方已复制', resetText: '重置', copyTemplate: '冷萃咖啡配方\n咖啡: {coffee} {coffeeUnit}\n冲泡水: {brewWater} {waterUnit}\n比例: 1:{ratio}\n浸泡: {hours} 小时\n稀释水: {dilutionWater} {waterUnit}\n预计出杯量: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: '参考资料',
  },
};
