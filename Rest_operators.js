// Rest operators in JavaScript allow you to represent an indefinite number of arguments as an array.
// Gathering Function Arguments:
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 1);
}
//   console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10));
