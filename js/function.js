// JavaScript Functions

/* ==============================
* Code-Driven Invocation:
? Functioned is invoked (called)
* Called directly from other parts of the JavaScript code.
* Used for tasks like calculations, data manipulation, and logic execution.
================================ */

// function myFuction(fullName, age, dateofBirth = 1991) {
//     console.log('hello ' + fullName + ' I am' + 'my Date of Bith' + dateofBirth);
     
// }

// myFuction('jahid', 30, 1995);
// myFuction('hasan', 25, true)


/* =============================
* Event-Driven Invocation
? Function When an event occurs
* Triggered by user interactions or system events.
* Common events: button clicks, form submissions, page loads, etc.
=============================== */

// function isSubscribed(){
//     console.log('subcribad');
    
// }

// document.getElementById('btn').addEventListener('click', isSubscribed)


/* ====================================
? Automatic (Self-Invoked) Invocation
* Executes immediately after being defined.
* Commonly used with Immediately Invoked Function Expressions (IIFEs).
======================================= */

// (function(message){
//     console.log('I am self-Invokeing Function', message);
    
// })('helo');

/* ===================
? Function Expression
===================== */
// Return a Value From a Function
// A function expression in JavaScript is a function that is stored as a value, and can be assigned to a variable or passed as an argument to another function.


// let maths = function (x, y) {
//     console.log('Testing if I am working of not');
//     return x * y;
//     // return undefined;
//   };
// console.log(maths(3, 4));
// console.log(maths(4, 4));
// console.log(maths(4, 5));

// /*
// ? Local Variables
// ? Variables declared within a JavaScript function, become LOCAL to the function.
// ? Local variables can only be accessed from within the function.
// */

// function newFunc(){
//     let finalName = 'jahid';
//     console.log(finalName);
    
// }

// newFunc()

/* ===================
? Anonymous Function
===================== */

// let numbers = [4,5,6,7,8];
// let sqNumber = numbers.map(function(number){
//     return number * number;
// })

// console.log(sqNumber);


/* ===================
? Arrow Functions
===================== */

/*
let add = function (x, y) {
  return x + y;
};*/

/*
console.log(add(5, 6));
*/

// let add = (x, y) => {
//     return x + y;
// }


// console.log((add(10,12)));



/* ===================
? Nested Functions
===================== */
// function greet(firstName) {
//     function sayHello() {
//       alert('Hello ' + firstName);
//     }
//     return sayHello();
//   }
//   greet('Shovo');