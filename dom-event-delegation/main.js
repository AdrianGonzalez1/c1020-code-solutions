var taskListElement = document.querySelector('.task-list');

taskListElement.addEventListener('click', taskCallBack);

function taskCallBack(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var closestElement = event.target.closest('.task-list-item');
    closestElement.remove();
  }
}
