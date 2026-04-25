import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Asam / Kecut',
    bitter: 'Pahit / Hangus',
    watery: 'Encer / Lemah',
    astringent: 'Sepat / Kering',
  },
  causes: {
    acidic: ['Gilingan terlalu kasar (under-extraction)', 'Suhu air terlalu rendah', 'Waktu seduh terlalu singkat', 'Kopi terlalu segar (belum degassing)'],
    bitter: ['Gilingan terlalu halus (over-extraction)', 'Suhu air terlalu tinggi', 'Waktu seduh terlalu lama', 'Kopi lama atau sangrai gelap'],
    watery: ['Gilingan terlalu kasar (ekstraksi lemah)', 'Rasio terlalu tinggi (terlalu banyak air)', 'Waktu seduh terlalu singkat', 'Kopi terlalu lama atau kualitas rendah'],
    astringent: ['Masalah kualitas air (terlalu banyak mineral)', 'Over-extraction dikombinasikan dengan kandungan mineral', 'Gilingan terlalu halus dengan air sadah', 'Suhu seduh terlalu tinggi'],
  },
  solutions: {
    acidic: 'Air mengalir terlalu cepat melalui gilingan kasar tanpa mengekstraksi body. Gilingan lebih halus meningkatkan permukaan kontak dan memperlambat aliran.',
    bitter: 'Air menghabiskan waktu terlalu lama untuk mengekstraksi—mengekstrak senyawa pahit dan abu. Gilingan lebih kasar mengurangi waktu kontak dan intensitas ekstraksi.',
    watery: 'Tidak cukup zat terlarut dalam cangkir Anda. Gilingan lebih halus atau peningkatan dosis kopi menaikkan persentase ekstraksi dan body.',
    astringent: 'Air kaya mineral mengekstraksi secara berlebihan dan berikatan dengan senyawa kopi, menciptakan sensasi kering di mulut. Gilingan lebih kasar mengurangi over-extraction sementara penyaringan meningkatkan kualitas air.',
  },
  actions: {
    acidic: { text: 'Giling sedikit lebih halus', textSevere: 'Giling jauh lebih halus', icon: 'mdi:chevron-left' },
    bitter: { text: 'Giling sedikit lebih kasar', textSevere: 'Giling jauh lebih kasar', icon: 'mdi:chevron-right' },
    watery: { text: 'Giling lebih halus atau gunakan 5g kopi lebih banyak', textSevere: 'Giling jauh lebih halus atau gunakan 7g kopi lebih banyak', icon: 'mdi:plus-circle' },
    astringent: { text: 'Gunakan air filter dan giling lebih kasar', textSevere: 'Gunakan air filter dan giling jauh lebih kasar', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Seperti garam halus', bitter: 'Seperti tepung', watery: 'Seperti bubuk kakao', astringent: 'Tepung sedikit lebih halus' },
    pourover: { acidic: 'Seperti garam meja', bitter: 'Seperti pasir kasar', watery: 'Seperti tepung jagung halus', astringent: 'Pasir halus' },
    aeropress: { acidic: 'Seperti tepung jagung halus', bitter: 'Seperti garam meja', watery: 'Seperti lada bubuk halus', astringent: 'Pasir sedang' },
    frenchpress: { acidic: 'Seperti remah roti', bitter: 'Seperti garam krosok', watery: 'Seperti garam laut', astringent: 'Pasir kasar' },
    moka: { acidic: 'Seperti garam laut halus', bitter: 'Seperti pasir halus', watery: 'Seperti garam meja', astringent: 'Pasir sedang-halus' },
    coldbrew: { acidic: 'Seperti garam laut kasar', bitter: 'Seperti kerikil', watery: 'Seperti garam krosok', astringent: 'Pasir kasar dengan butiran' },
  },
  secondaryAction: 'Seduh pada {temp}°C selama {time}',
  tertiaryAction: 'Biarkan kopi mendingin ke suhu ruang sebelum dicicipi untuk menangkap semua rasa.',
};

const slug = 'diagnosis-ekstraksi-kopi-brew-fixer';
const title = 'Diagnosis Ekstraksi Kopi: The Brew Fixer';
const description =
  'Diagnosis penyebab rasa kopi Anda kurang enak dalam hitungan detik. Dapatkan saran penyesuaian gilingan, suhu, dan waktu berdasarkan metode seduh Anda.';

