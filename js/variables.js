//JavaScript Variables

//JavaScript Variables can be declared in 4 ways:
/*
Automatically
Using var
Using let
Using const */

//automatically declared
/*
x = 5;
y = 6;
z = x + y;

x = 7;
y = 6;
z = x - y;
*/

//Example using var
/*
var x = 5;
var y = 6;
var z = x + y;
*/

/*
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
*/

//Example using let 

/*
let x = 6;
let y = 5;
let z = 6 + 5;
console.log(z);
*/


//Example using const
/*
const x = 5;
const y = 6;
const z = 5 + 6;
console.log(z);
*/

//Mixed Example
/*
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

console.log(total);*/


//The Assignment Operator

//(=) equal

//  ================================


// JavaScript Variables
/*
 * JavaScript variable names are case-sensitive
 ! Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _, $ is acceptable but - not accaptable
 */


 
/*
 * Var Variable
 * You can re declare
 * You can re assaign
 * Global Scooped
 * var is hosted
 */

// var a = 10;
// var a = 20;
// {
//     var blocked = '30';
//     console.log(a);
    
// }

// console.log(blocked);
// console.log(a);

// let firstName;
// let FirstName;


// let fruits = 'Orange';

// var country = 'Bangladesh';
// console.log(country);

// // var countrys;
// // console.log(countrys);
// // countrys = 'Bangladesh';

// console.log(`${fruits} is my fav, ${fruits} I like to eat`);


/*
 * let Variable
 ! You can not re declare
 * You can re assaign
 ? Block Scooped
 ! let is not hosted
 */

//  let b = 10;  b = 11;
// {
//   console.log(b);
// }


/* const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */

//  const c = 10;
// {
//   const d = 50;
//   console.log(c);
//   console.log(d);
// }

// const person = {
//     firstName: 'ALI',
//     age: 30,
// }

// person.country = 'Bangladesh';
// person.age = 32;


// console.log(person);


// let $firstName1 = 'Shovo';