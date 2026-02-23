import { jest, describe, it, expect } from '@jest/globals';
import { capitalize, reverse, truncate, isPalindrome } from './string-utils';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('HELLO WORLD')).toBe('Hello world');
      expect(capitalize('hELLo wORLd')).toBe('Hello world');
    });

    it('should return an empty string if input is empty or null', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null as any)).toBe('');
      expect(capitalize(undefined as any)).toBe('');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('world')).toBe('dlrow');
      expect(reverse('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate a string to the specified length', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
      expect(truncate('hello', 5)).toBe('hello');
      expect(truncate('hello world', 10)).toBe('hello wor...');
    });

    it('should return the original string if the length is greater than or equal to the string length', () => {
      expect(truncate('hello', 10)).toBe('hello');
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
      expect(isPalindrome('madam')).toBe(true);
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false if a string is not a palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
      expect(isPalindrome('racecars')).toBe(false);
    });

    it('should handle empty strings and strings with only spaces', () => {
        expect(isPalindrome('')).toBe(true);
        expect(isPalindrome(' ')).toBe(true);
        expect(isPalindrome('   ')).toBe(true);
    });
  });
});