import { jest, describe, it, expect } from '@jest/globals';
import * as stringUtils from './string-utils';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      expect(stringUtils.capitalize('hello world')).toBe('Hello world');
      expect(stringUtils.capitalize('HELLO WORLD')).toBe('Hello world');
      expect(stringUtils.capitalize('hELLo wORLd')).toBe('Hello world');
    });

    it('should return an empty string if input is empty or null', () => {
      expect(stringUtils.capitalize('')).toBe('');
      expect(stringUtils.capitalize(null as any)).toBe('');
      expect(stringUtils.capitalize(undefined as any)).toBe('');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
      expect(stringUtils.reverse('world')).toBe('dlrow');
      expect(stringUtils.reverse('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate a string to the specified length and add "..."', () => {
      expect(stringUtils.truncate('This is a long string', 10)).toBe('This is ...');
      expect(stringUtils.truncate('Short', 10)).toBe('Short');
      expect(stringUtils.truncate('', 5)).toBe('');
    });

    it('should not truncate if the string is shorter than or equal to the length', () => {
      expect(stringUtils.truncate('short', 10)).toBe('short');
      expect(stringUtils.truncate('abc', 3)).toBe('abc');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if the string is a palindrome', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('madam')).toBe(true);
      expect(stringUtils.isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false if the string is not a palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
      expect(stringUtils.isPalindrome('world')).toBe(false);
      expect(stringUtils.isPalindrome('racecars')).toBe(false);
    });

    it('should handle empty strings and strings with only spaces correctly', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
      expect(stringUtils.isPalindrome(' ')).toBe(true);
      expect(stringUtils.isPalindrome('   ')).toBe(true);
    });

    it('should ignore case and non-alphanumeric characters', () => {
      expect(stringUtils.isPalindrome('Race car!')).toBe(true);
      expect(stringUtils.isPalindrome('Madam, I\'m Adam')).toBe(true);
    });
  });
});