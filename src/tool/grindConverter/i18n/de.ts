import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kaffee-mahlgrad-rechner';
const title = 'Kaffee Mahlgrad Konverter';
const description =
 'Interaktive Mahlgrad-Tabelle mit Klick- und Stufen-Leitfaden zur Einstellung Ihrer Mühle für Espresso, V60, French Press und mehr. Technische Mikron-Zuordnung für alle Extraktionsmethoden.';

const faqData = [
 {
 question: 'Warum funktioniert derselbe Mahlgrad nicht für alle Kaffeesorten?',
 answer:
 'Die Dichte der Bohnen variiert je nach Röstgrad und Herkunft. Eine helle Röstung ist in der Regel dichter und erfordert einen feineren Mahlgrad für eine ordnungsgemäße Extraktion, während eine dunkle Röstung poröser ist und eine gröbere Einstellung benötigt.',
 },
 {
 question: 'Woher weiß ich, ob ich feiner oder gröber mahlen soll?',
 answer:
 'Lassen Sie sich von Ihrem Geschmack leiten: Wenn der Kaffee bitter und trocken schmeckt, mahlen Sie gröber, damit das Wasser schneller fließt. Wenn er sauer, salzig oder wässrig schmeckt, mahlen Sie feiner, um die Kontaktoberfläche zu vergrößern.',
 },
 {
 question: 'Was ist "Channeling" und wie beeinflusst der Mahlgrad dies?',
 answer:
 'Channeling tritt auf, wenn das Wasser den Weg des geringsten Widerstands durch das Kaffeebett findet. Ein ungleichmäßiger oder für den Druck ungeeigneter Mahlgrad, insbesondere beim Espresso, begünstigt dieses Problem und ruiniert die Extraktion.',
 },
 {
 question: 'Kann ich diese Tabelle auch für eine Schlagmesser-Mühle verwenden?',
 answer:
 'Schlagmesser-Mühlen erzeugen ungleichmäßige Partikel, gleichzeitig feines Pulver und große Stücke. Die Mikron-Werte sind Richtwerte, aber die tatsächlichen Ergebnisse werden im Vergleich zu einer Mühle mit Mahlwerk erheblich variieren.',
 },
 {
 question: 'Was bedeutet die Gleichmäßigkeit der Mühle in der Visualisierung?',
 answer:
 'Die gezeigte Partikelverteilung simuliert die reale Gleichmäßigkeit jeder Mühle. Eine Comandante C40 mit 0,95 Gleichmäßigkeit erzeugt sehr konsistente Partikel; eine Hario Skerton mit 0,40 zeigt deutlich mehr Größenabweichungen.',
 },
];

