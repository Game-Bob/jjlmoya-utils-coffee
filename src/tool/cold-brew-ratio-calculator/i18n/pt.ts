import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-proporcao-cafe-cold-brew';
const title = 'Calculadora de proporção para café cold brew';
const description = 'Calcule café, água de preparo, diluição do concentrado, tempo de infusão e rendimento servido para cold brew em unidades métricas ou imperiais.';

const faqData = [
  { question: 'Qual proporção de café e água devo usar no cold brew?', answer: 'Comece com 1:8 para um cold brew pronto para beber ou 1:5 para um concentrado que será diluído. A melhor proporção depende do café, da moagem, do tempo e da forma de servir.' },
  { question: 'Quanto café preciso para 1 litro de cold brew?', answer: 'Na proporção 1:8, use 125 gramas de café e 1.000 mililitros de água de preparo. A calculadora também estima a água retida pela borra.' },
  { question: 'Posso calcular cold brew em onças e onças fluidas?', answer: 'Sim. Escolha Imperial para ver o café em onças e a água em onças fluidas. O cálculo interno continua em gramas e mililitros.' },
  { question: 'Qual é a diferença entre cold brew pronto para beber e concentrado?', answer: 'O cold brew pronto para beber é preparado perto da força de serviço. O concentrado usa mais café por quantidade de água e depois é misturado com água ou leite.' },
  { question: 'Quanto tempo o cold brew deve ficar em infusão?', answer: 'Como ponto de partida, use de 12 a 18 horas em imersão completa na geladeira ou em um local fresco. Tempos mais longos podem aumentar o amargor e a adstringência.' },
  { question: 'A calculadora considera a água retida pela borra?', answer: 'Sim. Ela estima cerca de 2 mililitros de água retida por grama de café para calcular o rendimento. Filtro, moagem e tempo de drenagem alteram o valor real.' },
  { question: 'Esta calculadora é um guia de segurança alimentar?', answer: 'Não. Ela calcula apenas quantidades da receita. Use equipamentos limpos, refrigere a bebida quando necessário e siga as orientações atuais de armazenamento e serviço.' },
];

