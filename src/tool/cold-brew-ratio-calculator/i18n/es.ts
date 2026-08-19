import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ColdBrewRatioCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-proporcion-cafe-cold-brew';
const title = 'Calculadora de proporción para café cold brew';
const description = 'Calcula café, agua de preparación, dilución del concentrado, tiempo de reposo y rendimiento servido para cold brew en unidades métricas o imperiales.';

const faqData = [
  { question: '¿Qué proporción de café y agua debo usar para cold brew?', answer: 'Empieza con 1:8 para un cold brew listo para beber o 1:5 para un concentrado que después diluirás. La mejor proporción depende del café, el molido, el tiempo y la forma de servirlo.' },
  { question: '¿Cuánto café necesito para 1 litro de cold brew?', answer: 'Con una proporción 1:8, usa 125 gramos de café y 1.000 mililitros de agua de preparación. La calculadora también estima el líquido retenido por los posos.' },
  { question: '¿Puedo calcular cold brew en onzas y onzas líquidas?', answer: 'Sí. Elige Imperial para ver el café en onzas y el agua en onzas líquidas. El cálculo interno conserva gramos y mililitros para mantener la proporción.' },
  { question: '¿Qué diferencia hay entre cold brew listo para beber y concentrado?', answer: 'El cold brew listo para beber se prepara cerca de su fuerza de servicio. El concentrado usa más café por cantidad de agua y después se mezcla con agua o leche.' },
  { question: '¿Cuánto tiempo debe reposar el cold brew?', answer: 'Como punto de partida práctico, usa entre 12 y 18 horas en inmersión completa dentro del frigorífico o en un lugar fresco. Más tiempo puede aumentar el amargor o la astringencia.' },
  { question: '¿La calculadora tiene en cuenta el agua retenida por los posos?', answer: 'Sí. Estima una retención aproximada de 2 mililitros por gramo de café para calcular el rendimiento. El filtro, el molido y el tiempo de drenaje cambian el resultado real.' },
  { question: '¿Es esta calculadora una guía de seguridad alimentaria?', answer: 'No. Solo calcula cantidades de receta. Usa utensilios limpios, refrigera la bebida terminada cuando corresponda y sigue las recomendaciones vigentes de conservación y servicio.' },
];

