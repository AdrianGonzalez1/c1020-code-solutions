var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', submitCallBack);

function submitCallBack(event) {
  event.preventDefault();
  var nameValue = contactForm.elements.name.value;
  var emailValue = contactForm.elements.email.value;
  var inputValue = contactForm.elements.message.value;
  var messageData = {
    name: nameValue,
    email: emailValue,
    message: inputValue
  };
  console.log('messageData:', messageData);
  contactForm.reset();
}
