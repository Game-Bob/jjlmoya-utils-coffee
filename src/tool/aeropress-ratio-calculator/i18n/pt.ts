import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'calculadora-de-proporcao-aeropress';
const title = 'Calculadora de Proporção e Receitas para AeroPress';
const description = 'Calcule a distribuição de água, limites de capacidade da câmara, diluição bypass e etapas de extração para café na AeroPress.';

const howTo = [
  {
    name: 'Escolher o método e o modelo AeroPress',
    text: 'Selecione entre o método Padrão ou Invertido e defina a capacidade da câmara da sua AeroPress (Original, XL ou Go).',
  },
  {
    name: 'Definir a dose de café e a proporção',
    text: 'Insira o peso do café moído em gramas e a proporção desejada, ou escolha uma receita de barista premiado.',
  },
  {
    name: 'Verificar água na câmara e diluição bypass',
    text: 'Confira se a receita ultrapassa a capacidade útil. A ferramenta calcula automaticamente a água de bypass para adicionar na xícara.',
  },
  {
    name: 'Acompanhar o cronômetro por etapas',
    text: 'Inicie o temporizador integrado para executar o blooming, a infusão e a prensagem suave com máxima precisão.',
  },
];

const faq = [
  {
    question: 'Qual é a diferença entre o método padrão e o invertido na AeroPress?',
    answer: 'No método padrão a cafeteira fica apoiada diretamente sobre a xícara, gerando um leve gotejamento passivo antes de inserir o êmbolo. No método invertido a AeroPress fica de cabeça para baixo sobre o pistão, permitindo uma infusão estanque e controle total do tempo.',
  },
  {
    question: 'O que é o método de extração bypass na AeroPress?',
    answer: 'O bypass consiste em extrair um concentrado de café na câmara e diluí-lo na xícara com água limpa e quente. Isso possibilita preparar porções maiores sem transbordar a cafeteira.',
  },
  {
    question: 'Qual é a proporção ideal de café e água para AeroPress?',
    answer: 'Para um café coado clássico, proporções entre 1:14 e 1:17 (por exemplo 11g a 15g de café para 200g de água) proporcionam grande equilíbrio. Para concentrados encorpados, proporções de 1:4 a 1:8 são ideais.',
  },
  {
    question: 'Como a moagem afeta a extração na AeroPress?',
    answer: 'Uma moagem média-fina é indicada para tempos curtos de 1 a 2 minutos. Moagens mais finas aumentam o corpo, enquanto moagens médias evitam o amargor em infusões longas.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Ferramenta de Cafés Especiais',
    profileLabel: 'Perfil de Extração',
    unitSystemLabel: 'Sistema de Unidades',
    unitMetricLabel: 'Métrico (g)',
    unitImperialLabel: 'Imperial (oz)',
    presetsTitle: 'Receitas de Baristas e Campeonatos',
    presetCustom: 'Fórmula Personalizada',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Torra Clara',
    presetWacChamp: 'Campeão WAC Bypass',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Gelado AeroPress',
    methodLabel: 'Técnica de Preparo',
    methodStandard: 'Padrão Direto',
    methodInverted: 'Imersão Invertida',
    modelLabel: 'Modelo de AeroPress',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Dose de Café',
    doseUnitMetric: 'gramas',
    doseUnitImperial: 'oz',
    ratioLabel: 'Proporção de Extração',
    ratioPrefix: '1:',
    waterTempLabel: 'Temperatura da Água',
    waterTempUnit: '°C',
    grindLabel: 'Perfil de Moagem',
    grindFine: 'Fina',
    grindMediumFine: 'Média Fina',
    grindMedium: 'Média',
    grindCoarse: 'Grossa',
    resultsTitle: 'Distribuição de Água e Métricas',
    statTotalWater: 'Água Total',
    statChamberWater: 'Água na Câmara',
    statBypassWater: 'Água de Bypass',
    statYield: 'Rendimento na Xícara',
    statEstimatedTds: 'TDS Estimado',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Diluição Bypass Necessária',
    bypassAlertText: 'Sua receita requer {chamber} na câmara e {bypass} adicionados diretamente na xícara.',
    timerTitle: 'Cronômetro por Etapas',
    timerStart: 'Iniciar Cronômetro',
    timerPause: 'Pausar',
    timerReset: 'Reiniciar',
    phaseBloom: 'Pré-infusão e Hidratação',
    phasePour: 'Vertimento e Agitação',
    phaseSteep: 'Imersão e Infusão',
    phasePress: 'Prensagem Suave',
    phaseBypass: 'Adicionar Água Bypass',
    phaseComplete: 'Extração Pronta',
    guideTitle: 'Guia de Extração',
    guideStep1Title: 'Escaldar filtro e dosar',
    guideStep1Desc: 'Posicione o filtro de papel ou metal na tampa e escalde com água quente. Adicione o café moído na hora.',
    guideStep2Title: 'Adicionar água na câmara',
    guideStep2Desc: 'Despeje a água calculada na temperatura indicada e mexa suavemente para hidratar os grãos.',
    guideStep3Title: 'Encaixar êmbolo e aguardar',
    guideStep3Desc: 'Encaixe o êmbolo para formar vácuo e deixe infusionar pelo tempo programado.',
    guideStep4Title: 'Pressionar e diluir',
    guideStep4Desc: 'Pressione com força constante por 20 a 30 segundos. Pare ao ouvir o chiado e complete com água bypass se aplicável.',
    ratioStrengthLight: 'Leve e Delicado',
    ratioStrengthMedium: 'Xícara Equilibrada',
    ratioStrengthStrong: 'Encorpado e Marcante',
    ratioStrengthConcentrate: 'Concentrado Tipo Espresso',
    chamberWaterLabel: 'Água na Câmara',
    coffeeBedLabel: 'Cama de Café',
    airGapLabel: 'Câmara de Ar',
  },
  seo: [
    { type: 'title', text: 'Fundamentos de Extração e Proporções na AeroPress', level: 2 },
    {
      type: 'paragraph',
      html: 'A cafeteira <strong>AeroPress</strong> é uma das ferramentas mais versáteis no mundo dos cafés especiais, combinando imersão total com filtragem por pressão pneumática. Obter uma xícara doce e aromática exige o controle exato da proporção entre café e água.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Limites de Capacidade e Dinâmica do Bypass',
      html: 'A câmara de uma AeroPress padrão comporta cerca de 220ml a 240ml de água descontado o volume da cama de café. Para preparos maiores, baristas utilizam a técnica bypass para extrair sem transbordar.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Proporção Áurea Coado' },
        { value: '230 ml', label: 'Capacidade Padrão da Câmara' },
        { value: '1.2 a 1.5%', label: 'Faixa Ideal de TDS' },
      ],
    },
    { type: 'title', text: 'Comparativo entre Método Padrão e Invertido', level: 3 },
    {
      type: 'paragraph',
      html: 'A posição da cafeteira altera a dinâmica de fluxo e o controle do tempo de infusão.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Método Padrão Direto',
          description: 'A tampa com o filtro fica apoiada sobre a xícara. O encaixe do êmbolo cria um vácuo que estanca o fluxo inicial.',
          points: [
            'Manuseio simples e muito seguro',
            'Leve percolação passiva no começo',
            'Método preferido de James Hoffmann pela consistência',
          ],
        },
        {
          title: 'Método Invertido',
          description: 'A cafeteira fica de cabeça para baixo sobre o êmbolo, impedindo perdas de líquido até o momento de virar.',
          highlight: true,
          points: [
            'Controle total do tempo de infusão',
            'Excelente para concentrados e doses altas',
            'Exige cuidado ao virar a cafeteira aquecida',
          ],
        },
      ],
    },
    { type: 'title', text: 'Como Utilizar a Diluição Bypass para Porções Maiores', level: 3 },
    {
      type: 'paragraph',
      html: 'O bypass é o segredo de diversas receitas campeãs do World AeroPress Championship. Ao extrair os compostos desejados em uma proporção concentrada de 1:6 a 1:8, evitam-se notas adstringentes, e a adição posterior de água quente na xícara equilibra o sabor.',
    },
    {
      type: 'table',
      headers: ['Estilo de Receita', 'Dose Café', 'Água Câmara', 'Água Bypass', 'Moagem Recomendada'],
      rows: [
        ['Filtro Hoffmann', '11g', '200g', '0g', 'Média Fina (600µm)'],
        ['Tim Wendelboe Clara', '14g', '200g', '0g', 'Média (700µm)'],
        ['Campeonato WAC Bypass', '30g', '120g', '105g', 'Grossa (900µm)'],
        ['Alan Adler Concentrado', '17g', '80g', '100g Opcional', 'Fina (450µm)'],
        ['Flash Brew Gelado', '18g', '150g', '100g Gelo', 'Média Fina (550µm)'],
      ],
    },
    { type: 'title', text: 'Boas Práticas para uma Extração Perfeita', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Calibragem de temperatura:</strong> 92°C a 96°C para torras claras destacando frutas, e 80°C a 85°C para torras escuras.',
        '<strong>Prensagem suave e constante:</strong> Exerça pressão uniforme por 20 a 30 segundos para evitar canalizações.',
        '<strong>Escaldar o filtro:</strong> Lave o disco de papel com água quente para remover sabores de celulose.',
        '<strong>Interromper no chiado:</strong> Finalize a descida assim que o ar começar a escapar para poupar a bebida de óleos amargos.',
      ],
    },
    {
      type: 'summary',
      title: 'Resumo Prático',
      items: [
        'Ajuste a moagem conforme o tempo de imersão.',
        'Use o cálculo de bypass sempre que o rendimento superar o volume da câmara.',
        'Controle temperatura e tempo para obter resultados repetíveis com qualidade de cafeteria.',
      ],
    },
  ],
  faq,
  faqTitle: 'Perguntas Frequentes sobre Proporções e Receitas de AeroPress',
  bibliography,
  bibliographyTitle: 'Referências Técnicas e Ciência do Café',
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
