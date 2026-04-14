import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

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
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Rasio Kopi: Panduan Utama untuk Ekstraksi Sempurna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menyeduh secangkir kopi spesialti bukanlah tindakan kuliner yang subjektif; ini adalah eksperimen dalam <strong>kimia fluida</strong> dan <strong>perpindahan massa</strong>. Di pusat proses ini terletak konsep <strong>Brew Ratio</strong>, ukuran kritis yang menentukan hubungan kuantitatif antara zat terlarut (kopi bubuk) dan pelarut (air). Kalkulator kami mengintegrasikan standar <em>Specialty Coffee Association (SCA)</em> dan prinsip-prinsip termodinamika terapan untuk memungkinkan barista dan penggemar kopi mencapai reproduksibilitas sempurna dalam ekstraksi mereka.',
    },
    {
      type: 'summary',
      title: 'Apa yang akan Anda pelajari tentang Rasio Kopi',
      items: [
        '<strong>Brew Ratio:</strong> Bagaimana hubungan berat antara kopi dan air (misalnya 1:15) menentukan potensi kekuatan dan profil sensorik cangkir Anda.',
        '<strong>TDS dan Ekstraksi:</strong> Sains di balik padatan terlarut dan berapa persentase biji kopi yang sebenarnya harus berakhir di minuman Anda.',
        '<strong>Penyesuaian Retensi:</strong> Mengapa kopi menyerap 2g air per gram kopi bubuk dan bagaimana cara menghitung air ekstra yang dibutuhkan.',
        '<strong>Metode Spesifik:</strong> Proporsi ideal untuk V60, French Press, Espresso, dan resep es kopi flash brew.',
      ],
    },
    {
      type: 'title',
      text: 'Apa itu Brew Ratio dan mengapa ini menjadi variabel terpenting?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kopi mengandung sekitar 30% bahan terlarut, tetapi tidak semua bahan tersebut diinginkan oleh lidah manusia. Air, yang bertindak sebagai pelarut universal, mengekstraksi senyawa dalam urutan tertentu berdasarkan berat molekul dan afinitas kimianya. Rasio kopi mengontrol dengan tepat seberapa banyak kapasitas pelarutan yang kita berikan pada setiap gram kopi.',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase Asam (Lipid dan Asam Organik):</strong> Ini larut pertama kali karena kelarutannya yang tinggi. Mereka memberikan kecerahan, keasaman malat atau sitrat, dan catatan buah. Rasio yang terlalu rendah (under-extraction) menghentikan proses di sini, menghasilkan kopi yang asam dan asin.',
        '<strong>Fase Manis (Gula dan Karbohidrat):</strong> Ini diekstraksi berikutnya. Mereka menghasilkan keseimbangan, kemanisan, dan body. Ini adalah "jendela emas" di mana kopi mencapai kompleksitas aromatik dan keseimbangan struktural maksimumnya.',
        '<strong>Fase Pahit (Serat dan Senyawa Fenolik):</strong> Ini adalah yang paling lambat larut. Dengan rasio yang berlebihan (over-extraction), air mendegradasi sel-sel kopi, mengekstraksi rasa pahit yang kering, abu, dan catatan kayu.',
      ],
    },
    {
      type: 'title',
      text: 'Rasio yang direkomendasikan: Proporsi berdasarkan metode ekstraksi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setiap metode ekstraksi memerlukan rasio tertentu karena variabel seperti waktu kontak, tekanan pompa, atau ukuran pori filter. Tabel teknis berikut merangkum standar industri untuk tahun 2026:',
    },
    {
      type: 'table',
      headers: ['Metode Seduh', 'Rasio (Gram/Air)', 'Profil Cangkir', 'Waktu Target'],
      rows: [
        ['Espresso', '1:2 hingga 1:2.5', 'Intens, kental, krema padat', '25-30 detik'],
        ['V60 / Pour-Over', '1:15 hingga 1:16', 'Bersih, cerah, catatan jelas', '2:30-3:30 menit'],
        ['Aeropress', '1:12 hingga 1:15', 'Serbaguna, body sedang-tinggi', '1:30-2:00 menit'],
        ['French Press', '1:12 hingga 1:14', 'Bertekstur, berat, berminyak', '4:00-5:00 menit'],
        ['Cold Brew', '1:8 hingga 1:12', 'Manis, asam rendah, body mantap', '12-24 jam'],
      ],
    },
    {
      type: 'title',
      text: 'Menghitung air yang dibutuhkan: Faktor Retensi biji kopi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salah satu kesalahan paling umum dalam penyeduhan manual adalah mengabaikan bahwa kopi bubuk adalah struktur hidrofilik berpori yang menahan jumlah air yang konstan. Tidak semua air yang Anda tuangkan berakhir di cangkir.',
    },
    {
      type: 'paragraph',
      html: 'Secara ilmiah, kopi bubuk menahan sekitar <strong>2.0 gram air per 1.0 gram kopi</strong>. Kalkulator kami memperkenalkan <strong>Penyesuaian Retensi Dinamis</strong>: jika Anda perlu mengisi wadah 300ml tertentu, sistem menyimpulkan bahwa Anda harus menuangkan 340ml air untuk mengompensasi penyerapan biji kopi, menjaga rasio ekstraksi — dan aromanya — tetap utuh.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Dosis Kopi', value: '20g', icon: 'mdi:coffee' },
        { label: 'Air Dituang', value: '300ml', icon: 'mdi:water' },
        { label: 'Retensi', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'Di Cangkir', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'Pentingnya Bloom: degassing untuk ekstraksi seragam',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fase "Bloom" bukan sekadar estetika; ini adalah kebutuhan fisik. Selama penyangraian, kopi menghasilkan CO2 yang terperangkap dalam matriks selulernya. Jika kita menuangkan semua air secara terus-menerus, gas tersebut keluar dengan hebat, menciptakan saluran mikro (channeling) dan mencegah pelarut menembus ke pusat partikel kopi.',
    },
    {
      type: 'tip',
      title: 'Teknik Penjenuhan Homogen',
      html: '<p>Untuk bloom yang sempurna, tuangkan tepat dua kali berat kopi dalam air (rasio bloom 1:2). Aduk perlahan atau putar merata untuk memastikan semua kopi basah. Tunggu 30-45 detik. Pelepasan gas akan memungkinkan tuangan berikutnya mengalir secara laminar, mengekstraksi padatan secara seragam di seluruh lapisan kopi.</p>',
    },
    {
      type: 'title',
      text: 'Tutorial Es Kopi: Cara menyeduh es kopi tanpa menghilangkan rasanya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es kopi spesialti (Flash Brew) memerlukan kalibrasi ulang termodinamika. Tujuannya adalah mengekstraksi minyak volatil pada suhu 94°C untuk menangkap kompleksitas aromatik, lalu mendinginkannya dengan cepat untuk menghindari oksidasi dan hilangnya kecerahan rasa.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% Air Panas:</strong> Jumlah minimum yang dibutuhkan untuk mencapai ekstraksi 18-20% tanpa ekstraksi berlebih atau mendinginkan bubuk kopi terlalu dini.',
        '<strong>40% Es Termal:</strong> Diletakkan di wadah penampung. Energi termal dari kopi berpindah ke es (panas laten fusi), mendinginkan minuman hingga di bawah 5°C secara instan.',
        '<strong>Kekuatan Akhir:</strong> Jika digabungkan, rasio akhir (misalnya 1:15) tetap tepat, menghasilkan minuman dingin yang segar dengan konsentrasi rasa yang benar.',
      ],
    },
    {
      type: 'title',
      text: 'Ukuran gilingan dan Rasio Kopi: Kunci luas permukaan kontak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rasio hanyalah setengah dari persamaan. Gilingan menentukan <strong>Total Luas Permukaan yang Terpapar</strong> pada pelarut. Partikel yang lebih kecil (gilingan halus) memiliki luas permukaan yang lebih proporsional, yang secara dramatis mempercepat ekstraksi senyawa kimia.',
    },
    {
      type: 'title',
      text: 'Reproduksibilitas dan Sains: Ubah dapur Anda menjadi laboratorium barista',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keunggulan dalam kopi spesialti berasal dari konsistensi metrik. Fitur <strong>Resep Kustom</strong> kami memungkinkan Anda membuat repositori teknis dari kalibrasi Anda yang berhasil. Ini bukan sekadar folder favorit; ini adalah alat analisis untuk membandingkan bagaimana 1kg kopi yang sama bereaksi terhadap rasio 1:15 versus 1:16, memungkinkan Anda menyesuaikan resep dengan presisi.',
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
