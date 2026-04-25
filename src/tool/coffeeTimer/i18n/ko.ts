import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'coffee-brew-timer';
const title = '커피 추출 타이머';
const description =
  '푸어 단계, 리듬 보조 오디오 알림, 추출 요약 기능을 갖춘 전문 스페셜티 커피 타이머입니다. V60, 케멕스, 에어로프레스에 최적화되어 있습니다.';

const faqData = [
  {
    question: '휴대폰 타이머 대신 이 타이머를 사용해야 하는 이유는 무엇인가요?',
    answer:
      '이 타이머는 커피 전용으로 설계되었습니다. 각 단계(뜸 들이기, 푸어, 드레인)를 시각적으로 보여주며, 전환 3초 전 오디오 알림을 통해 푸어링 리듬을 잃지 않도록 도와줍니다. 또한 나만의 레시피를 완벽하게 설정할 수 있습니다.',
  },
  {
    question: '뜸 들이기(Bloom) 시간이란 무엇인가요?',
    answer:
      '본격적인 추출 전 원두에 적은 양의 물을 부어 CO2를 배출시키는 단계(보통 30~45초)입니다. 타이머는 이 단계를 주황색으로 강조하여 언제 기다려야 하고 언제 다시 물을 부어야 하는지 알려줍니다.',
  },
  {
    question: '내 추출 시간이 적절한지 어떻게 알 수 있나요?',
    answer:
      '표준 V60의 경우 총 추출 시간은 2:30에서 3:15분 사이가 적당합니다. 이보다 빨리 끝난다면 분쇄도가 너무 굵은 것이고, 더 오래 걸린다면 너무 고운 것입니다. 타이머를 통해 이 과정을 정밀하게 진단할 수 있습니다.',
  },
  {
    question: '오디오 알림 기능이 있나요?',
    answer:
      '네. 뜸 들이기 단계가 끝나기 전과 추출 프로세스가 끝날 때 짧은 비프음을 내보냅니다. 덕분에 화면을 계속 보지 않고도 물줄기 조절에 집중할 수 있습니다.',
  },
  {
    question: '케멕스와 호환되나요?',
    answer:
      '물론입니다. 하단 설정 섹션에서 총 추출 시간을 케멕스의 두꺼운 필터에 적합한 4:30 또는 5:00분으로 조정할 수 있습니다.',
  },
  {
    question: '모바일에서 잘 작동하나요?',
    answer:
      '모바일 환경에 최적화되어 있으며, 젖은 손으로 조작하거나 드립 포트를 들고 있을 때도 누르기 쉬운 커다란 버튼 디자인을 적용했습니다.',
  },
];

