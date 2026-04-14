import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

const slug = 'calculadora-proporcao-cafe';
const title = 'Calculadora de Proporção de Preparo de Café';
const description =
  'Calcule os gramas exatos de café ou mililitros de água para sua proporção ideal (1:15, 1:16...). Inclui resultado na xícara, guia de despejo, modo de café gelado e receitas salvas.';

const faqData = [
  {
    question: 'O que é uma proporção de café de 1:15?',
    answer:
      'Significa que para cada grama de café moído você usa 15 mililitros (ou gramas) de água. Com 20g de café, você despeja 300ml de água. É a proporção padrão recomendada pela Specialty Coffee Association para métodos de filtro como V60, Chemex ou Aeropress.',
  },
  {
    question: 'Por que há menos café na minha xícara do que eu despejei?',
    answer:
      'Porque o café moído retém água durante a extração. Em média, cada grama de café absorve cerca de 2ml de líquido. Se você despejar 300ml sobre 20g de café, obterá aproximadamente 260ml na xícara. Esta calculadora mostra o resultado real.',
  },
  {
    question: 'O que é bloom ou pré-infusão?',
    answer:
      'É o primeiro despejo de água, equivalente ao dobro do peso do café (2ml por grama). É feito para desgaseificar o café fresco: o CO2 preso durante a torra escapa e permite que a água extraia os compostos uniformemente. Se não houver um bloom visível, o café foi moído ou torrado há algum tempo.',
  },
  {
    question: 'Como fazer café gelado sem que fique aguado?',
    answer:
      'Use a técnica flash chilling: prepare 60% da água total como água quente a 90-96 graus e coloque os 40% restantes como gelo na jarra. Despeje o café quente diretamente sobre o gelo. O resfriamento rápido sela os aromas. Esta calculadora recalcula automaticamente as quantidades quando você ativa o modo Iced Coffee.',
  },
  {
    question: 'Qual é a melhor proporção para uma Aeropress?',
    answer:
      'Entre 1:12 e 1:15, dependendo do uso. Se você bebe café puro, 1:15 é equilibrado. Se você o usa como base para bebidas com leite ou quer alta concentração, baixe para 1:12 ou 1:13. A Aeropress é o método mais versátil precisamente porque lida muito bem com diferentes proporções.',
  },
  {
    question: 'Posso salvar minhas receitas favoritas?',
    answer:
      'Sim. Depois de encontrar a proporção e a quantidade perfeitas para o seu café favorito, pressione o botão Salvar receita, dê um nome a ela (ex: V60 da manhã) e ela será armazenada no seu navegador. Você pode recuperá-la a qualquer momento com um único clique.',
  },
];

