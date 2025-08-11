console.log("Hello world before async");

const func = async function() {
    console.log("Inside function before await");

    await new Promise(resolve => setTimeout(resolve, 500)); // waits 2 sec

    console.log("============Inside function after await");
}

func();

console.log("Hello world after async");

// Working of async await 

// 1) console.log("Hello world before async");
// Runs immediately

// 2) 
// func();
// invokes async function. 
// NOTE: In JS, async also runs synchronously until it encounters any async or bloackage statement

// 3) 
// console.log("Inside function before await");
// execute immediately as function invokes

// 4)
// await new Promise(resolve => setTimeout(resolve, 500)); // waits 2 sec
// await blocks the rest of the whole function

// 5)
// console.log("Hello world after async");
// conrol goes back to the main stack and this statement get executed.

// 6)
// console.log("============Inside function after await");
// Promise resolves and the rest of the function executes