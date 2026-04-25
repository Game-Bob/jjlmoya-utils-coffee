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
      text: 'Kimia Air Kopi: Mengapa H₂O Adalah Bahan yang Paling Sering Diabaikan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kopi mengandung 98-99% air. Namun komposisi mineral air tersebut adalah faktor kualitas yang paling sering diabaikan dalam seluruh rantai kopi spesialti. Kopi single-origin Etiopia yang sama yang diekstraksi dengan air keran London dibandingkan dengan air yang dioptimalkan SCA dapat terasa seperti dua kopi yang sangat berbeda. <strong>Kalkulator air kopi SCA</strong> kami memungkinkan Anda merumuskan air seduhan sempurna dari awal menggunakan garam mineral umum dan air distilasi.',
    },
    {
      type: 'summary',
      title: 'Mengapa mineralisasi air sangat penting?',
      items: [
        '<strong>GH (General Hardness):</strong> Jumlah ion Magnesium dan Kalsium menentukan kapasitas air untuk melarutkan senyawa rasa kopi.',
        '<strong>KH (Carbonate Hardness):</strong> Konsentrasi bikarbonat mengontrol pH selama ekstraksi. KH rendah menghasilkan kopi asam; KH tinggi membuatnya terasa datar.',
        '<strong>Konsistensi:</strong> Air PAM berubah berdasarkan musim dan lokasi. Air hasil mineralisasi tetap konstan dan dapat direproduksi di setiap seduhan.',
        '<strong>Perlindungan peralatan:</strong> Kadar mineral yang tepat mencegah korosi (air terlalu murni) dan penumpukan kerak (air terlalu keras).',
      ],
    },
    {
      type: 'title',
      text: 'Standar SCA: Batas Teknis untuk Air Seduhan yang Sempurna',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Minimun', 'SCA Ideal', 'Maksimum'],
      rows: [
        ['Total Hardness (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alkalinity (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnesium vs Kalsium: Pertarungan Mineral yang Menentukan Cangkir Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua mineral berperilaku dengan cara yang sama terhadap kopi. Peneliti Christopher Hendon mendemonstrasikan bahwa <strong>magnesium</strong> membentuk ligan dengan molekul rasa volatil yang kompleks, mengekstraksi aroma buah dan bunga dengan lebih efisien. <strong>Kalsium</strong> mengekstraksi senyawa yang lebih berat, memberikan body dan tekstur halus namun dengan kecerahan aromatik yang lebih sedikit.',
    },
    {
      type: 'tip',
      title: 'Aturan praktis barista profesional',
      html: '<p>Untuk mesin espresso dengan boiler kuningan atau tembaga, jangan pernah menggunakan profil dengan KH di bawah 40 mg/L secara terus-menerus. Air yang sangat murni bersifat korosif dalam jangka panjang. Untuk metode filter (V60, Chemex, AeroPress) tidak ada boiler yang perlu dilindungi, jadi Anda dapat dengan aman menggunakan profil halus seperti Melbourne tanpa rasa khawatir.</p>',
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
