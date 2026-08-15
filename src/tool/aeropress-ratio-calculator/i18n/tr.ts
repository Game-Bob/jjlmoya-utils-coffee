import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-oran-hesaplayici';
const title = 'AeroPress Kahve Oranı ve Tarif Hesaplayıcı';
const description = 'AeroPress kahvesi için su dağılımı, hazne kapasite sınırları, bypass seyreltme ve demleme aşamalarını hesaplayın.';

const howTo = [
  {
    name: 'Demleme yöntemini ve modelini seçin',
    text: 'Standart veya Ters (Inverted) yöntemi seçin ve AeroPress hazne modelinizi (Original, XL veya Go) belirleyin.',
  },
  {
    name: 'Kahve dozunu ve oranını ayarlayın',
    text: 'Öğütülmüş kahve miktarını gram cinsinden ve hedef demleme oranını girin veya şampiyonluk tariflerinden birini seçin.',
  },
  {
    name: 'Hazne suyunu ve bypass miktarını kontrol edin',
    text: 'Tarifinizin hazne hacmini aşıp aşmadığını görün. Araç fincana eklenecek bypass suyunu otomatik olarak hesaplar.',
  },
  {
    name: 'Aşamalı zamanlayıcıyı başlatın',
    text: 'Ön demleme (bloom), demlenme süresi ve yumuşak piston basımı için entegre kronometreyi kullanın.',
  },
];

