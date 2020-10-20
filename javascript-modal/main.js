var openModalButton = document.querySelector('.open-modal');
var overlayElement = document.querySelector('.overlay');
var modalElement = document.querySelector('.modal');
var modalButton = document.querySelector('.modal-button');

openModalButton.addEventListener('click', modalHandle);
modalButton.addEventListener('click', modalButtonHandle);

function modalHandle(event) {
  if (event) {
    overlayElement.className = 'overlay';
    modalElement.className = 'modal';
  }
}

function modalButtonHandle(event) {
  if (event) {
    modalElement.className = 'hidden';
    overlayElement.className = 'hidden';
  }
}
