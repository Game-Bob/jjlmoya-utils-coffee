import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

const slug = 'coffee-ratio-calculator';
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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
