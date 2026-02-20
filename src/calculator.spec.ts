import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should correctly add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should correctly add a positive and a negative number', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });

    it('should correctly add two negative numbers', () => {
      expect(calculator.add(-10, -5)).toBe(-15);
    });

    it('should return zero when adding opposite numbers', () => {
      expect(calculator.add(7, -7)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two positive numbers (result positive)', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    it('should correctly subtract two positive numbers (result negative)', () => {
      expect(calculator.subtract(3, 8)).toBe(-5);
    });

    it('should correctly subtract a negative number from a positive number', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    it('should correctly subtract a positive number from a negative number', () => {
      expect(calculator.subtract(-5, 2)).toBe(-7);
    });
  });

  describe('multiply', () => {
    it('should correctly multiply two positive numbers', () => {
      expect(calculator.multiply(6, 7)).toBe(42);
    });

    it('should return zero when multiplying by zero', () => {
      expect(calculator.multiply(100, 0)).toBe(0);
    });

    it('should correctly multiply a positive and a negative number', () => {
      expect(calculator.multiply(4, -5)).toBe(-20);
    });

    it('should correctly multiply two negative numbers', () => {
      expect(calculator.multiply(-5, -5)).toBe(25);
    });
  });

  describe('divide', () => {
    it('should correctly divide two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should correctly divide a negative number by a positive number', () => {
      expect(calculator.divide(-15, 3)).toBe(-5);
    });

    it('should correctly divide two negative numbers', () => {
      expect(calculator.divide(-20, -4)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should handle division resulting in a float', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.33333);
    });
  });

  describe('power', () => {
    it('should correctly calculate positive integer power', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it('should correctly calculate power of 0', () => {
      expect(calculator.power(10, 0)).toBe(1);
    });

    it('should correctly calculate power with exponent 1', () => {
      expect(calculator.power(10, 1)).toBe(10);
    });

    it('should correctly calculate power with negative base and even exponent', () => {
      expect(calculator.power(-2, 4)).toBe(16);
    });

    it('should correctly calculate power with negative base and odd exponent', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    it('should handle fractional exponents (square root)', () => {
      expect(calculator.power(9, 0.5)).toBe(3);
    });
  });
});