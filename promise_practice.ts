// import { error } from "console";
// import { resolve } from "path";

// class Book {
//     constructor(public id: number, public title: string, public author: string) {}
//   }
  

//   const books: Book[] = [
//     new Book(1, 'Book 1', 'Author 1'),
//     new Book(2, 'Book 2', 'Author 2'),
//     new Book(3, 'Book 3', 'Author 3'),
//     new Book(4, 'Book 4', 'Author 4'),
//     new Book(5, 'Book 5', 'Author 5')
//   ];
  
//   // Promise-based map function to get book titles
//   //this takes books array as input and returns string array uses map function callback function 
//   //returns a promise ==> if resolve gives book title , and 
//   // const getBookTitles = (books: Book[]): Promise<string[]> => {
//   //   const promises = books.map((book) => {
//   //     return new Promise<string>((resolve) => {
//   //       resolve(book.title);
//   //     });
//   //   });
  
//   //   return Promise.all(promises);
//   // };

// // what if there is an error in some books like book title is missing then we use reject call back function

// // const getBooktitles1 = (books : Book[]) : Promise<String[]> => {
// //   const promises =books.map((book) => {
// //     return new Promise<String>((resolve,reject) => {

// //       setTimeout(() => {
// //         try  {
// //         if(book.title)
// //         {
// //             resolve(book.title)
// //         }
// //         else{
// //             throw new error("Book title is missing")
// //           }
// //         }
// //         catch(error)
// //         {
// //             console.log(error);  
// //         }},2000)
      
// //     })
// //   })
// //   return Promise.all(promises);
// // }

//   // Promise-based map function to find books by author
//   const findBooksByAuthor = (books: Book[], author: string)  => {
//     const promises = books.map((book) => {
     
      
//       return new Promise((resolve) => {
//       if(book.author === author)
//       {
        
//         resolve(book);
//       }
//       });
//     }); 
//     return Promise.all(promises);
//   };
  
//   // Using getBookTitles to retrieve all book titles
//   // getBooktitles1(books)
//   //   .then((titles) => {
//   //     console.log('Book Titles:', titles);
//   //   })
//   //   .catch((error) => {
//   //     console.error('Error:', error);
//   //   });
  
//   // Using findBooksByAuthor to filter books by author
//   findBooksByAuthor(books, 'Author 3')
//     .then((result) => {
//       console.log('Books by Author 3:', result);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
  

//     // delete a book using by using book_id

//     const deleteBook = (books: Book[], book_id : number) => {
//         return new Promise<Book[]>((resolve,reject) => {
//           const index = books.findIndex((book) => { (book.id === book_id)
//             if(index !== -1)
//             {
//                 resolve(books.splice(index,1));
//             }
//             else
//             {
//                 reject(new Error('Book not found'))
//             }

//           })

//         })
//     }

//     deleteBook(books,1).then((result) => {console.log(result)
//     })
//     .catch((error) => {console.log(error);
//     })

const operations = [
  () => fetch('https://api.example.com/data1'),
  () => fetch('https://api.example.com/data2'),
  () => fetch('https://api.example.com/data3'),
];
   
const initialValue = Promise.resolve([]);

const finalPromise = operations.reduce((promise,presentValue) => {
  return promise.then(results  => {
   return presentValue().then((data) => {
      [...results, data]
  });
      
    })
},initialValue)




  