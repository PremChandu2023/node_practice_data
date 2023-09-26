// : Buffers are used to store binary data  or any other data that is not in the form of JavaScript strings or objects, buffers are objects used to handle binary data. They represent a fixed-size chunk of memory that can store raw binary data, such as images, network packets, or other forms of binary data. 



// Create a buffer
const buf = Buffer.alloc(20); // Create a buffer of size 10 bytes

// Writing data to the buffer
buf.write('BUFFER'); // Write the string 'Hello' to the buffer

// Reading data from the buffer
const data = buf.toString(); // Convert the buffer to a string

console.log(data); 

//what is the difference between string and buffer in node js
// strings in Node.js are used to handle textual data encoded in specific character encodings, while buffers are used for handling raw binary data. Buffers provide a more low-level and mutable representation of data, suitable for working with non-textual information.

//covert string to buffer

const str = 'practice example'
const buffer = Buffer.from(str);

