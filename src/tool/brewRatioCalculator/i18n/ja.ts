import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
 seo: [
 {
 type: 'title',
 text: 'Calculadora de Ratio de Café y Agua: La Guía Maestra para la Extracción Perfecta (2026)',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Preparar una taza de café de especialidad no es un acto culinario subjetivo; es un experimento de <strong>química de fluidos</strong> y <strong>transferencia de masa</strong>. En el centro de este proceso reside el concepto de <strong>Brew Ratio</strong> (proporción de infusión), una medida crítica que dicta la relación cuantitativa entre el soluto (café molido) y el disolvente (agua). Nuestra calculadora ha sido diseñada integrando los estándares de la <em>Specialty Coffee Association (SCA)</em> y principios de termodinámica aplicada para permitir que baristas y entusiastas alcancen la reproducibilidad perfecta en sus extracciones.',
 },
 {
 type: 'summary',
 title: 'Lo que aprenderás sobre el Ratio de Café',
 items: [
 '<strong>Brew Ratio:</strong> Cómo la relación en peso entre café y agua (ej. 1:15) determina la fuerza potencial y el perfil sensorial de tu taza.',
 '<strong>TDS y Extracción:</strong> La ciencia detrás de los sólidos disueltos y qué porcentaje del grano realmente debe terminar en tu bebida.',
 '<strong>Ajuste por Retención:</strong> Por qué el café absorbe 2g de agua por cada gramo de polvo y cómo calcular el agua extra necesaria.',
 '<strong>Métodos Específicos:</strong> Las proporciones ideales para V60, Prensa Francesa, Espresso y recetas de café helado (Flash Brew).',
 ],
 },
 {
 type: 'title',
 text: '¿Qué es el Brew Ratio y por qué es la variable más importante?',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café contiene aproximadamente un 30% de material soluble, pero no todo ese material es deseable para el paladar humano. El agua, actuando como disolvente universal, extrae los compuestos en un orden específico basado en su peso molecular y afinidad química. El ratio de café controla precisamente cuánta capacidad de disolución entregamos a cada gramo de café.',
 },
 {
 type: 'list',
 items: [
 '<strong>Fase Ácida (Lípidos y Ácidos Orgánicos):</strong> Son los primeros en disolverse debido a su alta solubilidad. Aportan brillo, acidez málica o cítrica y notas frutales. Un ratio demasiado bajo (sub-extracción) detiene el proceso aquí, resultando en una taza agria y salada.',
 '<strong>Fase Dulce (Azúcares y Carbohidratos):</strong> Se extraen a continuación. Generan balance, dulzor y cuerpo. Es la "ventana dorada" donde el café alcanza su máxima complejidad aromática y equilibrio estructural.',
 '<strong>Fase Amarga (Fibras y Compuestos Fenólicos):</strong> Son los más lentos en disolverse. Con ratios excesivos (sobre-extracción), el agua degrada las celdas del café, extrayendo amargos secantes, notas a ceniza y madera.',
 ],
 },
 {
 type: 'title',
 text: 'Ratios recomendados: Proporciones por métodos de extracción',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cada método de extracción requiere un ratio específico debido a variables como el tiempo de contacto, la presión de la bomba o el micraje del filtro utilizado. La siguiente tabla técnica desglosa los estándares de la industria para 2026:',
 },
 {
 type: 'table',
 headers: ['Método de Preparación', 'Ratio (Gramos/Agua)', 'Perfil en Taza', 'Tiempo Objetivo'],
 rows: [
 ['Espresso', '1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 seg'],
 ['V60 / Pour-Over', '1:15 a 1:16', 'Limpio, brillante, notas claras', '2:30-3:30 min'],
 ['Aeropress', '1:12 a 1:15', 'Versátil, cuerpo medio-alto', '1:30-2:00 min'],
 ['French Press', '1:12 a 1:14', 'Texturizado, pesado, aceitoso', '4:00-5:00 min'],
 ['Cold Brew', '1:8 a 1:12', 'Dulce, baja acidez, gran cuerpo', '12-24 horas'],
 ],
 },
 {
 type: 'title',
 text: 'Cómo calcular el agua necesaria: El Factor de Retención del grano',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Uno de los errores más comunes en la preparación manual es ignorar que el café molido es una estructura hidrofílica porosa que retiene una cantidad constante de agua. No todo el agua que viertes termina en la taza.',
 },
 {
 type: 'paragraph',
 html: 'Científicamente, el café molido retiene aproximadamente <strong>2.0 gramos de agua por cada 1.0 gramo de café</strong>. Nuestra calculadora introduce el <strong>Ajuste Dinámico de Retención</strong>: si necesitas llenar un recipiente específico de 300ml, el sistema deduce que debes verter 340ml de agua para compensar la absorción del grano, manteniendo el ratio de extracción intacto.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Dosis Café', value: '20g', icon: 'mdi:coffee' },
 { label: 'Agua Vertida', value: '300ml', icon: 'mdi:water' },
 { label: 'Retención', value: '40ml', icon: 'mdi:minus-circle' },
 { label: 'En Taza Real', value: '260ml', icon: 'mdi:cup' },
 ],
 columns: 4,
 },
 {
 type: 'title',
 text: 'La importancia del Bloom: Desgasificación para una extracción uniforme',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La fase de "Bloom" (florecimiento) no es solo estética; es una necesidad física. Durante el tueste, el café genera CO2 que queda atrapado en su matriz celular. Si vertemos todo el agua de forma continua, el gas escapa violentamente, creando micro-canales (channeling) y evitando que el disolvente penetre en el centro de las partículas de café.',
 },
 {
 type: 'tip',
 title: 'Técnica de Saturación Homogénea',
 html: '<p>Para un bloom perfecto, vierte exactamente el doble del peso del café en agua (ratio 1:2 de bloom). Realiza una agitación suave o swirl para garantizar que todo el café esté húmedo. Espera 30-45 segundos. La liberación de gas permitirá que, en los vertidos posteriores, el agua fluya de forma laminar y extraiga los sólidos de manera uniforme por toda la cama de café.</p>',
 },
 {
 type: 'title',
 text: 'Tutorial Iced Coffee: Cómo preparar café con hielo sin diluir el sabor',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café helado de especialidad (Flash Brew) requiere un recalibrado termodinámico. El objetivo es extraer los aceites volátiles a 94°C para capturar la complejidad aromática, pero enfriarlos de golpe para evitar la oxidación y la pérdida de brillo.',
 },
 {
 type: 'list',
 items: [
 '<strong>60% Agua Caliente:</strong> Es la cantidad mínima necesaria para alcanzar una extracción del 18-20% sin sub-extraer en exceso ni enfriar el lecho demasiado pronto.',
 '<strong>40% Hielo Térmico:</strong> Se coloca en la jarra receptora. La energía térmica del café se transfiere al hielo (calor latente de fusión), enfriando la bebida a menos de 5°C instantáneamente.',
 '<strong>Fuerza Final:</strong> Al sumar ambos, el ratio final (ej. 1:15) se mantiene exacto, resultando en una bebida vibrante, fría y con la concentración de sabores correcta.',
 ],
 },
 {
 type: 'title',
 text: 'Grado de molienda y Ratio de café: La clave de la superficie de contacto',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El ratio es solo la mitad de la ecuación. La molienda determina el <strong>Área de Superficie Total Expuesta</strong> al disolvente. Partículas más pequeñas (molienda fina) tienen más superficie proporcional, lo que acelera dramáticamente la extracción de compuestos químicos.',
 },
 {
 type: 'paragraph',
 html: 'Si decides usar un ratio largo (1:17 o 1:18) para un café de tueste muy ligero, debes compensar con una molienda ligeramente más fina para asegurar que el agua tenga tiempo de extraer los azúcares antes de atravesar el filtro. Por el contrario, ratios cortos (1:12) en métodos de inmersión prolongada requieren moliendas gruesas para evitar la sobre-extracción.',
 },
 {
 type: 'title',
 text: 'Reproducibilidad y Ciencia: Convierte tu cocina en un laboratorio barista',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La excelencia en el café de especialidad nace de la consistencia métrica. Nuestra función de <strong>Recetas Personalizadas</strong> permite crear un repositorio técnico de tus calibraciones exitosas. No es solo un archivo de favoritos; es una herramienta de análisis para comparar cómo reacciona un mismo kilo de café a un ratio 1:15 frente a un 1:16, permitiéndote ajustar la receta milimétricamente.',
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
