/*function add (num1 :number,num2 :number){
    return num1+num2;
}

const n1 = 20; // If n1 is not explicitly defined, the during declaration use const n1 : number to tell TypeScript that it is of number type.
const n2 = 5;
console.log(add(n1,n2));*/

/*function add (num1 :number,num2 :number,display : string){
    const addition = num1+num2;
    console.log(display+num1+num2); //String concatenation of num 1 and num 2
    console.log(display+addition); //To prevent string concatenation of num 1 and num 2
}

const n1 = 20; // If n1 is not explicitly defined, the during declaration use const n1 : number to tell TypeScript that it is of number type.
const n2 = 5;
const result = "Result is ";
add(n1,n2,result); */

/*
const employee = { //Optimal way to declare an object in TypeScript of object type containing key type pairs.
    name:"Brendan",
    age:24
}
console.log(employee.name);
*/
/* // More explicit way of declaring an object type
const employee  : {
    name:string;
    age:number;
} = { //Optimal way to declare an object in TypeScript of object type containing key type pairs.
    name:"Brendan",
    age:24
}
console.log(employee.name);
*/
/*Working with arrays
const employee = { 
    name:"Brendan",
    age:24,
    daysOff:['Saturday','Sunday']
}
console.log(employee.name);
let holiday:string[];
holiday=['Saturday','Sunday']
for(let day of holiday){
    console.log(day);
    console.log(day.toUpperCase()); //TS recognizes that day is a string since specified already and enables string operations to be performed.
}
*/

/*
const employee : {
    //Explicit object type declaration necessary for tuple specification
    name:string;
    age:number;
    role:[number,string];
} = { //Optimal way to declare an object in TypeScript of object type containing key type pairs.
    name:"Brendan",
    age:24,
    role: [23,'developer'] //Tuple that should only containg a fixed # of values of specified type
}

employee.role[1] = "life"; //Works since role[1] can be a string
//employee.role[1] = 10;  Does not work since role[1] should be a string
//employee.role[2] = "hello"; Does not work since lenght of tuple msut be 2
//employee.role.push("hello"); //Works since push works on tuples and is unfortunately one to look out for.
console.log(employee.role);
*/
/*
Working with enumerators
enum Role {'ADMIN','READ_ONLY','USER'}; //Can also be enum Role {'ADMIN = 10','READ_ONLY','USER'}; to start from a certain value and increment. Default is 0. Values can also be changed in the middle.
const employee = {
    name:"Brendan",
    age:24,
    role: Role.ADMIN
}
if(employee.role===Role.ADMIN){
    console.log(employee.name);
}
*/
//'any' data type accepts any value but the downside is that it reverts back to vanilla JavaScript

/*
Union
function merge (in1 :number|string,in2 :number|string){
    if(typeof in1 === 'number' && typeof in2 === 'number'){
        return in1+in2;
    }
    else {
        return in1.toString()+in2.toString();
    }
}

const n1 = 20; 
const n2=5;
console.log(merge(n1,n2));
console.log(merge("Hello ","World"));
*/
/*
Type literals and Alias
type ns = number|string;
type inis = 'num' | 'str';
function merge (in1 :ns,in2 :ns,resultType:inis){
    if(typeof in1 === 'number' && typeof in2 === 'number' || resultType==='num'){
        return +in1 + +in2; //Similar to parseFloat()
    }
    else {
        return in1.toString()+in2.toString();
    }
}
console.log(merge('10','50','num'));
console.log(merge(10,50,'num'));
console.log(merge('Hello ','World!','str'));
*/
/*
Function types
function add(n1:number,n2:number){
    return n1+n2;
}
function disp(val:string) //Returns void. Prints undefined if nothing is passed. Other syntax: function disp(val:string):void Cannot return undefined although undefined is a valid type unless you have a return; statement at the end of the function.
{
    console.log(val);
}
//let merge:Function;
let merge : (a:number,b:number) => number;
merge = add;
//merge =5; //Produces a run time error as typescript is not able to identify this during compilation - To solve specify return type of merge as Function
//console.log(merge(5,7));
//merge = disp; //Now returns an error since function type is specified.
console.log(merge(5,7)); //Returns 5 and undefined since typescript would accept any function irrespective of the type of arguments and return type
*/

//callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
/* Callback functions
function add(n1:number,n2:number,cb: (result)=>void){
    let result = n1+n2;
    cb(result);
}
add(5,19,(result)=>{
    console.log(result);
})
*/
/*
Unknown data type
let a : unknown;
let b : string;
a= "Hello!";
//b=a; // Error: Type unknown is not assignable to type string.
if(typeof a === 'string'){
    b=a;
    console.log(b);
} //No error since type is being checked. Hence unknown is better than any.
*/

