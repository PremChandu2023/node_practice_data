"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs"); //The fs module allows you to perform various file-related operations, such as reading from and writing to files, creating and deleting files, modifying file permissions, and more.
// reading a file synchronosly  
var data = fs.readFileSync("indx.txt");
// console.log(data.toString());
//reading a file asynchronously
fs.readFile('indx.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    // console.log(data.toString());
});
console.log("Program ended");
//file stat ==> gives file status
fs.stat('indx.txt', function (error, stats) {
    if (error) {
        console.log(error);
    }
    console.log(stats.isFile());
});
//writing a file 
console.log("Going to write into existing file");
fs.writeFile('indx.txt', 'Simple', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('indx.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});
