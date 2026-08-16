import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'Química del Agua para Café: Por qué el H₂O es el ingrediente olvidado',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café es agua en un 98-99%. Sin embargo, la composición mineral de ese agua es el factor diferencial más ignorado en la cadena de calidad. Un café de especialidad de Etiopía extraído con agua del grifo de Madrid puede saber completamente distinto al mismo café preparado con agua mineralizada siguiendo el estándar SCA. Nuestra <strong>calculadora de agua para café</strong> te permite formular el agua perfecta desde cero, usando sales minerales comunes y partiendo de agua destilada.',
 },
 {
 type: 'summary',
 title: '¿Por qué la mineralización del agua importa tanto?',
 items: [
 '<strong>GH (Dureza General):</strong> La suma de iones Magnesio y Calcio determina la capacidad del agua para disolver compuestos de sabor del café.',
 '<strong>KH (Alcalinidad):</strong> La cantidad de bicarbonato controla el pH durante la extracción. Un KH bajo produce café agrio; un KH alto lo aplana.',
 '<strong>Repetibilidad:</strong> El agua municipal cambia por temporada y ciudad. El agua mineralizada es constante y reproducible.',
 '<strong>Protección del equipo:</strong> Los niveles correctos evitan tanto la corrosión (agua muy pura) como las incrustaciones de cal (agua muy dura).',
 ],
 },
 {
 type: 'title',
 text: 'El Estándar SCA: Los Límites Técnicos del Agua Perfecta para Café',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La Specialty Coffee Association publicó en 2015 su estándar de calidad del agua. Tras años de investigación sensorial y química, estableció rangos ideales para cada parámetro. No son números arbitrarios: son el resultado de catas a ciegas con profesionales donde se maximizó la percepción de acidez equilibrada, dulzor y cuerpo.',
 },
 {
 type: 'table',
 headers: ['Parámetro', 'Mínimo', 'Ideal SCA', 'Máximo'],
 rows: [
 ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
 ['Alcalinidad (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
 ['pH', '6.5', '7.0', '7.5'],
 ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
 ],
 },
 {
 type: 'title',
 text: 'Magnesio vs Calcio: La Batalla Mineral que Define tu Taza',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'No todos los minerales actúan igual sobre el café. El investigador Christopher Hendon demostró que el <strong>magnesio</strong> forma ligandos con las moléculas de sabor más complejas y volátiles, extrayendo notas frutales y florales con mayor eficiencia. El <strong>calcio</strong>, en cambio, extrae compuestos más pesados, aportando cuerpo y textura sedosa pero con menos brillo aromático.',
 },
 {
 type: 'list',
 items: [
 '<strong>Magnesio puro (ratio 1:0):</strong> Máxima complejidad aromática y fruta. Ideal para cafés naturales o de perfil frutal. Mayor riesgo de sobresalir la acidez.',
 '<strong>Calcio puro (ratio 0:1):</strong> Cuerpo denso y sedoso. Ideal para espresso clásico y tuestes oscuros. Mayor riesgo de incrustaciones en calderas.',
 '<strong>Mix equilibrado (SCA 1:0, Hendon 1:1):</strong> La mayoría de perfiles de calidad usan magnesio como ión principal pero añaden algo de calcio para equilibrar la textura.',
 ],
 },
 {
 type: 'title',
 text: 'El Semáforo de Seguridad: Protege tu Máquina de Espresso',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Nuestra calculadora incluye un <strong>análisis de riesgo en tiempo real</strong> basado en los valores de GH y KH que introduces. El índice de corrosión evalúa si el agua es demasiado pura y agresiva para los metales. El índice de cal mide si el KH y GH combinados generarán depósitos en calderas y tuberías.',
 },
 {
 type: 'tip',
 title: 'Regla práctica del barista profesional',
 html: '<p>Para máquinas de espresso con caldera de latón o cobre, nunca uses perfiles con KH inferior a 40 mg/L de forma continua. El agua muy pura es corrosiva a largo plazo. Para métodos de filtro (V60, Chemex, Aeropress) no hay caldera que proteger, por lo que puedes usar perfiles más delicados como Melbourne sin problema.</p>',
 },
 {
 type: 'title',
 text: 'Cómo Preparar las Botellas de Concentrado en Casa',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'La clave para una mineralización precisa es trabajar con <strong>concentrados stock</strong> en lugar de añadir sales directamente al agua final. Un concentrado de 2,46 g de sales de Epsom en 100 ml de agua destilada te permite dosificar con jeringas de 1 ml con una precisión de ±0,01 ml. Esta metodología, popularizada por Barista Hustle, convierte la química del café en algo tan sencillo como mezclar cócteles.',
 },
 {
 type: 'stats',
 items: [
 { label: 'GH ideal SCA', value: '68 mg/L', icon: 'mdi:water' },
 { label: 'KH ideal SCA', value: '40 mg/L', icon: 'mdi:water-percent' },
 { label: 'Coste aproximado por litro', value: '<0.05€', icon: 'mdi:currency-eur' },
 ],
 columns: 3,
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
