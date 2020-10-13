function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds output:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log('greet output:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('getArea output:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName output:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log('getLastElement output:', getLastElement(['propane', 'and', 'propane', 'accessories']));