const faqData = [
  {
    question: 'Bagaimana saya tahu jika kopi saya kurang ekstraksi atau kelebihan ekstraksi?',
    answer:
      'Kurang ekstraksi (under-extraction, rasa asam/sepat) berarti air mengalir terlalu cepat tanpa melarutkan cukup senyawa. Kelebihan ekstraksi (over-extraction, rasa pahit/hangus) berarti air terlalu lama bersentuhan dengan kopi. The Brew Fixer membantu Anda mengidentifikasi masalahnya dengan menganalisis rasa dan metode seduh Anda.',
  },
  {
    question: 'Apa kesalahan menyeduh kopi yang paling umum?',
    answer:
      'Ukuran gilingan (grind size). Kebanyakan orang menggiling terlalu kasar (hasilnya kopi encer dan asam) atau terlalu halus (pahit dan kelebihan ekstraksi). Menyesuaikan gilingan ke ukuran yang tepat untuk metode Anda adalah perubahan yang paling berdampak.',
  },
  {
    question: 'Apakah suhu air benar-benar berpengaruh besar?',
    answer:
      'Ya. Suhu air mengontrol kecepatan ekstraksi. Terlalu dingin akan menyebabkan kurang ekstraksi (asam). Terlalu panas akan menyebabkan kelebihan ekstraksi (pahit). Setiap metode punya rentang ideal: pour-over (V60) lebih baik di 92-96°C, sementara French press di 85-90°C untuk menghindari rasa pahit saat perendaman lama.',
  },
  {
    question: 'Mengapa kopi saya terasa kering atau sepat di mulut?',
    answer:
      'Rasa sepat (astringency) biasanya disebabkan oleh air yang tinggi mineral atau kombinasi kelebihan ekstraksi dan mineral. Coba gunakan air filter dan gilingan yang sedikit lebih kasar. Jika tidak membantu, nilai TDS air Anda mungkin terlalu tinggi.',
  },
  {
    question: 'Bisakah saya memperbaiki rasa kopi hanya dengan mengatur suhu dan waktu?',
    answer:
      'Suhu dan waktu membantu, tapi ukuran gilingan biasanya adalah akar masalahnya. Jika gilingan terlalu kasar, menyeduh lebih lama atau lebih panas hanya membantu sedikit. The Brew Fixer akan selalu merekomendasikan penyesuaian gilingan sebagai langkah utama.',
  },
  {
    question: 'Haruskah saya menggunakan resep yang sama untuk semua kopi saya?',
    answer:
      'Tidak. Kopi yang sangat segar (1-5 hari setelah sangrai) mengekstraksi lebih cepat dan mungkin butuh gilingan lebih kasar dibanding kopi lama. Light roast lebih padat dan butuh gilingan halus; dark roast lebih berpori dan lebih cocok dengan gilingan kasar.',
  },
];

