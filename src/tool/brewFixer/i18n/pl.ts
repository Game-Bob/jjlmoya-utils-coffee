import type { ToolLocaleContent } from '../../../types';
import type { BrewFixerUI } from '../ui';
import { bibliography } from '../bibliography';

export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';

export const DIAGNOSIS_STRINGS = {
  flavorLabels: {
    acidic: 'Kwaśna / Cierpka',
    bitter: 'Gorzka / Przypalona',
    watery: 'Wodnista / Słaba',
    astringent: 'Astringentna / Sucha',
  },
  causes: {
    acidic: ['Zbyt gruby mielenie (pod-ekstrakcja)', 'Zbyt niska temperatura wody', 'Zbyt krótki czas parzenia', 'Zbyt świeża kawa (nieodgazowana)'],
    bitter: ['Zbyt drobne mielenie (nad-ekstrakcja)', 'Zbyt wysoka temperatura wody', 'Zbyt długi czas parzenia', 'Stara kawa lub ciemno palona'],
    watery: ['Zbyt gruby mielenie (słaba ekstrakcja)', 'Zbyt wysoki ratio (za dużo wody)', 'Zbyt krótki czas parzenia', 'Kawa zbyt stara lub niskiej jakości'],
    astringent: ['Problemy z jakością wody (za dużo minerałów)', 'Nad-ekstrakcja połączona z zawartością minerałów', 'Zbyt drobne mielenie przy twardej wodzie', 'Zbyt wysoka temperatura parzenia'],
  },
  solutions: {
    acidic: 'Woda przepływa zbyt szybko przez grube ziarna, nie wydobywając body. Drobniejsze mielenie zwiększa powierzchnię kontaktu i spowalnia przepływ.',
    bitter: 'Woda spędziła zbyt dużo czasu na ekstrakcji, wydobywając gorzkie i popiołowe związki. Grubsze mielenie skraca czas kontaktu i intensywność ekstrakcji.',
    watery: 'Niewystarczająca ilość rozpuszczonych substancji stałych w filiżance. Drobniejsze mielenie lub zwiększenie dozy kawy podnosi procent ekstrakcji i body.',
    astringent: 'Woda bogata w minerały nadmiernie ekstrahuje i wiąże się ze związkami kawy, tworząc uczucie suchości w ustach. Grubsze mielenie zmniejsza nad-ekstrakcję, a filtrowanie poprawia jakość wody.',
  },
  actions: {
    acidic: { text: 'Zmiel nieco drobniej', textSevere: 'Zmiel znacznie drobniej', icon: 'mdi:chevron-left' },
    bitter: { text: 'Zmiel nieco grubiej', textSevere: 'Zmiel znacznie grubiej', icon: 'mdi:chevron-right' },
    watery: { text: 'Zmiel drobniej lub użyj 5g więcej kawy', textSevere: 'Zmiel znacznie drobniej lub użyj 7g więcej kawy', icon: 'mdi:plus-circle' },
    astringent: { text: 'Użyj przefiltrowanej wody i zmiel grubiej', textSevere: 'Użyj przefiltrowanej wody i zmiel znacznie grubiej', icon: 'mdi:water-filter' },
  },
  texturesByMethod: {
    espresso: { acidic: 'Jak drobna sól', bitter: 'Jak mąka', watery: 'Jak kakao w proszku', astringent: 'Nieco drobniejsza mąka' },
    pourover: { acidic: 'Jak sól kuchenna', bitter: 'Jak gruby piasek', watery: 'Jak drobna mąka kukurydziana', astringent: 'Drobny piasek' },
    aeropress: { acidic: 'Jak drobna mąka kukurydziana', bitter: 'Jak sól kuchenna', watery: 'Jak drobno zmielony pieprz', astringent: 'Średni piasek' },
    frenchpress: { acidic: 'Jak bułka tarta', bitter: 'Jak sól kamienna', watery: 'Jak sól morska', astringent: 'Gruby piasek' },
    moka: { acidic: 'Jak drobna sól morska', bitter: 'Jak drobny piasek', watery: 'Jak sól kuchenna', astringent: 'Średnio-drobny piasek' },
    coldbrew: { acidic: 'Jak gruba sól morska', bitter: 'Jak żwir', watery: 'Jak sól kamienna', astringent: 'Gruby piasek z ziarnami' },
  },
  secondaryAction: 'Parz w temperaturze {temp}°C przez {time}',
  tertiaryAction: 'Pozwól kawie ostygnąć do temperatury pokojowej przed degustacją, aby wyczuć wszystkie nuty.',
};

