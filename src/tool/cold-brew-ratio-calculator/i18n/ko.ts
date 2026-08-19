import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-coffee-ratio-calculator';
const title = '콜드브루 커피 비율 계산기';
const description = '콜드브루에 필요한 커피, 추출 물, 농축액 희석량, 침출 시간과 제공량을 미터법 또는 야드파운드법으로 계산합니다.';

const faqData = [
  { question: '콜드브루에는 어떤 커피와 물 비율을 사용해야 하나요?', answer: '바로 마실 콜드브루는 1:8, 나중에 희석할 농축액은 1:5부터 시작하세요. 적절한 비율은 커피, 분쇄도, 시간과 제공 방식에 따라 달라집니다.' },
  { question: '콜드브루 1리터에는 커피가 얼마나 필요한가요?', answer: '1:8 비율이라면 커피 125그램과 추출 물 1,000밀리리터를 사용하세요. 계산기는 커피 가루에 남는 물도 추정합니다.' },
  { question: '온스와 액량 온스로 콜드브루를 계산할 수 있나요?', answer: '네. Imperial을 선택하면 커피는 온스, 물은 액량 온스로 표시됩니다. 비율을 유지하기 위해 내부 계산은 그램과 밀리리터로 진행됩니다.' },
  { question: '바로 마시는 콜드브루와 농축액의 차이는 무엇인가요?', answer: '바로 마시는 콜드브루는 제공 농도에 가깝게 추출합니다. 농축액은 물의 양에 비해 커피를 더 많이 사용하고 거른 뒤 물이나 우유와 섞습니다.' },
  { question: '콜드브루는 얼마나 오래 침출해야 하나요?', answer: '냉장고나 서늘한 공간에서 완전히 담그는 방식으로 12시간에서 18시간을 시작점으로 사용하세요. 더 오래 두면 쓴맛이나 떫은맛이 강해질 수 있습니다.' },
  { question: '계산기에 커피 가루에 남는 물이 반영되나요?', answer: '네. 추출량을 추정할 때 커피 1그램당 약 2밀리리터의 잔류 수분을 사용합니다. 필터, 분쇄도와 배출 시간에 따라 실제 결과는 달라집니다.' },
  { question: '이 계산기는 식품 안전 가이드인가요?', answer: '아니요. 레시피 양만 계산합니다. 깨끗한 장비를 사용하고 필요하면 음료를 냉장 보관하며 최신 보관 및 제공 지침을 따르세요.' },
];

