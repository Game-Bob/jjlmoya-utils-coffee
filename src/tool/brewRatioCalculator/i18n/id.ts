import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-rasio-kopi';
const title = 'Kalkulator Rasio Seduh Kopi';
const description =
 'Hitung gram kopi atau mililiter air yang tepat untuk rasio ideal Anda (1:15, 1:16...). Termasuk hasil akhir di cangkir, panduan menuang, mode es kopi, dan simpan resep.';

const faqData = [
 {
 question: 'Apa itu rasio kopi 1:15?',
 answer:
 'Artinya untuk setiap gram kopi bubuk, Anda menggunakan 15 mililiter (atau gram) air. Dengan 20g kopi, Anda menuangkan 300ml air. Ini adalah rasio standar yang direkomendasikan oleh Specialty Coffee Association untuk metode filter seperti V60, Chemex, atau Aeropress.',
 },
 {
 question: 'Mengapa jumlah kopi di cangkir saya lebih sedikit daripada yang saya tuangkan?',
 answer:
 'Karena kopi bubuk menahan air selama ekstraksi. Rata-rata, setiap gram kopi menyerap sekitar 2ml cairan. Jika Anda menuangkan 300ml ke 20g kopi, Anda akan mendapatkan sekitar 260ml di cangkir. Kalkulator ini menunjukkan hasil nyata kepada Anda.',
 },
 {
 question: 'Apa itu bloom atau pra-infusi?',
 answer:
 'Ini adalah tuangan air pertama, setara dengan dua kali berat kopi (2ml per gram). Dilakukan untuk melepaskan gas pada kopi segar: CO2 yang terperangkap saat penyangraian keluar dan memungkinkan air mengekstraksi senyawa secara merata. Jika tidak ada bloom yang terlihat, kopi tersebut sudah lama digiling atau disangrai.',
 },
 {
 question: 'Bagaimana cara membuat es kopi tanpa terasa encer?',
 answer:
 'Gunakan teknik flash chilling: siapkan 60% dari total air sebagai air panas bersuhu 90-96 derajat dan masukkan 40% sisanya sebagai es di dalam server/teko. Tuangkan kopi panas langsung ke atas es. Pendinginan cepat akan mengunci aroma. Kalkulator ini secara otomatis menghitung ulang jumlahnya saat Anda mengaktifkan mode Iced Coffee.',
 },
 {
 question: 'Berapa rasio terbaik untuk Aeropress?',
 answer:
 'Antara 1:12 dan 1:15 tergantung penggunaan. Jika Anda minum kopi hitam, 1:15 adalah seimbang. Jika Anda menggunakannya sebagai dasar untuk minuman susu atau ingin konsentrasi tinggi, turunkan ke 1:12 atau 1:13. Aeropress adalah metode yang paling serbaguna justru karena dapat menangani berbagai rasio dengan sangat baik.',
 },
 {
 question: 'Bisakah saya menyimpan resep favorit saya?',
 answer:
 'Ya. Setelah Anda menemukan rasio dan jumlah yang sempurna untuk kopi favorit Anda, tekan tombol Simpan resep, beri nama (misalnya, V60 Pagi) dan resep tersebut akan tersimpan di browser Anda. Anda dapat membukanya kembali kapan saja dengan satu klik.',
 },
];

const howToData = [
 {
 name: 'Pilih mode perhitungan',
 text: 'Pilih apakah Anda memulai dari gram kopi yang Anda miliki atau kapasitas cangkir Anda (ml air). Kalkulator menyesuaikan semua hasil dengan mode yang dipilih.',
 },
 {
 name: 'Masukkan jumlah',
 text: 'Ketik gram kopi atau mililiter air yang akan Anda gunakan. Kalkulator secara otomatis akan menghitung nilai lainnya berdasarkan rasio yang dipilih.',
 },
 {
 name: 'Pilih intensitas',
 text: 'Pilih antara Kuat (1:12-14), Seimbang (1:15-16), Ringan (1:17-18) atau masukkan rasio kustom Anda. Setiap opsi sesuai dengan profil rasa yang berbeda.',
 },
 {
 name: 'Aktifkan mode Iced Coffee (opsional)',
 text: 'Jika Anda membuat es kopi, aktifkan toggle-nya. Kalkulator secara otomatis akan membagi air antara air panas (60%) dan es (40%) menggunakan teknik flash chilling.',
 },
 {
 name: 'Ikuti panduan menuang',
 text: 'Gunakan panduan fase (Bloom dan Tuangan Akhir) untuk menyusun proses penyeduhan Anda. Setiap fase menunjukkan dengan tepat berapa banyak air yang harus dituang dan kapan.',
 },
 {
 name: 'Simpan resep',
 text: 'Saat Anda menemukan rasio sempurna, simpan dengan nama yang deskriptif. Resep Anda disimpan di browser untuk sesi mendatang.',
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
 inLanguage: 'id',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Pertanyaan yang Sering Diajukan tentang Rasio Seduh',
 faq: faqData,
 bibliographyTitle: 'Referensi Teknis dan Standar SCA',
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
 modeCoffee: 'Saya punya Kopinya',
 modeHintCoffee: 'Beri tahu saya berapa banyak airnya',
 modeWater: 'Saya punya Airnya',
 modeHintWater: 'Beri tahu saya berapa banyak kopi yang harus digiling',
 inputLabelCoffee: 'Gram kopi yang Anda miliki',
 inputLabelWater: 'Kapasitas cangkir Anda (ml)',
 intensityLabel: 'Intensitas kopi',
 intensityStrong: 'Kuat',
 intensityBalanced: 'Seimbang',
 intensityLight: 'Ringan',
 intensityCustom: 'Kustom',
 customCoffeeLabel: 'Kopi',
 customWaterLabel: 'Air',
 icedModeLabel: 'Mode Es Kopi',
 recipeLabel: 'Resep tepat Anda',
 resultTitle: 'Hasil',
 resultCoffeeLabel: 'Kopi',
 resultCoffeeSub: 'Gilingan halus-sedang',
 resultHotWaterLabel: 'Air panas',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Air panas (60%)',
 resultIceLabel: 'Es',
 resultIceSub: 'Di teko/server',
 resultCupLabel: 'Di cangkir Anda',
 resultCupSub: 'Kopi menahan ~2ml/g',
 pouringGuideLabel: 'Panduan menuang',
 favoritesLabel: 'Resep favorit saya',
 saveBtn: '+ Simpan resep ini',
 favEmptyText: 'Belum ada resep yang disimpan. Atur seduhan sempurna Anda dan simpan.',
 modalTitle: 'Beri nama resep Anda',
 modalPlaceholder: 'Misal: "V60 Pagi"',
 modalCancel: 'Batal',
 modalConfirm: 'Simpan',
 phaseBloomTemplate: 'Bloom: Tuang {bloomMl} ml air secara melingkar. Tunggu {bloomSeconds} detik untuk melepaskan gas kopi.',
 phasePourTemplate: 'Tuangan akhir: Tambahkan sisanya hingga mencapai {hotWaterMl} ml dalam {pourCount} tuangan perlahan.',
 phaseIcedTemplate: 'Es Kopi: Tuangkan kopi panas langsung ke atas {iceMl} g es di teko/server.',
 cupWarningTemplate: 'Cangkir hanya menampung {inCupMl} ml. Kopi menahan cairan.',
 favModeCoffee: 'g kopi',
 favModeWater: 'ml air',
 favModeIced: ' - Es',
 },
};
