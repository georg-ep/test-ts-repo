"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_utils_1 = require("./string-utils");
describe('String Utils', () => {
    describe('capitalize', () => {
        it('should capitalize the first letter and lowercase the rest', () => {
            expect((0, string_utils_1.capitalize)('hELLo')).toBe('Hello');
        });
        it('should return empty string if input is empty', () => {
            expect((0, string_utils_1.capitalize)('')).toBe('');
        });
    });
    // Missing tests for reverse, truncate, and isPalindrome
});