const slug = 'diagnostyka-ekstrakcji-kawy-brew-fixer';
const title = 'Diagnostyka Ekstrakcji Kawy: The Brew Fixer';
const description =
  'Zdiagnozuj, dlaczego Twoja kawa smakuje źle w kilka sekund. Uzyskaj spersonalizowane wskazówki dotyczące mielenia, temperatury i czasu parzenia.';

const faqData = [
  {
    question: 'Skąd mam wiedzieć, czy moja kawa jest niedoekstrahowana czy przeekstrahowana?',
    answer:
      'Niedoekstrakcja (smak kwaśny/cierpki) oznacza, że woda przepłynęła przez kawę zbyt szybko, nie rozpuszczając wystarczającej ilości związków. Przeekstrakcja (smak gorzki/przypalony) oznacza, że woda miała zbyt długi kontakt z kawą. The Brew Fixer pomaga zidentyfikować problem, analizując Twoje odczucia smakowe i metodę parzenia.',
  },
  {
    question: 'Jaki jest najczęstszy błąd podczas parzenia kawy?',
    answer:
      'Grubość mielenia. Większość osób mieli albo zbyt grubo (kawa słaba, kwaśna), albo zbyt drobno (kawa gorzka, przeekstrahowana). Dopasowanie ustawień młynka do konkretnej metody to najważniejsza zmiana, jaką możesz wprowadzić.',
  },
  {
    question: 'Czy temperatura wody naprawdę ma aż takie znaczenie?',
    answer:
      'Tak. Temperatura wody kontroluje szybkość ekstrakcji. Zbyt zimna woda powoduje niedoekstrakcję (kwasowość). Zbyt gorąca – przeekstrakcję (gorycz). Każda metoda ma swój ideał: V60 lubi 92-96°C, podczas gdy French Press lepiej wypada przy 85-90°C, aby uniknąć goryczy przy długim parzeniu.',
  },
  {
    question: 'Dlaczego moja kawa jest cierpka lub pozostawia uczucie suchości w ustach?',
    answer:
      'Cierpkość jest zazwyczaj spowodowana twardą wodą lub połączeniem przeekstrakcji z minerałami w wodzie. Spróbuj użyć filtrowanej wody i nieco grubszego mielenia. Jeśli to nie pomoże, TDS wody może być zbyt wysoki.',
  },
  {
    question: 'Czy mogę naprawić smak kawy regulując tylko temperaturę i czas?',
    answer:
      'Temperatura i czas pomagają, ale to mielenie jest zazwyczaj źródłem problemu. Jeśli mielenie jest zbyt grube, dłuższe parzenie lub cieplejsza woda pomogą tylko nieznacznie. The Brew Fixer zawsze zaleca regulację mielenia jako główny krok.',
  },
  {
    question: 'Czy powinienem używać tego samego przepisu do wszystkich kaw?',
    answer:
      'Nie. Bardzo świeża kawa (1-5 dni od wypalenia) ekstrahuje się szybciej i może wymagać grubszego mielenia niż kawa starsza. Jasne palenia są gęstsze i potrzebują drobniejszego mielenia; ciemne palenia są bardziej porowate i wolą grubszy przemiał.',
  },
];

