import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'coffee-brew-ratio-calculator';
const title = 'コーヒー粉水比（ブリューレシオ）計算機';
const description =
  '理想の比率（1:15、1:16...）に合わせて、必要なコーヒー粉（g）や湯量（ml）を正確に計算します。出来上がり量、抽出ガイド、アイスコーヒーモード、レシピ保存機能付き。';

const faqData = [
  {
    question: 'コーヒーの粉水比 1:15 とは何ですか？',
    answer:
      'コーヒー粉 1g に対して 15ml（または g）のお湯を使用することを意味します。コーヒー粉 20g の場合、300ml のお湯を注ぎます。これは、V60、ケメックス、エアロプレスなどの透過法（フィルター）に対して、スペシャルティコーヒー協会（SCA）が推奨している標準的な比率です。',
  },
  {
    question: '注いだ量よりも、カップの中のコーヒーが少なくなるのはなぜですか？',
    answer:
      'コーヒー粉は抽出中に水分を保持するためです。平均して、コーヒー粉 1g あたり約 2ml の液体を吸収します。20g のコーヒー粉に 300ml のお湯を注ぐと、カップには約 260ml のコーヒーが残ります。この計算機では、実際の出来上がり量を表示します。',
  },
  {
    question: '蒸らし（ブルーム）とは何ですか？',
    answer:
      'コーヒー粉の重さの 2 倍（1g あたり 2ml）のお湯を最初に注ぐステップのことです。これは新鮮なコーヒーからガスを抜くために行われます。焙煎中に閉じ込められた二酸化炭素を逃がすことで、お湯がコーヒーの成分を均一に抽出できるようになります。蒸らし中に膨らまない場合は、粉砕または焙煎から時間が経過している可能性があります。',
  },
  {
    question: '味が薄くならないアイスコーヒーの作り方は？',
    answer:
      '「急冷式（フラッシュ・チリング）」というテクニックを使います。全湯量の 60% を 90〜96 度の熱湯で用意し、残り 40% は氷としてサーバーに入れておきます。その氷の上に直接熱いコーヒーを抽出します。急速に冷やすことで、香りを閉じ込めることができます。アイスコーヒーモードを有効にすると、この計算機は自動的に比率を再計算します。',
  },
  {
    question: 'エアロプレスに最適な比率は？',
    answer:
      '用途によりますが、1:12 から 1:15 の間が適しています。ブラックで飲むなら 1:15 がバランスが良いです。ミルクメニューのベースとして使う場合や、より濃厚にしたい場合は 1:12 や 1:13 に下げましょう。エアロプレスは様々な比率に対応できる、非常に汎用性の高い器具です。',
  },
  {
    question: 'お気に入りのレシピを保存できますか？',
    answer:
      'はい。お気に入りのコーヒーにぴったりの比率と量が見つかったら、「レシピを保存」ボタンを押して名前（例：朝の V60）を付ければ、ブラウザに保存され、いつでもクリック一つで呼び出すことができます。',
  },
];

