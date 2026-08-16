import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-grind-size-converter';
const title = '커피 분쇄도 변환기';
const description =
 '에스프레소, V60, 프렌치 프레스 및 기타 도구에 맞춰 그라인더를 조절할 수 있는 클릭 및 레벨 가이드 기반의 인터랙티브 분쇄도 차트입니다. 모든 추출 방식에 대한 기술적 마이크론 매핑을 제공합니다.';

const faqData = [
 {
 question: '왜 똑같은 분쇄도 설정이 모든 커피에 적용되지 않나요?',
 answer:
 '원두의 밀도는 로스팅 정도와 원산지에 따라 다르기 때문입니다. 약배전 원두는 일반적으로 밀도가 더 높아서 적절한 추출을 위해 더 고운 분쇄도가 필요하고, 강배전 원두는 더 다공성이어서 더 굵은 설정이 필요합니다.',
 },
 {
 question: '더 곱게 갈아야 할지 굵게 갈아야 할지 어떻게 알 수 있나요?',
 answer:
 '당신의 미각을 믿으세요. 커피 맛이 쓰고 드라이(떫음)하다면, 물이 더 빨리 흐를 수 있도록 굵게 조정하세요. 맛이 시거나 짜고 물처럼 연하다면, 접촉 면적을 넓히기 위해 더 곱게 조정하세요.',
 },
 {
 question: "'채널링(Channeling)'이란 무엇이며 분쇄도가 이에 어떤 영향을 주나요?",
 answer:
 '채널링은 물이 커피 베드에서 저항이 가장 적은 통로를 찾아 흐르는 현상입니다. 특히 에스프레소에서 압력에 비해 불균일하거나 부적절한 분쇄도는 이 문제를 유발하여 추출을 망칩니다.',
 },
 {
 question: '칼날형 그라인더(Blade grinder)로 이 차트를 사용할 수 있나요?',
 answer:
 '칼날형 그라인더는 고운 가루와 굵은 조각이 동시에 발생하는 불균일한 입자를 만듭니다. 마이크론 수치는 참고용일 뿐이며, 버(Burr) 타입 그라인더와 비교했을 때 실제 결과는 크게 다를 수 있습니다.',
 },
 {
 question: '시각화 차트에서 그라인더 균일성의 의미는 무엇인가요?',
 answer:
 '표시된 입자 분포는 각 그라인더의 실제 균일성을 시뮬레이션한 것입니다. 균일성 0.95인 코만단테 C40은 매우 일정한 입자를 만드는 반면, 0.40인 하리오 스커튼은 크기 차이가 훨씬 많이 납니다.',
 },
 { question: '맛에 따라 분쇄도를 어떻게 조절하나요?', answer: '쓴맛이나 떫은맛이 강하면 더 굵게, 시거나 연하면 더 곱게 조절하세요. 한 번에 한 설정만 바꾸는 것이 좋습니다.' },
].slice(0, 5);

