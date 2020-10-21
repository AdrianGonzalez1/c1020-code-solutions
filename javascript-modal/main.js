var openModalButton = document.querySelector('.open-modal');
var overlayElement = document.querySelector('.overlay');
var modalElement = document.querySelector('.modal');
var modalButton = document.querySelector('.modal-button');

openModalButton.addEventListener('click', modalHandle);
modalButton.addEventListener('click', modalButtonHandle);

// opens modal popup
function modalHandle(event) {
  overlayElement.className = 'overlay';
  modalElement.className = 'modal';
}

// closes modal popup
function modalButtonHandle(event) {
  modalElement.className = 'hidden';
  overlayElement.className = 'hidden';
}
