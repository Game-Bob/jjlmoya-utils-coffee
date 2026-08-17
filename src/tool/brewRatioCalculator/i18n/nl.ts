import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildBrewRatioSeo } from '../../seoTranslations';

const slug = 'koffie-ratio-calculator';
const title = 'Koffie Brew Ratio Calculator';
const description =
 'Bereken de exacte grammen koffie of milliliters water voor je ideale ratio (1:15, 1:16...). Inclusief resultaat per kop, schenkgids, ijskoffiemodus en opgeslagen recepten.';

const faqData = [
 {
 question: 'Wat is een 1:15 koffieratio?',
 answer:
 'Dit betekent dat je voor elke gram gemalen koffie 15 milliliter (of gram) water gebruikt. Voor 20 g koffie giet je 300 ml water op. Dit is de standaardratio die door de Specialty Coffee Association wordt aanbevolen voor filtermethoden zoals V60, Chemex of Aeropress.',
 },
 {
 question: 'Waarom zit er minder koffie in mijn kopje dan ik heb opgeschonken?',
 answer:
 'Omdat gemalen koffie water vasthoudt tijdens de extractie. Gemiddeld absorbeert elke gram koffie ongeveer 2 ml vloeistof. Als je 300 ml op 20 g koffie schenkt, krijg je ongeveer 260 ml in het kopje. Deze calculator laat je het werkelijke resultaat zien.',
 },
 {
 question: 'Wat is bloom of pre-infusie?',
 answer:
 'Dit is de eerste opgieting van water, gelijk aan tweemaal het gewicht van de koffie (2 ml per gram). Dit wordt gedaan om verse koffie te ontgassen: de CO2 die tijdens het branden is opgesloten ontsnapt en zorgt ervoor dat het water de smaakstoffen gelijkmatig kan extraheren. Als er geen zichtbare bloom is, is de koffie al enige tijd geleden gemalen of gebrand.',
 },
 {
 question: 'Hoe maak ik ijskoffie zonder dat deze waterig wordt?',
 answer:
 'Gebruik de flash chilling-techniek: bereid 60% van het totale water als heet water van 90-96 graden en doe de resterende 40% als ijs in de karaf. Giet de hete koffie direct over het ijs. De snelle afkoeling sluit de aroma\'s in. Deze calculator herberekent automatisch de hoeveelheden wanneer je de Iced Coffee-modus activeert.',
 },
 {
 question: 'Wat is de beste ratio voor een Aeropress?',
 answer:
 'Tussen 1:12 en 1:15, afhankelijk van het gebruik. Als je de koffie zwart drinkt, is 1:15 gebalanceerd. Als je het gebruikt als basis voor melkdranken of een hoge concentratie wilt, ga dan naar 1:12 of 1:13. De Aeropress is de meest veelzijdige methode juist omdat deze verschillende rati\'s heel goed aankan.',
 },
 {
 question: 'Kan ik mijn favoriete recepten opslaan?',
 answer:
 'Ja. Zodra je de perfecte ratio en hoeveelheid voor je favoriete koffie hebt gevonden, druk je op de knop Recept opslaan, geef je het een naam (bijv. Ochtend V60) en wordt het in je browser opgeslagen. Je kunt het op elk moment met één klik weer oproepen.',
 },
];

const howToData = [
 {
 name: 'Kies de berekeningsmodus',
 text: 'Selecteer of je begint bij het aantal gram koffie dat je hebt of bij de capaciteit van je kopje (ml water). De calculator past alle resultaten aan de gekozen modus aan.',
 },
 {
 name: 'Voer de hoeveelheid in',
 text: 'Typ het aantal gram koffie of milliliters water dat je gaat gebruiken. De calculator berekent automatisch de andere waarde op basis van de geselecteerde ratio.',
 },
 {
 name: 'Selecteer de intensiteit',
 text: 'Kies tussen Sterk (1:12-14), Gebalanceerd (1:15-16), Licht (1:17-18) of voer je eigen ratio in. Elke optie komt overeen met een ander smaakprofiel.',
 },
 {
 name: 'Activeer de Iced Coffee-modus (optioneel)',
 text: 'Als je ijskoffie maakt, activeer dan de schakelaar. De calculator verdeelt het water automatisch in heet water (60%) and ijs (40%) met behulp van de flash chilling-techniek.',
 },
 {
 name: 'Volg de schenkgids',
 text: 'Gebruik de fasengids (Bloom en Final Pour) om je zetproces te structureren. Elke fase geeft precies aan hoeveel water je wanneer moet schenken.',
 },
 {
 name: 'Sla het recept op',
 text: 'Wanneer je de perfecte ratio hebt gevonden, sla deze dan op met een beschrijvende naam. Je recepten worden in je browser opgeslagen voor toekomstige sessies.',
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
 inLanguage: 'nl',
};

export const content: ToolLocaleContent<BrewRatioCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Veelgestelde vragen over de Brew Ratio',
 faq: faqData,
 bibliographyTitle: 'Technische referenties en SCA-normen',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildBrewRatioSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 modeCoffee: 'Ik heb de Koffie',
 modeHintCoffee: 'Vertel me hoeveel water',
 modeWater: 'Ik heb het Water',
 modeHintWater: 'Vertel me hoeveel koffie ik moet malen',
 inputLabelCoffee: 'Gram koffie die je hebt',
 inputLabelWater: 'Inhoud van je kopje (ml)',
 intensityLabel: 'Koffie-intensiteit',
 intensityStrong: 'Sterk',
 intensityBalanced: 'Gebalanceerd',
 intensityLight: 'Licht',
 intensityCustom: 'Aangepast',
 customCoffeeLabel: 'Koffie',
 customWaterLabel: 'Water',
 icedModeLabel: 'IJskoffie Modus',
 recipeLabel: 'Je exacte recept',
 resultTitle: 'Resultaat',
 resultCoffeeLabel: 'Koffie',
 resultCoffeeSub: 'Fijn-medium maalgraad',
 resultHotWaterLabel: 'Heet water',
 resultHotWaterSub: '90-96 °C',
 resultHotWaterIcedLabel: 'Heet water (60%)',
 resultIceLabel: 'IJs',
 resultIceSub: 'In de karaf',
 resultCupLabel: 'In je kopje',
 resultCupSub: 'Koffie houdt ~2ml/g vast',
 pouringGuideLabel: 'Schenkgids',
 favoritesLabel: 'Mijn favoriete recepten',
 saveBtn: '+ Sla dit recept op',
 favEmptyText: 'Nog geen opgeslagen recepten. Configureer je perfecte brew en sla hem op.',
 modalTitle: 'Geef je recept een naam',
 modalPlaceholder: 'Bijv.: "Ochtend V60"',
 modalCancel: 'Annuleren',
 modalConfirm: 'Opslaan',
 phaseBloomTemplate: 'Bloom: Giet {bloomMl} ml water in een spiraal. Wacht {bloomSeconds} seconden om de koffie te ontgassen.',
 phasePourTemplate: 'Final pour: Voeg de rest toe om {hotWaterMl} ml te voltooien in {pourCount} langzame opgietingen.',
 phaseIcedTemplate: 'Iced: Giet de hete koffie direct over de {iceMl} g ijs in de karaf.',
 cupWarningTemplate: 'Het kopje ontvangt slechts {inCupMl} ml. Koffie houdt vloeistof vast.',
 favModeCoffee: 'g koffie',
 favModeWater: 'ml water',
 favModeIced: ' - IJs',
 },
};
