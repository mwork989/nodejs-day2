const fs = require("fs");
// async read mechanism
// console.log("hello -process1")

// fs.readFile("./files/info1.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log("File not found - process3");
//     } else {
//         console.log(data);
//     }
// })

// console.log("hello -process2")


//Synchronous methods use functions that are blocking in nature.  Blocking functions blocks the execution of the next instruction  wait for the current operation to be finished 

// sync mechanism
console.log("hello -process1")
try{
    const data = fs.readFileSync("./files/info1.txt", "utf-8");
    console.log(data)
}catch(error){
    console.log(error);
}

console.log("hello -process2")