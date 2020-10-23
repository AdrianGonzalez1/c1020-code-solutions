/* eslint-disable no-unused-vars */
function isVowel(char) {
  var vowelsUpper = 'AEIOU';
  var vowelsLower = 'aeiou';
  for (var i = 0; i < vowelsUpper.length & vowelsLower.length; i++) {
    if (char === vowelsUpper[i] || char === vowelsLower[i]) {
      return true;
    }
  }
  return false;
}

// create variables to store a string with vowels both upper and lower case
// iterate through both string vowel variables
// conditional to check if the char at index is strictly equal to char in each string
// return true if char is equal to a char in either string
// otherwise return false
