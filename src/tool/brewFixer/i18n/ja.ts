import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: '酸っぱい / 尖った酸味',
    bitter: '苦い / 焦げた味',
    watery: '水っぽい / 薄い',
    astringent: '渋い / 口が乾く感じ',
  },
  causes: {
    acidic: ['挽き目が粗すぎる（未抽出）', '水温が低すぎる', '抽出時間が短すぎる', 'コーヒーが新鮮すぎる（ガスが抜けていない）'],
    bitter: ['挽き目が細かすぎる（過抽出）', '水温が高すぎる', '抽出時間が長すぎる', '古いコーヒーまたは深煎り'],
    watery: ['挽き目が粗すぎる（抽出不足）', 'ブリューレシオが高すぎる（水が多い）', '抽出時間が短すぎる', 'コーヒーが古すぎるか低品質'],
    astringent: ['水質の問題（ミネラル分が多すぎる）', '過抽出とミネラル成分の組み合わせ', '硬水での細かすぎる挽き目', '抽出温度が高すぎる'],
  },
  solutions: {
    acidic: '挽き目が粗いため、成分を十分に抽出する前に水が早く通り過ぎています。細かく挽くことで表面積を増やし、水流を遅くします。',
    bitter: '抽出に時間がかかりすぎて、苦味や焦げた成分まで引き出されています。粗く挽くことで接触時間を短縮し、抽出強度を抑えます。',
    watery: 'カップの中の溶解固形分が不足しています。挽き目を細かくするか、粉量を増やすことで抽出率とボディを高めます。',
    astringent: 'ミネラル分の多い水が過剰に抽出し、コーヒー成分と結合して口の中に乾燥感を生んでいます。粗く挽いて過抽出を抑えつつ、ろ過などで水質を改善してください。',
  },
  actions: {
    acidic: { text: '少し細かく挽く', textSevere: 'かなり細かく挽く', icon: 'mdi:chevron-left' },
    bitter: { text: '少し粗く挽く', textSevere: 'かなり粗く挽く', icon: 'mdi:chevron-right' },
    watery: { text: '細かく挽くか粉を5g増やす', textSevere: 'かなり細かく挽くか粉を7g増やす', icon: 'mdi:plus-circle' },
    astringent: { text: 'ろ過した水を使い粗く挽く', textSevere: 'ろ過した水を使いかなり粗く挽く', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: '細塩のような', bitter: '小麦粉のような', watery: 'ココアパウダーのような', astringent: '少し細かめの小麦粉' },
    pourover: { acidic: '食卓塩のような', bitter: '粗い砂のような', watery: '細かいコーンミールのような', astringent: '細かい砂' },
    aeropress: { acidic: '細かいコーンミールのような', bitter: '食卓塩のような', watery: '細かく挽いた胡椒のような', astringent: '中程度の砂' },
    frenchpress: { acidic: 'パン粉のような', bitter: '岩塩のような', watery: '海塩のような', astringent: '粗い砂' },
    moka: { acidic: '細かい海塩のような', bitter: '細かい砂のような', watery: '食卓塩のような', astringent: '中細の砂' },
    coldbrew: { acidic: '粗い海塩のような', bitter: '砂利のような', watery: '岩塩のような', astringent: '粒のある粗い砂' },
  },
  secondaryAction: '{temp}℃で{time}抽出する',
  tertiaryAction: 'すべてのフレーバーを捉えるために、試飲する前にコーヒーが室温まで冷めるのを待ってください。',
};

const slug = 'coffee-flavor-diagnosis-extraction-problems';
const title = 'コーヒー抽出診断：The Brew Fixer';
const description =
  'なぜコーヒーが美味しくないのか、数秒で診断します。抽出方法や味のプロファイルに合わせて、挽き目、温度、時間をパーソナライズして調整します。';

