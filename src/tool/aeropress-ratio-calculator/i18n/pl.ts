import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'kalkulator-proporcji-aeropress';
const title = 'Kalkulator Proporcji i Przepisów AeroPress';
const description = 'Oblicz dystrybucję wody, pojemność komory, rozcieńczenie bypass i etapy parzenia kawy w AeroPressie.';

const howTo = [
  {
    name: 'Wybierz metodę i model AeroPress',
    text: 'Wybierz metodę klasyczną lub odwróconą (inverted) oraz rozmiar komory zaparzacza (Original, XL lub Go).',
  },
  {
    name: 'Ustaw dozę kawy oraz proporcje',
    text: 'Wprowadź wagę zmielonej kawy w gramach oraz proporcje parzenia lub wybierz przepis mistrzowski.',
  },
  {
    name: 'Sprawdź ilość wody w komorze i bypass',
    text: 'Zweryfikuj, czy woda mieści się w komorze. Kalkulator automatycznie wyliczy wodę bypass do dolania do naczynia.',
  },
  {
    name: 'Uruchom interaktywny stoper etapów',
    text: 'Włącz stoper, aby precyzyjnie kontrolować preinfuzję (bloom), czas parzenia i delikatne przeciskanie tłoka.',
  },
];

const faq = [
  {
    question: 'Czym różni się metoda klasyczna od odwróconej w AeroPressie?',
    answer: 'W metodzie klasycznej zaparzacz stoi bezpośrednio na naczyniu, co powoduje delikatne wstępne kapanie przed założeniem tłoka. W metodzie odwróconej AeroPress stoi na tłoku, zapewniając pełną immersję bez wycieków przed obróceniem.',
  },
  {
    question: 'Na czym polega metoda bypass w parzeniu kawy?',
    answer: 'Metoda bypass polega na przygotowaniu mocnego koncentratu w komorze zaparzacza, a następnie rozcieńczeniu go w kubku czystą, gorącą wodą. Pozwala to na przygotowanie dużych porcji bez przepełniania komory.',
  },
  {
    question: 'Jaka jest idealna proporcja kawy do wody w AeroPressie?',
    answer: 'Dla klasycznej kawy przelewowej proporcje od 1:14 do 1:17 (np. 11g do 15g kawy na 200g wody) zapewniają znakomity balans. Dla mocnych koncentratów sprawdzają się proporcje od 1:4 do 1:8.',
  },
  {
    question: 'Jak grubość mielenia wpływa na ekstrakcję w AeroPressie?',
    answer: 'Średnio drobny przemiał sprawdza się idealnie przy krótkich czasach parzenia od 1 do 2 minut. Drobniejszy przemiał podbija body, podczas gdy grubszy zapobiega goryczy przy długiej immersji.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Narzędzie Specialty Coffee',
    profileLabel: 'Profil Ekstrakcji',
    unitSystemLabel: 'System Jednostek',
    unitMetricLabel: 'Metryczny (g)',
    unitImperialLabel: 'Imperialny (oz)',
    presetsTitle: 'Przepisy Baristów i Mistrzów',
    presetCustom: 'Własna Formuła',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Jasne Palenie',
    presetWacChamp: 'Mistrz WAC Bypass',
    presetAlanAdler: 'Alan Adler Oryginał',
    presetIcedBypass: 'Flash Brew Mrożony AeroPress',
    methodLabel: 'Technika Parzenia',
    methodStandard: 'Klasyczna Prosta',
    methodInverted: 'Immersja Odwrócona',
    modelLabel: 'Model AeroPress',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Doza Kawy',
    doseUnitMetric: 'gramy',
    doseUnitImperial: 'oz',
    ratioLabel: 'Proporcja Parzenia',
    ratioPrefix: '1:',
    waterTempLabel: 'Temperatura Wody',
    waterTempUnit: '°C',
    grindLabel: 'Profil Mielenia',
    grindFine: 'Drobny',
    grindMediumFine: 'Średnio Drobny',
    grindMedium: 'Średni',
    grindCoarse: 'Gruby',
    resultsTitle: 'Dystrybucja Wody i Pomiary',
    statTotalWater: 'Całkowita Woda',
    statChamberWater: 'Woda w Komorze',
    statBypassWater: 'Woda Bypass',
    statYield: 'Uzysk w Kubku',
    statEstimatedTds: 'Szacowany TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Wymagane Rozcieńczenie Bypass',
    bypassAlertText: 'Twój przepis wymaga {chamber} w komorze oraz {bypass} dolanych bezpośrednio do kubka.',
    timerTitle: 'Stoper Etapów',
    timerStart: 'Start Stopera',
    timerPause: 'Pauza',
    timerReset: 'Reset',
    phaseBloom: 'Preinfuzja i Nawilżenie',
    phasePour: 'Zalanie i Mieszanie',
    phaseSteep: 'Immersja i Czas Parzenia',
    phasePress: 'Lekkie Przeciskanie',
    phaseBypass: 'Dolanie Wody Bypass',
    phaseComplete: 'Kawa Gotowa',
    guideTitle: 'Przewodnik Ekstrakcji',
    guideStep1Title: 'Przepłucz filtr i wsyp kawę',
    guideStep1Desc: 'Umieść filtr w sitku i przelej gorącą wodą. Wsyp świeżo zmieloną kawę do komory.',
    guideStep2Title: 'Wlej wodę do komory',
    guideStep2Desc: 'Wlej wyliczoną ilość wody o odpowiedniej temperaturze i delikatnie zamieszaj.',
    guideStep3Title: 'Załóż tłok i odczekaj',
    guideStep3Desc: 'Wsuń tłok na górę, aby wytworzyć podciśnienie i pozostaw do zaparzenia na wyznaczony czas.',
    guideStep4Title: 'Przeciśnij i rozcieńcz',
    guideStep4Desc: 'Przeciskaj tłok równomiernie przez 20 do 30 sekund. Przerwij na syku i dolej wodę bypass.',
    ratioStrengthLight: 'Lekka i Delikatna',
    ratioStrengthMedium: 'Zrównoważony Napar',
    ratioStrengthStrong: 'Wyrazista i Intensywna',
    ratioStrengthConcentrate: 'Koncentrat Espresso',
    chamberWaterLabel: 'Woda w Komorze',
    coffeeBedLabel: 'Ciasteczko Kawowe',
    airGapLabel: 'Poduszka Powietrzna',
  },
  seo: [
    { type: 'title', text: 'Zasady Ekstrakcji i Proporcji w AeroPressie', level: 2 },
    {
      type: 'paragraph',
      html: 'Zaparzacz <strong>AeroPress</strong> łączy parzenie immersyjne z filtracją ciśnieniową. Osiągnięcie słodkiego, czystego i pełnego naparu wymaga precyzyjnego kontrolowania proporcji między kawą a wodą.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pojemność Komory i Fizyka Metody Bypass',
      html: 'Standardowa komora AeroPressa mieści około 220ml do 240ml wody po odliczeniu objętości zmielonej kawy. Przy chęci uzyskania większego naparu, profesjonalni bariści stosują metodę bypass.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Złota Proporcja Filtra' },
        { value: '230 ml', label: 'Pojemność Standardowa' },
        { value: '1.2 do 1.5%', label: 'Optymalny Zakres TDS' },
      ],
    },
    { type: 'title', text: 'Porównanie Metody Klasycznej i Odwróconej', level: 3 },
    {
      type: 'paragraph',
      html: 'Ustawienie zaparzacza wpływa na dynamikę przepływu oraz kontrolę nad czasem ekstrakcji.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metoda Klasyczna Prosta',
          description: 'Sitko spoczywa na naczyniu. Włożenie tłoka tworzy podciśnienie blokujące wczesne kapanie.',
          points: [
            'Prosta i bezpieczna w obsłudze',
            'Niewielka perkolacja na początku',
            'Rekomendowana przez Jamesa Hoffmanna za powtarzalność',
          ],
        },
        {
          title: 'Metoda Odwrócona Immersyjna',
          description: 'AeroPress stoi na podstawie tłoka, co eliminuje wycieki aż do momentu obrócenia.',
          highlight: true,
          points: [
            'Pełna kontrola nad czasem immersji',
            'Idealna do koncentratów i większych doz',
            'Wymaga ostrożności przy obracaniu',
          ],
        },
      ],
    },
    { type: 'title', text: 'Jak Stosować Rozcieńczenie Bypass dla Dużych Porcji', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass to sekret wielu zwycięzców World AeroPress Championship. Parzenie z wąską proporcją 1:6 do 1:8 pozwala uniknąć późnych związków goryczkowych, a dolanie czystej wody do kubka przywraca harmonię smaku.',
    },
    {
      type: 'table',
      headers: ['Rodzaj Przepisu', 'Doza Kawy', 'Woda w Komorze', 'Woda Bypass', 'Mielenie'],
      rows: [
        ['Przelew Hoffmanna', '11g', '200g', '0g', 'Średnio Drobne (600µm)'],
        ['Tim Wendelboe Jasne', '14g', '200g', '0g', 'Średnie (700µm)'],
        ['Mistrzowski WAC Bypass', '30g', '120g', '105g', 'Grube (900µm)'],
        ['Alan Adler Klasyk', '17g', '80g', '100g Opcjonalnie', 'Drobne (450µm)'],
        ['Flash Brew Mrożony', '18g', '150g', '100g Lód', 'Średnio Drobne (550µm)'],
      ],
    },
    { type: 'title', text: 'Wskazówki dla Idealnej Ekstrakcji', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Dobór temperatury:</strong> 92°C do 96°C dla jasnych paleń, 80°C do 85°C dla ciemniejszych ziaren w celu uniknięcia cierpkości.',
        '<strong>Płynne przeciskanie:</strong> Naciskaj tłok delikatnie przez 20 do 30 sekund, aby zapobiec kanalikowaniu.',
        '<strong>Płukanie filtra:</strong> Przelej papierowy filtr gorącą wodą, aby wyeliminować posmak celulozy.',
        '<strong>Koniec na syku:</strong> Przerwij przeciskanie w momencie usłyszenia syku uciekającego powietrza.',
      ],
    },
    {
      type: 'summary',
      title: 'Podsumowanie',
      items: [
        'Dostosuj grubość mielenia do długości parzenia.',
        'Stosuj obliczenia bypass, gdy napar przekracza pojemność tuby.',
        'Kontroluj temperaturę i czas, aby uzyskać powtarzalną jakość.',
      ],
    },
  ],
  faq,
  faqTitle: 'Często zadawane pytania dotyczące proporcji i przepisów AeroPress',
  bibliography,
  bibliographyTitle: 'Referencje techniczne i nauka o kawie',
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
