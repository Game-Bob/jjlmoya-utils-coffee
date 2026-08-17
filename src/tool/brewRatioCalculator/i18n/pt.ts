import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

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
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
