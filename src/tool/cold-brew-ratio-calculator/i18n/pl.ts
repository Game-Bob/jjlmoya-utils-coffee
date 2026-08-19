import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-proporcji-kawy-cold-brew';
const title = 'Kalkulator proporcji kawy cold brew';
const description = 'Oblicz ilość kawy, wody, rozcieńczenia koncentratu, czas parzenia i przybliżoną wydajność cold brew w jednostkach metrycznych lub imperialnych.';

const faqData = [
  { question: 'Jakie proporcje kawy i wody stosować do cold brew?', answer: 'Zacznij od 1:8 dla cold brew gotowego do picia albo 1:5 dla koncentratu do późniejszego rozcieńczenia. Najlepsza proporcja zależy od kawy, mielenia, czasu i sposobu podania.' },
  { question: 'Ile kawy potrzeba na 1 litr cold brew?', answer: 'Przy proporcji 1:8 użyj 125 gramów kawy i 1000 mililitrów wody do parzenia. Kalkulator szacuje także wodę zatrzymaną przez fusy.' },
  { question: 'Czy mogę obliczać cold brew w uncjach i uncjach płynnych?', answer: 'Tak. Wybierz Imperial, aby wyświetlać kawę w uncjach, a wodę w uncjach płynnych. Obliczenia pozostają w gramach i mililitrach.' },
  { question: 'Czym różni się cold brew gotowe do picia od koncentratu?', answer: 'Gotowe cold brew parzy się blisko mocy serwowania. Koncentrat używa większej ilości kawy na daną ilość wody, a po filtracji miesza się go z wodą lub mlekiem.' },
  { question: 'Jak długo parzyć cold brew?', answer: 'Na początek użyj 12 do 18 godzin pełnego zanurzenia w lodówce lub chłodnym pomieszczeniu. Dłuższy czas może zwiększyć gorycz i cierpkość.' },
  { question: 'Czy kalkulator uwzględnia wodę zatrzymaną przez fusy?', answer: 'Tak. Do oszacowania wydajności przyjmuje około 2 mililitry zatrzymanej wody na gram kawy. Filtr, mielenie i czas odsączania zmieniają rzeczywisty wynik.' },
  { question: 'Czy ten kalkulator jest poradnikiem bezpieczeństwa żywności?', answer: 'Nie. Oblicza tylko ilości w przepisie. Używaj czystego sprzętu, schładzaj napój odpowiednio i stosuj aktualne zalecenia dotyczące przechowywania.' },
];

