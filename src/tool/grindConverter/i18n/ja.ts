import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-grind-size-converter';
const title = 'コーヒー研磨度（グラインドサイズ）変換器';
const description =
  'エスプレッソ、V60、フレンチプレスなどに合わせてミルを調整するための、クリック数やダイヤル位置のガイド付きインタラクティブチャート。すべての抽出メソッドに対応した技術的なミクロン対応表。';

const faqData = [
  {
    question: 'なぜ同じ研磨設定がすべてのコーヒーに通用しないのですか？',
    answer:
      'コーヒー豆の密度は、焙煎度や産地によって異なるためです。浅煎りは通常密度が高く、適切に抽出するためにはより細かい研磨が必要ですが、深煎りはより多孔質で、粗めの設定が必要になります。',
  },
  {
    question: '細かくすべきか粗くすべきか、どうすればわかりますか？',
    answer:
      '味を基準に判断しましょう。コーヒーが苦く、口当たりが乾燥している（アストリンジェンシーがある）場合は、お湯が早く流れるように粗くします。酸っぱかったり、塩辛かったり、水っぽかったりする場合は、接触表面積を増やすために細かくします。',
  },
  {
    question: '「チャネリング」とは何ですか？研磨度はそれにどう影響しますか？',
    answer:
      'チャネリングとは、お湯がコーヒーの層の中で抵抗の少ない通り道を見つけて流れてしまう現象です。特にエスプレッソにおいて、不均一な研磨や圧力に見合わない研磨設定は、この問題を誘発し抽出を台無しにします。',
  },
  {
    question: 'プロペラ式（カッター式）ミルでこの表を使えますか？',
    answer:
      'プロペラ式ミルは粒子が不均一になりやすく、微粉と大きな塊が同時に発生します。ミクロン値は目安にはなりますが、臼式（バー式）ミルと比較すると実際の結果は大きく異なります。',
  },
  {
    question: '可視化チャートにおけるグラインダーの「均一性」とは？',
    answer:
      '表示されている粒子の分布は、各グラインダーの実際の均一性をシミュレートしたものです。均一性 0.95 の Comandante C40 は非常に安定した粒子を生成しますが、0.40 の Hario Skerton はサイズにかなりばらつきがあることを示しています。',
  },
];

