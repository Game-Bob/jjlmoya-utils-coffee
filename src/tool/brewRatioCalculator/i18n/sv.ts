import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

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
      'Använd "flash chilling"-tekniken: förbered 60 % av det totala vattnet som hett vatten vid 90–96 grader och lägg de resterande 40 % som is i karaffen. Häll det heta kaffet direkt över isen. Den snabba avkylningen bevarar aromerna. Denna kalkylator räknar automatiskt om mängderna när du aktiverar iskaffe-läget.',
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
    text: 'Välj mellan Stark (1:12–14), Balanserad (1:15–16), Lätt (1:17–18) eller ange ditt eget förhållande. Varje alternativ motsvarar en unik smakprofil.',
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
  seo: [
    {
      type: 'title',
      text: 'Kafferatio-kalkylator: Mästerguiden till perfekt extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att brygga en kopp specialkaffe är inte en subjektiv kulinarisk handling; det är ett experiment i <strong>vätskekemi</strong> och <strong>masstransport</strong>. I centrum för denna process ligger konceptet <strong>Brew Ratio</strong> (bryggförhållande), ett kritiskt mått som dikterar det kvantitativa förhållandet mellan det lösta ämnet (malet kaffe) och lösningsmedlet (vatten). Vår kalkylator integrerar standarder från <em>Specialty Coffee Association (SCA)</em> och principer för tillämpad termodynamik för att låta baristor och entusiaster uppnå perfekt repeterbarhet i sina extraktioner.',
    },
    {
      type: 'summary',
      title: 'Vad du kommer att lära dig om kafferatio',
      items: [
        '<strong>Brew Ratio:</strong> Hur viktförhållandet mellan kaffe och vatten (t.ex. 1:15) avgör din kopps potentiella styrka och sensoriska profil.',
        '<strong>TDS och extraktion:</strong> Vetenskapen bakom lösta fasta ämnen och hur stor procentandel av bönan som faktiskt bör hamna i din dryck.',
        '<strong>Retentionsjustering:</strong> Varför kaffe absorberar 2 g vatten per gram pulver och hur man beräknar det extra vatten som behövs.',
        '<strong>Specifika metoder:</strong> De ideala proportionerna för V60, franskpress, espresso och flash brew-recept för iskaffe.',
      ],
    },
    {
      type: 'title',
      text: 'Vad är Brew Ratio och varför är det den viktigaste variabeln?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kaffe innehåller cirka 30 % lösligt material, men allt detta material är inte önskvärt för den mänskliga gommen. Vatten, som fungerar som ett universellt lösningsmedel, extraherar föreningar i en specifik ordning baserat på deras molekylvikt och kemiska affinitet. Kafferatiot kontrollerar exakt hur mycket lösningskapacitet vi ger till varje gram kaffe.',
    },
    {
      type: 'list',
      items: [
        '<strong>Syrlig fas (lipider och organiska syror):</strong> Dessa löses upp först tack vare sin höga löslighet. De bidrar med klarhet, äppel- eller citronsyra och fruktiga toner. Ett för lågt förhållande (underextraktion) stoppar processen här, vilket resulterar i en sur och salt kopp.',
        '<strong>Söt fas (sockerarter och kolhydrater):</strong> Dessa extraheras härnäst. De skapar balans, sötma och fyllighet. Detta är det "gyllene fönstret" där kaffet når sin maximala aromatiska komplexitet och strukturella balans.',
        '<strong>Bitter fas (fibrer och fenoliska föreningar):</strong> Dessa tar längst tid att lösa upp. Med alltför höga förhållanden (överextraktion) bryter vattnet ner kaffecellerna och extraherar torra bitterämnen, aska och träiga toner.',
      ],
    },
    {
      type: 'title',
      text: 'Rekommenderade förhållanden: Proportioner per extraktionsmetod',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varje extraktionsmetod kräver ett specifikt förhållande på grund av variabler som kontakttid, pumptryck eller filtrets porstorlek. Följande tekniska tabell beskriver branschstandarderna för 2026:',
    },
    {
      type: 'table',
      headers: ['Bryggmetod', 'Förhållande (Gram/Vatten)', 'Kopp-profil', 'Måltid'],
      rows: [
        ['Espresso', '1:2 till 1:2.5', 'Intensiv, viskös, tät crema', '25–30 sek'],
        ['V60 / Pour-Over', '1:15 till 1:16', 'Ren, klar, tydliga noter', '2:30–3:30 min'],
        ['Aeropress', '1:12 till 1:15', 'Mångsidig, medelhög fyllighet', '1:30–2:00 min'],
        ['Franskpress', '1:12 till 1:14', 'Texturerad, tung, oljig', '4:00–5:00 min'],
        ['Cold Brew', '1:8 till 1:12', 'Söt, låg syra, mycket fyllig', '12–24 timmar'],
      ],
    },
    {
      type: 'title',
      text: 'Beräkna vattnet som behövs: Bönans retentionsfaktor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett av de vanligaste misstagen vid manuell bryggning är att ignorera att malet kaffe är en porös hydrofil struktur som binder en konstant mängd vatten. Inte allt vatten du häller på hamnar i koppen.',
    },
    {
      type: 'paragraph',
      html: 'Vetenskapligt sett binder malet kaffe cirka <strong>2,0 gram vatten per 1,0 gram kaffe</strong>. Vår kalkylator introducerar <strong>Dynamisk retentionsjustering</strong>: om du behöver fylla en specifik behållare på 300 ml, räknar systemet ut att du måste hälla på 340 ml vatten för att kompensera för bönornas absorption, så att extraktionsförhållandet — och därmed smaken — hålls intakt.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Kaffedos', value: '20g', icon: 'mdi:coffee' },
        { label: 'Vatten hällt', value: '300ml', icon: 'mdi:water' },
        { label: 'Retention', value: '40ml', icon: 'mdi:minus-circle' },
        { label: 'I koppen', value: '260ml', icon: 'mdi:cup' },
      ],
      columns: 4,
    },
    {
      type: 'title',
      text: 'Vikten av Bloom: Avgasning för jämn extraktion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bloom-fasen är inte bara estetisk; den är en fysisk nödvändighet. Under rostningen bildas CO2 i kaffet som stängs in i dess cellulära matris. Om vi häller på allt vatten kontinuerligt slipper gasen ut våldsamt, vilket skapar mikrokanaler (channeling) och hindrar lösningsmedlet från att tränga in i mitten av kaffepartiklarna.',
    },
    {
      type: 'tip',
      title: 'Teknik för homogen mättnad',
      html: '<p>För en perfekt bloom, häll på exakt dubbla kaffevikten i vatten (1:2 bloom-ratio). Rör om försiktigt eller cirkulera karaffen för att se till att allt kaffe är blött. Vänta i 30–45 sekunder. Gasutsläppet gör att efterföljande hällningar kan flöda laminärt och extrahera fasta ämnen jämnt genom hela kaffebädden.</p>',
    },
    {
      type: 'title',
      text: 'Iskaffe-tutorial: Hur man brygger iskaffe utan att späda ut smaken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Specialisbryggt kaffe (Flash Brew) kräver termodynamisk omkalibrering. Målet är att extrahera flyktiga oljor vid 94 °C för att fånga den aromatiska komplexiteten, och sedan kyla ner dem snabbt för att undvika oxidation och förlust av klarhet.',
    },
    {
      type: 'list',
      items: [
        '<strong>60 % hett vatten:</strong> Minsta mängden som behövs för att uppnå 18–20 % extraktion utan att överextrahera eller kyla ner bädden för tidigt.',
        '<strong>40 % termisk is:</strong> Placeras i den mottagande karaffen. Kaffets termiska energi överförs till isen (latent smältvärme), vilket kyler drycken till under 5 °C direkt.',
        '<strong>Slutlig styrka:</strong> Tillsammans förblir det slutliga förhållandet (t.ex. 1:15) exakt, vilket resulterar i en livlig, kall dryck med rätt smakkoncentration.',
      ],
    },
    {
      type: 'title',
      text: 'Malningsgrad och kafferatio: Nyckeln till kontaktyta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ratiot är bara halva ekvationen. Malningen avgör <strong>Total exponerad yta</strong> för lösningsmedlet. Mindre partiklar (fin malning) har proportionellt större yta, vilket dramatiskt accelererar extraktionen av kemiska föreningar.',
    },
    {
      type: 'title',
      text: 'Repeterbarhet och vetenskap: Förvandla ditt kök till ett baristalabb',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Excellens i specialkaffe kommer från metrisk konsekvens. Vår funktion för <strong>anpassade recept</strong> låter dig skapa ett tekniskt arkiv över dina framgångsrika bryggningar. Det är inte bara en mapp för favoriter; det är ett analysverktyg för att jämföra hur samma kilo kaffe reagerar på ett förhållande av 1:15 jämfört med 1:16, så att du kan justera receptet med precision.',
    },
  ],
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
    resultHotWaterSub: '90–96 °C',
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
