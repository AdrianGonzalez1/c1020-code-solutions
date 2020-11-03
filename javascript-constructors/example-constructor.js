var newExample = new ExampleConstructor();
var instance = newExample instanceof ExampleConstructor;

function ExampleConstructor() {

}

console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);
console.log('value of newExample:', newExample);
console.log('newExample is an instance of exampleConstructor:', instance);
