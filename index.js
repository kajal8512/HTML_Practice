// Finding HTML element
// console.log("hello")

// If we gave backgroundColor in the *{} then it will not work we need to remove that first. 
// const myBody = document.body;
// myBody.style.backgroundColor = "red";
// console.log(myBody)

// Find element by Id 
// const box1 = document.getElementById("box-1");
// console.log(box1)

// Find elements by tage name
// const box2 = document.getElementsByTagName("p")
// console.log(box2, "hey")

// Find elements by class name 
// const box3 = document.getElementsByClassName("container")
// console.log(box3, "line 19")

// Find elements by css selectors 
const box4 = document.querySelectorAll(".container", "#box-1")
console.log(box4)