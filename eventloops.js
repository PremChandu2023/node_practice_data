// The event loop allows Node.js to handle many concurrent connections efficiently, as it avoids blocking operations and leverages callbacks to process events asynchronously. It ensures that the application remains responsive by continuously processing events and callbacks in a non-blocking manner.
var fs = require("fs");
console.log("Start");
setTimeout(function () {
    console.log("Timeout callback");
}, 2000);
setImmediate(function () {
    console.log("Immediate callback");
});
fs.readFile("indx.txt", "utf8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File content:", data);
});
console.log("End");