const howToData = [
  { name: '추출 방식을 선택하세요', text: '바로 제공하려면 바로 마시기를, 나중에 물이나 우유를 더하려면 농축액을 선택하세요.' },
  { name: '추출 물을 정하세요', text: '추출 용기에 넣을 물의 양을 입력하세요. 계산기가 물의 양과 선택한 비율에 맞춰 커피 양을 조정합니다.' },
  { name: '비율을 조정하세요', text: '프로필을 선택하거나 비율 슬라이더를 움직이세요. 숫자가 낮을수록 진하고 높을수록 가벼운 커피가 됩니다.' },
  { name: '시간과 희석량을 정하세요', text: '시간은 계획을 위한 기준으로 사용하세요. 농축액 모드에서는 추출된 커피 한 부분당 넣을 물의 양을 정합니다.' },
  { name: '배치 카드를 따라가세요', text: '흐름과 단계를 보며 커피를 계량하고 물을 넣고 침출한 뒤 여과하고 예상 제공량을 희석하세요.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' };

const seo: SEOSection[] = [
  { type: 'title', text: '콜드브루 비율과 배치 계획', level: 2 },
  { type: 'paragraph', html: '커피의 질량, 추출 물, 희석량과 침출 시간을 따로 조절하면 콜드브루를 더 쉽게 재현할 수 있습니다. 이 계산기는 선택한 스타일을 계량 레시피로 바꿔 줍니다.' },
  { type: 'title', text: '바로 마시기와 농축액 중 선택하기', level: 2 },
  { type: 'paragraph', html: '바로 마시는 레시피는 제공 농도에 가깝게 추출합니다. 농축액은 더 진한 비율을 사용하고 여과 후 물을 더합니다.' },
  { type: 'table', headers: ['스타일', '시작 비율', '희석', '용도'], rows: [['바로 마시기', '1:8', '없음', '차갑게 또는 얼음과 함께 제공'], ['부드러운 배치', '1:10', '없음', '매일 마시기 좋은 가벼운 커피'], ['농축액', '1:5', '1:1', '물이나 우유와 혼합']] },
  { type: 'title', text: '콜드브루 계산 방식', level: 2 },
  { type: 'list', items: ['커피 양은 추출 물을 선택한 비율로 나누어 계산합니다.', '추출량은 커피 1그램당 약 2밀리리터의 잔류 수분을 뺀 뒤 추정합니다.', '농축액 희석량은 추출량을 기준으로 계산해 제공량을 쉽게 확인할 수 있습니다.'] },
  { type: 'title', text: '콜드브루 미터법과 야드파운드법 측정', level: 2 },
  { type: 'paragraph', html: '미터법 레시피에는 그램과 밀리리터를, 야드파운드법 레시피에는 온스와 액량 온스를 선택하세요. 질량과 부피의 관계는 일관되게 유지됩니다.' },
  { type: 'table', headers: ['측정', '미터법', '야드파운드법'], rows: [['커피 양', 'g', 'oz'], ['물과 추출량', 'ml', 'fl oz'], ['추출 비율', '커피 1부분', '커피 1부분']] },
  { type: 'tip', title: '결과를 첫 레시피로 활용하세요', html: '<p>커피 산지, 분쇄도, 필터, 온도와 배출 시간은 추출과 수율을 바꿉니다. 첫 배치를 맛보고 한 번에 한 가지 변수만 바꿔 보세요.</p>' },
  { type: 'title', text: '콜드브루 침출 시간과 식품 안전', level: 2 },
  { type: 'paragraph', html: '시간 슬라이더는 레시피 계획을 위한 도구이며 맛이나 안전을 보장하지 않습니다. 깨끗한 장비를 사용하고 냉각, 보관과 제공에 관한 최신 지침을 따르세요.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: '콜드브루 질문', faq: faqData, bibliographyTitle: '커피 추출 참고 자료', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: '배치 만들기', modeReady: '바로 마시기', modeReadyHint: '추출하고 제공', modeConcentrate: '농축액', modeConcentrateHint: '추출 후 희석', unitSystemLabel: '측정 단위', unitMetric: '미터법', unitImperial: '야드파운드법', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: '프로필로 시작하기', presetClassic: '클래식 1:8', presetSmooth: '부드러운 1:10', presetConcentrate: '농축액 1:5', presetCustom: '사용자 설정', brewWaterLabel: '추출 물', brewWaterHint: '추출에 사용할 물', ratioLabel: '커피와 물의 비율', ratioHint: '커피 1그램당 물', dilutionLabel: '희석 물', dilutionHint: '추출된 커피 1부분당 물', steepLabel: '침출 시간', steepHint: '계획을 위한 범위', hoursUnit: '시간', resultTitle: '내 배치', resultBadgeReady: '바로 마시기', resultBadgeConcentrate: '농축액', coffeeLabel: '분쇄 커피', brewWaterResultLabel: '추출 물', retainedLabel: '커피 가루에 남음', dilutionWaterLabel: '희석 물', servedYieldLabel: '예상 제공량', ratioResultLabel: '비율', steepResultLabel: '침출', steepStatusShort: '짧은 침출', steepStatusBalanced: '균형 잡힌 침출', steepStatusLong: '긴 침출', stageCaption: '냉장고에 넣을 준비가 된 부드러운 배치', stageCaptionConcentrate: '희석을 기다리는 진한 농축액', stepsTitle: '레시피 단계', visualTitle: '배치 흐름', visualBrewCaption: '추출', visualFilterCaption: '여과', visualServeCaption: '제공', visualCoffeeDose: '커피 양', visualWaterInput: '추출 물', visualRetained: '커피 가루에 남음', visualServed: '추출량', visualDilution: '희석 물', stepCoffee: '굵게 분쇄한 커피 {coffee} {coffeeUnit}을 계량하세요.', stepWater: '물 {water} {waterUnit}을 넣고 커피 가루를 완전히 적시세요.', stepSteep: '덮고 약 {hours}시간 침출하세요.', stepDilute: '여과 후 희석 물 {water} {waterUnit}을 넣으세요.', stepServe: '식힌 뒤 약 {yield} {waterUnit}을 제공하세요.', noteTitle: '유용한 추정치', noteText: '커피 가루는 여과 중 물을 머금습니다. 추정값이므로 첫 배치에서 사용하는 필터와 배출 방식을 조정하세요.', copyRecipe: '레시피 복사', copiedText: '레시피를 복사했습니다', resetText: '초기화', copyTemplate: '콜드브루 레시피\n커피: {coffee} {coffeeUnit}\n추출 물: {brewWater} {waterUnit}\n비율: 1:{ratio}\n침출: {hours}시간\n희석 물: {dilutionWater} {waterUnit}\n예상 제공량: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: '참고 자료',
  },
};
