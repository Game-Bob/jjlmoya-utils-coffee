import { bibliography } from '../bibliography';
import type { AeropressRatioCalculatorLocaleContent } from '../entry';

const slug = 'aeropress-ratio-kalkylator';
const title = 'AeroPress Förhållande och Recept Kalkylator';
const description = 'Beräkna vattenfördelning, kammarens kapacitet, bypass utspädning och extraktionssteg för AeroPress kaffe.';

const howTo = [
  {
    name: 'Välj bryggmetod och modell',
    text: 'Välj standard eller inverterad metod samt storleken på din AeroPress kammare (Original, XL eller Go).',
  },
  {
    name: 'Ställ in kaffedos och förhållande',
    text: 'Ange kaffevikten i gram och önskat bryggförhållande eller välj ett mästerskapsrecept.',
  },
  {
    name: 'Kontrollera kammarens vatten och bypass',
    text: 'Se om receptet överskrider kammarens volym. Verktyget räknar automatiskt ut nödvändigt bypassvatten.',
  },
  {
    name: 'Starta den interaktiva fas timern',
    text: 'Följ timern för exakt pre-infusion (bloom), dragtid och mjuk pressning av kolven.',
  },
];

const faq = [
  {
    question: 'Vad är skillnaden mellan standard och inverterad AeroPress metod?',
    answer: 'I standardmetoden vilar bryggaren på koppen vilket ger ett litet inledande droppflöde innan kolven sätts i. I inverterad metod står bryggaren upp och ner på kolven vilket ger en helt tät infusion.',
  },
  {
    question: 'Vad innebär bypass bryggning med AeroPress?',
    answer: 'Bypass innebär att du brygger ett starkt kaffekoncentrat i kammaren och späder ut det direkt i koppen med rent hett vatten. Det gör att du kan göra stora portioner utan att spilla över.',
  },
  {
    question: 'Vilket är det ideala kaffe och vattenförhållandet för AeroPress?',
    answer: 'För klassiskt filterkaffe ger förhållanden mellan 1:14 och 1:17 en fin balans. För espresso liknande koncentrat är 1:4 till 1:8 perfekt.',
  },
  {
    question: 'Hur påverkar malningsgraden extraktionen i AeroPress?',
    answer: 'En medium-fin malningsgrad passar utmärkt för korta dragtider på 1 till 2 minuter. Finare malning ökar fylligheten medan grövre malning motverkar bitterhet vid lång dragtid.',
  },
];

