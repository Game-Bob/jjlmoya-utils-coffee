import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: '신맛 / 날카로운 산미',
    bitter: '쓴맛 / 탄 맛',
    watery: '밍밍함 / 연함',
    astringent: '떫음 / 입안이 마름',
  },
  causes: {
    acidic: ['분쇄도가 너무 굵음 (과소 추출)', '수온이 너무 낮음', '추출 시간이 너무 짧음', '커피가 너무 신선함 (가스가 안 빠짐)'],
    bitter: ['분쇄도가 너무 가늠 (과다 추출)', '수온이 너무 높음', '추출 시간이 너무 길음', '오래된 원두 또는 강배전'],
    watery: ['분쇄도가 너무 굵음 (추출 부족)', '추출 비율이 너무 높음 (물이 많음)', '추출 시간이 너무 짧음', '원두가 너무 오래되었거나 저품질'],
    astringent: ['수질 문제 (미네랄 과다)', '과다 추출과 미네랄 성분의 결합', '경수에서의 너무 가는 분쇄도', '추출 온도가 너무 높음'],
  },
  solutions: {
    acidic: '분쇄도가 굵어 바디를 추출하기 전에 물이 너무 빨리 통과합니다. 분쇄도를 가늘게 조정하여 표면적을 넓히고 유속을 늦추세요.',
    bitter: '추출 시간이 너무 길어 쓴맛과 탄 맛 성분까지 추출되었습니다. 분쇄도를 굵게 조정하여 접촉 시간을 줄이고 추출 강도를 낮추세요.',
    watery: '컵에 용존 고형분이 부족합니다. 분쇄도를 가늘게 하거나 원두 양을 늘려 추출 수율과 바디감을 높이세요.',
    astringent: '미네랄이 풍부한 물이 과다 추출을 유발하고 커피 성분과 결합하여 입안에 건조함을 만듭니다. 분쇄도를 굵게 하여 과다 추출을 줄이고 필터링으로 수질을 개선하세요.',
  },
  actions: {
    acidic: { text: '분쇄도를 약간 가늘게', textSevere: '분쇄도를 훨씬 가늘게', icon: 'mdi:chevron-left' },
    bitter: { text: '분쇄도를 약간 굵게', textSevere: '분쇄도를 훨씬 굵게', icon: 'mdi:chevron-right' },
    watery: { text: '분쇄도를 가늘게 하거나 원두 5g 추가', textSevere: '분쇄도를 훨씬 가늘게 하거나 원두 7g 추가', icon: 'mdi:plus-circle' },
    astringent: { text: '여과된 물을 사용하고 분쇄도를 굵게', textSevere: '여과된 물을 사용하고 분쇄도를 훨씬 굵게', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: '고운 소금 같은', bitter: '밀가루 같은', watery: '코코아 가루 같은', astringent: '약간 더 고운 밀가루' },
    pourover: { acidic: '꽃소금 같은', bitter: '굵은 모래 같은', watery: '고운 옥수수 가루 같은', astringent: '고운 모래' },
    aeropress: { acidic: '고운 옥수수 가루 같은', bitter: '꽃소금 같은', watery: '곱게 간 후추 같은', astringent: '중간 모래' },
    frenchpress: { acidic: '빵가루 같은', bitter: '암염 같은', watery: '천일염 같은', astringent: '굵은 모래' },
    moka: { acidic: '고운 천일염 같은', bitter: '고운 모래 같은', watery: '꽃소금 같은', astringent: '중간-고운 모래' },
    coldbrew: { acidic: '굵은 천일염 같은', bitter: '자갈 같은', watery: '암염 같은', astringent: '알갱이가 있는 굵은 모래' },
  },
  secondaryAction: '{temp}°C에서 {time} 동안 추출',
  tertiaryAction: '모든 향미를 느끼기 위해 시음 전 커피가 실온으로 식을 때까지 기다려 보세요.',
};

const slug = 'coffee-flavor-diagnosis-extraction-problems';
const title = '커피 추출 진단기: The Brew Fixer';
const description =
  '커피 맛이 없는 이유를 몇 초 만에 진단해 보세요. 추출 방식과 맛 프로필에 맞춰 분쇄도, 온도, 시간을 개인화하여 조정해 드립니다.';

