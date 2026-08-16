import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-wody-do-kawy-sca';
const title = 'Kalkulator Wody do Kawy SCA';
const description =
 'Oblicz dokładne stężenia minerałów dla kawy specialty. Profile SCA, Barista Hustle i Hendon. Kontroluj magnez, wapń i wodorowęglany, aby zmaksymalizować smak i chronić swój ekspres.';

const faqData = [
 {
 question: 'Jaki jest standard jakości wody SCA?',
 answer:
 'Specialty Coffee Association definiuje standard techniczny dla wody do parzenia, określając optymalne zakresy twardości ogólnej (GH), zasadowości (KH), pH i sodu, aby osiągnąć zrównoważoną ekstrakcję, która wzmacnia smak bez uszkadzania sprzętu.',
 },
 {
 question: 'Dlaczego nie używać po prostu wody z kranu?',
 answer:
 'Woda z kranu różni się znacznie w zależności od lokalizacji i pory roku. Może zawierać chlor, nadmiar kamienia lub poziom minerałów, które maskują smak kawy specialty i uszkadzają bojlery oraz uszczelki. Mineralizacja wody destylowanej daje pełną kontrolę i powtarzalne rezultaty.',
 },
 {
 question: 'Skąd wziąć sole mineralne?',
 answer:
 'Sól Epsom (siarczan magnezu) i wodorowęglan sodu (soda oczyszczona) są dostępne w aptekach i supermarketach. Chlorek wapnia jest powszechny w sklepach piwowarskich. Zawsze upewnij się, że są one klasy spożywczej.',
 },
 {
 question: 'Czy jest to bezpieczne dla mojego ekspresu do kawy?',
 answer:
 'Kalkulator zawiera wskaźnik ryzyka w czasie rzeczywistym. Bardzo czysta woda koroduje elementy metalowe; bardzo twarda woda powoduje osadzanie się kamienia. Profile SCA Ideal i Barista Hustle zostały zaprojektane tak, aby równoważyć trwałość sprzętu z jakością smaku.',
 },
 {
 question: 'Jaka jest różnica między magnezem a wapniem w kawie?',
 answer:
 'Magnez skuteczniej ekstrahuje owocowe i słodkie związki smakowe i jest preferowanym minerałem w metodach przelewowych. Wapń zapewnia więcej ciała i jedwabistą teksturę, ale ma większą tendencję do tworzenia osadów kamienia w bojlerach.',
 },
 { question: 'Czy mogę zapisać używane stężenia?', answer: 'Tak. Kalkulator zapisuje wartości w przeglądarce, aby własny przepis był dostępny podczas następnej wizyty.' },
];

