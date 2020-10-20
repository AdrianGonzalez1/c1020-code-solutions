var openModalButton = document.querySelector('.open-modal');
var openModal = false;
var overlayElement = document.querySelector('.overlay');
var modalElement = document.querySelector('.modal');
var modalButton = document.querySelector('.modal-button');
var closeModal = false;

openModalButton.addEventListener('click', modalHandle);
modalButton.addEventListener('click', modalButtonHandle);

function modalHandle(event) {
  openModal = !openModal;
  if (openModal) {
    overlayElement.className = 'overlay';
    modalElement.className = 'modal';
  }
}

function modalButtonHandle(event) {
  closeModal = !closeModal;
  if (closeModal) {
    modalElement.className = 'hidden';
    overlayElement.className = 'hidden';
  }
}
