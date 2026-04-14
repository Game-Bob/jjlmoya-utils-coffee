import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';

const slug = 'kahve-ogutme-boyutu-donusturucu';
const title = 'Kahve Öğütme Boyutu Dönüştürücü';
const description =
  'Değirmeninizi Espresso, V60, French Press ve daha fazlası arasında ayarlamak için tıklama ve seviye kılavuzlu etkileşimli öğütme boyutu tablosu. Tüm ekstraksiyon yöntemleri için teknik mikron haritalaması.';

const faqData = [
  {
    question: 'Aynı öğütme ayarı neden tüm kahveler için işe yaramaz?',
    answer:
      'Çekirdek yoğunluğu kavurma seviyesine ve kökene göre değişir. Açık kavurma genellikle daha yoğundur ve düzgün ekstraksiyon için daha ince bir öğütme gerektirir; koyu kavurma ise daha gözeneklidir ve daha kalın bir ayara ihtiyaç duyar.',
  },
  {
    question: 'Daha ince mi yoksa daha kalın mı öğüteceğimi nasıl anlarım?',
    answer:
      'Tadınız size rehberlik etsin: kahvenin tadı acı ve kuruysa, suyun daha hızlı akması için daha kalın öğütün. Tadı ekşi, tuzlu veya suluysa, temas yüzey alanını artırmak için daha ince öğütün.',
  },
  {
    question: "'Kanallanma' (channeling) nedir ve öğütme bunu nasıl etkiler?",
    answer:
      'Kanallanma, suyun kahve yatağında en az direnç gösteren yolu bulmasıyla oluşur. Özellikle espressoda basınç için dengesiz veya uygun olmayan bir öğütme bu sorunu tetikler ve ekstraksiyonu bozar.',
  },
  {
    question: 'Bu tabloyu bıçaklı bir değirmenle kullanabilir miyim?',
    answer:
      'Bıçaklı değirmenler homojen olmayan parçacıklar üretir; aynı anda hem ince toz hem de büyük parçalar oluşur. Mikron değerleri gösterge niteliğindedir ancak gerçek sonuçlar, dişli (burr) bir değirmene kıyasla önemli ölçüde değişecektir.',
  },
  {
    question: 'Görselleştirmedeki değirmen homojenliği ne anlama geliyor?',
    answer:
      'Gösterilen parçacık dağılımı, her bir değirmenin gerçek homojenliğini simüle eder. 0.95 homojenlik değerine sahip bir Comandante C40 çok tutarlı parçacıklar üretirken; 0.40 değerindeki bir Hario Skerton çok daha fazla boyut varyasyonu gösterir.',
  },
];