const howToData = [
 {
 name: 'Zdobądź czystą wodę bazową',
 text: 'Kup wodę destylowaną lub demineralizowaną, albo skorzystaj z systemu odwróconej osmozy. Celem jest rozpoczęcie od 0 ppm całkowitej ilości rozpuszczonych substancji stałych dla pełnej kontroli nad mineralizacją.',
 },
 {
 name: 'Przygotuj butelki z koncentratami podstawowymi',
 text: 'Rozpuść każdą sól oddzielnie w 100 ml wody destylowanej: 2,46 g soli Epsom dla magnezu, 1,47 g CaCl2 dla wapnia i 1,68 g wodorowęglanu dla bufora.',
 },
 {
 name: 'Wybierz profil docelowy',
 text: 'Wybierz SCA Ideal (zrównoważony), Barista Hustle (słodycz i jasność), Hendon (ciało), Melbourne (delikatny) lub stwórz profil niestandardowy z własnymi wartościami GH i KH.',
 },
 {
 name: 'Wpisz objętość końcową',
 text: 'Wpisz ilość wody, którą chcesz zmineralizować, w litrach. Kalkulator automatycznie dostosuje dawki koncentratu do tej konkretnej objętości.',
 },
 {
 name: 'Dodaj koncentraty i dopełnij wodą destylowaną',
 text: 'Używając precyzyjnej strzykawki, dodaj wskazane mililitry każdego koncentratu do naczynia i uzupełnij do całkowitej objętości wodą destylowaną.',
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

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Często zadawane pytania dotyczące kalkulatora wody do kawy SCA',
 faq: faqData,
 bibliographyTitle: 'Referencje techniczne i standardy SCA',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: [
 {
 type: 'title',
 text: 'Química del Agua para Café: Por qué el H₂O es el ingrediente olvidado',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'El café es agua en un 98-99%. Sin embargo, la composición mineral de ese agua es el factor diferencial más ignorado en la cadena de calidad. Un café de especialidad de Etiopía extraído con agua del grifo de Madrid puede saber completamente distinto al mismo café preparado con agua mineralizada siguiendo el estándar SCA. Nuestra <strong>calculadora de agua para café</strong> te permite formular el agua perfecta desde cero, usando sales minerales comunes y partiendo de agua destilada.',
 },
 {
 type: 'summary',
 title: '¿Por qué la mineralización del agua importa tanto?',
 items: [
 '<strong>GH (Dureza General):</strong> La suma de iones Magnesio y Calcio determina la capacidad del agua para disolver compuestos de sabor del café.',
 '<strong>KH (Alcalinidad):</strong> La cantidad de bicarbonato controla el pH durante la extracción. Un KH bajo produce café agrio; un KH alto lo aplana.',
 '<strong>Repetibilidad:</strong> El agua municipal cambia por temporada y ciudad. El agua mineralizada es constante y reproducible.',
 '<strong>Protección del equipo:</strong> Los niveles correctos evitan tanto la corrosión (agua muy pura) como las incrustaciones de cal (agua muy dura).',
 ],
 },
 {
 type: 'title',
 text: 'El Estándar SCA: Los Límites Técnicos del Agua Perfecta para Café',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'La Specialty Coffee Association publicó en 2015 su estándar de calidad del agua. Tras años de investigación sensorial y química, estableció rangos ideales para cada parámetro. No son números arbitrarios: son el resultado de catas a ciegas con profesionales donde se maximizó la percepción de acidez equilibrada, dulzor y cuerpo.',
 },
 {
 type: 'table',
 headers: ['Parámetro', 'Mínimo', 'Ideal SCA', 'Máximo'],
 rows: [
 ['Dureza Total (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
 ['Alcalinidad (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
 ['pH', '6.5', '7.0', '7.5'],
 ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
 ],
 },
 {
 type: 'title',
 text: 'Magnesio vs Calcio: La Batalla Mineral que Define tu Taza',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'No todos los minerales actúan igual sobre el café. El investigador Christopher Hendon demostró que el <strong>magnesio</strong> forma ligandos con las moléculas de sabor más complejas y volátiles, extrayendo notas frutales y florales con mayor eficiencia. El <strong>calcio</strong>, en cambio, extrae compuestos más pesados, aportando cuerpo y textura sedosa pero con menos brillo aromático.',
 },
 {
 type: 'list',
 items: [
 '<strong>Magnesio puro (ratio 1:0):</strong> Máxima complejidad aromática y fruta. Ideal para cafés naturales o de perfil frutal. Mayor riesgo de sobresalir la acidez.',
 '<strong>Calcio puro (ratio 0:1):</strong> Cuerpo denso y sedoso. Ideal para espresso clásico y tuestes oscuros. Mayor riesgo de incrustaciones en calderas.',
 '<strong>Mix equilibrado (SCA 1:0, Hendon 1:1):</strong> La mayoría de perfiles de calidad usan magnesio como ión principal pero añaden algo de calcio para equilibrar la textura.',
 ],
 },
 {
 type: 'title',
 text: 'El Semáforo de Seguridad: Protege tu Máquina de Espresso',
 level: 2,
 },
 {
 type: 'paragraph',
 html: 'Nuestra calculadora incluye un <strong>análisis de riesgo en tiempo real</strong> basado en los valores de GH y KH que introduces. El índice de corrosión evalúa si el agua es demasiado pura y agresiva para los metales. El índice de cal mide si el KH y GH combinados generarán depósitos en calderas y tuberías.',
 },
 {
 type: 'tip',
 title: 'Regla práctica del barista profesional',
 html: '<p>Para máquinas de espresso con caldera de latón o cobre, nunca uses perfiles con KH inferior a 40 mg/L de forma continua. El agua muy pura es corrosiva a largo plazo. Para métodos de filtro (V60, Chemex, Aeropress) no hay caldera que proteger, por lo que puedes usar perfiles más delicados como Melbourne sin problema.</p>',
 },
 {
 type: 'title',
 text: 'Cómo Preparar las Botellas de Concentrado en Casa',
 level: 3,
 },
 {
 type: 'paragraph',
 html: 'La clave para una mineralización precisa es trabajar con <strong>concentrados stock</strong> en lugar de añadir sales directamente al agua final. Un concentrado de 2,46 g de sales de Epsom en 100 ml de agua destilada te permite dosificar con jeringas de 1 ml con una precisión de ±0,01 ml. Esta metodología, popularizada por Barista Hustle, convierte la química del café en algo tan sencillo como mezclar cócteles.',
 },
 {
 type: 'stats',
 items: [
 { label: 'GH ideal SCA', value: '68 mg/L', icon: 'mdi:water' },
 { label: 'KH ideal SCA', value: '40 mg/L', icon: 'mdi:water-percent' },
 { label: 'Coste aproximado por litro', value: '<0.05€', icon: 'mdi:currency-eur' },
 ],
 columns: 3,
 },
 ],
 ui: {
 sectionMixTitle: 'Konfiguracja mieszanki',
 labelVolume: 'Objętość końcowa',
 labelProfile: 'Docelowy profil wody',
 customProfileBtn: 'Własny',
 labelGH: 'Docelowe GH',
 labelKH: 'Docelowe KH',
 concentratesTitle: 'Butelki z koncentratami (g/100ml)',
 saltMgName: 'Magnez (Epsom)',
 saltCaName: 'Wapń (CaCl2)',
 saltBufName: 'Wodorowęglan (Soda)',
 recipeTitle: 'Przepis',
 labelMg: 'Magnez:',
 labelCa: 'Wapń:',
 labelBuffer: 'Wodorowęglan:',
 labelDistilledWater: 'Woda destylowana do',
 copyBtn: 'Kopiuj przepis',
 copiedText: 'Skopiowano!',
 safetyMetalsTitle: 'Bezpieczeństwo metali',
 safetyScaleTitle: 'Ryzyko osadzania kamienia',
 calculatingText: 'Obliczanie...',
 glossaryTitle: 'Szybki przewodnik po minerałach',
 profileSubTemplate: 'Cel: {gh} GH / {kh} KH',
 customProfileName: 'Własny',
 corrosionHigh: 'Niebezpieczeństwo: Bardzo agresywna woda. Może korodować bojlery i elementy miedziane.',
 corrosionMedium: 'Akceptowalne: Umiarkowane ryzyko korozji. Zalecane do metod przelewowych, zachowaj ostrożność przy ekspresach.',
 corrosionLow: 'Bezpieczne: Woda ma wystarczającą zdolność buforową, aby chronić metale.',
 scaleHigh: 'Niebezpieczeństwo: Nieuchronne osadzanie się kamienia. Używaj wyłącznie w ręcznych metodach przelewowych.',
 scaleMedium: 'Ostrzeżenie: Może powodować osadzanie się kamienia w ekspresach do kawy z upływem czasu.',
 scaleLow: 'Bezpieczne: Brak znaczącego ryzyka osadzania się kamienia.',
 copyTemplate:
 'Przepis na wodę do kawy ({profileName}):\n- Objętość: {liters}L\n- Koncentrat magnezu: {mg}ml\n- Koncentrat wapnia: {ca}ml\n- Koncentrat wodorowęglanu: {buf}ml\n- Woda destylowana: {water}ml',
 glossary0Term: 'Twardość ogólna (GH)',
 glossary0Desc:
 'Suma wapnia i magnezu. Magnez wzmacnia słodycz i złożoność; wapń dodaje ciało i teksturę.',
 glossary1Term: 'Zasadowość (KH)',
 glossary1Desc:
 'Zdolność wody do neutralizowania kwasów. Wysokie KH tłumi kwasowość kawy; niskie KH sprawia, że smakuje ona kwaśno.',
 glossary2Term: 'TDS (Suma rozpuszczonych substancji stałych)',
 glossary2Desc: 'W wodzie mineralizowanej TDS reprezentuje łączne stężenie wszystkich dodanych soli mineralnych.',
 glossary3Term: 'Magnez',
 glossary3Desc:
 'Skuteczniej ekstrahuje złożone owocowe związki smakowe. Preferowany minerał do parzenia kawy specialty.',
 },
};
