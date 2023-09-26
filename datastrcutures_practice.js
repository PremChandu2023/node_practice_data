/**
 * delete any element in middle of array
 * Array.shift
 * Array.pop ==> for last element
 */

deleteElementArray()
{

const a = [2, 90, 67, 100, 23];
const index = 2;

let returnedArray =[];

for (let i = index; i < a.length - 1; i++) {

  a[i] = a[i + 1];
}
a.length=a.length-1;
console.log(a);
return returnedArray[index]
}
