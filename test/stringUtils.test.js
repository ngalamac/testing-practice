// test/stringUtils.test.js
const { stringLength, reverseString, capitalize } = require('../src/stringUtils');

describe('stringLength', () => {
  it('should return the correct length of the string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  it('should throw an error if the string is not between 1 and 10 characters', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
    expect(() => stringLength('01234567890')).toThrow('String cannot be longer than 10 characters');
  });
});

describe('reverseString', () => {
  it('should reverse the string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

describe('capitalize', () => {
  it('should capitalize the first character of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