const faqData = [
  {
    question: '커피가 과소 추출되었는지 과다 추출되었는지 어떻게 알 수 있나요?',
    answer:
      '과소 추출(시고 날카로운 맛)은 물이 너무 빨리 통과하여 성분을 충분히 녹여내지 못했음을 의미합니다. 과다 추출(쓰고 탄 맛)은 물이 커피와 너무 오랫동안 접촉했음을 의미합니다. The Brew Fixer는 맛의 특징과 추출 방식을 분석하여 어떤 문제가 발생했는지 파악하도록 도와줍니다.',
  },
  {
    question: '커피를 내릴 때 가장 흔히 하는 실수는 무엇인가요?',
    answer:
      '분쇄도입니다. 많은 사람이 너무 굵게(연하고 신 커피) 혹은 너무 가늘게(쓰고 과다 추출된 커피) 분쇄합니다. 추출 방식에 맞춰 그라인더를 정확한 크기로 조정하는 것이 가장 효과적인 개선 방법입니다.',
  },
  {
    question: '온도가 정말 그렇게 중요한가요?',
    answer:
      '네. 수온은 추출 속도를 제어합니다. 너무 낮으면 과소 추출(신맛)이 되고, 너무 높으면 과다 추출(쓴맛)이 됩니다. 추출 방식마다 이상적인 범위가 있습니다. 핸드드립(V60 등)은 92-96°C를 선호하며, 프렌치 프레스는 긴 침출 시간 동안의 과다 추출을 피하기 위해 85-90°C가 적당합니다.',
  },
  {
    question: '커피가 떫거나 입안이 건조해지는 이유는 무엇인가요?',
    answer:
      '떫은맛(수렴성)은 보통 미네랄이 많은 물이나 과다 추출과 미네랄의 결합으로 발생합니다. 여과된 물을 사용하고 분쇄도를 약간 더 굵게 조정해 보세요. 그래도 해결되지 않는다면 물의 TDS(총 용존 고형물)가 너무 높을 수 있으므로 정수기 사용을 권장합니다.',
  },
  {
    question: '온도와 시간 조절만으로 맛없는 커피를 고칠 수 있나요?',
    answer:
      '온도와 시간도 도움이 되지만, 근본적인 원인은 대개 분쇄도에 있습니다. 분쇄도가 너무 굵으면 시간을 늘리거나 온도를 높여도 효과는 미미합니다. The Brew Fixer는 추출에 가장 큰 영향을 미치는 분쇄도 조정을 항상 첫 번째 대책으로 추천합니다.',
  },
  {
    question: '모든 커피에 똑같은 레시피를 사용해야 하나요?',
    answer:
      '아니요. 갓 볶은 커피(1-5일)는 추출이 더 빠르기 때문에 오래된 커피보다 약간 더 굵은 분쇄도가 필요할 수 있습니다. 약배전 원두는 밀도가 높아 더 가는 분쇄도를 선호하는 경우가 많고, 강배전 원두는 다공질이라 추출이 잘 되므로 더 굵은 분쇄도를 선호합니다.',
  },
];

