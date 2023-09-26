// : Buffers are used to store binary data  or any other data that is not in the form of JavaScript strings or objects.
// Create a buffer
var buf = Buffer.alloc(0); // Create a buffer of size 10 bytes
// Writing data to the buffer
buf.write('BUFFER'); // Write the string 'Hello' to the buffer
// Reading data from the buffer
var data = buf.toString(); // Convert the buffer to a string
console.log(data);
