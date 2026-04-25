import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sca-coffee-water-calculator';
const title = 'SCA 커피 워터 계산기';
const description =
  '스페셜티 커피를 위한 정확한 미네랄 농도를 계산하세요. SCA, Barista Hustle, Hendon 프로필 지원. 마그네슘, 칼슘, 중탄산염을 조절하여 최고의 풍미를 끌어내고 머신을 보호하세요.';

const faqData = [
  {
    question: 'SCA 수질 표준이란 무엇인가요?',
    answer:
      '스페셜티 커피 협회(SCA)는 추출용 수질에 대한 기술적 표준을 정의하며, 장비를 손상시키지 않으면서 풍미를 극대화하는 균형 잡힌 추출을 위해 총경도(GH), 알칼리도(KH), pH 및 나트륨의 최적 범위를 지정합니다.',
  },
  {
    question: '왜 그냥 수돗물을 사용하면 안 되나요?',
    answer:
      '수돗물은 지역과 계절에 따라 큰 차이가 있습니다. 염소, 과도한 석회질 또는 스페셜티 커피의 풍미를 가리고 보일러와 실링을 손상시키는 미네랄 성분이 포함되어 있을 수 있습니다. 증류수를 미네랄화하면 완전한 통제와 반복 가능한 결과를 얻을 수 있습니다.',
  },
  {
    question: '미네랄 염은 어디에서 구할 수 있나요?',
    answer:
      '앱섬 솔트(황산마그네슘)와 베이킹 소다(탄산수소나트륨)는 약국이나 슈퍼마켓에서 구할 수 있습니다. 염화칼슘은 홈브루잉 전문점에서 흔히 볼 수 있습니다. 항상 식용 등급인지 확인하세요.',
  },
  {
    question: '내 에스프레소 머신에 안전한가요?',
    answer:
      '이 계산기에는 실시간 위험 지표가 포함되어 있습니다. 너무 순수한 물은 금속 부품을 부식시키고, 너무 센물은 석회질(스케일) 축적을 유발합니다. SCA Ideal 및 Barista Hustle 프로필은 장비의 수명과 맛의 품질 사이에서 균형을 맞추도록 설계되었습니다.',
  },
  {
    question: '커피에서 마그네슘과 칼슘의 차이는 무엇인가요?',
    answer:
      '마그네슘은 과일향과 단맛 성분을 더 효율적으로 추출하며 필터 브루잉에 선호되는 미네랄입니다. 칼슘은 더 풍부한 바디감과 부드러운 질감을 제공하지만, 시간이 지남에 따라 보일러 내부에 스케일을 형성하려는 경향이 더 강합니다.',
  },
];

