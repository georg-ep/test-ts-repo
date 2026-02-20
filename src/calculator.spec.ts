import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('should add two numbers correctly', () => {
    expect(calc.add(2, 3)).toBe(5);
  });
  
  // Notice we purposefully leave out tests for subtract, multiply, divide, and power
  // This ensures the coverage tool has room to "improve".
});
