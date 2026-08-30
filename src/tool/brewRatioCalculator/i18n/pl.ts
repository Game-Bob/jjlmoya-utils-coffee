import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

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
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
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
