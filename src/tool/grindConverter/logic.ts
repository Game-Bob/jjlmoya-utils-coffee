export interface GrindMethod {
  id: string;
  icon: string;
  minMicras: number;
  maxMicras: number;
  rangeIndex: number;
}

export interface Grinder {
  id: string;
  name: string;
  brand: string;
  type: 'clicks' | 'numeric' | 'stepped';
  uniformity: number;
  ranges: Record<string, string>;
}

export const GRIND_METHODS: GrindMethod[] = [
  { id: 'ibrik', icon: 'mdi:coffee-maker-outline', minMicras: 100, maxMicras: 300, rangeIndex: 1 },
  { id: 'espresso', icon: 'mdi:coffee-maker', minMicras: 300, maxMicras: 500, rangeIndex: 2 },
  { id: 'moka', icon: 'mdi:coffee-maker-outline', minMicras: 500, maxMicras: 700, rangeIndex: 3 },
  { id: 'v60', icon: 'mdi:filter-variant', minMicras: 700, maxMicras: 900, rangeIndex: 4 },
  { id: 'chemex', icon: 'mdi:flask-outline', minMicras: 900, maxMicras: 1200, rangeIndex: 5 },
  { id: 'french-press', icon: 'mdi:coffee', minMicras: 1200, maxMicras: 1500, rangeIndex: 6 },
  { id: 'cold-brew', icon: 'mdi:snowflake', minMicras: 1500, maxMicras: 1600, rangeIndex: 7 },
];

export const GRINDERS: Grinder[] = [
  {
    id: 'generic',
    name: 'Any Grinder (μm)',
    brand: 'Generic',
    type: 'numeric',
    uniformity: 0.7,
    ranges: {
      ibrik: '100-300',
      espresso: '300-500',
      moka: '500-700',
      v60: '700-900',
      chemex: '900-1200',
      'french-press': '1200-1500',
      'cold-brew': '1500+',
    },
  },
  {
    id: 'comandante-c40',
    name: 'C40 MK3/MK4',
    brand: 'Comandante',
    type: 'clicks',
    uniformity: 0.95,
    ranges: {
      espresso: '10-15',
      moka: '15-20',
      v60: '20-25',
      chemex: '25-30',
      'french-press': '28-32',
      'cold-brew': '32+',
    },
  },
  {
    id: 'baratza-encore',
    name: 'Encore',
    brand: 'Baratza',
    type: 'numeric',
    uniformity: 0.75,
    ranges: {
      moka: '8-12',
      v60: '14-20',
      chemex: '20-24',
      'french-press': '28-32',
      'cold-brew': '30+',
    },
  },
  {
    id: 'graef-cm800',
    name: 'CM800',
    brand: 'Graef',
    type: 'numeric',
    uniformity: 0.7,
    ranges: {
      espresso: '1-4',
      moka: '5-10',
      v60: '12-18',
      chemex: '20-25',
      'french-press': '30-35',
    },
  },
  {
    id: 'hario-skerton',
    name: 'Skerton',
    brand: 'Hario',
    type: 'clicks',
    uniformity: 0.4,
    ranges: {
      moka: '2-4',
      v60: '6-8',
      chemex: '8-10',
      'french-press': '12-15',
    },
  },
  {
    id: 'timemore-c2',
    name: 'Chestnut C2/C3',
    brand: 'Timemore',
    type: 'clicks',
    uniformity: 0.85,
    ranges: {
      espresso: '7-10',
      moka: '11-14',
      v60: '15-20',
      chemex: '21-24',
      'french-press': '24-28',
      'cold-brew': '28+',
    },
  },
  {
    id: 'fellow-ode-g2',
    name: 'Ode Gen 2',
    brand: 'Fellow',
    type: 'numeric',
    uniformity: 0.92,
    ranges: {
      v60: '4-6',
      chemex: '6-8',
      'french-press': '9-11',
      'cold-brew': '11',
    },
  },
];
