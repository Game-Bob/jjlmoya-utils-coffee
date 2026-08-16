import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'Química del Agua para Café: Por qué el H₂O es el ingrediente olvidado',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café es agua en un 98-99%. Sin embargo, la composición mineral de ese agua es el factor diferencial más ignorado en la cadena de calidad. Un café de especialidad de Etiopía extraído con agua del grifo de Madrid puede saber completamente distinto al mismo café preparado con agua mineralizada siguiendo el estándar SCA. Nuestra <strong>calculadora de agua para café</strong> te permite formular el agua perfecta desde cero, usando sales minerales comunes y partiendo de agua destilada.',
 },
 {
 type: 'summary',
 title: '¿Por qué la mineralización del agua importa tanto?',
 items: [
 '<strong>GH (Dureza General):</strong> La suma de iones Magnesio y Calcio determina la capacidad del agua para disolver compuestos de sabor del café.',
 '<strong>KH (Alcalinidad):</strong> La cantidad de bicarbonato controla el pH durante la extracción. Un KH bajo produce café agrio; un KH alto lo aplana.',
 '<strong>Repetibilidad:</strong> El agua municipal cambia por temporada y ciudad. El agua mineralizada es constante y reproducible.',
 '<strong>Protección del equipo:</strong> Los niveles correctos evitan tanto la corrosión (agua muy pura) como las incrustaciones de cal (agua muy dura).',
 ],
 },
 {
 type: 'title',
 text: 'El Estándar SCA: Los Límites Técnicos del Agua Perfecta para Café',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La Specialty Coffee Association publicó en 2015 su estándar de calidad del agua. Tras años de investigación sensorial y química, estableció rangos ideales para cada parámetro. No son números arbitrarios: son el resultado de catas a ciegas con profesionales donde se maximizó la percepción de acidez equilibrada, dulzor y cuerpo.',
 },
 {
 type: 'table',
 headers: ['Parámetro', 'Mínimo', 'Ideal SCA', 'Máximo'],
 rows: [
 ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
 ['Alcalinidad (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
 ['pH', '6.5', '7.0', '7.5'],
 ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
 ],
 },
 {
 type: 'title',
 text: 'Magnesio vs Calcio: La Batalla Mineral que Define tu Taza',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'No todos los minerales actúan igual sobre el café. El investigador Christopher Hendon demostró que el <strong>magnesio</strong> forma ligandos con las moléculas de sabor más complejas y volátiles, extrayendo notas frutales y florales con mayor eficiencia. El <strong>calcio</strong>, en cambio, extrae compuestos más pesados, aportando cuerpo y textura sedosa pero con menos brillo aromático.',
 },
 {
 type: 'list',
 items: [
 '<strong>Magnesio puro (ratio 1:0):</strong> Máxima complejidad aromática y fruta. Ideal para cafés naturales o de perfil frutal. Mayor riesgo de sobresalir la acidez.',
 '<strong>Calcio puro (ratio 0:1):</strong> Cuerpo denso y sedoso. Ideal para espresso clásico y tuestes oscuros. Mayor riesgo de incrustaciones en calderas.',
 '<strong>Mix equilibrado (SCA 1:0, Hendon 1:1):</strong> La mayoría de perfiles de calidad usan magnesio como ión principal pero añaden algo de calcio para equilibrar la textura.',
 ],
 },
 {
 type: 'title',
 text: 'El Semáforo de Seguridad: Protege tu Máquina de Espresso',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Nuestra calculadora incluye un <strong>análisis de riesgo en tiempo real</strong> basado en los valores de GH y KH que introduces. El índice de corrosión evalúa si el agua es demasiado pura y agresiva para los metales. El índice de cal mide si el KH y GH combinados generarán depósitos en calderas y tuberías.',
 },
 {
 type: 'tip',
 title: 'Regla práctica del barista profesional',
 html: '<p>Para máquinas de espresso con caldera de latón o cobre, nunca uses perfiles con KH inferior a 40 mg/L de forma continua. El agua muy pura es corrosiva a largo plazo. Para métodos de filtro (V60, Chemex, Aeropress) no hay caldera que proteger, por lo que puedes usar perfiles más delicados como Melbourne sin problema.</p>',
 },
 {
 type: 'title',
 text: 'Cómo Preparar las Botellas de Concentrado en Casa',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'La clave para una mineralización precisa es trabajar con <strong>concentrados stock</strong> en lugar de añadir sales directamente al agua final. Un concentrado de 2,46 g de sales de Epsom en 100 ml de agua destilada te permite dosificar con jeringas de 1 ml con una precisión de ±0,01 ml. Esta metodología, popularizada por Barista Hustle, convierte la química del café en algo tan sencillo como mezclar cócteles.',
 },
 {
 type: 'stats',
 items: [
 { label: 'GH ideal SCA', value: '68 mg/L', icon: 'mdi:water' },
 { label: 'KH ideal SCA', value: '40 mg/L', icon: 'mdi:water-percent' },
 { label: 'Coste aproximado por litro', value: '<0.05€', icon: 'mdi:currency-eur' },
 ],
 columns: 3,
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