const howToData = [
  {
    name: '計算モードを選択する',
    text: '手元にあるコーヒー粉の量から計算するか、カップの容量（お湯の量）から計算するかを選択します。計算機は選択したモードに従ってすべての結果を調整します。',
  },
  {
    name: '数値を入力する',
    text: '使用するコーヒー粉（g）またはお湯（ml）を入力します。選択した比率に基づいて、もう一方の値が自動的に計算されます。',
  },
  {
    name: '濃さを選択する',
    text: '強め (1:12-14)、バランス (1:15-16)、軽め (1:17-18) から選ぶか、カスタム比率を入力します。各オプションは異なる風味プロファイルに対応しています。',
  },
  {
    name: 'アイスコーヒーモードを有効にする（任意）',
    text: 'アイスコーヒーを作る場合は、スイッチをオンにします。急冷式に基づき、お湯(60%)と氷(40%)の割合を自動的に計算して振り分けます。',
  },
  {
    name: '抽出ガイドに従う',
    text: 'フェーズガイド（蒸らしと最終注ぎ）を使って抽出プロセスを構築しましょう。各フェーズでどのお湯をいつ注ぐかが正確に指示されます。',
  },
  {
    name: 'レシピを保存する',
    text: '完璧な比率が見つかったら、わかりやすい名前で保存しましょう。保存されたレシピは後のセッションでもブラウザから呼び出せます。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '粉水比（ブリューレシオ）に関するよくある質問',
  faq: faqData,
  bibliographyTitle: 'テクニカルリファレンスと SCA 基準',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'コーヒー粉水比計算機：完璧な抽出のためのマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペシャルティコーヒーを淹れることは、主観的な料理行為ではなく、<strong>流体化学</strong>と<strong>質量移動</strong>の実験です。そのプロセスの核心にあるのが、溶質（コーヒー粉）と溶媒（水）の定量的な関係を示す、<strong>粉水比（ブリューレシオ）</strong>という重要な概念です。当計算機は、<em>スペシャルティコーヒー協会（SCA）</em>の基準と応用熱力学の原理を統合し、バリスタや愛好家が抽出において完璧な再現性を実現できるよう支援します。',
    },
    {
      type: 'summary',
      title: 'コーヒー粉水比について学べる内容',
      items: [
        '<strong>粉水比：</strong> コーヒーと水の重量関係（例：1:15）が、カップの潜在的な強さと風味プロファイルをどのように決定するか。',
        '<strong>TDS と抽出：</strong> 溶解固形物の背後にある科学と、豆の何パーセントが実際にカップの中に含まれるべきか。',
        '<strong>吸水率の調整：</strong> コーヒー粉 1g あたり 2g の水を吸収する理由と、必要な追加の湯量の計算方法。',
        '<strong>特定の抽出法：</strong> V60、フレンチプレス、エスプレッソ、急冷式アイスコーヒーのレシピに最適な比率。',
      ],
    },
    {
      type: 'title',
      text: '粉水比とは何か、そしてなぜそれが最も重要な変数なのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'コーヒーには約 30% の可溶性成分が含まれていますが、そのすべてが人間の味覚に好ましいわけではありません。水は万能溶媒として機能し、分子量や化学的親和性に基づいて特定の順序で化合物を抽出します。粉水比は、コーヒー粉 1g に対してどれだけの溶解能力を割り当てるかを正確に制御します。',
    },
    {
      type: 'list',
      items: [
        '<strong>酸味のフェーズ（脂質と有機酸）：</strong> これらは溶解度が高いため、最初に溶け出します。明るさ、リンゴ酸やクエン酸、フルーティーなノートをもたらします。比率が低すぎる（未抽出）とここでプロセスが止まり、酸っぱくてしょっぱいカップになります。',
        '<strong>甘味のフェーズ（糖分と炭水化物）：</strong> 次に抽出されます。バランス、甘味、ボディを生み出します。これはコーヒーが香りの複雑さと構造的なバランスの頂点に達する「黄金の窓」です。',
        '<strong>苦味のフェーズ（繊維とフェノール化合物）：</strong> 最も溶け出すのが遅いです。過剰な比率（過抽出）になると、水がコーヒー細胞を分解し、不快な苦味、灰、木のようなノートを抽出してしまいます。',
      ],
    },
    {
      type: 'title',
      text: '推奨比率：抽出メソッド別の割合',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '各抽出メソッドは、接触時間、ポンプ圧力、フィルターの穴のサイズなどの変数のために、特定の比率を必要とします。次の技術表は、2026 年時点の業界標準の概要です。',
    },
    {
      type: 'table',
      headers: ['抽出メソッド', '比率（粉：湯）', 'カップのプロファイル', '目標時間'],
      rows: [
        ['エスプレッソ', '1:2 〜 1:2.5', '強烈、粘性、濃密なクレマ', '25-30 秒'],
        ['V60 / ハンドドリップ', '1:15 〜 1:16', 'クリーン、明るい、クリアなノート', '2:30-3:30 分'],
        ['エアロプレス', '1:12 〜 1:15', '多用途、中〜高ボディ', '1:30-2:00 分'],
        ['フレンチプレス', '1:12 〜 1:14', '質感がある、重低音、オイル感', '4:00-5:00 分'],
        ['コールドブリュー', '1:8 〜 1:12', '甘い、低酸味、豊かなボディ', '12-24 時間'],
      ],
    },
    {
      type: 'title',
      text: '必要な湯量の計算：豆の吸水係数（リテンション係数）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ハンドドリップにおける最も一般的な間違いの一つは、コーヒー粉が多孔質の親水性構造であり、一定量の水分を保持することを無視することです。注いだすべてのお湯がカップに入るわけではありません。',
    },
    {
      type: 'paragraph',
      html: '科学的には、コーヒー粉は <strong>コーヒー粉 1.0g あたり約 2.0g の水</strong>を保持します。当計算機では<strong>動的吸水調整（Dynamic Retention Adjustment）</strong>を導入しています。特定の 300ml の容器を一杯にしたい場合、システムが豆の吸水分を補うために 340ml のお湯が必要であることを導き出し、抽出比率、つまり味わいを損なうことなく維持します。',
    },
    {
      type: 'stats',
      items: [
        { label: 'コーヒー粉量', value: '20g', icon: 'mdi:coffee' },
        { label: '総湯量', value: '300ml', icon: 'mdi:water' },
        { label: '吸水量', value: '40ml', icon: 'mdi:minus-circle' },
        { label: '出来上がり量', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: '蒸らし（ブルーム）の重要性：均一な抽出のためのガス抜き',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '「蒸らし」フェーズは単なる見た目のためだけではなく、物理的な必要性です。焙煎中、コーヒー細胞のマトリックス内に閉じ込められた二酸化炭素が発生します。お湯を一気に注ぎ続けると、ガスが激しく抜け、通り道（チャネリング）を作ってしまい、お湯がコーヒー粒子の中央まで浸透するのを妨げてしまいます。',
    },
    {
      type: 'tip',
      title: '均質飽和テクニック',
      html: '<p>完璧な蒸らしのために、コーヒー粉の重さの 2 倍のお湯を注いでください（1:2 蒸らし比）。優しく攪拌するかサーバーを回して、すべての粉が濡れていることを確認します。30〜45 秒待ちます。ガスが抜けることで、その後の注ぎが層流となって流れ、コーヒーベッド全体から均一に固形成分を抽出できるようになります。</p>',
    },
    {
      type: 'title',
      text: 'アイスコーヒーチュートリアル：味を薄めずにアイスコーヒーを淹れる方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペシャルティアイスコーヒー（急冷式）には、熱力学的な再調整が必要です。目標は、香りの複雑さを捉えるために 94°C で揮発性オイルを抽出し、その後、酸化と明るさの喪失を避けるために急速に冷却することです。',
    },
    {
      type: 'list',
      items: [
        '<strong>60% の熱湯：</strong> 過抽出やコーヒーベッドの急激な冷却を避けつつ、18〜20% の抽出率を達成するために必要な最小限の量。',
        '<strong>40% の氷：</strong> 受け側のサーバーに入れます。コーヒーの熱エネルギーが氷に伝わり（融解潜熱）、飲み物を瞬時に 5°C 以下まで冷却します。',
        '<strong>最終的な濃度：</strong> これらを組み合わせることで、最終的な比率（例：1:15）は正確に保たれ、適切な濃度で鮮やかな冷たい飲み物が出来上がります。',
      ],
    },
    {
      type: 'title',
      text: '挽き具合と粉水比：接触表面積の鍵',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '比率は方程式の半分に過ぎません。挽き具合は、お湯に対する<strong>総露出表面積</strong>を決定します。粒子が小さい（細挽き）ほど比表面積が大きくなり、化学化合物の抽出が劇的に加速されます。',
    },
    {
      type: 'title',
      text: '再現性と科学：キッチンをバリスタのラボに',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペシャルティコーヒーにおける卓越性は、測定の積み重ねから生まれます。<strong>「カスタムレシピ」</strong>機能を使用すると、成功した調整の技術的リポジトリを作成できます。これは単なるお気に入りフォルダではなく、同じ 1kg のコーヒーが 1:15 対 1:16 の比率にどのように反応するかを比較するための分析ツールであり、レシピを正確に調整することができます。',
    },
  ],
  ui: {
    modeCoffee: '粉の量から計算',
    modeHintCoffee: '必要なお湯の量を教えて',
    modeWater: '湯量から計算',
    modeHintWater: '必要な粉の量を教えて',
    inputLabelCoffee: '手元にあるコーヒー粉の重さ (g)',
    inputLabelWater: '作りたい量 / カップ容量 (ml)',
    intensityLabel: 'コーヒーの濃さ',
    intensityStrong: '強め',
    intensityBalanced: 'バランス',
    intensityLight: '軽め',
    intensityCustom: 'カスタム',
    customCoffeeLabel: 'コーヒー粉',
    customWaterLabel: 'お湯',
    icedModeLabel: 'アイスコーヒーモード',
    recipeLabel: '正確なレシピ',
    resultTitle: '計算結果',
    resultCoffeeLabel: 'コーヒー粉',
    resultCoffeeSub: '中細挽き',
    resultHotWaterLabel: 'お湯',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'お湯 (60%)',
    resultIceLabel: '氷',
    resultIceSub: 'サーバーに入れる',
    resultCupLabel: '出来上がり量',
    resultCupSub: '粉が湯を約 2ml/g 吸収',
    pouringGuideLabel: '抽出プロセス',
    favoritesLabel: 'マイレシピ',
    saveBtn: '+ レシピを保存',
    favEmptyText: '保存されたレシピはまだありません。完璧な一杯を淹れて保存しましょう。',
    modalTitle: 'レシピの名前',
    modalPlaceholder: '例：「朝の V60」',
    modalCancel: 'キャンセル',
    modalConfirm: '保存',
    phaseBloomTemplate: '蒸らし：{bloomMl} ml のお湯を「の」の字を描くように注ぎます。コーヒーのガスを抜くため {bloomSeconds} 秒待ちます。',
    phasePourTemplate: '抽出：残りの量を {pourCount} 回に分けてゆっくり注ぎ、合計 {hotWaterMl} ml にします。',
    phaseIcedTemplate: 'アイス：熱いコーヒーを直接サーバー内の {iceMl} g の氷の上に抽出します。',
    cupWarningTemplate: 'カップには {inCupMl} ml しか残りません。粉が湯を吸収するためです。',
    favModeCoffee: 'g 粉',
    favModeWater: 'ml 湯',
    favModeIced: ' - アイス',
  },
};
