/*
const emails = ['frodo@email.com','samwise@email.com','merry@email.com'];
emails.push('pippin@email.com');
console.log(emails);
const variable cannot be modified on reassignment(=) but can be manipulated using push/pop
*/

/*
Difference between var and let - var does not recognize block scoping
let limit = 100;
{
  let limit = 10;
  console.log("Scope block limit:",limit);
}
console.log("Global limit",limit);

var limit = 100;
{
  var limit = 10;
  console.log("Scope block limit:",limit);
}
console.log("Global limit",limit);
*/

/*
const enables block scoping as well

const limit = 100;
{
  const limit = 10;
  console.log("Scope block limit:",limit);
}
console.log("Global limit",limit);
*/

/*
Same msg variable can be used as it is in the local scope of functions.
function hello()
{
    let msg = "Hello!";
    console.log(msg);
}

function greeting()
{
    let msg = "How are you?";
    console.log(msg);
}

hello();
greeting();
*/

/*
let a = 'Good';
let greeting = a+' morning!';
console.log(greeting);
*/


/*Instead of the above, use a template literal
let a = 'Good';
let greeting = `${a} morning!`; // Use a back quote below the tilled symbol
console.log(greeting);
*/

/*
Spread operator on integer arrays
let a = [20,30,40];
let b = [10,...a,50];
console.log(b);
*/

/*
Spread operator on string arrays
let a = ['Diana','Eric','Frank'];
let b =['Alice','Bob','Carl',...a];
console.log(b);
*/

/*
Rest parameter
function collect(...a)
{
    console.log(a);
}

collect(3,6,9,12,15);
*/

/*
Traditional way
let z = [4,5,6];
let four = z[0];
let five = z[1];
console.log(four, five);
*/

/*
Destructuring operator
let z = [4,5,6];
let [four, five] = z; //Assigns value from array in order
console.log(four, five);

let animals = ['Simba', 'Zazu', 'Ed'];
let [lion,bird] = animals;
console.log(lion,bird);
*/

/*
Traditional way for extracting individual attributes from objects
let king = {name:'Mufasa',kids:1};
let name = king.name;
let kids = king.kids;
console.log(name,kids);
*/

/*
Destructuring assignment
let king = {name:'Mufasa',kids:1};
let {name,kids} = king;
console.log(name,kids);
*/

/*
if variables are declared before, then assignment to attributes individually will fail without the let keyword. This happens as it confuses the destructuring
with block scoping. To overcome this, enclose the destructuring within parantheses like below:
let son = {name:"Simba",parents:2};
let name, parents;
({name,parents} = son);
console.log(name,parents);
*/

/*
Object destructuring unlike arrays allows you to access individual attributes in any order
let employee = {name:'Anne',age:23,dependent:'No'};
let {name,dependent} = employee;
console.log(name,dependent);
*/

/*
Arrow functions
let cheer = () => {
    console.log("Wooohooo!");
}
cheer();
*/

/*
Arrow function without a name that prints Wooohoo! after 5 seconds
Anonymous functions are functions declared without the function keyword.
setTimeout(()=>{
    console.log("Wooohoo!");
},5000);
*/

/*
Map method is used to create a new array by operating on elements of the individual array
let array = [1,2,3,4,5];
let double = array.map((n) => n*2);
console.log(double);
*/

/*
Filter method filters individual elements from an array.
let array = [1,2,3,4,5,6,7,8,9,10];
let odd = array.filter((n)=>n%2);
console.log(odd);
*/

/*
let array = [1,2,3,4,5,6,7,8,9,10];
let even = (n) => {
    if(n%2==0)
        return n;
}
let e = array.filter(even);
console.log(e);
*/
/*
Same as above but shorter
let array = [1,2,3,4,5,6,7,8,9,10];
let odd = array.filter((n)=>n%2==0);
console.log(odd);
*/

/*
String helper functions
console.log('Hello world'.repeat(10));
console.log('Hello world'.startsWith("Hello"));
console.log('Hello world'.startsWith("world"));
console.log('Hello world'.endsWith("world"));
*/

/*
Import and export statements
import {add,sub} from './math' //math.js is a file in the same directory
import mul from './math'; //since mul is set to export by default, you can import it without the curly braces
console.log(add(2,5));
console.log(sub(2,5));
console.log(mul(2,4));
*/

