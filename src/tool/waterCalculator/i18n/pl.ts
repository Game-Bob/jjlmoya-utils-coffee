import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';

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
  bibliography: [
    {
      name: 'Standard jakości wody SCA',
      url: 'https://sca.coffee/research/coffee-standards',
    },
    {
      name: 'Barista Hustle: DIY Water Recipes Redux',
      url: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/',
    },
    {
      name: 'The Science of Coffee Water (Hendon)',
      url: 'https://phys.org/news/2014-06-science-coffee.html',
    },
    {
      name: 'Perfect Daily Grind: Chemia wody i kawa',
      url: 'https://perfectdailygrind.com/2019/09/water-chemistry-coffee/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Chemia wody do kawy: Dlaczego H₂O jest najbardziej pomijanym składnikiem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kawa składa się w 98-99% z wody. Mimo to skład mineralny tej wody jest najczęściej pomijanym czynnikiem jakości w całym łańcuchu kawy specialty. Ta sama etiopska kawa single-origin ekstrahowana wodą z kranu w Londynie w porównaniu z wodą zoptymalizowaną przez SCA może smakować jak dwie zupełnie różne kawy. Nasz <strong>kalkulator wody do kawy SCA</strong> pozwala skomponować idealną wodę do parzenia od zera, używając zwykłych soli mineralnych i wody destylowanej.',
    },
    {
      type: 'summary',
      title: 'Dlaczego mineralizacja wody ma tak duże znaczenie?',
      items: [
        '<strong>GH (Twardość ogólna):</strong> Suma jonów magnezu i wapnia określa zdolność wody do rozpuszczania związków smakowych kawy.',
        '<strong>KH (Twardość węglanowa):</strong> Stężenie wodorowęglanów kontroluje pH podczas ekstrakcji. Niskie KH skutkuje kwaśną kawą; wysokie KH sprawia, że jest ona mdła.',
        '<strong>Powtarzalność:</strong> Woda miejska zmienia się w zależności od sezonu i lokalizacji. Woda mineralizowana jest stała i powtarzalna przy każdej partii.',
        '<strong>Ochrona sprzętu:</strong> Prawidłowy poziom minerałów zapobiega zarówno korozji (zbyt czysta woda), jak i osadzaniu się kamienia (zbyt twarda woda).',
      ],
    },
    {
      type: 'title',
      text: 'Standard SCA: Techniczne limity dla idealnej wody do parzenia',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parametr', 'Minimum', 'SCA Ideal', 'Maksimum'],
      rows: [
        ['Twardość ogólna (GH)', '50 mg/L', '68 mg/L', '175 mg/L'],
        ['Zasadowość (KH)', '40 mg/L', '40 mg/L', '70 mg/L'],
        ['pH', '6.5', '7.0', '7.5'],
        ['TDS', '75 mg/L', '150 mg/L', '250 mg/L'],
      ],
    },
    {
      type: 'title',
      text: 'Magnez vs Wapń: Mineralna bitwa, która definiuje Twoją filiżankę',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie minerały zachowują się tak samo w kontakcie z kawą. Badacz Christopher Hendon wykazał, że <strong>magnez</strong> tworzy ligandy ze złożonymi lotnymi cząsteczkami smaku, skuteczniej wydobywając nuty owocowe i kwiatowe. <strong>Wapń</strong> ekstrahuje cięższe związki, zapewniając ciało i jedwabiste odczucie w ustach, ale z mniejszą jasnością aromatyczną.',
    },
    {
      type: 'tip',
      title: 'Zasada profesjonalnego baristy',
      html: '<p>W przypadku ekspresów do kawy z bojlerami mosiężnymi lub miedzianymi, nigdy nie używaj w sposób ciągły profili o KH poniżej 40 mg/L. Bardzo czysta woda jest na dłuższą metę korozyjna. W metodach przelewowych (V60, Chemex, AeroPress) nie ma bojlera do ochrony, więc bez obaw możesz używać delikatnych profili, takich jak Melbourne.</p>',
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
