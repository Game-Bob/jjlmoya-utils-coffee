import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-rasio-kopi-cold-brew';
const title = 'Kalkulator rasio kopi cold brew';
const description = 'Hitung kopi, air seduh, pengenceran konsentrat, waktu rendam, dan hasil sajian cold brew dalam satuan metrik atau imperial.';

const faqData = [
  { question: 'Rasio kopi dan air apa yang sebaiknya digunakan untuk cold brew?', answer: 'Mulailah dengan rasio 1:8 untuk cold brew siap minum atau 1:5 untuk konsentrat yang akan diencerkan. Rasio terbaik bergantung pada kopi, tingkat giling, waktu, dan cara penyajian.' },
  { question: 'Berapa banyak kopi untuk 1 liter cold brew?', answer: 'Pada rasio 1:8, gunakan 125 gram kopi dengan 1.000 mililiter air seduh. Kalkulator juga memperkirakan air yang tertahan di ampas kopi.' },
  { question: 'Bisakah cold brew dihitung dalam ounce dan fluid ounce?', answer: 'Bisa. Pilih Imperial untuk melihat kopi dalam ounce dan air dalam fluid ounce. Perhitungan dasarnya tetap memakai gram dan mililiter agar rasionya konsisten.' },
  { question: 'Apa perbedaan cold brew siap minum dan konsentrat?', answer: 'Cold brew siap minum diseduh mendekati kekuatan sajian. Konsentrat memakai lebih banyak kopi untuk jumlah air yang sama, lalu dicampur dengan air atau susu setelah disaring.' },
  { question: 'Berapa lama cold brew harus direndam?', answer: 'Sebagai titik awal, gunakan 12 sampai 18 jam dengan metode rendam penuh di kulkas atau ruangan sejuk. Waktu lebih lama dapat menambah rasa pahit atau sepat.' },
  { question: 'Apakah kalkulator memperhitungkan air yang tertahan di ampas?', answer: 'Ya. Kalkulator memakai perkiraan 2 mililiter air tertahan per gram kopi untuk memperkirakan hasil. Filter, tingkat giling, dan waktu tiris mengubah hasil sebenarnya.' },
  { question: 'Apakah kalkulator ini merupakan panduan keamanan pangan?', answer: 'Bukan. Kalkulator hanya menghitung jumlah resep. Gunakan peralatan bersih, dinginkan minuman bila diperlukan, dan ikuti panduan penyimpanan serta penyajian terbaru.' },
];

