const fs= require('fs')


fs.readFile(process.argv[2],"utf8",cb=(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString().split("\n").length -1)
    }
})
