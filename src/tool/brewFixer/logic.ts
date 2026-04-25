export type BrewMethod = 'pourover' | 'frenchpress' | 'aeropress' | 'moka' | 'espresso' | 'coldbrew';
export type FlavorNote = 'acidic' | 'bitter' | 'watery' | 'astringent';
export type AdjustmentSeverity = 'slight' | 'moderate' | 'severe';

export interface DiagnosisState {
  method: BrewMethod;
  flavors: FlavorNote[];
  severity: AdjustmentSeverity;
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

export const FLAVOR_DIAGNOSTICS: Record<FlavorNote, {
  label: string;
  icon: string;
  color: string;
  causes: string[];
  acidicSolution: string;
  bitterSolution: string;
  waterySolution: string;
  astringentSolution: string;
}> = {
  acidic: {
    label: 'Acidic / Sour',
    icon: 'mdi:alert-circle-outline',
    color: '#FFD700',
    causes: [
      'Grind too coarse (under-extraction)',
      'Water temperature too low',
      'Brewing time too short',
      'Coffee too fresh (not degassed)',
    ],
    acidicSolution: 'Grind finer to extract more solids',
    bitterSolution: 'Not the root cause; check bitter notes',
    waterySolution: 'Add contact time or finer grind',
    astringentSolution: 'Try cooler water temperature',
  },
  bitter: {
    label: 'Bitter / Burnt',
    icon: 'mdi:fire',
    color: '#8B4513',
    causes: [
      'Grind too fine (over-extraction)',
      'Water temperature too high',
      'Brewing time too long',
      'Stale or dark roast coffee',
    ],
    acidicSolution: 'Try cooler water temperature',
    bitterSolution: 'Grind coarser to reduce extraction time',
    waterySolution: 'Add contact time, but monitor bitterness',
    astringentSolution: 'Use hotter water and shorter time',
  },
  watery: {
    label: 'Watery / Weak',
    icon: 'mdi:water',
    color: '#4A90E2',
    causes: [
      'Grind too coarse (weak extraction)',
      'Brew ratio too high (more water)',
      'Brewing time too short',
      'Coffee too old or low quality',
    ],
    acidicSolution: 'Extend brewing time slightly',
    bitterSolution: 'Increase water temperature',
    waterySolution: 'Grind finer or use more coffee',
    astringentSolution: 'Use cooler water',
  },
  astringent: {
    label: 'Astringent / Drying',
    icon: 'mdi:water-percent',
    color: '#9370DB',
    causes: [
      'Water quality issues (too many minerals)',
      'Over-extraction combined with mineral content',
      'Grind too fine with hard water',
      'Brewing temperature too high',
    ],
    acidicSolution: 'Use filtered water',
    bitterSolution: 'Reduce grind fineness and temperature',
    waterySolution: 'Ensure proper extraction with good water',
    astringentSolution: 'Use filtered water and cooler temperature',
  },
};

function getSolutionForFlavor(flavor: FlavorNote): string {
  const messages: Record<FlavorNote, string> = {
    acidic: 'Water flows too quickly through coarse grounds without extracting the body. Finer grind increases contact surface and slows flow.',
    bitter: 'Water spent too long extracting—over-extracting bitter compounds and ash. Coarser grind reduces contact time and extraction intensity.',
    watery: 'Insufficient dissolved solids in your cup. Finer grind or increased coffee dose raises extraction percentage and body.',
    astringent: 'Mineral-rich water over-extracts and bonds to coffee compounds, creating a drying mouthfeel. Coarser grind reduces over-extraction while filtering improves water quality.',
  };
  return messages[flavor];
}

function getAdjustmentAction(flavor: FlavorNote, severity: AdjustmentSeverity, method: BrewMethod): { action: string; icon: string; texture: string } {
  const severityWord = severity === 'severe' ? 'much' : 'slightly';
  const multiplierMap: Record<AdjustmentSeverity, number> = { slight: 0.5, moderate: 1, severe: 1.5 };
  const severityMultiplier = multiplierMap[severity];

  const texturesByMethod: Record<BrewMethod, Record<FlavorNote, string>> = {
    espresso: { acidic: 'Like fine salt', bitter: 'Like flour', watery: 'Like cocoa powder', astringent: 'Slightly finer flour' },
    pourover: { acidic: 'Like table salt', bitter: 'Like coarse sand', watery: 'Like fine cornmeal', astringent: 'Fine sand' },
    aeropress: { acidic: 'Like fine cornmeal', bitter: 'Like table salt', watery: 'Like finely ground pepper', astringent: 'Medium sand' },
    frenchpress: { acidic: 'Like breadcrumbs', bitter: 'Like rock salt', watery: 'Like sea salt', astringent: 'Coarse sand' },
    moka: { acidic: 'Like fine sea salt', bitter: 'Like fine sand', watery: 'Like table salt', astringent: 'Medium-fine sand' },
    coldbrew: { acidic: 'Like coarse sea salt', bitter: 'Like gravel', watery: 'Like rock salt', astringent: 'Coarse sand with grains' },
  };

  const actions: Record<FlavorNote, { action: string; icon: string }> = {
    acidic: { action: `Grind ${severityWord} finer`, icon: 'mdi:chevron-left' },
    bitter: { action: `Grind ${severityWord} coarser`, icon: 'mdi:chevron-right' },
    watery: { action: `Grind finer or use ${Math.round(5 * severityMultiplier)}g more coffee`, icon: 'mdi:plus-circle' },
    astringent: { action: 'Use filtered water and grind coarser', icon: 'mdi:water-filter' },
  };

  const baseAction = actions[flavor];
  return {
    action: baseAction.action,
    icon: baseAction.icon,
    texture: texturesByMethod[method]?.[flavor] ?? 'Adjust grind size',
  };
}

export function generateDiagnosis(state: DiagnosisState): DiagnosisResult {
  const method = BREW_METHODS[state.method];
  const primaryFlavor = state.flavors[0] || 'acidic';
  const flavorData = FLAVOR_DIAGNOSTICS[primaryFlavor];
  const adjustment = getAdjustmentAction(primaryFlavor, state.severity, state.method);

  const primaryIssueLabel = state.flavors.length > 1
    ? `${flavorData.label} + ${FLAVOR_DIAGNOSTICS[state.flavors[1]].label}`
    : flavorData.label;

  return {
    primaryIssue: primaryIssueLabel,
    explanation: flavorData.causes[0] ?? '',
    primaryAction: adjustment.action,
    actionIcon: adjustment.icon,
    actionDescription: getSolutionForFlavor(primaryFlavor),
    secondaryAction: `Brew at ${method.idealTemp}°C for ${method.contactTime}`,
    tertiaryAction: 'Allow the coffee to cool to room temperature before tasting to catch all notes.',
    textureRef: adjustment.texture,
  };
}

export function getFlavorsDescription(flavors: FlavorNote[]): string {
  if (flavors.length === 0) return '';
  if (flavors.length === 1) {
    const flavor = flavors[0];
    if (!flavor) return '';
    return FLAVOR_DIAGNOSTICS[flavor].label;
  }
  return flavors.map((f) => FLAVOR_DIAGNOSTICS[f].label).join(' + ');
}
