import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';
import { buildWaterSeo } from '../../seoTranslations';

const slug = 'sca-coffee-water-calculator';
const title = 'SCA Coffee Water Calculator';
const description = 'Calculate custom mineral recipes for specialty coffee according to SCA guidelines for TDS, hardness, alkalinity, and pH.';

const faqData = [
 { question: 'What is the SCA water standard?', answer: 'The Specialty Coffee Association defines target ranges for hardness, alkalinity, pH, and sodium to support balanced extraction and protect equipment.' },
 { question: 'Why should I not use tap water directly?', answer: 'Tap water changes by city and season. Chlorine, scale, or unbalanced minerals can mute specialty coffee and damage boilers. Mineralising distilled water gives repeatable results.' },
 { question: 'Where can I get the mineral salts?', answer: 'Epsom salt and baking soda are commonly available from pharmacies or supermarkets. Calcium chloride is often sold by home-brewing suppliers. Always choose food-grade products.' },
 { question: 'Is this safe for my espresso machine?', answer: 'The calculator shows corrosion and scale risk. Very pure water can corrode metal, while very hard water creates deposits. SCA and Barista Hustle profiles balance equipment life and flavour.' },
 { question: 'What is the difference between magnesium and calcium in coffee?', answer: 'Magnesium extracts fruity and sweet compounds efficiently. Calcium adds body and a silky texture but can create more boiler scale over time.' },
 { question: 'Can I save my usual concentrations?', answer: 'Yes. The calculator stores the concentrate values you enter in your browser, so your customised recipe is ready the next time you open it.' },
];

const howToData = [
 { name: 'Get a pure base water', text: 'Use distilled, demineralised, or reverse-osmosis water. Starting near zero dissolved solids gives you full control.' },
 { name: 'Prepare concentrate bottles', text: 'Dissolve each salt separately in 100 ml of distilled water using the recommended Epsom salt, calcium chloride, and bicarbonate amounts.' },
 { name: 'Choose your target profile', text: 'Select SCA Ideal, Barista Hustle, Hendon, Melbourne, or create a custom profile with your own GH and KH values.' },
 { name: 'Enter the final volume', text: 'Enter how many litres you want to mineralise. The calculator adjusts the concentrate doses for that exact volume.' },
 { name: 'Add concentrates and top up', text: 'Use a precision syringe to add the indicated amounts, then fill the container to the final volume with distilled water.' },
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
 inLanguage: 'es',
};

export const content: ToolLocaleContent<WaterCalculatorUI> = {
 slug,
 title,
 description,
 faqTitle: 'Preguntas Frecuentes sobre la Calculadora de Agua para Café',
 faq: faqData,
 bibliographyTitle: 'Referencias Técnicas y Estándares SCA',
 bibliography,
 howTo: howToData,
 schemas: [faqSchema, howToSchema, appSchema],
 seo: buildWaterSeo({ title, description, faq: faqData, howTo: howToData }),
 ui: {
 sectionMixTitle: 'Configuración de Mezcla',
 labelVolume: 'Volumen Final',
 labelProfile: 'Perfil de Agua Objetivo',
 customProfileBtn: 'Personalizado',
 labelGH: 'GH Objetivo',
 labelKH: 'KH Objetivo',
 concentratesTitle: 'Botellas de Concentrado (g/100ml)',
 saltMgName: 'Magnesio (Epsom)',
 saltCaName: 'Calcio (CaCl2)',
 saltBufName: 'Bicarbonato (Sodio)',
 recipeTitle: 'Receta',
 labelMg: 'Magnesio:',
 labelCa: 'Calcio:',
 labelBuffer: 'Bicarbonato:',
 labelDistilledWater: 'Agua Destilada hasta',
 copyBtn: 'Copiar Receta',
 copiedText: '¡Copiado!',
 safetyMetalsTitle: 'Seguridad Metales',
 safetyScaleTitle: 'Riesgo de Cal',
 calculatingText: 'Calculando...',
 glossaryTitle: 'Guía Rápida de Minerales',
 profileSubTemplate: 'Objetivo: {gh} GH / {kh} KH',
 customProfileName: 'Personalizado',
 corrosionHigh: 'Peligro: Agua muy agresiva. Puede corroer calderas y componentes de cobre.',
 corrosionMedium: 'Aceptable: Riesgo moderado de corrosión. Recomendado para filtros.',
 corrosionLow: 'Seguro: El agua tiene suficiente buffer para proteger los metales.',
 scaleHigh: 'Peligro: Formación de cal inminente. Usar solo en métodos de filtrado manual.',
 scaleMedium: 'Precaución: Puede generar depósitos de cal a largo plazo en máquinas de espresso.',
 scaleLow: 'Seguro: No hay riesgo significativo de incrustaciones de cal.',
 copyTemplate:
 'Receta de Agua Café ({profileName}):\n- Volumen: {liters}L\n- Concentrado Magnesio: {mg}ml\n- Concentrado Calcio: {ca}ml\n- Concentrado Bicarbonato: {buf}ml\n- Agua Destilada: {water}ml',
 glossary0Term: 'Dureza Total (GH)',
 glossary0Desc:
 'La suma de Calcio y Magnesio. El Magnesio resalta el dulzor y la complejidad; el Calcio aporta cuerpo y textura.',
 glossary1Term: 'Alcalinidad (KH)',
 glossary1Desc:
 'Capacidad del agua para neutralizar ácidos. Un KH alto apaga la acidez del café; un KH bajo lo hace agrio.',
 glossary2Term: 'TDS (Sólidos Disueltos)',
 glossary2Desc:
 'Total de sólidos disueltos. En agua mineralizada, es la suma de todas nuestras sales añadidas.',
 glossary3Term: 'Magnesio',
 glossary3Desc:
 'Extrae compuestos de sabor complejos y frutales. Es el mineral favorito para cafés de especialidad.',
 },
};