const faq = [
  {
    question: 'AeroPress standart ve ters yöntem arasındaki fark nedir?',
    answer: 'Standart yöntemde ekipman doğrudan fincanın üzerindedir ve piston takılana kadar hafif bir damlama olabilir. Ters yöntemde ise AeroPress piston üzerinde baş aşağı durur ve çevrilene kadar tam ve sızdırmaz bir daldırma demleme sağlar.',
  },
  {
    question: 'AeroPress demlemede bypass yöntemi nedir?',
    answer: 'Bypass, haznede yoğun bir kahve konsantresi demleyip ardından bunu fincanda temiz sıcak su ile seyreltme tekniğidir. Hazneyi taşırmadan büyük porsiyonlar hazırlamayı sağlar.',
  },
  {
    question: 'AeroPress için ideal kahve su oranı nedir?',
    answer: 'Klasik filtre kahve için 1:14 ile 1:17 arasındaki oranlar (örneğin 200g suya 11g-15g kahve) harika bir denge sunar. Espresso tarzı konsantreler için 1:4 ile 1:8 arası uygundur.',
  },
  {
    question: 'Öğütme boyutu AeroPress ekstraksiyonunu nasıl etkiler?',
    answer: 'Orta-ince öğütüm 1-2 dakikalık kısa demlemeler için idealdir. Daha ince öğütüm gövdeyi artırırken, daha kalın öğütüm uzun demlemelerde acılaşmayı önler.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Nitelikli Kahve Aracı',
    profileLabel: 'Ekstraksiyon Profili',
    unitSystemLabel: 'Birim Sistemi',
    unitMetricLabel: 'Metrik (g)',
    unitImperialLabel: 'İmparatorluk (oz)',
    presetsTitle: 'Barista ve Şampiyona Tarifleri',
    presetCustom: 'Özel Formül',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Açık Kavrum',
    presetWacChamp: 'WAC Şampiyon Bypass',
    presetAlanAdler: 'Alan Adler Orijinal',
    presetIcedBypass: 'Flash Brew Buzlu AeroPress',
    methodLabel: 'Demleme Tekniği',
    methodStandard: 'Standart Düz',
    methodInverted: 'Ters Daldırma',
    modelLabel: 'AeroPress Modeli',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Kahve Dozu',
    doseUnitMetric: 'gram',
    doseUnitImperial: 'oz',
    ratioLabel: 'Demleme Oranı',
    ratioPrefix: '1:',
    waterTempLabel: 'Su Sıcaklığı',
    waterTempUnit: '°C',
    grindLabel: 'Öğütüm Profili',
    grindFine: 'İnce',
    grindMediumFine: 'Orta İnce',
    grindMedium: 'Orta',
    grindCoarse: 'Kalın',
    resultsTitle: 'Su Dağılımı ve Metrikler',
    statTotalWater: 'Toplam Su',
    statChamberWater: 'Hazne İçi Su',
    statBypassWater: 'Bypass Suyu',
    statYield: 'Fincan Hacmi',
    statEstimatedTds: 'Tahmini TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Bypass Seyreltme Gerekli',
    bypassAlertText: 'Tarifiniz haznede {chamber} ve fincana doğrudan eklenen {bypass} gerektirir.',
    timerTitle: 'Aşamalı Zamanlayıcı',
    timerStart: 'Zamanlayıcıyı Başlat',
    timerPause: 'Duraklat',
    timerReset: 'Sıfırla',
    phaseBloom: 'Ön Demleme ve Islatma',
    phasePour: 'Döküş ve Karıştırma',
    phaseSteep: 'Daldırma ve Bekleme',
    phasePress: 'Yumuşak Basış',
    phaseBypass: 'Bypass Suyu Ekleme',
    phaseComplete: 'Kahve Hazır',
    guideTitle: 'Demleme Kılavuzu',
    guideStep1Title: 'Filtreyi durulayın ve kahveyi ekleyin',
    guideStep1Desc: 'Kağıt veya metal filtreyi kapağa yerleştirip sıcak suyla durulayın. Taze öğütülmüş kahveyi hazneye dökün.',
    guideStep2Title: 'Hazne suyunu dökün',
    guideStep2Desc: 'Doğru sıcaklıktaki hesaplanan suyu dökün ve hafifçe karıştırın.',
    guideStep3Title: 'Pistonu takın ve bekleyin',
    guideStep3Desc: 'Vakum oluşturmak için pistonu yerleştirin ve belirlenen süre boyunca demlenmeye bırakın.',
    guideStep4Title: 'Basın ve seyreltin',
    guideStep4Desc: 'Pistonu 20-30 saniye boyunca sabit hızla bastırın. Tıslama sesinde durup bypass suyunu ilave edin.',
    ratioStrengthLight: 'Hafif ve Zarif',
    ratioStrengthMedium: 'Dengeli Fincan',
    ratioStrengthStrong: 'Zengin ve Gövdeli',
    ratioStrengthConcentrate: 'Espresso Konsantresi',
    chamberWaterLabel: 'Hazne Suyu',
    coffeeBedLabel: 'Kahve Yatağı',
    airGapLabel: 'Hava Boşluğu',
  },
  seo: [
    { type: 'title', text: 'AeroPress Kahve Ekstraksiyonu ve Oran Esasları', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>AeroPress</strong> tam daldırma demleme ile hava basınçlı filtrelemeyi birleştiren en çok yönlü kahve ekipmanlarından biridir. Tatlı, berrak ve aromatik bir fincan elde etmek kahve-su oranının hassas kontrolüne bağlıdır.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hazne Kapasitesi ve Bypass Demleme Fiziği',
      html: 'Standart bir AeroPress haznesi kahve yatağı düşüldüğünde yaklaşık 220ml ile 240ml su alır. Daha büyük porsiyonlar istendiğinde baristalar bypass yöntemini kullanır.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Altın Filtre Oranı' },
        { value: '230 ml', label: 'Standart Hazne Hacmi' },
        { value: '%1.2 - 1.5', label: 'Hedef TDS Aralığı' },
      ],
    },
    { type: 'title', text: 'Standart ve Ters Yöntem Karşılaştırması', level: 3 },
    {
      type: 'paragraph',
      html: 'Ekipmanın duruş yönü temas süresini ve akış dengesini doğrudan etkiler.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Standart Düz Yöntem',
          description: 'Filtre kapağı fincanın üstündedir. Pistonun takılması erken damlamayı durduran bir vakum yaratır.',
          points: [
            'Güvenli ve çok pratik kullanım',
            'Başlangıçta az miktarda süzülme',
            'James Hoffmann tarafından tutarlılık için önerilir',
          ],
        },
        {
          title: 'Ters Daldırma Yöntemi',
          description: 'AeroPress pistonun üzerinde durur ve çevrilene kadar hiç sıvı kaçırmaz.',
          highlight: true,
          points: [
            'Demleme süresi üzerinde tam kontrol',
            'Konsantreler ve yüksek dozlar için mükemmel',
            'Sıcakken çevirirken dikkat gerektirir',
          ],
        },
      ],
    },
    { type: 'title', text: 'Büyük Porsiyonlar İçin Bypass Seyreltme', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass, World AeroPress Championship şampiyonlarının sıkça başvurduğu bir tekniktir. 1:6 ile 1:8 oranında konsantre demleme geç gelen acı bileşikleri önler ve fincana eklenen sıcak su lezzeti mükemmel dengeler.',
    },
    {
      type: 'table',
      headers: ['Tarif Stili', 'Kahve Dozu', 'Hazne Suyu', 'Bypass Suyu', 'Önerilen Öğütüm'],
      rows: [
        ['Hoffmann Filtre', '11g', '200g', '0g', 'Orta İnce (600µm)'],
        ['Tim Wendelboe Açık', '14g', '200g', '0g', 'Orta (700µm)'],
        ['WAC Şampiyon Bypass', '30g', '120g', '105g', 'Kalın (900µm)'],
        ['Alan Adler Klasik', '17g', '80g', '100g İsteğe Bağlı', 'İnce (450µm)'],
        ['Flash Brew Buzlu', '18g', '150g', '100g Buz', 'Orta İnce (550µm)'],
      ],
    },
    { type: 'title', text: 'Kusursuz Kahve İçin İpuçları', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Sıcaklık ayarı:</strong> Açık kavrumlarda meyvemsi notaları öne çıkarmak için 92°C-96°C, koyu kavrumlarda 80°C-85°C kullanın.',
        '<strong>Yumuşak basış:</strong> Kanallaşmayı önlemek için pistonu 20-30 saniye boyunca sakin ve dengeli itin.',
        '<strong>Filtreyi ıslatın:</strong> Kağıt tadını yok etmek için filtreyi sıcak suyla yıkayın.',
        '<strong>Tıslamada durun:</strong> Hava çıkış sesi duyulduğunda basmayı bitirin.',
      ],
    },
    {
      type: 'summary',
      title: 'Özet Tavsiyeler',
      items: [
        'Öğütme boyutunu demleme süresine göre ayarlayın.',
        'Hedef miktar hazneyi aştığında bypass hesabından yararlanın.',
        'Sıcaklık ve zamanı sabit tutarak standart barista kalitesine ulaşın.',
      ],
    },
  ],
  faq,
  faqTitle: 'AeroPress Oranları ve Tarifleri Hakkında Sıkça Sorulan Sorular',
  bibliography,
  bibliographyTitle: 'Teknik Referanslar ve Kahve Bilimi',
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
