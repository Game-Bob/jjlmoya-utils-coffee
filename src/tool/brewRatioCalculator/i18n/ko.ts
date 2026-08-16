import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-ratio-calculator';
const title = '커피 브루잉 비율(분수비) 계산기';
const description =
 '이상적인 비율(1:15, 1:16...)에 맞춰 필요한 정확한 커피 양(g)이나 물의 양(ml)을 계산합니다. 추출 결과량, 푸어링 가이드, 아이스 커피 모드 및 레시피 저장 기능을 포함합니다.';

const faqData = [
 {
 question: '1:15 커피 비율은 무엇을 의미하나요?',
 answer:
 '분쇄된 커피 1g당 15ml(또는 g)의 물을 사용한다는 뜻입니다. 예를 들어 커피 20g을 사용한다면 물 300ml를 붓습니다. 이는 V60, 케멕스, 에어로프레스와 같은 필터 추출 방식에 대해 스페셜티 커피 협회(SCA)가 권장하는 표준 비율입니다.',
 },
 {
 question: '부은 물의 양보다 컵에 담긴 커피 양이 적은 이유는 무엇인가요?',
 answer:
 '분쇄된 커피가 추출 과정에서 물을 머금기 때문입니다. 평균적으로 커피 1g당 약 2ml의 액체를 흡수합니다. 20g의 커피에 300ml의 물을 부으면 컵에는 약 260ml 정도의 커피가 남게 됩니다. 이 계산기는 실제 결과량을 보여줍니다.',
 },
 {
 question: '뜸들이기(블룸, Bloom)란 무엇인가요?',
 answer:
 '커피 무게의 2배(1g당 2ml)에 해당하는 양의 물을 가장 먼저 붓는 단계입니다. 신선한 커피에서 가스를 배출하기 위해 수행됩니다. 로스팅 중 갇힌 이산화탄소가 빠져나가야 물이 커피 성분을 균일하게 추출할 수 있습니다. 뜸들이기 과정에서 거품이 올라오지 않는다면 분쇄하거나 로스팅한 지 오래된 커피일 수 있습니다.',
 },
 {
 question: '맛이 연해지지 않게 아이스 커피를 만드는 방법은?',
 answer:
 '급랭(Flash Chilling) 기술을 사용하세요. 전체 물 양의 60%를 90~96도의 뜨거운 물로 준비하고, 나머지 40%는 얼음으로 서버에 미리 담아둡니다. 그 얼음 위로 뜨거운 커피를 직접 추출합니다. 급격한 냉각은 아로마를 가두는 역할을 합니다. 이 계산기는 아이스 커피 모드를 활성화하면 자동으로 양을 재계산합니다.',
 },
 {
 question: '에어로프레스에 가장 적합한 비율은 무엇인가요?',
 answer:
 '용도에 따라 1:12에서 1:15 사이가 적당합니다. 블랙 커피로 마신다면 1:15가 균형 잡힌 맛을 냅니다. 라떼 처럼 우유를 섞는 음료의 베이스로 쓰거나 진하게 마시고 싶다면 1:12나 1:13으로 낮추세요. 에어로프레스는 다양한 비율을 아주 잘 소화하기 때문에 매우 다재다능한 도구입니다.',
 },
 {
 question: '자주 사용하는 레시피를 저장할 수 있나요?',
 answer:
 '네. 마음에 드는 커피의 완벽한 비율과 양을 찾았다면 \'레시피 저장\' 버튼을 누르고 이름(예: 아침의 V60)을 지정하세요. 브라우저에 저장되어 언제든 클릭 한 번으로 다시 불러올 수 있습니다.',
 },
];