const howToData = [
 {
 name: 'Wählen Sie Ihre Mühle',
 text: 'Wählen Sie Ihr Modell aus der Liste aus. Der Konverter zeigt die empfohlenen Klicks oder Stufen speziell für Ihr Gerät an.',
 },
 {
 name: 'Wählen Sie Ihre Extraktionsmethode',
 text: 'Klicken Sie auf das Symbol für die Methode, die Sie verwenden möchten. Das Bedienfeld wird mit allen relevanten technischen Parametern aktualisiert.',
 },
 {
 name: 'Interpretieren Sie die Mikron-Anzeige',
 text: 'Nutzen Sie den Mikron-Wert im Balkendiagramm, um die tatsächliche Partikelgröße zu verstehen. Die haptische Referenz (feines Salz, Kristallzucker...) hilft Ihnen bei der visuellen Kalibrierung.',
 },
 {
 name: 'Beobachten Sie die Partikel-Simulation',
 text: 'Die Verteilung der Punkte zeigt die typische Gleichmäßigkeit Ihrer Mühle. Ein homogeneres Muster bedeutet eine vorhersehbarere und reproduzierbarere Extraktion.',
 },
 {
 name: 'Nach Geschmack anpassen',
 text: 'Nutzen Sie den Diagnose-Leitfaden unten als Referenz. Wenn der Kaffee bitter schmeckt, stellen Sie ihn ein paar Klicks gröber. Wenn er sauer schmeckt, mahlen Sie feiner. Passen Sie immer nur einen Schritt nach dem anderen an.',
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
 inLanguage: 'de',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Häufig gestellte Fragen zum Kaffee-Mahlgrad',
 faq: faqData,
 bibliographyTitle: 'Referenzen zu Mahlgrad und Extraktion',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'La Física de la Molienda: Por qué el Tamaño de Partícula lo Cambia Todo',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Cuando mueles café, no solo estás reduciendo el tamaño del grano. Estás definiendo la <strong>superficie de contacto</strong> disponible para que el agua disuelva los compuestos de sabor. Una molienda demasiado fina expone tanta superficie que el agua extrae en exceso los compuestos amargos. Demasiado gruesa, y el agua pasa sin encontrar suficiente resistencia, resultando en un café débil y agrio. El conversor de molienda te da el punto exacto para cada método.',
 },
 {
 type: 'summary',
 title: '¿Qué determina el grosor de molienda correcto?',
 items: [
 '<strong>Método de extracción:</strong> La presión, el tiempo de contacto y el tipo de filtro dictan el rango de micras óptimo para cada método.',
 '<strong>Uniformidad del molino:</strong> Un molino de alta gama produce partículas homogéneas; uno de cuchillas genera polvo y trozos gruesos a la vez.',
 '<strong>Frescura del grano:</strong> El café recién tostado contiene más CO2 y puede requerir un ajuste ligeramente más grueso que el mismo café envejecido.',
 '<strong>Calibración por sabor:</strong> El paladar es el instrumento final. La tabla es el punto de partida; el sabor es el destino.',
 ],
 },
 {
 type: 'title',
 text: 'Espresso vs V60: Los Dos Extremos del Espectro',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El <strong>espresso</strong> extrae a 9 bares de presión en apenas 25-30 segundos. Para que esto funcione, el café molido debe ofrecer exactamente la resistencia correcta: una molienda entre 300-500 micras crea ese lecho compacto. Demasiado grueso y el agua pasa en 10 segundos produciendo una taza aguada; demasiado fino y la máquina no puede generar flujo.',
 },
 {
 type: 'paragraph',
 html: 'El <strong>V60</strong>, en cambio, funciona por gravedad. El agua tiene que fluir a través de un lecho de partículas más gruesas (700-900 micras) durante 2-3 minutos completos. Si el grano está demasiado fino, el filtro de papel se satura y el café tarda demasiado, sobre-extrayendo. Si está muy grueso, el agua pasa en 60 segundos sin extraer suficiente sabor.',
 },
 {
 type: 'table',
 headers: ['Método', 'Micras', 'Referencia táctil', 'Tiempo contacto'],
 rows: [
 ['Ibrik (Turco)', '100-300 μm', 'Talco / Harina fina', '3-5 min ebullición'],
 ['Espresso', '300-500 μm', 'Sal fina', '25-30 seg'],
 ['Moka / Aeropress', '500-700 μm', 'Sal de mesa', '3-4 min'],
 ['V60 / Filtro', '700-900 μm', 'Azúcar granulada', '2:30-3:15 min'],
 ['Chemex / Clever', '900-1200 μm', 'Arena gruesa', '3:30-4:30 min'],
 ['Prensa Francesa', '1200-1500 μm', 'Sal gorda', '4 min inmersión'],
 ['Cold Brew', '1500+ μm', 'Granos de pimienta', '12-24 h en frío'],
 ],
 },
 {
 type: 'title',
 text: 'Uniformidad: El Factor Diferencial entre Molinos',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La <strong>uniformidad de la partícula</strong> es la métrica real que separa un molino de gama alta de uno básico. Cuando un Comandante C40 muele a 20 clics, produce partículas casi idénticas entre sí (95% uniformidad). Cuando un molino de cuchillas "muele" al mismo tiempo, el resultado es caótico: polvo fino y trozos grandes conviven, extrayéndose a velocidades completamente diferentes.',
 },
 {
 type: 'stats',
 items: [
 { label: 'Comandante C40', value: '95%', icon: 'mdi:star' },
 { label: 'Timemore C2/C3', value: '85%', icon: 'mdi:star-half-full' },
 { label: 'Hario Skerton', value: '40%', icon: 'mdi:star-outline' },
 ],
 columns: 3,
 },
 {
 type: 'title',
 text: 'Diagnóstico por Sabor: La Brújula del Barista',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'Ninguna tabla sustituye al paladar. El conversor te da el punto de partida técnico, pero el ajuste final siempre lo hace el sabor. <strong>Amargo y seco</strong> = sobre-extracción = muele más grueso. <strong>Agrio y acuoso</strong> = sub-extracción = muele más fino. Ajusta de uno en uno (un clic, un nivel) hasta encontrar el equilibrio perfecto para tu grano y agua específicos.',
 },
 {
 type: 'tip',
 title: 'Regla de oro para nuevos cafés',
 html: '<p>Cuando abras un café nuevo, empieza siempre por el punto medio del rango recomendado para tu método. Desde ahí, ajusta según sabor en pasos de un clic. Anota el resultado de cada ajuste para construir un registro de referencia de tus cafés favoritos con cada molino.</p>',
 },
 ],
 ui: {
 step1Label: 'Schritt 1: Auswahl der Mühle',
 step2Label: 'Schritt 2: Extraktionsmethode',
 gaugeLabel: 'Technische Partikelübersicht (μm)',
 distributionLabel: 'Tatsächliche Partikelverteilung',
 refLabel: 'Referenz',
 rangeMicrasLabel: 'Bereich μm',
 unitMicras: 'ZIEL-MIKRON (μm)',
 unitClicks: 'EMPFOHLENE KLICKS',
 unitLevel: 'EMPFOHLENE STUFE',
 suggestGrinderText: "Vermissen Sie Ihre Mühle? Schlagen Sie sie vor",
 method0Name: 'Ibrik (Türkisch)',
 method0Ref: 'Talkum / Mehl',
 method0Desc: 'Extrem feines Pulver, fast wie Mehl. Essenziell für den Bodensatz im türkischen Kaffee.',
 method1Name: 'Espresso',
 method1Ref: 'Feines Salz',
 method1Desc: 'Die Hochdruck-Extraktion benötigt eine sehr feine Mahlung, um Widerstand zu erzeugen.',
 method2Name: 'Mokka / AeroPress',
 method2Ref: 'Speisesalz',
 method2Desc: 'Mittlerer Druck oder Hybrid-Immersion. Vielseitige und ausgewogene Textur.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Kristallzucker',
 method3Desc: 'Manuelle Aufgussmethoden, der Standard zur Hervorhebung von Süße und Säure.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Grober Sand',
 method4Desc: 'Dicke Filter oder kurze Immersion. Erfordert einen konstanten und gleichmäßigen Fluss.',
 method5Name: 'French Press',
 method5Ref: 'Grobes Salz',
 method5Desc: 'Längere Immersion benötigt große Partikel, um durch das Metallsieb zu filtern.',
 method6Name: 'Cold Brew',
 method6Ref: 'Pfefferkörner',
 method6Desc: 'Kalte Extraktion über viele Stunden erfordert den gröbstmöglichen Mahlgrad.',
 troubleIssue0: 'Schmeckt bitter, trocken oder adstringierend?',
 troubleSolution0:
 'Sie extrahieren zu stark. Mahlen Sie gröber, damit das Wasser schneller fließt und weniger Bitterstoffe löst.',
 troubleAction0: 'Gröber mahlen',
 troubleIssue1: 'Schmeckt sauer, salzig oder wässrig?',
 troubleSolution1:
 'Sie extrahieren zu schwach. Mahlen Sie feiner, um die Kontaktoberfläche zu erhöhen und mehr Süße und Körper zu lösen.',
 troubleAction1: 'Feiner mahlen',
 },
};
