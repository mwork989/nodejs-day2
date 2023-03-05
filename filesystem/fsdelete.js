const fs = require("fs");


fs.unlink('./files/info.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file deleted successfully")
    }
})