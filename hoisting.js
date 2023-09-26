// hoisting==>  Hoisting in JavaScript is a behavior that allows variables and function declarations to be moved to the top of their containing scope during the compilation phase, regardless of where they are actually written in the code
example(); //hoisted function
function example() {
    var number1; // Variable declaration is hoisted
    console.log(number1); // Output: undefined
    number1 = 10; // Initialization is not hoisted
    setTimeout(function () {
        console.log(number1);
    }, 1000);
    number1 = 20;
}
