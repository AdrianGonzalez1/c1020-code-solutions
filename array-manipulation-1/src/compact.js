/* eslint-disable no-undef-init */
/* eslint-disable no-unused-vars */
function compact(array) {
  var arr = [];
  var arr2 = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arr2.push(array[i]);
    }
  }
  return arr2;
}
