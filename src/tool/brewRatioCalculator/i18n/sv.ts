import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kafferatio-kalkylator';
const title = 'Kalkylator för kaffebryggningsförhållande';
const description =
 'Beräkna exakt hur många gram kaffe eller milliliter vatten du behöver för ditt ideala förhållande (1:15, 1:16...). Inkluderar resultat i koppen, hällguide, iskaffe-läge och sparade recept.';

const faqData = [
 {
 question: 'Vad är ett kaffeförhållande på 1:15?',
 answer:
 'Det betyder att du för varje gram malet kaffe använder 15 milliliter (eller gram) vatten. Med 20 g kaffe häller du alltså på 300 ml vatten. Detta är standardförhållandet som rekommenderas av Specialty Coffee Association för filtermetoder som V60, Chemex eller Aeropress.',
 },
 {
 question: 'Varför är det mindre kaffe i min kopp än jag hällde på?',
 answer:
 'Eftersom malet kaffe binder vatten under extraktionen. I genomsnitt absorberar varje gram kaffe cirka 2 ml vätska. Om du häller 300 ml på 20 g kaffe får du cirka 260 ml i koppen. Denna kalkylator visar dig det verkliga resultatet.',
 },
 {
 question: 'Vad är bloom eller pre-infusion?',
 answer:
 'Det är den första vattenhällningen, motsvarande dubbla kaffevikten (2 ml per gram). Det görs för att avgasas färskt kaffe: den koldioxid som fångats under rostningen slipper ut och gör det möjligt för vattnet att extrahera smaker jämnt. Om ingen synlig bloom uppstår har kaffet malts eller rostats för länge sedan.',
 },
 {
 question: 'Hur gör jag iskaffe utan att det blir vattnigt?',
 answer:
 'Använd "flash chilling"-tekniken: förbered 60 % av det totala vattnet som hett vatten vid 90-96 grader och lägg de resterande 40 % som is i karaffen. Häll det heta kaffet direkt över isen. Den snabba avkylningen bevarar aromerna. Denna kalkylator räknar automatiskt om mängderna när du aktiverar iskaffe-läget.',
 },
 {
 question: 'Vilket är det bästa förhållandet för en Aeropress?',
 answer:
 'Mellan 1:12 och 1:15 beroende på användning. Om du dricker kaffet svart är 1:15 balanserat. Om du använder det som bas för mjölkdrycker eller vill ha hög koncentration, gå ner till 1:12 eller 1:13. Aeropress är den mest mångsidiga metoden just för att den hanterar olika förhållanden mycket bra.',
 },
 {
 question: 'Kan jag spara mina favoritrecept?',
 answer:
 'Ja. När du har hittat det perfekta förhållandet och mängden för ditt favoritkaffe, tryck på knappen "Spara recept", ge det ett namn (t.ex. Morgon-V60) så lagras det i din webbläsare. Du kan hämta det när som helst med ett klick.',
 },
];

const howToData = [
 {
 name: 'Välj beräkningsläge',
 text: 'Välj om du utgår från mängden kaffe du har eller kapaciteten på din kopp (ml vatten). Kalkylatorn anpassar alla resultat till det valda läget.',
 },
 {
 name: 'Ange mängd',
 text: 'Skriv in gram kaffe eller milliliter vatten du ska använda. Kalkylatorn beräknar automatiskt det andra värdet baserat på det valda förhållandet.',
 },
 {
 name: 'Välj intensitet',
 text: 'Välj mellan Stark (1:12-14), Balanserad (1:15-16), Lätt (1:17-18) eller ange ditt eget förhållande. Varje alternativ motsvarar en unik smakprofil.',
 },
 {
 name: 'Aktivera iskaffe-läge (valfritt)',
 text: 'Om du gör iskaffe, aktivera reglaget. Kalkylatorn delar automatiskt upp vattnet mellan hett vatten (60 %) och is (40 %) enligt flash chilling-tekniken.',
 },
 {
 name: 'Följ hällguiden',
 text: 'Använd fasguiden (Bloom och slutlig hällning) för att strukturera din bryggprocess. Varje fas indikerar exakt hur mycket vatten du ska hälla och när.',
 },
 {
 name: 'Spara receptet',
 text: 'När du hittat ditt perfekta förhållande, spara det med ett beskrivande namn. Dina recept lagras i din webbläsare för framtida sessioner.',
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
 inLanguage: 'sv',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Vanliga frågor om bryggförhållande',
 faq: faqData,
 bibliographyTitle: 'Tekniska referenser och SCA-standarder',
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
 modeCoffee: 'Jag har kaffet',
 modeHintCoffee: 'Säg mig hur mycket vatten',
 modeWater: 'Jag har vattnet',
 modeHintWater: 'Säg mig hur mycket kaffe jag ska mala',
 inputLabelCoffee: 'Gram kaffe du har',
 inputLabelWater: 'Koppens kapacitet (ml)',
 intensityLabel: 'Kaffets intensitet',
 intensityStrong: 'Stark',
 intensityBalanced: 'Balanserad',
 intensityLight: 'Lätt',
 intensityCustom: 'Anpassad',
 customCoffeeLabel: 'Kaffe',
 customWaterLabel: 'Vatten',
 icedModeLabel: 'Iskaffe-läge',
 recipeLabel: 'Ditt exakta recept',
 resultTitle: 'Resultat',
 resultCoffeeLabel: 'Kaffe',
 resultCoffeeSub: 'Fin-medel malning',
 resultHotWaterLabel: 'Hett vatten',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Hett vatten (60 %)',
 resultIceLabel: 'Is',
 resultIceSub: 'I karaffen',
 resultCupLabel: 'I din kopp',
 resultCupSub: 'Kaffe binder ~2 ml/g',
 pouringGuideLabel: 'Hällguide',
 favoritesLabel: 'Mina favoritrecept',
 saveBtn: '+ Spara detta recept',
 favEmptyText: 'Inga sparade recept än. Skapa ditt perfekta bryggrecept och spara det.',
 modalTitle: 'Namnge ditt recept',
 modalPlaceholder: 'T.ex.: "Morgon-V60"',
 modalCancel: 'Avbryt',
 modalConfirm: 'Spara',
 phaseBloomTemplate: 'Bloom: Häll på {bloomMl} ml vatten i en spiral. Vänta {bloomSeconds} sekunder för att avgasas kaffet.',
 phasePourTemplate: 'Slutlig hällning: Tillsätt resten för att nå {hotWaterMl} ml i {pourCount} långsamma hällningar.',
 phaseIcedTemplate: 'Iskaffe: Häll det heta kaffet direkt över de {iceMl} g is som finns i karaffen.',
 cupWarningTemplate: 'Koppen får bara {inCupMl} ml. Kaffet binder vätska.',
 favModeCoffee: 'g kaffe',
 favModeWater: 'ml vatten',
 favModeIced: ' - Iskaffe',
 },
};
