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
/*
Decorator - Can be called without instantiating the class
function Log(constructor:Function)  //Decorator
{
    console.log('Logging');
    console.log(constructor);
}
@Log    //Decorator call
class Employee 
{
    constructor(public name:string)
    {

    }
    disp()
    {
        console.log('Hi, '+this.name);
    }
}

let emp = new Employee('Daniel');
emp.disp();
*/
/*
function Log(name:string)  //Decorator factories - move the parameter passing of the constructor inside through an anonymous function to enable passing of other parameters
{
    return function (constructor:Function)
    {
        console.log(name);
        console.log(constructor);
    };
}
@Log('Daniel, ')
class Employee
{
    constructor(public greet:string)
    {
        console.log(greet);
    }
}
let emp = new Employee('Nice to meet you!');
*/
/*
function Log(element:string)
{
    return function (constructor:any)
    {
        const element = document.getElementById('elm');
        let p = new constructor('Daniel');
        if(element)
        {
            element.innerHTML = p.name;
        }
    }
}
@Log('app')
class Employee 
{
    constructor(public name:string)
    {
        
    }
}
*/
/*
Different types of decorators
//Property decorator is used to describe the propery before which it is used
function Log(target:any,propertyName:string|Symbol)
{
    console.log('Property Decorator!');
    console.log(target,propertyName);
}
function Log1(target:any,name:string,property:PropertyDescriptor)
{
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(property);
}
function Log2(target:any,name:string|Symbol,property:PropertyDescriptor)
{
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(property);
}
function Log3(target:any,name:string,position:number)
{
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Price
{
    @Log
    private price:number;
    @Log1 set val(value:number)
    {
        if(this.price>0)
        {
            this.price=value;
        }
        else
        {
            throw new Error('Price should be positive');
        }
    }
    constructor(p:number)
    {
        this.price=p;
    }
    @Log2
    getPrice(@Log3 tax:number)
    {
        return this.price *(1+tax);
    }
}
*/
/*
Returning classes with decorators on classes
function Log(element:string)
{
    return function<T extends { new (...args: any[]): {name: string} }>(
        originalConstructor: T
      ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
              super();
              const element = document.getElementById('elm');
                if(element)
                {
                    element.innerHTML = this.name;
                }
            }}
    }
}
@Log('app')
class Employee 
{
    name = 'Dan';
    constructor()
    {
        
    }
}
let emp = new Employee();
*/
/*
Using an AutoBind decorator to bind this to the object in event listener
function AutoBind(_:any,_1:string,desc:PropertyDescriptor)
{
    let original_method = desc.value;
    const another_desc :PropertyDescriptor = {
        configurable:true,
        enumerable:false,
        get()
        {
            const bndFn = original_method.bind(this);
            return bndFn;
        }
    }
    return another_desc;
}
class Test
{
    constructor(public msg:string)
    {
    }
    @AutoBind
    disp()
    {
        console.log(this.msg);
    }
}
let obj = new Test('This works!');
// obj.disp();
// let b1=document.getElementById('b1');
// b1?.addEventListener('click',obj.disp.bind(obj));
//To avoid bind use a decorator that reurns a PropertDescriptor
let b1=document.getElementById('b1');
b1?.addEventListener('click',obj.disp);
*/