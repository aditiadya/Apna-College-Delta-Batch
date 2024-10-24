//classes and objects

const stud1 = {
    name: "adam",
    age: 25,
    marks: 95,
    getMarks: function() {
        return this.marks;
    },
};

const stud2 = {
    name: "eve",
    age: 25,
    marks: 96,
    getMarks: function() {
        return this.marks;
    },
};

const stud3 = {
    name: "casey",
    age: 25,
    marks: 82,
    getMarks: function() {
        return this.marks;
    },
};


//1--> Prototyping

//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//It is like a single template object that all objects inherit methods and properties from without having their own copy.

//arr._proto_ (reference)
//Array.prototype (actual object)
//String.prototype

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


//2--> Factory Functions : a function that creates objects
function PersonMaker(name, age){
    const person={
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}
let p1=PersonMaker("adam", 21);
p1.talk();