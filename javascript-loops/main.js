/* eslint-disable no-unused-vars */
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  } return numbers;
}

console.log('getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  } return evenNumbers;
}

console.log('evenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  } return repeated;
}
console.log('repeatWord(\'javascript\', 30):', repeatWord('javascript', 30));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log(logEachCharacter('hi adrian'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] + numbers[i]);
  } return doubled;
}
console.log('doubleAll([5,7,9,11]):', doubleAll([5, 7, 9, 11]));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  } return keys;
}

console.log('getKeys:', getKeys({ isbn: '978-14493650325', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  } return values;
}

console.log('getValues:', getValues({ isbn: '978-14493650325', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));