/*
function genError(message : string,err : number):never //Explicitly return never as good measure. never is used to indicate that it terminates in that line and hence when you try to display the error after termination, it does not return undefined as it has not executed that line.
{
    throw{message,err};
}
genError("OOPS! An error occured!!",400);
console.log(genError("OOPS! An error occured!!",400)); //Does not get executed and 'never' returns anything, not even undefined.
*/
/*
const b = document.querySelector('button');
function clickHandler(message:string){
    console.log(message);
}
if(b)
{
    b.addEventListener('click',clickHandler.bind(null,"Thanks for clicking me!")); //The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context.
}
*/
/*
const b = document.querySelector('button');
if(b)
{
    b.addEventListener('click',event => console.log(event)); //Prints properties of the event
}
*/
/*
function add(a:number,b:number = 1) //Specifies b as the default argument. Can never specify a(first argument) as default. So move the default arguemnts to the right of the function parameters(2nd,3rd,etc)
{
    return a+b;
}
console.log(add(5));
*/
/*
const arr = ['Hello','Hi'];
const greet = ['Bonjour!','Guten Morgen!','Namaste!']
arr.push(...greet); //Similar to arr.push(greet[0],greet[1],greet[2]); Spread operator (..) gives a list of comma separated values.
for(let i of arr)
{
    console.log(i);
}
const emp = {
    name:"Brendan",
    age:45
};
//const emp_copy = {...emp}; instead of const emp_copy = emp; since the latter creates a refernce to the object and not a copy
*/
/*
Use of rest parameters and the reduce function
function add(...numbers:number[])
{
    return numbers.reduce((curResult,curValue) => {
        return curResult+curValue
    },0);
}
const disp_add = add;
console.log(disp_add(4,5,1,2,4.5));
*/
/*
Constructor functions and this keyword
class Department {
    name: string;
    constructor(n:string){
        this.name = n;
    }
    info(this:Department)   //To tell typescript that any copy object calling info will want to use the name attribute
    {
        console.log('This is the '+this.name+' department');
    }
}
const obj = new Department('Finance');
obj.info();
const copy = obj;
copy.info();
copy.name='Sales';
obj.info();
const obj_copy = {name:'Accounting',info:obj.info};
obj_copy.info();
obj.info();
*/
/*
class Department {
    private name: string;
    constructor(n:string){
        this.name = n;
    }
    info(this:Department)   //To tell typescript that any copy object calling info will want to use the name attribute
    {
        console.log('This is the '+this.name+' department');
    }
}
const obj = new Department('Finance');
// obj.name="Hey";
// console.log(obj.name);   Does not work since name is private and should only be accessed by info method
*/
/*
class Department {
    constructor(private name:string) //Shorthand intialization to specify the variable and access modifier
    {

    }
    info(this:Department)   //To tell typescript that any copy object calling info will want to use the name attribute
    {
        console.log('This is the '+this.name+' department');
    }
}
const obj = new Department('Finance');
obj.info();
*/
/*
class Department {
    readonly name: string;  //Does not let any changes once assigned.
    constructor(n:string){
        this.name = n;
    }
    info(this:Department)   //To tell typescript that any copy object calling info will want to use the name attribute
    {
        console.log('This is the '+this.name+' department');
    }
}
const obj = new Department('Finance');
// obj.name = "Accounting"; - Will not work due to the readonly property above.
*/
/*
Getters and Setters are used to get or set value of the private attributes. They are not treated like functions but like properties when accessing them from outside the class.
class Department {
    private name: string;
    get input(){
        return this.name;
    }
    set property(value:string){
        this.name = value;
    }
    constructor(n:string){
        this.name = n;
    }
    info(this:Department)   //To tell typescript that any copy object calling info will want to use the name attribute
    {
        console.log('This is the '+this.name+' department');
    }
}
const obj = new Department('Finance');
obj.property = 'Accounting';
obj.input;
obj.info();
*/
/*
Static properties and methods
class Department {
    name: string;
    constructor(n:string){
        this.name = n;
    }
    static info(name: string)   //Can be called without instantiating an object for the class.
    {
        console.log('This is the '+name+' department');
    }
}
let emp = Department.info("Marketing"); // If you need to access static methods within non static areas like the constructor call, use ClassName.static-property syntax and not this.static-property
*/
/*
Abstract class cannot be instantiated and can be used only for inheritance
They are needed to make sure that a method is implemented though it may vary across different child classes.
abstract class Department {
    constructor(){
    }
    abstract info(name:string) : void;
}
class IT extends Department
{
    info(name:string){
        console.log('This is the '+name+' department');
    }
}
const obj = new IT();
obj.info("IT");
*/
/*
//Singleton pattern - Private constructors are used to make sure that objects are instantiated only once.
class Department {
    name : string;
    constructor(name:string)
    {
        this.name = name;
    }
}
class IT extends Department
{
    static instance : IT;
    private constructor(name:string){
        super(name);
    }
    static get(){
        if(IT.instance){
            return IT.instance;
        }
        IT.instance = new IT("IT Sales");
        return IT.instance;
    }
    info(){
        console.log('This is the '+this.name+' department');
    }
}
const o1 = IT.get();
console.log(o1.name);
o1.info();
const o2 = IT.get();
o2.info();
console.log(o1,o2);
*/
/*
Interfaces can also be used instead of type specifiers but for objects only. A class can implement multiple interfaces. An interface can also extend another interface.
interface greet{
    name:string;
    greet():void;
}
class Person implements greet{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    greet()
    {
        console.log('Hello! I am '+this.name);
    }
}
let obj = new Person("Jimmy");
obj.greet();
*/
/*
Interfaces as function types
interface addfn {
    (n1:number,n2:number):number; //Like a function type specifier
}

let add : addfn;
add = (n1:number,n2:number)=>n1+n2;
console.log(add(4,5));
*/