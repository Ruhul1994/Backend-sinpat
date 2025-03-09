const fs = require('fs');

const bufferingRead = fs.createReadStream(`${__dirname}/text1.txt`,'utf-8');

bufferingRead.on('data',(data)=>{
    console.log(data);
})