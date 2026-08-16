import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kaffemalnings-konverterare';
const title = 'Konverterare för malningsgrad av kaffe';
const description =
 'Interaktiv malningsgradsstabell med klicks och nivåer för att justera din kvarn för Espresso, V60, franskpress och mer. Teknisk mikron-kartläggning för alla bryggmetoder.';

const faqData = [
 {
 question: 'Varför fungerar inte samma malningsgrad för alla kaffesorter?',
 answer:
 'Bönornas densitet varierar beroende på rostningsgrad och ursprung. Ett ljusrostat kaffe är vanligtvis tätare och kräver en finare malning för korrekt extraktion, medan ett mörkrostat kaffe är mer poröst och behöver en grövre inställning.',
 },
 {
 question: 'Hur vet jag om jag ska mala finare eller grövre?',
 answer:
 'Låt smaken vägleda dig: om kaffet smakar bittert och torrt, mal grövre så att vattnet rinner igenom snabbare. Om det smakar surt, salt eller vattnigt, mal finare för att öka kontaktytan.',
 },
 {
 question: 'Vad är "channeling" och hur påverkar malningsgraden det?',
 answer:
 'Channeling uppstår när vattnet hittar en väg med minsta motstånd genom kaffebädden. En ojämn malning eller en malningsgrad som inte passar trycket, särskilt vid espresso, främjar detta problem och förstör extraktionen.',
 },
 {
 question: 'Kan jag använda den här tabellen med en knivkvarn?',
 answer:
 'Knivkvarnar producerar ojämna partiklar, både fint pulver och stora bitar samtidigt. Mikron-värdena är indikativa, men de faktiska resultaten kommer att variera avsevärt jämfört med en kvarn med malstenar.',
 },
 {
 question: 'Vad betyder kvarnens enhetlighet i visualiseringen?',
 answer:
 'Partikeldistributionen som visas simulerar den faktiska enhetligheten för varje kvarn. En Comandante C40 med 0,95 i enhetlighet producerar mycket jämna partiklar; en Hario Skerton med 0,40 visar mycket större storleksvariation.',
 },
 { question: 'Hur justerar jag malningen efter smaken?', answer: 'Om kaffet är bittert eller strävt, mal grövre. Om det är surt eller tunt, mal finare och ändra bara en inställning åt gången.' },
].slice(0, 5);

const howToData = [
 {
 name: 'Välj din kvarn',
 text: 'Välj din modell från listan. Konverteraren visar rekommenderade klicks eller nivåer specifikt för din utrustning.',
 },
 {
 name: 'Välj din bryggmetod',
 text: 'Klicka på ikonen för den metod du tänker använda. Kontrollpanelen uppdateras med alla relevanta tekniska parametrar.',
 },
 {
 name: 'Tolka mikron-indikatorn',
 text: 'Använd mikron-värdet i stapeldiagrammet för att förstå den faktiska partikelstorleken. Den taktila referensen (fint salt, strösocker...) hjälper dig att kalibrera visuellt.',
 },
 {
 name: 'Observera partikelsimuleringen',
 text: 'Punktfördelningen visar din kvarns typiska enhetlighet. Ett mer homogent mönster innebär en mer förutsägbar och repeterbar extraktion.',
 },
 {
 name: 'Justera efter smak',
 text: 'Använd diagnosguiden längst ner som referens. Om kaffet smakar bittert, gå ett par klicks grövre. Om det smakar surt, gå finare. Justera alltid ett steg i taget.',
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
 inLanguage: 'sv',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Vanliga frågor om malningsgrad för kaffe',
 faq: faqData,
 bibliographyTitle: 'Referenser om malning och extraktion',
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
 step1Label: 'Steg 1: Val av utrustning',
 step2Label: 'Steg 2: Extraktionsmetod',
 gaugeLabel: 'Teknisk partikelkarta (μm)',
 distributionLabel: 'Faktisk partikelfördelning',
 refLabel: 'Referens',
 rangeMicrasLabel: 'Intervall μm',
 unitMicras: 'MÅL-MIKRON (μm)',
 unitClicks: 'REKOMMENDERADE KLICKS',
 unitLevel: 'REKOMMENDERAD NIVÅ',
 suggestGrinderText: "Hittar du inte din kvarn? Föreslå den",
 method0Name: 'Ibrik (Turkiskt)',
 method0Ref: 'Talk / Fint mjöl',
 method0Desc: 'Extra fint pulver, nästan som mjöl. Essentiellt för turkiskt kaffe.',
 method1Name: 'Espresso',
 method1Ref: 'Fint salt',
 method1Desc: 'Högtrycksextraktion kräver mycket fin malning för att skapa motstånd.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Bordssalt',
 method2Desc: 'Medelhögt tryck eller hybridimmersion. Mångsidig och balanserad textur.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Strösocker',
 method3Desc: 'Manuella pour-over-metoder, standarden för att framhäva sötma och syra.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Grov sand',
 method4Desc: 'Tjocka filter eller kort immersion. Kräver ett konstant och stadigt flöde.',
 method5Name: 'French Press',
 method5Ref: 'Grovt salt',
 method5Desc: 'Utökad immersion behöver stora partiklar för att filtreras genom metallnätet.',
 method6Name: 'Cold Brew',
 method6Ref: 'Pepparkorn',
 method6Desc: 'Kallextraktion under många timmar kräver den grövsta malningen som är möjlig.',
 troubleIssue0: 'Smakar det bittert, torrt eller kärvt?',
 troubleSolution0:
 'Du överextraherar. Mal grövre så att vattnet rinner snabbare och extraherar färre bittra ämnen.',
 troubleAction0: 'Mal grövre',
 troubleIssue1: 'Smakar det surt, salt eller vattnigt?',
 troubleSolution1:
 'Du underextraherar. Mal finare för att öka kontaktytan och extrahera mer socker och fyllighet.',
 troubleAction1: 'Mal finare',
 },
};
