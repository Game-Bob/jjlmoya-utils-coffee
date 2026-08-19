import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-coffee-ratio-calculator';
const title = 'コールドブリュー コーヒー比率計算機';
const description = 'コールドブリューに使うコーヒー、抽出水、濃縮液の希釈、浸漬時間、提供量をメートル法またはヤードポンド法で計算します。';

const faqData = [
  { question: 'コールドブリューのコーヒーと水の比率はどれがよいですか？', answer: 'そのまま飲むコールドブリューなら1:8、あとで希釈する濃縮液なら1:5から始めてください。最適な比率はコーヒー、挽き目、時間、提供方法で変わります。' },
  { question: '1リットルのコールドブリューにはコーヒーがどれくらい必要ですか？', answer: '1:8ならコーヒー125グラムと抽出水1,000ミリリットルを使います。計算機は粉に残る水分も推定します。' },
  { question: 'オンスと液量オンスでコールドブリューを計算できますか？', answer: 'はい。Imperialを選ぶとコーヒーをオンス、水を液量オンスで表示します。比率を保つため、内部計算はグラムとミリリットルで行います。' },
  { question: 'そのまま飲むコールドブリューと濃縮液の違いは何ですか？', answer: 'そのまま飲むタイプは提供時の濃さに近くなるよう抽出します。濃縮液は水量に対してコーヒーを多く使い、ろ過後に水やミルクと混ぜます。' },
  { question: 'コールドブリューはどのくらい浸漬しますか？', answer: '冷蔵庫または涼しい室内で、完全浸漬なら12から18時間を出発点にしてください。長すぎると苦味や渋みが強くなることがあります。' },
  { question: '粉に残る水分は計算に含まれますか？', answer: 'はい。抽出量の推定では、コーヒー1グラムあたり約2ミリリットルの保持水を差し引きます。フィルター、挽き目、排出時間によって実際の量は変わります。' },
  { question: 'この計算機は食品安全のガイドですか？', answer: 'いいえ。レシピの分量だけを計算します。清潔な器具を使い、必要に応じて冷却し、保存と提供について最新の指針に従ってください。' },
];

