//getElementsById("description")

//getElementsByClassName("oldImg")

//getElementsByTagName("oldImg")

//document.querySelector('p');  : selects first p element

//document.querySelector('#myId');

//document.querySelector('.myClass');

//document.querySelectorAll('p');  : selects all p elements

let para = document.querySelector('p');
console.dir(para);
para.innerText;     //shows visible text (on screen) contained in a node
para.innerHTML;     //shows the full markup
para.textContent;   //shows all the full text

//underlining the heading
let heading1 = document.querySelector('h1');
heading1.innerHTML = "<u> Spider Man </u>";

//manipulating attributes
let img = document.querySelector('img');
img.getAttribute('id');
img.setAttribute('id', 'spidermanImg');
//img.setAttribute('src', 'assets/richard.png');

//manipulating style
let heading = document.querySelector('h1');
heading.style.color = 'purple';
heading.style.backgroundColor = 'pink';

let links = document.querySelectorAll('.box a');
for(let i=0; i<links.length;i++){
    links[i].style.color = 'red';
}

//classList property
let list = img.classList; 
console.dir(list);
img.classList.add('abc');       //to add new classes
console.dir(list);
img.classList.remove('abc');    //to remove the classes
img.classList.add('abc');
img.classList.contains('green');    //returns false : img does not have a class named "green"
img.classList.contains('abc');      //returns true : img has a class named "abc"
//toggle between add and remove
img.classList.toggle("abc");    //returns false : "abc" class is already specified to img, so it will remove "abc" class from img
img.classList.toggle("green");      //returns true : "green" class is not specified to img, so it will add "green" class to img 

//navigation
let h4 = document.querySelector('h4');
h4.parentElement;
h4.children;
h4.childElementCount;
//ul.children[2].previousElementSibling;
//ul.children[1].nextElementSibling;

//adding elements
let newp = document.createElement('p');
newp.innerText = "Hi I'm a new p.";
let body = document.querySelector('body');
body.appendChild(newp);
newp.append(' This is continuation.');   //adds at last of the element
newp.prepend('This is prepend. ');    //adds at starting of the element
//we can specify exactly where we want to add element
let btn = document.createElement('button');
btn.innerHTML = 'New Button!!';
newp.insertAdjacentElement('beforebegin', btn);     //inserts button before begin of the element
newp.insertAdjacentElement('afterbegin', btn);     //inserts button after begin of the element. first child of that element
newp.insertAdjacentElement('beforeend', btn);     //inserts button after end of the element. last child of that element
newp.insertAdjacentElement('afterend', btn);     //inserts button after end of the element

//removing elements
body.removeChild(btn);  //or btn.remove();
newp.remove();

