//DOM events : events are signals that something has occured (user inputs/actions).

//mouse events
//onclick : when an element is clicked
let btn = document.querySelector('button');
console.dir(btn);
// btn.onclick = function(){
//     alert('Button was clicked.');
// };

//onmouseenter : when mouse enters an element
// btn.onmouseenter = function(){
//     alert('You entered a button.');
// }

//event listeners : it can add multiple function to one click of a element
// btn.addEventListener("click",function(){
//     console.log('Button was clicked.');
// });
// btn.addEventListener("dblclick",function(){
//     console.log('Button was double clicked.');
// });

//this in event listeners
// btn.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "pink";

// });

let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');
function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changecolor);

p.addEventListener("click", changecolor);

h1.addEventListener("click", changecolor);

h3.addEventListener("click", changecolor);