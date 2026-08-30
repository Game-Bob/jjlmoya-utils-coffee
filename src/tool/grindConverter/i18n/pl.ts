import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GrindConverterUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildGrindSeo } from '../../seoTranslations';

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
 seo: buildGrindSeo({ title, description, faq: faqData, howTo: howToData }),
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
