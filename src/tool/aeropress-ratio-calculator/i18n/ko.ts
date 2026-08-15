import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-ratio-calculator';
const title = '에어로프레스 커피 비율 및 레시피 계산기';
const description = '에어로프레스 커피의 물 배분, 챔버 용량 한계, 바이패스 희석 및 추출 단계 타이머를 정밀하게 계산합니다.';

const howTo = [
  {
    name: '추출 방식과 모델 선택',
    text: '스탠다드 또는 인버티드(역방향) 방식을 선택하고 에어로프레스 챔버 크기(Original, XL, Go)를 설정합니다.',
  },
  {
    name: '원두량 및 추출 비율 설정',
    text: '분쇄 원두 무게(g)와 목표 비율을 입력하거나 챔피언 바리스타 레시피를 선택합니다.',
  },
  {
    name: '챔버 물 용량 및 바이패스 확인',
    text: '레시피가 챔버 용량을 초과하는지 확인합니다. 초과분은 잔에 직접 부을 바이패스 온수로 자동 계산됩니다.',
  },
  {
    name: '단계별 타이머 실행',
    text: '블루밍(뜸 들이기), 침출 및 부드러운 프레스 시간을 내장 타이머로 정밀하게 안내합니다.',
  },
];

const faq = [
  {
    question: '에어로프레스 스탠다드 방식과 인버티드 방식의 차이는 무엇인가요?',
    answer: '스탠다드 방식은 기구를 잔 위에 바로 올려두어 플런저를 꽂기 전까지 미세한 방울이 떨어집니다. 인버티드 방식은 플런저 위에 기구를 거꾸로 세워 뒤집기 전까지 완전한 침출 상태를 유지합니다.',
  },
  {
    question: '에어로프레스 바이패스 브루잉이란 무엇인가요?',
    answer: '챔버 안에서 진한 농축액을 추출한 후 컵에 깨끗한 온수를 추가해 희석하는 방식입니다. 기구 용량을 넘치지 않고 큰 용량의 커피를 깔끔하게 추출할 수 있습니다.',
  },
  {
    question: '에어로프레스에 가장 이상적인 커피와 물의 비율은 얼마인가요?',
    answer: '일반적인 필터 커피는 1:14에서 1:17 비율(원두 11g~15g당 물 200g)이 뛰어난 밸런스를 제공합니다. 농축된 에스프레소 스타일은 1:4에서 1:8 비율이 적합합니다.',
  },
  {
    question: '분쇄도는 에어로프레스 추출에 어떤 영향을 미치나요?',
    answer: '중미세 분쇄는 1~2분의 짧은 추출 시간에 가장 이상적입니다. 더 가늘게 갈면 바디감이 강해지며, 굵게 갈면 긴 침출 시간에도 떫은맛을 방지합니다.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: '스페셜티 커피 도구',
    profileLabel: '추출 프로파일',
    unitSystemLabel: '단위계',
    unitMetricLabel: '미터법 (g)',
    unitImperialLabel: '야드파운드법 (oz)',
    presetsTitle: '바리스타 및 세계 대회 레시피',
    presetCustom: '사용자 정의 레시피',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe 라이트 로스트',
    presetWacChamp: 'WAC 챔피언 바이패스',
    presetAlanAdler: 'Alan Adler 오리지널',
    presetIcedBypass: '플래시 브루 아이스 에어로프레스',
    methodLabel: '추출 기법',
    methodStandard: '스탠다드 정방향',
    methodInverted: '인버티드 침출식',
    modelLabel: '에어로프레스 모델',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: '원두량',
    doseUnitMetric: '그램',
    doseUnitImperial: 'oz',
    ratioLabel: '추출 비율',
    ratioPrefix: '1:',
    waterTempLabel: '물 온도',
    waterTempUnit: '°C',
    grindLabel: '추천 분쇄도',
    grindFine: '가는 분쇄',
    grindMediumFine: '중미세 분쇄',
    grindMedium: '중간 분쇄',
    grindCoarse: '굵은 분쇄',
    resultsTitle: '물 배분 및 추출 수치',
    statTotalWater: '총 물 사용량',
    statChamberWater: '챔버 내 물',
    statBypassWater: '바이패스 온수',
    statYield: '완성 음료량',
    statEstimatedTds: '예상 TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: '바이패스 희석 필요',
    bypassAlertText: '이 레시피는 챔버에 {chamber}, 컵에 직접 추가할 온수 {bypass}가 필요합니다.',
    timerTitle: '단계별 타이머',
    timerStart: '타이머 시작',
    timerPause: '일시정지',
    timerReset: '초기화',
    phaseBloom: '블루밍 및 뜸 들이기',
    phasePour: '물 붓기 및 젓기',
    phaseSteep: '침출 시간',
    phasePress: '부드러운 프레스',
    phaseBypass: '바이패스 온수 추가',
    phaseComplete: '추출 완료',
    guideTitle: '추출 가이드',
    guideStep1Title: '필터 린싱 및 원두 투입',
    guideStep1Desc: '캡에 필터를 장착하고 온수로 린싱한 뒤 갓 분쇄한 원두를 넣습니다.',
    guideStep2Title: '챔버에 물 붓기',
    guideStep2Desc: '적정 온도의 계산된 물을 붓고 가볍게 저어 원두를 골고루 적십니다.',
    guideStep3Title: '플런저 장착 및 대기',
    guideStep3Desc: '상단에 플런저를 살짝 끼워 진공을 형성하고 지정된 시간 동안 침출합니다.',
    guideStep4Title: '프레스 및 희석',
    guideStep4Desc: '20~30초 동안 일정한 힘으로 누릅니다. 공기 빠지는 소리가 나면 멈추고 바이패스 온수를 붓습니다.',
    ratioStrengthLight: '가볍고 섬세함',
    ratioStrengthMedium: '균형 잡힌 한 잔',
    ratioStrengthStrong: '풍부하고 진함',
    ratioStrengthConcentrate: '에스프레소 농축',
    chamberWaterLabel: '챔버 내 물',
    coffeeBedLabel: '커피 베드',
    airGapLabel: '공기층',
  },
  seo: [
    { type: 'title', text: '에어로프레스 커피 추출 이론과 비율 원리', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>에어로프레스</strong>는 침출식 추출과 공기압 여과를 결합한 만능 추출 기구입니다. 단맛과 깔끔한 향미를 이끌어내기 위해서는 원두와 물의 비율을 정확하게 제어해야 합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '챔버 용량 한계와 바이패스 브루잉',
      html: '표준 에어로프레스 챔버는 원두 베드의 부피를 제외하고 약 220ml~240ml의 물을 담을 수 있습니다. 큰 잔을 만들 때는 농축 추출 후 온수로 희석하는 바이패스 기법이 필수적입니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: '필터 황금 비율' },
        { value: '230 ml', label: '표준 챔버 용량' },
        { value: '1.2~1.5%', label: '목표 TDS 농도' },
      ],
    },
    { type: 'title', text: '스탠다드 방식과 인버티드 방식 비교', level: 3 },
    {
      type: 'paragraph',
      html: '기구의 거치 방향에 따라 물과의 접촉 시간 및 추출 균일도가 달라집니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '스탠다드 정방향 방식',
          description: '필터 캡이 서버나 컵 위에 바로 놓입니다. 플런저를 꽂으면 음압이 형성되어 초기 방울 흐름이 멈춥니다.',
          points: [
            '매우 안전하고 간편함',
            '초반 약간의 투과 발생',
            '제임스 호프만이 선호하는 재현성 높은 방식',
          ],
        },
        {
          title: '인버티드 역방향 방식',
          description: '플런저 위에 거꾸로 세워 추출하여 뒤집기 전까지 물이 새어나가지 않습니다.',
          highlight: true,
          points: [
            '침출 시간을 완벽하게 제어',
            '농축액 및 많은 원두량에 적합',
            '뒤집을 때 화상에 주의 필요',
          ],
        },
      ],
    },
    { type: 'title', text: '대용량 추출을 위한 바이패스 희석 활용법', level: 3 },
    {
      type: 'paragraph',
      html: '바이패스는 월드 에어로프레스 챔피언십(WAC) 우승자들의 단골 전략입니다. 1:6~1:8의 좁은 비율로 후반부의 떫은맛을 배제하고 좋은 성분만 추출한 뒤, 온수를 더해 완성합니다.',
    },
    {
      type: 'table',
      headers: ['레시피 종류', '원두량', '챔버 물 용량', '바이패스 물', '추천 분쇄도'],
      rows: [
        ['호프만 필터', '11g', '200g', '0g', '중미세 (600µm)'],
        ['팀 웬들보 라이트', '14g', '200g', '0g', '중간 (700µm)'],
        ['WAC 챔피언 바이패스', '30g', '120g', '105g', '굵은 분쇄 (900µm)'],
        ['앨런 애들러 오리지널', '17g', '80g', '100g 선택', '가는 분쇄 (450µm)'],
        ['플래시 브루 아이스', '18g', '150g', '100g 얼음', '중미세 (550µm)'],
      ],
    },
    { type: 'title', text: '완벽한 한 잔을 위한 팁', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>온도 조절:</strong> 산미와 향을 살리는 라이트 로스트는 92°C~96°C, 쓴맛을 줄이는 다크 로스트는 80°C~85°C를 권장합니다.',
        '<strong>부드러운 프레스:</strong> 20~30초 동안 일정하게 눌러 채널링을 예방합니다.',
        '<strong>필터 린싱:</strong> 종이 필터를 온수로 적셔 종이 맛을 제거합니다.',
        '<strong>쉭 소리에 멈춤:</strong> 공기가 빠져나가는 소리가 들리는 즉시 누르기를 멈춥니다.',
      ],
    },
    {
      type: 'summary',
      title: '핵심 정리',
      items: [
        '추출 시간에 맞추어 분쇄도를 최적화합니다.',
        '챔버 용량을 초과할 때는 바이패스 계산식을 적용합니다.',
        '온도와 시간을 일정하게 유지해 일관된 품질을 만듭니다.',
      ],
    },
  ],
  faq,
  faqTitle: '에어로프레스 비율 및 레시피에 관한 자주 묻는 질문',
  bibliography,
  bibliographyTitle: '기술 참고 문헌 및 커피 과학',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
