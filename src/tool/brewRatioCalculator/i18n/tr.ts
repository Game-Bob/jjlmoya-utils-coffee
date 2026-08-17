import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

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
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
