import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'timer-seduh-kopi';
const title = 'Timer Seduh Kopi';
const description =
  'Timer kopi specialty profesional dengan fase penyeduhan, peringatan audio ritme, dan ringkasan ekstraksi. Dioptimalkan untuk V60, Chemex, dan Aeropress.';

const faqData = [
  {
    question: 'Mengapa menggunakan timer ini daripada timer ponsel saya?',
    answer:
      'Timer ini dirancang khusus untuk kopi. Ini mencakup fase visual (Bloom, Tuang, Tiris), peringatan audio 3 detik sebelum setiap transisi, dan memungkinkan Anda mengonfigurasi resep lengkap sehingga Anda tidak pernah kehilangan ritme saat menuang.',
  },
  {
    question: 'Apa itu waktu bloom?',
    answer:
      'Ini adalah pra-infusi awal (biasanya 30 hingga 45 detik) di mana sedikit air dituang untuk melepaskan CO2. Timer menyoroti fase ini dalam warna amber sehingga Anda tahu kapan harus menunggu dan kapan harus terus menuang.',
  },
  {
    question: 'Bagaimana saya tahu apakah waktu ekstraksi saya sudah benar?',
    answer:
      'Untuk V60 standar, total waktu harus antara 2:30 dan 3:15 menit. Jika selesai lebih cepat, gilingan Anda terlalu kasar. Jika butuh waktu lebih lama, gilingan Anda terlalu halus. Timer memungkinkan Anda mendiagnosis proses ini dengan tepat.',
  },
  {
    question: 'Apakah ada peringatan audio?',
    answer:
      'Ya. Sistem mengeluarkan bunyi beep pendek sebelum fase bloom berakhir dan di akhir proses, memungkinkan Anda fokus pada aliran air tanpa terus-menerus melihat layar.',
  },
  {
    question: 'Apakah kompatibel dengan Chemex?',
    answer:
      'Tentu saja. Anda dapat menyesuaikan total waktu menjadi 4:30 atau 5:00 menit (umum untuk Chemex karena filternya yang tebal) di bagian pengaturan di bawah.',
  },
  {
    question: 'Apakah bisa digunakan di ponsel?',
    answer:
      'Sangat dioptimalkan untuk penggunaan seluler, dengan tombol besar yang mudah ditekan bahkan dengan tangan basah atau saat memegang teko leher angsa.',
  },
];

