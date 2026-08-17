import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

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
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
