import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';

const slug = 'timer-preparo-cafe';
const title = 'Cronômetro para Preparo de Café';
const description =
  'Cronômetro profissional para cafés especiais com fases de despejo, alertas de áudio rítmicos e resumo de extração. Otimizado para V60, Chemex e Aeropress.';

const faqData = [
  {
    question: 'Por que usar este cronômetro em vez do meu celular?',
    answer:
      'Este cronômetro foi projetado especificamente para café. Ele inclui fases visuais (Bloom, Despejo, Drenagem), alertas de áudio 3 segundos antes de cada transição e permite que você configure sua receita completa para nunca perder o ritmo durante o despejo.',
  },
  {
    question: 'O que é o tempo de bloom?',
    answer:
      'É a pré-infusão inicial (geralmente de 30 a 45 segundos) onde uma pequena quantidade de água é despejada para liberar o CO2. O cronômetro destaca esta fase em âmbar para que você saiba quando esperar e quando continuar despejando.',
  },
  {
    question: 'Como sei se meu tempo de extração está correto?',
    answer:
      'Para uma V60 padrão, o tempo total deve estar entre 2:30 e 3:15 minutos. Se terminar antes, sua moagem está muito grossa. Se demorar mais, está muito fina. O cronômetro permite que você diagnostique este processo com precisão.',
  },
  {
    question: 'Possui alertas de áudio?',
    answer:
      'Sim. O sistema emite um bipe curto antes do término da fase de bloom e no final do processo, permitindo que você se concentre no fluxo de água sem precisar olhar constantemente para a tela.',
  },
  {
    question: 'É compatível com Chemex?',
    answer:
      'Com certeza. Você pode ajustar o tempo total para 4:30 ou 5:00 minutos (típico para Chemex devido ao seu filtro espesso) na seção de configurações na parte inferior.',
  },
  {
    question: 'Funciona no celular?',
    answer:
      'Ele é otimizado para uso móvel, com botões grandes fáceis de pressionar mesmo com as mãos molhadas ou enquanto segura sua chaleira bico de ganso.',
  },
];

