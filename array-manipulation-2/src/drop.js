/* eslint-disable no-unused-vars */
function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// create a storage array variable
// iterate through the array starting at the index at value of count
// push the index into the storage array variable
// return storage variable from the function
