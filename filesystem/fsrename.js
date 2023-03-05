const fs = require("fs");

fs.rename('./files/infonew.txt','./files/info.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file renamed successfully")
    }
})