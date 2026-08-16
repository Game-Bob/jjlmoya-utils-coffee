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
 text: 'Calculadora de Ratio de Café y Agua: La Guía Maestra para la Extracción Perfecta (2026)',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Preparar una taza de café de especialidad no es un acto culinario subjetivo; es un experimento de <strong>química de fluidos</strong> y <strong>transferencia de masa</strong>. En el centro de este proceso reside el concepto de <strong>Brew Ratio</strong> (proporción de infusión), una medida crítica que dicta la relación cuantitativa entre el soluto (café molido) y el disolvente (agua). Nuestra calculadora ha sido diseñada integrando los estándares de la <em>Specialty Coffee Association (SCA)</em> y principios de termodinámica aplicada para permitir que baristas y entusiastas alcancen la reproducibilidad perfecta en sus extracciones.',
 },
 {
 type: 'summary',
 title: 'Lo que aprenderás sobre el Ratio de Café',
 items: [
 '<strong>Brew Ratio:</strong> Cómo la relación en peso entre café y agua (ej. 1:15) determina la fuerza potencial y el perfil sensorial de tu taza.',
 '<strong>TDS y Extracción:</strong> La ciencia detrás de los sólidos disueltos y qué porcentaje del grano realmente debe terminar en tu bebida.',
 '<strong>Ajuste por Retención:</strong> Por qué el café absorbe 2g de agua por cada gramo de polvo y cómo calcular el agua extra necesaria.',
 '<strong>Métodos Específicos:</strong> Las proporciones ideales para V60, Prensa Francesa, Espresso y recetas de café helado (Flash Brew).',
 ],
 },
 {
 type: 'title',
 text: '¿Qué es el Brew Ratio y por qué es la variable más importante?',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café contiene aproximadamente un 30% de material soluble, pero no todo ese material es deseable para el paladar humano. El agua, actuando como disolvente universal, extrae los compuestos en un orden específico basado en su peso molecular y afinidad química. El ratio de café controla precisamente cuánta capacidad de disolución entregamos a cada gramo de café.',
 },
 {
 type: 'list',
 items: [
 '<strong>Fase Ácida (Lípidos y Ácidos Orgánicos):</strong> Son los primeros en disolverse debido a su alta solubilidad. Aportan brillo, acidez málica o cítrica y notas frutales. Un ratio demasiado bajo (sub-extracción) detiene el proceso aquí, resultando en una taza agria y salada.',
 '<strong>Fase Dulce (Azúcares y Carbohidratos):</strong> Se extraen a continuación. Generan balance, dulzor y cuerpo. Es la "ventana dorada" donde el café alcanza su máxima complejidad aromática y equilibrio estructural.',
 '<strong>Fase Amarga (Fibras y Compuestos Fenólicos):</strong> Son los más lentos en disolverse. Con ratios excesivos (sobre-extracción), el agua degrada las celdas del café, extrayendo amargos secantes, notas a ceniza y madera.',
 ],
 },
 {
 type: 'title',
 text: 'Ratios recomendados: Proporciones por métodos de extracción',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cada método de extracción requiere un ratio específico debido a variables como el tiempo de contacto, la presión de la bomba o el micraje del filtro utilizado. La siguiente tabla técnica desglosa los estándares de la industria para 2026:',
 },
 {
 type: 'table',
 headers: ['Método de Preparación', 'Ratio (Gramos/Agua)', 'Perfil en Taza', 'Tiempo Objetivo'],
 rows: [
 ['Espresso', '1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 seg'],
 ['V60 / Pour-Over', '1:15 a 1:16', 'Limpio, brillante, notas claras', '2:30-3:30 min'],
 ['Aeropress', '1:12 a 1:15', 'Versátil, cuerpo medio-alto', '1:30-2:00 min'],
 ['French Press', '1:12 a 1:14', 'Texturizado, pesado, aceitoso', '4:00-5:00 min'],
 ['Cold Brew', '1:8 a 1:12', 'Dulce, baja acidez, gran cuerpo', '12-24 horas'],
 ],
 },
 {
 type: 'title',
 text: 'Cómo calcular el agua necesaria: El Factor de Retención del grano',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Uno de los errores más comunes en la preparación manual es ignorar que el café molido es una estructura hidrofílica porosa que retiene una cantidad constante de agua. No todo el agua que viertes termina en la taza.',
 },
 {
 type: 'paragraph',
 html: 'Científicamente, el café molido retiene aproximadamente <strong>2.0 gramos de agua por cada 1.0 gramo de café</strong>. Nuestra calculadora introduce el <strong>Ajuste Dinámico de Retención</strong>: si necesitas llenar un recipiente específico de 300ml, el sistema deduce que debes verter 340ml de agua para compensar la absorción del grano, manteniendo el ratio de extracción intacto.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Dosis Café', value: '20g', icon: 'mdi:coffee' },
 { label: 'Agua Vertida', value: '300ml', icon: 'mdi:water' },
 { label: 'Retención', value: '40ml', icon: 'mdi:minus-circle' },
 { label: 'En Taza Real', value: '260ml', icon: 'mdi:cup' },
 ],
 columns: 4,
 },
 {
 type: 'title',
 text: 'La importancia del Bloom: Desgasificación para una extracción uniforme',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La fase de "Bloom" (florecimiento) no es solo estética; es una necesidad física. Durante el tueste, el café genera CO2 que queda atrapado en su matriz celular. Si vertemos todo el agua de forma continua, el gas escapa violentamente, creando micro-canales (channeling) y evitando que el disolvente penetre en el centro de las partículas de café.',
 },
 {
 type: 'tip',
 title: 'Técnica de Saturación Homogénea',
 html: '<p>Para un bloom perfecto, vierte exactamente el doble del peso del café en agua (ratio 1:2 de bloom). Realiza una agitación suave o swirl para garantizar que todo el café esté húmedo. Espera 30-45 segundos. La liberación de gas permitirá que, en los vertidos posteriores, el agua fluya de forma laminar y extraiga los sólidos de manera uniforme por toda la cama de café.</p>',
 },
 {
 type: 'title',
 text: 'Tutorial Iced Coffee: Cómo preparar café con hielo sin diluir el sabor',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café helado de especialidad (Flash Brew) requiere un recalibrado termodinámico. El objetivo es extraer los aceites volátiles a 94°C para capturar la complejidad aromática, pero enfriarlos de golpe para evitar la oxidación y la pérdida de brillo.',
 },
 {
 type: 'list',
 items: [
 '<strong>60% Agua Caliente:</strong> Es la cantidad mínima necesaria para alcanzar una extracción del 18-20% sin sub-extraer en exceso ni enfriar el lecho demasiado pronto.',
 '<strong>40% Hielo Térmico:</strong> Se coloca en la jarra receptora. La energía térmica del café se transfiere al hielo (calor latente de fusión), enfriando la bebida a menos de 5°C instantáneamente.',
 '<strong>Fuerza Final:</strong> Al sumar ambos, el ratio final (ej. 1:15) se mantiene exacto, resultando en una bebida vibrante, fría y con la concentración de sabores correcta.',
 ],
 },
 {
 type: 'title',
 text: 'Grado de molienda y Ratio de café: La clave de la superficie de contacto',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El ratio es solo la mitad de la ecuación. La molienda determina el <strong>Área de Superficie Total Expuesta</strong> al disolvente. Partículas más pequeñas (molienda fina) tienen más superficie proporcional, lo que acelera dramáticamente la extracción de compuestos químicos.',
 },
 {
 type: 'paragraph',
 html: 'Si decides usar un ratio largo (1:17 o 1:18) para un café de tueste muy ligero, debes compensar con una molienda ligeramente más fina para asegurar que el agua tenga tiempo de extraer los azúcares antes de atravesar el filtro. Por el contrario, ratios cortos (1:12) en métodos de inmersión prolongada requieren moliendas gruesas para evitar la sobre-extracción.',
 },
 {
 type: 'title',
 text: 'Reproducibilidad y Ciencia: Convierte tu cocina en un laboratorio barista',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La excelencia en el café de especialidad nace de la consistencia métrica. Nuestra función de <strong>Recetas Personalizadas</strong> permite crear un repositorio técnico de tus calibraciones exitosas. No es solo un archivo de favoritos; es una herramienta de análisis para comparar cómo reacciona un mismo kilo de café a un ratio 1:15 frente a un 1:16, permitiéndote ajustar la receta milimétricamente.',
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
