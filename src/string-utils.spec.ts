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
    it('should reverse the string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
      expect(stringUtils.reverse('world')).toBe('dlrow');
      expect(stringUtils.reverse('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate the string if it exceeds the length', () => {
      expect(stringUtils.truncate('hello world', 5)).toBe('hello...');
      expect(stringUtils.truncate('hello', 5)).toBe('hello');
      expect(stringUtils.truncate('hello world', 10)).toBe('hello wor...');
    });

    it('should return the original string if the length is greater or equal to the string length', () => {
      expect(stringUtils.truncate('hello', 6)).toBe('hello');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if the string is a palindrome', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
      expect(stringUtils.isPalindrome('madam')).toBe(true);
      expect(stringUtils.isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
      expect(stringUtils.isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    it('should return false if the string is not a palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
      expect(stringUtils.isPalindrome('world')).toBe(false);
    });

    it('should ignore non-alphanumeric characters and case', () => {
      expect(stringUtils.isPalindrome('Race car!')).toBe(true);
      expect(stringUtils.isPalindrome('Madam, I\'m Adam.')).toBe(true);
    });

    it('should handle empty string', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });
  });
});