import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { SEOSection } from "@jjlmoya/utils-shared";
import type { ToolLocaleContent } from "../../../types";
import type { GrinderRetentionCalculatorUI } from "../ui";
import { bibliography } from "../bibliography";

const slug = "coffee-grinder-dose-retention-calculator";
const title = "Coffee Grinder Dose Retention Calculator";
const description =
  "Measure coffee grinder retention from a before and after dose test, then estimate the charge dose, purge waste, daily coffee use, and session cost.";
const faq = [
  {
    question: "What is coffee grinder retention?",
    answer:
      "Retention is the difference between the beans loaded into a grinder and the grounds collected after grinding. Some retained coffee may leave in a later dose, so it can affect repeatability.",
  },
  {
    question: "How do I measure grinder retention?",
    answer:
      "Weigh the beans before grinding and weigh the grounds after the grinder has finished dispensing. Repeat at the grind setting and with the coffee you actually use.",
  },
  {
    question: "What does charge dose mean?",
    answer:
      "Charge dose is the approximate amount of beans to load when the measured retention is expected to repeat. It adds the estimated retained mass to your target delivered dose.",
  },
  {
    question: "Does this calculator test a grinder?",
    answer:
      "No. It estimates a result from your own trial. Retention changes with grinder design, roast, grind setting, humidity, cleaning, and how consistently you empty the chute.",
  },
  {
    question: "Should I always purge retained coffee?",
    answer:
      "Not always. Purging can reduce carryover after a grind adjustment, but it also increases waste. Record the purge amount separately so you can decide whether the consistency benefit is worth it.",
  },
  {
    question: "Why can collected grounds weigh more than the beans loaded?",
    answer:
      "A higher output reading usually means a scale, container, or workflow mismatch. The calculator flags that reading instead of treating it as negative retention.",
  },
];
const howTo = [
  {
    name: "Run a calibration dose",
    text: "Weigh the beans loaded into the grinder and then weigh the collected grounds after dispensing is complete.",
  },
  {
    name: "Enter the two measurements",
    text: "Enter the trial input and trial output in grams or ounces. Keep the same grinder setting, coffee, container, and tapping routine for comparable tests.",
  },
  {
    name: "Set the target dose",
    text: "Enter the dose you want to arrive in the brewer. The calculator adds the observed retained mass to estimate a charge dose.",
  },
  {
    name: "Add workflow waste",
    text: "Enter any grounds intentionally purged per session and the number of sessions per day to separate retention from deliberate purge waste.",
  },
  {
    name: "Use the action card",
    text: "Review the retention percentage, charge dose, delivered dose, waste, and cost. Repeat the test if the result does not match your normal workflow.",
  },
];
const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "en",
};
const seo: SEOSection[] = [
  { type: "title", text: "Measure Coffee Grinder Retention", level: 2 },
  {
    type: "paragraph",
    html: "A weighed coffee dose can still change at the grinder exit. This calculator turns a simple before and after test into a practical estimate for the dose you should charge and the coffee that disappears into the workflow.",
  },
  {
    type: "paragraph",
    html: "Retention is not a fixed property of every grinder. Roast, grind setting, humidity, static, cleaning, and how the chute is cleared can all change the difference between input and output. Use measurements from your own routine.",
  },
  { type: "title", text: "How the Dose Calculation Works", level: 2 },
  {
    type: "list",
    items: [
      "Retained mass equals trial input minus trial output, with negative values clamped to zero.",
      "Retention percentage is retained mass divided by the trial input.",
      "Charge dose equals target delivered dose plus observed retained mass.",
      "Waste per session equals retained mass plus any intentionally discarded purge.",
    ],
  },
  { type: "title", text: "Read the Grinder Workflow", level: 2 },
  {
    type: "paragraph",
    html: "The visual flow separates coffee that should reach the brewer from coffee that remains retained and coffee that you choose to purge. That distinction matters when comparing a low retention routine with a high purge routine.",
  },
  {
    type: "table",
    headers: ["Output", "What it means", "What to do next"],
    rows: [
      [
        "Retention",
        "Estimated mass left behind after the trial",
        "Repeat the test when changing coffee or grind setting",
      ],
      [
        "Charge dose",
        "Beans to load for the target delivered dose",
        "Check the ground output on a scale",
      ],
      [
        "Waste",
        "Retention plus intentional purge",
        "Decide whether consistency justifies the loss",
      ],
    ],
  },
  { type: "title", text: "Estimate Daily Coffee Cost", level: 2 },
  {
    type: "paragraph",
    html: "Enter the price per kilogram and sessions per day to estimate charged coffee and cost. The result is a planning estimate: it does not account for spills, dialing in, drinks shared with others, or changes in bean price.",
  },
  {
    type: "list",
    items: [
      "Measure one normal dose before changing the grinder.",
      "Compare the output with the target instead of trusting the grinder dial.",
      "Log retention separately from purge waste.",
      "Repeat the measurement after cleaning or a major grind adjustment.",
    ],
  },
  {
    type: "tip",
    title: "Use repeated trials for a better estimate",
    html: "<p>One weighing is a snapshot, not a laboratory specification. Run several comparable doses and use a representative average. The ECBC publishes a repeatable grind retention test, while research shows that electrostatic conditions can change what remains in the grinder.</p>",
  },
  { type: "title", text: "Limits of This Calculator", level: 2 },
  {
    type: "paragraph",
    html: "This tool cannot identify internal dead space, predict exchange between old and new grounds, or certify a grinder. It also cannot guarantee extraction quality. Treat the result as a repeatable workflow aid and keep manufacturer instructions above a generic estimate.",
  },
];

