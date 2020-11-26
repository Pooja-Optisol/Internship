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
function genError(message, err) {
    throw { message: message, err: err };
}
genError("OOPS! An error occured!!", 400);
console.log(genError("OOPS! An error occured!!", 400));
