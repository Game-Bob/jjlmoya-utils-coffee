import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'cold-brew-kahve-orani-hesaplayici';
const title = 'Cold brew kahve oranı hesaplayıcı';
const description = 'Cold brew için kahve, demleme suyu, konsantre seyreltme, demleme süresi ve servis verimini metrik veya emperyal birimlerle hesaplayın.';

const faqData = [
  { question: 'Cold brew için hangi kahve su oranını kullanmalıyım?', answer: 'Doğrudan içilecek cold brew için 1:8, sonradan seyreltilecek konsantre için 1:5 ile başlayın. En iyi oran kahveye, öğütüme, süreye ve servis şekline bağlıdır.' },
  { question: '1 litre cold brew için ne kadar kahve gerekir?', answer: '1:8 oranında 125 gram kahveyi 1.000 mililitre demleme suyuyla kullanın. Hesaplayıcı, telvede kalan suyu da tahmini olarak gösterir.' },
  { question: 'Cold brew hesabını ons ve sıvı ons olarak yapabilir miyim?', answer: 'Evet. Kahveyi ons, suyu sıvı ons olarak görmek için Imperial seçin. Oranın tutarlı kalması için temel hesap gram ve mililitre üzerinden yapılır.' },
  { question: 'İçime hazır cold brew ile konsantre arasındaki fark nedir?', answer: 'İçime hazır cold brew servis gücüne yakın hazırlanır. Konsantre daha fazla kahve kullanır ve süzüldükten sonra su veya sütle karıştırılır.' },
  { question: 'Cold brew ne kadar süre demlenmeli?', answer: 'Başlangıç için buzdolabında veya serin bir odada tam daldırma yöntemiyle 12 ile 18 saat deneyin. Daha uzun süre acılığı veya burukluğu artırabilir.' },
  { question: 'Hesaplayıcı telvede kalan suyu hesaba katıyor mu?', answer: 'Evet. Verimi tahmin etmek için her gram kahve başına yaklaşık 2 mililitre tutulan su kullanır. Filtre, öğütüm ve süzülme süresi gerçek sonucu değiştirir.' },
  { question: 'Bu hesaplayıcı gıda güvenliği rehberi mi?', answer: 'Hayır. Yalnızca tarif miktarlarını hesaplar. Temiz ekipman kullanın, içeceği gerektiğinde soğutun ve saklama ile servis için güncel önerileri izleyin.' },
];

