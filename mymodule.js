const fs=require('fs');
const path=require('path');


function myModule(dir,ext,callback){
  ext ='.'+ext;
  fs.readdir(dir,(err,list)=>{
      if(err){
          return callback(err);
      }
      const filtered =list.filter(file=>{
          return path.extname(file)===ext;
      })
    return callback(null, filtered);
  })

}
module.exports=myModule