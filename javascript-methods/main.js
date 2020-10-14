/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
var numbers = [2, 24, 7];
var maximumValue = Math.max(...numbers);
console.log('maximumValue:', maximumValue);
var heroes = ['superman', 'batman', 'spiderman', 'ironman'];
var randomNumber = Math.random() * heroes.length; // generating random number
console.log('randomNumber:', randomNumber);
var randomIndex = Math.floor(randomNumber); // eliminating unwanted numbers after decimal
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex]; // randomizing hero  index in heroes array
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Book 1',
    author: 'Author 1'
  },
  {
    title: 'Book 2',
    author: 'Author 2'
  },
  {
    title: 'Book 3',
    author: 'Author 3'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js); // adds to end of library array
library.unshift(css); // adds to beginning of library array
library.splice(1, 1); // removes 1 element from 1 index
console.log('library:', library);

var fullName = 'Adrian Gonzalez';
var firstAndLastName = fullName.split(' '); // searches nd separates at space
console.log(firstAndLastName);

var firstName = firstAndLastName[0]; // targets 0 index in array created by split method stored in variable firstAndLastName
console.log('firstName:', firstName);
var sayMyName = firstName.toUpperCase(); // converts all text to uppercase
console.log('sayMyName:', sayMyName);