export const content: ToolLocaleContent<GrinderRetentionCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: "Coffee Grinder Retention Questions",
  faq,
  bibliographyTitle: "Coffee Grinding References",
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo,
  ui: {
    controlTitle: "Build your dose profile",
    unitSystemLabel: "Measurement system",
    unitMetric: "Metric",
    unitImperial: "Imperial",
    unitWeightMetric: "g",
    unitWeightImperial: "oz",
    presetTitle: "Start with a workflow",
    presetSingleDose: "Single dose",
    presetEspressoBar: "Espresso bar",
    presetZeroPurge: "Low waste",
    presetCustom: "Custom",
    targetDoseLabel: "Target delivered dose",
    targetDoseHint: "Grounds you want to brew",
    trialInputLabel: "Beans loaded in test",
    trialInputHint: "Weigh before grinding",
    trialOutputLabel: "Grounds collected in test",
    trialOutputHint: "Weigh after dispensing",
    purgeLabel: "Intentional purge per session",
    purgeHint: "Coffee discarded on purpose",
    sessionsLabel: "Sessions per day",
    sessionsHint: "For the daily estimate",
    costLabel: "Bean cost per kilogram",
    costHint: "Use your purchase price",
    currencyLabel: "Currency",
    currencyHint: "Convert the price with a reference factor",
    currencyRateNote: "1 EUR = {rate} {currency}",
    resultTitle: "Your calibration",
    statusLow: "Low retention",
    statusModerate: "Watch the variation",
    statusHigh: "High retention",
    mismatchWarning:
      "The collected output is higher than the loaded input. Check the container tare and repeat the test.",
    retentionLabel: "Retention rate",
    chargeDoseLabel: "Charge dose",
    deliveredLabel: "Delivered dose",
    wasteLabel: "Waste per session",
    costPerSessionLabel: "Cost per session",
    dailyWasteLabel: "Daily waste",
    dailyCostLabel: "Daily cost",
    visualTitle: "Where the coffee goes",
    visualLoaded: "Total loaded including purge",
    visualDelivered: "Delivered",
    visualRetained: "Retained",
    visualPurge: "Purged",
    calibrationTitle: "Use your own measurements",
    calibrationText:
      "Run the test with the coffee, setting, container, and tapping routine you normally use. Repeat it after cleaning or changing the grind.",
    actionTitle: "Your repeatable workflow",
    actionText:
      "Charge the target dose plus measured retention, then track purge separately so you can see the true cost of consistency.",
    stepMeasure: "Load {input} {unit} of beans and record the input.",
    stepCompare: "Collect {output} {unit} and compare it with the input.",
    stepLoad: "For future doses, charge about {charge} {unit}.",
    stepPurge: "Discard or reuse the planned {purge} {unit} purge.",
    stepLog: "Log about {waste} {unit} of waste for this session.",
    copyResult: "Copy result",
    copiedText: "Result copied",
    resetText: "Reset",
    copyTemplate:
      "Coffee grinder retention\nRetention: {retention} {unit}\nCharge dose: {charge} {unit}\nWaste per session: {waste} {unit}\nCost per session: {cost}",
  },
};
