import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'koffie-ratio-calculator';
const title = 'Koffie Brew Ratio Calculator';
const description =
 'Bereken de exacte grammen koffie of milliliters water voor je ideale ratio (1:15, 1:16...). Inclusief resultaat per kop, schenkgids, ijskoffiemodus en opgeslagen recepten.';

const faqData = [
 {
 question: 'Wat is een 1:15 koffieratio?',
 answer:
 'Dit betekent dat je voor elke gram gemalen koffie 15 milliliter (of gram) water gebruikt. Voor 20 g koffie giet je 300 ml water op. Dit is de standaardratio die door de Specialty Coffee Association wordt aanbevolen voor filtermethoden zoals V60, Chemex of Aeropress.',
 },
 {
 question: 'Waarom zit er minder koffie in mijn kopje dan ik heb opgeschonken?',
 answer:
 'Omdat gemalen koffie water vasthoudt tijdens de extractie. Gemiddeld absorbeert elke gram koffie ongeveer 2 ml vloeistof. Als je 300 ml op 20 g koffie schenkt, krijg je ongeveer 260 ml in het kopje. Deze calculator laat je het werkelijke resultaat zien.',
 },
 {
 question: 'Wat is bloom of pre-infusie?',
 answer:
 'Dit is de eerste opgieting van water, gelijk aan tweemaal het gewicht van de koffie (2 ml per gram). Dit wordt gedaan om verse koffie te ontgassen: de CO2 die tijdens het branden is opgesloten ontsnapt en zorgt ervoor dat het water de smaakstoffen gelijkmatig kan extraheren. Als er geen zichtbare bloom is, is de koffie al enige tijd geleden gemalen of gebrand.',
 },
 {
 question: 'Hoe maak ik ijskoffie zonder dat deze waterig wordt?',
 answer:
 'Gebruik de flash chilling-techniek: bereid 60% van het totale water als heet water van 90-96 graden en doe de resterende 40% als ijs in de karaf. Giet de hete koffie direct over het ijs. De snelle afkoeling sluit de aroma\'s in. Deze calculator herberekent automatisch de hoeveelheden wanneer je de Iced Coffee-modus activeert.',
 },
 {
 question: 'Wat is de beste ratio voor een Aeropress?',
 answer:
 'Tussen 1:12 en 1:15, afhankelijk van het gebruik. Als je de koffie zwart drinkt, is 1:15 gebalanceerd. Als je het gebruikt als basis voor melkdranken of een hoge concentratie wilt, ga dan naar 1:12 of 1:13. De Aeropress is de meest veelzijdige methode juist omdat deze verschillende rati\'s heel goed aankan.',
 },
 {
 question: 'Kan ik mijn favoriete recepten opslaan?',
 answer:
 'Ja. Zodra je de perfecte ratio en hoeveelheid voor je favoriete koffie hebt gevonden, druk je op de knop Recept opslaan, geef je het een naam (bijv. Ochtend V60) en wordt het in je browser opgeslagen. Je kunt het op elk moment met één klik weer oproepen.',
 },
];

const howToData = [
 {
 name: 'Kies de berekeningsmodus',
 text: 'Selecteer of je begint bij het aantal gram koffie dat je hebt of bij de capaciteit van je kopje (ml water). De calculator past alle resultaten aan de gekozen modus aan.',
 },
 {
 name: 'Voer de hoeveelheid in',
 text: 'Typ het aantal gram koffie of milliliters water dat je gaat gebruiken. De calculator berekent automatisch de andere waarde op basis van de geselecteerde ratio.',
 },
 {
 name: 'Selecteer de intensiteit',
 text: 'Kies tussen Sterk (1:12-14), Gebalanceerd (1:15-16), Licht (1:17-18) of voer je eigen ratio in. Elke optie komt overeen met een ander smaakprofiel.',
 },
 {
 name: 'Activeer de Iced Coffee-modus (optioneel)',
 text: 'Als je ijskoffie maakt, activeer dan de schakelaar. De calculator verdeelt het water automatisch in heet water (60%) and ijs (40%) met behulp van de flash chilling-techniek.',
 },
 {
 name: 'Volg de schenkgids',
 text: 'Gebruik de fasengids (Bloom en Final Pour) om je zetproces te structureren. Elke fase geeft precies aan hoeveel water je wanneer moet schenken.',
 },
 {
 name: 'Sla het recept op',
 text: 'Wanneer je de perfecte ratio hebt gevonden, sla deze dan op met een beschrijvende naam. Je recepten worden in je browser opgeslagen voor toekomstige sessies.',
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
 inLanguage: 'nl',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Veelgestelde vragen over de Brew Ratio',
 faq: faqData,
 bibliographyTitle: 'Technische referenties en SCA-normen',
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
 modeCoffee: 'Ik heb de Koffie',
 modeHintCoffee: 'Vertel me hoeveel water',
 modeWater: 'Ik heb het Water',
 modeHintWater: 'Vertel me hoeveel koffie ik moet malen',
 inputLabelCoffee: 'Gram koffie die je hebt',
 inputLabelWater: 'Inhoud van je kopje (ml)',
 intensityLabel: 'Koffie-intensiteit',
 intensityStrong: 'Sterk',
 intensityBalanced: 'Gebalanceerd',
 intensityLight: 'Licht',
 intensityCustom: 'Aangepast',
 customCoffeeLabel: 'Koffie',
 customWaterLabel: 'Water',
 icedModeLabel: 'IJskoffie Modus',
 recipeLabel: 'Je exacte recept',
 resultTitle: 'Resultaat',
 resultCoffeeLabel: 'Koffie',
 resultCoffeeSub: 'Fijn-medium maalgraad',
 resultHotWaterLabel: 'Heet water',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Heet water (60%)',
 resultIceLabel: 'IJs',
 resultIceSub: 'In de karaf',
 resultCupLabel: 'In je kopje',
 resultCupSub: 'Koffie houdt ~2ml/g vast',
 pouringGuideLabel: 'Schenkgids',
 favoritesLabel: 'Mijn favoriete recepten',
 saveBtn: '+ Sla dit recept op',
 favEmptyText: 'Nog geen opgeslagen recepten. Configureer je perfecte brew en sla hem op.',
 modalTitle: 'Geef je recept een naam',
 modalPlaceholder: 'Bijv.: "Ochtend V60"',
 modalCancel: 'Annuleren',
 modalConfirm: 'Opslaan',
 phaseBloomTemplate: 'Bloom: Giet {bloomMl} ml water in een spiraal. Wacht {bloomSeconds} seconden om de koffie te ontgassen.',
 phasePourTemplate: 'Final pour: Voeg de rest toe om {hotWaterMl} ml te voltooien in {pourCount} langzame opgietingen.',
 phaseIcedTemplate: 'Iced: Giet de hete koffie direct over de {iceMl} g ijs in de karaf.',
 cupWarningTemplate: 'Het kopje ontvangt slechts {inCupMl} ml. Koffie houdt vloeistof vast.',
 favModeCoffee: 'g koffie',
 favModeWater: 'ml water',
 favModeIced: ' - IJs',
 },
};