const howToData = [
  {
    name: '레시피 설정',
    text: '하단 섹션에서 추출 방식(V60, 케멕스, 에어로프레스)에 맞춰 총 물 양, 뜸 물 양, 뜸 시간, 총 추출 시간을 조정하세요.',
  },
  {
    name: '시작 버튼 누르기',
    text: '커다란 시작 버튼을 누르세요. 타이머가 시작되며 상단 진행 표시줄에 현재 활성화된 단계가 표시됩니다.',
  },
  {
    name: '뜸 들이기(Bloom) 단계',
    text: '화면에 표시된 뜸 물 양을 나선형으로 붓고 타이머가 진행될 때까지 기다리세요. 단계 종료 3초 전에 오디오 알림이 울립니다.',
  },
  {
    name: '푸어(Pour) 단계',
    text: '목표 총 중량에 도달할 때까지 남은 물을 계속 붓습니다. 균일한 추출을 위해 천천히 일정한 원을 그리며 푸어링하세요.',
  },
  {
    name: '드레인(Drain) 단계',
    text: '커피가 필터를 통해 완전히 빠져나갈 때까지 기다립니다. 이 단계에서 추출이 완료되며 컵의 클린컵과 피니시가 결정됩니다.',
  },
  {
    name: '요약 확인',
    text: '완료 후 타이머에 총 시간과 부은 물의 양이 표시됩니다. 이 값과 함께 느낀 맛을 기록하여 레시피를 다듬어 보세요.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: '커피 타이머에 관한 자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참고 문헌 및 SCA 프로토콜',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '커피 추출 타이머: 추출 타이밍의 과학 (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페셜티 커피의 세계에서 물과 분쇄된 원두 사이의 <strong>접촉 시간</strong>은 단순한 기다림의 지표가 아닙니다. 어떤 화학 성분이 컵에 담길지를 결정하는 역학적 요인입니다. 단 1초의 차이가 카라멜 같은 단맛에서 재 같은 쓴맛으로의 변화를 가져올 수 있습니다. V60, 케멕스, 에어로프레스를 위한 당사의 전문 타이머 도구는 <strong>리듬 어시스턴트</strong> 역할을 하여, 집에서도 바리스타 수준의 정밀함을 구현할 수 있게 해줍니다.',
    },
    {
      type: 'summary',
      title: '전용 타이머가 필수적인 이유',
      items: [
        '<strong>역학적 제어:</strong> 물이 커피 고형분을 녹이는 속도는 일정합니다. 시간은 당신의 브레이크이자 액셀러레이터입니다.',
        '<strong>푸어 단계:</strong> 커피 추출은 선형적으로 일어나지 않습니다. 시간을 뜸 들이기, 푸어, 드레인으로 나누는 것이 중요합니다.',
        '<strong>재현성:</strong> 시간을 측정하지 않으면 가장 맛있었던 한 잔을 다시 재현할 수 없습니다. 일관성은 품질의 기초입니다.',
        '<strong>분쇄도 조정:</strong> 최종 추출 시간은 다음에 분쇄도를 더 곱게 해야 할지 굵게 해야 할지 알려주는 지표가 됩니다.',
      ],
    },
    {
      type: 'title',
      text: '추출 타임라인: 매 초마다 어떤 일이 일어날까?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '뜨거운 물이 커피에 닿는 순간, 분자 수준의 장애물 경주가 시작됩니다. 모든 향미가 동시에 추출되지는 않습니다. 이 타임라인을 이해하는 것이 아마추어와 전문 바리스타를 가르는 차이입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>0~45초 (뜸 들이기):</strong> 가스 배출 단계입니다. 로스팅 중에 갇힌 CO2가 물의 침투를 방해합니다. 여기서 기다려주면 원두가 "열리면서" 균일한 추출을 위한 준비가 됩니다.',
        '<strong>45~120초 (산미와 단맛 추출):</strong> 물이 흐르면서 미네랄 염, 유기산, 복합 당을 녹입니다. 이 단계가 향미의 핵심입니다.',
        '<strong>120~210초 (바디와 피니시):</strong> 무거운 섬유질과 쓴맛 성분이 추출됩니다. 이 단계가 너무 길어지면 커피에서 떫은맛(Astringent)이 납니다.',
      ],
    },
    {
      type: 'title',
      text: '뜸 들이기 단계: 왜 30초가 표준인가?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>뜸 들이기(Bloom)</strong> 또는 예비 침출은 원두 무게의 약 2배 정도 되는 물을 붓는 단계입니다. 초기 30초는 이산화탄소를 배출하는 역할을 합니다. 이 시간을 지키지 않으면 가스가 물을 밖으로 밀어내어, 물이 커피에 닿지 않고 빠져나가는 통로(Channeling)가 생기고 결국 연하고 불균일한 결과물이 나옵니다.',
    },
    {
      type: 'table',
      headers: ['단계', '권장 시간', '기술적 행동', '화학적 목적'],
      rows: [
        ['뜸 들이기', '30~45초', '원두 무게 2배 푸어링', '가스 배출 (CO2)'],
        ['1차 푸어', '45~90초', '천천히 원 그리기', '산미 및 단맛 추출'],
        ['2차 푸어', '90~150초', '부드러운 센터 푸어링', '밸런스 및 바디'],
        ['드레인', '종료 시까지', '일정한 드립', '클린컵 및 피니시'],
      ],
    },
    {
      type: 'title',
      text: '시간이 분쇄도에 주는 영향: 피드백 루프',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '타이머는 그라인더를 위한 최고의 진단 도구입니다. V60 레시피가 3:00분 걸려야 하는데 물이 2:15분에 다 빠졌다면, 그 커피는 시고 연한 맛(과소 추출)이 날 가능성이 높습니다. 해결책은 더 천천히 붓는 것이 아니라, <strong>분쇄도를 더 곱게 하여</strong> 입자가 물에 더 저항하게 만드는 것입니다.',
    },
    {
      type: 'stats',
      items: [
        { label: '이상적 V60 시간', value: '3:00', icon: 'mdi:clock-check' },
        { label: '이상적 케멕스 시간', value: '4:30', icon: 'mdi:timer-sand' },
        { label: '이상적 에어로프레스 시간', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '리듬 알림: 오디오 어시스턴트가 필수적인 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '드립 커피를 내릴 때는 저울과 푸어링 패턴에 지속적으로 시각적 주의를 기울여야 합니다. 당사의 타이머에는 다음 푸어를 시작하기 3초 전이나 뜸이 끝날 때 신호를 주는 <strong>근접 오디오 알림</strong>이 포함되어 있습니다. 이는 끊김 없는 유려한 추출과 방해받는 추출의 차이를 만듭니다.',
    },
    {
      type: 'tip',
      title: '대회용 바리스타 팁',
      html: '<p>물줄기를 최대한 낮게 유지하여 커피 베드에 가깝게 푸어링하세요. 높은 곳에서 부으면 산소가 유입되고 과도한 교반이 일어나 과다 추출의 원인이 되거나 물의 온도가 너무 빨리 떨어질 수 있습니다. 타이머를 활용해 초당 5~7g 정도의 일정한 원형 리듬을 유지하세요.</p>',
    },
    {
      type: 'title',
      text: '열역학과 시간: 온도 변수',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '시간은 시스템의 온도에 영향을 줍니다. 6분 동안 진행되는 추출은 많은 열에너지를 손실하여 균형 잡히지 않은 컵을 만듭니다. 최적의 시간 범위를 지키면 추출 내내 물의 온도를 90°C에서 96°C 사이로 유지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '플래시 브루(Flash Brew) 아이스 커피 타이밍',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '얼음 위에 직접 커피를 내릴 때는 타이밍이 더 공격적이어야 합니다. 더 적은 양의 뜨거운 물(전체의 60%)을 사용하므로 접촉 시간이 단축됩니다. 이를 보완하기 위해 분쇄도를 약간 더 곱게 조정하여 추출 시간을 2:30에서 3:00분 이내로 맞추세요.',
    },
    {
      type: 'title',
      text: '추출 후 요약: 지속적인 학습',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '매 추출이 끝나면 당사의 도구는 총 접촉 시간을 보여줍니다. 이 값과 함께 느낀 맛을 기록하세요. 맛이 쓴가요? 다음에는 15초 더 짧은 시간을 목표로 하세요. 금속 맛이나 신맛이 나나요? 20초 더 길게 해보세요. 타이머가 커피를 대신 만들어주지는 않지만, 당신이 예술가가 될 수 있도록 데이터를 제공합니다.',
    },
  ],
  ui: {
    readyText: '준비 완료',
    startBtn: '추출 시작',
    pauseBtn: '일시 정지',
    resumeBtn: '다시 시작',
    resetBtn: '초기화',
    newBrewBtn: '새 추출',
    targetLabel: '목표 물 양:',
    instructionStart: '커다란 버튼을 누르세요',
    hintStart: 'V60 또는 케멕스를 준비하세요',
    phase1Label: '1단계: 뜸 들이기 (Bloom)',
    phase2Label: '2단계: 푸어 (Pour)',
    phase3Label: '3단계: 드레인 (Drain)',
    instructionBloom: '{bloomWater}g의 물을 부으세요',
    hintBloom: '골고루 적시도록 가볍게 흔들어주세요',
    instructionPour: '총 {waterTotal}g까지 부으세요',
    hintPour: '일정한 원을 그리며 푸어링하세요',
    instructionDrain: '마지막 드레인을 기다리세요',
    hintDrain: '맛있게 즐길 준비가 거의 다 되었습니다',
    summaryTitle: '추출 완료!',
    summaryMessage: '커피가 준비되었습니다.',
    statTimeLabel: '총 추출 시간',
    statWaterLabel: '부은 물 양',
    setupTitle: '레시피 설정',
    labelWater: '총 물 양 (g)',
    labelBloomWater: '뜸 물 양 (g)',
    labelBloomTime: '뜸 시간 (초)',
    labelTotalTime: '총 추출 시간 (초)',
  },
};
