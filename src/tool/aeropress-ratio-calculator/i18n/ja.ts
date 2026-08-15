import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-ratio-calculator';
const title = 'エアロプレス コーヒー 黄金比率とレシピ計算機';
const description = 'エアロプレスの湯量配分、チャンバー容量上限、バイパス希釈、抽出ステップタイマーを精密に計算します。';

const howTo = [
  {
    name: '抽出メソッドとモデルを選択',
    text: '標準抽出またはインバート抽出を選択し、お使いのエアロプレスのモデル（Original、XL、Go）を指定します。',
  },
  {
    name: 'コーヒー粉量と抽出比率を設定',
    text: 'コーヒー粉の重さ（グラム）と目標比率を入力するか、世界大会チャンピオンレシピを選択します。',
  },
  {
    name: 'チャンバー内湯量とバイパス量を確認',
    text: 'レシピが器具の容量を超える場合、カップに直接加えるバイパス湯量を自動計算します。',
  },
  {
    name: 'インタラクティブなフェーズタイマーを開始',
    text: '内蔵タイマーで蒸らし（ブルーム）、抽出浸漬、穏やかなプレスを正確にガイドします。',
  },
];

const faq = [
  {
    question: 'エアロプレスの標準抽出とインバート抽出の違いは何ですか？',
    answer: '標準抽出では器具をカップに直接セットするため、プランジャーを装着するまで微量の透過が起きます。インバート抽出では器具をプランジャーの上に逆さに立てるため、反転させるまで完全な浸漬状態を維持できます。',
  },
  {
    question: 'エアロプレスのバイパス抽出とは何ですか？',
    answer: 'チャンバー内で濃厚な濃縮液を抽出し、カップ内で清潔な熱湯を加えて希釈する手法です。器具の容量を超える大きな杯数を溢れさせずに美味しく淹れることができます。',
  },
  {
    question: 'エアロプレスに最適なコーヒーと湯の比率はどれくらいですか？',
    answer: 'クリアなフィルターコーヒーには1:14から1:17（例：粉11g〜15gに対して湯200g）が黄金比です。濃厚なエスプレッソスタイルには1:4から1:8が適しています。',
  },
  {
    question: '挽き目はエアロプレスの抽出にどのように影響しますか？',
    answer: '中細挽きは1〜2分の短時間抽出に最適です。細挽きはボディ感を強め、粗挽きは長時間の浸漬でも過抽出の苦味を防ぎます。',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'スペシャルティコーヒー ツール',
    profileLabel: '抽出プロファイル',
    unitSystemLabel: '単位系',
    unitMetricLabel: 'メートル法 (g)',
    unitImperialLabel: 'ヤードポンド法 (oz)',
    presetsTitle: 'バリスタ＆世界大会レシピ',
    presetCustom: 'カスタム設定',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe 浅煎り',
    presetWacChamp: 'WAC チャンピオン バイパス',
    presetAlanAdler: 'Alan Adler オリジナル',
    presetIcedBypass: '急冷アイス エアロプレス',
    methodLabel: '抽出テクニック',
    methodStandard: '標準抽出',
    methodInverted: 'インバート抽出',
    modelLabel: 'エアロプレス モデル',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'コーヒー粉量',
    doseUnitMetric: 'グラム',
    doseUnitImperial: 'oz',
    ratioLabel: '抽出比率',
    ratioPrefix: '1:',
    waterTempLabel: '湯温',
    waterTempUnit: '°C',
    grindLabel: '推奨挽き目',
    grindFine: '細挽き',
    grindMediumFine: '中細挽き',
    grindMedium: '中挽き',
    grindCoarse: '粗挽き',
    resultsTitle: '注湯配分と抽出データ',
    statTotalWater: '総湯量',
    statChamberWater: 'チャンバー内湯量',
    statBypassWater: 'バイパス湯量',
    statYield: '出来上がり量',
    statEstimatedTds: '推定TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'バイパス希釈が必要です',
    bypassAlertText: 'このレシピではチャンバー内に{chamber}を注ぎ、カップに直接{bypass}を追加します。',
    timerTitle: 'ステップ タイマー',
    timerStart: 'タイマー開始',
    timerPause: '一時停止',
    timerReset: 'リセット',
    phaseBloom: '蒸らし＆粉の湿潤',
    phasePour: '注湯＆攪拌',
    phaseSteep: '浸漬抽出',
    phasePress: '低圧プレス',
    phaseBypass: 'バイパス湯追加',
    phaseComplete: '抽出完了',
    guideTitle: '抽出ガイド',
    guideStep1Title: 'フィルター湯通しと計量',
    guideStep1Desc: 'キャップにフィルターをセットして湯通しし、挽きたてのコーヒー粉を入れます。',
    guideStep2Title: 'チャンバーに湯を注ぐ',
    guideStep2Desc: '適温の計算された湯量を注ぎ、軽く攪拌して粉全体を均一に馴染ませます。',
    guideStep3Title: 'プランジャーをセットして静置',
    guideStep3Desc: '上部にプランジャーを浅く差し込んで真空状態を作り、規定時間待ちます。',
    guideStep4Title: 'プレスと希釈',
    guideStep4Desc: '20〜30秒かけて一定の力で押し下げます。シューという空気音が鳴ったら止め、バイパス湯を加えます。',
    ratioStrengthLight: '軽やかで繊細',
    ratioStrengthMedium: 'バランスの良い一杯',
    ratioStrengthStrong: '豊かで力強い',
    ratioStrengthConcentrate: 'エスプレッソ濃縮',
    chamberWaterLabel: 'チャンバー内湯量',
    coffeeBedLabel: 'コーヒー粉層',
    airGapLabel: '空気層',
  },
  seo: [
    { type: 'title', text: 'エアロプレスにおける抽出理論と比率の科学', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>エアロプレス</strong>は完全浸漬抽出と空気圧ろ過を融合させた器具です。甘みと透明感に満ちた一杯に仕上げるためには、粉と湯の比率を厳密に管理することが不可欠です。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '器具の限界容量とバイパス抽出の利点',
      html: '標準的なエアロプレスのチャンバーは、粉層の体積を差し引くと約220ml〜240mlの湯が入ります。大容量を抽出する際は、濃縮抽出後に熱湯で薄めるバイパス手法が活用されます。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'フィルター黄金比' },
        { value: '230 ml', label: '標準チャンバー容量' },
        { value: '1.2〜1.5%', label: '目標TDS濃度' },
      ],
    },
    { type: 'title', text: '標準抽出とインバート抽出の比較', level: 3 },
    {
      type: 'paragraph',
      html: '器具の向きによって接触時間と透過の挙動が変化します。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '標準抽出方式',
          description: 'カップの上に直接置きます。プランジャーを装着することで負圧が生じ、初期の過度な透過を防ぎます。',
          points: [
            '安全かつ極めて手軽',
            '注湯直後にわずかな透過あり',
            '高い再現性を誇る定番手法',
          ],
        },
        {
          title: 'インバート抽出方式',
          description: 'プランジャーの上に逆さに立てて抽出するため、反転するまで一切の液漏れがありません。',
          highlight: true,
          points: [
            '浸漬時間を秒単位で完全制御',
            '濃縮液や多めの粉量に最適',
            '反転時の火傷に注意が必要',
          ],
        },
      ],
    },
    { type: 'title', text: '大会レシピに学ぶバイパス希釈の活用法', level: 3 },
    {
      type: 'paragraph',
      html: 'ワールド・エアロプレス・チャンピオンシップ（WAC）では、1:6〜1:8の濃厚な比率で雑味の出る前に抽出し、後からお湯で割るバイパス手法が数多くの優勝をもたらしています。',
    },
    {
      type: 'table',
      headers: ['レシピ名', 'コーヒー粉量', 'チャンバー湯量', 'バイパス湯量', '推奨挽き目'],
      rows: [
        ['ホフマン式フィルター', '11g', '200g', '0g', '中細挽き (600µm)'],
        ['ティム・ウェンデルボー浅煎り', '14g', '200g', '0g', '中挽き (700µm)'],
        ['WAC 優勝バイパス', '30g', '120g', '105g', '粗挽き (900µm)'],
        ['アラン・アドラー原点', '17g', '80g', '100g 任意', '細挽き (450µm)'],
        ['急冷アイスコーヒー', '18g', '150g', '100g 氷', '中細挽き (550µm)'],
      ],
    },
    { type: 'title', text: '上質な一杯のための実践テクニック', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>湯温の調節:</strong> 浅煎りはフルーティさを引き出すため92°C〜96°C、深煎りは苦味を抑えるため80°C〜85°Cに設定します。',
        '<strong>一定の力でゆっくりプレス:</strong> 20〜30秒かけて静かに押し下げることでチャネリングを防ぎます。',
        '<strong>ペーパーの湯通し:</strong> 紙臭さを取り除き、キャップへの密着度を高めます。',
        '<strong>空気音でストップ:</strong> シューという音が鳴った時点でプレスを終え、渋い油分の混入を防ぎます。',
      ],
    },
    {
      type: 'summary',
      title: 'まとめ',
      items: [
        '抽出時間に合わせて挽き目を最適化する。',
        '器具の容量を超える場合はバイパス計算を活用する。',
        '温度と時間を一定に保ち、再現性の高い味を作る。',
      ],
    },
  ],
  faq,
  faqTitle: 'エアロプレスの比率とレシピに関するよくある質問',
  bibliography,
  bibliographyTitle: '技術リファレンスとコーヒーの科学',
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
