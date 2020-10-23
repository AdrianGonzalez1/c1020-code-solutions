var books = [
  {
    isbn: 1,
    title: 'book 1',
    author: 'author 1'
  },
  {
    isbn: 2,
    title: 'book 2',
    author: 'author 2'
  },
  {
    isbn: 3,
    title: 'book 3',
    author: 'author 3'
  }
];

console.log('typeof before stringify:', typeof books, books);
console.log('tyoeof after stringify:', typeof JSON.stringify(books), JSON.stringify(books));

var student = '{ "numberId": "123", "name": "student 1" }';

console.log('JSON typeof:', typeof student);

var obj = JSON.parse(student);

console.log('typeof after parse method:', typeof obj);
