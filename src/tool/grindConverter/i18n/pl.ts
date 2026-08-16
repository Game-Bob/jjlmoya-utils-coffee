import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'konwerter-mielenia-kawy';
const title = 'Konwerter Stopnia Mielenia Kawy';
const description =
 'Interaktywna tabela mielenia z przewodnikiem po kliknięciach i poziomach dla Twojego młynka (Espresso, V60, French Press i inne). Techniczne mapowanie mikronów dla wszystkich metod ekstrakcji.';

const faqData = [
 {
 question: 'Dlaczego to samo ustawienie mielenia nie działa dla wszystkich kaw?',
 answer:
 'Gęstość ziarna różni się w zależności od stopnia palenia i pochodzenia. Kawa jasno palona jest zazwyczaj gęstsza i wymaga drobniejszego mielenia dla właściwej ekstrakcji, podczas gdy kawa ciemno palona jest bardziej porowata i potrzebuje grubszego ustawienia.',
 },
 {
 question: 'Skąd mam wiedzieć, czy mielić drobniej czy grubiej?',
 answer:
 'Kieruj się smakiem: jeśli kawa jest gorzka i sucha, miel grubiej, aby woda przepływała szybciej. Jeśli jest kwaśna, słona lub wodnista, miel drobniej, aby zwiększyć powierzchnię styku.',
 },
 {
 question: 'Co to jest "channeling" i jak wpływa na niego mielenie?',
 answer:
 'Kanałowanie (channeling) występuje, gdy woda znajduje ścieżkę najmniejszego oporu przez złoże kawy. Nierówne lub nieodpowiednie mielenie dla danego ciśnienia, szczególnie w espresso, sprzyja temu problemowi i niszczy ekstrakcję.',
 },
 {
 question: 'Czy mogę używać tej tabeli z młynkiem ostrzowym?',
 answer:
 'Młynki ostrzowe produkują niejednorodne cząsteczki, jednocześnie drobny pył i duże kawałki. Wartości mikronów są orientacyjne, ale rzeczywiste wyniki będą się znacznie różnić w porównaniu z młynkiem żarnowym.',
 },
 {
 question: 'Co oznacza jednorodność młynka w wizualizacji?',
 answer:
 'Pokazany rozkład cząsteczek symuluje rzeczywistą jednorodność każdego młynka. Comandante C40 o jednorodności 0,95 produkuje bardzo równe cząsteczki; Hario Skerton z 0,40 wykazuje znacznie większe zróżnicowanie wielkości.',
 },
 { question: 'Jak dopasować mielenie do smaku?', answer: 'Jeśli kawa jest gorzka lub cierpka, ustaw grubsze mielenie. Jeśli jest kwaśna lub wodnista, ustaw drobniejsze i zmieniaj tylko jeden parametr.' },
].slice(0, 5);

const howToData = [
 {
 name: 'Wybierz swój młynek',
 text: 'Wybierz model z listy rozwijanej. Konwerter pokaże zalecane kliknięcia lub poziomy specyficzne dla Twojego sprzętu.',
 },
 {
 name: 'Wybierz metodę ekstrakcji',
 text: 'Kliknij ikonę metody, której zamierzasz użyć. Panel sterowania zaktualizuje się o wszystkie istotne parametry techniczne.',
 },
 {
 name: 'Zinterpretuj wskaźnik mikronów',
 text: "Użyj wartości mikronów na wykresie słupkowym, aby zrozumieć rzeczywistą wielkość cząsteczek. Odniesienie dotykowe (sól drobna, cukier kryształ...) pomaga w kalibracji wizualnej.",
 },
 {
 name: 'Obserwuj symulację cząsteczek',
 text: "Rozmieszczenie punktów pokazuje typową jednorodność Twojego młynka. Bardziej jednorodny wzór oznacza bardziej przewidywalną i powtarzalną ekstrakcję.",
 },
 {
 name: 'Dostosuj według smaku',
 text: 'Skorzystaj z przewodnika diagnostycznego na dole. Jeśli kawa smakuje gorzko, przestaw o kilka kliknięć w stronę grubszego mielenia. Jeśli jest kwaśna, miel drobniej. Zawsze dostosowuj o jeden krok na raz.',
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
 inLanguage: 'pl',
};

export const content: ToolLocaleContent<GrindConverterUI> = {
 slug,
 title,
 description,
 faqTitle: 'Często zadawane pytania dotyczące mielenia kawy',
 faq: faqData,
 bibliographyTitle: 'Referencje dotyczące mielenia i ekstrakcji',
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
 step1Label: 'Krok 1: Wybór Sprzętu',
 step2Label: 'Krok 2: Metoda Ekstrakcji',
 gaugeLabel: 'Techniczna Mapa Cząsteczek (μm)',
 distributionLabel: 'Rzeczywisty Rozkład Cząsteczek',
 refLabel: 'Odniesienie',
 rangeMicrasLabel: 'Zakres μm',
 unitMicras: 'DOCELOWE MIKRONY (μm)',
 unitClicks: 'ZALECANE KLIKNIĘCIA',
 unitLevel: 'ZALECANY POZIOM',
 suggestGrinderText: "Nie widzisz swojego młynka? Zaproponuj go",
 method0Name: 'Ibrik (Po turecku)',
 method0Ref: 'Talk / Drobna mąka',
 method0Desc: 'Bardzo drobny pył, niemal jak mąka. Niezbędny do zawiesiny w kawie po turecku.',
 method1Name: 'Espresso',
 method1Ref: 'Sól drobna',
 method1Desc: 'Ekstrakcja pod wysokim ciśnieniem wymaga bardzo drobnego mielenia w celu stworzenia oporu.',
 method2Name: 'Kawiarka / AeroPress',
 method2Ref: 'Sól kuchenna',
 method2Desc: 'Średnie ciśnienie lub hybrydowa immersja. Wszechstronna i zrównoważona tekstura.',
 method3Name: 'V60 / Filtr',
 method3Ref: 'Cukier kryształ',
 method3Desc: 'Ręczne metody przelewowe, standard dla podkreślenia słodyczy i kwasowości.',
 method4Name: 'Chemex / Clever',
 method4Ref: 'Gruby piasek',
 method4Desc: 'Grube filtry lub krótka immersja. Wymaga stałego i stabilnego przepływu.',
 method5Name: 'French Press',
 method5Ref: 'Sól gruba',
 method5Desc: 'Dłuższa immersja wymaga dużych cząsteczek, aby przefiltrować je przez metalowe sitko.',
 method6Name: 'Cold Brew',
 method6Ref: 'Ziarna pieprzu',
 method6Desc: 'Ekstrakcja na zimno przez wiele godzin wymaga najgrubszego możliwego mielenia.',
 troubleIssue0: 'Smakuje gorzko, sucho lub cierpko?',
 troubleSolution0:
 'Następuje nadestrakcja. Miel grubiej, aby woda płynęła szybciej i wydobywała mniej gorzkich związków.',
 troubleAction0: 'Miel grubiej',
 troubleIssue1: 'Smakuje kwaśno, słono lub wodniście?',
 troubleSolution1:
 'Następuje niedoekstrakcja. Miel drobniej, aby zwiększyć powierzchnię styku i wydobyć więcej cukrów i ciała.',
 troubleAction1: 'Miel drobniej',
 },
};
