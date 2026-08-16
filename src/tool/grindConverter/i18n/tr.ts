import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'La Física de la Molienda: Por qué el Tamaño de Partícula lo Cambia Todo',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cuando mueles café, no solo estás reduciendo el tamaño del grano. Estás definiendo la <strong>superficie de contacto</strong> disponible para que el agua disuelva los compuestos de sabor. Una molienda demasiado fina expone tanta superficie que el agua extrae en exceso los compuestos amargos. Demasiado gruesa, y el agua pasa sin encontrar suficiente resistencia, resultando en un café débil y agrio. El conversor de molienda te da el punto exacto para cada método.',
 },
 {
 type: 'summary',
 title: '¿Qué determina el grosor de molienda correcto?',
 items: [
 '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
 '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
 '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
 '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
 ],
 },
 {
 type: 'title',
 text: 'Espresso vs V60: Los Dos Extremos del Espectro',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El <strong>espresso</strong> extrae a 9 bares de presión en apenas 25-30 segundos. Para que esto funcione, el café molido debe ofrecer exactamente la resistencia correcta: una molienda entre 300-500 micras crea ese lecho compacto. Demasiado grueso y el agua pasa en 10 segundos produciendo una taza aguada; demasiado fino y la máquina no puede generar flujo.',
 },
 {
 type: 'paragraph',
 html: 'El <strong>V60</strong>, en cambio, funciona por gravedad. El agua tiene que fluir a través de un lecho de partículas más gruesas (700-900 micras) durante 2-3 minutos completos. Si el grano está demasiado fino, el filtro de papel se satura y el café tarda demasiado, sobre-extrayendo. Si está muy grueso, el agua pasa en 60 segundos sin extraer suficiente sabor.',
 },
 {
 type: 'table',
 headers: ['Método', 'Micras', 'Referencia táctil', 'Tiempo contacto'],
 rows: [
 ['Ibrik (Turco)', '100-300 μm', 'Talco / Harina fina', '3-5 min ebullición'],
 ['Espresso', '300-500 μm', 'Sal fina', '25-30 seg'],
 ['Moka / Aeropress', '500-700 μm', 'Sal de mesa', '3-4 min'],
 ['V60 / Filtro', '700-900 μm', 'Azúcar granulada', '2:30-3:15 min'],
 ['Chemex / Clever', '900-1200 μm', 'Arena gruesa', '3:30-4:30 min'],
 ['Prensa Francesa', '1200-1500 μm', 'Sal gorda', '4 min inmersión'],
 ['Cold Brew', '1500+ μm', 'Granos de pimienta', '12-24 h en frío'],
 ],
 },
 {
 type: 'title',
 text: 'Uniformidad: El Factor Diferencial entre Molinos',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La <strong>uniformidad de la partícula</strong> es la métrica real que separa un molino de gama alta de uno básico. Cuando un Comandante C40 muele a 20 clics, produce partículas casi idénticas entre sí (95% uniformidad). Cuando un molino de cuchillas "muele" al mismo tiempo, el resultado es caótico: polvo fino y trozos grandes conviven, extrayéndose a velocidades completamente diferentes.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Comandante C40', value: '95%', icon: 'mdi:star' },
 { label: 'Timemore C2/C3', value: '85%', icon: 'mdi:star-half-full' },
 { label: 'Hario Skerton', value: '40%', icon: 'mdi:star-outline' },
 ],
 columns: 3,
 },
 {
 type: 'title',
 text: 'Diagnóstico por Sabor: La Brújula del Barista',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'Ninguna tabla sustituye al paladar. El conversor te da el punto de partida técnico, pero el ajuste final siempre lo hace el sabor. <strong>Amargo y seco</strong> = sobre-extracción = muele más grueso. <strong>Agrio y acuoso</strong> = sub-extracción = muele más fino. Ajusta de uno en uno (un clic, un nivel) hasta encontrar el equilibrio perfecto para tu grano y agua específicos.',
 },
 {
 type: 'tip',
 title: 'Regla de oro para nuevos cafés',
 html: '<p>Cuando abras un café nuevo, empieza siempre por el punto medio del rango recomendado para tu método. Desde ahí, ajusta según sabor en pasos de un clic. Anota el resultado de cada ajuste para construir un registro de referencia de tus cafés favoritos con cada molino.</p>',
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
