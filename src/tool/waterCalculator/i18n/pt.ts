import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

const slug = 'sca-calculadora-agua-cafe';
const title = 'Calculadora de Água para Café SCA';
const description =
  'Calcule concentrações minerais exatas para café especial. Perfis SCA, Barista Hustle e Hendon. Controle Magnésio, Cálcio e Bicarbonato para maximizar o sabor e proteger sua máquina.';

const faqData = [
  {
    question: 'Qual é o padrão de qualidade da água da SCA?',
    answer:
      'A Specialty Coffee Association define um padrão técnico para a água de infusão, especificando intervalos ideais para dureza total (GH), alcalinidade (KH), pH e sódio para alcançar uma extração equilibrada que realça o sabor sem danificar o equipamento.',
  },
  {
    question: 'Por que não usar apenas água da torneira?',
    answer:
      'A água da torneira varia significativamente por localização e época do ano. Pode conter cloro, excesso de calcário ou níveis minerais que mascaram os sabores do café especial e danificam caldeiras e juntas. Mineralizar água destilada oferece controle total e resultados repetíveis.',
  },
  {
    question: 'Onde consigo os sais minerais?',
    answer:
      'Sais de Epsom (sulfato de magnésio) e bicarbonato de sódio estão disponíveis em farmácias e supermercados. O cloreto de cálcio é comum em lojas de suprimentos para fabricação de cerveja caseira. Certifique-se sempre de que são de qualidade alimentar.',
  },
  {
    question: 'É seguro para minha máquina de café expresso?',
    answer:
      'A calculadora inclui um indicador de risco em tempo real. Água muito pura corrói componentes metálicos; água muito dura causa acúmulo de calcário. Os perfis SCA Ideal e Barista Hustle são projetados para equilibrar a longevidade do equipamento com a qualidade do sabor.',
  },
  {
    question: 'Qual é a diferença entre Magnésio e Cálcio no café?',
    answer:
      'O magnésio extrai compostos de sabor frutado e doce de forma mais eficiente e é o mineral preferido para métodos de filtro. O cálcio proporciona mais corpo e textura sedosa, mas tem uma maior tendência a formar depósitos de calcário nas caldeiras ao longo do tempo.',
  },
];

