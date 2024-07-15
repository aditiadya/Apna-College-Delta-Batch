//change event : occurs when value of an element has been changed (only works on <input>, <textarea> and <select> elements)
let form = document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
});
let user = document.querySelector('#user');
user.addEventListener("change", function(){
    console.log("Input changed");
    console.log("Final value = ", this.value);
});

let pass = document.querySelector('#pass');

//input events : fires when the value of an <input>, <select> or <textarea> element has been changed
user.addEventListener("input", function(){
    console.log("Input event");
    console.log("Final value = ", this.value);
});