import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

const slug = 'kahve-ekstraksyon-teshisi-brew-fixer';
const title = 'Kahve Ekstraksiyon Teşhisi: The Brew Fixer';
const description =
  'Kahvenizin neden kötü tadı olduğunu saniyeler içinde teşhis edin. Demleme yönteminize ve tat profilinize göre öğütme boyutu, sıcaklık ve süre için kişiselleştirilmiş ayarlar alın.';

const faqData = [
  {
    question: 'Kahvemin az mı yoksa çok mu ekstrakte edildiğini nasıl anlarım?',
    answer:
      'Az ekstraksiyon (ekşi/keskin tat), suyun yeterli bileşiği çözmeden çok hızlı geçtiği anlamına gelir. Çok ekstraksiyon (acı/yanık tat) ise suyun kahveyle çok uzun süre temas ettiği anlamına gelir. Brew Fixer, tat notlarınızı ve demleme yönteminizi analiz ederek hangisinin gerçekleştiğini belirlemenize yardımcı olur.',
  },
  {
    question: 'En yaygın demleme hatası nedir?',
    answer:
      'Öğütme boyutu. Çoğu kişi ya çok kalın (zayıf, ekşi kahve) ya da çok ince (acı, çok ekstrakte edilmiş kahve) öğütür. Değirmeninizi demleme yönteminiz için tam boyuta ayarlamak, yapabileceğiniz en etkili düzeltmedir.',
  },
  {
    question: 'Sıcaklık gerçekten o kadar önemli mi?',
    answer:
      'Evet. Su sıcaklığı ekstraksiyon hızını kontrol eder. Çok soğuk olursa az ekstrakte (ekşi) olur. Çok sıcak olursa çok ekstrakte (acı) olur. Her yöntemin ideal aralığı vardır: V60 gibi yöntemler 92-96°C\'yi tercih ederken, French press uzun demleme sırasında acılaşmayı önlemek için 85-90°C\'de daha iyi sonuç verir.',
  },
  {
    question: 'Kahvem neden ağızda kuruluk hissi bırakıyor?',
    answer:
      'Astringency (burukluk) genellikle mineral bakımından zengin su veya çok ekstraksiyon ile minerallerin birleşmesinden kaynaklanır. Filtrelenmiş su ve biraz daha kalın öğütme kullanmayı deneyin. Bu işe yaramazsa, suyunuzun TDS değeri çok yüksek olabilir.',
  },
  {
    question: 'Sadece sıcaklık ve süreyi ayarlayarak kötü bir kahveyi düzeltebilir miyim?',
    answer:
      'Sıcaklık ve süre yardımcı olur, ancak öğütme boyutu genellikle sorunun kökenidir. Öğütmeniz çok kalınsa, daha uzun veya daha sıcak demlemek sadece biraz yardımcı olacaktır. Brew Fixer, ekstraksiyon üzerinde en büyük etkiye sahip olduğu için her zaman birincil eylem olarak öğütme ayarını önerecektir.',
  },
  {
    question: 'Tüm kahvelerim için aynı tarifi mi kullanmalıyım?',
    answer:
      'Hayır. Çok taze kahve (1-5 günlük) daha hızlı ekstrakte olur ve eski kahveye göre biraz daha kalın öğütme gerektirebilir. Açık kavrumlar daha yoğundur ve daha ince öğütme isteyebilir; koyu kavrumlar daha gözeneklidir ve daha kalın öğütmeyi tercih eder.',
  },
];

