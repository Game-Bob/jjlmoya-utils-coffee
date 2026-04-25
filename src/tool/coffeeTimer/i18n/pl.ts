import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stoper-do-kawy';
const title = 'Stoper do Parzenia Kawy';
const description =
  'Profesjonalny stoper do kawy specialty z fazami zalewania, powiadomieniami dźwiękowymi o rytmie i podsumowaniem ekstrakcji. Zoptymalizowany dla V60, Chemex i Aeropress.';

const faqData = [
  {
    question: 'Dlaczego powinienem używać tego stopera zamiast w telefonie?',
    answer:
      'Ten stoper został zaprojektowany specjalnie do kawy. Zawiera wizualne fazy (Bloom, Zalewanie, Osuszanie), powiadomienia dźwiękowe na 3 sekundy przed każdą zmianą oraz pozwala skonfigurować pełny przepis, dzięki czemu nigdy nie stracisz rytmu podczas zalewania.',
  },
  {
    question: 'Co to jest czas bloomu (preinfuzji)?',
    answer:
      'To początkowe zwilżanie kawy (zwykle od 30 do 45 sekund), podczas którego wylewa się niewielką ilość wody, aby uwolnić CO2. Stoper podświetla tę fazę na bursztynowo, więc wiesz, kiedy czekać, a kiedy kontynuować zalewanie.',
  },
  {
    question: 'Skąd mam wiedzieć, czy mój czas ekstrakcji jest prawidłowy?',
    answer:
      'W przypadku standardowego V60 całkowity czas powinien wynosić od 2:30 do 3:15 minut. Jeśli kończy się wcześniej, mielenie jest zbyt grube. Jeśli trwa dłużej, jest zbyt drobne. Stoper pozwala precyzyjnie zdiagnozować ten proces.',
  },
  {
    question: 'Czy posiada powiadomienia dźwiękowe?',
    answer:
      'Tak. System emituje krótki sygnał dźwiękowy przed zakończeniem fazy bloomu oraz na koniec procesu, co pozwala skupić się na strumieniu wody bez ciągłego patrzenia na ekran.',
  },
  {
    question: 'Czy jest kompatybilny z Chemexem?',
    answer:
      'Jak najbardziej. Możesz dostosować całkowity czas do 4:30 lub 5:00 minut (typowo dla Chemexa ze względu na gruby filtr) w sekcji ustawień na dole.',
  },
  {
    question: 'Czy działa na telefonie?',
    answer:
      'Jest zoptymalizowany pod kątem urządzeń mobilnych, posiada duże przyciski łatwe do naciśnięcia nawet mokrymi rękami lub podczas trzymania czajnika z gęsią szyją.',
  },
];

