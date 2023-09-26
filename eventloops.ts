// The event loop allows Node.js to handle many concurrent connections efficiently, as it avoids blocking operations and leverages callbacks to process events asynchronously. It ensures that the application remains responsive by continuously processing events and callbacks in a non-blocking manner.


//why node js is event driven programming

// When an I/O operation is initiated, Node.js does not wait for the operation to complete before moving on to the next instruction. Instead, it continues executing the remaining code while waiting for the I/O operation to complete

// Node.js encourages an event-driven programming style, where different components of the system interact by emitting and listening to events. Event-driven architecture allows developers to define custom events, emit events when certain actions occur, and handle those events with appropriate event handlers

// Callback functions play a crucial role in Node.js's event-driven programming model. They allow you to provide a function that gets executed when a particular asynchronous operation completes. Instead of blocking and waiting for the result, you can pass a callback function that will be invoked once the operation finishes. This enables you to write non-blocking code and handle the results or errors asynchronously



const fs= require("fs");

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 2000);

setImmediate(() => {
  console.log("Immediate callback");
});

fs.readFile("indx.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log("File content:", data);
});

console.log("End");


//eventemitter example
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'John');