const howToData = [
  {
    name: 'Demleme yönteminizi seçin',
    text: 'Kullandığınız kahve makinesini seçin: V60/Pour-over, French press, Aeropress, Moka pot, espresso makinesi veya cold brew. Araç yönteme özel öneriler sunacaktır.',
  },
  {
    name: 'Baskın tat kusurunu belirleyin',
    text: 'Kahvenizi tadın ve en çok öne çıkan tadı seçin: ekşi, acı (yanık), sulu (zayıf) veya buruk (kuruluk). İsterseniz ikincil bir tat da seçebilirsiniz.',
  },
  {
    name: 'Şiddeti derecelendirin',
    text: 'Tat kusurunun ne kadar güçlü olduğunu belirtmek için kaydırıcıyı hareket ettirin. "Hafif" zar zor fark edildiği, "şiddetli" ise bardağa hakim olduğu anlamına gelir. Bu, ayarın hassasiyetine yardımcı olur.',
  },
  {
    name: 'Teşhisi çalıştırın',
    text: '"Teşhis Et" düğmesine tıklayın; araç girdilerinizi analiz edecek ve size birincil eylem (öğütme), ikincil eylemler ve bir doku referansı sunacaktır.',
  },
  {
    name: 'Ayarlayın ve test edin',
    text: 'Önerilen değişikliği uygulayın (örn. daha kalın öğütün, daha uzun demleyin). Yeni bir bardak demleyin ve tadın. Küçük ayarlamalar birikir.',
  },
  {
    name: 'Geri bildirim verin',
    text: 'Bir sonraki bardağı demlediğinizde, iyileşme olup olmadığını araca söyleyin. Cevabınız evet ise bir konfeti animasyonu göreceksiniz! Değilse, geri dönün ve farklı parametreleri deneyin.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Kahve Ekstraksiyonu Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar ve Kahve Bilimi',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Ekstraksiyon Standartları',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao: The Coffee Roaster\'s Companion',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle: Espresso Ekstraksiyon Rehberi',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind: Kahve Ekstraksiyonunu Anlamak',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger: Kahvede Tat Notlarını Tanımlamak',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kahvenizin Tadı Neden Kötü? Ekstraksiyon Teşhis Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mükemmel bir espresso ile yanık kağıt tadındaki bir bardak arasındaki fark tek bir kavrama indirgenir: <strong>kahve ekstraksiyonu</strong>. Ekstraksiyon, suyun öğütülmüş kahvedeki çözünür bileşikleri çözme sürecidir. Doğru yaparsanız karmaşıklık, tatlılık ve berraklığı ortaya çıkarırsınız. Yanlış yaparsanız ekşilik, acılık veya zayıf bir tat alırsınız.',
    },
    {
      type: 'summary',
      title: 'Brew Fixer\'dan Neler Öğreneceksiniz?',
      items: [
        '<strong>Ekstraksiyon kusurlarını teşhis etme:</strong> Kahvenizin az mı yoksa çok mu ekstrakte edildiğini veya su kalitesi sorunu olup olmadığını belirleyin.',
        '<strong>Ekstraksiyonu kontrol eden üç kaldıraç:</strong> Öğütme boyutu, su sıcaklığı ve temas süresi. Hangisini önce ayarlamalısınız? Brew Fixer size söyler.',
        '<strong>Yönteme özel öneriler:</strong> V60 için ideal öğütme, French press için olandan tamamen farklıdır. Demleme ekipmanınıza özel tavsiyeler alın.',
        '<strong>Doku referansları:</strong> Tanıdık malzemelerle (ince toz, deniz tuzu, kum) karşılaştırarak tam olarak hangi öğütme boyutunu hedefleyeceğinizi bilin.',
      ],
    },
    {
      type: 'title',
      text: 'Kahve Ekstraksiyonunun Üç Boyutu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ekstraksiyon yüzdesi, çözünmüş katı maddelerin kütlesinin orijinal kuru kahvenin kütlesine oranıdır. Nitelikli kahve, tüm yöntemlerde <strong>%18-20 ekstraksiyon</strong> hedefler. Bunun altındaki her şey ekşi, üzerindeki her şey acı tadacaktır.',
    },
    {
      type: 'list',
      items: [
        '<strong>Öğütme boyutu</strong> yüzey alanını kontrol eder. İnce öğütmeler daha hızlı ekstrakte olur. Kalın öğütmeler daha yavaş ekstrakte olur.',
        '<strong>Su sıcaklığı</strong> çözünme hızını kontrol eder. Sıcak su (94-96°C) daha hızlı, soğuk su (85-90°C) daha yavaş ekstrakte eder.',
        '<strong>Temas süresi</strong> suyun kahveyle ne kadar süre temas ettiğidir. Pour-over (2:30-3:30 dk), French press (4:00-5:00 dk).',
      ],
    },
    {
      type: 'title',
      text: 'Ekşi Kahve Teşhisi (Az Ekstraksiyon)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ekşi kahvenin tadı limon veya elma gibidir; keskin ve asidiktir. Suyun kahveden katı maddeleri çıkarmak için yeterli zaman harcamadığı anlamına gelir. En basit çözüm neredeyse her zaman suyun akışını yavaşlatmak için <strong>daha ince öğütmektir</strong>.',
    },
    {
      type: 'list',
      items: [
        'Kahveyi daha ince öğütün (öğütme boyutunu 5-10 µm azaltın)',
        'Veya demleme süresini biraz uzatın (15-30 saniye ekleyin)',
        'Veya su sıcaklığını 95-96°C\'ye çıkarın',
      ],
    },
    {
      type: 'title',
      text: 'Acı Kahve Teşhisi (Çok Ekstraksiyon)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Acı kahvenin tadı yanık, küllü veya odunsudur. Suyun arzu edilen bileşiklerin ötesine geçerek çok uzun süre ekstraksiyon yaptığı anlamına gelir. Çözüm, su akışını artırmak ve temas süresini azaltmak için <strong>daha kalın öğütmektir</strong>.',
    },
    {
      type: 'list',
      items: [
        'Kahveyi daha kalın öğütün (öğütme boyutunu 5-10 µm artırın)',
        'Veya demleme süresini kısaltın (15-30 saniye çıkarın)',
        'Veya su sıcaklığını 92-93°C\'ye düşürün',
      ],
    },
    {
      type: 'title',
      text: 'Sulu Kahve Teşhisi (Zayıf, Gövdesiz)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zayıf kahvenin tadı ve gövdesi eksiktir. Genellikle öğütmenizin çok kalın olduğu veya kahvenizin bayat olduğu anlamına gelir. Değirmeni ayarlamak en hızlı çözümdür.',
    },
    {
      type: 'list',
      items: [
        'Daha fazla yüzey alanı için daha ince bir öğütme kullanın',
        'Daha fazla kahve kullanın (demleme oranını artırın)',
        'Biraz daha uzun veya daha yüksek sıcaklıkta demleyin',
      ],
    },
    {
      type: 'title',
      text: 'Buruk Kahve Teşhisi (Kuruluk, Mineral Tadı)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Burukluk ağızda kuruluk hissi yaratır. Genellikle çok ekstraksiyon ile birleşen sert sudan (yüksek mineral içeriği) kaynaklanır. Bu, hem öğütme ayarı <em>hem de</em> su kalitesinin iyileştirilmesini gerektirir.',
    },
    {
      type: 'list',
      items: [
        'Mineralleri azaltmak için filtrelenmiş su kullanın (hedef TDS 60-150 ppm)',
        'Çok ekstraksiyonu azaltmak için daha kalın öğütün',
        'Biraz daha düşük sıcaklıkta su deneyin (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Öğütme Boyutu Tablosu: Görünüm ve Hissiyat',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Öğütme Adı', 'Parçacık Boyutu', 'Doku Referansı', 'En İyi Yöntemler'],
      rows: [
        ['Çok İnce', '5-15 µm', 'İnce toz, kakao', 'Espresso, Türk Kahvesi'],
        ['İnce', '15-30 µm', 'Pudra şekeri', 'Moka pot, Aeropress'],
        ['Orta-İnce', '30-50 µm', 'Kum, masa tuzu', 'V60, Chemex, Pour-over'],
        ['Orta', '50-70 µm', 'Plaj kumu', 'Filtre kahve makinesi'],
        ['Kalın', '70-90 µm', 'Kaya tuzu, kalın kum', 'French press, Cupping'],
        ['Çok Kalın', '90+ µm', 'Karabiber, ekmek kırıntısı', 'Cold brew, Perkolatör'],
      ],
    },
    {
      type: 'title',
      text: 'Su Kalitesi: TDS ve Ekstraksiyon Üzerindeki Etkisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toplam Çözünmüş Katı Maddeler (TDS), sudaki mineral içeriğinin ölçüsüdür. Musluk suyu bölgeye göre büyük farklılıklar gösterir. Kahve ekstraksiyonu su kalitesine karşı çok hassastır.',
    },
    {
      type: 'list',
      items: [
        '<strong>Çok yumuşak (0-50 ppm):</strong> Su agresif şekilde ekstrakte eder, tadı tuzlu olabilir.',
        '<strong>İdeal (60-150 ppm):</strong> Tatlı, dengeli ve gövdeli bir ekstraksiyon.',
        '<strong>Çok sert (200+ ppm):</strong> Mineraller tatları hapseder, burukluk yaratır.',
      ],
    },
    {
      type: 'tip',
      title: 'Hızlı Su Kalitesi Çözümü',
      html: '<p>Sert sudan şüpheleniyorsanız, karşılaştırma için filtrelenmiş veya şişe su ile demleme yapın. Tadı hemen iyileşirse sorunu buldunuz demektir. Basit bir su filtresine yatırım yapın.</p>',
    },
  ],
  ui: {
    methodLabel: 'Ne demliyorsunuz?',
    methodPourover: 'Pour Over / Filtre',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Moka Pot',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Demleme ekipmanınızı seçin',
    flavorLabel: 'Tadı nasıl?',
    flavorAcidic: 'Ekşi / Keskin',
    flavorBitter: 'Acı / Yanık',
    flavorWatery: 'Sulu / Zayıf',
    flavorAstringent: 'Buruk / Kuru',
    flavorHint: 'En fazla 2 tat seçin',
    severityLabel: 'Sorun ne kadar güçlü?',
    severitySlightLabel: 'Zar zor fark ediliyor',
    severityModerateLabel: 'Orta',
    severitySevereLabel: 'Baskın',
    diagnoseBtn: 'Kahvemi Teşhis Et',
    resetBtn: 'Sıfırla',
    resultTitle: 'Teşhis Tamamlandı',
    resultExplanation: 'Bardağınızda neler oluyor?',
    actionMainLabel: 'Birincil Eylem',
    actionSecondaryLabel: 'Sıcaklık ve Süre',
    actionTertiaryLabel: 'Profesyonel İpucu',
    textureReferenceLabel: 'Doku Referansı',
    improvementHint: 'Ayarlamayı yapın ve yeni bir bardak demleyin.',
    copyDiagnosisBtn: 'Teşhisi Kopyala',
    feedbackLabel: 'Kahveniz iyileşti mi?',
    feedbackSuccessTemplate: 'Harika! Ayarlama işe yaradı.',
    methodPouroverDesc: 'V60, Chemex, Damlatıcı',
    methodFrenchpressDesc: 'Press pot, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka pot, Ocak üstü',
    methodEspressoDesc: 'Espresso makinesi',
    methodColdbrewDesc: 'Daldırma, soğuk',
    fadeOutMessage: 'İyi iş! Denemeye devam edin.',
  },
};
