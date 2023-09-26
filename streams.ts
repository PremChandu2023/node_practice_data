//Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

import { error } from "console";
import { WriteStream } from "fs";

//reading a data from the stream
const fs = require("fs")
let data = "";
const readableStream = fs.createReadStream('indx.txt');
readableStream.on('data', function(chunk) {
    data += chunk;
 });

//  console.log(data);

 readableStream.on('end',function() {
        console.log(data);
 })

 readableStream.on('error',function(error) {
        console.log(error.stack);
        
 })

 //writing a file into with  another object
 
 let data1 = "chahdudh 56255";

 const writtenStream  = fs.createWriteStream("indx.txt")

 writtenStream.write(data1,'ascii')

 writtenStream.on('finish', function() {
        console.log("written");
 })

writtenStream.on('error',function() {
        console.log(error);
        

})
 
console.log("pr  end");  /// in this file content gets replaced with given one

//Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream.


// // Create a readable stream from input.txt
// const readerStream = fs.createReadStream('input.txt');

// // Create a writable stream to output.txt
// const writerStream = fs.createWriteStream('output.txt');

// // Pipe the data from the readerStream to the writerStream
// readerStream.pipe(writerStream);

// console.log("Program Ended");


