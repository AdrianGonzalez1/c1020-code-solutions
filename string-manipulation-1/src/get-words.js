/* eslint-disable no-unused-vars */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

// create an empty array storage variable
// iterate through the word string length
// pull  index from each iteration and push to storage array
// if no value return undefined
