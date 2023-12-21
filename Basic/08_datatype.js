// based on how data store & access in memory
//1.  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100//number
const scoreValue = 100.3//number

const isLoggedIn = false//boolean
const outsideTemp = null//object

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);

console.log(id === anotherId);//false//as symbol returns unique value

// const bigNumber = 3456543576654356754n



//2. Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
//STACK(PRIMITIVE),HEAP(NON-PRIMITIVE)
let name="princi";
let surname="Porwal";
surname="Gupta";
console.log(name);
console.log(surname);//stack
let obj={
    name:"princi",
    email:"principorwal@fj"
}
console.log(obj.name);
let obj2=obj;
obj2.name="Shiksha";
console.log(obj.name);//heap
