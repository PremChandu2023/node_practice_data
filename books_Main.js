var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(capacity) {
        this.books = [];
        this.bookCount = 0;
        this.capacity = capacity;
    }
    Library.prototype.addBook = function (book) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.bookCount < _this.capacity) {
                _this.books.push(book);
                _this.bookCount++;
                resolve("Book has been added successfully");
            }
            else {
                reject('Library is full. cannot add any more any books ');
            }
        });
    };
    return Library;
}());
// Demonstration
var library = new Library(5);
// Adding books
var book1 = new Book(1, 'Book 1', 'Author 1');
var book2 = new Book(2, 'Book 2', 'Author 2');
var book3 = new Book(3, 'Book 3', 'Author 3');
var book4 = new Book(4, 'Book 4', 'Author 4');
var book5 = new Book(5, 'Book 5', 'Author 5');
var book6 = new Book(6, 'Book 6', 'Author 6');
library.
    addBook(book1).then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});
//   library.addBook(book2);
//   library.addBook(book3);
//   library.addBook(book4);
//   library.addBook(book5);
//   library.addBook(book6); // Trying to add more books than the library's capacity
// Searching for a book
//   const searchResult = library.searchBook('Book 3');
//   if (searchResult) {
//     console.log(`Book found - ID: ${searchResult.getId()}, Title: ${searchResult.getTitle()}, Author: ${searchResult.getAuthor()}`);
//   } else {
//     console.log('Book not found.');
//   }
// Displaying the inventory
//   library.displayInventory();