const howToData = [
 {
 name: '그라인더 선택',
 text: '드롭다운 목록에서 모델을 선택하세요. 변환기가 기기에 맞게 권장되는 클릭수 또는 레벨을 보여줍니다.',
 },
 {
 name: '추출 방식 선택',
 text: '사용하려는 방식의 아이콘을 클릭하세요. 제어판이 모든 관련 기술 매개변수로 업데이트됩니다.',
 },
 {
 name: '마이크론 지표 해석',
 text: "막대 그래프의 마이크론(μm) 값을 확인하여 실제 입자 크기를 파악하세요. 촉각적 기준(고운 소금, 설탕 등)을 참고하여 시각적으로 보정할 수 있습니다.",
 },
 {
 name: '입자 시뮬레이션 관찰',
 text: "점의 분포는 그라인더의 전형적인 균일성을 보여줍니다. 균질한 패턴일수록 추출 결과를 더 잘 예측하고 재현할 수 있습니다.",
 },
 {
 name: '맛에 따른 미세 조정',
 text: '하단의 진단 가이드를 참고하세요. 커피가 쓰다면 굵은 쪽으로 몇 클릭 이동하세요. 시다면 더 곱게 조정하세요. 항상 한 번에 한 단계씩만 변경하세요.',
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
 offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
 inLanguage: 'ko',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: '커피 분쇄도에 관한 자주 묻는 질문',
 faq: faqData,
 bibliographyTitle: '분쇄 및 추출 관련 참고 자료',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: '분쇄 입자 크기가 추출을 바꾸는 원리',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '커피를 분쇄하는 것은 원두를 작게 만드는 일만이 아닙니다. 물이 맛 성분과 만나는 면적을 정하는 과정입니다. 너무 고우면 쓴맛이 많아지고 너무 굵으면 묽고 시게 느껴질 수 있어 추출 방식에 맞는 설정이 필요합니다.',
 },
 {
 type: 'summary',
 title: '적절한 분쇄도를 결정하는 요소',
 items: [
 '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
 '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
 '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
 '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
 ],
 },
 {
 type: 'title',
 text: '에스프레소와 V60의 분쇄도 차이',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '에스프레소는 높은 압력으로 짧은 시간에 추출하므로 고운 분쇄로 알맞은 저항을 만들어야 합니다. 너무 굵으면 물이 빠르게 흐르고 너무 고우면 흐름이 막힐 수 있습니다.',
 },
 {
 type: 'paragraph',
 html: 'V60는 중력으로 물을 통과시키므로 에스프레소보다 굵은 분쇄를 사용합니다. 너무 고우면 흐름이 느려지고 너무 굵으면 추출이 부족해지므로 시간과 맛을 함께 확인하세요.',
 },
 {
 type: 'table',
 headers: ['방식', '입자 크기', '촉감 기준', '접촉 시간'],
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
 text: '분쇄 균일도가 그라인더를 구분한다',
 level: 2,
 },
 {
 type: 'paragraph',
 html: '입자 크기가 고를수록 커피 가루 전체가 비슷한 속도로 추출됩니다. 좋은 그라인더는 미분과 큰 입자의 차이를 줄여 맛의 재현성을 높입니다.',
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
 text: '맛으로 분쇄도를 진단하는 방법',
 level: 3,
 },
 {
 type: 'paragraph',
 html: '표는 시작점일 뿐이고 최종 판단은 맛으로 합니다. 쓰고 마르면 굵게, 시고 묽으면 곱게 조절하세요. 한 번에 한 단계만 바꾸며 원두와 물에 맞는 균형을 찾습니다.',
 },
 {
 type: 'tip',
 title: '새 원두를 위한 기본 원칙',
 html: '<p>새 원두는 방식별 권장 범위의 중간에서 시작하세요. 맛을 보고 한 단계씩 조절하며 결과를 기록하면 좋아하는 설정을 다시 재현할 수 있습니다.</p>',
 },
 ],
 ui: {
 step1Label: '1단계: 장비 선택',
 step2Label: '2단계: 추출 방식',
 gaugeLabel: '기술적 입자 맵 (μm)',
 distributionLabel: '실제 입자 분포',
 refLabel: '촉각적 기준',
 rangeMicrasLabel: '범위 μm',
 unitMicras: '목표 마이크론 (μm)',
 unitClicks: '권장 클릭수',
 unitLevel: '권장 레벨',
 suggestGrinderText: "내 그라인더가 없나요? 추가 제안하기",
 method0Name: '이브릭 (터키식)',
 method0Ref: '탈컴 파우더 / 밀가루',
 method0Desc: '밀가루처럼 매우 고운 가루. 터키식 커피의 부유물을 위해 필수적입니다.',
 method1Name: '에스프레소',
 method1Ref: '고운 소금',
 method1Desc: '고압 추출은 저항을 만들기 위해 매우 고운 분쇄가 필요합니다.',
 method2Name: '모카포트 / 에어로프레스',
 method2Ref: '꽃소금',
 method2Desc: '중압 또는 하이브리드 침출. 범용적이고 균형 잡힌 질감을 냅니다.',
 method3Name: 'V60 / 필터',
 method3Ref: '설탕',
 method3Desc: '핸드 드립 방식. 단맛과 산미를 강조하는 표준적인 선택입니다.',
 method4Name: '케멕스 / 클레버',
 method4Ref: '굵은 모래',
 method4Desc: '두꺼운 필터나 짧은 침출 방식. 일정하고 꾸준한 흐름이 필요합니다.',
 method5Name: '프렌치 프레스',
 method5Ref: '굵은 소금',
 method5Desc: '긴 침출 시간은 금속 망을 통과하지 않도록 굵은 입자가 필요합니다.',
 method6Name: '콜드 브루',
 method6Ref: '통후추',
 method6Desc: '장시간 차가운 물 추출은 가능한 가장 굵은 분쇄가 필요합니다.',
 troubleIssue0: '맛이 쓰고 드라이(떫음)합니까?',
 troubleSolution0: '추출 과다입니다. 물이 더 빨리 흐르고 쓴맛 성분이 덜 나오도록 굵게 조정하세요.',
 troubleAction0: '더 굵게 분쇄',
 troubleIssue1: '맛이 시거나 짜고 물처럼 연합니까?',
 troubleSolution1: '추출 부족입니다. 접촉 면적을 넓혀 단맛과 바디감을 더 끌어낼 수 있게 곱게 조정하세요.',
 troubleAction1: '더 곱게 분쇄',
 },
};
