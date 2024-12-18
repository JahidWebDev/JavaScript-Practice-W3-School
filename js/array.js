// const names = ["jahid", "hasasn", "shakil", "ed"];

// names[1] = "bangladesh";
// names.push("nabil")
 
// console.log(names);

//  ==================== 
// let bank = 250;
// let newbank = bank;
// newbank = 100;

// console.log(bank, newbank);

// ans: 250 100

// ===========================
//OBJECTS AND ARRAYS REFERENCE TYPES

// const names = ["ED", "Bubzy", "Drake"];

// const newNames = names;

// newNames.push("jahid");

// console.log(newNames);
// console.log(names);

// ============================

// const tweet = {
//     name: "Developedbyed",
//     tweets: 20,
//     age: 26
// };

// const newTweet = tweet;
// newTweet.tweets = 21;
// console.log(tweet);


// const videos = [
//     "pranking my sister, is she okay (gone werang)",
//     "how to javascrpt ",
//     "html tutorail",
//     "learning the paino"

// ]

//MAP



// const newVideo = videos.map((videos) =>{
//     return videos.toUpperCase();
// });


// const newVideo = videos.map((videos) =>{
//     console.log(videos);
    
// });


// const newVideo = videos.map((videos) =>{
//     return videos;
    
// });

// newVideo.push("heeyy")

// console.log(videos);

// console.log(newVideo);


// FIND



// const searchTutorial = videos.find(function(video){
//     return video.includes("html")
// })

// console.log(searchTutorial);





// FILTER

// const age = [10, 20, 18, 19, 30, 25, 40, 16, 39,]

// const newAge = age.filter((item) =>{
//     return item > 20
// })

// console.log(newAge);




// ADD REMOVE TOGGLE

// const one = document.querySelector(".one");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () =>{
//     one.classList.add("two")
    
    
// })
// btn.addEventListener("click", () =>{
//     one.classList.remove("two")
    
    
// })
// btn.addEventListener("click", () =>{
//     one.classList.toggle("two")
   
// })




// ATTRIBUTE PROPERTY

// let test = document.querySelector(".user")
// console.log(test.type);

 
// let info = {
//     name: "jahid",
// }

// console.log(info.name);




// CHILDNODES

const  child = document.querySelector('ul')
console.log(child.children);
console.log(child.children[2]);
console.log(child.childNodes);