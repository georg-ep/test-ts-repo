import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(0, 0)).toBe(0);
  });

  it('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  it('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  it('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(0, 5)).toBe(0);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrowError('Cannot divide by zero');
  });

  it('should calculate the power of a number correctly', () => {
    expect(calculator.power(2, 2)).toBe(4);
    expect(calculator.power(2, 0)).toBe(1);
    expect(calculator.power(3, 3)).toBe(27);
    expect(calculator.power(0, 5)).toBe(0);
  });
});