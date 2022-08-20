const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");
const { check } = require("yargs");
const Filename = process.argv[2];  
const filepath = './Filename.txt'
const text = 'You are awesome'
console.log("Filename:", Filename)

if(fs.existsSync(Filename)){
  console.log('File already exist try different filename')
}else{
    fs.writeFile(Filename,text,()=>{
      fs.appendFile(filepath,(" "+Filename),(err)=>{
        if (err){throw 'Append file error occurs'}
        fs.readFile(filepath,'utf-8',(err1,data)=>{
          if (err1){throw"read file error occur"}
          const names = data.split(' ')
          console.log(names)
        }) 
        console.log(`New file ${Filename} added`)
      })
    })
}
