import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-brew-timer';
const title = 'コーヒー抽出タイマー';
const description =
  '注ぎのフェーズ、リズムを刻むオーディオアラート、抽出サマリーを備えたプロ指向のスペシャルティコーヒー用タイマー。V60、Chemex、Aeropressに最適化。';

const faqData = [
  {
    question: 'スマートフォンのタイマーではなく、これを使う理由は？',
    answer:
      'このタイマーはコーヒー専用に設計されています。視覚的なフェーズ表示（蒸らし、注ぎ、落ち切り）、各フェーズ移行の3秒前のオーディオアラートが含まれており、レシピを設定できるため、注出中にリズムを崩すことがありません。',
  },
  {
    question: '蒸らし（ブルーム）時間とは何ですか？',
    answer:
      '抽出の最初に行う予備浸漬（通常30〜45秒）のことで、少量の湯を注いで二酸化炭素（CO2）を放出させます。タイマーは、待つべき時と注ぎ続けるべき時がわかるよう、このフェーズをアンバー色で強調表示します。',
  },
  {
    question: '抽出時間が適切かどうかはどうすればわかりますか？',
    answer:
      '標準的なV60の場合、合計時間は2:30から3:15の間が目安です。それより早く終わる場合は挽き目が粗すぎ、時間がかかる場合は細すぎます。タイマーを使うことで、このプロセスを正確に診断できます。',
  },
  {
    question: 'オーディオアラートはありますか？',
    answer:
      'はい。蒸らしフェーズが終了する前と、抽出プロセスの最後に短いビープ音が鳴ります。これにより、画面をずっと見続けることなく、注湯に集中できます。',
  },
  {
    question: 'Chemex（ケメックス）に対応していますか？',
    answer:
      'もちろんです。下部の設定セクションで、合計時間を4:30や5:00（厚いフィルターを使用するケメックスの一般的な時間）に調整できます。',
  },
  {
    question: 'モバイルでも使えますか？',
    answer:
      'モバイル向けに高度に最適化されており、手が濡れていたり、ドリップケトルを持っていたりしても押しやすい大きなボタンを採用しています。',
  },
];

