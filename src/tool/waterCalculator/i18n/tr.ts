import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

const slug = 'sca-kahve-suyu-hesaplayici';
const title = 'SCA Kahve Suyu Hesaplayıcı';
const description =
  'Nitelikli kahve için kesin mineral konsantrasyonlarını hesaplayın. SCA, Barista Hustle ve Hendon profilleri. Lezzeti en üst düzeye çıkarmak ve makinenizi korumak için Magnezyum, Kalsiyum ve Bikarbonatı kontrol edin.';

const faqData = [
  {
    question: 'SCA su kalitesi standardı nedir?',
    answer:
      'Nitelikli Kahve Birliği (SCA), demleme suyu için teknik bir standart tanımlar; ekipmana zarar vermeden lezzeti artıran dengeli bir ekstraksiyon elde etmek için toplam sertlik (GH), alkalinite (KH), pH ve sodyum için en uygun aralıkları belirtir.',
  },
  {
    question: 'Neden sadece musluk suyu kullanmıyoruz?',
    answer:
      'Musluk suyu konuma ve mevsime göre önemli ölçüde değişir. Klor, aşırı kireç veya nitelikli kahve lezzetlerini maskeleyen ve boylerler ile contalara zarar veren mineral seviyeleri içerebilir. Saf suyu mineralize etmek size tam kontrol ve tekrarlanabilir sonuçlar sağlar.',
  },
  {
    question: 'Mineral tuzlarını nereden alabilirim?',
    answer:
      'Epsom tuzu (magnezyum sülfat) ve sodyum bikarbonat (ingiliz karbonatı) eczanelerde ve süpermarketlerde mevcuttur. Kalsiyum klorür, evde bira yapımı malzemeleri satan dükkanlarda yaygındır. Her zaman gıda sınıfı kalitede olduklarından emin olun.',
  },
  {
    question: 'Espresso makinem için güvenli mi?',
    answer:
      'Hesaplayıcı gerçek zamanlı bir risk göstergesi içerir. Çok saf su metal bileşenleri aşındırır; çok sert su kireç birikmesine neden olur. SCA Ideal ve Barista Hustle profilleri, ekipman uzun ömürlülüğünü lezzet kalitesiyle dengelemek için tasarlanmıştır.',
  },
  {
    question: 'Kahvede Magnezyum ve Kalsiyum arasındaki fark nedir?',
    answer:
      'Magnezyum, meyvemsi ve tatlı lezzet bileşiklerini daha verimli bir şekilde çıkarır ve filtre yöntemleri için tercih edilen mineraldir. Kalsiyum daha fazla gövde ve ipeksi bir doku sağlar ancak zamanla boylerlerde kireç tortusu oluşturma eğilimi daha fazladır.',
  },
];

