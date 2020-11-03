/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var arr = [];
  var index = 0;

  if (array.length !== 0) {
    for (var i = 0; index < array.length; i++) {
      arr[i] = [];
      for (var x = 0; x < size && index < array.length; x++, index++) {
        arr[i].push(array[index]);
      }
    }
  }
  return arr;
}