/*
Classes
class Animal{
    constructor(name,height)
    {
        this.name =  name;
        this.height = height;
    }
    display(){
        console.log(`Hi! I am ${this.name} from the animal kingdom!`);
    }
}

let obj = new Animal('Simba',4.3);
console.log(obj);
obj.display();
*/

/*
Inheritance
class Animal{
    constructor(name,height)
    {
        this.name =  name;
        this.height = height;
    }
    display(){
        console.log(`Hi! I am ${this.name} from the animal kingdom!`);
    }
}

class Lion extends Animal
 {
    constructor(name, height, color){
        super(name,height);
        this.color = color;
    }
        display()
        {
            console.log(`Hi! I am ${this.name} and ${this.color} in color.`);
        }
}

let l = new Lion("Simba",4.3,"yellow");
l.display();
*/

/*
class Instrument {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  }
  class Guitar extends Instrument {
      constructor(name,type){
          super(name,type);
      }
    describe() {
      console.log(`I'm a ${this.name} from the ${this.type} family.`); // TODO fill this line
    }
  }
  
  let fender = new Guitar("Fender", "strings");
  fender.describe();
  */
/*
Static methods are used to access the methods of the class without instantiating it
 class Calc{
    static add(a,b){
        return a+b;
    }
    static sub(a,b){
        return a-b;
    }
}
console.log(Calc.add(7,10));
*/

/*Classes vs Prototypes
JavaScript is not based on object-oriented programming, but a prototypal-inheritance model.
A prototype is a characteristic in every JavaScript object that reveals its parent and the properties that it inherits.
All JavaScript objects contain a prototype and can trace their chain of prototypal inheritance all the way back to the base level Object prototype.
Arrow functions don’t create their own local ‘this’ object like a normal function prototype, but instead refer to the ‘this’ tied to its outer scope.
Classes and prototypes appear everywhere in JavaScript. And every ES6 programmer needs to grasp these fundamental concepts to truly grasp how the language works. Luckily, once you understand that classes are simply prototypes, and prototypes are simply references to an object’s parent, it becomes less abstract.
*/

/*
Arrow function cannot be used to prototype as they do not recognize this for the class but for the outer scope.
Hence normal function is used to add a method. Arrow functions can be used inside the class to initially declare a function.
Attributes can also be added to the function using prototype keyword.
Classes are just prototypes which maintain a list of parents and prototypes are just functions.
function Animal(name,height)
{
    this.name = name;
    this.height = height;
    this.greet = () => {
        console.log("Hello!");
    }
}
Animal.prototype.color;
Animal.prototype.display = function() {
    console.log(`I am ${this.name} and ${this.color} in color`);
}
let obj = new Animal("Simba",4.3);
obj.color="yellow";
obj.greet();
obj.display();
*/
/*
Introduction to sets
let a = new Set();
a.add(5);
a.add(43);
a.add("Wooohooo!!");
a.add({x:50, y:5});
console.log(a);
console.log(a.size);
console.log(a.has(5));
console.log(a.has("Hello!"));
*/

/*
Array to sets
let array = [1,2,3,2,3,1,2,3];
let arrayToSet = new Set(array);
console.log(arrayToSet);
*/

/*
Iterating over the set
let array = [1,2,3,4,9,5,6,7];
let a = new Set(array);
for (let i of a.values()){
    console.log(i);
}
*/

/*
Splitting into unique characters
let char = 'cvnkvjadjwefpeirghbncnvlzkspwoorwoqpidvncbif';
let charSplit = char.split("");
let charSet = new Set(charSplit);
console.log(charSet);
*/

/*
Maps => key value pairs 
let map = new Map();
let key1 = "string";
map.set(key1,'return value for string key1');
let key2 = {1:"key"};
map.set(key2,'return value for object key');
let key3 = function() {};
map.set(key3,'return value for function key');
console.log(map);
*/

/*
A map can take an array of length 2 arrays and conver that into a map
let array = [[1,'one'],[2,'two'],[3,'three']];
let map = new Map(array);
console.log(map);
*/

