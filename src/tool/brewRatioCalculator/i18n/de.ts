import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kaffee-verhaeltnis-rechner';
const title = 'Kaffee Brühverhältnis Rechner';
const description =
 'Berechnen Sie die exakte Menge Kaffee in Gramm oder Wasser in Millilitern für Ihr ideales Brühverhältnis (1:15, 1:16...). Inklusive Tassenergebnis, Gießanleitung, Eiskaffee-Modus und gespeicherten Rezepten.';

const faqData = [
 {
 question: 'Was bedeutet ein 1:15 Kaffee-Verhältnis?',
 answer:
 'Das bedeutet, dass Sie für jedes Gramm gemahlenen Kaffee 15 Milliliter (oder Gramm) Wasser verwenden. Bei 20 g Kaffee gießen Sie also 300 ml Wasser auf. Dies ist das von der Specialty Coffee Association empfohlene Standardverhältnis für Filtermethoden wie V60, Chemex oder Aeropress.',
 },
 {
 question: 'Warum ist weniger Kaffee in meiner Tasse als ich aufgegossen habe?',
 answer:
 'Weil gemahlener Kaffee während der Extraktion Wasser zurückhält. Im Durchschnitt absorbiert jedes Gramm Kaffee etwa 2 ml Flüssigkeit. Wenn Sie 300 ml auf 20 g Kaffee gießen, erhalten Sie ca. 260 ml in der Tasse. Dieser Rechner zeigt Ihnen das reale Ergebnis an.',
 },
 {
 question: 'Was ist Bloom oder Pre-Infusion?',
 answer:
 'Dies ist der erste Wasserguss, der dem doppelten Gewicht des Kaffees entspricht (2 ml pro Gramm). Er dient dazu, frischen Kaffee zu entgasen: Das beim Rösten eingeschlossene CO2 entweicht und ermöglicht es dem Wasser, die Inhaltsstoffe gleichmäßig zu extrahieren. Wenn kein Bloom sichtbar ist, ist der Kaffee schon länger gemahlen oder geröstet.',
 },
 {
 question: 'Wie mache ich Eiskaffee, ohne dass er wässrig schmeckt?',
 answer:
 'Verwenden Sie die Flash-Chilling-Technik: Bereiten Sie 60 % des gesamten Wassers als heißes Wasser (90-96 Grad) vor und geben Sie die restlichen 40 % als Eis in die Karaffe. Gießen Sie den heißen Kaffee direkt über das Eis. Die schnelle Abkühlung versiegelt die Aromen. Dieser Rechner berechnet die Mengen automatisch neu, wenn Sie den Eiskaffee-Modus aktivieren.',
 },
 {
 question: 'Was ist das beste Verhältnis für die Aeropress?',
 answer:
 'Zwischen 1:12 und 1:15, je nach Vorliebe. Wenn Sie den Kaffee schwarz trinken, ist 1:15 ausgewogen. Wenn Sie ihn als Basis für Milchgetränke verwenden oder eine hohe Konzentration wünschen, gehen Sie auf 1:12 oder 1:13 herunter. Die Aeropress ist gerade deshalb so vielseitig, weil sie verschiedene Verhältnisse sehr gut verarbeitet.',
 },
 {
 question: 'Kann ich meine Lieblingsrezepte speichern?',
 answer:
 'Ja. Sobald Sie das perfekte Verhältnis und die optimale Menge für Ihren Lieblingskaffee gefunden haben, klicken Sie auf "Rezept speichern", geben Sie ihm einen Namen (z. B. "Morgendlicher V60") und es wird in Ihrem Browser gespeichert. Sie können es jederzeit mit einem Klick wieder aufrufen.',
 },
];

