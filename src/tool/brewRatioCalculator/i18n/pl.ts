import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';

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
  bibliography: [
    {
      name: 'Specialty Coffee Association: Water Quality Handbook',
      url: 'https://sca.coffee/research/water-quality',
    },
    {
      name: 'SCA: Brewing Control Chart and Golden Cup Standards',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: The Brew Ratio',
      url: 'https://www.baristahustle.com/blog/the-coffee-to-water-ratio/',
    },
    {
      name: 'Perfect Daily Grind: Understanding Coffee Extraction',
      url: 'https://perfectdailygrind.com/2017/09/understanding-coffee-extraction/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator proporcji kawy: Mistrzowski przewodnik po idealnej ekstrakcji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Parzenie filiżanki kawy specialty nie jest subiektywnym aktem kulinarnym; to eksperyment z zakresu <strong>chemii płynów</strong> i <strong>transferu masy</strong>. W centrum tego procesu leży koncepcja <strong>Brew Ratio</strong>, krytyczna miara, która dyktuje ilościową zależność między substancją rozpuszczoną (zmielona kawa) a rozpuszczalnikiem (woda). Nasz kalkulator integruje standardy <em>Specialty Coffee Association (SCA)</em> oraz zasady termodynamiki stosowanej, aby umożliwić baristom i entuzjastom osiągnięcie idealnej powtarzalności ekstrakcji.',
    },
    {
      type: 'summary',
      title: 'Czego dowiesz się o proporcjach kawy',
      items: [
        '<strong>Brew Ratio:</strong> Jak zależność wagowa między kawą a wodą (np. 1:15) określa potencjalną moc i profil sensoryczny Twojej filiżanki.',
        '<strong>TDS i ekstrakcja:</strong> Nauka stojąca za rozpuszczonymi substancjami stałymi oraz to, jaki procent ziarna powinien faktycznie znaleźć się w Twoim napoju.',
        '<strong>Regulacja retencji:</strong> Dlaczego kawa pochłania 2 g wody na gram zmielonej kawy i jak obliczyć potrzebną dodatkową wodę.',
        '<strong>Specyficzne metody:</strong> Idealne proporcje dla V60, French Pressu, Espresso i przepisów na mrożoną kawę typu flash brew.',
      ],
    },
    {
      type: 'title',
      text: 'Co to jest Brew Ratio i dlaczego jest to najważniejsza zmienna?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kawa zawiera około 30% materiału rozpuszczalnego, ale nie wszystko jest pożądane dla ludzkiego podniebienia. Woda, działając jako uniwersalny rozpuszczalnik, ekstrahuje związki w określonej kolejności, zależnej od ich masy cząsteczkowej i powinowactwa chemicznego. Proporcja kawy precyzyjnie kontroluje, jaką zdolność rozpuszczania dostarczamy do każdego grama kawy.',
    },
    {
      type: 'list',
      items: [
        '<strong>Faza kwasowa (lipidy i kwasy organiczne):</strong> Rozpuszczają się jako pierwsze ze względu na wysoką rozpuszczalność. Odpowiadają za jasność, kwasowość jabłkową lub cytrynową oraz nuty owocowe. Zbyt niska proporcja (niedoekstrakcja) zatrzymuje proces w tym miejscu, skutkując kwaśnym i słonym naparem.',
        '<strong>Faza słodka (cukry i węglowodany):</strong> Ekstrahowane w następnej kolejności. Generują równowagę, słodycz i ciało. To jest "złote okno", w którym kawa osiąga maksymalną złożoność aromatyczną i równowagę strukturalną.',
        '<strong>Faza gorzka (włókna i związki fenolowe):</strong> Rozpuszczają się najwolniej. Przy nadmiernych proporcjach (nadestrakcja), woda degraduje komórki kawy, wydobywając suchą gorycz, popiół i nuty drzewne.',
      ],
    },
    {
      type: 'title',
      text: 'Zalecane proporcje: Proporcje według metody ekstrakcji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Każda metoda ekstrakcji wymaga określonej proporcji ze względu na zmienne, takie jak czas kontaktu, ciśnienie pompy czy rozmiar porów filtra. Poniższa tabela techniczna przedstawia standardy branżowe na rok 2026:',
    },
    {
      type: 'table',
      headers: ['Metoda parzenia', 'Proporcja (gramy/woda)', 'Profil filiżanki', 'Czas docelowy'],
      rows: [
        ['Espresso', '1:2 do 1:2.5', 'Intensywne, lepkie, gęsta crema', '25-30 sek.'],
        ['V60 / Pour-Over', '1:15 do 1:16', 'Czyste, jasne, wyraźne nuty', '2:30-3:30 min.'],
        ['Aeropress', '1:12 do 1:15', 'Wszechstronne, ciało średnio-wysokie', '1:30-2:00 min.'],
        ['French Press', '1:12 do 1:14', 'Teksturowane, ciężkie, oleiste', '4:00-5:00 min.'],
        ['Cold Brew', '1:8 do 1:12', 'Słodkie, niska kwasowość, duże ciało', '12-24 godz.'],
      ],
    },
    {
      type: 'title',
      text: 'Obliczanie potrzebnej wody: współczynnik retencji ziarna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jednym z najczęstszych błędów w parzeniu manualnym jest ignorowanie faktu, że zmielona kawa jest porowatą strukturą hydrofilową, która zatrzymuje stałą ilość wody. Nie cała woda, którą wlejesz, trafia do filiżanki.',
    },
    {
      type: 'paragraph',
      html: 'Z naukowego punktu widzenia zmielona kawa zatrzymuje około <strong>2,0 grama wody na 1,0 gram kawy</strong>. Nasz kalkulator wprowadza <strong>Dynamiczną Regulację Retencji</strong>: jeśli musisz napełnić konkretny pojemnik o pojemności 300 ml, system wywnioskuje, że musisz wlać 340 ml wody, aby skompensować absorpcję przez ziarno, zachowując proporcję ekstrakcji — a tym samym smak — w stanie nienaruszonym.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Dozowanie kawy', value: '20g', icon: 'mdi:coffee' },
        { label: 'Woda wlana', value: '300ml', icon: 'mdi:water' },
        { label: 'Retencja', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'W filiżance', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'Znaczenie Bloomu: odgazowanie dla równomiernej ekstrakcji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Faza "Bloom" nie jest tylko estetyczna; to fizyczna konieczność. Podczas palenia kawa generuje CO2, który zostaje uwięziony w jej matrycy komórkowej. Jeśli wlewamy całą wodę w sposób ciągły, gaz ulatnia się gwałtownie, tworząc mikrokanały (channeling) i uniemożliwiając rozpuszczalnikowi dotarcie do wnętrza cząsteczek kawy.',
    },
    {
      type: 'tip',
      title: 'Technika jednorodnego nasycenia',
      html: '<p>Aby uzyskać idealny bloom, wlej dokładnie dwukrotność wagi kawy w wodzie (proporcja bloom 1:2). Delikatnie zamieszaj lub zakręć dzbankiem, aby upewnić się, że cała kawa jest mokra. Odczekaj 30-45 sekund. Uwolnienie gazu pozwoli kolejnym zalaniom płynąć w sposób laminarny, ekstrahując substancje stałe równomiernie z całego złoża kawy.</p>',
    },
    {
      type: 'title',
      text: 'Poradnik kawy mrożonej: Jak parzyć kawę mrożoną bez rozcieńczania smaku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Specjalistyczna kawa mrożona (Flash Brew) wymaga rekalibracji termodynamicznej. Celem jest ekstrakcja olejków eterycznych w temperaturze 94°C w celu uchwycenia złożoności aromatycznej, a następnie szybkie ich schłodzenie, aby uniknąć utleniania i utraty jasności naparu.',
    },
    {
      type: 'list',
      items: [
        '<strong>60% gorącej wody:</strong> Minimalna ilość potrzebna do osiągnięcia ekstrakcji na poziomie 18-20% bez nadmiernej ekstrakcji lub zbyt wczesnego schłodzenia złoża.',
        '<strong>40% lodu termicznego:</strong> Umieszczony w dzbanku odbiorczym. Energia termiczna kawy przechodzi do lodu (ciepło utajone topnienia), natychmiast schładzając napój do temperatury poniżej 5°C.',
        '<strong>Moc końcowa:</strong> Po połączeniu końcowa proporcja (np. 1:15) pozostaje dokładna, co daje żywy, zimny napój o właściwym stężeniu smaku.',
      ],
    },
    {
      type: 'title',
      text: 'Rozmiar zmielenia a proporcja kawy: klucz do powierzchni styku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Proporcja to tylko połowa równania. Zmielenie określa <strong>całkowitą odsłoniętą powierzchnię</strong> dla rozpuszczalnika. Mniejsze cząsteczki (drobne zmielenie) mają proporcjonalnie większą powierzchnię, co radykalnie przyspiesza ekstrakcję związków chemicznych.',
    },
    {
      type: 'title',
      text: 'Powtarzalność i nauka: Zmień swoją kuchnię w laboratorium baristy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doskonałość w kawie specialty wynika z metrycznej spójności. Nasza funkcja <strong>Własne przepisy</strong> pozwala na stworzenie technicznego repozytorium udanych kalibracji. To nie jest tylko folder ulubionych; to narzędzie analityczne do porównywania, jak ten sam kilogram kawy reaguje na proporcję 1:15 w porównaniu z 1:16, pozwalające na precyzyjne dostosowanie przepisu.',
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
