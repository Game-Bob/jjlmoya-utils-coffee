import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'koffie-maalgraad-converter';
const title = 'Koffie Maalgraad Converter';
const description =
 'Interactieve maalgraadkaart met gids voor kliks en niveaus voor het afstellen van je molen voor Espresso, V60, French Press en meer. Technische micron-mapping voor alle extractiemethoden.';

const faqData = [
 {
 question: 'Waarom werkt dezelfde maalgraadinstelling niet voor alle koffiesoorten?',
 answer:
 'De dichtheid van bonen varieert per brandingsniveau en herkomst. Een lichte branding is doorgaans dichter en vereist een fijnere maling om goed te extraheren, terwijl een donkere branding poreuzer is en een grovere instelling nodig heeft.',
 },
 {
 question: 'Hoe weet ik of ik fijner of grover moet malen?',
 answer:
 'Laat je leiden door je smaak: als de koffie bitter en droog smaakt, maal dan grover zodat het water sneller stroomt. Als het zuur, zout of waterig smaakt, maal dan fijner om het contactoppervlak te vergroten.',
 },
 {
 question: 'Wat is \'channeling\' en hoe beïnvloedt de maling dit?',
 answer:
 'Channeling vindt plaats wanneer water de weg van de minste weerstand zoekt door het koffiebed. Een ongelijkmatige of ongeschikte maling voor de druk, vooral bij espresso, bevordert dit probleem en verpest de extractie.',
 },
 {
 question: 'Kan ik deze kaart gebruiken met een messenmolen?',
 answer:
 'Messenmolens produceren ongelijkmatige deeltjes, tegelijkertijd fijn poeder en grote brokken. De micronwaarden zijn indicatief, maar de werkelijke resultaten zullen aanzienlijk variëren in vergelijking met een molen met maalschijven.',
 },
 {
 question: 'Wat betekent de gelijkmatigheid van de molen in de visualisatie?',
 answer:
 'De getoonde deeltjesverdeling simuleert de werkelijke gelijkmatigheid van elke molen. Een Comandante C40 met 0,95 gelijkmatigheid produceert zeer consistente deeltjes; een Hario Skerton met 0,40 laat veel meer variatie in grootte zien.',
 },
];

const howToData = [
 {
 name: 'Selecteer je molen',
 text: 'Kies je model uit de dropdownlijst. De converter laat de aanbevolen kliks of niveaus zien die specifiek zijn voor jouw apparatuur.',
 },
 {
 name: 'Selecteer je extractiemethode',
 text: 'Klik op het icoon voor de methode die je gaat gebruiken. Het bedieningspaneel wordt bijgewerkt met alle relevante technische parameters.',
 },
 {
 name: 'Interpreteer de micron-indicator',
 text: 'Gebruik de micronwaarde in het staafdiagram om de werkelijke deeltjesgrootte te begrijpen. De tactiele referentie (fijn zout, basterdsuiker...) helpt je bij het visueel kalibreren.',
 },
 {
 name: 'Observeer de deeltjessimulatie',
 text: 'De verdeling van de stippen laat de typische gelijkmatigheid van je molen zien. Een homogener patroon betekent een voorspelbaardere en reproduceerbaardere extractie.',
 },
 {
 name: 'Pas aan op smaak',
 text: 'Gebruik de diagnosegids onderaan als referentie. Als de koffie bitter smaakt, ga dan een paar kliks grover. Als het zuur smaakt, ga dan fijner. Pas altijd één stap tegelijk aan.',
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
 inLanguage: 'nl',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Veelgestelde vragen over de maalgraad van koffie',
 faq: faqData,
 bibliographyTitle: 'Referenties over maling en extractie',
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
 step1Label: 'Stap 1: Selectie Apparatuur',
 step2Label: 'Stap 2: Extractiemethode',
 gaugeLabel: 'Technische deeltjeskaart (μm)',
 distributionLabel: 'Werkelijke deeltjesverdeling',
 refLabel: 'Referentie',
 rangeMicrasLabel: 'Bereik μm',
 unitMicras: 'DOEL-MICRONS (μm)',
 unitClicks: 'AANBEVOLEN KLIKS',
 unitLevel: 'AANBEVOLEN NIVEAU',
 suggestGrinderText: "Staat je molen er niet bij? Stel hem voor",
 method0Name: 'Ibrik (Turks)',
 method0Ref: 'Talkpoeder / Bloem',
 method0Desc: 'Extra fijn poeder, bijna als bloem. Essentieel voor de suspensie van Turkse koffie.',
 method1Name: 'Espresso',
 method1Ref: 'Fijn zout',
 method1Desc: 'Extractie onder hoge druk vereist een zeer fijne maling om weerstand te creëren.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Tafelzout',
 method2Desc: 'Gemiddelde druk of hybride infusie. Veelzijdige en gebalanceerde textuur.',
 method3Name: 'V60 / Filter',
 method3Ref: 'Kristalsuiker',
 method3Desc: 'Handmatige opschenkmethoden, de standaard voor het benadrukken van zoetheid en zuurgraad.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Grof zand',
 method4Desc: 'Dikke filters of korte infusie. Vereist een constante en gestage stroom.',
 method5Name: 'French Press',
 method5Ref: 'Grof zout',
 method5Desc: 'Langdurige infusie heeft grote deeltjes nodig om door het metalen gaas te filteren.',
 method6Name: 'Cold Brew',
 method6Ref: 'Peperkorrels',
 method6Desc: 'Koude extractie over vele uren vereist de grofste maling die mogelijk is.',
 troubleIssue0: 'Smaakt het bitter, droog of wrang?',
 troubleSolution0:
 'Je extraheert te veel. Maal grover zodat het water sneller stroomt en minder bittere stoffen extraheert.',
 troubleAction0: 'Maal grover',
 troubleIssue1: 'Smaakt het zuur, zout of waterig?',
 troubleSolution1:
 'Je extraheert te weinig. Maal fijner om het contactoppervlak te vergroten en meer suikers en body te extraheren.',
 troubleAction1: 'Maal fijner',
 },
};
