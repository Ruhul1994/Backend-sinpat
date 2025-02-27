const http =  require('http');
const fs = require('fs');
const PORT = 8080;
const myServer = http.createServer((req, res) => {
    const Log = `${Date.now().toLocaleString()}:New request form ${req.url} url Received \n`;
    fs.appendFile('log.txt', Log, (err)=>{
        if(err){
            console.error("Error writing to the log file",err);
            Response.statusCode = 500;
            Response.end('Internal Server Error');
            return; 
        }
       res.end ('the request has been logged');
    })
});
myServer.listen(PORT,(err)=>{
    if(err){
        console.error("Error starting the server", err);
        return;
    }
    console.log(`Server is running of port ${PORT}`);
})

function stopServer(){
    myServer.close(()=>{
        console.log('server has been closed');
    })
}

setTimeout(stopServer, 100000);