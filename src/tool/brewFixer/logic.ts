export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';
export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type AdjustmentSeverity = 'slight' | 'moderate' | 'severe';

export interface DiagnosisState {
  method: BrewMethod;
  flavors: FlavorNote[];
  severity: AdjustmentSeverity;
}

export interface DiagnosisStrings {
  flavorLabels: Record<FlavorNote, string>;
  causes: Record<FlavorNote, string[]>;
  solutions: Record<FlavorNote, string>;
  actions: Record<FlavorNote, { text: string; textSevere: string; icon: string }>;
  texturesByMethod: Record<BrewMethod, Record<FlavorNote, string>>;
  secondaryAction: string;
  tertiaryAction: string;
}

export interface BrewMethodData {
  minGrind: number;
  maxGrind: number;
  idealTemp: number;
  contactTime: string;
  description: string;
  icon: string;
}

export interface DiagnosisResult {
  primaryIssue: string;
  explanation: string;
  primaryAction: string;
  actionIcon: string;
  actionDescription: string;
  secondaryAction: string;
  tertiaryAction: string;
  textureRef: string;
}

export const BREW_METHODS: Record<BrewMethod, BrewMethodData> = {
  pourover: {
    minGrind: 500,
    maxGrind: 800,
    idealTemp: 94,
    contactTime: '2:30 - 3:30 min',
    description: 'V60, Chemex, Dripper',
    icon: 'mdi:water-outline',
  },
  frenchpress: {
    minGrind: 900,
    maxGrind: 1200,
    idealTemp: 92,
    contactTime: '4:00 - 5:00 min',
    description: 'Press pot, Bodum',
    icon: 'mdi:bottle-wine',
  },
  aeropress: {
    minGrind: 400,
    maxGrind: 700,
    idealTemp: 90,
    contactTime: '1:30 - 2:30 min',
    description: 'Aeropress, Prismo',
    icon: 'mdi:coffee-maker',
  },
  moka: {
    minGrind: 600,
    maxGrind: 900,
    idealTemp: 85,
    contactTime: '6:00 - 8:00 min',
    description: 'Moka pot, Stovetop',
    icon: 'mdi:kettle',
  },
  espresso: {
    minGrind: 180,
    maxGrind: 300,
    idealTemp: 92,
    contactTime: '25 - 30 sec',
    description: 'Espresso machine, lever',
    icon: 'mdi:coffee',
  },
  coldbrew: {
    minGrind: 900,
    maxGrind: 1300,
    idealTemp: 4,
    contactTime: '12 - 24 hours',
    description: 'Cold brew, immersion',
    icon: 'mdi:snowflake',
  },
};


function getSolutionForFlavor(flavor: FlavorNote, strings: DiagnosisStrings): string {
  return strings.solutions[flavor];
}

function getAdjustmentAction(flavor: FlavorNote, severity: AdjustmentSeverity, method: BrewMethod, strings: DiagnosisStrings): { action: string; icon: string; texture: string } {
  const actionData = strings.actions[flavor];
  const action = severity === 'severe' ? actionData.textSevere : actionData.text;
  const texture = strings.texturesByMethod[method]?.[flavor] ?? 'Adjust grind size';

  return {
    action,
    icon: actionData.icon,
    texture,
  };
}

export function generateDiagnosis(state: DiagnosisState, strings: DiagnosisStrings): DiagnosisResult {
  const method = BREW_METHODS[state.method];
  const primaryFlavor = state.flavors[0] || 'acidic';
  const adjustment = getAdjustmentAction(primaryFlavor, state.severity, state.method, strings);

  const primaryIssueLabel = state.flavors.length > 1
    ? `${strings.flavorLabels[primaryFlavor]} + ${strings.flavorLabels[state.flavors[1]]}`
    : strings.flavorLabels[primaryFlavor];

  return {
    primaryIssue: primaryIssueLabel,
    explanation: strings.causes[primaryFlavor][0] ?? '',
    primaryAction: adjustment.action,
    actionIcon: adjustment.icon,
    actionDescription: getSolutionForFlavor(primaryFlavor, strings),
    secondaryAction: strings.secondaryAction
      .replace('{temp}', String(method.idealTemp))
      .replace('{time}', method.contactTime),
    tertiaryAction: strings.tertiaryAction,
    textureRef: adjustment.texture,
  };
}

export function getFlavorsDescription(flavors: FlavorNote[], strings: DiagnosisStrings): string {
  if (flavors.length === 0) return '';
  if (flavors.length === 1) {
    const flavor = flavors[0];
    if (!flavor) return '';
    return strings.flavorLabels[flavor];
  }
  return flavors.map((f) => strings.flavorLabels[f]).join(' + ');
}
