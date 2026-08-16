import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-air-kopi-sca';
const title = 'Kalkulator Air Kopi SCA';
const description =
 'Hitung konsentrasi mineral yang tepat untuk kopi spesialti. Profil SCA, Barista Hustle, dan Hendon. Kontrol Magnesium, Kalsium, dan Bikarbonat untuk memaksimalkan rasa dan melindungi mesin Anda.';

const faqData = [
 {
 question: 'Apa standar kualitas air SCA?',
 answer:
 'Specialty Coffee Association menetapkan standar teknis untuk air seduhan, menentukan rentang optimal untuk tingkat kekerasan total (GH), alkalinitas (KH), pH, dan natrium untuk mencapai ekstraksi seimbang yang meningkatkan rasa tanpa merusak peralatan.',
 },
 {
 question: 'Mengapa tidak menggunakan air keran saja?',
 answer:
 'Air keran sangat bervariasi berdasarkan lokasi dan musim. Air tersebut mungkin mengandung klorin, kerak kapur berlebih, atau kadar mineral yang menutupi rasa kopi spesialti dan merusak boiler serta segel. Mineralisasi air distilasi memberi Anda kontrol penuh dan hasil yang konsisten.',
 },
 {
 question: 'Di mana saya bisa mendapatkan garam mineral?',
 answer:
 'Garam Epsom (magnesium sulfat) dan natrium bikarbonat tersedia di apotek dan supermarket. Kalsium klorida umum ditemukan di toko perlengkapan home brewing. Selalu pastikan bahan tersebut memiliki kualitas food-grade.',
 },
 {
 question: 'Apakah aman untuk mesin espresso saya?',
 answer:
 'Kalkulator ini mencakup indikator risiko waktu nyata. Air yang sangat murni mengorupsi komponen logam; air yang sangat keras menyebabkan penumpukan kerak. Profil SCA Ideal dan Barista Hustle dirancang untuk menyeimbangkan keawetan peralatan dengan kualitas rasa.',
 },
 {
 question: 'Apa perbedaan antara Magnesium dan Kalsium dalam kopi?',
 answer:
 'Magnesium mengekstraksi senyawa rasa buah dan manis dengan lebih efisien dan merupakan mineral pilihan untuk metode filter. Kalsium memberikan lebih banyak body dan tekstur halus tetapi memiliki kecenderungan lebih besar untuk membentuk endapan kerak di boiler seiring waktu.',
 },
 { question: 'Bisakah konsentrasi biasa disimpan?', answer: 'Bisa. Kalkulator menyimpan nilai konsentrat di browser agar resep khusus tersedia saat Anda berkunjung lagi.' },
];

const howToData = [
 {
 name: 'Dapatkan air dasar yang murni',
 text: 'Beli air distilasi (aquades) atau air demineralisasi, atau gunakan sistem reverse osmosis. Tujuannya adalah memulai dari 0 ppm total zat terlarut untuk kontrol penuh atas mineralisasi.',
 },
 {
 name: 'Siapkan botol konsentrat stok Anda',
 text: 'Larutkan setiap garam secara terpisah dalam 100ml air distilasi: 2,46g garam Epsom untuk Magnesium, 1,47g CaCl2 untuk Kalsium, dan 1,68g bikarbonat untuk Buffer.',
 },
 {
 name: 'Pilih profil target Anda',
 text: 'Pilih SCA Ideal (seimbang), Barista Hustle (kemanisan dan kecerahan), Hendon (body), Melbourne (halus) atau buat profil kustom dengan nilai GH dan KH Anda sendiri.',
 },
 {
 name: 'Masukkan volume akhir',
 text: 'Ketik jumlah air yang ingin Anda mineralisasi dalam liter. Kalkulator secara otomatis menyesuaikan dosis konsentrat untuk volume tepat tersebut.',
 },
 {
 name: 'Tambahkan konsentrat dan isi dengan air distilasi',
 text: 'Menggunakan alat suntik presisi, tambahkan mililiter yang ditentukan dari setiap konsentrat ke wadah Anda dan isi hingga volume total dengan air distilasi.',
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Pertanyaan yang Sering Diajukan tentang Kalkulator Air Kopi SCA',
 faq: faqData,
 bibliographyTitle: 'Referensi Teknis dan Standar SCA',
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
 sectionMixTitle: 'Konfigurasi Campuran',
 labelVolume: 'Volume Akhir',
 labelProfile: 'Target Profil Air',
 customProfileBtn: 'Kustom',
 labelGH: 'Target GH',
 labelKH: 'Target KH',
 concentratesTitle: 'Botol Konsentrat Stok (g/100ml)',
 saltMgName: 'Magnesium (Epsom)',
 saltCaName: 'Kalsium (CaCl2)',
 saltBufName: 'Bicarbonat (Natrium)',
 recipeTitle: 'Resep',
 labelMg: 'Magnesium:',
 labelCa: 'Kalsium:',
 labelBuffer: 'Bikarbonat:',
 labelDistilledWater: 'Isi Air Distilasi hingga',
 copyBtn: 'Salin Resep',
 copiedText: 'Tersalin!',
 safetyMetalsTitle: 'Keamanan Logam',
 safetyScaleTitle: 'Risiko Kerak',
 calculatingText: 'Menghitung...',
 glossaryTitle: 'Panduan Singkat Mineral',
 profileSubTemplate: 'Target: {gh} GH / {kh} KH',
 customProfileName: 'Kustom',
 corrosionHigh: 'Bahaya: Air sangat agresif. Dapat mengorupsi boiler dan komponen tembaga.',
 corrosionMedium: 'Dapat Diterima: Risiko korosi sedang. Direkomendasikan untuk metode filter dengan kehati-hatian pada mesin.',
 corrosionLow: 'Aman: Air memiliki kapasitas buffer yang cukup untuk melindungi logam.',
 scaleHigh: 'Bahaya: Penumpukan kerak akan segera terjadi. Gunakan hanya dengan metode filter manual.',
 scaleMedium: 'Peringatan: Dapat menghasilkan endapan kerak seiring waktu di mesin espresso.',
 scaleLow: 'Aman: Tidak ada risiko penumpukan kerak yang signifikan.',
 copyTemplate:
 'Resep Air Kopi ({profileName}):\n- Volume: {liters}L\n- Konsentrat Magnesium: {mg}ml\n- Konsentrat Kalsium: {ca}ml\n- Konsentrat Bikarbonat: {buf}ml\n- Air Distilasi: {water}ml',
 glossary0Term: 'Total Hardness (GH)',
 glossary0Desc:
 'Jumlah Kalsium dan Magnesium. Magnesium meningkatkan kemanisan dan kompleksitas; Kalsium menambah body dan tekstur.',
 glossary1Term: 'Alkalinitat (KH)',
 glossary1Desc:
 'Kapasitas air untuk menetralkan asam. KH tinggi menekan keasaman kopi; KH rendah membuatnya terasa asam.',
 glossary2Term: 'TDS (Total Dissolved Solids)',
 glossary2Desc: 'Dalam air yang dimineralisasi, TDS mewakili konsentrasi gabungan dari semua garam mineral yang ditambahkan.',
 glossary3Term: 'Magnesium',
 glossary3Desc:
 'Mengekstraksi senyawa rasa buah yang kompleks dengan lebih efisien. Mineral pilihan untuk penyeduhan kopi spesialti.',
 },
};
