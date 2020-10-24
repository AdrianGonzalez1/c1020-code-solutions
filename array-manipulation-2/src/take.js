/* eslint-disable no-unused-vars */
function take(array, count) {
  var arr = [];

  for (var i = 0; i < array.length; i++) {
    array.length = count;
    arr.push(array[i]);
  }
  return arr;
}
