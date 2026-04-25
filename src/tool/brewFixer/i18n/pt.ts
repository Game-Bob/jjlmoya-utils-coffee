import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Ácido / Azedo',
    bitter: 'Amargo / Queimado',
    watery: 'Aquoso / Fraco',
    astringent: 'Adstringente / Seco',
  },
  causes: {
    acidic: ['Moagem muito grossa (sub-extração)', 'Temperatura da água muito baixa', 'Tempo de preparo muito curto', 'Café muito fresco (não desgaseificado)'],
    bitter: ['Moagem muito fina (super-extração)', 'Temperatura da água muito alta', 'Tempo de preparo muito longo', 'Café velho ou torra escura'],
    watery: ['Moagem muito grossa (extração fraca)', 'Ratio muito alto (muita água)', 'Tempo de preparo muito curto', 'Café muito velho o de baixa qualidade'],
    astringent: ['Problemas de qualidade da água (muitos minerais)', 'Super-extração combinada com conteúdo mineral', 'Moagem muito fina com água dura', 'Temperatura de preparo muito alta'],
  },
  solutions: {
    acidic: 'A água flui muito rápido através dos grãos grossos sem extrair o corpo. Uma moagem mais fina aumenta a superfície de contato e retarda o fluxo.',
    bitter: 'A água passou muito tempo extraindo — extraindo compostos amargos e cinzas. Uma moagem mais grossa reduz o tempo de contato e a intensidade da extração.',
    watery: 'Não há sólidos dissolvidos suficientes em sua xícara. Uma moagem mais fina ou o aumento da dose de café eleva a porcentagem de extração e o corpo.',
    astringent: 'A água rica em minerais super-extrai e se liga aos compostos do café, criando uma sensação de secura na boca. Uma moagem mais grossa reduz a super-extração, enquanto a filtragem melhora a qualidade da água.',
  },
  actions: {
    acidic: { text: 'Moer um pouco mais fino', textSevere: 'Moer muito mais fino', icon: 'mdi:chevron-left' },
    bitter: { text: 'Moer um poco mais grosso', textSevere: 'Moer muito mais grosso', icon: 'mdi:chevron-right' },
    watery: { text: 'Moer mais fino ou usar 5g a mais de café', textSevere: 'Moer muito mais fino ou usar 7g a mais de café', icon: 'mdi:plus-circle' },
    astringent: { text: 'Usar água filtrada e moer mais grosso', textSevere: 'Usar água filtrada e moer muito mais grosso', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Como sal fino', bitter: 'Como farinha', watery: 'Como cacau em pó', astringent: 'Farinha ligeiramente mais fina' },
    pourover: { acidic: 'Como sal de cozinha', bitter: 'Como areia grossa', watery: 'Como fubá fino', astringent: 'Areia fina' },
    aeropress: { acidic: 'Como fubá fino', bitter: 'Como sal de cozinha', watery: 'Como pimenta finamente moída', astringent: 'Areia média' },
    frenchpress: { acidic: 'Como farinha de rosca', bitter: 'Como sal grosso', watery: 'Como sal marinho', astringent: 'Areia grossa' },
    moka: { acidic: 'Como sal marinho fino', bitter: 'Como areia fina', watery: 'Como sal de cozinha', astringent: 'Areia média-fina' },
    coldbrew: { acidic: 'Como sal marinho grosso', bitter: 'Como cascalho', watery: 'Como sal grosso', astringent: 'Areia grossa com grãos' },
  },
  secondaryAction: 'Preparar a {temp}°C por {time}',
  tertiaryAction: 'Deixe o café esfriar até a temperatura ambiente antes de provar para captar todas as notas.',
};

const slug = 'diagnostico-extracao-cafe-brew-fixer';
const title = 'Diagnóstico de Extração de Café: The Brew Fixer';
const description =
  'Descubra por que o seu café sabe mal em segundos. Obtenha ajustes personalizados de moagem, temperatura e tempo com base no seu método e perfil de sabor.';

