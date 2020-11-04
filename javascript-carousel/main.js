var chevronRight = document.querySelector('.fa-chevron-right');
var imgElement = document.querySelector('.pokemonImg');
// var circleIcon = document.querySelector('.fa-circle')

chevronRight.addEventListener('click', function (event) {
  imgElement.setAttribute('src', './images/004.png');
});
