"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
describe('Calculator', () => {
    let calc;
    beforeEach(() => {
        calc = new calculator_1.Calculator();
    });
    it('should add two numbers correctly', () => {
        expect(calc.add(2, 3)).toBe(5);
    });
    // Notice we purposefully leave out tests for subtract, multiply, divide, and power
    // This ensures the coverage tool has room to "improve".
});