/*
let array = [[1,'one'],[2,'two'],[3,'three']];
let map = new Map(array);
for(let [i,j] of map.entries()){
    console.log(`${i} points to ${j}`);
}
*/

/*
Calculate the number of alphabets in a string using map
let string = "smdiasjfoqiwpfevnfdmfnlakqpoqpfkdmvx";
let strmap = new Map();

for(let i=0;i<string.length;i++){
    let letter = string[i];
    if(!strmap.has(letter)){
        strmap.set(letter,1);
    }
    else{
        strmap.set(letter,strmap.get(letter)+1);
    }
}
console.log(strmap);
*/

/*
Closures in JS - secret cannot be accessed outside the function scope if not printed and called.
let func = () => {
    let secret ="This is a secret";
    let another_func = ()=>{
        console.log(secret);
    } 
    another_func();
}
func();
*/

/*
Function factories - take arguments and return new functions based on the argument
let prefix = (x) => {
    let concat = (y) => {
        return x+y;
    }
    return concat;
}

let prefix_ig = prefix("ig"); //prefix_ig is a function factory
console.log(prefix_ig);
let word = prefix_ig("noble");
console.log(word);
*/

/*
Shorter way to write the factory function in a single line
let prefix = x => y => x+y;
let prefix_ig = prefix("ig"); //prefix_ig is a function factory
console.log(prefix_ig);
let word = prefix_ig("noble");
console.log(word);
*/

/*
//Factory functions for math - Can visulize how shortening was possible in the rpevious code
let product = (x) => {
    return (y) => {
        return x*y;
    }
}
let prod = product(5);
console.log(prod(10));
*/

/* Shortened version
let product = x => y => x*y;
let prod = product(5);
console.log(prod(10));
*/

/*
Emulating private methods using closure
const budget = () => {
    let current_bal = 0;
    const changeBal = (value) => {
        return current_bal+=value;
    }

    const deposit100 = () => {
        return changeBal(100);
    }
    const widthdraw100 = () => {
        return changeBal(-100);
    }
    const check = () => {
        console.log(current_bal);
    }
    return {
        deposit100 : deposit100,
        widthdraw100 : widthdraw100,
        check : check
    }
}

let purse = budget();
purse.deposit100();
purse.deposit100();
purse.deposit100();
purse.widthdraw100();
purse.check();
*/

/*
//Shortened version of the above code
const budget = () => {
    let current_bal = 0;
    const changeBal = (value) => {
        return current_bal+=value;
    }

    const deposit100 = () => changeBal(100);
    const widthdraw100 = () => changeBal(-100);
    const check = () => current_bal;
    return {    //Whenever object name and value is the same, you can specify it once instead of redundant pairs.
        deposit100,
        widthdraw100,
        check
    }
}

let purse = budget();
purse.deposit100();
purse.deposit100();
purse.deposit100();
purse.widthdraw100();
console.log(purse.check());
console.log(purse.current_bal); //undefined as current_bal is private using closure concept.
// Private method using closures remove non-essential expressions and methods from the global scope of your program
*/

/*
Closures in JavaScript and ES6 refer to functions that remember their creation environment and can further reference that environment’s independent variables.
Lexical scoping refers to the JavaScript concept of programs keeping track of variable locations to understand in which scopes they can be accessed.
Function factories create functions based on returning inner functions that manipulate its own arguments and the arguments of the outer function.
Data encapsulation and private methods don’t exist natively in JavaScript but can be emulated with closures for data restriction and limited access.
*/

//Generators are used to disrupt the call to continuation on functions. 
//They are define by function*

/*
import "regenerator-runtime/runtime.js"; //needed to globally define regenerator-runtime while using function*
function* gen(n){
    let count = 0;
    for(let i=0; i<n; i++) {
        count+=1;
        yield count; //Pauses
    }
}

let gen_obj = gen(5);
for(let i=0; i<5; i++)
{
    console.log(gen_obj.next().value); //.next() resumes
}
*/

/*
import "regenerator-runtime/runtime.js";
function* even(){
    let count = 0;
    while(true){
        count+=2;
        let reset = yield count;
        if(reset){
            count = 0;
        }
    }
}
let gen = even();
for(let i=0;i<5;i++){
    console.log(gen.next().value);
}
console.log(gen.next(true).value); //returns 2 after esetting to 0
for(let i=0;i<5;i++){
    console.log(gen.next().value);
}
*/

