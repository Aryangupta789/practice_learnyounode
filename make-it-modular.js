const myModule=require('./mymodule')

const directory= process.argv[2];
const extension =process.argv[3];

myModule(directory,extension,(err, filteredList)=>{
  if (err){
      return console.log(err);
  }
  filteredList.forEach(File => {
      console.log(File)   
  });
})