export const content: AeropressRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    badge: 'Specialkaffe Verktyg',
    profileLabel: 'Extraktionsprofil',
    unitSystemLabel: 'Enhetssystem',
    unitMetricLabel: 'Metrisk (g)',
    unitImperialLabel: 'Imperial (oz)',
    presetsTitle: 'Barista och Mästerskapsrecept',
    presetCustom: 'Egen Formel',
    presetHoffmann: 'Hoffmann Ultimate',
    presetWendelboe: 'Wendelboe Ljusrost',
    presetWacChamp: 'WAC Mästare Bypass',
    presetAlanAdler: 'Alan Adler Original',
    presetIcedBypass: 'Flash Brew Is AeroPress',
    methodLabel: 'Bryggteknik',
    methodStandard: 'Standard Upprätt',
    methodInverted: 'Inverterad Infusion',
    modelLabel: 'AeroPress Modell',
    modelOriginal: 'Original / Clear',
    modelXl: 'AeroPress XL',
    modelGo: 'AeroPress Go',
    doseLabel: 'Kaffedos',
    doseUnitMetric: 'gram',
    doseUnitImperial: 'oz',
    ratioLabel: 'Bryggförhållande',
    ratioPrefix: '1:',
    waterTempLabel: 'Vattentemperatur',
    waterTempUnit: '°C',
    grindLabel: 'Malningsprofil',
    grindFine: 'Fin',
    grindMediumFine: 'Medium Fin',
    grindMedium: 'Medium',
    grindCoarse: 'Grov',
    resultsTitle: 'Vattenfördelning och Värden',
    statTotalWater: 'Totalt Vatten',
    statChamberWater: 'Vatten i Kammare',
    statBypassWater: 'Bypass Vatten',
    statYield: 'Koppvolym',
    statEstimatedTds: 'Uppskattad TDS',
    unitGrams: 'g',
    unitOz: 'oz',
    unitMl: 'ml',
    unitFlOz: 'fl oz',
    unitPercent: '%',
    bypassAlertTitle: 'Bypass Utspädning Krävs',
    bypassAlertText: 'Ditt recept kräver {chamber} i kammaren och {bypass} tillsatt direkt i koppen.',
    timerTitle: 'Fas Timer',
    timerStart: 'Starta Timer',
    timerPause: 'Pausa',
    timerReset: 'Återställ',
    phaseBloom: 'Pre-infusion och Fuktning',
    phasePour: 'Hällning och Omrörning',
    phaseSteep: 'Immersion och Dragtid',
    phasePress: 'Mjuk Pressning',
    phaseBypass: 'Tillsätt Bypass Vatten',
    phaseComplete: 'Kaffet är Klart',
    guideTitle: 'Brygguide',
    guideStep1Title: 'Skölj filter och dosera kaffe',
    guideStep1Desc: 'Placera filtret i locket och skölj med hett vatten. Tillsätt nymalet kaffe i kammaren.',
    guideStep2Title: 'Häll vatten i kammaren',
    guideStep2Desc: 'Häll i det beräknade vattnet vid rätt temperatur och rör om försiktigt.',
    guideStep3Title: 'Sätt i kolven och låt dra',
    guideStep3Desc: 'Placera kolven på toppen för att bilda ett vakuum och låt dra under den angivna tiden.',
    guideStep4Title: 'Pressa och späd ut',
    guideStep4Desc: 'Pressa kolven jämnt under 20 till 30 sekunder. Stanna vid pysljudet och tillsätt bypassvatten.',
    ratioStrengthLight: 'Lätt och Delikat',
    ratioStrengthMedium: 'Balanserad Kopp',
    ratioStrengthStrong: 'Fyllig och Kraftig',
    ratioStrengthConcentrate: 'Espresso Koncentrat',
    chamberWaterLabel: 'Vatten i Kammare',
    coffeeBedLabel: 'Kaffebädd',
    airGapLabel: 'Luftficka',
  },
  seo: [
    { type: 'title', text: 'Principer för AeroPress Extraktion och Förhållanden', level: 2 },
    {
      type: 'paragraph',
      html: 'Bryggaren <strong>AeroPress</strong> kombinerar immersion och pneumatisk tryckfiltrering. För att uppnå en söt, ren och aromatisk kopp krävs noggrann kontroll av proportionerna mellan kaffe och vatten.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kammarens Kapacitet och Bypass Metoden',
      html: 'En standard AeroPress rymmer ca 220ml till 240ml vatten när kaffebädden är på plats. För större volymer använder baristor bypass metoden för att brygga ett rent koncentrat.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1:16', label: 'Gyllene Filterratio' },
        { value: '230 ml', label: 'Standard Kammarvolym' },
        { value: '1.2 till 1.5%', label: 'Optimal TDS Nivå' },
      ],
    },
    { type: 'title', text: 'Jämförelse mellan Standard och Inverterad Metod', level: 3 },
    {
      type: 'paragraph',
      html: 'Bryggarens placering förändrar kontakttiden och extraktionens jämnhet.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Standard Upprätt Metod',
          description: 'Filterlocket vilar direkt på koppen. När kolven sätts i skapas ett vakuum som stoppar tidigt droppflöde.',
          points: [
            'Enkel och mycket säker hantering',
            'Lite tidig perkolering i starten',
            'Rekommenderas av James Hoffmann för jämn kvalitet',
          ],
        },
        {
          title: 'Inverterad Metod',
          description: 'AeroPress står upp och ner på kolven vilket förhindrar läckage fram till vändningen.',
          highlight: true,
          points: [
            'Fullständig kontroll över dragtiden',
            'Utmärkt för koncentrat och större doser',
            'Kräver försiktighet vid vändning av varm bryggare',
          ],
        },
      ],
    },
    { type: 'title', text: 'Bypass Utspädning för Stora Portioner', level: 3 },
    {
      type: 'paragraph',
      html: 'Bypass är hemligheten bakom många vinnarrecept i World AeroPress Championship. Genom att brygga i 1:6 till 1:8 undviks bittra tanniner och koppen balanseras med hett vatten.',
    },
    {
      type: 'table',
      headers: ['Recepttyp', 'Kaffedos', 'Kammarens Vatten', 'Bypass Vatten', 'Malning'],
      rows: [
        ['Hoffmann Filter', '11g', '200g', '0g', 'Medium Fin (600µm)'],
        ['Tim Wendelboe Ljus', '14g', '200g', '0g', 'Medium (700µm)'],
        ['WAC Mästare Bypass', '30g', '120g', '105g', 'Grov (900µm)'],
        ['Alan Adler Klassisk', '17g', '80g', '100g Valfritt', 'Fin (450µm)'],
        ['Flash Brew Iskaffe', '18g', '150g', '100g Is', 'Medium Fin (550µm)'],
      ],
    },
    { type: 'title', text: 'Praktiska Råd för Perfekt Kaffe', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperaturanpassning:</strong> 92°C till 96°C för ljusrost och 80°C till 85°C för mörkrost.',
        '<strong>Jämn pressning:</strong> Pressa mjukt under 20 till 30 sekunder för att undvika kanalisering.',
        '<strong>Skölj filtret:</strong> Blöt pappersfiltret med varmt vatten för att avlägsna papperssmak.',
        '<strong>Stanna vid pyset:</strong> Avsluta pressningen så fort luft börjar pysa ut.',
      ],
    },
    {
      type: 'summary',
      title: 'Sammanfattning',
      items: [
        'Anpassa malningen efter dragtiden.',
        'Använd bypassberäkning när önskad volym överstiger kammaren.',
        'Håll temperatur och tid konstanta för repeterbar kvalitet.',
      ],
    },
  ],
  faq,
  faqTitle: 'Vanliga frågor om AeroPress förhållande och recept',
  bibliography,
  bibliographyTitle: 'Tekniska referenser och kaffevetenskap',
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
