"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}
exports.Calculator = Calculator;
