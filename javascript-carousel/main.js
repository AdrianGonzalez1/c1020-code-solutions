var chevronRight = document.querySelector('.fa-chevron-right');
var imgElement = document.querySelector('img');
var imgArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var interval = setInterval(carousel, 3000);
var i = 0;
function carousel() {
  imgElement.setAttribute('src', imgArr[i]);
  i++;
  if (i === 5) {
    i = 0;
    
  }

}
