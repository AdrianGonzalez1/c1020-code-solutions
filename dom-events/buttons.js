function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var buttonElement = document.querySelector('.click-button');
buttonElement.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var buttonHover = document.querySelector('.hover-button');
buttonHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var dblClickButton = document.querySelector('.double-click-button');
dblClickButton.addEventListener('dblclick', handleDoubleClick);