const howToData = [
  { name: 'Escolha o estilo de preparo', text: 'Selecione pronto para beber para servir diretamente ou concentrado se for adicionar água ou leite depois.' },
  { name: 'Defina a água de preparo', text: 'Informe a quantidade de água do recipiente. A calculadora ajusta a dose de café conforme o volume e a proporção escolhida.' },
  { name: 'Ajuste a proporção', text: 'Escolha um perfil ou mova o controle. Números menores produzem um café mais forte e números maiores um café mais leve.' },
  { name: 'Defina tempo e diluição', text: 'Use o tempo como referência. No modo concentrado, indique quanta água será adicionada para cada parte de café preparado.' },
  { name: 'Siga o cartão do lote', text: 'Use o fluxo e os passos para pesar o café, adicionar água, deixar em infusão, filtrar e diluir o rendimento servido estimado.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Proporção e planejamento de um lote de cold brew', level: 2 },
  { type: 'paragraph', html: 'O cold brew fica mais fácil de repetir quando massa de café, água, diluição e tempo de infusão são controlados separadamente. Esta calculadora transforma o estilo escolhido em uma receita pesada.' },
  { type: 'title', text: 'Escolha entre pronto para beber e concentrado', level: 2 },
  { type: 'paragraph', html: 'Uma receita pronta para beber é preparada perto da força de serviço. Um concentrado usa uma proporção mais intensa e recebe água depois da filtragem.' },
  { type: 'table', headers: ['Estilo', 'Proporção inicial', 'Diluição', 'Uso'], rows: [['Pronto para beber', '1:8', 'Nenhuma', 'Servir gelado ou com gelo'], ['Lote suave', '1:10', 'Nenhuma', 'Xícara leve para o dia a dia'], ['Concentrado', '1:5', '1:1', 'Misturar com água ou leite']] },
  { type: 'title', text: 'Como funciona o cálculo do cold brew', level: 2 },
  { type: 'list', items: ['A dose de café é a água de preparo dividida pela proporção escolhida.', 'O rendimento preparado é estimado subtraindo cerca de 2 mililitros de água retida por grama de café.', 'A diluição do concentrado parte do rendimento preparado para deixar claro o volume servido.'] },
  { type: 'title', text: 'Medidas métricas e imperiais para cold brew', level: 2 },
  { type: 'paragraph', html: 'Escolha gramas e mililitros para receitas métricas ou onças e onças fluidas para receitas imperiais. A relação entre massa e volume permanece consistente.' },
  { type: 'table', headers: ['Medida', 'Métrica', 'Imperial'], rows: [['Dose de café', 'g', 'oz'], ['Água e rendimento', 'ml', 'fl oz'], ['Proporção', '1 parte de café', '1 parte de café']] },
  { type: 'tip', title: 'Use o resultado como receita inicial', html: '<p>Origem, moagem, filtro, temperatura e drenagem alteram a extração e o rendimento. Prove o primeiro lote e mude uma variável por vez.</p>' },
  { type: 'title', text: 'Tempo de infusão e segurança alimentar', level: 2 },
  { type: 'paragraph', html: 'O controle de tempo ajuda a planejar a receita, mas não garante sabor ou segurança. Use equipamentos limpos e siga as orientações atuais para resfriamento, armazenamento e serviço.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Perguntas sobre cold brew', faq: faqData, bibliographyTitle: 'Referências de preparo', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Prepare seu lote', modeReady: 'Pronto para beber', modeReadyHint: 'Preparar e servir', modeConcentrate: 'Concentrado', modeConcentrateHint: 'Preparar e diluir', unitSystemLabel: 'Sistema de medidas', unitMetric: 'Métrico', unitImperial: 'Imperial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Comece com um perfil', presetClassic: 'Clássico 1:8', presetSmooth: 'Suave 1:10', presetConcentrate: 'Concentrado 1:5', presetCustom: 'Personalizado', brewWaterLabel: 'Água de preparo', brewWaterHint: 'Água para preparar', ratioLabel: 'Proporção café e água', ratioHint: 'Água por grama de café', dilutionLabel: 'Água de diluição', dilutionHint: 'Partes de água por parte de café preparado', steepLabel: 'Tempo de infusão', steepHint: 'Uma faixa de planejamento', hoursUnit: 'horas', resultTitle: 'Seu lote', resultBadgeReady: 'Pronto para beber', resultBadgeConcentrate: 'Concentrado', coffeeLabel: 'Café moído', brewWaterResultLabel: 'Água de preparo', retainedLabel: 'Retida pela borra', dilutionWaterLabel: 'Água de diluição', servedYieldLabel: 'Rendimento servido aproximado', ratioResultLabel: 'Proporção', steepResultLabel: 'Infusão', steepStatusShort: 'Infusão curta', steepStatusBalanced: 'Infusão equilibrada', steepStatusLong: 'Infusão longa', stageCaption: 'Um lote suave pronto para a geladeira', stageCaptionConcentrate: 'Um concentrado intenso esperando diluição', stepsTitle: 'Passos da receita', visualTitle: 'Fluxo do lote', visualBrewCaption: 'Preparar', visualFilterCaption: 'Filtrar', visualServeCaption: 'Servir', visualCoffeeDose: 'Dose de café', visualWaterInput: 'Água de preparo', visualRetained: 'Retida pela borra', visualServed: 'Rendimento preparado', visualDilution: 'Água de diluição', stepCoffee: 'Pese {coffee} {coffeeUnit} de café moído grosso.', stepWater: 'Adicione {water} {waterUnit} de água e sature totalmente a borra.', stepSteep: 'Cubra e deixe em infusão por cerca de {hours} horas.', stepDilute: 'Depois de filtrar, adicione {water} {waterUnit} de água de diluição.', stepServe: 'Resfrie e sirva aproximadamente {yield} {waterUnit}.', noteTitle: 'Uma estimativa útil', noteText: 'A borra retém água durante a filtragem. A quantidade é estimada; calibre o primeiro lote com seu filtro e sua técnica de drenagem.', copyRecipe: 'Copiar receita', copiedText: 'Receita copiada', resetText: 'Redefinir', copyTemplate: 'Receita de cold brew\nCafé: {coffee} {coffeeUnit}\nÁgua de preparo: {brewWater} {waterUnit}\nProporção: 1:{ratio}\nInfusão: {hours} horas\nÁgua de diluição: {dilutionWater} {waterUnit}\nRendimento servido aproximado: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Referências',
  },
};
