/* eslint-disable no-unused-vars */
var h1Element = document.querySelector('h1');
var counter = 4;

function countdown() {
  h1Element.innerHTML = counter--;
  if (counter < 0) {
    h1Element.innerHTML = 'Earth Below Us!';
  }
}

var interval = window.setInterval(countdown, 1000);

function stopCountdown() {
  clearInterval(interval);
}
