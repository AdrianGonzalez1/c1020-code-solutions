/* eslint-disable no-unused-vars */

function getValues(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(object[keys]);
  }
  return arr;
}