const faqData = [
  {
    question: 'Como sei se o meu café está subextraído ou sobre-extraído?',
    answer:
      'A subextração (sabor azedo/ácido) acontece quando a água passa demasiado rápido sem dissolver compostos suficientes. A sobre-extração (sabor amargo/queimado) significa que a água esteve demasiado tempo em contacto com o café. O Brew Fixer ajuda a identificar o que está a acontecer analisando as suas notas de sabor e método de preparação.',
  },
  {
    question: 'Qual é o erro mais comum ao preparar café?',
    answer:
      'O tamanho da moagem. A maioria das pessoas mói ou demasiado grosso (café fraco e azedo) ou demasiado fino (café amargo e sobre-extraído). Ajustar o seu moinho para o tamanho exato do seu método é a mudança com maior impacto que pode fazer.',
  },
  {
    question: 'A temperatura importa assim tanto?',
    answer:
      'Sim. A temperatura da água controla a velocidade de extração. Se estiver muito fria, subextrai (azedo). Se estiver muito quente, sobre-extrai (amargo). Cada método tem o seu intervalo ideal: filtrados tipo V60 preferem 92-96°C, enquanto a prensa francesa funciona melhor a 85-90°C para evitar a sobre-extração na infusão longa.',
  },
  {
    question: 'Porque é que o meu café é adstringente ou me deixa a boca seca?',
    answer:
      'A adstringência costuma dever-se a água com muitos minerais ou a uma combinação de sobre-extração e minerais. Tente usar água filtrada e uma moagem ligeiramente mais grossa. Se isso não ajudar, o TDS (total de sólidos dissolvidos) da sua água pode ser muito alto.',
  },
  {
    question: 'Posso corrigir uma má chávena ajustando apenas temperatura e tempo?',
    answer:
      'A temperatura e o tempo ajudam, mas o tamanho da moagem costuma ser a raiz do problema. Se a moagem for demasiado grossa, preparar por mais tempo ou com água mais quente ajudará pouco. O Brew Fixer recomendará sempre o ajuste da moagem como ação principal.',
  },
  {
    question: 'Devo usar a mesma receita para todos os meus cafés?',
    answer:
      'Não. O café muito fresco (1-5 dias de torra) extrai-se mais rápido e pode precisar de uma moagem mais grossa que um café mais velho. Torras claras são mais densas e pedem moagens mais finas; torras escuras são mais porosas e preferem moagens mais grossas.',
  },
];

