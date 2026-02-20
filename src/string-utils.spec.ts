import { capitalize } from './string-utils';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      expect(capitalize('hELLo')).toBe('Hello');
    });

    it('should return empty string if input is empty', () => {
      expect(capitalize('')).toBe('');
    });
  });

  // Missing tests for reverse, truncate, and isPalindrome
});
