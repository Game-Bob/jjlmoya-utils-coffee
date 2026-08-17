import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

const slug = 'kafferatio-kalkylator';
const title = 'Kalkylator för kaffebryggningsförhållande';
const description =
 'Beräkna exakt hur många gram kaffe eller milliliter vatten du behöver för ditt ideala förhållande (1:15, 1:16...). Inkluderar resultat i koppen, hällguide, iskaffe-läge och sparade recept.';

const faqData = [
 {
 question: 'Vad är ett kaffeförhållande på 1:15?',
 answer:
 'Det betyder att du för varje gram malet kaffe använder 15 milliliter (eller gram) vatten. Med 20 g kaffe häller du alltså på 300 ml vatten. Detta är standardförhållandet som rekommenderas av Specialty Coffee Association för filtermetoder som V60, Chemex eller Aeropress.',
 },
 {
 question: 'Varför är det mindre kaffe i min kopp än jag hällde på?',
 answer:
 'Eftersom malet kaffe binder vatten under extraktionen. I genomsnitt absorberar varje gram kaffe cirka 2 ml vätska. Om du häller 300 ml på 20 g kaffe får du cirka 260 ml i koppen. Denna kalkylator visar dig det verkliga resultatet.',
 },
 {
 question: 'Vad är bloom eller pre-infusion?',
 answer:
 'Det är den första vattenhällningen, motsvarande dubbla kaffevikten (2 ml per gram). Det görs för att avgasas färskt kaffe: den koldioxid som fångats under rostningen slipper ut och gör det möjligt för vattnet att extrahera smaker jämnt. Om ingen synlig bloom uppstår har kaffet malts eller rostats för länge sedan.',
 },
 {
 question: 'Hur gör jag iskaffe utan att det blir vattnigt?',
 answer:
 'Använd "flash chilling"-tekniken: förbered 60 % av det totala vattnet som hett vatten vid 90-96 grader och lägg de resterande 40 % som is i karaffen. Häll det heta kaffet direkt över isen. Den snabba avkylningen bevarar aromerna. Denna kalkylator räknar automatiskt om mängderna när du aktiverar iskaffe-läget.',
 },
 {
 question: 'Vilket är det bästa förhållandet för en Aeropress?',
 answer:
 'Mellan 1:12 och 1:15 beroende på användning. Om du dricker kaffet svart är 1:15 balanserat. Om du använder det som bas för mjölkdrycker eller vill ha hög koncentration, gå ner till 1:12 eller 1:13. Aeropress är den mest mångsidiga metoden just för att den hanterar olika förhållanden mycket bra.',
 },
 {
 question: 'Kan jag spara mina favoritrecept?',
 answer:
 'Ja. När du har hittat det perfekta förhållandet och mängden för ditt favoritkaffe, tryck på knappen "Spara recept", ge det ett namn (t.ex. Morgon-V60) så lagras det i din webbläsare. Du kan hämta det när som helst med ett klick.',
 },
];

const howToData = [
 {
 name: 'Välj beräkningsläge',
 text: 'Välj om du utgår från mängden kaffe du har eller kapaciteten på din kopp (ml vatten). Kalkylatorn anpassar alla resultat till det valda läget.',
 },
 {
 name: 'Ange mängd',
 text: 'Skriv in gram kaffe eller milliliter vatten du ska använda. Kalkylatorn beräknar automatiskt det andra värdet baserat på det valda förhållandet.',
 },
 {
 name: 'Välj intensitet',
 text: 'Välj mellan Stark (1:12-14), Balanserad (1:15-16), Lätt (1:17-18) eller ange ditt eget förhållande. Varje alternativ motsvarar en unik smakprofil.',
 },
 {
 name: 'Aktivera iskaffe-läge (valfritt)',
 text: 'Om du gör iskaffe, aktivera reglaget. Kalkylatorn delar automatiskt upp vattnet mellan hett vatten (60 %) och is (40 %) enligt flash chilling-tekniken.',
 },
 {
 name: 'Följ hällguiden',
 text: 'Använd fasguiden (Bloom och slutlig hällning) för att strukturera din bryggprocess. Varje fas indikerar exakt hur mycket vatten du ska hälla och när.',
 },
 {
 name: 'Spara receptet',
 text: 'När du hittat ditt perfekta förhållande, spara det med ett beskrivande namn. Dina recept lagras i din webbläsare för framtida sessioner.',
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
 inLanguage: 'sv',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Vanliga frågor om bryggförhållande',
 faq: faqData,
 bibliographyTitle: 'Tekniska referenser och SCA-standarder',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 modeCoffee: 'Jag har kaffet',
 modeHintCoffee: 'Säg mig hur mycket vatten',
 modeWater: 'Jag har vattnet',
 modeHintWater: 'Säg mig hur mycket kaffe jag ska mala',
 inputLabelCoffee: 'Gram kaffe du har',
 inputLabelWater: 'Koppens kapacitet (ml)',
 intensityLabel: 'Kaffets intensitet',
 intensityStrong: 'Stark',
 intensityBalanced: 'Balanserad',
 intensityLight: 'Lätt',
 intensityCustom: 'Anpassad',
 customCoffeeLabel: 'Kaffe',
 customWaterLabel: 'Vatten',
 icedModeLabel: 'Iskaffe-läge',
 recipeLabel: 'Ditt exakta recept',
 resultTitle: 'Resultat',
 resultCoffeeLabel: 'Kaffe',
 resultCoffeeSub: 'Fin-medel malning',
 resultHotWaterLabel: 'Hett vatten',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Hett vatten (60 %)',
 resultIceLabel: 'Is',
 resultIceSub: 'I karaffen',
 resultCupLabel: 'I din kopp',
 resultCupSub: 'Kaffe binder ~2 ml/g',
 pouringGuideLabel: 'Hällguide',
 favoritesLabel: 'Mina favoritrecept',
 saveBtn: '+ Spara detta recept',
 favEmptyText: 'Inga sparade recept än. Skapa ditt perfekta bryggrecept och spara det.',
 modalTitle: 'Namnge ditt recept',
 modalPlaceholder: 'T.ex.: "Morgon-V60"',
 modalCancel: 'Avbryt',
 modalConfirm: 'Spara',
 phaseBloomTemplate: 'Bloom: Häll på {bloomMl} ml vatten i en spiral. Vänta {bloomSeconds} sekunder för att avgasas kaffet.',
 phasePourTemplate: 'Slutlig hällning: Tillsätt resten för att nå {hotWaterMl} ml i {pourCount} långsamma hällningar.',
 phaseIcedTemplate: 'Iskaffe: Häll det heta kaffet direkt över de {iceMl} g is som finns i karaffen.',
 cupWarningTemplate: 'Koppen får bara {inCupMl} ml. Kaffet binder vätska.',
 favModeCoffee: 'g kaffe',
 favModeWater: 'ml vatten',
 favModeIced: ' - Iskaffe',
 },
};
