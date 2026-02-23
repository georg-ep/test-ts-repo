import { jest, describe, it, expect, beforeEach } from '@jest/globals';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
  });

  it('should calculate the power of a number correctly', () => {
    expect(calculator.power(2, 3)).toBe(8);
  });
});