/*
Iterator
const arrayIterator = (array) => {
    let index = 0;
    return {
        next: () => {
            if(index < array.length)
            {
                let next = (array[index]);
                index += 1; 
                return next;
            }
        }
    }
}
let arrayit = arrayIterator([1,2,3]);
console.log(arrayit.next());
console.log(arrayit.next());
console.log(arrayit.next());
console.log(arrayit.next()); //returns undefined
*/
/*
Generator
import "regenerator-runtime/runtime.js";
function* genIterate() {
for(let arg of arguments){
    yield arg;
}
}
let it = genIterate(1,2,3,4);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //undefined
*/
/*
Easier way to access individual elements of an argument
import "regenerator-runtime/runtime.js";
function* genIterate() {
    yield* arguments;
}
let it = genIterate(1,2,3,4);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
*/

//Promises
/*
let p = new Promise((resolve,reject) => {
    resolve('Resolved promise data');
})
p.then(response => console.log(response)); //Handler for resolve
*/

/*
let p = new Promise((resolve,reject) => {
    reject('Rejected promise data');
})
p.then(response => console.log(response)).catch(error => console.log(error)); //Handler for reject
*/

/*
Typical example while using promises for asynchronous programming
let p = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Resolved promise data'),5000);
})
p.then(response => console.log(response)); //Handler for resolve
console.log("Before resolving promised data");
*/
/*
Fetch
const root = 'http://jsonplaceholder.typicode.com/posts/1';
fetch(root, {method:"GET"}).then(response => console.log(response));
*/
/*
Retrieving the actual data as a JSON object using chained promises
const root = 'http://jsonplaceholder.typicode.com/posts/1';
fetch(root, {method:"GET"}).then(response => response.json()).then(json => console.log(json));
*/

/*
const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn0747532699';
fetch(root, {method:"GET"}).then(response => response.json()).then(json => console.log(json));
*/
/*
let n = Math.pow(2,5); //Traditional way
console.log(n);
let a = 2**5; //ES7 feature
console.log(a); 
//New ES7 features
let b = "wonderful".includes("der");
let c = "wonderful".includes("qwertyr");
let d = [1,2,3,4,5].includes(1);
let e = [1,2,3,4,5].includes(6);
console.log(b,c,d,e);
*/

/*
Accessing objects in ES8
let obj = {a:'one',b:'two',c:'three'};
let keys = Object.keys(obj);
let values = Object.values(obj);
console.log(keys);
console.log(values);
let entries = Object.entries(obj);
console.log(entries);
for(let i of entries){
    console.log(`Key: ${i[0]}, Value: ${i[1]}`);
}
*/ 

/*
import regeneratorRuntime from "regenerator-runtime";
async function async_one() {
    return "one";
}

async function async_two() {
    throw new Error('Issue with async!');
}
async_one().then(response => console.log(response));
async_two().catch(error => console.log(error));
Works on an online IDE but not on the set up local environment.
Error thrown: Uncaught TypeError: Cannot read property 'default' of undefined
*/
/*
Introduces control flow to async functions. await keyword ensures that we do not manipulate data that is not valid.
import regeneratorRuntime from "regenerator-runtime";
async function async_one() {
    return "one";
}
async function async_two() {
    return "two";
}
async function async_three() {
	const one = await async_one();
  	console.log(one);
  	const two = await async_two();
  	console.log(two);
}
async_three();
Works on an online IDE but not on the set up local environment.
Error thrown: Uncaught TypeError: Cannot read property 'default' of undefined
*/

/*
//Calling multiple async functions concurrently
import regeneratorRuntime from "regenerator-runtime";
async function async_one() {
    return "one";
}
async function async_two() {
    return "two";
}
async function async_three() {
	const one = await async_one();
  	console.log(one);
  	const two = await async_two();
  	console.log(two);
}
async function async_four() {
	const [res_one,res_two] = await Promise.all([async_one(),async_two()]) //Use destructuring assignment
    console.log(res_one,res_two);
}
async_four();
//Same error as above when run on local host
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<div>React Application!</div>, document.getElementById('root'));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global';
ReactDOM.render(<Global />, document.getElementById('root'));