const fs = require('fs')

const args = require('yargs').argv;


fs.readFile('audit.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data, 'able to read the data successfully');
        const fileArray = data.split('\n')
         if(fileArray.indexOf(args.filename)=== -1){
            fs.writeFile(''+args.filename+'.txt',"test data",(err)=>{
                if(err){
                    console.log(err)
                }else{
                    fs.appendFileSync('audit.txt',args.filename+'\n');
                    console.log("filename appended successfully")
                }
            })
         }else{
            console.log("filename is already present")
         }
    }
})