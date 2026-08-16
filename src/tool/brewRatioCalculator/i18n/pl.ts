import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-proporcji-kawy';
const title = 'Kalkulator Proporcji Parzenia Kawy';
const description =
 'Oblicz dokładną ilość gramów kawy lub mililitrów wody dla Twojej idealnej proporcji (1:15, 1:16...). Zawiera wynik w filiżance, przewodnik zalewania, tryb kawy mrożonej i zapisane przepisy.';

const faqData = [
 {
 question: 'Co oznacza proporcja kawy 1:15?',
 answer:
 'Oznacza to, że na każdy gram zmielonej kawy używasz 15 mililitrów (lub gramów) wody. Przy 20 g kawy zalewasz 300 ml wody. Jest to standardowa proporcja zalecana przez Specialty Coffee Association dla metod przelewowych, takich jak V60, Chemex czy Aeropress.',
 },
 {
 question: 'Dlaczego w mojej filiżance jest mniej kawy niż wlałem?',
 answer:
 'Ponieważ zmielona kawa zatrzymuje wodę podczas ekstrakcji. Średnio każdy gram kawy pochłania około 2 ml płynu. Jeśli wlejesz 300 ml na 20 g kawy, otrzymasz około 260 ml w filiżance. Ten kalkulator pokazuje rzeczywisty wynik.',
 },
 {
 question: 'Co to jest bloom lub preinfuzja?',
 answer:
 'Jest to pierwsze zalanie wodą, równe dwukrotności wagi kawy (2 ml na gram). Wykonuje się je w celu odgazowania świeżej kawy: uwięziony podczas palenia CO2 ulatnia się i pozwala wodzie równomiernie ekstrahować związki smakowe. Jeśli nie ma widocznego bloomu, kawa została zmielona lub wypalona już jakiś czas temu.',
 },
 {
 question: 'Jak zrobić kawę mrożoną, żeby nie była wodnista?',
 answer:
 'Użyj techniki flash chilling: przygotuj 60% całkowitej ilości wody jako gorącą wodę o temperaturze 90-96 stopni, a pozostałe 40% włóż jako lód do dzbanka. Zaparz gorącą kawę bezpośrednio na lód. Szybkie schłodzenie zatrzymuje aromaty. Ten kalkulator automatycznie przelicza ilości po aktywowaniu trybu Iced Coffee.',
 },
 {
 question: 'Jaka jest najlepsza proporcja dla Aeropressu?',
 answer:
 'Od 1:12 do 1:15 w zależności od preferencji. Jeśli pijesz czarną kawę, 1:15 jest zrównoważone. Jeśli używasz jej jako bazy do napojów mlecznych lub chcesz uzyskać wysokie stężenie, zejdź do 1:12 lub 1:13. Aeropress jest najbardziej wszechstronną metodą właśnie dlatego, że bardzo dobrze radzi sobie z różnymi proporcjami.',
 },
 {
 question: ' Czy mogę zapisać moje ulubione przepisy?',
 answer:
 'Tak. Gdy znajdziesz idealną proporcję i ilość dla swojej ulubionej kawy, naciśnij przycisk Zapisz przepis, nadaj mu nazwę (np. Poranne V60), a zostanie on zapisany w Twojej przeglądarce. Możesz go przywołać w dowolnym momencie jednym kliknięciem.',
 },
];

const howToData = [
 {
 name: 'Wybierz tryb obliczeń',
 text: 'Wybierz, czy zaczynasz od gramów kawy, które masz, czy od pojemności filiżanki (ml wody). Kalkulator dostosuje wszystkie wyniki do wybranego trybu.',
 },
 {
 name: 'Wpisz ilość',
 text: 'Wpisz gramy kawy lub mililitry wody, których zamierzasz użyć. Kalkulator automatycznie obliczy drugą wartość na podstawie wybranej proporcji.',
 },
 {
 name: 'Wybierz intensywność',
 text: 'Wybierz pomiędzy Mocną (1:12-14), Zrównoważoną (1:15-16), Lekką (1:17-18) lub wpisz własną proporcję. Każda opcja odpowiada innemu profilowi smakowemu.',
 },
 {
 name: 'Aktywuj tryb kawy mrożonej (opcjonalnie)',
 text: 'Jeśli przygotowujesz kawę mrożoną, aktywuj przełącznik. Kalkulator automatycznie podzieli wodę na gorącą (60%) i lód (40%), wykorzystując technikę flash chilling.',
 },
 {
 name: 'Postępuj zgodnie z przewodnikiem zalewania',
 text: 'Skorzystaj z przewodnika fazowego (Bloom i Zalanie końcowe), aby ustrukturyzować proces parzenia. Każda faza wskazuje dokładnie, ile wody wlać i kiedy.',
 },
 {
 name: 'Zapisz przepis',
 text: 'Gdy znajdziesz idealną proporcję, zapisz ją pod opisową nazwą. Twoje przepisy są przechowywane w przeglądarce na potrzeby przyszłych sesji.',
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
 inLanguage: 'pl',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Często zadawane pytania dotyczące proporcji parzenia',
 faq: faqData,
 bibliographyTitle: 'Referencje techniczne i standardy SCA',
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
 modeCoffee: 'Mam kawę',
 modeHintCoffee: 'Powiedz mi ile wody',
 modeWater: 'Mam wodę',
 modeHintWater: 'Powiedz mi ile kawy zmielić',
 inputLabelCoffee: 'Gramy kawy, które masz',
 inputLabelWater: 'Pojemność filiżanki (ml)',
 intensityLabel: 'Intensywność kawy',
 intensityStrong: 'Mocna',
 intensityBalanced: 'Zrównoważona',
 intensityLight: 'Lekka',
 intensityCustom: 'Własna',
 customCoffeeLabel: 'Kawa',
 customWaterLabel: 'Woda',
 icedModeLabel: 'Tryb kawy mrożonej',
 recipeLabel: 'Twój dokładny przepis',
 resultTitle: 'Wynik',
 resultCoffeeLabel: 'Kawa',
 resultCoffeeSub: 'Drobne-średnie zmielenie',
 resultHotWaterLabel: 'Gorąca woda',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Gorąca woda (60%)',
 resultIceLabel: 'Lód',
 resultIceSub: 'W dzbanku',
 resultCupLabel: 'W Twojej filiżance',
 resultCupSub: 'Kawa zatrzymuje ~2ml/g',
 pouringGuideLabel: 'Przewodnik zalewania',
 favoritesLabel: 'Moje ulubione przepisy',
 saveBtn: '+ Zapisz ten przepis',
 favEmptyText: 'Brak zapisanych przepisów. Skonfiguruj idealne parzenie i zapisz je.',
 modalTitle: 'Nazwij swój przepis',
 modalPlaceholder: 'Np.: "Poranne V60"',
 modalCancel: 'Anuluj',
 modalConfirm: 'Zapisz',
 phaseBloomTemplate: 'Bloom: Wlej {bloomMl} ml wody spiralnym ruchem. Odczekaj {bloomSeconds} sekund na odgazowanie kawy.',
 phasePourTemplate: 'Zalanie końcowe: Dodaj resztę, aby uzyskać łącznie {hotWaterMl} ml, w {pourCount} wolnych zalaniach.',
 phaseIcedTemplate: 'Mrożona: Zaparz gorącą kawę bezpośrednio na {iceMl} g lodu w dzbankku.',
 cupWarningTemplate: 'Filiżanka mieści tylko {inCupMl} ml. Kawa zatrzymuje płyn.',
 favModeCoffee: 'g kawy',
 favModeWater: 'ml wody',
 favModeIced: ' - Mrożona',
 },
};
