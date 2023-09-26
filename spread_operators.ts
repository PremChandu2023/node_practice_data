class BookLibrary {
    book_id : number
    book_name : string
    book_status : boolean
    constructor( book_id : number,
        book_name : string,
        book_status : boolean)
        {
            this.book_id=book_id;
            this.book_name=book_name;
            this.book_status=book_status
        }
}

let Book1 = new BookLibrary(1,'Red mansion',true)
let Book2 =new BookLibrary(2,'soul2',false)

let Books : BookLibrary[] =[Book1,Book2]

const additionalprop ={
    ...Book1,
    category : 'Fiction',
    year : 2023
}

const bookWithPrope = Books.map((book) => ({
    ...book,
    typeofBook : 'science',
    year : '2023'

}))

console.log(additionalprop);

//We combine the properties of a book object (book1) with additional properties (category and year) to create a new object using the spread operator. This enables us to add extra properties to an existing object while preserving the original properties.






