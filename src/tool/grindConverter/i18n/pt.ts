import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildGrindSeo } from '../../seoTranslations';

const slug = 'conversor-moagem-cafe';
const title = 'Conversor de Tamanho de Moagem de Café';
const description =
 'Tabela de moagem interativa com guia de cliques e níveis para ajustar seu moedor entre Espresso, V60, French Press e muito mais. Mapeamento técnico em mícrons para todos os métodos de extração.';

const faqData = [
 {
 question: 'Por que a mesma configuração de moagem não funciona para todos os cafés?',
 answer:
 'A densidade do grão varia de acordo com o nível de torra e a origem. Uma torra clara é normalmente mais densa e requer uma moagem mais fina para extrair adequadamente, enquanto uma torra escura é mais porosa e precisa de uma configuração mais grossa.',
 },
 {
 question: 'Como sei se devo moer mais fino ou mais grosso?',
 answer:
 'Deixe seu paladar guiar você: se o café estiver com um gosto amargo e seco, moa mais grosso para que a água flua mais rápido. Se estiver com um gosto ácido, salgado ou aguado, moa mais fino para aumentar a área da superfície de contato.',
 },
 {
 question: "O que é 'channeling' (canalização) e como a moagem o afeta?",
 answer:
 'A canalização ocorre quando a água encontra um caminho de menor resistência através do leito de café. Uma moagem irregular ou inapropriada para a pressão, especialmente no espresso, favorece este problema e arruína a extração.',
 },
 {
 question: 'Posso usar esta tabela com um moedor de lâminas?',
 answer:
 'Moedores de lâminas produzem partículas não uniformes, pó fino e pedaços grandes simultaneamente. Os valores em mícrons são indicativos, mas os resultados reais variarão significativamente em comparação com um moedor de mós.',
 },
 {
 question: 'O que significa a uniformidade do moedor na visualização?',
 answer:
 'A distribuição de partículas mostrada simula a uniformidade real de cada moedor. Um Comandante C40 com uniformidade de 0,95 produz partículas muito consistentes; um Hario Skerton com 0,40 mostra muito mais variação de tamanho.',
 },
 { question: 'Como ajustar a moagem ao sabor?', answer: 'Se o café estiver amargo ou seco, moa mais grosso. Se estiver ácido ou aguado, moa mais fino e altere apenas um parâmetro de cada vez.' },
].slice(0, 5);

const howToData = [
 {
 name: 'Selecione seu moedor',
 text: 'Escolha seu modelo na lista suspensa. O conversor mostrará os cliques ou níveis recomendados especificamente para o seu equipamento.',
 },
 {
 name: 'Selecione seu método de extração',
 text: 'Clique no ícone do método que você planeja usar. O painel de controle será atualizado com todos os parâmetros técnicos relevantes.',
 },
 {
 name: 'Interprete o indicador de mícrons',
 text: 'Use o valor em mícrons no gráfico de barras para entender o tamanho real da partícula. A referência tátil (sal fino, açúcar cristal...) ajuda você a calibrar visualmente.',
 },
 {
 name: 'Observe a simulação de partículas',
 text: 'A distribuição de pontos mostra a uniformidade típica do seu moedor. Um padrão mais homogêneo significa uma extração mais previsível e repetível.',
 },
 {
 name: 'Ajuste pelo gosto',
 text: 'Use o guia de diagnóstico na parte inferior como referência. Se o café estiver com gosto amargo, aumente alguns cliques para o grosso. Se estiver ácido, moa mais fino. Ajuste sempre um passo de cada vez.',
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

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Perguntas Frequentes sobre Tamanho de Moagem de Café',
 faq: faqData,
 bibliographyTitle: 'Referências sobre Moagem e Extração',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildGrindSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 step1Label: 'Passo 1: Seleção de Equipamento',
 step2Label: 'Passo 2: Método de Extração',
 gaugeLabel: 'Mapa Técnico de Partículas (μm)',
 distributionLabel: 'Distribuição Real de Partículas',
 refLabel: 'Referência',
 rangeMicrasLabel: 'Faixa μm',
 unitMicras: 'MÍCRONS ALVO (μm)',
 unitClicks: 'CLIQUES RECOMENDADOS',
 unitLevel: 'NÍVEL RECOMENDADO',
 suggestGrinderText: "Não viu seu moedor? Sugira-o",
 method0Name: 'Ibrik (Turco)',
 method0Ref: 'Talco / Farinha fina',
 method0Desc: 'Pó extra fino, quase como farinha. Essencial para a suspensão do café turco.',
 method1Name: 'Espresso',
 method1Ref: 'Sal fino',
 method1Desc: 'A extração sob alta pressão requer moagem muito fina para criar resistência.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Sal de cozinha',
 method2Desc: 'Pressão média ou imersão híbrida. Textura versátil e equilibrada.',
 method3Name: 'V60 / Filtro',
 method3Ref: 'Açúcar cristal',
 method3Desc: 'Métodos de despejo manual, o padrão para destacar doçura e acidez.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Areia grossa',
 method4Desc: 'Filtros espessos ou imersão curta. Requer fluxo constante e regular.',
 method5Name: 'French Press',
 method5Ref: 'Sal grosso',
 method5Desc: 'Imersão prolongada precisa de partículas grandes para filtrar através da malha metálica.',
 method6Name: 'Cold Brew',
 method6Ref: 'Grãos de pimenta',
 method6Desc: 'Extração a frio durante muitas horas requer a moagem mais grossa possível.',
 troubleIssue0: 'Gosto amargo, seco ou adstringente?',
 troubleSolution0:
 'Você está extraindo demais. Moa mais grosso para que a água flua mais rápido e extraia menos compostos amargos.',
 troubleAction0: 'Moer mais grosso',
 troubleIssue1: 'Gosto ácido, salgado ou aguado?',
 troubleSolution1:
 'Você está extraindo de menos. Moa mais fino para aumentar a superfície de contato e extrair mais açúcares e corpo.',
 troubleAction1: 'Moer mais fino',
 },
};
