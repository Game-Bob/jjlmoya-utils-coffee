import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

const slug = 'sca-coffee-water-calculator';
const title = 'SCA コーヒー水質計算機';
const description =
  'スペシャルティコーヒーのための正確なミネラル濃度を計算します。SCA、Barista Hustle、Hendonの各レシピに対応。マグネシウム、カルシウム、重曹をコントロールして、風味を最大限に引き出し、マシンを保護します。';

const faqData = [
  {
    question: 'SCAの水質基準とは何ですか？',
    answer:
      'スペシャルティコーヒー協会（SCA）は、抽出用水の技術基準を定義しており、総硬度（GH）、アルカリ度（KH）、pH、ナトリウムの最適な範囲を指定しています。これにより、機器を傷めることなく、風味を高めるバランスの取れた抽出を実現します。',
  },
  {
    question: 'なぜ水道水ではいけないのですか？',
    answer:
      '水道水は地域や季節によって大きく異なります。塩素や過剰な石灰、あるいはスペシャルティコーヒーの風味を損なわせ、ボイラーやシールを傷めるミネラルレベルが含まれている場合があります。蒸留水をミネラル化することで、完全なコントロールと再現性のある結果が得られます。',
  },
  {
    question: 'ミネラル塩はどこで入手できますか？',
    answer:
      'エプソムソルト（硫酸マグネシウム）と重曹（炭酸水素ナトリウム）は、薬局やスーパーマーケットで購入できます。塩化カルシウムは、自家醸造用品店などで一般的です。常に食品グレードの品質であることを確認してください。',
  },
  {
    question: 'エスプレッソマシンに使用しても安全ですか？',
    answer:
      'この計算機にはリアルタイムのリスク指標が含まれています。非常に純粋な水は金属部品を腐食させ、非常に硬い水はスケール（石灰）の蓄積を引き起こします。SCA IdealやBarista Hustleのプロファイルは、機器の寿命と味のクオリティを両立させるように設計されています。',
  },
  {
    question: 'コーヒーにおけるマグネシウムとカルシウムの違いは何ですか？',
    answer:
      'マグネシウムはフルーティーで甘い風味成分をより効率的に抽出し、フィルター抽出に好まれるミネラルです。カルシウムはよりコク（ボディ）とシルキーな質感をもたらしますが、時間の経過とともにボイラー内にスケールを形成しやすい傾向があります。',
  },
];

