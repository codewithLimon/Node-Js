const { error } = require('console')
const fs=require('fs')

// fs.writeFile('demo.txt',"This is a sample txt",(err)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("successfully written")
//     }
// })

// fs.appendFile('demo.txt',". My name is kaium al limon.",(err)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("successfully appended")
//     }
// })

// fs.readFile('demo.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else console.log(data)
// })

// fs.rename('demo.txt','renamed.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else console.log("successfully renamed")
// })

fs.unlink('renamed.txt',(err)=>{
    if(err){
        console.log(err)
    }else console.log('Deleted')
})