const howToData = [
 {
 name: 'Berechnungsmodus wählen',
 text: 'Wählen Sie aus, ob Sie von der vorhandenen Kaffeemenge (g) oder der Kapazität Ihrer Tasse (ml Wasser) ausgehen möchten. Der Rechner passt alle Ergebnisse an den gewählten Modus an.',
 },
 {
 name: 'Menge eingeben',
 text: 'Geben Sie die Gramm Kaffee oder Milliliter Wasser ein, die Sie verwenden möchten. Der Rechner berechnet automatisch den anderen Wert basierend auf dem gewählten Verhältnis.',
 },
 {
 name: 'Intensität wählen',
 text: 'Wählen Sie zwischen Stark (1:12-14), Ausgewogen (1:15-16), Mild (1:17-18) oder geben Sie Ihr eigenes Verhältnis ein. Jede Option entspricht einem anderen Geschmacksprofil.',
 },
 {
 name: 'Eiskaffee-Modus aktivieren (optional)',
 text: 'Wenn Sie Eiskaffee zubereiten, aktivieren Sie den Schalter. Der Rechner teilt das Wasser automatisch in heißes Wasser (60 %) und Eis (40 %) auf, basierend auf der Flash-Chilling-Technik.',
 },
 {
 name: 'Gießanleitung folgen',
 text: 'Nutzen Sie die Phasen-Anleitung (Bloom und finaler Aufguss), um Ihren Brühprozess zu strukturieren. Jede Phase zeigt genau an, wie viel Wasser wann gegossen werden sollte.',
 },
 {
 name: 'Rezept speichern',
 text: 'Wenn Sie Ihr perfektes Verhältnis gefunden haben, speichern Sie es unter einem aussagekräftigen Namen. Ihre Rezepte werden für zukünftige Sitzungen in Ihrem Browser gespeichert.',
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
 inLanguage: 'de',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Häufig gestellte Fragen zum Brühverhältnis',
 faq: faqData,
 bibliographyTitle: 'Technische Referenzen und SCA-Standards',
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
 modeCoffee: 'Ich habe den Kaffee',
 modeHintCoffee: 'Berechne mir die Wassermenge',
 modeWater: 'Ich habe das Wasser',
 modeHintWater: 'Sag mir, wie viel Kaffee ich mahlen soll',
 inputLabelCoffee: 'Kaffeemenge in Gramm',
 inputLabelWater: 'Tassengröße (ml)',
 intensityLabel: 'Kaffee-Intensität',
 intensityStrong: 'Stark',
 intensityBalanced: 'Ausgewogen',
 intensityLight: 'Mild',
 intensityCustom: 'Individuell',
 customCoffeeLabel: 'Kaffee',
 customWaterLabel: 'Wasser',
 icedModeLabel: 'Eiskaffee-Modus',
 recipeLabel: 'Ihr exaktes Rezept',
 resultTitle: 'Ergebnis',
 resultCoffeeLabel: 'Kaffee',
 resultCoffeeSub: 'Fein-mittlerer Mahlgrad',
 resultHotWaterLabel: 'Heißes Wasser',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Heißes Wasser (60%)',
 resultIceLabel: 'Eis',
 resultIceSub: 'In der Karaffe',
 resultCupLabel: 'In der Tasse',
 resultCupSub: 'Kaffee hält ~2ml/g zurück',
 pouringGuideLabel: 'Gießanleitung',
 favoritesLabel: 'Meine Lieblingsrezepte',
 saveBtn: '+ Rezept speichern',
 favEmptyText: 'Noch keine Rezepte gespeichert. Brühen Sie Ihren perfekten Kaffee und speichern Sie ihn.',
 modalTitle: 'Name für das Rezept',
 modalPlaceholder: 'z.B.: "Morgendlicher V60"',
 modalCancel: 'Abbrechen',
 modalConfirm: 'Speichern',
 phaseBloomTemplate: 'Bloom: Gießen Sie {bloomMl} ml Wasser spiralförmig auf. Warten Sie {bloomSeconds} Sekunden, damit der Kaffee entgasen kann.',
 phasePourTemplate: 'Finaler Aufguss: Den Rest in {pourCount} langsamen Güssen hinzufügen, bis {hotWaterMl} ml erreicht sind.',
 phaseIcedTemplate: 'Eis: Gießen Sie den heißen Kaffee direkt über die {iceMl} g Eis in der Karaffe.',
 cupWarningTemplate: 'Die Tasse erhält nur {inCupMl} ml. Kaffee bindet Flüssigkeit.',
 favModeCoffee: 'g Kaffee',
 favModeWater: 'ml Wasser',
 favModeIced: ' - Eis',
 },
};
