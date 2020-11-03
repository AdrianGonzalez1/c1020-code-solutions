/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  var arr = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array.length !== 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

// create empty storage array variable
// iterate through the length of the array starting at the index of the length of array minus the value of count
// check if the array variable is not empty array
// return storage array variable from the function
