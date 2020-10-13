/* eslint-disable no-console */
/* eslint-disable no-array-constructor */

var colors = new Array(
  'red',
  'white',
  'blue'
);

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
console.log('America is ' + colors[0] + ' ' + colors[1] + ' ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ' ' + colors[1] + ' ' + colors[2] + '.');
console.log('value of colors:', colors);

var students = new Array(
  'Tom',
  'Tim',
  'Tammy',
  'Todd'
);

var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student is the array is ' + lastStudent);
console.log('value of students:', students);
