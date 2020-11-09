var usersElement = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var liCreate = document.createElement('li');
    liCreate.textContent = xhr.response[i].name;
    usersElement.appendChild(liCreate);
  }
});
xhr.send();
