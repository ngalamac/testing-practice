// test/calculator.test.js
const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should work with negative numbers', () => {
      expect(calculator.add(-5, 2)).toBe(-3);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    it('should work with negative numbers', () => {
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });
  });

  describe('divide', () => {
    it('should return the division of two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw an error if trying to divide by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    it('should return the multiplication of two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('should work with negative numbers', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });
  });
});
