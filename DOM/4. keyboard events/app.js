//keyboard events
let inp = document.querySelector('input');
inp.addEventListener("keydown", function(event){
    console.log(event.key);
    console.log(event.code);
    console.log('Key was pressed');
});
// inp.addEventListener("keyup", function(event){
//     console.log(event);
//     console.log('Key was released');
// });