const howToData = [
  {
    name: 'Wybierz metodę parzenia',
    text: 'Wybierz urządzenie, którego użyłeś: dripper (pour-over), French Press, Aeropress, kawiarka (Moka), ekspres kolbowy lub cold brew. Narzędzie poda wskazówki dla tej metody.',
  },
  {
    name: 'Zidentyfikuj dominującą wadę smaku',
    text: 'Spróbuj kawy i wybierz smak, który najbardziej się wyróżnia: kwaśny, gorzki (przypalony), wodnisty (słaby) lub cierpki (ściągający). Możesz wybrać też smak drugorzędny.',
  },
  {
    name: 'Oceń intensywność',
    text: 'Przesuń suwak, aby określić, jak silna jest dana wada. "Lekka" oznacza, że ledwo ją wyczuwasz; "silna" oznacza, że dominuje w całym kubku. To pomaga skalibrować poradę.',
  },
  {
    name: 'Uruchom diagnozę',
    text: 'Kliknij przycisk "Diagnozuj" – narzędzie przeanalizuje dane i poda główną akcję (mielenie), akcje dodatkowe oraz referencję tekstury.',
  },
  {
    name: 'Wyreguluj i sprawdź',
    text: 'Wprowadź zalecaną zmianę (np. zmiel grubiej, parz dłużej). Zaparz nową filiżankę i sprawdź smak. Małe zmiany dają wielkie efekty.',
  },
  {
    name: 'Daj nam znać',
    text: 'Po wypiciu kolejnej filiżanki powiedz nam, czy smak się poprawił. Jeśli tak, zobaczysz konfetti! Jeśli nie, wróć i spróbuj innych parametrów.',
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

export const content: ToolLocaleContent<BrewFixerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania dotyczące ekstrakcji kawy',
  faq: faqData,
  bibliographyTitle: 'Źródła techniczne i nauka o kawie',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego Twoja kawa smakuje źle? Przewodnik po ekstrakcji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Różnica między wyjątkowym espresso a kawą smakującą jak spalony papier sprowadza się do jednego pojęcia: <strong>ekstrakcji kawy</strong>. Ekstrakcja to proces, w którym woda rozpuszcza związki zawarte w zmielonej kawie. Traf w punkt, a odkryjesz słodycz i klarowność. Pomyl się, a otrzymasz kwasowość, gorycz lub brak smaku.',
    },
    {
      type: 'summary',
      title: 'Czego nauczysz się z The Brew Fixer',
      items: [
        '<strong>Jak diagnozować błędy ekstrakcji:</strong> Dowiedz się, czy Twoja kawa jest niedoekstrahowana, przeekstrahowana, słaba lub czy wina leży w jakości wody.',
        '<strong>Trzy dźwignie kontrolujące ekstrakcję:</strong> Grubość mielenia, temperatura wody i czas kontaktu. Co zmienić najpierw? Narzędzie Ci podpowie.',
        '<strong>Rekomendacje dla konkretnych metod:</strong> Mielenie pod V60 jest zupełnie inne niż pod French Press. Uzyskaj spersonalizowane porady.',
        '<strong>Referencje tekstury:</strong> Dowiedz się, do jakiego mielenia dążyć, porównując je ze znanymi materiałami (cukier puder, sól morska, piasek).',
      ],
    },
    {
      type: 'title',
      text: 'Trzy wymiary ekstrakcji kawy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Procent ekstrakcji to masa rozpuszczonych substancji podzielona przez masę użytej suchej kawy. W kawie speciality dążymy do <strong>18-20% ekstrakcji</strong>. Poniżej smak jest kwaśny; powyżej – gorzki.',
    },
    {
      type: 'list',
      items: [
        '<strong>Mielenie</strong> kontroluje powierzchnię kontaktu. Drobny przemiał ekstrahuje się szybciej. Gruby przemiał – wolniej.',
        '<strong>Temperatura wody</strong> kontroluje szybkość rozpuszczania. Gorąca woda (94-96°C) ekstrahuje szybciej niż chłodniejsza (85-90°C).',
        '<strong>Czas kontaktu</strong> to czas, przez który woda styka się z kawą. Pour-over (2:30-3:30 min), French Press (4:00-5:00 min).',
      ],
    },
    {
      type: 'title',
      text: 'Jak zdiagnozować kawę kwaśną (niedoekstrakcja)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kwaśna kawa smakuje jak cytryna lub zielone jabłko – jest ostra i agresywna. Oznacza to, że woda nie zdążyła wyciągnąć smaku. Rozwiązaniem jest prawie zawsze <strong>drobniejsze mielenie</strong>, aby spowolnić przepływ wody.',
    },
    {
      type: 'list',
      items: [
        'Zmiel kawę drobniej (zmniejsz ustawienie młynka o 5-10 µm)',
        'Lub lekko wydłuż czas parzenia (o 15-30 sekund)',
        'Lub zwiększ temperaturę wody do 95-96°C',
      ],
    },
    {
      type: 'title',
      text: 'Jak zdiagnozować kawę gorzką (przeekstrakcja)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gorzka kawa smakuje jak spalenizna lub popiół. Woda zbyt długo wyciągała związki z kawy. Rozwiązaniem jest <strong>grubsze mielenie</strong>, aby woda przepłynęła szybciej i miała krótszy kontakt z ziarnem.',
    },
    {
      type: 'list',
      items: [
        'Zmiel kawę grubiej (zwiększ ustawienie młynka o 5-10 µm)',
        'Lub skróć czas parzenia (o 15-30 sekund)',
        'Lub obniż temperaturę wody do 92-93°C',
      ],
    },
    {
      type: 'title',
      text: 'Jak zdiagnozować kawę wodnistą (słabą)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Słaba kawa nie ma ciała ani głębi. Zazwyczaj oznacza to zbyt grube mielenie, zbyt dużą ilość wody względem kawy lub zwietrzałe ziarna. Regulacja młynka to najszybszy sposób.',
    },
    {
      type: 'list',
      items: [
        'Użyj drobniejszego mielenia, aby zwiększyć powierzchnię ekstrakcji',
        'Użyj więcej kawy (zwiększ dozę)',
        'Parz nieco dłużej lub w wyższej temperaturze',
      ],
    },
    {
      type: 'title',
      text: 'Jak zdiagnozować kawę cierpką (suchą, mineralną)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cierpkość czuć jako suchość na języku, jak po zjedzeniu skórki winogrona. Często wynika z twardej wody w połączeniu z przeekstrakcją. Wymaga to zarówno regulacji młynka, jak i poprawy jakości wody.',
    },
    {
      type: 'list',
      items: [
        'Użyj filtrowanej wody, aby zmniejszyć mineralizację (cel: TDS 60-150 ppm)',
        'Zmiel grubiej, aby uniknąć przeekstrakcji',
        'Spróbuj nieco chłodniejszej wody (90-92°C)',
      ],
    },
    {
      type: 'title',
      text: 'Tabela mielenia: Jak wygląda i jakie daje odczucia?',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nazwa mielenia', 'Rozmiar cząsteczki', 'Referencja tekstury', 'Najlepsze metody'],
      rows: [
        ['Bardzo drobne', '5-15 µm', 'Drobny puder, kakao', 'Espresso, Kawa po turecku'],
        ['Drobne', '15-30 µm', 'Cukier puder', 'Moka, Aeropress'],
        ['Średnio-drobne', '30-50 µm', 'Sól drobnoziarnista', 'V60, Chemex, Pour-over'],
        ['Średnie', '50-70 µm', 'Piasek plażowy', 'Ekspresy przelewowe'],
        ['Grube', '70-90 µm', 'Sól morska gruba', 'French Press, Cupping'],
        ['Bardzo grube', '90+ µm', 'Ziarna pieprzu, bułka tarta', 'Cold Brew, Perkolator'],
      ],
    },
    {
      type: 'title',
      text: 'Jakość wody: TDS i jego wpływ na ekstrakcję',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'TDS (Total Dissolved Solids) to miara zawartości minerałów w wodzie. Woda z kranu różni się zależnie od regionu: od 50 ppm (miękka) do ponad 300 ppm (twarda). Kawa jest bardzo czuła na te parametry.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zbyt miękka (0-50 ppm):</strong> Woda agresywnie wyciąga smaki, kawa bywa słona.',
        '<strong>Idealna (60-150 ppm):</strong> Słodka, zbalansowana ekstrakcja i pełne ciało.',
        '<strong>Zbyt twarda (200+ ppm):</strong> Minerały blokują aromaty, powodując cierpkość.',
      ],
    },
    {
      type: 'tip',
      title: 'Szybki trik z wodą',
      html: '<p>Jeśli podejrzewasz twardą wodę, zaparz kawę dla porównania na wodzie filtrowanej lub butelkowanej. Jeśli smakuje od razu lepiej, masz winowajcę. Zainwestuj w dzbanek filtrujący (Brita) lub filtr podzlewozmywakowy.</p>',
    },
  ],
  ui: {
    methodLabel: 'Co parzysz?',
    methodPourover: 'Dripper / Pour Over',
    methodFrenchpress: 'French Press',
    methodAeropress: 'Aeropress',
    methodMoka: 'Kawiarka (Moka)',
    methodEspresso: 'Espresso',
    methodColdbrew: 'Cold Brew',
    methodDescription: 'Wybierz swoje urządzenie',
    flavorLabel: 'Jak smakuje Twoja kawa?',
    flavorAcidic: 'Kwaśna / Cierpka',
    flavorBitter: 'Gorzka / Przypalona',
    flavorWatery: 'Wodnista / Słaba',
    flavorAstringent: 'Cierpka / Ściągająca',
    flavorHint: 'Wybierz do 2 smaków',
    severityLabel: 'Jak silny jest ten problem?',
    severitySlightLabel: 'Ledwo wyczuwalny',
    severityModerateLabel: 'Umiarkowany',
    severitySevereLabel: 'Dominujący',
    diagnoseBtn: 'Zdiagnozuj moją kawę',
    resetBtn: 'Resetuj',
    resultTitle: 'Diagnoza zakończona',
    resultExplanation: 'Co dzieje się w Twoim kubku',
    actionMainLabel: 'Główna akcja',
    actionSecondaryLabel: 'Temperatura i czas',
    actionTertiaryLabel: 'Pro Tip',
    textureReferenceLabel: 'Referencja tekstury',
    improvementHint: 'Wprowadź zmianę i zaparz kolejną filiżankę.',
    copyDiagnosisBtn: 'Kopiuj diagnozę',
    feedbackLabel: 'Czy smak kawy się poprawił?',
    feedbackSuccessTemplate: 'Świetnie! Zmiana zadziałała.',
    methodPouroverDesc: 'V60, Chemex, Dripper',
    methodFrenchpressDesc: 'Zaparzacz tłokowy, Bodum',
    methodAeropressDesc: 'Aeropress, Prismo',
    methodMokaDesc: 'Kawiarka, Kafetiera',
    methodEspressoDesc: 'Ekspres kolbowy',
    methodColdbrewDesc: 'Metoda immersyjna na zimno',
    fadeOutMessage: 'Świetna robota! Kontynuuj dostrajanie.',
    backBtn: 'Wstecz',
    mainIssueLabel: 'Główny Problem',
    improvedBtn: 'Poprawione',
    notYetBtn: 'Jeszcze nie',
    copiedBtn: 'Skopiowano!',
    combinedLabel: 'Połączone',
    diagnosisTitle: 'Diagnoza The Brew Fixer',
    issueLabel: 'Problem',
    causeLabel: 'Przyczyna',
    actionLabel: 'Działanie',
    whyLabel: 'Dlaczego',
    nextLabel: 'Dalej',
  },
};