const howToData = [
  {
    name: 'Configure sua receita',
    text: 'Na seção inferior, ajuste a água total, a água de bloom, o tempo de bloom e o tempo total de acordo com seu método de preparo (V60, Chemex, Aeropress).',
  },
  {
    name: 'Pressione o botão Iniciar',
    text: 'Pressione o botão grande de Iniciar. O cronômetro começará e mostrará a fase ativa na barra de progresso no topo.',
  },
  {
    name: 'Fase de Bloom',
    text: 'Despeje a água de bloom (mostrada na tela) em espiral e espere o cronômetro avançar. Você receberá um alerta de áudio 3 segundos antes do término.',
  },
  {
    name: 'Fase de Despejo',
    text: 'Continue despejando o restante da água até atingir o peso total. Despeje em círculos lentos e constantes para uma extração uniforme.',
  },
  {
    name: 'Fase de Drenagem',
    text: 'Espere o café drenar completamente através do filtro. Esta fase encerra a extração e determina a clareza e o final de sua xícara.',
  },
  {
    name: 'Revise o resumo',
    text: 'Quando terminar, o cronômetro mostra o tempo total e a água despejada. Anote esses valores junto com suas impressões de sabor para refinar a receita.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes sobre o Cronômetro de Café',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas e Protocolos SCA',
  bibliography: [
    {
      name: 'Specialty Coffee Association: Brewing Best Practices',
      url: 'https://sca.coffee/research/protocols-best-practices',
    },
    {
      name: 'Barista Hustle: The Theory of Extraction',
      url: 'https://www.baristahustle.com/blog/the-theory-of-extraction/',
    },
    {
      name: 'World Brewers Cup: Competition Protocol',
      url: 'https://worldcoffeeevents.org/world-brewers-cup/',
    },
    {
      name: 'Perfect Daily Grind: How Brew Time Affects Coffee Flavor',
      url: 'https://perfectdailygrind.com/2019/04/how-brew-time-affects-your-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cronômetro para Café: A Ciência do Tempo de Extração (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No mundo dos cafés especiais, o <strong>tempo de contato</strong> entre a água e o café moído não é uma simples métrica de espera; é o fator cinético que decide quais compostos químicos terminam em sua xícara. Um segundo extra pode significar a mudança da doçura do caramelo para o amargor das cinzas. Nossa ferramenta profissional para V60, Chemex e Aeropress atua como um <strong>assistente de ritmo</strong>, tornando a precisão de nível barista acessível em casa.',
    },
    {
      type: 'summary',
      title: 'Por que um cronômetro especializado é vital',
      items: [
        '<strong>Controle Cinético:</strong> A taxa na qual a água dissolve os sólidos do café é constante. O tempo é o seu freio e acelerador.',
        '<strong>Fases de Despejo:</strong> O café não extrai linearmente. Dividir o tempo em Bloom, Despejo e Drenagem é fundamental.',
        '<strong>Reprodutibilidade:</strong> Se você não medir o tempo, não poderá repetir suas melhores xícaras. A consistência é a base da qualidade.',
        '<strong>Ajuste de Moagem:</strong> O tempo final indica se você deve moer mais fino ou mais grosso na próxima vez.',
      ],
    },
    {
      type: 'title',
      text: 'A Linha do Tempo da Extração: O que acontece a cada segundo?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando a água quente toca o café, começa uma corrida de obstáculos molecular. Nem todos os sabores extraem ao mesmo tempo. Compreender essa linha do tempo é a diferença entre um entusiasta amador e um barista profissional:',
    },
    {
      type: 'list',
      items: [
        '<strong>Segundos 0 a 45 (Bloom):</strong> Esta é a fase de desgaseificação. O CO2 retido durante a torra bloqueia a entrada de água. Esperar aqui permite que o grão se abra, preparando o caminho para uma extração uniforme.',
        '<strong>Segundos 45 a 120 (Extração de Ácidos e Açúcares):</strong> A água flui e dissolve sais minerais, ácidos orgânicos e açúcares complexos. Este é o coração do sabor.',
        '<strong>Segundos 120 a 210 (Corpo e Finalização):</strong> Fibras mais pesadas e compostos amargos são extraídos. Se esta fase durar muito, o café torna-se adstringente.',
      ],
    },
    {
      type: 'title',
      text: 'A Fase de Bloom: Por que 30 segundos é o padrão',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O <strong>Bloom</strong> ou pré-infusão é quando despejamos aproximadamente o dobro do peso do café em água. Estes 30 segundos iniciais servem para expelir o dióxido de carbono. Sem respeitar esse tempo, o gás empurra a água para fora, criando caminhos por onde o líquido passa sem tocar o café (canalização), resultando em uma xícara aguada e inconsistente.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Tempo Sugerido', 'Ação Técnica', 'Objetivo Químico'],
      rows: [
        ['Bloom', '30 a 45 seg', 'Despeje 2x o peso do café', 'Desgaseificação (CO2)'],
        ['Primeiro Despejo', '45 a 90 seg', 'Círculos lentos', 'Extração ácida e doce'],
        ['Segundo Despejo', '90 a 150 seg', 'Despejo central suave', 'Equilíbrio e corpo'],
        ['Drawdown', 'Até o fim', 'Gotejamento constante', 'Clareza e finalização'],
      ],
    },
    {
      type: 'title',
      text: 'Impacto do Tempo na Moagem: O Ciclo de Feedback',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O cronômetro é sua melhor ferramenta de diagnóstico para o moedor. Se sua receita de V60 deve levar 3:00 minutos e a água drenou completamente em 2:15, o café provavelmente terá um gosto ácido e fraco (subextração). A solução não é despejar mais devagar, mas sim <strong>moer mais fino</strong> para que as partículas resistam mais à água.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Tempo V60 Ideal', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Tempo Chemex Ideal', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Tempo Aeropress Ideal', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Alertas de Ritmo: Por que o assistente de áudio é essencial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Preparar café filtrado exige atenção visual constante à sua balança e padrão de despejo. Nosso cronômetro inclui <strong>alertas de áudio de proximidade</strong> que sinalizam 3 segundos antes de você começar o próximo despejo ou quando o bloom termina. É a diferença entre uma extração fluida e uma cheia de interrupções.',
    },
    {
      type: 'tip',
      title: 'Dica de Barista de Competição',
      html: '<p>Mantenha o fluxo de água o mais baixo e próximo possível do leito de café. Despejar de uma grande altura introduz oxigênio e agitação excessiva, que pode sobre-extrair o café e resfriar a água muito rapidamente. Use o cronômetro para manter um ritmo circular constante de cerca de 5 a 7 gramas de água por segundo.</p>',
    },
    {
      type: 'title',
      text: 'Termodinâmica e Tempo: A Variável Temperatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O tempo influencia a temperatura do sistema. Uma extração que dure 6 minutos perderá muita energia térmica, resultando em uma xícara desequilibrada. As faixas de tempo ideais mantêm a água entre 90°C e 96°C durante toda a extração.',
    },
    {
      type: 'title',
      text: 'Tempo para Iced Coffee com Técnica Flash Brew',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ao preparar café sobre gelo, o tempo deve ser mais agressivo. Usando menos água quente (60% do total), o tempo de contato é reduzido. Para compensar, use uma moagem um pouco mais fina para manter o tempo de extração entre 2:30 e 3:00 minutos.',
    },
    {
      type: 'title',
      text: 'Resumo Pós-Extração: Aprendizado Contínuo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao final de cada preparo, nossa ferramenta mostra o tempo total de contato. Anote esse valor junto com suas impressões de sabor. Está com gosto amargo? Da próxima vez mire em um tempo 15 segundos mais curto. Está metálico ou ácido? Mire em 20 segundos mais. O cronômetro não faz o café para você, mas fornece os dados para você ser o artista.',
    },
  ],
  ui: {
    readyText: 'Pronto para começar',
    startBtn: 'INICIAR EXTRAÇÃO',
    pauseBtn: 'PAUSAR',
    resumeBtn: 'RETOMAR',
    resetBtn: 'REINICIAR',
    newBrewBtn: 'NOVO PREPARO',
    targetLabel: 'Água Alvo:',
    instructionStart: 'Pressione o botão grande',
    hintStart: 'Prepare sua V60 ou Chemex',
    phase1Label: 'Fase 1: Bloom',
    phase2Label: 'Fase 2: Despejo',
    phase3Label: 'Fase 3: Drenagem',
    instructionBloom: 'Despeje {bloomWater}g de água',
    hintBloom: 'Gire suavemente para saturar',
    instructionPour: 'Atingir {waterTotal}g no total',
    hintPour: 'Despeje em círculos constantes',
    instructionDrain: 'Aguarde a drenagem final',
    hintDrain: 'Quase pronto para saborear',
    summaryTitle: 'Extração completa!',
    summaryMessage: 'Seu café está pronto para servir.',
    statTimeLabel: 'Tempo Total',
    statWaterLabel: 'Água Despejada',
    setupTitle: 'Configurações da receita',
    labelWater: 'Água Total (g)',
    labelBloomWater: 'Água de Bloom (g)',
    labelBloomTime: 'Tempo de Bloom (s)',
    labelTotalTime: 'Tempo Total (s)',
  },
};