const howToData = [
  { name: 'Pilih gaya seduh', text: 'Pilih siap minum untuk disajikan langsung atau konsentrat jika akan menambahkan air atau susu setelahnya.' },
  { name: 'Atur air seduh', text: 'Masukkan jumlah air yang akan digunakan dalam wadah seduh. Kalkulator menyesuaikan dosis kopi berdasarkan volume dan rasio.' },
  { name: 'Atur rasio', text: 'Pilih profil atau gerakkan penggeser rasio. Angka lebih kecil menghasilkan seduhan lebih kuat dan angka lebih besar lebih ringan.' },
  { name: 'Atur waktu dan pengenceran', text: 'Gunakan waktu sebagai panduan perencanaan. Dalam mode konsentrat, tentukan jumlah air untuk setiap bagian kopi yang sudah diseduh.' },
  { name: 'Ikuti kartu batch', text: 'Gunakan alur batch dan langkahnya untuk menimbang kopi, menambahkan air, merendam, menyaring, dan mengencerkan hasil sajian.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Rasio dan perencanaan batch cold brew', level: 2 },
  { type: 'paragraph', html: 'Cold brew lebih mudah dibuat konsisten ketika massa kopi, air seduh, pengenceran, dan waktu rendam diatur terpisah. Kalkulator ini mengubah gaya pilihan Anda menjadi resep berbobot.' },
  { type: 'title', text: 'Pilih siap minum atau konsentrat', level: 2 },
  { type: 'paragraph', html: 'Resep siap minum diseduh mendekati kekuatan sajian. Resep konsentrat memakai rasio yang lebih kuat lalu ditambah air setelah penyaringan.' },
  { type: 'table', headers: ['Gaya', 'Rasio awal', 'Pengenceran', 'Penggunaan'], rows: [['Siap minum', '1:8', 'Tidak ada', 'Sajikan dingin atau dengan es'], ['Batch lembut', '1:10', 'Tidak ada', 'Cangkir harian yang lebih ringan'], ['Konsentrat', '1:5', '1:1', 'Campur dengan air atau susu']] },
  { type: 'title', text: 'Cara kerja perhitungan cold brew', level: 2 },
  { type: 'list', items: ['Dosis kopi sama dengan air seduh dibagi rasio yang dipilih.', 'Hasil seduhan diperkirakan setelah mengurangi sekitar 2 mililiter air tertahan per gram kopi.', 'Pengenceran konsentrat dihitung dari hasil seduhan agar volume sajian mudah dibaca.'] },
  { type: 'title', text: 'Ukuran metrik dan imperial untuk cold brew', level: 2 },
  { type: 'paragraph', html: 'Pilih gram dan mililiter untuk resep metrik atau ounce dan fluid ounce untuk resep imperial. Hubungan antara massa dan volume tetap konsisten.' },
  { type: 'table', headers: ['Ukuran', 'Metrik', 'Imperial'], rows: [['Dosis kopi', 'g', 'oz'], ['Air dan hasil', 'ml', 'fl oz'], ['Rasio seduh', '1 bagian kopi', '1 bagian kopi']] },
  { type: 'tip', title: 'Gunakan hasil sebagai resep awal', html: '<p>Asal kopi, tingkat giling, filter, suhu, dan waktu tiris mengubah ekstraksi serta hasil. Cicipi batch pertama dan ubah satu variabel pada satu waktu.</p>' },
  { type: 'title', text: 'Waktu rendam dan keamanan pangan cold brew', level: 2 },
  { type: 'paragraph', html: 'Penggeser waktu membantu merencanakan resep, tetapi tidak menjamin rasa atau keamanan. Gunakan peralatan bersih dan ikuti panduan terbaru untuk pendinginan, penyimpanan, dan penyajian.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Pertanyaan cold brew', faq: faqData, bibliographyTitle: 'Referensi penyeduhan kopi', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Buat batch Anda', modeReady: 'Siap minum', modeReadyHint: 'Seduh dan sajikan', modeConcentrate: 'Konsentrat', modeConcentrateHint: 'Seduh lalu encerkan', unitSystemLabel: 'Sistem ukuran', unitMetric: 'Metrik', unitImperial: 'Imperial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Mulai dengan profil', presetClassic: 'Klasik 1:8', presetSmooth: 'Lembut 1:10', presetConcentrate: 'Konsentrat 1:5', presetCustom: 'Kustom', brewWaterLabel: 'Air seduh', brewWaterHint: 'Air untuk menyeduh', ratioLabel: 'Rasio kopi dan air', ratioHint: 'Air per gram kopi', dilutionLabel: 'Air pengencer', dilutionHint: 'Bagian air per bagian kopi seduh', steepLabel: 'Waktu rendam', steepHint: 'Rentang perencanaan', hoursUnit: 'jam', resultTitle: 'Batch Anda', resultBadgeReady: 'Siap minum', resultBadgeConcentrate: 'Konsentrat', coffeeLabel: 'Kopi bubuk', brewWaterResultLabel: 'Air seduh', retainedLabel: 'Tertahan di ampas', dilutionWaterLabel: 'Air pengencer', servedYieldLabel: 'Perkiraan hasil sajian', ratioResultLabel: 'Rasio', steepResultLabel: 'Rendam', steepStatusShort: 'Rendam singkat', steepStatusBalanced: 'Rendam seimbang', steepStatusLong: 'Rendam lama', stageCaption: 'Batch lembut siap masuk kulkas', stageCaptionConcentrate: 'Konsentrat pekat menunggu pengenceran', stepsTitle: 'Langkah resep', visualTitle: 'Alur batch', visualBrewCaption: 'Seduh', visualFilterCaption: 'Saring', visualServeCaption: 'Sajikan', visualCoffeeDose: 'Dosis kopi', visualWaterInput: 'Air seduh', visualRetained: 'Tertahan di ampas', visualServed: 'Hasil seduhan', visualDilution: 'Air pengencer', stepCoffee: 'Timbang {coffee} {coffeeUnit} kopi yang digiling kasar.', stepWater: 'Tambahkan {water} {waterUnit} air dan basahi ampas sepenuhnya.', stepSteep: 'Tutup dan rendam selama sekitar {hours} jam.', stepDilute: 'Setelah disaring, tambahkan {water} {waterUnit} air pengencer.', stepServe: 'Dinginkan dan sajikan sekitar {yield} {waterUnit}.', noteTitle: 'Perkiraan yang berguna', noteText: 'Ampas kopi menahan air selama penyaringan. Jumlahnya merupakan perkiraan, jadi kalibrasikan batch pertama dengan filter dan cara meniriskan Anda.', copyRecipe: 'Salin resep', copiedText: 'Resep disalin', resetText: 'Atur ulang', copyTemplate: 'Resep cold brew\nKopi: {coffee} {coffeeUnit}\nAir seduh: {brewWater} {waterUnit}\nRasio: 1:{ratio}\nRendam: {hours} jam\nAir pengencer: {dilutionWater} {waterUnit}\nPerkiraan hasil sajian: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Referensi',
  },
};
