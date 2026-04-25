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
      text: '커피 비율 계산기: 완벽한 추출을 위한 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페셜티 커피 한 잔을 내리는 것은 단순한 요리 행위가 아니라 <strong>유체 화학</strong>과 <strong>질량 이동</strong>의 실험입니다. 이 과정의 중심에는 용질(분쇄된 커피)과 용매(물) 사이의 정량적 관계를 규정짓는 핵심 척도인 <strong>브루잉 비율(Brew Ratio)</strong>이 있습니다. 당사의 계산기는 <em>스페셜티 커피 협회(SCA)</em>의 표준과 응용 열역학 원리를 통합하여 바리스타와 커피 애호가들이 추출 시 완벽한 재현성을 확보할 수 있도록 돕습니다.',
    },
    {
      type: 'summary',
      title: '커피 비율에 대해 배우게 될 내용',
      items: [
        '<strong>브루잉 비율:</strong> 커피와 물의 무게 관계(예: 1:15)가 컵의 잠재적인 강도와 감각적 프로필을 어떻게 결정하는지.',
        '<strong>TDS와 추출:</strong> 수용성 고형물 뒤에 숨겨진 과학과 원두의 몇 퍼센트가 실제로 음료에 담겨야 하는지.',
        '<strong>흡수율 조정:</strong> 커피 가루 1g당 약 2g의 물을 흡수하는 이유와 필요한 추가 물 양을 계산하는 방법.',
        '<strong>특정 추출법:</strong> V60, 프렌치 프레스, 에스프레소 및 급랭 아이스 커피 레시피에 대한 이상적인 비율.',
      ],
    },
    {
      type: 'title',
      text: '브루잉 비율이란 무엇이며 왜 가장 중요한 변수인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '커피 원두는 약 30%의 수용성 물질을 함유하고 있지만, 그 모든 성분이 사람의 입맛에 즐거움을 주는 것은 아닙니다. 물은 범용 용매로서 분자량과 화학적 친화력에 따라 특정 순서대로 성분을 추출해냅니다. 커피 비율은 커피 1g당 얼마만큼의 용해 능력을 제공할지를 정밀하게 제어합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>산미 단계(지질 및 유기산):</strong> 용해도가 매우 높아 가장 먼저 녹아 나옵니다. 밝은 느낌, 사과산 또는 구연산의 산미, 과일 향을 부여합니다. 비율이 너무 낮으면(과소 추출) 과정이 여기서 멈춰버려 시고 짠맛이 나는 커피가 됩니다.',
        '<strong>단맛 단계(당분 및 탄수화물):</strong> 그다음에 추출됩니다. 균형감, 단맛, 바디감을 형성합니다. 이는 커피가 향미의 복합성과 구조적 균형의 정점에 도달하는 "골든 윈도우" 지점입니다.',
        '<strong>쓴맛 단계(섬유질 및 페놀 화합물):</strong> 가장 천천히 녹아 나옵니다. 비율이 너무 높으면(과다 추출) 물이 커피 세포를 분해하여 불쾌한 쓴맛, 재, 나무 같은 부정적인 뉘앙스를 추출하게 됩니다.',
      ],
    },
    {
      type: 'title',
      text: '권장 비율: 추출 기구별 프로포션',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '각 추출 방식은 접촉 시간, 펌프 압력 또는 필터 구멍 크기와 같은 변수로 인해 특정한 비율을 필요로 합니다. 다음 기술 표는 2026년 기준 업계 표준을 요약한 것입니다.',
    },
    {
      type: 'table',
      headers: ['추출 방식', '비율 (커피:물)', '컵 프로파일', '목표 시간'],
      rows: [
        ['에스프레소', '1:2 ~ 1:2.5', '강렬함, 점성, 조밀한 크레마', '25-30초'],
        ['V60 / 푸어오버', '1:15 ~ 1:16', '깔끔함, 밝음, 선명한 노트', '2:30-3:30분'],
        ['에어로프레스', '1:12 ~ 1:15', '다재다능함, 중간-높은 바디감', '1:30-2:00분'],
        ['프렌치 프레스', '1:12 ~ 1:14', '질감 있음, 묵직함, 오일감', '4:00-5:00분'],
        ['콜드 브루', '1:8 ~ 1:12', '달콤함, 낮은 산도, 풍부한 바디감', '12-24시간'],
      ],
    },
    {
      type: 'title',
      text: '필요한 물의 양 계산: 원두의 수분 보유 계수',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '핸드 드립 시 가장 흔히 하는 실수 중 하나는 분쇄된 커피가 일정한 양의 물을 머금는 다공성 친수성 구조임을 무시하는 것입니다. 부은 모든 물이 컵에 담기는 것은 아닙니다.',
    },
    {
      type: 'paragraph',
      html: '과학적으로 분쇄된 커피는 <strong>커피 1.0g당 약 2.0g의 물</strong>을 보유합니다. 당사의 계산기는 <strong>동적 흡수율 조정(Dynamic Retention Adjustment)</strong> 기능을 도입했습니다. 특정 300ml 용기를 가득 채워야 한다면, 시스템은 원두의 흡수분을 보충하기 위해 340ml의 물을 부어야 함을 계산해 내어, 추출 비율 즉 풍미를 손상 없이 유지합니다.',
    },
    {
      type: 'stats',
      items: [
        { label: '원두 양', value: '20g', icon: 'mdi:coffee' },
        { label: '부은 물의 양', value: '300ml', icon: 'mdi:water' },
        { label: '흡수된 양', value: '40ml', icon: 'mdi:minus-circle' },
        { label: '추출 결과량', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: '뜸들이기(블룸)의 중요성: 균일한 추출을 위한 가스 배출',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '뜸들이기 단계는 단순히 시각적인 요소가 아닙니다. 이는 물리적인 필수 요소입니다. 로스팅 중에 커피 내부에 갇힌 이산화탄소가 생성됩니다. 물을 계속해서 한꺼번에 부으면 가스가 격렬하게 빠져나가면서 미세 통로(채널링)를 만들고, 물이 커피 입자 중심부까지 침투하는 것을 방해합니다.',
    },
    {
      type: 'tip',
      title: '균질 포화 기법',
      html: '<p>완벽한 뜸들이기를 위해 커피 무게의 정확히 2배의 물을 부으세요(1:2 뜸들이기 비율). 젓가락으로 가볍게 젓거나 서버를 흔들어 모든 커피 가루가 젖도록 합니다. 30~45초를 기다리세요. 가스가 배출됨에 따라 이후의 물 부음이 층류를 형성하며 흐르게 되고, 커피 베드 전체에서 성분을 균일하게 추출할 수 있게 됩니다.</p>',
    },
    {
      type: 'title',
      text: '아이스 커피 튜토리얼: 맛이 연해지지 않게 커피를 내리는 법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페셜티 아이스 커피(급랭 방식)는 열역학적인 재조정이 필요합니다. 향미의 복합성을 잡기 위해 94°C에서 휘발성 오일을 추출한 다음, 산화와 산미의 손실을 피하기 위해 빠르게 냉각시키는 것이 목표입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% 뜨거운 물:</strong> 과다 추출을 피하거나 커피 가루가 너무 일찍 식지 않으면서도 18-20%의 추출 수율을 얻기 위해 필요한 최소한의 양입니다.',
        '<strong>40% 얼음:</strong> 커피를 받는 서버에 미리 담아둡니다. 커피의 열에너지가 얼음으로 전달되어(융해 잠열), 음료를 즉시 5°C 이하로 냉각시킵니다.',
        '<strong>최종 강도:</strong> 이들이 합쳐지면 최종 비율(예: 1:15)이 정확하게 유지되어, 적절한 농도의 상큼하고 시원한 커피가 완성됩니다.',
      ],
    },
    {
      type: 'title',
      text: '분쇄도와 브루잉 비율: 접촉 표면적의 핵심',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '비율은 방정식의 절반일 뿐입니다. 분쇄도는 물에 노출되는 <strong>총 표면적</strong>을 결정합니다. 입자가 작을수록(가는 분쇄) 비표면적이 커지며, 이는 화학 성분의 추출 속도를 급격히 가속화합니다.',
    },
    {
      type: 'title',
      text: '재현성과 과학: 당신의 주방을 바리스타 실험실로 만드세요',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페셜티 커피의 탁월함은 측정의 일관성에서 나옵니다. <strong>나만의 레시피</strong> 기능을 사용하면 성공적인 추출에 대한 기술적 기록을 남길 수 있습니다. 이는 단순한 즐겨찾기 폴더가 아니라, 동일한 원두 1kg이 1:15 비율과 1:16 비율에 어떻게 다르게 반응하는지 비교할 수 있는 분석 도구이며, 레시피를 정밀하게 조정할 수 있게 해줍니다.',
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