const howToData = [
  {
    name: 'Pilih metode seduh Anda',
    text: 'Pilih alat yang Anda gunakan: pour-over, French press, Aeropress, Moka pot, mesin espresso, atau cold brew. Alat ini akan memberikan saran khusus sesuai metode tersebut.',
  },
  {
    name: 'Identifikasi cacat rasa yang dominan',
    text: 'Cicipi kopi Anda dan pilih rasa yang paling menonjol: asam (sepat), pahit (hangus), encer (lemah), atau sepat (kering). Anda juga bisa memilih rasa sekunder.',
  },
  {
    name: 'Tentukan tingkat keparahan',
    text: 'Geser slider untuk menunjukkan seberapa kuat cacat rasa tersebut. "Ringan" berarti hampir tidak terasa; "Parah" berarti mendominasi cangkir. Ini membantu kalibrasi saran.',
  },
  {
    name: 'Jalankan diagnosis',
    text: 'Klik tombol "Diagnosis" dan alat ini akan menganalisis input Anda lalu memberikan langkah utama (gilingan), langkah sekunder, dan referensi tekstur.',
  },
  {
    name: 'Sesuaikan dan uji coba',
    text: 'Lakukan perubahan yang disarankan (misalnya giling lebih kasar, seduh lebih lama). Seduh cangkir baru dan cicipi. Penyesuaian kecil akan memberikan hasil besar.',
  },
  {
    name: 'Berikan umpan balik',
    text: 'Setelah menyeduh cangkir berikutnya, beri tahu alat ini jika rasanya membaik. Jika ya, Anda akan melihat animasi konfeti! Jika tidak, kembali dan coba parameter lain.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Sering Diajukan Tentang Ekstraksi Kopi',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis dan Sains Kopi',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa Kopi Anda Terasa Kurang Enak? Panduan Diagnosis Ekstraksi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Perbedaan antara espresso yang luar biasa dan secangkir kopi yang terasa seperti kertas hangus bermuara pada satu konsep: <strong>ekstraksi kopi</strong>. Ekstraksi adalah proses air melarutkan senyawa dari kopi bubuk. Jika tepat, Anda akan mendapatkan rasa yang kompleks, manis, dan bersih. Jika salah, rasanya akan asam, pahit, atau encer.',
    },
    {
      type: 'summary',
      title: 'Apa yang akan Anda pelajari dari Brew Fixer',
      items: [
        '<strong>Cara mendiagnosis cacat ekstraksi:</strong> Identifikasi apakah kopi Anda kurang ekstraksi, kelebihan ekstraksi, encer, atau bermasalah pada kualitas air.',
        '<strong>Tiga faktor pengontrol ekstraksi:</strong> Ukuran gilingan, suhu air, dan waktu kontak. Mana yang harus diatur lebih dulu? Brew Fixer akan memberi tahu Anda.',
        '<strong>Saran khusus sesuai metode:</strong> Gilingan ideal untuk V60 sangat berbeda dengan French press. Dapatkan saran pribadi untuk alat seduh Anda.',
        '<strong>Referensi tekstur:</strong> Ketahui pasti target ukuran gilingan dengan membandingkannya dengan bahan yang familiar (bubuk halus, garam laut, pasir).',
      ],
    },
    {
      type: 'title',
      text: 'Tiga Dimensi Ekstraksi Kopi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Persentase ekstraksi adalah massa zat yang terlarut dibagi dengan massa kopi kering awal. Kopi spesialti menargetkan <strong>ekstraksi 18-20%</strong>. Di bawah itu akan terasa asam; di atas itu akan terasa pahit.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ukuran gilingan</strong> mengontrol luas permukaan. Gilingan halus mengekstraksi lebih cepat. Gilingan kasar lebih lambat.',
        '<strong>Suhu air</strong> mengontrol kecepatan pelarutan. Air panas (94-96°C) mengekstraksi lebih cepat; air yang lebih dingin (85-90°C) lebih lambat.',
        '<strong>Waktu kontak</strong> adalah berapa lama air bersentuhan dengan kopi. Pour-over (2:30-3:30 menit), French press (4:00-5:00 menit).',
      ],
    },
    {
      type: 'title',
      text: 'Cara Diagnosis Kopi Asam (Kurang Ekstraksi)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kopi asam terasa seperti lemon atau apel—tajam dan menusuk. Ini berarti air tidak punya cukup waktu untuk melarutkan zat dari kopi. Solusi termudah hampir selalu <strong>giling lebih halus</strong> untuk memperlambat air.',
    },
    {
      type: 'list',
      items: [
        'Giling kopi lebih halus (kurangi ukuran gilingan 5-10 µm)',
        'Atau perlama waktu seduh sedikit (tambah 15-30 detik)',
        'Atau naikkan suhu air menjadi 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Cara Diagnosis Kopi Pahit (Kelebihan Ekstraksi)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kopi pahit terasa hangus, seperti abu atau kayu. Ini berarti air mengekstraksi terlalu lama—melewati zat yang enak menuju zat yang tidak diinginkan. Solusinya adalah <strong>giling lebih kasar</strong> untuk mempercepat aliran air.',
    },
    {
      type: 'list',
      items: [
        'Giling kopi lebih kasar (tambah ukuran gilingan 5-10 µm)',
        'Atau persingkat waktu seduh (kurangi 15-30 detik)',
        'Atau turunkan suhu air menjadi 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Cara Diagnosis Kopi Encer (Lemah, Tipis)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kopi yang lemah kurang rasa dan tekstur (body). Biasanya berarti gilingan Anda terlalu kasar, rasio kopi terlalu sedikit, atau kopi sudah lama. Mengatur gilingan adalah solusi tercepat.',
    },
    {
      type: 'list',
      items: [
        'Gunakan gilingan lebih halus agar air punya lebih banyak luas permukaan untuk ekstraksi',
        'Gunakan lebih banyak kopi (perkecil rasio)',
        'Seduh sedikit lebih lama atau dengan suhu lebih tinggi',
      ],
    },
    {
      type: 'title',
      text: 'Cara Diagnosis Kopi Sepat (Kering, Rasa Mineral)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rasa sepat terasa kering di mulut—seperti mengunyah kulit anggur. Biasanya disebabkan air sadah (tinggi mineral) ditambah kelebihan ekstraksi. Ini butuh pengaturan gilingan <em>sekaligus</em> perbaikan kualitas air.',
    },
    {
      type: 'list',
      items: [
        'Gunakan air filter untuk mengurangi mineral (target TDS 60-150 ppm)',
        'Giling lebih kasar untuk mengurangi kelebihan ekstraksi',
        'Coba suhu air yang sedikit lebih rendah (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Tabel Ukuran Gilingan: Tampilan dan Teksturnya',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nama Gilingan', 'Ukuran Partikel', 'Referensi Tekstur', 'Metode Terbaik'],
      rows: [
        ['Sangat Halus', '5-15 µm', 'Bubuk halus, cokelat bubuk', 'Espresso, Kopi Turki'],
        ['Halus', '15-30 µm', 'Gula halus', 'Moka pot, Aeropress'],
        ['Medium-Halus', '30-50 µm', 'Pasir halus, garam meja', 'V60, Chemex, Pour-over'],
        ['Medium', '50-70 µm', 'Pasir pantai', 'Drip machine, Flat-bottom filter'],
        ['Kasar', '70-90 µm', 'Garam laut, pasir kasar', 'French press, Cupping'],
        ['Sangat Kasar', '90+ µm', 'Merica butiran, remah roti', 'Cold brew, Percolator'],
      ],
    },
    {
      type: 'title',
      text: 'Kualitas Air: TDS dan Efeknya pada Ekstraksi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Total Dissolved Solids (TDS) adalah ukuran kandungan mineral dalam air. Air keran sangat bervariasi: air lunak (50 ppm) atau air sadah (300+ ppm). Ekstraksi kopi sangat sensitif terhadap kualitas air.',
    },
    {
      type: 'list',
      items: [
        '<strong>Terlalu lunak (0-50 ppm):</strong> Air mengekstraksi terlalu agresif, kopi terasa asin.',
        '<strong>Ideal (60-150 ppm):</strong> Ekstraksi manis, seimbang, dan bertekstur (full body).',
        '<strong>Terlalu sadah (200+ ppm):</strong> Mineral mengikat senyawa rasa, menyebabkan rasa sepat.',
      ],
    },
    {
      type: 'tip',
      title: 'Tips Cepat Kualitas Air',
      html: '<p>Jika Anda mencurigai air sadah, coba seduh dengan air filter atau air mineral botolan untuk perbandingan. Jika rasanya langsung membaik, itulah penyebabnya. Gunakan filter air atau dispenser filter.</p>',
    },
  ],
  ui: {
    methodLabel: 'Apa yang sedang Anda seduh?',
    methodPourover: 'Pour Over / Filter',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Moka Pot',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Pilih alat seduh Anda',
    flavorLabel: 'Bagaimana rasanya?',
    flavorAcidic: 'Asam / Sepat',
    flavorBitter: 'Pahit / Hangus',
    flavorWatery: 'Encer / Lemah',
    flavorAstringent: 'Sepat / Kering',
    flavorHint: 'Pilih hingga 2 rasa',
    severityLabel: 'Seberapa parah masalahnya?',
    severitySlightLabel: 'Hampir tidak terasa',
    severityModerateLabel: 'Sedang',
    severitySevereLabel: 'Sangat terasa',
    diagnoseBtn: 'Diagnosis Kopi Saya',
    resetBtn: 'Reset',
    resultTitle: 'Diagnosis Selesai',
    resultExplanation: 'Apa yang terjadi pada kopi Anda',
    actionMainLabel: 'Langkah Utama',
    actionSecondaryLabel: 'Suhu & Waktu',
    actionTertiaryLabel: 'Tips Pro',
    textureReferenceLabel: 'Referensi Tekstur',
    improvementHint: 'Lakukan penyesuaian dan seduh cangkir baru.',
    copyDiagnosisBtn: 'Salin Diagnosis',
    feedbackLabel: 'Apakah rasa kopi membaik?',
    feedbackSuccessTemplate: 'Luar biasa! Penyesuaian berhasil.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Press pot, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka pot, Kompor',
    methodEspressoDesc: 'Mesin espresso, lever',
    methodColdbrewDesc: 'Perendaman, dingin',
    fadeOutMessage: 'Bagus! Terus lakukan penyesuaian.',
    backBtn: 'Kembali',
    mainIssueLabel: 'Masalah Utama',
    improvedBtn: 'Membaik',
    notYetBtn: 'Belum',
    copiedBtn: 'Disalin!',
    combinedLabel: 'Gabungan',
    diagnosisTitle: 'Diagnosis The Brew Fixer',
    issueLabel: 'Masalah',
    causeLabel: 'Penyebab',
    actionLabel: 'Tindakan',
    whyLabel: 'Mengapa',
    nextLabel: 'Berikutnya',
  },
};
