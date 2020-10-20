var circleElement = document.querySelector('.circle-element');
var bodyElement = document.querySelector('body');

circleElement.addEventListener('click', clickCircle);

function clickCircle(event) {
  if (circleElement.className === 'circle-element') {
    circleElement.className = 'circle-off';
    bodyElement.className = 'body-off';
  } else {
    circleElement.className = 'circle-element';
    bodyElement.className = '';
  }
}
