const fs = require('fs');

const string1 = "Hello world from node from fs 10:51pm IST";

fs.appendFile('./files/info1.txt',string1,(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("data appended in file successfully")
    }
})  

