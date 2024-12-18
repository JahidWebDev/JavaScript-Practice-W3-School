const button = document.querySelector("#button");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-Nr b");
const mainTilte = document.querySelector(".main-Tilte");

// const items = todoList.children;

// CLICK, SCROOLL, RESIZING THE BROWSER

// ATTACH A EVENT LISTENER

// button.addEventListener("click", addItem);
  
    
// function addItem(){
//     console.log("hello bangladesh");
    
// }
  
// button.addEventListener("click", function(){
//    const newItem = document.createElement("li");
// //    console.log(newItem.classList);
//    newItem.classList.add("item");
//    newItem.innerText = `Item ${items.length + 1}`;
//    todoList.appendChild(newItem);
//    todoNr.innerText = items.length;
// }) 

// ==================================

// button.addEventListener("click", function (){
    
    
//    mainTilte.style.color = "red";
//    mainTilte.style.fontSize = "50px";
// })


button.addEventListener("click", function (){
    
   mainTilte.classList.toggle("color")
  
})