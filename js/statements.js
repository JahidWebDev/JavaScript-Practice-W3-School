//JavaScript Statements

/*let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y; */     // Statement 4

//document.getElementById("demo").innerHTML = "Hello Dolly."; this is statements



//Semicolons ;

//Add a semicolon at the end of each executable statement:
/*
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c */



// JavaScript White Space

// let person = "Hege";
// let person="Hege";

// A good practice is to put spaces around operators ( = + - * / ):

// let x = y + z;


// document.getElementById('title').innerHTML = 'Hello World';

// let sum = 150 + 50;

// if (sum > 100) {
//     console.log('Expensive');
    
// }else{
//     console.log('cheep');
    
// }


// function sayHello(name) {
//     console.log(`hello ${name}`);
    
// }
// sayHello(jahid)


//  IF STATEMENTS = if a condition is True, Execute same code
//                  if Not, do something else

// let age = 20;

// if (age >= 18) {
//    console.log("You are old enough to center this site");
    
// }else{
//     console.log("You must be 18+ to enter this site");
    
// }

// let isStudent = false;

// if (isStudent) {
//     console.log("You are a student");
    
// }else{
//     console.log("You are Not a student!");
    
// }



// let age = 18;

// let hasLicense = true;

// if (age >= 16) {
//     console.log("you are old enough to drive");
    
//     if (hasLicense) {
//        console.log("You have your license!");
        
//     }else{
//         console.log("you do not have your license yet!");
        
//     }
//   }else{
//     console.log("you must be 16+ to have a license");
    
// }


// let age = 0;

// if (age >= 100) {
//     console.log('You are Too old to enter thi site');
    
// }
// else if (age == 0){
//     console.log("You cant't enter. You were just born.");
    
// }else if (age >= 18){
//     console.log("You are old enough to enter this site");
    
// }else if (age < 0){
//     console.log("You are cant't be below 0");
    
// }else{
//     console.log("You must be 18+ to enter this site");
    
// }

const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultEliement = document.getElementById("resultEliement")

let age;

mySubmit.onclick = () => {
     age = myText.value;
     age = Number(age);

    if (age >= 100) {
        resultEliement.textContent =`You are Too old to enter thi site`;
        
    }
    else if (age == 0){
        resultEliement.textContent =`You cant't enter. You were just born.`;
    }else if (age >= 18){
        resultEliement.textContent =`You are old enough to enter this site`;
       
        
    }else if (age < 0){
        resultEliement.textContent =`You are cant't be below 0`;
                
    }else{
        resultEliement.textContent =`You must be 18+ to enter this site`;
              
    }
}