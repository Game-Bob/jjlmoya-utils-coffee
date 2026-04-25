import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kahve-demleme-zamanlayicisi';
const title = 'Kahve Demleme Zamanlayıcısı';
const description =
  'Dökme aşamaları, ritmik sesli uyarılar ve ekstraksiyon özeti içeren profesyonel nitelikli kahve zamanlayıcısı. V60, Chemex ve Aeropress için optimize edilmiştir.';

const faqData = [
  {
    question: 'Neden telefonumun sayacı yerine bu zamanlayıcıyı kullanmalıyım?',
    answer:
      'Bu zamanlayıcı özellikle kahve için tasarlanmıştır. Görsel aşamalar (Bloom, Dökme, Süzülme), her geçişten 3 saniye önce sesli uyarılar içerir ve dökme sırasında ritminizi asla kaybetmemeniz için tam tarifinizi yapılandırmanıza olanak tanır.',
  },
  {
    question: 'Bloom (çiçeklenme) süresi nedir?',
    answer:
      'CO2\'yi serbest bırakmak için az miktarda suyun döküldüğü ilk ön demlemedir (genellikle 30 ila 45 saniye). Zamanlayıcı, ne zaman beklemeniz ve ne zaman dökmeye devam etmeniz gerektiğini bilmeniz için bu aşamayı kehribar rengiyle vurgular.',
  },
  {
    question: 'Ekstraksiyon süremin doğru olup olmadığını nasıl anlarım?',
    answer:
      'Standart bir V60 için toplam süre 2:30 ile 3:15 dakika arasında olmalıdır. Daha erken biterse öğütmeniz çok kalındır. Daha uzun sürerse çok incedir. Zamanlayıcı, bu süreci hassas bir şekilde teşhis etmenizi sağlar.',
  },
  {
    question: 'Sesli uyarıları var mı?',
    answer:
      'Evet. Sistem, bloom aşaması bitmeden önce ve işlemin sonunda kısa bir bip sesi çıkararak ekran bakmanıza gerek kalmadan su akışına odaklanmanıza olanak tanır.',
  },
  {
    question: 'Chemex ile uyumlu mu?',
    answer:
      'Kesinlikle. Alt kısımdaki ayarlar bölümünden toplam süreyi (kalın filtresi nedeniyle Chemex için tipik olan) 4:30 veya 5:00 dakikaya ayarlayabilirsiniz.',
  },
  {
    question: 'Mobilde çalışıyor mu?',
    answer:
      'Mobil kullanım için optimize edilmiştir; elleriniz ıslakken veya kuğu boyunlu kettle\'ınızı tutarken bile basılması kolay büyük düğmelere sahiptir.',
  },
];