const howToData = [
  {
    name: '추출 방식 선택하기',
    text: '사용한 기구를 선택하세요: 핸드드립, 프렌치 프레스, 에어로프레스, 모카포트, 에스프레소 머신 또는 콜드브루. 도구가 해당 방식에 특화된 권장 사항을 제공합니다.',
  },
  {
    name: '주요 맛 결함 파악하기',
    text: '커피를 맛보고 가장 두드러지는 맛을 선택하세요: 신맛, 쓴맛(탄 맛), 밍밍함(연함), 또는 떫음(건조함). 복합적인 문제가 있다면 부차적인 맛도 선택할 수 있습니다.',
  },
  {
    name: '강도 평가하기',
    text: '슬라이더를 움직여 맛 결함이 얼마나 강한지 표시해 주세요. "약함"은 거의 느껴지지 않는 정도, "심함"은 컵 전체의 맛을 지배하는 상태를 의미합니다.',
  },
  {
    name: '진단 실행하기',
    text: '「진단하기」 버튼을 클릭하면 도구가 입력 내용을 분석하여 주요 대책(보통 분쇄도 조정), 부차적 대책(온도 및 시간), 질감 참고 가이드를 표시합니다.',
  },
  {
    name: '조정 및 테스트하기',
    text: '권장된 변경 사항(예: 더 굵게 분쇄, 추출 시간 연장 등)을 적용합니다. 새로 내려서 맛을 확인해 보세요. 작은 조정이 쌓여 큰 차이를 만듭니다.',
  },
  {
    name: '피드백 보내기',
    text: '다음 잔을 내린 후 개선되었는지 도구에 알려주세요. 개선되었다면 축하 꽃가루 애니메이션이 나타납니다! 그렇지 않다면 뒤로 돌아가 다른 변수를 시도해 보세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: '커피 추출에 관한 자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 자료 및 커피 과학',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '커피 맛이 왜 없을까? 추출 진단 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '훌륭한 에스프레소와 탄 종이 맛이 나는 커피의 차이는 단 하나의 개념으로 요약됩니다. 바로 <strong>커피 추출</strong>입니다. 추출은 물이 커피 가루에서 가용성 성분을 녹여내는 과정입니다. 제대로 하면 복합적인 향미, 단맛, 투명함을 이끌어낼 수 있지만, 잘못하면 신맛, 쓴맛, 혹은 밍밍함이 나타납니다.',
    },
    {
      type: 'summary',
      title: 'The Brew Fixer를 통해 배우는 것들',
      items: [
        '<strong>추출 결함 진단 방법:</strong> 커피가 과소 추출되었는지, 과다 추출되었는지, 연한지, 아니면 수질에 문제가 있는지 파악합니다.',
        '<strong>추출을 제어하는 3가지 요소:</strong> 분쇄도, 수온, 접촉 시간. 무엇을 먼저 조정해야 할까요? Brew Fixer가 알려드립니다.',
        '<strong>추출 방식별 권장 사항:</strong> V60의 이상적인 분쇄도는 프렌치 프레스와 완전히 다릅니다. 귀하의 기구에 맞춘 조언을 제공합니다.',
        '<strong>질감 참고 가이드:</strong> 고운 가루, 천일염, 모래 등 익숙한 소재와 비교하여 목표로 해야 할 분쇄도를 정확히 파악할 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '커피 추출의 3가지 차원',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '추출 수율은 녹아 나온 성분의 질량을 원래 커피 가루의 질량으로 나눈 것입니다. 스페셜티 커피는 모든 방식에서 <strong>18~20% 추출</strong>을 목표로 합니다. 이보다 낮으면 시고, 높으면 씁니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>분쇄도</strong>는 표면적을 제어합니다. 가늘수록 물과 닿는 면적이 넓어져 추출이 빨라지고, 굵을수록 느려집니다.',
        '<strong>수온</strong>은 용해 속도를 제어합니다. 고온(94~96°C)은 빠르고, 저온(85~90°C)은 천천히 성분을 녹여냅니다.',
        '<strong>접촉 시간</strong>은 물이 커피에 머무는 시간의 길이입니다. 핸드드립(2:30~3:30분), 프렌치 프레스(4:00~5:00분).',
      ],
    },
    {
      type: 'title',
      text: '신맛이 나는 커피(과소 추출) 진단 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '신맛이 나는 커피는 레몬이나 사과 같은 맛이 나며, 산미가 날카롭고 자극적입니다. 이는 물이 커피에서 성분을 충분히 이끌어낼 시간이 부족했음을 의미합니다. 가장 간단한 해결책은 거의 항상 <strong>분쇄도를 가늘게</strong> 하여 표면적을 넓히고 물의 흐름을 늦추는 것입니다.',
    },
    {
      type: 'list',
      items: [
        '분쇄도를 더 가늘게 조정 (크기를 5-10µm 줄임)',
        '또는 추출 시간을 약간 연장 (15-30초 추가)',
        '또는 수온을 95-96°C로 높임',
      ],
    },
    {
      type: 'title',
      text: '쓴맛이 나는 커피(과다 추출) 진단 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '쓴맛이 나는 커피는 탄 맛, 재 같은 맛, 또는 나무 같은 맛이 납니다. 이는 바람직한 성분을 넘어 너무 오랫동안 과하게 추출되었음을 의미합니다. 해결책은 <strong>분쇄도를 굵게</strong> 하여 물의 흐름을 빠르게 하고 접촉 시간을 줄이는 것입니다.',
    },
    {
      type: 'list',
      items: [
        '분쇄도를 더 굵게 조정 (크기를 5-10µm 늘림)',
        '또는 추출 시간을 단축 (15-30초 줄임)',
        '또는 수온을 92-93°C로 낮춤',
      ],
    },
    {
      type: 'title',
      text: '밍밍한 커피(연함, 바디감 없음) 진단 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '연한 커피는 향미와 바디감이 부족합니다. 이는 보통 분쇄도가 너무 굵거나, 원두 대비 물이 너무 많거나(브루잉 레이시오가 높음), 혹은 원두가 오래되었음을 의미합니다. 그라인더 조정이 가장 빠른 해결책입니다.',
    },
    {
      type: 'list',
      items: [
        '분쇄도를 가늘게 하여 추출되는 표면적을 넓힘',
        '원두 양을 늘림 (브루잉 레이시오를 낮춤)',
        '추출 시간을 약간 늘리거나 더 높은 온도에서 추출',
      ],
    },
    {
      type: 'title',
      text: '떫은 커피(건조함, 미네랄 맛) 진단 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '떫은맛은 입안이 건조해지는 느낌으로, 포도 껍질을 씹은 것 같은 느낌입니다. 보통 경수(높은 미네랄 함량)와 과다 추출이 결합될 때 발생합니다. 분쇄도 조정과 수질 개선이 모두 필요하기 때문에 다소 까다로운 문제입니다.',
    },
    {
      type: 'list',
      items: [
        '정수기를 사용하여 미네랄 감소 (목표 TDS 60-150ppm)',
        '분쇄도를 굵게 하여 과다 추출 방지',
        '약간 낮은 온도(90-92°C)의 물 시도',
      ],
    },
    {
      type: 'title',
      text: '분쇄도 차트: 외관 및 질감 참고 가이드',
      level: 2,
    },
    {
      type: 'table',
      headers: ['분쇄도 명칭', '입자 크기', '질감 참고 소재', '최적 추출 방식'],
      rows: [
        ['매우 가늘게', '5-15 µm', '고운 가루, 코코아 가루', '에스프레소, 터키식'],
        ['가늘게', '15-30 µm', '슈가 파우더', '모카포트, 에어로프레스'],
        ['중가늘게', '30-50 µm', '고운 모래, 꽃소금', '핸드드립, 케멕스'],
        ['중간', '50-70 µm', '해변 모래', '커피 메이커, 평바닥 필터'],
        ['굵게', '70-90 µm', '굵은 소금, 거친 모래', '프렌치 프레스, 커핑'],
        ['매우 굵게', '90+ µm', '통후추, 빵가루', '콜드브루, 퍼콜레이터'],
      ],
    },
    {
      type: 'title',
      text: '수질: TDS 및 추출에 미치는 영향',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'TDS(총 용존 고형물)는 물에 포함된 미네랄 성분의 측정치입니다. 수돗물은 지역에 따라 연수(50ppm)부터 경수(300ppm 이상)까지 차이가 큽니다. 커피 추출은 수질에 매우 민감합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>너무 부드러움(0-50 ppm):</strong> 물이 너무 공격적으로 성분을 녹여내어 커피가 짜고 밍밍하게 느껴질 수 있습니다.',
        '<strong>이상적(60-150 ppm):</strong> 단맛이 있고 균형 잡힌 풀바디 추출.',
        '<strong>너무 딱딱함(200+ ppm):</strong> 미네랄이 커피 성분과 결합하여 떫고 건조한 입안 느낌을 만듭니다.',
      ],
    },
    {
      type: 'tip',
      title: '수질 문제 퀵 체크',
      html: '<p>경수가 의심된다면 비교를 위해 생수나 여과된 물로 내려보세요. 즉시 맛이 좋아진다면 물이 원인입니다. 정수기나 필터 교체를 고려해 보세요.</p>',
    },
  ],
  ui: {
    methodLabel: '어떤 기구로 내리고 계신가요?',
    methodPourover: '핸드드립 / 푸어오버',
    methodFrenchpress: '프렌치 프레스',
    methodAeropress: '에어로프레스',
    methodMoka: '모카포트',
    methodEspresso: '에스프레소',
    methodColdbrew: '콜드브루',
    methodDescription: '추출 기구를 선택해 주세요',
    flavorLabel: '어떤 맛이 나나요?',
    flavorAcidic: '신맛 / 날카로운 산미',
    flavorBitter: '쓴맛 / 탄 맛',
    flavorWatery: '밍밍함 / 연함',
    flavorAstringent: '떫음 / 입안이 마름',
    flavorHint: '최대 2개까지 선택 가능',
    severityLabel: '그 문제가 얼마나 강한가요?',
    severitySlightLabel: '약간 느껴짐',
    severityModerateLabel: '보통',
    severitySevereLabel: '매우 강함',
    diagnoseBtn: '커피 진단하기',
    resetBtn: '리셋',
    resultTitle: '진단 완료',
    resultExplanation: '컵 안에서 일어나고 있는 현상',
    actionMainLabel: '주요 대책',
    actionSecondaryLabel: '온도 및 시간',
    actionTertiaryLabel: '전문가 팁',
    textureReferenceLabel: '질감 참고 가이드',
    improvementHint: '조정을 마친 후 다시 한 잔 내려보세요.',
    copyDiagnosisBtn: '진단 결과 복사',
    feedbackLabel: '커피가 맛있어졌나요?',
    feedbackSuccessTemplate: '훌륭합니다! 조정이 잘 되었네요.',
    methodPouroverDesc: 'V60, 케멕스, 드리퍼',
    methodFrenchpressDesc: '프레스기, 보덤',
    methodAeropressDesc: '에어로프레스, Prismo',
    methodMokaDesc: '마키네타, 직화식',
    methodEspressoDesc: '에스프레소 머신, 레버식',
    methodColdbrewDesc: '침출식, 찬물 추출',
    fadeOutMessage: '참 잘하셨어요! 계속해서 조정해 보세요.',
    backBtn: '뒤로',
    mainIssueLabel: '주요 문제',
    improvedBtn: '개선됨',
    notYetBtn: '아직',
    copiedBtn: '복사됨!',
    combinedLabel: '결합됨',
    diagnosisTitle: 'The Brew Fixer 진단 결과',
    issueLabel: '문제',
    causeLabel: '원인',
    actionLabel: '해결책',
    whyLabel: '이유',
    nextLabel: '다음',
  },
};
