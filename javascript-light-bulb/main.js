var circleElement = document.querySelector('.circle-element');
var bodyElement = document.querySelector('body');
var isOn = false;

circleElement.addEventListener('click', clickCircle);

function clickCircle(event) {
  isOn = !isOn;
  if (isOn) {
    circleElement.className = 'circle-off';
    bodyElement.className = 'body-off';
  } else {
    circleElement.className = 'circle-element';
    bodyElement.className = '';
  }
}