const faqData = [
  {
    question: '未抽出か過抽出か、どうすれば分かりますか？',
    answer:
      '未抽出（酸っぱい/尖った味）は、成分が十分に溶け出す前に水が早く通り過ぎてしまったことを意味します。過抽出（苦い/焦げた味）は、コーヒーと水が長時間接触しすぎたことを意味します。The Brew Fixerは、味の特徴と抽出方法を分析して、どちらが起きているかを特定する手助けをします。',
  },
  {
    question: 'コーヒー抽出で最も多い間違いは何ですか？',
    answer:
      '挽き目（グラインドサイズ）です。多くの人が、粗すぎて（薄くて酸っぱいコーヒーになる）か、細かすぎて（苦くて過抽出のコーヒーになる）のどちらかで挽いています。抽出方法に合わせてグラインダーを正確なサイズに調整することが、最も効果的な改善方法です。',
  },
  {
    question: '温度は本当にそんなに重要ですか？',
    answer:
      'はい。水温は抽出速度をコントロールします。低すぎると未抽出（酸っぱい）になり、高すぎると過抽出（苦い）になります。各抽出方法には理想的な範囲があります。プアオーバー（V60など）は92〜96℃を好み、フレンチプレスは長時間浸漬による過抽出を避けるために85〜90℃が適しています。',
  },
  {
    question: 'なぜコーヒーが渋かったり、口の中が乾燥したりするのですか？',
    answer:
      '渋み（収斂味）は通常、ミネラル分の多い水や、過抽出とミネラルの組み合わせによって引き起こされます。ろ過した水を使い、少し粗めの挽き目を試してみてください。それでも改善しない場合は、水のTDS（総溶解固形分）が高すぎる可能性があるため、浄水器の検討をお勧めします。',
  },
  {
    question: '温度と時間だけで、美味しくないコーヒーを直せますか？',
    answer:
      '温度と時間は助けになりますが、根本的な原因は通常「挽き目」にあります。挽き目が粗すぎる場合、時間を長くしたり温度を上げたりしても、効果はわずかです。The Brew Fixerは、抽出に最も大きな影響を与える挽き目の調整を常に第一の対策として推奨します。',
  },
  {
    question: 'すべてのコーヒーで同じレシピを使うべきですか？',
    answer:
      'いいえ。焙煎直後（1〜5日）の新鮮なコーヒーは抽出が早く、古いコーヒーよりも少し粗い挽き目が必要になる場合があります。浅煎りは密度が高いため細かい挽き目を好むことが多く、深煎りは多孔質で抽出されやすいため粗めの挽き目を好みます。',
  },
];