const howToData = [
  {
    name: 'Escolha o modo de cálculo',
    text: 'Selecione se você está começando pelos gramas de café que tem ou pela capacidade da sua xícara (ml de água). A calculadora adapta todos os resultados ao modo escolhido.',
  },
  {
    name: 'Insira a quantidade',
    text: 'Digite os gramas de café ou os mililitros de água que você vai usar. A calculadora calculará automaticamente o outro valor com base na proporção selecionada.',
  },
  {
    name: 'Selecione a intensidade',
    text: 'Escolha entre Forte (1:12-14), Equilibrado (1:15-16), Leve (1:17-18) ou insira sua proporção personalizada. Cada opção corresponde a um perfil de sabor diferente.',
  },
  {
    name: 'Ative o modo Iced Coffee (opcional)',
    text: 'Se você estiver fazendo café gelado, ative o botão. A calculadora dividirá automaticamente a água entre água quente (60%) e gelo (40%) usando a técnica flash chilling.',
  },
  {
    name: 'Siga o guia de despejo',
    text: 'Use o guia de fases (Bloom e Despejo Final) para estruturar seu processo de preparo. Cada fase indica exatamente quanta água despejar e quando.',
  },
  {
    name: 'Salve a receita',
    text: 'Quando encontrar sua proporção perfeita, salve-a com um nome descritivo. Suas receitas são armazenadas no seu navegador para sessões futuras.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes sobre a Proporção de Preparo',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas e Padrões SCA',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Proporção de Café: O Guia Mestre para Extração Perfeita',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparar uma xícara de café especial não é um ato culinário subjetivo; é um experimento em <strong>química de fluidos</strong> e <strong>transferência de massa</strong>. No centro desse processo está o conceito de <strong>Brew Ratio</strong>, uma medida crítica que dita a relação quantitativa entre o soluto (café moído) e o solvente (água). Nossa calculadora integra os padrões da <em>Specialty Coffee Association (SCA)</em> e princípios de termodinâmica aplicada para permitir que baristas e entusiastas alcancem a reprodutibilidade perfeita em suas extrações.',
    },
    {
      type: 'summary',
      title: 'O que você aprenderá sobre Proporção de Café',
      items: [
        '<strong>Brew Ratio:</strong> Como a relação de peso entre café e água (ex: 1:15) determina a força potencial e o perfil sensorial da sua xícara.',
        '<strong>TDS e Extração:</strong> A ciência por trás dos sólidos dissolvidos e qual porcentagem do grão deve realmente terminar na sua bebida.',
        '<strong>Ajuste de Retenção:</strong> Por que o café absorve 2g de água por grama de pó e como calcular a água extra necessária.',
        '<strong>Métodos Específicos:</strong> As proporções ideais para V60, French Press, Espresso e receitas de café gelado flash brew.',
      ],
    },
    {
      type: 'title',
      text: 'O que é Brew Ratio e por que é a variável mais importante?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O café contém aproximadamente 30% de material solúvel, mas nem todo esse material é desejável ao paladar humano. A água, agindo como um solvente universal, extrai compostos em uma ordem específica com base em seu peso molecular e afinidade química. A proporção de café controla precisamente quanta capacidade de dissolução entregamos a cada grama de café.',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase Ácida (Lipídios e Ácidos Orgânicos):</strong> Estes se dissolvem primeiro devido à sua alta solubilidade. Contribuem com brilho, acidez málica ou cítrica e notas frutadas. Uma proporção muito baixa (subextração) interrompe o processo aqui, resultando em uma xícara ácida e salgada.',
        '<strong>Fase Doce (Açúcares e Carboidratos):</strong> Estes são extraídos a seguir. Geram equilíbrio, doçura e corpo. Esta é a "janela de ouro" onde o café atinge sua complexidade aromática máxima e equilíbrio estrutural.',
        '<strong>Fase Amarga (Fibras e Compostos Fenólicos):</strong> Estes são os mais lentos a se dissolverem. Com proporções excessivas (superextração), a água degrada as células do café, extraindo amargos secos, cinzas e notas amadeiradas.',
      ],
    },
    {
      type: 'title',
      text: 'Proporções recomendadas: Por métodos de extração',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada método de extração requer uma proporção específica devido a variáveis como tempo de contato, pressão da bomba ou tamanho do poro do filtro. A tabela técnica a seguir descreve os padrões da indústria para 2026:',
    },
    {
      type: 'table',
      headers: ['Método de Preparo', 'Proporção (Gramas/Água)', 'Perfil da Xícara', 'Tempo Alvo'],
      rows: [
        ['Espresso', '1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 seg'],
        ['V60 / Pour-Over', '1:15 a 1:16', 'Limpo, brilhante, notas claras', '2:30-3:30 min'],
        ['Aeropress', '1:12 a 1:15', 'Versátil, corpo médio-alto', '1:30-2:00 min'],
        ['French Press', '1:12 a 1:14', 'Texturizado, pesado, oleoso', '4:00-5:00 min'],
        ['Cold Brew', '1:8 a 1:12', 'Doce, baixa acidez, excelente corpo', '12-24 horas'],
      ],
    },
    {
      type: 'title',
      text: 'Calculando a água necessária: O Fator de Retenção do grão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um dos erros mais comuns no preparo manual é ignorar que o café moído é uma estrutura hidrofílica porosa que retém uma quantidade constante de água. Nem toda a água que você despeja vai parar na xícara.',
    },
    {
      type: 'paragraph',
      html: 'Cientificamente, o café moído retém aproximadamente <strong>2,0 gramas de água por 1,0 grama de café</strong>. Nossa calculadora introduz <strong>Ajuste Dinâmico de Retenção</strong>: se você precisar encher um recipiente específico de 300ml, o sistema deduz que você deve despejar 340ml de água para compensar a absorção pelo grão, mantendo a proporção de extração — e, portanto, o sabor — intactos.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Dose de Café', value: '20g', icon: 'mdi:coffee' },
        { label: 'Água Despejada', value: '300ml', icon: 'mdi:water' },
        { label: 'Retenção', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'Na Xícara', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'A importância do Bloom: Desgaseificação para extração uniforme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A fase de "Bloom" não é apenas estética; é uma necessidade física. Durante a torra, o café gera CO2 que fica preso em sua matriz celular. Se despejarmos toda a água continuamente, o gás escapa violentamente, criando microcanais (channeling) e impedindo o solvente de penetrar no centro das partículas de café.',
    },
    {
      type: 'tip',
      title: 'Técnica de Saturação Homogênea',
      html: '<p>Para um bloom perfeito, despeje exatamente o dobro do peso do café em água (proporção de bloom 1:2). Agite suavemente ou gire a jarra para garantir que todo o café esteja úmido. Espere 30-45 segundos. A liberação de gás permitirá que os despejos subsequentes fluam de maneira laminar, extraindo os sólidos uniformemente por todo o leito de café.</p>',
    },
    {
      type: 'title',
      text: 'Tutorial de Café Gelado: Como preparar café gelado sem diluir o sabor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O café gelado especial (Flash Brew) requer recalibração termodinâmica. O objetivo é extrair óleos voláteis a 94°C para capturar a complexidade aromática e depois resfriá-los rapidamente para evitar a oxidação e a perda de brilho.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% Água Quente:</strong> A quantidade mínima necessária para atingir 18-20% de extração sem superexextrair ou resfriar o leito cedo demais.',
        '<strong>40% Gelo Térmico:</strong> Colocado na jarra receptora. A energia térmica do café é transferida para o gelo (calor latente de fusão), resfriando a bebida abaixo de 5°C instantaneamente.',
        '<strong>Força Final:</strong> Combinadas, a proporção final (ex: 1:15) permanece exata, resultando em uma bebida gelada e vibrante com a concentração correta de sabor.',
      ],
    },
    {
      type: 'title',
      text: 'Tamanho da moagem e Proporção de Café: A chave para a área de superfície de contato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A proporção é apenas metade da equação. A moagem determina a <strong>Área de Superfície Exposta Total</strong> ao solvente. Partículas menores (moagem fina) têm mais área de superfície proporcional, o que acelera drasticamente a extração de compostos químicos.',
    },
    {
      type: 'title',
      text: 'Reprodutibilidade e Ciência: Transforme sua cozinha em um laboratório de barista',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A excelência no café especial vem da consistência métrica. Nosso recurso de <strong>Receitas Personalizadas</strong> permite que você crie um repositório técnico de suas calibrações bem-sucedidas. Não é apenas uma pasta de favoritos; é uma ferramenta de análise para comparar como o mesmo quilo de café reage a uma proporção de 1:15 versus 1:16, permitindo que você ajuste a receita com precisão.',
    },
  ],
  ui: {
    modeCoffee: 'Eu tenho o Café',
    modeHintCoffee: 'Diga-me quanta água',
    modeWater: 'Eu tenho a Água',
    modeHintWater: 'Diga-me quanto café moer',
    inputLabelCoffee: 'Gramas de café que você tem',
    inputLabelWater: 'Capacidade da sua xícara (ml)',
    intensityLabel: 'Intensidade do café',
    intensityStrong: 'Forte',
    intensityBalanced: 'Equilibrado',
    intensityLight: 'Leve',
    intensityCustom: 'Personalizado',
    customCoffeeLabel: 'Café',
    customWaterLabel: 'Água',
    icedModeLabel: 'Modo Café Gelado',
    recipeLabel: 'Sua receita exata',
    resultTitle: 'Resultado',
    resultCoffeeLabel: 'Café',
    resultCoffeeSub: 'Moagem fina-média',
    resultHotWaterLabel: 'Água quente',
    resultHotWaterSub: '90-96 °C',
    resultHotWaterIcedLabel: 'Água quente (60%)',
    resultIceLabel: 'Gelo',
    resultIceSub: 'Na jarra',
    resultCupLabel: 'Na sua xícara',
    resultCupSub: 'Café retém ~2ml/g',
    pouringGuideLabel: 'Guia de despejo',
    favoritesLabel: 'Minhas receitas favoritas',
    saveBtn: '+ Salvar esta receita',
    favEmptyText: 'Nenhuma receita salva ainda. Configure seu preparo perfeito e salve-o.',
    modalTitle: 'Nomeie sua receita',
    modalPlaceholder: 'Ex: "V60 da manhã"',
    modalCancel: 'Cancelar',
    modalConfirm: 'Salvar',
    phaseBloomTemplate: 'Bloom: Despeje {bloomMl} ml de água em espiral. Espere {bloomSeconds} segundos para desgaseificar o café.',
    phasePourTemplate: 'Despejo final: Adicione o restante para completar {hotWaterMl} ml em {pourCount} despejos lentos.',
    phaseIcedTemplate: 'Gelado: Despeje o café quente diretamente sobre os {iceMl} g de gelo na jarra.',
    cupWarningTemplate: 'A xícara recebe apenas {inCupMl} ml. O café retém líquido.',
    favModeCoffee: 'g café',
    favModeWater: 'ml água',
    favModeIced: ' - Gelo',
  },
};
