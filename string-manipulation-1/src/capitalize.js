/* eslint-disable no-unused-vars */
function capitalize(word) {
  var upper = '';
  var lower = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      upper += word[i].toUpperCase();
    } else {
      lower += word[i].toLowerCase();
    }
  }
  return upper + lower;
}
