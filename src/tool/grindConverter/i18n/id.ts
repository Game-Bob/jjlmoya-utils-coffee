import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konverter-ukuran-gilingan-kopi';
const title = 'Konverter Ukuran Gilingan Kopi';
const description =
 'Bagan ukuran gilingan interaktif dengan panduan klik dan level untuk menyesuaikan penggiling Anda antara Espresso, V60, French Press, dan lainnya. Pemetaan mikron teknis untuk semua metode ekstraksi.';

const faqData = [
 {
 question: 'Mengapa pengaturan gilingan yang sama tidak berfungsi untuk semua jenis kopi?',
 answer:
 'Kerapatan biji kopi bervariasi berdasarkan tingkat penyangraian dan asal. Roast yang ringan biasanya lebih rapat dan membutuhkan gilingan yang lebih halus agar ekstraksi benar, sedangkan roast yang gelap lebih berpori dan membutuhkan pengaturan yang lebih kasar.',
 },
 {
 question: 'Bagaimana saya tahu apakah harus menggiling lebih halus atau lebih kasar?',
 answer:
 'Biarkan lidah Anda menjadi panduan: jika rasa kopi pahit dan kering, giling lebih kasar agar air mengalir lebih cepat. Jika rasanya asam, asin, atau encer, giling lebih halus untuk meningkatkan luas permukaan kontak.',
 },
 {
 question: "Apa itu 'channeling' dan bagaimana gilingan memengaruhinya?",
 answer:
 'Channeling terjadi ketika air menemukan jalur dengan hambatan terkecil melalui bubuk kopi. Gilingan yang tidak rata atau tidak sesuai untuk tekanan tersebut, terutama dalam espresso, mendorong masalah ini dan merusak ekstraksi.',
 },
 {
 question: 'Bisakah saya menggunakan bagan ini dengan penggiling pisau (blade grinder)?',
 answer:
 'Penggiling pisau menghasilkan partikel yang tidak seragam, bubuk halus dan bongkahan besar secara bersamaan. Nilai mikron bersifat indikatif, tetapi hasil sebenarnya akan sangat bervariasi dibandingkan dengan pengiling burr (burr grinder).',
 },
 {
 question: 'Apa arti keseragaman penggiling dalam visualisasi?',
 answer:
 'Distribusi partikel yang ditampilkan menyimulasikan keseragaman nyata dari setiap penggiling. Comandante C40 dengan keseragaman 0,95 menghasilkan partikel yang sangat konsisten; Hario Skerton dengan 0,40 menunjukkan variasi ukuran yang jauh lebih banyak.',
 },
 { question: 'Bagaimana menyesuaikan ukuran gilingan dengan rasa?', answer: 'Jika kopi pahit atau sepat, gunakan gilingan lebih kasar. Jika asam atau encer, gunakan gilingan lebih halus dan ubah satu pengaturan saja.' },
].slice(0, 5);