const howToData = [
  {
    name: '抽出方法を選択する',
    text: '使用した器具を選択してください：プアオーバー、フレンチプレス、エアロプレス、モカポット、エスプレッソマシン、またはコールドブリュー。ツールがその方法に特化した推奨事項を提供します。',
  },
  {
    name: '主な味の欠陥を特定する',
    text: 'コーヒーを試飲して、最も目立つ味を選択してください：酸っぱい、苦い（焦げた）、水っぽい（薄い）、または渋い（乾燥した感じ）。複雑な問題がある場合は、副次的な味も選択できます。',
  },
  {
    name: '強さを評価する',
    text: 'スライダーを動かして、その味の欠陥がどれくらい強いかを示してください。「わずか」はほとんど気にならない程度、「深刻」はカップ全体の味を支配している状態を意味します。',
  },
  {
    name: '診断を実行する',
    text: '「診断する」ボタンをクリックすると、ツールが入力内容を分析し、主な対策（通常は挽き目の調整）、副次的な対策（温度と時間）、およびテクスチャのリファレンスを表示します。',
  },
  {
    name: '調整してテストする',
    text: '推奨された変更（例：粗く挽く、抽出時間を長くするなど）を適用します。新しく淹れて味を確認してください。小さな調整の積み重ねが重要です。',
  },
  {
    name: 'フィードバックを送る',
    text: '次のカップを淹れたら、改善されたかどうかをツールに伝えてください。改善された場合は、紙吹雪のアニメーションが表示されます！そうでなければ、戻って別のパラメータを試してください。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'コーヒー抽出に関するよくある質問',
  faq: faqData,
  bibliographyTitle: 'テクニカルリファレンスとコーヒーの科学',
  bibliography: [
    {
      name: 'Specialty Coffee Association: 抽出ガイドライン',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao: The Coffee Roaster\'s Companion',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle: エスプレッソ抽出ガイド',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind: コーヒー抽出を理解する',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger: コーヒーの味を言語化する',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'なぜあなたのコーヒーは美味しくないのか？抽出診断ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '素晴らしいエスプレッソと、焦げた紙のような味のコーヒーの違いは、たった一つの概念に集約されます。それは「<strong>コーヒー抽出</strong>」です。抽出とは、水がコーヒー粉から可溶性成分を溶かし出すプロセスです。正しく行えば複雑さ、甘み、透明感を引き出せますが、間違えると酸味、苦味、あるいは水っぽさが出てしまいます。',
    },
    {
      type: 'summary',
      title: 'The Brew Fixerで学べること',
      items: [
        '<strong>抽出の欠陥を診断する方法：</strong> コーヒーが未抽出、過抽出、薄いのか、あるいは水質に問題があるのかを特定します。',
        '<strong>抽出をコントロールする3つのレバー：</strong> 挽き目、水温、接触時間。どれを最初に調整すべきか？Brew Fixerが教えます。',
        '<strong>抽出方法別の推奨事項：</strong> V60の理想的な挽き目はフレンチプレスのそれとは全く異なります。あなたの器具に合わせたアドバイスを提供します。',
        '<strong>テクスチャのリファレンス：</strong> 身近な素材（微粉末、海塩、砂）と比較して、目指すべき挽き目を正確に把握できます。',
      ],
    },
    {
      type: 'title',
      text: 'コーヒー抽出の3つの次元',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '収率（抽出率）とは、溶け出した成分の質量を元のコーヒー粉の質量で割ったものです。スペシャルティコーヒーでは、あらゆる方法で<strong>18〜20%の抽出</strong>を目指します。これより低いと酸っぱくなり、高いと苦くなります。',
    },
    {
      type: 'list',
      items: [
        '<strong>挽き目</strong>は表面積をコントロールします。細かいほど水と触れる面積が増えるため抽出が早く進み、粗いほど遅くなります。',
        '<strong>水温</strong>は溶解速度をコントロールします。高温（94〜96℃）は早く、低温（85〜90℃）はゆっくりと成分を溶かし出します。',
        '<strong>接触時間</strong>は、水がコーヒーに触れている時間の長さです。プアオーバー（2:30〜3:30分）、フレンチプレス（4:00〜5:00分）。',
      ],
    },
    {
      type: 'title',
      text: '酸っぱいコーヒー（未抽出）の診断方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '酸っぱいコーヒーはレモンやリンゴのような味がし、酸が強く尖っています。これは水がコーヒーから十分に成分を引き出す時間が足りなかったことを意味します。最もシンプルな解決策は、ほぼ常に<strong>挽き目を細かくする</strong>ことで、表面積を増やし水の流れを遅くすることです。',
    },
    {
      type: 'list',
      items: [
        '挽き目を細かくする（サイズを5〜10μm小さくする）',
        'または、抽出時間を少し伸ばす（15〜30秒追加する）',
        'または、水温を95〜96℃に上げる',
      ],
    },
    {
      type: 'title',
      text: '苦いコーヒー（過抽出）の診断方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '苦いコーヒーは焦げた味、灰っぽい味、あるいは木のような味がします。これは、望ましい成分を超えて長時間抽出しすぎたことを意味します。解決策は、<strong>挽き目を粗くする</strong>ことで水の流れを速め、接触時間を短縮することです。',
    },
    {
      type: 'list',
      items: [
        '挽き目を粗くする（サイズを5〜10μm大きくする）',
        'または、抽出時間を短縮する（15〜30秒減らす）',
        'または、水温を92〜93℃に下げる',
      ],
    },
    {
      type: 'title',
      text: '水っぽいコーヒー（薄い、ボディがない）の診断方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '薄いコーヒーはフレーバーとボディが欠けています。これは通常、挽き目が粗すぎるか、粉に対して水が多すぎる（ブリューレシオが高い）、あるいはコーヒーが古いことを意味します。グラインダーの調整が最も手っ取り早い解決策です。',
    },
    {
      type: 'list',
      items: [
        '挽き目を細かくして、抽出される表面積を増やす',
        'コーヒー粉を増やす（ブリューレシオを下げる）',
        '抽出時間を少し長くするか、より高い温度で淹れる',
      ],
    },
    {
      type: 'title',
      text: '渋いコーヒー（乾燥した感じ、ミネラル味）の診断方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '渋みは口の中が乾燥するような感覚で、ブドウの皮をかじったような感じです。通常、硬水（高いミネラル含有量）と過抽出が組み合わさることで発生します。これは挽き目の調整と水質の改善の両方が必要になるため、少し厄介です。',
    },
    {
      type: 'list',
      items: [
        '浄水器を使用してミネラルを減らす（目標TDS 60〜150ppm）',
        '挽き目を粗くして過抽出を抑える',
        '少し低めの水温（90〜92℃）を試す',
      ],
    },
    {
      type: 'title',
      text: '挽き目チャート：見た目と感触のリファレンス',
      level: 2,
    },
    {
      type: 'table',
      headers: ['挽き目の名前', '粒子のサイズ', 'テクスチャのリファレンス', '最適な抽出方法'],
      rows: [
        ['極細挽き', '5-15 µm', '細かい粉末、ココア', 'エスプレッソ、トルコ式'],
        ['細挽き', '15-30 µm', '粉砂糖', 'モカポット、エアロプレス'],
        ['中細挽き', '30-50 µm', '砂、食卓塩', 'V60、ケメックス、プアオーバー'],
        ['中挽き', '50-70 µm', '砂浜の砂', 'ドリップマシン、平底フィルター'],
        ['粗挽き', '70-90 µm', '粗い海塩、粗い砂', 'フレンチプレス、カッピング'],
        ['極粗挽き', '90+ µm', '粒胡椒、パン粉', 'コールドブリュー、パーコレーター'],
      ],
    },
    {
      type: 'title',
      text: '水質：TDSと抽出への影響',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'TDS（総溶解固形分）は、水に含まれるミネラル成分の測定値です。水道水は地域によって大きく異なり、軟水（50ppm）から硬水（300ppm以上）まであります。コーヒーの抽出は水質に非常に敏感です。',
    },
    {
      type: 'list',
      items: [
        '<strong>軟らかすぎる（0-50 ppm）：</strong> 水が攻撃的に抽出しすぎ、コーヒーが塩辛く薄く感じられます。',
        '<strong>理想的（60-150 ppm）：</strong> 甘みがあり、バランスの取れたフルボディの抽出。',
        '<strong>硬すぎる（200+ ppm）：</strong> ミネラルがコーヒー成分と結合し、渋みや乾燥した口当たりを生みます。',
      ],
    },
    {
      type: 'tip',
      title: '水質のクイック解決法',
      html: '<p>硬水が疑われる場合は、比較のためにろ過した水や市販の軟水で淹れてみてください。すぐに味が良くなれば水が原因です。簡易的な浄水ポット（ブリタなど）や据置型浄水器への投資を検討しましょう。</p>',
    },
  ],
  ui: {
    methodLabel: 'どの器具で淹れていますか？',
    methodPourover: 'プアオーバー / ドリップ',
    methodFrenchpress: 'フレンチプレス',
    methodAeropress: 'エアロプレス',
    methodMoka: 'モカポット',
    methodEspresso: 'エスプレッソ',
    methodColdbrew: 'コールドブリュー',
    methodDescription: '抽出器具を選択してください',
    flavorLabel: 'どんな味がしますか？',
    flavorAcidic: '酸っぱい / 尖った酸味',
    flavorBitter: '苦い / 焦げた味',
    flavorWatery: '水っぽい / 薄い',
    flavorAstringent: '渋い / 口が乾く感じ',
    flavorHint: '最大2つまで選択してください',
    severityLabel: 'その問題はどのくらい強いですか？',
    severitySlightLabel: 'わずかに感じる',
    severityModerateLabel: '中程度',
    severitySevereLabel: '非常に強い',
    diagnoseBtn: 'コーヒーを診断する',
    resetBtn: 'リセット',
    resultTitle: '診断完了',
    resultExplanation: 'カップの中で起きていること',
    actionMainLabel: '主な対策',
    actionSecondaryLabel: '温度と時間',
    actionTertiaryLabel: 'プロのヒント',
    textureReferenceLabel: 'テクスチャのリファレンス',
    improvementHint: '調整を行ってから、もう一杯淹れてみてください。',
    copyDiagnosisBtn: '診断結果をコピー',
    feedbackLabel: 'コーヒーは美味しくなりましたか？',
    feedbackSuccessTemplate: '素晴らしい！調整がうまくいきましたね。',
    methodPouroverDesc: 'V60、ケメックス、ドリッパー',
    methodFrenchpressDesc: 'プレス式、ボダム',
    methodAeropressDesc: 'エアロプレス、プリズモ',
    methodMokaDesc: 'マキネッタ、直火式',
    methodEspressoDesc: 'エスプレッソマシン、レバー式',
    methodColdbrewDesc: '浸漬式、水出し',
    fadeOutMessage: 'お疲れ様でした！この調子で調整を続けてください。',
    backBtn: '戻る',
    mainIssueLabel: '主な問題',
    improvedBtn: '改善した',
    notYetBtn: 'まだ',
    copiedBtn: 'コピーしました！',
    combinedLabel: '組み合わせ',
    diagnosisTitle: 'The Brew Fixer 診断結果',
    issueLabel: '問題',
    causeLabel: '原因',
    actionLabel: '対策',
    whyLabel: '理由',
    nextLabel: '次へ',
  },
};
