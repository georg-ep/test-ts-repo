import {
    capitalize,
    truncate,
    slugify,
    removeNonAlphanumeric,
} from './string-utils';

describe('string-utils', () => {
    describe('capitalize', () => {
        it('should capitalize the first letter of a string', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('world')).toBe('World');
        });

        it('should handle empty string', () => {
            expect(capitalize('')).toBe('');
        });

        it('should handle already capitalized string', () => {
            expect(capitalize('Hello')).toBe('Hello');
        });
    });

    describe('truncate', () => {
        it('should truncate a string to the specified length', () => {
            expect(truncate('hello world', 5)).toBe('hello...');
            expect(truncate('hello', 5)).toBe('hello');
        });

        it('should handle length greater than string length', () => {
            expect(truncate('hello', 10)).toBe('hello');
        });

        it('should handle empty string', () => {
            expect(truncate('', 5)).toBe('');
        });

        it('should handle truncation with different lengths', () => {
          expect(truncate('This is a longer string', 10)).toBe('This is a...');
        });
    });

    describe('slugify', () => {
        it('should slugify a string', () => {
            expect(slugify('Hello World')).toBe('hello-world');
            expect(slugify('Hello, world!')).toBe('hello-world');
        });

        it('should handle empty string', () => {
            expect(slugify('')).toBe('');
        });

        it('should handle special characters', () => {
            expect(slugify('Hello!@#$%^&*()_+=-`~ world')).toBe('hello-world');
        });

        it('should handle already slugified strings', () => {
            expect(slugify('hello-world')).toBe('hello-world');
        });
    });

    describe('removeNonAlphanumeric', () => {
        it('should remove non-alphanumeric characters', () => {
            expect(removeNonAlphanumeric('Hello, world!')).toBe('Helloworld');
            expect(removeNonAlphanumeric('123!@#abc')).toBe('123abc');
        });

        it('should handle empty string', () => {
            expect(removeNonAlphanumeric('')).toBe('');
        });

        it('should handle string with only non-alphanumeric characters', () => {
            expect(removeNonAlphanumeric('!@#')).toBe('');
        });
    });
});