const howToData = [
  {
    name: 'Selecione o seu método de preparação',
    text: 'Escolha a cafeteira que usou: filtrado (pour-over), prensa francesa, Aeropress, cafeteira italiana (Moka), máquina de espresso ou cold brew. A ferramenta dará recomendações específicas.',
  },
  {
    name: 'Identifique o defeito de sabor dominante',
    text: 'Prove o seu café e selecione o sabor que mais se destaca: ácido (azedo), amargo (queimado), aquoso (fraco) ou adstringente (seco). Pode também escolher um sabor secundário.',
  },
  {
    name: 'Avalie a intensidade',
    text: 'Mova o cursor para indicar o quão forte é o defeito. "Leve" significa que mal se nota; "severo" significa que domina a chávena. Isto ajuda a calibrar a agressividade do ajuste.',
  },
  {
    name: 'Execute o diagnóstico',
    text: 'Clique no botão "Diagnosticar" e a ferramenta analisará os seus dados para dar uma ação principal (moagem), ações secundárias (temperatura e tempo) e uma referência de textura.',
  },
  {
    name: 'Ajuste e teste',
    text: 'Aplique a mudança recomendada na sua preparação (ex: moer mais grosso, extrair mais tempo). Prepare uma nova chávena e prove. Pequenos ajustes acumulam-se.',
  },
  {
    name: 'Dê-nos a sua opinião',
    text: 'Quando preparar a próxima chávena, indique se melhorou. Se sim, verá uma animação de confetis! Caso contrário, volte atrás e teste parâmetros diferentes.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes sobre Extração de Café',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas e Ciência do Café',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Guias de Extração',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Scott Rao: The Coffee Roaster\'s Companion',
      url: 'https://www.roastscience.com/',
    },
    {
      name: 'Barista Hustle: Guia de Extração de Espresso',
      url: 'https://www.baristahustle.com/blog/extraction-the-espresso-compass/',
    },
    {
      name: 'Perfect Daily Grind: Compreender a Extração do Café',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
    {
      name: 'Matt Perger: Articular Notas de Sabor no Café',
      url: 'https://www.baristahustle.com/blog/cupping-tasting-notes/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Porque é que o seu café sabe mal? Guia de Diagnóstico de Extração',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A diferença entre um espresso excecional e uma chávena que sabe a papel queimado resume-se a um único conceito: <strong>extração de café</strong>. A extração é o processo pelo qual a água dissolve os compostos solúveis do café moído. Acerte e desbloqueará complexidade, doçura e clareza. Erre e terá acidez, amargor ou um café aguado.',
    },
    {
      type: 'summary',
      title: 'O que aprenderá com o Brew Fixer',
      items: [
        '<strong>Como diagnosticar defeitos de extração:</strong> Identifique se o seu café está subextraído, sobre-extraído, fraco ou se tem problemas com a qualidade da água.',
        '<strong>As três alavancas da extração:</strong> Tamanho da moagem, temperatura da água e tempo de contacto. Qual deve ajustar primeiro? O Brew Fixer diz-lhe.',
        '<strong>Recomendações por método:</strong> A moagem ideal para uma V60 é diferente da moagem para uma prensa francesa. Obtenha conselhos personalizados.',
        '<strong>Referências de textura:</strong> Saiba exatamente que ponto de moagem procurar comparando com materiais familiares (pó fino, sal marinho, areia).',
      ],
    },
    {
      type: 'title',
      text: 'As Três Dimensões da Extração de Café',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A percentagem de extração é a massa de sólidos dissolvidos dividida pela massa do café seco original. O café de especialidade procura uma <strong>extração de 18-20%</strong>. Valores inferiores soam azedos; superiores soam amargos.',
    },
    {
      type: 'list',
      items: [
        '<strong>O tamanho da moagem</strong> controla a área de superfície. Moagens finas extraem mais rápido porque a água tem mais superfície para dissolver compostos.',
        '<strong>A temperatura da água</strong> controla a velocidade de dissolução. Água quente (94-96°C) extrai mais rápido que água mais fria (85-90°C).',
        '<strong>O tempo de contacto</strong> é quanto tempo a água está com o café. Filtrados (2:30-3:30 min), prensa francesa (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Como Diagnosticar um Café Azedo (Subextração)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O café azedo sabe a limão ou maçã verde: é ácido e pungente. Significa que a água não passou tempo suficiente a extrair sólidos. A solução é quase sempre <strong>moer mais fino</strong> para aumentar a superfície e travar a água.',
    },
    {
      type: 'list',
      items: [
        'Moa o café mais fino (reduza o tamanho da moagem em 5-10 µm)',
        'Ou prolongue ligeiramente o tempo de preparação (adicione 15-30 segundos)',
        'Ou aumente a temperatura da água para 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Como Diagnosticar um Café Amargo (Sobre-extração)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O café amargo sabe a queimado, cinza ou madeira. Significa que a água passou demasiado tempo a extrair compostos, além dos desejáveis. A solução é <strong>moer mais grosso</strong> para aumentar o fluxo de água e reduzir o tempo de contacto.',
    },
    {
      type: 'list',
      items: [
        'Moa o café mais grosso (aumente o tamanho da moagem em 5-10 µm)',
        'Ou reduza o tempo de preparação (retire 15-30 segundos)',
        'Ou baixe a temperatura da água para 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Como Diagnosticar um Café Aquoso (Fraco, Ligeiro)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um café fraco carece de sabor e corpo. Costuma significar que a sua moagem é muito grossa, o seu rácio é alto (muita água para pouco café) ou o café está velho. Ajustar o moinho é a solução mais rápida.',
    },
    {
      type: 'list',
      items: [
        'Use uma moagem mais fina para que a água tenha mais superfície de extração',
        'Use mais café (aumente o rácio)',
        'Extraia um pouco mais de tempo ou a maior temperatura',
      ],
    },
    {
      type: 'title',
      text: 'Como Diagnosticar um Café Adstringente (Seco, Sabor Mineral)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A adstringência sente-se como secura na boca, como se tivesse mordido a pele de uma uva. Costuma dever-se a água dura (alto teor mineral) com sobre-extração. Requer tanto ajuste de moagem <em>como</em> melhoria da qualidade da água.',
    },
    {
      type: 'list',
      items: [
        'Use água filtrada para reduzir minerais (objetivo TDS 60-150 ppm)',
        'Moa mais grosso para reduzir a sobre-extração',
        'Tente com água ligeiramente mais fria (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Tabela de Moagem: Como se vê e sente cada ponto?',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nome da Moagem', 'Tamanho da Partícula', 'Referência de Textura', 'Melhores Métodos'],
      rows: [
        ['Extra Fina', '5-15 µm', 'Pó fino, cacau', 'Espresso, Cafeteira Turca'],
        ['Fina', '15-30 µm', 'Açúcar em pó', 'Moka, Aeropress'],
        ['Média-Fina', '30-50 µm', 'Areia fina, sal de mesa', 'V60, Chemex, Filtrados'],
        ['Média', '50-70 µm', 'Areia de praia', 'Máquinas de gotejo, Filtros planos'],
        ['Grossa', '70-90 µm', 'Areia grossa, sal grosso', 'Prensa Francesa, Prova'],
        ['Extra Grossa', '90+ µm', 'Pimenta em grão, pão ralado', 'Cold Brew, Percolador'],
      ],
    },
    {
      type: 'title',
      text: 'Qualidade da Água: O TDS e o seu Efeito na Extração',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O Total de Sólidos Dissolvidos (TDS) mede o conteúdo mineral da água. A água da torneira varia muito: cidades com 50 ppm (água macia) e outras com 300+ ppm (água dura). A extração de café é muito sensível a isto.',
    },
    {
      type: 'list',
      items: [
        '<strong>Muito macia (0-50 ppm):</strong> A água sobre-extrai, o café sabe a salgado e plano.',
        '<strong>Ideal (60-150 ppm):</strong> Extração doce, equilibrada e com corpo.',
        '<strong>Muito dura (200+ ppm):</strong> Os minerais ligam-se aos compostos do café, criando adstringência.',
      ],
    },
    {
      type: 'tip',
      title: 'Truque rápido para a água',
      html: '<p>Se suspeita que a sua água é dura, tente preparar café com água filtrada ou engarrafada para comparar. Se o café souber melhor de imediato, encontrou o culpado. Invista num jarro filtrante ou num filtro doméstico.</p>',
    },
  ],
  ui: {
    methodLabel: 'O que está a preparar?',
    methodPourover: 'Filtrado / Pour Over',
    methodFrenchpress: 'Prensa Francesa',
    methodAeropress: 'Aeropress',
    methodMoka: 'Cafeteira Italiana',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Selecione a sua cafeteira',
    flavorLabel: 'Qual é o sabor?',
    flavorAcidic: 'Ácido / Azedo',
    flavorBitter: 'Amargo',
    flavorWatery: 'Aquoso / Fraco',
    flavorAstringent: 'Adstringente / Seco',
    flavorHint: 'Escolha até 2 sabores',
    severityLabel: 'Quão forte é o problema?',
    severitySlightLabel: 'Mal se nota',
    severityModerateLabel: 'Moderado',
    severitySevereLabel: 'Dominante',
    diagnoseBtn: 'Diagnosticar o meu café',
    resetBtn: 'Reiniciar',
    resultTitle: 'Diagnóstico Concluído',
    resultExplanation: 'O que se passa na sua chávena',
    actionMainLabel: 'Ação Principal',
    actionSecondaryLabel: 'Temperatura e Tempo',
    actionTertiaryLabel: 'Dica Pro',
    textureReferenceLabel: 'Referência de Textura',
    improvementHint: 'Faça o ajuste e prepare outra chávena.',
    copyDiagnosisBtn: 'Copiar Diagnóstico',
    feedbackLabel: 'O seu café melhorou?',
    feedbackSuccessTemplate: 'Espetacular! O ajuste funcionou.',
    methodPouroverDesc: 'V60, Chemex, Gotejador',
    methodFrenchpressDesc: 'Prensa, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Moka, Cafeteira de fogo',
    methodEspressoDesc: 'Máquina de espresso, alavanca',
    methodColdbrewDesc: 'Imersão, a frio',
    fadeOutMessage: 'Bom trabalho! Continue a ajustar.',
    backBtn: 'Voltar',
    mainIssueLabel: 'Problema Principal',
    improvedBtn: 'Melhorou',
    notYetBtn: 'Ainda não',
    copiedBtn: 'Copiado!',
    combinedLabel: 'Combinado',
    diagnosisTitle: 'Diagnóstico do The Brew Fixer',
    issueLabel: 'Problema',
    causeLabel: 'Causa',
    actionLabel: 'Ação',
    whyLabel: 'Porquê',
    nextLabel: 'Seguinte',
  },
};