const howToData = [
  { name: '抽出スタイルを選ぶ', text: 'すぐに提供するならReady to drink、あとで水やミルクを加えるならConcentrateを選びます。' },
  { name: '抽出水を設定する', text: '抽出容器に入れる水の量を入力します。計算機が水量と選択した比率からコーヒー量を調整します。' },
  { name: '比率を調整する', text: 'プリセットを選ぶか比率スライダーを動かします。数字が小さいほど濃く、大きいほど軽い仕上がりになります。' },
  { name: '時間と希釈を設定する', text: '時間は計画の目安として使います。濃縮モードでは抽出したコーヒー1に対して加える水の量を設定します。' },
  { name: 'バッチカードに従う', text: 'フローと手順を使ってコーヒーを量り、水を加え、浸漬し、ろ過し、推定提供量を希釈します。' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' };

const seo: SEOSection[] = [
  { type: 'title', text: 'コールドブリューの比率とバッチ計画', level: 2 },
  { type: 'paragraph', html: 'コーヒーの質量、抽出水、希釈、浸漬時間を別々に扱うと、コールドブリューを再現しやすくなります。この計算機は選んだスタイルを計量できるレシピに変換します。' },
  { type: 'title', text: 'そのまま飲むタイプと濃縮液を選ぶ', level: 2 },
  { type: 'paragraph', html: 'そのまま飲むレシピは提供時の濃さに近く抽出します。濃縮液は濃い比率で抽出し、ろ過後に水を加えます。' },
  { type: 'table', headers: ['スタイル', '開始比率', '希釈', '用途'], rows: [['そのまま飲む', '1:8', 'なし', '冷やして、または氷で提供'], ['軽めのバッチ', '1:10', 'なし', '毎日飲みやすい軽い一杯'], ['濃縮液', '1:5', '1:1', '水やミルクと混ぜる']] },
  { type: 'title', text: 'コールドブリューの計算方法', level: 2 },
  { type: 'list', items: ['コーヒー量は抽出水を選択した比率で割って求めます。', '抽出後の量は、コーヒー1グラムあたり約2ミリリットルの保持水を差し引いて推定します。', '濃縮液の希釈量は抽出後の量を基準にして、提供量をわかりやすく示します。'] },
  { type: 'title', text: 'コールドブリューのメートル法とヤードポンド法', level: 2 },
  { type: 'paragraph', html: 'メートル法ではグラムとミリリットル、ヤードポンド法ではオンスと液量オンスを選べます。質量と体積の関係はどちらでも保たれます。' },
  { type: 'table', headers: ['測定項目', 'メートル法', 'ヤードポンド法'], rows: [['コーヒー量', 'g', 'oz'], ['水と抽出量', 'ml', 'fl oz'], ['抽出比率', 'コーヒー1部', 'コーヒー1部']] },
  { type: 'tip', title: '結果は最初のレシピとして使う', html: '<p>豆の産地、挽き目、フィルター、温度、排出時間で抽出と収量は変わります。最初のバッチを味見し、一度に一つの条件を調整してください。</p>' },
  { type: 'title', text: '浸漬時間と食品安全', level: 2 },
  { type: 'paragraph', html: '時間スライダーはレシピ計画の目安であり、味や安全性を保証するものではありません。清潔な器具を使い、冷却、保存、提供について最新の指針に従ってください。' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'コールドブリューの質問', faq: faqData, bibliographyTitle: 'コーヒー抽出の参考資料', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'バッチを作る', modeReady: 'そのまま飲む', modeReadyHint: '抽出して提供', modeConcentrate: '濃縮液', modeConcentrateHint: '抽出して希釈', unitSystemLabel: '単位系', unitMetric: 'メートル法', unitImperial: 'ヤードポンド法', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'プロファイルを選ぶ', presetClassic: 'クラシック 1:8', presetSmooth: 'スムース 1:10', presetConcentrate: '濃縮液 1:5', presetCustom: 'カスタム', brewWaterLabel: '抽出水', brewWaterHint: '抽出に使う水', ratioLabel: 'コーヒーと水の比率', ratioHint: 'コーヒー1グラムあたりの水', dilutionLabel: '希釈水', dilutionHint: '抽出コーヒー1部あたりの水', steepLabel: '浸漬時間', steepHint: '計画の目安', hoursUnit: '時間', resultTitle: 'バッチの結果', resultBadgeReady: 'そのまま飲む', resultBadgeConcentrate: '濃縮液', coffeeLabel: 'コーヒー粉', brewWaterResultLabel: '抽出水', retainedLabel: '粉が保持', dilutionWaterLabel: '希釈水', servedYieldLabel: '推定提供量', ratioResultLabel: '比率', steepResultLabel: '浸漬', steepStatusShort: '短めの浸漬', steepStatusBalanced: 'バランスのよい浸漬', steepStatusLong: '長めの浸漬', stageCaption: '冷蔵庫に入れられるスムースなバッチ', stageCaptionConcentrate: '希釈を待つ濃い濃縮液', stepsTitle: 'レシピの手順', visualTitle: 'バッチの流れ', visualBrewCaption: '抽出', visualFilterCaption: 'ろ過', visualServeCaption: '提供', visualCoffeeDose: 'コーヒー量', visualWaterInput: '抽出水', visualRetained: '粉が保持', visualServed: '抽出量', visualDilution: '希釈水', stepCoffee: '粗挽きのコーヒーを {coffee} {coffeeUnit} 量ります。', stepWater: '{water} {waterUnit} の水を加え、粉全体を十分に湿らせます。', stepSteep: 'ふたをして約 {hours} 時間浸漬します。', stepDilute: 'ろ過後、希釈水 {water} {waterUnit} を加えます。', stepServe: '冷やして約 {yield} {waterUnit} を提供します。', noteTitle: '便利な目安', noteText: 'ろ過中にコーヒー粉が水分を保持します。推定値なので、最初のバッチで使うフィルターと排出方法を調整してください。', copyRecipe: 'レシピをコピー', copiedText: 'レシピをコピーしました', resetText: 'リセット', copyTemplate: 'コールドブリューレシピ\nコーヒー: {coffee} {coffeeUnit}\n抽出水: {brewWater} {waterUnit}\n比率: 1:{ratio}\n浸漬: {hours} 時間\n希釈水: {dilutionWater} {waterUnit}\n推定提供量: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: '参考資料',
  },
};