const howToData = [
  {
    name: '순수한 베이스 워터 준비하기',
    text: '증류수, 정제수 또는 역삼투압(RO)수를 구매하거나 준비하세요. 미네랄화를 완벽하게 제어하기 위해 TDS 0 ppm에서 시작하는 것이 목표입니다.',
  },
  {
    name: '농축액 모액 병 준비하기',
    text: '각 염을 별도로 100ml 증류수에 녹이세요: 마그네슘용 앱섬 솔트 2.46g, 칼슘용 염화칼슘 1.47g, 버퍼(중탄산염)용 베이킹 소다 1.68g을 사용합니다.',
  },
  {
    name: '목표 프로필 선택하기',
    text: 'SCA Ideal(균형), Barista Hustle(단맛과 화사함), Hendon(바디), Melbourne(섬세함) 중 선택하거나 자신만의 GH와 KH 값으로 커스텀 프로필을 만드세요.',
  },
  {
    name: '최종 용량 입력하기',
    text: '미네랄화하려는 물의 양을 리터 단위로 입력하세요. 계산기는 해당 용량에 맞춰 농축액 투여량을 자동으로 조정합니다.',
  },
  {
    name: '농축액 추가 및 증류수로 채우기',
    text: '정밀 주사기를 사용하여 지정된 용량의 각 농축액을 용기에 넣고, 최종 목표 용량까지 증류수를 채워 완성합니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'SCA 커피 워터 계산기에 대한 자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 문헌 및 SCA 표준',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '커피 수질 화학: 왜 H₂O가 가장 간과되는 재료인가',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '커피의 98~99%는 물입니다. 하지만 그 물의 미네랄 구성은 전체 스페셜티 커피 가치 사슬에서 가장 간과되는 품질 요소입니다. 런던 수돗물로 추출한 커피와 SCA 최적화 수질로 추출한 동일한 에티오피아 싱글 오리진 커피는 완전히 다른 커피처럼 느껴질 수 있습니다. <strong>SCA 커피 워터 계산기</strong>를 사용하면 흔한 미네랄 염과 증류수를 사용하여 처음부터 완벽한 브루잉 워터를 조제할 수 있습니다.',
    },
    {
      type: 'summary',
      title: '왜 물의 미네랄화가 그토록 중요한가요?',
      items: [
        '<strong>GH(총경도):</strong> 마그네슘과 칼슘 이온의 합은 커피의 향미 성분을 용해시키는 물의 능력을 결정합니다.',
        '<strong>KH(탄산염 경도):</strong> 중탄산염 농도는 추출 중 pH를 조절합니다. 낮은 KH는 신맛이 강한 커피를, 높은 KH는 밋밋한 맛을 만듭니다.',
        '<strong>재현성:</strong> 수돗물은 계절과 지역에 따라 변합니다. 미네랄화된 물은 항상 일정하며 매번 동일한 결과를 재현할 수 있습니다.',
        '<strong>장비 보호:</strong> 적절한 미네랄 수치는 부식(너무 순수한 물)과 스케일 축적(너무 센물)을 모두 방지합니다.',
      ],
    },
    {
      type: 'title',
      text: 'SCA 표준: 완벽한 브루잉 워터를 위한 기술적 한계',
      level: 2,
    },
    {
      type: 'table',
      headers: ['항목', '최소값', 'SCA 이상적인 수치', '최대값'],
      rows: [
        ['총경도 (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['알칼리도 (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: '마그네슘 vs 칼슘: 컵의 운명을 결정하는 미네랄 전투',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 미네랄이 커피와 똑같이 반응하는 것은 아닙니다. 연구자 크리스토퍼 헨든은 <strong>마그네슘</strong>이 복잡한 휘발성 향미 분자와 결합하여 과일향과 꽃향을 더 효율적으로 추출한다는 것을 입증했습니다. 반면 <strong>칼슘</strong>은 더 무거운 성분을 추출하여 바디감과 실키한 입안의 질감을 제공하지만 향의 화사함은 덜합니다.',
    },
    {
      type: 'tip',
      title: '전문 바리스타의 황금률',
      html: '<p>황동 또는 구리 보일러가 있는 에스프레소 머신의 경우, KH가 40 mg/L 미만인 프로필을 지속적으로 사용하지 마세요. 너무 순수한 물은 장기적으로 부식을 유발합니다. 필터 브루잉(V60, 케멕스, 에어로프레스 등)의 경우 보호해야 할 보일러가 없으므로 멜버른과 같은 섬세한 프로필도 안심하고 사용할 수 있습니다.</p>',
    },
  ],
  ui: {
    sectionMixTitle: '배합 설정',
    labelVolume: '최종 용량',
    labelProfile: '목표 수질 레시피',
    customProfileBtn: '커스텀',
    labelGH: '목표 GH',
    labelKH: '목표 KH',
    concentratesTitle: '농축액 모액 병 (g/100ml)',
    saltMgName: '마그네슘 (앱섬 솔트)',
    saltCaName: '칼슘 (염화칼슘)',
    saltBufName: '중탄산염 (베이킹 소다)',
    recipeTitle: '레시피',
    labelMg: '마그네슘 농축액:',
    labelCa: '칼슘 농축액:',
    labelBuffer: '중탄산염 농축액:',
    labelDistilledWater: '증류수로 다음까지 채우기:',
    copyBtn: '레시피 복사',
    copiedText: '복사 완료!',
    safetyMetalsTitle: '금속 안전성',
    safetyScaleTitle: '스케일 위험',
    calculatingText: '계산 중...',
    glossaryTitle: '미네랄 퀵 가이드',
    profileSubTemplate: '목표: {gh} GH / {kh} KH',
    customProfileName: '커스텀',
    corrosionHigh: '위험: 매우 공격적인 수질입니다. 보일러와 구리 부품을 부식시킬 수 있습니다.',
    corrosionMedium: '적정: 중간 정도의 부식 위험. 필터 브루잉 권장, 머신 사용 시 주의.',
    corrosionLow: '안전: 물에 금속을 보호할 수 있는 충분한 완충 능력이 있습니다.',
    scaleHigh: '위험: 스케일 축적이 즉시 발생할 수 있습니다. 수동 필터 브루잉에만 사용하세요.',
    scaleMedium: '주의: 시간이 지남에 따라 에스프레소 머신 내부에 스케일이 쌓일 수 있습니다.',
    scaleLow: '안전: 유의미한 스케일 축적 위험이 없습니다.',
    copyTemplate:
      '커피 워터 레시피 ({profileName}):\n- 용량: {liters}L\n- 마그네슘 농축액: {mg}ml\n- 칼슘 농축액: {ca}ml\n- 중탄산염 농축액: {buf}ml\n- 증류수: {water}ml',
    glossary0Term: '총경도 (GH)',
    glossary0Desc: '칼슘과 마그네슘의 합. 마그네슘은 단맛과 복합성을, 칼슘은 바디감과 질감을 더해줍니다.',
    glossary1Term: '알칼리도 (KH)',
    glossary1Desc: '산도를 중화시키는 능력. KH가 높으면 산미가 억제되고, 낮으면 커피 맛이 시게 느껴질 수 있습니다.',
    glossary2Term: 'TDS (총 용존 고형물)',
    glossary2Desc: '미네랄화된 물에서 TDS는 첨가된 모든 미네랄 염의 통합 농도를 나타냅니다.',
    glossary3Term: '마그네슘',
    glossary3Desc: '복합적인 과일향 성분을 더 효율적으로 추출합니다. 스페셜티 커피 브루잉에 선호되는 미네랄입니다.',
  },
};