const howToData = [
 {
 name: '계산 모드 선택',
 text: '현재 가지고 있는 커피 양(g)을 기준으로 할지, 아니면 마시고 싶은 컵의 용량(물의 양, ml)을 기준으로 할지 선택합니다. 계산기는 선택한 모드에 맞춰 모든 결과를 조정합니다.',
 },
 {
 name: '수치 입력',
 text: '사용할 커피 양(g) 또는 물의 양(ml)을 입력합니다. 선택한 비율에 따라 나머지 수치가 자동으로 계산됩니다.',
 },
 {
 name: '강도 선택',
 text: '진하게(1:12-14), 균형 잡힌 맛(1:15-16), 연하게(1:17-18) 중에서 선택하거나 직접 비율을 입력합니다. 각 옵션은 서로 다른 향미 프로파일을 제공합니다.',
 },
 {
 name: '아이스 커피 모드 활성화(선택 사항)',
 text: '아이스 커피를 만드는 경우 토글을 켭니다. 급랭 방식에 따라 물(60%)과 얼음(40%)의 비율을 자동으로 나누어 계산해 줍니다.',
 },
 {
 name: '푸어링 가이드 확인',
 text: '단계별 가이드(뜸들이기 및 최종 추출)를 사용하여 브루잉 과정을 체계화하세요. 각 단계마다 정확한 물의 양과 타이밍을 알려줍니다.',
 },
 {
 name: '레시피 저장',
 text: '나만의 완벽한 비율을 찾았다면 이름을 붙여 저장하세요. 저장된 레시피는 다음 접속 시에도 브라우저에서 불러올 수 있습니다.',
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
 offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
 inLanguage: 'ko',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: '브루잉 비율에 대한 자주 묻는 질문',
 faq: faqData,
 bibliographyTitle: '기술 참고 문헌 및 SCA 표준',
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
 modeCoffee: '커피 양 기준',
 modeHintCoffee: '필요한 물의 양을 알려주세요',
 modeWater: '물 양 기준',
 modeHintWater: '필요한 커피 양을 알려주세요',
 inputLabelCoffee: '보유한 커피 양 (g)',
 inputLabelWater: '원하는 용량 / 컵 용량 (ml)',
 intensityLabel: '커피 강도',
 intensityStrong: '진하게',
 intensityBalanced: '균형 잡힌 맛',
 intensityLight: '연하게',
 intensityCustom: '사용자 지정',
 customCoffeeLabel: '커피 양',
 customWaterLabel: '물 양',
 icedModeLabel: '아이스 커피 모드',
 recipeLabel: '정확한 레시피',
 resultTitle: '계산 결과',
 resultCoffeeLabel: '커피 양',
 resultCoffeeSub: '중세분쇄',
 resultHotWaterLabel: '뜨거운 물',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: '뜨거운 물 (60%)',
 resultIceLabel: '얼음',
 resultIceSub: '서버에 담기',
 resultCupLabel: '추출 결과량',
 resultCupSub: '커피 가루가 물을 약 2ml/g 흡수',
 pouringGuideLabel: '추출 과정 가이드',
 favoritesLabel: '나만의 레시피',
 saveBtn: '+ 레시피 저장',
 favEmptyText: '저장된 레시피가 없습니다. 나만의 완벽한 브루잉을 설정하고 저장해 보세요.',
 modalTitle: '레시피 이름 지정',
 modalPlaceholder: '예: "아침의 V60"',
 modalCancel: '취소',
 modalConfirm: '저장',
 phaseBloomTemplate: '뜸들이기: {bloomMl} ml의 물을 나선형으로 부으세요. 가스가 빠져나갈 수 있도록 {bloomSeconds}초간 기다립니다.',
 phasePourTemplate: '추출 완료: 남은 물을 {pourCount}회에 걸쳐 천천히 부어 총 {hotWaterMl} ml를 채웁니다.',
 phaseIcedTemplate: '아이스: 뜨거운 커피를 서버에 담긴 {iceMl} g의 얼음 위로 바로 추출합니다.',
 cupWarningTemplate: '컵에는 {inCupMl} ml만 남게 됩니다. 커피가 성분을 머금기 때문입니다.',
 favModeCoffee: 'g 커피',
 favModeWater: 'ml 물',
 favModeIced: ' - 아이스',
 },
};
