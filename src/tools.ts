export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { BREW_RATIO_CALCULATOR_TOOL } from './tool/brewRatioCalculator';
import { COFFEE_TIMER_TOOL } from './tool/coffeeTimer';
import { WATER_CALCULATOR_TOOL } from './tool/waterCalculator';
import { GRIND_CONVERTER_TOOL } from './tool/grindConverter';

export const ALL_TOOLS: ToolDefinition[] = [BREW_RATIO_CALCULATOR_TOOL, COFFEE_TIMER_TOOL, WATER_CALCULATOR_TOOL, GRIND_CONVERTER_TOOL];


