import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'convertitore-macinatura-caffe';
const title = 'Convertitore Dimensione Macinatura Caffè';
const description =
 'Guida interattiva alla macinatura con clic e livelli per regolare il tuo macinacaffè tra Espresso, V60, French Press e altro. Mappatura tecnica in micron per tutti i metodi di estrazione.';

const faqData = [
 {
 question: 'Perché la stessa impostazione di macinatura non funziona per tutti i caffè?',
 answer:
 'La densità dei chicchi varia in base al livello di tostatura e all\'origine. Una tostatura chiara è tipicamente più densa e richiede una macinatura più fine per essere estratta correttamente, mentre una tostatura scura è più porosa e necessita di un\'impostazione più grossolana.',
 },
 {
 question: 'Come faccio a sapere se devo macinare più fine o più grosso?',
 answer:
 'Lasciati guidare dal gusto: se il caffè ha un sapore amaro e secco, macina più grosso in modo che l\'acqua scorra più velocemente. Se ha un sapore acido, salato o acquoso, macina più fine per aumentare l\'area della superficie di contatto.',
 },
 {
 question: "Cos'è il 'channeling' e in che modo la macinatura lo influenza?",
 answer:
 'Il channeling si verifica quando l\'acqua trova un percorso di minor resistenza attraverso il letto di caffè. Una macinatura non uniforme o inappropriata per la pressione, specialmente nell\'espresso, favorisce questo problema e rovina l\'estrazione.',
 },
 {
 question: 'Posso usare questa tabella con un macinacaffè a lame?',
 answer:
 'I macinacaffè a lame producono particelle non uniformi, polvere fine e pezzi grandi contemporaneamente. I valori in micron sono indicativi, ma i risultati reali varieranno significativamente rispetto a un macinacaffè a macine.',
 },
 {
 question: 'Cosa significa l\'uniformità del macinacaffè nella visualizzazione?',
 answer:
 'La distribuzione delle particelle mostrata simula la reale uniformità di ogni macinacaffè. Un Comandante C40 con uniformità 0,95 produce particelle molto costanti; un Hario Skerton con 0,40 mostra molta più variazione di dimensione.',
 },
];

const howToData = [
 {
 name: 'Seleziona il tuo macinacaffè',
 text: 'Scegli il tuo modello dall\'elenco a discesa. Il convertitore mostrerà i clic o i livelli consigliati specificamente per la tua attrezzatura.',
 },
 {
 name: 'Seleziona il tuo metodo di estrazione',
 text: 'Fai clic sull\'icona del metodo che intendi utilizzare. Il pannello di controllo si aggiornerà con tutti i parametri tecnici rilevanti.',
 },
 {
 name: 'Interpreta l\'indicatore in micron',
 text: "Usa il valore in micron nel grafico a barre per capire la dimensione effettiva delle particelle. Il riferimento tattile (sale fino, zucchero semolato...) ti aiuta a calibrare visivamente.",
 },
 {
 name: 'Osserva la simulazione delle particelle',
 text: "La distribuzione dei punti mostra l'uniformità tipica del tuo macinacaffè. Un pattern più omogeneo significa un'estrazione più prevedibile e ripetibile.",
 },
 {
 name: 'Regola in base al gusto',
 text: 'Usa la guida diagnostica in fondo come riferimento. Se il caffè sa di amaro, vai un paio di clic più grosso. Se sa di acido, vai più fine. Regola sempre un passo alla volta.',
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
 inLanguage: 'it',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Domande Frequenti sulla Dimensione della Macinatura',
 faq: faqData,
 bibliographyTitle: 'Riferimenti su Macinatura ed Estrazione',
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
 step1Label: 'Passaggio 1: Selezione Attrezzatura',
 step2Label: 'Passaggio 2: Metodo di Estrazione',
 gaugeLabel: 'Mappa Tecnica delle Particelle (μm)',
 distributionLabel: 'Distribuzione Reale delle Particelle',
 refLabel: 'Riferimento',
 rangeMicrasLabel: 'Range μm',
 unitMicras: 'MICRON TARGET (μm)',
 unitClicks: 'CLIC CONSIGLIATI',
 unitLevel: 'LIVELLO CONSIGLIATO',
 suggestGrinderText: "Non vedi il tuo macinacaffè? Suggeriscilo",
 method0Name: 'Ibrik (Turco)',
 method0Ref: 'Talco / Farina fine',
 method0Desc: 'Polvere extra fine, quasi come farina. Essenziale per la sospensione del caffè turco.',
 method1Name: 'Espresso',
 method1Ref: 'Sale fino',
 method1Desc: 'L\'estrazione ad alta pressione richiede una macinatura molto fine per creare resistenza.',
 method2Name: 'Moka / AeroPress',
 method2Ref: 'Sale da tavola',
 method2Desc: 'Pressione media o immersione ibrida. Texture versatile e bilanciata.',
 method3Name: 'V60 / Filtro',
 method3Ref: 'Zucchero semolato',
 method3Desc: 'Metodi pour-over manuali, lo standard per esaltare dolcezza e acidità.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Sabbia grossa',
 method4Desc: 'Filtri spessi o breve immersione. Richiede un flusso costante e regolare.',
 method5Name: 'French Press',
 method5Ref: 'Sale grosso',
 method5Desc: 'L\'immersione prolungata richiede particelle grandi per filtrare attraverso la rete metallica.',
 method6Name: 'Cold Brew',
 method6Ref: 'Grani di pepe',
 method6Desc: 'L\'estrazione a freddo per molte ore richiede la macinatura più grossolana possibile.',
 troubleIssue0: 'Ha un sapore amaro, secco o astringente?',
 troubleSolution0:
 'Stai sovra-estraendo. Macina più grosso così l\'acqua scorre più velocemente ed estrae meno composti amari.',
 troubleAction0: 'Macina più grosso',
 troubleIssue1: 'Ha un sapore acido, salato o acquoso?',
 troubleSolution1:
 'Stai sotto-estraendo. Macina più fine per aumentare la superficie di contatto ed estrarre più zuccheri e corpo.',
 troubleAction1: 'Macina più fine',
 },
};