const howToData = [
  {
    name: 'レシピを設定する',
    text: '下部のセクションで、抽出メソッド（V60、Chemex、Aeropress）に合わせて、総湯量、蒸らし湯量、蒸らし時間、合計時間を調整します。',
  },
  {
    name: 'スタートボタンを押す',
    text: '大きなスタートボタンを押します。タイマーが開始され、上部のプログレスバーに現在のフェーズが表示されます。',
  },
  {
    name: '蒸らしフェーズ',
    text: '画面に表示された蒸らし用の湯量をスパイラル状に注ぎ、タイマーが進むのを待ちます。終了3秒前にオーディオアラートが鳴ります。',
  },
  {
    name: '注ぎフェーズ',
    text: '目標の重さに達するまで残りの湯を注ぎ続けます。均一に抽出されるよう、ゆっくりと一定の円を描くように注いでください。',
  },
  {
    name: '落ち切りフェーズ',
    text: 'コーヒーがフィルターから完全に落ち切るのを待ちます。このフェーズで抽出が完了し、カップの透明感や後味が決まります。',
  },
  {
    name: 'サマリーを確認する',
    text: '終了後、タイマーに合計時間と注いだ湯量が表示されます。味の印象と一緒にこれらの数値を記録し、レシピの改善に役立てましょう。',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'コーヒータイマーに関するよくある質問',
  faq: faqData,
  bibliographyTitle: '技術的なリファレンスとSCAプロトコル',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'コーヒー抽出タイマー：抽出時間の科学 (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペシャルティコーヒーの世界において、お湯とコーヒー粉の<strong>接触時間</strong>は、単なる待ち時間の指標ではありません。それは、どの化学成分がカップに溶け出すかを決定する速度論的な要因です。1秒の差が、キャラメルのような甘さから灰のような苦みへの変化を意味することもあります。V60、Chemex、Aeropressに対応した当社のプロ仕様タイマーは、<strong>リズムアシスタント</strong>として機能し、バリスタ級の精度を自宅で実現します。',
    },
    {
      type: 'summary',
      title: '専用タイマーが不可欠な理由',
      items: [
        '<strong>反応制御：</strong> お湯がコーヒーの固形分を溶かす速度は一定です。時間は、あなたのブレーキでありアクセルです。',
        '<strong>抽出フェーズ：</strong> コーヒーの抽出は線形ではありません。時間を「蒸らし」「注ぎ」「落ち切り」に分けることが重要です。',
        '<strong>再現性：</strong> 時間を測定しなければ、最高のカップを再現することはできません。一貫性は品質の基盤です。',
        '<strong>挽き目の調整：</strong> 最終的な抽出時間は、次回より細かく挽くべきか粗く挽くべきかを教えてくれます。',
      ],
    },
    {
      type: 'title',
      text: '抽出のタイムライン：毎秒何が起きているのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '熱いお湯がコーヒーに触れると、分子レベルの障害物競争が始まります。すべてのフレーバーが同時に抽出されるわけではありません。このタイムラインを理解することが、アマチュアとプロのバリスタの分かれ目です。',
    },
    {
      type: 'list',
      items: [
        '<strong>0〜45秒（蒸らし）：</strong> 脱気フェーズです。焙煎中に閉じ込められたCO2がお湯の浸透を妨げます。ここで待つことで豆が「開き」、均一な抽出への道が整います。',
        '<strong>45〜120秒（酸味と甘味の抽出）：</strong> お湯が流れ、ミネラル塩、有機酸、複合糖を溶かします。ここが味わいの核心です。',
        '<strong>120〜210秒（ボディとフィニッシュ）：</strong> 重い繊維質や苦み成分が抽出されます。このフェーズが長すぎると、コーヒーに渋みが出てしまいます。',
      ],
    },
    {
      type: 'title',
      text: '蒸らしフェーズ：なぜ30秒が標準なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>蒸らし（ブルーム）</strong>または予備浸漬とは、コーヒーの粉の重さの約2倍のお湯を注ぐことです。この最初の30秒間は、二酸化炭素を排出するためにあります。この時間を守らないと、ガスがお湯を押し出し、コーヒーに触れずにお湯が通り抜ける通り道（チャネリング）ができ、水っぽく不均一な味わいになってしまいます。',
    },
    {
      type: 'table',
      headers: ['フェーズ', '推奨時間', '技術的アクション', '化学的な目的'],
      rows: [
        ['蒸らし', '30〜45秒', '粉の重さの2倍を注ぐ', '脱気 (CO2)'],
        ['1投目', '45〜90秒', 'ゆっくり円を描く', '酸味と甘味の抽出'],
        ['2投目', '90〜150秒', '中心に優しく注ぐ', 'バランスとボディ'],
        ['落ち切り', '終了まで', '一定の滴下', '透明感とフィニッシュ'],
      ],
    },
    {
      type: 'title',
      text: '時間が挽き目に与える影響：フィードバックループ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'タイマーはグラインダーの最高の診断ツールです。もしV60のレシピが3:00かかるべきところで、2:15に完全にお湯が落ち切ってしまったなら、そのコーヒーは酸っぱく、薄い（未抽出）可能性が高いです。解決策は注ぐスピードを落とすことではなく、粒子がお湯に対してより抵抗を持つよう、<strong>挽き目を細かくする</strong>ことです。',
    },
    {
      type: 'stats',
      items: [
        { label: '理想のV60時間', value: '3:00', icon: 'mdi:clock-check' },
        { label: '理想のChemex時間', value: '4:30', icon: 'mdi:timer-sand' },
        { label: '理想のAeropress時間', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'リズムアラート：オーディオアシスタントが不可欠な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ドリップコーヒーを淹れるには、スケールと注ぎのパターンに常に視覚的な注意を払う必要があります。当社のタイマーには、次の注ぎを開始すべき3秒前や蒸らしが終わるタイミングを知らせる<strong>近接オーディオアラート</strong>が含まれています。これにより、中断のない、流れるような抽出が可能になります。',
    },
    {
      type: 'tip',
      title: '競技会バリスタのチップス',
      html: '<p>お湯の勢いは弱く、できるだけコーヒーの層の近くから注いでください。高い位置から注ぐと酸素が混入し、過度な攪拌（かくはん）が生じ、過抽出の原因になったり、お湯の温度が急激に下がったりします。タイマーを使って、1秒間に約5〜7gという一定の円形のリズムを維持しましょう。</p>',
    },
    {
      type: 'title',
      text: '熱力学と時間：温度という変数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '時間はシステムの温度に影響を与えます。抽出に6分かかると、多くの熱エネルギーが失われ、バランスの悪いカップになります。最適な抽出時間範囲であれば、抽出中のお湯の温度を90℃から96℃の間に保つことができます。',
    },
    {
      type: 'title',
      text: '急冷式アイスコーヒー（フラッシュブリュー）のタイマー設定',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '氷の上に直接抽出する場合は、より積極的なタイミング設定が必要です。使うお湯の量が少ない（全体の60%）ため、接触時間は短縮されます。これを補うために、挽き目をわずかに細かくして、抽出時間を2:30〜3:00の間に収めるようにします。',
    },
    {
      type: 'title',
      text: '抽出後のサマリー：継続的な学習',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '抽出が完了するたびに、当社のツールは合計接触時間を表示します。この数値を味わいの印象とともに記録してください。苦すぎますか？ 次回は15秒短い時間を目標にしましょう。金属的、あるいは酸っぱすぎますか？ 20秒長くすることを目指しましょう。タイマーがコーヒーを淹れてくれるわけではありませんが、あなたがアーティストになるためのデータを提供します。',
    },
  ],
  ui: {
    readyText: '準備完了',
    startBtn: '抽出開始',
    pauseBtn: '一時停止',
    resumeBtn: '再開',
    resetBtn: 'リセット',
    newBrewBtn: '新規抽出',
    targetLabel: '目標湯量：',
    instructionStart: '大きなボタンを押してください',
    hintStart: 'V60やChemexを準備しましょう',
    phase1Label: 'フェーズ 1：蒸らし（ブルーム）',
    phase2Label: 'フェーズ 2：注ぎ',
    phase3Label: 'フェーズ 3：落ち切り',
    instructionBloom: '{bloomWater}g のお湯を注いでください',
    hintBloom: '全体を湿らせるように優しく回します',
    instructionPour: '合計 {waterTotal}g まで注ぎます',
    hintPour: '一定の円を描くように注ぎます',
    instructionDrain: '落ち切るまで待ちます',
    hintDrain: 'まもなく完成です',
    summaryTitle: '抽出完了！',
    summaryMessage: 'コーヒーの準備が整いました。',
    statTimeLabel: '合計時間',
    statWaterLabel: '総注湯量',
    setupTitle: 'レシピ設定',
    labelWater: '総湯量 (g)',
    labelBloomWater: '蒸らし湯量 (g)',
    labelBloomTime: '蒸らし時間 (s)',
    labelTotalTime: '合計抽出時間 (s)',
  },
};
