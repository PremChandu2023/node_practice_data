// Rest operators in JavaScript allow you to represent an indefinite number of arguments as an array.

// Gathering Function Arguments:

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num,1);
  }
  
//   console.log(sum(1, 2, 3, 4)); 
  console.log(sum(5, 10)); 

  //Destructuring arrays

  const colors = ['red', 'green', 'blue'];
const [firstColor, ...remainingColors] = colors;

console.log(firstColor); 
console.log(remainingColors); 





  