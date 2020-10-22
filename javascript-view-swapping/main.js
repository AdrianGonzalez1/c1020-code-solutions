var tabContainerElement = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var viewElements = document.querySelectorAll('.view');

tabContainerElement.addEventListener('click', tabElementHandle);

function tabElementHandle(event) {
  if (event.target.matches('.tab')) {
    // iterates through .tab NodeList and updates active class to swap tab styling
    for (var i = 0; i < tabElements.length; i++) {
      if (tabElements[i] === event.target) {
        tabElements[i].className = 'tab active';
      } else {
        tabElements[i].className = 'tab';
      }
    }
  }
  // iterates through .view NodeList and updates hidden class to swap tabs
  var attribute = event.target.getAttribute('data-view');
  for (var index = 0; index < viewElements.length; index++) {
    if (viewElements[index].getAttribute('data-view') === attribute) {
      viewElements[index].className = 'view';
    } else {
      viewElements[index].classList = 'view hidden';
    }
  }
}
