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
      'Channeling terjadi ketika air menemukan jalur dengan hambatan terkecil melalui bubuk kopi. Gilingan yang tidak rata atau tidak sesuai untuk tekanan tersebut — terutama dalam espresso — mendorong masalah ini dan merusak ekstraksi.',
  },
  {
    question: 'Bisakah saya menggunakan bagan ini dengan penggiling pisau (blade grinder)?',
    answer:
      'Penggiling pisau menghasilkan partikel yang tidak seragam — bubuk halus dan bongkahan besar secara bersamaan. Nilai mikron bersifat indikatif, tetapi hasil sebenarnya akan sangat bervariasi dibandingkan dengan pengiling burr (burr grinder).',
  },
  {
    question: 'Apa arti keseragaman penggiling dalam visualisasi?',
    answer:
      'Distribusi partikel yang ditampilkan menyimulasikan keseragaman nyata dari setiap penggiling. Comandante C40 dengan keseragaman 0,95 menghasilkan partikel yang sangat konsisten; Hario Skerton dengan 0,40 menunjukkan variasi ukuran yang jauh lebih banyak.',
  },
];

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
      text: 'Fisika Ukuran Gilingan: Mengapa Ukuran Partikel Mengubah Segalanya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat Anda menggiling kopi, Anda tidak hanya memperkecil ukuran biji. Anda menentukan <strong>luas permukaan kontak</strong> yang tersedia bagi air untuk melarutkan senyawa rasa. Terlalu halus, dan air akan mengekstrak senyawa pahit secara berlebihan. Terlalu kasar, dan air melewati bubuk kopi tanpa hambatan yang cukup, menghasilkan kopi yang encer dan asam. Konverter gilingan memberi Anda rentang yang tepat untuk setiap metode.',
    },
    {
      type: 'summary',
      title: 'Apa yang menentukan ukuran gilingan yang benar?',
      items: [
        '<strong>Metode ekstraksi:</strong> Tekanan, waktu kontak, dan jenis filter menentukan kisaran mikron optimal untuk setiap metode penyeduhan.',
        '<strong>Keseragaman penggiling:</strong> Penggiling burr berkualitas tinggi menghasilkan partikel yang homogen; penggiling pisau menghasilkan bubuk halus dan bongkahan besar secara bersamaan.',
        '<strong>Kesegaran biji kopi:</strong> Kopi yang baru disangrai mengandung lebih banyak CO2 dan mungkin memerlukan gilingan yang sedikit lebih kasar daripada biji kopi yang sama yang telah disimpan beberapa minggu.',
        '<strong>Kalibrasi rasa:</strong> Lidah adalah instrumen akhir. Bagan ini adalah titik awal Anda; rasa adalah tujuan Anda.',
      ],
    },
    {
      type: 'table',
      headers: ['Metode', 'Mikron', 'Referensi taktil', 'Waktu kontak'],
      rows: [
        ['Ibrik (Turki)', '100-300 μm', 'Bedak / Tepung halus', '3-5 menit pendidihan'],
        ['Espresso', '300-500 μm', 'Garam halus', '25-30 detik'],
        ['Moka / AeroPress', '500-700 μm', 'Garam meja', '3-4 menit'],
        ['V60 / Filter', '700-900 μm', 'Gula pasir', '2:30-3:15 menit'],
        ['Chemex / Clever', '900-1200 μm', 'Pasir kasar', '3:30-4:30 menit'],
        ['French Press', '1200-1500 μm', 'Garam kasar', '4 menit imersi'],
        ['Cold Brew', '1500+ μm', 'Merica butiran', '12-24 jam dingin'],
      ],
    },
    {
      type: 'title',
      text: 'Aturan emas untuk kopi baru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>Saat Anda membuka bungkus kopi baru, selalu mulai dari titik tengah rentang yang direkomendasikan untuk metode Anda. Dari sana, sesuaikan berdasarkan rasa, satu klik setiap kalinya. Simpan catatan untuk setiap penyesuaian untuk membangun log referensi kopi favorit Anda dengan setiap penggiling.</p>',
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
