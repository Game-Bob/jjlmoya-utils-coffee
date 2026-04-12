import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { coffeeCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 4 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(4);
    });

    it('coffeeCategory should be defined', () => {
      expect(coffeeCategory).toBeDefined();
      expect(coffeeCategory.i18n).toBeDefined();
    });
  });
});