const howToData = [
  {
    name: 'Konfigurasikan resep Anda',
    text: 'Di bagian bawah, sesuaikan total air, air bloom, waktu bloom, dan total waktu sesuai dengan metode penyeduhan Anda (V60, Chemex, Aeropress).',
  },
  {
    name: 'Tekan tombol start',
    text: 'Tekan tombol start yang besar. Timer akan mulai dan menunjukkan fase aktif di bilah kemajuan di atas.',
  },
  {
    name: 'Fase Bloom',
    text: 'Tuangkan air bloom (ditampilkan di layar) secara spiral dan tunggu timer berjalan. Anda akan menerima peringatan audio 3 detik sebelum fase ini berakhir.',
  },
  {
    name: 'Fase Menuang (Pour)',
    text: 'Lanjutkan menuang sisa air hingga Anda mencapai berat total. Tuang dalam lingkaran yang lambat dan stabil untuk ekstraksi yang seragam.',
  },
  {
    name: 'Fase Meniris (Drain)',
    text: 'Tunggu kopi menetes sepenuhnya melalui filter. Fase ini menyelesaikan ekstraksi dan menentukan kejernihan serta profil akhir kopi Anda.',
  },
  {
    name: 'Tinjau ringkasan',
    text: 'Setelah selesai, timer menunjukkan total waktu dan air yang dituang. Catat nilai-nilai ini bersama dengan kesan rasa Anda untuk menyempurnakan resep.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan tentang Timer Kopi',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis dan Protokol SCA',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Timer Seduh Kopi: Sains Penentuan Waktu Ekstraksi (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam dunia kopi specialty, <strong>waktu kontak</strong> antara air dan bubuk kopi bukanlah sekadar metrik menunggu; ini adalah faktor kinetik yang menentukan senyawa kimia mana yang berakhir di cangkir Anda. Kelebihan satu detik saja dapat berarti pergeseran dari rasa manis karamel ke rasa pahit yang hambar. Alat pengukur waktu profesional kami untuk V60, Chemex, dan Aeropress bertindak sebagai <strong>asisten ritme</strong>, membuat presisi tingkat barista dapat diakses di rumah.',
    },
    {
      type: 'summary',
      title: 'Mengapa timer khusus sangat penting',
      items: [
        '<strong>Kontrol Kinetik:</strong> Laju pelarutan padatan kopi oleh air bersifat konstan. Waktu adalah rem dan pedal gas Anda.',
        '<strong>Fase Menuang:</strong> Kopi tidak terekstraksi secara linier. Membagi waktu menjadi Bloom, Tuang, dan Tiris sangatlah kritis.',
        '<strong>Reproduksibilitas:</strong> Jika Anda tidak mengukur waktu, Anda tidak dapat mengulangi hasil seduhan terbaik Anda. Konsistensi adalah dasar dari kualitas.',
        '<strong>Penyesuaian Gilingan:</strong> Waktu akhir memberi tahu Anda apakah harus menggiling lebih halus atau lebih kasar lain kali.',
      ],
    },
    {
      type: 'title',
      text: 'Garis Waktu Ekstraksi: Apa yang terjadi setiap detik?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat air panas menyentuh kopi, lintasan rintangan molekuler dimulai. Tidak semua rasa terekstraksi pada waktu yang sama. Memahami garis waktu ini adalah perbedaan antara barista amatir dan profesional:',
    },
    {
      type: 'list',
      items: [
        '<strong>Detik 0 hingga 45 (Bloom):</strong> Ini adalah fase degassing. CO2 yang terperangkap saat sangrai menghalangi air masuk. Menunggu di sini memungkinkan biji kopi terbuka, membuka jalan untuk ekstraksi yang seragam.',
        '<strong>Detik 45 hingga 120 (Ekstraksi Asam dan Manis):</strong> Air mengalir dan melarutkan garam mineral, asam organik, dan gula kompleks. Ini adalah inti dari rasa.',
        '<strong>Detik 120 hingga 210 (Body dan Profil Akhir):</strong> Serat yang lebih berat dan senyawa pahit mulai terekstraksi. Jika fase ini berjalan terlalu lama, kopi menjadi sepat (astringent).',
      ],
    },
    {
      type: 'title',
      text: 'Fase Bloom: Mengapa 30 detik menjadi standar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Bloom</strong> atau pra-infusi adalah saat kita menuangkan sekitar dua kali lipat berat kopi dalam air. 30 detik awal ini berfungsi untuk mengeluarkan karbon dioksida. Tanpa menghargai waktu ini, gas akan mendorong air keluar, menciptakan saluran di mana cairan mengalir tanpa menyentuh kopi (channeling), yang menghasilkan kopi yang encer dan tidak konsisten.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Saran Waktu', 'Tindakan Teknis', 'Tujuan Kimia'],
      rows: [
        ['Bloom', '30 hingga 45 detik', 'Tuang 2x berat kopi', 'Degassing (CO2)'],
        ['Tuangan Pertama', '45 hingga 90 detik', 'Lingkaran lambat', 'Ekstraksi asam dan manis'],
        ['Tuangan Kedua', '90 hingga 150 detik', 'Tuangan tengah yang lembut', 'Keseimbangan dan body'],
        ['Drawdown', 'Hingga akhir', 'Tetesan stabil', 'Kejernihan dan profil akhir'],
      ],
    },
    {
      type: 'title',
      text: 'Dampak Waktu pada Gilingan: Lingkaran Umpan Balik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Timer adalah alat diagnostik terbaik Anda untuk penggiling kopi. Jika resep V60 Anda seharusnya memakan waktu 3:00 menit dan air telah menetes sepenuhnya pada 2:15, kopi tersebut kemungkinan akan terasa asam dan lemah (under-extraction). Solusinya bukan menuang lebih lambat, tetapi <strong>menggiling lebih halus</strong> agar partikel lebih menahan air.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Waktu Ideal V60', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Waktu Ideal Chemex', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Waktu Ideal Aeropress', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Peringatan Ritme: Mengapa asisten audio sangat penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Menyeduh kopi filter menuntut perhatian visual terus-menerus pada timbangan dan pola tuangan Anda. Timer kami mencakup <strong>peringatan audio kedekatan</strong> yang memberi sinyal 3 detik sebelum Anda harus memulai tuangan berikutnya atau saat bloom berakhir. Ini adalah perbedaan antara ekstraksi yang mengalir lancar dan yang penuh gangguan.',
    },
    {
      type: 'tip',
      title: 'Kiat Barista Kompetisi',
      html: '<p>Jaga agar aliran air serendah dan sedekat mungkin dengan bubuk kopi. Menuang dari ketinggian yang besar memasukkan oksigen dan agitasi berlebihan, yang dapat mengakibatkan over-extraction dan mendinginkan air terlalu cepat. Gunakan timer untuk menjaga ritme lingkaran yang stabil sekitar 5 hingga 7 gram air per detik.</p>',
    },
    {
      type: 'title',
      text: 'Termodinamika dan Waktu: Variabel Suhu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Waktu memengaruhi suhu sistem. Ekstraksi yang berlangsung selama 6 menit akan kehilangan banyak energi termal, menghasilkan kopi yang tidak seimbang. Rentang waktu optimal menjaga air antara 90°C dan 96°C selama ekstraksi.',
    },
    {
      type: 'title',
      text: 'Pengaturan Waktu untuk Iced Coffee dengan Teknik Flash Brew',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat menyeduh kopi di atas es, penentuan waktu harus lebih agresif. Menggunakan lebih sedikit air panas (60% dari total), waktu kontak berkurang. Untuk mengompensasi, gunakan gilingan yang sedikit lebih halus untuk menjaga waktu ekstraksi tetap dalam kisaran 2:30 hingga 3:00 menit.',
    },
    {
      type: 'title',
      text: 'Ringkasan Pasca Ekstraksi: Pembelajaran Berkelanjutan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Di akhir setiap penyeduhan, alat kami menunjukkan total waktu kontak. Catat nilai ini beserta kesan rasa Anda. Apakah terasa pahit? Lain kali targetkan waktu 15 detik lebih singkat. Apakah terasa logam atau asam? Targetkan 20 detik lebih lama. Timer tidak membuat kopi untuk Anda, tetapi memberi Anda data untuk menjadi seorang seniman.',
    },
  ],
  ui: {
    readyText: 'Siap untuk memulai',
    startBtn: 'MULAI EKSTRAKSI',
    pauseBtn: 'JEDA',
    resumeBtn: 'LANJUTKAN',
    resetBtn: 'RESET',
    newBrewBtn: 'SEDUHAN BARU',
    targetLabel: 'Target Air:',
    instructionStart: 'Tekan tombol besar',
    hintStart: 'Siapkan V60 atau Chemex Anda',
    phase1Label: 'Fase 1: Bloom',
    phase2Label: 'Fase 2: Menuang',
    phase3Label: 'Fase 3: Meniris',
    instructionBloom: 'Tuangkan {bloomWater}g air',
    hintBloom: 'Goyang lembut untuk membasahi',
    instructionPour: 'Capai total {waterTotal}g',
    hintPour: 'Tuang dalam lingkaran stabil',
    instructionDrain: 'Tunggu sisa tetesan terakhir',
    hintDrain: 'Hampir siap dinikmati',
    summaryTitle: 'Ekstraksi selesai!',
    summaryMessage: 'Kopi Anda siap disajikan.',
    statTimeLabel: 'Total Waktu',
    statWaterLabel: 'Air yang Dituang',
    setupTitle: 'Pengaturan resep',
    labelWater: 'Total Air (g)',
    labelBloomWater: 'Air Bloom (g)',
    labelBloomTime: 'Waktu Bloom (dtk)',
    labelTotalTime: 'Total Waktu (dtk)',
  },
};
