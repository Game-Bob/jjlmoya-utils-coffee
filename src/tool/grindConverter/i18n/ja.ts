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
 { question: '味に合わせて挽き目を調整するには？', answer: '苦味や渋みが強い場合は粗くし、酸味や薄さが目立つ場合は細かくします。一度に一つの設定だけを変更してください。' },
].slice(0, 5);

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
 text: '挽き目の物理学と粒子サイズの重要性',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'コーヒーを挽くことは、豆を小さくするだけではありません。水が味の成分に触れる面積を決める作業です。細かすぎると苦味が出やすく、粗すぎると薄く酸っぱい味になりやすいため、器具に合う挽き目を選びます。',
 },
 {
 type: 'summary',
 title: '適切な挽き目を決める要素',
 items: [
 '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
 '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
 '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
 '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
 ],
 },
 {
 type: 'title',
 text: 'エスプレッソと V60 の挽き目の違い',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'エスプレッソは高い圧力で短時間に抽出するため、細かい粉で適度な抵抗を作ります。粗すぎると湯が速く流れ、細かすぎると流れが止まりやすくなります。',
 },
 {
 type: 'paragraph',
 html: 'V60 は重力で湯を通す器具なので、エスプレッソより粗い粉を使います。細かすぎると流れが遅くなり、粗すぎると抽出不足になりやすいので時間も確認します。',
 },
 {
 type: 'table',
 headers: ['方法', '粒径', '触感の目安', '接触時間'],
 rows: [
 ['Ibrik (Turco)', '100-300 μm', 'Talco / Harina fina', '3-5 min ebullición'],
 ['Espresso', '300-500 μm', 'Sal fina', '25-30 seg'],
 ['Moka / Aeropress', '500-700 μm', 'Sal de mesa', '3-4 min'],
 ['V60 / Filtro', '700-900 μm', 'Azúcar granulada', '2:30-3:15 min'],
 ['Chemex / Clever', '900-1200 μm', 'Arena gruesa', '3:30-4:30 min'],
 ['Prensa Francesa', '1200-1500 μm', 'Sal gorda', '4 min inmersión'],
 ['Cold Brew', '1500+ μm', 'Granos de pimienta', '12-24 h en frío'],
 ],
 },
 {
 type: 'title',
 text: '粒の均一性がミルを分ける',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '粒の大きさがそろっているほど、粉全体が似た速さで抽出されます。高性能なミルは微粉と粗い粒の差が小さく、味の再現性を高めます。',
 },
 {
 type: 'stats',
 items: [
 { label: 'Comandante C40', value: '95%', icon: 'mdi:star' },
 { label: 'Timemore C2/C3', value: '85%', icon: 'mdi:star-half-full' },
 { label: 'Hario Skerton', value: '40%', icon: 'mdi:star-outline' },
 ],
 columns: 3,
 },
 {
 type: 'title',
 text: '味で挽き目を診断する',
 level: 3,
 },
 {
 type: 'paragraph',
 html: '表は出発点であり、最後の判断は味で行います。苦く乾くなら粗く、酸っぱく薄いなら細かくします。一度に一段階だけ変えて、豆と水に合う位置を探してください。',
 },
 {
 type: 'tip',
 title: '初めての豆に使える基本ルール',
 html: '<p>新しい豆は方法ごとの推奨範囲の中央から始めます。味を確認して一段階ずつ調整し、各結果を記録するとお気に入りの設定を再現できます。</p>',
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
