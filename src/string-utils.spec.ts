import { jest, describe, it, expect } from '@jest/globals';
import * as stringUtils from "./string-utils";

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
    it('should truncate a string if it exceeds the specified length', () => {
      expect(stringUtils.truncate('This is a long string', 10)).toBe('This is a...');
      expect(stringUtils.truncate('Short string', 20)).toBe('Short string');
      expect(stringUtils.truncate('', 5)).toBe('');
    });

    it('should not truncate a string if it is shorter than or equal to the specified length', () => {
      expect(stringUtils.truncate('Short', 5)).toBe('Short');
      expect(stringUtils.truncate('Short', 6)).toBe('Short');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('madam')).toBe(true);
      expect(stringUtils.isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
      expect(stringUtils.isPalindrome('rotor')).toBe(true);
    });

    it('should return false if a string is not a palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
      expect(stringUtils.isPalindrome('world')).toBe(false);
      expect(stringUtils.isPalindrome('racecars')).toBe(false);
    });

    it('should ignore case and non-alphanumeric characters', () => {
      expect(stringUtils.isPalindrome('Race car!')).toBe(true);
      expect(stringUtils.isPalindrome('Madam, I\'m Adam.')).toBe(true);
    });

    it('should return true for an empty string', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });
  });
});