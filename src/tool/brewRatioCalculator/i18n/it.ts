import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-proporzione-caffe';
const title = 'Calcolatore Rapporto di Estrazione Caffè';
const description =
 'Calcola gli esatti grammi di caffè o millilitri di acqua per il tuo rapporto ideale (1:15, 1:16...). Include risultato in tazza, guida al versaggio, modalità caffè freddo e ricette salvate.';

const faqData = [
 {
 question: 'Cos\'è un rapporto caffè 1:15?',
 answer:
 'Significa che per ogni grammo di caffè macinato si utilizzano 15 millilitri (o grammi) di acqua. Con 20g di caffè, versi 300ml di acqua. È il rapporto standard raccomandato dalla Specialty Coffee Association per i metodi a filtro come V60, Chemex o Aeropress.',
 },
 {
 question: 'Perché c\'è meno caffè nella mia tazza di quello che ho versato?',
 answer:
 'Perché il caffè macinato trattiene l\'acqua durante l\'estrazione. In media, ogni grammo di caffè assorbe circa 2ml di liquido. Se versi 300ml su 20g di caffè, otterrai circa 260ml in tazza. Questo calcolatore ti mostra il risultato reale.',
 },
 {
 question: 'Cos\'è il bloom o pre-infusione?',
 answer:
 'È il primo versaggio d\'acqua, equivalente al doppio del peso del caffè (2ml per grammo). Si fa per degasare il caffè fresco: la CO2 intrappolata durante la tostatura fuoriesce e permette all\'acqua di estrarre i composti in modo uniforme. Se non c\'è un bloom visibile, il caffè è stato macinato o tastato da tempo.',
 },
 {
 question: 'Come fare il caffè freddo senza che sia acquoso?',
 answer:
 'Usa la tecnica flash chilling: prepara il 60% dell\'acqua totale come acqua calda a 90-96 gradi e metti il rimanente 40% come ghiaccio nella caraffa. Versa il caffè caldo direttamente sul ghiaccio. Il raffreddamento rapido sigilla gli aromi. Questo calcolatore ricalcola automaticamente le quantità quando attivi la modalità Iced Coffee.',
 },
 {
 question: 'Qual è il miglior rapporto per un\'Aeropress?',
 answer:
 'Tra 1:12 e 1:15 a seconda dell\'uso. Se bevi caffè nero, 1:15 è bilanciato. Se lo usi come base per bevande al latte o vuoi un\'alta concentrazione, scendi a 1:12 o 1:13. L\'Aeropress è il metodo più versatile proprio perché gestisce molto bene diversi rapporti.',
 },
 {
 question: 'Posso salvare le mie ricette preferite?',
 answer:
 'Sì. Una volta trovato il rapporto e la quantità perfetti per il tuo caffè preferito, premi il pulsante Salva ricetta, dagli un nome (es. V60 del mattino) e verrà memorizzata nel tuo browser. Puoi richiamarla in qualsiasi momento con un solo clic.',
 },
];

const howToData = [
 {
 name: 'Scegli la modalità di calcolo',
 text: 'Seleziona se parti dai grammi di caffè che hai o dalla capacità della tua tazza (ml di acqua). Il calcolatore adatta tutti i risultati alla modalità scelta.',
 },
 {
 name: 'Inserisci la quantità',
 text: 'Digita i grammi di caffè o i millilitri di acqua che userai. Il calcolatore calcolerà automaticamente l\'altro valore in base al rapporto selezionato.',
 },
 {
 name: 'Seleziona l\'intensità',
 text: 'Scegli tra Forte (1:12-14), Bilanciato (1:15-16), Leggero (1:17-18) o inserisci il tuo rapporto personalizzato. Ogni opzione corrisponde a un diverso profilo aromatico.',
 },
 {
 name: 'Attiva la modalità Iced Coffee (opzionale)',
 text: 'Se stai preparando un caffè freddo, attiva l\'interruttore. Il calcolatore dividerà automaticamente l\'acqua tra acqua calda (60%) e ghiaccio (40%) usando la tecnica flash chilling.',
 },
 {
 name: 'Segui la guida al versaggio',
 text: 'Usa la guida alle fasi (Bloom e Versaggio finale) per strutturare il tuo processo di infusione. Ogni fase indica esattamente quanta acqua versare e quando.',
 },
 {
 name: 'Salva la ricetta',
 text: 'Quando trovi il tuo rapporto perfetto, salvalo con un nome descrittivo. Le tue ricette sono memorizzate nel tuo browser per le sessioni future.',
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
 inLanguage: 'it',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Domande Frequenti sul Rapporto di Estrazione',
 faq: faqData,
 bibliographyTitle: 'Riferimenti Tecnici e Standard SCA',
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
 modeCoffee: 'Ho il Caffè',
 modeHintCoffee: 'Dimmi quanta acqua serve',
 modeWater: 'Ho l\'Acqua',
 modeHintWater: 'Dimmi quanto caffè macinare',
 inputLabelCoffee: 'Grammi di caffè che hai',
 inputLabelWater: 'Capacità tazza (ml)',
 intensityLabel: 'Intensità del caffè',
 intensityStrong: 'Forte',
 intensityBalanced: 'Bilanciato',
 intensityLight: 'Leggero',
 intensityCustom: 'Personalizzato',
 customCoffeeLabel: 'Caffè',
 customWaterLabel: 'Acqua',
 icedModeLabel: 'Modalità Caffè Freddo',
 recipeLabel: 'La tua ricetta esatta',
 resultTitle: 'Risultato',
 resultCoffeeLabel: 'Caffè',
 resultCoffeeSub: 'Macinatura fine-media',
 resultHotWaterLabel: 'Acqua calda',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Acqua calda (60%)',
 resultIceLabel: 'Ghiaccio',
 resultIceSub: 'Nella caraffa',
 resultCupLabel: 'Nella tua tazza',
 resultCupSub: 'Il caffè trattiene ~2ml/g',
 pouringGuideLabel: 'Guida al versaggio',
 favoritesLabel: 'Le mie ricette preferite',
 saveBtn: '+ Salva questa ricetta',
 favEmptyText: 'Nessuna ricetta salvata. Configura la tua infusione perfetta e salvala.',
 modalTitle: 'Dai un nome alla ricetta',
 modalPlaceholder: 'Es.: "V60 del mattino"',
 modalCancel: 'Annulla',
 modalConfirm: 'Salva',
 phaseBloomTemplate: 'Bloom: Versa {bloomMl} ml d\'acqua a spirale. Attendi {bloomSeconds} secondi per degasare il caffè.',
 phasePourTemplate: 'Versaggio finale: Aggiungi il resto per completare {hotWaterMl} ml in {pourCount} versaggi lenti.',
 phaseIcedTemplate: 'Ghiaccio: Versa il caffè caldo direttamente sui {iceMl} g di ghiaccio nella caraffa.',
 cupWarningTemplate: 'La tazza riceve solo {inCupMl} ml. Il caffè trattiene i liquidi.',
 favModeCoffee: 'g caffè',
 favModeWater: 'ml acqua',
 favModeIced: ' - Ghiaccio',
 },
};