const howToData = [
  { name: 'Demleme stilini seçin', text: 'Doğrudan servis için içime hazırı, daha sonra su veya süt ekleyecekseniz konsantreyi seçin.' },
  { name: 'Demleme suyunu belirleyin', text: 'Demleme kabına koyacağınız su miktarını girin. Hesaplayıcı kahve miktarını hacme ve seçilen orana göre ölçekler.' },
  { name: 'Oranı ayarlayın', text: 'Bir profil seçin veya oran kaydırıcısını hareket ettirin. Düşük sayılar daha güçlü, yüksek sayılar daha hafif kahve verir.' },
  { name: 'Süreyi ve seyreltmeyi ayarlayın', text: 'Süreyi planlama rehberi olarak kullanın. Konsantre modunda hazırlanan kahvenin her bir kısmı için eklenecek suyu belirleyin.' },
  { name: 'Parti kartını izleyin', text: 'Kahveyi tartmak, su eklemek, demlemek, süzmek ve tahmini servis verimini seyreltmek için akışı ve adımları kullanın.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Cold brew oranı ve parti planlama', level: 2 },
  { type: 'paragraph', html: 'Cold brew, kahve miktarı, demleme suyu, seyreltme ve sürenin ayrı ayarlanmasıyla daha kolay tekrarlanır. Bu hesaplayıcı seçilen stili tartılmış bir tarife dönüştürür.' },
  { type: 'title', text: 'İçime hazır veya konsantre seçin', level: 2 },
  { type: 'paragraph', html: 'İçime hazır tarif servis gücüne yakın demlenir. Konsantre tarif daha yoğun bir oran kullanır ve süzmeden sonra su eklenir.' },
  { type: 'table', headers: ['Stil', 'Başlangıç oranı', 'Seyreltme', 'Kullanım'], rows: [['İçime hazır', '1:8', 'Yok', 'Soğuk veya buzla servis'], ['Yumuşak parti', '1:10', 'Yok', 'Daha hafif günlük kahve'], ['Konsantre', '1:5', '1:1', 'Su veya sütle karıştırma']] },
  { type: 'title', text: 'Cold brew hesabı nasıl çalışır?', level: 2 },
  { type: 'list', items: ['Kahve dozu, demleme suyunun seçilen orana bölünmesiyle bulunur.', 'Demlenmiş verim, kahvenin gramı başına yaklaşık 2 mililitre tutulan su çıkarılarak tahmin edilir.', 'Konsantre seyreltmesi demlenmiş verimden hesaplanır ve servis hacmini anlaşılır tutar.'] },
  { type: 'title', text: 'Metrik ve emperyal cold brew ölçüleri', level: 2 },
  { type: 'paragraph', html: 'Metrik tarifler için gram ve mililitreyi, emperyal tarifler için ons ve sıvı onsu seçin. Kütle ve hacim arasındaki ilişki tutarlı kalır.' },
  { type: 'table', headers: ['Ölçüm', 'Metrik', 'Emperyal'], rows: [['Kahve dozu', 'g', 'oz'], ['Su ve verim', 'ml', 'fl oz'], ['Demleme oranı', '1 ölçü kahve', '1 ölçü kahve']] },
  { type: 'tip', title: 'Sonucu başlangıç tarifi olarak kullanın', html: '<p>Kahvenin kökeni, öğütüm, filtre, sıcaklık ve süzülme süresi ekstraksiyonu ve verimi değiştirir. İlk partiyi tadın ve her seferinde tek bir değişkeni değiştirin.</p>' },
  { type: 'title', text: 'Cold brew demleme süresi ve gıda güvenliği', level: 2 },
  { type: 'paragraph', html: 'Süre kaydırıcısı tarif planlamasına yardımcı olur, ancak lezzet veya güvenlik garantisi vermez. Temiz ekipman kullanın ve soğutma, saklama ve servis için güncel önerileri izleyin.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Cold brew soruları', faq: faqData, bibliographyTitle: 'Kahve demleme kaynakları', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Partinizi oluşturun', modeReady: 'İçime hazır', modeReadyHint: 'Demle ve servis et', modeConcentrate: 'Konsantre', modeConcentrateHint: 'Demle ve seyrelt', unitSystemLabel: 'Ölçüm sistemi', unitMetric: 'Metrik', unitImperial: 'Emperyal', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Bir profille başlayın', presetClassic: 'Klasik 1:8', presetSmooth: 'Yumuşak 1:10', presetConcentrate: 'Konsantre 1:5', presetCustom: 'Özel', brewWaterLabel: 'Demleme suyu', brewWaterHint: 'Demleme için su', ratioLabel: 'Kahve su oranı', ratioHint: 'Kahve gramı başına su', dilutionLabel: 'Seyreltme suyu', dilutionHint: 'Hazırlanan kahvenin her kısmı için su', steepLabel: 'Demleme süresi', steepHint: 'Planlama aralığı', hoursUnit: 'saat', resultTitle: 'Partiniz', resultBadgeReady: 'İçime hazır', resultBadgeConcentrate: 'Konsantre', coffeeLabel: 'Öğütülmüş kahve', brewWaterResultLabel: 'Demleme suyu', retainedLabel: 'Telvede kalan', dilutionWaterLabel: 'Seyreltme suyu', servedYieldLabel: 'Yaklaşık servis verimi', ratioResultLabel: 'Oran', steepResultLabel: 'Demleme', steepStatusShort: 'Kısa demleme', steepStatusBalanced: 'Dengeli demleme', steepStatusLong: 'Uzun demleme', stageCaption: 'Buzdolabına hazır yumuşak bir parti', stageCaptionConcentrate: 'Seyreltilmeyi bekleyen koyu bir konsantre', stepsTitle: 'Tarif adımları', visualTitle: 'Parti akışı', visualBrewCaption: 'Demle', visualFilterCaption: 'Süz', visualServeCaption: 'Servis et', visualCoffeeDose: 'Kahve dozu', visualWaterInput: 'Demleme suyu', visualRetained: 'Telvede kalan', visualServed: 'Demlenmiş verim', visualDilution: 'Seyreltme suyu', stepCoffee: '{coffee} {coffeeUnit} kalın öğütülmüş kahveyi tartın.', stepWater: '{water} {waterUnit} su ekleyin ve telveyi tamamen ıslatın.', stepSteep: 'Üzerini kapatın ve yaklaşık {hours} saat demleyin.', stepDilute: 'Süzdükten sonra {water} {waterUnit} seyreltme suyu ekleyin.', stepServe: 'Soğutun ve yaklaşık {yield} {waterUnit} servis edin.', noteTitle: 'Yararlı bir tahmin', noteText: 'Telve süzme sırasında su tutar. Miktar tahminidir; ilk partiyi kendi filtreniz ve süzme tekniğinizle kalibre edin.', copyRecipe: 'Tarifi kopyala', copiedText: 'Tarif kopyalandı', resetText: 'Sıfırla', copyTemplate: 'Cold brew tarifi\nKahve: {coffee} {coffeeUnit}\nDemleme suyu: {brewWater} {waterUnit}\nOran: 1:{ratio}\nDemleme: {hours} saat\nSeyreltme suyu: {dilutionWater} {waterUnit}\nYaklaşık servis verimi: {servedYield} {waterUnit}', faqTitle: 'SSS', bibliographyTitle: 'Kaynaklar',
  },
};
