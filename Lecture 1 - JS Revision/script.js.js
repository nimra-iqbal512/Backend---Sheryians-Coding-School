console.log('Hello');

// // Fundamentals of JavaScript

// // Array

// array --> to store multiple values
var arr = [1,2,3]
// We can also store multiple datatypes in an array i.e., string, boolan, objects, functions
var arr = [1,2,3, true, "apple", {"James": "Bond"}, function(){}];
console.log(arr);

// // forEach, map, filter, find, indexOf

// forEach Method --> function inside forEach runs for each member of array, but original array remains unmodified
var arr = [1,2,3,4]
arr.forEach(function(val){
    console.log(val+2);
})
console.log(arr);

// map Method --> NOTE: Jesy hi map() dekho to mann mai ek array bnana, or us array ka size utna hi rakhna jitna input array ka ho
// map returns array. The size of returned array is same as the size of array on which map() is exectued. The original array remains unmodified.
var arr = [1,2,3,4]
var arr2 = arr.map((val)=>{
    return val + 10;
})
console.log(arr);
console.log(arr2);

// filter method --> returns array with values that satisfies the condition. filter returns boolean value(true/false) for every element of array. The true elements are stored in the returned array.
// The original array remains unmodified.
var arr = [1,2,3,4]
// var arr3 = arr.filter(val => val >= 2)
var arr3 = arr.filter(val => {
    // return val >= 3

    // if(val >= 3) {return true;} //Here we return boolean values. Returning true will add the 'val' in 'arr3'.
    
    if(val >= 3) {return true;}
    else return false;
})
console.log(arr);
console.log(arr3);

// find method --> returns the first element that meets the condition. The original array remains unmodified. Returns undefined if no value found.
var arr = [1,2,3,4];
// var arr4 = arr.find(val => val > 2)
var arr4 = arr.find(val => {
    if(val > 30) return val;
})
console.log(arr4);

// indexOf method --> returns first index of an element in an array. Returns -1 if elememnt not found in array
var arr = [1,2,2,3,4];
// var arr4 = arr.find(val => val > 2)
var arr5 = arr.indexOf(2)
console.log(arr5);



var arr = [1,2,3,2,4]

arr.forEach(val => {
    console.log(val);
})

var ans2 = arr.map(val => {
    return val + 5;
})
console.log(ans2);

var ans3 = arr.filter(val => {
    // return val > 2;
    if(val > 2){
        // return true;
        // return val;
        return 4;

        // return 0; REMEMBER 0 means false. It does not work
    }
})
console.log(ans3);

var ans4 = arr.find(val => {
    // return val > 2;
    if (val > 2) {
        // return true;
        // return val;
        return 5;
    }
})
console.log(ans4);

// NOTE: In filter() and find(), we can return either true or val, or anything else, all works. Just the thing is that condition has to meet, no matter what return value is.


// // Object --> Values stored in key value pairs
//{} // This is a blank object
// {
//     name: "harsh"
// }

let myName = "Nimra";
let obj =  {
    name: "nimra",
    my_name: myName,
    age: 25
}

console.log(obj.name);
console.log(obj['name']);
console.log(obj["name"]);

console.log(obj.age);
console.log(obj["age"]);
obj.age = 23;   //We can still change the value of an object's property
console.log(obj.age);

// To avoid changing values in the object, we can freeze them 
Object.freeze(obj)
console.log("After freezing");
console.log(obj.age);
obj.age = 30;
console.log(obj.age);   // age is still 23, not 30


// Functions

var arr = [1,2,3]
console.log(arr.length);

// Length of fumction --> Length of the function equals to the number of parameterers it have, bcoz in JS, functions are basically objects.
// function abcd(){
function abcd(a, b, c){

}
console.log(abcd.length);

console.log(typeof abcd);
console.dir(abcd);  // console.dir() displays an intractive list of properties of a specified JS object.

// Return in Function
function abcd(){
    return 12;
}
let ans = abcd(); //Function invoke here. So from line 147, the control moves to the line 144 
console.log(ans);


// // Asyncronous JS Coding --> Isko detail mai dekhna hai abi

// // NOTE: 'Await' ko use krny k liye 'async' zruri nahi hai, 'await' ko 'async' k bager b use kr skty hain
// var blob = await fetch(`https://randomuser.me/api/`)
// var res = await blob.json();
// console.log(res);

// Synchronous: line by line code chaly
// Asynchronous: jo b code async nature ka ho,usy sidde tack mai bhj do, and agly code ko chalao jo sync nature ka ho. Jb sara sync code chal jaye tb check karo k async code complete hwa ya nahi, and agr wo complete hwa to uy main satck mai lao or chalao
console.log("Hello world before async");
const func = async function(){
    console.log("Inside function before await");
    await setInterval(() => {
        console.log("Interval");
    }, 1000);
    console.log("Inside function after await");
}
console.log(func);

console.log("Hello world after async");
