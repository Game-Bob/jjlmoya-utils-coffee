import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'kalkulator-rasio-aeropress';
const title = 'Kalkulator Rasio dan Resep Kopi AeroPress';
const description = 'Hitung distribusi air, kapasitas chamber, pengenceran bypass dan tahapan ekstraksi seduh kopi AeroPress.';

const howTo = [
  {
    name: 'Pilih metode dan model AeroPress',
    text: 'Pilih metode Standar atau Terbalik (Inverted) dan tentukan ukuran tabung AeroPress Anda (Original, XL atau Go).',
  },
  {
    name: 'Atur dosis kopi dan rasio seduh',
    text: 'Masukkan berat kopi bubuk dalam gram dan target rasio, atau pilih resep barista juara dunia.',
  },
  {
    name: 'Periksa air chamber dan air bypass',
    text: 'Pastikan apakah volume air melebihi batas tabung. Alat ini otomatis menghitung air bypass yang dituang langsung ke cangkir.',
  },
  {
    name: 'Ikuti timer tahapan interaktif',
    text: 'Gunakan pengatur waktu untuk mengontrol blooming, perendaman (steeping), dan penekanan plunger secara tepat.',
  },
];

const faq = [
  {
    question: 'Apa perbedaan metode standar dan terbalik pada AeroPress?',
    answer: 'Pada metode standar, alat diletakkan langsung di atas cangkir sehingga terjadi sedikit tetesan awal sebelum plunger dipasang. Pada metode terbalik, AeroPress berdiri terbalik di atas plunger untuk perendaman total yang kedap cairan.',
  },
  {
    question: 'Apa yang dimaksud dengan teknik bypass brewing?',
    answer: 'Bypass brewing adalah teknik mengekstraksi konsentrat kopi pekat di dalam chamber lalu mengencerkannya dengan air panas bersih langsung di cangkir. Ini memungkinkan pembuatan porsi besar tanpa tumpah.',
  },
  {
    question: 'Berapa rasio kopi dan air yang ideal untuk AeroPress?',
    answer: 'Untuk kopi filter klasik, rasio antara 1:14 hingga 1:17 (misalnya 11g-15g kopi per 200g air) memberikan keseimbangan rasa yang optimal. Untuk konsentrat pekat, rasio 1:4 hingga 1:8 sangat ideal.',
  },
  {
    question: 'Bagaimana ukuran gilingan mempengaruhi ekstraksi AeroPress?',
    answer: 'Gilingan medium-fine sangat pas untuk waktu seduh singkat 1-2 menit. Gilingan lebih halus meningkatkan body, sedangkan gilingan lebih kasar mencegah rasa pahit berlebih pada waktu seduh lama.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Alat Specialty Coffee',
    profileLabel: 'Profil Ekstraksi',
    unitSystemLabel: 'Sistem Satuan',
    unitMetricLabel: 'Metrik (g)',
    unitImperialLabel: 'Imperial (oz)',
    presetsTitle: 'Resep Barista dan Kejuaraan',
    presetCustom: 'Formula Kustom',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Sangrai Terang',
    presetWacChamp: 'Juara WAC Bypass',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Es AeroPress',
    methodLabel: 'Teknik Seduh',
    methodStandard: 'Standar Tegak',
    methodInverted: 'Terbalik Imersi',
    modelLabel: 'Model AeroPress',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Dosis Kopi',
    doseUnitMetric: 'gram',
    doseUnitImperial: 'oz',
    ratioLabel: 'Rasio Seduh',
    ratioPrefix: '1:',
    waterTempLabel: 'Suhu Air',
    waterTempUnit: '°C',
    grindLabel: 'Profil Gilingan',
    grindFine: 'Halus',
    grindMediumFine: 'Sedang Halus',
    grindMedium: 'Sedang',
    grindCoarse: 'Kasar',
    resultsTitle: 'Distribusi Air dan Metrik',
    statTotalWater: 'Total Air',
    statChamberWater: 'Air di Chamber',
    statBypassWater: 'Air Bypass',
    statYield: 'Hasil Minuman',
    statEstimatedTds: 'Estimasi TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Pengenceran Bypass Diperlukan',
    bypassAlertText: 'Resep Anda memerlukan {chamber} di dalam chamber dan {bypass} ditambahkan langsung ke cangkir.',
    timerTitle: 'Timer Tahapan Seduh',
    timerStart: 'Mulai Timer',
    timerPause: 'Jeda',
    timerReset: 'Reset',
    phaseBloom: 'Blooming dan Pembasahan',
    phasePour: 'Penuangan dan Aduk',
    phaseSteep: 'Imersi dan Ekstraksi',
    phasePress: 'Tekan Perlahan',
    phaseBypass: 'Tambah Air Bypass',
    phaseComplete: 'Kopi Siap',
    guideTitle: 'Panduan Ekstraksi',
    guideStep1Title: 'Bilas filter dan timbang kopi',
    guideStep1Desc: 'Pasang filter kertas di tutupnya dan bilas air panas. Masukkan bubuk kopi segar ke dalam tabung.',
    guideStep2Title: 'Tuang air ke tabung',
    guideStep2Desc: 'Tuang air yang dihitung pada suhu yang tepat dan aduk perlahan.',
    guideStep3Title: 'Pasang plunger dan diamkan',
    guideStep3Desc: 'Pasang plunger di bagian atas untuk menciptakan ruang hampa udara dan biarkan menyeduh.',
    guideStep4Title: 'Tekan dan encerkan',
    guideStep4Desc: 'Tekan plunger perlahan selama 20-30 detik. Berhenti saat terdengar desisan dan tambahkan air bypass.',
    ratioStrengthLight: 'Ringan dan Lembut',
    ratioStrengthMedium: 'Cangkir Seimbang',
    ratioStrengthStrong: 'Kaya dan Pekat',
    ratioStrengthConcentrate: 'Konsentrat Espresso',
    chamberWaterLabel: 'Air di Chamber',
    coffeeBedLabel: 'Bubuk Kopi',
    airGapLabel: 'Rongga Udara',
  },
  seo: [
    { type: 'title', text: 'Prinsip Ekstraksi dan Rasio Seduh AeroPress', level: 2 },
    {
      type: 'paragraph',
      html: 'Alat seduh <strong>AeroPress</strong> memadukan perendaman total (immersion) dengan penyaringan tekanan udara pneumatik. Meraih seduhan yang manis, bersih, dan harum membutuhkan kendali tepat atas rasio kopi dan air.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Batas Kapasitas Tabung dan Fisika Bypass',
      html: 'Chamber AeroPress standar menampung sekitar 220ml hingga 240ml air setelah dikurangi ruang bubuk kopi. Untuk volume lebih besar, barista menggunakan teknik bypass.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Rasio Emas Filter' },
        { value: '230 ml', label: 'Kapasitas Standar Tabung' },
        { value: '1.2 - 1.5%', label: 'Target TDS Optimal' },
      ],
    },
    { type: 'title', text: 'Perbandingan Metode Standar dan Terbalik', level: 3 },
    {
      type: 'paragraph',
      html: 'Posisi alat mempengaruhi durasi kontak air dan keseragaman ekstraksi.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metode Standar Tegak',
          description: 'Tutup filter berada di cangkir. Pemasangan plunger menciptakan vakum yang menghentikan tetesan awal.',
          points: [
            'Sangat mudah dan aman',
            'Sedikit perkolasi di awal',
            'Direkomendasikan James Hoffmann untuk konsistensi',
          ],
        },
        {
          title: 'Metode Terbalik Inverted',
          description: 'AeroPress berdiri di atas plunger sehingga tidak ada air yang lolos hingga dibalikkan.',
          highlight: true,
          points: [
            'Kontrol total atas waktu seduh',
            'Sangat cocok untuk dosis tinggi dan konsentrat',
            'Butuh kehati-hatian saat membalikkan tabung panas',
          ],
        },
      ],
    },
    { type: 'title', text: 'Menggunakan Pengenceran Bypass untuk Porsi Besar', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass adalah rahasia juara World AeroPress Championship. Mengekstrak pada rasio pekat 1:6 hingga 1:8 mencegah keluarnya rasa pahit berlebih, lalu menambahkan air panas ke cangkir mengembalikan keseimbangan rasa.',
    },
    {
      type: 'table',
      headers: ['Gaya Resep', 'Dosis Kopi', 'Air Chamber', 'Air Bypass', 'Ukuran Gilingan'],
      rows: [
        ['Filter Hoffmann', '11g', '200g', '0g', 'Sedang Halus (600µm)'],
        ['Tim Wendelboe Terang', '14g', '200g', '0g', 'Sedang (700µm)'],
        ['Juara WAC Bypass', '30g', '120g', '105g', 'Kasar (900µm)'],
        ['Alan Adler Klasik', '17g', '80g', '100g Opsional', 'Halus (450µm)'],
        ['Flash Brew Es', '18g', '150g', '100g Es Batu', 'Sedang Halus (550µm)'],
      ],
    },
    { type: 'title', text: 'Tips Praktis untuk Hasil Ekstraksi Sempurna', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Suhu air:</strong> 92°C-96°C untuk sangrai terang agar menonjolkan aroma buah, dan 80°C-85°C untuk sangrai gelap.',
        '<strong>Tekan perlahan:</strong> Berikan tekanan halus selama 20-30 detik untuk menghindari channeling.',
        '<strong>Bilas filter kertas:</strong> Siram kertas dengan air panas untuk menghilangkan rasa kertas.',
        '<strong>Berhenti saat mendesis:</strong> Segera hentikan penekanan saat terdengar desisan udara keluar.',
      ],
    },
    {
      type: 'summary',
      title: 'Ringkasan Panduan',
      items: [
        'Sesuaikan ukuran gilingan dengan durasi seduh.',
        'Gunakan perhitungan bypass saat volume melebihi batas tabung.',
        'Jaga konsistensi suhu dan waktu seduh.',
      ],
    },
  ],
  faq,
  faqTitle: 'Pertanyaan yang Sering Diajukan tentang Rasio dan Resep AeroPress',
  bibliography,
  bibliographyTitle: 'Referensi Teknis dan Sains Kopi',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
