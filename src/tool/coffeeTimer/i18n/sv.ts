import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CoffeeTimerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kaffebryggningstimer';
const title = 'Timer för kaffebryggning';
const description =
  'Professionell timer för specialkaffe med bryggningsfaser, rytmiska ljudvarningar och extraktionssammanfattning. Optimerad för V60, Chemex och Aeropress.';

const faqData = [
  {
    question: 'Varför ska jag använda den här timern istället för min telefon?',
    answer:
      'Den här timern är designad specifikt för kaffe. Den innehåller visuella faser (Bloom, Pour, Drain), ljudvarningar 3 sekunder innan varje övergång och låter dig konfigurera hela ditt recept så att du aldrig tappar rytmen under bryggningen.',
  },
  {
    question: 'Vad är bloom-tid?',
    answer:
      'Det är den inledande pre-infusionen (vanligtvis 30 till 45 sekunder) där en liten mängd vatten hälls på för att frigöra CO2. Timern markerar denna fas i bärnstensgult så att du vet när du ska vänta och när du ska fortsätta hälla.',
  },
  {
    question: 'Hur vet jag om min extraktionstid är korrekt?',
    answer:
      'För en standard V60 bör den totala tiden ligga mellan 2:30 och 3:15 minuter. Om den blir klar tidigare är din malning för grov. Om det tar längre tid är den för fin. Timern låter dig diagnostisera denna process exakt.',
  },
  {
    question: 'Har den ljudvarningar?',
    answer:
      'Ja. Systemet avger ett kort pip innan bloom-fasen tar slut och vid slutet av processen, vilket gör att du kan fokusera på vattenstrålen utan att ständigt titta på skärmen.',
  },
  {
    question: 'Är den kompatibel med Chemex?',
    answer:
      'Absolut. Du kan justera den totala tiden till 4:30 eller 5:00 minuter (typiskt för Chemex på grund av dess tjocka filter) i inställningssektionen längst ner.',
  },
  {
    question: 'Fungerar den på mobilen?',
    answer:
      'Den är optimerad för mobil användning, med stora knappar som är lätta att trycka på även med våta händer eller medan du håller i din svanhalskanna.',
  },
];

