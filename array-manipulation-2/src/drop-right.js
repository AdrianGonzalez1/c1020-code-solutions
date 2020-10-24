/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array.length !== 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

// create an empty storage array variable
// iterate through the length of the array variable and stop the iteration at the length minues value in count varaible
// check if there is value inside array variable
// if there is push the index to the storage array variable created
// return storage array variable from the function