const howToData = [
  {
    name: 'Skonfiguruj swój przepis',
    text: 'W dolnej sekcji dostosuj całkowitą ilość wody, wodę do bloomu, czas bloomu i całkowity czas zgodnie z metodą parzenia (V60, Chemex, Aeropress).',
  },
  {
    name: 'Naciśnij przycisk start',
    text: 'Naciśnij duży przycisk start. Stoper uruchomi się i pokaże aktywną fazę na pasku postępu u góry.',
  },
  {
    name: 'Faza Bloomu',
    text: 'Wlej wodę do bloomu (pokazaną na ekranie) ruchem spiralnym i poczekaj, aż stoper odliczy czas. Otrzymasz sygnał dźwiękowy na 3 sekundy przed końcem.',
  },
  {
    name: 'Faza Zalewania',
    text: 'Kontynuuj wlewanie pozostałej wody, aż osiągniesz całkowitą wagę. Zalewaj powolnymi, stałymi okręgami dla równomiernej ekstrakcji.',
  },
  {
    name: 'Faza Osuszania',
    text: 'Poczekaj, aż kawa całkowicie spłynie przez filtr. Ta faza kończy ekstrakcję i decyduje o klarowności i finiszu naparu.',
  },
  {
    name: 'Przejrzyj podsumowanie',
    text: 'Po zakończeniu stoper pokaże całkowity czas i wlaną wodę. Zapisz te wartości wraz ze swoimi wrażeniami smakowymi, aby dopracować przepis.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania dotyczące stopera do kawy',
  faq: faqData,
  bibliographyTitle: 'Referencje techniczne i protokoły SCA',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Stoper do Kawy: Nauka odmierzania czasu ekstrakcji (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W świecie kawy specialty <strong>czas kontaktu</strong> wody ze zmieloną kawą nie jest zwykłym parametrem oczekiwania; to czynnik kinetyczny, który decyduje o tym, jakie związki chemiczne trafią do Twojej filiżanki. Jedna sekunda więcej może oznaczać przejście od karmelowej słodyczy do popielatej goryczy. Nasze profesjonalne narzędzie do mierzenia czasu dla V60, Chemex i Aeropress działa jako <strong>asystent rytmu</strong>, sprawiając, że precyzja na poziomie baristy jest dostępna w domu.',
    },
    {
      type: 'summary',
      title: 'Dlaczego dedykowany stoper jest niezbędny',
      items: [
        '<strong>Kontrola kinetyczna:</strong> Szybkość, z jaką woda rozpuszcza cząstki kawy, jest stała. Czas jest Twoim hamulcem i gazem.',
        '<strong>Fazy zalewania:</strong> Kawa nie ekstrahuje się liniowo. Podział czasu na Bloom, Zalewanie i Osuszanie jest kluczowy.',
        '<strong>Powtarzalność:</strong> Jeśli nie mierzysz czasu, nie możesz powtórzyć swoich najlepszych naparów. Powtarzalność jest fundamentem jakości.',
        '<strong>Regulacja mielenia:</strong> Końcowy czas mówi Ci, czy następnym razem zmielić kawę drobniej czy grubiej.',
      ],
    },
    {
      type: 'title',
      text: 'Oś czasu ekstrakcji: Co dzieje się w każdej sekundzie?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdy gorąca woda dotyka kawy, zaczyna się molekularny wyścig z przeszkodami. Nie wszystkie smaki ekstrahują się w tym samym czasie. Zrozumienie tej osi czasu to różnica między amatorem a profesjonalnym baristą:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sekundy 0 do 45 (Bloom):</strong> To faza odgazowania. CO2 uwięziony podczas palenia blokuje dostęp wody. Czekanie w tym momencie pozwala ziarnu się otworzyć, przygotowując drogę do równomiernej ekstrakcji.',
        '<strong>Sekundy 45 do 120 (Ekstrakcja kwasów i słodyczy):</strong> Woda przepływa i rozpuszcza sole mineralne, kwasy organiczne i cukry złożone. To jest serce smaku.',
        '<strong>Sekundy 120 do 210 (Body i Finisz):</strong> Ekstrahowane są cięższe włókna i związki gorzkie. Jeśli ta faza trwa zbyt długo, kawa staje się cierpka.',
      ],
    },
    {
      type: 'title',
      text: 'Faza Bloomu: Dlaczego 30 sekund to standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Bloom</strong> lub preinfuzja to moment, w którym wlewamy około dwukrotność wagi kawy w wodzie. Te początkowe 30 sekund służy do usunięcia dwutlenku węgla. Bez uszanowania tego czasu gaz wypycha wodę na zewnątrz, tworząc kanały, przez które płyn przepływa bez kontaktu z kawą (channeling), co skutkuje wodnistym i niespójnym naparem.',
    },
    {
      type: 'table',
      headers: ['Faza', 'Sugerowany Czas', 'Działanie Techniczne', 'Cel Chemiczny'],
      rows: [
        ['Bloom', '30 do 45 sek', 'Wlej 2x wagę kawy', 'Odgazowanie (CO2)'],
        ['Pierwsze Zalanie', '45 do 90 sek', 'Powolne kręgi', 'Ekstrakcja kwasów i słodyczy'],
        ['Drugie Zalanie', '90 do 150 sek', 'Delikatne zalanie centralne', 'Balans i body'],
        ['Osuszanie', 'Do końca', 'Stałe kapanie', 'Klarowność i finisz'],
      ],
    },
    {
      type: 'title',
      text: 'Wpływ czasu na mielenie: Pętla sprzężenia zwrotnego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Stoper to najlepsze narzędzie diagnostyczne dla młynka. Jeśli Twój przepis na V60 powinien trwać 3:00 minuty, a woda spłynęła całkowicie w 2:15, kawa prawdopodobnie będzie smakować kwaśno i słabo (niedoekstrakcja). Rozwiązaniem nie jest wolniejsze zalewanie, ale <strong>drobniejsze mielenie</strong>, aby cząsteczki stawiały większy opór wodzie.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Idealny czas V60', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Idealny czas Chemex', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Idealny czas Aeropress', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Alerty rytmu: Dlaczego asystent dźwiękowy jest niezbędny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Parzenie kawy przelewowej wymaga ciągłej uwagi wizualnej skierowanej na wagę i wzór zalewania. Nasz stoper zawiera <strong>alert dźwiękowy bliskości</strong>, który sygnalizuje 3 sekundy przed momentem, w którym powinieneś zacząć następne zalewanie lub gdy kończy się bloom. To różnica między płynną ekstrakcją a taką pełną przerw.',
    },
    {
      type: 'tip',
      title: 'Wskazówka baristy konkursowego',
      html: '<p>Utrzymuj strumień wody tak nisko i blisko złoża kawy, jak to możliwe. Zalewanie z dużej wysokości wprowadza tlen i nadmierną agitację, co może nadekstrahować kawę i zbyt szybko schłodzić wodę. Używaj stopera, aby utrzymać stały rytm kołowy wynoszący około 5 do 7 gramów wody na sekundę.</p>',
    },
    {
      type: 'title',
      text: 'Termodynamika i czas: Zmienna temperatury',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Czas wpływa na temperaturę układu. Ekstrakcja trwająca 6 minut spowoduje utratę dużej ilości energii cieplnej, co zaowocuje niezbalansowanym naparem. Optymalne zakresy czasu utrzymują wodę w temperaturze od 90°C do 96°C przez całą ekstrakcję.',
    },
    {
      type: 'title',
      text: 'Odmierzanie czasu dla kawy mrożonej techniką Flash Brew',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podczas parzenia kawy na lodzie czas musi być mierzony bardziej agresywnie. Używając mniej gorącej wody (60% całości), czas kontaktu ulega skróceniu. Aby to skompensować, użyj nieco drobniejszego mielenia, aby utrzymać czas ekstrakcji w przedziale od 2:30 do 3:00 minut.',
    },
    {
      type: 'title',
      text: 'Podsumowanie po ekstrakcji: Ciągła nauka',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na koniec każdego parzenia nasze narzędzie pokazuje całkowity czas kontaktu. Zapisz tę wartość wraz ze swoimi wrażeniami smakowymi. Smakuje gorzko? Następnym razem celuj w czas o 15 sekund krótszy. Smakuje metalicznie lub kwaśno? Celuj w 20 sekund więcej. Stoper nie zrobi kawy za Ciebie, ale dostarczy Ci danych, abyś mógł być artystą.',
    },
  ],
  ui: {
    readyText: 'Gotowy do startu',
    startBtn: 'ROZPOCZNIJ EKSTRAKCJĘ',
    pauseBtn: 'PAUZA',
    resumeBtn: 'WZNÓW',
    resetBtn: 'RESET',
    newBrewBtn: 'NOWE PARZENIE',
    targetLabel: 'Docelowa woda:',
    instructionStart: 'Naciśnij duży przycisk',
    hintStart: 'Przygotuj V60 lub Chemexa',
    phase1Label: 'Faza 1: Bloom',
    phase2Label: 'Fase 2: Zalewanie',
    phase3Label: 'Faza 3: Osuszanie',
    instructionBloom: 'Wlej {bloomWater}g wody',
    hintBloom: 'Zakręć delikatnie, aby nasycić',
    instructionPour: 'Osiągnij łącznie {waterTotal}g',
    hintPour: 'Zalewaj stałymi okręgami',
    instructionDrain: 'Czekaj na końcowe spłynięcie',
    hintDrain: 'Prawie gotowe do degustacji',
    summaryTitle: 'Ekstrakcja zakończona!',
    summaryMessage: 'Twoja kawa jest gotowa do podania.',
    statTimeLabel: 'Całkowity czas',
    statWaterLabel: 'Wlana woda',
    setupTitle: 'Ustawienia przepisu',
    labelWater: 'Całkowita woda (g)',
    labelBloomWater: 'Woda do bloomu (g)',
    labelBloomTime: 'Czas bloomu (s)',
    labelTotalTime: 'Całkowity czas (s)',
  },
};
