var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var BookLibrary = /** @class */ (function () {
    function BookLibrary(book_id, book_name, book_status) {
        this.book_id = book_id;
        this.book_name = book_name;
        this.book_status = book_status;
    }
    return BookLibrary;
}());
var Book1 = new BookLibrary(1, 'Red mansion', true);
var Book2 = new BookLibrary(2, 'soul2', false);
var Books = [Book1, Book2];
var additionalprop = __assign(__assign({}, Book1), { category: 'Fiction', year: 2023 });
console.log(additionalprop);
