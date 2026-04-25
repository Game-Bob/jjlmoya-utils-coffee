import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kahve-oran-hesaplayici';
const title = 'Kahve Demleme Oranı Hesaplayıcı';
const description =
  'İdeal oranınız (1:15, 1:16...) için tam gram kahve veya mililitre su miktarını hesaplayın. Fincan içi sonuç, dökme kılavuzu, buzlu kahve modu ve kaydedilmiş reçeteleri içerir.';

const faqData = [
  {
    question: '1:15 kahve oranı nedir?',
    answer:
      'Kullandığınız her bir gram öğütülmüş kahve için 15 mililitre (veya gram) su kullanmanız demektir. 20g kahve ile 300ml su dökersiniz. V60, Chemex veya Aeropress gibi filtre yöntemleri için Nitelikli Kahve Birliği (SCA) tarafından önerilen standart orandır.',
  },
  {
    question: 'Fincanımda neden döktüğümden daha az kahve var?',
    answer:
      'Çünkü öğütülmüş kahve demleme sırasında suyu tutar. Ortalama olarak, her bir gram kahve yaklaşık 2ml sıvı emer. 20g kahveye 300ml su dökerseniz, fincanda yaklaşık 260ml kahve elde edersiniz. Bu hesaplayıcı size gerçek sonucu gösterir.',
  },
  {
    question: 'Bloom (çiçeklenme) veya ön demleme nedir?',
    answer:
      'Kahve ağırlığının iki katına eşdeğer (gram başına 2ml) olan ilk su dökme işlemidir. Taze kahvenin gazını salması için yapılır: kavurma sırasında hapsolan CO2 dışarı çıkar ve suyun bileşikleri homojen bir şekilde çıkarmasını sağlar. Görünür bir çiçeklenme yoksa, kahve bir süre önce öğütülmüş veya kavrulmuş demektir.',
  },
  {
    question: 'Buzlu kahveyi sulu olmadan nasıl yaparım?',
    answer:
      'Flaş soğutma (flash chilling) tekniğini kullanın: Toplam suyun %60\'ını 90-96 derecede sıcak su olarak hazırlayın ve kalan %40\'ını karafın içine buz olarak koyun. Sıcak kahveyi doğrudan buzun üzerine dökün. Hızlı soğutma aromaları hapseder. Bu hesaplayıcı, Buzlu Kahve modunu etkinleştirdiğinizde miktarları otomatik olarak yeniden hesaplar.',
  },
  {
    question: 'Aeropress için en iyi oran nedir?',
    answer:
      'Kullanıma bağlı olarak 1:12 ile 1:15 arasındadır. Kahveyi sade içiyorsanız 1:15 dengelidir. Sütlü içecekler için baz olarak kullanıyorsanız veya yüksek konsantrasyon istiyorsanız 1:12 veya 1:13\'e inin. Aeropress, farklı oranları çok iyi yönettiği için en çok yönlü yöntemdir.',
  },
  {
    question: 'Favori reçetelerimi kaydedebilir miyim?',
    answer:
      'Evet. En sevdiğiniz kahve için mükemmel oranı ve miktarı bulduğunuzda, "Reçeteyi kaydet" düğmesine basın, bir ad verin (örneğin: Sabah V60\'ı) ve tarayıcınıza kaydedilecektir. İstediğiniz zaman tek bir tıklamayla geri çağırabilirsiniz.',
  },
];