const howToData = [
  {
    name: 'Obtenha água base pura',
    text: 'Compre água destilada ou desmineralizada, ou use um sistema de osmose reversa. O objetivo é começar com 0 ppm de sólidos totais dissolvidos para um controle completo sobre a mineralização.',
  },
  {
    name: 'Prepare suas garrafas de concentrado estoque',
    text: 'Dissolva cada sal separadamente em 100ml de água destilada: 2,46g de sal de Epsom para o Magnésio, 1,47g de CaCl2 para o Cálcio e 1,68g de bicarbonato para o Buffer.',
  },
  {
    name: 'Selecione seu perfil de destino',
    text: 'Escolha SCA Ideal (equilibrado), Barista Hustle (doçura e brilho), Hendon (corpo), Melbourne (delicado) ou crie um perfil personalizado com seus próprios valores de GH e KH.',
  },
  {
    name: 'Insira o volume final',
    text: 'Digite a quantidade de água que deseja mineralizar em litros. A calculadora ajusta automaticamente as doses de concentrado para esse volume exato.',
  },
  {
    name: 'Adicione concentrados e complete com água destilada',
    text: 'Usando uma seringa de precisão, adicione os mililitros indicados de cada concentrado ao seu recipiente e preencha até o volume total com água destilada.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes sobre a Calculadora de Água para Café SCA',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas e Padrões SCA',
  bibliography: [
    {
      name: 'Padrão de Qualidade da Água SCA',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY Water Recipes Redux',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: 'The Science of Coffee Water (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: Química da Água e Café',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Química da Água para Café: Por que o H₂O é o ingrediente mais ignorado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O café é 98-99% água. No entanto, a composição mineral dessa água é o fator de qualidade mais ignorado em toda a cadeia de café especial. O mesmo café etíope de origem única extraído com água da torneira de Londres versus água otimizada pela SCA pode parecer dois cafés completamente diferentes. Nossa <strong>calculadora de água para café SCA</strong> permite que você formule a água de infusão perfeita do zero usando sais minerais comuns e água destilada.',
    },
    {
      type: 'summary',
      title: 'Por que a mineralização da água importa tanto?',
      items: [
        '<strong>GH (Dureza Geral):</strong> A soma dos íons de Magnésio e Cálcio determina a capacidade da água de dissolver compostos de sabor de café.',
        '<strong>KH (Dureza de Carbonatos):</strong> A concentração de bicarbonato controla o pH durante a extração. Um KH baixo produz café ácido; um KH alto o torna sem brilho.',
        '<strong>Repetibilidade:</strong> A água municipal muda por estação e localização. A água mineralizada é constante e reprodutível lote após lote.',
        '<strong>Proteção do equipamento:</strong> Níveis minerais corretos evitam tanto a corrosão (água muito pura) quanto o acúmulo de calcário (água muito dura).',
      ],
    },
    {
      type: 'title',
      text: 'O Padrão SCA: Limites técnicos para a água de infusão perfeita',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parâmetro', 'Mínimo', 'SCA Ideal', 'Máximo'],
      rows: [
        ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Alcalinidade (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnésio vs Cálcio: A batalha mineral que define sua xícara',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nem todos os minerais se comportam da mesma maneira com o café. O pesquisador Christopher Hendon demonstrou que o <strong>magnésio</strong> forma ligações com moléculas de sabor voláteis complexas, extraindo notas frutadas e florais de forma mais eficiente. O <strong>cálcio</strong> extrai compostos mais pesados, proporcionando corpo e sensação sedosa na boca, mas com menos brilho aromático.',
    },
    {
      type: 'tip',
      title: 'Regra prática do barista profissional',
      html: '<p>Para máquinas de café expresso com caldeiras de latão ou cobre, nunca use perfis com KH abaixo de 40 mg/L continuamente. Água muito pura é corrosiva a longo prazo. Para métodos de filtro (V60, Chemex, AeroPress), não há caldeira para proteger, então você pode usar perfis delicados como Melbourne sem preocupação.</p>',
    },
  ],
  ui: {
    sectionMixTitle: 'Configuração da Mistura',
    labelVolume: 'Volume Final',
    labelProfile: 'Perfil de Água de Destino',
    customProfileBtn: 'Personalizado',
    labelGH: 'GH de Destino',
    labelKH: 'KH de Destino',
    concentratesTitle: 'Garrafas de Concentrado Estoque (g/100ml)',
    saltMgName: 'Magnésio (Epsom)',
    saltCaName: 'Cálcio (CaCl2)',
    saltBufName: 'Bicarbonato (Sódio)',
    recipeTitle: 'Receita',
    labelMg: 'Magnésio:',
    labelCa: 'Cálcio:',
    labelBuffer: 'Bicarbonato:',
    labelDistilledWater: 'Água Destilada até',
    copyBtn: 'Copiar Receita',
    copiedText: 'Copiado!',
    safetyMetalsTitle: 'Segurança dos Metais',
    safetyScaleTitle: 'Risco de Calcário',
    calculatingText: 'Calculando...',
    glossaryTitle: 'Guia Mineral Rápido',
    profileSubTemplate: 'Destino: {gh} GH / {kh} KH',
    customProfileName: 'Personalizado',
    corrosionHigh: 'Perigo: Água muito agressiva. Pode corroer caldeiras e componentes de cobre.',
    corrosionMedium: 'Aceitável: Risco de corrosão moderado. Recomendado para métodos de filtro com cuidado em máquinas.',
    corrosionLow: 'Seguro: A água tem capacidade de buffer suficiente para proteger os metais.',
    scaleHigh: 'Perigo: Acúmulo iminente de calcário. Use apenas com métodos de filtro manuais.',
    scaleMedium: 'Cuidado: Pode gerar depósitos de calcário ao longo do tempo em máquinas de café expresso.',
    scaleLow: 'Seguro: Sem risco significativo de acúmulo de calcário.',
    copyTemplate:
      'Receita de Água para Café ({profileName}):\n- Volume: {liters}L\n- Concentrado de Magnésio: {mg}ml\n- Concentrado de Cálcio: {ca}ml\n- Concentrado de Bicarbonato: {buf}ml\n- Água Destilada: {water}ml',
    glossary0Term: 'Dureza Total (GH)',
    glossary0Desc:
      'A soma de Cálcio e Magnésio. O magnésio realça a doçura e complexidade; o Cálcio adiciona corpo e textura.',
    glossary1Term: 'Alcalinidade (KH)',
    glossary1Desc:
      'A capacidade da água de neutralizar ácidos. KH alto suprime a acidez do café; KH baixo o torna ácido.',
    glossary2Term: 'TDS (Sólidos Totais Dissolvidos)',
    glossary2Desc: 'Na água mineralizada, o TDS representa a concentração combinada de todos os sais minerais adicionados.',
    glossary3Term: 'Magnésio',
    glossary3Desc:
      'Extrai compostos de sabor frutado complexos de forma mais eficiente. O mineral preferido para infusão de café especial.',
  },
};
