import { jest, describe, it, expect } from '@jest/globals';
import { Calculator } from "./calculator";

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers correctly', () => {
    const result = calculator.add(5, 3);
    expect(result).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    const result = calculator.subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    const result = calculator.multiply(5, 3);
    expect(result).toBe(15);
  });

  it('should divide two numbers correctly', () => {
    const result = calculator.divide(6, 3);
    expect(result).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
  });

  it('should calculate power correctly', () => {
    const result = calculator.power(2, 3);
    expect(result).toBe(8);
  });
});