const howToData = [
  { name: 'Elige el estilo de preparación', text: 'Selecciona listo para beber si lo servirás directamente o concentrado si añadirás agua o leche después.' },
  { name: 'Define el agua de preparación', text: 'Introduce la cantidad de agua que pondrás en el recipiente. La calculadora escala el café según ese volumen y la proporción elegida.' },
  { name: 'Ajusta la proporción', text: 'Elige un perfil o mueve el control de proporción. Los números más bajos producen un café más intenso y los altos uno más ligero.' },
  { name: 'Define reposo y dilución', text: 'Usa el control de tiempo como orientación. En modo concentrado, indica cuánta agua añadirás por cada parte de café preparado.' },
  { name: 'Sigue la tarjeta de preparación', text: 'Usa el flujo del lote y los pasos para pesar el café, añadir agua, reposar, filtrar y diluir el rendimiento servido aproximado.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' };

const seo: SEOSection[] = [
  { type: 'title', text: 'Proporción y planificación de un lote de cold brew', level: 2 },
  { type: 'paragraph', html: 'El cold brew es más fácil de repetir cuando la masa de café, el agua, la dilución y el tiempo de reposo se controlan por separado. Esta calculadora convierte el estilo elegido en una receta pesada.' },
  { type: 'title', text: 'Elige entre listo para beber y concentrado', level: 2 },
  { type: 'paragraph', html: 'La receta lista para beber se prepara cerca de la fuerza de servicio. El concentrado usa una proporción más intensa y añade agua después del filtrado.' },
  { type: 'table', headers: ['Estilo', 'Proporción inicial', 'Dilución', 'Uso'], rows: [['Listo para beber', '1:8', 'Ninguna', 'Servir frío o con hielo'], ['Lote suave', '1:10', 'Ninguna', 'Taza ligera para diario'], ['Concentrado', '1:5', '1:1', 'Mezclar con agua o leche']] },
  { type: 'title', text: 'Cómo funciona el cálculo del cold brew', level: 2 },
  { type: 'list', items: ['La dosis de café es el agua de preparación dividida por la proporción elegida.', 'El rendimiento preparado se estima restando unos 2 mililitros de agua retenida por cada gramo de café.', 'La dilución del concentrado se calcula a partir del rendimiento preparado para mostrar claramente el volumen servido.'] },
  { type: 'title', text: 'Medidas métricas e imperiales para cold brew', level: 2 },
  { type: 'paragraph', html: 'Elige gramos y mililitros para recetas métricas u onzas y onzas líquidas para recetas imperiales. La calculadora convierte la pantalla y conserva la relación interna entre masa y volumen.' },
  { type: 'table', headers: ['Medida', 'Métrica', 'Imperial'], rows: [['Dosis de café', 'g', 'oz'], ['Agua y rendimiento', 'ml', 'fl oz'], ['Proporción', '1 parte de café', '1 parte de café']] },
  { type: 'tip', title: 'Usa el resultado como receta inicial', html: '<p>El origen, el molido, el filtro, la temperatura y el drenaje cambian la extracción y el rendimiento. Prueba el primer lote y modifica una variable cada vez.</p>' },
  { type: 'title', text: 'Tiempo de reposo y seguridad alimentaria', level: 2 },
  { type: 'paragraph', html: 'El control de reposo sirve para planificar la receta, no garantiza el sabor ni la seguridad. Utiliza equipos limpios y sigue las recomendaciones vigentes de enfriamiento, conservación y servicio.' },
];

export const content: ToolLocaleContent<ColdBrewRatioCalculatorUI> = {
  slug, title, description, faqTitle: 'Preguntas sobre cold brew', faq: faqData, bibliographyTitle: 'Referencias de preparación', bibliography, howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo,
  ui: {
    controlTitle: 'Prepara tu lote', modeReady: 'Listo para beber', modeReadyHint: 'Preparar y servir', modeConcentrate: 'Concentrado', modeConcentrateHint: 'Preparar y diluir', unitSystemLabel: 'Sistema de medidas', unitMetric: 'Métrico', unitImperial: 'Imperial', unitWaterMetric: 'ml', unitWaterImperial: 'fl oz', unitWeightMetric: 'g', unitWeightImperial: 'oz', presetTitle: 'Empieza con un perfil', presetClassic: 'Clásico 1:8', presetSmooth: 'Suave 1:10', presetConcentrate: 'Concentrado 1:5', presetCustom: 'Personalizado', brewWaterLabel: 'Agua de preparación', brewWaterHint: 'Agua para preparar', ratioLabel: 'Proporción café y agua', ratioHint: 'Agua por gramo de café', dilutionLabel: 'Agua de dilución', dilutionHint: 'Partes de agua por parte de café preparado', steepLabel: 'Tiempo de reposo', steepHint: 'Un rango orientativo', hoursUnit: 'horas', resultTitle: 'Tu lote', resultBadgeReady: 'Listo para beber', resultBadgeConcentrate: 'Concentrado', coffeeLabel: 'Café molido', brewWaterResultLabel: 'Agua de preparación', retainedLabel: 'Retenida por los posos', dilutionWaterLabel: 'Agua de dilución', servedYieldLabel: 'Rendimiento servido aproximado', ratioResultLabel: 'Proporción', steepResultLabel: 'Reposo', steepStatusShort: 'Reposo corto', steepStatusBalanced: 'Reposo equilibrado', steepStatusLong: 'Reposo largo', stageCaption: 'Un lote suave listo para el frigorífico', stageCaptionConcentrate: 'Un concentrado intenso que espera dilución', stepsTitle: 'Pasos de la receta', visualTitle: 'Flujo del lote', visualBrewCaption: 'Preparar', visualFilterCaption: 'Filtrar', visualServeCaption: 'Servir', visualCoffeeDose: 'Dosis de café', visualWaterInput: 'Agua de preparación', visualRetained: 'Retenida por los posos', visualServed: 'Rendimiento preparado', visualDilution: 'Agua de dilución', stepCoffee: 'Pesa {coffee} {coffeeUnit} de café molido grueso.', stepWater: 'Añade {water} {waterUnit} de agua y satura por completo el café.', stepSteep: 'Tapa y deja reposar unas {hours} horas.', stepDilute: 'Después de filtrar, añade {water} {waterUnit} de agua de dilución.', stepServe: 'Enfría y sirve aproximadamente {yield} {waterUnit}.', noteTitle: 'Una estimación útil', noteText: 'El café molido retiene agua durante el filtrado. La cantidad retenida es aproximada; calibra el primer lote con tu filtro y tu forma de drenar.', copyRecipe: 'Copiar receta', copiedText: 'Receta copiada', resetText: 'Restablecer', copyTemplate: 'Receta de cold brew\nCafé: {coffee} {coffeeUnit}\nAgua de preparación: {brewWater} {waterUnit}\nProporción: 1:{ratio}\nReposo: {hours} horas\nAgua de dilución: {dilutionWater} {waterUnit}\nRendimiento servido aproximado: {servedYield} {waterUnit}', faqTitle: 'FAQ', bibliographyTitle: 'Referencias',
  },
};
