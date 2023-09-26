// Creating an array
const fruits = ['apple', 'banana', 'orange','chandu','prem','cvcorp'];

// Array methods
console.log(fruits.length); 

// Push and Pop
fruits.push('grape'); // Add an element to the end of the array
console.log(fruits); 

const lastFruit = fruits.pop(); // Remove the last element and return it
console.log(lastFruit); 
console.log(fruits); 

// Shift and Unshift
fruits.unshift('kiwi'); // Add an element to the beginning of the array
console.log(fruits); 

const firstFruit = fruits.shift(); // Remove the first element and return it
console.log(firstFruit); 
console.log(fruits); 

// Slice and Splice
const citrusFruits = fruits.slice(1, 3); // Extract a portion of the array
console.log(citrusFruits); 

fruits.splice(1, 1, 'grapefruit', 'lemon'); // Remove and/or add elements at a specific position
console.log(fruits); 

// Concat
const moreFruits = ['mango', 'papaya'];
const allFruits = fruits.concat(moreFruits); // Combine two arrays
console.log(allFruits); 

// Join
const fruitsString = fruits.join('$$$'); // Convert the array to a string with a specified separator
console.log(fruitsString); 

// Sort
fruits.sort(); // Sort the elements of the array in alphabetical order
console.log(fruits); 






