const fs = require('fs');

const string1 = "this is from fs write3";

fs.writeFile('./files/info3.txt',string1,(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("success")
    }
})  

