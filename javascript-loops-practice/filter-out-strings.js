/* eslint-disable valid-typeof */
/* exported filterOutStrings */
function filterOutStrings(values) {
  var arr = [];
  var number = typeof 8;
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === number) {
      arr.push(values[i]);
    }
  }
  return arr;
}
