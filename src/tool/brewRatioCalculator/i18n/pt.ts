import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
 seo: [
 {
 type: 'title',
 text: 'Calculadora de Ratio de Café y Agua: La Guía Maestra para la Extracción Perfecta (2026)',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Preparar una taza de café de especialidad no es un acto culinario subjetivo; es un experimento de <strong>química de fluidos</strong> y <strong>transferencia de masa</strong>. En el centro de este proceso reside el concepto de <strong>Brew Ratio</strong> (proporción de infusión), una medida crítica que dicta la relación cuantitativa entre el soluto (café molido) y el disolvente (agua). Nuestra calculadora ha sido diseñada integrando los estándares de la <em>Specialty Coffee Association (SCA)</em> y principios de termodinámica aplicada para permitir que baristas y entusiastas alcancen la reproducibilidad perfecta en sus extracciones.',
 },
 {
 type: 'summary',
 title: 'Lo que aprenderás sobre el Ratio de Café',
 items: [
 '<strong>Brew Ratio:</strong> Cómo la relación en peso entre café y agua (ej. 1:15) determina la fuerza potencial y el perfil sensorial de tu taza.',
 '<strong>TDS y Extracción:</strong> La ciencia detrás de los sólidos disueltos y qué porcentaje del grano realmente debe terminar en tu bebida.',
 '<strong>Ajuste por Retención:</strong> Por qué el café absorbe 2g de agua por cada gramo de polvo y cómo calcular el agua extra necesaria.',
 '<strong>Métodos Específicos:</strong> Las proporciones ideales para V60, Prensa Francesa, Espresso y recetas de café helado (Flash Brew).',
 ],
 },
 {
 type: 'title',
 text: '¿Qué es el Brew Ratio y por qué es la variable más importante?',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café contiene aproximadamente un 30% de material soluble, pero no todo ese material es deseable para el paladar humano. El agua, actuando como disolvente universal, extrae los compuestos en un orden específico basado en su peso molecular y afinidad química. El ratio de café controla precisamente cuánta capacidad de disolución entregamos a cada gramo de café.',
 },
 {
 type: 'list',
 items: [
 '<strong>Fase Ácida (Lípidos y Ácidos Orgánicos):</strong> Son los primeros en disolverse debido a su alta solubilidad. Aportan brillo, acidez málica o cítrica y notas frutales. Un ratio demasiado bajo (sub-extracción) detiene el proceso aquí, resultando en una taza agria y salada.',
 '<strong>Fase Dulce (Azúcares y Carbohidratos):</strong> Se extraen a continuación. Generan balance, dulzor y cuerpo. Es la "ventana dorada" donde el café alcanza su máxima complejidad aromática y equilibrio estructural.',
 '<strong>Fase Amarga (Fibras y Compuestos Fenólicos):</strong> Son los más lentos en disolverse. Con ratios excesivos (sobre-extracción), el agua degrada las celdas del café, extrayendo amargos secantes, notas a ceniza y madera.',
 ],
 },
 {
 type: 'title',
 text: 'Ratios recomendados: Proporciones por métodos de extracción',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cada método de extracción requiere un ratio específico debido a variables como el tiempo de contacto, la presión de la bomba o el micraje del filtro utilizado. La siguiente tabla técnica desglosa los estándares de la industria para 2026:',
 },
 {
 type: 'table',
 headers: ['Método de Preparación', 'Ratio (Gramos/Agua)', 'Perfil en Taza', 'Tiempo Objetivo'],
 rows: [
 ['Espresso', '1:2 a 1:2.5', 'Intenso, viscoso, crema densa', '25-30 seg'],
 ['V60 / Pour-Over', '1:15 a 1:16', 'Limpio, brillante, notas claras', '2:30-3:30 min'],
 ['Aeropress', '1:12 a 1:15', 'Versátil, cuerpo medio-alto', '1:30-2:00 min'],
 ['French Press', '1:12 a 1:14', 'Texturizado, pesado, aceitoso', '4:00-5:00 min'],
 ['Cold Brew', '1:8 a 1:12', 'Dulce, baja acidez, gran cuerpo', '12-24 horas'],
 ],
 },
 {
 type: 'title',
 text: 'Cómo calcular el agua necesaria: El Factor de Retención del grano',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Uno de los errores más comunes en la preparación manual es ignorar que el café molido es una estructura hidrofílica porosa que retiene una cantidad constante de agua. No todo el agua que viertes termina en la taza.',
 },
 {
 type: 'paragraph',
 html: 'Científicamente, el café molido retiene aproximadamente <strong>2.0 gramos de agua por cada 1.0 gramo de café</strong>. Nuestra calculadora introduce el <strong>Ajuste Dinámico de Retención</strong>: si necesitas llenar un recipiente específico de 300ml, el sistema deduce que debes verter 340ml de agua para compensar la absorción del grano, manteniendo el ratio de extracción intacto.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Dosis Café', value: '20g', icon: 'mdi:coffee' },
 { label: 'Agua Vertida', value: '300ml', icon: 'mdi:water' },
 { label: 'Retención', value: '40ml', icon: 'mdi:minus-circle' },
 { label: 'En Taza Real', value: '260ml', icon: 'mdi:cup' },
 ],
 columns: 4,
 },
 {
 type: 'title',
 text: 'La importancia del Bloom: Desgasificación para una extracción uniforme',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La fase de "Bloom" (florecimiento) no es solo estética; es una necesidad física. Durante el tueste, el café genera CO2 que queda atrapado en su matriz celular. Si vertemos todo el agua de forma continua, el gas escapa violentamente, creando micro-canales (channeling) y evitando que el disolvente penetre en el centro de las partículas de café.',
 },
 {
 type: 'tip',
 title: 'Técnica de Saturación Homogénea',
 html: '<p>Para un bloom perfecto, vierte exactamente el doble del peso del café en agua (ratio 1:2 de bloom). Realiza una agitación suave o swirl para garantizar que todo el café esté húmedo. Espera 30-45 segundos. La liberación de gas permitirá que, en los vertidos posteriores, el agua fluya de forma laminar y extraiga los sólidos de manera uniforme por toda la cama de café.</p>',
 },
 {
 type: 'title',
 text: 'Tutorial Iced Coffee: Cómo preparar café con hielo sin diluir el sabor',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café helado de especialidad (Flash Brew) requiere un recalibrado termodinámico. El objetivo es extraer los aceites volátiles a 94°C para capturar la complejidad aromática, pero enfriarlos de golpe para evitar la oxidación y la pérdida de brillo.',
 },
 {
 type: 'list',
 items: [
 '<strong>60% Agua Caliente:</strong> Es la cantidad mínima necesaria para alcanzar una extracción del 18-20% sin sub-extraer en exceso ni enfriar el lecho demasiado pronto.',
 '<strong>40% Hielo Térmico:</strong> Se coloca en la jarra receptora. La energía térmica del café se transfiere al hielo (calor latente de fusión), enfriando la bebida a menos de 5°C instantáneamente.',
 '<strong>Fuerza Final:</strong> Al sumar ambos, el ratio final (ej. 1:15) se mantiene exacto, resultando en una bebida vibrante, fría y con la concentración de sabores correcta.',
 ],
 },
 {
 type: 'title',
 text: 'Grado de molienda y Ratio de café: La clave de la superficie de contacto',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El ratio es solo la mitad de la ecuación. La molienda determina el <strong>Área de Superficie Total Expuesta</strong> al disolvente. Partículas más pequeñas (molienda fina) tienen más superficie proporcional, lo que acelera dramáticamente la extracción de compuestos químicos.',
 },
 {
 type: 'paragraph',
 html: 'Si decides usar un ratio largo (1:17 o 1:18) para un café de tueste muy ligero, debes compensar con una molienda ligeramente más fina para asegurar que el agua tenga tiempo de extraer los azúcares antes de atravesar el filtro. Por el contrario, ratios cortos (1:12) en métodos de inmersión prolongada requieren moliendas gruesas para evitar la sobre-extracción.',
 },
 {
 type: 'title',
 text: 'Reproducibilidad y Ciencia: Convierte tu cocina en un laboratorio barista',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La excelencia en el café de especialidad nace de la consistencia métrica. Nuestra función de <strong>Recetas Personalizadas</strong> permite crear un repositorio técnico de tus calibraciones exitosas. No es solo un archivo de favoritos; es una herramienta de análisis para comparar cómo reacciona un mismo kilo de café a un ratio 1:15 frente a un 1:16, permitiéndote ajustar la receta milimétricamente.',
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
