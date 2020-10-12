/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Adrian',
  lastName: 'Gonzalez',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('value of fullName:', fullName);
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student object:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: '2017'
};

vehicle['color'] = 'tan';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle object:', vehicle);
