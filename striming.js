const http = require('http');
const PORT= 8080;
const server = http.createServer((_,res)=>{
res.end('Hello server is up')
})

server.listen(PORT,()=>{
    console.log(`server is connect at: ${PORT}`);
})


// function closeServer(){
//     server.close(()=>{
//         console.log(`the server is close now.`)
//     })
// }

// setTimeout(closeServer, 2000);