import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildWaterSeo } from '../../seoTranslations';

const slug = 'sca-koffie-water-calculator';
const title = 'SCA Koffiewater Calculator';
const description =
 'Bereken exacte minerale concentraties voor specialty coffee. SCA, Barista Hustle en Hendon profielen. Controleer Magnesium, Calcium en Bicarbonaat om smaak te maximaliseren en je machine te beschermen.';

const faqData = [
 {
 question: 'Wat is de SCA-waterkwaliteitsnorm?',
 answer:
 'De Specialty Coffee Association definieert een technische norm voor zetwater, waarbij optimale bereiken voor totale hardheid (GH), alkaliteit (KH), pH en natrium worden gespecificeerd om een gebalanceerde extractie te bereiken die de smaak verbetert zonder apparatuur te beschadigen.',
 },
 {
 question: 'Waarom niet gewoon kraanwater gebruiken?',
 answer:
 'Kraanwater varieert aanzienlijk per locatie en seizoen. Het kan chloor, overtollig kalk of mineralen bevatten die de smaken van specialty coffee maskeren en boilers en afdichtingen beschadigen. Door gedestilleerd water te mineraliseren, heb je volledige controle en herhaalbare resultaten.',
 },
 {
 question: 'Waar haal ik de mineraalzouten?',
 answer:
 'Epsomzout (magnesiumsulfaat) en natriumbicarbonaat zijn verkrijgbaar bij apotheken en supermarkten. Calciumchloride is gebruikelijk in winkels voor zelfgebrouwen bier. Zorg er altijd voor dat ze van voedingskwaliteit zijn.',
 },
 {
 question: 'Is het veilig voor mijn espressomachine?',
 answer:
 'De calculator bevat een realtime risico-indicator. Zeer zuiver water corrodeert metalen onderdelen; zeer hard water veroorzaakt kalkaanslag. De SCA Ideal- en Barista Hustle-profielen zijn ontworpen om de levensduur van apparatuur in evenwicht te brengen met de smaakkwaliteit.',
 },
 {
 question: 'Wat is het verschil tussen Magnesium en Calcium in koffie?',
 answer:
 'Magnesium extraheert fruitige en zoete smaakverbindingen efficiënter en is het voorkeursmineraal voor filtermethoden. Calcium geeft meer body en een zijdezachte textuur, maar heeft een grotere neiging om na verloop van tijd kalkaanslag in boilers te vormen.',
 },
 { question: 'Kan ik mijn gebruikelijke concentraties opslaan?', answer: 'Ja. De calculator bewaart de waarden in de browser zodat uw eigen recept bij een volgend bezoek beschikbaar is.' },
];

const howToData = [
 {
 name: 'Zorg voor zuiver basiswater',
 text: 'Koop gedestilleerd of gedemineraliseerd water, of gebruik een omgekeerd osmosesysteem. Het doel is om te beginnen bij 0 ppm totale opgeloste stoffen voor volledige controle over de mineralisatie.',
 },
 {
 name: 'Bereid je voorraadflessen met concentraat voor',
 text: 'Los elk zout afzonderlijk op in 100 ml gedestilleerd water: 2,46 g Epsomzout voor Magnesium, 1,47 g CaCl2 for Calcium en 1,68 g bicarbonaat voor de Buffer.',
 },
 {
 name: 'Selecteer je doelprofiel',
 text: 'Kies SCA Ideal (gebalanceerd), Barista Hustle (zoetheid en helderheid), Hendon (body), Melbourne (verfijnd) of maak een aangepast profiel met je eigen GH- en KH-waarden.',
 },
 {
 name: 'Voer het eindvolume in',
 text: 'Typ de hoeveelheid water die je wilt mineraliseren in liters. De calculator past automatisch de concentraatdoseringen aan voor dat exacte volume.',
 },
 {
 name: 'Voeg concentraten toe en vul aan met gedestilleerd water',
 text: 'Voeg met een precisiespuit de aangegeven milliliters van elk concentraat toe aan je container en vul aan tot het totale volume met gedestilleerd water.',
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
 inLanguage: 'nl',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Veelgestelde vragen over de SCA Koffiewater Calculator',
 faq: faqData,
 bibliographyTitle: 'Technische referenties en SCA-normen',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildWaterSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 sectionMixTitle: 'Mixconfiguratie',
 labelVolume: 'Eindvolume',
 labelProfile: 'Doelwaterprofiel',
 customProfileBtn: 'Aangepast',
 labelGH: 'Doel-GH',
 labelKH: 'Doel-KH',
 concentratesTitle: 'Voorraadflessen concentraat (g/100ml)',
 saltMgName: 'Magnesium (Epsom)',
 saltCaName: 'Calcium (CaCl2)',
 saltBufName: 'Bicarbonaat (Natrium)',
 recipeTitle: 'Recept',
 labelMg: 'Magnesium:',
 labelCa: 'Calcium:',
 labelBuffer: 'Bicarbonaat:',
 labelDistilledWater: 'Gedestilleerd water tot',
 copyBtn: 'Recept kopiëren',
 copiedText: 'Gekopieerd!',
 safetyMetalsTitle: 'Metalen Veiligheid',
 safetyScaleTitle: 'Kalkaanslag Risico',
 calculatingText: 'Berekenen...',
 glossaryTitle: 'Snelle mineralengids',
 profileSubTemplate: 'Doel: {gh} GH / {kh} KH',
 customProfileName: 'Aangepast',
 corrosionHigh: 'Gevaar: Zeer agressief water. Kan boilers en koperen onderdelen corroderen.',
 corrosionMedium: 'Acceptabel: Matig corrosierisico. Aanbevolen voor filtermethoden met zorg bij machines.',
 corrosionLow: 'Veilig: Water heeft voldoende buffercapaciteit om metalen te beschermen.',
 scaleHigh: 'Gevaar: Dreigende kalkaanslag. Alleen gebruiken bij handmatige filtermethoden.',
 scaleMedium: 'Let op: Kan na verloop van tijd kalkaanslag veroorzaken in espressomachines.',
 scaleLow: 'Veilig: Geen significant risico op kalkaanslag.',
 copyTemplate:
 'Recept koffiewater ({profileName}):\n- Volume: {liters}L\n- Magnesiumconcentraat: {mg}ml\n- Calciumconcentraat: {ca}ml\n- Bicarbonaatconcentraat: {buf}ml\n- Gedestilleerd water: {water}ml',
 glossary0Term: 'Totale hardheid (GH)',
 glossary0Desc:
 'De som van calcium en magnesium. Magnesium verbetert zoetheid en complexiteit; calcium voegt body en textuur toe.',
 glossary1Term: 'Alkaliteit (KH)',
 glossary1Desc:
 'Het vermogen van het water om zuren te neutraliseren. Een hoge KH onderdrukt de koffiezuren; een lage KH laat het zuur smaken.',
 glossary2Term: 'TDS (Total Dissolved Solids)',
 glossary2Desc: 'In gemineraliseerd water vertegenwoordigt TDS de gecombineerde concentratie van alle toegevoegde mineraalzouten.',
 glossary3Term: 'Magnesium',
 glossary3Desc:
 'Extraheert complexe fruitige smaakverbindingen efficiënter. Het voorkeursmineraal voor het zetten van specialty coffee.',
 },
};
