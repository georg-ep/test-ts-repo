import { capitalize, reverse, truncate, isPalindrome } from './string-utils';

describe('string-utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter and lowercase the rest', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('HELLO WORLD')).toBe('Hello world');
      expect(capitalize('hELLo wORLd')).toBe('Hello world');
    });

    it('should return an empty string if input is empty', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should handle already capitalized strings', () => {
        expect(capitalize("Hello")).toBe("Hello");
    })
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

    it('should not truncate if the string is shorter than or equal to the length', () => {
      expect(truncate('hello', 10)).toBe('hello');
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
      expect(isPalindrome('madam')).toBe(true);
    });

    it('should return false if a string is not a palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    it('should ignore non-alphanumeric characters and case', () => {
      expect(isPalindrome('Race car!')).toBe(true);
      expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

      it('should return true for empty string', () => {
          expect(isPalindrome("")).toBe(true);
      })
  });
});