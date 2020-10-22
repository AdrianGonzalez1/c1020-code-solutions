/* eslint-disable no-unused-vars */
var str = '';

function capitalize(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      str += word[0].toUpperCase();
    }
    return str;
  }

}

//   for (var i = 0; i < word.length; i++) {
//     if (word[i] === word[0]) {
//       str += word[0].toUpperCase();
//     } else {
//       console.log(word[i])
//     }
//   }
//   return str;
// }
// console.log(capitalize())
// create empty string storage
// loop through string
// if index = 0 to capitalize
// to lower case