const howToData = [
  {
    name: 'Değirmeninizi seçin',
    text: 'Açılır listeden modelinizi seçin. Dönüştürücü, ekipmanınıza özel olarak önerilen tıklama (click) veya seviyeleri gösterecektir.',
  },
  {
    name: 'Ekstraksiyon yönteminizi seçin',
    text: 'Kullanmayı planladığınız yöntemin simgesine tıklayın. Kontrol paneli tüm ilgili teknik parametrelerle güncellenecektir.',
  },
  {
    name: 'Mikron göstergesini yorumlayın',
    text: 'Gerçek parçacık boyutunu anlamak için çubuk grafikteki mikron değerini kullanın. Dokunsal referans (ince tuz, toz şeker...) görsel olarak kalibre etmenize yardımcı olur.',
  },
  {
    name: 'Parçacık simülasyonunu gözlemleyin',
    text: 'Noktaların dağılımı değirmeninizin tipik homojenliğini gösterir. Daha homojen bir desen, daha öngörülebilir ve tekrarlanabilir ekstraksiyon anlamına gelir.',
  },
  {
    name: 'Tada göre ayarlayın',
    text: 'En alttaki teşhis kılavuzunu referans olarak kullanın. Kahvenin tadı acıysa birkaç tık daha kalınlaştırın. Tadı ekşi ise daha inceye gidin. Her zaman tek seferde bir adım ayarlayın.',
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

export const content: ToolLocaleContent<GrindConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Kahve Öğütme Boyutu Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Öğütme ve Ekstraksiyon Üzerine Referanslar',
  bibliography: [
    {
      name: 'James Hoffmann: The Ultimate Guide to Coffee Grind Size',
      url: 'https://www.youtube.com/watch?v=83n7Yp_p2yM',
    },
    {
      name: 'Barista Hustle: Grind Size and Extraction',
      url: 'https://www.baristahustle.com/blog/the-grind-size-and-extraction/',
    },
    {
      name: 'Comandante C40: Official Extraction Chart',
      url: 'https://www.comandantegrinder.com/',
    },
    {
      name: 'SCA Brewing Best Practices: Grind Standards',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Öğütme Boyutunun Fiziği: Parçacık Boyutu Neden Her Şeyi Değiştirir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kahveyi öğüttüğünüzde, sadece çekirdek boyutunu küçültmezsiniz. Suyun lezzet bileşiklerini çözmesi için mevcut olan <strong>temas yüzey alanını</strong> tanımlarsınız. Çok ince öğütürseniz su, acı bileşikleri aşırı derecede çıkarır. Çok kalın öğütürseniz su yeterli dirençle karşılaşmadan geçer ve zayıf, ekşi bir fincan üretir. Öğütme dönüştürücüsü size her yöntem için tam aralığı verir.',
    },
    {
      type: 'summary',
      title: 'Doğru öğütme boyutunu ne belirler?',
      items: [
        '<strong>Ekstraksiyon yöntemi:</strong> Basınç, temas süresi ve filtre tipi, her demleme yöntemi için optimal mikron aralığını belirler.',
        '<strong>Değirmen homojenliği:</strong> Üst düzey bir dişli değirmen homojen parçacıklar üretir; bıçaklı bir değirmen aynı anda ince toz ve büyük parçalar üretir.',
        '<strong>Çekirdek tazeliği:</strong> Taze kavrulmuş kahve daha fazla CO2 içerir ve birkaç haftalık kahveye göre biraz daha kalın bir öğütmeye ihtiyaç duyabilir.',
        '<strong>Tat kalibrasyonu:</strong> Damak nihai araçtır. Tablo başlangıç noktanızdır; lezzet ise varış noktanızdır.',
      ],
    },
    {
      type: 'table',
      headers: ['Yöntem', 'Mikron', 'Dokunsal referans', 'Temas süresi'],
      rows: [
        ['Cezve (Türk Kahvesi)', '100-300 μm', 'Pudra / İnce un', '3-5 dk kaynama'],
        ['Espresso', '300-500 μm', 'İnce tuz', '25-30 sn'],
        ['Moka Pot / AeroPress', '500-700 μm', 'Sofra tuzu', '3-4 dk'],
        ['V60 / Filtre', '700-900 μm', 'Toz şeker', '2:30-3:15 dk'],
        ['Chemex / Clever', '900-1200 μm', 'Kalın kum', '3:30-4:30 dk'],
        ['French Press', '1200-1500 μm', 'Kaya tuzu', '4 dk demleme'],
        ['Cold Brew', '1500+ μm', 'Tane karabiber', '12-24 sa soğuk'],
      ],
    },
    {
      type: 'title',
      text: 'Yeni kahveler için altın kural',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>Yeni bir kahve açtığınızda, her zaman yönteminiz için önerilen aralığın orta noktasından başlayın. Oradan tada göre her seferinde birer tık ayarlayın. Her değirmenle en sevdiğiniz kahvelerin referans kaydını oluşturmak için her ayar üzerine notlar tutun.</p>',
    },
  ],
  ui: {
    step1Label: 'Adım 1: Ekipman Seçimi',
    step2Label: 'Adım 2: Ekstraksiyon Yöntemi',
    gaugeLabel: 'Teknik Parçacık Haritası (μm)',
    distributionLabel: 'Gerçek Parçacık Dağılımı',
    refLabel: 'Referans',
    rangeMicrasLabel: 'Aralık μm',
    unitMicras: 'HEDEF MİKRON (μm)',
    unitClicks: 'ÖNERİLEN TIKLAMA',
    unitLevel: 'ÖNERİLEN SEVİYE',
    suggestGrinderText: "Değirmeninizi göremiyor musunuz? Önerin",
    method0Name: 'Cezve (Türk Kahvesi)',
    method0Ref: 'Pudra / İnce un',
    method0Desc: 'Neredeyse un gibi ekstra ince toz. Türk kahvesinin telvesi için gereklidir.',
    method1Name: 'Espresso',
    method1Ref: 'İnce tuz',
    method1Desc: 'Yüksek basınçlı ekstraksiyon, direnç oluşturmak için çok ince öğütme gerektirir.',
    method2Name: 'Moka Pot / AeroPress',
    method2Ref: 'Sofra tuzu',
    method2Desc: 'Orta basınç veya hibrit daldırma. Çok yönlü ve dengeli doku.',
    method3Name: 'V60 / Filtre',
    method3Ref: 'Toz şeker',
    method3Desc: 'Manuel dökme yöntemleri; tatlılık ve asiditeyi vurgulamak için standarttır.',
    method4Name: 'Chemex / Clever',
    method4Ref: 'Kalın kum',
    method4Desc: 'Kalın filtreler veya kısa daldırma süreleri. Sabit ve düzenli bir akış gerektirir.',
    method5Name: 'French Press',
    method5Ref: 'Kaya tuzu',
    method5Desc: 'Uzun süreli daldırma, metal süzgeçten süzülmesi için büyük parçacıklar gerektirir.',
    method6Name: 'Cold Brew',
    method6Ref: 'Tane karabiber',
    method6Desc: 'Uzun saatler boyunca soğuk ekstraksiyon mümkün olan en kalın öğütmeyi gerektirir.',
    troubleIssue0: 'Tadı acı, kuru veya buruk mu?',
    troubleSolution0:
      'Aşırı ekstraksiyon yapıyorsunuz. Suyun daha hızlı akması ve daha az acı bileşik çıkarması için daha kalın öğütün.',
    troubleAction0: 'Daha kalın öğütün',
    troubleIssue1: 'Tadı ekşi, tuzlu veya sulu mu?',
    troubleSolution1:
      'Eksik ekstraksiyon yapıyorsunuz. Temas yüzeyini artırmak ve daha fazla şeker ve gövde çıkarmak için daha ince öğütün.',
    troubleAction1: 'Daha ince öğütün',
  },
};