const howToData = [
  {
    name: '純粋なベース水を用意する',
    text: '蒸留水、精製水、または逆浸透（RO）水を購入または用意します。ミネラル化を完全にコントロールするために、TDS 0 ppmから始めるのが目標です。',
  },
  {
    name: '濃縮母液ボトルを作成する',
    text: '各塩を別々に100mlの蒸留水に溶かします：マグネシウム用にエプソムソルト2.46g、カルシウム用に塩化カルシウム1.47g、バッファー（重曹）用に重曹1.68gを使用します。',
  },
  {
    name: 'ターゲットプロファイルを選択する',
    text: 'SCA Ideal（バランス）、Barista Hustle（甘みと明るさ）、Hendon（ボディ）、Melbourne（繊細）から選ぶか、独自のGHとKH値でカスタムプロファイルを作成します。',
  },
  {
    name: '最終的な水量を入力する',
    text: 'ミネラル化したい水の量をリットル単位で入力します。計算機は、その正確な量に合わせて濃縮液の投与量を自動的に調整します。',
  },
  {
    name: '濃縮液を加え、蒸留水で満たす',
    text: '精密シリンジを使用して、指定されたミリリットル数の各濃縮液を容器に加え、最終的な容量まで蒸留水で満たします。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'SCA コーヒー水質計算機に関するよくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンスとSCA基準',
  bibliography: [
    {
      name: 'SCA水質基準',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY Water Recipes Redux',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: 'コーヒー水質の科学 (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: 水の化学とコーヒー',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'コーヒー水質の化学：なぜH₂Oは最も見落とされている成分なのか',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'コーヒーの98〜99％は水です。しかし、その水のミネラル組成は、スペシャルティコーヒーの品質チェーン全体において最も見落とされている要素です。同じエチオピア産のシングルオリジンコーヒーでも、ロンドンの水道水で抽出した場合とSCA最適化水で抽出した場合では、全く別のコーヒーのように感じられます。当サイトの<strong>SCA コーヒー水質計算機</strong>を使えば、一般的なミネラル塩と蒸留水を使用して、完璧な抽出用水をゼロから作成できます。',
    },
    {
      type: 'summary',
      title: 'なぜ水のミネラル化がそれほど重要なのか？',
      items: [
        '<strong>GH（総硬度）：</strong> マグネシウムイオンとカルシウムイオンの合計が、コーヒーの風味成分を溶解する水の能力を決定します。',
        '<strong>KH（炭酸塩硬度）：</strong> 重炭酸塩濃度が抽出中のpHをコントロールします。KHが低いと酸っぱいコーヒーになり、高いと平坦な味になります。',
        '<strong>再現性：</strong> 水道水は季節や場所によって変化します。ミネラル化された水は常に一定で、何度でも同じ結果を再現できます。',
        '<strong>機器の保護：</strong> 適切なミネラルレベルは、腐食（純粋すぎる水）とスケール蓄積（硬すぎる水）の両方を防ぎます。',
      ],
    },
    {
      type: 'title',
      text: 'SCA基準：完璧な抽出用水のための技術的限界',
      level: 2,
    },
    {
      type: 'table',
      headers: ['項目', '最小値', 'SCA理想値', '最大値'],
      rows: [
        ['総硬度 (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['アルカリ度 (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'マグネシウム vs カルシウム：一杯の味を決めるミネラルの戦い',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'すべてのミネラルがコーヒーに対して同じように振る舞うわけではありません。研究者のクリストファー・ヘンドンは、<strong>マグネシウム</strong>が複雑な揮発性風味分子と結合し、フルーティーでフローラルなノートをより効率的に抽出することを実証しました。一方、<strong>カルシウム</strong>はより重い化合物を抽出し、コクとシルキーな口当たりをもたらしますが、アロマの明るさは控えめになります。',
    },
    {
      type: 'tip',
      title: 'プロのバリスタの鉄則',
      html: '<p>真鍮や銅製のボイラーを備えたエスプレッソマシンの場合、KHが40 mg/L未満のプロファイルを継続して使用しないでください。非常に純粋な水は長期的には腐食の原因となります。フィルター抽出（V60、ケメックス、エアロプレスなど）の場合、保護すべきボイラーがないため、メルボルンのような繊細なプロファイルも安心して使用できます。</p>',
    },
  ],
  ui: {
    sectionMixTitle: '配合設定',
    labelVolume: '最終的な水量',
    labelProfile: 'ターゲット水質レシピ',
    customProfileBtn: 'カスタム',
    labelGH: 'ターゲット GH',
    labelKH: 'ターゲット KH',
    concentratesTitle: '濃縮母液ボトル (g/100ml)',
    saltMgName: 'マグネシウム (エプソムソルト)',
    saltCaName: 'カルシウム (塩化カルシウム)',
    saltBufName: 'バッファー (重曹)',
    recipeTitle: 'レシピ',
    labelMg: 'マグネシウム濃縮液:',
    labelCa: 'カルシウム濃縮液:',
    labelBuffer: '重曹濃縮液:',
    labelDistilledWater: '蒸留水で以下まで満たす：',
    copyBtn: 'レシピをコピー',
    copiedText: 'コピーしました！',
    safetyMetalsTitle: '金属安全性',
    safetyScaleTitle: 'スケールリスク',
    calculatingText: '計算中...',
    glossaryTitle: 'ミネラル・クイックガイド',
    profileSubTemplate: 'ターゲット: {gh} GH / {kh} KH',
    customProfileName: 'カスタム',
    corrosionHigh: '危険：非常に攻撃的な水質です。ボイラーや銅製品を腐食させる可能性があります。',
    corrosionMedium: '許容範囲：中程度の腐食リスク。フィルター抽出推奨。マシンでの使用は注意。',
    corrosionLow: '安全：十分なバッファー能力があり、金属を保護します。',
    scaleHigh: '危険：すぐにスケールが蓄積します。手動のフィルター抽出でのみ使用してください。',
    scaleMedium: '注意：エスプレッソマシンにおいて、時間の経過とともにスケールが堆積する可能性があります。',
    scaleLow: '安全：重大なスケール蓄積のリスクはありません。',
    copyTemplate:
      'コーヒー用水レシピ ({profileName}):\n- 容量: {liters}L\n- マグネシウム濃縮液: {mg}ml\n- カルシウム濃縮液: {ca}ml\n- 重曹濃縮液: {buf}ml\n- 蒸留水: {water}ml',
    glossary0Term: '総硬度 (GH)',
    glossary0Desc: 'カルシウムとマグネシウムの合計。マグネシウムは甘さと複雑さを、カルシウムはコクと質感を与えます。',
    glossary1Term: 'アルカリ度 (KH)',
    glossary1Desc: '酸を中和する能力。KHが高いとコーヒーの酸味が抑えられ、低いと酸っぱく感じられます。',
    glossary2Term: 'TDS (総溶解固形物)',
    glossary2Desc: 'ミネラル化された水において、TDSは添加されたすべてのミネラル塩の合計濃度を表します。',
    glossary3Term: 'マグネシウム',
    glossary3Desc: '複雑なフルーティーな風味成分をより効率的に抽出します。スペシャルティコーヒー抽出に好まれるミネラルです。',
  },
};
