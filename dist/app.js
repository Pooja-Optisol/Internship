"use strict";
/*
//Generic types specify what type is returned or held by the function or object.
let arr:Array<string|number> = ['hello',3,'world',4.5]; //Similar to let arr: string | number
let p : Promise<string> = new Promise((resolve,reject) => {
    resolve('Promise is resolved');
});
//Generic type Promise returns unknown. Specify the Promise return type to enable typescript to understand what it returns (optional)
*/
/*
function merge<T extends object,U extends object>(o1:T,o2:U)
{
    return Object.assign(o1,o2);   //Merges o1 and o2
}
let obj = merge({name:'Mike'},{age:21});
//let obj = merge({name:'Mike'},21);    Throws an error since U and T extends object, it expects an object and not a number
//If merge function had specified o1 and o2 to be objects in its function declaration and not used generic types, it would have resulted in not being able to access obj.name or obj.age after storing the result of the merge funtion in obj.
console.log(obj);
console.log(obj.name);
*/
/*
interface Lengthy
{
    length:number;
}
function countAndPrint<T extends Lengthy>(element:T)
{
    if(element.length>0)
    {
        return console.log('Number of elements:'+element.length);
    }
    return console.log('No elements found!');
}
countAndPrint(['hello','world']);
countAndPrint('hello world');
*/
/*
keyof constraint
function findVal<T extends object,U extends keyof T>(obj:T,key:U)
{
    return obj[key];
}
console.log(findVal({'name':'Mike'},'name'));
*/
/*
class DataStore<T>
{
    private items:T[] = [];
    insert(item:T)
    {
        this.items.push(item);
    }
    remove(item:T)
    {
        this.items.splice(this.items.indexOf(item),1);  //splice() method changes the content of an array, adding new elements while removing old elements.
        // index − Index at which to start changing the array.
        // howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.
        // element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.
    }
    disp()
    {
        return [...this.items];
    }
}
let textStore = new DataStore<string>();
textStore.insert('Brendan');
textStore.insert('Emelia');
textStore.insert('Khanh');
textStore.remove('Emelia');
console.log(textStore.disp());
let numStore = new DataStore<number>();
numStore.insert(5);
numStore.insert(6);
numStore.remove(6);
console.log(numStore.disp());
let o1 ={name:'Reynold',age:27}; //Has to be stroed in a separate object and cannot be passed directly since a refernce is passed and not the actual value for objects unlike primitive types
let o2 ={name:'Poh',age:32};

let objStore = new DataStore<object>();
objStore.insert(o1);
objStore.insert(o2);
objStore.remove(o1);
console.log(objStore.disp());
*/
/*
interface Goal
{
    subject:string;
    date:Date;
    name:string;
}

// function courseGoal(subject:string,date:Date,name:string)
// {
//     return {subject,date,name};
// }
//If some operation has to be performed before returning and has the be returned as belo, Partial utility type is used
function courseGoal(subject:string,date:Date,name:string) : Goal
{
    let goals:Partial<Goal> = {};
    goals.subject = subject;
    goals.date = date;
    goals.name = name;
    return goals as Goal;
}
*/ 
//# sourceMappingURL=app.js.map