const howToData = [
  {
    name: 'グラインダーを選択する',
    text: 'ドロップダウンリストからお使いのモデルを選択してください。お手持ちの器具に合わせた推奨クリック数やダイヤル位置が表示されます。',
  },
  {
    name: '抽出メソッドを選択する',
    text: '使用予定のメソッドのアイコンをクリックします。コントロールパネルが関連する技術パラメータで更新されます。',
  },
  {
    name: 'ミクロン値を読み取る',
    text: "棒グラフのミクロン（μm）値を確認して、実際の粒度を把握します。触覚的なリファレンス（精製塩、グラニュー糖など）を参考に視覚的に調整してください。",
  },
  {
    name: '粒子のシミュレーションを観察する',
    text: "点の分布は、お使いのグラインダーの典型的な均一性を示しています。パターンが均質であるほど、抽出結果の予測と再現がしやすくなります。",
  },
  {
    name: '味で調整する',
    text: '下部の診断ガイドを参考にしてください。苦みがある場合は数クリック粗く、酸味がある場合は細かくします。常に一度に一歩ずつ調整してください。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'コーヒー研磨度に関するよくある質問',
  faq: faqData,
  bibliographyTitle: '研磨と抽出に関するリファレンス',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '研磨度の物理学：粒子サイズがすべてを変える理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'コーヒーを挽くとき、単に豆を小さくしているだけではありません。水が風味成分を溶かし出すための<strong>接触表面積</strong>を定義しているのです。細かすぎると、お湯が苦み成分を過剰に抽出してしまいます。粗すぎると、お湯が十分な抵抗なく通り抜け、弱くて酸っぱいカップになってしまいます。この変換器は、各メソッドの正確な範囲を提示します。',
    },
    {
      type: 'summary',
      title: '適切な研磨度を決定する要因とは？',
      items: [
        '<strong>抽出メソッド：</strong> 圧力、接触時間、フィルターの種類が、各抽出メソッドの最適なミクロン範囲を規定します。',
        '<strong>研磨の均一性：</strong> 高級な臼式（バー式）ミルは均質な粒子を生成しますが、プロペラ式ミルは微粉と大きな塊を同時に生成してしまいます。',
        '<strong>豆の鮮度：</strong> 焙煎したてのコーヒーは二酸化炭素を多く含んでおり、数週間経過した豆よりもわずかに粗い研磨が必要になる場合があります。',
        '<strong>味のキャリブレーション：</strong> 最終的な判断材料は味覚です。この表は出発点であり、求める風味こそが目的地です。',
      ],
    },
    {
      type: 'table',
      headers: ['メソッド', 'ミクロン (μm)', '触覚的なリファレンス', '接触時間'],
      rows: [
        ['イブリック（トルコ式）', '100-300 μm', '片栗粉 / 非常に細かい小麦粉', '3-5 分（煮沸）'],
        ['エスプレッソ', '300-500 μm', '精製塩', '25-30 秒'],
        ['マキネッタ / エアロプレス', '500-700 μm', '食卓塩', '3-4 分'],
        ['V60 / ペーパードリップ', '700-900 μm', 'グラニュー糖', '2:30-3:15 分'],
        ['ケメックス / クレバー', '900-1200 μm', '粗い砂', '3:30-4:30 分'],
        ['フレンチプレス', '1200-1500 μm', '粗塩', '4 分（浸漬）'],
        ['コールドブリュー', '1500+ μm', '粒胡椒', '12-24 時間（冷水）'],
      ],
    },
    {
      type: 'title',
      text: '新しい豆を試すときの黄金律',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>新しいコーヒー豆を使うときは、常にそのメソッドの推奨範囲の中間点から始めてください。そこから味を参考に、一クリックずつ調整します。グラインダーごとにお気に入りの豆の設定をメモに残し、リファレンスログを構築しましょう。</p>',
    },
  ],
  ui: {
    step1Label: 'ステップ 1：器具の選択',
    step2Label: 'ステップ 2：抽出メソッド',
    gaugeLabel: '技術的な粒子マップ (μm)',
    distributionLabel: '実際の粒子分布',
    refLabel: '触覚リファレンス',
    rangeMicrasLabel: '範囲 μm',
    unitMicras: '目標粒度 (μm)',
    unitClicks: '推奨クリック数',
    unitLevel: '推奨レベル',
    suggestGrinderText: "リストにお使いのミルがありませんか？追加を提案する",
    method0Name: 'イブリック（トルコ式）',
    method0Ref: '片栗粉 / 細かい小麦粉',
    method0Desc: '小麦粉のような極微粉。トルココーヒーの懸濁（けんだく）には不可欠です。',
    method1Name: 'エスプレッソ',
    method1Ref: '精製塩',
    method1Desc: '高圧抽出では、抵抗を作るために非常に細かい研磨が必要です。',
    method2Name: 'マキネッタ / エアロプレス',
    method2Ref: '食卓塩',
    method2Desc: '中圧またはハイブリッド抽出。汎用性が高く、バランスの取れた質感になります。',
    method3Name: 'V60 / ドリップ',
    method3Ref: 'グラニュー糖',
    method3Desc: 'ハンドドリップ。甘味と酸味を際立たせるための標準設定です。',
    method4Name: 'ケメックス / クレバー',
    method4Ref: '粗い砂',
    method4Desc: '厚いフィルターや短時間の浸漬用。一定で安定した流れを必要とします。',
    method5Name: 'フレンチプレス',
    method5Ref: '粗塩',
    method5Desc: '長時間の浸漬には、金属メッシュを通さない大きな粒子が必要です。',
    method6Name: 'コールドブリュー',
    method6Ref: '粒胡椒',
    method6Desc: '長時間かけた水出し抽出には、可能な限り最も粗い研磨設定が必要です。',
    troubleIssue0: '苦い、乾いた感じ、または渋い？',
    troubleSolution0:
      '抽出オーバーです。お湯が早く流れ、苦み成分の抽出を抑えられるよう、より粗く挽いてください。',
    troubleAction0: 'より粗く挽く',
    troubleIssue1: '酸っぱい、塩辛い、または薄い？',
    troubleSolution1:
      '抽出不足です。接触面積を増やし、甘味とボディをより引き出せるよう、より細かく挽いてください。',
    troubleAction1: 'より細かく挽く',
  },
};