const howToData = [
  { name: 'Wybierz styl parzenia', text: 'Wybierz gotowe do picia, jeśli napój podasz bezpośrednio, albo koncentrat, jeśli później dodasz wodę lub mleko.' },
  { name: 'Ustaw wodę do parzenia', text: 'Podaj ilość wody w naczyniu. Kalkulator skaluje dawkę kawy na podstawie objętości i wybranej proporcji.' },
  { name: 'Ustaw proporcję', text: 'Wybierz profil lub przesuń suwak. Niższe liczby dają mocniejszy napar, a wyższe lżejszy.' },
  { name: 'Ustaw czas i rozcieńczenie', text: 'Potraktuj czas jako wskazówkę. W trybie koncentratu określ ilość wody na każdą część przygotowanego koncentratu.' },
  { name: 'Wykonaj kroki partii', text: 'Użyj przepływu partii i kroków, aby odważyć kawę, dodać wodę, zaparzyć, przefiltrować i rozcieńczyć szacowaną porcję.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Proporcje i planowanie partii cold brew', level: 2 },
  { type: 'paragraph', html: 'Cold brew łatwiej powtarzać, gdy masę kawy, wodę, rozcieńczenie i czas parzenia ustawia się osobno. Kalkulator zamienia wybrany styl w ważony przepis.' },
  { type: 'title', text: 'Wybierz napój gotowy do picia lub koncentrat', level: 2 },
  { type: 'paragraph', html: 'Napój gotowy do picia parzy się blisko mocy serwowania. Koncentrat używa mocniejszej proporcji, a po filtracji dodaje się do niego wodę.' },
  { type: 'table', headers: ['Styl', 'Proporcja startowa', 'Rozcieńczenie', 'Zastosowanie'], rows: [['Gotowe do picia', '1:8', 'Brak', 'Podawać schłodzone lub z lodem'], ['Łagodna partia', '1:10', 'Brak', 'Lżejsza kawa na co dzień'], ['Koncentrat', '1:5', '1:1', 'Wymieszać z wodą lub mlekiem']] },
  { type: 'title', text: 'Jak działa obliczanie cold brew', level: 2 },
  { type: 'list', items: ['Dawka kawy to woda do parzenia podzielona przez wybraną proporcję.', 'Wydajność naparu szacuje się po odjęciu około 2 mililitrów zatrzymanej wody na gram kawy.', 'Rozcieńczenie koncentratu liczy się od wydajności naparu, aby objętość do podania była czytelna.'] },
  { type: 'title', text: 'Metryczne i imperialne miary cold brew', level: 2 },
  { type: 'paragraph', html: 'Wybierz gramy i mililitry dla receptur metrycznych albo uncje i uncje płynne dla imperialnych. Zależność masy i objętości pozostaje spójna.' },
  { type: 'table', headers: ['Pomiar', 'Metryczne', 'Imperialne'], rows: [['Dawka kawy', 'g', 'oz'], ['Woda i wydajność', 'ml', 'fl oz'], ['Proporcja', '1 część kawy', '1 część kawy']] },
  { type: 'tip', title: 'Potraktuj wynik jako przepis startowy', html: '<p>Pochodzenie kawy, mielenie, filtr, temperatura i odsączanie zmieniają ekstrakcję oraz wydajność. Spróbuj pierwszej partii i zmieniaj jedną rzecz naraz.</p>' },
  { type: 'title', text: 'Czas parzenia i bezpieczeństwo żywności', level: 2 },
  { type: 'paragraph', html: 'Suwak czasu pomaga zaplanować przepis, ale nie gwarantuje smaku ani bezpieczeństwa. Używaj czystego sprzętu i stosuj aktualne zalecenia dotyczące chłodzenia, przechowywania i podawania.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Pytania o cold brew', faq: faqData, bibliographyTitle: 'Źródła parzenia kawy', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Zbuduj swoją partię', modeReady: 'Gotowe do picia', modeReadyHint: 'Zaparz i podaj', modeConcentrate: 'Koncentrat', modeConcentrateHint: 'Zaparz i rozcieńcz', unitSystemLabel: 'System miar', unitMetric: 'Metryczny', unitImperial: 'Imperialny', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Zacznij od profilu', presetClassic: 'Klasyczne 1:8', presetSmooth: 'Łagodne 1:10', presetConcentrate: 'Koncentrat 1:5', presetCustom: 'Własne', brewWaterLabel: 'Woda do parzenia', brewWaterHint: 'Woda do przygotowania', ratioLabel: 'Proporcja kawy i wody', ratioHint: 'Woda na gram kawy', dilutionLabel: 'Woda do rozcieńczenia', dilutionHint: 'Części wody na część naparu', steepLabel: 'Czas parzenia', steepHint: 'Zakres orientacyjny', hoursUnit: 'godz.', resultTitle: 'Twoja partia', resultBadgeReady: 'Gotowe do picia', resultBadgeConcentrate: 'Koncentrat', coffeeLabel: 'Kawa mielona', brewWaterResultLabel: 'Woda do parzenia', retainedLabel: 'Zatrzymana przez fusy', dilutionWaterLabel: 'Woda do rozcieńczenia', servedYieldLabel: 'Przybliżona ilość do podania', ratioResultLabel: 'Proporcja', steepResultLabel: 'Parzenie', steepStatusShort: 'Krótkie parzenie', steepStatusBalanced: 'Zrównoważone parzenie', steepStatusLong: 'Długie parzenie', stageCaption: 'Łagodna partia gotowa do lodówki', stageCaptionConcentrate: 'Mocny koncentrat czeka na rozcieńczenie', stepsTitle: 'Kroki przepisu', visualTitle: 'Przepływ partii', visualBrewCaption: 'Parzenie', visualFilterCaption: 'Filtrowanie', visualServeCaption: 'Podanie', visualCoffeeDose: 'Dawka kawy', visualWaterInput: 'Woda do parzenia', visualRetained: 'Zatrzymana przez fusy', visualServed: 'Wydajność naparu', visualDilution: 'Woda do rozcieńczenia', stepCoffee: 'Odważ {coffee} {coffeeUnit} grubo zmielonej kawy.', stepWater: 'Dodaj {water} {waterUnit} wody i całkowicie zwilż fusy.', stepSteep: 'Przykryj i parz przez około {hours} godz.', stepDilute: 'Po filtracji dodaj {water} {waterUnit} wody do rozcieńczenia.', stepServe: 'Schłodź i podaj około {yield} {waterUnit}.', noteTitle: 'Przydatne oszacowanie', noteText: 'Fusy zatrzymują wodę podczas filtracji. Ilość jest przybliżona, więc skalibruj pierwszą partię z własnym filtrem i sposobem odsączania.', copyRecipe: 'Kopiuj przepis', copiedText: 'Przepis skopiowany', resetText: 'Resetuj', copyTemplate: 'Przepis cold brew\nKawa: {coffee} {coffeeUnit}\nWoda do parzenia: {brewWater} {waterUnit}\nProporcja: 1:{ratio}\nParzenie: {hours} godz.\nWoda do rozcieńczenia: {dilutionWater} {waterUnit}\nPrzybliżona ilość do podania: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Źródła',
  },
};
