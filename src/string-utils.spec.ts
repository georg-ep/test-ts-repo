import { jest, describe, it, expect } from '@jest/globals';
import { capitalize, reverse, truncate, isPalindrome } from "./string-utils";

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
    });
  });

  describe('reverse', () => {
    it('should reverse the string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('world')).toBe('dlrow');
    });

    it('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate the string if it exceeds the length', () => {
      expect(truncate('This is a long string', 10)).toBe('This is a...');
    });

    it('should return the original string if it is shorter than or equal to the length', () => {
      expect(truncate('short', 10)).toBe('short');
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if the string is a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false if the string is not a palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    it('should handle empty strings and strings with only spaces', () => {
      expect(isPalindrome('')).toBe(true);
      expect(isPalindrome('   ')).toBe(true);
    });

    it('should ignore case and non-alphanumeric characters', () => {
      expect(isPalindrome('Race car!')).toBe(true);
      expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });
  });
});