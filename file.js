const fs = require('fs');
// const os = require('os');

// console.log(os.cpus().length);

// fs.writeFile('./text.js',"//Hello Ruhul", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file created');
//     }
// });

// fs.writeFileSync('./txt.js','// Hello Ruhul Sync');

// fs.readFile('./txt.txt', 'utf-8', (err, data)=> {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// const data = fs.readFileSync('./text.txt', 'utf-8');
// console.log(data);

// fs.appendFile('./text.txt', new Date().toDateString(), (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('data added');
//     }
// })

fs.appendFileSync('./text.js', new Date().toDateString());