import { add, subtract, multiply, divide } from './calculator';

describe('Calculator', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add a positive and a negative number correctly', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should add two negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add zero to a number', () => {
      expect(add(10, 0)).toBe(10);
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract a positive and a negative number correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it('should subtract two negative numbers correctly', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    it('should subtract zero from a number', () => {
      expect(subtract(10, 0)).toBe(10);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should multiply a positive and a negative number correctly', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    it('should multiply two negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    it('should multiply a number by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should divide a positive number by a negative number correctly', () => {
      expect(divide(6, -3)).toBe(-2);
    });

    it('should divide two negative numbers correctly', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    it('should handle division by zero correctly', () => {
      expect(divide(5, 0)).toBe(Infinity);
    });
  });
});