// Below both lines serves same functionality
// const fs = require('node:fs');
const fs = require('fs');

// - writeFile
// - appendFile
// - copyFile
// - rename
// - unlink
// - rmdir

// // -- writeFile
// // fs.writeFile(file, data[, options], callback)    //In JS, callback is a function
// fs.writeFile('hey.txt', 'hello! Sir', function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
// console.log("Before done");

// // How above code works?
// 'fs.writeFile' in Node.js is asynchronous, meaning:
// - Node starts the file creation and writing process.
// - Immediately moves on to the next line of code (after fs.writeFile)
// - When the writing finishes (or fails), the passed callback (function(err){...}) runs. print error if error, else done.
// So "done" will only be printed after the file "hey.txt" is created (or overwritten), and the text "hello! Sir," is completely written into it.
// It will not print "done" in parallel; it runs when the async operation finishes. But other code after 'fs.writeFile(...)' will execute before "done" appears


// // -- appendFile (file mai jo likha hai, wo likha rahy, aagy text append krna hai)
// fs.appendFile("hey.txt", "... you know, its Nimra", function(err){
//     if (err) {
//         console.log(err);
//     }else console.log("done");
// })


// // -- rename
// fs.rename('hey.txt', 'hello.txt', function(err){
//     if (err) {
//         console.log(err);
//     }else console.log("Renamed successfully");
// })


// -- copyFile
// fs.copyFile('hello.txt', 'new.txt', function(err){
//     if (err) throw err;
//     console.log('sucessfully copied');
// })

// // Note: In below code, agr 'copy' folder exists nahi krta ho ga, to 'new.txt' create nahi ho gi, or error ae ga. So code execute hony sy pehly, directory('copy') ka hone zruri hai.
//  // Copy k liye, New file to create ho jaye gi, pr directory nahi
// fs.copyFile('hello.txt', './copy/new.txt', function(err){
//     if (err) console.log(err.message);
//      err;
//     console.log('sucessfully copied');
    
// })


// // -- unlink (Delete a file)
// fs.unlink('hello.txt', function(err){
//     if(err) console.log(err.message);
//     else console.log("deleted");    
// })


// // -- rmdir (remove directory, only removes the directory if it contains no file)
// fs.rmdir("./copy1", function(err){
//     if (err)
//         console.log(err.message);
//     else console.log("Directory deleted");
    
// })

// // To remove directory along with files
// fs.rmdir('./copy', {recursive: true}, function(err){
//     if(err) console.log(err.message);
//     else console.log("Deleted");
// })

// // 'rmdir' has been deprecated, so we'll use 'rm' instead
// fs.rm('./copy', {recursive: true}, function(err){
//     if(err) console.log(err.message);
//     else console.log("Removed");
// })


// TODO: -make folder, -read folder, -read file

// // mkdir
// fs.mkdir('./tmp/a/apple', {recursive: true}, (err)=>{
//     if (err) {
//         console.log(err.message);
//     }else console.log("Directory created");
// })

// // readFile
// // returns raw bytes
// fs.readFile('./new.txt', (err, data)=>{
//     if(err) console.log(err.message);
//     else console.log(data);
// })

// // Pass utf-8 to get human-readable string
// fs.readFile('./new.txt', 'utf8', (err, data)=>{
//     if(err) console.log(err.message);
//     else console.log(data);
// })

// // NOTE: First run below 2 readdir as it is, then create two files (file.txt, file2.txt) inside 'apple' directory to see the results of below 2 readdir

// // readdir
// fs.readdir('./tmp', (err, files)=>{
//     if(err) console.log(err.message);
//     else console.log(files);
// })

// // {recursive: true}, It reads the contents of a directory recursively
// fs.readdir('./tmp', {recursive: true}, (err, files)=>{
//     if(err) console.log(err.message);
//     else console.log(files);
// })  


// // HTTP Protocol
const http = require('http');
const server = http.createServer((req, res)=>{
    res.end("hello worlld");
});
server.listen(3000);