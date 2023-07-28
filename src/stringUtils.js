// src/stringUtils.js
function stringLength(string) {
    if (string.length === 0) throw new Error('String must be at least 1 character long');
    if (string.length > 10) throw new Error('String cannot be longer than 10 characters');
    return string.length;
  }
  
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  module.exports = {
    stringLength,
    reverseString,
    capitalize,
  };
  
  