/* exported countdown */
function countdown(number) {
  var array = [];
  for (number; number >= 0; number--) { // starts loop @ number, as long as number is greater than or equal to 0 it will decremeent value of number by 1
    array.push(number);
  }
  return array;
}
