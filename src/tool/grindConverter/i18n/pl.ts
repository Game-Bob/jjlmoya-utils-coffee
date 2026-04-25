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
    question: 'Co to jest „channeling” i jak wpływa na niego mielenie?',
    answer:
      'Kanałowanie (channeling) występuje, gdy woda znajduje ścieżkę najmniejszego oporu przez złoże kawy. Nierówne lub nieodpowiednie mielenie dla danego ciśnienia — szczególnie w espresso — sprzyja temu problemowi i niszczy ekstrakcję.',
  },
  {
    question: 'Czy mogę używać tej tabeli z młynkiem ostrzowym?',
    answer:
      'Młynki ostrzowe produkują niejednorodne cząsteczki — jednocześnie drobny pył i duże kawałki. Wartości mikronów są orientacyjne, ale rzeczywiste wyniki będą się znacznie różnić w porównaniu z młynkiem żarnowym.',
  },
  {
    question: 'Co oznacza jednorodność młynka w wizualizacji?',
    answer:
      'Pokazany rozkład cząsteczek symuluje rzeczywistą jednorodność każdego młynka. Comandante C40 o jednorodności 0,95 produkuje bardzo równe cząsteczki; Hario Skerton z 0,40 wykazuje znacznie większe zróżnicowanie wielkości.',
  },
];

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
      text: 'Fizyka mielenia: Dlaczego wielkość cząsteczek zmienia wszystko',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mieląc kawę, nie tylko zmniejszasz rozmiar ziarna. Określasz <strong>powierzchnię styku</strong> dostępną dla wody, aby mogła rozpuścić związki smakowe. Zbyt drobno — a woda nadmiernie ekstrahuje gorzkie związki. Zbyt grubo — a woda przepływa bez wystarczającego oporu, dając słaby i kwaśny napar. Konwerter mielenia podaje dokładny zakres dla każdej metody.',
    },
    {
      type: 'summary',
      title: 'Co decyduje o prawidłowym stopniu mielenia?',
      items: [
        '<strong>Metoda ekstrakcji:</strong> Ciśnienie, czas kontaktu i rodzaj filtra dyktują optymalny zakres mikronów dla każdej metody parzenia.',
        '<strong>Jednorodność młynka:</strong> Wysokiej klasy młynek żarnowy produkuje jednorodne cząsteczki; młynek ostrzowy generuje drobny pył i duże kawałki jednocześnie.',
        '<strong>Świeżość ziarna:</strong> Świeżo palona kawa zawiera więcej CO2 i może wymagać nieco grubszego mielenia niż ta sama kawa po kilku tygodniach.',
        '<strong>Kalibracja smaku:</strong> Podniebienie jest ostatecznym instrumentem. Tabela to Twój punkt wyjścia; smak to cel.',
      ],
    },
    {
      type: 'table',
      headers: ['Metoda', 'Mikrony', 'Odniesienie dotykowe', 'Czas kontaktu'],
      rows: [
        ['Ibrik (Po turecku)', '100-300 μm', 'Talk / Drobna mąka', '3-5 min gotowania'],
        ['Espresso', '300-500 μm', 'Sól drobna', '25-30 sek'],
        ['Kawiarka / AeroPress', '500-700 μm', 'Sól kuchenna', '3-4 min'],
        ['V60 / Filtr', '700-900 μm', 'Cukier kryształ', '2:30-3:15 min'],
        ['Chemex / Clever', '900-1200 μm', 'Gruby piasek', '3:30-4:30 min'],
        ['French Press', '1200-1500 μm', 'Sól gruba', '4 min immersja'],
        ['Cold Brew', '1500+ μm', 'Ziarna pieprzu', '12-24 h na zimno'],
      ],
    },
    {
      type: 'title',
      text: 'Złota zasada dla nowych kaw',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<p>Otwierając nową kawę, zawsze zaczynaj od środka zalecanego zakresu dla Twojej metody. Stamtąd koryguj smak po jednym kliknięciu. Rób notatki z każdej korekty, aby zbudować dziennik referencyjny swoich ulubionych kaw dla każdego młynka.</p>',
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
