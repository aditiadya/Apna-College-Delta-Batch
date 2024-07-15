let form = document.querySelector('form');

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("Form submitted");
// });

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let inp = document.querySelector('input');
//     console.dir(inp.value);
// });

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user = this.elements[0];    // or form.elements[0];
//     let pass = this.elements[1];
//     console.dir(user.value);
//     console.dir(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

form.addEventListener("submit", function(event){
    event.preventDefault();

    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');
    console.dir(user.value);
    console.dir(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

