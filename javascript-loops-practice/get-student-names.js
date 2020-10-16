/* exported getStudentNames */
function getStudentNames(students) {
  var arr = [];
  for (var key in students) {
    arr.push(students[key].name);
  }
  return arr;
}