const howToData = [
  {
    name: 'Tarifinizi yapılandırın',
    text: 'Alt bölümdeki ayarları demleme yönteminize (V60, Chemex, Aeropress) göre toplam su, bloom suyu, bloom süresi ve toplam süre olarak ayarlayın.',
  },
  {
    name: 'Başlat düğmesine basın',
    text: 'Büyük başlat düğmesine basın. Zamanlayıcı başlayacak ve üstteki ilerleme çubuğunda aktif aşamayı gösterecektir.',
  },
  {
    name: 'Bloom aşaması',
    text: 'Bloom suyunu (ekranda gösterilen) spiral şeklinde dökün ve zamanlayıcının ilerlemesini bekleyin. Bitmeden 3 saniye önce sesli bir uyarı alacaksınız.',
  },
  {
    name: 'Dökme aşaması',
    text: 'Toplam ağırlığa ulaşana kadar kalan suyu dökmeye devam edin. Eşit bir ekstraksiyon için yavaş ve sabit daireler çizerek dökün.',
  },
  {
    name: 'Süzülme aşaması',
    text: 'Kahvenin filtreden tamamen süzülmesini bekleyin. Bu aşama ekstraksiyonu bitirir ve fincanınızın berraklığını ve bitişini belirler.',
  },
  {
    name: 'Özeti gözden geçirin',
    text: 'İşlem bittiğinde, zamanlayıcı toplam süreyi ve dökülen suyu gösterir. Tarifi geliştirmek için bu değerleri lezzet izlenimlerinizle birlikte not edin.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Kahve Zamanlayıcısı Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar ve SCA Protokolleri',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kahve Zamanlayıcısı: Ekstraksiyon Zamanlamasının Bilimi (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nitelikli kahve dünyasında, su ile öğütülmüş kahve arasındaki <strong>temas süresi</strong> sadece bir bekleme metriği değildir; fincanınızda hangi kimyasal bileşiklerin sonlanacağına karar veren kinetik faktördür. Fazladan bir saniye, karamel tatlılığından kül gibi bir acılığa geçiş anlamına gelebilir. V60, Chemex ve Aeropress için profesyonel zamanlama aracımız bir <strong>ritim asistanı</strong> gibi hareket ederek barista düzeyindeki hassasiyeti evde erişilebilir kılar.',
    },
    {
      type: 'summary',
      title: 'Özel bir zamanlayıcı neden hayati önem taşır?',
      items: [
        '<strong>Kinetik Kontrol:</strong> Suyun kahve katılarını çözme hızı sabittir. Zaman sizin freniniz ve gazınızdır.',
        '<strong>Dökme Aşamaları:</strong> Kahve doğrusal olarak ekstrakte olmaz. Zamanı Bloom, Dökme ve Süzülme olarak ayırmak kritiktir.',
        '<strong>Tekrarlanabilirlik:</strong> Zamanı ölçmezseniz, en iyi fincanlarınızı tekrarlayamazsınız. Tutarlılık kalitenin temelidir.',
        '<strong>Öğütme Ayarı:</strong> Final süresi, bir dahaki sefere daha ince mi yoksa daha kalın mı öğütmeniz gerektiğini söyler.',
      ],
    },
    {
      type: 'title',
      text: 'Ekstraksiyon Zaman Çizelgesi: Her saniyede ne olur?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sıcak su kahveye değdiğinde moleküler bir engel parkuru başlar. Tüm aromalar aynı anda ekstrakte olmaz. Bu zaman çizelgesini anlamak, bir amatör ile profesyonel bir barista arasındaki farktır:',
    },
    {
      type: 'list',
      items: [
        '<strong>0 - 45. saniyeler (Bloom):</strong> Bu aşama gaz çıkış aşamasıdır. Kavurma sırasında hapsolan CO2 su girişini engeller. Burada beklemek çekirdeğin açılmasına izin vererek eşit ekstraksiyonun yolunu hazırlar.',
        '<strong>45 - 120. saniyeler (Asit ve Tatlı Ekstraksiyonu):</strong> Su akar ve mineral tuzları, organik asitleri ve karmaşık şekerleri çözer. Bu, lezzetin kalbidir.',
        '<strong>120 - 210. saniyeler (Gövde ve Bitiş):</strong> Daha ağır lifler ve acı bileşikler ekstrakte edilir. Bu aşama çok uzun sürerse kahve buruklaşır.',
      ],
    },
    {
      type: 'title',
      text: 'Bloom Aşaması: Neden 30 saniye standarttır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Bloom</strong> veya ön demleme, kahve ağırlığının yaklaşık iki katı kadar suyu döktüğümüz zamandır. Bu ilk 30 saniye karbondioksiti dışarı atmaya yarar. Bu süreye saygı duyulmazsa, gaz suyu dışarı iter ve sıvının kahveye değmeden geçtiği kanallar (channeling) oluşturarak sulu ve tutarsız bir fincana neden olur.',
    },
    {
      type: 'table',
      headers: ['Aşama', 'Önerilen Süre', 'Teknik Eylem', 'Kimyasal Amaç'],
      rows: [
        ['Bloom', '30 - 45 sn', 'Kahve ağırlığının 2 katını dökün', 'Gaz çıkışı (CO2)'],
        ['İlk Döküş', '45 - 90 sn', 'Yavaş daireler', 'Asit ve tatlı ekstraksiyonu'],
        ['İkinci Döküş', '90 - 150 sn', 'Nazik merkezi döküş', 'Denge ve gövde'],
        ['Süzülme', 'Sonuna kadar', 'Sabit damlama', 'Berraklık ve bitiş'],
      ],
    },
    {
      type: 'title',
      text: 'Zamanın Öğütme Üzerindeki Etkisi: Geri Bildirim Döngüsü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zamanlayıcı, değirmen için en iyi teşhis aracınızdır. V60 tarifiniz 3:00 dakika sürmeliyken su 2:15\'te tamamen süzüldüyse, kahvenin tadı muhtemelen ekşi ve zayıf (eksik ekstraksiyon) olacaktır. Çözüm daha yavaş dökmek değil, parçacıkların suya daha fazla direnç göstermesi için <strong>daha ince öğütmektir</strong>.',
    },
    {
      type: 'stats',
      items: [
        { label: 'İdeal V60 Süresi', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'İdeal Chemex Süresi', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'İdeal Aeropress Süresi', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Ritim Uyarıları: Sesli asistan neden gereklidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Filtre kahve demlemek, tartınıza ve dökme düzeninize sürekli görsel dikkat gerektirir. Zamanlayıcımız, bir sonraki dökmeye başlamanızdan veya bloom bitmeden 3 saniye önce sinyal veren <strong>yakınlık sesli uyarıları</strong> içerir. Akıcı bir ekstraksiyon ile kesintilerle dolu bir ekstraksiyon arasındaki fark budur.',
    },
    {
      type: 'tip',
      title: 'Yarışma Baristası İpucu',
      html: '<p>Su akışını mümkün olduğunca düşük ve kahve yatağına yakın tutun. Büyük bir yükseklikten dökmek, kahveyi aşırı ekstrakte edebilen ve suyu çok hızlı soğutabilen oksijen ve aşırı ajitasyon getirir. Saniyede yaklaşık 5 ila 7 gram su gibi sabit bir dairesel ritmi korumak için zamanlayıcıyı kullanın.</p>',
    },
    {
      type: 'title',
      text: 'Termodinamik ve Zaman: Sıcaklık Değişkeni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zaman, sistemin sıcaklığını etkiler. 6 dakika süren bir ekstraksiyon çok fazla termal enerji kaybedecek ve dengesiz bir fincanla sonuçlanacaktır. Optimal süre aralıkları, suyun ekstraksiyon boyunca 90°C ile 96°C arasında kalmasını sağlar.',
    },
    {
      type: 'title',
      text: 'Flash Brew Tekniği ile Buzlu Kahve Zamanlaması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Buz üzerine kahve demlerken zamanlama daha agresif olmalıdır. Daha az sıcak su (toplamın %60\'ı) kullanarak temas süresi kısalır. Bunu telafi etmek için ekstraksiyon süresini 2:30 ile 3:00 dakika arasında tutmak üzere biraz daha ince bir öğütme kullanın.',
    },
    {
      type: 'title',
      text: 'Ekstraksiyon Sonrası Özet: Sürekli Öğrenme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her demlemenin sonunda, aracımız toplam temas süresini gösterir. Bu değeri lezzet izlenimlerinizle birlikte not edin. Tadı acı mı? Bir dahaki sefere 15 saniye daha kısa bir süreyi hedefleyin. Tadı metalik mi yoksa ekşi mi? 20 saniye daha fazlasını hedefleyin. Zamanlayıcı kahveyi sizin için yapmaz, ancak sanatçı olmanız için verileri sağlar.',
    },
  ],
  ui: {
    readyText: 'Başlamaya hazır',
    startBtn: 'EKSTRAKSİYONU BAŞLAT',
    pauseBtn: 'DURAKLAT',
    resumeBtn: 'DEVAM ET',
    resetBtn: 'SIFIRLA',
    newBrewBtn: 'YENİ DEMLEME',
    targetLabel: 'Hedef Su:',
    instructionStart: 'Büyük düğmeye basın',
    hintStart: 'V60 veya Chemex\'inizi hazırlayın',
    phase1Label: 'Aşama 1: Bloom',
    phase2Label: 'Aşama 2: Dökme',
    phase3Label: 'Aşama 3: Süzülme',
    instructionBloom: '{bloomWater}g su dökün',
    hintBloom: 'Doyurmak için nazikçe sallayın',
    instructionPour: 'Toplam {waterTotal}g değere ulaşın',
    hintPour: 'Sabit daireler çizerek dökün',
    instructionDrain: 'Final süzülmesini bekleyin',
    hintDrain: 'Keyfini çıkarmaya neredeyse hazır',
    summaryTitle: 'Ekstraksiyon tamamlandı!',
    summaryMessage: 'Kahveniz servise hazır.',
    statTimeLabel: 'Toplam Süre',
    statWaterLabel: 'Dökülen Su',
    setupTitle: 'Tarif ayarları',
    labelWater: 'Toplam Su (g)',
    labelBloomWater: 'Bloom Suyu (g)',
    labelBloomTime: 'Bloom Süresi (sn)',
    labelTotalTime: 'Toplam Süre (sn)',
  },
};