const howToData = [
  {
    name: 'Hesaplama modunu seçin',
    text: 'Elinizdeki kahve miktarından mı yoksa fincan kapasitenizden mi (ml su) başlayacağınızı seçin. Hesaplayıcı tüm sonuçları seçilen moda göre uyarlar.',
  },
  {
    name: 'Miktarı girin',
    text: 'Kullanacağınız kahve gramını veya su mililitresini yazın. Hesaplayıcı, seçilen orana göre diğer değeri otomatik olarak hesaplayacaktır.',
  },
  {
    name: 'Yoğunluğu seçin',
    text: 'Sert (1:12-14), Dengeli (1:15-16), Yumuşak (1:17-18) arasından seçim yapın veya özel oranınızı girin. Her seçenek farklı bir lezzet profiline karşılık gelir.',
  },
  {
    name: 'Buzlu Kahve modunu etkinleştirin (isteğe bağlı)',
    text: 'Buzlu kahve yapıyorsanız anahtarı açın. Hesaplayıcı, flaş soğutma tekniğini kullanarak suyu sıcak su (%60) ve buz (%40) olarak otomatik olarak bölecektir.',
  },
  {
    name: 'Dökme kılavuzunu izleyin',
    text: 'Demleme işleminizi yapılandırmak için aşama kılavuzunu (Çiçeklenme ve Final Döküşü) kullanın. Her aşama tam olarak ne kadar su dökmeniz gerektiğini ve ne zaman dökmeniz gerektiğini belirtir.',
  },
  {
    name: 'Reçeteyi kaydedin',
    text: 'Mükemmel oranınızı bulduğunuzda tanımlayıcı bir adla kaydedin. Reçeteleriniz sonraki oturumlar için tarayıcınızda saklanır.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Demleme Oranı Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar ve SCA Standartları',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kahve Oranı Hesaplayıcı: Mükemmel Ekstraksiyon İçin Ana Klavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir fincan nitelikli kahve demlemek öznel bir mutfak eylemi değildir; <strong>akışkan kimyası</strong> ve <strong>kütle transferi</strong> üzerine bir deneydir. Bu sürecin merkezinde, çözünen (öğütülmüş kahve) ve çözücü (su) arasındaki niceliksel ilişkiyi belirleyen kritik bir ölçü olan <strong>Demleme Oranı (Brew Ratio)</strong> kavramı yer alır. Hesaplayıcımız, baristaların ve meraklıların ekstraksiyonlarında mükemmel tekrarlanabilirlik elde etmelerini sağlamak için <em>Nitelikli Kahve Birliği (SCA)</em> standartlarını ve uygulamalı termodinamik ilkelerini birleştirir.',
    },
    {
      type: 'summary',
      title: 'Kahve Oranı Hakkında Neler Öğreneceksiniz?',
      items: [
        '<strong>Demleme Oranı:</strong> Kahve ve su arasındaki ağırlık ilişkisinin (örneğin 1:15) fincanınızın potansiyel gücünü ve duyusal profilini nasıl belirlediği.',
        '<strong>TDS ve Ekstraksiyon:</strong> Çözünmüş katı maddelerin arkasındaki bilim ve çekirdeğin yüzde kaçının aslında içeceğinize geçmesi gerektiği.',
        '<strong>Su Tutma Ayarı:</strong> Kahvenin gram başına neden 2g su emdiği ve gereken ekstra su miktarının nasıl hesaplanacağı.',
        '<strong>Özel Yöntemler:</strong> V60, French Press, Espresso ve flaş demleme buzlu kahve tarifleri için ideal oranlar.',
      ],
    },
    {
      type: 'title',
      text: 'Demleme Oranı nedir ve neden en önemli değişkendir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kahve yaklaşık %30 oranında çözünür madde içerir, ancak bu maddenin tamamı insan damağı için arzu edilir değildir. Evrensel bir çözücü olarak hareket eden su, bileşikleri moleküler ağırlıklarına ve kimyasal afinitelerine göre belirli bir sırayla çıkarır. Kahve oranı, her bir gram kahveye ne kadar çözünme kapasitesi sunduğumuzu hassas bir şekilde kontrol eder.',
    },
    {
      type: 'list',
      items: [
        '<strong>Asidik Aşama (Lipidlerin ve Organik Asitlerin Çözünmesi):</strong> Bunlar yüksek çözünürlükleri nedeniyle ilk önce çözünürler. Parlaklık, malik veya sitrik asitlik ve meyvemsi notalar katarlar. Çok düşük bir oran (yetersiz ekstraksiyon) süreci burada durdurarak ekşi ve tuzlu bir fincanla sonuçlanır.',
        '<strong>Tatlı Aşama (Şekerler ve Karbonhidratlar):</strong> Bunlar bir sonraki aşamada çıkarılır. Denge, tatlılık ve gövde oluştururlar. Bu, kahvenin maksimum aromatik karmaşıklığına ve yapısal dengesine ulaştığı "altın penceredir".',
        '<strong>Acı Aşama (Lifler ve Fenolik Bileşikler):</strong> Bunlar en yavaş çözünenlerdir. Aşırı oranlarda (aşırı ekstraksiyon), su kahve hücrelerini bozar; kuru acılıklar, kül ve odunsu notalar çıkarır.',
      ],
    },
    {
      type: 'title',
      text: 'Önerilen oranlar: Ekstraksiyon yöntemine göre porsiyonlar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her ekstraksiyon yöntemi; temas süresi, pompa basıncı veya filtre gözenek boyutu gibi değişkenler nedeniyle özel bir oran gerektirir. Aşağıdaki teknik tablo 2026 yılı için endüstri standartlarını ana hatlarıyla belirtmektedir:',
    },
    {
      type: 'table',
      headers: ['Demleme Yöntemi', 'Oran (Gram/Su)', 'Fincan Profili', 'Hedef Süre'],
      rows: [
        ['Espresso', '1:2 - 1:2.5', 'Yoğun, viskoz, yoğun krema', '25-30 sn'],
        ['V60 / Pour-Over', '1:15 - 1:16', 'Temiz, parlak, net notalar', '2:30-3:30 dk'],
        ['Aeropress', '1:12 - 1:15', 'Çok yönlü, orta-yüksek gövde', '1:30-2:00 dk'],
        ['French Press', '1:12 - 1:14', 'Dokulu, ağır, yağlı', '4:00-5:00 dk'],
        ['Cold Brew', '1:8 - 1:12', 'Tatlı, düşük asidite, yüksek gövde', '12-24 saat'],
      ],
    },
    {
      type: 'title',
      text: 'Gereken suyun hesaplanması: Çekirdek Su Tutma Faktörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuel demlemedeki en yaygın hatalardan biri, öğütülmüş kahvenin sabit miktarda su tutan gözenekli bir hidrofilik yapı olduğunu görmezden gelmektir. Döktüğünüz suyun tamamı fincana ulaşmaz.',
    },
    {
      type: 'paragraph',
      html: 'Bilimsel olarak, öğütülmüş kahve <strong>1.0 gram kahve başına yaklaşık 2.0 gram su</strong> tutar. Hesaplayıcımız <strong>Dinamik Su Tutma Ayarı</strong> özelliğini sunar: Belirli bir 300ml\'lik kabı doldurmanız gerekiyorsa sistem, çekirdek emilimini telafi etmek için 340ml su dökmeniz gerektiğini hesaplar, böylece ekstraksiyon oranı ve dolayısıyla lezzet bozulmadan kalır.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Kahve Dozu', value: '20g', icon: 'mdi:coffee' },
        { label: 'Dökülen Su', value: '300ml', icon: 'mdi:water' },
        { label: 'Su Tutma', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'Fincandaki', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'Bloom\'un Önemi: Homojen Ekstraksiyon İçin Gaz Tahliyesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '"Bloom" (çiçeklenme) aşaması sadece estetik değildir; fiziksel bir gerekliliktir. Kavurma sırasında kahve, hücresel matrisinde hapsolmuş CO2 üretir. Tüm suyu sürekli dökersek, gaz şiddetli bir şekilde dışarı çıkar, mikro kanallar (channeling) oluşturur ve çözücünün kahve parçacıklarının merkezine nüfuz etmesini engeller.',
    },
    {
      type: 'tip',
      title: 'Homojen Saturasyon Tekniği',
      html: '<p>Mükemmel bir çiçeklenme için, kahve ağırlığının tam iki katı su dökün (1:2 bloom oranı). Tüm kahvenin ıslandığından emin olmak için hafifçe karıştırın veya döndürün. 30-45 saniye bekleyin. Gaz salınımı, sonraki döküşlerin laminer bir şekilde akmasını sağlayarak katı maddeleri kahve yatağı boyunca homojen bir şekilde çıkaracaktır.</p>',
    },
    {
      type: 'title',
      text: 'Buzlu Kahve Eğitimi: Lezzeti seyreltmeden nasıl buzlu kahve demlenir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nitelikli buzlu kahve (Flash Brew), termodinamik bir yeniden kalibrasyon gerektirir. Hedef, aromatik karmaşıklığı yakalamak için uçucu yağları 94°C\'de çıkarmak, ardından oksidasyonu ve parlaklık kaybını önlemek için onları hızla soğutmaktır.',
    },
    {
      type: 'list',
      items: [
        '<strong>%60 Sıcak Su:</strong> Yatağı çok erken soğutmadan %18-20 ekstraksiyon elde etmek için gereken minimum miktar.',
        '<strong>%40 Termal Buz:</strong> Alıcı karafa yerleştirilir. Kahvenin termal enerjisi buza aktarılır (gizli erime ısısı), içeceği anında 5°C\'nin altına soğutur.',
        '<strong>Final Gücü:</strong> Birleştirildiğinde, nihai oran (örneğin 1:15) tam olarak kalır, bu da doğru lezzet konsantrasyonuna sahip canlı, soğuk bir içecekle sonuçlanır.',
      ],
    },
    {
      type: 'title',
      text: 'Öğütme Boyutu ve Kahve Oranı: Temas Yüzey Alanının Anahtarı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Oran, denklemin sadece yarısıdır. Öğütme, çözücüye <strong>Toplam Maruz Kalan Yüzey Alanını</strong> belirler. Daha küçük parçacıklar (ince öğütme) orantılı olarak daha fazla yüzey alanına sahiptir ve bu da kimyasal bileşiklerin ekstraksiyonunu dramatik bir şekilde hızlandırır.',
    },
    {
      type: 'title',
      text: 'Tekrarlanabilirlik ve Bilim: Mutfağınızı bir barista laboratuvarına dönüştürün',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nitelikli kahvede mükemmellik metrik tutarlılıktan gelir. <strong>Özel Reçeteler</strong> özelliğimiz, başarılı kalibrasyonlarınızdan oluşan teknik bir depo oluşturmanıza olanak tanır. Bu sadece bir favoriler klasörü değildir; aynı kahvenin 1:15 oranına karşı 1:16 oranına nasıl tepki verdiğini karşılaştırmak için bir analiz aracıdır ve reçeteyi hassas bir şekilde ayarlamanızı sağlar.',
    },
  ],
  ui: {
    modeCoffee: 'Elimde Kahve Var',
    modeHintCoffee: 'Ne kadar su gerektiğini söyle',
    modeWater: 'Elimde Su Var',
    modeHintWater: 'Ne kadar kahve öğütmem gerektiğini söyle',
    inputLabelCoffee: 'Elinizdeki kahve (gram)',
    inputLabelWater: 'Fincan kapasiteniz (ml)',
    intensityLabel: 'Kahve yoğunluğu',
    intensityStrong: 'Sert',
    intensityBalanced: 'Dengeli',
    intensityLight: 'Yumuşak',
    intensityCustom: 'Özel',
    customCoffeeLabel: 'Kahve',
    customWaterLabel: 'Su',
    icedModeLabel: 'Buzlu Kahve Modu',
    recipeLabel: 'Tam reçeteniz',
    resultTitle: 'Sonuç',
    resultCoffeeLabel: 'Kahve',
    resultCoffeeSub: 'İnce-orta öğütme',
    resultHotWaterLabel: 'Sıcak su',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'Sıcak su (%60)',
    resultIceLabel: 'Buz',
    resultIceSub: 'Karafta',
    resultCupLabel: 'Fincanda',
    resultCupSub: 'Kahve ~2ml/g su tutar',
    pouringGuideLabel: 'Dökme kılavuzu',
    favoritesLabel: 'Sık kullanılan reçetelerim',
    saveBtn: '+ Bu reçeteyi kaydet',
    favEmptyText: 'Henüz kaydedilmiş reçete yok. Mükemmel demini ayarla ve kaydet.',
    modalTitle: 'Reçeteye bir ad verin',
    modalPlaceholder: 'Örn: "Sabah V60\'ı"',
    modalCancel: 'İptal',
    modalConfirm: 'Kaydet',
    phaseBloomTemplate: 'Bloom: {bloomMl} ml suyu dairesel bir şekilde dökün. Kahvenin gazını salması için {bloomSeconds} saniye bekleyin.',
    phasePourTemplate: 'Final döküşü: Kalanı {pourCount} yavaş döküşte toplam {hotWaterMl} ml\'yi tamamlayacak şekilde ekleyin.',
    phaseIcedTemplate: 'Buzlu: Sıcak kahveyi doğrudan karaftaki {iceMl} g buzun üzerine dökün.',
    cupWarningTemplate: 'Fincan sadece {inCupMl} ml alır. Kahve sıvıyı tutar.',
    favModeCoffee: 'g kahve',
    favModeWater: 'ml su',
    favModeIced: ' - Buzlu',
  },
};
