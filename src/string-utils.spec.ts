import {
    capitalize,
    truncate
} from './string-utils';

describe('string-utils', () => {
    describe('capitalize', () => {
        it('should capitalize the first letter of a string', () => {
            expect(capitalize('hello')).toBe('Hello');
        });

        it('should handle an empty string', () => {
            expect(capitalize('')).toBe('');
        });

        it('should handle a string with only spaces', () => {
            expect(capitalize('   ')).toBe('   ');
        });

        it('should handle a string already capitalized', () => {
            expect(capitalize('World')).toBe('World');
        });
    });

    describe('truncate', () => {
        it('should truncate a string to the specified length', () => {
            expect(truncate('This is a long string', 10)).toBe('This is...');
        });

        it('should not truncate a string shorter than the specified length', () => {
            expect(truncate('short', 10)).toBe('short');
        });

        it('should handle an empty string', () => {
            expect(truncate('', 5)).toBe('');
        });

        it('should truncate and handle the ellipsis correctly', () => {
            expect(truncate('This is a test', 5)).toBe('This ...');
        });

        it('should handle a length equal to the string length', () => {
            expect(truncate('abcdefg', 7)).toBe('abcdefg');
        });

        it('should handle a length equal to the ellipsis length', () => {
            expect(truncate('abc', 3)).toBe('...');
        });
    });
});