const howToData = [
  {
    name: 'Konfigurera ditt recept',
    text: 'I den nedre sektionen kan du justera total mängd vatten, bloom-vatten, bloom-tid och total tid enligt din bryggmetod (V60, Chemex, Aeropress).',
  },
  {
    name: 'Tryck på startknappen',
    text: 'Tryck på den stora startknappen. Timern startar och visar den aktiva fasen i framstegsfältet längst upp.',
  },
  {
    name: 'Bloom-fas',
    text: 'Häll på bloom-vattnet (visas på skärmen) i en spiral och vänta på att timern räknar ner. Du får en ljudvarning 3 sekunder innan den tar slut.',
  },
  {
    name: 'Hällfas (Pour)',
    text: 'Fortsätt hälla på resten av vattnet tills du når den totala vikten. Häll i långsamma, jämna cirklar för en enhetlig extraktion.',
  },
  {
    name: 'Dräneringsfas (Drain)',
    text: 'Vänta tills kaffet har runnit igenom filtret helt. Denna fas avslutar extraktionen och avgör klarheten och eftersmaken i din kopp.',
  },
  {
    name: 'Granska sammanfattningen',
    text: 'När du är klar visar timern den totala tiden och mängden vatten. Notera dessa värden tillsammans med dina smakupplevelser för att förfina receptet.',
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

export const content: ToolLocaleContent<CoffeeTimerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om kaffetimern',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser och SCA-protokoll',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kaffetimer: Vetenskapen bakom extraktionstid (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom specialkaffe är <strong>kontakttiden</strong> mellan vatten och malet kaffe inte bara ett mått på väntan; det är den kinetiska faktorn som avgör vilka kemiska föreningar som hamnar i din kopp. En enda sekund extra kan innebära skiftet från karamellsötma till askig bitterhet. Vårt professionella timerverktyg för V60, Chemex och Aeropress fungerar som en <strong>rytmassistent</strong>, vilket gör barista-precision tillgänglig i hemmet.',
    },
    {
      type: 'summary',
      title: 'Varför en specialiserad timer är livsviktig',
      items: [
        '<strong>Kinetisk kontroll:</strong> Takten med vilken vatten löser upp kaffepartiklar är konstant. Tiden är din broms och gaspedal.',
        '<strong>Bryggningsfaser:</strong> Kaffe extraheras inte linjärt. Att dela upp tiden i Bloom, Pour och Drain är avgörande.',
        '<strong>Reproducerbarhet:</strong> Om du inte mäter tiden kan du inte upprepa dina bästa koppar. Konsistens är grunden för kvalitet.',
        '<strong>Malningsjustering:</strong> Den slutliga tiden talar om för dig om du ska mala finare eller grövre nästa gång.',
      ],
    },
    {
      type: 'title',
      text: 'Extraktionstidslinjen: Vad händer varje sekund?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När varmt vatten vidrör kaffet börjar en molekylär hinderbana. Alla smaker extraheras inte samtidigt. Att förstå denna tidslinje är skillnaden mellan en amatör och en professionell barista:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sekund 0 till 45 (Bloom):</strong> Detta är avgasningsfasen. CO2 som fångats vid rostningen blockerar vattnet från att tränga in. Genom att vänta här kan bönan öppna upp sig, vilket banar väg för en enhetlig extraktion.',
        '<strong>Sekund 45 till 120 (Sura och söta smaker):</strong> Vattnet rinner igenom och löser upp mineralsalter, organiska syror och komplexa sockerarter. Detta är smakens hjärta.',
        '<strong>Sekund 120 till 210 (Kropp och eftersmak):</strong> Tyngre fibrer och bittra föreningar extraheras. Om denna fas pågår för länge blir kaffet strävt (astringent).',
      ],
    },
    {
      type: 'title',
      text: 'Bloom-fasen: Varför 30 sekunder är standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Bloom</strong> eller pre-infusion är när vi häller på ungefär dubbelt så mycket vatten som kaffets vikt. Dessa inledande 30 sekunder tjänar till att driva ut koldioxid. Utan att respektera denna tid trycker gasen ut vattnet, vilket skapar kanaler där vätskan passerar utan att vidröra kaffet (channeling), vilket resulterar i en vattnig och inkonsekvent kopp.',
    },
    {
      type: 'table',
      headers: ['Fas', 'Föreslagen tid', 'Teknisk åtgärd', 'Kemiskt syfte'],
      rows: [
        ['Bloom', '30 till 45 sek', 'Häll 2x kaffets vikt', 'Avgasning (CO2)'],
        ['Första hällningen', '45 till 90 sek', 'Långsamma cirklar', 'Extraktion av syra/sötma'],
        ['Andra hällningen', '90 till 150 sek', 'Mjuk central hällning', 'Balans och kropp'],
        ['Drawdown', 'Till slutet', 'Stadigt droppande', 'Klarhet och eftersmak'],
      ],
    },
    {
      type: 'title',
      text: 'Tidens inverkan på malningen: Feedback-loopen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Timern är ditt bästa diagnosverktyg för kvarnen. Om ditt V60-recept bör ta 3:00 minuter och vattnet har runnit igenom helt vid 2:15, kommer kaffet troligen att smaka surt och svagt (underextraktion). Lösningen är inte att hälla långsammare, utan att <strong>mala finare</strong> så att partiklarna gör mer motstånd mot vattnet.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Ideal V60-tid', value: '3:00', icon: 'mdi:clock-check' },
        { label: 'Ideal Chemex-tid', value: '4:30', icon: 'mdi:timer-sand' },
        { label: 'Ideal Aeropress-tid', value: '2:00', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Rytmvarningar: Varför ljudassistenten är nödvändig',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att brygga filterkaffe kräver ständig visuell uppmärksamhet på din våg och ditt hällmönster. Vår timer innehåller <strong>ljudvarningar</strong> som signalerar 3 sekunder innan du ska starta nästa hällning eller när bloom-fasen tar slut. Det är skillnaden mellan en flytande extraktion och en full av avbrott.',
    },
    {
      type: 'tip',
      title: 'Tips från en tävlingsbarista',
      html: '<p>Håll vattenflödet så lågt och så nära kaffebädden som möjligt. Att hälla från en hög höjd introducerar syre och överdriven omrörning, vilket kan överextrahera kaffet och kyla ner vattnet för snabbt. Använd timern för att hålla en stadig cirkulär rytm på cirka 5 till 7 gram vatten per sekund.</p>',
    },
    {
      type: 'title',
      text: 'Termodynamik och tid: Temperaturvariabeln',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tiden påverkar systemets temperatur. En extraktion som pågår i 6 minuter kommer att förlora mycket termisk energi, vilket resulterar i en obalanserad kopp. De optimala tidsintervallen håller vattnet mellan 90°C och 96°C under hela extraktionen.',
    },
    {
      type: 'title',
      text: 'Timing för iskaffe med Flash Brew-teknik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När du brygger kaffe över is måste timingen vara mer aggressiv. Genom att använda mindre varmt vatten (60% av totalen) minskas kontakttiden. För att kompensera, använd en något finare malning för att hålla extraktionstiden inom 2:30 till 3:00 minuter.',
    },
    {
      type: 'title',
      text: 'Sammanfattning efter extraktion: Kontinuerligt lärande',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Efter varje bryggning visar vårt verktyg den totala kontakttiden. Notera detta värde tillsammans med dina smakupplevelser. Smakar det bittert? Nästa gång siktar du på en tid som är 15 sekunder kortare. Smakar det metalliskt eller surt? Sikta på 20 sekunder mer. Timern brygger inte kaffet åt dig, men den ger dig data för att kunna vara konstnären.',
    },
  ],
  ui: {
    readyText: 'Klar att starta',
    startBtn: 'STARTA EXTRAKTION',
    pauseBtn: 'PAUSA',
    resumeBtn: 'ÅTERUPPTA',
    resetBtn: 'NOLLSTÄLL',
    newBrewBtn: 'NY BRYGGNING',
    targetLabel: 'Målvikt vatten:',
    instructionStart: 'Tryck på den stora knappen',
    hintStart: 'Förbered din V60 eller Chemex',
    phase1Label: 'Fase 1: Bloom',
    phase2Label: 'Fase 2: Pour (Häll)',
    phase3Label: 'Fase 3: Drain (Dränera)',
    instructionBloom: 'Häll på {bloomWater}g vatten',
    hintBloom: 'Snurra försiktigt för att mätta kaffet',
    instructionPour: 'Nå {waterTotal}g totalt',
    hintPour: 'Häll i jämna cirklar',
    instructionDrain: 'Vänta på sista dräneringen',
    hintDrain: 'Snart redo att avnjutas',
    summaryTitle: 'Extraktionen klar!',
    summaryMessage: 'Ditt kaffe är redo att serveras.',
    statTimeLabel: 'Total tid',
    statWaterLabel: 'Vatten påhällt',
    setupTitle: 'Receptinställningar',
    labelWater: 'Total mängd vatten (g)',
    labelBloomWater: 'Bloom-vatten (g)',
    labelBloomTime: 'Bloom-tid (s)',
    labelTotalTime: 'Total tid (s)',
  },
};