const howToData = [
  {
    name: 'Saf baz su temin edin',
    text: 'Distile veya demineralize su satın alın veya bir ters ozmoz sistemi kullanın. Hedef, mineralizasyon üzerinde tam kontrol için 0 ppm toplam çözünmüş katı madde ile başlamaktır.',
  },
  {
    name: 'Stok konsantre şişelerinizi hazırlayın',
    text: 'Her tuzu 100 ml saf suda ayrı ayrı çözün: Magnezyum için 2.46 g Epsom tuzu, Kalsiyum için 1.47 g CaCl2 ve Tampon (Buffer) için 1.68 g bikarbonat.',
  },
  {
    name: 'Hedef profilinizi seçin',
    text: 'SCA Ideal (dengeli), Barista Hustle (tatlılık ve parlaklık), Hendon (gövde), Melbourne (zarif) seçeneklerinden birini seçin veya kendi GH ve KH değerlerinizle özel bir profil oluşturun.',
  },
  {
    name: 'Final hacmini girin',
    text: 'Mineralize etmek istediğiniz su miktarını litre cinsinden yazın. Hesaplayıcı, bu kesin hacim için konsantre dozlarını otomatik olarak ayarlar.',
  },
  {
    name: 'Konsantreleri ekleyin ve saf su ile tamamlayın',
    text: 'Hassas bir şırınga kullanarak, her konsantreden belirtilen mililitreleri kabınıza ekleyin ve saf su ile toplam hacme tamamlayın.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'SCA Kahve Suyu Hesaplayıcı Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar ve SCA Standartları',
  bibliography: [
    {
      name: 'SCA Su Kalitesi Standardı',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY Water Recipes Redux',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: 'The Science of Coffee Water (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: Su Kimyası ve Kahve',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kahve Suyu Kimyası: H₂O Neden En Çok Gözden Kaçan Bileşendir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kahve %98-99 sudur. Yine de bu suyun mineral bileşimi, tüm nitelikli kahve zincirinde en çok gözden kaçan kalite faktörüdür. Londra musluk suyuyla demlenmiş bir Etiyopya kahvesi ile SCA optimize edilmiş suyla demlenmiş aynı kahve, tamamen farklı iki kahve gibi tadabilir. <strong>SCA kahve suyu hesaplayıcımız</strong>, yaygın mineral tuzları ve saf su kullanarak sıfırdan mükemmel demleme suyu formüle etmenizi sağlar.',
    },
    {
      type: 'summary',
      title: 'Su mineralizasyonu neden bu kadar önemlidir?',
      items: [
        '<strong>GH (Genel Sertlik):</strong> Magnezyum ve Kalsiyum iyonlarının toplamı, suyun kahve lezzet bileşiklerini çözme kapasitesini belirler.',
        '<strong>KH (Karbonat Sertliği):</strong> Bikarbonat konsantrasyonu, ekstraksiyon sırasında pH\'ı kontrol eder. Düşük KH ekşi kahve üretir; yüksek KH kahveyi yavanlaştırır.',
        '<strong>Tekrarlanabilirlik:</strong> Şebeke suyu mevsime ve konuma göre değişir. Mineralize su sabittir ve her demlemede tekrarlanabilir.',
        '<strong>Ekipman koruması:</strong> Doğru mineral seviyeleri hem korozyonu (çok saf su) hem de kireç birikmesini (çok sert su) önler.',
      ],
    },
    {
      type: 'title',
      text: 'SCA Standardı: Mükemmel Demleme Suyu İçin Teknik Limitler',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parametre', 'Minimum', 'SCA Ideal', 'Maksimum'],
      rows: [
        ['Toplam Sertlik (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alkalinite (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnezyum vs Kalsiyum: Fincanınızı Tanımlayan Mineral Savaşı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tüm mineraller kahve ile aynı şekilde davranmaz. Araştırmacı Christopher Hendon, <strong>magnezyumun</strong> karmaşık uçucu lezzet molekülleriyle ligandlar oluşturarak meyvemsi ve floral notaları daha verimli bir şekilde çıkardığını göstermiştir. <strong>Kalsiyum</strong> daha ağır bileşikleri çıkararak gövde ve ipeksi ağız hissi sağlar ancak aromatik parlaklığı daha azdır.',
    },
    {
      type: 'tip',
      title: 'Profesyonel barista altın kuralı',
      html: '<p>Pirinç veya bakır boylerli espresso makineleri için, KH değeri sürekli 40 mg/L\'nin altında olan profilleri asla kullanmayın. Çok saf su uzun vadede aşındırıcıdır. Filtre yöntemleri (V60, Chemex, AeroPress) için korunacak bir boyler yoktur, bu nedenle Melbourne gibi hassas profilleri endişe duymadan güvenle kullanabilirsiniz.</p>',
    },
  ],
  ui: {
    sectionMixTitle: 'Karışım Konfigürasyonu',
    labelVolume: 'Final Hacmi',
    labelProfile: 'Hedef Su Profili',
    customProfileBtn: 'Özel',
    labelGH: 'Hedef GH',
    labelKH: 'Hedef KH',
    concentratesTitle: 'Stok Konsantre Şişeleri (g/100ml)',
    saltMgName: 'Magnezyum (Epsom)',
    saltCaName: 'Kalsiyum (CaCl2)',
    saltBufName: 'Bikarbonat (Sodyum)',
    recipeTitle: 'Reçete',
    labelMg: 'Magnezyum:',
    labelCa: 'Kalsiyum:',
    labelBuffer: 'Bikarbonat:',
    labelDistilledWater: 'Saf Su (tamamla):',
    copyBtn: 'Reçeteyi Kopyala',
    copiedText: 'Kopyalandı!',
    safetyMetalsTitle: 'Metal Güvenliği',
    safetyScaleTitle: 'Kireç Riski',
    calculatingText: 'Hesaplanıyor...',
    glossaryTitle: 'Hızlı Mineral Rehberi',
    profileSubTemplate: 'Hedef: {gh} GH / {kh} KH',
    customProfileName: 'Özel',
    corrosionHigh: 'Tehlike: Çok agresif su. Boylerleri ve bakır bileşenleri aşındırabilir.',
    corrosionMedium: 'Kabul Edilebilir: Orta düzeyde korozyon riski. Filtre yöntemleri için önerilir, makinelerde dikkatli olunmalıdır.',
    corrosionLow: 'Güvenli: Su, metalleri korumak için yeterli tampon kapasitesine sahiptir.',
    scaleHigh: 'Tehlike: Yakında kireç birikimi oluşabilir. Sadece manuel filtre yöntemleriyle kullanın.',
    scaleMedium: 'Dikkat: Espresso makinelerinde zamanla kireç tortusu oluşturabilir.',
    scaleLow: 'Güvenli: Belirgin bir kireç birikme riski yoktur.',
    copyTemplate:
      'Kahve Suyu Reçetesi ({profileName}):\n- Hacim: {liters}L\n- Magnezyum konsantresi: {mg}ml\n- Kalsiyum konsantresi: {ca}ml\n- Bikarbonat konsantresi: {buf}ml\n- Saf Su: {water}ml',
    glossary0Term: 'Toplam Sertlik (GH)',
    glossary0Desc:
      'Kalsiyum ve Magnezyumun toplamı. Magnezyum tatlılığı ve karmaşıklığı artırır; Kalsiyum gövde ve doku katar.',
    glossary1Term: 'Alkalinite (KH)',
    glossary1Desc:
      'Suyun asitleri nötralize etme kapasitesi. Yüksek KH kahve asiditesini baskılar; düşük KH tadın ekşi olmasına neden olur.',
    glossary2Term: 'TDS (Toplam Çözünmüş Katı Madde)',
    glossary2Desc: 'Mineralize suda TDS, eklenen tüm mineral tuzlarının birleşik konsantrasyonunu temsil eder.',
    glossary3Term: 'Magnezyum',
    glossary3Desc:
      'Karmaşık meyvemsi lezzet bileşiklerini daha verimli bir şekilde çıkarır. Nitelikli kahve demleme için tercih edilen mineraldir.',
  },
};
