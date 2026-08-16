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
 text: '커피와 물의 비율을 맞추는 추출 가이드',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '스페셜티 커피를 안정적으로 추출하려면 커피와 물의 비율이 중요합니다. 이 계산기는 SCA 기준을 참고해 필요한 커피 양과 물의 양을 계산하고, 매번 같은 레시피를 재현하도록 도와줍니다.',
 },
 {
 type: 'summary',
 title: '커피 비율로 배울 수 있는 것',
 items: [
 '커피와 물의 무게 비율이 농도와 풍미에 미치는 영향',
 '물에 녹은 성분과 추출률이 맛을 바꾸는 원리',
 '커피 가루가 물을 흡수하는 양을 고려하는 방법',
 'V60, 프렌치프레스, 에스프레소, 급랭식의 비율 기준',
 ],
 },
 {
 type: 'title',
 text: '브루 비율이 중요한 이유',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '커피에는 여러 수용성 성분이 있지만 추출되는 순서와 양에 따라 맛이 달라집니다. 커피와 물의 비율을 조절하면 한 잔의 농도와 풍미 균형을 관리할 수 있습니다.',
 },
 {
 type: 'list',
 items: [
 '산미와 향 성분은 먼저 녹아 과일처럼 밝은 인상을 만듭니다.',
 '당과 탄수화물이 적절히 추출되면 단맛과 바디감, 균형이 생깁니다.',
 '과다 추출은 쓴맛과 떫은맛을 키우므로 비율과 시간을 함께 조절해야 합니다.',
 ],
 },
 {
 type: 'title',
 text: '추출 방식별 권장 비율',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '접촉 시간, 압력, 필터의 굵기에 따라 적합한 비율이 달라집니다. 아래 표를 시작점으로 삼고 원두와 장비에 맞게 조절하세요.',
 },
 {
 type: 'table',
 headers: ['추출 방식', '비율', '컵의 특징', '목표 시간'],
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
 text: '커피 가루의 흡수량을 고려한 물 계산',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '핸드드립에서 자주 놓치는 점은 커피 가루가 물을 머금는다는 사실입니다. 부은 물이 모두 컵에 들어가지는 않습니다.',
 },
 {
 type: 'paragraph',
 html: '커피 가루는<strong>1g당 약 2ml의 물</strong>을 머금습니다. 300ml를 완성하려면 흡수되는 양을 고려해 물을 더 부어야 하며, 계산기는 이 보정량을 반영합니다.',
 },
 {
 type: 'stats',
 items: [
 { label: '커피 양', value: '20g', icon: 'mdi:coffee' },
 { label: '부은 물', value: '300ml', icon: 'mdi:water' },
 { label: '흡수량', value: '40ml', icon: 'mdi:minus-circle' },
 { label: '실제 추출량', value: '260ml', icon: 'mdi:cup' },
 ],
 columns: 4,
 },
 {
 type: 'title',
 text: '블룸으로 가스를 빼고 균일하게 추출하기',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '블룸은 보기 좋은 과정만이 아닙니다. 로스팅 중 생긴 이산화탄소를 먼저 빼내면 물이 커피 전체에 고르게 스며들어 균일한 추출이 가능합니다.',
 },
 {
 type: 'tip',
 title: '고르게 적시는 방법',
 html: '<p>블룸에는 커피 무게의 약 두 배인 물을 붓고 서버를 가볍게 흔들어 전체를 적십니다. 30-45초 기다린 뒤 본 추출을 시작하면 물이 고르게 흐릅니다.</p>',
 },
 {
 type: 'title',
 text: '맛을 희석하지 않는 급랭식 아이스커피',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '급랭식은 뜨거운 물로 향을 충분히 추출한 뒤 얼음으로 빠르게 식히는 방식입니다. 오래 방치하지 않아 향의 선명함과 산뜻한 질감을 지킬 수 있습니다.',
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
 text: '분쇄도와 비율이 접촉 면적을 결정하는 방식',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '비율만큼 분쇄도도 중요합니다. 고운 분쇄는 물과 닿는 면적이 커서 성분이 빠르게 추출되고, 굵은 분쇄는 물의 흐름이 빨라 추출이 부드러워집니다.',
 },
 {
 type: 'paragraph',
 html: '연한 원두에 묽은 비율을 사용할 때는 조금 곱게 갈아 단맛을 보완합니다. 오래 담그는 방식에서 진한 비율을 쓸 때는 굵게 갈아 과다 추출을 막으세요.',
 },
 {
 type: 'title',
 text: '기록과 재현성으로 주방을 추출 실험실로 만들기',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '좋은 커피는 커피 양, 물, 온도, 시간을 일정하게 기록하는 데서 시작합니다. 레시피를 저장하고 비율별 맛을 비교하면 원두에 맞는 설정을 조금씩 찾을 수 있습니다.',
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