const howToData = [
 {
 name: 'Pilih penggiling Anda',
 text: 'Pilih model Anda dari daftar dropdown. Konverter akan menunjukkan klik atau level yang direkomendasikan khusus untuk peralatan Anda.',
 },
 {
 name: 'Pilih metode ekstraksi Anda',
 text: 'Klik ikon untuk metode yang Anda rencanakan. Panel kontrol akan diperbarui dengan semua parameter teknis yang relevan.',
 },
 {
 name: 'Interpretasikan indikator mikron',
 text: "Gunakan nilai mikron dalam bagan batang untuk memahami ukuran partikel yang sebenarnya. Referensi taktil (garam halus, gula pasir...) membantu Anda mengkalibrasi secara visual.",
 },
 {
 name: 'Amati simulasi partikel',
 text: "Distribusi titik menunjukkan keseragaman khas penggiling Anda. Pola yang lebih homogen berarti ekstraksi yang lebih mudah diprediksi dan diulang.",
 },
 {
 name: 'Sesuaikan berdasarkan rasa',
 text: 'Gunakan panduan diagnostik di bagian bawah sebagai referensi. Jika rasa kopi pahit, naikkan beberapa klik ke arah kasar. Jika rasanya asam, buat lebih halus. Selalu lakukan penyesuaian satu langkah dalam satu waktu.',
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
 inLanguage: 'id',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Pertanyaan yang Sering Diajukan tentang Ukuran Gilingan Kopi',
 faq: faqData,
 bibliographyTitle: 'Referensi Gilingan dan Ekstraksi',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'La Física de la Molienda: Por qué el Tamaño de Partícula lo Cambia Todo',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cuando mueles café, no solo estás reduciendo el tamaño del grano. Estás definiendo la <strong>superficie de contacto</strong> disponible para que el agua disuelva los compuestos de sabor. Una molienda demasiado fina expone tanta superficie que el agua extrae en exceso los compuestos amargos. Demasiado gruesa, y el agua pasa sin encontrar suficiente resistencia, resultando en un café débil y agrio. El conversor de molienda te da el punto exacto para cada método.',
 },
 {
 type: 'summary',
 title: '¿Qué determina el grosor de molienda correcto?',
 items: [
 '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
 '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
 '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
 '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
 ],
 },
 {
 type: 'title',
 text: 'Espresso vs V60: Los Dos Extremos del Espectro',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El <strong>espresso</strong> extrae a 9 bares de presión en apenas 25-30 segundos. Para que esto funcione, el café molido debe ofrecer exactamente la resistencia correcta: una molienda entre 300-500 micras crea ese lecho compacto. Demasiado grueso y el agua pasa en 10 segundos produciendo una taza aguada; demasiado fino y la máquina no puede generar flujo.',
 },
 {
 type: 'paragraph',
 html: 'El <strong>V60</strong>, en cambio, funciona por gravedad. El agua tiene que fluir a través de un lecho de partículas más gruesas (700-900 micras) durante 2-3 minutos completos. Si el grano está demasiado fino, el filtro de papel se satura y el café tarda demasiado, sobre-extrayendo. Si está muy grueso, el agua pasa en 60 segundos sin extraer suficiente sabor.',
 },
 {
 type: 'table',
 headers: ['Método', 'Micras', 'Referencia táctil', 'Tiempo contacto'],
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
 text: 'Uniformidad: El Factor Diferencial entre Molinos',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La <strong>uniformidad de la partícula</strong> es la métrica real que separa un molino de gama alta de uno básico. Cuando un Comandante C40 muele a 20 clics, produce partículas casi idénticas entre sí (95% uniformidad). Cuando un molino de cuchillas "muele" al mismo tiempo, el resultado es caótico: polvo fino y trozos grandes conviven, extrayéndose a velocidades completamente diferentes.',
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
 text: 'Diagnóstico por Sabor: La Brújula del Barista',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'Ninguna tabla sustituye al paladar. El conversor te da el punto de partida técnico, pero el ajuste final siempre lo hace el sabor. <strong>Amargo y seco</strong> = sobre-extracción = muele más grueso. <strong>Agrio y acuoso</strong> = sub-extracción = muele más fino. Ajusta de uno en uno (un clic, un nivel) hasta encontrar el equilibrio perfecto para tu grano y agua específicos.',
 },
 {
 type: 'tip',
 title: 'Regla de oro para nuevos cafés',
 html: '<p>Cuando abras un café nuevo, empieza siempre por el punto medio del rango recomendado para tu método. Desde ahí, ajusta según sabor en pasos de un clic. Anota el resultado de cada ajuste para construir un registro de referencia de tus cafés favoritos con cada molino.</p>',
 },
 ],
 ui: {
 step1Label: 'Langkah 1: Pemilihan Alat',
 step2Label: 'Langkah 2: Metode Ekstraksi',
 gaugeLabel: 'Peta Partikel Teknis (μm)',
 distributionLabel: 'Distribusi Partikel Sebenarnya',
 refLabel: 'Referensi',
 rangeMicrasLabel: 'Rentang μm',
 unitMicras: 'TARGET MIKRON (μm)',
 unitClicks: 'KLIK YANG DIREKOMENDASIKAN',
 unitLevel: 'LEVEL YANG DIREKOMENDASIKAN',
 suggestGrinderText: "Tidak menemukan penggiling Anda? Sarankan di sini",
 method0Name: 'Ibrik (Turki)',
 method0Ref: 'Bedak / Tepung halus',
 method0Desc: 'Bubuk ekstra halus, hampir seperti tepung. Sangat penting untuk menciptakan suspensi kopi Turki.',
 method1Name: 'Espresso',
 method1Ref: 'Garam halus',
 method1Desc: 'Ekstraksi tekanan tinggi memerlukan gilingan yang sangat halus untuk menciptakan hambatan.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Garam meja',
 method2Desc: 'Tekanan sedang atau imersi hibrida. Tekstur yang serbaguna dan seimbang.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Gula pasir',
 method3Desc: 'Metode manual pour-over, standar untuk menonjolkan kemanisan dan keasaman rasa.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Pasir kasar',
 method4Desc: 'Filter tebal atau imersi singkat. Memerlukan aliran yang konstan dan stabil.',
 method5Name: 'French Press',
 method5Ref: 'Garam kasar',
 method5Desc: 'Imersi yang lama membutuhkan partikel besar agar dapat tersaring melalui kawat filter logam.',
 method6Name: 'Cold Brew',
 method6Ref: 'Merica butiran',
 method6Desc: 'Ekstraksi dingin selama berjam-jam membutuhkan gilingan paling kasar yang dimungkinkan.',
 troubleIssue0: 'Terasa pahit, kering, atau sepat?',
 troubleSolution0:
 'Anda melakukan ekstraksi berlebihan (over-extracting). Giling lebih kasar agar air mengalir lebih cepat dan mengekstrak senyawa pahit lebih sedikit.',
 troubleAction0: 'Giling lebih kasar',
 troubleIssue1: 'Terasa asam, asin, atau encer?',
 troubleSolution1:
 'Anda melakukan ekstraksi kurang (under-extracting). Giling lebih halus untuk meningkatkan permukaan kontak dan mengekstrak lebih banyak gula dan body.',
 troubleAction1: 'Giling lebih halus',
 },
};
