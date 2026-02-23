import { jest, describe, it, expect } from '@jest/globals';
import * as stringUtils from './string-utils';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      expect(stringUtils.capitalize('hello world')).toBe('Hello world');
      expect(stringUtils.capitalize('HELLO WORLD')).toBe('Hello world');
      expect(stringUtils.capitalize('hELLo wORLd')).toBe('Hello world');
    });

    it('should return an empty string if input is empty', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    it('should handle single-character strings', () => {
      expect(stringUtils.capitalize('a')).toBe('A');
    });

    it('should handle strings with numbers and special characters', () => {
      expect(stringUtils.capitalize('123abc')).toBe('123abc');
      expect(stringUtils.capitalize('!@#abc')).toBe('!@#abc');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
      expect(stringUtils.reverse('world')).toBe('dlrow');
    });

    it('should handle an empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });

    it('should handle a string with special characters', () => {
      expect(stringUtils.reverse('!@#$%^')).toBe('^%$#@!');
    });
  });

  describe('truncate', () => {
    it('should truncate a string to the specified length and add "..."', () => {
      expect(stringUtils.truncate('hello world', 5)).toBe('hello...');
      expect(stringUtils.truncate('abcdefghij', 3)).toBe('abc...');
    });

    it('should not truncate if the string is shorter than or equal to the length', () => {
      expect(stringUtils.truncate('hello', 5)).toBe('hello');
      expect(stringUtils.truncate('hello', 6)).toBe('hello');
    });

    it('should handle an empty string', () => {
      expect(stringUtils.truncate('', 5)).toBe('');
    });

    it('should handle a length of 0', () => {
      expect(stringUtils.truncate('hello', 0)).toBe('...');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('madam')).toBe(true);
      expect(stringUtils.isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false if a string is not a palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
      expect(stringUtils.isPalindrome('world')).toBe(false);
    });

    it('should handle empty strings', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });

    it('should ignore case and non-alphanumeric characters', () => {
      expect(stringUtils.isPalindrome('Race car!')).toBe(true);
      expect(stringUtils.isPalindrome('Madam, I\'m Adam')).toBe(true);
    });
  });
});